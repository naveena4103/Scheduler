import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DynamictableModule } from '@innovapptive.com/dynamictable';
import { MatListModule } from '@angular/material/list';
import { ErrorHandlerModule } from './shared/error-handler/error-handler.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ToastModule } from './shared/toast';
import { MatIconModule } from '@angular/material/icon';
import { HighchartsChartModule } from 'highcharts-angular';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { TableViewComponent } from './components/scheduler/table-view/table-view.component';
import { ChartComponentComponent } from './components/scheduler/chart-component/chart-component.component';





@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    TableViewComponent,
    ChartComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSidenavModule,
    NgxSkeletonLoaderModule,
    DynamictableModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    ErrorHandlerModule,
    HighchartsChartModule,
    StoreModule.forRoot({}, {}),
    ToastModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
