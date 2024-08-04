import {
  HighContrastModeDetector,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-3TJ5ECJH.js";
import {
  BidiModule,
  ENTER,
  Platform,
  SPACE,
  _isTestEnvironment,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  hasModifierKey,
  normalizePassiveListenerOptions
} from "./chunk-IQOLSN34.js";
import {
  CommonModule,
  DOCUMENT,
  NgIf
} from "./chunk-SJMBSDCY.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  Version,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-GMUXDIJ2.js";
import {
  Observable,
  Subject,
  startWith
} from "./chunk-ODTHBFDQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@angular/cdk/fesm2020/cdk.mjs
var VERSION = new Version("13.3.9");

// node_modules/@angular/material/fesm2020/core.mjs
var _c0 = ["*", [["mat-option"], ["ng-container"]]];
var _c1 = ["*", "mat-option, ng-container"];
var _c2 = ["*"];
function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mat-pseudo-checkbox", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
  }
}
function MatOption_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var VERSION2 = new Version("13.3.9");
var AnimationCurves = class {
};
AnimationCurves.STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
AnimationCurves.DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
AnimationCurves.ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
AnimationCurves.SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
var AnimationDurations = class {
};
AnimationDurations.COMPLEX = "375ms";
AnimationDurations.ENTERING = "225ms";
AnimationDurations.EXITING = "195ms";
function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
var MatCommonModule = class {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    this._hasDoneGlobalChecks = false;
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (this._checkIsEnabled("doctype")) {
          _checkDoctypeIsDefined(this._document);
        }
        if (this._checkIsEnabled("theme")) {
          _checkThemeIsPresent(this._document);
        }
        if (this._checkIsEnabled("version")) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */
  _checkIsEnabled(name) {
    if (_isTestEnvironment()) {
      return false;
    }
    if (typeof this._sanityChecks === "boolean") {
      return this._sanityChecks;
    }
    return !!this._sanityChecks[name];
  }
};
MatCommonModule.ɵfac = function MatCommonModule_Factory(ɵt) {
  return new (ɵt || MatCommonModule)(ɵɵinject(HighContrastModeDetector), ɵɵinject(MATERIAL_SANITY_CHECKS, 8), ɵɵinject(DOCUMENT));
};
MatCommonModule.ɵmod = ɵɵdefineNgModule({
  type: MatCommonModule,
  imports: [BidiModule],
  exports: [BidiModule]
});
MatCommonModule.ɵinj = ɵɵdefineInjector({
  imports: [[BidiModule], BidiModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCommonModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }], function() {
    return [{
      type: HighContrastModeDetector
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MATERIAL_SANITY_CHECKS]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.");
  }
}
function _checkThemeIsPresent(doc) {
  if (!doc.body || typeof getComputedStyle !== "function") {
    return;
  }
  const testElement = doc.createElement("div");
  testElement.classList.add("mat-theme-loaded-marker");
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement);
  if (computedStyle && computedStyle.display !== "none") {
    console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming");
  }
  testElement.remove();
}
function _checkCdkVersionMatch() {
  if (VERSION2.full !== VERSION.full) {
    console.warn("The Angular Material version (" + VERSION2.full + ") does not match the Angular CDK version (" + VERSION.full + ").\nPlease ensure the versions of these two packages exactly match.");
  }
}
function mixinDisabled(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disabled = false;
    }
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = coerceBooleanProperty(value);
    }
  };
}
function mixinColor(base, defaultColor) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this.defaultColor = defaultColor;
      this.color = defaultColor;
    }
    get color() {
      return this._color;
    }
    set color(value) {
      const colorPalette = value || this.defaultColor;
      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }
        this._color = colorPalette;
      }
    }
  };
}
function mixinDisableRipple(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() {
      return this._disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = coerceBooleanProperty(value);
    }
  };
}
function mixinTabIndex(base, defaultTabIndex = 0) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._tabIndex = defaultTabIndex;
      this.defaultTabIndex = defaultTabIndex;
    }
    get tabIndex() {
      return this.disabled ? -1 : this._tabIndex;
    }
    set tabIndex(value) {
      this._tabIndex = value != null ? coerceNumberProperty(value) : this.defaultTabIndex;
    }
  };
}
function mixinErrorState(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this.stateChanges = new Subject();
      this.errorState = false;
    }
    /** Updates the error state based on the provided error state matcher. */
    updateErrorState() {
      const oldState = this.errorState;
      const parent = this._parentFormGroup || this._parentForm;
      const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
      const control = this.ngControl ? this.ngControl.control : null;
      const newState = matcher.isErrorState(control, parent);
      if (newState !== oldState) {
        this.errorState = newState;
        this.stateChanges.next();
      }
    }
  };
}
function mixinInitialized(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._isInitialized = false;
      this._pendingSubscribers = [];
      this.initialized = new Observable((subscriber) => {
        if (this._isInitialized) {
          this._notifySubscriber(subscriber);
        } else {
          this._pendingSubscribers.push(subscriber);
        }
      });
    }
    /**
     * Marks the state as initialized and notifies pending subscribers. Should be called at the end
     * of ngOnInit.
     * @docs-private
     */
    _markInitialized() {
      if (this._isInitialized && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("This directive has already been marked as initialized and should not be called twice.");
      }
      this._isInitialized = true;
      this._pendingSubscribers.forEach(this._notifySubscriber);
      this._pendingSubscribers = null;
    }
    /** Emits and completes the subscriber stream (should only emit once). */
    _notifySubscriber(subscriber) {
      subscriber.next();
      subscriber.complete();
    }
  };
}
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var DateAdapter = class {
  constructor() {
    this._localeChanges = new Subject();
    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateAdapter = class extends DateAdapter {
  constructor(matDateLocale, _platform) {
    super();
    this.useUtcForDisplay = false;
    super.setLocale(matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
};
NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(ɵt) {
  return new (ɵt || NativeDateAdapter)(ɵɵinject(MAT_DATE_LOCALE, 8), ɵɵinject(Platform));
};
NativeDateAdapter.ɵprov = ɵɵdefineInjectable({
  token: NativeDateAdapter,
  factory: NativeDateAdapter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_DATE_LOCALE]
      }]
    }, {
      type: Platform
    }];
  }, null);
})();
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};
var NativeDateModule = class {
};
NativeDateModule.ɵfac = function NativeDateModule_Factory(ɵt) {
  return new (ɵt || NativeDateModule)();
};
NativeDateModule.ɵmod = ɵɵdefineNgModule({
  type: NativeDateModule
});
NativeDateModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var MatNativeDateModule = class {
};
MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(ɵt) {
  return new (ɵt || MatNativeDateModule)();
};
MatNativeDateModule.ɵmod = ɵɵdefineNgModule({
  type: MatNativeDateModule,
  imports: [NativeDateModule]
});
MatNativeDateModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: MAT_DATE_FORMATS,
    useValue: MAT_NATIVE_DATE_FORMATS
  }],
  imports: [[NativeDateModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      imports: [NativeDateModule],
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: MAT_NATIVE_DATE_FORMATS
      }]
    }]
  }], null, null);
})();
var ShowOnDirtyErrorStateMatcher = class {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
};
ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(ɵt) {
  return new (ɵt || ShowOnDirtyErrorStateMatcher)();
};
ShowOnDirtyErrorStateMatcher.ɵprov = ɵɵdefineInjectable({
  token: ShowOnDirtyErrorStateMatcher,
  factory: ShowOnDirtyErrorStateMatcher.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Injectable
  }], null, null);
})();
var ErrorStateMatcher = class {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
};
ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(ɵt) {
  return new (ɵt || ErrorStateMatcher)();
};
ErrorStateMatcher.ɵprov = ɵɵdefineInjectable({
  token: ErrorStateMatcher,
  factory: ErrorStateMatcher.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MatLine = class {
};
MatLine.ɵfac = function MatLine_Factory(ɵt) {
  return new (ɵt || MatLine)();
};
MatLine.ɵdir = ɵɵdefineDirective({
  type: MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      }
    }]
  }], null, null);
})();
function setLines(lines, element, prefix = "mat") {
  lines.changes.pipe(startWith(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
var MatLineModule = class {
};
MatLineModule.ɵfac = function MatLineModule_Factory(ɵt) {
  return new (ɵt || MatLineModule)();
};
MatLineModule.ɵmod = ɵɵdefineNgModule({
  type: MatLineModule,
  declarations: [MatLine],
  imports: [MatCommonModule],
  exports: [MatLine, MatCommonModule]
});
MatLineModule.ɵinj = ɵɵdefineInjector({
  imports: [[MatCommonModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatLine, MatCommonModule],
      declarations: [MatLine]
    }]
  }], null, null);
})();
var RippleRef = class {
  constructor(_renderer, element, config) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this.state = 3;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveEventOptions = normalizePassiveListenerOptions({
  passive: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var RippleRenderer = class {
  constructor(_target, _ngZone, elementOrElementRef, platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._isPointerDown = false;
    this._activeRipples = /* @__PURE__ */ new Set();
    this._pointerUpEventsRegistered = false;
    if (platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const duration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${duration}ms`;
    this._containerElement.appendChild(ripple);
    enforceStyleRecalculation(ripple);
    ripple.style.transform = "scale(1)";
    const rippleRef = new RippleRef(this, ripple, config);
    rippleRef.state = 0;
    this._activeRipples.add(rippleRef);
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    this._runTimeoutOutsideZone(() => {
      const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
      rippleRef.state = 1;
      if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
        rippleRef.fadeOut();
      }
    }, duration);
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    const wasActive = this._activeRipples.delete(rippleRef);
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (!wasActive) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = 2;
    this._runTimeoutOutsideZone(() => {
      rippleRef.state = 3;
      rippleEl.remove();
    }, animationConfig.exitDuration);
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._activeRipples.forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._activeRipples.forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    this._registerEvents(pointerDownEvents);
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._registerEvents(pointerUpEvents);
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      for (let i = 0; i < touches.length; i++) {
        this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._activeRipples.forEach((ripple) => {
      const isVisible = ripple.state === 1 || ripple.config.terminateOnPointerUp && ripple.state === 0;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */
  _runTimeoutOutsideZone(fn, delay = 0) {
    this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
  /** Registers event listeners for a given list of events. */
  _registerEvents(eventTypes) {
    this._ngZone.runOutsideAngular(() => {
      eventTypes.forEach((type) => {
        this._triggerElement.addEventListener(type, this, passiveEventOptions);
      });
    });
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    if (this._triggerElement) {
      pointerDownEvents.forEach((type) => {
        this._triggerElement.removeEventListener(type, this, passiveEventOptions);
      });
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.removeEventListener(type, this, passiveEventOptions);
        });
      }
    }
  }
};
function enforceStyleRecalculation(element) {
  window.getComputedStyle(element).getPropertyValue("opacity");
}
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var MatRipple = class {
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    this.radius = 0;
    this._disabled = false;
    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
};
MatRipple.ɵfac = function MatRipple_Factory(ɵt) {
  return new (ɵt || MatRipple)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatRipple.ɵdir = ɵɵdefineDirective({
  type: MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    color: [0, "matRippleColor", "color"],
    unbounded: [0, "matRippleUnbounded", "unbounded"],
    centered: [0, "matRippleCentered", "centered"],
    radius: [0, "matRippleRadius", "radius"],
    animation: [0, "matRippleAnimation", "animation"],
    disabled: [0, "matRippleDisabled", "disabled"],
    trigger: [0, "matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Platform
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();
var MatRippleModule = class {
};
MatRippleModule.ɵfac = function MatRippleModule_Factory(ɵt) {
  return new (ɵt || MatRippleModule)();
};
MatRippleModule.ɵmod = ɵɵdefineNgModule({
  type: MatRippleModule,
  declarations: [MatRipple],
  imports: [MatCommonModule],
  exports: [MatRipple, MatCommonModule]
});
MatRippleModule.ɵinj = ɵɵdefineInjector({
  imports: [[MatCommonModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatRipple, MatCommonModule],
      declarations: [MatRipple]
    }]
  }], null, null);
})();
var MatPseudoCheckbox = class {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    this.state = "unchecked";
    this.disabled = false;
  }
};
MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(ɵt) {
  return new (ɵt || MatPseudoCheckbox)(ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatPseudoCheckbox.ɵcmp = ɵɵdefineComponent({
  type: MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 8,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled"
  },
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {
  },
  styles: ['.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"'
      },
      styles: ['.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n']
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var MatPseudoCheckboxModule = class {
};
MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(ɵt) {
  return new (ɵt || MatPseudoCheckboxModule)();
};
MatPseudoCheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: MatPseudoCheckboxModule,
  declarations: [MatPseudoCheckbox],
  imports: [MatCommonModule],
  exports: [MatPseudoCheckbox]
});
MatPseudoCheckboxModule.ɵinj = ɵɵdefineInjector({
  imports: [[MatCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatPseudoCheckbox],
      declarations: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var _MatOptgroupMixinBase = mixinDisabled(class {
});
var _uniqueOptgroupIdCounter = 0;
var _MatOptgroupBase = class extends _MatOptgroupMixinBase {
  constructor(parent) {
    super();
    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = parent?.inertGroups ?? false;
  }
};
_MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(ɵt) {
  return new (ɵt || _MatOptgroupBase)(ɵɵdirectiveInject(MAT_OPTION_PARENT_COMPONENT, 8));
};
_MatOptgroupBase.ɵdir = ɵɵdefineDirective({
  type: _MatOptgroupBase,
  inputs: {
    label: "label"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatOptgroupBase, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }, {
        type: Optional
      }]
    }];
  }, {
    label: [{
      type: Input
    }]
  });
})();
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class extends _MatOptgroupBase {
};
MatOptgroup.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatOptgroup_BaseFactory;
  return function MatOptgroup_Factory(ɵt) {
    return (ɵMatOptgroup_BaseFactory || (ɵMatOptgroup_BaseFactory = ɵɵgetInheritedFactory(MatOptgroup)))(ɵt || MatOptgroup);
  };
})();
MatOptgroup.ɵcmp = ɵɵdefineComponent({
  type: MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-optgroup"],
  hostVars: 5,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      ɵɵclassProp("mat-optgroup-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matOptgroup"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_OPTGROUP,
    useExisting: MatOptgroup
  }]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 2,
  consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵelementStart(0, "span", 0);
      ɵɵtext(1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵprojection(3, 1);
    }
    if (rf & 2) {
      ɵɵproperty("id", ctx._labelId);
      ɵɵadvance();
      ɵɵtextInterpolate1("", ctx.label, " ");
    }
  },
  styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: ["disabled"],
      host: {
        "class": "mat-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId",
        "[class.mat-optgroup-disabled]": "disabled"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: '<span class="mat-optgroup-label" aria-hidden="true" [id]="_labelId">{{ label }} <ng-content></ng-content></span>\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
    }]
  }], null, null);
})();
var _uniqueIdCounter = 0;
var MatOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var _MatOptionBase = class {
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = "";
    this.id = `mat-option-${_uniqueIdCounter++}`;
    this.onSelectionChange = new EventEmitter();
    this._stateChanges = new Subject();
  }
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._getHostElement().textContent || "").trim();
  }
  /** Selects the option. */
  select() {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }
  /** Deselects the option. */
  deselect() {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /**
   * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
   * attribute from single-selection, unselected options. Including the `aria-selected="false"`
   * attributes adds a significant amount of noise to screen-reader users without providing useful
   * information.
   */
  _getAriaSelected() {
    return this.selected || (this.multiple ? false : null);
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        this._mostRecentViewValue = viewValue;
        this._stateChanges.next();
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
};
_MatOptionBase.ɵfac = function _MatOptionBase_Factory(ɵt) {
  ɵɵinvalidFactory();
};
_MatOptionBase.ɵdir = ɵɵdefineDirective({
  type: _MatOptionBase,
  inputs: {
    value: "value",
    id: "id",
    disabled: "disabled"
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatOptionBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0
    }, {
      type: _MatOptgroupBase
    }];
  }, {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onSelectionChange: [{
      type: Output
    }]
  });
})();
var MatOption = class extends _MatOptionBase {
  constructor(element, changeDetectorRef, parent, group) {
    super(element, changeDetectorRef, parent, group);
  }
};
MatOption.ɵfac = function MatOption_Factory(ɵt) {
  return new (ɵt || MatOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_OPTION_PARENT_COMPONENT, 8), ɵɵdirectiveInject(MAT_OPTGROUP, 8));
};
MatOption.ɵcmp = ɵɵdefineComponent({
  type: MatOption,
  selectors: [["mat-option"]],
  hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
  hostVars: 12,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
      ɵɵclassProp("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    }
  },
  exportAs: ["matOption"],
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 4,
  consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
      ɵɵelementStart(1, "span", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, MatOption_span_3_Template, 2, 1, "span", 2);
      ɵɵelement(4, "div", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.multiple);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.group && ctx.group._inert);
      ɵɵadvance();
      ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  dependencies: [MatPseudoCheckbox, NgIf, MatRipple],
  styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[attr.tabindex]": "_getTabIndex()",
        "[class.mat-selected]": "selected",
        "[class.mat-option-multiple]": "multiple",
        "[class.mat-active]": "active",
        "[id]": "id",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[class.mat-option-disabled]": "disabled",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-option mat-focus-indicator"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<mat-pseudo-checkbox *ngIf="multiple" class="mat-option-pseudo-checkbox"
    [state]="selected ? 'checked' : 'unchecked'" [disabled]="disabled"></mat-pseudo-checkbox>

<span class="mat-option-text"><ng-content></ng-content></span>

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
<span class="cdk-visually-hidden" *ngIf="group && group._inert">({{ group.label }})</span>

<div class="mat-option-ripple" mat-ripple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }]
    }, {
      type: MatOptgroup,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_OPTGROUP]
      }]
    }];
  }, null);
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}
var MatOptionModule = class {
};
MatOptionModule.ɵfac = function MatOptionModule_Factory(ɵt) {
  return new (ɵt || MatOptionModule)();
};
MatOptionModule.ɵmod = ɵɵdefineNgModule({
  type: MatOptionModule,
  declarations: [MatOption, MatOptgroup],
  imports: [MatRippleModule, CommonModule, MatCommonModule, MatPseudoCheckboxModule],
  exports: [MatOption, MatOptgroup]
});
MatOptionModule.ɵinj = ɵɵdefineInjector({
  imports: [[MatRippleModule, CommonModule, MatCommonModule, MatPseudoCheckboxModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, CommonModule, MatCommonModule, MatPseudoCheckboxModule],
      exports: [MatOption, MatOptgroup],
      declarations: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();

export {
  AnimationCurves,
  AnimationDurations,
  MatCommonModule,
  mixinDisabled,
  mixinColor,
  mixinDisableRipple,
  mixinTabIndex,
  mixinErrorState,
  mixinInitialized,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatNativeDateModule,
  ErrorStateMatcher,
  MatLine,
  setLines,
  MatLineModule,
  RippleRenderer,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRipple,
  MatRippleModule,
  MatPseudoCheckbox,
  MatPseudoCheckboxModule,
  MAT_OPTION_PARENT_COMPONENT,
  MAT_OPTGROUP,
  MatOptionSelectionChange,
  MatOption,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
  MatOptionModule
};
/*! Bundled license information:

@angular/cdk/fesm2020/cdk.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

@angular/material/fesm2020/core.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-W44CVE2C.js.map
