import { Component ,ElementRef,OnInit, TemplateRef, ViewChild} from '@angular/core';
import { columns, configOptions } from '../utils/constants';
import { MatTableDataSource } from '@angular/material/table';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';


import { CellClickActionEvent } from '../utils/interfaces';
import {workorders} from '../utils/constants';
import { Router } from '@angular/router';
import { SchedulerComponent } from '../scheduler.component';


@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})
export class TableViewComponent implements OnInit{
  @ViewChild('openScheduleBtn') openScheduleBtn: ElementRef;
  @ViewChild('scheduleContent') scheduleContent: TemplateRef<any>;

  dialogRefSchedule: MatDialogRef<TemplateRef<any>>;


  configOptions = configOptions;
  isLoadingOrders = false;
  dataSource: MatTableDataSource<any>;
  tableData = [];


  constructor(private router: Router, private dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.getWorkOrders()
  }

  setTableData = () => {
    this.configOptions.allColumns = columns;

    this.dataSource = new MatTableDataSource(this.tableData);
    this.configOptions = {
      ...this.configOptions,
      tableHeight: 'calc(100vh - 150px)'
    };
    // this.prepareMenuActions();
  };


getWorkOrders=()=>{



  // this.tableData=workorders
 const tableOrders= workorders.map((eachOrder)=>{
  const statusCap=eachOrder.status.charAt(0).toUpperCase()+eachOrder.status.slice(1)

  const obj={...eachOrder,status:statusCap,noOfOperations:eachOrder.operations.length}
  return obj




  })
  this.tableData=tableOrders
  this.setTableData()
}

onClickConfirm=()=>{
  this.dialog.open(SchedulerComponent, {
    maxWidth: '100vw',
    maxHeight: '100vh',
    height: '100%',
    width: '100%',
    panelClass: 'full-screen-modal',
    disableClose: true,
    data: {
      formData: workorders,
      type: 'edit'
    }
  });

}

onClickCancel=()=>{
  this.dialogRefSchedule.close()

}

  onSchedule=()=>{
    

    const buttonPosition =
    this.openScheduleBtn.nativeElement.getBoundingClientRect();
  this.dialogRefSchedule = this.dialog.open(this.scheduleContent, {
    // width: '130px',
    width:'40%',

  
    // position: {
    //   top: `${buttonPosition.top + 38}px`,
    //   left: `${buttonPosition.left - 74}px`
    // },
    autoFocus: false,
    backdropClass: 'number-back-drop',
    panelClass: 'number-panel',
    hasBackdrop: true
  });
  this.dialogRefSchedule.afterClosed().subscribe((result) => {});
    console.log("schedule")
  }
  // navigateToAnotherComponent() {
  //   this.router.navigate(['/scheduler']); // Adjust the path as necessary
  // }

}


