import {
  MAT_FORM_FIELD,
  MatFormField
} from "./chunk-7UHDX6PQ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-6JOWPH3J.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-A6XYXPCV.js";
import {
  TemplatePortal
} from "./chunk-VEHDF5JB.js";
import {
  CdkScrollableModule,
  ViewportRuler
} from "./chunk-MDLWY3M7.js";
import {
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MatCommonModule,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
  mixinDisableRipple
} from "./chunk-W44CVE2C.js";
import {
  ActiveDescendantKeyManager
} from "./chunk-3TJ5ECJH.js";
import {
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  Platform,
  TAB,
  UP_ARROW,
  _getEventTarget,
  coerceBooleanProperty,
  coerceStringArray,
  hasModifierKey
} from "./chunk-IQOLSN34.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass
} from "./chunk-SJMBSDCY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-GMUXDIJ2.js";
import {
  defer,
  fromEvent,
  merge
} from "./chunk-TQO6VFQJ.js";
import {
  Subject,
  Subscription,
  delay,
  filter,
  map,
  of,
  startWith,
  switchMap,
  take,
  tap
} from "./chunk-ODTHBFDQ.js";

// node_modules/@angular/material/fesm2020/autocomplete.mjs
var _c0 = ["panel"];
var _c1 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1, 0);
    ɵɵprojection(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.id)("ngClass", ctx_r1._classList);
    ɵɵattribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
  }
}
var _uniqueAutocompleteIdCounter = 0;
var MatAutocompleteSelectedEvent = class {
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }
};
var _MatAutocompleteMixinBase = mixinDisableRipple(class {
});
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
  providedIn: "root",
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false
  };
}
var _MatAutocompleteBase = class extends _MatAutocompleteMixinBase {
  constructor(_changeDetectorRef, _elementRef, defaults, platform) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._activeOptionChanges = Subscription.EMPTY;
    this.showPanel = false;
    this._isOpen = false;
    this.displayWith = null;
    this.optionSelected = new EventEmitter();
    this.opened = new EventEmitter();
    this.closed = new EventEmitter();
    this.optionActivated = new EventEmitter();
    this._classList = {};
    this.id = `mat-autocomplete-${_uniqueAutocompleteIdCounter++}`;
    this.inertGroups = platform?.SAFARI || false;
    this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
  }
  /** Whether the autocomplete panel is open. */
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  /**
   * Whether the first option should be highlighted when the autocomplete panel is opened.
   * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
   */
  get autoActiveFirstOption() {
    return this._autoActiveFirstOption;
  }
  set autoActiveFirstOption(value) {
    this._autoActiveFirstOption = coerceBooleanProperty(value);
  }
  /**
   * Takes classes set on the host mat-autocomplete element and applies them to the panel
   * inside the overlay container to allow for easy styling.
   */
  set classList(value) {
    if (value && value.length) {
      this._classList = coerceStringArray(value).reduce((classList, className) => {
        classList[className] = true;
        return classList;
      }, {});
    } else {
      this._classList = {};
    }
    this._setVisibilityClasses(this._classList);
    this._elementRef.nativeElement.className = "";
  }
  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap();
    this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    this._setVisibility();
  }
  ngOnDestroy() {
    this._activeOptionChanges.unsubscribe();
  }
  /**
   * Sets the panel scrollTop. This allows us to manually scroll to display options
   * above or below the fold, as they are not actually being focused when active.
   */
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  /** Returns the panel's scrollTop. */
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  /** Panel should hide itself when the option list is empty. */
  _setVisibility() {
    this.showPanel = !!this.options.length;
    this._setVisibilityClasses(this._classList);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits the `select` event. */
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  /** Gets the aria-labelledby for the autocomplete panel. */
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
  _setVisibilityClasses(classList) {
    classList[this._visibleClass] = this.showPanel;
    classList[this._hiddenClass] = !this.showPanel;
  }
};
_MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(ɵt) {
  return new (ɵt || _MatAutocompleteBase)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS), ɵɵdirectiveInject(Platform));
};
_MatAutocompleteBase.ɵdir = ɵɵdefineDirective({
  type: _MatAutocompleteBase,
  viewQuery: function _MatAutocompleteBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panel = _t.first);
    }
  },
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    displayWith: "displayWith",
    autoActiveFirstOption: "autoActiveFirstOption",
    panelWidth: "panelWidth",
    classList: [0, "class", "classList"]
  },
  outputs: {
    optionSelected: "optionSelected",
    opened: "opened",
    closed: "closed",
    optionActivated: "optionActivated"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatAutocompleteBase, [{
    type: Directive
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }, {
      type: Platform
    }];
  }, {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    displayWith: [{
      type: Input
    }],
    autoActiveFirstOption: [{
      type: Input
    }],
    panelWidth: [{
      type: Input
    }],
    optionSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    optionActivated: [{
      type: Output
    }],
    classList: [{
      type: Input,
      args: ["class"]
    }]
  });
})();
var MatAutocomplete = class extends _MatAutocompleteBase {
  constructor() {
    super(...arguments);
    this._visibleClass = "mat-autocomplete-visible";
    this._hiddenClass = "mat-autocomplete-hidden";
  }
};
MatAutocomplete.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatAutocomplete_BaseFactory;
  return function MatAutocomplete_Factory(ɵt) {
    return (ɵMatAutocomplete_BaseFactory || (ɵMatAutocomplete_BaseFactory = ɵɵgetInheritedFactory(MatAutocomplete)))(ɵt || MatAutocomplete);
  };
})();
MatAutocomplete.ɵcmp = ɵɵdefineComponent({
  type: MatAutocomplete,
  selectors: [["mat-autocomplete"]],
  contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MAT_OPTGROUP, 5);
      ɵɵcontentQuery(dirIndex, MatOption, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionGroups = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
    }
  },
  hostAttrs: [1, "mat-autocomplete"],
  inputs: {
    disableRipple: "disableRipple"
  },
  exportAs: ["matAutocomplete"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_OPTION_PARENT_COMPONENT,
    useExisting: MatAutocomplete
  }]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [["panel", ""], ["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"]],
  template: function MatAutocomplete_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, MatAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
    }
  },
  dependencies: [NgClass],
  styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
    type: Component,
    args: [{
      selector: "mat-autocomplete",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "matAutocomplete",
      inputs: ["disableRipple"],
      host: {
        "class": "mat-autocomplete"
      },
      providers: [{
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: '<ng-template let-formFieldId="id">\n  <div class="mat-autocomplete-panel"\n       role="listbox"\n       [id]="id"\n       [attr.aria-label]="ariaLabel || null"\n       [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"\n       [ngClass]="_classList"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n',
      styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"]
    }]
  }], null, {
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }]
  });
})();
var _MatAutocompleteOriginBase = class {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
};
_MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(ɵt) {
  return new (ɵt || _MatAutocompleteOriginBase)(ɵɵdirectiveInject(ElementRef));
};
_MatAutocompleteOriginBase.ɵdir = ɵɵdefineDirective({
  type: _MatAutocompleteOriginBase
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatAutocompleteOriginBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var MatAutocompleteOrigin = class extends _MatAutocompleteOriginBase {
};
MatAutocompleteOrigin.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatAutocompleteOrigin_BaseFactory;
  return function MatAutocompleteOrigin_Factory(ɵt) {
    return (ɵMatAutocompleteOrigin_BaseFactory || (ɵMatAutocompleteOrigin_BaseFactory = ɵɵgetInheritedFactory(MatAutocompleteOrigin)))(ɵt || MatAutocompleteOrigin);
  };
})();
MatAutocompleteOrigin.ɵdir = ɵɵdefineDirective({
  type: MatAutocompleteOrigin,
  selectors: [["", "matAutocompleteOrigin", ""]],
  exportAs: ["matAutocompleteOrigin"],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
    type: Directive,
    args: [{
      selector: "[matAutocompleteOrigin]",
      exportAs: "matAutocompleteOrigin"
    }]
  }], null, null);
})();
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy");
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatAutocompleteTrigger),
  multi: true
};
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var _MatAutocompleteTriggerBase = class {
  constructor(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler, _defaults) {
    this._element = _element;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this._zone = _zone;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._formField = _formField;
    this._document = _document;
    this._viewportRuler = _viewportRuler;
    this._defaults = _defaults;
    this._componentDestroyed = false;
    this._autocompleteDisabled = false;
    this._manuallyFloatingLabel = false;
    this._viewportSubscription = Subscription.EMPTY;
    this._canOpenOnNextFocus = true;
    this._closeKeyEventStream = new Subject();
    this._windowBlurHandler = () => {
      this._canOpenOnNextFocus = this._document.activeElement !== this._element.nativeElement || this.panelOpen;
    };
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this.position = "auto";
    this.autocompleteAttribute = "off";
    this._overlayAttached = false;
    this.optionSelections = defer(() => {
      const options = this.autocomplete ? this.autocomplete.options : null;
      if (options) {
        return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
      }
      return this._zone.onStable.pipe(take(1), switchMap(() => this.optionSelections));
    });
    this._scrollStrategy = scrollStrategy;
  }
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */
  get autocompleteDisabled() {
    return this._autocompleteDisabled;
  }
  set autocompleteDisabled(value) {
    this._autocompleteDisabled = coerceBooleanProperty(value);
  }
  ngAfterViewInit() {
    const window2 = this._getWindow();
    if (typeof window2 !== "undefined") {
      this._zone.runOutsideAngular(() => window2.addEventListener("blur", this._windowBlurHandler));
    }
  }
  ngOnChanges(changes) {
    if (changes["position"] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    const window2 = this._getWindow();
    if (typeof window2 !== "undefined") {
      window2.removeEventListener("blur", this._windowBlurHandler);
    }
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
  }
  /** Whether or not the autocomplete panel is open. */
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  /** Opens the autocomplete suggestion panel. */
  openPanel() {
    this._attachOverlay();
    this._floatLabel();
  }
  /** Closes the autocomplete suggestion panel. */
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    this.autocomplete._isOpen = this._overlayAttached = false;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    if (!this._componentDestroyed) {
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
   * within the viewport.
   */
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  /**
   * A stream of actions that should close the autocomplete panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */
  get panelClosingActions() {
    return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(
      // Normalize the output so we return a consistent type.
      map((event) => event instanceof MatOptionSelectionChange ? event : null)
    );
  }
  /** The currently active option, coerced to MatOption type. */
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  /** Stream of clicks outside of the autocomplete panel. */
  _getOutsideClickStream() {
    return merge(fromEvent(this._document, "click"), fromEvent(this._document, "auxclick"), fromEvent(this._document, "touchend")).pipe(filter((event) => {
      const clickTarget = _getEventTarget(event);
      const formField = this._formField ? this._formField._elementRef.nativeElement : null;
      const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
      return this._overlayAttached && clickTarget !== this._element.nativeElement && // Normally focus moves inside `mousedown` so this condition will almost always be
      // true. Its main purpose is to handle the case where the input is focused from an
      // outside click which propagates up to the `body` listener within the same sequence
      // and causes the panel to close immediately (see #3106).
      this._document.activeElement !== this._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget);
    }));
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    Promise.resolve().then(() => this._setTriggerValue(value));
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const hasModifier = hasModifierKey(event);
    if (keyCode === ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
      if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this.openPanel();
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
      }
    }
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    if (target.type === "number") {
      value = value == "" ? null : parseFloat(value);
    }
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._onChange(value);
      if (this._canOpen() && this._document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay();
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this.openPanel();
    }
  }
  /**
   * In "auto" mode, the label will animate down as soon as focus is lost.
   * This causes the value to jump when selecting an option with the mouse.
   * This method manually floats the label until the panel can be closed.
   * @param shouldAnimate Whether the label should be animated when it is floated.
   */
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === "auto") {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = "always";
      }
      this._manuallyFloatingLabel = true;
    }
  }
  /** If the label has been manually elevated, return it to its normal state. */
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      this._formField.floatLabel = "auto";
      this._manuallyFloatingLabel = false;
    }
  }
  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */
  _subscribeToClosingActions() {
    const firstStable = this._zone.onStable.pipe(take(1));
    const optionChanges = this.autocomplete.options.changes.pipe(
      tap(() => this._positionStrategy.reapplyLastPosition()),
      // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      delay(0)
    );
    return merge(firstStable, optionChanges).pipe(
      // create a new stream of panelClosingActions, replacing any previous streams
      // that were created, and flatten it so our stream only emits closing events...
      switchMap(() => {
        this._zone.run(() => {
          const wasOpen = this.panelOpen;
          this._resetActiveItem();
          this.autocomplete._setVisibility();
          this._changeDetectorRef.detectChanges();
          if (this.panelOpen) {
            this._overlayRef.updatePosition();
            if (wasOpen !== this.panelOpen) {
              this.autocomplete.opened.emit();
            }
          }
        });
        return this.panelClosingActions;
      }),
      // when the first closing event occurs...
      take(1)
    ).subscribe((event) => this._setValueAndClose(event));
  }
  /** Destroys the autocomplete suggestion panel. */
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  _setTriggerValue(value) {
    const toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value;
    const inputValue = toDisplay != null ? toDisplay : "";
    if (this._formField) {
      this._formField._control.value = inputValue;
    } else {
      this._element.nativeElement.value = inputValue;
    }
    this._previousValue = inputValue;
  }
  /**
   * This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */
  _setValueAndClose(event) {
    const source = event && event.source;
    if (source) {
      this._clearPreviousSelectedOption(source);
      this._setTriggerValue(source.value);
      this._onChange(source.value);
      this.autocomplete._emitSelectEvent(source);
      this._element.nativeElement.focus();
    }
    this.closePanel();
  }
  /**
   * Clear any previous selected option and emit a selection change event for this option
   */
  _clearPreviousSelectedOption(skip) {
    this.autocomplete.options.forEach((option) => {
      if (option !== skip && option.selected) {
        option.deselect();
      }
    });
  }
  _attachOverlay() {
    if (!this.autocomplete && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatAutocompleteMissingPanelError();
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: this._formField?.getLabelId()
      });
      overlayRef = this._overlay.create(this._getOverlayConfig());
      this._overlayRef = overlayRef;
      overlayRef.keydownEvents().subscribe((event) => {
        if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
          this._closeKeyEventStream.next();
          this._resetActiveItem();
          event.stopPropagation();
          event.preventDefault();
        }
      });
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
    } else {
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._setVisibility();
    this.autocomplete._isOpen = this._overlayAttached = true;
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this.autocomplete.opened.emit();
    }
  }
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir,
      panelClass: this._defaults?.overlayPanelClass
    });
  }
  _getOverlayPosition() {
    const strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  /** Sets the positions on a position strategy based on the directive's input state. */
  _setStrategyPositions(positionStrategy) {
    const belowPositions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }];
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass
    }];
    let positions;
    if (this.position === "above") {
      positions = abovePositions;
    } else if (this.position === "below") {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  /** Returns the width of the input element, so the panel width can match it. */
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  /**
   * Resets the active item to -1 so arrow events will activate the
   * correct options, or to 0 if the consumer opted into it.
   */
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      autocomplete._keyManager.setFirstItemActive();
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  /** Determines whether the panel can be opened. */
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document?.defaultView || window;
  }
  /** Scrolls to a particular option in the list. */
  _scrollToOption(index) {
    const autocomplete = this.autocomplete;
    const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
};
_MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(ɵt) {
  return new (ɵt || _MatAutocompleteTriggerBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(MAT_FORM_FIELD, 9), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, 8));
};
_MatAutocompleteTriggerBase.ɵdir = ɵɵdefineDirective({
  type: _MatAutocompleteTriggerBase,
  inputs: {
    autocomplete: [0, "matAutocomplete", "autocomplete"],
    position: [0, "matAutocompletePosition", "position"],
    connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
    autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
    autocompleteDisabled: [0, "matAutocompleteDisabled", "autocompleteDisabled"]
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatAutocompleteTriggerBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Overlay
    }, {
      type: ViewContainerRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
      }]
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: MatFormField,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_FORM_FIELD]
      }, {
        type: Host
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ViewportRuler
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }],
    position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }],
    connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }],
    autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }],
    autocompleteDisabled: [{
      type: Input,
      args: ["matAutocompleteDisabled"]
    }]
  });
})();
var MatAutocompleteTrigger = class extends _MatAutocompleteTriggerBase {
  constructor() {
    super(...arguments);
    this._aboveClass = "mat-autocomplete-panel-above";
  }
};
MatAutocompleteTrigger.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatAutocompleteTrigger_BaseFactory;
  return function MatAutocompleteTrigger_Factory(ɵt) {
    return (ɵMatAutocompleteTrigger_BaseFactory || (ɵMatAutocompleteTrigger_BaseFactory = ɵɵgetInheritedFactory(MatAutocompleteTrigger)))(ɵt || MatAutocompleteTrigger);
  };
})();
MatAutocompleteTrigger.ɵdir = ɵɵdefineDirective({
  type: MatAutocompleteTrigger,
  selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
  hostAttrs: [1, "mat-autocomplete-trigger"],
  hostVars: 7,
  hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
        return ctx._handleFocus();
      })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
        return ctx._onTouched();
      })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
        return ctx._handleInput($event);
      })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
        return ctx._handleClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
    }
  },
  exportAs: ["matAutocompleteTrigger"],
  features: [ɵɵProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
    type: Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        "class": "mat-autocomplete-trigger",
        "[attr.autocomplete]": "autocompleteAttribute",
        "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
        "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
        "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
        "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
        "[attr.aria-owns]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
        "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        "(focusin)": "_handleFocus()",
        "(blur)": "_onTouched()",
        "(input)": "_handleInput($event)",
        "(keydown)": "_handleKeydown($event)",
        "(click)": "_handleClick()"
      },
      exportAs: "matAutocompleteTrigger",
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var MatAutocompleteModule = class {
};
MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(ɵt) {
  return new (ɵt || MatAutocompleteModule)();
};
MatAutocompleteModule.ɵmod = ɵɵdefineNgModule({
  type: MatAutocompleteModule,
  declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
  imports: [OverlayModule, MatOptionModule, MatCommonModule, CommonModule],
  exports: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, CdkScrollableModule, MatOptionModule, MatCommonModule]
});
MatAutocompleteModule.ɵinj = ɵɵdefineInjector({
  providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[OverlayModule, MatOptionModule, MatCommonModule, CommonModule], CdkScrollableModule, MatOptionModule, MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatCommonModule, CommonModule],
      exports: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, CdkScrollableModule, MatOptionModule, MatCommonModule],
      declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

export {
  MatAutocompleteSelectedEvent,
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
  _MatAutocompleteBase,
  MatAutocomplete,
  _MatAutocompleteOriginBase,
  MatAutocompleteOrigin,
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MAT_AUTOCOMPLETE_VALUE_ACCESSOR,
  getMatAutocompleteMissingPanelError,
  _MatAutocompleteTriggerBase,
  MatAutocompleteTrigger,
  MatAutocompleteModule
};
/*! Bundled license information:

@angular/material/fesm2020/autocomplete.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-LC7AU4ZK.js.map
