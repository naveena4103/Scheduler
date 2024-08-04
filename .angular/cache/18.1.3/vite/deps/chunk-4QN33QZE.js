import {
  MatCommonModule,
  mixinDisabled
} from "./chunk-W44CVE2C.js";
import {
  A11yModule,
  AriaDescriber
} from "./chunk-3TJ5ECJH.js";
import {
  coerceBooleanProperty
} from "./chunk-IQOLSN34.js";
import {
  ANIMATION_MODULE_TYPE,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-GMUXDIJ2.js";

// node_modules/@angular/material/fesm2020/badge.mjs
var nextId = 0;
var _MatBadgeBase = mixinDisabled(class {
});
var BADGE_CONTENT_CLASS = "mat-badge-content";
var MatBadge = class extends _MatBadgeBase {
  constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._renderer = _renderer;
    this._animationMode = _animationMode;
    this._color = "primary";
    this._overlap = true;
    this.position = "above after";
    this.size = "medium";
    this._id = nextId++;
    this._isInitialized = false;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const nativeElement = _elementRef.nativeElement;
      if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
        throw Error("matBadge must be attached to an element node.");
      }
    }
  }
  /** The color of the badge. Can be `primary`, `accent`, or `warn`. */
  get color() {
    return this._color;
  }
  set color(value) {
    this._setColor(value);
    this._color = value;
  }
  /** Whether the badge should overlap its contents or not */
  get overlap() {
    return this._overlap;
  }
  set overlap(val) {
    this._overlap = coerceBooleanProperty(val);
  }
  /** The content for the badge */
  get content() {
    return this._content;
  }
  set content(newContent) {
    this._updateRenderedContent(newContent);
  }
  /** Message used to describe the decorated element via aria-describedby */
  get description() {
    return this._description;
  }
  set description(newDescription) {
    this._updateHostAriaDescription(newDescription);
  }
  /** Whether the badge is hidden. */
  get hidden() {
    return this._hidden;
  }
  set hidden(val) {
    this._hidden = coerceBooleanProperty(val);
  }
  /** Whether the badge is above the host or not */
  isAbove() {
    return this.position.indexOf("below") === -1;
  }
  /** Whether the badge is after the host or not */
  isAfter() {
    return this.position.indexOf("before") === -1;
  }
  /**
   * Gets the element into which the badge's content is being rendered. Undefined if the element
   * hasn't been created (e.g. if the badge doesn't have content).
   */
  getBadgeElement() {
    return this._badgeElement;
  }
  ngOnInit() {
    this._clearExistingBadges();
    if (this.content && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
      this._updateRenderedContent(this.content);
    }
    this._isInitialized = true;
  }
  ngOnDestroy() {
    if (this._renderer.destroyNode) {
      this._renderer.destroyNode(this._badgeElement);
    }
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
  }
  /** Creates the badge element */
  _createBadgeElement() {
    const badgeElement = this._renderer.createElement("span");
    const activeClass = "mat-badge-active";
    badgeElement.setAttribute("id", `mat-badge-content-${this._id}`);
    badgeElement.setAttribute("aria-hidden", "true");
    badgeElement.classList.add(BADGE_CONTENT_CLASS);
    if (this._animationMode === "NoopAnimations") {
      badgeElement.classList.add("_mat-animation-noopable");
    }
    this._elementRef.nativeElement.appendChild(badgeElement);
    if (typeof requestAnimationFrame === "function" && this._animationMode !== "NoopAnimations") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          badgeElement.classList.add(activeClass);
        });
      });
    } else {
      badgeElement.classList.add(activeClass);
    }
    return badgeElement;
  }
  /** Update the text content of the badge element in the DOM, creating the element if necessary. */
  _updateRenderedContent(newContent) {
    const newContentNormalized = `${newContent ?? ""}`.trim();
    if (this._isInitialized && newContentNormalized && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
    }
    if (this._badgeElement) {
      this._badgeElement.textContent = newContentNormalized;
    }
    this._content = newContentNormalized;
  }
  /** Updates the host element's aria description via AriaDescriber. */
  _updateHostAriaDescription(newDescription) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
    if (newDescription) {
      this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
    }
    this._description = newDescription;
  }
  /** Adds css theme class given the color to the component host */
  _setColor(colorPalette) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(`mat-badge-${this._color}`);
    if (colorPalette) {
      classList.add(`mat-badge-${colorPalette}`);
    }
  }
  /** Clears any existing badges that might be left over from server-side rendering. */
  _clearExistingBadges() {
    const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);
    for (const badgeElement of Array.from(badges)) {
      if (badgeElement !== this._badgeElement) {
        badgeElement.remove();
      }
    }
  }
};
MatBadge.ɵfac = function MatBadge_Factory(ɵt) {
  return new (ɵt || MatBadge)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AriaDescriber), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatBadge.ɵdir = ɵɵdefineDirective({
  type: MatBadge,
  selectors: [["", "matBadge", ""]],
  hostAttrs: [1, "mat-badge"],
  hostVars: 20,
  hostBindings: function MatBadge_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: [0, "matBadgeDisabled", "disabled"],
    color: [0, "matBadgeColor", "color"],
    overlap: [0, "matBadgeOverlap", "overlap"],
    position: [0, "matBadgePosition", "position"],
    content: [0, "matBadge", "content"],
    description: [0, "matBadgeDescription", "description"],
    size: [0, "matBadgeSize", "size"],
    hidden: [0, "matBadgeHidden", "hidden"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadge, [{
    type: Directive,
    args: [{
      selector: "[matBadge]",
      inputs: ["disabled: matBadgeDisabled"],
      host: {
        "class": "mat-badge",
        "[class.mat-badge-overlap]": "overlap",
        "[class.mat-badge-above]": "isAbove()",
        "[class.mat-badge-below]": "!isAbove()",
        "[class.mat-badge-before]": "!isAfter()",
        "[class.mat-badge-after]": "isAfter()",
        "[class.mat-badge-small]": 'size === "small"',
        "[class.mat-badge-medium]": 'size === "medium"',
        "[class.mat-badge-large]": 'size === "large"',
        "[class.mat-badge-hidden]": "hidden || !content",
        "[class.mat-badge-disabled]": "disabled"
      }
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: AriaDescriber
    }, {
      type: Renderer2
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
      args: ["matBadgeColor"]
    }],
    overlap: [{
      type: Input,
      args: ["matBadgeOverlap"]
    }],
    position: [{
      type: Input,
      args: ["matBadgePosition"]
    }],
    content: [{
      type: Input,
      args: ["matBadge"]
    }],
    description: [{
      type: Input,
      args: ["matBadgeDescription"]
    }],
    size: [{
      type: Input,
      args: ["matBadgeSize"]
    }],
    hidden: [{
      type: Input,
      args: ["matBadgeHidden"]
    }]
  });
})();
var MatBadgeModule = class {
};
MatBadgeModule.ɵfac = function MatBadgeModule_Factory(ɵt) {
  return new (ɵt || MatBadgeModule)();
};
MatBadgeModule.ɵmod = ɵɵdefineNgModule({
  type: MatBadgeModule,
  declarations: [MatBadge],
  imports: [A11yModule, MatCommonModule],
  exports: [MatBadge, MatCommonModule]
});
MatBadgeModule.ɵinj = ɵɵdefineInjector({
  imports: [[A11yModule, MatCommonModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadgeModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, MatCommonModule],
      exports: [MatBadge, MatCommonModule],
      declarations: [MatBadge]
    }]
  }], null, null);
})();

export {
  MatBadge,
  MatBadgeModule
};
/*! Bundled license information:

@angular/material/fesm2020/badge.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-4QN33QZE.js.map
