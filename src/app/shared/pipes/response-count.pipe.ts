import { Pipe, PipeTransform } from '@angular/core';
import { responseCount } from '../../app.constants';


@Pipe({
  name: 'count'
})
export class ResponseCountPipe implements PipeTransform {
  transform(value: number): string {
    if (responseCount >= value) return value.toString();
    return `${responseCount}+`;
  }
}
