import { Component,Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-common-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 @Input("menus") menus
 @Input ("showSearch") showSearch=false
  searchedMenus = []
  searchMenu: FormControl;
  constructor() {}
  ngOnInit(): void {
    this.searchedMenus = [...this.menus];
    this.searchMenu = new FormControl('');
    this.searchMenu.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.filterMenus();
        })
      )
      .subscribe();
  }

  filterMenus() {
    // 'i' flag for case-insensitive search
    const regex = new RegExp(this.searchMenu.value, 'i');
    this.searchedMenus = this.menus.filter((menu) => {
      // Check if menu title matches the input
      if (regex.test(menu.title)) return true;

      // Check if any subPage title matches the input
      if (menu.subPages) {
        return menu.subPages.some((subPage) => regex.test(subPage.title));
      }

      return false;
    });
  }

  checkUserHasSubMenusPermissions(subPages, permission) {
    if (subPages?.length) return true;
    return false;
  }
}
