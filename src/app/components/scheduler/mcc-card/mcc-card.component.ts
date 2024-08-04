import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mcc-card',
  templateUrl: './mcc-card.component.html',
  styleUrl: './mcc-card.component.scss'
})
export class MccCardComponent {
  @Input() workOrder:any;
  // @Output() assign = new EventEmitter();
  isDropdownOpen = false;
  
  // permissions: Permission[];
  // readonly perms = perms;

  constructor(
  
  ) {}

  ngOnInit() {
    // this.userInfo$ = this.loginService.loggedInUserInfo$.pipe(
    //   tap(({ permissions = [] }) => (this.permissions = permissions))
    // );
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  getImageSrc = (source: string) => {
    if (source) {
      const base64Image = 'data:image/jpeg;base64,' + source;
      // return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
    }
  };
  // onAssignPress = (workOrder) => {
  //   if (this.checkUserHasPermission('ASSIGN_WORK_ORDERS')) {
  //     this.assign.emit(workOrder);
  //   }
  // };

}
