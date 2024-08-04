import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDecimal'
})
export class RemoveDecimalPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\.\d+$/, '');
  }
}
