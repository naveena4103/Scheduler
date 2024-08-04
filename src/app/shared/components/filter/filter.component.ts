/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/no-output-native */
/* eslint-disable @typescript-eslint/member-ordering */
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FilterSidePanelComponent } from '../filter-side-panel/filter-side-panel.component';
import { DatePipeDateAdapter } from '../../utils/DatePipeDateAdapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatOption
} from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  skip,
  startWith,
  takeUntil,
  tap
} from 'rxjs/operators';
import { format } from 'date-fns';
import { dateFormat5, dateFormat6 } from '../../../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: DatePipeDateAdapter },
    {
      provide: MAT_DATE_FORMATS,
      // Pass any format string you would pass to DatePipe
      useValue: DatePipeDateAdapter.createCustomMatDateFormats(dateFormat6)
    }
  ]
})
export class FilterComponent implements OnInit, OnChanges, OnDestroy {
  readonly FilterSidePanelComponent = FilterSidePanelComponent;
  @Input() set json(json) {
    if (json?.length) {
      this.assignmentTypeIndex = json
        .map((item) => item.type)
        .indexOf('assignmentType');
      this.plantTypeIndex = json.map((item) => item.column).indexOf('plant');
      this._json = json;
      this.json$.next(json);
      if (json[this.assignmentTypeIndex]?.value?.length) {
        this.assigneeTypeControl.patchValue(
          json[this.assignmentTypeIndex].value[0].type
        );
      }
      this.isLoading$.next(false);
    }
  }

  get json() {
    return this._json;
  }

  @Input() moduleName;

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  @Output()
  apply: EventEmitter<any> = new EventEmitter();

  @Output()
  reset: EventEmitter<any> = new EventEmitter();

  ghostLoading = new Array(5).fill(0).map((v, i) => i);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  assignTypes = ['plant', 'userGroup', 'user'];
  assigneeType = 'plant';
  assignmentTypeIndex = -1;
  plantTypeIndex = -1;
  filteredAssignedToCount = 0;
  assigneeTypeControl = new FormControl(this.getAssignedToTypeStartWith());
  searchInput = new FormControl('');
  filteredAssignedToData$: Observable<any[]>;
  json$ = new BehaviorSubject([]);
  private _json = [];
  private onDestroy$ = new Subject();

  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['json'] && changes['json'].currentValue) {
      this.json = changes['json'].currentValue;
    }
  }

  ngOnInit(): void {
    if (this.moduleName === 'rounds') {
      this.assignTypes = ['plant', 'userGroup', 'user', 'position', 'unit'];
    }
    this.assigneeTypeControl.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        startWith(this.getAssignedToTypeStartWith()),
        tap((assigneeType) => {
          this.assigneeType = assigneeType;
          this.searchInput.patchValue('');
        })
      )
      .subscribe();
    this.filteredAssignedToData$ = combineLatest([
      this.searchInput.valueChanges.pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged()
      ),
      this.json$,
      this.assigneeTypeControl.valueChanges.pipe(
        startWith(this.getAssignedToTypeStartWith())
      )
    ]).pipe(
      map(([search, json, assigneeType]) => {
        this.assigneeType = assigneeType;
        search = search.toLowerCase();
        if (this.assigneeType === 'user') {
          return (
            json[this.assignmentTypeIndex]?.items.filter(
              (item) =>
                item.type === 'user' &&
                item.value?.fullName?.toLowerCase().includes(search)
            ) || []
          );
        }
        if (this.assigneeType === 'userGroup') {
          return (
            json[this.assignmentTypeIndex]?.items.filter(
              (item) =>
                item.type === 'userGroup' &&
                item.value?.name?.toLowerCase().includes(search)
            ) || []
          );
        }
        if (this.assigneeType === 'position') {
          return (
            json[this.assignmentTypeIndex]?.items.filter(
              (item) =>
                item.type === 'position' &&
                item.value?.name?.toLowerCase().includes(search)
            ) || []
          );
        }
        if (this.assigneeType === 'unit') {
          return (
            json[this.assignmentTypeIndex]?.items.filter(
              (item) =>
                item.type === 'unit' &&
                item.value?.name?.toLowerCase().includes(search)
            ) || []
          );
        }

        if (this.assigneeType === 'plant') {
          return (
            json[this.plantTypeIndex]?.items.filter((item) =>
              item?.toLowerCase().includes(search)
            ) || []
          ).map((item) => ({ type: 'plant', plant: item }));
        }
      }),
      tap((data) => (this.filteredAssignedToCount = data.length))
    );
  }

  getAssignedToTypeStartWith() {
    return this.assignmentTypeIndex >= 0 &&
      this.json[this.assignmentTypeIndex]?.value?.length
      ? this.json[this.assignmentTypeIndex].value[0].type
      : 'plant';
  }

  closeFilter() {
    this.close.emit();
  }

  applyFilter() {
    this.apply.emit(this.json);
  }
  resetFilter() {
    for (const item of this.json) {
      item.value = '';
      if (item?.hasOwnProperty('startDate')) {
        item.startDate = '';
      }
      if (item?.hasOwnProperty('endDate')) {
        item.endDate = '';
      }
      if (item.itemValue) {
        item.itemValue = '';
      }
    }
    this.reset.emit(this.json);
    const routeToNavigate = this.router.url?.split('?')?.[0];
    if (routeToNavigate) this.router.navigate([`${routeToNavigate}`]);
  }

  checkState() {
    let status = true;
    for (const item of this.json) {
      if (item.value || item.itemValue) {
        if (typeof item.value === 'string') status = false;
        else if (typeof item.value === 'object' && item.value.length !== 0)
          status = false;
      }
    }
    return status;
  }

  dateRangeSelect(item: any) {
    if (item.startDate && item.endDate) {
      const startDate = this.formatDate(item.startDate) + 'T00:00:00.000Z';
      const endDate = this.formatDate(item.endDate) + 'T23:59:59.999Z';
      item.value = [startDate, endDate];
    } else {
      item.value = [];
    }
  }

  closeSelect(select: MatSelect): void {
    select.openedChange.subscribe((isOpened: boolean) => {
      if (
        !isOpened &&
        (select.value === null ||
          (this.isOptionArrayEmpty(select.value) && !!select?.value?.length))
      ) {
        this.resetSelector();
      }
    });
    select.close();
  }

  resetSelector(): void {
    for (const item of this.json) {
      if (item.itemValue) {
        item.itemValue = '';
      }
    }
    this.reset.emit(this.json);
  }

  isOptionArrayEmpty(options: MatOption[] | any[]): boolean {
    return Array.isArray(options) && options.length === 0;
  }

  compareAssignedToObjects(o1: any, o2: any): boolean {
    if (o1?.type === 'userGroup') {
      return o1?.value?.id === o2?.value?.id && o1?.value?.id !== undefined;
    }
    if (o1?.type === 'user') {
      return (
        o1?.value?.email === o2?.value?.email && o1?.value?.email !== undefined
      );
    }
    if (o1?.type === 'plant') {
      return o1?.plant === o2?.plant && o1?.plant !== undefined;
    }
    if (o1?.type === 'unit' || o1?.type === 'position') {
      return (
        o1?.value?.name === o2?.value?.name && o1?.value?.name !== undefined
      );
    }
    return null
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }

  private formatDate = (date): string => format(new Date(date), dateFormat5);
}
