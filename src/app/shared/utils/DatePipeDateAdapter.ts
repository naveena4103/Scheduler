import { Platform } from '@angular/cdk/platform';
import { DatePipe, formatDate } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import {
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
  MatDateFormats,
  NativeDateAdapter
} from '@angular/material/core';

@Injectable()
export class DatePipeDateAdapter extends NativeDateAdapter {
  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: string,
    platform: Platform
  ) {
    super(matDateLocale, platform);
  }

  // This function creates a custom `MatDateFormats` object that
  // defaults all values to `MAT_NATIVE_DATE_FORMATS` except for
  // the `display.dateInput` property, which gets set by the user
  // via this `displayFormat` parameter. This parameter ultimately
  // gets passed to the Angular `DatePipe` in the `format()`
  // function above, so it can be any format value that `DatePipe`
  // accepts:
  //    https://angular.io/api/common/DatePipe#usage-notes
  static createCustomMatDateFormats(displayFormat: string): MatDateFormats {
    const customDateInputFormats: MatDateFormats = {
      ...MAT_NATIVE_DATE_FORMATS,
      display: {
        ...MAT_NATIVE_DATE_FORMATS.display,
        dateInput: displayFormat
      }
    };

    return customDateInputFormats;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  override format(date: Date, displayFormat: any): string {
    // Check if displayFormat is a string and contains a date format
    if (typeof displayFormat === 'string') {
      // Format the date using Angular's formatDate function
      return formatDate(date, displayFormat, this.locale);
    }
    
    // Default to the parent class format() if no custom format string is given
    return super.format(date, displayFormat);
  }
}
