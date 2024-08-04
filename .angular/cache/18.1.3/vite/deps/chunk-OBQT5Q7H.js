import {
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule
} from "./chunk-A6XYXPCV.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-VEHDF5JB.js";
import {
  MatCommonModule
} from "./chunk-W44CVE2C.js";
import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-JJ4ENG2O.js";
import {
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker
} from "./chunk-3TJ5ECJH.js";
import {
  Directionality,
  ESCAPE,
  _getFocusedElementPierceShadowDom,
  hasModifierKey
} from "./chunk-IQOLSN34.js";
import {
  DOCUMENT,
  Location
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
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  SkipSelf,
  TemplateRef,
  Type,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-GMUXDIJ2.js";
import {
  defer
} from "./chunk-TQO6VFQJ.js";
import {
  Subject,
  filter,
  of,
  startWith,
  take
} from "./chunk-ODTHBFDQ.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@angular/material/fesm2020/dialog.mjs
function MatDialogContainer_ng_template_0_Template(rf, ctx) {
}
var MatDialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.maxWidth = "80vw";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.delayFocusTrap = true;
    this.closeOnNavigation = true;
  }
};
var matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: trigger("dialogContainer", [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    state("void, exit", style({
      opacity: 0,
      transform: "scale(0.7)"
    })),
    state("enter", style({
      transform: "none"
    })),
    transition("* => enter", group([animate("150ms cubic-bezier(0, 0, 0.2, 1)", style({
      transform: "none",
      opacity: 1
    })), query("@*", animateChild(), {
      optional: true
    })])),
    transition("* => void, * => exit", group([animate("75ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({
      opacity: 0
    })), query("@*", animateChild(), {
      optional: true
    })]))
  ])
};
function throwMatDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var _MatDialogContainerBase = class extends BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config, _interactivityChecker, _ngZone, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._changeDetectorRef = _changeDetectorRef;
    this._config = _config;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._focusMonitor = _focusMonitor;
    this._animationStateChanged = new EventEmitter();
    this._elementFocusedBeforeDialogWasOpened = null;
    this._closeInteractionType = null;
    this.attachDomPortal = (portal) => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }
      return this._portalOutlet.attachDomPortal(portal);
    };
    this._ariaLabelledBy = _config.ariaLabelledBy || null;
    this._document = _document;
  }
  /** Initializes the dialog container with the attached content. */
  _initializeWithAttachedContent() {
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    if (this._document) {
      this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
    }
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatDialogContentAlreadyAttachedError();
    }
    return this._portalOutlet.attachComponentPortal(portal);
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatDialogContentAlreadyAttachedError();
    }
    return this._portalOutlet.attachTemplatePortal(portal);
  }
  /** Moves focus back into the dialog if it was moved out. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener("blur", callback);
          element.removeEventListener("mousedown", callback);
          element.removeAttribute("tabindex");
        };
        element.addEventListener("blur", callback);
        element.addEventListener("mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    const element = this._elementRef.nativeElement;
    switch (this._config.autoFocus) {
      case false:
      case "dialog":
        if (!this._containsFocus()) {
          element.focus();
        }
        break;
      case true:
      case "first-tabbable":
        this._focusTrap.focusInitialElementWhenReady().then((focusedSuccessfully) => {
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this._config.autoFocus);
        break;
    }
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const previousElement = this._elementFocusedBeforeDialogWasOpened;
    if (this._config.restoreFocus && previousElement && typeof previousElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(previousElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          previousElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
};
_MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(ɵt) {
  return new (ɵt || _MatDialogContainerBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(MatDialogConfig), ɵɵdirectiveInject(InteractivityChecker), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FocusMonitor));
};
_MatDialogContainerBase.ɵdir = ɵɵdefineDirective({
  type: _MatDialogContainerBase,
  viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkPortalOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
    }
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatDialogContainerBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: FocusTrapFactory
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: MatDialogConfig
    }, {
      type: InteractivityChecker
    }, {
      type: NgZone
    }, {
      type: FocusMonitor
    }];
  }, {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var MatDialogContainer = class extends _MatDialogContainerBase {
  constructor() {
    super(...arguments);
    this._state = "enter";
  }
  /** Callback, invoked whenever an animation on the host completes. */
  _onAnimationDone({
    toState,
    totalTime
  }) {
    if (toState === "enter") {
      if (this._config.delayFocusTrap) {
        this._trapFocus();
      }
      this._animationStateChanged.next({
        state: "opened",
        totalTime
      });
    } else if (toState === "exit") {
      this._restoreFocus();
      this._animationStateChanged.next({
        state: "closed",
        totalTime
      });
    }
  }
  /** Callback, invoked when an animation on the host starts. */
  _onAnimationStart({
    toState,
    totalTime
  }) {
    if (toState === "enter") {
      this._animationStateChanged.next({
        state: "opening",
        totalTime
      });
    } else if (toState === "exit" || toState === "void") {
      this._animationStateChanged.next({
        state: "closing",
        totalTime
      });
    }
  }
  /** Starts the dialog exit animation. */
  _startExitAnimation() {
    this._state = "exit";
    this._changeDetectorRef.markForCheck();
  }
  _initializeWithAttachedContent() {
    super._initializeWithAttachedContent();
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
};
MatDialogContainer.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatDialogContainer_BaseFactory;
  return function MatDialogContainer_Factory(ɵt) {
    return (ɵMatDialogContainer_BaseFactory || (ɵMatDialogContainer_BaseFactory = ɵɵgetInheritedFactory(MatDialogContainer)))(ɵt || MatDialogContainer);
  };
})();
MatDialogContainer.ɵcmp = ɵɵdefineComponent({
  type: MatDialogContainer,
  selectors: [["mat-dialog-container"]],
  hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
  hostVars: 6,
  hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
        return ctx._onAnimationStart($event);
      })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
        return ctx._onAnimationDone($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx._id);
      ɵɵsyntheticHostProperty("@dialogContainer", ctx._state);
      ɵɵattribute("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
    }
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function MatDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  data: {
    animation: [matDialogAnimations.dialogContainer]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [matDialogAnimations.dialogContainer],
      host: {
        "class": "mat-dialog-container",
        "tabindex": "-1",
        "aria-modal": "true",
        "[id]": "_id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledBy",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[@dialogContainer]": "_state",
        "(@dialogContainer.start)": "_onAnimationStart($event)",
        "(@dialogContainer.done)": "_onAnimationDone($event)"
      },
      template: "<ng-template cdkPortalOutlet></ng-template>\n",
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], null, null);
})();
var uniqueId = 0;
var MatDialogRef = class {
  constructor(_overlayRef, _containerInstance, id = `mat-dialog-${uniqueId++}`) {
    this._overlayRef = _overlayRef;
    this._containerInstance = _containerInstance;
    this.id = id;
    this.disableClose = this._containerInstance._config.disableClose;
    this._afterOpened = new Subject();
    this._afterClosed = new Subject();
    this._beforeClosed = new Subject();
    this._state = 0;
    _containerInstance._id = id;
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._afterClosed.next(this._result);
      this._afterClosed.complete();
      this.componentInstance = null;
      this._overlayRef.dispose();
    });
    _overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
    })).subscribe((event) => {
      event.preventDefault();
      _closeDialogVia(this, "keyboard");
    });
    _overlayRef.backdropClick().subscribe(() => {
      if (this.disableClose) {
        this._containerInstance._recaptureFocus();
      } else {
        _closeDialogVia(this, "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = 1;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._afterClosed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._overlayRef.backdropClick();
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._overlayRef.keydownEvents();
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._getPositionStrategy();
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._overlayRef.updateSize({
      width,
      height
    });
    this._overlayRef.updatePosition();
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._overlayRef.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = 2;
    this._overlayRef.dispose();
  }
  /** Fetches the position strategy object from the overlay ref. */
  _getPositionStrategy() {
    return this._overlayRef.getConfig().positionStrategy;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  if (ref._containerInstance !== void 0) {
    ref._containerInstance._closeInteractionType = interactionType;
  }
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-dialog-scroll-strategy");
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_DIALOG_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var _MatDialogBase = class {
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken, _animationMode) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._dialogRefConstructor = _dialogRefConstructor;
    this._dialogContainerType = _dialogContainerType;
    this._dialogDataToken = _dialogDataToken;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this._ariaHiddenElements = /* @__PURE__ */ new Map();
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._scrollStrategy = scrollStrategy;
  }
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  open(componentOrTemplateRef, config) {
    config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayRef = this._createOverlay(config);
    const dialogContainer = this._attachDialogContainer(overlayRef, config);
    const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));
    this.afterOpened.next(dialogRef);
    dialogContainer._initializeWithAttachedContent();
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  /**
   * Creates the overlay into which the dialog will be loaded.
   * @param config The dialog configuration.
   * @returns A promise resolving to the OverlayRef for the created overlay.
   */
  _createOverlay(config) {
    const overlayConfig = this._getOverlayConfig(config);
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param dialogConfig The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(dialogConfig) {
    const state2 = new OverlayConfig({
      positionStrategy: this._overlay.position().global(),
      scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
      panelClass: dialogConfig.panelClass,
      hasBackdrop: dialogConfig.hasBackdrop,
      direction: dialogConfig.direction,
      minWidth: dialogConfig.minWidth,
      minHeight: dialogConfig.minHeight,
      maxWidth: dialogConfig.maxWidth,
      maxHeight: dialogConfig.maxHeight,
      disposeOnNavigation: dialogConfig.closeOnNavigation
    });
    if (dialogConfig.backdropClass) {
      state2.backdropClass = dialogConfig.backdropClass;
    }
    return state2;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachDialogContainer(overlay, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatDialogConfig,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogContainer Reference to the wrapping dialog container.
   * @param overlayRef Reference to the overlay in which the dialog resides.
   * @param config The dialog configuration.
   * @returns A promise resolving to the MatDialogRef that should be returned to the user.
   */
  _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
    const dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);
    if (componentOrTemplateRef instanceof TemplateRef) {
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, {
        $implicit: config.data,
        dialogRef
      }));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, config.componentFactoryResolver));
      dialogRef.componentInstance = contentRef.instance;
    }
    dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
    return dialogRef;
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog.
   * @param dialogContainer Dialog container element that wraps all of the contents.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const providers = [{
      provide: this._dialogContainerType,
      useValue: dialogContainer
    }, {
      provide: this._dialogDataToken,
      useValue: config.data
    }, {
      provide: this._dialogRefConstructor,
      useValue: dialogRef
    }];
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, InjectFlags.Optional))) {
      providers.push({
        provide: Directionality,
        useValue: {
          value: config.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || this._injector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   */
  _removeOpenDialog(dialogRef) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        this._getAfterAllClosed().next();
      }
    }
  }
  /**
   * Hides all of the content that isn't an overlay from assistive technology.
   */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        let sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  /** Closes all of the dialogs in an array. */
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
};
_MatDialogBase.ɵfac = function _MatDialogBase_Factory(ɵt) {
  ɵɵinvalidFactory();
};
_MatDialogBase.ɵdir = ɵɵdefineDirective({
  type: _MatDialogBase
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatDialogBase, [{
    type: Directive
  }], function() {
    return [{
      type: Overlay
    }, {
      type: Injector
    }, {
      type: void 0
    }, {
      type: void 0
    }, {
      type: OverlayContainer
    }, {
      type: void 0
    }, {
      type: Type
    }, {
      type: Type
    }, {
      type: InjectionToken
    }, {
      type: void 0
    }];
  }, null);
})();
var MatDialog = class extends _MatDialogBase {
  constructor(overlay, injector, location, defaultOptions, scrollStrategy, parentDialog, overlayContainer, animationMode) {
    super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA, animationMode);
  }
};
MatDialog.ɵfac = function MatDialog_Factory(ɵt) {
  return new (ɵt || MatDialog)(ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(Location, 8), ɵɵinject(MAT_DIALOG_DEFAULT_OPTIONS, 8), ɵɵinject(MAT_DIALOG_SCROLL_STRATEGY), ɵɵinject(MatDialog, 12), ɵɵinject(OverlayContainer), ɵɵinject(ANIMATION_MODULE_TYPE, 8));
};
MatDialog.ɵprov = ɵɵdefineInjectable({
  token: MatDialog,
  factory: MatDialog.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable
  }], function() {
    return [{
      type: Overlay
    }, {
      type: Injector
    }, {
      type: Location,
      decorators: [{
        type: Optional
      }]
    }, {
      type: MatDialogConfig,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_DIALOG_DEFAULT_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_DIALOG_SCROLL_STRATEGY]
      }]
    }, {
      type: MatDialog,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }, {
      type: OverlayContainer
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
function _applyConfigDefaults(config, defaultOptions) {
  return __spreadValues(__spreadValues({}, defaultOptions), config);
}
var dialogElementUid = 0;
var MatDialogClose = class {
  constructor(dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this.type = "button";
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
};
MatDialogClose.ɵfac = function MatDialogClose_Factory(ɵt) {
  return new (ɵt || MatDialogClose)(ɵɵdirectiveInject(MatDialogRef, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MatDialog));
};
MatDialogClose.ɵdir = ɵɵdefineDirective({
  type: MatDialogClose,
  selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
  hostVars: 2,
  hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatDialogClose_click_HostBindingHandler($event) {
        return ctx._onButtonClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    }
  },
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    type: "type",
    dialogResult: [0, "mat-dialog-close", "dialogResult"],
    _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
  },
  exportAs: ["matDialogClose"],
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], function() {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ElementRef
    }, {
      type: MatDialog
    }];
  }, {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogTitle = class {
  constructor(_dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this.id = `mat-dialog-title-${dialogElementUid++}`;
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        const container = this._dialogRef._containerInstance;
        if (container && !container._ariaLabelledBy) {
          container._ariaLabelledBy = this.id;
        }
      });
    }
  }
};
MatDialogTitle.ɵfac = function MatDialogTitle_Factory(ɵt) {
  return new (ɵt || MatDialogTitle)(ɵɵdirectiveInject(MatDialogRef, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MatDialog));
};
MatDialogTitle.ɵdir = ɵɵdefineDirective({
  type: MatDialogTitle,
  selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
  hostAttrs: [1, "mat-dialog-title"],
  hostVars: 1,
  hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matDialogTitle"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-dialog-title",
        "[id]": "id"
      }
    }]
  }], function() {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ElementRef
    }, {
      type: MatDialog
    }];
  }, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class {
};
MatDialogContent.ɵfac = function MatDialogContent_Factory(ɵt) {
  return new (ɵt || MatDialogContent)();
};
MatDialogContent.ɵdir = ɵɵdefineDirective({
  type: MatDialogContent,
  selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
  hostAttrs: [1, "mat-dialog-content"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-dialog-content"
      }
    }]
  }], null, null);
})();
var MatDialogActions = class {
};
MatDialogActions.ɵfac = function MatDialogActions_Factory(ɵt) {
  return new (ɵt || MatDialogActions)();
};
MatDialogActions.ɵdir = ɵɵdefineDirective({
  type: MatDialogActions,
  selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
  hostAttrs: [1, "mat-dialog-actions"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        "class": "mat-dialog-actions"
      }
    }]
  }], null, null);
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var MatDialogModule = class {
};
MatDialogModule.ɵfac = function MatDialogModule_Factory(ɵt) {
  return new (ɵt || MatDialogModule)();
};
MatDialogModule.ɵmod = ɵɵdefineNgModule({
  type: MatDialogModule,
  declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
  imports: [OverlayModule, PortalModule, MatCommonModule],
  exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatCommonModule]
});
MatDialogModule.ɵinj = ɵɵdefineInjector({
  providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
  imports: [[OverlayModule, PortalModule, MatCommonModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, MatCommonModule],
      exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatCommonModule],
      declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
      providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();

export {
  MatDialogConfig,
  matDialogAnimations,
  throwMatDialogContentAlreadyAttachedError,
  _MatDialogContainerBase,
  MatDialogContainer,
  MatDialogRef,
  _closeDialogVia,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_DIALOG_SCROLL_STRATEGY,
  MAT_DIALOG_SCROLL_STRATEGY_FACTORY,
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
  _MatDialogBase,
  MatDialog,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogModule
};
/*! Bundled license information:

@angular/material/fesm2020/dialog.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-OBQT5Q7H.js.map
