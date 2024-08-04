import { Injectable } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbmanagerService {

  constructor(private breadCrumbService:BreadcrumbService) { 


  }

  setBreadcrumb(url:string,skip:boolean){
    this.breadCrumbService.set(url,{skip})

  }
}
