import { Component ,Inject,OnInit} from '@angular/core';
import {workorders} from '../scheduler/utils/constants'
import {resources} from '../scheduler/utils/constants'
import { Router } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent implements OnInit{

workorders=workorders
scheduledOrders=[]
resources=resources
maxDayHours=32
day=1
remainingTime=32
   headerData=[
    {name:"Mon 1",day:1},
    
    {name:"Tue 2",day:2},
    {name:"Wed 3",day:3},
    {name:"Thu 4",day:4},
    {name:"Fri 5",day:5},
    {name:"Mon 8",day:6},
    {name:"Tue 9",day:7},
    {name:"Wed 10",day:8},
    {name:"Thu 11",day:9},
    {name:"Fri 12",day:10},
]

    constructor(private router: Router,private dialog: MatDialog,    @Inject(MAT_DIALOG_DATA) public data,
  ){

    console.log("Data",data)
  }

  ngOnInit(): void {

    this.onScheduleWorkOrders()
    
  }


  onScheduleWorkOrders=()=>{

    const filteredWorkOrders=[]
for (let i=0;i<workorders.length;i++){
    if(workorders[i].status==="unassigned"){
        filteredWorkOrders.push(workorders[i])
    }
    
}


const pmo1=[]
const pmo2=[]

filteredWorkOrders.forEach((eachOrder)=>{
  if(eachOrder.type==="PM01")
    pmo1.push(eachOrder)
  else pmo2.push(eachOrder)

})

console.log("PMo1",pmo1)
console.log("Pmo2",pmo2)
const sortedWorkOrders = pmo1.sort((a, b) => {
  // Compare by priorityNumber
  const priorityComparison = a.priorityNumber.localeCompare(b.priorityNumber, undefined, { numeric: true });
  if (priorityComparison !== 0) return priorityComparison;

  // Compare by indicator if priorityNumber is equal
  const indicatorComparison = a.indicator.localeCompare(b.indicator);
  if (indicatorComparison !== 0) return indicatorComparison;

  // Compare by startDate if both priorityNumber and indicator are equal
  return new Date(a.startDate as any).getTime() - new Date(b.startDate as any).getTime();
  // filteredWorkOrders.sort((a, b) => new Date(a.startDate as any).getTime() - new Date(b.startDate as any).getTime());

});
const finalFilter=[...pmo1,...pmo2]
console.log("Final Filter",finalFilter)
let scheduleOrders=[]

//Scheduling
//Resource Mapping
const persons=[]

finalFilter.forEach((eachOrder,index)=>{
  console.log("Eachorder est",eachOrder.estimatedTime)
  const duration=parseInt(eachOrder.estimatedTime,10)
  console.log(typeof(duration))


  const allocateResources = (order, day) => {
    order.operations.forEach((operation) => {
      resources.forEach((resource) => {
        if (operation.workCenter === resource.ARBPL) {
          const operationDuration = parseInt(operation.estimatedTime, 10);
          if (operationDuration <= resource.AVAILABLE_TIME) {
            // Allocate resource to the operation
            operation.resources = resource;
            
            // Update resource available time
            resource.AVAILABLE_TIME -= operationDuration;
            
            // Add the work order and its operation to the resource's workOrders
            resource.workOrders.push({
              workOrderID: order.workOrderID,
              operationName: operation.operationName,
              day: day
            });
            
            console.log("Assigned operation", operation.operationName, "to resource", resource.NAME1);
          }
        }
      });
    });
  };



  if(duration<=this.remainingTime){
//Map Resources and push
const operations=eachOrder.operations;
eachOrder.operations.forEach((operation) => {
  console.log("operation",operation)

  // resources.forEach((resource) => {
  //   if (operation.workCenter === resource.ARBPL) {
  //     const operationDuration = parseInt(operation.estimatedTime, 10);
  //     if (operationDuration <= resource.AVAILABLE_TIME) {
  //       // Allocate resource to the operation
  //       operation.resources = resource;
        
  //       // Update resource available time
  //       resource.AVAILABLE_TIME -= operationDuration;
        
  //       // Add the work order and its operation to the resource's workOrders
  //       resource.workOrders.push({
  //         workOrderID: eachOrder.workOrderID,
  //         operationName: operation.operationName,
  //         estimatedTime: operation.estimatedTime,

  //         day: this.day
  //       });
        
  //       console.log("Assigned operation", operation.operationName, "to resource", resource.NAME1);
  //     }
  //   }
  // });

  for(let j=0;j<resources.length;j++){
    const resource=resources[j]

    if (operation.workCenter === resource.ARBPL) {
          const operationDuration = parseInt(operation.estimatedTime, 10);
          if (operationDuration <= resource.AVAILABLE_TIME) {
            // Allocate resource to the operation
            operation.resources = resource;
            
            // Update resource available time
            resource.AVAILABLE_TIME -= operationDuration;
            
            // Add the work order and its operation to the resource's workOrders
            resource.workOrders.push({
              workOrderID: eachOrder.workOrderID,
              operationName: operation.operationName,
              estimatedTime: operation.estimatedTime,
    
              day: this.day
            });
            
            console.log("Assigned operation", operation.operationName, "to resource", resource.NAME1, resource.AVAILABLE_TIME);
          break;
          }
        }
  }
  
});

// for(let i=0;i<operations.length;i++){
//   for(let j=0;j<resources.length;j++){
//     if(operations[i].workCenter===resources[j].ARBPL){
//      if( Number(operations[i].estimatedTime)<=Number(resources[j].AVAILABLE_TIME)){
// const personDetails=resources[j];

// // eachOrder.operations.resources.push(personDetails)
// eachOrder.operations[i].resources=personDetails

// console.log("op",operations[i].resources)
// resources[j].AVAILABLE_TIME=(resources[j].AVAILABLE_TIME)-(operations[i].estimatedTime)
//       }
//     }
//   }
// }
// console.log("operations",operations)

    scheduleOrders.push({...eachOrder,day:this.day})
    this.remainingTime=this.remainingTime-duration
  }else{
console.log("fail",eachOrder)
    //Splitting the work order
    const ob1={...eachOrder,estimatedTime:this.remainingTime,day:this.day}
    const siblingWoRT=duration-this.remainingTime
    this.remainingTime=0
    if(this.remainingTime===0){
      this.day=this.day+1
      this.remainingTime=this.maxDayHours
    }
    const ob2={...eachOrder,estimatedTime:siblingWoRT,day:this.day}

 // Allocate resources for ob1 and ob2 (following the same logic as above)
//  [ob1, ob2].forEach((order) => {
//   order.operations.forEach((operation) => {
//     resources.forEach((resource) => {
//       if (operation.workCenter === resource.ARBPL) {
//         const operationDuration = parseInt(operation.estimatedTime, 10);
//         if (operationDuration <= resource.AVAILABLE_TIME) {
//           operation.resources = resource;
//           resource.AVAILABLE_TIME -= operationDuration;
//           resource.workOrders.push({
//             workOrderID: order.workOrderID,
//             operationName: operation.operationName,
//             day: order.day
//           });
//           console.log("Assigned operation", operation.operationName, "to resource", resource.NAME1);
//         }
//       }
//     });
//   });
// });


allocateResources(ob1, ob1.day);
    allocateResources(ob2, ob2.day);

    scheduleOrders=[...scheduleOrders,ob1,ob2]
  }
  if(this.remainingTime===0){
    this.day=this.day+1
    this.remainingTime=this.maxDayHours
  }


})
console.log("Resources",resources)
console.log("Scheduled Orders",scheduleOrders)
this.scheduledOrders=scheduleOrders



  }
  onReschedule=()=>{}

  onClickBackArrow=()=>{
    // this.router.navigate(['/workorder/orders']);
    this.dialog.closeAll();

  }

}
