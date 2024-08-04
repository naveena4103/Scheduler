/* eslint-disable @typescript-eslint/naming-convention */
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';

import { filter, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ImageUtils } from '../../utils/imageUtils';
import { Buffer } from 'buffer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('collabButton', { read: ElementRef })
  public collabButtonRef: ElementRef;
  @Output() sideNavToggle = new EventEmitter();
  @Output() outsideClickTrigger = new EventEmitter();
  @Output() signOutHandler = new EventEmitter();

  headerTitle$: Observable<string>;

  @Input() set selectedMenu(menu) {
    this.headerService.setHeaderTitle(menu);
  }

  @Input() set menuOpenClose(state) {
    this.menustate = state;
  }

  unreadMessageCount: number;
  slackVerification$: Observable<any>;
  msTeamsSignIn$: Observable<any>;

  userInfo$: Observable<any>;
  audio: any;
  eventSource: any;
  tenantLogo: any;
  collaborationType = 'none';
  isOpen = false;
  menustate;
  isButtonDisabled = true
  isLoading = false
  private collabWindowSubscription: Subscription;
  private unreadCountSubscription: Subscription;

  constructor(
    public uploadDialog: MatDialog,
    private headerService: HeaderService,
    public dialog: MatDialog,
    private cdrf: ChangeDetectorRef,
    private router: Router,
    private imageUtils: ImageUtils,
  ) { }

  openDialog(): void { }



  ngOnInit() {
    this.headerTitle$ = this.headerService.headerTitleAction$;

   
  }

  playIncomingCallAudio() {
    this.audio = new Audio('assets/audio/calltone.mp3');
    this.audio
      .play()
      .then(() => { })
      .catch((error:any) => {
        // show error
      });

    this.audio.loop = true;
  }

  openSidenav() {
    this.sideNavToggle.emit();
  }

  closeSidenav() {
    this.outsideClickTrigger.emit();
  }

  ngOnDestroy(): void {
    if (this.collabWindowSubscription) {
      this.collabWindowSubscription.unsubscribe();
    }
    if (this.unreadCountSubscription) {
      this.unreadCountSubscription.unsubscribe();
    }
  }

  signout() {
    this.signOutHandler.emit();
    this.isOpen = false;

    sessionStorage.clear();
  }

  profileImage(buffer: any) {
    return this.imageUtils.getImageSrc(Buffer.from(buffer).toString());
  }

  userSettings() {
    this.isOpen = false;
  }

}
