import {
  MatCommonModule,
  mixinColor
} from "./chunk-W44CVE2C.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-JJ4ENG2O.js";
import {
  CdkObserveContent,
  ObserversModule
} from "./chunk-3TJ5ECJH.js";
import {
  Directionality,
  Platform,
  coerceBooleanProperty
} from "./chunk-IQOLSN34.js";
import {
  CommonModule,
  NgIf,
  NgSwitch,
  NgSwitchCase
} from "./chunk-SJMBSDCY.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-GMUXDIJ2.js";
import {
  fromEvent,
  merge
} from "./chunk-TQO6VFQJ.js";
import {
  Subject,
  startWith,
  take,
  takeUntil
} from "./chunk-ODTHBFDQ.js";

// node_modules/@angular/material/fesm2020/form-field.mjs
var _c0 = ["connectionContainer"];
var _c1 = ["inputContainer"];
var _c2 = ["label"];
var _c3 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
var _c4 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function MatFormField_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 15);
    ɵɵelement(2, "div", 16)(3, "div", 17)(4, "div", 18);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 19);
    ɵɵelement(6, "div", 16)(7, "div", 17)(8, "div", 18);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
}
function MatFormField_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵlistener("cdkObserveContent", function MatFormField_div_4_Template_div_cdkObserveContent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.updateOutlineGap());
    });
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("cdkObserveContentDisabled", ctx_r2.appearance != "outline");
  }
}
function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1, 2);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2._control.placeholder);
  }
}
function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3, ["*ngSwitchCase", "true"]);
  }
}
function MatFormField_label_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1, " *");
    ɵɵelementEnd();
  }
}
function MatFormField_label_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 21, 2);
    ɵɵlistener("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.updateOutlineGap());
    });
    ɵɵtemplate(2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 13)(3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 13)(4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("mat-empty", ctx_r2._control.empty && !ctx_r2._shouldAlwaysFloat())("mat-form-field-empty", ctx_r2._control.empty && !ctx_r2._shouldAlwaysFloat())("mat-accent", ctx_r2.color == "accent")("mat-warn", ctx_r2.color == "warn");
    ɵɵproperty("cdkObserveContentDisabled", ctx_r2.appearance != "outline")("id", ctx_r2._labelId)("ngSwitch", ctx_r2._hasLabel());
    ɵɵattribute("for", ctx_r2._control.id)("aria-owns", ctx_r2._control.id);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", false);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.hideRequiredMarker && ctx_r2._control.required && !ctx_r2._control.disabled);
  }
}
function MatFormField_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵprojection(1, 4);
    ɵɵelementEnd();
  }
}
function MatFormField_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵelement(1, "span", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("mat-accent", ctx_r2.color == "accent")("mat-warn", ctx_r2.color == "warn");
  }
}
function MatFormField_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵprojection(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("@transitionMessages", ctx_r2._subscriptAnimationState);
  }
}
function MatFormField_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("id", ctx_r2._hintLabelId);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.hintLabel);
  }
}
function MatFormField_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, MatFormField_div_14_div_1_Template, 2, 2, "div", 28);
    ɵɵprojection(2, 6);
    ɵɵelement(3, "div", 29);
    ɵɵprojection(4, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("@transitionMessages", ctx_r2._subscriptAnimationState);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hintLabel);
  }
}
var nextUniqueId$2 = 0;
var MAT_ERROR = new InjectionToken("MatError");
var MatError = class {
  constructor(ariaLive, elementRef) {
    this.id = `mat-error-${nextUniqueId$2++}`;
    if (!ariaLive) {
      elementRef.nativeElement.setAttribute("aria-live", "polite");
    }
  }
};
MatError.ɵfac = function MatError_Factory(ɵt) {
  return new (ɵt || MatError)(ɵɵinjectAttribute("aria-live"), ɵɵdirectiveInject(ElementRef));
};
MatError.ɵdir = ɵɵdefineDirective({
  type: MatError,
  selectors: [["mat-error"]],
  hostAttrs: ["aria-atomic", "true", 1, "mat-error"],
  hostVars: 1,
  hostBindings: function MatError_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  features: [ɵɵProvidersFeature([{
    provide: MAT_ERROR,
    useExisting: MatError
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatError, [{
    type: Directive,
    args: [{
      selector: "mat-error",
      host: {
        "class": "mat-error",
        "[attr.id]": "id",
        "aria-atomic": "true"
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["aria-live"]
      }]
    }, {
      type: ElementRef
    }];
  }, {
    id: [{
      type: Input
    }]
  });
})();
var matFormFieldAnimations = {
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: trigger("transitionMessages", [
    // TODO(mmalerba): Use angular animations for label animation as well.
    state("enter", style({
      opacity: 1,
      transform: "translateY(0%)"
    })),
    transition("void => enter", [style({
      opacity: 0,
      transform: "translateY(-5px)"
    }), animate("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")])
  ])
};
var MatFormFieldControl = class {
};
MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(ɵt) {
  return new (ɵt || MatFormFieldControl)();
};
MatFormFieldControl.ɵdir = ɵɵdefineDirective({
  type: MatFormFieldControl
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldControl, [{
    type: Directive
  }], null, null);
})();
function getMatFormFieldPlaceholderConflictError() {
  return Error("Placeholder attribute and child element were both specified.");
}
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error("mat-form-field must contain a MatFormFieldControl.");
}
var nextUniqueId$1 = 0;
var _MAT_HINT = new InjectionToken("MatHint");
var MatHint = class {
  constructor() {
    this.align = "start";
    this.id = `mat-hint-${nextUniqueId$1++}`;
  }
};
MatHint.ɵfac = function MatHint_Factory(ɵt) {
  return new (ɵt || MatHint)();
};
MatHint.ɵdir = ɵɵdefineDirective({
  type: MatHint,
  selectors: [["mat-hint"]],
  hostAttrs: [1, "mat-hint"],
  hostVars: 4,
  hostBindings: function MatHint_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("align", null);
      ɵɵclassProp("mat-form-field-hint-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align",
    id: "id"
  },
  features: [ɵɵProvidersFeature([{
    provide: _MAT_HINT,
    useExisting: MatHint
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHint, [{
    type: Directive,
    args: [{
      selector: "mat-hint",
      host: {
        "class": "mat-hint",
        "[class.mat-form-field-hint-end]": 'align === "end"',
        "[attr.id]": "id",
        // Remove align attribute to prevent it from interfering with layout.
        "[attr.align]": "null"
      },
      providers: [{
        provide: _MAT_HINT,
        useExisting: MatHint
      }]
    }]
  }], null, {
    align: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var MatLabel = class {
};
MatLabel.ɵfac = function MatLabel_Factory(ɵt) {
  return new (ɵt || MatLabel)();
};
MatLabel.ɵdir = ɵɵdefineDirective({
  type: MatLabel,
  selectors: [["mat-label"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLabel, [{
    type: Directive,
    args: [{
      selector: "mat-label"
    }]
  }], null, null);
})();
var MatPlaceholder = class {
};
MatPlaceholder.ɵfac = function MatPlaceholder_Factory(ɵt) {
  return new (ɵt || MatPlaceholder)();
};
MatPlaceholder.ɵdir = ɵɵdefineDirective({
  type: MatPlaceholder,
  selectors: [["mat-placeholder"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPlaceholder, [{
    type: Directive,
    args: [{
      selector: "mat-placeholder"
    }]
  }], null, null);
})();
var MAT_PREFIX = new InjectionToken("MatPrefix");
var MatPrefix = class {
};
MatPrefix.ɵfac = function MatPrefix_Factory(ɵt) {
  return new (ɵt || MatPrefix)();
};
MatPrefix.ɵdir = ɵɵdefineDirective({
  type: MatPrefix,
  selectors: [["", "matPrefix", ""]],
  features: [ɵɵProvidersFeature([{
    provide: MAT_PREFIX,
    useExisting: MatPrefix
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPrefix, [{
    type: Directive,
    args: [{
      selector: "[matPrefix]",
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, null);
})();
var MAT_SUFFIX = new InjectionToken("MatSuffix");
var MatSuffix = class {
};
MatSuffix.ɵfac = function MatSuffix_Factory(ɵt) {
  return new (ɵt || MatSuffix)();
};
MatSuffix.ɵdir = ɵɵdefineDirective({
  type: MatSuffix,
  selectors: [["", "matSuffix", ""]],
  features: [ɵɵProvidersFeature([{
    provide: MAT_SUFFIX,
    useExisting: MatSuffix
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSuffix, [{
    type: Directive,
    args: [{
      selector: "[matSuffix]",
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, null);
})();
var nextUniqueId = 0;
var floatingLabelScale = 0.75;
var outlineGapPadding = 5;
var _MatFormFieldBase = mixinColor(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}, "primary");
var MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS");
var MAT_FORM_FIELD = new InjectionToken("MatFormField");
var MatFormField = class extends _MatFormFieldBase {
  constructor(elementRef, _changeDetectorRef, _dir, _defaults, _platform, _ngZone, _animationMode) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._defaults = _defaults;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._outlineGapCalculationNeededImmediately = false;
    this._outlineGapCalculationNeededOnStable = false;
    this._destroyed = new Subject();
    this._showAlwaysAnimate = false;
    this._subscriptAnimationState = "";
    this._hintLabel = "";
    this._hintLabelId = `mat-hint-${nextUniqueId++}`;
    this._labelId = `mat-form-field-label-${nextUniqueId++}`;
    this.floatLabel = this._getDefaultFloatLabelState();
    this._animationsEnabled = _animationMode !== "NoopAnimations";
    this.appearance = _defaults && _defaults.appearance ? _defaults.appearance : "legacy";
    this._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
  }
  /** The form-field appearance style. */
  get appearance() {
    return this._appearance;
  }
  set appearance(value) {
    const oldValue = this._appearance;
    this._appearance = value || this._defaults && this._defaults.appearance || "legacy";
    if (this._appearance === "outline" && oldValue !== value) {
      this._outlineGapCalculationNeededOnStable = true;
    }
  }
  /** Whether the required marker should be hidden. */
  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }
  set hideRequiredMarker(value) {
    this._hideRequiredMarker = coerceBooleanProperty(value);
  }
  /** Whether the floating label should always float or not. */
  _shouldAlwaysFloat() {
    return this.floatLabel === "always" && !this._showAlwaysAnimate;
  }
  /** Whether the label can float or not. */
  _canLabelFloat() {
    return this.floatLabel !== "never";
  }
  /** Text for the form field hint. */
  get hintLabel() {
    return this._hintLabel;
  }
  set hintLabel(value) {
    this._hintLabel = value;
    this._processHints();
  }
  /**
   * Whether the label should always float, never float or float as the user types.
   *
   * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
   * way to make the floating label emulate the behavior of a standard input placeholder. However
   * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
   * appearances the `never` option has been disabled in favor of just using the placeholder.
   */
  get floatLabel() {
    return this.appearance !== "legacy" && this._floatLabel === "never" ? "auto" : this._floatLabel;
  }
  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value || this._getDefaultFloatLabelState();
      this._changeDetectorRef.markForCheck();
    }
  }
  get _control() {
    return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
  }
  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  /**
   * Gets the id of the label element. If no label is present, returns `null`.
   */
  getLabelId() {
    return this._hasFloatingLabel() ? this._labelId : null;
  }
  /**
   * Gets an ElementRef for the element that a overlay attached to the form-field should be
   * positioned relative to.
   */
  getConnectedOverlayOrigin() {
    return this._connectionContainerRef || this._elementRef;
  }
  ngAfterContentInit() {
    this._validateControlChild();
    const control = this._control;
    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(`mat-form-field-type-${control.controlType}`);
    }
    control.stateChanges.pipe(startWith(null)).subscribe(() => {
      this._validatePlaceholders();
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    if (control.ngControl && control.ngControl.valueChanges) {
      control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(takeUntil(this._destroyed)).subscribe(() => {
        if (this._outlineGapCalculationNeededOnStable) {
          this.updateOutlineGap();
        }
      });
    });
    merge(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._outlineGapCalculationNeededOnStable = true;
      this._changeDetectorRef.markForCheck();
    });
    this._hintChildren.changes.pipe(startWith(null)).subscribe(() => {
      this._processHints();
      this._changeDetectorRef.markForCheck();
    });
    this._errorChildren.changes.pipe(startWith(null)).subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    if (this._dir) {
      this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
        if (typeof requestAnimationFrame === "function") {
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => this.updateOutlineGap());
          });
        } else {
          this.updateOutlineGap();
        }
      });
    }
  }
  ngAfterContentChecked() {
    this._validateControlChild();
    if (this._outlineGapCalculationNeededImmediately) {
      this.updateOutlineGap();
    }
  }
  ngAfterViewInit() {
    this._subscriptAnimationState = "enter";
    this._changeDetectorRef.detectChanges();
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Determines whether a class from the NgControl should be forwarded to the host element. */
  _shouldForward(prop) {
    const ngControl = this._control ? this._control.ngControl : null;
    return ngControl && ngControl[prop];
  }
  _hasPlaceholder() {
    return !!(this._control && this._control.placeholder || this._placeholderChild);
  }
  _hasLabel() {
    return !!(this._labelChildNonStatic || this._labelChildStatic);
  }
  _shouldLabelFloat() {
    return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
  }
  _hideControlPlaceholder() {
    return this.appearance === "legacy" && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
  }
  _hasFloatingLabel() {
    return this._hasLabel() || this.appearance === "legacy" && this._hasPlaceholder();
  }
  /** Determines whether to display hints or errors. */
  _getDisplayedMessages() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint";
  }
  /** Animates the placeholder up and locks it in position. */
  _animateAndLockLabel() {
    if (this._hasFloatingLabel() && this._canLabelFloat()) {
      if (this._animationsEnabled && this._label) {
        this._showAlwaysAnimate = true;
        fromEvent(this._label.nativeElement, "transitionend").pipe(take(1)).subscribe(() => {
          this._showAlwaysAnimate = false;
        });
      }
      this.floatLabel = "always";
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
   * or child element with the `mat-placeholder` directive).
   */
  _validatePlaceholders() {
    if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatFormFieldPlaceholderConflictError();
    }
  }
  /** Does any extra processing that is required when handling the hints. */
  _processHints() {
    this._validateHints();
    this._syncDescribedByIds();
  }
  /**
   * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
   * attribute being considered as `align="start"`.
   */
  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      let startHint;
      let endHint;
      this._hintChildren.forEach((hint) => {
        if (hint.align === "start") {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError("start");
          }
          startHint = hint;
        } else if (hint.align === "end") {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError("end");
          }
          endHint = hint;
        }
      });
    }
  }
  /** Gets the default float label state. */
  _getDefaultFloatLabelState() {
    return this._defaults && this._defaults.floatLabel || "auto";
  }
  /**
   * Sets the list of element IDs that describe the child control. This allows the control to update
   * its `aria-describedby` attribute accordingly.
   */
  _syncDescribedByIds() {
    if (this._control) {
      let ids = [];
      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === "string") {
        ids.push(...this._control.userAriaDescribedBy.split(" "));
      }
      if (this._getDisplayedMessages() === "hint") {
        const startHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "start") : null;
        const endHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "end") : null;
        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }
        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map((error) => error.id));
      }
      this._control.setDescribedByIds(ids);
    }
  }
  /** Throws an error if the form field's control is missing. */
  _validateControlChild() {
    if (!this._control && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  /**
   * Updates the width and position of the gap in the outline. Only relevant for the outline
   * appearance.
   */
  updateOutlineGap() {
    const labelEl = this._label ? this._label.nativeElement : null;
    const container = this._connectionContainerRef.nativeElement;
    const outlineStartSelector = ".mat-form-field-outline-start";
    const outlineGapSelector = ".mat-form-field-outline-gap";
    if (this.appearance !== "outline" || !this._platform.isBrowser) {
      return;
    }
    if (!labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
      const gapElements = container.querySelectorAll(`${outlineStartSelector}, ${outlineGapSelector}`);
      for (let i = 0; i < gapElements.length; i++) {
        gapElements[i].style.width = "0";
      }
      return;
    }
    if (!this._isAttachedToDOM()) {
      this._outlineGapCalculationNeededImmediately = true;
      return;
    }
    let startWidth = 0;
    let gapWidth = 0;
    const startEls = container.querySelectorAll(outlineStartSelector);
    const gapEls = container.querySelectorAll(outlineGapSelector);
    if (this._label && this._label.nativeElement.children.length) {
      const containerRect = container.getBoundingClientRect();
      if (containerRect.width === 0 && containerRect.height === 0) {
        this._outlineGapCalculationNeededOnStable = true;
        this._outlineGapCalculationNeededImmediately = false;
        return;
      }
      const containerStart = this._getStartEnd(containerRect);
      const labelChildren = labelEl.children;
      const labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());
      let labelWidth = 0;
      for (let i = 0; i < labelChildren.length; i++) {
        labelWidth += labelChildren[i].offsetWidth;
      }
      startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
      gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
    }
    for (let i = 0; i < startEls.length; i++) {
      startEls[i].style.width = `${startWidth}px`;
    }
    for (let i = 0; i < gapEls.length; i++) {
      gapEls[i].style.width = `${gapWidth}px`;
    }
    this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
  }
  /** Gets the start end of the rect considering the current directionality. */
  _getStartEnd(rect) {
    return this._dir && this._dir.value === "rtl" ? rect.right : rect.left;
  }
  /** Checks whether the form field is attached to the DOM. */
  _isAttachedToDOM() {
    const element = this._elementRef.nativeElement;
    if (element.getRootNode) {
      const rootNode = element.getRootNode();
      return rootNode && rootNode !== element;
    }
    return document.documentElement.contains(element);
  }
};
MatFormField.ɵfac = function MatFormField_Factory(ɵt) {
  return new (ɵt || MatFormField)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatFormField.ɵcmp = ɵɵdefineComponent({
  type: MatFormField,
  selectors: [["mat-form-field"]],
  contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatFormFieldControl, 5);
      ɵɵcontentQuery(dirIndex, MatFormFieldControl, 7);
      ɵɵcontentQuery(dirIndex, MatLabel, 5);
      ɵɵcontentQuery(dirIndex, MatLabel, 7);
      ɵɵcontentQuery(dirIndex, MatPlaceholder, 5);
      ɵɵcontentQuery(dirIndex, MAT_ERROR, 5);
      ɵɵcontentQuery(dirIndex, _MAT_HINT, 5);
      ɵɵcontentQuery(dirIndex, MAT_PREFIX, 5);
      ɵɵcontentQuery(dirIndex, MAT_SUFFIX, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._controlNonStatic = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._controlStatic = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._labelChildNonStatic = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._labelChildStatic = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._placeholderChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._errorChildren = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._hintChildren = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._prefixChildren = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._suffixChildren = _t);
    }
  },
  viewQuery: function MatFormField_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._connectionContainerRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputContainerRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._label = _t.first);
    }
  },
  hostAttrs: [1, "mat-form-field"],
  hostVars: 40,
  hostBindings: function MatFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    }
  },
  inputs: {
    color: "color",
    appearance: "appearance",
    hideRequiredMarker: "hideRequiredMarker",
    hintLabel: "hintLabel",
    floatLabel: "floatLabel"
  },
  exportAs: ["matFormField"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_FORM_FIELD,
    useExisting: MatFormField
  }]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c4,
  decls: 15,
  vars: 8,
  consts: [["connectionContainer", ""], ["inputContainer", ""], ["label", ""], [1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], [4, "ngIf"], ["class", "mat-form-field-prefix", 3, "cdkObserveContentDisabled", "cdkObserveContent", 4, "ngIf"], [1, "mat-form-field-infix"], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix", 3, "cdkObserveContent", "cdkObserveContentDisabled"], [1, "mat-form-field-label", 3, "cdkObserveContent", "cdkObserveContentDisabled", "id", "ngSwitch"], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
  template: function MatFormField_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef(_c3);
      ɵɵelementStart(0, "div", 3)(1, "div", 4, 0);
      ɵɵlistener("click", function MatFormField_Template_div_click_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._control.onContainerClick && ctx._control.onContainerClick($event));
      });
      ɵɵtemplate(3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 5)(4, MatFormField_div_4_Template, 2, 1, "div", 6);
      ɵɵelementStart(5, "div", 7, 1);
      ɵɵprojection(7);
      ɵɵelementStart(8, "span", 8);
      ɵɵtemplate(9, MatFormField_label_9_Template, 5, 16, "label", 9);
      ɵɵelementEnd()();
      ɵɵtemplate(10, MatFormField_div_10_Template, 2, 0, "div", 10);
      ɵɵelementEnd();
      ɵɵtemplate(11, MatFormField_div_11_Template, 2, 4, "div", 11);
      ɵɵelementStart(12, "div", 12);
      ɵɵtemplate(13, MatFormField_div_13_Template, 2, 1, "div", 13)(14, MatFormField_div_14_Template, 5, 2, "div", 14);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.appearance == "outline");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx._prefixChildren.length);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx._hasFloatingLabel());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx._suffixChildren.length);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.appearance != "outline");
      ɵɵadvance();
      ɵɵproperty("ngSwitch", ctx._getDisplayedMessages());
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "error");
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "hint");
    }
  },
  dependencies: [NgIf, CdkObserveContent, NgSwitch, NgSwitchCase],
  styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n', '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n', ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
  encapsulation: 2,
  data: {
    animation: [matFormFieldAnimations.transitionMessages]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormField, [{
    type: Component,
    args: [{
      selector: "mat-form-field",
      exportAs: "matFormField",
      animations: [matFormFieldAnimations.transitionMessages],
      host: {
        "class": "mat-form-field",
        "[class.mat-form-field-appearance-standard]": 'appearance == "standard"',
        "[class.mat-form-field-appearance-fill]": 'appearance == "fill"',
        "[class.mat-form-field-appearance-outline]": 'appearance == "outline"',
        "[class.mat-form-field-appearance-legacy]": 'appearance == "legacy"',
        "[class.mat-form-field-invalid]": "_control.errorState",
        "[class.mat-form-field-can-float]": "_canLabelFloat()",
        "[class.mat-form-field-should-float]": "_shouldLabelFloat()",
        "[class.mat-form-field-has-label]": "_hasFloatingLabel()",
        "[class.mat-form-field-hide-placeholder]": "_hideControlPlaceholder()",
        "[class.mat-form-field-disabled]": "_control.disabled",
        "[class.mat-form-field-autofilled]": "_control.autofilled",
        "[class.mat-focused]": "_control.focused",
        "[class.ng-untouched]": '_shouldForward("untouched")',
        "[class.ng-touched]": '_shouldForward("touched")',
        "[class.ng-pristine]": '_shouldForward("pristine")',
        "[class.ng-dirty]": '_shouldForward("dirty")',
        "[class.ng-valid]": '_shouldForward("valid")',
        "[class.ng-invalid]": '_shouldForward("invalid")',
        "[class.ng-pending]": '_shouldForward("pending")',
        "[class._mat-animation-noopable]": "!_animationsEnabled"
      },
      inputs: ["color"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }],
      template: `<div class="mat-form-field-wrapper">
  <div class="mat-form-field-flex" #connectionContainer
       (click)="_control.onContainerClick && _control.onContainerClick($event)">

    <!-- Outline used for outline appearance. -->
    <ng-container *ngIf="appearance == 'outline'">
      <div class="mat-form-field-outline">
        <div class="mat-form-field-outline-start"></div>
        <div class="mat-form-field-outline-gap"></div>
        <div class="mat-form-field-outline-end"></div>
      </div>
      <div class="mat-form-field-outline mat-form-field-outline-thick">
        <div class="mat-form-field-outline-start"></div>
        <div class="mat-form-field-outline-gap"></div>
        <div class="mat-form-field-outline-end"></div>
      </div>
    </ng-container>

    <div
      class="mat-form-field-prefix"
      *ngIf="_prefixChildren.length"
      (cdkObserveContent)="updateOutlineGap()"
      [cdkObserveContentDisabled]="appearance != 'outline'">
      <ng-content select="[matPrefix]"></ng-content>
    </div>

    <div class="mat-form-field-infix" #inputContainer>
      <ng-content></ng-content>

      <span class="mat-form-field-label-wrapper">
        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't
             read if it comes before the control in the DOM. -->
        <label class="mat-form-field-label"
               (cdkObserveContent)="updateOutlineGap()"
               [cdkObserveContentDisabled]="appearance != 'outline'"
               [id]="_labelId"
               [attr.for]="_control.id"
               [attr.aria-owns]="_control.id"
               [class.mat-empty]="_control.empty && !_shouldAlwaysFloat()"
               [class.mat-form-field-empty]="_control.empty && !_shouldAlwaysFloat()"
               [class.mat-accent]="color == 'accent'"
               [class.mat-warn]="color == 'warn'"
               #label
               *ngIf="_hasFloatingLabel()"
               [ngSwitch]="_hasLabel()">

          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->
          <ng-container *ngSwitchCase="false">
            <ng-content select="mat-placeholder"></ng-content>
            <span>{{_control.placeholder}}</span>
          </ng-container>

          <ng-content select="mat-label" *ngSwitchCase="true"></ng-content>

          <!-- @breaking-change 8.0.0 remove \`mat-placeholder-required\` class -->
          <span
            class="mat-placeholder-required mat-form-field-required-marker"
            aria-hidden="true"
            *ngIf="!hideRequiredMarker && _control.required && !_control.disabled">&#32;*</span>
        </label>
      </span>
    </div>

    <div class="mat-form-field-suffix" *ngIf="_suffixChildren.length">
      <ng-content select="[matSuffix]"></ng-content>
    </div>
  </div>

  <!-- Underline used for legacy, standard, and box appearances. -->
  <div class="mat-form-field-underline"
       *ngIf="appearance != 'outline'">
    <span class="mat-form-field-ripple"
          [class.mat-accent]="color == 'accent'"
          [class.mat-warn]="color == 'warn'"></span>
  </div>

  <div class="mat-form-field-subscript-wrapper"
       [ngSwitch]="_getDisplayedMessages()">
    <div *ngSwitchCase="'error'" [@transitionMessages]="_subscriptAnimationState">
      <ng-content select="mat-error"></ng-content>
    </div>

    <div class="mat-form-field-hint-wrapper" *ngSwitchCase="'hint'"
      [@transitionMessages]="_subscriptAnimationState">
      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->
      <div *ngIf="hintLabel" [id]="_hintLabelId" class="mat-hint">{{hintLabel}}</div>
      <ng-content select="mat-hint:not([align='end'])"></ng-content>
      <div class="mat-form-field-hint-spacer"></div>
      <ng-content select="mat-hint[align='end']"></ng-content>
    </div>
  </div>
</div>
`,
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n', '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n', ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
      }]
    }, {
      type: Platform
    }, {
      type: NgZone
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
    appearance: [{
      type: Input
    }],
    hideRequiredMarker: [{
      type: Input
    }],
    hintLabel: [{
      type: Input
    }],
    floatLabel: [{
      type: Input
    }],
    _connectionContainerRef: [{
      type: ViewChild,
      args: ["connectionContainer", {
        static: true
      }]
    }],
    _inputContainerRef: [{
      type: ViewChild,
      args: ["inputContainer"]
    }],
    _label: [{
      type: ViewChild,
      args: ["label"]
    }],
    _controlNonStatic: [{
      type: ContentChild,
      args: [MatFormFieldControl]
    }],
    _controlStatic: [{
      type: ContentChild,
      args: [MatFormFieldControl, {
        static: true
      }]
    }],
    _labelChildNonStatic: [{
      type: ContentChild,
      args: [MatLabel]
    }],
    _labelChildStatic: [{
      type: ContentChild,
      args: [MatLabel, {
        static: true
      }]
    }],
    _placeholderChild: [{
      type: ContentChild,
      args: [MatPlaceholder]
    }],
    _errorChildren: [{
      type: ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: ContentChildren,
      args: [_MAT_HINT, {
        descendants: true
      }]
    }],
    _prefixChildren: [{
      type: ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }]
  });
})();
var MatFormFieldModule = class {
};
MatFormFieldModule.ɵfac = function MatFormFieldModule_Factory(ɵt) {
  return new (ɵt || MatFormFieldModule)();
};
MatFormFieldModule.ɵmod = ɵɵdefineNgModule({
  type: MatFormFieldModule,
  declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
  imports: [CommonModule, MatCommonModule, ObserversModule],
  exports: [MatCommonModule, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
});
MatFormFieldModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, MatCommonModule, ObserversModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
      imports: [CommonModule, MatCommonModule, ObserversModule],
      exports: [MatCommonModule, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
    }]
  }], null, null);
})();

export {
  MAT_ERROR,
  MatError,
  matFormFieldAnimations,
  MatFormFieldControl,
  getMatFormFieldPlaceholderConflictError,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  _MAT_HINT,
  MatHint,
  MatLabel,
  MatPlaceholder,
  MAT_PREFIX,
  MatPrefix,
  MAT_SUFFIX,
  MatSuffix,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldModule
};
/*! Bundled license information:

@angular/material/fesm2020/form-field.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-7UHDX6PQ.js.map
