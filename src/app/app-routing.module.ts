import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { TableViewComponent } from './components/scheduler/table-view/table-view.component';

export const routes: Routes = [
  
  {
    path: "",
    redirectTo: "master-configuration",
    pathMatch: "full",
  },
  {
    path: "dashboard/scheduler",
    component: TableViewComponent
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
