import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-A6XYXPCV.js";
import {
  DomPortalOutlet,
  TemplatePortal
} from "./chunk-VEHDF5JB.js";
import {
  CdkScrollableModule
} from "./chunk-MDLWY3M7.js";
import {
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  mixinDisableRipple,
  mixinDisabled
} from "./chunk-W44CVE2C.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-JJ4ENG2O.js";
import {
  FocusKeyManager,
  FocusMonitor,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-3TJ5ECJH.js";
import {
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  coerceBooleanProperty,
  hasModifierKey,
  normalizePassiveListenerOptions
} from "./chunk-IQOLSN34.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf
} from "./chunk-SJMBSDCY.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Self,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-GMUXDIJ2.js";
import {
  asapScheduler,
  merge
} from "./chunk-TQO6VFQJ.js";
import {
  Subject,
  Subscription,
  delay,
  filter,
  of,
  startWith,
  switchMap,
  take,
  takeUntil
} from "./chunk-ODTHBFDQ.js";

// node_modules/@angular/material/fesm2020/menu.mjs
var _c0 = ["mat-menu-item", ""];
var _c1 = ["*"];
function MatMenuItem__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 2);
    ɵɵelement(1, "polygon", 3);
    ɵɵelementEnd();
  }
}
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵlistener("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._handleKeydown($event));
    })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closed.emit("click"));
    })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onAnimationStart($event));
    })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onAnimationDone($event));
    });
    ɵɵelementStart(1, "div", 1);
    ɵɵprojection(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.panelId)("ngClass", ctx_r1._classList)("@transformMenu", ctx_r1._panelAnimationState);
    ɵɵattribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var matMenuAnimations = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: trigger("transformMenu", [state("void", style({
    opacity: 0,
    transform: "scale(0.8)"
  })), transition("void => enter", animate("120ms cubic-bezier(0, 0, 0.2, 1)", style({
    opacity: 1,
    transform: "scale(1)"
  }))), transition("* => void", animate("100ms 25ms linear", style({
    opacity: 0
  })))]),
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: trigger("fadeInItems", [
    // TODO(crisbeto): this is inside the `transformMenu`
    // now. Remove next time we do breaking changes.
    state("showing", style({
      opacity: 1
    })),
    transition("void => *", [style({
      opacity: 0
    }), animate("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])
  ])
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var _MatMenuContentBase = class {
  constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
    this._template = _template;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._document = _document;
    this._changeDetectorRef = _changeDetectorRef;
    this._attached = new Subject();
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._componentFactoryResolver, this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef?.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    if (this._outlet) {
      this._outlet.dispose();
    }
  }
};
_MatMenuContentBase.ɵfac = function _MatMenuContentBase_Factory(ɵt) {
  return new (ɵt || _MatMenuContentBase)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ApplicationRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatMenuContentBase.ɵdir = ɵɵdefineDirective({
  type: _MatMenuContentBase
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatMenuContentBase, [{
    type: Directive
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ApplicationRef
    }, {
      type: Injector
    }, {
      type: ViewContainerRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var MatMenuContent = class extends _MatMenuContentBase {
};
MatMenuContent.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatMenuContent_BaseFactory;
  return function MatMenuContent_Factory(ɵt) {
    return (ɵMatMenuContent_BaseFactory || (ɵMatMenuContent_BaseFactory = ɵɵgetInheritedFactory(MatMenuContent)))(ɵt || MatMenuContent);
  };
})();
MatMenuContent.ɵdir = ɵɵdefineDirective({
  type: MatMenuContent,
  selectors: [["ng-template", "matMenuContent", ""]],
  features: [ɵɵProvidersFeature([{
    provide: MAT_MENU_CONTENT,
    useExisting: MatMenuContent
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], null, null);
})();
function throwMatMenuMissingError() {
  throw Error(`matMenuTriggerFor: must pass in an mat-menu instance.

    Example:
      <mat-menu #menu="matMenu"></mat-menu>
      <button [matMenuTriggerFor]="menu"></button>`);
}
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var _MatMenuItemBase = mixinDisableRipple(mixinDisabled(class {
}));
var MatMenuItem = class extends _MatMenuItemBase {
  constructor(_elementRef, _document, _focusMonitor, _parentMenu, _changeDetectorRef) {
    super();
    this._elementRef = _elementRef;
    this._document = _document;
    this._focusMonitor = _focusMonitor;
    this._parentMenu = _parentMenu;
    this._changeDetectorRef = _changeDetectorRef;
    this.role = "menuitem";
    this._hovered = new Subject();
    this._focused = new Subject();
    this._highlighted = false;
    this._triggersSubmenu = false;
    _parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef?.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
};
MatMenuItem.ɵfac = function MatMenuItem_Factory(ɵt) {
  return new (ɵt || MatMenuItem)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(MAT_MENU_PANEL, 8), ɵɵdirectiveInject(ChangeDetectorRef));
};
MatMenuItem.ɵcmp = ɵɵdefineComponent({
  type: MatMenuItem,
  selectors: [["", "mat-menu-item", ""]],
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 10,
  hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatMenuItem_click_HostBindingHandler($event) {
        return ctx._checkDisabled($event);
      })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
        return ctx._handleMouseEnter();
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
      ɵɵclassProp("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    role: "role"
  },
  exportAs: ["matMenuItem"],
  features: [ɵɵInheritDefinitionFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["class", "mat-menu-submenu-icon", "viewBox", "0 0 5 10", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 5 10", "focusable", "false", 1, "mat-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
  template: function MatMenuItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵelement(1, "div", 0);
      ɵɵtemplate(2, MatMenuItem__svg_svg_2_Template, 2, 0, "svg", 1);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx._triggersSubmenu);
    }
  },
  dependencies: [MatRipple, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      inputs: ["disabled", "disableRipple"],
      host: {
        "[attr.role]": "role",
        "[class.mat-menu-item]": "true",
        "[class.mat-menu-item-highlighted]": "_highlighted",
        "[class.mat-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.disabled]": "disabled || null",
        "class": "mat-focus-indicator",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: '<ng-content></ng-content>\n<div class="mat-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n<svg\n  *ngIf="_triggersSubmenu"\n  class="mat-menu-submenu-icon"\n  viewBox="0 0 5 10"\n  focusable="false"><polygon points="0,0 5,5 0,10"/></svg>\n'
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: FocusMonitor
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_MENU_PANEL]
      }, {
        type: Optional
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    role: [{
      type: Input
    }]
  });
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var menuPanelUid = 0;
var _MatMenuBase = class {
  constructor(_elementRef, _ngZone, _defaultOptions, _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._changeDetectorRef = _changeDetectorRef;
    this._xPosition = this._defaultOptions.xPosition;
    this._yPosition = this._defaultOptions.yPosition;
    this._directDescendantItems = new QueryList();
    this._tabSubscription = Subscription.EMPTY;
    this._classList = {};
    this._panelAnimationState = "void";
    this._animationDone = new Subject();
    this.overlayPanelClass = this._defaultOptions.overlayPanelClass || "";
    this.backdropClass = this._defaultOptions.backdropClass;
    this._overlapTrigger = this._defaultOptions.overlapTrigger;
    this._hasBackdrop = this._defaultOptions.hasBackdrop;
    this.closed = new EventEmitter();
    this.close = this.closed;
    this.panelId = `mat-menu-panel-${menuPanelUid++}`;
  }
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /** Whether the menu should overlap its trigger. */
  get overlapTrigger() {
    return this._overlapTrigger;
  }
  set overlapTrigger(value) {
    this._overlapTrigger = coerceBooleanProperty(value);
  }
  /** Whether the menu has a backdrop. */
  get hasBackdrop() {
    return this._hasBackdrop;
  }
  set hasBackdrop(value) {
    this._hasBackdrop = coerceBooleanProperty(value);
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        this._classList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        this._classList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._directDescendantItems.destroy();
    this._tabSubscription.unsubscribe();
    this.closed.complete();
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {
  }
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {
  }
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
    event.stopPropagation();
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      let menuPanel = null;
      if (this._directDescendantItems.length) {
        menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
      }
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * Sets the menu panel elevation.
   * @param depth Number of parent menus that come before the menu.
   */
  setElevation(depth) {
    const elevation = Math.min(this._baseElevation + depth, 24);
    const newElevation = `${this._elevationPrefix}${elevation}`;
    const customElevation = Object.keys(this._classList).find((className) => {
      return className.startsWith(this._elevationPrefix);
    });
    if (!customElevation || customElevation === this._previousElevation) {
      if (this._previousElevation) {
        this._classList[this._previousElevation] = false;
      }
      this._classList[newElevation] = true;
      this._previousElevation = newElevation;
    }
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    const classes = this._classList;
    classes["mat-menu-before"] = posX === "before";
    classes["mat-menu-after"] = posX === "after";
    classes["mat-menu-above"] = posY === "above";
    classes["mat-menu-below"] = posY === "below";
    this._changeDetectorRef?.markForCheck();
  }
  /** Starts the enter animation. */
  _startAnimation() {
    this._panelAnimationState = "enter";
  }
  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    this._panelAnimationState = "void";
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event) {
    this._animationDone.next(event);
    this._isAnimating = false;
  }
  _onAnimationStart(event) {
    this._isAnimating = true;
    if (event.toState === "enter" && this._keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
};
_MatMenuBase.ɵfac = function _MatMenuBase_Factory(ɵt) {
  return new (ɵt || _MatMenuBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(MAT_MENU_DEFAULT_OPTIONS), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatMenuBase.ɵdir = ɵɵdefineDirective({
  type: _MatMenuBase,
  contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MAT_MENU_CONTENT, 5);
      ɵɵcontentQuery(dirIndex, MatMenuItem, 5);
      ɵɵcontentQuery(dirIndex, MatMenuItem, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lazyContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._allItems = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  viewQuery: function _MatMenuBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  inputs: {
    backdropClass: "backdropClass",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
    xPosition: "xPosition",
    yPosition: "yPosition",
    overlapTrigger: "overlapTrigger",
    hasBackdrop: "hasBackdrop",
    panelClass: [0, "class", "panelClass"],
    classList: "classList"
  },
  outputs: {
    closed: "closed",
    close: "close"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatMenuBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_MENU_DEFAULT_OPTIONS]
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MatMenu = class extends _MatMenuBase {
  constructor(elementRef, ngZone, defaultOptions, changeDetectorRef) {
    super(elementRef, ngZone, defaultOptions, changeDetectorRef);
    this._elevationPrefix = "mat-elevation-z";
    this._baseElevation = 4;
  }
};
MatMenu.ɵfac = function MatMenu_Factory(ɵt) {
  return new (ɵt || MatMenu)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(MAT_MENU_DEFAULT_OPTIONS), ɵɵdirectiveInject(ChangeDetectorRef));
};
MatMenu.ɵcmp = ɵɵdefineComponent({
  type: MatMenu,
  selectors: [["mat-menu"]],
  hostVars: 3,
  hostBindings: function MatMenu_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
    }
  },
  exportAs: ["matMenu"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_MENU_PANEL,
    useExisting: MatMenu
  }]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "keydown", "click", "id", "ngClass"], [1, "mat-menu-content"]],
  template: function MatMenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
    }
  },
  dependencies: [NgClass],
  styles: ['mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::before{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],
  encapsulation: 2,
  data: {
    animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-menu-panel"
    [id]="panelId"
    [ngClass]="_classList"
    (keydown)="_handleKeydown($event)"
    (click)="closed.emit('click')"
    [@transformMenu]="_panelAnimationState"
    (@transformMenu.start)="_onAnimationStart($event)"
    (@transformMenu.done)="_onAnimationDone($event)"
    tabindex="-1"
    role="menu"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::before{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n']
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_MENU_DEFAULT_OPTIONS]
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy");
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var MENU_PANEL_TOP_PADDING = 8;
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var _MatMenuTriggerBase = class {
  constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, _menuItemInstance, _dir, _focusMonitor, _ngZone) {
    this._overlay = _overlay;
    this._element = _element;
    this._viewContainerRef = _viewContainerRef;
    this._menuItemInstance = _menuItemInstance;
    this._dir = _dir;
    this._focusMonitor = _focusMonitor;
    this._ngZone = _ngZone;
    this._overlayRef = null;
    this._menuOpen = false;
    this._closingActionsSubscription = Subscription.EMPTY;
    this._hoverSubscription = Subscription.EMPTY;
    this._menuCloseSubscription = Subscription.EMPTY;
    this._handleTouchStart = (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    };
    this._openedBy = void 0;
    this.restoreFocus = true;
    this.menuOpened = new EventEmitter();
    this.onMenuOpen = this.menuOpened;
    this.menuClosed = new EventEmitter();
    this.onMenuClose = this.menuClosed;
    this._scrollStrategy = scrollStrategy;
    this._parentMaterialMenu = parentMenu instanceof _MatMenuBase ? parentMenu : void 0;
    _element.nativeElement.addEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
    if (_menuItemInstance) {
      _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
    }
  }
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    if (menu === this._menu) {
      return;
    }
    this._menu = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
  }
  ngAfterContentInit() {
    this._checkMenu();
    this._handleHover();
  }
  ngOnDestroy() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
    this._element.nativeElement.removeEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    this._hoverSubscription.unsubscribe();
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu);
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    if (this._menuOpen) {
      return;
    }
    this._checkMenu();
    const overlayRef = this._createOverlay();
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(positionStrategy);
    overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
    overlayRef.attach(this._getPortal());
    if (this.menu.lazyContent) {
      this.menu.lazyContent.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
    this._initMenu();
    if (this.menu instanceof _MatMenuBase) {
      this.menu._startAnimation();
      this.menu._directDescendantItems.changes.pipe(takeUntil(this.menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /** Closes the menu. */
  closeMenu() {
    this.menu.close.emit();
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    if (!this._overlayRef || !this.menuOpen) {
      return;
    }
    const menu = this.menu;
    this._closingActionsSubscription.unsubscribe();
    this._overlayRef.detach();
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this.triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    if (menu instanceof _MatMenuBase) {
      menu._resetAnimation();
      if (menu.lazyContent) {
        menu._animationDone.pipe(
          filter((event) => event.toState === "void"),
          take(1),
          // Interrupt if the content got re-attached.
          takeUntil(menu.lazyContent._attached)
        ).subscribe({
          next: () => menu.lazyContent.detach(),
          // No matter whether the content got re-attached, reset the menu.
          complete: () => this._setIsMenuOpen(false)
        });
      } else {
        this._setIsMenuOpen(false);
      }
    } else {
      this._setIsMenuOpen(false);
      if (menu.lazyContent) {
        menu.lazyContent.detach();
      }
    }
  }
  /**
   * This method sets the menu state to open and focuses the first item if
   * the menu was opened via the keyboard.
   */
  _initMenu() {
    this.menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0;
    this.menu.direction = this.dir;
    this._setMenuElevation();
    this.menu.focusFirstItem(this._openedBy || "program");
    this._setIsMenuOpen(true);
  }
  /** Updates the menu elevation based on the amount of parent menus that it has. */
  _setMenuElevation() {
    if (this.menu.setElevation) {
      let depth = 0;
      let parentMenu = this.menu.parentMenu;
      while (parentMenu) {
        depth++;
        parentMenu = parentMenu.parentMenu;
      }
      this.menu.setElevation(depth);
    }
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    this._menuOpen = isOpen;
    this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
    if (this.triggersSubmenu()) {
      this._menuItemInstance._setHighlighted(isOpen);
    }
  }
  /**
   * This method checks that a valid instance of MatMenu has been passed into
   * matMenuTriggerFor. If not, an exception is thrown.
   */
  _checkMenu() {
    if (!this.menu && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuMissingError();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay() {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig();
      this._subscribeToPositions(config.positionStrategy);
      this._overlayRef = this._overlay.create(config);
      this._overlayRef.keydownEvents().subscribe();
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: this.menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: this.menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(position) {
    if (this.menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
        const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
        if (this._ngZone) {
          this._ngZone.run(() => this.menu.setPositionClasses(posX, posY));
        } else {
          this.menu.setPositionClasses(posX, posY);
        }
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(positionStrategy) {
    let [originX, originFallbackX] = this.menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = this.menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this.triggersSubmenu()) {
      overlayFallbackX = originX = this.menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      offsetY = overlayY === "bottom" ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
    } else if (!this.menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => active !== this._menuItemInstance), filter(() => this._menuOpen)) : of();
    return merge(backdrop, parentClose, hover, detachments);
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
      return;
    }
    this._hoverSubscription = this._parentMaterialMenu._hovered().pipe(filter((active) => active === this._menuItemInstance && !active.disabled), delay(0, asapScheduler)).subscribe(() => {
      this._openedBy = "mouse";
      if (this.menu instanceof _MatMenuBase && this.menu._isAnimating) {
        this.menu._animationDone.pipe(take(1), delay(0, asapScheduler), takeUntil(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu());
      } else {
        this.openMenu();
      }
    });
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal() {
    if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
      this._portal = new TemplatePortal(this.menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
};
_MatMenuTriggerBase.ɵfac = function _MatMenuTriggerBase_Factory(ɵt) {
  return new (ɵt || _MatMenuTriggerBase)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MAT_MENU_SCROLL_STRATEGY), ɵɵdirectiveInject(MAT_MENU_PANEL, 8), ɵɵdirectiveInject(MatMenuItem, 10), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(NgZone));
};
_MatMenuTriggerBase.ɵdir = ɵɵdefineDirective({
  type: _MatMenuTriggerBase,
  hostAttrs: ["aria-haspopup", "true"],
  hostVars: 2,
  hostBindings: function _MatMenuTriggerBase_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function _MatMenuTriggerBase_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      })("mousedown", function _MatMenuTriggerBase_mousedown_HostBindingHandler($event) {
        return ctx._handleMousedown($event);
      })("keydown", function _MatMenuTriggerBase_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
    }
  },
  inputs: {
    _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
    menu: [0, "matMenuTriggerFor", "menu"],
    menuData: [0, "matMenuTriggerData", "menuData"],
    restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
  },
  outputs: {
    menuOpened: "menuOpened",
    onMenuOpen: "onMenuOpen",
    menuClosed: "menuClosed",
    onMenuClose: "onMenuClose"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatMenuTriggerBase, [{
    type: Directive,
    args: [{
      host: {
        "aria-haspopup": "true",
        "[attr.aria-expanded]": "menuOpen || null",
        "[attr.aria-controls]": "menuOpen ? menu.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      }
    }]
  }], function() {
    return [{
      type: Overlay
    }, {
      type: ElementRef
    }, {
      type: ViewContainerRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_MENU_SCROLL_STRATEGY]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_MENU_PANEL]
      }, {
        type: Optional
      }]
    }, {
      type: MatMenuItem,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }]
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: FocusMonitor
    }, {
      type: NgZone
    }];
  }, {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatMenuTrigger = class extends _MatMenuTriggerBase {
};
MatMenuTrigger.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatMenuTrigger_BaseFactory;
  return function MatMenuTrigger_Factory(ɵt) {
    return (ɵMatMenuTrigger_BaseFactory || (ɵMatMenuTrigger_BaseFactory = ɵɵgetInheritedFactory(MatMenuTrigger)))(ɵt || MatMenuTrigger);
  };
})();
MatMenuTrigger.ɵdir = ɵɵdefineDirective({
  type: MatMenuTrigger,
  selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
  hostAttrs: [1, "mat-menu-trigger"],
  exportAs: ["matMenuTrigger"],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        "class": "mat-menu-trigger"
      },
      exportAs: "matMenuTrigger"
    }]
  }], null, null);
})();
var MatMenuModule = class {
};
MatMenuModule.ɵfac = function MatMenuModule_Factory(ɵt) {
  return new (ɵt || MatMenuModule)();
};
MatMenuModule.ɵmod = ɵɵdefineNgModule({
  type: MatMenuModule,
  declarations: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
  imports: [CommonModule, MatCommonModule, MatRippleModule, OverlayModule],
  exports: [CdkScrollableModule, MatCommonModule, MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent]
});
MatMenuModule.ɵinj = ɵɵdefineInjector({
  providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[CommonModule, MatCommonModule, MatRippleModule, OverlayModule], CdkScrollableModule, MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatCommonModule, MatRippleModule, OverlayModule],
      exports: [CdkScrollableModule, MatCommonModule, MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
      declarations: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

export {
  matMenuAnimations,
  fadeInItems,
  transformMenu,
  MAT_MENU_CONTENT,
  _MatMenuContentBase,
  MatMenuContent,
  MAT_MENU_PANEL,
  MatMenuItem,
  MAT_MENU_DEFAULT_OPTIONS,
  _MatMenuBase,
  MatMenu,
  MAT_MENU_SCROLL_STRATEGY,
  _MatMenuTriggerBase,
  MatMenuTrigger,
  MatMenuModule
};
/*! Bundled license information:

@angular/material/fesm2020/menu.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-LD6Z2CEK.js.map
