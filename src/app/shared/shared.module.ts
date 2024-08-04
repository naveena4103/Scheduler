import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CustomPaginationControlsComponent } from './components/custom-pagination-controls/custom-pagination-controls.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { DropDownFilterPipe } from './pipes/dropdown-filter.pipe';
import { IntegrationAlertModalComponent } from './components/integration-alert-modal/integration-alert-modal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { DateTimePipe } from './pipes/date-time.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxSpinnerModule } from 'ngx-spinner';
import {TogglePasswordDirective} from './directives/passwordVisibility.directive';

import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { PermissionsRevokeInfoModalComponent } from './components/permissions-revoke-info-modal/permissions-revoke-info-modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BackgroundComponent } from './components/background/background.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
// import { FilterComponent } from './components/filter/filter.component';
import { MatCardModule } from '@angular/material/card';
// import { FilterSidePanelComponent } from './components/filter-side-panel/filter-side-panel.component';
import { ResponseCountPipe } from './pipes/response-count.pipe';
import { LazyLoadContainerComponent } from './components/lazy-load-container/lazy-load-container.component';
import { RemoveDecimalPipe } from './pipes/remove-decimal.pipe';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { ColorPickerCustomComponent } from './components/color-picker-custom/color-picker-custom.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    CustomPaginationControlsComponent,
    TimeAgoPipe,
    DropDownFilterPipe,
    DateTimePipe,
    HeaderComponent,
    AccessDeniedComponent,
    PermissionsRevokeInfoModalComponent,
    BackgroundComponent,
    SvgIconComponent,
    ResponseCountPipe,
    LazyLoadContainerComponent,
    RemoveDecimalPipe,
    IntegrationAlertModalComponent,
    NavbarComponent,
    CustomModalComponent,
    ColorPickerCustomComponent,
    DeleteModalComponent,
    TogglePasswordDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    CommonModule,
    DragDropModule,
    OverlayModule,
    MatDialogModule,
    MatToolbarModule,
    MatRadioModule,
    MatIconModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatSelectModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    BreadcrumbModule,
    NgxSpinnerModule,
    RouterModule,
  ],
  exports: [
    CustomPaginationControlsComponent,
    TimeAgoPipe,
    DropDownFilterPipe,
    DateTimePipe,
    ResponseCountPipe,
    HeaderComponent,
    BackgroundComponent,
    SvgIconComponent,
    LazyLoadContainerComponent,
    NavbarComponent,
    RemoveDecimalPipe,
    IntegrationAlertModalComponent,
    CustomModalComponent,
    DeleteModalComponent,
    ColorPickerCustomComponent,
    TogglePasswordDirective
  ],
  providers: [DatePipe]
})
export class SharedModule {}
