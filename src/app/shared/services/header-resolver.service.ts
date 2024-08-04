import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class headerResolver implements Resolve<any> {
  constructor(private headerService: HeaderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

      const title = route.data['componentData']?.title
      if (title){
        this.headerService.setHeaderTitle(title);
      }

    this.headerService.setHeaderTitle(title)
  }
}
