import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter, mergeMap, take, tap } from "rxjs/operators";
import { defaultLanguage, routingUrls } from "./app.constants";
import { Observable, combineLatest } from "rxjs";
import { ImageUtils } from "./shared/utils/imageUtils";
import { PermissionsRevokeInfoModalComponent } from "./shared/components/permissions-revoke-info-modal/permissions-revoke-info-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { debounce } from "./shared/utils/debounceMethod";
import { Tenant, UserInfo } from './interfaces';
import { Buffer } from 'buffer';
import { CommonService } from "./shared/services/common.service";
const {dashboard, workOrder, settings, tenantManagement,masterConfiguration } = routingUrls;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('falseClick') falseClick: ElementRef<HTMLElement>;

  menus = [
    {
      title: dashboard.title,
      url: dashboard.url,
      imageName: 'dashboard',
      showSubMenu: true,
      subPages: [
        {
          title: 'Reports',
          url: '/dashboard/reports'
        },
        {
          title : 'Archive',
          url : '/dashboard/archived'
        },
        {
          title : 'Scheduler',
          url : '/dashboard/scheduler'
        }
      ],
      disable: false
    },
    {
      title: workOrder.title,
      url: workOrder.url,
      imageName: "work-instructions",
      showSubMenu: true,
      subPages: [
        {
          title: 'Work Orders',
          url: '/workorder/create-work-order'
        },
        {
          title: "Issues",
          url: "/workorder/issues",
        }
      ],
      disable: false,
    },
     {
      title:tenantManagement.title,
      url:tenantManagement.url,
      disable: true           //set false on sso login as per permission
    },

    {
      title: settings.title,
      url: settings.url,
      imageName: 'settings',
      showSubMenu: true,
      subPages: [
        {
          title: 'General',
          url: '/settings/general'
        },
        {
          title: 'User Preferences',
          url: '/settings/user-preferences'
        }
      ],
      disable: false
    },
    {
      title: masterConfiguration.title,
      url: masterConfiguration.url,
      imageName: 'master-configuration',
      showSubMenu: true,
      subPages: [
        {
          title: 'Global Response',
          url: '/master-configuration/global-response'
        },
        {
          title: 'Risk Matrix',
          url: '/master-configuration/risk-matrix'
        },
        {
          title: 'Unit of Measurement',
          url: '/master-configuration/unit-of-measurement'
        },
        {
          title: 'Alerts',
          url: '/master-configuration/alerts'
        }
      ],
      disable: false
    }     
  ];
  loggedIn = false;
  dark = false;
  sidebar: boolean;
  currentRouteUrl: string;
  selectedMenu: string;

  eventSourceCollaboration: any;
  eventSourceJitsi: any;
  eventSourceUpdateUserPresence: any;

  menuHasSubMenu = {};
  isNavigated = false;
  isUserAuthenticated:boolean;
  menuOpenClose = false;
  isMenuOpenOnItemClick = false;
  hoverMenuTimer: any;
  displayLoader$: Observable<boolean>;
  displayLoader: boolean;
  isShellUser:boolean;

  isUserOnline = false;
  
  userInfo$: Observable<UserInfo>;

  readonly appVersion = '8.08';


  constructor(
    private commonService: CommonService,
    private router: Router,
    private cdrf: ChangeDetectorRef,
    private dialog: MatDialog,
    private imageUtils:ImageUtils
  ) {}

  @HostListener("document:mousemove", ["$event"])
  @debounce()
  onMouseMove(e) {
    // this.updateUserPresence();
  }

  @HostListener("click", ["$event.target"])
  @debounce()
  onClick(e) {
    // this.updateUserPresence();
  }

  @HostListener("window:keyup", ["$event"])
  @debounce()
  keyEvent(event: KeyboardEvent) {
    // this.updateUserPresence();
  }

  @HostListener("window:unload", ["$event"])
  unloadHandler(event) {
    // this.removeUserPresence();
  }

  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHander(event) {
    // return false;
    // return false; will trigger a confirmation alert asking if you really want to close the application tab/window...
  }

  onSignOut = () => {
    // this.removeUserPresence();
  };

   ngOnInit() {
    this.isUserAuthenticated=false
    if(sessionStorage.getItem('isShellUser')==='false'){
      this.isShellUser=false;
 


     

  
    }
    else{
      this.isShellUser=true
    
      const storedAuthState = sessionStorage.getItem('isUserAuthenticated');
      this.isUserAuthenticated = storedAuthState ? JSON.parse(storedAuthState) : false;
  
      this.isUserAuthenticated=true
     
  }
  this.router.events
  .pipe(filter((event) => event instanceof NavigationEnd))
  .subscribe((event: NavigationEnd) => {
    this.currentRouteUrl = event.urlAfterRedirects;
    const splitedUrl =  this.currentRouteUrl.split('?')[0];
    const selectedmenu = this.findUrlTitle(splitedUrl)
    this.selectedMenu = selectedmenu?.title;
    this.commonService.setCurrentRouteUrl(this.currentRouteUrl);
    this.menus = this.toggleSubMenu(this.menus, this.currentRouteUrl);
  });
this.commonService.setTranslateLanguage(defaultLanguage);
this.commonService.displayPermissionRevoke$.subscribe((display) => {
  if (display && !this.commonService.getPermisionRevokeModalStatus()) {
    this.commonService.setPermisionRevokeModalStatus(true);
    const dialogRef = this.dialog.open(
      PermissionsRevokeInfoModalComponent,
      {
        disableClose: true,
      }
    );
    dialogRef.afterClosed().subscribe(() => {
      this.commonService.setPermisionRevokeModalStatus(false);
    });
  }
});


}
  ngAfterViewChecked(): void {
    this.cdrf.detectChanges();
  }

  selectedListElement(title) {
    this.menuOpenClose = false;
    this.selectedMenu = title;
  }

  toggleMenu() {
    this.menuOpenClose = !this.menuOpenClose;
  }

  getImage = (imageName: string, active: boolean) =>
    active ? `icon-${imageName}-white` : `icon-${imageName}-gray`;
  closeSideNav() {
    this.menuOpenClose = false;
  }
  triggerFalseClick() {
    const el: HTMLElement = this.falseClick.nativeElement;
    el.click();
  }
  openMenuOnMouseEnter() {
    this.triggerFalseClick();
    if (!this.isMenuOpenOnItemClick) {
      clearTimeout(this.hoverMenuTimer);
      this.hoverMenuTimer = setTimeout(() => {
        this.menuOpenClose = true;
        this.isMenuOpenOnItemClick = true;
      }, 250);
    }
  }

  closeMenuOnMouseLeave() {
    clearTimeout(this.hoverMenuTimer);
    this.hoverMenuTimer = setTimeout(() => {
      this.menuOpenClose = false;
      this.isMenuOpenOnItemClick = false;
    }, 250);
  }

  toggleSubMenu(menus: any, currentRouteUrl: string) {
    return menus.map((menuItem) => {
      let showSubMenu = false;
      if (
        menuItem.subPages !== null &&
        currentRouteUrl.indexOf(menuItem.url) === 0
      ) {
        showSubMenu = true;
      }
      return { ...menuItem, showSubMenu };
    });
  }
  findUrlTitle (urlToCheck) {
    for (const menu of this.menus) {
      if (menu.subPages) {
        const subPage = menu.subPages.find(sub => sub.url === urlToCheck);
        if (subPage) {
          return subPage;
        }
      }
    }
    return null; 
  };
  ngOnDestroy() {
  
  }
}
