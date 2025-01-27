import {
  __commonJS,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts/highcharts-gantt.js
var require_highcharts_gantt = __commonJS({
  "node_modules/highcharts/highcharts-gantt.js"(exports, module) {
    !/**
    * Highcharts Gantt JS v11.4.6 (2024-07-08)
    *
    * (c) 2017-2024 Lars Cabrera, Torstein Honsi, Jon Arild Nygard & Oystein Moseng
    *
    * License: www.highcharts.com/license
    */
    function(t, e) {
      "object" == typeof module && module.exports ? (e.default = e, module.exports = t && t.document ? e(t) : e) : "function" == typeof define && define.amd ? define("highcharts/highcharts-gantt", function() {
        return e(t);
      }) : (t.Highcharts && t.Highcharts.error(16, true), t.Highcharts = e(t));
    }("undefined" != typeof window ? window : exports, function(t) {
      "use strict";
      var e = {};
      function i(e2, i2, s, o) {
        e2.hasOwnProperty(i2) || (e2[i2] = o.apply(null, s), "function" == typeof CustomEvent && t.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
          detail: {
            path: i2,
            module: e2[i2]
          }
        })));
      }
      return i(e, "Core/Globals.js", [], function() {
        var e2, i2;
        return (i2 = e2 || (e2 = {})).SVG_NS = "http://www.w3.org/2000/svg", i2.product = "Highcharts", i2.version = "11.4.6", i2.win = void 0 !== t ? t : {}, i2.doc = i2.win.document, i2.svg = i2.doc && i2.doc.createElementNS && !!i2.doc.createElementNS(i2.SVG_NS, "svg").createSVGRect, i2.userAgent = i2.win.navigator && i2.win.navigator.userAgent || "", i2.isChrome = i2.win.chrome, i2.isFirefox = -1 !== i2.userAgent.indexOf("Firefox"), i2.isMS = /(edge|msie|trident)/i.test(i2.userAgent) && !i2.win.opera, i2.isSafari = !i2.isChrome && -1 !== i2.userAgent.indexOf("Safari"), i2.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(i2.userAgent), i2.isWebKit = -1 !== i2.userAgent.indexOf("AppleWebKit"), i2.deg2rad = 2 * Math.PI / 360, i2.hasBidiBug = i2.isFirefox && 4 > parseInt(i2.userAgent.split("Firefox/")[1], 10), i2.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], i2.noop = function() {
        }, i2.supportsPassiveEvents = function() {
          let t2 = false;
          if (!i2.isMS) {
            let e3 = Object.defineProperty({}, "passive", {
              get: function() {
                t2 = true;
              }
            });
            i2.win.addEventListener && i2.win.removeEventListener && (i2.win.addEventListener("testPassive", i2.noop, e3), i2.win.removeEventListener("testPassive", i2.noop, e3));
          }
          return t2;
        }(), i2.charts = [], i2.composed = [], i2.dateFormats = {}, i2.seriesTypes = {}, i2.symbolSizes = {}, i2.chartCount = 0, e2;
      }), i(e, "Core/Utilities.js", [e["Core/Globals.js"]], function(t2) {
        let e2;
        let {
          charts: i2,
          doc: s,
          win: o
        } = t2;
        function r(e3, i3, s2, n2) {
          let a2 = i3 ? "Highcharts error" : "Highcharts warning";
          32 === e3 && (e3 = `${a2}: Deprecated member`);
          let l2 = p(e3), h2 = l2 ? `${a2} #${e3}: www.highcharts.com/errors/${e3}/` : e3.toString();
          if (void 0 !== n2) {
            let t3 = "";
            l2 && (h2 += "?"), k(n2, function(e4, i4) {
              t3 += `
 - ${i4}: ${e4}`, l2 && (h2 += encodeURI(i4) + "=" + encodeURI(e4));
            }), h2 += t3;
          }
          C(t2, "displayError", {
            chart: s2,
            code: e3,
            message: h2,
            params: n2
          }, function() {
            if (i3) throw Error(h2);
            o.console && -1 === r.messages.indexOf(h2) && console.warn(h2);
          }), r.messages.push(h2);
        }
        function n(t3, e3) {
          return parseInt(t3, e3 || 10);
        }
        function a(t3) {
          return "string" == typeof t3;
        }
        function l(t3) {
          let e3 = Object.prototype.toString.call(t3);
          return "[object Array]" === e3 || "[object Array Iterator]" === e3;
        }
        function h(t3, e3) {
          return !!t3 && "object" == typeof t3 && (!e3 || !l(t3));
        }
        function d(t3) {
          return h(t3) && "number" == typeof t3.nodeType;
        }
        function c(t3) {
          let e3 = t3 && t3.constructor;
          return !!(h(t3, true) && !d(t3) && e3 && e3.name && "Object" !== e3.name);
        }
        function p(t3) {
          return "number" == typeof t3 && !isNaN(t3) && t3 < 1 / 0 && t3 > -1 / 0;
        }
        function u(t3) {
          return null != t3;
        }
        function g(t3, e3, i3) {
          let s2;
          let o2 = a(e3) && !u(i3), r2 = (e4, i4) => {
            u(e4) ? t3.setAttribute(i4, e4) : o2 ? (s2 = t3.getAttribute(i4)) || "class" !== i4 || (s2 = t3.getAttribute(i4 + "Name")) : t3.removeAttribute(i4);
          };
          return a(e3) ? r2(i3, e3) : k(e3, r2), s2;
        }
        function f(t3) {
          return l(t3) ? t3 : [t3];
        }
        function m(t3, e3) {
          let i3;
          for (i3 in t3 || (t3 = {}), e3) t3[i3] = e3[i3];
          return t3;
        }
        function x() {
          let t3 = arguments, e3 = t3.length;
          for (let i3 = 0; i3 < e3; i3++) {
            let e4 = t3[i3];
            if (null != e4) return e4;
          }
        }
        function y(t3, e3) {
          m(t3.style, e3);
        }
        function b(t3) {
          return Math.pow(10, Math.floor(Math.log(t3) / Math.LN10));
        }
        function v(t3, e3) {
          return t3 > 1e14 ? t3 : parseFloat(t3.toPrecision(e3 || 14));
        }
        (r || (r = {})).messages = [], Math.easeInOutSine = function(t3) {
          return -0.5 * (Math.cos(Math.PI * t3) - 1);
        };
        let M = Array.prototype.find ? function(t3, e3) {
          return t3.find(e3);
        } : function(t3, e3) {
          let i3;
          let s2 = t3.length;
          for (i3 = 0; i3 < s2; i3++) if (e3(t3[i3], i3)) return t3[i3];
        };
        function k(t3, e3, i3) {
          for (let s2 in t3) Object.hasOwnProperty.call(t3, s2) && e3.call(i3 || t3[s2], t3[s2], s2, t3);
        }
        function S(t3, e3, i3) {
          function s2(e4, i4) {
            let s3 = t3.removeEventListener;
            s3 && s3.call(t3, e4, i4, false);
          }
          function o2(i4) {
            let o3, r3;
            t3.nodeName && (e3 ? (o3 = {})[e3] = true : o3 = i4, k(o3, function(t4, e4) {
              if (i4[e4]) for (r3 = i4[e4].length; r3--; ) s2(e4, i4[e4][r3].fn);
            }));
          }
          let r2 = "function" == typeof t3 && t3.prototype || t3;
          if (Object.hasOwnProperty.call(r2, "hcEvents")) {
            let t4 = r2.hcEvents;
            if (e3) {
              let r3 = t4[e3] || [];
              i3 ? (t4[e3] = r3.filter(function(t5) {
                return i3 !== t5.fn;
              }), s2(e3, i3)) : (o2(t4), t4[e3] = []);
            } else o2(t4), delete r2.hcEvents;
          }
        }
        function C(e3, i3, o2, r2) {
          if (o2 = o2 || {}, s.createEvent && (e3.dispatchEvent || e3.fireEvent && e3 !== t2)) {
            let t3 = s.createEvent("Events");
            t3.initEvent(i3, true, true), o2 = m(t3, o2), e3.dispatchEvent ? e3.dispatchEvent(o2) : e3.fireEvent(i3, o2);
          } else if (e3.hcEvents) {
            o2.target || m(o2, {
              preventDefault: function() {
                o2.defaultPrevented = true;
              },
              target: e3,
              type: i3
            });
            let t3 = [], s2 = e3, r3 = false;
            for (; s2.hcEvents; ) Object.hasOwnProperty.call(s2, "hcEvents") && s2.hcEvents[i3] && (t3.length && (r3 = true), t3.unshift.apply(t3, s2.hcEvents[i3])), s2 = Object.getPrototypeOf(s2);
            r3 && t3.sort((t4, e4) => t4.order - e4.order), t3.forEach((t4) => {
              false === t4.fn.call(e3, o2) && o2.preventDefault();
            });
          }
          r2 && !o2.defaultPrevented && r2.call(e3, o2);
        }
        k({
          map: "map",
          each: "forEach",
          grep: "filter",
          reduce: "reduce",
          some: "some"
        }, function(e3, i3) {
          t2[i3] = function(t3) {
            return r(32, false, void 0, {
              [`Highcharts.${i3}`]: `use Array.${e3}`
            }), Array.prototype[e3].apply(t3, [].slice.call(arguments, 1));
          };
        });
        let w = function() {
          let t3 = Math.random().toString(36).substring(2, 9) + "-", i3 = 0;
          return function() {
            return "highcharts-" + (e2 ? "" : t3) + i3++;
          };
        }();
        return o.jQuery && (o.jQuery.fn.highcharts = function() {
          let e3 = [].slice.call(arguments);
          if (this[0]) return e3[0] ? (new t2[a(e3[0]) ? e3.shift() : "Chart"](this[0], e3[0], e3[1]), this) : i2[g(this[0], "data-highcharts-chart")];
        }), {
          addEvent: function(e3, i3, s2, o2 = {}) {
            let r2 = "function" == typeof e3 && e3.prototype || e3;
            Object.hasOwnProperty.call(r2, "hcEvents") || (r2.hcEvents = {});
            let n2 = r2.hcEvents;
            t2.Point && e3 instanceof t2.Point && e3.series && e3.series.chart && (e3.series.chart.runTrackerClick = true);
            let a2 = e3.addEventListener;
            a2 && a2.call(e3, i3, s2, !!t2.supportsPassiveEvents && {
              passive: void 0 === o2.passive ? -1 !== i3.indexOf("touch") : o2.passive,
              capture: false
            }), n2[i3] || (n2[i3] = []);
            let l2 = {
              fn: s2,
              order: "number" == typeof o2.order ? o2.order : 1 / 0
            };
            return n2[i3].push(l2), n2[i3].sort((t3, e4) => t3.order - e4.order), function() {
              S(e3, i3, s2);
            };
          },
          arrayMax: function(t3) {
            let e3 = t3.length, i3 = t3[0];
            for (; e3--; ) t3[e3] > i3 && (i3 = t3[e3]);
            return i3;
          },
          arrayMin: function(t3) {
            let e3 = t3.length, i3 = t3[0];
            for (; e3--; ) t3[e3] < i3 && (i3 = t3[e3]);
            return i3;
          },
          attr: g,
          clamp: function(t3, e3, i3) {
            return t3 > e3 ? t3 < i3 ? t3 : i3 : e3;
          },
          clearTimeout: function(t3) {
            u(t3) && clearTimeout(t3);
          },
          correctFloat: v,
          createElement: function(t3, e3, i3, o2, r2) {
            let n2 = s.createElement(t3);
            return e3 && m(n2, e3), r2 && y(n2, {
              padding: "0",
              border: "none",
              margin: "0"
            }), i3 && y(n2, i3), o2 && o2.appendChild(n2), n2;
          },
          crisp: (t3, e3 = 0, i3) => {
            let s2 = e3 % 2 / 2, o2 = i3 ? -1 : 1;
            return (Math.round(t3 * o2 - s2) + s2) * o2;
          },
          css: y,
          defined: u,
          destroyObjectProperties: function(t3, e3, i3) {
            k(t3, function(s2, o2) {
              s2 !== e3 && s2?.destroy && s2.destroy(), (s2?.destroy || !i3) && delete t3[o2];
            });
          },
          diffObjects: function(t3, e3, i3, s2) {
            let o2 = {};
            return function t4(e4, o3, r2, n2) {
              let a2 = i3 ? o3 : e4;
              k(e4, function(i4, d2) {
                if (!n2 && s2 && s2.indexOf(d2) > -1 && o3[d2]) {
                  i4 = f(i4), r2[d2] = [];
                  for (let e5 = 0; e5 < Math.max(i4.length, o3[d2].length); e5++) o3[d2][e5] && (void 0 === i4[e5] ? r2[d2][e5] = o3[d2][e5] : (r2[d2][e5] = {}, t4(i4[e5], o3[d2][e5], r2[d2][e5], n2 + 1)));
                } else h(i4, true) && !i4.nodeType ? (r2[d2] = l(i4) ? [] : {}, t4(i4, o3[d2] || {}, r2[d2], n2 + 1), 0 !== Object.keys(r2[d2]).length || "colorAxis" === d2 && 0 === n2 || delete r2[d2]) : (e4[d2] !== o3[d2] || d2 in e4 && !(d2 in o3)) && "__proto__" !== d2 && "constructor" !== d2 && (r2[d2] = a2[d2]);
              });
            }(t3, e3, o2, 0), o2;
          },
          discardElement: function(t3) {
            t3 && t3.parentElement && t3.parentElement.removeChild(t3);
          },
          erase: function(t3, e3) {
            let i3 = t3.length;
            for (; i3--; ) if (t3[i3] === e3) {
              t3.splice(i3, 1);
              break;
            }
          },
          error: r,
          extend: m,
          extendClass: function(t3, e3) {
            let i3 = function() {
            };
            return i3.prototype = new t3(), m(i3.prototype, e3), i3;
          },
          find: M,
          fireEvent: C,
          getClosestDistance: function(t3, e3) {
            let i3, s2, o2, r2;
            let n2 = !e3;
            return t3.forEach((t4) => {
              if (t4.length > 1) for (r2 = s2 = t4.length - 1; r2 > 0; r2--) (o2 = t4[r2] - t4[r2 - 1]) < 0 && !n2 ? (e3?.(), e3 = void 0) : o2 && (void 0 === i3 || o2 < i3) && (i3 = o2);
            }), i3;
          },
          getMagnitude: b,
          getNestedProperty: function(t3, e3) {
            let i3 = t3.split(".");
            for (; i3.length && u(e3); ) {
              let t4 = i3.shift();
              if (void 0 === t4 || "__proto__" === t4) return;
              if ("this" === t4) {
                let t5;
                return h(e3) && (t5 = e3["@this"]), t5 ?? e3;
              }
              let s2 = e3[t4];
              if (!u(s2) || "function" == typeof s2 || "number" == typeof s2.nodeType || s2 === o) return;
              e3 = s2;
            }
            return e3;
          },
          getStyle: function t3(e3, i3, s2) {
            let r2;
            if ("width" === i3) {
              let i4 = Math.min(e3.offsetWidth, e3.scrollWidth), s3 = e3.getBoundingClientRect && e3.getBoundingClientRect().width;
              return s3 < i4 && s3 >= i4 - 1 && (i4 = Math.floor(s3)), Math.max(0, i4 - (t3(e3, "padding-left", true) || 0) - (t3(e3, "padding-right", true) || 0));
            }
            if ("height" === i3) return Math.max(0, Math.min(e3.offsetHeight, e3.scrollHeight) - (t3(e3, "padding-top", true) || 0) - (t3(e3, "padding-bottom", true) || 0));
            let a2 = o.getComputedStyle(e3, void 0);
            return a2 && (r2 = a2.getPropertyValue(i3), x(s2, "opacity" !== i3) && (r2 = n(r2))), r2;
          },
          inArray: function(t3, e3, i3) {
            return r(32, false, void 0, {
              "Highcharts.inArray": "use Array.indexOf"
            }), e3.indexOf(t3, i3);
          },
          insertItem: function(t3, e3) {
            let i3;
            let s2 = t3.options.index, o2 = e3.length;
            for (i3 = t3.options.isInternal ? o2 : 0; i3 < o2 + 1; i3++) if (!e3[i3] || p(s2) && s2 < x(e3[i3].options.index, e3[i3]._i) || e3[i3].options.isInternal) {
              e3.splice(i3, 0, t3);
              break;
            }
            return i3;
          },
          isArray: l,
          isClass: c,
          isDOMElement: d,
          isFunction: function(t3) {
            return "function" == typeof t3;
          },
          isNumber: p,
          isObject: h,
          isString: a,
          keys: function(t3) {
            return r(32, false, void 0, {
              "Highcharts.keys": "use Object.keys"
            }), Object.keys(t3);
          },
          merge: function() {
            let t3, e3 = arguments, i3 = {}, s2 = function(t4, e4) {
              return "object" != typeof t4 && (t4 = {}), k(e4, function(i4, o3) {
                "__proto__" !== o3 && "constructor" !== o3 && (!h(i4, true) || c(i4) || d(i4) ? t4[o3] = e4[o3] : t4[o3] = s2(t4[o3] || {}, i4));
              }), t4;
            };
            true === e3[0] && (i3 = e3[1], e3 = Array.prototype.slice.call(e3, 2));
            let o2 = e3.length;
            for (t3 = 0; t3 < o2; t3++) i3 = s2(i3, e3[t3]);
            return i3;
          },
          normalizeTickInterval: function(t3, e3, i3, s2, o2) {
            let r2, n2 = t3;
            i3 = x(i3, b(t3));
            let a2 = t3 / i3;
            for (!e3 && (e3 = o2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === s2 && (1 === i3 ? e3 = e3.filter(function(t4) {
              return t4 % 1 == 0;
            }) : i3 <= 0.1 && (e3 = [1 / i3]))), r2 = 0; r2 < e3.length && (n2 = e3[r2], (!o2 || !(n2 * i3 >= t3)) && (o2 || !(a2 <= (e3[r2] + (e3[r2 + 1] || e3[r2])) / 2))); r2++) ;
            return v(n2 * i3, -Math.round(Math.log(1e-3) / Math.LN10));
          },
          objectEach: k,
          offset: function(t3) {
            let e3 = s.documentElement, i3 = t3.parentElement || t3.parentNode ? t3.getBoundingClientRect() : {
              top: 0,
              left: 0,
              width: 0,
              height: 0
            };
            return {
              top: i3.top + (o.pageYOffset || e3.scrollTop) - (e3.clientTop || 0),
              left: i3.left + (o.pageXOffset || e3.scrollLeft) - (e3.clientLeft || 0),
              width: i3.width,
              height: i3.height
            };
          },
          pad: function(t3, e3, i3) {
            return Array((e3 || 2) + 1 - String(t3).replace("-", "").length).join(i3 || "0") + t3;
          },
          pick: x,
          pInt: n,
          pushUnique: function(t3, e3) {
            return 0 > t3.indexOf(e3) && !!t3.push(e3);
          },
          relativeLength: function(t3, e3, i3) {
            return /%$/.test(t3) ? e3 * parseFloat(t3) / 100 + (i3 || 0) : parseFloat(t3);
          },
          removeEvent: S,
          replaceNested: function(t3, ...e3) {
            let i3, s2;
            do
              for (s2 of (i3 = t3, e3)) t3 = t3.replace(s2[0], s2[1]);
            while (t3 !== i3);
            return t3;
          },
          splat: f,
          stableSort: function(t3, e3) {
            let i3, s2;
            let o2 = t3.length;
            for (s2 = 0; s2 < o2; s2++) t3[s2].safeI = s2;
            for (t3.sort(function(t4, s3) {
              return 0 === (i3 = e3(t4, s3)) ? t4.safeI - s3.safeI : i3;
            }), s2 = 0; s2 < o2; s2++) delete t3[s2].safeI;
          },
          syncTimeout: function(t3, e3, i3) {
            return e3 > 0 ? setTimeout(t3, e3, i3) : (t3.call(0, i3), -1);
          },
          timeUnits: {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 24192e5,
            year: 314496e5
          },
          uniqueKey: w,
          useSerialIds: function(t3) {
            return e2 = x(t3, e2);
          },
          wrap: function(t3, e3, i3) {
            let s2 = t3[e3];
            t3[e3] = function() {
              let t4 = arguments, e4 = this;
              return i3.apply(this, [function() {
                return s2.apply(e4, arguments.length ? arguments : t4);
              }].concat([].slice.call(arguments)));
            };
          }
        };
      }), i(e, "Core/Chart/ChartDefaults.js", [], function() {
        return {
          alignThresholds: false,
          panning: {
            enabled: false,
            type: "x"
          },
          styledMode: false,
          borderRadius: 0,
          colorCount: 10,
          allowMutatingData: true,
          ignoreHiddenSeries: true,
          spacing: [10, 10, 15, 10],
          resetZoomButton: {
            theme: {},
            position: {}
          },
          reflow: true,
          type: "line",
          zooming: {
            singleTouch: false,
            resetButton: {
              theme: {
                zIndex: 6
              },
              position: {
                align: "right",
                x: -10,
                y: 10
              }
            }
          },
          width: null,
          height: null,
          borderColor: "#334eff",
          backgroundColor: "#ffffff",
          plotBorderColor: "#cccccc"
        };
      }), i(e, "Core/Color/Palettes.js", [], function() {
        return {
          colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"]
        };
      }), i(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          win: i2
        } = t2, {
          defined: s,
          error: o,
          extend: r,
          isNumber: n,
          isObject: a,
          merge: l,
          objectEach: h,
          pad: d,
          pick: c,
          splat: p,
          timeUnits: u
        } = e2, g = t2.isSafari && i2.Intl && i2.Intl.DateTimeFormat.prototype.formatRange, f = t2.isSafari && i2.Intl && !i2.Intl.DateTimeFormat.prototype.formatRange;
        class m {
          constructor(t3) {
            this.options = {}, this.useUTC = false, this.variableTimezone = false, this.Date = i2.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(t3);
          }
          get(t3, e3) {
            if (this.variableTimezone || this.timezoneOffset) {
              let i3 = e3.getTime(), s2 = i3 - this.getTimezoneOffset(e3);
              e3.setTime(s2);
              let o2 = e3["getUTC" + t3]();
              return e3.setTime(i3), o2;
            }
            return this.useUTC ? e3["getUTC" + t3]() : e3["get" + t3]();
          }
          set(t3, e3, i3) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === t3 || "Seconds" === t3 || "Minutes" === t3 && this.getTimezoneOffset(e3) % 36e5 == 0) return e3["setUTC" + t3](i3);
              let s2 = this.getTimezoneOffset(e3), o2 = e3.getTime() - s2;
              e3.setTime(o2), e3["setUTC" + t3](i3);
              let r2 = this.getTimezoneOffset(e3);
              return o2 = e3.getTime() + r2, e3.setTime(o2);
            }
            return this.useUTC || g && "FullYear" === t3 ? e3["setUTC" + t3](i3) : e3["set" + t3](i3);
          }
          update(t3 = {}) {
            let e3 = c(t3.useUTC, true);
            this.options = t3 = l(true, this.options, t3), this.Date = t3.Date || i2.Date || Date, this.useUTC = e3, this.timezoneOffset = e3 && t3.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = e3 && !!(t3.getTimezoneOffset || t3.timezone);
          }
          makeTime(t3, e3, i3, s2, o2, r2) {
            let n2, a2, l2;
            return this.useUTC ? (n2 = this.Date.UTC.apply(0, arguments), a2 = this.getTimezoneOffset(n2), n2 += a2, a2 !== (l2 = this.getTimezoneOffset(n2)) ? n2 += l2 - a2 : a2 - 36e5 !== this.getTimezoneOffset(n2 - 36e5) || f || (n2 -= 36e5)) : n2 = new this.Date(t3, e3, c(i3, 1), c(s2, 0), c(o2, 0), c(r2, 0)).getTime(), n2;
          }
          timezoneOffsetFunction() {
            let t3 = this, e3 = this.options, i3 = e3.getTimezoneOffset;
            return this.useUTC ? e3.timezone ? (t4) => {
              try {
                let i4 = `shortOffset,${e3.timezone || ""}`, [s2, o2, r2, a2, l2 = 0] = (m.formatCache[i4] = m.formatCache[i4] || Intl.DateTimeFormat("en", {
                  timeZone: e3.timezone,
                  timeZoneName: "shortOffset"
                })).format(t4).split(/(GMT|:)/).map(Number), h2 = -(36e5 * (r2 + l2 / 60));
                if (n(h2)) return h2;
              } catch (t5) {
                o(34);
              }
              return 0;
            } : this.useUTC && i3 ? (t4) => 6e4 * i3(t4.valueOf()) : () => 6e4 * (t3.timezoneOffset || 0) : (t4) => 6e4 * new Date(t4.toString()).getTimezoneOffset();
          }
          dateFormat(e3, i3, o2) {
            if (!s(i3) || isNaN(i3)) return t2.defaultOptions.lang && t2.defaultOptions.lang.invalidDate || "";
            e3 = c(e3, "%Y-%m-%d %H:%M:%S");
            let n2 = this, a2 = new this.Date(i3), l2 = this.get("Hours", a2), p2 = this.get("Day", a2), u2 = this.get("Date", a2), g2 = this.get("Month", a2), f2 = this.get("FullYear", a2), m2 = t2.defaultOptions.lang, x = m2 && m2.weekdays, y = m2 && m2.shortWeekdays;
            return h(r({
              a: y ? y[p2] : x[p2].substr(0, 3),
              A: x[p2],
              d: d(u2),
              e: d(u2, 2, " "),
              w: p2,
              b: m2.shortMonths[g2],
              B: m2.months[g2],
              m: d(g2 + 1),
              o: g2 + 1,
              y: f2.toString().substr(2, 2),
              Y: f2,
              H: d(l2),
              k: l2,
              I: d(l2 % 12 || 12),
              l: l2 % 12 || 12,
              M: d(this.get("Minutes", a2)),
              p: l2 < 12 ? "AM" : "PM",
              P: l2 < 12 ? "am" : "pm",
              S: d(this.get("Seconds", a2)),
              L: d(Math.floor(i3 % 1e3), 3)
            }, t2.dateFormats), function(t3, s2) {
              for (; -1 !== e3.indexOf("%" + s2); ) e3 = e3.replace("%" + s2, "function" == typeof t3 ? t3.call(n2, i3) : t3);
            }), o2 ? e3.substr(0, 1).toUpperCase() + e3.substr(1) : e3;
          }
          resolveDTLFormat(t3) {
            return a(t3, true) ? t3 : {
              main: (t3 = p(t3))[0],
              from: t3[1],
              to: t3[2]
            };
          }
          getTimeTicks(t3, e3, i3, o2) {
            let n2, a2, l2, h2;
            let d2 = this, p2 = d2.Date, g2 = [], f2 = {}, m2 = new p2(e3), x = t3.unitRange, y = t3.count || 1;
            if (o2 = c(o2, 1), s(e3)) {
              d2.set("Milliseconds", m2, x >= u.second ? 0 : y * Math.floor(d2.get("Milliseconds", m2) / y)), x >= u.second && d2.set("Seconds", m2, x >= u.minute ? 0 : y * Math.floor(d2.get("Seconds", m2) / y)), x >= u.minute && d2.set("Minutes", m2, x >= u.hour ? 0 : y * Math.floor(d2.get("Minutes", m2) / y)), x >= u.hour && d2.set("Hours", m2, x >= u.day ? 0 : y * Math.floor(d2.get("Hours", m2) / y)), x >= u.day && d2.set("Date", m2, x >= u.month ? 1 : Math.max(1, y * Math.floor(d2.get("Date", m2) / y))), x >= u.month && (d2.set("Month", m2, x >= u.year ? 0 : y * Math.floor(d2.get("Month", m2) / y)), a2 = d2.get("FullYear", m2)), x >= u.year && (a2 -= a2 % y, d2.set("FullYear", m2, a2)), x === u.week && (h2 = d2.get("Day", m2), d2.set("Date", m2, d2.get("Date", m2) - h2 + o2 + (h2 < o2 ? -7 : 0))), a2 = d2.get("FullYear", m2);
              let t4 = d2.get("Month", m2), r2 = d2.get("Date", m2), c2 = d2.get("Hours", m2);
              e3 = m2.getTime(), (d2.variableTimezone || !d2.useUTC) && s(i3) && (l2 = i3 - e3 > 4 * u.month || d2.getTimezoneOffset(e3) !== d2.getTimezoneOffset(i3));
              let p3 = m2.getTime();
              for (n2 = 1; p3 < i3; ) g2.push(p3), x === u.year ? p3 = d2.makeTime(a2 + n2 * y, 0) : x === u.month ? p3 = d2.makeTime(a2, t4 + n2 * y) : l2 && (x === u.day || x === u.week) ? p3 = d2.makeTime(a2, t4, r2 + n2 * y * (x === u.day ? 1 : 7)) : l2 && x === u.hour && y > 1 ? p3 = d2.makeTime(a2, t4, r2, c2 + n2 * y) : p3 += x * y, n2++;
              g2.push(p3), x <= u.hour && g2.length < 1e4 && g2.forEach(function(t5) {
                t5 % 18e5 == 0 && "000000000" === d2.dateFormat("%H%M%S%L", t5) && (f2[t5] = "day");
              });
            }
            return g2.info = r(t3, {
              higherRanks: f2,
              totalRange: x * y
            }), g2;
          }
          getDateFormat(t3, e3, i3, s2) {
            let o2 = this.dateFormat("%m-%d %H:%M:%S.%L", e3), r2 = "01-01 00:00:00.000", n2 = {
              millisecond: 15,
              second: 12,
              minute: 9,
              hour: 6,
              day: 3
            }, a2 = "millisecond", l2 = a2;
            for (a2 in u) {
              if (t3 === u.week && +this.dateFormat("%w", e3) === i3 && o2.substr(6) === r2.substr(6)) {
                a2 = "week";
                break;
              }
              if (u[a2] > t3) {
                a2 = l2;
                break;
              }
              if (n2[a2] && o2.substr(n2[a2]) !== r2.substr(n2[a2])) break;
              "week" !== a2 && (l2 = a2);
            }
            return this.resolveDTLFormat(s2[a2]).main;
          }
        }
        return m.formatCache = {}, m;
      }), i(e, "Core/Defaults.js", [e["Core/Chart/ChartDefaults.js"], e["Core/Globals.js"], e["Core/Color/Palettes.js"], e["Core/Time.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let {
          isTouchDevice: r
        } = e2, {
          fireEvent: n,
          merge: a
        } = o, l = {
          colors: i2.colors,
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            loading: "Loading...",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            decimalPoint: ".",
            numericSymbols: ["k", "M", "G", "T", "P", "E"],
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
          },
          global: {
            buttonTheme: {
              fill: "#f7f7f7",
              padding: 8,
              r: 2,
              stroke: "#cccccc",
              "stroke-width": 1,
              style: {
                color: "#333333",
                cursor: "pointer",
                fontSize: "0.8em",
                fontWeight: "normal"
              },
              states: {
                hover: {
                  fill: "#e6e6e6"
                },
                select: {
                  fill: "#e6e9ff",
                  style: {
                    color: "#000000",
                    fontWeight: "bold"
                  }
                },
                disabled: {
                  style: {
                    color: "#cccccc"
                  }
                }
              }
            }
          },
          time: {
            Date: void 0,
            getTimezoneOffset: void 0,
            timezone: void 0,
            timezoneOffset: 0,
            useUTC: true
          },
          chart: t2,
          title: {
            style: {
              color: "#333333",
              fontWeight: "bold"
            },
            text: "Chart title",
            align: "center",
            margin: 15,
            widthAdjust: -44
          },
          subtitle: {
            style: {
              color: "#666666",
              fontSize: "0.8em"
            },
            text: "",
            align: "center",
            widthAdjust: -44
          },
          caption: {
            margin: 15,
            style: {
              color: "#666666",
              fontSize: "0.8em"
            },
            text: "",
            align: "left",
            verticalAlign: "bottom"
          },
          plotOptions: {},
          legend: {
            enabled: true,
            align: "center",
            alignColumns: true,
            className: "highcharts-no-tooltip",
            events: {},
            layout: "horizontal",
            itemMarginBottom: 2,
            itemMarginTop: 2,
            labelFormatter: function() {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: {
              style: {
                fontSize: "0.8em"
              },
              activeColor: "#0022ff",
              inactiveColor: "#cccccc"
            },
            itemStyle: {
              color: "#333333",
              cursor: "pointer",
              fontSize: "0.8em",
              textDecoration: "none",
              textOverflow: "ellipsis"
            },
            itemHoverStyle: {
              color: "#000000"
            },
            itemHiddenStyle: {
              color: "#666666",
              textDecoration: "line-through"
            },
            shadow: false,
            itemCheckboxStyle: {
              position: "absolute",
              width: "13px",
              height: "13px"
            },
            squareSymbol: true,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
              style: {
                fontSize: "0.8em",
                fontWeight: "bold"
              }
            }
          },
          loading: {
            labelStyle: {
              fontWeight: "bold",
              position: "relative",
              top: "45%"
            },
            style: {
              position: "absolute",
              backgroundColor: "#ffffff",
              opacity: 0.5,
              textAlign: "center"
            }
          },
          tooltip: {
            enabled: true,
            animation: {
              duration: 300,
              easing: (t3) => Math.sqrt(1 - Math.pow(t3 - 1, 2))
            },
            borderRadius: 3,
            dateTimeLabelFormats: {
              millisecond: "%A, %e %b, %H:%M:%S.%L",
              second: "%A, %e %b, %H:%M:%S",
              minute: "%A, %e %b, %H:%M",
              hour: "%A, %e %b, %H:%M",
              day: "%A, %e %b %Y",
              week: "Week from %A, %e %b %Y",
              month: "%B %Y",
              year: "%Y"
            },
            footerFormat: "",
            headerShape: "callout",
            hideDelay: 500,
            padding: 8,
            shape: "callout",
            shared: false,
            snap: r ? 25 : 10,
            headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: "#ffffff",
            borderWidth: void 0,
            shadow: true,
            stickOnContact: false,
            style: {
              color: "#333333",
              cursor: "default",
              fontSize: "0.8em"
            },
            useHTML: false
          },
          credits: {
            enabled: true,
            href: "https://www.highcharts.com?credits",
            position: {
              align: "right",
              x: -10,
              verticalAlign: "bottom",
              y: -5
            },
            style: {
              cursor: "pointer",
              color: "#999999",
              fontSize: "0.6em"
            },
            text: "Highcharts.com"
          }
        };
        l.chart.styledMode = false;
        let h = new s(l.time);
        return {
          defaultOptions: l,
          defaultTime: h,
          getOptions: function() {
            return l;
          },
          setOptions: function(t3) {
            return n(e2, "setOptions", {
              options: t3
            }), a(true, l, t3), (t3.time || t3.global) && (e2.time ? e2.time.update(a(l.global, l.time, t3.global, t3.time)) : e2.time = h), l;
          }
        };
      }), i(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          isNumber: i2,
          merge: s,
          pInt: o
        } = e2;
        class r {
          static parse(t3) {
            return t3 ? new r(t3) : r.None;
          }
          constructor(e3) {
            let i3, s2, o2, n;
            this.rgba = [NaN, NaN, NaN, NaN], this.input = e3;
            let a = t2.Color;
            if (a && a !== r) return new a(e3);
            if ("object" == typeof e3 && void 0 !== e3.stops) this.stops = e3.stops.map((t3) => new r(t3[1]));
            else if ("string" == typeof e3) {
              if (this.input = e3 = r.names[e3.toLowerCase()] || e3, "#" === e3.charAt(0)) {
                let t3 = e3.length, i4 = parseInt(e3.substr(1), 16);
                7 === t3 ? s2 = [(16711680 & i4) >> 16, (65280 & i4) >> 8, 255 & i4, 1] : 4 === t3 && (s2 = [(3840 & i4) >> 4 | (3840 & i4) >> 8, (240 & i4) >> 4 | 240 & i4, (15 & i4) << 4 | 15 & i4, 1]);
              }
              if (!s2) for (o2 = r.parsers.length; o2-- && !s2; ) (i3 = (n = r.parsers[o2]).regex.exec(e3)) && (s2 = n.parse(i3));
            }
            s2 && (this.rgba = s2);
          }
          get(t3) {
            let e3 = this.input, o2 = this.rgba;
            if ("object" == typeof e3 && void 0 !== this.stops) {
              let i3 = s(e3);
              return i3.stops = [].slice.call(i3.stops), this.stops.forEach((e4, s2) => {
                i3.stops[s2] = [i3.stops[s2][0], e4.get(t3)];
              }), i3;
            }
            return o2 && i2(o2[0]) ? "rgb" !== t3 && (t3 || 1 !== o2[3]) ? "a" === t3 ? `${o2[3]}` : "rgba(" + o2.join(",") + ")" : "rgb(" + o2[0] + "," + o2[1] + "," + o2[2] + ")" : e3;
          }
          brighten(t3) {
            let e3 = this.rgba;
            if (this.stops) this.stops.forEach(function(e4) {
              e4.brighten(t3);
            });
            else if (i2(t3) && 0 !== t3) for (let i3 = 0; i3 < 3; i3++) e3[i3] += o(255 * t3), e3[i3] < 0 && (e3[i3] = 0), e3[i3] > 255 && (e3[i3] = 255);
            return this;
          }
          setOpacity(t3) {
            return this.rgba[3] = t3, this;
          }
          tweenTo(t3, e3) {
            let s2 = this.rgba, o2 = t3.rgba;
            if (!i2(s2[0]) || !i2(o2[0])) return t3.input || "none";
            let r2 = 1 !== o2[3] || 1 !== s2[3];
            return (r2 ? "rgba(" : "rgb(") + Math.round(o2[0] + (s2[0] - o2[0]) * (1 - e3)) + "," + Math.round(o2[1] + (s2[1] - o2[1]) * (1 - e3)) + "," + Math.round(o2[2] + (s2[2] - o2[2]) * (1 - e3)) + (r2 ? "," + (o2[3] + (s2[3] - o2[3]) * (1 - e3)) : "") + ")";
          }
        }
        return r.names = {
          white: "#ffffff",
          black: "#000000"
        }, r.parsers = [{
          regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
          parse: function(t3) {
            return [o(t3[1]), o(t3[2]), o(t3[3]), parseFloat(t3[4], 10)];
          }
        }, {
          regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
          parse: function(t3) {
            return [o(t3[1]), o(t3[2]), o(t3[3]), 1];
          }
        }], r.None = new r(""), r;
      }), i(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          parse: s
        } = t2, {
          win: o
        } = e2, {
          isNumber: r,
          objectEach: n
        } = i2;
        class a {
          constructor(t3, e3, i3) {
            this.pos = NaN, this.options = e3, this.elem = t3, this.prop = i3;
          }
          dSetter() {
            let t3 = this.paths, e3 = t3 && t3[0], i3 = t3 && t3[1], s2 = this.now || 0, o2 = [];
            if (1 !== s2 && e3 && i3) {
              if (e3.length === i3.length && s2 < 1) for (let t4 = 0; t4 < i3.length; t4++) {
                let n2 = e3[t4], a2 = i3[t4], l = [];
                for (let t5 = 0; t5 < a2.length; t5++) {
                  let e4 = n2[t5], i4 = a2[t5];
                  r(e4) && r(i4) && !("A" === a2[0] && (4 === t5 || 5 === t5)) ? l[t5] = e4 + s2 * (i4 - e4) : l[t5] = i4;
                }
                o2.push(l);
              }
              else o2 = i3;
            } else o2 = this.toD || [];
            this.elem.attr("d", o2, void 0, true);
          }
          update() {
            let t3 = this.elem, e3 = this.prop, i3 = this.now, s2 = this.options.step;
            this[e3 + "Setter"] ? this[e3 + "Setter"]() : t3.attr ? t3.element && t3.attr(e3, i3, null, true) : t3.style[e3] = i3 + this.unit, s2 && s2.call(t3, i3, this);
          }
          run(t3, e3, i3) {
            let s2 = this, r2 = s2.options, n2 = function(t4) {
              return !n2.stopped && s2.step(t4);
            }, l = o.requestAnimationFrame || function(t4) {
              setTimeout(t4, 13);
            }, h = function() {
              for (let t4 = 0; t4 < a.timers.length; t4++) a.timers[t4]() || a.timers.splice(t4--, 1);
              a.timers.length && l(h);
            };
            t3 !== e3 || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t3, this.end = e3, this.unit = i3, this.now = this.start, this.pos = 0, n2.elem = this.elem, n2.prop = this.prop, n2() && 1 === a.timers.push(n2) && l(h)) : (delete r2.curAnim[this.prop], r2.complete && 0 === Object.keys(r2.curAnim).length && r2.complete.call(this.elem));
          }
          step(t3) {
            let e3, i3;
            let s2 = +/* @__PURE__ */ new Date(), o2 = this.options, r2 = this.elem, a2 = o2.complete, l = o2.duration, h = o2.curAnim;
            return r2.attr && !r2.element ? e3 = false : t3 || s2 >= l + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), h[this.prop] = true, i3 = true, n(h, function(t4) {
              true !== t4 && (i3 = false);
            }), i3 && a2 && a2.call(r2), e3 = false) : (this.pos = o2.easing((s2 - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e3 = true), e3;
          }
          initPath(t3, e3, i3) {
            let s2 = t3.startX, o2 = t3.endX, n2 = i3.slice(), a2 = t3.isArea, l = a2 ? 2 : 1, h = e3 && i3.length > e3.length && i3.hasStackedCliffs, d, c, p, u, g = e3 && e3.slice();
            if (!g || h) return [n2, n2];
            function f(t4, e4) {
              for (; t4.length < c; ) {
                let i4 = t4[0], s3 = e4[c - t4.length];
                if (s3 && "M" === i4[0] && ("C" === s3[0] ? t4[0] = ["C", i4[1], i4[2], i4[1], i4[2], i4[1], i4[2]] : t4[0] = ["L", i4[1], i4[2]]), t4.unshift(i4), a2) {
                  let e5 = t4.pop();
                  t4.push(t4[t4.length - 1], e5);
                }
              }
            }
            function m(t4) {
              for (; t4.length < c; ) {
                let e4 = t4[Math.floor(t4.length / l) - 1].slice();
                if ("C" === e4[0] && (e4[1] = e4[5], e4[2] = e4[6]), a2) {
                  let i4 = t4[Math.floor(t4.length / l)].slice();
                  t4.splice(t4.length / 2, 0, e4, i4);
                } else t4.push(e4);
              }
            }
            if (s2 && o2 && o2.length) {
              for (p = 0; p < s2.length; p++) {
                if (s2[p] === o2[0]) {
                  d = p;
                  break;
                }
                if (s2[0] === o2[o2.length - s2.length + p]) {
                  d = p, u = true;
                  break;
                }
                if (s2[s2.length - 1] === o2[o2.length - s2.length + p]) {
                  d = s2.length - p;
                  break;
                }
              }
              void 0 === d && (g = []);
            }
            return g.length && r(d) && (c = n2.length + d * l, u ? (f(g, n2), m(n2)) : (f(n2, g), m(g))), [g, n2];
          }
          fillSetter() {
            a.prototype.strokeSetter.apply(this, arguments);
          }
          strokeSetter() {
            this.elem.attr(this.prop, s(this.start).tweenTo(s(this.end), this.pos), void 0, true);
          }
        }
        return a.timers = [], a;
      }), i(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          defined: i2,
          getStyle: s,
          isArray: o,
          isNumber: r,
          isObject: n,
          merge: a,
          objectEach: l,
          pick: h
        } = e2;
        function d(t3) {
          return n(t3) ? a({
            duration: 500,
            defer: 0
          }, t3) : {
            duration: t3 ? 500 : 0,
            defer: 0
          };
        }
        function c(e3, i3) {
          let s2 = t2.timers.length;
          for (; s2--; ) t2.timers[s2].elem !== e3 || i3 && i3 !== t2.timers[s2].prop || (t2.timers[s2].stopped = true);
        }
        return {
          animate: function(e3, i3, h2) {
            let d2, p = "", u, g, f;
            n(h2) || (f = arguments, h2 = {
              duration: f[2],
              easing: f[3],
              complete: f[4]
            }), r(h2.duration) || (h2.duration = 400), h2.easing = "function" == typeof h2.easing ? h2.easing : Math[h2.easing] || Math.easeInOutSine, h2.curAnim = a(i3), l(i3, function(r2, n2) {
              c(e3, n2), g = new t2(e3, h2, n2), u = void 0, "d" === n2 && o(i3.d) ? (g.paths = g.initPath(e3, e3.pathArray, i3.d), g.toD = i3.d, d2 = 0, u = 1) : e3.attr ? d2 = e3.attr(n2) : (d2 = parseFloat(s(e3, n2)) || 0, "opacity" !== n2 && (p = "px")), u || (u = r2), "string" == typeof u && u.match("px") && (u = u.replace(/px/g, "")), g.run(d2, u, p);
            });
          },
          animObject: d,
          getDeferredAnimation: function(t3, e3, s2) {
            let o2 = d(e3), r2 = s2 ? [s2] : t3.series, a2 = 0, l2 = 0;
            return r2.forEach((t4) => {
              let s3 = d(t4.options.animation);
              a2 = n(e3) && i2(e3.defer) ? o2.defer : Math.max(a2, s3.duration + s3.defer), l2 = Math.min(o2.duration, s3.duration);
            }), t3.renderer.forExport && (a2 = 0), {
              defer: Math.max(0, a2 - l2),
              duration: Math.min(a2, l2)
            };
          },
          setAnimation: function(t3, e3) {
            e3.renderer.globalAnimation = h(t3, e3.options.chart.animation, true);
          },
          stop: c
        };
      }), i(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          SVG_NS: i2,
          win: s
        } = t2, {
          attr: o,
          createElement: r,
          css: n,
          error: a,
          isFunction: l,
          isString: h,
          objectEach: d,
          splat: c
        } = e2, {
          trustedTypes: p
        } = s, u = p && l(p.createPolicy) && p.createPolicy("highcharts", {
          createHTML: (t3) => t3
        }), g = u ? u.createHTML("") : "", f = function() {
          try {
            return !!new DOMParser().parseFromString(g, "text/html");
          } catch (t3) {
            return false;
          }
        }();
        class m {
          static filterUserAttributes(t3) {
            return d(t3, (e3, i3) => {
              let s2 = true;
              -1 === m.allowedAttributes.indexOf(i3) && (s2 = false), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i3) && (s2 = h(e3) && m.allowedReferences.some((t4) => 0 === e3.indexOf(t4))), s2 || (a(33, false, void 0, {
                "Invalid attribute in config": `${i3}`
              }), delete t3[i3]), h(e3) && t3[i3] && (t3[i3] = e3.replace(/</g, "&lt;"));
            }), t3;
          }
          static parseStyle(t3) {
            return t3.split(";").reduce((t4, e3) => {
              let i3 = e3.split(":").map((t5) => t5.trim()), s2 = i3.shift();
              return s2 && i3.length && (t4[s2.replace(/-([a-z])/g, (t5) => t5[1].toUpperCase())] = i3.join(":")), t4;
            }, {});
          }
          static setElementHTML(t3, e3) {
            t3.innerHTML = m.emptyHTML, e3 && new m(e3).addToDOM(t3);
          }
          constructor(t3) {
            this.nodes = "string" == typeof t3 ? this.parseMarkup(t3) : t3;
          }
          addToDOM(e3) {
            return function e4(s2, r2) {
              let l2;
              return c(s2).forEach(function(s3) {
                let h2;
                let c2 = s3.tagName, p2 = s3.textContent ? t2.doc.createTextNode(s3.textContent) : void 0, u2 = m.bypassHTMLFiltering;
                if (c2) {
                  if ("#text" === c2) h2 = p2;
                  else if (-1 !== m.allowedTags.indexOf(c2) || u2) {
                    let a2 = "svg" === c2 ? i2 : r2.namespaceURI || i2, l3 = t2.doc.createElementNS(a2, c2), g2 = s3.attributes || {};
                    d(s3, function(t3, e5) {
                      "tagName" !== e5 && "attributes" !== e5 && "children" !== e5 && "style" !== e5 && "textContent" !== e5 && (g2[e5] = t3);
                    }), o(l3, u2 ? g2 : m.filterUserAttributes(g2)), s3.style && n(l3, s3.style), p2 && l3.appendChild(p2), e4(s3.children || [], l3), h2 = l3;
                  } else a(33, false, void 0, {
                    "Invalid tagName in config": c2
                  });
                }
                h2 && r2.appendChild(h2), l2 = h2;
              }), l2;
            }(this.nodes, e3);
          }
          parseMarkup(t3) {
            let e3;
            let i3 = [];
            if (t3 = t3.trim().replace(/ style=(["'])/g, " data-style=$1"), f) e3 = new DOMParser().parseFromString(u ? u.createHTML(t3) : t3, "text/html");
            else {
              let i4 = r("div");
              i4.innerHTML = t3, e3 = {
                body: i4
              };
            }
            let s2 = (t4, e4) => {
              let i4 = t4.nodeName.toLowerCase(), o2 = {
                tagName: i4
              };
              "#text" === i4 && (o2.textContent = t4.textContent || "");
              let r2 = t4.attributes;
              if (r2) {
                let t5 = {};
                [].forEach.call(r2, (e5) => {
                  "data-style" === e5.name ? o2.style = m.parseStyle(e5.value) : t5[e5.name] = e5.value;
                }), o2.attributes = t5;
              }
              if (t4.childNodes.length) {
                let e5 = [];
                [].forEach.call(t4.childNodes, (t5) => {
                  s2(t5, e5);
                }), e5.length && (o2.children = e5);
              }
              e4.push(o2);
            };
            return [].forEach.call(e3.body.childNodes, (t4) => s2(t4, i3)), i3;
          }
        }
        return m.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], m.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], m.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMorphology", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], m.emptyHTML = g, m.bypassHTMLFiltering = false, m;
      }), i(e, "Core/Templating.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          defaultOptions: i2,
          defaultTime: s
        } = t2, {
          extend: o,
          getNestedProperty: r,
          isArray: n,
          isNumber: a,
          isObject: l,
          pick: h,
          pInt: d
        } = e2, c = {
          add: (t3, e3) => t3 + e3,
          divide: (t3, e3) => 0 !== e3 ? t3 / e3 : "",
          eq: (t3, e3) => t3 == e3,
          each: function(t3) {
            let e3 = arguments[arguments.length - 1];
            return !!n(t3) && t3.map((i3, s2) => p(e3.body, o(l(i3) ? i3 : {
              "@this": i3
            }, {
              "@index": s2,
              "@first": 0 === s2,
              "@last": s2 === t3.length - 1
            }))).join("");
          },
          ge: (t3, e3) => t3 >= e3,
          gt: (t3, e3) => t3 > e3,
          if: (t3) => !!t3,
          le: (t3, e3) => t3 <= e3,
          lt: (t3, e3) => t3 < e3,
          multiply: (t3, e3) => t3 * e3,
          ne: (t3, e3) => t3 != e3,
          subtract: (t3, e3) => t3 - e3,
          unless: (t3) => !t3
        };
        function p(t3 = "", e3, o2) {
          let n2 = /\{([\w\:\.\,;\-\/<>%@"'’= #\(\)]+)\}/g, a2 = /\(([\w\:\.\,;\-\/<>%@"'= ]+)\)/g, l2 = [], d2 = /f$/, g = /\.(\d)/, f = i2.lang, m = o2 && o2.time || s, x = o2 && o2.numberFormatter || u, y = (t4 = "") => {
            let i3;
            return "true" === t4 || "false" !== t4 && ((i3 = Number(t4)).toString() === t4 ? i3 : r(t4, e3));
          }, b, v, M = 0, k;
          for (; null !== (b = n2.exec(t3)); ) {
            let i3 = a2.exec(b[1]);
            i3 && (b = i3, k = true), v && v.isBlock || (v = {
              ctx: e3,
              expression: b[1],
              find: b[0],
              isBlock: "#" === b[1].charAt(0),
              start: b.index,
              startInner: b.index + b[0].length,
              length: b[0].length
            });
            let s2 = b[1].split(" ")[0].replace("#", "");
            c[s2] && (v.isBlock && s2 === v.fn && M++, v.fn || (v.fn = s2));
            let o3 = "else" === b[1];
            if (v.isBlock && v.fn && (b[1] === `/${v.fn}` || o3)) {
              if (M) !o3 && M--;
              else {
                let e4 = v.startInner, i4 = t3.substr(e4, b.index - e4);
                void 0 === v.body ? (v.body = i4, v.startInner = b.index + b[0].length) : v.elseBody = i4, v.find += i4 + b[0], o3 || (l2.push(v), v = void 0);
              }
            } else v.isBlock || l2.push(v);
            if (i3 && !v?.isBlock) break;
          }
          return l2.forEach((i3) => {
            let s2, r2;
            let {
              body: n3,
              elseBody: a3,
              expression: l3,
              fn: u2
            } = i3;
            if (u2) {
              let t4 = [i3], h2 = l3.split(" ");
              for (r2 = c[u2].length; r2--; ) t4.unshift(y(h2[r2 + 1]));
              s2 = c[u2].apply(e3, t4), i3.isBlock && "boolean" == typeof s2 && (s2 = p(s2 ? n3 : a3, e3, o2));
            } else {
              let t4 = l3.split(":");
              if (s2 = y(t4.shift() || ""), t4.length && "number" == typeof s2) {
                let e4 = t4.join(":");
                if (d2.test(e4)) {
                  let t5 = parseInt((e4.match(g) || ["", "-1"])[1], 10);
                  null !== s2 && (s2 = x(s2, t5, f.decimalPoint, e4.indexOf(",") > -1 ? f.thousandsSep : ""));
                } else s2 = m.dateFormat(e4, s2);
              }
            }
            t3 = t3.replace(i3.find, h(s2, ""));
          }), k ? p(t3, e3, o2) : t3;
        }
        function u(t3, e3, s2, o2) {
          let r2, n2;
          t3 = +t3 || 0, e3 = +e3;
          let l2 = i2.lang, c2 = (t3.toString().split(".")[1] || "").split("e")[0].length, p2 = t3.toString().split("e"), u2 = e3;
          -1 === e3 ? e3 = Math.min(c2, 20) : a(e3) ? e3 && p2[1] && p2[1] < 0 && ((n2 = e3 + +p2[1]) >= 0 ? (p2[0] = (+p2[0]).toExponential(n2).split("e")[0], e3 = n2) : (p2[0] = p2[0].split(".")[0] || 0, t3 = e3 < 20 ? (p2[0] * Math.pow(10, p2[1])).toFixed(e3) : 0, p2[1] = 0)) : e3 = 2;
          let g = (Math.abs(p2[1] ? p2[0] : t3) + Math.pow(10, -Math.max(e3, c2) - 1)).toFixed(e3), f = String(d(g)), m = f.length > 3 ? f.length % 3 : 0;
          return s2 = h(s2, l2.decimalPoint), o2 = h(o2, l2.thousandsSep), r2 = (t3 < 0 ? "-" : "") + (m ? f.substr(0, m) + o2 : ""), 0 > +p2[1] && !u2 ? r2 = "0" : r2 += f.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + o2), e3 ? r2 += s2 + g.slice(-e3) : 0 == +r2 && (r2 = "0"), p2[1] && 0 != +r2 && (r2 += "e" + p2[1]), r2;
        }
        return {
          dateFormat: function(t3, e3, i3) {
            return s.dateFormat(t3, e3, i3);
          },
          format: p,
          helpers: c,
          numberFormat: u
        };
      }), i(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], function(t2) {
        var e2, i2;
        let s;
        return (i2 = e2 || (e2 = {})).rendererTypes = {}, i2.getRendererType = function(t3 = s) {
          return i2.rendererTypes[t3] || i2.rendererTypes[s];
        }, i2.registerRendererType = function(e3, o, r) {
          i2.rendererTypes[e3] = o, (!s || r) && (s = e3, t2.Renderer = o);
        }, e2;
      }), i(e, "Core/Renderer/RendererUtilities.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let {
          clamp: i2,
          pick: s,
          pushUnique: o,
          stableSort: r
        } = t2;
        return (e2 || (e2 = {})).distribute = function t3(e3, n, a) {
          let l = e3, h = l.reducedLen || n, d = (t4, e4) => t4.target - e4.target, c = [], p = e3.length, u = [], g = c.push, f, m, x, y = true, b, v, M = 0, k;
          for (f = p; f--; ) M += e3[f].size;
          if (M > h) {
            for (r(e3, (t4, e4) => (e4.rank || 0) - (t4.rank || 0)), x = (k = e3[0].rank === e3[e3.length - 1].rank) ? p / 2 : -1, m = k ? x : p - 1; x && M > h; ) b = e3[f = Math.floor(m)], o(u, f) && (M -= b.size), m += x, k && m >= e3.length && (x /= 2, m = x);
            u.sort((t4, e4) => e4 - t4).forEach((t4) => g.apply(c, e3.splice(t4, 1)));
          }
          for (r(e3, d), e3 = e3.map((t4) => ({
            size: t4.size,
            targets: [t4.target],
            align: s(t4.align, 0.5)
          })); y; ) {
            for (f = e3.length; f--; ) b = e3[f], v = (Math.min.apply(0, b.targets) + Math.max.apply(0, b.targets)) / 2, b.pos = i2(v - b.size * b.align, 0, n - b.size);
            for (f = e3.length, y = false; f--; ) f > 0 && e3[f - 1].pos + e3[f - 1].size > e3[f].pos && (e3[f - 1].size += e3[f].size, e3[f - 1].targets = e3[f - 1].targets.concat(e3[f].targets), e3[f - 1].align = 0.5, e3[f - 1].pos + e3[f - 1].size > n && (e3[f - 1].pos = n - e3[f - 1].size), e3.splice(f, 1), y = true);
          }
          return g.apply(l, c), f = 0, e3.some((e4) => {
            let i3 = 0;
            return (e4.targets || []).some(() => (l[f].pos = e4.pos + i3, void 0 !== a && Math.abs(l[f].pos - l[f].target) > a) ? (l.slice(0, f + 1).forEach((t4) => delete t4.pos), l.reducedLen = (l.reducedLen || n) - 0.1 * n, l.reducedLen > 0.1 * n && t3(l, n, a), true) : (i3 += l[f].size, f++, false));
          }), r(l, d), l;
        }, e2;
      }), i(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let {
          animate: o,
          animObject: r,
          stop: n
        } = t2, {
          deg2rad: a,
          doc: l,
          svg: h,
          SVG_NS: d,
          win: c
        } = i2, {
          addEvent: p,
          attr: u,
          createElement: g,
          crisp: f,
          css: m,
          defined: x,
          erase: y,
          extend: b,
          fireEvent: v,
          isArray: M,
          isFunction: k,
          isObject: S,
          isString: C,
          merge: w,
          objectEach: A,
          pick: T,
          pInt: P,
          pushUnique: O,
          replaceNested: L,
          syncTimeout: E,
          uniqueKey: D
        } = s;
        class B {
          _defaultGetter(t3) {
            let e3 = T(this[t3 + "Value"], this[t3], this.element ? this.element.getAttribute(t3) : null, 0);
            return /^-?[\d\.]+$/.test(e3) && (e3 = parseFloat(e3)), e3;
          }
          _defaultSetter(t3, e3, i3) {
            i3.setAttribute(e3, t3);
          }
          add(t3) {
            let e3;
            let i3 = this.renderer, s2 = this.element;
            return t3 && (this.parentGroup = t3), void 0 !== this.textStr && "text" === this.element.nodeName && i3.buildText(this), this.added = true, (!t3 || t3.handleZ || this.zIndex) && (e3 = this.zIndexSetter()), e3 || (t3 ? t3.element : i3.box).appendChild(s2), this.onAdd && this.onAdd(), this;
          }
          addClass(t3, e3) {
            let i3 = e3 ? "" : this.attr("class") || "";
            return (t3 = (t3 || "").split(/ /g).reduce(function(t4, e4) {
              return -1 === i3.indexOf(e4) && t4.push(e4), t4;
            }, i3 ? [i3] : []).join(" ")) !== i3 && this.attr("class", t3), this;
          }
          afterSetters() {
            this.doTransform && (this.updateTransform(), this.doTransform = false);
          }
          align(t3, e3, i3, s2 = true) {
            let o2, r2, n2, a2;
            let l2 = {}, h2 = this.renderer, d2 = h2.alignedObjects, c2 = !!t3;
            t3 ? (this.alignOptions = t3, this.alignByTranslate = e3, this.alignTo = i3) : (t3 = this.alignOptions || {}, e3 = this.alignByTranslate, i3 = this.alignTo);
            let p2 = !i3 || C(i3) ? i3 || "renderer" : void 0;
            p2 && (c2 && O(d2, this), i3 = void 0);
            let u2 = T(i3, h2[p2], h2), g2 = t3.align, f2 = t3.verticalAlign;
            return o2 = (u2.x || 0) + (t3.x || 0), r2 = (u2.y || 0) + (t3.y || 0), "right" === g2 ? n2 = 1 : "center" === g2 && (n2 = 2), n2 && (o2 += ((u2.width || 0) - (t3.width || 0)) / n2), l2[e3 ? "translateX" : "x"] = Math.round(o2), "bottom" === f2 ? a2 = 1 : "middle" === f2 && (a2 = 2), a2 && (r2 += ((u2.height || 0) - (t3.height || 0)) / a2), l2[e3 ? "translateY" : "y"] = Math.round(r2), s2 && (this[this.placed ? "animate" : "attr"](l2), this.placed = true), this.alignAttr = l2, this;
          }
          alignSetter(t3) {
            let e3 = {
              left: "start",
              center: "middle",
              right: "end"
            };
            e3[t3] && (this.alignValue = t3, this.element.setAttribute("text-anchor", e3[t3]));
          }
          animate(t3, e3, i3) {
            let s2 = r(T(e3, this.renderer.globalAnimation, true)), n2 = s2.defer;
            return l.hidden && (s2.duration = 0), 0 !== s2.duration ? (i3 && (s2.complete = i3), E(() => {
              this.element && o(this, t3, s2);
            }, n2)) : (this.attr(t3, void 0, i3 || s2.complete), A(t3, function(t4, e4) {
              s2.step && s2.step.call(this, t4, {
                prop: e4,
                pos: 1,
                elem: this
              });
            }, this)), this;
          }
          applyTextOutline(t3) {
            let e3 = this.element;
            -1 !== t3.indexOf("contrast") && (t3 = t3.replace(/contrast/g, this.renderer.getContrast(e3.style.fill)));
            let s2 = t3.split(" "), o2 = s2[s2.length - 1], r2 = s2[0];
            if (r2 && "none" !== r2 && i2.svg) {
              this.fakeTS = true, r2 = r2.replace(/(^[\d\.]+)(.*?)$/g, function(t5, e4, i4) {
                return 2 * Number(e4) + i4;
              }), this.removeTextOutline();
              let t4 = l.createElementNS(d, "tspan");
              u(t4, {
                class: "highcharts-text-outline",
                fill: o2,
                stroke: o2,
                "stroke-width": r2,
                "stroke-linejoin": "round"
              });
              let i3 = e3.querySelector("textPath") || e3;
              [].forEach.call(i3.childNodes, (e4) => {
                let i4 = e4.cloneNode(true);
                i4.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((t5) => i4.removeAttribute(t5)), t4.appendChild(i4);
              });
              let s3 = 0;
              [].forEach.call(i3.querySelectorAll("text tspan"), (t5) => {
                s3 += Number(t5.getAttribute("dy"));
              });
              let n2 = l.createElementNS(d, "tspan");
              n2.textContent = "​", u(n2, {
                x: Number(e3.getAttribute("x")),
                dy: -s3
              }), t4.appendChild(n2), i3.insertBefore(t4, i3.firstChild);
            }
          }
          attr(t3, e3, i3, s2) {
            let {
              element: o2
            } = this, r2 = B.symbolCustomAttribs, a2, l2, h2 = this, d2;
            return "string" == typeof t3 && void 0 !== e3 && (a2 = t3, (t3 = {})[a2] = e3), "string" == typeof t3 ? h2 = (this[t3 + "Getter"] || this._defaultGetter).call(this, t3, o2) : (A(t3, function(e4, i4) {
              d2 = false, s2 || n(this, i4), this.symbolName && -1 !== r2.indexOf(i4) && (l2 || (this.symbolAttr(t3), l2 = true), d2 = true), this.rotation && ("x" === i4 || "y" === i4) && (this.doTransform = true), d2 || (this[i4 + "Setter"] || this._defaultSetter).call(this, e4, i4, o2);
            }, this), this.afterSetters()), i3 && i3.call(this), h2;
          }
          clip(t3) {
            if (t3 && !t3.clipPath) {
              let e3 = D() + "-", i3 = this.renderer.createElement("clipPath").attr({
                id: e3
              }).add(this.renderer.defs);
              b(t3, {
                clipPath: i3,
                id: e3,
                count: 0
              }), t3.add(i3);
            }
            return this.attr("clip-path", t3 ? `url(${this.renderer.url}#${t3.id})` : "none");
          }
          crisp(t3, e3) {
            e3 = Math.round(e3 || t3.strokeWidth || 0);
            let i3 = t3.x || this.x || 0, s2 = t3.y || this.y || 0, o2 = (t3.width || this.width || 0) + i3, r2 = (t3.height || this.height || 0) + s2, n2 = f(i3, e3), a2 = f(s2, e3);
            return b(t3, {
              x: n2,
              y: a2,
              width: f(o2, e3) - n2,
              height: f(r2, e3) - a2
            }), x(t3.strokeWidth) && (t3.strokeWidth = e3), t3;
          }
          complexColor(t3, i3, s2) {
            let o2 = this.renderer, r2, n2, a2, l2, h2, d2, c2, p2, u2, g2, f2 = [], m2;
            v(this.renderer, "complexColor", {
              args: arguments
            }, function() {
              if (t3.radialGradient ? n2 = "radialGradient" : t3.linearGradient && (n2 = "linearGradient"), n2) {
                if (a2 = t3[n2], h2 = o2.gradients, d2 = t3.stops, u2 = s2.radialReference, M(a2) && (t3[n2] = a2 = {
                  x1: a2[0],
                  y1: a2[1],
                  x2: a2[2],
                  y2: a2[3],
                  gradientUnits: "userSpaceOnUse"
                }), "radialGradient" === n2 && u2 && !x(a2.gradientUnits) && (l2 = a2, a2 = w(a2, o2.getRadialAttr(u2, l2), {
                  gradientUnits: "userSpaceOnUse"
                })), A(a2, function(t4, e3) {
                  "id" !== e3 && f2.push(e3, t4);
                }), A(d2, function(t4) {
                  f2.push(t4);
                }), h2[f2 = f2.join(",")]) g2 = h2[f2].attr("id");
                else {
                  a2.id = g2 = D();
                  let t4 = h2[f2] = o2.createElement(n2).attr(a2).add(o2.defs);
                  t4.radAttr = l2, t4.stops = [], d2.forEach(function(i4) {
                    0 === i4[1].indexOf("rgba") ? (c2 = (r2 = e2.parse(i4[1])).get("rgb"), p2 = r2.get("a")) : (c2 = i4[1], p2 = 1);
                    let s3 = o2.createElement("stop").attr({
                      offset: i4[0],
                      "stop-color": c2,
                      "stop-opacity": p2
                    }).add(t4);
                    t4.stops.push(s3);
                  });
                }
                m2 = "url(" + o2.url + "#" + g2 + ")", s2.setAttribute(i3, m2), s2.gradient = f2, t3.toString = function() {
                  return m2;
                };
              }
            });
          }
          css(t3) {
            let e3 = this.styles, i3 = {}, s2 = this.element, o2, r2 = !e3;
            if (e3 && A(t3, function(t4, s3) {
              e3 && e3[s3] !== t4 && (i3[s3] = t4, r2 = true);
            }), r2) {
              e3 && (t3 = b(e3, i3)), null === t3.width || "auto" === t3.width ? delete this.textWidth : "text" === s2.nodeName.toLowerCase() && t3.width && (o2 = this.textWidth = P(t3.width)), b(this.styles, t3), o2 && !h && this.renderer.forExport && delete t3.width;
              let r3 = w(t3);
              s2.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((t4) => r3 && delete r3[t4]), r3.color && (r3.fill = r3.color)), m(s2, r3);
            }
            return this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t3.textOutline && this.applyTextOutline(t3.textOutline)), this;
          }
          dashstyleSetter(t3) {
            let e3, i3 = this["stroke-width"];
            if ("inherit" === i3 && (i3 = 1), t3 = t3 && t3.toLowerCase()) {
              let s2 = t3.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
              for (e3 = s2.length; e3--; ) s2[e3] = "" + P(s2[e3]) * T(i3, NaN);
              t3 = s2.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t3);
            }
          }
          destroy() {
            let t3 = this, e3 = t3.element || {}, i3 = t3.renderer, s2 = e3.ownerSVGElement, o2 = "SPAN" === e3.nodeName && t3.parentGroup || void 0, r2, a2;
            if (e3.onclick = e3.onmouseout = e3.onmouseover = e3.onmousemove = e3.point = null, n(t3), t3.clipPath && s2) {
              let e4 = t3.clipPath;
              [].forEach.call(s2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t4) {
                t4.getAttribute("clip-path").indexOf(e4.element.id) > -1 && t4.removeAttribute("clip-path");
              }), t3.clipPath = e4.destroy();
            }
            if (t3.connector = t3.connector?.destroy(), t3.stops) {
              for (a2 = 0; a2 < t3.stops.length; a2++) t3.stops[a2].destroy();
              t3.stops.length = 0, t3.stops = void 0;
            }
            for (t3.safeRemoveChild(e3); o2 && o2.div && 0 === o2.div.childNodes.length; ) r2 = o2.parentGroup, t3.safeRemoveChild(o2.div), delete o2.div, o2 = r2;
            t3.alignOptions && y(i3.alignedObjects, t3), A(t3, function(e4, i4) {
              t3[i4] && t3[i4].parentGroup === t3 && t3[i4].destroy && t3[i4].destroy(), delete t3[i4];
            });
          }
          dSetter(t3, e3, i3) {
            M(t3) && ("string" == typeof t3[0] && (t3 = this.renderer.pathToSegments(t3)), this.pathArray = t3, t3 = t3.reduce((t4, e4, i4) => e4 && e4.join ? (i4 ? t4 + " " : "") + e4.join(" ") : (e4 || "").toString(), "")), /(NaN| {2}|^$)/.test(t3) && (t3 = "M 0 0"), this[e3] !== t3 && (i3.setAttribute(e3, t3), this[e3] = t3);
          }
          fillSetter(t3, e3, i3) {
            "string" == typeof t3 ? i3.setAttribute(e3, t3) : t3 && this.complexColor(t3, e3, i3);
          }
          hrefSetter(t3, e3, i3) {
            i3.setAttributeNS("http://www.w3.org/1999/xlink", e3, t3);
          }
          getBBox(t3, e3) {
            let i3, s2, o2, r2;
            let {
              alignValue: n2,
              element: a2,
              renderer: l2,
              styles: h2,
              textStr: d2
            } = this, {
              cache: c2,
              cacheKeys: p2
            } = l2, u2 = a2.namespaceURI === this.SVG_NS, g2 = T(e3, this.rotation, 0), f2 = l2.styledMode ? a2 && B.prototype.getStyle.call(a2, "font-size") : h2.fontSize;
            if (x(d2) && (-1 === (r2 = d2.toString()).indexOf("<") && (r2 = r2.replace(/\d/g, "0")), r2 += ["", l2.rootFontSize, f2, g2, this.textWidth, n2, h2.textOverflow, h2.fontWeight].join(",")), r2 && !t3 && (i3 = c2[r2]), !i3 || i3.polygon) {
              if (u2 || l2.forExport) {
                try {
                  o2 = this.fakeTS && function(t5) {
                    let e4 = a2.querySelector(".highcharts-text-outline");
                    e4 && m(e4, {
                      display: t5
                    });
                  }, k(o2) && o2("none"), i3 = a2.getBBox ? b({}, a2.getBBox()) : {
                    width: a2.offsetWidth,
                    height: a2.offsetHeight,
                    x: 0,
                    y: 0
                  }, k(o2) && o2("");
                } catch (t5) {
                }
                (!i3 || i3.width < 0) && (i3 = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                });
              } else i3 = this.htmlGetBBox();
              s2 = i3.height, u2 && (i3.height = s2 = {
                "11px,17": 14,
                "13px,20": 16
              }[`${f2 || ""},${Math.round(s2)}`] || s2), g2 && (i3 = this.getRotatedBox(i3, g2));
              let t4 = {
                bBox: i3
              };
              v(this, "afterGetBBox", t4), i3 = t4.bBox;
            }
            if (r2 && ("" === d2 || i3.height > 0)) {
              for (; p2.length > 250; ) delete c2[p2.shift()];
              c2[r2] || p2.push(r2), c2[r2] = i3;
            }
            return i3;
          }
          getRotatedBox(t3, e3) {
            let {
              x: i3,
              y: s2,
              width: o2,
              height: r2
            } = t3, {
              alignValue: n2,
              translateY: l2,
              rotationOriginX: h2 = 0,
              rotationOriginY: d2 = 0
            } = this, c2 = {
              right: 1,
              center: 0.5
            }[n2 || 0] || 0, p2 = Number(this.element.getAttribute("y") || 0) - (l2 ? 0 : s2), u2 = e3 * a, g2 = (e3 - 90) * a, f2 = Math.cos(u2), m2 = Math.sin(u2), x2 = o2 * f2, y2 = o2 * m2, b2 = Math.cos(g2), v2 = Math.sin(g2), [[M2, k2], [S2, C2]] = [h2, d2].map((t4) => [t4 - t4 * f2, t4 * m2]), w2 = i3 + c2 * (o2 - x2) + M2 + C2 + p2 * b2, A2 = w2 + x2, T2 = A2 - r2 * b2, P2 = T2 - x2, O2 = s2 + p2 - c2 * y2 - k2 + S2 + p2 * v2, L2 = O2 + y2, E2 = L2 - r2 * v2, D2 = E2 - y2, B2 = Math.min(w2, A2, T2, P2), I = Math.min(O2, L2, E2, D2), j = Math.max(w2, A2, T2, P2) - B2, R = Math.max(O2, L2, E2, D2) - I;
            return {
              x: B2,
              y: I,
              width: j,
              height: R,
              polygon: [[w2, O2], [A2, L2], [T2, E2], [P2, D2]]
            };
          }
          getStyle(t3) {
            return c.getComputedStyle(this.element || this, "").getPropertyValue(t3);
          }
          hasClass(t3) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(t3);
          }
          hide() {
            return this.attr({
              visibility: "hidden"
            });
          }
          htmlGetBBox() {
            return {
              height: 0,
              width: 0,
              x: 0,
              y: 0
            };
          }
          constructor(t3, e3) {
            this.onEvents = {}, this.opacity = 1, this.SVG_NS = d, this.element = "span" === e3 || "body" === e3 ? g(e3) : l.createElementNS(this.SVG_NS, e3), this.renderer = t3, this.styles = {}, v(this, "afterInit");
          }
          on(t3, e3) {
            let {
              onEvents: i3
            } = this;
            return i3[t3] && i3[t3](), i3[t3] = p(this.element, t3, e3), this;
          }
          opacitySetter(t3, e3, i3) {
            let s2 = Number(Number(t3).toFixed(3));
            this.opacity = s2, i3.setAttribute(e3, s2);
          }
          reAlign() {
            this.alignOptions?.width && "left" !== this.alignOptions.align && (this.alignOptions.width = this.getBBox().width, this.placed = false, this.align());
          }
          removeClass(t3) {
            return this.attr("class", ("" + this.attr("class")).replace(C(t3) ? RegExp(`(^| )${t3}( |$)`) : t3, " ").replace(/ +/g, " ").trim());
          }
          removeTextOutline() {
            let t3 = this.element.querySelector("tspan.highcharts-text-outline");
            t3 && this.safeRemoveChild(t3);
          }
          safeRemoveChild(t3) {
            let e3 = t3.parentNode;
            e3 && e3.removeChild(t3);
          }
          setRadialReference(t3) {
            let e3 = this.element.gradient && this.renderer.gradients[this.element.gradient];
            return this.element.radialReference = t3, e3 && e3.radAttr && e3.animate(this.renderer.getRadialAttr(t3, e3.radAttr)), this;
          }
          shadow(t3) {
            let {
              renderer: e3
            } = this, i3 = w(this.parentGroup?.rotation === 90 ? {
              offsetX: -1,
              offsetY: -1
            } : {}, S(t3) ? t3 : {}), s2 = e3.shadowDefinition(i3);
            return this.attr({
              filter: t3 ? `url(${e3.url}#${s2})` : "none"
            });
          }
          show(t3 = true) {
            return this.attr({
              visibility: t3 ? "inherit" : "visible"
            });
          }
          "stroke-widthSetter"(t3, e3, i3) {
            this[e3] = t3, i3.setAttribute(e3, t3);
          }
          strokeWidth() {
            if (!this.renderer.styledMode) return this["stroke-width"] || 0;
            let t3 = this.getStyle("stroke-width"), e3 = 0, i3;
            return /px$/.test(t3) ? e3 = P(t3) : "" !== t3 && (u(i3 = l.createElementNS(d, "rect"), {
              width: t3,
              "stroke-width": 0
            }), this.element.parentNode.appendChild(i3), e3 = i3.getBBox().width, i3.parentNode.removeChild(i3)), e3;
          }
          symbolAttr(t3) {
            let e3 = this;
            B.symbolCustomAttribs.forEach(function(i3) {
              e3[i3] = T(t3[i3], e3[i3]);
            }), e3.attr({
              d: e3.renderer.symbols[e3.symbolName](e3.x, e3.y, e3.width, e3.height, e3)
            });
          }
          textSetter(t3) {
            t3 !== this.textStr && (delete this.textPxLength, this.textStr = t3, this.added && this.renderer.buildText(this), this.reAlign());
          }
          titleSetter(t3) {
            let e3 = this.element, i3 = e3.getElementsByTagName("title")[0] || l.createElementNS(this.SVG_NS, "title");
            e3.insertBefore ? e3.insertBefore(i3, e3.firstChild) : e3.appendChild(i3), i3.textContent = L(T(t3, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          }
          toFront() {
            let t3 = this.element;
            return t3.parentNode.appendChild(t3), this;
          }
          translate(t3, e3) {
            return this.attr({
              translateX: t3,
              translateY: e3
            });
          }
          updateTransform(t3 = "transform") {
            let {
              element: e3,
              matrix: i3,
              rotation: s2 = 0,
              rotationOriginX: o2,
              rotationOriginY: r2,
              scaleX: n2,
              scaleY: a2,
              translateX: l2 = 0,
              translateY: h2 = 0
            } = this, d2 = ["translate(" + l2 + "," + h2 + ")"];
            x(i3) && d2.push("matrix(" + i3.join(",") + ")"), s2 && (d2.push("rotate(" + s2 + " " + T(o2, e3.getAttribute("x"), 0) + " " + T(r2, e3.getAttribute("y") || 0) + ")"), this.text?.element.tagName === "SPAN" && this.text.attr({
              rotation: s2,
              rotationOriginX: (o2 || 0) - this.padding,
              rotationOriginY: (r2 || 0) - this.padding
            })), (x(n2) || x(a2)) && d2.push("scale(" + T(n2, 1) + " " + T(a2, 1) + ")"), d2.length && !(this.text || this).textPath && e3.setAttribute(t3, d2.join(" "));
          }
          visibilitySetter(t3, e3, i3) {
            "inherit" === t3 ? i3.removeAttribute(e3) : this[e3] !== t3 && i3.setAttribute(e3, t3), this[e3] = t3;
          }
          xGetter(t3) {
            return "circle" === this.element.nodeName && ("x" === t3 ? t3 = "cx" : "y" === t3 && (t3 = "cy")), this._defaultGetter(t3);
          }
          zIndexSetter(t3, e3) {
            let i3 = this.renderer, s2 = this.parentGroup, o2 = (s2 || i3).element || i3.box, r2 = this.element, n2 = o2 === i3.box, a2, l2, h2, d2 = false, c2, p2 = this.added, u2;
            if (x(t3) ? (r2.setAttribute("data-z-index", t3), t3 = +t3, this[e3] === t3 && (p2 = false)) : x(this[e3]) && r2.removeAttribute("data-z-index"), this[e3] = t3, p2) {
              for ((t3 = this.zIndex) && s2 && (s2.handleZ = true), u2 = (a2 = o2.childNodes).length - 1; u2 >= 0 && !d2; u2--) c2 = !x(h2 = (l2 = a2[u2]).getAttribute("data-z-index")), l2 !== r2 && (t3 < 0 && c2 && !n2 && !u2 ? (o2.insertBefore(r2, a2[u2]), d2 = true) : (P(h2) <= t3 || c2 && (!x(t3) || t3 >= 0)) && (o2.insertBefore(r2, a2[u2 + 1]), d2 = true));
              d2 || (o2.insertBefore(r2, a2[n2 ? 3 : 0]), d2 = true);
            }
            return d2;
          }
        }
        return B.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], B.prototype.strokeSetter = B.prototype.fillSetter, B.prototype.yGetter = B.prototype.xGetter, B.prototype.matrixSetter = B.prototype.rotationOriginXSetter = B.prototype.rotationOriginYSetter = B.prototype.rotationSetter = B.prototype.scaleXSetter = B.prototype.scaleYSetter = B.prototype.translateXSetter = B.prototype.translateYSetter = B.prototype.verticalAlignSetter = function(t3, e3) {
          this[e3] = t3, this.doTransform = true;
        }, B;
      }), i(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          defined: i2,
          extend: s,
          isNumber: o,
          merge: r,
          pick: n,
          removeEvent: a
        } = e2;
        class l extends t2 {
          constructor(t3, e3, i3, s2, o2, r2, n2, a2, h, d) {
            let c;
            super(t3, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = false, this.textStr = e3, this.x = i3, this.y = s2, this.anchorX = r2, this.anchorY = n2, this.baseline = h, this.className = d, this.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label"), d && this.addClass("highcharts-" + d), this.text = t3.text(void 0, 0, 0, a2).attr({
              zIndex: 1
            }), "string" == typeof o2 && ((c = /^url\((.*?)\)$/.test(o2)) || this.renderer.symbols[o2]) && (this.symbolKey = o2), this.bBox = l.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t3.styledMode || c, this.deferredAttr = {}, this.alignFactor = 0;
          }
          alignSetter(t3) {
            let e3 = {
              left: 0,
              center: 0.5,
              right: 1
            }[t3];
            e3 !== this.alignFactor && (this.alignFactor = e3, this.bBox && o(this.xSetting) && this.attr({
              x: this.xSetting
            }));
          }
          anchorXSetter(t3, e3) {
            this.anchorX = t3, this.boxAttr(e3, Math.round(t3) - this.getCrispAdjust() - this.xSetting);
          }
          anchorYSetter(t3, e3) {
            this.anchorY = t3, this.boxAttr(e3, t3 - this.ySetting);
          }
          boxAttr(t3, e3) {
            this.box ? this.box.attr(t3, e3) : this.deferredAttr[t3] = e3;
          }
          css(e3) {
            if (e3) {
              let t3 = {};
              e3 = r(e3), l.textProps.forEach((i3) => {
                void 0 !== e3[i3] && (t3[i3] = e3[i3], delete e3[i3]);
              }), this.text.css(t3), "fontSize" in t3 || "fontWeight" in t3 ? this.updateTextPadding() : ("width" in t3 || "textOverflow" in t3) && this.updateBoxSize();
            }
            return t2.prototype.css.call(this, e3);
          }
          destroy() {
            a(this.element, "mouseenter"), a(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t2.prototype.destroy.call(this);
          }
          fillSetter(t3, e3) {
            t3 && (this.needsBox = true), this.fill = t3, this.boxAttr(e3, t3);
          }
          getBBox(t3, e3) {
            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
            let {
              padding: i3,
              height: s2 = 0,
              translateX: o2 = 0,
              translateY: r2 = 0,
              width: a2 = 0
            } = this, l2 = n(this.paddingLeft, i3), h = e3 ?? (this.rotation || 0), d = {
              width: a2,
              height: s2,
              x: o2 + this.bBox.x - l2,
              y: r2 + this.bBox.y - i3 + this.baselineOffset
            };
            return h && (d = this.getRotatedBox(d, h)), d;
          }
          getCrispAdjust() {
            return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
          }
          heightSetter(t3) {
            this.heightSetting = t3, this.doUpdate = true;
          }
          afterSetters() {
            super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = false);
          }
          onAdd() {
            this.text.add(this), this.attr({
              text: n(this.textStr, ""),
              x: this.x || 0,
              y: this.y || 0
            }), this.box && i2(this.anchorX) && this.attr({
              anchorX: this.anchorX,
              anchorY: this.anchorY
            });
          }
          paddingSetter(t3, e3) {
            o(t3) ? t3 !== this[e3] && (this[e3] = t3, this.updateTextPadding()) : this[e3] = void 0;
          }
          rSetter(t3, e3) {
            this.boxAttr(e3, t3);
          }
          strokeSetter(t3, e3) {
            this.stroke = t3, this.boxAttr(e3, t3);
          }
          "stroke-widthSetter"(t3, e3) {
            t3 && (this.needsBox = true), this["stroke-width"] = t3, this.boxAttr(e3, t3);
          }
          "text-alignSetter"(t3) {
            this.textAlign = t3;
          }
          textSetter(t3) {
            void 0 !== t3 && this.text.attr({
              text: t3
            }), this.updateTextPadding(), this.reAlign();
          }
          updateBoxSize() {
            let t3;
            let e3 = this.text, r2 = {}, n2 = this.padding, a2 = this.bBox = (!o(this.widthSetting) || !o(this.heightSetting) || this.textAlign) && i2(e3.textStr) ? e3.getBBox(void 0, 0) : l.emptyBBox;
            this.width = this.getPaddedWidth(), this.height = (this.heightSetting || a2.height || 0) + 2 * n2;
            let h = this.renderer.fontMetrics(e3);
            if (this.baselineOffset = n2 + Math.min((this.text.firstLineMetrics || h).b, a2.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - h.h) / 2), this.needsBox && !e3.textPath) {
              if (!this.box) {
                let t4 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                t4.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t4.add(this);
              }
              t3 = this.getCrispAdjust(), r2.x = t3, r2.y = (this.baseline ? -this.baselineOffset : 0) + t3, r2.width = Math.round(this.width), r2.height = Math.round(this.height), this.box.attr(s(r2, this.deferredAttr)), this.deferredAttr = {};
            }
          }
          updateTextPadding() {
            let t3 = this.text;
            if (!t3.textPath) {
              this.updateBoxSize();
              let e3 = this.baseline ? 0 : this.baselineOffset, s2 = n(this.paddingLeft, this.padding);
              i2(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (s2 += {
                center: 0.5,
                right: 1
              }[this.textAlign] * (this.widthSetting - this.bBox.width)), (s2 !== t3.x || e3 !== t3.y) && (t3.attr("x", s2), t3.hasBoxWidthChanged && (this.bBox = t3.getBBox(true)), void 0 !== e3 && t3.attr("y", e3)), t3.x = s2, t3.y = e3;
            }
          }
          widthSetter(t3) {
            this.widthSetting = o(t3) ? t3 : void 0, this.doUpdate = true;
          }
          getPaddedWidth() {
            let t3 = this.padding, e3 = n(this.paddingLeft, t3), i3 = n(this.paddingRight, t3);
            return (this.widthSetting || this.bBox.width || 0) + e3 + i3;
          }
          xSetter(t3) {
            this.x = t3, this.alignFactor && (t3 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true), this.xSetting = Math.round(t3), this.attr("translateX", this.xSetting);
          }
          ySetter(t3) {
            this.ySetting = this.y = Math.round(t3), this.attr("translateY", this.ySetting);
          }
        }
        return l.emptyBBox = {
          width: 0,
          height: 0,
          x: 0,
          y: 0
        }, l.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], l;
      }), i(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], function(t2) {
        let {
          defined: e2,
          isNumber: i2,
          pick: s
        } = t2;
        function o(t3, i3, o2, r2, n2) {
          let a = [];
          if (n2) {
            let l = n2.start || 0, h = s(n2.r, o2), d = s(n2.r, r2 || o2), c = 2e-4 / Math.max(h, 1), p = Math.abs((n2.end || 0) - l - 2 * Math.PI) < c, u = (n2.end || 0) - c, g = n2.innerR, f = s(n2.open, p), m = Math.cos(l), x = Math.sin(l), y = Math.cos(u), b = Math.sin(u), v = s(n2.longArc, u - l - Math.PI < c ? 0 : 1), M = ["A", h, d, 0, v, s(n2.clockwise, 1), t3 + h * y, i3 + d * b];
            M.params = {
              start: l,
              end: u,
              cx: t3,
              cy: i3
            }, a.push(["M", t3 + h * m, i3 + d * x], M), e2(g) && ((M = ["A", g, g, 0, v, e2(n2.clockwise) ? 1 - n2.clockwise : 0, t3 + g * m, i3 + g * x]).params = {
              start: u,
              end: l,
              cx: t3,
              cy: i3
            }, a.push(f ? ["M", t3 + g * y, i3 + g * b] : ["L", t3 + g * y, i3 + g * b], M)), f || a.push(["Z"]);
          }
          return a;
        }
        function r(t3, e3, i3, s2, o2) {
          return o2 && o2.r ? n(t3, e3, i3, s2, o2) : [["M", t3, e3], ["L", t3 + i3, e3], ["L", t3 + i3, e3 + s2], ["L", t3, e3 + s2], ["Z"]];
        }
        function n(t3, e3, i3, s2, o2) {
          let r2 = o2?.r || 0;
          return [["M", t3 + r2, e3], ["L", t3 + i3 - r2, e3], ["A", r2, r2, 0, 0, 1, t3 + i3, e3 + r2], ["L", t3 + i3, e3 + s2 - r2], ["A", r2, r2, 0, 0, 1, t3 + i3 - r2, e3 + s2], ["L", t3 + r2, e3 + s2], ["A", r2, r2, 0, 0, 1, t3, e3 + s2 - r2], ["L", t3, e3 + r2], ["A", r2, r2, 0, 0, 1, t3 + r2, e3], ["Z"]];
        }
        return {
          arc: o,
          callout: function(t3, e3, s2, o2, r2) {
            let a = Math.min(r2 && r2.r || 0, s2, o2), l = a + 6, h = r2 && r2.anchorX, d = r2 && r2.anchorY || 0, c = n(t3, e3, s2, o2, {
              r: a
            });
            if (!i2(h) || h < s2 && h > 0 && d < o2 && d > 0) return c;
            if (t3 + h > s2 - l) {
              if (d > e3 + l && d < e3 + o2 - l) c.splice(3, 1, ["L", t3 + s2, d - 6], ["L", t3 + s2 + 6, d], ["L", t3 + s2, d + 6], ["L", t3 + s2, e3 + o2 - a]);
              else if (h < s2) {
                let i3 = d < e3 + l, r3 = i3 ? e3 : e3 + o2;
                c.splice(i3 ? 2 : 5, 0, ["L", h, d], ["L", t3 + s2 - a, r3]);
              } else c.splice(3, 1, ["L", t3 + s2, o2 / 2], ["L", h, d], ["L", t3 + s2, o2 / 2], ["L", t3 + s2, e3 + o2 - a]);
            } else if (t3 + h < l) {
              if (d > e3 + l && d < e3 + o2 - l) c.splice(7, 1, ["L", t3, d + 6], ["L", t3 - 6, d], ["L", t3, d - 6], ["L", t3, e3 + a]);
              else if (h > 0) {
                let i3 = d < e3 + l, s3 = i3 ? e3 : e3 + o2;
                c.splice(i3 ? 1 : 6, 0, ["L", h, d], ["L", t3 + a, s3]);
              } else c.splice(7, 1, ["L", t3, o2 / 2], ["L", h, d], ["L", t3, o2 / 2], ["L", t3, e3 + a]);
            } else d > o2 && h < s2 - l ? c.splice(5, 1, ["L", h + 6, e3 + o2], ["L", h, e3 + o2 + 6], ["L", h - 6, e3 + o2], ["L", t3 + a, e3 + o2]) : d < 0 && h > l && c.splice(1, 1, ["L", h - 6, e3], ["L", h, e3 - 6], ["L", h + 6, e3], ["L", s2 - a, e3]);
            return c;
          },
          circle: function(t3, e3, i3, s2) {
            return o(t3 + i3 / 2, e3 + s2 / 2, i3 / 2, s2 / 2, {
              start: 0.5 * Math.PI,
              end: 2.5 * Math.PI,
              open: false
            });
          },
          diamond: function(t3, e3, i3, s2) {
            return [["M", t3 + i3 / 2, e3], ["L", t3 + i3, e3 + s2 / 2], ["L", t3 + i3 / 2, e3 + s2], ["L", t3, e3 + s2 / 2], ["Z"]];
          },
          rect: r,
          roundedRect: n,
          square: r,
          triangle: function(t3, e3, i3, s2) {
            return [["M", t3 + i3 / 2, e3], ["L", t3 + i3, e3 + s2], ["L", t3, e3 + s2], ["Z"]];
          },
          "triangle-down": function(t3, e3, i3, s2) {
            return [["M", t3, e3], ["L", t3 + i3, e3], ["L", t3 + i3 / 2, e3 + s2], ["Z"]];
          }
        };
      }), i(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          doc: s,
          SVG_NS: o,
          win: r
        } = e2, {
          attr: n,
          extend: a,
          fireEvent: l,
          isString: h,
          objectEach: d,
          pick: c
        } = i2;
        return class {
          constructor(t3) {
            let e3 = t3.styles;
            this.renderer = t3.renderer, this.svgElement = t3, this.width = t3.textWidth, this.textLineHeight = e3 && e3.lineHeight, this.textOutline = e3 && e3.textOutline, this.ellipsis = !!(e3 && "ellipsis" === e3.textOverflow), this.noWrap = !!(e3 && "nowrap" === e3.whiteSpace);
          }
          buildSVG() {
            let e3 = this.svgElement, i3 = e3.element, o2 = e3.renderer, r2 = c(e3.textStr, "").toString(), n2 = -1 !== r2.indexOf("<"), a2 = i3.childNodes, l2 = !e3.added && o2.box, d2 = [r2, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, e3.getStyle("font-size"), this.width].join(",");
            if (d2 !== e3.textCache) {
              e3.textCache = d2, delete e3.actualWidth;
              for (let t3 = a2.length; t3--; ) i3.removeChild(a2[t3]);
              if (n2 || this.ellipsis || this.width || e3.textPath || -1 !== r2.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(r2))) {
                if ("" !== r2) {
                  l2 && l2.appendChild(i3);
                  let s2 = new t2(r2);
                  this.modifyTree(s2.nodes), s2.addToDOM(i3), this.modifyDOM(), this.ellipsis && -1 !== (i3.textContent || "").indexOf("…") && e3.attr("title", this.unescapeEntities(e3.textStr || "", ["&lt;", "&gt;"])), l2 && l2.removeChild(i3);
                }
              } else i3.appendChild(s.createTextNode(this.unescapeEntities(r2)));
              h(this.textOutline) && e3.applyTextOutline && e3.applyTextOutline(this.textOutline);
            }
          }
          modifyDOM() {
            let t3;
            let e3 = this.svgElement, i3 = n(e3.element, "x");
            for (e3.firstLineMetrics = void 0; t3 = e3.element.firstChild; ) if (/^[\s\u200B]*$/.test(t3.textContent || " ")) e3.element.removeChild(t3);
            else break;
            [].forEach.call(e3.element.querySelectorAll("tspan.highcharts-br"), (t4, s2) => {
              t4.nextSibling && t4.previousSibling && (0 === s2 && 1 === t4.previousSibling.nodeType && (e3.firstLineMetrics = e3.renderer.fontMetrics(t4.previousSibling)), n(t4, {
                dy: this.getLineHeight(t4.nextSibling),
                x: i3
              }));
            });
            let a2 = this.width || 0;
            if (!a2) return;
            let l2 = (t4, r2) => {
              let l3 = t4.textContent || "", h3 = l3.replace(/([^\^])-/g, "$1- ").split(" "), d2 = !this.noWrap && (h3.length > 1 || e3.element.childNodes.length > 1), c2 = this.getLineHeight(r2), p = 0, u = e3.actualWidth;
              if (this.ellipsis) l3 && this.truncate(t4, l3, void 0, 0, Math.max(0, a2 - 0.8 * c2), (t5, e4) => t5.substring(0, e4) + "…");
              else if (d2) {
                let l4 = [], d3 = [];
                for (; r2.firstChild && r2.firstChild !== t4; ) d3.push(r2.firstChild), r2.removeChild(r2.firstChild);
                for (; h3.length; ) h3.length && !this.noWrap && p > 0 && (l4.push(t4.textContent || ""), t4.textContent = h3.join(" ").replace(/- /g, "-")), this.truncate(t4, void 0, h3, 0 === p && u || 0, a2, (t5, e4) => h3.slice(0, e4).join(" ").replace(/- /g, "-")), u = e3.actualWidth, p++;
                d3.forEach((e4) => {
                  r2.insertBefore(e4, t4);
                }), l4.forEach((e4) => {
                  r2.insertBefore(s.createTextNode(e4), t4);
                  let a3 = s.createElementNS(o, "tspan");
                  a3.textContent = "​", n(a3, {
                    dy: c2,
                    x: i3
                  }), r2.insertBefore(a3, t4);
                });
              }
            }, h2 = (t4) => {
              [].slice.call(t4.childNodes).forEach((i4) => {
                i4.nodeType === r.Node.TEXT_NODE ? l2(i4, t4) : (-1 !== i4.className.baseVal.indexOf("highcharts-br") && (e3.actualWidth = 0), h2(i4));
              });
            };
            h2(e3.element);
          }
          getLineHeight(t3) {
            let e3 = t3.nodeType === r.Node.TEXT_NODE ? t3.parentElement : t3;
            return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e3 || this.svgElement.element).h;
          }
          modifyTree(t3) {
            let e3 = (i3, s2) => {
              let {
                attributes: o2 = {},
                children: r2,
                style: n2 = {},
                tagName: l2
              } = i3, h2 = this.renderer.styledMode;
              if ("b" === l2 || "strong" === l2 ? h2 ? o2.class = "highcharts-strong" : n2.fontWeight = "bold" : ("i" === l2 || "em" === l2) && (h2 ? o2.class = "highcharts-emphasized" : n2.fontStyle = "italic"), n2 && n2.color && (n2.fill = n2.color), "br" === l2) {
                o2.class = "highcharts-br", i3.textContent = "​";
                let e4 = t3[s2 + 1];
                e4 && e4.textContent && (e4.textContent = e4.textContent.replace(/^ +/gm, ""));
              } else "a" === l2 && r2 && r2.some((t4) => "#text" === t4.tagName) && (i3.children = [{
                children: r2,
                tagName: "tspan"
              }]);
              "#text" !== l2 && "a" !== l2 && (i3.tagName = "tspan"), a(i3, {
                attributes: o2,
                style: n2
              }), r2 && r2.filter((t4) => "#text" !== t4.tagName).forEach(e3);
            };
            t3.forEach(e3), l(this.svgElement, "afterModifyTree", {
              nodes: t3
            });
          }
          truncate(t3, e3, i3, s2, o2, r2) {
            let n2, a2;
            let l2 = this.svgElement, {
              rotation: h2
            } = l2, d2 = [], c2 = i3 ? 1 : 0, p = (e3 || i3 || "").length, u = p, g = function(e4, o3) {
              let r3 = o3 || e4, n3 = t3.parentNode;
              if (n3 && void 0 === d2[r3] && n3.getSubStringLength) try {
                d2[r3] = s2 + n3.getSubStringLength(0, i3 ? r3 + 1 : r3);
              } catch (t4) {
              }
              return d2[r3];
            };
            if (l2.rotation = 0, s2 + (a2 = g(t3.textContent.length)) > o2) {
              for (; c2 <= p; ) u = Math.ceil((c2 + p) / 2), i3 && (n2 = r2(i3, u)), a2 = g(u, n2 && n2.length - 1), c2 === p ? c2 = p + 1 : a2 > o2 ? p = u - 1 : c2 = u;
              0 === p ? t3.textContent = "" : e3 && p === e3.length - 1 || (t3.textContent = n2 || r2(e3 || i3, u));
            }
            i3 && i3.splice(0, u), l2.actualWidth = a2, l2.rotation = h2;
          }
          unescapeEntities(t3, e3) {
            return d(this.renderer.escapes, function(i3, s2) {
              e3 && -1 !== e3.indexOf(i3) || (t3 = t3.toString().replace(RegExp(i3, "g"), s2));
            }), t3;
          }
        };
      }), i(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Defaults.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a, l, h) {
        let d;
        let {
          defaultOptions: c
        } = e2, {
          charts: p,
          deg2rad: u,
          doc: g,
          isFirefox: f,
          isMS: m,
          isWebKit: x,
          noop: y,
          SVG_NS: b,
          symbolSizes: v,
          win: M
        } = s, {
          addEvent: k,
          attr: S,
          createElement: C,
          crisp: w,
          css: A,
          defined: T,
          destroyObjectProperties: P,
          extend: O,
          isArray: L,
          isNumber: E,
          isObject: D,
          isString: B,
          merge: I,
          pick: j,
          pInt: R,
          replaceNested: G,
          uniqueKey: z
        } = h;
        class N {
          constructor(t3, e3, i3, s2, o2, r2, n2) {
            let a2, l2;
            let h2 = this.createElement("svg").attr({
              version: "1.1",
              class: "highcharts-root"
            }), d2 = h2.element;
            n2 || h2.css(this.getStyle(s2 || {})), t3.appendChild(d2), S(t3, "dir", "ltr"), -1 === t3.innerHTML.indexOf("xmlns") && S(d2, "xmlns", this.SVG_NS), this.box = d2, this.boxWrapper = h2, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(g.createTextNode("Created with Highcharts 11.4.6")), this.defs = this.createElement("defs").add(), this.allowHTML = r2, this.forExport = o2, this.styledMode = n2, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = h2.getStyle("font-size"), this.setSize(e3, i3, false), f && t3.getBoundingClientRect && ((a2 = function() {
              A(t3, {
                left: 0,
                top: 0
              }), l2 = t3.getBoundingClientRect(), A(t3, {
                left: Math.ceil(l2.left) - l2.left + "px",
                top: Math.ceil(l2.top) - l2.top + "px"
              });
            })(), this.unSubPixelFix = k(M, "resize", a2));
          }
          definition(e3) {
            return new t2([e3]).addToDOM(this.defs.element);
          }
          getReferenceURL() {
            if ((f || x) && g.getElementsByTagName("base").length) {
              if (!T(d)) {
                let e3 = z(), i3 = new t2([{
                  tagName: "svg",
                  attributes: {
                    width: 8,
                    height: 8
                  },
                  children: [{
                    tagName: "defs",
                    children: [{
                      tagName: "clipPath",
                      attributes: {
                        id: e3
                      },
                      children: [{
                        tagName: "rect",
                        attributes: {
                          width: 4,
                          height: 4
                        }
                      }]
                    }]
                  }, {
                    tagName: "rect",
                    attributes: {
                      id: "hitme",
                      width: 8,
                      height: 8,
                      "clip-path": `url(#${e3})`,
                      fill: "rgba(0,0,0,0.001)"
                    }
                  }]
                }]).addToDOM(g.body);
                A(i3, {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 9e5
                });
                let s2 = g.elementFromPoint(6, 6);
                d = "hitme" === (s2 && s2.id), g.body.removeChild(i3);
              }
              if (d) return G(M.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
            }
            return "";
          }
          getStyle(t3) {
            return this.style = O({
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "1rem"
            }, t3), this.style;
          }
          setStyle(t3) {
            this.boxWrapper.css(this.getStyle(t3));
          }
          isHidden() {
            return !this.boxWrapper.getBBox().width;
          }
          destroy() {
            let t3 = this.defs;
            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), P(this.gradients || {}), this.gradients = null, this.defs = t3.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
          }
          createElement(t3) {
            return new this.Element(this, t3);
          }
          getRadialAttr(t3, e3) {
            return {
              cx: t3[0] - t3[2] / 2 + (e3.cx || 0) * t3[2],
              cy: t3[1] - t3[2] / 2 + (e3.cy || 0) * t3[2],
              r: (e3.r || 0) * t3[2]
            };
          }
          shadowDefinition(t3) {
            let e3 = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t3).map((e4) => `${e4}-${t3[e4]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), i3 = I({
              color: "#000000",
              offsetX: 1,
              offsetY: 1,
              opacity: 0.15,
              width: 5
            }, t3);
            return this.defs.element.querySelector(`#${e3}`) || this.definition({
              tagName: "filter",
              attributes: {
                id: e3,
                filterUnits: i3.filterUnits
              },
              children: this.getShadowFilterContent(i3)
            }), e3;
          }
          getShadowFilterContent(t3) {
            return [{
              tagName: "feDropShadow",
              attributes: {
                dx: t3.offsetX,
                dy: t3.offsetY,
                "flood-color": t3.color,
                "flood-opacity": Math.min(5 * t3.opacity, 1),
                stdDeviation: t3.width / 2
              }
            }];
          }
          buildText(t3) {
            new l(t3).buildSVG();
          }
          getContrast(t3) {
            let e3 = i2.parse(t3).rgba.map((t4) => {
              let e4 = t4 / 255;
              return e4 <= 0.03928 ? e4 / 12.92 : Math.pow((e4 + 0.055) / 1.055, 2.4);
            }), s2 = 0.2126 * e3[0] + 0.7152 * e3[1] + 0.0722 * e3[2];
            return 1.05 / (s2 + 0.05) > (s2 + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          }
          button(e3, i3, s2, o2, r2 = {}, n2, a2, l2, h2, d2) {
            let p2 = this.label(e3, i3, s2, h2, void 0, void 0, d2, void 0, "button"), u2 = this.styledMode, g2 = arguments, f2 = 0;
            r2 = I(c.global.buttonTheme, r2), u2 && (delete r2.fill, delete r2.stroke, delete r2["stroke-width"]);
            let x2 = r2.states || {}, y2 = r2.style || {};
            delete r2.states, delete r2.style;
            let b2 = [t2.filterUserAttributes(r2)], v2 = [y2];
            return u2 || ["hover", "select", "disabled"].forEach((e4, i4) => {
              b2.push(I(b2[0], t2.filterUserAttributes(g2[i4 + 5] || x2[e4] || {}))), v2.push(b2[i4 + 1].style), delete b2[i4 + 1].style;
            }), k(p2.element, m ? "mouseover" : "mouseenter", function() {
              3 !== f2 && p2.setState(1);
            }), k(p2.element, m ? "mouseout" : "mouseleave", function() {
              3 !== f2 && p2.setState(f2);
            }), p2.setState = (t3 = 0) => {
              if (1 !== t3 && (p2.state = f2 = t3), p2.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t3]), !u2) {
                p2.attr(b2[t3]);
                let e4 = v2[t3];
                D(e4) && p2.css(e4);
              }
            }, p2.attr(b2[0]), !u2 && (p2.css(O({
              cursor: "default"
            }, y2)), d2 && p2.text.css({
              pointerEvents: "none"
            })), p2.on("touchstart", (t3) => t3.stopPropagation()).on("click", function(t3) {
              3 !== f2 && o2.call(p2, t3);
            });
          }
          crispLine(t3, e3) {
            let [i3, s2] = t3;
            return T(i3[1]) && i3[1] === s2[1] && (i3[1] = s2[1] = w(i3[1], e3)), T(i3[2]) && i3[2] === s2[2] && (i3[2] = s2[2] = w(i3[2], e3)), t3;
          }
          path(t3) {
            let e3 = this.styledMode ? {} : {
              fill: "none"
            };
            return L(t3) ? e3.d = t3 : D(t3) && O(e3, t3), this.createElement("path").attr(e3);
          }
          circle(t3, e3, i3) {
            let s2 = D(t3) ? t3 : void 0 === t3 ? {} : {
              x: t3,
              y: e3,
              r: i3
            }, o2 = this.createElement("circle");
            return o2.xSetter = o2.ySetter = function(t4, e4, i4) {
              i4.setAttribute("c" + e4, t4);
            }, o2.attr(s2);
          }
          arc(t3, e3, i3, s2, o2, r2) {
            let n2;
            D(t3) ? (e3 = (n2 = t3).y, i3 = n2.r, s2 = n2.innerR, o2 = n2.start, r2 = n2.end, t3 = n2.x) : n2 = {
              innerR: s2,
              start: o2,
              end: r2
            };
            let a2 = this.symbol("arc", t3, e3, i3, i3, n2);
            return a2.r = i3, a2;
          }
          rect(t3, e3, i3, s2, o2, r2) {
            let n2 = D(t3) ? t3 : void 0 === t3 ? {} : {
              x: t3,
              y: e3,
              r: o2,
              width: Math.max(i3 || 0, 0),
              height: Math.max(s2 || 0, 0)
            }, a2 = this.createElement("rect");
            return this.styledMode || (void 0 !== r2 && (n2["stroke-width"] = r2, O(n2, a2.crisp(n2))), n2.fill = "none"), a2.rSetter = function(t4, e4, i4) {
              a2.r = t4, S(i4, {
                rx: t4,
                ry: t4
              });
            }, a2.rGetter = function() {
              return a2.r || 0;
            }, a2.attr(n2);
          }
          roundedRect(t3) {
            return this.symbol("roundedRect").attr(t3);
          }
          setSize(t3, e3, i3) {
            this.width = t3, this.height = e3, this.boxWrapper.animate({
              width: t3,
              height: e3
            }, {
              step: function() {
                this.attr({
                  viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                });
              },
              duration: j(i3, true) ? void 0 : 0
            }), this.alignElements();
          }
          g(t3) {
            let e3 = this.createElement("g");
            return t3 ? e3.attr({
              class: "highcharts-" + t3
            }) : e3;
          }
          image(t3, e3, i3, s2, o2, r2) {
            let n2 = {
              preserveAspectRatio: "none"
            };
            E(e3) && (n2.x = e3), E(i3) && (n2.y = i3), E(s2) && (n2.width = s2), E(o2) && (n2.height = o2);
            let a2 = this.createElement("image").attr(n2), l2 = function(e4) {
              a2.attr({
                href: t3
              }), r2.call(a2, e4);
            };
            if (r2) {
              a2.attr({
                href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              });
              let e4 = new M.Image();
              k(e4, "load", l2), e4.src = t3, e4.complete && l2({});
            } else a2.attr({
              href: t3
            });
            return a2;
          }
          symbol(t3, e3, i3, s2, o2, r2) {
            let n2, a2, l2, h2;
            let d2 = this, c2 = /^url\((.*?)\)$/, u2 = c2.test(t3), f2 = !u2 && (this.symbols[t3] ? t3 : "circle"), m2 = f2 && this.symbols[f2];
            if (m2) "number" == typeof e3 && (a2 = m2.call(this.symbols, e3 || 0, i3 || 0, s2 || 0, o2 || 0, r2)), n2 = this.path(a2), d2.styledMode || n2.attr("fill", "none"), O(n2, {
              symbolName: f2 || void 0,
              x: e3,
              y: i3,
              width: s2,
              height: o2
            }), r2 && O(n2, r2);
            else if (u2) {
              l2 = t3.match(c2)[1];
              let s3 = n2 = this.image(l2);
              s3.imgwidth = j(r2 && r2.width, v[l2] && v[l2].width), s3.imgheight = j(r2 && r2.height, v[l2] && v[l2].height), h2 = (t4) => t4.attr({
                width: t4.width,
                height: t4.height
              }), ["width", "height"].forEach((t4) => {
                s3[`${t4}Setter`] = function(t5, e4) {
                  this[e4] = t5;
                  let {
                    alignByTranslate: i4,
                    element: s4,
                    width: o3,
                    height: n3,
                    imgwidth: a3,
                    imgheight: l3
                  } = this, h3 = "width" === e4 ? a3 : l3, d3 = 1;
                  r2 && "within" === r2.backgroundSize && o3 && n3 && a3 && l3 ? (d3 = Math.min(o3 / a3, n3 / l3), S(s4, {
                    width: Math.round(a3 * d3),
                    height: Math.round(l3 * d3)
                  })) : s4 && h3 && s4.setAttribute(e4, h3), !i4 && a3 && l3 && this.translate(((o3 || 0) - a3 * d3) / 2, ((n3 || 0) - l3 * d3) / 2);
                };
              }), T(e3) && s3.attr({
                x: e3,
                y: i3
              }), s3.isImg = true, T(s3.imgwidth) && T(s3.imgheight) ? h2(s3) : (s3.attr({
                width: 0,
                height: 0
              }), C("img", {
                onload: function() {
                  let t4 = p[d2.chartIndex];
                  0 === this.width && (A(this, {
                    position: "absolute",
                    top: "-999em"
                  }), g.body.appendChild(this)), v[l2] = {
                    width: this.width,
                    height: this.height
                  }, s3.imgwidth = this.width, s3.imgheight = this.height, s3.element && h2(s3), this.parentNode && this.parentNode.removeChild(this), d2.imgCount--, d2.imgCount || !t4 || t4.hasLoaded || t4.onload();
                },
                src: l2
              }), this.imgCount++);
            }
            return n2;
          }
          clipRect(t3, e3, i3, s2) {
            return this.rect(t3, e3, i3, s2, 0);
          }
          text(t3, e3, i3, s2) {
            let o2 = {};
            if (s2 && (this.allowHTML || !this.forExport)) return this.html(t3, e3, i3);
            o2.x = Math.round(e3 || 0), i3 && (o2.y = Math.round(i3)), T(t3) && (o2.text = t3);
            let r2 = this.createElement("text").attr(o2);
            return s2 && (!this.forExport || this.allowHTML) || (r2.xSetter = function(t4, e4, i4) {
              let s3 = i4.getElementsByTagName("tspan"), o3 = i4.getAttribute(e4);
              for (let i5 = 0, r3; i5 < s3.length; i5++) (r3 = s3[i5]).getAttribute(e4) === o3 && r3.setAttribute(e4, t4);
              i4.setAttribute(e4, t4);
            }), r2;
          }
          fontMetrics(t3) {
            let e3 = R(r.prototype.getStyle.call(t3, "font-size") || 0), i3 = e3 < 24 ? e3 + 3 : Math.round(1.2 * e3), s2 = Math.round(0.8 * i3);
            return {
              h: i3,
              b: s2,
              f: e3
            };
          }
          rotCorr(t3, e3, i3) {
            let s2 = t3;
            return e3 && i3 && (s2 = Math.max(s2 * Math.cos(e3 * u), 4)), {
              x: -t3 / 3 * Math.sin(e3 * u),
              y: s2
            };
          }
          pathToSegments(t3) {
            let e3 = [], i3 = [], s2 = {
              A: 8,
              C: 7,
              H: 2,
              L: 3,
              M: 3,
              Q: 5,
              S: 5,
              T: 3,
              V: 2
            };
            for (let o2 = 0; o2 < t3.length; o2++) B(i3[0]) && E(t3[o2]) && i3.length === s2[i3[0].toUpperCase()] && t3.splice(o2, 0, i3[0].replace("M", "L").replace("m", "l")), "string" == typeof t3[o2] && (i3.length && e3.push(i3.slice(0)), i3.length = 0), i3.push(t3[o2]);
            return e3.push(i3.slice(0)), e3;
          }
          label(t3, e3, i3, s2, o2, r2, a2, l2, h2) {
            return new n(this, t3, e3, i3, s2, o2, r2, a2, l2, h2);
          }
          alignElements() {
            this.alignedObjects.forEach((t3) => t3.align());
          }
        }
        return O(N.prototype, {
          Element: r,
          SVG_NS: b,
          escapes: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
          },
          symbols: a,
          draw: y
        }), o.registerRendererType("svg", N, true), N;
      }), i(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let {
          composed: o
        } = e2, {
          attr: r,
          css: n,
          createElement: a,
          defined: l,
          extend: h,
          pInt: d,
          pushUnique: c
        } = s;
        function p(t3, e3, s2) {
          let o2 = this.div?.style || s2.style;
          i2.prototype[`${e3}Setter`].call(this, t3, e3, s2), o2 && (o2[e3] = t3);
        }
        let u = (t3, e3) => {
          if (!t3.div) {
            let s2 = r(t3.element, "class"), o2 = t3.css, n2 = a("div", s2 ? {
              className: s2
            } : void 0, __spreadProps(__spreadValues({
              position: "absolute",
              left: `${t3.translateX || 0}px`,
              top: `${t3.translateY || 0}px`
            }, t3.styles), {
              display: t3.display,
              opacity: t3.opacity,
              visibility: t3.visibility
            }), t3.parentGroup?.div || e3);
            t3.classSetter = (t4, e4, i3) => {
              i3.setAttribute("class", t4), n2.className = t4;
            }, t3.translateXSetter = t3.translateYSetter = (e4, i3) => {
              t3[i3] = e4, n2.style["translateX" === i3 ? "left" : "top"] = `${e4}px`, t3.doTransform = true;
            }, t3.opacitySetter = t3.visibilitySetter = p, t3.css = (e4) => (o2.call(t3, e4), e4.cursor && (n2.style.cursor = e4.cursor), e4.pointerEvents && (n2.style.pointerEvents = e4.pointerEvents), t3), t3.on = function() {
              return i2.prototype.on.apply({
                element: n2,
                onEvents: t3.onEvents
              }, arguments), t3;
            }, t3.div = n2;
          }
          return t3.div;
        };
        class g extends i2 {
          static compose(t3) {
            c(o, this.compose) && (t3.prototype.html = function(t4, e3, i3) {
              return new g(this, "span").attr({
                text: t4,
                x: Math.round(e3),
                y: Math.round(i3)
              });
            });
          }
          constructor(t3, e3) {
            super(t3, e3), this.css(__spreadValues({
              position: "absolute"
            }, t3.styledMode ? {} : {
              fontFamily: t3.style.fontFamily,
              fontSize: t3.style.fontSize
            })), this.element.style.whiteSpace = "nowrap";
          }
          getSpanCorrection(t3, e3, i3) {
            this.xCorr = -t3 * i3, this.yCorr = -e3;
          }
          css(t3) {
            let e3;
            let {
              element: i3
            } = this, s2 = "SPAN" === i3.tagName && t3 && "width" in t3, o2 = s2 && t3.width;
            return s2 && (delete t3.width, this.textWidth = d(o2) || void 0, e3 = true), t3?.textOverflow === "ellipsis" && (t3.whiteSpace = "nowrap", t3.overflow = "hidden"), h(this.styles, t3), n(i3, t3), e3 && this.updateTransform(), this;
          }
          htmlGetBBox() {
            let {
              element: t3
            } = this;
            return {
              x: t3.offsetLeft,
              y: t3.offsetTop,
              width: t3.offsetWidth,
              height: t3.offsetHeight
            };
          }
          updateTransform() {
            if (!this.added) {
              this.alignOnAdd = true;
              return;
            }
            let {
              element: t3,
              renderer: e3,
              rotation: i3,
              rotationOriginX: s2,
              rotationOriginY: o2,
              styles: r2,
              textAlign: a2 = "left",
              textWidth: h2,
              translateX: d2 = 0,
              translateY: c2 = 0,
              x: p2 = 0,
              y: u2 = 0
            } = this, g2 = {
              left: 0,
              center: 0.5,
              right: 1
            }[a2], f2 = r2.whiteSpace;
            if (n(t3, {
              marginLeft: `${d2}px`,
              marginTop: `${c2}px`
            }), "SPAN" === t3.tagName) {
              let r3 = [i3, a2, t3.innerHTML, h2, this.textAlign].join(","), d3 = -(this.parentGroup?.padding * 1) || 0, c3, m = false;
              if (h2 !== this.oldTextWidth) {
                let e4 = this.textPxLength ? this.textPxLength : (n(t3, {
                  width: "",
                  whiteSpace: f2 || "nowrap"
                }), t3.offsetWidth), s3 = h2 || 0;
                (s3 > this.oldTextWidth || e4 > s3) && (/[ \-]/.test(t3.textContent || t3.innerText) || "ellipsis" === t3.style.textOverflow) && (n(t3, {
                  width: e4 > s3 || i3 ? h2 + "px" : "auto",
                  display: "block",
                  whiteSpace: f2 || "normal"
                }), this.oldTextWidth = h2, m = true);
              }
              this.hasBoxWidthChanged = m, r3 !== this.cTT && (c3 = e3.fontMetrics(t3).b, l(i3) && (i3 !== (this.oldRotation || 0) || a2 !== this.oldAlign) && this.setSpanRotation(i3, d3, d3), this.getSpanCorrection(!l(i3) && this.textPxLength || t3.offsetWidth, c3, g2));
              let {
                xCorr: x = 0,
                yCorr: y = 0
              } = this, b = (s2 ?? p2) - x - p2 - d3, v = (o2 ?? u2) - y - u2 - d3;
              n(t3, {
                left: `${p2 + x}px`,
                top: `${u2 + y}px`,
                transformOrigin: `${b}px ${v}px`
              }), this.cTT = r3, this.oldRotation = i3, this.oldAlign = a2;
            }
          }
          setSpanRotation(t3, e3, i3) {
            n(this.element, {
              transform: `rotate(${t3}deg)`,
              transformOrigin: `${e3}% ${i3}px`
            });
          }
          add(t3) {
            let e3;
            let i3 = this.renderer.box.parentNode, s2 = [];
            if (this.parentGroup = t3, t3 && !(e3 = t3.div)) {
              let o2 = t3;
              for (; o2; ) s2.push(o2), o2 = o2.parentGroup;
              for (let t4 of s2.reverse()) e3 = u(t4, i3);
            }
            return (e3 || i3).appendChild(this.element), this.added = true, this.alignOnAdd && this.updateTransform(), this;
          }
          textSetter(e3) {
            e3 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, t2.setElementHTML(this.element, e3 ?? ""), this.textStr = e3, this.doTransform = true);
          }
          alignSetter(t3) {
            this.alignValue = this.textAlign = t3, this.doTransform = true;
          }
          xSetter(t3, e3) {
            this[e3] = t3, this.doTransform = true;
          }
        }
        let f = g.prototype;
        return f.visibilitySetter = f.opacitySetter = p, f.ySetter = f.rotationSetter = f.rotationOriginXSetter = f.rotationOriginYSetter = f.xSetter, g;
      }), i(e, "Core/Axis/AxisDefaults.js", [], function() {
        var t2, e2;
        return (e2 = t2 || (t2 = {})).xAxis = {
          alignTicks: true,
          allowDecimals: void 0,
          panningEnabled: true,
          zIndex: 2,
          zoomEnabled: true,
          dateTimeLabelFormats: {
            millisecond: {
              main: "%H:%M:%S.%L",
              range: false
            },
            second: {
              main: "%H:%M:%S",
              range: false
            },
            minute: {
              main: "%H:%M",
              range: false
            },
            hour: {
              main: "%H:%M",
              range: false
            },
            day: {
              main: "%e %b"
            },
            week: {
              main: "%e %b"
            },
            month: {
              main: "%b '%y"
            },
            year: {
              main: "%Y"
            }
          },
          endOnTick: false,
          gridLineDashStyle: "Solid",
          gridZIndex: 1,
          labels: {
            autoRotationLimit: 80,
            distance: 15,
            enabled: true,
            indentation: 10,
            overflow: "justify",
            reserveSpace: void 0,
            rotation: void 0,
            staggerLines: 0,
            step: 0,
            useHTML: false,
            zIndex: 7,
            style: {
              color: "#333333",
              cursor: "default",
              fontSize: "0.8em"
            }
          },
          maxPadding: 0.01,
          minorGridLineDashStyle: "Solid",
          minorTickLength: 2,
          minorTickPosition: "outside",
          minorTicksPerMajor: 5,
          minPadding: 0.01,
          offset: void 0,
          reversed: void 0,
          reversedStacks: false,
          showEmpty: true,
          showFirstLabel: true,
          showLastLabel: true,
          startOfWeek: 1,
          startOnTick: false,
          tickLength: 10,
          tickPixelInterval: 100,
          tickmarkPlacement: "between",
          tickPosition: "outside",
          title: {
            align: "middle",
            useHTML: false,
            x: 0,
            y: 0,
            style: {
              color: "#666666",
              fontSize: "0.8em"
            }
          },
          type: "linear",
          uniqueNames: true,
          visible: true,
          minorGridLineColor: "#f2f2f2",
          minorGridLineWidth: 1,
          minorTickColor: "#999999",
          lineColor: "#333333",
          lineWidth: 1,
          gridLineColor: "#e6e6e6",
          gridLineWidth: void 0,
          tickColor: "#333333"
        }, e2.yAxis = {
          reversedStacks: true,
          endOnTick: true,
          maxPadding: 0.05,
          minPadding: 0.05,
          tickPixelInterval: 72,
          showLastLabel: true,
          labels: {
            x: void 0
          },
          startOnTick: true,
          title: {
            text: "Values"
          },
          stackLabels: {
            animation: {},
            allowOverlap: false,
            enabled: false,
            crop: true,
            overflow: "justify",
            formatter: function() {
              let {
                numberFormatter: t3
              } = this.axis.chart;
              return t3(this.total || 0, -1);
            },
            style: {
              color: "#000000",
              fontSize: "0.7em",
              fontWeight: "bold",
              textOutline: "1px contrast"
            }
          },
          gridLineWidth: 1,
          lineWidth: 0
        }, t2;
      }), i(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let {
          addEvent: i2,
          isFunction: s,
          objectEach: o,
          removeEvent: r
        } = t2;
        return (e2 || (e2 = {})).registerEventOptions = function(t3, e3) {
          t3.eventOptions = t3.eventOptions || {}, o(e3.events, function(e4, o2) {
            t3.eventOptions[o2] !== e4 && (t3.eventOptions[o2] && (r(t3, o2, t3.eventOptions[o2]), delete t3.eventOptions[o2]), s(e4) && (t3.eventOptions[o2] = e4, i2(t3, o2, e4, {
              order: 0
            })));
          });
        }, e2;
      }), i(e, "Core/Axis/Tick.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          deg2rad: s
        } = e2, {
          clamp: o,
          correctFloat: r,
          defined: n,
          destroyObjectProperties: a,
          extend: l,
          fireEvent: h,
          isNumber: d,
          merge: c,
          objectEach: p,
          pick: u
        } = i2;
        return class {
          constructor(t3, e3, i3, s2, o2) {
            this.isNew = true, this.isNewLabel = true, this.axis = t3, this.pos = e3, this.type = i3 || "", this.parameters = o2 || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, h(this, "init"), i3 || s2 || this.addLabel();
          }
          addLabel() {
            let e3 = this, i3 = e3.axis, s2 = i3.options, o2 = i3.chart, a2 = i3.categories, c2 = i3.logarithmic, p2 = i3.names, g = e3.pos, f = u(e3.options && e3.options.labels, s2.labels), m = i3.tickPositions, x = g === m[0], y = g === m[m.length - 1], b = (!f.step || 1 === f.step) && 1 === i3.tickInterval, v = m.info, M = e3.label, k, S, C, w = this.parameters.category || (a2 ? u(a2[g], p2[g], g) : g);
            c2 && d(w) && (w = r(c2.lin2log(w))), i3.dateTime && (v ? k = (S = o2.time.resolveDTLFormat(s2.dateTimeLabelFormats[!s2.grid && v.higherRanks[g] || v.unitName])).main : d(w) && (k = i3.dateTime.getXDateFormat(w, s2.dateTimeLabelFormats || {}))), e3.isFirst = x, e3.isLast = y;
            let A = {
              axis: i3,
              chart: o2,
              dateTimeLabelFormat: k,
              isFirst: x,
              isLast: y,
              pos: g,
              tick: e3,
              tickPositionInfo: v,
              value: w
            };
            h(this, "labelFormat", A);
            let T = (e4) => f.formatter ? f.formatter.call(e4, e4) : f.format ? (e4.text = i3.defaultLabelFormatter.call(e4), t2.format(f.format, e4, o2)) : i3.defaultLabelFormatter.call(e4), P = T.call(A, A), O = S && S.list;
            O ? e3.shortenLabel = function() {
              for (C = 0; C < O.length; C++) if (l(A, {
                dateTimeLabelFormat: O[C]
              }), M.attr({
                text: T.call(A, A)
              }), M.getBBox().width < i3.getSlotWidth(e3) - 2 * (f.padding || 0)) return;
              M.attr({
                text: ""
              });
            } : e3.shortenLabel = void 0, b && i3._addedPlotLB && e3.moveLabel(P, f), n(M) || e3.movedLabel ? M && M.textStr !== P && !b && (!M.textWidth || f.style.width || M.styles.width || M.css({
              width: null
            }), M.attr({
              text: P
            }), M.textPxLength = M.getBBox().width) : (e3.label = M = e3.createLabel(P, f), e3.rotation = 0);
          }
          createLabel(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.chart, r2 = n(t3) && e3.enabled ? o2.renderer.text(t3, i3?.x, i3?.y, e3.useHTML).add(s2.labelGroup) : void 0;
            return r2 && (o2.styledMode || r2.css(c(e3.style)), r2.textPxLength = r2.getBBox().width), r2;
          }
          destroy() {
            a(this, this.axis);
          }
          getPosition(t3, e3, i3, s2) {
            let n2 = this.axis, a2 = n2.chart, l2 = s2 && a2.oldChartHeight || a2.chartHeight, d2 = {
              x: t3 ? r(n2.translate(e3 + i3, void 0, void 0, s2) + n2.transB) : n2.left + n2.offset + (n2.opposite ? (s2 && a2.oldChartWidth || a2.chartWidth) - n2.right - n2.left : 0),
              y: t3 ? l2 - n2.bottom + n2.offset - (n2.opposite ? n2.height : 0) : r(l2 - n2.translate(e3 + i3, void 0, void 0, s2) - n2.transB)
            };
            return d2.y = o(d2.y, -1e5, 1e5), h(this, "afterGetPosition", {
              pos: d2
            }), d2;
          }
          getLabelPosition(t3, e3, i3, o2, r2, a2, l2, d2) {
            let c2, p2;
            let g = this.axis, f = g.transA, m = g.isLinked && g.linkedParent ? g.linkedParent.reversed : g.reversed, x = g.staggerLines, y = g.tickRotCorr || {
              x: 0,
              y: 0
            }, b = o2 || g.reserveSpaceDefault ? 0 : -g.labelOffset * ("center" === g.labelAlign ? 0.5 : 1), v = r2.distance, M = {};
            return c2 = 0 === g.side ? i3.rotation ? -v : -i3.getBBox().height : 2 === g.side ? y.y + v : Math.cos(i3.rotation * s) * (y.y - i3.getBBox(false, 0).height / 2), n(r2.y) && (c2 = 0 === g.side && g.horiz ? r2.y + c2 : r2.y), t3 = t3 + u(r2.x, [0, 1, 0, -1][g.side] * v) + b + y.x - (a2 && o2 ? a2 * f * (m ? -1 : 1) : 0), e3 = e3 + c2 - (a2 && !o2 ? a2 * f * (m ? 1 : -1) : 0), x && (p2 = l2 / (d2 || 1) % x, g.opposite && (p2 = x - p2 - 1), e3 += p2 * (g.labelOffset / x)), M.x = t3, M.y = Math.round(e3), h(this, "afterGetLabelPosition", {
              pos: M,
              tickmarkOffset: a2,
              index: l2
            }), M;
          }
          getLabelSize() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          }
          getMarkPath(t3, e3, i3, s2, o2 = false, r2) {
            return r2.crispLine([["M", t3, e3], ["L", t3 + (o2 ? 0 : -i3), e3 + (o2 ? i3 : 0)]], s2);
          }
          handleOverflow(t3) {
            let e3 = this.axis, i3 = e3.options.labels, o2 = t3.x, r2 = e3.chart.chartWidth, n2 = e3.chart.spacing, a2 = u(e3.labelLeft, Math.min(e3.pos, n2[3])), l2 = u(e3.labelRight, Math.max(e3.isRadial ? 0 : e3.pos + e3.len, r2 - n2[1])), h2 = this.label, d2 = this.rotation, c2 = {
              left: 0,
              center: 0.5,
              right: 1
            }[e3.labelAlign || h2.attr("align")], p2 = h2.getBBox().width, g = e3.getSlotWidth(this), f = {}, m = g, x = 1, y, b, v;
            d2 || "justify" !== i3.overflow ? d2 < 0 && o2 - c2 * p2 < a2 ? v = Math.round(o2 / Math.cos(d2 * s) - a2) : d2 > 0 && o2 + c2 * p2 > l2 && (v = Math.round((r2 - o2) / Math.cos(d2 * s))) : (y = o2 - c2 * p2, b = o2 + (1 - c2) * p2, y < a2 ? m = t3.x + m * (1 - c2) - a2 : b > l2 && (m = l2 - t3.x + m * c2, x = -1), (m = Math.min(g, m)) < g && "center" === e3.labelAlign && (t3.x += x * (g - m - c2 * (g - Math.min(p2, m)))), (p2 > m || e3.autoRotation && (h2.styles || {}).width) && (v = m)), v && (this.shortenLabel ? this.shortenLabel() : (f.width = Math.floor(v) + "px", (i3.style || {}).textOverflow || (f.textOverflow = "ellipsis"), h2.css(f)));
          }
          moveLabel(t3, e3) {
            let i3 = this, s2 = i3.label, o2 = i3.axis, r2 = false, n2;
            s2 && s2.textStr === t3 ? (i3.movedLabel = s2, r2 = true, delete i3.label) : p(o2.ticks, function(e4) {
              r2 || e4.isNew || e4 === i3 || !e4.label || e4.label.textStr !== t3 || (i3.movedLabel = e4.label, r2 = true, e4.labelPos = i3.movedLabel.xy, delete e4.label);
            }), !r2 && (i3.labelPos || s2) && (n2 = i3.labelPos || s2.xy, i3.movedLabel = i3.createLabel(t3, e3, n2), i3.movedLabel && i3.movedLabel.attr({
              opacity: 0
            }));
          }
          render(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.horiz, n2 = this.pos, a2 = u(this.tickmarkOffset, s2.tickmarkOffset), l2 = this.getPosition(o2, n2, a2, e3), d2 = l2.x, c2 = l2.y, p2 = s2.pos, g = p2 + s2.len, f = o2 ? d2 : c2;
            !s2.chart.polar && this.isNew && (r(f) < p2 || f > g) && (i3 = 0);
            let m = u(i3, this.label && this.label.newOpacity, 1);
            i3 = u(i3, 1), this.isActive = true, this.renderGridLine(e3, i3), this.renderMark(l2, i3), this.renderLabel(l2, e3, m, t3), this.isNew = false, h(this, "afterRender");
          }
          renderGridLine(t3, e3) {
            let i3 = this.axis, s2 = i3.options, o2 = {}, r2 = this.pos, n2 = this.type, a2 = u(this.tickmarkOffset, i3.tickmarkOffset), l2 = i3.chart.renderer, h2 = this.gridLine, d2, c2 = s2.gridLineWidth, p2 = s2.gridLineColor, g = s2.gridLineDashStyle;
            "minor" === this.type && (c2 = s2.minorGridLineWidth, p2 = s2.minorGridLineColor, g = s2.minorGridLineDashStyle), h2 || (i3.chart.styledMode || (o2.stroke = p2, o2["stroke-width"] = c2 || 0, o2.dashstyle = g), n2 || (o2.zIndex = 1), t3 && (e3 = 0), this.gridLine = h2 = l2.path().attr(o2).addClass("highcharts-" + (n2 ? n2 + "-" : "") + "grid-line").add(i3.gridGroup)), h2 && (d2 = i3.getPlotLinePath({
              value: r2 + a2,
              lineWidth: h2.strokeWidth(),
              force: "pass",
              old: t3,
              acrossPanes: false
            })) && h2[t3 || this.isNew ? "attr" : "animate"]({
              d: d2,
              opacity: e3
            });
          }
          renderMark(t3, e3) {
            let i3 = this.axis, s2 = i3.options, o2 = i3.chart.renderer, r2 = this.type, n2 = i3.tickSize(r2 ? r2 + "Tick" : "tick"), a2 = t3.x, l2 = t3.y, h2 = u(s2["minor" !== r2 ? "tickWidth" : "minorTickWidth"], !r2 && i3.isXAxis ? 1 : 0), d2 = s2["minor" !== r2 ? "tickColor" : "minorTickColor"], c2 = this.mark, p2 = !c2;
            n2 && (i3.opposite && (n2[0] = -n2[0]), c2 || (this.mark = c2 = o2.path().addClass("highcharts-" + (r2 ? r2 + "-" : "") + "tick").add(i3.axisGroup), i3.chart.styledMode || c2.attr({
              stroke: d2,
              "stroke-width": h2
            })), c2[p2 ? "attr" : "animate"]({
              d: this.getMarkPath(a2, l2, n2[0], c2.strokeWidth(), i3.horiz, o2),
              opacity: e3
            }));
          }
          renderLabel(t3, e3, i3, s2) {
            let o2 = this.axis, r2 = o2.horiz, n2 = o2.options, a2 = this.label, l2 = n2.labels, h2 = l2.step, c2 = u(this.tickmarkOffset, o2.tickmarkOffset), p2 = t3.x, g = t3.y, f = true;
            a2 && d(p2) && (a2.xy = t3 = this.getLabelPosition(p2, g, a2, r2, l2, c2, s2, h2), (!this.isFirst || this.isLast || n2.showFirstLabel) && (!this.isLast || this.isFirst || n2.showLastLabel) ? !r2 || l2.step || l2.rotation || e3 || 0 === i3 || this.handleOverflow(t3) : f = false, h2 && s2 % h2 && (f = false), f && d(t3.y) ? (t3.opacity = i3, a2[this.isNewLabel ? "attr" : "animate"](t3).show(true), this.isNewLabel = false) : (a2.hide(), this.isNewLabel = true));
          }
          replaceMovedLabel() {
            let t3 = this.label, e3 = this.axis;
            t3 && !this.isNew && (t3.animate({
              opacity: 0
            }, void 0, t3.destroy), delete this.label), e3.isDirty = true, this.label = this.movedLabel, delete this.movedLabel;
          }
        };
      }), i(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/AxisDefaults.js"], e["Core/Color/Color.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a) {
        let {
          animObject: l
        } = t2, {
          xAxis: h,
          yAxis: d
        } = e2, {
          defaultOptions: c
        } = s, {
          registerEventOptions: p
        } = o, {
          deg2rad: u
        } = r, {
          arrayMax: g,
          arrayMin: f,
          clamp: m,
          correctFloat: x,
          defined: y,
          destroyObjectProperties: b,
          erase: v,
          error: M,
          extend: k,
          fireEvent: S,
          getClosestDistance: C,
          insertItem: w,
          isArray: A,
          isNumber: T,
          isString: P,
          merge: O,
          normalizeTickInterval: L,
          objectEach: E,
          pick: D,
          relativeLength: B,
          removeEvent: I,
          splat: j,
          syncTimeout: R
        } = a, G = (t3, e3) => L(e3, void 0, void 0, D(t3.options.allowDecimals, e3 < 0.5 || void 0 !== t3.tickAmount), !!t3.tickAmount);
        k(c, {
          xAxis: h,
          yAxis: O(h, d)
        });
        class z {
          constructor(t3, e3, i3) {
            this.init(t3, e3, i3);
          }
          init(t3, e3, i3 = this.coll) {
            let s2 = "xAxis" === i3, o2 = this.isZAxis || (t3.inverted ? !s2 : s2);
            this.chart = t3, this.horiz = o2, this.isXAxis = s2, this.coll = i3, S(this, "init", {
              userOptions: e3
            }), this.opposite = D(e3.opposite, this.opposite), this.side = D(e3.side, this.side, o2 ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e3);
            let r2 = this.options, n2 = r2.labels, a2 = r2.type;
            this.userOptions = e3, this.minPixelPadding = 0, this.reversed = D(r2.reversed, this.reversed), this.visible = r2.visible, this.zoomEnabled = r2.zoomEnabled, this.hasNames = "category" === a2 || true === r2.categories, this.categories = A(r2.categories) && r2.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = y(r2.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = r2.minRange || r2.maxZoom, this.range = r2.range, this.offset = r2.offset || 0, this.max = void 0, this.min = void 0;
            let l2 = D(r2.crosshair, j(t3.options.tooltip.crosshairs)[s2 ? 0 : 1]);
            this.crosshair = true === l2 ? {} : l2, -1 === t3.axes.indexOf(this) && (s2 ? t3.axes.splice(t3.xAxis.length, 0, this) : t3.axes.push(this), w(this, t3[this.coll])), t3.orderItems(this.coll), this.series = this.series || [], t3.inverted && !this.isZAxis && s2 && !y(this.reversed) && (this.reversed = true), this.labelRotation = T(n2.rotation) ? n2.rotation : void 0, p(this, r2), S(this, "afterInit");
          }
          setOptions(t3) {
            let e3 = this.horiz ? {
              labels: {
                autoRotation: [-45],
                padding: 4
              },
              margin: 15
            } : {
              labels: {
                padding: 1
              },
              title: {
                rotation: 90 * this.side
              }
            };
            this.options = O(e3, c[this.coll], t3), S(this, "afterSetOptions", {
              userOptions: t3
            });
          }
          defaultLabelFormatter() {
            let t3 = this.axis, {
              numberFormatter: e3
            } = this.chart, i3 = T(this.value) ? this.value : NaN, s2 = t3.chart.time, o2 = t3.categories, r2 = this.dateTimeLabelFormat, n2 = c.lang, a2 = n2.numericSymbols, l2 = n2.numericSymbolMagnitude || 1e3, h2 = t3.logarithmic ? Math.abs(i3) : t3.tickInterval, d2 = a2 && a2.length, p2, u2;
            if (o2) u2 = `${this.value}`;
            else if (r2) u2 = s2.dateFormat(r2, i3);
            else if (d2 && a2 && h2 >= 1e3) for (; d2-- && void 0 === u2; ) h2 >= (p2 = Math.pow(l2, d2 + 1)) && 10 * i3 % p2 == 0 && null !== a2[d2] && 0 !== i3 && (u2 = e3(i3 / p2, -1) + a2[d2]);
            return void 0 === u2 && (u2 = Math.abs(i3) >= 1e4 ? e3(i3, -1) : e3(i3, -1, void 0, "")), u2;
          }
          getSeriesExtremes() {
            let t3;
            let e3 = this;
            S(this, "getSeriesExtremes", null, function() {
              e3.hasVisibleSeries = false, e3.dataMin = e3.dataMax = e3.threshold = void 0, e3.softThreshold = !e3.isXAxis, e3.series.forEach((i3) => {
                if (i3.reserveSpace()) {
                  let s2 = i3.options, o2, r2 = s2.threshold, n2, a2;
                  if (e3.hasVisibleSeries = true, e3.positiveValuesOnly && 0 >= (r2 || 0) && (r2 = void 0), e3.isXAxis) (o2 = i3.xData) && o2.length && (o2 = e3.logarithmic ? o2.filter((t4) => t4 > 0) : o2, n2 = (t3 = i3.getXExtremes(o2)).min, a2 = t3.max, T(n2) || n2 instanceof Date || (o2 = o2.filter(T), n2 = (t3 = i3.getXExtremes(o2)).min, a2 = t3.max), o2.length && (e3.dataMin = Math.min(D(e3.dataMin, n2), n2), e3.dataMax = Math.max(D(e3.dataMax, a2), a2)));
                  else {
                    let t4 = i3.applyExtremes();
                    T(t4.dataMin) && (n2 = t4.dataMin, e3.dataMin = Math.min(D(e3.dataMin, n2), n2)), T(t4.dataMax) && (a2 = t4.dataMax, e3.dataMax = Math.max(D(e3.dataMax, a2), a2)), y(r2) && (e3.threshold = r2), (!s2.softThreshold || e3.positiveValuesOnly) && (e3.softThreshold = false);
                  }
                }
              });
            }), S(this, "afterGetSeriesExtremes");
          }
          translate(t3, e3, i3, s2, o2, r2) {
            let n2 = this.linkedParent || this, a2 = s2 && n2.old ? n2.old.min : n2.min;
            if (!T(a2)) return NaN;
            let l2 = n2.minPixelPadding, h2 = (n2.isOrdinal || n2.brokenAxis?.hasBreaks || n2.logarithmic && o2) && n2.lin2val, d2 = 1, c2 = 0, p2 = s2 && n2.old ? n2.old.transA : n2.transA, u2 = 0;
            return p2 || (p2 = n2.transA), i3 && (d2 *= -1, c2 = n2.len), n2.reversed && (d2 *= -1, c2 -= d2 * (n2.sector || n2.len)), e3 ? (u2 = (t3 = t3 * d2 + c2 - l2) / p2 + a2, h2 && (u2 = n2.lin2val(u2))) : (h2 && (t3 = n2.val2lin(t3)), u2 = d2 * (t3 - a2) * p2 + c2 + d2 * l2 + (T(r2) ? p2 * r2 : 0), n2.isRadial || (u2 = x(u2))), u2;
          }
          toPixels(t3, e3) {
            return this.translate(t3, false, !this.horiz, void 0, true) + (e3 ? 0 : this.pos);
          }
          toValue(t3, e3) {
            return this.translate(t3 - (e3 ? 0 : this.pos), true, !this.horiz, void 0, true);
          }
          getPlotLinePath(t3) {
            let e3 = this, i3 = e3.chart, s2 = e3.left, o2 = e3.top, r2 = t3.old, n2 = t3.value, a2 = t3.lineWidth, l2 = r2 && i3.oldChartHeight || i3.chartHeight, h2 = r2 && i3.oldChartWidth || i3.chartWidth, d2 = e3.transB, c2 = t3.translatedValue, p2 = t3.force, u2, g2, f2, x2, y2;
            function b2(t4, e4, i4) {
              return "pass" !== p2 && (t4 < e4 || t4 > i4) && (p2 ? t4 = m(t4, e4, i4) : y2 = true), t4;
            }
            let v2 = {
              value: n2,
              lineWidth: a2,
              old: r2,
              force: p2,
              acrossPanes: t3.acrossPanes,
              translatedValue: c2
            };
            return S(this, "getPlotLinePath", v2, function(t4) {
              u2 = f2 = (c2 = m(c2 = D(c2, e3.translate(n2, void 0, void 0, r2)), -1e5, 1e5)) + d2, g2 = x2 = l2 - c2 - d2, T(c2) ? e3.horiz ? (g2 = o2, x2 = l2 - e3.bottom + (e3.options.isInternal ? 0 : i3.scrollablePixelsY || 0), u2 = f2 = b2(u2, s2, s2 + e3.width)) : (u2 = s2, f2 = h2 - e3.right + (i3.scrollablePixelsX || 0), g2 = x2 = b2(g2, o2, o2 + e3.height)) : (y2 = true, p2 = false), t4.path = y2 && !p2 ? void 0 : i3.renderer.crispLine([["M", u2, g2], ["L", f2, x2]], a2 || 1);
            }), v2.path;
          }
          getLinearTickPositions(t3, e3, i3) {
            let s2, o2, r2;
            let n2 = x(Math.floor(e3 / t3) * t3), a2 = x(Math.ceil(i3 / t3) * t3), l2 = [];
            if (x(n2 + t3) === n2 && (r2 = 20), this.single) return [e3];
            for (s2 = n2; s2 <= a2 && (l2.push(s2), (s2 = x(s2 + t3, r2)) !== o2); ) o2 = s2;
            return l2;
          }
          getMinorTickInterval() {
            let {
              minorTicks: t3,
              minorTickInterval: e3
            } = this.options;
            return true === t3 ? D(e3, "auto") : false !== t3 ? e3 : void 0;
          }
          getMinorTickPositions() {
            let t3 = this.options, e3 = this.tickPositions, i3 = this.minorTickInterval, s2 = this.pointRangePadding || 0, o2 = (this.min || 0) - s2, r2 = (this.max || 0) + s2, n2 = r2 - o2, a2 = [], l2;
            if (n2 && n2 / i3 < this.len / 3) {
              let s3 = this.logarithmic;
              if (s3) this.paddedTicks.forEach(function(t4, e4, o3) {
                e4 && a2.push.apply(a2, s3.getLogTickPositions(i3, o3[e4 - 1], o3[e4], true));
              });
              else if (this.dateTime && "auto" === this.getMinorTickInterval()) a2 = a2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i3), o2, r2, t3.startOfWeek));
              else for (l2 = o2 + (e3[0] - o2) % i3; l2 <= r2 && l2 !== a2[0]; l2 += i3) a2.push(l2);
            }
            return 0 !== a2.length && this.trimTicks(a2), a2;
          }
          adjustForMinRange() {
            let t3 = this.options, e3 = this.logarithmic, {
              max: i3,
              min: s2,
              minRange: o2
            } = this, r2, n2, a2, l2;
            this.isXAxis && void 0 === o2 && !e3 && (o2 = y(t3.min) || y(t3.max) || y(t3.floor) || y(t3.ceiling) ? null : Math.min(5 * (C(this.series.map((t4) => (t4.xIncrement ? t4.xData?.slice(0, 2) : t4.xData) || [])) || 0), this.dataMax - this.dataMin)), T(i3) && T(s2) && T(o2) && i3 - s2 < o2 && (n2 = this.dataMax - this.dataMin >= o2, r2 = (o2 - i3 + s2) / 2, a2 = [s2 - r2, D(t3.min, s2 - r2)], n2 && (a2[2] = e3 ? e3.log2lin(this.dataMin) : this.dataMin), l2 = [(s2 = g(a2)) + o2, D(t3.max, s2 + o2)], n2 && (l2[2] = e3 ? e3.log2lin(this.dataMax) : this.dataMax), (i3 = f(l2)) - s2 < o2 && (a2[0] = i3 - o2, a2[1] = D(t3.min, i3 - o2), s2 = g(a2))), this.minRange = o2, this.min = s2, this.max = i3;
          }
          getClosest() {
            let t3, e3;
            if (this.categories) e3 = 1;
            else {
              let i3 = [];
              this.series.forEach(function(t4) {
                let s2 = t4.closestPointRange;
                t4.xData?.length === 1 ? i3.push(t4.xData[0]) : !t4.noSharedTooltip && y(s2) && t4.reserveSpace() && (e3 = y(e3) ? Math.min(e3, s2) : s2);
              }), i3.length && (i3.sort((t4, e4) => t4 - e4), t3 = C([i3]));
            }
            return t3 && e3 ? Math.min(t3, e3) : t3 || e3;
          }
          nameToX(t3) {
            let e3 = A(this.options.categories), i3 = e3 ? this.categories : this.names, s2 = t3.options.x, o2;
            return t3.series.requireSorting = false, y(s2) || (s2 = this.options.uniqueNames && i3 ? e3 ? i3.indexOf(t3.name) : D(i3.keys[t3.name], -1) : t3.series.autoIncrement()), -1 === s2 ? !e3 && i3 && (o2 = i3.length) : o2 = s2, void 0 !== o2 ? (this.names[o2] = t3.name, this.names.keys[t3.name] = o2) : t3.x && (o2 = t3.x), o2;
          }
          updateNames() {
            let t3 = this, e3 = this.names;
            e3.length > 0 && (Object.keys(e3.keys).forEach(function(t4) {
              delete e3.keys[t4];
            }), e3.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((e4) => {
              e4.xIncrement = null, (!e4.points || e4.isDirtyData) && (t3.max = Math.max(t3.max, e4.xData.length - 1), e4.processData(), e4.generatePoints()), e4.data.forEach(function(i3, s2) {
                let o2;
                i3?.options && void 0 !== i3.name && void 0 !== (o2 = t3.nameToX(i3)) && o2 !== i3.x && (i3.x = o2, e4.xData[s2] = o2);
              });
            }));
          }
          setAxisTranslation() {
            let t3 = this, e3 = t3.max - t3.min, i3 = t3.linkedParent, s2 = !!t3.categories, o2 = t3.isXAxis, r2 = t3.axisPointRange || 0, n2, a2 = 0, l2 = 0, h2, d2 = t3.transA;
            (o2 || s2 || r2) && (n2 = t3.getClosest(), i3 ? (a2 = i3.minPointOffset, l2 = i3.pointRangePadding) : t3.series.forEach(function(e4) {
              let i4 = s2 ? 1 : o2 ? D(e4.options.pointRange, n2, 0) : t3.axisPointRange || 0, h3 = e4.options.pointPlacement;
              if (r2 = Math.max(r2, i4), !t3.single || s2) {
                let t4 = e4.is("xrange") ? !o2 : o2;
                a2 = Math.max(a2, t4 && P(h3) ? 0 : i4 / 2), l2 = Math.max(l2, t4 && "on" === h3 ? 0 : i4);
              }
            }), h2 = t3.ordinal && t3.ordinal.slope && n2 ? t3.ordinal.slope / n2 : 1, t3.minPointOffset = a2 *= h2, t3.pointRangePadding = l2 *= h2, t3.pointRange = Math.min(r2, t3.single && s2 ? 1 : e3), o2 && n2 && (t3.closestPointRange = n2)), t3.translationSlope = t3.transA = d2 = t3.staticScale || t3.len / (e3 + l2 || 1), t3.transB = t3.horiz ? t3.left : t3.bottom, t3.minPixelPadding = d2 * a2, S(this, "afterSetAxisTranslation");
          }
          minFromRange() {
            let {
              max: t3,
              min: e3
            } = this;
            return T(t3) && T(e3) && t3 - e3 || void 0;
          }
          setTickInterval(t3) {
            let {
              categories: e3,
              chart: i3,
              dataMax: s2,
              dataMin: o2,
              dateTime: r2,
              isXAxis: n2,
              logarithmic: a2,
              options: l2,
              softThreshold: h2
            } = this, d2 = T(this.threshold) ? this.threshold : void 0, c2 = this.minRange || 0, {
              ceiling: p2,
              floor: u2,
              linkedTo: g2,
              softMax: f2,
              softMin: m2
            } = l2, b2 = T(g2) && i3[this.coll]?.[g2], v2 = l2.tickPixelInterval, k2 = l2.maxPadding, C2 = l2.minPadding, w2 = 0, A2, P2 = T(l2.tickInterval) && l2.tickInterval >= 0 ? l2.tickInterval : void 0, O2, L2, E2, B2;
            if (r2 || e3 || b2 || this.getTickAmount(), E2 = D(this.userMin, l2.min), B2 = D(this.userMax, l2.max), b2 ? (this.linkedParent = b2, A2 = b2.getExtremes(), this.min = D(A2.min, A2.dataMin), this.max = D(A2.max, A2.dataMax), l2.type !== b2.options.type && M(11, true, i3)) : (h2 && y(d2) && T(s2) && T(o2) && (o2 >= d2 ? (O2 = d2, C2 = 0) : s2 <= d2 && (L2 = d2, k2 = 0)), this.min = D(E2, O2, o2), this.max = D(B2, L2, s2)), T(this.max) && T(this.min) && (a2 && (this.positiveValuesOnly && !t3 && 0 >= Math.min(this.min, D(o2, this.min)) && M(10, true, i3), this.min = x(a2.log2lin(this.min), 16), this.max = x(a2.log2lin(this.max), 16)), this.range && T(o2) && (this.userMin = this.min = E2 = Math.max(o2, this.minFromRange() || 0), this.userMax = B2 = this.max, this.range = void 0)), S(this, "foundExtremes"), this.adjustForMinRange(), T(this.min) && T(this.max)) {
              if (!T(this.userMin) && T(m2) && m2 < this.min && (this.min = E2 = m2), !T(this.userMax) && T(f2) && f2 > this.max && (this.max = B2 = f2), e3 || this.axisPointRange || this.stacking?.usePercentage || b2 || !(w2 = this.max - this.min) || (!y(E2) && C2 && (this.min -= w2 * C2), y(B2) || !k2 || (this.max += w2 * k2)), !T(this.userMin) && T(u2) && (this.min = Math.max(this.min, u2)), !T(this.userMax) && T(p2) && (this.max = Math.min(this.max, p2)), h2 && T(o2) && T(s2)) {
                let t4 = d2 || 0;
                !y(E2) && this.min < t4 && o2 >= t4 ? this.min = l2.minRange ? Math.min(t4, this.max - c2) : t4 : !y(B2) && this.max > t4 && s2 <= t4 && (this.max = l2.minRange ? Math.max(t4, this.min + c2) : t4);
              }
              !i3.polar && this.min > this.max && (y(l2.min) ? this.max = this.min : y(l2.max) && (this.min = this.max)), w2 = this.max - this.min;
            }
            if (this.min !== this.max && T(this.min) && T(this.max) ? b2 && !P2 && v2 === b2.options.tickPixelInterval ? this.tickInterval = P2 = b2.tickInterval : this.tickInterval = D(P2, this.tickAmount ? w2 / Math.max(this.tickAmount - 1, 1) : void 0, e3 ? 1 : w2 * v2 / Math.max(this.len, v2)) : this.tickInterval = 1, n2 && !t3) {
              let t4 = this.min !== this.old?.min || this.max !== this.old?.max;
              this.series.forEach(function(e4) {
                e4.forceCrop = e4.forceCropping?.(), e4.processData(t4);
              }), S(this, "postProcessData", {
                hasExtremesChanged: t4
              });
            }
            this.setAxisTranslation(), S(this, "initialAxisTranslation"), this.pointRange && !P2 && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
            let I2 = D(l2.minTickInterval, r2 && !this.series.some((t4) => t4.noSharedTooltip) ? this.closestPointRange : 0);
            !P2 && this.tickInterval < I2 && (this.tickInterval = I2), r2 || a2 || P2 || (this.tickInterval = G(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
          }
          setTickPositions() {
            let t3 = this.options, e3 = t3.tickPositions, i3 = t3.tickPositioner, s2 = this.getMinorTickInterval(), o2 = !this.isPanning, r2 = o2 && t3.startOnTick, n2 = o2 && t3.endOnTick, a2 = [], l2;
            if (this.tickmarkOffset = this.categories && "between" === t3.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0, this.minorTickInterval = "auto" === s2 && this.tickInterval ? this.tickInterval / t3.minorTicksPerMajor : s2, this.single = this.min === this.max && y(this.min) && !this.tickAmount && (this.min % 1 == 0 || false !== t3.allowDecimals), e3) a2 = e3.slice();
            else if (T(this.min) && T(this.max)) {
              if (!this.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) a2 = [this.min, this.max], M(19, false, this.chart);
              else if (this.dateTime) a2 = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t3.units), this.min, this.max, t3.startOfWeek, this.ordinal?.positions, this.closestPointRange, true);
              else if (this.logarithmic) a2 = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
              else {
                let t4 = this.tickInterval, e4 = t4;
                for (; e4 <= 2 * t4; ) if (a2 = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && a2.length > this.tickAmount) this.tickInterval = G(this, e4 *= 1.1);
                else break;
              }
              a2.length > this.len && (a2 = [a2[0], a2[a2.length - 1]])[0] === a2[1] && (a2.length = 1), i3 && (this.tickPositions = a2, (l2 = i3.apply(this, [this.min, this.max])) && (a2 = l2));
            }
            this.tickPositions = a2, this.paddedTicks = a2.slice(0), this.trimTicks(a2, r2, n2), !this.isLinked && T(this.min) && T(this.max) && (this.single && a2.length < 2 && !this.categories && !this.series.some((t4) => t4.is("heatmap") && "between" === t4.options.pointPlacement) && (this.min -= 0.5, this.max += 0.5), e3 || l2 || this.adjustTickAmount()), S(this, "afterSetTickPositions");
          }
          trimTicks(t3, e3, i3) {
            let s2 = t3[0], o2 = t3[t3.length - 1], r2 = !this.isOrdinal && this.minPointOffset || 0;
            if (S(this, "trimTicks"), !this.isLinked) {
              if (e3 && s2 !== -1 / 0) this.min = s2;
              else for (; this.min - r2 > t3[0]; ) t3.shift();
              if (i3) this.max = o2;
              else for (; this.max + r2 < t3[t3.length - 1]; ) t3.pop();
              0 === t3.length && y(s2) && !this.options.tickPositions && t3.push((o2 + s2) / 2);
            }
          }
          alignToOthers() {
            let t3;
            let e3 = this, i3 = e3.chart, s2 = [this], o2 = e3.options, r2 = i3.options.chart, n2 = "yAxis" === this.coll && r2.alignThresholds, a2 = [];
            if (e3.thresholdAlignment = void 0, (false !== r2.alignTicks && o2.alignTicks || n2) && false !== o2.startOnTick && false !== o2.endOnTick && !e3.logarithmic) {
              let o3 = (t4) => {
                let {
                  horiz: e4,
                  options: i4
                } = t4;
                return [e4 ? i4.left : i4.top, i4.width, i4.height, i4.pane].join(",");
              }, r3 = o3(this);
              i3[this.coll].forEach(function(i4) {
                let {
                  series: n3
                } = i4;
                n3.length && n3.some((t4) => t4.visible) && i4 !== e3 && o3(i4) === r3 && (t3 = true, s2.push(i4));
              });
            }
            if (t3 && n2) {
              s2.forEach((t5) => {
                let i4 = t5.getThresholdAlignment(e3);
                T(i4) && a2.push(i4);
              });
              let t4 = a2.length > 1 ? a2.reduce((t5, e4) => t5 += e4, 0) / a2.length : void 0;
              s2.forEach((e4) => {
                e4.thresholdAlignment = t4;
              });
            }
            return t3;
          }
          getThresholdAlignment(t3) {
            if ((!T(this.dataMin) || this !== t3 && this.series.some((t4) => t4.isDirty || t4.isDirtyData)) && this.getSeriesExtremes(), T(this.threshold)) {
              let t4 = m((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
              return this.options.reversed && (t4 = 1 - t4), t4;
            }
          }
          getTickAmount() {
            let t3 = this.options, e3 = t3.tickPixelInterval, i3 = t3.tickAmount;
            y(t3.tickInterval) || i3 || !(this.len < e3) || this.isRadial || this.logarithmic || !t3.startOnTick || !t3.endOnTick || (i3 = 2), !i3 && this.alignToOthers() && (i3 = Math.ceil(this.len / e3) + 1), i3 < 4 && (this.finalTickAmt = i3, i3 = 5), this.tickAmount = i3;
          }
          adjustTickAmount() {
            let t3 = this, {
              finalTickAmt: e3,
              max: i3,
              min: s2,
              options: o2,
              tickPositions: r2,
              tickAmount: n2,
              thresholdAlignment: a2
            } = t3, l2 = r2?.length, h2 = D(t3.threshold, t3.softThreshold ? 0 : null), d2, c2, p2 = t3.tickInterval, u2, g2 = () => r2.push(x(r2[r2.length - 1] + p2)), f2 = () => r2.unshift(x(r2[0] - p2));
            if (T(a2) && (u2 = a2 < 0.5 ? Math.ceil(a2 * (n2 - 1)) : Math.floor(a2 * (n2 - 1)), o2.reversed && (u2 = n2 - 1 - u2)), t3.hasData() && T(s2) && T(i3)) {
              let a3 = () => {
                t3.transA *= (l2 - 1) / (n2 - 1), t3.min = o2.startOnTick ? r2[0] : Math.min(s2, r2[0]), t3.max = o2.endOnTick ? r2[r2.length - 1] : Math.max(i3, r2[r2.length - 1]);
              };
              if (T(u2) && T(t3.threshold)) {
                for (; r2[u2] !== h2 || r2.length !== n2 || r2[0] > s2 || r2[r2.length - 1] < i3; ) {
                  for (r2.length = 0, r2.push(t3.threshold); r2.length < n2; ) void 0 === r2[u2] || r2[u2] > t3.threshold ? f2() : g2();
                  if (p2 > 8 * t3.tickInterval) break;
                  p2 *= 2;
                }
                a3();
              } else if (l2 < n2) {
                for (; r2.length < n2; ) r2.length % 2 || s2 === h2 ? g2() : f2();
                a3();
              }
              if (y(e3)) {
                for (c2 = d2 = r2.length; c2--; ) (3 === e3 && c2 % 2 == 1 || e3 <= 2 && c2 > 0 && c2 < d2 - 1) && r2.splice(c2, 1);
                t3.finalTickAmt = void 0;
              }
            }
          }
          setScale() {
            let {
              coll: t3,
              stacking: e3
            } = this, i3 = false, s2 = false;
            this.series.forEach((t4) => {
              i3 = i3 || t4.isDirtyData || t4.isDirty, s2 = s2 || t4.xAxis && t4.xAxis.isDirty || false;
            }), this.setAxisSize();
            let o2 = this.len !== (this.old && this.old.len);
            o2 || i3 || s2 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (e3 && "yAxis" === t3 && e3.buildStacks(), this.forceRedraw = false, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e3 && "xAxis" === t3 && e3.buildStacks(), this.isDirty || (this.isDirty = o2 || this.min !== this.old?.min || this.max !== this.old?.max)) : e3 && e3.cleanStacks(), i3 && delete this.allExtremes, S(this, "afterSetScale");
          }
          setExtremes(t3, e3, i3 = true, s2, o2) {
            this.series.forEach((t4) => {
              delete t4.kdTree;
            }), S(this, "setExtremes", o2 = k(o2, {
              min: t3,
              max: e3
            }), (t4) => {
              this.userMin = t4.min, this.userMax = t4.max, this.eventArgs = t4, i3 && this.chart.redraw(s2);
            });
          }
          setAxisSize() {
            let t3 = this.chart, e3 = this.options, i3 = e3.offsets || [0, 0, 0, 0], s2 = this.horiz, o2 = this.width = Math.round(B(D(e3.width, t3.plotWidth - i3[3] + i3[1]), t3.plotWidth)), r2 = this.height = Math.round(B(D(e3.height, t3.plotHeight - i3[0] + i3[2]), t3.plotHeight)), n2 = this.top = Math.round(B(D(e3.top, t3.plotTop + i3[0]), t3.plotHeight, t3.plotTop)), a2 = this.left = Math.round(B(D(e3.left, t3.plotLeft + i3[3]), t3.plotWidth, t3.plotLeft));
            this.bottom = t3.chartHeight - r2 - n2, this.right = t3.chartWidth - o2 - a2, this.len = Math.max(s2 ? o2 : r2, 0), this.pos = s2 ? a2 : n2;
          }
          getExtremes() {
            let t3 = this.logarithmic;
            return {
              min: t3 ? x(t3.lin2log(this.min)) : this.min,
              max: t3 ? x(t3.lin2log(this.max)) : this.max,
              dataMin: this.dataMin,
              dataMax: this.dataMax,
              userMin: this.userMin,
              userMax: this.userMax
            };
          }
          getThreshold(t3) {
            let e3 = this.logarithmic, i3 = e3 ? e3.lin2log(this.min) : this.min, s2 = e3 ? e3.lin2log(this.max) : this.max;
            return null === t3 || t3 === -1 / 0 ? t3 = i3 : t3 === 1 / 0 ? t3 = s2 : i3 > t3 ? t3 = i3 : s2 < t3 && (t3 = s2), this.translate(t3, 0, 1, 0, 1);
          }
          autoLabelAlign(t3) {
            let e3 = (D(t3, 0) - 90 * this.side + 720) % 360, i3 = {
              align: "center"
            };
            return S(this, "autoLabelAlign", i3, function(t4) {
              e3 > 15 && e3 < 165 ? t4.align = "right" : e3 > 195 && e3 < 345 && (t4.align = "left");
            }), i3.align;
          }
          tickSize(t3) {
            let e3 = this.options, i3 = D(e3["tick" === t3 ? "tickWidth" : "minorTickWidth"], "tick" === t3 && this.isXAxis && !this.categories ? 1 : 0), s2 = e3["tick" === t3 ? "tickLength" : "minorTickLength"], o2;
            i3 && s2 && ("inside" === e3[t3 + "Position"] && (s2 = -s2), o2 = [s2, i3]);
            let r2 = {
              tickSize: o2
            };
            return S(this, "afterTickSize", r2), r2.tickSize;
          }
          labelMetrics() {
            let t3 = this.chart.renderer, e3 = this.ticks, i3 = e3[Object.keys(e3)[0]] || {};
            return this.chart.renderer.fontMetrics(i3.label || i3.movedLabel || t3.box);
          }
          unsquish() {
            let t3 = this.options.labels, e3 = t3.padding || 0, i3 = this.horiz, s2 = this.tickInterval, o2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s2), r2 = t3.rotation, n2 = x(0.8 * this.labelMetrics().h), a2 = Math.max(this.max - this.min, 0), l2 = function(t4) {
              let i4 = (t4 + 2 * e3) / (o2 || 1);
              return (i4 = i4 > 1 ? Math.ceil(i4) : 1) * s2 > a2 && t4 !== 1 / 0 && o2 !== 1 / 0 && a2 && (i4 = Math.ceil(a2 / s2)), x(i4 * s2);
            }, h2 = s2, d2, c2 = Number.MAX_VALUE, p2;
            if (i3) {
              if (!t3.staggerLines && (T(r2) ? p2 = [r2] : o2 < t3.autoRotationLimit && (p2 = t3.autoRotation)), p2) {
                let t4, e4;
                for (let i4 of p2) (i4 === r2 || i4 && i4 >= -90 && i4 <= 90) && (e4 = (t4 = l2(Math.abs(n2 / Math.sin(u * i4)))) + Math.abs(i4 / 360)) < c2 && (c2 = e4, d2 = i4, h2 = t4);
              }
            } else h2 = l2(0.75 * n2);
            return this.autoRotation = p2, this.labelRotation = D(d2, T(r2) ? r2 : 0), t3.step ? s2 : h2;
          }
          getSlotWidth(t3) {
            let e3 = this.chart, i3 = this.horiz, s2 = this.options.labels, o2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), r2 = e3.margin[3];
            if (t3 && T(t3.slotWidth)) return t3.slotWidth;
            if (i3 && s2.step < 2) return s2.rotation ? 0 : (this.staggerLines || 1) * this.len / o2;
            if (!i3) {
              let t4 = s2.style.width;
              if (void 0 !== t4) return parseInt(String(t4), 10);
              if (r2) return r2 - e3.spacing[3];
            }
            return 0.33 * e3.chartWidth;
          }
          renderUnsquish() {
            let t3 = this.chart, e3 = t3.renderer, i3 = this.tickPositions, s2 = this.ticks, o2 = this.options.labels, r2 = o2.style, n2 = this.horiz, a2 = this.getSlotWidth(), l2 = Math.max(1, Math.round(a2 - (n2 ? 2 * (o2.padding || 0) : o2.distance || 0))), h2 = {}, d2 = this.labelMetrics(), c2 = r2.textOverflow, p2, u2, g2 = 0, f2, m2;
            if (P(o2.rotation) || (h2.rotation = o2.rotation || 0), i3.forEach(function(t4) {
              let e4 = s2[t4];
              e4.movedLabel && e4.replaceMovedLabel(), e4 && e4.label && e4.label.textPxLength > g2 && (g2 = e4.label.textPxLength);
            }), this.maxLabelLength = g2, this.autoRotation) g2 > l2 && g2 > d2.h ? h2.rotation = this.labelRotation : this.labelRotation = 0;
            else if (a2 && (p2 = l2, !c2)) for (u2 = "clip", m2 = i3.length; !n2 && m2--; ) (f2 = s2[i3[m2]].label) && ("ellipsis" === f2.styles.textOverflow ? f2.css({
              textOverflow: "clip"
            }) : f2.textPxLength > a2 && f2.css({
              width: a2 + "px"
            }), f2.getBBox().height > this.len / i3.length - (d2.h - d2.f) && (f2.specificTextOverflow = "ellipsis"));
            h2.rotation && (p2 = g2 > 0.5 * t3.chartHeight ? 0.33 * t3.chartHeight : g2, c2 || (u2 = "ellipsis")), this.labelAlign = o2.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (h2.align = this.labelAlign), i3.forEach(function(t4) {
              let e4 = s2[t4], i4 = e4 && e4.label, o3 = r2.width, n3 = {};
              i4 && (i4.attr(h2), e4.shortenLabel ? e4.shortenLabel() : p2 && !o3 && "nowrap" !== r2.whiteSpace && (p2 < i4.textPxLength || "SPAN" === i4.element.tagName) ? (n3.width = p2 + "px", c2 || (n3.textOverflow = i4.specificTextOverflow || u2), i4.css(n3)) : !i4.styles.width || n3.width || o3 || i4.css({
                width: null
              }), delete i4.specificTextOverflow, e4.rotation = h2.rotation);
            }, this), this.tickRotCorr = e3.rotCorr(d2.b, this.labelRotation || 0, 0 !== this.side);
          }
          hasData() {
            return this.series.some(function(t3) {
              return t3.hasData();
            }) || this.options.showEmpty && y(this.min) && y(this.max);
          }
          addTitle(t3) {
            let e3;
            let i3 = this.chart.renderer, s2 = this.horiz, o2 = this.opposite, r2 = this.options.title, n2 = this.chart.styledMode;
            this.axisTitle || ((e3 = r2.textAlign) || (e3 = (s2 ? {
              low: "left",
              middle: "center",
              high: "right"
            } : {
              low: o2 ? "right" : "left",
              middle: "center",
              high: o2 ? "left" : "right"
            })[r2.align]), this.axisTitle = i3.text(r2.text || "", 0, 0, r2.useHTML).attr({
              zIndex: 7,
              rotation: r2.rotation || 0,
              align: e3
            }).addClass("highcharts-axis-title"), n2 || this.axisTitle.css(O(r2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true), n2 || r2.style.width || this.isRadial || this.axisTitle.css({
              width: this.len + "px"
            }), this.axisTitle[t3 ? "show" : "hide"](t3);
          }
          generateTick(t3) {
            let e3 = this.ticks;
            e3[t3] ? e3[t3].addLabel() : e3[t3] = new n(this, t3);
          }
          createGroups() {
            let {
              axisParent: t3,
              chart: e3,
              coll: i3,
              options: s2
            } = this, o2 = e3.renderer, r2 = (e4, r3, n2) => o2.g(e4).attr({
              zIndex: n2
            }).addClass(`highcharts-${i3.toLowerCase()}${r3} ` + (this.isRadial ? `highcharts-radial-axis${r3} ` : "") + (s2.className || "")).add(t3);
            this.axisGroup || (this.gridGroup = r2("grid", "-grid", s2.gridZIndex), this.axisGroup = r2("axis", "", s2.zIndex), this.labelGroup = r2("axis-labels", "-labels", s2.labels.zIndex));
          }
          getOffset() {
            let t3 = this, {
              chart: e3,
              horiz: i3,
              options: s2,
              side: o2,
              ticks: r2,
              tickPositions: n2,
              coll: a2
            } = t3, l2 = e3.inverted && !t3.isZAxis ? [1, 0, 3, 2][o2] : o2, h2 = t3.hasData(), d2 = s2.title, c2 = s2.labels, p2 = T(s2.crossing), u2 = e3.axisOffset, g2 = e3.clipOffset, f2 = [-1, 1, 1, -1][o2], m2, x2 = 0, b2, v2 = 0, M2 = 0, k2, C2;
            if (t3.showAxis = m2 = h2 || s2.showEmpty, t3.staggerLines = t3.horiz && c2.staggerLines || void 0, t3.createGroups(), h2 || t3.isLinked ? (n2.forEach(function(e4) {
              t3.generateTick(e4);
            }), t3.renderUnsquish(), t3.reserveSpaceDefault = 0 === o2 || 2 === o2 || {
              1: "left",
              3: "right"
            }[o2] === t3.labelAlign, D(c2.reserveSpace, !p2 && null, "center" === t3.labelAlign || null, t3.reserveSpaceDefault) && n2.forEach(function(t4) {
              M2 = Math.max(r2[t4].getLabelSize(), M2);
            }), t3.staggerLines && (M2 *= t3.staggerLines), t3.labelOffset = M2 * (t3.opposite ? -1 : 1)) : E(r2, function(t4, e4) {
              t4.destroy(), delete r2[e4];
            }), d2?.text && false !== d2.enabled && (t3.addTitle(m2), m2 && !p2 && false !== d2.reserveSpace && (t3.titleOffset = x2 = t3.axisTitle.getBBox()[i3 ? "height" : "width"], v2 = y(b2 = d2.offset) ? 0 : D(d2.margin, i3 ? 5 : 10))), t3.renderLine(), t3.offset = f2 * D(s2.offset, u2[o2] ? u2[o2] + (s2.margin || 0) : 0), t3.tickRotCorr = t3.tickRotCorr || {
              x: 0,
              y: 0
            }, C2 = 0 === o2 ? -t3.labelMetrics().h : 2 === o2 ? t3.tickRotCorr.y : 0, k2 = Math.abs(M2) + v2, M2 && (k2 -= C2, k2 += f2 * (i3 ? D(c2.y, t3.tickRotCorr.y + f2 * c2.distance) : D(c2.x, f2 * c2.distance))), t3.axisTitleMargin = D(b2, k2), t3.getMaxLabelDimensions && (t3.maxLabelDimensions = t3.getMaxLabelDimensions(r2, n2)), "colorAxis" !== a2 && g2) {
              let e4 = this.tickSize("tick");
              u2[o2] = Math.max(u2[o2], (t3.axisTitleMargin || 0) + x2 + f2 * t3.offset, k2, n2 && n2.length && e4 ? e4[0] + f2 * t3.offset : 0);
              let i4 = !t3.axisLine || s2.offset ? 0 : t3.axisLine.strokeWidth() / 2;
              g2[l2] = Math.max(g2[l2], i4);
            }
            S(this, "afterGetOffset");
          }
          getLinePath(t3) {
            let e3 = this.chart, i3 = this.opposite, s2 = this.offset, o2 = this.horiz, r2 = this.left + (i3 ? this.width : 0) + s2, n2 = e3.chartHeight - this.bottom - (i3 ? this.height : 0) + s2;
            return i3 && (t3 *= -1), e3.renderer.crispLine([["M", o2 ? this.left : r2, o2 ? n2 : this.top], ["L", o2 ? e3.chartWidth - this.right : r2, o2 ? n2 : e3.chartHeight - this.bottom]], t3);
          }
          renderLine() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
              stroke: this.options.lineColor,
              "stroke-width": this.options.lineWidth,
              zIndex: 7
            }));
          }
          getTitlePosition(t3) {
            let e3 = this.horiz, i3 = this.left, s2 = this.top, o2 = this.len, r2 = this.options.title, n2 = e3 ? i3 : s2, a2 = this.opposite, l2 = this.offset, h2 = r2.x, d2 = r2.y, c2 = this.chart.renderer.fontMetrics(t3), p2 = t3 ? Math.max(t3.getBBox(false, 0).height - c2.h - 1, 0) : 0, u2 = {
              low: n2 + (e3 ? 0 : o2),
              middle: n2 + o2 / 2,
              high: n2 + (e3 ? o2 : 0)
            }[r2.align], g2 = (e3 ? s2 + this.height : i3) + (e3 ? 1 : -1) * (a2 ? -1 : 1) * (this.axisTitleMargin || 0) + [-p2, p2, c2.f, -p2][this.side], f2 = {
              x: e3 ? u2 + h2 : g2 + (a2 ? this.width : 0) + l2 + h2,
              y: e3 ? g2 + d2 - (a2 ? this.height : 0) + l2 : u2 + d2
            };
            return S(this, "afterGetTitlePosition", {
              titlePosition: f2
            }), f2;
          }
          renderMinorTick(t3, e3) {
            let i3 = this.minorTicks;
            i3[t3] || (i3[t3] = new n(this, t3, "minor")), e3 && i3[t3].isNew && i3[t3].render(null, true), i3[t3].render(null, false, 1);
          }
          renderTick(t3, e3, i3) {
            let s2 = this.isLinked, o2 = this.ticks;
            (!s2 || t3 >= this.min && t3 <= this.max || this.grid && this.grid.isColumn) && (o2[t3] || (o2[t3] = new n(this, t3)), i3 && o2[t3].isNew && o2[t3].render(e3, true, -1), o2[t3].render(e3));
          }
          render() {
            let t3, e3;
            let i3 = this, s2 = i3.chart, o2 = i3.logarithmic, a2 = s2.renderer, h2 = i3.options, d2 = i3.isLinked, c2 = i3.tickPositions, p2 = i3.axisTitle, u2 = i3.ticks, g2 = i3.minorTicks, f2 = i3.alternateBands, m2 = h2.stackLabels, x2 = h2.alternateGridColor, y2 = h2.crossing, b2 = i3.tickmarkOffset, v2 = i3.axisLine, M2 = i3.showAxis, k2 = l(a2.globalAnimation);
            if (i3.labelEdge.length = 0, i3.overlap = false, [u2, g2, f2].forEach(function(t4) {
              E(t4, function(t5) {
                t5.isActive = false;
              });
            }), T(y2)) {
              let t4 = this.isXAxis ? s2.yAxis[0] : s2.xAxis[0], e4 = [1, -1, -1, 1][this.side];
              if (t4) {
                let s3 = t4.toPixels(y2, true);
                i3.horiz && (s3 = t4.len - s3), i3.offset = e4 * s3;
              }
            }
            if (i3.hasData() || d2) {
              let a3 = i3.chart.hasRendered && i3.old && T(i3.old.min);
              i3.minorTickInterval && !i3.categories && i3.getMinorTickPositions().forEach(function(t4) {
                i3.renderMinorTick(t4, a3);
              }), c2.length && (c2.forEach(function(t4, e4) {
                i3.renderTick(t4, e4, a3);
              }), b2 && (0 === i3.min || i3.single) && (u2[-1] || (u2[-1] = new n(i3, -1, null, true)), u2[-1].render(-1))), x2 && c2.forEach(function(n2, a4) {
                e3 = void 0 !== c2[a4 + 1] ? c2[a4 + 1] + b2 : i3.max - b2, a4 % 2 == 0 && n2 < i3.max && e3 <= i3.max + (s2.polar ? -b2 : b2) && (f2[n2] || (f2[n2] = new r.PlotLineOrBand(i3, {})), t3 = n2 + b2, f2[n2].options = {
                  from: o2 ? o2.lin2log(t3) : t3,
                  to: o2 ? o2.lin2log(e3) : e3,
                  color: x2,
                  className: "highcharts-alternate-grid"
                }, f2[n2].render(), f2[n2].isActive = true);
              }), i3._addedPlotLB || (i3._addedPlotLB = true, (h2.plotLines || []).concat(h2.plotBands || []).forEach(function(t4) {
                i3.addPlotBandOrLine(t4);
              }));
            }
            [u2, g2, f2].forEach(function(t4) {
              let e4 = [], i4 = k2.duration;
              E(t4, function(t5, i5) {
                t5.isActive || (t5.render(i5, false, 0), t5.isActive = false, e4.push(i5));
              }), R(function() {
                let i5 = e4.length;
                for (; i5--; ) t4[e4[i5]] && !t4[e4[i5]].isActive && (t4[e4[i5]].destroy(), delete t4[e4[i5]]);
              }, t4 !== f2 && s2.hasRendered && i4 ? i4 : 0);
            }), v2 && (v2[v2.isPlaced ? "animate" : "attr"]({
              d: this.getLinePath(v2.strokeWidth())
            }), v2.isPlaced = true, v2[M2 ? "show" : "hide"](M2)), p2 && M2 && (p2[p2.isNew ? "attr" : "animate"](i3.getTitlePosition(p2)), p2.isNew = false), m2 && m2.enabled && i3.stacking && i3.stacking.renderStackTotals(), i3.old = {
              len: i3.len,
              max: i3.max,
              min: i3.min,
              transA: i3.transA,
              userMax: i3.userMax,
              userMin: i3.userMin
            }, i3.isDirty = false, S(this, "afterRender");
          }
          redraw() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t3) {
              t3.render();
            })), this.series.forEach(function(t3) {
              t3.isDirty = true;
            });
          }
          getKeepProps() {
            return this.keepProps || z.keepProps;
          }
          destroy(t3) {
            let e3 = this, i3 = e3.plotLinesAndBands, s2 = this.eventOptions;
            if (S(this, "destroy", {
              keepEvents: t3
            }), t3 || I(e3), [e3.ticks, e3.minorTicks, e3.alternateBands].forEach(function(t4) {
              b(t4);
            }), i3) {
              let t4 = i3.length;
              for (; t4--; ) i3[t4].destroy();
            }
            for (let t4 in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(t5) {
              e3[t5] && (e3[t5] = e3[t5].destroy());
            }), e3.plotLinesAndBandsGroups) e3.plotLinesAndBandsGroups[t4] = e3.plotLinesAndBandsGroups[t4].destroy();
            E(e3, function(t4, i4) {
              -1 === e3.getKeepProps().indexOf(i4) && delete e3[i4];
            }), this.eventOptions = s2;
          }
          drawCrosshair(t3, e3) {
            let s2 = this.crosshair, o2 = D(s2 && s2.snap, true), r2 = this.chart, n2, a2, l2, h2 = this.cross, d2;
            if (S(this, "drawCrosshair", {
              e: t3,
              point: e3
            }), t3 || (t3 = this.cross && this.cross.e), s2 && false !== (y(e3) || !o2)) {
              if (o2 ? y(e3) && (a2 = D("colorAxis" !== this.coll ? e3.crosshairPos : null, this.isXAxis ? e3.plotX : this.len - e3.plotY)) : a2 = t3 && (this.horiz ? t3.chartX - this.pos : this.len - t3.chartY + this.pos), y(a2) && (d2 = {
                value: e3 && (this.isXAxis ? e3.x : D(e3.stackY, e3.y)),
                translatedValue: a2
              }, r2.polar && k(d2, {
                isCrosshair: true,
                chartX: t3 && t3.chartX,
                chartY: t3 && t3.chartY,
                point: e3
              }), n2 = this.getPlotLinePath(d2) || null), !y(n2)) {
                this.hideCrosshair();
                return;
              }
              l2 = this.categories && !this.isRadial, h2 || (this.cross = h2 = r2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l2 ? "category " : "thin ") + (s2.className || "")).attr({
                zIndex: D(s2.zIndex, 2)
              }).add(), !r2.styledMode && (h2.attr({
                stroke: s2.color || (l2 ? i2.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"),
                "stroke-width": D(s2.width, 1)
              }).css({
                "pointer-events": "none"
              }), s2.dashStyle && h2.attr({
                dashstyle: s2.dashStyle
              }))), h2.show().attr({
                d: n2
              }), l2 && !s2.width && h2.attr({
                "stroke-width": this.transA
              }), this.cross.e = t3;
            } else this.hideCrosshair();
            S(this, "afterDrawCrosshair", {
              e: t3,
              point: e3
            });
          }
          hideCrosshair() {
            this.cross && this.cross.hide(), S(this, "afterHideCrosshair");
          }
          update(t3, e3) {
            let i3 = this.chart;
            t3 = O(this.userOptions, t3), this.destroy(true), this.init(i3, t3), i3.isDirtyBox = true, D(e3, true) && i3.redraw();
          }
          remove(t3) {
            let e3 = this.chart, i3 = this.coll, s2 = this.series, o2 = s2.length;
            for (; o2--; ) s2[o2] && s2[o2].remove(false);
            v(e3.axes, this), v(e3[i3] || [], this), e3.orderItems(i3), this.destroy(), e3.isDirtyBox = true, D(t3, true) && e3.redraw();
          }
          setTitle(t3, e3) {
            this.update({
              title: t3
            }, e3);
          }
          setCategories(t3, e3) {
            this.update({
              categories: t3
            }, e3);
          }
        }
        return z.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"], z;
      }), i(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let {
          addEvent: i2,
          getMagnitude: s,
          normalizeTickInterval: o,
          timeUnits: r
        } = t2;
        return function(t3) {
          function e3() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function n() {
            if ("datetime" !== this.options.type) {
              this.dateTime = void 0;
              return;
            }
            this.dateTime || (this.dateTime = new a(this));
          }
          t3.compose = function(t4) {
            return t4.keepProps.includes("dateTime") || (t4.keepProps.push("dateTime"), t4.prototype.getTimeTicks = e3, i2(t4, "afterSetOptions", n)), t4;
          };
          class a {
            constructor(t4) {
              this.axis = t4;
            }
            normalizeTimeTickInterval(t4, e4) {
              let i3 = e4 || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], n2 = i3[i3.length - 1], a2 = r[n2[0]], l = n2[1], h;
              for (h = 0; h < i3.length && (a2 = r[(n2 = i3[h])[0]], l = n2[1], !i3[h + 1] || !(t4 <= (a2 * l[l.length - 1] + r[i3[h + 1][0]]) / 2)); h++) ;
              a2 === r.year && t4 < 5 * a2 && (l = [1, 2, 5]);
              let d = o(t4 / a2, l, "year" === n2[0] ? Math.max(s(t4 / a2), 1) : 1);
              return {
                unitRange: a2,
                count: d,
                unitName: n2[0]
              };
            }
            getXDateFormat(t4, e4) {
              let {
                axis: i3
              } = this, s2 = i3.chart.time;
              return i3.closestPointRange ? s2.getDateFormat(i3.closestPointRange, t4, i3.options.startOfWeek, e4) || s2.resolveDTLFormat(e4.year).main : s2.resolveDTLFormat(e4.day).main;
            }
          }
          t3.Additions = a;
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let {
          addEvent: i2,
          normalizeTickInterval: s,
          pick: o
        } = t2;
        return function(t3) {
          function e3(t4) {
            let e4 = t4.userOptions, i3 = this.logarithmic;
            "logarithmic" !== e4.type ? this.logarithmic = void 0 : i3 || (i3 = this.logarithmic = new n(this));
          }
          function r() {
            let t4 = this.logarithmic;
            t4 && (this.lin2val = function(e4) {
              return t4.lin2log(e4);
            }, this.val2lin = function(e4) {
              return t4.log2lin(e4);
            });
          }
          t3.compose = function(t4) {
            return t4.keepProps.includes("logarithmic") || (t4.keepProps.push("logarithmic"), i2(t4, "init", e3), i2(t4, "afterInit", r)), t4;
          };
          class n {
            constructor(t4) {
              this.axis = t4;
            }
            getLogTickPositions(t4, e4, i3, r2) {
              let n2 = this.axis, a = n2.len, l = n2.options, h = [];
              if (r2 || (this.minorAutoInterval = void 0), t4 >= 0.5) t4 = Math.round(t4), h = n2.getLinearTickPositions(t4, e4, i3);
              else if (t4 >= 0.08) {
                let s2, o2, n3, a2, l2, d, c;
                let p = Math.floor(e4);
                for (s2 = t4 > 0.3 ? [1, 2, 4] : t4 > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], o2 = p; o2 < i3 + 1 && !c; o2++) for (n3 = 0, a2 = s2.length; n3 < a2 && !c; n3++) (l2 = this.log2lin(this.lin2log(o2) * s2[n3])) > e4 && (!r2 || d <= i3) && void 0 !== d && h.push(d), d > i3 && (c = true), d = l2;
              } else {
                let d = this.lin2log(e4), c = this.lin2log(i3), p = r2 ? n2.getMinorTickInterval() : l.tickInterval, u = l.tickPixelInterval / (r2 ? 5 : 1), g = r2 ? a / n2.tickPositions.length : a;
                t4 = s(t4 = o("auto" === p ? null : p, this.minorAutoInterval, (c - d) * u / (g || 1))), h = n2.getLinearTickPositions(t4, d, c).map(this.log2lin), r2 || (this.minorAutoInterval = t4 / 5);
              }
              return r2 || (n2.tickInterval = t4), h;
            }
            lin2log(t4) {
              return Math.pow(10, t4);
            }
            log2lin(t4) {
              return Math.log(t4) / Math.LN10;
            }
          }
          t3.Additions = n;
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let {
          erase: i2,
          extend: s,
          isNumber: o
        } = t2;
        return function(t3) {
          let e3;
          function r(t4) {
            return this.addPlotBandOrLine(t4, "plotBands");
          }
          function n(t4, i3) {
            let s2 = this.userOptions, o2 = new e3(this, t4);
            if (this.visible && (o2 = o2.render()), o2) {
              if (this._addedPlotLB || (this._addedPlotLB = true, (s2.plotLines || []).concat(s2.plotBands || []).forEach((t5) => {
                this.addPlotBandOrLine(t5);
              })), i3) {
                let e4 = s2[i3] || [];
                e4.push(t4), s2[i3] = e4;
              }
              this.plotLinesAndBands.push(o2);
            }
            return o2;
          }
          function a(t4) {
            return this.addPlotBandOrLine(t4, "plotLines");
          }
          function l(t4, e4, i3) {
            i3 = i3 || this.options;
            let s2 = this.getPlotLinePath({
              value: e4,
              force: true,
              acrossPanes: i3.acrossPanes
            }), r2 = [], n2 = this.horiz, a2 = !o(this.min) || !o(this.max) || t4 < this.min && e4 < this.min || t4 > this.max && e4 > this.max, l2 = this.getPlotLinePath({
              value: t4,
              force: true,
              acrossPanes: i3.acrossPanes
            }), h2, d2 = 1, c2;
            if (l2 && s2) for (a2 && (c2 = l2.toString() === s2.toString(), d2 = 0), h2 = 0; h2 < l2.length; h2 += 2) {
              let t5 = l2[h2], e5 = l2[h2 + 1], i4 = s2[h2], o2 = s2[h2 + 1];
              ("M" === t5[0] || "L" === t5[0]) && ("M" === e5[0] || "L" === e5[0]) && ("M" === i4[0] || "L" === i4[0]) && ("M" === o2[0] || "L" === o2[0]) && (n2 && i4[1] === t5[1] ? (i4[1] += d2, o2[1] += d2) : n2 || i4[2] !== t5[2] || (i4[2] += d2, o2[2] += d2), r2.push(["M", t5[1], t5[2]], ["L", e5[1], e5[2]], ["L", o2[1], o2[2]], ["L", i4[1], i4[2]], ["Z"])), r2.isFlat = c2;
            }
            return r2;
          }
          function h(t4) {
            this.removePlotBandOrLine(t4);
          }
          function d(t4) {
            let e4 = this.plotLinesAndBands, s2 = this.options, o2 = this.userOptions;
            if (e4) {
              let r2 = e4.length;
              for (; r2--; ) e4[r2].id === t4 && e4[r2].destroy();
              [s2.plotLines || [], o2.plotLines || [], s2.plotBands || [], o2.plotBands || []].forEach(function(e5) {
                for (r2 = e5.length; r2--; ) (e5[r2] || {}).id === t4 && i2(e5, e5[r2]);
              });
            }
          }
          function c(t4) {
            this.removePlotBandOrLine(t4);
          }
          t3.compose = function(t4, i3) {
            let o2 = i3.prototype;
            return o2.addPlotBand || (e3 = t4, s(o2, {
              addPlotBand: r,
              addPlotLine: a,
              addPlotBandOrLine: n,
              getPlotBandPath: l,
              removePlotBand: h,
              removePlotLine: c,
              removePlotBandOrLine: d
            })), i3;
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          arrayMax: i2,
          arrayMin: s,
          defined: o,
          destroyObjectProperties: r,
          erase: n,
          fireEvent: a,
          merge: l,
          objectEach: h,
          pick: d
        } = e2;
        class c {
          static compose(e3) {
            return t2.compose(c, e3);
          }
          constructor(t3, e3) {
            this.axis = t3, this.options = e3, this.id = e3.id;
          }
          render() {
            a(this, "render");
            let {
              axis: t3,
              options: e3
            } = this, {
              horiz: i3,
              logarithmic: s2
            } = t3, {
              color: r2,
              events: n2,
              zIndex: c2 = 0
            } = e3, p = {}, u = t3.chart.renderer, g = e3.to, f = e3.from, m = e3.value, x = e3.borderWidth, y = e3.label, {
              label: b,
              svgElem: v
            } = this, M = [], k, S = o(f) && o(g), C = o(m), w = !v, A = {
              class: "highcharts-plot-" + (S ? "band " : "line ") + (e3.className || "")
            }, T = S ? "bands" : "lines";
            if (!t3.chart.styledMode && (C ? (A.stroke = r2 || "#999999", A["stroke-width"] = d(e3.width, 1), e3.dashStyle && (A.dashstyle = e3.dashStyle)) : S && (A.fill = r2 || "#e6e9ff", x && (A.stroke = e3.borderColor, A["stroke-width"] = x))), p.zIndex = c2, T += "-" + c2, (k = t3.plotLinesAndBandsGroups[T]) || (t3.plotLinesAndBandsGroups[T] = k = u.g("plot-" + T).attr(p).add()), v || (this.svgElem = v = u.path().attr(A).add(k)), o(m)) M = t3.getPlotLinePath({
              value: s2?.log2lin(m) ?? m,
              lineWidth: v.strokeWidth(),
              acrossPanes: e3.acrossPanes
            });
            else {
              if (!(o(f) && o(g))) return;
              M = t3.getPlotBandPath(s2?.log2lin(f) ?? f, s2?.log2lin(g) ?? g, e3);
            }
            return !this.eventsAdded && n2 && (h(n2, (t4, e4) => {
              v?.on(e4, (t5) => {
                n2[e4].apply(this, [t5]);
              });
            }), this.eventsAdded = true), (w || !v.d) && M?.length ? v.attr({
              d: M
            }) : v && (M ? (v.show(), v.animate({
              d: M
            })) : v.d && (v.hide(), b && (this.label = b = b.destroy()))), y && (o(y.text) || o(y.formatter)) && M?.length && t3.width > 0 && t3.height > 0 && !M.isFlat ? (y = l({
              align: i3 && S ? "center" : void 0,
              x: i3 ? !S && 4 : 10,
              verticalAlign: !i3 && S ? "middle" : void 0,
              y: i3 ? S ? 16 : 10 : S ? 6 : -4,
              rotation: i3 && !S ? 90 : 0
            }, y), this.renderLabel(y, M, S, c2)) : b && b.hide(), this;
          }
          renderLabel(t3, e3, o2, r2) {
            let n2 = this.axis, a2 = n2.chart.renderer, h2 = this.label;
            h2 || (this.label = h2 = a2.text(this.getLabelText(t3), 0, 0, t3.useHTML).attr({
              align: t3.textAlign || t3.align,
              rotation: t3.rotation,
              class: "highcharts-plot-" + (o2 ? "band" : "line") + "-label " + (t3.className || ""),
              zIndex: r2
            }), n2.chart.styledMode || h2.css(l({
              fontSize: "0.8em",
              textOverflow: "ellipsis"
            }, t3.style)), h2.add());
            let d2 = e3.xBounds || [e3[0][1], e3[1][1], o2 ? e3[2][1] : e3[0][1]], c2 = e3.yBounds || [e3[0][2], e3[1][2], o2 ? e3[2][2] : e3[0][2]], p = s(d2), u = s(c2);
            if (h2.align(t3, false, {
              x: p,
              y: u,
              width: i2(d2) - p,
              height: i2(c2) - u
            }), !h2.alignValue || "left" === h2.alignValue) {
              let e4 = t3.clip ? n2.width : n2.chart.chartWidth;
              h2.css({
                width: (90 === h2.rotation ? n2.height - (h2.alignAttr.y - n2.top) : e4 - (h2.alignAttr.x - n2.left)) + "px"
              });
            }
            h2.show(true);
          }
          getLabelText(t3) {
            return o(t3.formatter) ? t3.formatter.call(this) : t3.text;
          }
          destroy() {
            n(this.axis.plotLinesAndBands, this), delete this.axis, r(this);
          }
        }
        return c;
      }), i(e, "Core/Tooltip.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        var n;
        let {
          animObject: a
        } = t2, {
          format: l
        } = e2, {
          composed: h,
          doc: d,
          isSafari: c
        } = i2, {
          distribute: p
        } = s, {
          addEvent: u,
          clamp: g,
          css: f,
          discardElement: m,
          extend: x,
          fireEvent: y,
          isArray: b,
          isNumber: v,
          isString: M,
          merge: k,
          pick: S,
          pushUnique: C,
          splat: w,
          syncTimeout: A
        } = r;
        class T {
          constructor(t3, e3, i3) {
            this.allowShared = true, this.crosshairs = [], this.distance = 0, this.isHidden = true, this.isSticky = false, this.options = {}, this.outside = false, this.chart = t3, this.init(t3, e3), this.pointer = i3;
          }
          bodyFormatter(t3) {
            return t3.map(function(t4) {
              let e3 = t4.series.tooltipOptions;
              return (e3[(t4.point.formatPrefix || "point") + "Formatter"] || t4.point.tooltipFormatter).call(t4.point, e3[(t4.point.formatPrefix || "point") + "Format"] || "");
            });
          }
          cleanSplit(t3) {
            this.chart.series.forEach(function(e3) {
              let i3 = e3 && e3.tt;
              i3 && (!i3.isActive || t3 ? e3.tt = i3.destroy() : i3.isActive = false);
            });
          }
          defaultFormatter(t3) {
            let e3;
            let i3 = this.points || w(this);
            return (e3 = (e3 = [t3.tooltipFooterHeaderFormatter(i3[0])]).concat(t3.bodyFormatter(i3))).push(t3.tooltipFooterHeaderFormatter(i3[0], true)), e3;
          }
          destroy() {
            this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(true), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), m(this.container)), r.clearTimeout(this.hideTimer);
          }
          getAnchor(t3, e3) {
            let i3;
            let {
              chart: s2,
              pointer: o2
            } = this, r2 = s2.inverted, n2 = s2.plotTop, a2 = s2.plotLeft;
            if ((t3 = w(t3))[0].series && t3[0].series.yAxis && !t3[0].series.yAxis.options.reversedStacks && (t3 = t3.slice().reverse()), this.followPointer && e3) void 0 === e3.chartX && (e3 = o2.normalize(e3)), i3 = [e3.chartX - a2, e3.chartY - n2];
            else if (t3[0].tooltipPos) i3 = t3[0].tooltipPos;
            else {
              let s3 = 0, o3 = 0;
              t3.forEach(function(t4) {
                let e4 = t4.pos(true);
                e4 && (s3 += e4[0], o3 += e4[1]);
              }), s3 /= t3.length, o3 /= t3.length, this.shared && t3.length > 1 && e3 && (r2 ? s3 = e3.chartX : o3 = e3.chartY), i3 = [s3 - a2, o3 - n2];
            }
            return i3.map(Math.round);
          }
          getClassName(t3, e3, i3) {
            let s2 = this.options, o2 = t3.series, r2 = o2.options;
            return [s2.className, "highcharts-label", i3 && "highcharts-tooltip-header", e3 ? "highcharts-tooltip-box" : "highcharts-tooltip", !i3 && "highcharts-color-" + S(t3.colorIndex, o2.colorIndex), r2 && r2.className].filter(M).join(" ");
          }
          getLabel() {
            let t3 = this, e3 = this.chart.styledMode, s2 = this.options, r2 = this.split && this.allowShared, n2 = this.container, a2 = this.chart.renderer;
            if (this.label) {
              let t4 = !this.label.hasClass("highcharts-label");
              (!r2 && t4 || r2 && !t4) && this.destroy();
            }
            if (!this.label) {
              if (this.outside) {
                let t4 = this.chart.options.chart.style, e4 = o.getRendererType();
                this.container = n2 = i2.doc.createElement("div"), n2.className = "highcharts-tooltip-container", f(n2, {
                  position: "absolute",
                  top: "1px",
                  pointerEvents: "none",
                  zIndex: Math.max(this.options.style.zIndex || 0, (t4 && t4.zIndex || 0) + 3)
                }), this.renderer = a2 = new e4(n2, 0, 0, t4, void 0, void 0, a2.styledMode);
              }
              if (r2 ? this.label = a2.g("tooltip") : (this.label = a2.label("", 0, 0, s2.shape, void 0, void 0, s2.useHTML, void 0, "tooltip").attr({
                padding: s2.padding,
                r: s2.borderRadius
              }), e3 || this.label.attr({
                fill: s2.backgroundColor,
                "stroke-width": s2.borderWidth || 0
              }).css(s2.style).css({
                pointerEvents: s2.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none")
              })), t3.outside) {
                let e4 = this.label;
                [e4.xSetter, e4.ySetter].forEach((i3, s3) => {
                  e4[s3 ? "ySetter" : "xSetter"] = (o2) => {
                    i3.call(e4, t3.distance), e4[s3 ? "y" : "x"] = o2, n2 && (n2.style[s3 ? "top" : "left"] = `${o2}px`);
                  };
                });
              }
              this.label.attr({
                zIndex: 8
              }).shadow(s2.shadow).add();
            }
            return n2 && !n2.parentElement && i2.doc.body.appendChild(n2), this.label;
          }
          getPlayingField() {
            let {
              body: t3,
              documentElement: e3
            } = d, {
              chart: i3,
              distance: s2,
              outside: o2
            } = this;
            return {
              width: o2 ? Math.max(t3.scrollWidth, e3.scrollWidth, t3.offsetWidth, e3.offsetWidth, e3.clientWidth) - 2 * s2 : i3.chartWidth,
              height: o2 ? Math.max(t3.scrollHeight, e3.scrollHeight, t3.offsetHeight, e3.offsetHeight, e3.clientHeight) : i3.chartHeight
            };
          }
          getPosition(t3, e3, i3) {
            let {
              distance: s2,
              chart: o2,
              outside: r2,
              pointer: n2
            } = this, {
              inverted: a2,
              plotLeft: l2,
              plotTop: h2,
              polar: d2
            } = o2, {
              plotX: c2 = 0,
              plotY: p2 = 0
            } = i3, u2 = {}, g2 = a2 && i3.h || 0, {
              height: f2,
              width: m2
            } = this.getPlayingField(), x2 = n2.getChartPosition(), y2 = (t4) => t4 * x2.scaleX, b2 = (t4) => t4 * x2.scaleY, v2 = (i4) => {
              let n3 = "x" === i4;
              return [i4, n3 ? m2 : f2, n3 ? t3 : e3].concat(r2 ? [n3 ? y2(t3) : b2(e3), n3 ? x2.left - s2 + y2(c2 + l2) : x2.top - s2 + b2(p2 + h2), 0, n3 ? m2 : f2] : [n3 ? t3 : e3, n3 ? c2 + l2 : p2 + h2, n3 ? l2 : h2, n3 ? l2 + o2.plotWidth : h2 + o2.plotHeight]);
            }, M2 = v2("y"), k2 = v2("x"), C2, w2 = !!i3.negative;
            !d2 && o2.hoverSeries?.yAxis?.reversed && (w2 = !w2);
            let A2 = !this.followPointer && S(i3.ttBelow, !d2 && !a2 === w2), T2 = function(t4, e4, i4, o3, n3, a3, l3) {
              let h3 = r2 ? "y" === t4 ? b2(s2) : y2(s2) : s2, d3 = (i4 - o3) / 2, c3 = o3 < n3 - s2, p3 = n3 + s2 + o3 < e4, f3 = n3 - h3 - i4 + d3, m3 = n3 + h3 - d3;
              if (A2 && p3) u2[t4] = m3;
              else if (!A2 && c3) u2[t4] = f3;
              else if (c3) u2[t4] = Math.min(l3 - o3, f3 - g2 < 0 ? f3 : f3 - g2);
              else {
                if (!p3) return false;
                u2[t4] = Math.max(a3, m3 + g2 + i4 > e4 ? m3 : m3 + g2);
              }
            }, P = function(t4, e4, i4, o3, r3) {
              if (r3 < s2 || r3 > e4 - s2) return false;
              r3 < i4 / 2 ? u2[t4] = 1 : r3 > e4 - o3 / 2 ? u2[t4] = e4 - o3 - 2 : u2[t4] = r3 - i4 / 2;
            }, O = function(t4) {
              [M2, k2] = [k2, M2], C2 = t4;
            }, L = () => {
              false !== T2.apply(0, M2) ? false !== P.apply(0, k2) || C2 || (O(true), L()) : C2 ? u2.x = u2.y = 0 : (O(true), L());
            };
            return (a2 && !d2 || this.len > 1) && O(), L(), u2;
          }
          hide(t3) {
            let e3 = this;
            r.clearTimeout(this.hideTimer), t3 = S(t3, this.options.hideDelay), this.isHidden || (this.hideTimer = A(function() {
              let i3 = e3.getLabel();
              e3.getLabel().animate({
                opacity: 0
              }, {
                duration: t3 ? 150 : t3,
                complete: () => {
                  i3.hide(), e3.container && e3.container.remove();
                }
              }), e3.isHidden = true;
            }, t3));
          }
          init(t3, e3) {
            this.chart = t3, this.options = e3, this.crosshairs = [], this.isHidden = true, this.split = e3.split && !t3.inverted && !t3.polar, this.shared = e3.shared || this.split, this.outside = S(e3.outside, !!(t3.scrollablePixelsX || t3.scrollablePixelsY));
          }
          shouldStickOnContact(t3) {
            return !!(!this.followPointer && this.options.stickOnContact && (!t3 || this.pointer.inClass(t3.target, "highcharts-tooltip")));
          }
          move(t3, e3, i3, s2) {
            let o2 = this, r2 = a(!o2.isHidden && o2.options.animation), n2 = o2.followPointer || (o2.len || 0) > 1, l2 = {
              x: t3,
              y: e3
            };
            n2 || (l2.anchorX = i3, l2.anchorY = s2), r2.step = () => o2.drawTracker(), o2.getLabel().animate(l2, r2);
          }
          refresh(t3, e3) {
            let {
              chart: i3,
              options: s2,
              pointer: o2,
              shared: n2
            } = this, a2 = w(t3), h2 = a2[0], d2 = [], c2 = s2.format, p2 = s2.formatter || this.defaultFormatter, u2 = i3.styledMode, g2 = {};
            if (!s2.enabled || !h2.series) return;
            r.clearTimeout(this.hideTimer), this.allowShared = !(!b(t3) && t3.series && t3.series.noSharedTooltip), this.followPointer = !this.split && h2.series.tooltipOptions.followPointer;
            let f2 = this.getAnchor(t3, e3), m2 = f2[0], x2 = f2[1];
            n2 && this.allowShared ? (o2.applyInactiveState(a2), a2.forEach(function(t4) {
              t4.setState("hover"), d2.push(t4.getLabelConfig());
            }), (g2 = h2.getLabelConfig()).points = d2) : g2 = h2.getLabelConfig(), this.len = d2.length;
            let v2 = M(c2) ? l(c2, g2, i3) : p2.call(g2, this), k2 = h2.series;
            if (this.distance = S(k2.tooltipOptions.distance, 16), false === v2) this.hide();
            else {
              if (this.split && this.allowShared) this.renderSplit(v2, a2);
              else {
                let t4 = m2, r2 = x2;
                if (e3 && o2.isDirectTouch && (t4 = e3.chartX - i3.plotLeft, r2 = e3.chartY - i3.plotTop), i3.polar || false === k2.options.clip || a2.some((e4) => o2.isDirectTouch || e4.series.shouldShowTooltip(t4, r2))) {
                  let t5 = this.getLabel();
                  (!s2.style.width || u2) && t5.css({
                    width: (this.outside ? this.getPlayingField() : i3.spacingBox).width + "px"
                  }), t5.attr({
                    class: this.getClassName(h2),
                    text: v2 && v2.join ? v2.join("") : v2
                  }), u2 || t5.attr({
                    stroke: s2.borderColor || h2.color || k2.color || "#666666"
                  }), this.updatePosition({
                    plotX: m2,
                    plotY: x2,
                    negative: h2.negative,
                    ttBelow: h2.ttBelow,
                    h: f2[2] || 0
                  });
                } else {
                  this.hide();
                  return;
                }
              }
              this.isHidden && this.label && this.label.attr({
                opacity: 1
              }).show(), this.isHidden = false;
            }
            y(this, "refresh");
          }
          renderSplit(t3, e3) {
            let i3 = this, {
              chart: s2,
              chart: {
                chartWidth: o2,
                chartHeight: r2,
                plotHeight: n2,
                plotLeft: a2,
                plotTop: l2,
                scrollablePixelsY: h2 = 0,
                scrollablePixelsX: u2,
                styledMode: f2
              },
              distance: m2,
              options: y2,
              options: {
                positioner: b2
              },
              pointer: v2
            } = i3, {
              scrollLeft: k2 = 0,
              scrollTop: C2 = 0
            } = s2.scrollablePlotArea?.scrollingContainer || {}, w2 = i3.outside && "number" != typeof u2 ? d.documentElement.getBoundingClientRect() : {
              left: k2,
              right: k2 + o2,
              top: C2,
              bottom: C2 + r2
            }, A2 = i3.getLabel(), T2 = this.renderer || s2.renderer, P = !!(s2.xAxis[0] && s2.xAxis[0].opposite), {
              left: O,
              top: L
            } = v2.getChartPosition(), E = l2 + C2, D = 0, B = n2 - h2;
            function I(t4, e4, s3, o3, r3 = true) {
              let n3, a3;
              return s3 ? (n3 = P ? 0 : B, a3 = g(t4 - o3 / 2, w2.left, w2.right - o3 - (i3.outside ? O : 0))) : (n3 = e4 - E, a3 = g(a3 = r3 ? t4 - o3 - m2 : t4 + m2, r3 ? a3 : w2.left, w2.right)), {
                x: a3,
                y: n3
              };
            }
            M(t3) && (t3 = [false, t3]);
            let j = t3.slice(0, e3.length + 1).reduce(function(t4, s3, o3) {
              if (false !== s3 && "" !== s3) {
                let r3 = e3[o3 - 1] || {
                  isHeader: true,
                  plotX: e3[0].plotX,
                  plotY: n2,
                  series: {}
                }, h3 = r3.isHeader, d2 = h3 ? i3 : r3.series, c2 = d2.tt = function(t5, e4, s4) {
                  let o4 = t5, {
                    isHeader: r4,
                    series: n3
                  } = e4;
                  if (!o4) {
                    let t6 = {
                      padding: y2.padding,
                      r: y2.borderRadius
                    };
                    f2 || (t6.fill = y2.backgroundColor, t6["stroke-width"] = y2.borderWidth ?? 1), o4 = T2.label("", 0, 0, y2[r4 ? "headerShape" : "shape"], void 0, void 0, y2.useHTML).addClass(i3.getClassName(e4, true, r4)).attr(t6).add(A2);
                  }
                  return o4.isActive = true, o4.attr({
                    text: s4
                  }), f2 || o4.css(y2.style).attr({
                    stroke: y2.borderColor || e4.color || n3.color || "#333333"
                  }), o4;
                }(d2.tt, r3, s3.toString()), p2 = c2.getBBox(), u3 = p2.width + c2.strokeWidth();
                h3 && (D = p2.height, B += D, P && (E -= D));
                let {
                  anchorX: x2,
                  anchorY: v3
                } = function(t5) {
                  let e4, i4;
                  let {
                    isHeader: s4,
                    plotX: o4 = 0,
                    plotY: r4 = 0,
                    series: h4
                  } = t5;
                  if (s4) e4 = Math.max(a2 + o4, a2), i4 = l2 + n2 / 2;
                  else {
                    let {
                      xAxis: t6,
                      yAxis: s5
                    } = h4;
                    e4 = t6.pos + g(o4, -m2, t6.len + m2), h4.shouldShowTooltip(0, s5.pos - l2 + r4, {
                      ignoreX: true
                    }) && (i4 = s5.pos + r4);
                  }
                  return {
                    anchorX: e4 = g(e4, w2.left - m2, w2.right + m2),
                    anchorY: i4
                  };
                }(r3);
                if ("number" == typeof v3) {
                  let e4 = p2.height + 1, s4 = b2 ? b2.call(i3, u3, e4, r3) : I(x2, v3, h3, u3);
                  t4.push({
                    align: b2 ? 0 : void 0,
                    anchorX: x2,
                    anchorY: v3,
                    boxWidth: u3,
                    point: r3,
                    rank: S(s4.rank, h3 ? 1 : 0),
                    size: e4,
                    target: s4.y,
                    tt: c2,
                    x: s4.x
                  });
                } else c2.isActive = false;
              }
              return t4;
            }, []);
            !b2 && j.some((t4) => {
              let {
                outside: e4
              } = i3, s3 = (e4 ? O : 0) + t4.anchorX;
              return s3 < w2.left && s3 + t4.boxWidth < w2.right || s3 < O - w2.left + t4.boxWidth && w2.right - s3 > s3;
            }) && (j = j.map((t4) => {
              let {
                x: e4,
                y: i4
              } = I(t4.anchorX, t4.anchorY, t4.point.isHeader, t4.boxWidth, false);
              return x(t4, {
                target: i4,
                x: e4
              });
            })), i3.cleanSplit(), p(j, B);
            let R = {
              left: O,
              right: O
            };
            j.forEach(function(t4) {
              let {
                x: e4,
                boxWidth: s3,
                isHeader: o3
              } = t4;
              !o3 && (i3.outside && O + e4 < R.left && (R.left = O + e4), !o3 && i3.outside && R.left + s3 > R.right && (R.right = O + e4));
            }), j.forEach(function(t4) {
              let {
                x: e4,
                anchorX: s3,
                anchorY: o3,
                pos: r3,
                point: {
                  isHeader: n3
                }
              } = t4, a3 = {
                visibility: void 0 === r3 ? "hidden" : "inherit",
                x: e4,
                y: (r3 || 0) + E,
                anchorX: s3,
                anchorY: o3
              };
              if (i3.outside && e4 < s3) {
                let t5 = O - R.left;
                t5 > 0 && (n3 || (a3.x = e4 + t5, a3.anchorX = s3 + t5), n3 && (a3.x = (R.right - R.left) / 2, a3.anchorX = s3 + t5));
              }
              t4.tt.attr(a3);
            });
            let {
              container: G,
              outside: z,
              renderer: N
            } = i3;
            if (z && G && N) {
              let {
                width: t4,
                height: e4,
                x: i4,
                y: s3
              } = A2.getBBox();
              N.setSize(t4 + i4, e4 + s3, false), G.style.left = R.left + "px", G.style.top = L + "px";
            }
            c && A2.attr({
              opacity: 1 === A2.opacity ? 0.999 : 1
            });
          }
          drawTracker() {
            if (!this.shouldStickOnContact()) {
              this.tracker && (this.tracker = this.tracker.destroy());
              return;
            }
            let t3 = this.chart, e3 = this.label, i3 = this.shared ? t3.hoverPoints : t3.hoverPoint;
            if (!e3 || !i3) return;
            let s2 = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            }, o2 = this.getAnchor(i3), r2 = e3.getBBox();
            o2[0] += t3.plotLeft - (e3.translateX || 0), o2[1] += t3.plotTop - (e3.translateY || 0), s2.x = Math.min(0, o2[0]), s2.y = Math.min(0, o2[1]), s2.width = o2[0] < 0 ? Math.max(Math.abs(o2[0]), r2.width - o2[0]) : Math.max(Math.abs(o2[0]), r2.width), s2.height = o2[1] < 0 ? Math.max(Math.abs(o2[1]), r2.height - Math.abs(o2[1])) : Math.max(Math.abs(o2[1]), r2.height), this.tracker ? this.tracker.attr(s2) : (this.tracker = e3.renderer.rect(s2).addClass("highcharts-tracker").add(e3), t3.styledMode || this.tracker.attr({
              fill: "rgba(0,0,0,0)"
            }));
          }
          styledModeFormat(t3) {
            return t3.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
          }
          tooltipFooterHeaderFormatter(t3, e3) {
            let i3 = t3.series, s2 = i3.tooltipOptions, o2 = i3.xAxis, r2 = o2 && o2.dateTime, n2 = {
              isFooter: e3,
              labelConfig: t3
            }, a2 = s2.xDateFormat, h2 = s2[e3 ? "footerFormat" : "headerFormat"];
            return y(this, "headerFormatter", n2, function(e4) {
              r2 && !a2 && v(t3.key) && (a2 = r2.getXDateFormat(t3.key, s2.dateTimeLabelFormats)), r2 && a2 && (t3.point && t3.point.tooltipDateKeys || ["key"]).forEach(function(t4) {
                h2 = h2.replace("{point." + t4 + "}", "{point." + t4 + ":" + a2 + "}");
              }), i3.chart.styledMode && (h2 = this.styledModeFormat(h2)), e4.text = l(h2, {
                point: t3,
                series: i3
              }, this.chart);
            }), n2.text;
          }
          update(t3) {
            this.destroy(), this.init(this.chart, k(true, this.options, t3));
          }
          updatePosition(t3) {
            let {
              chart: e3,
              container: i3,
              distance: s2,
              options: o2,
              pointer: r2,
              renderer: n2
            } = this, {
              height: a2 = 0,
              width: l2 = 0
            } = this.getLabel(), {
              left: h2,
              top: d2,
              scaleX: c2,
              scaleY: p2
            } = r2.getChartPosition(), u2 = (o2.positioner || this.getPosition).call(this, l2, a2, t3), g2 = (t3.plotX || 0) + e3.plotLeft, m2 = (t3.plotY || 0) + e3.plotTop, x2;
            n2 && i3 && (o2.positioner && (u2.x += h2 - s2, u2.y += d2 - s2), x2 = (o2.borderWidth || 0) + 2 * s2 + 2, n2.setSize(l2 + x2, a2 + x2, false), (1 !== c2 || 1 !== p2) && (f(i3, {
              transform: `scale(${c2}, ${p2})`
            }), g2 *= c2, m2 *= p2), g2 += h2 - u2.x, m2 += d2 - u2.y), this.move(Math.round(u2.x), Math.round(u2.y || 0), g2, m2);
          }
        }
        return (n = T || (T = {})).compose = function(t3) {
          C(h, "Core.Tooltip") && u(t3, "afterInit", function() {
            let t4 = this.chart;
            t4.options.tooltip && (t4.tooltip = new n(t4, t4.options.tooltip, this));
          });
        }, T;
      }), i(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let {
          animObject: r
        } = e2, {
          defaultOptions: n
        } = i2, {
          format: a
        } = s, {
          addEvent: l,
          crisp: h,
          erase: d,
          extend: c,
          fireEvent: p,
          getNestedProperty: u,
          isArray: g,
          isFunction: f,
          isNumber: m,
          isObject: x,
          merge: y,
          pick: b,
          syncTimeout: v,
          removeEvent: M,
          uniqueKey: k
        } = o;
        class S {
          animateBeforeDestroy() {
            let t3 = this, e3 = {
              x: t3.startXPos,
              opacity: 0
            }, i3 = t3.getGraphicalProps();
            i3.singular.forEach(function(i4) {
              t3[i4] = t3[i4].animate("dataLabel" === i4 ? {
                x: t3[i4].startXPos,
                y: t3[i4].startYPos,
                opacity: 0
              } : e3);
            }), i3.plural.forEach(function(e4) {
              t3[e4].forEach(function(e5) {
                e5.element && e5.animate(c({
                  x: t3.startXPos
                }, e5.startYPos ? {
                  x: e5.startXPos,
                  y: e5.startYPos
                } : {}));
              });
            });
          }
          applyOptions(t3, e3) {
            let i3 = this.series, s2 = i3.options.pointValKey || i3.pointValKey;
            return c(this, t3 = S.prototype.optionsToObject.call(this, t3)), this.options = this.options ? c(this.options, t3) : t3, t3.group && delete this.group, t3.dataLabels && delete this.dataLabels, s2 && (this.y = S.prototype.getNestedProperty.call(this, s2)), this.selected && (this.state = "select"), "name" in this && void 0 === e3 && i3.xAxis && i3.xAxis.hasNames && (this.x = i3.xAxis.nameToX(this)), void 0 === this.x && i3 ? this.x = e3 ?? i3.autoIncrement() : m(t3.x) && i3.options.relativeXValue && (this.x = i3.autoIncrement(t3.x)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
          }
          destroy() {
            if (!this.destroyed) {
              let t3 = this, e3 = t3.series, i3 = e3.chart, s2 = e3.options.dataSorting, o2 = i3.hoverPoints, n2 = r(t3.series.chart.renderer.globalAnimation), a2 = () => {
                for (let e4 in (t3.graphic || t3.graphics || t3.dataLabel || t3.dataLabels) && (M(t3), t3.destroyElements()), t3) delete t3[e4];
              };
              t3.legendItem && i3.legend.destroyItem(t3), o2 && (t3.setState(), d(o2, t3), o2.length || (i3.hoverPoints = null)), t3 === i3.hoverPoint && t3.onMouseOut(), s2 && s2.enabled ? (this.animateBeforeDestroy(), v(a2, n2.duration)) : a2(), i3.pointCount--;
            }
            this.destroyed = true;
          }
          destroyElements(t3) {
            let e3 = this, i3 = e3.getGraphicalProps(t3);
            i3.singular.forEach(function(t4) {
              e3[t4] = e3[t4].destroy();
            }), i3.plural.forEach(function(t4) {
              e3[t4].forEach(function(t5) {
                t5 && t5.element && t5.destroy();
              }), delete e3[t4];
            });
          }
          firePointEvent(t3, e3, i3) {
            let s2 = this, o2 = this.series.options;
            s2.manageEvent(t3), "click" === t3 && o2.allowPointSelect && (i3 = function(t4) {
              !s2.destroyed && s2.select && s2.select(null, t4.ctrlKey || t4.metaKey || t4.shiftKey);
            }), p(s2, t3, e3, i3);
          }
          getClassName() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          }
          getGraphicalProps(t3) {
            let e3, i3;
            let s2 = this, o2 = [], r2 = {
              singular: [],
              plural: []
            };
            for ((t3 = t3 || {
              graphic: 1,
              dataLabel: 1
            }).graphic && o2.push("graphic", "connector"), t3.dataLabel && o2.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i3 = o2.length; i3--; ) s2[e3 = o2[i3]] && r2.singular.push(e3);
            return ["graphic", "dataLabel"].forEach(function(e4) {
              let i4 = e4 + "s";
              t3[e4] && s2[i4] && r2.plural.push(i4);
            }), r2;
          }
          getLabelConfig() {
            return {
              x: this.category,
              y: this.y,
              color: this.color,
              colorIndex: this.colorIndex,
              key: this.name || this.category,
              series: this.series,
              point: this,
              percentage: this.percentage,
              total: this.total || this.stackTotal
            };
          }
          getNestedProperty(t3) {
            return t3 ? 0 === t3.indexOf("custom.") ? u(t3, this.options) : this[t3] : void 0;
          }
          getZone() {
            let t3 = this.series, e3 = t3.zones, i3 = t3.zoneAxis || "y", s2, o2 = 0;
            for (s2 = e3[0]; this[i3] >= s2.value; ) s2 = e3[++o2];
            return this.nonZonedColor || (this.nonZonedColor = this.color), s2 && s2.color && !this.options.color ? this.color = s2.color : this.color = this.nonZonedColor, s2;
          }
          hasNewShapeType() {
            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
          }
          constructor(t3, e3, i3) {
            this.formatPrefix = "point", this.visible = true, this.series = t3, this.applyOptions(e3, i3), this.id ?? (this.id = k()), this.resolveColor(), t3.chart.pointCount++, p(this, "afterInit");
          }
          isValid() {
            return (m(this.x) || this.x instanceof Date) && m(this.y);
          }
          optionsToObject(t3) {
            let e3 = this.series, i3 = e3.options.keys, s2 = i3 || e3.pointArrayMap || ["y"], o2 = s2.length, r2 = {}, n2, a2 = 0, l2 = 0;
            if (m(t3) || null === t3) r2[s2[0]] = t3;
            else if (g(t3)) for (!i3 && t3.length > o2 && ("string" == (n2 = typeof t3[0]) ? r2.name = t3[0] : "number" === n2 && (r2.x = t3[0]), a2++); l2 < o2; ) i3 && void 0 === t3[a2] || (s2[l2].indexOf(".") > 0 ? S.prototype.setNestedProperty(r2, t3[a2], s2[l2]) : r2[s2[l2]] = t3[a2]), a2++, l2++;
            else "object" == typeof t3 && (r2 = t3, t3.dataLabels && (e3.hasDataLabels = () => true), t3.marker && (e3._hasPointMarkers = true));
            return r2;
          }
          pos(t3, e3 = this.plotY) {
            if (!this.destroyed) {
              let {
                plotX: i3,
                series: s2
              } = this, {
                chart: o2,
                xAxis: r2,
                yAxis: n2
              } = s2, a2 = 0, l2 = 0;
              if (m(i3) && m(e3)) return t3 && (a2 = r2 ? r2.pos : o2.plotLeft, l2 = n2 ? n2.pos : o2.plotTop), o2.inverted && r2 && n2 ? [n2.len - e3 + l2, r2.len - i3 + a2] : [i3 + a2, e3 + l2];
            }
          }
          resolveColor() {
            let t3 = this.series, e3 = t3.chart.options.chart, i3 = t3.chart.styledMode, s2, o2, r2 = e3.colorCount, n2;
            delete this.nonZonedColor, t3.options.colorByPoint ? (i3 || (s2 = (o2 = t3.options.colors || t3.chart.options.colors)[t3.colorCounter], r2 = o2.length), n2 = t3.colorCounter, t3.colorCounter++, t3.colorCounter === r2 && (t3.colorCounter = 0)) : (i3 || (s2 = t3.color), n2 = t3.colorIndex), this.colorIndex = b(this.options.colorIndex, n2), this.color = b(this.options.color, s2);
          }
          setNestedProperty(t3, e3, i3) {
            return i3.split(".").reduce(function(t4, i4, s2, o2) {
              let r2 = o2.length - 1 === s2;
              return t4[i4] = r2 ? e3 : x(t4[i4], true) ? t4[i4] : {}, t4[i4];
            }, t3), t3;
          }
          shouldDraw() {
            return !this.isNull;
          }
          tooltipFormatter(t3) {
            let e3 = this.series, i3 = e3.tooltipOptions, s2 = b(i3.valueDecimals, ""), o2 = i3.valuePrefix || "", r2 = i3.valueSuffix || "";
            return e3.chart.styledMode && (t3 = e3.chart.tooltip.styledModeFormat(t3)), (e3.pointArrayMap || ["y"]).forEach(function(e4) {
              e4 = "{point." + e4, (o2 || r2) && (t3 = t3.replace(RegExp(e4 + "}", "g"), o2 + e4 + "}" + r2)), t3 = t3.replace(RegExp(e4 + "}", "g"), e4 + ":,." + s2 + "f}");
            }), a(t3, {
              point: this,
              series: this.series
            }, e3.chart);
          }
          update(t3, e3, i3, s2) {
            let o2;
            let r2 = this, n2 = r2.series, a2 = r2.graphic, l2 = n2.chart, h2 = n2.options;
            function d2() {
              r2.applyOptions(t3);
              let s3 = a2 && r2.hasMockGraphic, d3 = null === r2.y ? !s3 : s3;
              a2 && d3 && (r2.graphic = a2.destroy(), delete r2.hasMockGraphic), x(t3, true) && (a2 && a2.element && t3 && t3.marker && void 0 !== t3.marker.symbol && (r2.graphic = a2.destroy()), t3?.dataLabels && r2.dataLabel && (r2.dataLabel = r2.dataLabel.destroy())), o2 = r2.index, n2.updateParallelArrays(r2, o2), h2.data[o2] = x(h2.data[o2], true) || x(t3, true) ? r2.options : b(t3, h2.data[o2]), n2.isDirty = n2.isDirtyData = true, !n2.fixedBox && n2.hasCartesianSeries && (l2.isDirtyBox = true), "point" === h2.legendType && (l2.isDirtyLegend = true), e3 && l2.redraw(i3);
            }
            e3 = b(e3, true), false === s2 ? d2() : r2.firePointEvent("update", {
              options: t3
            }, d2);
          }
          remove(t3, e3) {
            this.series.removePoint(this.series.data.indexOf(this), t3, e3);
          }
          select(t3, e3) {
            let i3 = this, s2 = i3.series, o2 = s2.chart;
            t3 = b(t3, !i3.selected), this.selectedStaging = t3, i3.firePointEvent(t3 ? "select" : "unselect", {
              accumulate: e3
            }, function() {
              i3.selected = i3.options.selected = t3, s2.options.data[s2.data.indexOf(i3)] = i3.options, i3.setState(t3 && "select"), e3 || o2.getSelectedPoints().forEach(function(t4) {
                let e4 = t4.series;
                t4.selected && t4 !== i3 && (t4.selected = t4.options.selected = false, e4.options.data[e4.data.indexOf(t4)] = t4.options, t4.setState(o2.hoverPoints && e4.options.inactiveOtherPoints ? "inactive" : ""), t4.firePointEvent("unselect"));
              });
            }), delete this.selectedStaging;
          }
          onMouseOver(t3) {
            let {
              inverted: e3,
              pointer: i3
            } = this.series.chart;
            i3 && (t3 = t3 ? i3.normalize(t3) : i3.getChartCoordinatesFromPoint(this, e3), i3.runPointActions(t3, this));
          }
          onMouseOut() {
            let t3 = this.series.chart;
            this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t3.hoverPoints || []).forEach(function(t4) {
              t4.setState();
            }), t3.hoverPoints = t3.hoverPoint = null;
          }
          manageEvent(t3) {
            let e3 = y(this.series.options.point, this.options), i3 = e3.events?.[t3];
            f(i3) && (!this.hcEvents?.[t3] || this.hcEvents?.[t3]?.map((t4) => t4.fn).indexOf(i3) === -1) ? (this.importedUserEvent?.(), this.importedUserEvent = l(this, t3, i3)) : this.importedUserEvent && !i3 && this.hcEvents?.[t3] && (M(this, t3), delete this.hcEvents[t3], Object.keys(this.hcEvents) || delete this.importedUserEvent);
          }
          setState(e3, i3) {
            let s2 = this.series, o2 = this.state, r2 = s2.options.states[e3 || "normal"] || {}, a2 = n.plotOptions[s2.type].marker && s2.options.marker, l2 = a2 && false === a2.enabled, h2 = a2 && a2.states && a2.states[e3 || "normal"] || {}, d2 = false === h2.enabled, u2 = this.marker || {}, g2 = s2.chart, f2 = a2 && s2.markerAttribs, x2 = s2.halo, y2, v2, M2, k2 = s2.stateMarkerGraphic, S2;
            if ((e3 = e3 || "") === this.state && !i3 || this.selected && "select" !== e3 || false === r2.enabled || e3 && (d2 || l2 && false === h2.enabled) || e3 && u2.states && u2.states[e3] && false === u2.states[e3].enabled) return;
            if (this.state = e3, f2 && (y2 = s2.markerAttribs(this, e3)), this.graphic && !this.hasMockGraphic) {
              if (o2 && this.graphic.removeClass("highcharts-point-" + o2), e3 && this.graphic.addClass("highcharts-point-" + e3), !g2.styledMode) {
                v2 = s2.pointAttribs(this, e3), M2 = b(g2.options.chart.animation, r2.animation);
                let t3 = v2.opacity;
                s2.options.inactiveOtherPoints && m(t3) && (this.dataLabels || []).forEach(function(e4) {
                  e4 && !e4.hasClass("highcharts-data-label-hidden") && (e4.animate({
                    opacity: t3
                  }, M2), e4.connector && e4.connector.animate({
                    opacity: t3
                  }, M2));
                }), this.graphic.animate(v2, M2);
              }
              y2 && this.graphic.animate(y2, b(g2.options.chart.animation, h2.animation, a2.animation)), k2 && k2.hide();
            } else e3 && h2 && (S2 = u2.symbol || s2.symbol, k2 && k2.currentSymbol !== S2 && (k2 = k2.destroy()), y2 && (k2 ? k2[i3 ? "animate" : "attr"]({
              x: y2.x,
              y: y2.y
            }) : S2 && (s2.stateMarkerGraphic = k2 = g2.renderer.symbol(S2, y2.x, y2.y, y2.width, y2.height).add(s2.markerGroup), k2.currentSymbol = S2)), !g2.styledMode && k2 && "inactive" !== this.state && k2.attr(s2.pointAttribs(this, e3))), k2 && (k2[e3 && this.isInside ? "show" : "hide"](), k2.element.point = this, k2.addClass(this.getClassName(), true));
            let C = r2.halo, w = this.graphic || k2, A = w && w.visibility || "inherit";
            C && C.size && w && "hidden" !== A && !this.isCluster ? (x2 || (s2.halo = x2 = g2.renderer.path().add(w.parentGroup)), x2.show()[i3 ? "animate" : "attr"]({
              d: this.haloPath(C.size)
            }), x2.attr({
              class: "highcharts-halo highcharts-color-" + b(this.colorIndex, s2.colorIndex) + (this.className ? " " + this.className : ""),
              visibility: A,
              zIndex: -1
            }), x2.point = this, g2.styledMode || x2.attr(c({
              fill: this.color || s2.color,
              "fill-opacity": C.opacity
            }, t2.filterUserAttributes(C.attributes || {})))) : x2?.point?.haloPath && !x2.point.destroyed && x2.animate({
              d: x2.point.haloPath(0)
            }, null, x2.hide), p(this, "afterSetState", {
              state: e3
            });
          }
          haloPath(t3) {
            let e3 = this.pos();
            return e3 ? this.series.chart.renderer.symbols.circle(h(e3[0], 1) - t3, e3[1] - t3, 2 * t3, 2 * t3) : [];
          }
        }
        return S;
      }), i(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let {
          parse: o
        } = t2, {
          charts: r,
          composed: n,
          isTouchDevice: a
        } = e2, {
          addEvent: l,
          attr: h,
          css: d,
          extend: c,
          find: p,
          fireEvent: u,
          isNumber: g,
          isObject: f,
          objectEach: m,
          offset: x,
          pick: y,
          pushUnique: b,
          splat: v
        } = i2;
        class M {
          applyInactiveState(t3) {
            let e3 = [], i3;
            (t3 || []).forEach(function(t4) {
              i3 = t4.series, e3.push(i3), i3.linkedParent && e3.push(i3.linkedParent), i3.linkedSeries && (e3 = e3.concat(i3.linkedSeries)), i3.navigatorSeries && e3.push(i3.navigatorSeries);
            }), this.chart.series.forEach(function(t4) {
              -1 === e3.indexOf(t4) ? t4.setState("inactive", true) : t4.options.inactiveOtherPoints && t4.setAllPointsToState("inactive");
            });
          }
          destroy() {
            let t3 = this;
            this.eventsToUnbind.forEach((t4) => t4()), this.eventsToUnbind = [], !e2.chartCount && (M.unbindDocumentMouseUp && (M.unbindDocumentMouseUp = M.unbindDocumentMouseUp()), M.unbindDocumentTouchEnd && (M.unbindDocumentTouchEnd = M.unbindDocumentTouchEnd())), clearInterval(t3.tooltipTimeout), m(t3, function(e3, i3) {
              t3[i3] = void 0;
            });
          }
          getSelectionMarkerAttrs(t3, e3) {
            let i3 = {
              args: {
                chartX: t3,
                chartY: e3
              },
              attrs: {},
              shapeType: "rect"
            };
            return u(this, "getSelectionMarkerAttrs", i3, (i4) => {
              let s2;
              let {
                chart: o2,
                zoomHor: r2,
                zoomVert: n2
              } = this, {
                mouseDownX: a2 = 0,
                mouseDownY: l2 = 0
              } = o2, h2 = i4.attrs;
              h2.x = o2.plotLeft, h2.y = o2.plotTop, h2.width = r2 ? 1 : o2.plotWidth, h2.height = n2 ? 1 : o2.plotHeight, r2 && (s2 = t3 - a2, h2.width = Math.max(1, Math.abs(s2)), h2.x = (s2 > 0 ? 0 : s2) + a2), n2 && (s2 = e3 - l2, h2.height = Math.max(1, Math.abs(s2)), h2.y = (s2 > 0 ? 0 : s2) + l2);
            }), i3;
          }
          drag(t3) {
            let {
              chart: e3
            } = this, {
              mouseDownX: i3 = 0,
              mouseDownY: s2 = 0
            } = e3, {
              panning: r2,
              panKey: n2,
              selectionMarkerFill: a2
            } = e3.options.chart, l2 = e3.plotLeft, h2 = e3.plotTop, d2 = e3.plotWidth, c2 = e3.plotHeight, p2 = f(r2) ? r2.enabled : r2, u2 = n2 && t3[`${n2}Key`], g2 = t3.chartX, m2 = t3.chartY, x2, y2 = this.selectionMarker;
            if ((!y2 || !y2.touch) && (g2 < l2 ? g2 = l2 : g2 > l2 + d2 && (g2 = l2 + d2), m2 < h2 ? m2 = h2 : m2 > h2 + c2 && (m2 = h2 + c2), this.hasDragged = Math.sqrt(Math.pow(i3 - g2, 2) + Math.pow(s2 - m2, 2)), this.hasDragged > 10)) {
              x2 = e3.isInsidePlot(i3 - l2, s2 - h2, {
                visiblePlotOnly: true
              });
              let {
                shapeType: n3,
                attrs: d3
              } = this.getSelectionMarkerAttrs(g2, m2);
              (e3.hasCartesianSeries || e3.mapView) && this.hasZoom && x2 && !u2 && !y2 && (this.selectionMarker = y2 = e3.renderer[n3](), y2.attr({
                class: "highcharts-selection-marker",
                zIndex: 7
              }).add(), e3.styledMode || y2.attr({
                fill: a2 || o("#334eff").setOpacity(0.25).get()
              })), y2 && y2.attr(d3), x2 && !y2 && p2 && e3.pan(t3, r2);
            }
          }
          dragStart(t3) {
            let e3 = this.chart;
            e3.mouseIsDown = t3.type, e3.cancelClick = false, e3.mouseDownX = t3.chartX, e3.mouseDownY = t3.chartY;
          }
          getSelectionBox(t3) {
            let e3 = {
              args: {
                marker: t3
              },
              result: t3.getBBox()
            };
            return u(this, "getSelectionBox", e3), e3.result;
          }
          drop(t3) {
            let e3;
            let {
              chart: i3,
              selectionMarker: s2
            } = this;
            for (let t4 of i3.axes) t4.isPanning && (t4.isPanning = false, (t4.options.startOnTick || t4.options.endOnTick || t4.series.some((t5) => t5.boosted)) && (t4.forceRedraw = true, t4.setExtremes(t4.userMin, t4.userMax, false), e3 = true));
            if (e3 && i3.redraw(), s2 && t3) {
              if (this.hasDragged) {
                let e4 = this.getSelectionBox(s2);
                i3.transform({
                  axes: i3.axes.filter((t4) => t4.zoomEnabled && ("xAxis" === t4.coll && this.zoomX || "yAxis" === t4.coll && this.zoomY)),
                  selection: __spreadValues({
                    originalEvent: t3,
                    xAxis: [],
                    yAxis: []
                  }, e4),
                  from: e4
                });
              }
              g(i3.index) && (this.selectionMarker = s2.destroy());
            }
            i3 && g(i3.index) && (d(i3.container, {
              cursor: i3._cursor
            }), i3.cancelClick = this.hasDragged > 10, i3.mouseIsDown = false, this.hasDragged = 0, this.pinchDown = []);
          }
          findNearestKDPoint(t3, e3, i3) {
            let s2;
            return t3.forEach(function(t4) {
              let o2 = !(t4.noSharedTooltip && e3) && 0 > t4.options.findNearestPointBy.indexOf("y"), r2 = t4.searchPoint(i3, o2);
              f(r2, true) && r2.series && (!f(s2, true) || function(t5, i4) {
                let s3 = t5.distX - i4.distX, o3 = t5.dist - i4.dist, r3 = i4.series.group?.zIndex - t5.series.group?.zIndex;
                return 0 !== s3 && e3 ? s3 : 0 !== o3 ? o3 : 0 !== r3 ? r3 : t5.series.index > i4.series.index ? -1 : 1;
              }(s2, r2) > 0) && (s2 = r2);
            }), s2;
          }
          getChartCoordinatesFromPoint(t3, e3) {
            let {
              xAxis: i3,
              yAxis: s2
            } = t3.series, o2 = t3.shapeArgs;
            if (i3 && s2) {
              let r2 = t3.clientX ?? t3.plotX ?? 0, n2 = t3.plotY || 0;
              return t3.isNode && o2 && g(o2.x) && g(o2.y) && (r2 = o2.x, n2 = o2.y), e3 ? {
                chartX: s2.len + s2.pos - n2,
                chartY: i3.len + i3.pos - r2
              } : {
                chartX: r2 + i3.pos,
                chartY: n2 + s2.pos
              };
            }
            if (o2 && o2.x && o2.y) return {
              chartX: o2.x,
              chartY: o2.y
            };
          }
          getChartPosition() {
            if (this.chartPosition) return this.chartPosition;
            let {
              container: t3
            } = this.chart, e3 = x(t3);
            this.chartPosition = {
              left: e3.left,
              top: e3.top,
              scaleX: 1,
              scaleY: 1
            };
            let {
              offsetHeight: i3,
              offsetWidth: s2
            } = t3;
            return s2 > 2 && i3 > 2 && (this.chartPosition.scaleX = e3.width / s2, this.chartPosition.scaleY = e3.height / i3), this.chartPosition;
          }
          getCoordinates(t3) {
            let e3 = {
              xAxis: [],
              yAxis: []
            };
            for (let i3 of this.chart.axes) e3[i3.isXAxis ? "xAxis" : "yAxis"].push({
              axis: i3,
              value: i3.toValue(t3[i3.horiz ? "chartX" : "chartY"])
            });
            return e3;
          }
          getHoverData(t3, e3, i3, s2, o2, r2) {
            let n2 = [], a2 = function(t4) {
              return t4.visible && !(!o2 && t4.directTouch) && y(t4.options.enableMouseTracking, true);
            }, l2 = e3, h2, d2 = {
              chartX: r2 ? r2.chartX : void 0,
              chartY: r2 ? r2.chartY : void 0,
              shared: o2
            };
            u(this, "beforeGetHoverData", d2), h2 = l2 && !l2.stickyTracking ? [l2] : i3.filter((t4) => t4.stickyTracking && (d2.filter || a2)(t4));
            let c2 = s2 && t3 || !r2 ? t3 : this.findNearestKDPoint(h2, o2, r2);
            return l2 = c2 && c2.series, c2 && (o2 && !l2.noSharedTooltip ? (h2 = i3.filter(function(t4) {
              return d2.filter ? d2.filter(t4) : a2(t4) && !t4.noSharedTooltip;
            })).forEach(function(t4) {
              let e4 = p(t4.points, function(t5) {
                return t5.x === c2.x && !t5.isNull;
              });
              f(e4) && (t4.boosted && t4.boost && (e4 = t4.boost.getPoint(e4)), n2.push(e4));
            }) : n2.push(c2)), u(this, "afterGetHoverData", d2 = {
              hoverPoint: c2
            }), {
              hoverPoint: d2.hoverPoint,
              hoverSeries: l2,
              hoverPoints: n2
            };
          }
          getPointFromEvent(t3) {
            let e3 = t3.target, i3;
            for (; e3 && !i3; ) i3 = e3.point, e3 = e3.parentNode;
            return i3;
          }
          onTrackerMouseOut(t3) {
            let e3 = this.chart, i3 = t3.relatedTarget, s2 = e3.hoverSeries;
            this.isDirectTouch = false, !s2 || !i3 || s2.stickyTracking || this.inClass(i3, "highcharts-tooltip") || this.inClass(i3, "highcharts-series-" + s2.index) && this.inClass(i3, "highcharts-tracker") || s2.onMouseOut();
          }
          inClass(t3, e3) {
            let i3 = t3, s2;
            for (; i3; ) {
              if (s2 = h(i3, "class")) {
                if (-1 !== s2.indexOf(e3)) return true;
                if (-1 !== s2.indexOf("highcharts-container")) return false;
              }
              i3 = i3.parentElement;
            }
          }
          constructor(t3, e3) {
            this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e3, this.chart = t3, this.runChartClick = !!e3.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), u(this, "afterInit");
          }
          normalize(t3, e3) {
            let i3 = t3.touches, s2 = i3 ? i3.length ? i3.item(0) : y(i3.changedTouches, t3.changedTouches)[0] : t3;
            e3 || (e3 = this.getChartPosition());
            let o2 = s2.pageX - e3.left, r2 = s2.pageY - e3.top;
            return c(t3, {
              chartX: Math.round(o2 /= e3.scaleX),
              chartY: Math.round(r2 /= e3.scaleY)
            });
          }
          onContainerClick(t3) {
            let e3 = this.chart, i3 = e3.hoverPoint, s2 = this.normalize(t3), o2 = e3.plotLeft, r2 = e3.plotTop;
            !e3.cancelClick && (i3 && this.inClass(s2.target, "highcharts-tracker") ? (u(i3.series, "click", c(s2, {
              point: i3
            })), e3.hoverPoint && i3.firePointEvent("click", s2)) : (c(s2, this.getCoordinates(s2)), e3.isInsidePlot(s2.chartX - o2, s2.chartY - r2, {
              visiblePlotOnly: true
            }) && u(e3, "click", s2)));
          }
          onContainerMouseDown(t3) {
            let i3 = (1 & (t3.buttons || t3.button)) == 1;
            t3 = this.normalize(t3), e2.isFirefox && 0 !== t3.button && this.onContainerMouseMove(t3), (void 0 === t3.button || i3) && (this.zoomOption(t3), i3 && t3.preventDefault?.(), this.dragStart(t3));
          }
          onContainerMouseLeave(t3) {
            let {
              pointer: e3
            } = r[y(M.hoverChartIndex, -1)] || {};
            t3 = this.normalize(t3), this.onContainerMouseMove(t3), e3 && !this.inClass(t3.relatedTarget, "highcharts-tooltip") && (e3.reset(), e3.chartPosition = void 0);
          }
          onContainerMouseEnter() {
            delete this.chartPosition;
          }
          onContainerMouseMove(t3) {
            let e3 = this.chart, i3 = e3.tooltip, s2 = this.normalize(t3);
            this.setHoverChartIndex(t3), ("mousedown" === e3.mouseIsDown || this.touchSelect(s2)) && this.drag(s2), !e3.openMenu && (this.inClass(s2.target, "highcharts-tracker") || e3.isInsidePlot(s2.chartX - e3.plotLeft, s2.chartY - e3.plotTop, {
              visiblePlotOnly: true
            })) && !(i3 && i3.shouldStickOnContact(s2)) && (this.inClass(s2.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(s2));
          }
          onDocumentTouchEnd(t3) {
            this.onDocumentMouseUp(t3);
          }
          onContainerTouchMove(t3) {
            this.touchSelect(t3) ? this.onContainerMouseMove(t3) : this.touch(t3);
          }
          onContainerTouchStart(t3) {
            this.touchSelect(t3) ? this.onContainerMouseDown(t3) : (this.zoomOption(t3), this.touch(t3, true));
          }
          onDocumentMouseMove(t3) {
            let e3 = this.chart, i3 = e3.tooltip, s2 = this.chartPosition, o2 = this.normalize(t3, s2);
            !s2 || e3.isInsidePlot(o2.chartX - e3.plotLeft, o2.chartY - e3.plotTop, {
              visiblePlotOnly: true
            }) || i3 && i3.shouldStickOnContact(o2) || o2.target !== e3.container.ownerDocument && this.inClass(o2.target, "highcharts-tracker") || this.reset();
          }
          onDocumentMouseUp(t3) {
            r[y(M.hoverChartIndex, -1)]?.pointer?.drop(t3);
          }
          pinch(t3) {
            let e3 = this, {
              chart: i3,
              hasZoom: s2,
              lastTouches: o2
            } = e3, r2 = [].map.call(t3.touches || [], (t4) => e3.normalize(t4)), n2 = r2.length, a2 = 1 === n2 && (e3.inClass(t3.target, "highcharts-tracker") && i3.runTrackerClick || e3.runChartClick), l2 = i3.tooltip, h2 = 1 === n2 && y(l2?.options.followTouchMove, true);
            n2 > 1 ? e3.initiated = true : h2 && (e3.initiated = false), s2 && e3.initiated && !a2 && false !== t3.cancelable && t3.preventDefault(), "touchstart" === t3.type ? (e3.pinchDown = r2, e3.res = true, i3.mouseDownX = t3.chartX) : h2 ? this.runPointActions(e3.normalize(t3)) : o2 && (u(i3, "touchpan", {
              originalEvent: t3,
              touches: r2
            }, () => {
              let e4 = (t4) => {
                let e5 = t4[0], i4 = t4[1] || e5;
                return {
                  x: e5.chartX,
                  y: e5.chartY,
                  width: i4.chartX - e5.chartX,
                  height: i4.chartY - e5.chartY
                };
              };
              i3.transform({
                axes: i3.axes.filter((t4) => t4.zoomEnabled && (this.zoomHor && t4.horiz || this.zoomVert && !t4.horiz)),
                to: e4(r2),
                from: e4(o2),
                trigger: t3.type
              });
            }), e3.res && (e3.res = false, this.reset(false, 0))), e3.lastTouches = r2;
          }
          reset(t3, e3) {
            let i3 = this.chart, s2 = i3.hoverSeries, o2 = i3.hoverPoint, r2 = i3.hoverPoints, n2 = i3.tooltip, a2 = n2 && n2.shared ? r2 : o2;
            t3 && a2 && v(a2).forEach(function(e4) {
              e4.series.isCartesian && void 0 === e4.plotX && (t3 = false);
            }), t3 ? n2 && a2 && v(a2).length && (n2.refresh(a2), n2.shared && r2 ? r2.forEach(function(t4) {
              t4.setState(t4.state, true), t4.series.isCartesian && (t4.series.xAxis.crosshair && t4.series.xAxis.drawCrosshair(null, t4), t4.series.yAxis.crosshair && t4.series.yAxis.drawCrosshair(null, t4));
            }) : o2 && (o2.setState(o2.state, true), i3.axes.forEach(function(t4) {
              t4.crosshair && o2.series[t4.coll] === t4 && t4.drawCrosshair(null, o2);
            }))) : (o2 && o2.onMouseOut(), r2 && r2.forEach(function(t4) {
              t4.setState();
            }), s2 && s2.onMouseOut(), n2 && n2.hide(e3), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i3.axes.forEach(function(t4) {
              t4.hideCrosshair();
            }), i3.hoverPoints = i3.hoverPoint = void 0);
          }
          runPointActions(t3, e3, i3) {
            let s2 = this.chart, o2 = s2.series, n2 = s2.tooltip && s2.tooltip.options.enabled ? s2.tooltip : void 0, a2 = !!n2 && n2.shared, h2 = e3 || s2.hoverPoint, d2 = h2 && h2.series || s2.hoverSeries, c2 = (!t3 || "touchmove" !== t3.type) && (!!e3 || d2 && d2.directTouch && this.isDirectTouch), u2 = this.getHoverData(h2, d2, o2, c2, a2, t3);
            h2 = u2.hoverPoint, d2 = u2.hoverSeries;
            let g2 = u2.hoverPoints, f2 = d2 && d2.tooltipOptions.followPointer && !d2.tooltipOptions.split, m2 = a2 && d2 && !d2.noSharedTooltip;
            if (h2 && (i3 || h2 !== s2.hoverPoint || n2 && n2.isHidden)) {
              if ((s2.hoverPoints || []).forEach(function(t4) {
                -1 === g2.indexOf(t4) && t4.setState();
              }), s2.hoverSeries !== d2 && d2.onMouseOver(), this.applyInactiveState(g2), (g2 || []).forEach(function(t4) {
                t4.setState("hover");
              }), s2.hoverPoint && s2.hoverPoint.firePointEvent("mouseOut"), !h2.series) return;
              s2.hoverPoints = g2, s2.hoverPoint = h2, h2.firePointEvent("mouseOver", void 0, () => {
                n2 && h2 && n2.refresh(m2 ? g2 : h2, t3);
              });
            } else if (f2 && n2 && !n2.isHidden) {
              let e4 = n2.getAnchor([{}], t3);
              s2.isInsidePlot(e4[0], e4[1], {
                visiblePlotOnly: true
              }) && n2.updatePosition({
                plotX: e4[0],
                plotY: e4[1]
              });
            }
            this.unDocMouseMove || (this.unDocMouseMove = l(s2.container.ownerDocument, "mousemove", (t4) => r[M.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(t4)), this.eventsToUnbind.push(this.unDocMouseMove)), s2.axes.forEach(function(e4) {
              let i4;
              let o3 = y((e4.crosshair || {}).snap, true);
              !o3 || (i4 = s2.hoverPoint) && i4.series[e4.coll] === e4 || (i4 = p(g2, (t4) => t4.series && t4.series[e4.coll] === e4)), i4 || !o3 ? e4.drawCrosshair(t3, i4) : e4.hideCrosshair();
            });
          }
          setDOMEvents() {
            let t3 = this.chart.container, e3 = t3.ownerDocument;
            t3.onmousedown = this.onContainerMouseDown.bind(this), t3.onmousemove = this.onContainerMouseMove.bind(this), t3.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(l(t3, "mouseenter", this.onContainerMouseEnter.bind(this)), l(t3, "mouseleave", this.onContainerMouseLeave.bind(this))), M.unbindDocumentMouseUp || (M.unbindDocumentMouseUp = l(e3, "mouseup", this.onDocumentMouseUp.bind(this)));
            let i3 = this.chart.renderTo.parentElement;
            for (; i3 && "BODY" !== i3.tagName; ) this.eventsToUnbind.push(l(i3, "scroll", () => {
              delete this.chartPosition;
            })), i3 = i3.parentElement;
            this.eventsToUnbind.push(l(t3, "touchstart", this.onContainerTouchStart.bind(this), {
              passive: false
            }), l(t3, "touchmove", this.onContainerTouchMove.bind(this), {
              passive: false
            })), M.unbindDocumentTouchEnd || (M.unbindDocumentTouchEnd = l(e3, "touchend", this.onDocumentTouchEnd.bind(this), {
              passive: false
            })), this.setPointerCapture(), l(this.chart, "redraw", this.setPointerCapture.bind(this));
          }
          setPointerCapture() {
            if (!a) return;
            let t3 = this.pointerCaptureEventsToUnbind, e3 = this.chart, i3 = e3.container, s2 = y(e3.options.tooltip?.followTouchMove, true) && e3.series.some((t4) => t4.options.findNearestPointBy.indexOf("y") > -1);
            !this.hasPointerCapture && s2 ? (t3.push(l(i3, "pointerdown", (t4) => {
              t4.target?.hasPointerCapture(t4.pointerId) && t4.target?.releasePointerCapture(t4.pointerId);
            }), l(i3, "pointermove", (t4) => {
              e3.pointer?.getPointFromEvent(t4)?.onMouseOver(t4);
            })), e3.styledMode || d(i3, {
              "touch-action": "none"
            }), i3.className += " highcharts-no-touch-action", this.hasPointerCapture = true) : this.hasPointerCapture && !s2 && (t3.forEach((t4) => t4()), t3.length = 0, e3.styledMode || d(i3, {
              "touch-action": y(e3.options.chart.style?.["touch-action"], "manipulation")
            }), i3.className = i3.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = false);
          }
          setHoverChartIndex(t3) {
            let i3 = this.chart, s2 = e2.charts[y(M.hoverChartIndex, -1)];
            if (s2 && s2 !== i3) {
              let e3 = {
                relatedTarget: i3.container
              };
              t3 && !t3?.relatedTarget && (t3 = __spreadValues(__spreadValues({}, e3), t3)), s2.pointer?.onContainerMouseLeave(t3 || e3);
            }
            s2 && s2.mouseIsDown || (M.hoverChartIndex = i3.index);
          }
          touch(t3, e3) {
            let i3;
            let {
              chart: s2,
              pinchDown: o2 = []
            } = this;
            this.setHoverChartIndex(), 1 === (t3 = this.normalize(t3)).touches.length ? s2.isInsidePlot(t3.chartX - s2.plotLeft, t3.chartY - s2.plotTop, {
              visiblePlotOnly: true
            }) && !s2.openMenu ? (e3 && this.runPointActions(t3), "touchmove" === t3.type && (i3 = !!o2[0] && Math.pow(o2[0].chartX - t3.chartX, 2) + Math.pow(o2[0].chartY - t3.chartY, 2) >= 16), y(i3, true) && this.pinch(t3)) : e3 && this.reset() : 2 === t3.touches.length && this.pinch(t3);
          }
          touchSelect(t3) {
            return !!(this.chart.zooming.singleTouch && t3.touches && 1 === t3.touches.length);
          }
          zoomOption(t3) {
            let e3 = this.chart, i3 = e3.inverted, s2 = e3.zooming.type || "", o2, r2;
            /touch/.test(t3.type) && (s2 = y(e3.zooming.pinchType, s2)), this.zoomX = o2 = /x/.test(s2), this.zoomY = r2 = /y/.test(s2), this.zoomHor = o2 && !i3 || r2 && i3, this.zoomVert = r2 && !i3 || o2 && i3, this.hasZoom = o2 || r2;
          }
        }
        return (s = M || (M = {})).compose = function(t3) {
          b(n, "Core.Pointer") && l(t3, "beforeRender", function() {
            this.pointer = new s(this, this.options);
          });
        }, M;
      }), i(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let {
          extend: i2,
          merge: s,
          pick: o
        } = t2;
        return function(t3) {
          function e3(t4, e4, r) {
            let n = this.legendItem = this.legendItem || {}, {
              chart: a,
              options: l
            } = this, {
              baseline: h = 0,
              symbolWidth: d,
              symbolHeight: c
            } = t4, p = this.symbol || "circle", u = c / 2, g = a.renderer, f = n.group, m = h - Math.round(c * (r ? 0.4 : 0.3)), x = {}, y, b = l.marker, v = 0;
            if (a.styledMode || (x["stroke-width"] = Math.min(l.lineWidth || 0, 24), l.dashStyle ? x.dashstyle = l.dashStyle : "square" === l.linecap || (x["stroke-linecap"] = "round")), n.line = g.path().addClass("highcharts-graph").attr(x).add(f), r && (n.area = g.path().addClass("highcharts-area").add(f)), x["stroke-linecap"] && (v = Math.min(n.line.strokeWidth(), d) / 2), d) {
              let t5 = [["M", v, m], ["L", d - v, m]];
              n.line.attr({
                d: t5
              }), n.area?.attr({
                d: [...t5, ["L", d - v, h], ["L", v, h]]
              });
            }
            if (b && false !== b.enabled && d) {
              let t5 = Math.min(o(b.radius, u), u);
              0 === p.indexOf("url") && (b = s(b, {
                width: c,
                height: c
              }), t5 = 0), n.symbol = y = g.symbol(p, d / 2 - t5, m - t5, 2 * t5, 2 * t5, i2({
                context: "legend"
              }, b)).addClass("highcharts-point").add(f), y.isMarker = true;
            }
          }
          t3.areaMarker = function(t4, i3) {
            e3.call(this, t4, i3, true);
          }, t3.lineMarker = e3, t3.rectangle = function(t4, e4) {
            let i3 = e4.legendItem || {}, s2 = t4.options, r = t4.symbolHeight, n = s2.squareSymbol, a = n ? r : t4.symbolWidth;
            i3.symbol = this.chart.renderer.rect(n ? (t4.symbolWidth - r) / 2 : 0, t4.baseline - r + 1, a, r, o(t4.options.symbolRadius, r / 2)).addClass("highcharts-point").attr({
              zIndex: 3
            }).add(i3.group);
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Series/SeriesDefaults.js", [], function() {
        return {
          lineWidth: 2,
          allowPointSelect: false,
          crisp: true,
          showCheckbox: false,
          animation: {
            duration: 1e3
          },
          enableMouseTracking: true,
          events: {},
          marker: {
            enabledThreshold: 2,
            lineColor: "#ffffff",
            lineWidth: 0,
            radius: 4,
            states: {
              normal: {
                animation: true
              },
              hover: {
                animation: {
                  duration: 150
                },
                enabled: true,
                radiusPlus: 2,
                lineWidthPlus: 1
              },
              select: {
                fillColor: "#cccccc",
                lineColor: "#000000",
                lineWidth: 2
              }
            }
          },
          point: {
            events: {}
          },
          dataLabels: {
            animation: {},
            align: "center",
            borderWidth: 0,
            defer: true,
            formatter: function() {
              let {
                numberFormatter: t2
              } = this.series.chart;
              return "number" != typeof this.y ? "" : t2(this.y, -1);
            },
            padding: 5,
            style: {
              fontSize: "0.7em",
              fontWeight: "bold",
              color: "contrast",
              textOutline: "1px contrast"
            },
            verticalAlign: "bottom",
            x: 0,
            y: 0
          },
          cropThreshold: 300,
          opacity: 1,
          pointRange: 0,
          softThreshold: true,
          states: {
            normal: {
              animation: true
            },
            hover: {
              animation: {
                duration: 150
              },
              lineWidthPlus: 1,
              marker: {},
              halo: {
                size: 10,
                opacity: 0.25
              }
            },
            select: {
              animation: {
                duration: 0
              }
            },
            inactive: {
              animation: {
                duration: 150
              },
              opacity: 0.2
            }
          },
          stickyTracking: true,
          turboThreshold: 1e3,
          findNearestPointBy: "x"
        };
      }), i(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Defaults.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let {
          defaultOptions: r
        } = e2, {
          extend: n,
          extendClass: a,
          merge: l
        } = s;
        return function(e3) {
          function s2(t3, s3) {
            let o2 = r.plotOptions || {}, n2 = s3.defaultOptions, a2 = s3.prototype;
            return a2.type = t3, a2.pointClass || (a2.pointClass = i2), !e3.seriesTypes[t3] && (n2 && (o2[t3] = n2), e3.seriesTypes[t3] = s3, true);
          }
          e3.seriesTypes = t2.seriesTypes, e3.registerSeriesType = s2, e3.seriesType = function(t3, o2, h, d, c) {
            let p = r.plotOptions || {};
            if (o2 = o2 || "", p[t3] = l(p[o2], h), delete e3.seriesTypes[t3], s2(t3, a(e3.seriesTypes[o2] || function() {
            }, d)), e3.seriesTypes[t3].prototype.type = t3, c) {
              class s3 extends i2 {
              }
              n(s3.prototype, c), e3.seriesTypes[t3].prototype.pointClass = s3;
            }
            return e3.seriesTypes[t3];
          };
        }(o || (o = {})), o;
      }), i(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a, l, h) {
        let {
          animObject: d,
          setAnimation: c
        } = t2, {
          defaultOptions: p
        } = e2, {
          registerEventOptions: u
        } = i2, {
          svg: g,
          win: f
        } = s, {
          seriesTypes: m
        } = a, {
          arrayMax: x,
          arrayMin: y,
          clamp: b,
          correctFloat: v,
          crisp: M,
          defined: k,
          destroyObjectProperties: S,
          diffObjects: C,
          erase: w,
          error: A,
          extend: T,
          find: P,
          fireEvent: O,
          getClosestDistance: L,
          getNestedProperty: E,
          insertItem: D,
          isArray: B,
          isNumber: I,
          isString: j,
          merge: R,
          objectEach: G,
          pick: z,
          removeEvent: N,
          splat: W,
          syncTimeout: H
        } = h;
        class X {
          constructor() {
            this.zoneAxis = "y";
          }
          init(t3, e3) {
            let i3;
            O(this, "init", {
              options: e3
            });
            let s2 = this, o2 = t3.series;
            this.eventsToUnbind = [], s2.chart = t3, s2.options = s2.setOptions(e3);
            let r2 = s2.options, n2 = false !== r2.visible;
            s2.linkedSeries = [], s2.bindAxes(), T(s2, {
              name: r2.name,
              state: "",
              visible: n2,
              selected: true === r2.selected
            }), u(this, r2);
            let a2 = r2.events;
            (a2 && a2.click || r2.point && r2.point.events && r2.point.events.click || r2.allowPointSelect) && (t3.runTrackerClick = true), s2.getColor(), s2.getSymbol(), s2.parallelArrays.forEach(function(t4) {
              s2[t4 + "Data"] || (s2[t4 + "Data"] = []);
            }), s2.isCartesian && (t3.hasCartesianSeries = true), o2.length && (i3 = o2[o2.length - 1]), s2._i = z(i3 && i3._i, -1) + 1, s2.opacity = s2.options.opacity, t3.orderItems("series", D(this, o2)), r2.dataSorting && r2.dataSorting.enabled ? s2.setDataSortingOptions() : s2.points || s2.data || s2.setData(r2.data, false), O(this, "afterInit");
          }
          is(t3) {
            return m[t3] && this instanceof m[t3];
          }
          bindAxes() {
            let t3;
            let e3 = this, i3 = e3.options, s2 = e3.chart;
            O(this, "bindAxes", null, function() {
              (e3.axisTypes || []).forEach(function(o2) {
                (s2[o2] || []).forEach(function(s3) {
                  t3 = s3.options, (z(i3[o2], 0) === s3.index || void 0 !== i3[o2] && i3[o2] === t3.id) && (D(e3, s3.series), e3[o2] = s3, s3.isDirty = true);
                }), e3[o2] || e3.optionalAxis === o2 || A(18, true, s2);
              });
            }), O(this, "afterBindAxes");
          }
          updateParallelArrays(t3, e3, i3) {
            let s2 = t3.series, o2 = I(e3) ? function(i4) {
              let o3 = "y" === i4 && s2.toYData ? s2.toYData(t3) : t3[i4];
              s2[i4 + "Data"][e3] = o3;
            } : function(t4) {
              Array.prototype[e3].apply(s2[t4 + "Data"], i3);
            };
            s2.parallelArrays.forEach(o2);
          }
          hasData() {
            return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && this.yData.length > 0;
          }
          hasMarkerChanged(t3, e3) {
            let i3 = t3.marker, s2 = e3.marker || {};
            return i3 && (s2.enabled && !i3.enabled || s2.symbol !== i3.symbol || s2.height !== i3.height || s2.width !== i3.width);
          }
          autoIncrement(t3) {
            let e3 = this.options, i3 = e3.pointIntervalUnit, s2 = e3.relativeXValue, o2 = this.chart.time, r2 = this.xIncrement, n2, a2;
            return (r2 = z(r2, e3.pointStart, 0), this.pointInterval = a2 = z(this.pointInterval, e3.pointInterval, 1), s2 && I(t3) && (a2 *= t3), i3 && (n2 = new o2.Date(r2), "day" === i3 ? o2.set("Date", n2, o2.get("Date", n2) + a2) : "month" === i3 ? o2.set("Month", n2, o2.get("Month", n2) + a2) : "year" === i3 && o2.set("FullYear", n2, o2.get("FullYear", n2) + a2), a2 = n2.getTime() - r2), s2 && I(t3)) ? r2 + a2 : (this.xIncrement = r2 + a2, r2);
          }
          setDataSortingOptions() {
            let t3 = this.options;
            T(this, {
              requireSorting: false,
              sorted: false,
              enabledDataSorting: true,
              allowDG: false
            }), k(t3.pointRange) || (t3.pointRange = 1);
          }
          setOptions(t3) {
            let e3;
            let i3 = this.chart, s2 = i3.options.plotOptions, o2 = i3.userOptions || {}, r2 = R(t3), n2 = i3.styledMode, a2 = {
              plotOptions: s2,
              userOptions: r2
            };
            O(this, "setOptions", a2);
            let l2 = a2.plotOptions[this.type], h2 = o2.plotOptions || {}, d2 = h2.series || {}, c2 = p.plotOptions[this.type] || {}, u2 = h2[this.type] || {};
            this.userOptions = a2.userOptions;
            let g2 = R(l2, s2.series, u2, r2);
            this.tooltipOptions = R(p.tooltip, p.plotOptions.series?.tooltip, c2?.tooltip, i3.userOptions.tooltip, h2.series?.tooltip, u2.tooltip, r2.tooltip), this.stickyTracking = z(r2.stickyTracking, u2.stickyTracking, d2.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || g2.stickyTracking), null === l2.marker && delete g2.marker, this.zoneAxis = g2.zoneAxis || "y";
            let f2 = this.zones = (g2.zones || []).map((t4) => __spreadValues({}, t4));
            return (g2.negativeColor || g2.negativeFillColor) && !g2.zones && (e3 = {
              value: g2[this.zoneAxis + "Threshold"] || g2.threshold || 0,
              className: "highcharts-negative"
            }, n2 || (e3.color = g2.negativeColor, e3.fillColor = g2.negativeFillColor), f2.push(e3)), f2.length && k(f2[f2.length - 1].value) && f2.push(n2 ? {} : {
              color: this.color,
              fillColor: this.fillColor
            }), O(this, "afterSetOptions", {
              options: g2
            }), g2;
          }
          getName() {
            return z(this.options.name, "Series " + (this.index + 1));
          }
          getCyclic(t3, e3, i3) {
            let s2, o2;
            let r2 = this.chart, n2 = `${t3}Index`, a2 = `${t3}Counter`, l2 = i3?.length || r2.options.chart.colorCount;
            !e3 && (k(o2 = z("color" === t3 ? this.options.colorIndex : void 0, this[n2])) ? s2 = o2 : (r2.series.length || (r2[a2] = 0), s2 = r2[a2] % l2, r2[a2] += 1), i3 && (e3 = i3[s2])), void 0 !== s2 && (this[n2] = s2), this[t3] = e3;
          }
          getColor() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || p.plotOptions[this.type].color, this.chart.options.colors);
          }
          getPointsCollection() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          }
          getSymbol() {
            let t3 = this.options.marker;
            this.getCyclic("symbol", t3.symbol, this.chart.options.symbols);
          }
          findPointIndex(t3, e3) {
            let i3, s2, o2;
            let n2 = t3.id, a2 = t3.x, l2 = this.points, h2 = this.options.dataSorting;
            if (n2) {
              let t4 = this.chart.get(n2);
              t4 instanceof r && (i3 = t4);
            } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
              let e4 = (e5) => !e5.touched && e5.index === t3.index;
              if (h2 && h2.matchByName ? e4 = (e5) => !e5.touched && e5.name === t3.name : this.options.relativeXValue && (e4 = (e5) => !e5.touched && e5.options.x === t3.x), !(i3 = P(l2, e4))) return;
            }
            return i3 && void 0 !== (o2 = i3 && i3.index) && (s2 = true), void 0 === o2 && I(a2) && (o2 = this.xData.indexOf(a2, e3)), -1 !== o2 && void 0 !== o2 && this.cropped && (o2 = o2 >= this.cropStart ? o2 - this.cropStart : o2), !s2 && I(o2) && l2[o2] && l2[o2].touched && (o2 = void 0), o2;
          }
          updateData(t3, e3) {
            let i3 = this.options, s2 = i3.dataSorting, o2 = this.points, r2 = [], n2 = this.requireSorting, a2 = t3.length === o2.length, l2, h2, d2, c2, p2 = true;
            if (this.xIncrement = null, t3.forEach(function(t4, e4) {
              let h3;
              let d3 = k(t4) && this.pointClass.prototype.optionsToObject.call({
                series: this
              }, t4) || {}, p3 = d3.x;
              d3.id || I(p3) ? (-1 === (h3 = this.findPointIndex(d3, c2)) || void 0 === h3 ? r2.push(t4) : o2[h3] && t4 !== i3.data[h3] ? (o2[h3].update(t4, false, null, false), o2[h3].touched = true, n2 && (c2 = h3 + 1)) : o2[h3] && (o2[h3].touched = true), (!a2 || e4 !== h3 || s2 && s2.enabled || this.hasDerivedData) && (l2 = true)) : r2.push(t4);
            }, this), l2) for (h2 = o2.length; h2--; ) (d2 = o2[h2]) && !d2.touched && d2.remove && d2.remove(false, e3);
            else !a2 || s2 && s2.enabled ? p2 = false : (t3.forEach(function(t4, e4) {
              t4 === o2[e4].y || o2[e4].destroyed || o2[e4].update(t4, false, null, false);
            }), r2.length = 0);
            return o2.forEach(function(t4) {
              t4 && (t4.touched = false);
            }), !!p2 && (r2.forEach(function(t4) {
              this.addPoint(t4, false, null, null, false);
            }, this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = x(this.xData), this.autoIncrement()), true);
          }
          setData(t3, e3 = true, i3, s2) {
            let o2 = this, r2 = o2.points, n2 = r2 && r2.length || 0, a2 = o2.options, l2 = o2.chart, h2 = a2.dataSorting, d2 = o2.xAxis, c2 = a2.turboThreshold, p2 = this.xData, u2 = this.yData, g2 = o2.pointArrayMap, f2 = g2 && g2.length, m2 = a2.keys, x2, y2, b2, v2 = 0, M2 = 1, k2;
            l2.options.chart.allowMutatingData || (a2.data && delete o2.options.data, o2.userOptions.data && delete o2.userOptions.data, k2 = R(true, t3));
            let S2 = (t3 = k2 || t3 || []).length;
            if (h2 && h2.enabled && (t3 = this.sortData(t3)), l2.options.chart.allowMutatingData && false !== s2 && S2 && n2 && !o2.cropped && !o2.hasGroupedData && o2.visible && !o2.boosted && (b2 = this.updateData(t3, i3)), !b2) {
              o2.xIncrement = null, o2.colorCounter = 0, this.parallelArrays.forEach(function(t4) {
                o2[t4 + "Data"].length = 0;
              });
              let e4 = c2 && S2 > c2;
              if (e4) {
                let i4 = o2.getFirstValidPoint(t3), s3 = o2.getFirstValidPoint(t3, S2 - 1, -1), r3 = (t4) => !!(B(t4) && (m2 || I(t4[0])));
                if (I(i4) && I(s3)) for (x2 = 0; x2 < S2; x2++) p2[x2] = this.autoIncrement(), u2[x2] = t3[x2];
                else if (r3(i4) && r3(s3)) {
                  if (f2) {
                    if (i4.length === f2) for (x2 = 0; x2 < S2; x2++) p2[x2] = this.autoIncrement(), u2[x2] = t3[x2];
                    else for (x2 = 0; x2 < S2; x2++) y2 = t3[x2], p2[x2] = y2[0], u2[x2] = y2.slice(1, f2 + 1);
                  } else if (m2 && (v2 = m2.indexOf("x"), M2 = m2.indexOf("y"), v2 = v2 >= 0 ? v2 : 0, M2 = M2 >= 0 ? M2 : 1), 1 === i4.length && (M2 = 0), v2 === M2) for (x2 = 0; x2 < S2; x2++) p2[x2] = this.autoIncrement(), u2[x2] = t3[x2][M2];
                  else for (x2 = 0; x2 < S2; x2++) y2 = t3[x2], p2[x2] = y2[v2], u2[x2] = y2[M2];
                } else e4 = false;
              }
              if (!e4) for (x2 = 0; x2 < S2; x2++) y2 = {
                series: o2
              }, o2.pointClass.prototype.applyOptions.apply(y2, [t3[x2]]), o2.updateParallelArrays(y2, x2);
              for (u2 && j(u2[0]) && A(14, true, l2), o2.data = [], o2.options.data = o2.userOptions.data = t3, x2 = n2; x2--; ) r2[x2]?.destroy();
              d2 && (d2.minRange = d2.userMinRange), o2.isDirty = l2.isDirtyBox = true, o2.isDirtyData = !!r2, i3 = false;
            }
            "point" === a2.legendType && (this.processData(), this.generatePoints()), e3 && l2.redraw(i3);
          }
          sortData(t3) {
            let e3 = this, i3 = e3.options.dataSorting.sortKey || "y", s2 = function(t4, e4) {
              return k(e4) && t4.pointClass.prototype.optionsToObject.call({
                series: t4
              }, e4) || {};
            };
            return t3.forEach(function(i4, o2) {
              t3[o2] = s2(e3, i4), t3[o2].index = o2;
            }, this), t3.concat().sort((t4, e4) => {
              let s3 = E(i3, t4), o2 = E(i3, e4);
              return o2 < s3 ? -1 : o2 > s3 ? 1 : 0;
            }).forEach(function(t4, e4) {
              t4.x = e4;
            }, this), e3.linkedSeries && e3.linkedSeries.forEach(function(e4) {
              let i4 = e4.options, o2 = i4.data;
              i4.dataSorting && i4.dataSorting.enabled || !o2 || (o2.forEach(function(i5, r2) {
                o2[r2] = s2(e4, i5), t3[r2] && (o2[r2].x = t3[r2].x, o2[r2].index = r2);
              }), e4.setData(o2, false));
            }), t3;
          }
          getProcessedData(t3) {
            let e3 = this, i3 = e3.xAxis, s2 = e3.options.cropThreshold, o2 = i3?.logarithmic, r2 = e3.isCartesian, n2, a2, l2 = 0, h2, d2, c2, p2 = e3.xData, u2 = e3.yData, g2 = false, f2 = p2.length;
            i3 && (d2 = (h2 = i3.getExtremes()).min, c2 = h2.max, g2 = !!(i3.categories && !i3.names.length)), r2 && e3.sorted && !t3 && (!s2 || f2 > s2 || e3.forceCrop) && (p2[f2 - 1] < d2 || p2[0] > c2 ? (p2 = [], u2 = []) : e3.yData && (p2[0] < d2 || p2[f2 - 1] > c2) && (p2 = (n2 = this.cropData(e3.xData, e3.yData, d2, c2)).xData, u2 = n2.yData, l2 = n2.start, a2 = true));
            let m2 = L([o2 ? p2.map(o2.log2lin) : p2], () => e3.requireSorting && !g2 && A(15, false, e3.chart));
            return {
              xData: p2,
              yData: u2,
              cropped: a2,
              cropStart: l2,
              closestPointRange: m2
            };
          }
          processData(t3) {
            let e3 = this.xAxis;
            if (this.isCartesian && !this.isDirty && !e3.isDirty && !this.yAxis.isDirty && !t3) return false;
            let i3 = this.getProcessedData();
            this.cropped = i3.cropped, this.cropStart = i3.cropStart, this.processedXData = i3.xData, this.processedYData = i3.yData, this.closestPointRange = this.basePointRange = i3.closestPointRange, O(this, "afterProcessData");
          }
          cropData(t3, e3, i3, s2) {
            let o2 = t3.length, r2, n2, a2 = 0, l2 = o2;
            for (r2 = 0; r2 < o2; r2++) if (t3[r2] >= i3) {
              a2 = Math.max(0, r2 - 1);
              break;
            }
            for (n2 = r2; n2 < o2; n2++) if (t3[n2] > s2) {
              l2 = n2 + 1;
              break;
            }
            return {
              xData: t3.slice(a2, l2),
              yData: e3.slice(a2, l2),
              start: a2,
              end: l2
            };
          }
          generatePoints() {
            let t3 = this.options, e3 = this.processedData || t3.data, i3 = this.processedXData, s2 = this.processedYData, o2 = this.pointClass, r2 = i3.length, n2 = this.cropStart || 0, a2 = this.hasGroupedData, l2 = t3.keys, h2 = [], d2 = t3.dataGrouping && t3.dataGrouping.groupAll ? n2 : 0, c2, p2, u2, g2, f2 = this.data;
            if (!f2 && !a2) {
              let t4 = [];
              t4.length = e3.length, f2 = this.data = t4;
            }
            for (l2 && a2 && (this.options.keys = false), g2 = 0; g2 < r2; g2++) p2 = n2 + g2, a2 ? ((u2 = new o2(this, [i3[g2]].concat(W(s2[g2])))).dataGroup = this.groupMap[d2 + g2], u2.dataGroup.options && (u2.options = u2.dataGroup.options, T(u2, u2.dataGroup.options), delete u2.dataLabels)) : (u2 = f2[p2]) || void 0 === e3[p2] || (f2[p2] = u2 = new o2(this, e3[p2], i3[g2])), u2 && (u2.index = a2 ? d2 + g2 : p2, h2[g2] = u2);
            if (this.options.keys = l2, f2 && (r2 !== (c2 = f2.length) || a2)) for (g2 = 0; g2 < c2; g2++) g2 !== n2 || a2 || (g2 += r2), f2[g2] && (f2[g2].destroyElements(), f2[g2].plotX = void 0);
            this.data = f2, this.points = h2, O(this, "afterGeneratePoints");
          }
          getXExtremes(t3) {
            return {
              min: y(t3),
              max: x(t3)
            };
          }
          getExtremes(t3, e3) {
            let i3 = this.xAxis, s2 = this.yAxis, o2 = [], r2 = this.requireSorting && !this.is("column") ? 1 : 0, n2 = !!s2 && s2.positiveValuesOnly, a2 = e3 || this.getExtremesFromAll || this.options.getExtremesFromAll, {
              processedXData: l2,
              processedYData: h2
            } = this, d2, c2, p2, u2, g2, f2, m2, b2 = 0, v2 = 0, M2 = 0;
            if (this.cropped && a2) {
              let t4 = this.getProcessedData(true);
              l2 = t4.xData, h2 = t4.yData;
            }
            let k2 = (t3 = t3 || this.stackedYData || h2 || []).length, S2 = l2 || this.xData;
            for (i3 && (b2 = (d2 = i3.getExtremes()).min, v2 = d2.max), f2 = 0; f2 < k2; f2++) if (u2 = S2[f2], c2 = (I(g2 = t3[f2]) || B(g2)) && ((I(g2) ? g2 > 0 : g2.length) || !n2), p2 = e3 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !i3 || (S2[f2 + r2] || u2) >= b2 && (S2[f2 - r2] || u2) <= v2, c2 && p2) {
              if (m2 = g2.length) for (; m2--; ) I(g2[m2]) && (o2[M2++] = g2[m2]);
              else o2[M2++] = g2;
            }
            let C2 = {
              activeYData: o2,
              dataMin: y(o2),
              dataMax: x(o2)
            };
            return O(this, "afterGetExtremes", {
              dataExtremes: C2
            }), C2;
          }
          applyExtremes() {
            let t3 = this.getExtremes();
            return this.dataMin = t3.dataMin, this.dataMax = t3.dataMax, t3;
          }
          getFirstValidPoint(t3, e3 = 0, i3 = 1) {
            let s2 = t3.length, o2 = e3;
            for (; o2 >= 0 && o2 < s2; ) {
              if (k(t3[o2])) return t3[o2];
              o2 += i3;
            }
          }
          translate() {
            this.processedXData || this.processData(), this.generatePoints();
            let t3 = this.options, e3 = t3.stacking, i3 = this.xAxis, s2 = i3.categories, o2 = this.enabledDataSorting, r2 = this.yAxis, n2 = this.points, a2 = n2.length, l2 = this.pointPlacementToXValue(), h2 = !!l2, d2 = t3.threshold, c2 = t3.startFromThreshold ? d2 : 0, p2, u2, g2, f2, m2 = Number.MAX_VALUE;
            function x2(t4) {
              return b(t4, -1e5, 1e5);
            }
            for (p2 = 0; p2 < a2; p2++) {
              let t4;
              let a3 = n2[p2], y2 = a3.x, b2, M2, S2 = a3.y, C2 = a3.low, w2 = e3 && r2.stacking?.stacks[(this.negStacks && S2 < (c2 ? 0 : d2) ? "-" : "") + this.stackKey];
              u2 = i3.translate(y2, false, false, false, true, l2), a3.plotX = I(u2) ? v(x2(u2)) : void 0, e3 && this.visible && w2 && w2[y2] && (f2 = this.getStackIndicator(f2, y2, this.index), !a3.isNull && f2.key && (M2 = (b2 = w2[y2]).points[f2.key]), b2 && B(M2) && (C2 = M2[0], S2 = M2[1], C2 === c2 && f2.key === w2[y2].base && (C2 = z(I(d2) ? d2 : r2.min)), r2.positiveValuesOnly && k(C2) && C2 <= 0 && (C2 = void 0), a3.total = a3.stackTotal = z(b2.total), a3.percentage = k(a3.y) && b2.total ? a3.y / b2.total * 100 : void 0, a3.stackY = S2, this.irregularWidths || b2.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), a3.yBottom = k(C2) ? x2(r2.translate(C2, false, true, false, true)) : void 0, this.dataModify && (S2 = this.dataModify.modifyValue(S2, p2)), I(S2) && void 0 !== a3.plotX && (t4 = I(t4 = r2.translate(S2, false, true, false, true)) ? x2(t4) : void 0), a3.plotY = t4, a3.isInside = this.isPointInside(a3), a3.clientX = h2 ? v(i3.translate(y2, false, false, false, true, l2)) : u2, a3.negative = (a3.y || 0) < (d2 || 0), a3.category = z(s2 && s2[a3.x], a3.x), a3.isNull || false === a3.visible || (void 0 !== g2 && (m2 = Math.min(m2, Math.abs(u2 - g2))), g2 = u2), a3.zone = this.zones.length ? a3.getZone() : void 0, !a3.graphic && this.group && o2 && (a3.isNew = true);
            }
            this.closestPointRangePx = m2, O(this, "afterTranslate");
          }
          getValidPoints(t3, e3, i3) {
            let s2 = this.chart;
            return (t3 || this.points || []).filter(function(t4) {
              let {
                plotX: o2,
                plotY: r2
              } = t4;
              return !!((i3 || !t4.isNull && I(r2)) && (!e3 || s2.isInsidePlot(o2, r2, {
                inverted: s2.inverted
              }))) && false !== t4.visible;
            });
          }
          getClipBox() {
            let {
              chart: t3,
              xAxis: e3,
              yAxis: i3
            } = this, {
              x: s2,
              y: o2,
              width: r2,
              height: n2
            } = R(t3.clipBox);
            return e3 && e3.len !== t3.plotSizeX && (r2 = e3.len), i3 && i3.len !== t3.plotSizeY && (n2 = i3.len), t3.inverted && !this.invertible && ([r2, n2] = [n2, r2]), {
              x: s2,
              y: o2,
              width: r2,
              height: n2
            };
          }
          getSharedClipKey() {
            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
          }
          setClip() {
            let {
              chart: t3,
              group: e3,
              markerGroup: i3
            } = this, s2 = t3.sharedClips, o2 = t3.renderer, r2 = this.getClipBox(), n2 = this.getSharedClipKey(), a2 = s2[n2];
            a2 ? a2.animate(r2) : s2[n2] = a2 = o2.clipRect(r2), e3 && e3.clip(false === this.options.clip ? void 0 : a2), i3 && i3.clip();
          }
          animate(t3) {
            let {
              chart: e3,
              group: i3,
              markerGroup: s2
            } = this, o2 = e3.inverted, r2 = d(this.options.animation), n2 = [this.getSharedClipKey(), r2.duration, r2.easing, r2.defer].join(","), a2 = e3.sharedClips[n2], l2 = e3.sharedClips[n2 + "m"];
            if (t3 && i3) {
              let t4 = this.getClipBox();
              if (a2) a2.attr("height", t4.height);
              else {
                t4.width = 0, o2 && (t4.x = e3.plotHeight), a2 = e3.renderer.clipRect(t4), e3.sharedClips[n2] = a2;
                let i4 = {
                  x: -99,
                  y: -99,
                  width: o2 ? e3.plotWidth + 199 : 99,
                  height: o2 ? 99 : e3.plotHeight + 199
                };
                l2 = e3.renderer.clipRect(i4), e3.sharedClips[n2 + "m"] = l2;
              }
              i3.clip(a2), s2?.clip(l2);
            } else if (a2 && !a2.hasClass("highcharts-animating")) {
              let t4 = this.getClipBox(), i4 = r2.step;
              (s2?.element.childNodes.length || e3.series.length > 1) && (r2.step = function(t5, e4) {
                i4 && i4.apply(e4, arguments), "width" === e4.prop && l2?.element && l2.attr(o2 ? "height" : "width", t5 + 99);
              }), a2.addClass("highcharts-animating").animate(t4, r2);
            }
          }
          afterAnimate() {
            this.setClip(), G(this.chart.sharedClips, (t3, e3, i3) => {
              t3 && !this.chart.container.querySelector(`[clip-path="url(#${t3.id})"]`) && (t3.destroy(), delete i3[e3]);
            }), this.finishedAnimating = true, O(this, "afterAnimate");
          }
          drawPoints(t3 = this.points) {
            let e3, i3, s2, o2, r2, n2, a2;
            let l2 = this.chart, h2 = l2.styledMode, {
              colorAxis: d2,
              options: c2
            } = this, p2 = c2.marker, u2 = this[this.specialGroup || "markerGroup"], g2 = this.xAxis, f2 = z(p2.enabled, !g2 || !!g2.isRadial || null, this.closestPointRangePx >= p2.enabledThreshold * p2.radius);
            if (false !== p2.enabled || this._hasPointMarkers) for (e3 = 0; e3 < t3.length; e3++) if (o2 = (s2 = (i3 = t3[e3]).graphic) ? "animate" : "attr", r2 = i3.marker || {}, n2 = !!i3.marker, (f2 && void 0 === r2.enabled || r2.enabled) && !i3.isNull && false !== i3.visible) {
              let t4 = z(r2.symbol, this.symbol, "rect");
              a2 = this.markerAttribs(i3, i3.selected && "select"), this.enabledDataSorting && (i3.startXPos = g2.reversed ? -(a2.width || 0) : g2.width);
              let e4 = false !== i3.isInside;
              if (!s2 && e4 && ((a2.width || 0) > 0 || i3.hasImage) && (i3.graphic = s2 = l2.renderer.symbol(t4, a2.x, a2.y, a2.width, a2.height, n2 ? r2 : p2).add(u2), this.enabledDataSorting && l2.hasRendered && (s2.attr({
                x: i3.startXPos
              }), o2 = "animate")), s2 && "animate" === o2 && s2[e4 ? "show" : "hide"](e4).animate(a2), s2) {
                let t5 = this.pointAttribs(i3, h2 || !i3.selected ? void 0 : "select");
                h2 ? d2 && s2.css({
                  fill: t5.fill
                }) : s2[o2](t5);
              }
              s2 && s2.addClass(i3.getClassName(), true);
            } else s2 && (i3.graphic = s2.destroy());
          }
          markerAttribs(t3, e3) {
            let i3 = this.options, s2 = i3.marker, o2 = t3.marker || {}, r2 = o2.symbol || s2.symbol, n2 = {}, a2, l2, h2 = z(o2.radius, s2 && s2.radius);
            e3 && (a2 = s2.states[e3], h2 = z((l2 = o2.states && o2.states[e3]) && l2.radius, a2 && a2.radius, h2 && h2 + (a2 && a2.radiusPlus || 0))), t3.hasImage = r2 && 0 === r2.indexOf("url"), t3.hasImage && (h2 = 0);
            let d2 = t3.pos();
            return I(h2) && d2 && (i3.crisp && (d2[0] = M(d2[0], t3.hasImage ? 0 : "rect" === r2 ? s2?.lineWidth || 0 : 1)), n2.x = d2[0] - h2, n2.y = d2[1] - h2), h2 && (n2.width = n2.height = 2 * h2), n2;
          }
          pointAttribs(t3, e3) {
            let i3 = this.options.marker, s2 = t3 && t3.options, o2 = s2 && s2.marker || {}, r2 = s2 && s2.color, n2 = t3 && t3.color, a2 = t3 && t3.zone && t3.zone.color, l2, h2, d2 = this.color, c2, p2, u2 = z(o2.lineWidth, i3.lineWidth), g2 = 1;
            return d2 = r2 || a2 || n2 || d2, c2 = o2.fillColor || i3.fillColor || d2, p2 = o2.lineColor || i3.lineColor || d2, e3 = e3 || "normal", l2 = i3.states[e3] || {}, u2 = z((h2 = o2.states && o2.states[e3] || {}).lineWidth, l2.lineWidth, u2 + z(h2.lineWidthPlus, l2.lineWidthPlus, 0)), c2 = h2.fillColor || l2.fillColor || c2, {
              stroke: p2 = h2.lineColor || l2.lineColor || p2,
              "stroke-width": u2,
              fill: c2,
              opacity: g2 = z(h2.opacity, l2.opacity, g2)
            };
          }
          destroy(t3) {
            let e3, i3, s2;
            let o2 = this, r2 = o2.chart, n2 = /AppleWebKit\/533/.test(f.navigator.userAgent), a2 = o2.data || [];
            for (O(o2, "destroy", {
              keepEventsForUpdate: t3
            }), this.removeEvents(t3), (o2.axisTypes || []).forEach(function(t4) {
              (s2 = o2[t4]) && s2.series && (w(s2.series, o2), s2.isDirty = s2.forceRedraw = true);
            }), o2.legendItem && o2.chart.legend.destroyItem(o2), e3 = a2.length; e3--; ) (i3 = a2[e3]) && i3.destroy && i3.destroy();
            for (let t4 of o2.zones) S(t4, void 0, true);
            h.clearTimeout(o2.animationTimeout), G(o2, function(t4, e4) {
              t4 instanceof l && !t4.survive && t4[n2 && "group" === e4 ? "hide" : "destroy"]();
            }), r2.hoverSeries === o2 && (r2.hoverSeries = void 0), w(r2.series, o2), r2.orderItems("series"), G(o2, function(e4, i4) {
              t3 && "hcEvents" === i4 || delete o2[i4];
            });
          }
          applyZones() {
            let {
              area: t3,
              chart: e3,
              graph: i3,
              zones: s2,
              points: o2,
              xAxis: r2,
              yAxis: n2,
              zoneAxis: a2
            } = this, {
              inverted: l2,
              renderer: h2
            } = e3, d2 = this[`${a2}Axis`], {
              isXAxis: c2,
              len: p2 = 0
            } = d2 || {}, u2 = (i3?.strokeWidth() || 0) / 2 + 1, g2 = (t4, e4 = 0, i4 = 0) => {
              l2 && (i4 = p2 - i4);
              let {
                translated: s3 = 0,
                lineClip: o3
              } = t4, r3 = i4 - s3;
              o3?.push(["L", e4, Math.abs(r3) < u2 ? i4 - u2 * (r3 <= 0 ? -1 : 1) : s3]);
            };
            if (s2.length && (i3 || t3) && d2 && I(d2.min)) {
              let e4 = d2.getExtremes().max, u3 = (t4) => {
                t4.forEach((e5, i4) => {
                  ("M" === e5[0] || "L" === e5[0]) && (t4[i4] = [e5[0], c2 ? p2 - e5[1] : e5[1], c2 ? e5[2] : p2 - e5[2]]);
                });
              };
              if (s2.forEach((t4) => {
                t4.lineClip = [], t4.translated = b(d2.toPixels(z(t4.value, e4), true) || 0, 0, p2);
              }), i3 && !this.showLine && i3.hide(), t3 && t3.hide(), "y" === a2 && o2.length < r2.len) for (let t4 of o2) {
                let {
                  plotX: e5,
                  plotY: i4,
                  zone: o3
                } = t4, r3 = o3 && s2[s2.indexOf(o3) - 1];
                o3 && g2(o3, e5, i4), r3 && g2(r3, e5, i4);
              }
              let f2 = [], m2 = d2.toPixels(d2.getExtremes().min, true);
              s2.forEach((e5) => {
                let s3 = e5.lineClip || [], o3 = Math.round(e5.translated || 0);
                r2.reversed && s3.reverse();
                let {
                  clip: a3,
                  simpleClip: d3
                } = e5, p3 = 0, g3 = 0, x2 = r2.len, y2 = n2.len;
                c2 ? (p3 = o3, x2 = m2) : (g3 = o3, y2 = m2);
                let b2 = [["M", p3, g3], ["L", x2, g3], ["L", x2, y2], ["L", p3, y2], ["Z"]], v2 = [b2[0], ...s3, b2[1], b2[2], ...f2, b2[3], b2[4]];
                f2 = s3.reverse(), m2 = o3, l2 && (u3(v2), t3 && u3(b2)), a3 ? (a3.animate({
                  d: v2
                }), d3?.animate({
                  d: b2
                })) : (a3 = e5.clip = h2.path(v2), t3 && (d3 = e5.simpleClip = h2.path(b2))), i3 && e5.graph?.clip(a3), t3 && e5.area?.clip(d3);
              });
            } else this.visible && (i3 && i3.show(), t3 && t3.show());
          }
          plotGroup(t3, e3, i3, s2, o2) {
            let r2 = this[t3], n2 = !r2, a2 = {
              visibility: i3,
              zIndex: s2 || 0.1
            };
            return k(this.opacity) && !this.chart.styledMode && "inactive" !== this.state && (a2.opacity = this.opacity), r2 || (this[t3] = r2 = this.chart.renderer.g().add(o2)), r2.addClass("highcharts-" + e3 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (k(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (r2.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true), r2.attr(a2)[n2 ? "attr" : "animate"](this.getPlotBox(e3)), r2;
          }
          getPlotBox(t3) {
            let e3 = this.xAxis, i3 = this.yAxis, s2 = this.chart, o2 = s2.inverted && !s2.polar && e3 && this.invertible && "series" === t3;
            return s2.inverted && (e3 = i3, i3 = this.xAxis), {
              translateX: e3 ? e3.left : s2.plotLeft,
              translateY: i3 ? i3.top : s2.plotTop,
              rotation: o2 ? 90 : 0,
              rotationOriginX: o2 ? (e3.len - i3.len) / 2 : 0,
              rotationOriginY: o2 ? (e3.len + i3.len) / 2 : 0,
              scaleX: o2 ? -1 : 1,
              scaleY: 1
            };
          }
          removeEvents(t3) {
            let {
              eventsToUnbind: e3
            } = this;
            t3 || N(this), e3.length && (e3.forEach((t4) => {
              t4();
            }), e3.length = 0);
          }
          render() {
            let t3 = this, {
              chart: e3,
              options: i3,
              hasRendered: s2
            } = t3, o2 = d(i3.animation), r2 = t3.visible ? "inherit" : "hidden", n2 = i3.zIndex, a2 = e3.seriesGroup, l2 = t3.finishedAnimating ? 0 : o2.duration;
            O(this, "render"), t3.plotGroup("group", "series", r2, n2, a2), t3.markerGroup = t3.plotGroup("markerGroup", "markers", r2, n2, a2), false !== i3.clip && t3.setClip(), l2 && t3.animate?.(true), t3.drawGraph && (t3.drawGraph(), t3.applyZones()), t3.visible && t3.drawPoints(), t3.drawDataLabels?.(), t3.redrawPoints?.(), i3.enableMouseTracking && t3.drawTracker?.(), l2 && t3.animate?.(), s2 || (l2 && o2.defer && (l2 += o2.defer), t3.animationTimeout = H(() => {
              t3.afterAnimate();
            }, l2 || 0)), t3.isDirty = false, t3.hasRendered = true, O(t3, "afterRender");
          }
          redraw() {
            let t3 = this.isDirty || this.isDirtyData;
            this.translate(), this.render(), t3 && delete this.kdTree;
          }
          reserveSpace() {
            return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
          }
          searchPoint(t3, e3) {
            let {
              xAxis: i3,
              yAxis: s2
            } = this, o2 = this.chart.inverted;
            return this.searchKDTree({
              clientX: o2 ? i3.len - t3.chartY + i3.pos : t3.chartX - i3.pos,
              plotY: o2 ? s2.len - t3.chartX + s2.pos : t3.chartY - s2.pos
            }, e3, t3);
          }
          buildKDTree(t3) {
            this.buildingKdTree = true;
            let e3 = this, i3 = e3.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
            delete e3.kdTree, H(function() {
              e3.kdTree = function t4(i4, s2, o2) {
                let r2, n2;
                let a2 = i4?.length;
                if (a2) return r2 = e3.kdAxisArray[s2 % o2], i4.sort((t5, e4) => (t5[r2] || 0) - (e4[r2] || 0)), {
                  point: i4[n2 = Math.floor(a2 / 2)],
                  left: t4(i4.slice(0, n2), s2 + 1, o2),
                  right: t4(i4.slice(n2 + 1), s2 + 1, o2)
                };
              }(e3.getValidPoints(void 0, !e3.directTouch), i3, i3), e3.buildingKdTree = false;
            }, e3.options.kdNow || t3?.type === "touchstart" ? 0 : 1);
          }
          searchKDTree(t3, e3, i3) {
            let s2 = this, [o2, r2] = this.kdAxisArray, n2 = e3 ? "distX" : "dist", a2 = (s2.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, l2 = !!s2.isBubble;
            if (this.kdTree || this.buildingKdTree || this.buildKDTree(i3), this.kdTree) return function t4(e4, i4, a3, h2) {
              let d2 = i4.point, c2 = s2.kdAxisArray[a3 % h2], p2, u2, g2 = d2;
              !function(t5, e5) {
                let i5 = t5[o2], s3 = e5[o2], n3 = k(i5) && k(s3) ? i5 - s3 : null, a4 = t5[r2], h3 = e5[r2], d3 = k(a4) && k(h3) ? a4 - h3 : 0, c3 = l2 && e5.marker?.radius || 0;
                e5.dist = Math.sqrt((n3 && n3 * n3 || 0) + d3 * d3) - c3, e5.distX = k(n3) ? Math.abs(n3) - c3 : Number.MAX_VALUE;
              }(e4, d2);
              let f2 = (e4[c2] || 0) - (d2[c2] || 0) + (l2 && d2.marker?.radius || 0), m2 = f2 < 0 ? "left" : "right", x2 = f2 < 0 ? "right" : "left";
              return i4[m2] && (g2 = (p2 = t4(e4, i4[m2], a3 + 1, h2))[n2] < g2[n2] ? p2 : d2), i4[x2] && Math.sqrt(f2 * f2) < g2[n2] && (g2 = (u2 = t4(e4, i4[x2], a3 + 1, h2))[n2] < g2[n2] ? u2 : g2), g2;
            }(t3, this.kdTree, a2, a2);
          }
          pointPlacementToXValue() {
            let {
              options: t3,
              xAxis: e3
            } = this, i3 = t3.pointPlacement;
            return "between" === i3 && (i3 = e3.reversed ? -0.5 : 0.5), I(i3) ? i3 * (t3.pointRange || e3.pointRange) : 0;
          }
          isPointInside(t3) {
            let {
              chart: e3,
              xAxis: i3,
              yAxis: s2
            } = this, {
              plotX: o2 = -1,
              plotY: r2 = -1
            } = t3;
            return r2 >= 0 && r2 <= (s2 ? s2.len : e3.plotHeight) && o2 >= 0 && o2 <= (i3 ? i3.len : e3.plotWidth);
          }
          drawTracker() {
            let t3 = this, e3 = t3.options, i3 = e3.trackByArea, s2 = [].concat((i3 ? t3.areaPath : t3.graphPath) || []), o2 = t3.chart, r2 = o2.pointer, n2 = o2.renderer, a2 = o2.options.tooltip?.snap || 0, l2 = () => {
              e3.enableMouseTracking && o2.hoverSeries !== t3 && t3.onMouseOver();
            }, h2 = "rgba(192,192,192," + (g ? 1e-4 : 2e-3) + ")", d2 = t3.tracker;
            d2 ? d2.attr({
              d: s2
            }) : t3.graph && (t3.tracker = d2 = n2.path(s2).attr({
              visibility: t3.visible ? "inherit" : "hidden",
              zIndex: 2
            }).addClass(i3 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t3.group), o2.styledMode || d2.attr({
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              stroke: h2,
              fill: i3 ? h2 : "none",
              "stroke-width": t3.graph.strokeWidth() + (i3 ? 0 : 2 * a2)
            }), [t3.tracker, t3.markerGroup, t3.dataLabelsGroup].forEach((t4) => {
              t4 && (t4.addClass("highcharts-tracker").on("mouseover", l2).on("mouseout", (t5) => {
                r2?.onTrackerMouseOut(t5);
              }), e3.cursor && !o2.styledMode && t4.css({
                cursor: e3.cursor
              }), t4.on("touchstart", l2));
            })), O(this, "afterDrawTracker");
          }
          addPoint(t3, e3, i3, s2, o2) {
            let r2, n2;
            let a2 = this.options, l2 = this.data, h2 = this.chart, d2 = this.xAxis, c2 = d2 && d2.hasNames && d2.names, p2 = a2.data, u2 = this.xData;
            e3 = z(e3, true);
            let g2 = {
              series: this
            };
            this.pointClass.prototype.applyOptions.apply(g2, [t3]);
            let f2 = g2.x;
            if (n2 = u2.length, this.requireSorting && f2 < u2[n2 - 1]) for (r2 = true; n2 && u2[n2 - 1] > f2; ) n2--;
            this.updateParallelArrays(g2, "splice", [n2, 0, 0]), this.updateParallelArrays(g2, n2), c2 && g2.name && (c2[f2] = g2.name), p2.splice(n2, 0, t3), (r2 || this.processedData) && (this.data.splice(n2, 0, null), this.processData()), "point" === a2.legendType && this.generatePoints(), i3 && (l2[0] && l2[0].remove ? l2[0].remove(false) : (l2.shift(), this.updateParallelArrays(g2, "shift"), p2.shift())), false !== o2 && O(this, "addPoint", {
              point: g2
            }), this.isDirty = true, this.isDirtyData = true, e3 && h2.redraw(s2);
          }
          removePoint(t3, e3, i3) {
            let s2 = this, o2 = s2.data, r2 = o2[t3], n2 = s2.points, a2 = s2.chart, l2 = function() {
              n2 && n2.length === o2.length && n2.splice(t3, 1), o2.splice(t3, 1), s2.options.data.splice(t3, 1), s2.updateParallelArrays(r2 || {
                series: s2
              }, "splice", [t3, 1]), r2 && r2.destroy(), s2.isDirty = true, s2.isDirtyData = true, e3 && a2.redraw();
            };
            c(i3, a2), e3 = z(e3, true), r2 ? r2.firePointEvent("remove", null, l2) : l2();
          }
          remove(t3, e3, i3, s2) {
            let o2 = this, r2 = o2.chart;
            function n2() {
              o2.destroy(s2), r2.isDirtyLegend = r2.isDirtyBox = true, r2.linkSeries(s2), z(t3, true) && r2.redraw(e3);
            }
            false !== i3 ? O(o2, "remove", null, n2) : n2();
          }
          update(t3, e3) {
            O(this, "update", {
              options: t3 = C(t3, this.userOptions)
            });
            let i3 = this, s2 = i3.chart, o2 = i3.userOptions, r2 = i3.initialType || i3.type, n2 = s2.options.plotOptions, a2 = m[r2].prototype, l2 = i3.finishedAnimating && {
              animation: false
            }, h2 = {}, d2, c2, p2 = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], u2 = t3.type || o2.type || s2.options.chart.type, g2 = !(this.hasDerivedData || u2 && u2 !== this.type || void 0 !== t3.pointStart || void 0 !== t3.pointInterval || void 0 !== t3.relativeXValue || t3.joinBy || t3.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((t4) => i3.hasOptionChanged(t4)));
            u2 = u2 || r2, g2 && (p2.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), false !== t3.visible && p2.push("area", "graph"), i3.parallelArrays.forEach(function(t4) {
              p2.push(t4 + "Data");
            }), t3.data && (t3.dataSorting && T(i3.options.dataSorting, t3.dataSorting), this.setData(t3.data, false))), t3 = R(o2, {
              index: void 0 === o2.index ? i3.index : o2.index,
              pointStart: n2?.series?.pointStart ?? o2.pointStart ?? i3.xData?.[0]
            }, !g2 && {
              data: i3.options.data
            }, t3, l2), g2 && t3.data && (t3.data = i3.options.data), (p2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(p2)).forEach(function(t4) {
              p2[t4] = i3[t4], delete i3[t4];
            });
            let f2 = false;
            if (m[u2]) {
              if (f2 = u2 !== i3.type, i3.remove(false, false, false, true), f2) {
                if (s2.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i3, m[u2].prototype);
                else {
                  let t4 = Object.hasOwnProperty.call(i3, "hcEvents") && i3.hcEvents;
                  for (c2 in a2) i3[c2] = void 0;
                  T(i3, m[u2].prototype), t4 ? i3.hcEvents = t4 : delete i3.hcEvents;
                }
              }
            } else A(17, true, s2, {
              missingModuleFor: u2
            });
            if (p2.forEach(function(t4) {
              i3[t4] = p2[t4];
            }), i3.init(s2, t3), g2 && this.points) for (let t4 of (false === (d2 = i3.options).visible ? (h2.graphic = 1, h2.dataLabel = 1) : (this.hasMarkerChanged(d2, o2) && (h2.graphic = 1), i3.hasDataLabels?.() || (h2.dataLabel = 1)), this.points)) t4 && t4.series && (t4.resolveColor(), Object.keys(h2).length && t4.destroyElements(h2), false === d2.showInLegend && t4.legendItem && s2.legend.destroyItem(t4));
            i3.initialType = r2, s2.linkSeries(), s2.setSortedData(), f2 && i3.linkedSeries.length && (i3.isDirtyData = true), O(this, "afterUpdate"), z(e3, true) && s2.redraw(!!g2 && void 0);
          }
          setName(t3) {
            this.name = this.options.name = this.userOptions.name = t3, this.chart.isDirtyLegend = true;
          }
          hasOptionChanged(t3) {
            let e3 = this.chart, i3 = this.options[t3], s2 = e3.options.plotOptions, o2 = this.userOptions[t3], r2 = z(s2?.[this.type]?.[t3], s2?.series?.[t3]);
            return o2 && !k(r2) ? i3 !== o2 : i3 !== z(r2, i3);
          }
          onMouseOver() {
            let t3 = this.chart, e3 = t3.hoverSeries, i3 = t3.pointer;
            i3?.setHoverChartIndex(), e3 && e3 !== this && e3.onMouseOut(), this.options.events.mouseOver && O(this, "mouseOver"), this.setState("hover"), t3.hoverSeries = this;
          }
          onMouseOut() {
            let t3 = this.options, e3 = this.chart, i3 = e3.tooltip, s2 = e3.hoverPoint;
            e3.hoverSeries = null, s2 && s2.onMouseOut(), this && t3.events.mouseOut && O(this, "mouseOut"), i3 && !this.stickyTracking && (!i3.shared || this.noSharedTooltip) && i3.hide(), e3.series.forEach(function(t4) {
              t4.setState("", true);
            });
          }
          setState(t3, e3) {
            let i3 = this, s2 = i3.options, o2 = i3.graph, r2 = s2.inactiveOtherPoints, n2 = s2.states, a2 = z(n2[t3 || "normal"] && n2[t3 || "normal"].animation, i3.chart.options.chart.animation), l2 = s2.lineWidth, h2 = s2.opacity;
            if (t3 = t3 || "", i3.state !== t3 && ([i3.group, i3.markerGroup, i3.dataLabelsGroup].forEach(function(e4) {
              e4 && (i3.state && e4.removeClass("highcharts-series-" + i3.state), t3 && e4.addClass("highcharts-series-" + t3));
            }), i3.state = t3, !i3.chart.styledMode)) {
              if (n2[t3] && false === n2[t3].enabled) return;
              if (t3 && (l2 = n2[t3].lineWidth || l2 + (n2[t3].lineWidthPlus || 0), h2 = z(n2[t3].opacity, h2)), o2 && !o2.dashstyle && I(l2)) for (let t4 of [o2, ...this.zones.map((t5) => t5.graph)]) t4?.animate({
                "stroke-width": l2
              }, a2);
              r2 || [i3.group, i3.markerGroup, i3.dataLabelsGroup, i3.labelBySeries].forEach(function(t4) {
                t4 && t4.animate({
                  opacity: h2
                }, a2);
              });
            }
            e3 && r2 && i3.points && i3.setAllPointsToState(t3 || void 0);
          }
          setAllPointsToState(t3) {
            this.points.forEach(function(e3) {
              e3.setState && e3.setState(t3);
            });
          }
          setVisible(t3, e3) {
            let i3 = this, s2 = i3.chart, o2 = s2.options.chart.ignoreHiddenSeries, r2 = i3.visible;
            i3.visible = t3 = i3.options.visible = i3.userOptions.visible = void 0 === t3 ? !r2 : t3;
            let n2 = t3 ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((t4) => {
              i3[t4]?.[n2]();
            }), (s2.hoverSeries === i3 || s2.hoverPoint?.series === i3) && i3.onMouseOut(), i3.legendItem && s2.legend.colorizeItem(i3, t3), i3.isDirty = true, i3.options.stacking && s2.series.forEach((t4) => {
              t4.options.stacking && t4.visible && (t4.isDirty = true);
            }), i3.linkedSeries.forEach((e4) => {
              e4.setVisible(t3, false);
            }), o2 && (s2.isDirtyBox = true), O(i3, n2), false !== e3 && s2.redraw();
          }
          show() {
            this.setVisible(true);
          }
          hide() {
            this.setVisible(false);
          }
          select(t3) {
            this.selected = t3 = this.options.selected = void 0 === t3 ? !this.selected : t3, this.checkbox && (this.checkbox.checked = t3), O(this, t3 ? "select" : "unselect");
          }
          shouldShowTooltip(t3, e3, i3 = {}) {
            return i3.series = this, i3.visiblePlotOnly = true, this.chart.isInsidePlot(t3, e3, i3);
          }
          drawLegendSymbol(t3, e3) {
            o[this.options.legendSymbol || "rectangle"]?.call(this, t3, e3);
          }
        }
        return X.defaultOptions = n, X.types = a.seriesTypes, X.registerType = a.registerSeriesType, T(X.prototype, {
          axisTypes: ["xAxis", "yAxis"],
          coll: "series",
          colorCounter: 0,
          directTouch: false,
          invertible: true,
          isCartesian: true,
          kdAxisArray: ["clientX", "plotY"],
          parallelArrays: ["x", "y"],
          pointClass: r,
          requireSorting: true,
          sorted: true
        }), a.series = X, X;
      }), i(e, "Core/Legend/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/Point.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a) {
        var l;
        let {
          animObject: h,
          setAnimation: d
        } = t2, {
          registerEventOptions: c
        } = e2, {
          composed: p,
          marginNames: u
        } = i2, {
          distribute: g
        } = r, {
          format: f
        } = n, {
          addEvent: m,
          createElement: x,
          css: y,
          defined: b,
          discardElement: v,
          find: M,
          fireEvent: k,
          isNumber: S,
          merge: C,
          pick: w,
          pushUnique: A,
          relativeLength: T,
          stableSort: P,
          syncTimeout: O
        } = a;
        class L {
          constructor(t3, e3) {
            this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t3, this.setOptions(e3), e3.enabled && (this.render(), c(this, e3), m(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            })), m(this.chart, "render", () => {
              this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
            });
          }
          setOptions(t3) {
            let e3 = w(t3.padding, 8);
            this.options = t3, this.chart.styledMode || (this.itemStyle = t3.itemStyle, this.itemHiddenStyle = C(this.itemStyle, t3.itemHiddenStyle)), this.itemMarginTop = t3.itemMarginTop, this.itemMarginBottom = t3.itemMarginBottom, this.padding = e3, this.initialItemY = e3 - 5, this.symbolWidth = w(t3.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t3.layout && !this.chart.inverted, this.baseline = void 0;
          }
          update(t3, e3) {
            let i3 = this.chart;
            this.setOptions(C(true, this.options, t3)), "events" in this.options && c(this, this.options), this.destroy(), i3.isDirtyLegend = i3.isDirtyBox = true, w(e3, true) && i3.redraw(), k(this, "afterUpdate", {
              redraw: e3
            });
          }
          colorizeItem(t3, e3) {
            let {
              area: i3,
              group: s2,
              label: o2,
              line: r2,
              symbol: n2
            } = t3.legendItem || {};
            if (s2?.[e3 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
              let {
                itemHiddenStyle: s3 = {}
              } = this, a2 = s3.color, {
                fillColor: l2,
                fillOpacity: h2,
                lineColor: d2,
                marker: c2
              } = t3.options, p2 = (t4) => (!e3 && (t4.fill && (t4.fill = a2), t4.stroke && (t4.stroke = a2)), t4);
              o2?.css(C(e3 ? this.itemStyle : s3)), r2?.attr(p2({
                stroke: d2 || t3.color
              })), n2 && n2.attr(p2(c2 && n2.isMarker ? t3.pointAttribs() : {
                fill: t3.color
              })), i3?.attr(p2({
                fill: l2 || t3.color,
                "fill-opacity": l2 ? 1 : h2 ?? 0.75
              }));
            }
            k(this, "afterColorizeItem", {
              item: t3,
              visible: e3
            });
          }
          positionItems() {
            this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
          }
          positionItem(t3) {
            let {
              group: e3,
              x: i3 = 0,
              y: s2 = 0
            } = t3.legendItem || {}, o2 = this.options, r2 = o2.symbolPadding, n2 = !o2.rtl, a2 = t3.checkbox;
            if (e3 && e3.element) {
              let o3 = {
                translateX: n2 ? i3 : this.legendWidth - i3 - 2 * r2 - 4,
                translateY: s2
              };
              e3[b(e3.translateY) ? "animate" : "attr"](o3, void 0, () => {
                k(this, "afterPositionItem", {
                  item: t3
                });
              });
            }
            a2 && (a2.x = i3, a2.y = s2);
          }
          destroyItem(t3) {
            let e3 = t3.checkbox, i3 = t3.legendItem || {};
            for (let t4 of ["group", "label", "line", "symbol"]) i3[t4] && (i3[t4] = i3[t4].destroy());
            e3 && v(e3), t3.legendItem = void 0;
          }
          destroy() {
            for (let t3 of this.getAllItems()) this.destroyItem(t3);
            for (let t3 of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t3] && (this[t3] = this[t3].destroy());
            this.display = null;
          }
          positionCheckboxes() {
            let t3;
            let e3 = this.group && this.group.alignAttr, i3 = this.clipHeight || this.legendHeight, s2 = this.titleHeight;
            e3 && (t3 = e3.translateY, this.allItems.forEach(function(o2) {
              let r2;
              let n2 = o2.checkbox;
              n2 && (r2 = t3 + s2 + n2.y + (this.scrollOffset || 0) + 3, y(n2, {
                left: e3.translateX + o2.checkboxOffset + n2.x - 20 + "px",
                top: r2 + "px",
                display: this.proximate || r2 > t3 - 6 && r2 < t3 + i3 - 6 ? "" : "none"
              }));
            }, this));
          }
          renderTitle() {
            let t3 = this.options, e3 = this.padding, i3 = t3.title, s2, o2 = 0;
            i3.text && (this.title || (this.title = this.chart.renderer.label(i3.text, e3 - 3, e3 - 4, void 0, void 0, void 0, t3.useHTML, void 0, "legend-title").attr({
              zIndex: 1
            }), this.chart.styledMode || this.title.css(i3.style), this.title.add(this.group)), i3.width || this.title.css({
              width: this.maxLegendWidth + "px"
            }), o2 = (s2 = this.title.getBBox()).height, this.offsetWidth = s2.width, this.contentGroup.attr({
              translateY: o2
            })), this.titleHeight = o2;
          }
          setText(t3) {
            let e3 = this.options;
            t3.legendItem.label.attr({
              text: e3.labelFormat ? f(e3.labelFormat, t3, this.chart) : e3.labelFormatter.call(t3)
            });
          }
          renderItem(t3) {
            let e3 = t3.legendItem = t3.legendItem || {}, i3 = this.chart, s2 = i3.renderer, o2 = this.options, r2 = "horizontal" === o2.layout, n2 = this.symbolWidth, a2 = o2.symbolPadding || 0, l2 = this.itemStyle, h2 = this.itemHiddenStyle, d2 = r2 ? w(o2.itemDistance, 20) : 0, c2 = !o2.rtl, p2 = !t3.series, u2 = !p2 && t3.series.drawLegendSymbol ? t3.series : t3, g2 = u2.options, f2 = !!this.createCheckboxForItem && g2 && g2.showCheckbox, m2 = o2.useHTML, x2 = t3.options.className, y2 = e3.label, b2 = n2 + a2 + d2 + (f2 ? 20 : 0);
            !y2 && (e3.group = s2.g("legend-item").addClass("highcharts-" + u2.type + "-series highcharts-color-" + t3.colorIndex + (x2 ? " " + x2 : "") + (p2 ? " highcharts-series-" + t3.index : "")).attr({
              zIndex: 1
            }).add(this.scrollGroup), e3.label = y2 = s2.text("", c2 ? n2 + a2 : -a2, this.baseline || 0, m2), i3.styledMode || y2.css(C(t3.visible ? l2 : h2)), y2.attr({
              align: c2 ? "left" : "right",
              zIndex: 2
            }).add(e3.group), !this.baseline && (this.fontMetrics = s2.fontMetrics(y2), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y2.attr("y", this.baseline), this.symbolHeight = w(o2.symbolHeight, this.fontMetrics.f), o2.squareSymbol && (this.symbolWidth = w(o2.symbolWidth, Math.max(this.symbolHeight, 16)), b2 = this.symbolWidth + a2 + d2 + (f2 ? 20 : 0), c2 && y2.attr("x", this.symbolWidth + a2))), u2.drawLegendSymbol(this, t3), this.setItemEvents && this.setItemEvents(t3, y2, m2)), f2 && !t3.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t3), this.colorizeItem(t3, t3.visible), (i3.styledMode || !l2.width) && y2.css({
              width: (o2.itemWidth || this.widthOption || i3.spacingBox.width) - b2 + "px"
            }), this.setText(t3);
            let v2 = y2.getBBox(), M2 = this.fontMetrics && this.fontMetrics.h || 0;
            t3.itemWidth = t3.checkboxOffset = o2.itemWidth || e3.labelWidth || v2.width + b2, this.maxItemWidth = Math.max(this.maxItemWidth, t3.itemWidth), this.totalItemWidth += t3.itemWidth, this.itemHeight = t3.itemHeight = Math.round(e3.labelHeight || (v2.height > 1.5 * M2 ? v2.height : M2));
          }
          layoutItem(t3) {
            let e3 = this.options, i3 = this.padding, s2 = "horizontal" === e3.layout, o2 = t3.itemHeight, r2 = this.itemMarginBottom, n2 = this.itemMarginTop, a2 = s2 ? w(e3.itemDistance, 20) : 0, l2 = this.maxLegendWidth, h2 = e3.alignColumns && this.totalItemWidth > l2 ? this.maxItemWidth : t3.itemWidth, d2 = t3.legendItem || {};
            s2 && this.itemX - i3 + h2 > l2 && (this.itemX = i3, this.lastLineHeight && (this.itemY += n2 + this.lastLineHeight + r2), this.lastLineHeight = 0), this.lastItemY = n2 + this.itemY + r2, this.lastLineHeight = Math.max(o2, this.lastLineHeight), d2.x = this.itemX, d2.y = this.itemY, s2 ? this.itemX += h2 : (this.itemY += n2 + o2 + r2, this.lastLineHeight = o2), this.offsetWidth = this.widthOption || Math.max((s2 ? this.itemX - i3 - (t3.checkbox ? 0 : a2) : h2) + i3, this.offsetWidth);
          }
          getAllItems() {
            let t3 = [];
            return this.chart.series.forEach(function(e3) {
              let i3 = e3 && e3.options;
              e3 && w(i3.showInLegend, !b(i3.linkedTo) && void 0, true) && (t3 = t3.concat((e3.legendItem || {}).labels || ("point" === i3.legendType ? e3.data : e3)));
            }), k(this, "afterGetAllItems", {
              allItems: t3
            }), t3;
          }
          getAlignment() {
            let t3 = this.options;
            return this.proximate ? t3.align.charAt(0) + "tv" : t3.floating ? "" : t3.align.charAt(0) + t3.verticalAlign.charAt(0) + t3.layout.charAt(0);
          }
          adjustMargins(t3, e3) {
            let i3 = this.chart, s2 = this.options, o2 = this.getAlignment();
            o2 && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(r2, n2) {
              r2.test(o2) && !b(t3[n2]) && (i3[u[n2]] = Math.max(i3[u[n2]], i3.legend[(n2 + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][n2] * s2[n2 % 2 ? "x" : "y"] + w(s2.margin, 12) + e3[n2] + (i3.titleOffset[n2] || 0)));
            });
          }
          proximatePositions() {
            let t3;
            let e3 = this.chart, i3 = [], s2 = "left" === this.options.align;
            for (let o2 of (this.allItems.forEach(function(t4) {
              let o3, r2, n2 = s2, a2, l2;
              t4.yAxis && (t4.xAxis.options.reversed && (n2 = !n2), t4.points && (o3 = M(n2 ? t4.points : t4.points.slice(0).reverse(), function(t5) {
                return S(t5.plotY);
              })), r2 = this.itemMarginTop + t4.legendItem.label.getBBox().height + this.itemMarginBottom, l2 = t4.yAxis.top - e3.plotTop, a2 = t4.visible ? (o3 ? o3.plotY : t4.yAxis.height) + (l2 - 0.3 * r2) : l2 + t4.yAxis.height, i3.push({
                target: a2,
                size: r2,
                item: t4
              }));
            }, this), g(i3, e3.plotHeight))) t3 = o2.item.legendItem || {}, S(o2.pos) && (t3.y = e3.plotTop - e3.spacing[0] + o2.pos);
          }
          render() {
            let t3 = this.chart, e3 = t3.renderer, i3 = this.options, s2 = this.padding, o2 = this.getAllItems(), r2, n2, a2, l2 = this.group, h2, d2 = this.box;
            this.itemX = s2, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = T(i3.width, t3.spacingBox.width - s2), h2 = t3.spacingBox.width - 2 * s2 - i3.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (h2 /= 2), this.maxLegendWidth = this.widthOption || h2, l2 || (this.group = l2 = e3.g("legend").addClass(i3.className || "").attr({
              zIndex: 7
            }).add(), this.contentGroup = e3.g().attr({
              zIndex: 1
            }).add(l2), this.scrollGroup = e3.g().add(this.contentGroup)), this.renderTitle(), P(o2, (t4, e4) => (t4.options && t4.options.legendIndex || 0) - (e4.options && e4.options.legendIndex || 0)), i3.reversed && o2.reverse(), this.allItems = o2, this.display = r2 = !!o2.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, o2.forEach(this.renderItem, this), o2.forEach(this.layoutItem, this), n2 = (this.widthOption || this.offsetWidth) + s2, a2 = this.lastItemY + this.lastLineHeight + this.titleHeight, a2 = this.handleOverflow(a2) + s2, d2 || (this.box = d2 = e3.rect().addClass("highcharts-legend-box").attr({
              r: i3.borderRadius
            }).add(l2)), t3.styledMode || d2.attr({
              stroke: i3.borderColor,
              "stroke-width": i3.borderWidth || 0,
              fill: i3.backgroundColor || "none"
            }).shadow(i3.shadow), n2 > 0 && a2 > 0 && d2[d2.placed ? "animate" : "attr"](d2.crisp.call({}, {
              x: 0,
              y: 0,
              width: n2,
              height: a2
            }, d2.strokeWidth())), l2[r2 ? "show" : "hide"](), t3.styledMode && "none" === l2.getStyle("display") && (n2 = a2 = 0), this.legendWidth = n2, this.legendHeight = a2, r2 && this.align(), this.proximate || this.positionItems(), k(this, "afterRender");
          }
          align(t3 = this.chart.spacingBox) {
            let e3 = this.chart, i3 = this.options, s2 = t3.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && e3.titleOffset[0] > 0 ? s2 += e3.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e3.titleOffset[2] > 0 && (s2 -= e3.titleOffset[2]), s2 !== t3.y && (t3 = C(t3, {
              y: s2
            })), e3.hasRendered || (this.group.placed = false), this.group.align(C(i3, {
              width: this.legendWidth,
              height: this.legendHeight,
              verticalAlign: this.proximate ? "top" : i3.verticalAlign
            }), true, t3);
          }
          handleOverflow(t3) {
            let e3 = this, i3 = this.chart, s2 = i3.renderer, o2 = this.options, r2 = o2.y, n2 = "top" === o2.verticalAlign, a2 = this.padding, l2 = o2.maxHeight, h2 = o2.navigation, d2 = w(h2.animation, true), c2 = h2.arrowSize || 12, p2 = this.pages, u2 = this.allItems, g2 = function(t4) {
              "number" == typeof t4 ? M2.attr({
                height: t4
              }) : M2 && (e3.clipRect = M2.destroy(), e3.contentGroup.clip()), e3.contentGroup.div && (e3.contentGroup.div.style.clip = t4 ? "rect(" + a2 + "px,9999px," + (a2 + t4) + "px,0)" : "auto");
            }, f2 = function(t4) {
              return e3[t4] = s2.circle(0, 0, 1.3 * c2).translate(c2 / 2, c2 / 2).add(v2), i3.styledMode || e3[t4].attr("fill", "rgba(0,0,0,0.0001)"), e3[t4];
            }, m2, x2, y2, b2 = i3.spacingBox.height + (n2 ? -r2 : r2) - a2, v2 = this.nav, M2 = this.clipRect;
            return "horizontal" !== o2.layout || "middle" === o2.verticalAlign || o2.floating || (b2 /= 2), l2 && (b2 = Math.min(b2, l2)), p2.length = 0, t3 && b2 > 0 && t3 > b2 && false !== h2.enabled ? (this.clipHeight = m2 = Math.max(b2 - 20 - this.titleHeight - a2, 0), this.currentPage = w(this.currentPage, 1), this.fullHeight = t3, u2.forEach((t4, e4) => {
              let i4 = (y2 = t4.legendItem || {}).y || 0, s3 = Math.round(y2.label.getBBox().height), o3 = p2.length;
              (!o3 || i4 - p2[o3 - 1] > m2 && (x2 || i4) !== p2[o3 - 1]) && (p2.push(x2 || i4), o3++), y2.pageIx = o3 - 1, x2 && ((u2[e4 - 1].legendItem || {}).pageIx = o3 - 1), e4 === u2.length - 1 && i4 + s3 - p2[o3 - 1] > m2 && i4 > p2[o3 - 1] && (p2.push(i4), y2.pageIx = o3), i4 !== x2 && (x2 = i4);
            }), M2 || (M2 = e3.clipRect = s2.clipRect(0, a2 - 2, 9999, 0), e3.contentGroup.clip(M2)), g2(m2), v2 || (this.nav = v2 = s2.g().attr({
              zIndex: 1
            }).add(this.group), this.up = s2.symbol("triangle", 0, 0, c2, c2).add(v2), f2("upTracker").on("click", function() {
              e3.scroll(-1, d2);
            }), this.pager = s2.text("", 15, 10).addClass("highcharts-legend-navigation"), !i3.styledMode && h2.style && this.pager.css(h2.style), this.pager.add(v2), this.down = s2.symbol("triangle-down", 0, 0, c2, c2).add(v2), f2("downTracker").on("click", function() {
              e3.scroll(1, d2);
            })), e3.scroll(0), t3 = b2) : v2 && (g2(), this.nav = v2.destroy(), this.scrollGroup.attr({
              translateY: 1
            }), this.clipHeight = 0), t3;
          }
          scroll(t3, e3) {
            let i3 = this.chart, s2 = this.pages, o2 = s2.length, r2 = this.clipHeight, n2 = this.options.navigation, a2 = this.pager, l2 = this.padding, c2 = this.currentPage + t3;
            c2 > o2 && (c2 = o2), c2 > 0 && (void 0 !== e3 && d(e3, i3), this.nav.attr({
              translateX: l2,
              translateY: r2 + this.padding + 7 + this.titleHeight,
              visibility: "inherit"
            }), [this.up, this.upTracker].forEach(function(t4) {
              t4.attr({
                class: 1 === c2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
              });
            }), a2.attr({
              text: c2 + "/" + o2
            }), [this.down, this.downTracker].forEach(function(t4) {
              t4.attr({
                x: 18 + this.pager.getBBox().width,
                class: c2 === o2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
              });
            }, this), i3.styledMode || (this.up.attr({
              fill: 1 === c2 ? n2.inactiveColor : n2.activeColor
            }), this.upTracker.css({
              cursor: 1 === c2 ? "default" : "pointer"
            }), this.down.attr({
              fill: c2 === o2 ? n2.inactiveColor : n2.activeColor
            }), this.downTracker.css({
              cursor: c2 === o2 ? "default" : "pointer"
            })), this.scrollOffset = -s2[c2 - 1] + this.initialItemY, this.scrollGroup.animate({
              translateY: this.scrollOffset
            }), this.currentPage = c2, this.positionCheckboxes(), O(() => {
              k(this, "afterScroll", {
                currentPage: c2
              });
            }, h(w(e3, i3.renderer.globalAnimation, true)).duration));
          }
          setItemEvents(t3, e3, i3) {
            let r2 = this, n2 = t3.legendItem || {}, a2 = r2.chart.renderer.boxWrapper, l2 = t3 instanceof o, h2 = t3 instanceof s, d2 = "highcharts-legend-" + (l2 ? "point" : "series") + "-active", c2 = r2.chart.styledMode, p2 = i3 ? [e3, n2.symbol] : [n2.group], u2 = (e4) => {
              r2.allItems.forEach((i4) => {
                t3 !== i4 && [i4].concat(i4.linkedSeries || []).forEach((t4) => {
                  t4.setState(e4, !l2);
                });
              });
            };
            for (let i4 of p2) i4 && i4.on("mouseover", function() {
              t3.visible && u2("inactive"), t3.setState("hover"), t3.visible && a2.addClass(d2), c2 || e3.css(r2.options.itemHoverStyle);
            }).on("mouseout", function() {
              r2.chart.styledMode || e3.css(C(t3.visible ? r2.itemStyle : r2.itemHiddenStyle)), u2(""), a2.removeClass(d2), t3.setState();
            }).on("click", function(e4) {
              let i5 = function() {
                t3.setVisible && t3.setVisible(), u2(t3.visible ? "inactive" : "");
              };
              a2.removeClass(d2), k(r2, "itemClick", {
                browserEvent: e4,
                legendItem: t3
              }, i5), l2 ? t3.firePointEvent("legendItemClick", {
                browserEvent: e4
              }) : h2 && k(t3, "legendItemClick", {
                browserEvent: e4
              });
            });
          }
          createCheckboxForItem(t3) {
            t3.checkbox = x("input", {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: t3.selected,
              defaultChecked: t3.selected
            }, this.options.itemCheckboxStyle, this.chart.container), m(t3.checkbox, "click", function(e3) {
              let i3 = e3.target;
              k(t3.series || t3, "checkboxClick", {
                checked: i3.checked,
                item: t3
              }, function() {
                t3.select();
              });
            });
          }
        }
        return (l = L || (L = {})).compose = function(t3) {
          A(p, "Core.Legend") && m(t3, "beforeMargins", function() {
            this.legend = new l(this, this.options.legend);
          });
        }, L;
      }), i(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Axis/Tick.js"]], function(t2, e2, i2, s, o, r, n, a, l, h, d, c, p, u) {
        let {
          animate: g,
          animObject: f,
          setAnimation: m
        } = t2, {
          defaultOptions: x,
          defaultTime: y
        } = i2, {
          numberFormat: b
        } = s, {
          registerEventOptions: v
        } = o, {
          charts: M,
          doc: k,
          marginNames: S,
          svg: C,
          win: w
        } = r, {
          seriesTypes: A
        } = l, {
          addEvent: T,
          attr: P,
          createElement: O,
          css: L,
          defined: E,
          diffObjects: D,
          discardElement: B,
          erase: I,
          error: j,
          extend: R,
          find: G,
          fireEvent: z,
          getStyle: N,
          isArray: W,
          isNumber: H,
          isObject: X,
          isString: F,
          merge: U,
          objectEach: Y,
          pick: V,
          pInt: $,
          relativeLength: _,
          removeEvent: Z,
          splat: q,
          syncTimeout: K,
          uniqueKey: J
        } = c;
        class Q {
          static chart(t3, e3, i3) {
            return new Q(t3, e3, i3);
          }
          constructor(t3, e3, i3) {
            this.sharedClips = {};
            let s2 = [...arguments];
            (F(t3) || t3.nodeName) && (this.renderTo = s2.shift()), this.init(s2[0], s2[1]);
          }
          setZoomOptions() {
            let t3 = this.options.chart, e3 = t3.zooming;
            this.zooming = __spreadProps(__spreadValues({}, e3), {
              type: V(t3.zoomType, e3.type),
              key: V(t3.zoomKey, e3.key),
              pinchType: V(t3.pinchType, e3.pinchType),
              singleTouch: V(t3.zoomBySingleTouch, e3.singleTouch, false),
              resetButton: U(e3.resetButton, t3.resetZoomButton)
            });
          }
          init(t3, e3) {
            z(this, "init", {
              args: arguments
            }, function() {
              let i3 = U(x, t3), s2 = i3.chart;
              this.userOptions = R({}, t3), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e3, this.isResizing = 0, this.options = i3, this.axes = [], this.series = [], this.time = t3.time && Object.keys(t3.time).length ? new d(t3.time) : r.time, this.numberFormatter = s2.numberFormatter || b, this.styledMode = s2.styledMode, this.hasCartesianSeries = s2.showAxes, this.index = M.length, M.push(this), r.chartCount++, v(this, s2), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), z(this, "afterInit"), this.firstRender();
            });
          }
          initSeries(t3) {
            let e3 = this.options.chart, i3 = t3.type || e3.type, s2 = A[i3];
            s2 || j(17, true, this, {
              missingModuleFor: i3
            });
            let o2 = new s2();
            return "function" == typeof o2.init && o2.init(this, t3), o2;
          }
          setSortedData() {
            this.getSeriesOrderByLinks().forEach(function(t3) {
              t3.points || t3.data || !t3.enabledDataSorting || t3.setData(t3.options.data, false);
            });
          }
          getSeriesOrderByLinks() {
            return this.series.concat().sort(function(t3, e3) {
              return t3.linkedSeries.length || e3.linkedSeries.length ? e3.linkedSeries.length - t3.linkedSeries.length : 0;
            });
          }
          orderItems(t3, e3 = 0) {
            let i3 = this[t3], s2 = this.options[t3] = q(this.options[t3]).slice(), o2 = this.userOptions[t3] = this.userOptions[t3] ? q(this.userOptions[t3]).slice() : [];
            if (this.hasRendered && (s2.splice(e3), o2.splice(e3)), i3) for (let t4 = e3, r2 = i3.length; t4 < r2; ++t4) {
              let e4 = i3[t4];
              e4 && (e4.index = t4, e4 instanceof a && (e4.name = e4.getName()), e4.options.isInternal || (s2[t4] = e4.options, o2[t4] = e4.userOptions));
            }
          }
          isInsidePlot(t3, e3, i3 = {}) {
            let {
              inverted: s2,
              plotBox: o2,
              plotLeft: r2,
              plotTop: n2,
              scrollablePlotBox: a2
            } = this, {
              scrollLeft: l2 = 0,
              scrollTop: h2 = 0
            } = i3.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, d2 = i3.series, c2 = i3.visiblePlotOnly && a2 || o2, p2 = i3.inverted ? e3 : t3, u2 = i3.inverted ? t3 : e3, g2 = {
              x: p2,
              y: u2,
              isInsidePlot: true,
              options: i3
            };
            if (!i3.ignoreX) {
              let t4 = d2 && (s2 && !this.polar ? d2.yAxis : d2.xAxis) || {
                pos: r2,
                len: 1 / 0
              }, e4 = i3.paneCoordinates ? t4.pos + p2 : r2 + p2;
              e4 >= Math.max(l2 + r2, t4.pos) && e4 <= Math.min(l2 + r2 + c2.width, t4.pos + t4.len) || (g2.isInsidePlot = false);
            }
            if (!i3.ignoreY && g2.isInsidePlot) {
              let t4 = !s2 && i3.axis && !i3.axis.isXAxis && i3.axis || d2 && (s2 ? d2.xAxis : d2.yAxis) || {
                pos: n2,
                len: 1 / 0
              }, e4 = i3.paneCoordinates ? t4.pos + u2 : n2 + u2;
              e4 >= Math.max(h2 + n2, t4.pos) && e4 <= Math.min(h2 + n2 + c2.height, t4.pos + t4.len) || (g2.isInsidePlot = false);
            }
            return z(this, "afterIsInsidePlot", g2), g2.isInsidePlot;
          }
          redraw(t3) {
            z(this, "beforeRedraw");
            let e3 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i3 = this.series, s2 = this.pointer, o2 = this.legend, r2 = this.userOptions.legend, n2 = this.renderer, a2 = n2.isHidden(), l2 = [], h2, d2, c2, p2 = this.isDirtyBox, u2 = this.isDirtyLegend, g2;
            for (n2.rootFontSize = n2.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(false), m(!!this.hasRendered && t3, this), a2 && this.temporaryDisplay(), this.layOutTitles(false), c2 = i3.length; c2--; ) if (((g2 = i3[c2]).options.stacking || g2.options.centerInCategory) && (d2 = true, g2.isDirty)) {
              h2 = true;
              break;
            }
            if (h2) for (c2 = i3.length; c2--; ) (g2 = i3[c2]).options.stacking && (g2.isDirty = true);
            i3.forEach(function(t4) {
              t4.isDirty && ("point" === t4.options.legendType ? ("function" == typeof t4.updateTotals && t4.updateTotals(), u2 = true) : r2 && (r2.labelFormatter || r2.labelFormat) && (u2 = true)), t4.isDirtyData && z(t4, "updatedData");
            }), u2 && o2 && o2.options.enabled && (o2.render(), this.isDirtyLegend = false), d2 && this.getStacks(), e3.forEach(function(t4) {
              t4.updateNames(), t4.setScale();
            }), this.getMargins(), e3.forEach(function(t4) {
              t4.isDirty && (p2 = true);
            }), e3.forEach(function(t4) {
              let e4 = t4.min + "," + t4.max;
              t4.extKey !== e4 && (t4.extKey = e4, l2.push(function() {
                z(t4, "afterSetExtremes", R(t4.eventArgs, t4.getExtremes())), delete t4.eventArgs;
              })), (p2 || d2) && t4.redraw();
            }), p2 && this.drawChartBox(), z(this, "predraw"), i3.forEach(function(t4) {
              (p2 || t4.isDirty) && t4.visible && t4.redraw(), t4.isDirtyData = false;
            }), s2 && s2.reset(true), n2.draw(), z(this, "redraw"), z(this, "render"), a2 && this.temporaryDisplay(true), l2.forEach(function(t4) {
              t4.call();
            });
          }
          get(t3) {
            let e3 = this.series;
            function i3(e4) {
              return e4.id === t3 || e4.options && e4.options.id === t3;
            }
            let s2 = G(this.axes, i3) || G(this.series, i3);
            for (let t4 = 0; !s2 && t4 < e3.length; t4++) s2 = G(e3[t4].points || [], i3);
            return s2;
          }
          getAxes() {
            let t3 = this.userOptions;
            for (let i3 of (z(this, "getAxes"), ["xAxis", "yAxis"])) for (let s2 of t3[i3] = q(t3[i3] || {})) new e2(this, s2, i3);
            z(this, "afterGetAxes");
          }
          getSelectedPoints() {
            return this.series.reduce((t3, e3) => (e3.getPointsCollection().forEach((e4) => {
              V(e4.selectedStaging, e4.selected) && t3.push(e4);
            }), t3), []);
          }
          getSelectedSeries() {
            return this.series.filter(function(t3) {
              return t3.selected;
            });
          }
          setTitle(t3, e3, i3) {
            this.applyDescription("title", t3), this.applyDescription("subtitle", e3), this.applyDescription("caption", void 0), this.layOutTitles(i3);
          }
          applyDescription(t3, e3) {
            let i3 = this, s2 = this.options[t3] = U(this.options[t3], e3), o2 = this[t3];
            o2 && e3 && (this[t3] = o2 = o2.destroy()), s2 && !o2 && ((o2 = this.renderer.text(s2.text, 0, 0, s2.useHTML).attr({
              align: s2.align,
              class: "highcharts-" + t3,
              zIndex: s2.zIndex || 4
            }).add()).update = function(e4, s3) {
              i3.applyDescription(t3, e4), i3.layOutTitles(s3);
            }, this.styledMode || o2.css(R("title" === t3 ? {
              fontSize: this.options.isStock ? "1em" : "1.2em"
            } : {}, s2.style)), this[t3] = o2);
          }
          layOutTitles(t3 = true) {
            let e3 = [0, 0, 0], i3 = this.renderer, s2 = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function(t4) {
              let o3 = this[t4], r2 = this.options[t4], n2 = r2.verticalAlign || "top", a2 = "title" === t4 ? "top" === n2 ? -3 : 0 : "top" === n2 ? e3[0] + 2 : 0;
              if (o3) {
                o3.css({
                  width: (r2.width || s2.width + (r2.widthAdjust || 0)) + "px"
                });
                let t5 = i3.fontMetrics(o3).b, l2 = Math.round(o3.getBBox(r2.useHTML).height);
                o3.align(R({
                  y: "bottom" === n2 ? t5 : a2 + t5,
                  height: l2
                }, r2), false, "spacingBox"), r2.floating || ("top" === n2 ? e3[0] = Math.ceil(e3[0] + l2) : "bottom" === n2 && (e3[2] = Math.ceil(e3[2] + l2)));
              }
            }, this), e3[0] && "top" === (this.options.title.verticalAlign || "top") && (e3[0] += this.options.title.margin), e3[2] && "bottom" === this.options.caption.verticalAlign && (e3[2] += this.options.caption.margin);
            let o2 = !this.titleOffset || this.titleOffset.join(",") !== e3.join(",");
            this.titleOffset = e3, z(this, "afterLayOutTitles"), !this.isDirtyBox && o2 && (this.isDirtyBox = this.isDirtyLegend = o2, this.hasRendered && t3 && this.isDirtyBox && this.redraw());
          }
          getContainerBox() {
            return {
              width: N(this.renderTo, "width", true) || 0,
              height: N(this.renderTo, "height", true) || 0
            };
          }
          getChartSize() {
            let t3 = this.options.chart, e3 = t3.width, i3 = t3.height, s2 = this.getContainerBox();
            this.chartWidth = Math.max(0, e3 || s2.width || 600), this.chartHeight = Math.max(0, _(i3, this.chartWidth) || (s2.height > 1 ? s2.height : 400)), this.containerBox = s2;
          }
          temporaryDisplay(t3) {
            let e3 = this.renderTo, i3;
            if (t3) for (; e3 && e3.style; ) e3.hcOrigStyle && (L(e3, e3.hcOrigStyle), delete e3.hcOrigStyle), e3.hcOrigDetached && (k.body.removeChild(e3), e3.hcOrigDetached = false), e3 = e3.parentNode;
            else for (; e3 && e3.style && (k.body.contains(e3) || e3.parentNode || (e3.hcOrigDetached = true, k.body.appendChild(e3)), ("none" === N(e3, "display", false) || e3.hcOricDetached) && (e3.hcOrigStyle = {
              display: e3.style.display,
              height: e3.style.height,
              overflow: e3.style.overflow
            }, i3 = {
              display: "block",
              overflow: "hidden"
            }, e3 !== this.renderTo && (i3.height = 0), L(e3, i3), e3.offsetWidth || e3.style.setProperty("display", "block", "important")), (e3 = e3.parentNode) !== k.body); ) ;
          }
          setClassName(t3) {
            this.container.className = "highcharts-container " + (t3 || "");
          }
          getContainer() {
            let t3 = this.options, e3 = t3.chart, i3 = "data-highcharts-chart", s2 = J(), o2, a2 = this.renderTo;
            a2 || (this.renderTo = a2 = e3.renderTo), F(a2) && (this.renderTo = a2 = k.getElementById(a2)), a2 || j(13, true, this);
            let l2 = $(P(a2, i3));
            H(l2) && M[l2] && M[l2].hasRendered && M[l2].destroy(), P(a2, i3, this.index), a2.innerHTML = p.emptyHTML, e3.skipClone || a2.offsetWidth || this.temporaryDisplay(), this.getChartSize();
            let d2 = this.chartHeight, c2 = this.chartWidth;
            L(a2, {
              overflow: "hidden",
              pointerEvents: r.isChrome ? "fill" : "auto"
            }), this.styledMode || (o2 = R({
              position: "relative",
              overflow: "hidden",
              width: c2 + "px",
              height: d2 + "px",
              textAlign: "left",
              lineHeight: "normal",
              zIndex: 0,
              "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
              userSelect: "none",
              "touch-action": "manipulation",
              outline: "none"
            }, e3.style || {}));
            let u2 = O("div", {
              id: s2
            }, o2, a2);
            this.container = u2, this.getChartSize(), c2 === this.chartWidth || (c2 = this.chartWidth, this.styledMode || L(u2, {
              width: V(e3.style?.width, c2 + "px")
            })), this.containerBox = this.getContainerBox(), this._cursor = u2.style.cursor;
            let g2 = e3.renderer || !C ? n.getRendererType(e3.renderer) : h;
            if (this.renderer = new g2(u2, c2, d2, void 0, e3.forExport, t3.exporting && t3.exporting.allowHTML, this.styledMode), m(void 0, this), this.setClassName(e3.className), this.styledMode) for (let e4 in t3.defs) this.renderer.definition(t3.defs[e4]);
            else this.renderer.setStyle(e3.style);
            this.renderer.chartIndex = this.index, z(this, "afterGetContainer");
          }
          getMargins(t3) {
            let {
              spacing: e3,
              margin: i3,
              titleOffset: s2
            } = this;
            this.resetMargins(), s2[0] && !E(i3[0]) && (this.plotTop = Math.max(this.plotTop, s2[0] + e3[0])), s2[2] && !E(i3[2]) && (this.marginBottom = Math.max(this.marginBottom, s2[2] + e3[2])), this.legend && this.legend.display && this.legend.adjustMargins(i3, e3), z(this, "getMargins"), t3 || this.getAxisMargins();
          }
          getAxisMargins() {
            let t3 = this, e3 = t3.axisOffset = [0, 0, 0, 0], i3 = t3.colorAxis, s2 = t3.margin, o2 = function(t4) {
              t4.forEach(function(t5) {
                t5.visible && t5.getOffset();
              });
            };
            t3.hasCartesianSeries ? o2(t3.axes) : i3 && i3.length && o2(i3), S.forEach(function(i4, o3) {
              E(s2[o3]) || (t3[i4] += e3[o3]);
            }), t3.setChartSize();
          }
          getOptions() {
            return D(this.userOptions, x);
          }
          reflow(t3) {
            let e3 = this, i3 = e3.containerBox, s2 = e3.getContainerBox();
            delete e3.pointer?.chartPosition, !e3.isPrinting && !e3.isResizing && i3 && s2.width && ((s2.width !== i3.width || s2.height !== i3.height) && (c.clearTimeout(e3.reflowTimeout), e3.reflowTimeout = K(function() {
              e3.container && e3.setSize(void 0, void 0, false);
            }, t3 ? 100 : 0)), e3.containerBox = s2);
          }
          setReflow() {
            let t3 = this, e3 = (e4) => {
              t3.options?.chart.reflow && t3.hasLoaded && t3.reflow(e4);
            };
            if ("function" == typeof ResizeObserver) new ResizeObserver(e3).observe(t3.renderTo);
            else {
              let t4 = T(w, "resize", e3);
              T(this, "destroy", t4);
            }
          }
          setSize(t3, e3, i3) {
            let s2 = this, o2 = s2.renderer;
            s2.isResizing += 1, m(i3, s2);
            let r2 = o2.globalAnimation;
            s2.oldChartHeight = s2.chartHeight, s2.oldChartWidth = s2.chartWidth, void 0 !== t3 && (s2.options.chart.width = t3), void 0 !== e3 && (s2.options.chart.height = e3), s2.getChartSize();
            let {
              chartWidth: n2,
              chartHeight: a2,
              scrollablePixelsX: l2 = 0,
              scrollablePixelsY: h2 = 0
            } = s2;
            (s2.isDirtyBox || n2 !== s2.oldChartWidth || a2 !== s2.oldChartHeight) && (s2.styledMode || (r2 ? g : L)(s2.container, {
              width: `${n2 + l2}px`,
              height: `${a2 + h2}px`
            }, r2), s2.setChartSize(true), o2.setSize(n2, a2, r2), s2.axes.forEach(function(t4) {
              t4.isDirty = true, t4.setScale();
            }), s2.isDirtyLegend = true, s2.isDirtyBox = true, s2.layOutTitles(), s2.getMargins(), s2.redraw(r2), s2.oldChartHeight = void 0, z(s2, "resize"), setTimeout(() => {
              s2 && z(s2, "endResize");
            }, f(r2).duration)), s2.isResizing -= 1;
          }
          setChartSize(t3) {
            let e3, i3, s2, o2;
            let {
              chartHeight: r2,
              chartWidth: n2,
              inverted: a2,
              spacing: l2,
              renderer: h2
            } = this, d2 = this.clipOffset, c2 = Math[a2 ? "floor" : "round"];
            this.plotLeft = e3 = Math.round(this.plotLeft), this.plotTop = i3 = Math.round(this.plotTop), this.plotWidth = s2 = Math.max(0, Math.round(n2 - e3 - this.marginRight)), this.plotHeight = o2 = Math.max(0, Math.round(r2 - i3 - this.marginBottom)), this.plotSizeX = a2 ? o2 : s2, this.plotSizeY = a2 ? s2 : o2, this.spacingBox = h2.spacingBox = {
              x: l2[3],
              y: l2[0],
              width: n2 - l2[3] - l2[1],
              height: r2 - l2[0] - l2[2]
            }, this.plotBox = h2.plotBox = {
              x: e3,
              y: i3,
              width: s2,
              height: o2
            }, d2 && (this.clipBox = {
              x: c2(d2[3]),
              y: c2(d2[0]),
              width: c2(this.plotSizeX - d2[1] - d2[3]),
              height: c2(this.plotSizeY - d2[0] - d2[2])
            }), t3 || (this.axes.forEach(function(t4) {
              t4.setAxisSize(), t4.setAxisTranslation();
            }), h2.alignElements()), z(this, "afterSetChartSize", {
              skipAxes: t3
            });
          }
          resetMargins() {
            z(this, "resetMargins");
            let t3 = this, e3 = t3.options.chart, i3 = e3.plotBorderWidth || 0, s2 = i3 / 2;
            ["margin", "spacing"].forEach(function(i4) {
              let s3 = e3[i4], o2 = X(s3) ? s3 : [s3, s3, s3, s3];
              ["Top", "Right", "Bottom", "Left"].forEach(function(s4, r2) {
                t3[i4][r2] = V(e3[i4 + s4], o2[r2]);
              });
            }), S.forEach(function(e4, i4) {
              t3[e4] = V(t3.margin[i4], t3.spacing[i4]);
            }), t3.axisOffset = [0, 0, 0, 0], t3.clipOffset = [s2, s2, s2, s2], t3.plotBorderWidth = i3;
          }
          drawChartBox() {
            let t3 = this.options.chart, e3 = this.renderer, i3 = this.chartWidth, s2 = this.chartHeight, o2 = this.styledMode, r2 = this.plotBGImage, n2 = t3.backgroundColor, a2 = t3.plotBackgroundColor, l2 = t3.plotBackgroundImage, h2 = this.plotLeft, d2 = this.plotTop, c2 = this.plotWidth, p2 = this.plotHeight, u2 = this.plotBox, g2 = this.clipRect, f2 = this.clipBox, m2 = this.chartBackground, x2 = this.plotBackground, y2 = this.plotBorder, b2, v2, M2, k2 = "animate";
            m2 || (this.chartBackground = m2 = e3.rect().addClass("highcharts-background").add(), k2 = "attr"), o2 ? b2 = v2 = m2.strokeWidth() : (v2 = (b2 = t3.borderWidth || 0) + (t3.shadow ? 8 : 0), M2 = {
              fill: n2 || "none"
            }, (b2 || m2["stroke-width"]) && (M2.stroke = t3.borderColor, M2["stroke-width"] = b2), m2.attr(M2).shadow(t3.shadow)), m2[k2]({
              x: v2 / 2,
              y: v2 / 2,
              width: i3 - v2 - b2 % 2,
              height: s2 - v2 - b2 % 2,
              r: t3.borderRadius
            }), k2 = "animate", x2 || (k2 = "attr", this.plotBackground = x2 = e3.rect().addClass("highcharts-plot-background").add()), x2[k2](u2), !o2 && (x2.attr({
              fill: a2 || "none"
            }).shadow(t3.plotShadow), l2 && (r2 ? (l2 !== r2.attr("href") && r2.attr("href", l2), r2.animate(u2)) : this.plotBGImage = e3.image(l2, h2, d2, c2, p2).add())), g2 ? g2.animate({
              width: f2.width,
              height: f2.height
            }) : this.clipRect = e3.clipRect(f2), k2 = "animate", y2 || (k2 = "attr", this.plotBorder = y2 = e3.rect().addClass("highcharts-plot-border").attr({
              zIndex: 1
            }).add()), o2 || y2.attr({
              stroke: t3.plotBorderColor,
              "stroke-width": t3.plotBorderWidth || 0,
              fill: "none"
            }), y2[k2](y2.crisp({
              x: h2,
              y: d2,
              width: c2,
              height: p2
            }, -y2.strokeWidth())), this.isDirtyBox = false, z(this, "afterDrawChartBox");
          }
          propFromSeries() {
            let t3, e3, i3;
            let s2 = this, o2 = s2.options.chart, r2 = s2.options.series;
            ["inverted", "angular", "polar"].forEach(function(n2) {
              for (e3 = A[o2.type], i3 = o2[n2] || e3 && e3.prototype[n2], t3 = r2 && r2.length; !i3 && t3--; ) (e3 = A[r2[t3].type]) && e3.prototype[n2] && (i3 = true);
              s2[n2] = i3;
            });
          }
          linkSeries(t3) {
            let e3 = this, i3 = e3.series;
            i3.forEach(function(t4) {
              t4.linkedSeries.length = 0;
            }), i3.forEach(function(t4) {
              let {
                linkedTo: i4
              } = t4.options;
              if (F(i4)) {
                let s2;
                (s2 = ":previous" === i4 ? e3.series[t4.index - 1] : e3.get(i4)) && s2.linkedParent !== t4 && (s2.linkedSeries.push(t4), t4.linkedParent = s2, s2.enabledDataSorting && t4.setDataSortingOptions(), t4.visible = V(t4.options.visible, s2.options.visible, t4.visible));
              }
            }), z(this, "afterLinkSeries", {
              isUpdating: t3
            });
          }
          renderSeries() {
            this.series.forEach(function(t3) {
              t3.translate(), t3.render();
            });
          }
          render() {
            let t3 = this.axes, e3 = this.colorAxis, i3 = this.renderer, s2 = this.options.chart.axisLayoutRuns || 2, o2 = (t4) => {
              t4.forEach((t5) => {
                t5.visible && t5.render();
              });
            }, r2 = 0, n2 = true, a2, l2 = 0;
            for (let e4 of (this.setTitle(), z(this, "beforeMargins"), this.getStacks?.(), this.getMargins(true), this.setChartSize(), t3)) {
              let {
                options: t4
              } = e4, {
                labels: i4
              } = t4;
              if (this.hasCartesianSeries && e4.horiz && e4.visible && i4.enabled && e4.series.length && "colorAxis" !== e4.coll && !this.polar) {
                r2 = t4.tickLength, e4.createGroups();
                let s3 = new u(e4, 0, "", true), o3 = s3.createLabel("x", i4);
                if (s3.destroy(), o3 && V(i4.reserveSpace, !H(t4.crossing)) && (r2 = o3.getBBox().height + i4.distance + Math.max(t4.offset || 0, 0)), r2) {
                  o3?.destroy();
                  break;
                }
              }
            }
            for (this.plotHeight = Math.max(this.plotHeight - r2, 0); (n2 || a2 || s2 > 1) && l2 < s2; ) {
              let e4 = this.plotWidth, i4 = this.plotHeight;
              for (let e5 of t3) 0 === l2 ? e5.setScale() : (e5.horiz && n2 || !e5.horiz && a2) && e5.setTickInterval(true);
              0 === l2 ? this.getAxisMargins() : this.getMargins(), n2 = e4 / this.plotWidth > (l2 ? 1 : 1.1), a2 = i4 / this.plotHeight > (l2 ? 1 : 1.05), l2++;
            }
            this.drawChartBox(), this.hasCartesianSeries ? o2(t3) : e3 && e3.length && o2(e3), this.seriesGroup || (this.seriesGroup = i3.g("series-group").attr({
              zIndex: 3
            }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = true;
          }
          addCredits(t3) {
            let e3 = this, i3 = U(true, this.options.credits, t3);
            i3.enabled && !this.credits && (this.credits = this.renderer.text(i3.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
              i3.href && (w.location.href = i3.href);
            }).attr({
              align: i3.position.align,
              zIndex: 8
            }), e3.styledMode || this.credits.css(i3.style), this.credits.add().align(i3.position), this.credits.update = function(t4) {
              e3.credits = e3.credits.destroy(), e3.addCredits(t4);
            });
          }
          destroy() {
            let t3;
            let e3 = this, i3 = e3.axes, s2 = e3.series, o2 = e3.container, n2 = o2 && o2.parentNode;
            for (z(e3, "destroy"), e3.renderer.forExport ? I(M, e3) : M[e3.index] = void 0, r.chartCount--, e3.renderTo.removeAttribute("data-highcharts-chart"), Z(e3), t3 = i3.length; t3--; ) i3[t3] = i3[t3].destroy();
            for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t3 = s2.length; t3--; ) s2[t3] = s2[t3].destroy();
            ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(t4) {
              let i4 = e3[t4];
              i4 && i4.destroy && (e3[t4] = i4.destroy());
            }), o2 && (o2.innerHTML = p.emptyHTML, Z(o2), n2 && B(o2)), Y(e3, function(t4, i4) {
              delete e3[i4];
            });
          }
          firstRender() {
            let t3 = this, e3 = t3.options;
            t3.getContainer(), t3.resetMargins(), t3.setChartSize(), t3.propFromSeries(), t3.getAxes();
            let i3 = W(e3.series) ? e3.series : [];
            e3.series = [], i3.forEach(function(e4) {
              t3.initSeries(e4);
            }), t3.linkSeries(), t3.setSortedData(), z(t3, "beforeRender"), t3.render(), t3.pointer?.getChartPosition(), t3.renderer.imgCount || t3.hasLoaded || t3.onload(), t3.temporaryDisplay(true);
          }
          onload() {
            this.callbacks.concat([this.callback]).forEach(function(t3) {
              t3 && void 0 !== this.index && t3.apply(this, [this]);
            }, this), z(this, "load"), z(this, "render"), E(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = true;
          }
          warnIfA11yModuleNotLoaded() {
            let {
              options: t3,
              title: e3
            } = this;
            !t3 || this.accessibility || (this.renderer.boxWrapper.attr({
              role: "img",
              "aria-label": (e3 && e3.element.textContent || "").replace(/</g, "&lt;")
            }), t3.accessibility && false === t3.accessibility.enabled || j('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', false, this));
          }
          addSeries(t3, e3, i3) {
            let s2;
            let o2 = this;
            return t3 && (e3 = V(e3, true), z(o2, "addSeries", {
              options: t3
            }, function() {
              s2 = o2.initSeries(t3), o2.isDirtyLegend = true, o2.linkSeries(), s2.enabledDataSorting && s2.setData(t3.data, false), z(o2, "afterAddSeries", {
                series: s2
              }), e3 && o2.redraw(i3);
            })), s2;
          }
          addAxis(t3, e3, i3, s2) {
            return this.createAxis(e3 ? "xAxis" : "yAxis", {
              axis: t3,
              redraw: i3,
              animation: s2
            });
          }
          addColorAxis(t3, e3, i3) {
            return this.createAxis("colorAxis", {
              axis: t3,
              redraw: e3,
              animation: i3
            });
          }
          createAxis(t3, i3) {
            let s2 = new e2(this, i3.axis, t3);
            return V(i3.redraw, true) && this.redraw(i3.animation), s2;
          }
          showLoading(t3) {
            let e3 = this, i3 = e3.options, s2 = i3.loading, o2 = function() {
              r2 && L(r2, {
                left: e3.plotLeft + "px",
                top: e3.plotTop + "px",
                width: e3.plotWidth + "px",
                height: e3.plotHeight + "px"
              });
            }, r2 = e3.loadingDiv, n2 = e3.loadingSpan;
            r2 || (e3.loadingDiv = r2 = O("div", {
              className: "highcharts-loading highcharts-loading-hidden"
            }, null, e3.container)), n2 || (e3.loadingSpan = n2 = O("span", {
              className: "highcharts-loading-inner"
            }, null, r2), T(e3, "redraw", o2)), r2.className = "highcharts-loading", p.setElementHTML(n2, V(t3, i3.lang.loading, "")), e3.styledMode || (L(r2, R(s2.style, {
              zIndex: 10
            })), L(n2, s2.labelStyle), e3.loadingShown || (L(r2, {
              opacity: 0,
              display: ""
            }), g(r2, {
              opacity: s2.style.opacity || 0.5
            }, {
              duration: s2.showDuration || 0
            }))), e3.loadingShown = true, o2();
          }
          hideLoading() {
            let t3 = this.options, e3 = this.loadingDiv;
            e3 && (e3.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || g(e3, {
              opacity: 0
            }, {
              duration: t3.loading.hideDuration || 100,
              complete: function() {
                L(e3, {
                  display: "none"
                });
              }
            })), this.loadingShown = false;
          }
          update(t3, e3, i3, s2) {
            let o2, r2, n2;
            let a2 = this, l2 = {
              credits: "addCredits",
              title: "setTitle",
              subtitle: "setSubtitle",
              caption: "setCaption"
            }, h2 = t3.isResponsiveOptions, c2 = [];
            z(a2, "update", {
              options: t3
            }), h2 || a2.setResponsive(false, true), t3 = D(t3, a2.options), a2.userOptions = U(a2.userOptions, t3);
            let p2 = t3.chart;
            p2 && (U(true, a2.options.chart, p2), this.setZoomOptions(), "className" in p2 && a2.setClassName(p2.className), ("inverted" in p2 || "polar" in p2 || "type" in p2) && (a2.propFromSeries(), o2 = true), "alignTicks" in p2 && (o2 = true), "events" in p2 && v(this, p2), Y(p2, function(t4, e4) {
              -1 !== a2.propsRequireUpdateSeries.indexOf("chart." + e4) && (r2 = true), -1 !== a2.propsRequireDirtyBox.indexOf(e4) && (a2.isDirtyBox = true), -1 === a2.propsRequireReflow.indexOf(e4) || (a2.isDirtyBox = true, h2 || (n2 = true));
            }), !a2.styledMode && p2.style && a2.renderer.setStyle(a2.options.chart.style || {})), !a2.styledMode && t3.colors && (this.options.colors = t3.colors), t3.time && (this.time === y && (this.time = new d(t3.time)), U(true, a2.options.time, t3.time)), Y(t3, function(e4, i4) {
              a2[i4] && "function" == typeof a2[i4].update ? a2[i4].update(e4, false) : "function" == typeof a2[l2[i4]] ? a2[l2[i4]](e4) : "colors" !== i4 && -1 === a2.collectionsWithUpdate.indexOf(i4) && U(true, a2.options[i4], t3[i4]), "chart" !== i4 && -1 !== a2.propsRequireUpdateSeries.indexOf(i4) && (r2 = true);
            }), this.collectionsWithUpdate.forEach(function(e4) {
              t3[e4] && (q(t3[e4]).forEach(function(t4, s3) {
                let o3;
                let r3 = E(t4.id);
                r3 && (o3 = a2.get(t4.id)), !o3 && a2[e4] && (o3 = a2[e4][V(t4.index, s3)]) && (r3 && E(o3.options.id) || o3.options.isInternal) && (o3 = void 0), o3 && o3.coll === e4 && (o3.update(t4, false), i3 && (o3.touched = true)), !o3 && i3 && a2.collectionsWithInit[e4] && (a2.collectionsWithInit[e4][0].apply(a2, [t4].concat(a2.collectionsWithInit[e4][1] || []).concat([false])).touched = true);
              }), i3 && a2[e4].forEach(function(t4) {
                t4.touched || t4.options.isInternal ? delete t4.touched : c2.push(t4);
              }));
            }), c2.forEach(function(t4) {
              t4.chart && t4.remove && t4.remove(false);
            }), o2 && a2.axes.forEach(function(t4) {
              t4.update({}, false);
            }), r2 && a2.getSeriesOrderByLinks().forEach(function(t4) {
              t4.chart && t4.update({}, false);
            }, this);
            let u2 = p2 && p2.width, g2 = p2 && (F(p2.height) ? _(p2.height, u2 || a2.chartWidth) : p2.height);
            n2 || H(u2) && u2 !== a2.chartWidth || H(g2) && g2 !== a2.chartHeight ? a2.setSize(u2, g2, s2) : V(e3, true) && a2.redraw(s2), z(a2, "afterUpdate", {
              options: t3,
              redraw: e3,
              animation: s2
            });
          }
          setSubtitle(t3, e3) {
            this.applyDescription("subtitle", t3), this.layOutTitles(e3);
          }
          setCaption(t3, e3) {
            this.applyDescription("caption", t3), this.layOutTitles(e3);
          }
          showResetZoom() {
            let t3 = this, e3 = x.lang, i3 = t3.zooming.resetButton, s2 = i3.theme, o2 = "chart" === i3.relativeTo || "spacingBox" === i3.relativeTo ? null : "plotBox";
            function r2() {
              t3.zoomOut();
            }
            z(this, "beforeShowResetZoom", null, function() {
              t3.resetZoomButton = t3.renderer.button(e3.resetZoom, null, null, r2, s2).attr({
                align: i3.position.align,
                title: e3.resetZoomTitle
              }).addClass("highcharts-reset-zoom").add().align(i3.position, false, o2);
            }), z(this, "afterShowResetZoom");
          }
          zoomOut() {
            z(this, "selection", {
              resetSelection: true
            }, () => this.transform({
              reset: true,
              trigger: "zoom"
            }));
          }
          pan(t3, e3) {
            let i3 = this, s2 = "object" == typeof e3 ? e3 : {
              enabled: e3,
              type: "x"
            }, o2 = s2.type, r2 = o2 && i3[{
              x: "xAxis",
              xy: "axes",
              y: "yAxis"
            }[o2]].filter((t4) => t4.options.panningEnabled && !t4.options.isInternal), n2 = i3.options.chart;
            n2?.panning && (n2.panning = s2), z(this, "pan", {
              originalEvent: t3
            }, () => {
              i3.transform({
                axes: r2,
                event: t3,
                to: {
                  x: t3.chartX - (i3.mouseDownX || 0),
                  y: t3.chartY - (i3.mouseDownY || 0)
                },
                trigger: "pan"
              }), L(i3.container, {
                cursor: "move"
              });
            });
          }
          transform(t3) {
            let {
              axes: e3 = this.axes,
              event: i3,
              from: s2 = {},
              reset: o2,
              selection: r2,
              to: n2 = {},
              trigger: a2
            } = t3, {
              inverted: l2
            } = this, h2 = false, d2, c2;
            for (let t4 of (this.hoverPoints?.forEach((t5) => t5.setState()), e3)) {
              let {
                horiz: e4,
                len: p2,
                minPointOffset: u2 = 0,
                options: g2,
                reversed: f2
              } = t4, m2 = e4 ? "width" : "height", x2 = e4 ? "x" : "y", y2 = V(n2[m2], t4.len), b2 = V(s2[m2], t4.len), v2 = 10 > Math.abs(y2) ? 1 : y2 / b2, M2 = (s2[x2] || 0) + b2 / 2 - t4.pos, k2 = M2 - ((n2[x2] ?? t4.pos) + y2 / 2 - t4.pos) / v2, S2 = f2 && !l2 || !f2 && l2 ? -1 : 1;
              if (!o2 && (M2 < 0 || M2 > t4.len)) continue;
              let C2 = t4.toValue(k2, true) + (r2 ? 0 : u2 * S2), w2 = t4.toValue(k2 + p2 / v2, true) - (r2 ? 0 : u2 * S2 || 0), A2 = t4.allExtremes;
              if (C2 > w2 && ([C2, w2] = [w2, C2]), 1 === v2 && !o2 && "yAxis" === t4.coll && !A2) {
                for (let e5 of t4.series) {
                  let t5 = e5.getExtremes(e5.getProcessedData(true).yData, true);
                  A2 ?? (A2 = {
                    dataMin: Number.MAX_VALUE,
                    dataMax: -Number.MAX_VALUE
                  }), H(t5.dataMin) && H(t5.dataMax) && (A2.dataMin = Math.min(t5.dataMin, A2.dataMin), A2.dataMax = Math.max(t5.dataMax, A2.dataMax));
                }
                t4.allExtremes = A2;
              }
              let {
                dataMin: T2,
                dataMax: P2,
                min: O2,
                max: L2
              } = R(t4.getExtremes(), A2 || {}), D2 = T2 ?? g2.min, B2 = P2 ?? g2.max, I2 = w2 - C2, j2 = t4.categories ? 0 : Math.min(I2, B2 - D2), G2 = D2 - j2 * (E(g2.min) ? 0 : g2.minPadding), z2 = B2 + j2 * (E(g2.max) ? 0 : g2.maxPadding), N2 = t4.allowZoomOutside || 1 === v2 || "zoom" !== a2 && v2 > 1, W2 = Math.min(g2.min ?? G2, G2, N2 ? O2 : G2), X2 = Math.max(g2.max ?? z2, z2, N2 ? L2 : z2);
              (!t4.isOrdinal || 1 !== v2 || o2) && (C2 < W2 && (C2 = W2, v2 >= 1 && (w2 = C2 + I2)), w2 > X2 && (w2 = X2, v2 >= 1 && (C2 = w2 - I2)), (o2 || t4.series.length && (C2 !== O2 || w2 !== L2) && C2 >= W2 && w2 <= X2) && (r2 ? r2[t4.coll].push({
                axis: t4,
                min: C2,
                max: w2
              }) : (t4.isPanning = "zoom" !== a2, t4.isPanning && (c2 = true), t4.setExtremes(o2 ? void 0 : C2, o2 ? void 0 : w2, false, false, {
                move: k2,
                trigger: a2,
                scale: v2
              }), !o2 && (C2 > W2 || w2 < X2) && "mousewheel" !== a2 && (d2 = true)), h2 = true), i3 && (this[e4 ? "mouseDownX" : "mouseDownY"] = i3[e4 ? "chartX" : "chartY"]));
            }
            return h2 && (r2 ? z(this, "selection", r2, () => {
              delete t3.selection, t3.trigger = "zoom", this.transform(t3);
            }) : (!d2 || c2 || this.resetZoomButton ? !d2 && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw("zoom" === a2 && (this.options.chart.animation ?? this.pointCount < 100)))), h2;
          }
        }
        return R(Q.prototype, {
          callbacks: [],
          collectionsWithInit: {
            xAxis: [Q.prototype.addAxis, [true]],
            yAxis: [Q.prototype.addAxis, [false]],
            series: [Q.prototype.addSeries]
          },
          collectionsWithUpdate: ["xAxis", "yAxis", "series"],
          propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"],
          propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"],
          propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"]
        }), Q;
      }), i(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let {
          stop: o
        } = t2, {
          composed: r
        } = e2, {
          addEvent: n,
          createElement: a,
          css: l,
          defined: h,
          merge: d,
          pushUnique: c
        } = s;
        function p() {
          let t3 = this.scrollablePlotArea;
          (this.scrollablePixelsX || this.scrollablePixelsY) && !t3 && (this.scrollablePlotArea = t3 = new g(this)), t3?.applyFixed();
        }
        function u() {
          this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = true);
        }
        class g {
          static compose(t3, e3, i3) {
            c(r, this.compose) && (n(t3, "afterInit", u), n(e3, "afterSetChartSize", (t4) => this.afterSetSize(t4.target, t4)), n(e3, "render", p), n(i3, "show", u));
          }
          static afterSetSize(t3, e3) {
            let i3, s2, o2;
            let {
              minWidth: r2,
              minHeight: n2
            } = t3.options.chart.scrollablePlotArea || {}, {
              clipBox: a2,
              plotBox: l2,
              inverted: c2,
              renderer: p2
            } = t3;
            if (!p2.forExport && (r2 ? (t3.scrollablePixelsX = i3 = Math.max(0, r2 - t3.chartWidth), i3 && (t3.scrollablePlotBox = d(t3.plotBox), l2.width = t3.plotWidth += i3, a2[c2 ? "height" : "width"] += i3, o2 = true)) : n2 && (t3.scrollablePixelsY = s2 = Math.max(0, n2 - t3.chartHeight), h(s2) && (t3.scrollablePlotBox = d(t3.plotBox), l2.height = t3.plotHeight += s2, a2[c2 ? "width" : "height"] += s2, o2 = false)), h(o2) && !e3.skipAxes)) for (let e4 of t3.axes) e4.horiz === o2 && (e4.setAxisSize(), e4.setAxisTranslation());
          }
          constructor(t3) {
            let e3;
            let s2 = t3.options.chart, o2 = i2.getRendererType(), r2 = s2.scrollablePlotArea || {}, h2 = this.moveFixedElements.bind(this), d2 = {
              WebkitOverflowScrolling: "touch",
              overflowX: "hidden",
              overflowY: "hidden"
            };
            t3.scrollablePixelsX && (d2.overflowX = "auto"), t3.scrollablePixelsY && (d2.overflowY = "auto"), this.chart = t3;
            let c2 = this.parentDiv = a("div", {
              className: "highcharts-scrolling-parent"
            }, {
              position: "relative"
            }, t3.renderTo), p2 = this.scrollingContainer = a("div", {
              className: "highcharts-scrolling"
            }, d2, c2), u2 = this.innerContainer = a("div", {
              className: "highcharts-inner-container"
            }, void 0, p2), g2 = this.fixedDiv = a("div", {
              className: "highcharts-fixed"
            }, {
              position: "absolute",
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: (s2.style?.zIndex || 0) + 2,
              top: 0
            }, void 0, true), f = this.fixedRenderer = new o2(g2, t3.chartWidth, t3.chartHeight, s2.style);
            this.mask = f.path().attr({
              fill: s2.backgroundColor || "#fff",
              "fill-opacity": r2.opacity ?? 0.85,
              zIndex: -1
            }).addClass("highcharts-scrollable-mask").add(), p2.parentNode.insertBefore(g2, p2), l(t3.renderTo, {
              overflow: "visible"
            }), n(t3, "afterShowResetZoom", h2), n(t3, "afterApplyDrilldown", h2), n(t3, "afterLayOutTitles", h2), n(p2, "scroll", () => {
              let {
                pointer: i3,
                hoverPoint: s3
              } = t3;
              i3 && (delete i3.chartPosition, s3 && (e3 = s3), i3.runPointActions(void 0, e3, true));
            }), u2.appendChild(t3.container);
          }
          applyFixed() {
            let {
              chart: t3,
              fixedRenderer: e3,
              isDirty: i3,
              scrollingContainer: s2
            } = this, {
              axisOffset: r2,
              chartWidth: n2,
              chartHeight: a2,
              container: d2,
              plotHeight: c2,
              plotLeft: p2,
              plotTop: u2,
              plotWidth: g2,
              scrollablePixelsX: f = 0,
              scrollablePixelsY: m = 0
            } = t3, {
              scrollPositionX: x = 0,
              scrollPositionY: y = 0
            } = t3.options.chart.scrollablePlotArea || {}, b = n2 + f, v = a2 + m;
            e3.setSize(n2, a2), (i3 ?? true) && (this.isDirty = false, this.moveFixedElements()), o(t3.container), l(d2, {
              width: `${b}px`,
              height: `${v}px`
            }), t3.renderer.boxWrapper.attr({
              width: b,
              height: v,
              viewBox: [0, 0, b, v].join(" ")
            }), t3.chartBackground?.attr({
              width: b,
              height: v
            }), l(s2, {
              width: `${n2}px`,
              height: `${a2}px`
            }), h(i3) || (s2.scrollLeft = f * x, s2.scrollTop = m * y);
            let M = u2 - r2[0] - 1, k = p2 - r2[3] - 1, S = u2 + c2 + r2[2] + 1, C = p2 + g2 + r2[1] + 1, w = p2 + g2 - f, A = u2 + c2 - m, T = [["M", 0, 0]];
            f ? T = [["M", 0, M], ["L", p2 - 1, M], ["L", p2 - 1, S], ["L", 0, S], ["Z"], ["M", w, M], ["L", n2, M], ["L", n2, S], ["L", w, S], ["Z"]] : m && (T = [["M", k, 0], ["L", k, u2 - 1], ["L", C, u2 - 1], ["L", C, 0], ["Z"], ["M", k, A], ["L", k, a2], ["L", C, a2], ["L", C, A], ["Z"]]), "adjustHeight" !== t3.redrawTrigger && this.mask.attr({
              d: T
            });
          }
          moveFixedElements() {
            let t3;
            let {
              container: e3,
              inverted: i3,
              scrollablePixelsX: s2,
              scrollablePixelsY: o2
            } = this.chart, r2 = this.fixedRenderer, n2 = g.fixedSelectors;
            for (let a2 of (s2 && !i3 ? t3 = ".highcharts-yaxis" : s2 && i3 ? t3 = ".highcharts-xaxis" : o2 && !i3 ? t3 = ".highcharts-xaxis" : o2 && i3 && (t3 = ".highcharts-yaxis"), t3 && n2.push(`${t3}:not(.highcharts-radial-axis)`, `${t3}-labels:not(.highcharts-radial-axis-labels)`), n2)) [].forEach.call(e3.querySelectorAll(a2), (t4) => {
              (t4.namespaceURI === r2.SVG_NS ? r2.box : r2.box.parentNode).appendChild(t4), t4.style.pointerEvents = "auto";
            });
          }
        }
        return g.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"], g;
      }), i(e, "Core/Axis/Stacking/StackItem.js", [e["Core/Templating.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          format: s
        } = t2, {
          series: o
        } = e2, {
          destroyObjectProperties: r,
          fireEvent: n,
          isNumber: a,
          pick: l
        } = i2;
        return class {
          constructor(t3, e3, i3, s2, o2) {
            let r2 = t3.chart.inverted, n2 = t3.reversed;
            this.axis = t3;
            let a2 = this.isNegative = !!i3 != !!n2;
            this.options = e3 = e3 || {}, this.x = s2, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = false, this.stack = o2, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
              align: e3.align || (r2 ? a2 ? "left" : "right" : "center"),
              verticalAlign: e3.verticalAlign || (r2 ? "middle" : a2 ? "bottom" : "top"),
              y: e3.y,
              x: e3.x
            }, this.textAlign = e3.textAlign || (r2 ? a2 ? "right" : "left" : "center");
          }
          destroy() {
            r(this, this.axis);
          }
          render(t3) {
            let e3 = this.axis.chart, i3 = this.options, o2 = i3.format, r2 = o2 ? s(o2, this, e3) : i3.formatter.call(this);
            if (this.label) this.label.attr({
              text: r2,
              visibility: "hidden"
            });
            else {
              this.label = e3.renderer.label(r2, null, void 0, i3.shape, void 0, void 0, i3.useHTML, false, "stack-labels");
              let s2 = {
                r: i3.borderRadius || 0,
                text: r2,
                padding: l(i3.padding, 5),
                visibility: "hidden"
              };
              e3.styledMode || (s2.fill = i3.backgroundColor, s2.stroke = i3.borderColor, s2["stroke-width"] = i3.borderWidth, this.label.css(i3.style || {})), this.label.attr(s2), this.label.added || this.label.add(t3);
            }
            this.label.labelrank = e3.plotSizeY, n(this, "afterRender");
          }
          setOffset(t3, e3, i3, s2, r2, h) {
            let {
              alignOptions: d,
              axis: c,
              label: p,
              options: u,
              textAlign: g
            } = this, f = c.chart, m = this.getStackBox({
              xOffset: t3,
              width: e3,
              boxBottom: i3,
              boxTop: s2,
              defaultX: r2,
              xAxis: h
            }), {
              verticalAlign: x
            } = d;
            if (p && m) {
              let t4 = p.getBBox(void 0, 0), e4 = p.padding, i4 = "justify" === l(u.overflow, "justify"), s3;
              d.x = u.x || 0, d.y = u.y || 0;
              let {
                x: r3,
                y: n2
              } = this.adjustStackPosition({
                labelBox: t4,
                verticalAlign: x,
                textAlign: g
              });
              m.x -= r3, m.y -= n2, p.align(d, false, m), (s3 = f.isInsidePlot(p.alignAttr.x + d.x + r3, p.alignAttr.y + d.y + n2)) || (i4 = false), i4 && o.prototype.justifyDataLabel.call(c, p, d, p.alignAttr, t4, m), p.attr({
                x: p.alignAttr.x,
                y: p.alignAttr.y,
                rotation: u.rotation,
                rotationOriginX: t4.width * {
                  left: 0,
                  center: 0.5,
                  right: 1
                }[u.textAlign || "center"],
                rotationOriginY: t4.height / 2
              }), l(!i4 && u.crop, true) && (s3 = a(p.x) && a(p.y) && f.isInsidePlot(p.x - e4 + (p.width || 0), p.y) && f.isInsidePlot(p.x + e4, p.y)), p[s3 ? "show" : "hide"]();
            }
            n(this, "afterSetOffset", {
              xOffset: t3,
              width: e3
            });
          }
          adjustStackPosition({
            labelBox: t3,
            verticalAlign: e3,
            textAlign: i3
          }) {
            let s2 = {
              bottom: 0,
              middle: 1,
              top: 2,
              right: 1,
              center: 0,
              left: -1
            }, o2 = s2[e3], r2 = s2[i3];
            return {
              x: t3.width / 2 + t3.width / 2 * r2,
              y: t3.height / 2 * o2
            };
          }
          getStackBox(t3) {
            let e3 = this.axis, i3 = e3.chart, {
              boxTop: s2,
              defaultX: o2,
              xOffset: r2,
              width: n2,
              boxBottom: h
            } = t3, d = e3.stacking.usePercentage ? 100 : l(s2, this.total, 0), c = e3.toPixels(d), p = t3.xAxis || i3.xAxis[0], u = l(o2, p.translate(this.x)) + r2, g = Math.abs(c - e3.toPixels(h || a(e3.min) && e3.logarithmic && e3.logarithmic.lin2log(e3.min) || 0)), f = i3.inverted, m = this.isNegative;
            return f ? {
              x: (m ? c : c - g) - i3.plotLeft,
              y: p.height - u - n2 + p.top - i3.plotTop,
              width: g,
              height: n2
            } : {
              x: u + p.transB - i3.plotLeft,
              y: (m ? c - g : c) - i3.plotTop,
              width: n2,
              height: g
            };
          }
        };
      }), i(e, "Core/Axis/Stacking/StackingAxis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        var r;
        let {
          getDeferredAnimation: n
        } = t2, {
          series: {
            prototype: a
          }
        } = i2, {
          addEvent: l,
          correctFloat: h,
          defined: d,
          destroyObjectProperties: c,
          fireEvent: p,
          isArray: u,
          isNumber: g,
          objectEach: f,
          pick: m
        } = o;
        function x() {
          let t3 = this.inverted;
          this.axes.forEach((t4) => {
            t4.stacking && t4.stacking.stacks && t4.hasVisibleSeries && (t4.stacking.oldStacks = t4.stacking.stacks);
          }), this.series.forEach((e3) => {
            let i3 = e3.xAxis && e3.xAxis.options || {};
            e3.options.stacking && e3.reserveSpace() && (e3.stackKey = [e3.type, m(e3.options.stack, ""), t3 ? i3.top : i3.left, t3 ? i3.height : i3.width].join(","));
          });
        }
        function y() {
          let t3 = this.stacking;
          if (t3) {
            let e3 = t3.stacks;
            f(e3, (t4, i3) => {
              c(t4), delete e3[i3];
            }), t3.stackTotalGroup?.destroy();
          }
        }
        function b() {
          this.stacking || (this.stacking = new w(this));
        }
        function v(t3, e3, i3, s2) {
          return !d(t3) || t3.x !== e3 || s2 && t3.stackKey !== s2 ? t3 = {
            x: e3,
            index: 0,
            key: s2,
            stackKey: s2
          } : t3.index++, t3.key = [i3, e3, t3.index].join(","), t3;
        }
        function M() {
          let t3;
          let e3 = this, i3 = e3.yAxis, s2 = e3.stackKey || "", o2 = i3.stacking.stacks, r2 = e3.processedXData, n2 = e3.options.stacking, a2 = e3[n2 + "Stacker"];
          a2 && [s2, "-" + s2].forEach((i4) => {
            let s3 = r2.length, n3, l2, h2;
            for (; s3--; ) n3 = r2[s3], t3 = e3.getStackIndicator(t3, n3, e3.index, i4), l2 = o2[i4]?.[n3], (h2 = l2?.points[t3.key || ""]) && a2.call(e3, h2, l2, s3);
          });
        }
        function k(t3, e3, i3) {
          let s2 = e3.total ? 100 / e3.total : 0;
          t3[0] = h(t3[0] * s2), t3[1] = h(t3[1] * s2), this.stackedYData[i3] = t3[1];
        }
        function S(t3) {
          (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && !this.options.stacking && this.chart.series.length > 1 ? a.setStackedPoints.call(this, t3, "group") : t3.stacking.resetStacks());
        }
        function C(t3, e3) {
          let i3, o2, r2, n2, a2, l2, c2, p2, g2;
          let f2 = e3 || this.options.stacking;
          if (!f2 || !this.reserveSpace() || ({
            group: "xAxis"
          }[f2] || "yAxis") !== t3.coll) return;
          let x2 = this.processedXData, y2 = this.processedYData, b2 = [], v2 = y2.length, M2 = this.options, k2 = M2.threshold || 0, S2 = M2.startFromThreshold ? k2 : 0, C2 = M2.stack, w2 = e3 ? `${this.type},${f2}` : this.stackKey || "", A = "-" + w2, T = this.negStacks, P = t3.stacking, O = P.stacks, L = P.oldStacks;
          for (P.stacksTouched += 1, c2 = 0; c2 < v2; c2++) {
            p2 = x2[c2], g2 = y2[c2], l2 = (i3 = this.getStackIndicator(i3, p2, this.index)).key || "", O[a2 = (o2 = T && g2 < (S2 ? 0 : k2)) ? A : w2] || (O[a2] = {}), O[a2][p2] || (L[a2]?.[p2] ? (O[a2][p2] = L[a2][p2], O[a2][p2].total = null) : O[a2][p2] = new s(t3, t3.options.stackLabels, !!o2, p2, C2)), r2 = O[a2][p2], null !== g2 ? (r2.points[l2] = r2.points[this.index] = [m(r2.cumulative, S2)], d(r2.cumulative) || (r2.base = l2), r2.touched = P.stacksTouched, i3.index > 0 && false === this.singleStacks && (r2.points[l2][0] = r2.points[this.index + "," + p2 + ",0"][0])) : (delete r2.points[l2], delete r2.points[this.index]);
            let e4 = r2.total || 0;
            "percent" === f2 ? (n2 = o2 ? w2 : A, e4 = T && O[n2]?.[p2] ? (n2 = O[n2][p2]).total = Math.max(n2.total || 0, e4) + Math.abs(g2) || 0 : h(e4 + (Math.abs(g2) || 0))) : "group" === f2 ? (u(g2) && (g2 = g2[0]), null !== g2 && e4++) : e4 = h(e4 + (g2 || 0)), "group" === f2 ? r2.cumulative = (e4 || 1) - 1 : r2.cumulative = h(m(r2.cumulative, S2) + (g2 || 0)), r2.total = e4, null !== g2 && (r2.points[l2].push(r2.cumulative), b2[c2] = r2.cumulative, r2.hasValidPoints = true);
          }
          "percent" === f2 && (P.usePercentage = true), "group" !== f2 && (this.stackedYData = b2), P.oldStacks = {};
        }
        class w {
          constructor(t3) {
            this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t3;
          }
          buildStacks() {
            let t3, e3;
            let i3 = this.axis, s2 = i3.series, o2 = "xAxis" === i3.coll, r2 = i3.options.reversedStacks, n2 = s2.length;
            for (this.resetStacks(), this.usePercentage = false, e3 = n2; e3--; ) t3 = s2[r2 ? e3 : n2 - e3 - 1], o2 && t3.setGroupedPoints(i3), t3.setStackedPoints(i3);
            if (!o2) for (e3 = 0; e3 < n2; e3++) s2[e3].modifyStacks();
            p(i3, "afterBuildStacks");
          }
          cleanStacks() {
            this.oldStacks && (this.stacks = this.oldStacks, f(this.stacks, (t3) => {
              f(t3, (t4) => {
                t4.cumulative = t4.total;
              });
            }));
          }
          resetStacks() {
            f(this.stacks, (t3) => {
              f(t3, (e3, i3) => {
                g(e3.touched) && e3.touched < this.stacksTouched ? (e3.destroy(), delete t3[i3]) : (e3.total = null, e3.cumulative = null);
              });
            });
          }
          renderStackTotals() {
            let t3 = this.axis, e3 = t3.chart, i3 = e3.renderer, s2 = this.stacks, o2 = n(e3, t3.options.stackLabels?.animation || false), r2 = this.stackTotalGroup = this.stackTotalGroup || i3.g("stack-labels").attr({
              zIndex: 6,
              opacity: 0
            }).add();
            r2.translate(e3.plotLeft, e3.plotTop), f(s2, (t4) => {
              f(t4, (t5) => {
                t5.render(r2);
              });
            }), r2.animate({
              opacity: 1
            }, o2);
          }
        }
        return (r || (r = {})).compose = function(t3, e3, i3) {
          let s2 = e3.prototype, o2 = i3.prototype;
          s2.getStacks || (l(t3, "init", b), l(t3, "destroy", y), s2.getStacks = x, o2.getStackIndicator = v, o2.modifyStacks = M, o2.percentStacker = k, o2.setGroupedPoints = S, o2.setStackedPoints = C);
        }, r;
      }), i(e, "Series/Line/LineSeries.js", [e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          defined: s,
          merge: o,
          isObject: r
        } = i2;
        class n extends t2 {
          drawGraph() {
            let t3 = this.options, e3 = (this.gappedPath || this.getGraphPath).call(this), i3 = this.chart.styledMode;
            [this, ...this.zones].forEach((s2, n2) => {
              let a, l = s2.graph, h = l ? "animate" : "attr", d = s2.dashStyle || t3.dashStyle;
              l ? (l.endX = this.preventGraphAnimation ? null : e3.xMap, l.animate({
                d: e3
              })) : e3.length && (s2.graph = l = this.chart.renderer.path(e3).addClass("highcharts-graph" + (n2 ? ` highcharts-zone-graph-${n2 - 1} ` : " ") + (n2 && s2.className || "")).attr({
                zIndex: 1
              }).add(this.group)), l && !i3 && (a = {
                stroke: !n2 && t3.lineColor || s2.color || this.color || "#cccccc",
                "stroke-width": t3.lineWidth || 0,
                fill: this.fillGraph && this.color || "none"
              }, d ? a.dashstyle = d : "square" !== t3.linecap && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), l[h](a).shadow(n2 < 2 && t3.shadow && o({
                filterUnits: "userSpaceOnUse"
              }, r(t3.shadow) ? t3.shadow : {}))), l && (l.startX = e3.xMap, l.isArea = e3.isArea);
            });
          }
          getGraphPath(t3, e3, i3) {
            let o2 = this, r2 = o2.options, n2 = [], a = [], l, h = r2.step, d = (t3 = t3 || o2.points).reversed;
            return d && t3.reverse(), (h = {
              right: 1,
              center: 2
            }[h] || h && 3) && d && (h = 4 - h), (t3 = this.getValidPoints(t3, false, !(r2.connectNulls && !e3 && !i3))).forEach(function(d2, c) {
              let p;
              let u = d2.plotX, g = d2.plotY, f = t3[c - 1], m = d2.isNull || "number" != typeof g;
              (d2.leftCliff || f && f.rightCliff) && !i3 && (l = true), m && !s(e3) && c > 0 ? l = !r2.connectNulls : m && !e3 ? l = true : (0 === c || l ? p = [["M", d2.plotX, d2.plotY]] : o2.getPointSpline ? p = [o2.getPointSpline(t3, d2, c)] : h ? (p = 1 === h ? [["L", f.plotX, g]] : 2 === h ? [["L", (f.plotX + u) / 2, f.plotY], ["L", (f.plotX + u) / 2, g]] : [["L", u, f.plotY]]).push(["L", u, g]) : p = [["L", u, g]], a.push(d2.x), h && (a.push(d2.x), 2 === h && a.push(d2.x)), n2.push.apply(n2, p), l = false);
            }), n2.xMap = a, o2.graphPath = n2, n2;
          }
        }
        return n.defaultOptions = o(t2.defaultOptions, {
          legendSymbol: "lineMarker"
        }), e2.registerSeriesType("line", n), n;
      }), i(e, "Series/Area/AreaSeriesDefaults.js", [], function() {
        return {
          threshold: 0,
          legendSymbol: "areaMarker"
        };
      }), i(e, "Series/Area/AreaSeries.js", [e["Series/Area/AreaSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          seriesTypes: {
            line: s
          }
        } = e2, {
          extend: o,
          merge: r,
          objectEach: n,
          pick: a
        } = i2;
        class l extends s {
          drawGraph() {
            this.areaPath = [], super.drawGraph.apply(this);
            let {
              areaPath: t3,
              options: e3
            } = this;
            [this, ...this.zones].forEach((i3, s2) => {
              let o2 = {}, r2 = i3.fillColor || e3.fillColor, n2 = i3.area, a2 = n2 ? "animate" : "attr";
              n2 ? (n2.endX = this.preventGraphAnimation ? null : t3.xMap, n2.animate({
                d: t3
              })) : (o2.zIndex = 0, (n2 = i3.area = this.chart.renderer.path(t3).addClass("highcharts-area" + (s2 ? ` highcharts-zone-area-${s2 - 1} ` : " ") + (s2 && i3.className || "")).add(this.group)).isArea = true), this.chart.styledMode || (o2.fill = r2 || i3.color || this.color, o2["fill-opacity"] = r2 ? 1 : e3.fillOpacity ?? 0.75, n2.css({
                pointerEvents: this.stickyTracking ? "none" : "auto"
              })), n2[a2](o2), n2.startX = t3.xMap, n2.shiftUnit = e3.step ? 2 : 1;
            });
          }
          getGraphPath(t3) {
            let e3, i3, o2;
            let r2 = s.prototype.getGraphPath, n2 = this.options, l2 = n2.stacking, h = this.yAxis, d = [], c = [], p = this.index, u = h.stacking.stacks[this.stackKey], g = n2.threshold, f = Math.round(h.getThreshold(n2.threshold)), m = a(n2.connectNulls, "percent" === l2), x = function(i4, s2, o3) {
              let r3 = t3[i4], n3 = l2 && u[r3.x].points[p], a2 = r3[o3 + "Null"] || 0, m2 = r3[o3 + "Cliff"] || 0, x2, y2, b2 = true;
              m2 || a2 ? (x2 = (a2 ? n3[0] : n3[1]) + m2, y2 = n3[0] + m2, b2 = !!a2) : !l2 && t3[s2] && t3[s2].isNull && (x2 = y2 = g), void 0 !== x2 && (c.push({
                plotX: e3,
                plotY: null === x2 ? f : h.getThreshold(x2),
                isNull: b2,
                isCliff: true
              }), d.push({
                plotX: e3,
                plotY: null === y2 ? f : h.getThreshold(y2),
                doCurve: false
              }));
            };
            t3 = t3 || this.points, l2 && (t3 = this.getStackPoints(t3));
            for (let s2 = 0, r3 = t3.length; s2 < r3; ++s2) l2 || (t3[s2].leftCliff = t3[s2].rightCliff = t3[s2].leftNull = t3[s2].rightNull = void 0), i3 = t3[s2].isNull, e3 = a(t3[s2].rectPlotX, t3[s2].plotX), o2 = l2 ? a(t3[s2].yBottom, f) : f, i3 && !m || (m || x(s2, s2 - 1, "left"), i3 && !l2 && m || (c.push(t3[s2]), d.push({
              x: s2,
              plotX: e3,
              plotY: o2
            })), m || x(s2, s2 + 1, "right"));
            let y = r2.call(this, c, true, true);
            d.reversed = true;
            let b = r2.call(this, d, true, true), v = b[0];
            v && "M" === v[0] && (b[0] = ["L", v[1], v[2]]);
            let M = y.concat(b);
            M.length && M.push(["Z"]);
            let k = r2.call(this, c, false, m);
            return this.chart.series.length > 1 && l2 && c.some((t4) => t4.isCliff) && (M.hasStackedCliffs = k.hasStackedCliffs = true), M.xMap = y.xMap, this.areaPath = M, k;
          }
          getStackPoints(t3) {
            let e3 = this, i3 = [], s2 = [], o2 = this.xAxis, r2 = this.yAxis, l2 = r2.stacking.stacks[this.stackKey], h = {}, d = r2.series, c = d.length, p = r2.options.reversedStacks ? 1 : -1, u = d.indexOf(e3);
            if (t3 = t3 || this.points, this.options.stacking) {
              for (let e4 = 0; e4 < t3.length; e4++) t3[e4].leftNull = t3[e4].rightNull = void 0, h[t3[e4].x] = t3[e4];
              n(l2, function(t4, e4) {
                null !== t4.total && s2.push(e4);
              }), s2.sort(function(t4, e4) {
                return t4 - e4;
              });
              let g = d.map((t4) => t4.visible);
              s2.forEach(function(t4, n2) {
                let f = 0, m, x;
                if (h[t4] && !h[t4].isNull) i3.push(h[t4]), [-1, 1].forEach(function(i4) {
                  let o3 = 1 === i4 ? "rightNull" : "leftNull", r3 = l2[s2[n2 + i4]], a2 = 0;
                  if (r3) {
                    let i5 = u;
                    for (; i5 >= 0 && i5 < c; ) {
                      let s3 = d[i5].index;
                      !(m = r3.points[s3]) && (s3 === e3.index ? h[t4][o3] = true : g[i5] && (x = l2[t4].points[s3]) && (a2 -= x[1] - x[0])), i5 += p;
                    }
                  }
                  h[t4][1 === i4 ? "rightCliff" : "leftCliff"] = a2;
                });
                else {
                  let e4 = u;
                  for (; e4 >= 0 && e4 < c; ) {
                    let i4 = d[e4].index;
                    if (m = l2[t4].points[i4]) {
                      f = m[1];
                      break;
                    }
                    e4 += p;
                  }
                  f = a(f, 0), f = r2.translate(f, 0, 1, 0, 1), i3.push({
                    isNull: true,
                    plotX: o2.translate(t4, 0, 0, 0, 1),
                    x: t4,
                    plotY: f,
                    yBottom: f
                  });
                }
              });
            }
            return i3;
          }
        }
        return l.defaultOptions = r(s.defaultOptions, t2), o(l.prototype, {
          singleStacks: false
        }), e2.registerSeriesType("area", l), l;
      }), i(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          line: i2
        } = t2.seriesTypes, {
          merge: s,
          pick: o
        } = e2;
        class r extends i2 {
          getPointSpline(t3, e3, i3) {
            let s2, r2, n, a;
            let l = e3.plotX || 0, h = e3.plotY || 0, d = t3[i3 - 1], c = t3[i3 + 1];
            function p(t4) {
              return t4 && !t4.isNull && false !== t4.doCurve && !e3.isCliff;
            }
            if (p(d) && p(c)) {
              let t4 = d.plotX || 0, i4 = d.plotY || 0, o2 = c.plotX || 0, p2 = c.plotY || 0, u2 = 0;
              s2 = (1.5 * l + t4) / 2.5, r2 = (1.5 * h + i4) / 2.5, n = (1.5 * l + o2) / 2.5, a = (1.5 * h + p2) / 2.5, n !== s2 && (u2 = (a - r2) * (n - l) / (n - s2) + h - a), r2 += u2, a += u2, r2 > i4 && r2 > h ? (r2 = Math.max(i4, h), a = 2 * h - r2) : r2 < i4 && r2 < h && (r2 = Math.min(i4, h), a = 2 * h - r2), a > p2 && a > h ? (a = Math.max(p2, h), r2 = 2 * h - a) : a < p2 && a < h && (a = Math.min(p2, h), r2 = 2 * h - a), e3.rightContX = n, e3.rightContY = a, e3.controlPoints = {
                low: [s2, r2],
                high: [n, a]
              };
            }
            let u = ["C", o(d.rightContX, d.plotX, 0), o(d.rightContY, d.plotY, 0), o(s2, l, 0), o(r2, h, 0), l, h];
            return d.rightContX = d.rightContY = void 0, u;
          }
        }
        return r.defaultOptions = s(i2.defaultOptions), t2.registerSeriesType("spline", r), r;
      }), i(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Spline/SplineSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          area: s,
          area: {
            prototype: o
          }
        } = e2.seriesTypes, {
          extend: r,
          merge: n
        } = i2;
        class a extends t2 {
        }
        return a.defaultOptions = n(t2.defaultOptions, s.defaultOptions), r(a.prototype, {
          getGraphPath: o.getGraphPath,
          getStackPoints: o.getStackPoints,
          drawGraph: o.drawGraph
        }), e2.registerSeriesType("areaspline", a), a;
      }), i(e, "Series/Column/ColumnSeriesDefaults.js", [], function() {
        return {
          borderRadius: 3,
          centerInCategory: false,
          groupPadding: 0.2,
          marker: null,
          pointPadding: 0.1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: {
            hover: {
              halo: false,
              brightness: 0.1
            },
            select: {
              color: "#cccccc",
              borderColor: "#000000"
            }
          },
          dataLabels: {
            align: void 0,
            verticalAlign: void 0,
            y: void 0
          },
          startFromThreshold: true,
          stickyTracking: false,
          tooltip: {
            distance: 6
          },
          threshold: 0,
          borderColor: "#ffffff"
        };
      }), i(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Series/Column/ColumnSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n) {
        let {
          animObject: a
        } = t2, {
          parse: l
        } = e2, {
          noop: h
        } = s, {
          clamp: d,
          crisp: c,
          defined: p,
          extend: u,
          fireEvent: g,
          isArray: f,
          isNumber: m,
          merge: x,
          pick: y,
          objectEach: b
        } = n;
        class v extends o {
          animate(t3) {
            let e3, i3;
            let s2 = this, o2 = this.yAxis, r2 = o2.pos, n2 = o2.reversed, l2 = s2.options, {
              clipOffset: h2,
              inverted: c2
            } = this.chart, p2 = {}, g2 = c2 ? "translateX" : "translateY";
            t3 && h2 ? (p2.scaleY = 1e-3, i3 = d(o2.toPixels(l2.threshold), r2, r2 + o2.len), c2 ? (i3 += n2 ? -Math.floor(h2[0]) : Math.ceil(h2[2]), p2.translateX = i3 - o2.len) : (i3 += n2 ? Math.ceil(h2[0]) : -Math.floor(h2[2]), p2.translateY = i3), s2.clipBox && s2.setClip(), s2.group.attr(p2)) : (e3 = Number(s2.group.attr(g2)), s2.group.animate({
              scaleY: 1
            }, u(a(s2.options.animation), {
              step: function(t4, i4) {
                s2.group && (p2[g2] = e3 + i4.pos * (r2 - e3), s2.group.attr(p2));
              }
            })));
          }
          init(t3, e3) {
            super.init.apply(this, arguments);
            let i3 = this;
            (t3 = i3.chart).hasRendered && t3.series.forEach(function(t4) {
              t4.type === i3.type && (t4.isDirty = true);
            });
          }
          getColumnMetrics() {
            let t3 = this, e3 = t3.options, i3 = t3.xAxis, s2 = t3.yAxis, o2 = i3.options.reversedStacks, r2 = i3.reversed && !o2 || !i3.reversed && o2, n2 = {}, a2, l2 = 0;
            false === e3.grouping ? l2 = 1 : t3.chart.series.forEach(function(e4) {
              let i4;
              let o3 = e4.yAxis, r3 = e4.options;
              e4.type === t3.type && e4.reserveSpace() && s2.len === o3.len && s2.pos === o3.pos && (r3.stacking && "group" !== r3.stacking ? (void 0 === n2[a2 = e4.stackKey] && (n2[a2] = l2++), i4 = n2[a2]) : false !== r3.grouping && (i4 = l2++), e4.columnIndex = i4);
            });
            let h2 = Math.min(Math.abs(i3.transA) * (!i3.brokenAxis?.hasBreaks && i3.ordinal?.slope || e3.pointRange || i3.closestPointRange || i3.tickInterval || 1), i3.len), d2 = h2 * e3.groupPadding, c2 = (h2 - 2 * d2) / (l2 || 1), p2 = Math.min(e3.maxPointWidth || i3.len, y(e3.pointWidth, c2 * (1 - 2 * e3.pointPadding))), u2 = (t3.columnIndex || 0) + (r2 ? 1 : 0);
            return t3.columnMetrics = {
              width: p2,
              offset: (c2 - p2) / 2 + (d2 + u2 * c2 - h2 / 2) * (r2 ? -1 : 1),
              paddedWidth: c2,
              columnCount: l2
            }, t3.columnMetrics;
          }
          crispCol(t3, e3, i3, s2) {
            let o2 = this.borderWidth, r2 = this.chart.inverted;
            return s2 = c(e3 + s2, o2, r2) - (e3 = c(e3, o2, r2)), this.options.crisp && (i3 = c(t3 + i3, o2) - (t3 = c(t3, o2))), {
              x: t3,
              y: e3,
              width: i3,
              height: s2
            };
          }
          adjustForMissingColumns(t3, e3, i3, s2) {
            if (!i3.isNull && s2.columnCount > 1) {
              let o2 = this.xAxis.series.filter((t4) => t4.visible).map((t4) => t4.index), r2 = 0, n2 = 0;
              b(this.xAxis.stacking?.stacks, (t4) => {
                if ("number" == typeof i3.x) {
                  let e4 = t4[i3.x.toString()];
                  if (e4 && f(e4.points[this.index])) {
                    let t5 = Object.keys(e4.points).filter((t6) => !t6.match(",") && e4.points[t6] && e4.points[t6].length > 1).map(parseFloat).filter((t6) => -1 !== o2.indexOf(t6)).sort((t6, e5) => e5 - t6);
                    r2 = t5.indexOf(this.index), n2 = t5.length;
                  }
                }
              }), r2 = this.xAxis.reversed ? n2 - 1 - r2 : r2;
              let a2 = (n2 - 1) * s2.paddedWidth + e3;
              t3 = (i3.plotX || 0) + a2 / 2 - e3 - r2 * s2.paddedWidth;
            }
            return t3;
          }
          translate() {
            let t3 = this, e3 = t3.chart, i3 = t3.options, s2 = t3.dense = t3.closestPointRange * t3.xAxis.transA < 2, r2 = t3.borderWidth = y(i3.borderWidth, s2 ? 0 : 1), n2 = t3.xAxis, a2 = t3.yAxis, l2 = i3.threshold, h2 = y(i3.minPointLength, 5), c2 = t3.getColumnMetrics(), u2 = c2.width, f2 = t3.pointXOffset = c2.offset, x2 = t3.dataMin, b2 = t3.dataMax, v2 = t3.translatedThreshold = a2.getThreshold(l2), M = t3.barW = Math.max(u2, 1 + 2 * r2);
            i3.pointPadding && (M = Math.ceil(M)), o.prototype.translate.apply(t3), t3.points.forEach(function(s3) {
              let o2 = y(s3.yBottom, v2), r3 = 999 + Math.abs(o2), g2 = s3.plotX || 0, k = d(s3.plotY, -r3, a2.len + r3), S, C = Math.min(k, o2), w = Math.max(k, o2) - C, A = u2, T = g2 + f2, P = M;
              h2 && Math.abs(w) < h2 && (w = h2, S = !a2.reversed && !s3.negative || a2.reversed && s3.negative, m(l2) && m(b2) && s3.y === l2 && b2 <= l2 && (a2.min || 0) < l2 && (x2 !== b2 || (a2.max || 0) <= l2) && (S = !S, s3.negative = !s3.negative), C = Math.abs(C - v2) > h2 ? o2 - h2 : v2 - (S ? h2 : 0)), p(s3.options.pointWidth) && (T -= Math.round(((A = P = Math.ceil(s3.options.pointWidth)) - u2) / 2)), i3.centerInCategory && !i3.stacking && (T = t3.adjustForMissingColumns(T, A, s3, c2)), s3.barX = T, s3.pointWidth = A, s3.tooltipPos = e3.inverted ? [d(a2.len + a2.pos - e3.plotLeft - k, a2.pos - e3.plotLeft, a2.len + a2.pos - e3.plotLeft), n2.len + n2.pos - e3.plotTop - T - P / 2, w] : [n2.left - e3.plotLeft + T + P / 2, d(k + a2.pos - e3.plotTop, a2.pos - e3.plotTop, a2.len + a2.pos - e3.plotTop), w], s3.shapeType = t3.pointClass.prototype.shapeType || "roundedRect", s3.shapeArgs = t3.crispCol(T, s3.isNull ? v2 : C, P, s3.isNull ? 0 : w);
            }), g(this, "afterColumnTranslate");
          }
          drawGraph() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          }
          pointAttribs(t3, e3) {
            let i3 = this.options, s2 = this.pointAttrToOptions || {}, o2 = s2.stroke || "borderColor", r2 = s2["stroke-width"] || "borderWidth", n2, a2, h2, d2 = t3 && t3.color || this.color, c2 = t3 && t3[o2] || i3[o2] || d2, p2 = t3 && t3.options.dashStyle || i3.dashStyle, u2 = t3 && t3[r2] || i3[r2] || this[r2] || 0, g2 = y(t3 && t3.opacity, i3.opacity, 1);
            t3 && this.zones.length && (a2 = t3.getZone(), d2 = t3.options.color || a2 && (a2.color || t3.nonZonedColor) || this.color, a2 && (c2 = a2.borderColor || c2, p2 = a2.dashStyle || p2, u2 = a2.borderWidth || u2)), e3 && t3 && (h2 = (n2 = x(i3.states[e3], t3.options.states && t3.options.states[e3] || {})).brightness, d2 = n2.color || void 0 !== h2 && l(d2).brighten(n2.brightness).get() || d2, c2 = n2[o2] || c2, u2 = n2[r2] || u2, p2 = n2.dashStyle || p2, g2 = y(n2.opacity, g2));
            let f2 = {
              fill: d2,
              stroke: c2,
              "stroke-width": u2,
              opacity: g2
            };
            return p2 && (f2.dashstyle = p2), f2;
          }
          drawPoints(t3 = this.points) {
            let e3;
            let i3 = this, s2 = this.chart, o2 = i3.options, r2 = s2.renderer, n2 = o2.animationLimit || 250;
            t3.forEach(function(t4) {
              let a2 = t4.plotY, l2 = t4.graphic, h2 = !!l2, d2 = l2 && s2.pointCount < n2 ? "animate" : "attr";
              m(a2) && null !== t4.y ? (e3 = t4.shapeArgs, l2 && t4.hasNewShapeType() && (l2 = l2.destroy()), i3.enabledDataSorting && (t4.startXPos = i3.xAxis.reversed ? -(e3 && e3.width || 0) : i3.xAxis.width), !l2 && (t4.graphic = l2 = r2[t4.shapeType](e3).add(t4.group || i3.group), l2 && i3.enabledDataSorting && s2.hasRendered && s2.pointCount < n2 && (l2.attr({
                x: t4.startXPos
              }), h2 = true, d2 = "animate")), l2 && h2 && l2[d2](x(e3)), s2.styledMode || l2[d2](i3.pointAttribs(t4, t4.selected && "select")).shadow(false !== t4.allowShadow && o2.shadow), l2 && (l2.addClass(t4.getClassName(), true), l2.attr({
                visibility: t4.visible ? "inherit" : "hidden"
              }))) : l2 && (t4.graphic = l2.destroy());
            });
          }
          drawTracker(t3 = this.points) {
            let e3;
            let i3 = this, s2 = i3.chart, o2 = s2.pointer, r2 = function(t4) {
              let e4 = o2?.getPointFromEvent(t4);
              o2 && e4 && i3.options.enableMouseTracking && (o2.isDirectTouch = true, e4.onMouseOver(t4));
            };
            t3.forEach(function(t4) {
              e3 = f(t4.dataLabels) ? t4.dataLabels : t4.dataLabel ? [t4.dataLabel] : [], t4.graphic && (t4.graphic.element.point = t4), e3.forEach(function(e4) {
                (e4.div || e4.element).point = t4;
              });
            }), i3._hasTracking || (i3.trackerGroups.forEach(function(t4) {
              i3[t4] && (i3[t4].addClass("highcharts-tracker").on("mouseover", r2).on("mouseout", function(t5) {
                o2?.onTrackerMouseOut(t5);
              }).on("touchstart", r2), !s2.styledMode && i3.options.cursor && i3[t4].css({
                cursor: i3.options.cursor
              }));
            }), i3._hasTracking = true), g(this, "afterDrawTracker");
          }
          remove() {
            let t3 = this, e3 = t3.chart;
            e3.hasRendered && e3.series.forEach(function(e4) {
              e4.type === t3.type && (e4.isDirty = true);
            }), o.prototype.remove.apply(t3, arguments);
          }
        }
        return v.defaultOptions = x(o.defaultOptions, i2), u(v.prototype, {
          directTouch: true,
          getSymbol: h,
          negStacks: true,
          trackerGroups: ["group", "dataLabelsGroup"]
        }), r.registerSeriesType("column", v), v;
      }), i(e, "Core/Series/DataLabel.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let {
          getDeferredAnimation: o
        } = t2, {
          format: r
        } = e2, {
          defined: n,
          extend: a,
          fireEvent: l,
          isArray: h,
          isString: d,
          merge: c,
          objectEach: p,
          pick: u,
          pInt: g,
          splat: f
        } = i2;
        return function(t3) {
          function e3() {
            return v(this).some((t4) => t4?.enabled);
          }
          function i3(t4, e4, i4, s3, o2) {
            let {
              chart: r2,
              enabledDataSorting: l2
            } = this, h2 = this.isCartesian && r2.inverted, d2 = t4.plotX, p2 = t4.plotY, g2 = i4.rotation || 0, f2 = n(d2) && n(p2) && r2.isInsidePlot(d2, Math.round(p2), {
              inverted: h2,
              paneCoordinates: true,
              series: this
            }), m2 = 0 === g2 && "justify" === u(i4.overflow, l2 ? "none" : "justify"), x2 = this.visible && false !== t4.visible && n(d2) && (t4.series.forceDL || l2 && !m2 || f2 || u(i4.inside, !!this.options.stacking) && s3 && r2.isInsidePlot(d2, h2 ? s3.x + 1 : s3.y + s3.height - 1, {
              inverted: h2,
              paneCoordinates: true,
              series: this
            })), y2 = t4.pos();
            if (x2 && y2) {
              var b2;
              let n2 = e4.getBBox(), d3 = e4.getBBox(void 0, 0), p3 = {
                right: 1,
                center: 0.5
              }[i4.align || 0] || 0, v2 = {
                bottom: 1,
                middle: 0.5
              }[i4.verticalAlign || 0] || 0;
              if (s3 = a({
                x: y2[0],
                y: Math.round(y2[1]),
                width: 0,
                height: 0
              }, s3 || {}), "plotEdges" === i4.alignTo && this.isCartesian && (s3[h2 ? "x" : "y"] = 0, s3[h2 ? "width" : "height"] = this.yAxis?.len || 0), a(i4, {
                width: n2.width,
                height: n2.height
              }), b2 = s3, l2 && this.xAxis && !m2 && this.setDataLabelStartPos(t4, e4, o2, f2, b2), e4.align(c(i4, {
                width: d3.width,
                height: d3.height
              }), false, s3, false), e4.alignAttr.x += p3 * (d3.width - n2.width), e4.alignAttr.y += v2 * (d3.height - n2.height), e4[e4.placed ? "animate" : "attr"]({
                x: e4.alignAttr.x + (n2.width - d3.width) / 2,
                y: e4.alignAttr.y + (n2.height - d3.height) / 2,
                rotationOriginX: (e4.width || 0) / 2,
                rotationOriginY: (e4.height || 0) / 2
              }), m2 && s3.height >= 0) this.justifyDataLabel(e4, i4, e4.alignAttr, n2, s3, o2);
              else if (u(i4.crop, true)) {
                let {
                  x: t5,
                  y: i5
                } = e4.alignAttr;
                x2 = r2.isInsidePlot(t5, i5, {
                  paneCoordinates: true,
                  series: this
                }) && r2.isInsidePlot(t5 + n2.width - 1, i5 + n2.height - 1, {
                  paneCoordinates: true,
                  series: this
                });
              }
              i4.shape && !g2 && e4[o2 ? "attr" : "animate"]({
                anchorX: y2[0],
                anchorY: y2[1]
              });
            }
            o2 && l2 && (e4.placed = false), x2 || l2 && !m2 ? (e4.show(), e4.placed = true) : (e4.hide(), e4.placed = false);
          }
          function s2() {
            return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
          }
          function m(t4) {
            let e4 = this.hasRendered || 0, i4 = this.initDataLabelsGroup().attr({
              opacity: +e4
            });
            return !e4 && i4 && (this.visible && i4.show(), this.options.animation ? i4.animate({
              opacity: 1
            }, t4) : i4.attr({
              opacity: 1
            })), i4;
          }
          function x(t4) {
            let e4;
            t4 = t4 || this.points;
            let i4 = this, s3 = i4.chart, a2 = i4.options, h2 = s3.renderer, {
              backgroundColor: c2,
              plotBackgroundColor: m2
            } = s3.options.chart, x2 = h2.getContrast(d(m2) && m2 || d(c2) && c2 || "#000000"), y2 = v(i4), {
              animation: M2,
              defer: k
            } = y2[0], S = k ? o(s3, M2, i4) : {
              defer: 0,
              duration: 0
            };
            l(this, "drawDataLabels"), i4.hasDataLabels?.() && (e4 = this.initDataLabels(S), t4.forEach((t5) => {
              let o2 = t5.dataLabels || [];
              f(b(y2, t5.dlOptions || t5.options?.dataLabels)).forEach((c4, f2) => {
                let m3 = c4.enabled && (t5.visible || t5.dataLabelOnHidden) && (!t5.isNull || t5.dataLabelOnNull) && function(t6, e5) {
                  let i5 = e5.filter;
                  if (i5) {
                    let e6 = i5.operator, s4 = t6[i5.property], o3 = i5.value;
                    return ">" === e6 && s4 > o3 || "<" === e6 && s4 < o3 || ">=" === e6 && s4 >= o3 || "<=" === e6 && s4 <= o3 || "==" === e6 && s4 == o3 || "===" === e6 && s4 === o3 || "!=" === e6 && s4 != o3 || "!==" === e6 && s4 !== o3;
                  }
                  return true;
                }(t5, c4), {
                  backgroundColor: y3,
                  borderColor: b2,
                  distance: v2,
                  style: M3 = {}
                } = c4, k2, S2, C, w, A = {}, T = o2[f2], P = !T, O;
                m3 && (S2 = u(c4[t5.formatPrefix + "Format"], c4.format), k2 = t5.getLabelConfig(), C = n(S2) ? r(S2, k2, s3) : (c4[t5.formatPrefix + "Formatter"] || c4.formatter).call(k2, c4), w = c4.rotation, !s3.styledMode && (M3.color = u(c4.color, M3.color, d(i4.color) ? i4.color : void 0, "#000000"), "contrast" === M3.color ? ("none" !== y3 && (O = y3), t5.contrastColor = h2.getContrast("auto" !== O && O || t5.color || i4.color), M3.color = O || !n(v2) && c4.inside || 0 > g(v2 || 0) || a2.stacking ? t5.contrastColor : x2) : delete t5.contrastColor, a2.cursor && (M3.cursor = a2.cursor)), A = {
                  r: c4.borderRadius || 0,
                  rotation: w,
                  padding: c4.padding,
                  zIndex: 1
                }, s3.styledMode || (A.fill = "auto" === y3 ? t5.color : y3, A.stroke = "auto" === b2 ? t5.color : b2, A["stroke-width"] = c4.borderWidth), p(A, (t6, e5) => {
                  void 0 === t6 && delete A[e5];
                })), !T || m3 && n(C) && !!T.div == !!c4.useHTML && (T.rotation && c4.rotation || T.rotation === c4.rotation) || (T = void 0, P = true), m3 && n(C) && (T ? A.text = C : (T = h2.label(C, 0, 0, c4.shape, void 0, void 0, c4.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + t5.colorIndex + " " + (c4.className || "") + (c4.useHTML ? " highcharts-tracker" : "")), T && (T.options = c4, T.attr(A), s3.styledMode || T.css(M3).shadow(c4.shadow), l(T, "beforeAddingDataLabel", {
                  labelOptions: c4,
                  point: t5
                }), T.added || T.add(e4), i4.alignDataLabel(t5, T, c4, void 0, P), T.isActive = true, o2[f2] && o2[f2] !== T && o2[f2].destroy(), o2[f2] = T));
              });
              let c3 = o2.length;
              for (; c3--; ) o2[c3] && o2[c3].isActive ? o2[c3].isActive = false : (o2[c3]?.destroy(), o2.splice(c3, 1));
              t5.dataLabel = o2[0], t5.dataLabels = o2;
            })), l(this, "afterDrawDataLabels");
          }
          function y(t4, e4, i4, s3, o2, r2) {
            let n2 = this.chart, a2 = e4.align, l2 = e4.verticalAlign, h2 = t4.box ? 0 : t4.padding || 0, d2 = n2.inverted ? this.yAxis : this.xAxis, c2 = d2 ? d2.left - n2.plotLeft : 0, p2 = n2.inverted ? this.xAxis : this.yAxis, u2 = p2 ? p2.top - n2.plotTop : 0, {
              x: g2 = 0,
              y: f2 = 0
            } = e4, m2, x2;
            return (m2 = (i4.x || 0) + h2 + c2) < 0 && ("right" === a2 && g2 >= 0 ? (e4.align = "left", e4.inside = true) : g2 -= m2, x2 = true), (m2 = (i4.x || 0) + s3.width - h2 + c2) > n2.plotWidth && ("left" === a2 && g2 <= 0 ? (e4.align = "right", e4.inside = true) : g2 += n2.plotWidth - m2, x2 = true), (m2 = i4.y + h2 + u2) < 0 && ("bottom" === l2 && f2 >= 0 ? (e4.verticalAlign = "top", e4.inside = true) : f2 -= m2, x2 = true), (m2 = (i4.y || 0) + s3.height - h2 + u2) > n2.plotHeight && ("top" === l2 && f2 <= 0 ? (e4.verticalAlign = "bottom", e4.inside = true) : f2 += n2.plotHeight - m2, x2 = true), x2 && (e4.x = g2, e4.y = f2, t4.placed = !r2, t4.align(e4, void 0, o2)), x2;
          }
          function b(t4, e4) {
            let i4 = [], s3;
            if (h(t4) && !h(e4)) i4 = t4.map(function(t5) {
              return c(t5, e4);
            });
            else if (h(e4) && !h(t4)) i4 = e4.map(function(e5) {
              return c(t4, e5);
            });
            else if (h(t4) || h(e4)) {
              if (h(t4) && h(e4)) for (s3 = Math.max(t4.length, e4.length); s3--; ) i4[s3] = c(t4[s3], e4[s3]);
            } else i4 = c(t4, e4);
            return i4;
          }
          function v(t4) {
            let e4 = t4.chart.options.plotOptions;
            return f(b(b(e4?.series?.dataLabels, e4?.[t4.type]?.dataLabels), t4.options.dataLabels));
          }
          function M(t4, e4, i4, s3, o2) {
            let r2 = this.chart, n2 = r2.inverted, a2 = this.xAxis, l2 = a2.reversed, h2 = ((n2 ? e4.height : e4.width) || 0) / 2, d2 = t4.pointWidth, c2 = d2 ? d2 / 2 : 0;
            e4.startXPos = n2 ? o2.x : l2 ? -h2 - c2 : a2.width - h2 + c2, e4.startYPos = n2 ? l2 ? this.yAxis.height - h2 + c2 : -h2 - c2 : o2.y, s3 ? "hidden" === e4.visibility && (e4.show(), e4.attr({
              opacity: 0
            }).animate({
              opacity: 1
            })) : e4.attr({
              opacity: 1
            }).animate({
              opacity: 0
            }, void 0, e4.hide), r2.hasRendered && (i4 && e4.attr({
              x: e4.startXPos,
              y: e4.startYPos
            }), e4.placed = true);
          }
          t3.compose = function(t4) {
            let o2 = t4.prototype;
            o2.initDataLabels || (o2.initDataLabels = m, o2.initDataLabelsGroup = s2, o2.alignDataLabel = i3, o2.drawDataLabels = x, o2.justifyDataLabel = y, o2.setDataLabelStartPos = M, o2.hasDataLabels = e3);
          };
        }(s || (s = {})), s;
      }), i(e, "Series/Column/ColumnDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let {
          composed: r
        } = e2, {
          series: n
        } = i2, {
          merge: a,
          pick: l,
          pushUnique: h
        } = s;
        return function(e3) {
          function i3(t3, e4, i4, s2, o2) {
            let r2 = this.chart.inverted, h2 = t3.series, d = (h2.xAxis ? h2.xAxis.len : this.chart.plotSizeX) || 0, c = (h2.yAxis ? h2.yAxis.len : this.chart.plotSizeY) || 0, p = t3.dlBox || t3.shapeArgs, u = l(t3.below, t3.plotY > l(this.translatedThreshold, c)), g = l(i4.inside, !!this.options.stacking);
            if (p) {
              if (s2 = a(p), !("allow" === i4.overflow && false === i4.crop)) {
                s2.y < 0 && (s2.height += s2.y, s2.y = 0);
                let t4 = s2.y + s2.height - c;
                t4 > 0 && t4 < s2.height - 1 && (s2.height -= t4);
              }
              r2 && (s2 = {
                x: c - s2.y - s2.height,
                y: d - s2.x - s2.width,
                width: s2.height,
                height: s2.width
              }), g || (r2 ? (s2.x += u ? 0 : s2.width, s2.width = 0) : (s2.y += u ? s2.height : 0, s2.height = 0));
            }
            i4.align = l(i4.align, !r2 || g ? "center" : u ? "right" : "left"), i4.verticalAlign = l(i4.verticalAlign, r2 || g ? "middle" : u ? "top" : "bottom"), n.prototype.alignDataLabel.call(this, t3, e4, i4, s2, o2), i4.inside && t3.contrastColor && e4.css({
              color: t3.contrastColor
            });
          }
          e3.compose = function(e4) {
            t2.compose(n), h(r, "ColumnDataLabel") && (e4.prototype.alignDataLabel = i3);
          };
        }(o || (o = {})), o;
      }), i(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          extend: s,
          merge: o
        } = i2;
        class r extends t2 {
        }
        return r.defaultOptions = o(t2.defaultOptions, {}), s(r.prototype, {
          inverted: true
        }), e2.registerSeriesType("bar", r), r;
      }), i(e, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
        return {
          lineWidth: 0,
          findNearestPointBy: "xy",
          jitter: {
            x: 0,
            y: 0
          },
          marker: {
            enabled: true
          },
          tooltip: {
            headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
          }
        };
      }), i(e, "Series/Scatter/ScatterSeries.js", [e["Series/Scatter/ScatterSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          column: s,
          line: o
        } = e2.seriesTypes, {
          addEvent: r,
          extend: n,
          merge: a
        } = i2;
        class l extends o {
          applyJitter() {
            let t3 = this, e3 = this.options.jitter, i3 = this.points.length;
            e3 && this.points.forEach(function(s2, o2) {
              ["x", "y"].forEach(function(r2, n2) {
                if (e3[r2] && !s2.isNull) {
                  let a2 = `plot${r2.toUpperCase()}`, l2 = t3[`${r2}Axis`], h = e3[r2] * l2.transA;
                  if (l2 && !l2.logarithmic) {
                    let t4 = Math.max(0, (s2[a2] || 0) - h), e4 = Math.min(l2.len, (s2[a2] || 0) + h);
                    s2[a2] = t4 + (e4 - t4) * function(t5) {
                      let e5 = 1e4 * Math.sin(t5);
                      return e5 - Math.floor(e5);
                    }(o2 + n2 * i3), "x" === r2 && (s2.clientX = s2.plotX);
                  }
                }
              });
            });
          }
          drawGraph() {
            this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
          }
        }
        return l.defaultOptions = a(o.defaultOptions, t2), n(l.prototype, {
          drawTracker: s.prototype.drawTracker,
          sorted: false,
          requireSorting: false,
          noSharedTooltip: true,
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"]
        }), r(l, "afterTranslate", function() {
          this.applyJitter();
        }), e2.registerSeriesType("scatter", l), l;
      }), i(e, "Series/CenteredUtilities.js", [e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s, o;
        let {
          deg2rad: r
        } = t2, {
          fireEvent: n,
          isNumber: a,
          pick: l,
          relativeLength: h
        } = i2;
        return (o = s || (s = {})).getCenter = function() {
          let t3 = this.options, i3 = this.chart, s2 = 2 * (t3.slicedOffset || 0), o2 = i3.plotWidth - 2 * s2, r2 = i3.plotHeight - 2 * s2, d = t3.center, c = Math.min(o2, r2), p = t3.thickness, u, g = t3.size, f = t3.innerSize || 0, m, x;
          "string" == typeof g && (g = parseFloat(g)), "string" == typeof f && (f = parseFloat(f));
          let y = [l(d[0], "50%"), l(d[1], "50%"), l(g && g < 0 ? void 0 : t3.size, "100%"), l(f && f < 0 ? void 0 : t3.innerSize || 0, "0%")];
          for (!i3.angular || this instanceof e2 || (y[3] = 0), m = 0; m < 4; ++m) x = y[m], u = m < 2 || 2 === m && /%$/.test(x), y[m] = h(x, [o2, r2, c, y[2]][m]) + (u ? s2 : 0);
          return y[3] > y[2] && (y[3] = y[2]), a(p) && 2 * p < y[2] && p > 0 && (y[3] = y[2] - 2 * p), n(this, "afterGetCenter", {
            positions: y
          }), y;
        }, o.getStartAndEndRadians = function(t3, e3) {
          let i3 = a(t3) ? t3 : 0, s2 = a(e3) && e3 > i3 && e3 - i3 < 360 ? e3 : i3 + 360;
          return {
            start: r * (i3 + -90),
            end: r * (s2 + -90)
          };
        }, s;
      }), i(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          setAnimation: s
        } = t2, {
          addEvent: o,
          defined: r,
          extend: n,
          isNumber: a,
          pick: l,
          relativeLength: h
        } = i2;
        class d extends e2 {
          getConnectorPath(t3) {
            let e3 = t3.dataLabelPosition, i3 = t3.options || {}, s2 = i3.connectorShape, o2 = this.connectorShapes[s2] || s2;
            return e3 && o2.call(this, __spreadProps(__spreadValues({}, e3.computed), {
              alignment: e3.alignment
            }), e3.connectorPosition, i3) || [];
          }
          getTranslate() {
            return this.sliced && this.slicedTranslation || {
              translateX: 0,
              translateY: 0
            };
          }
          haloPath(t3) {
            let e3 = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e3.x, e3.y, e3.r + t3, e3.r + t3, {
              innerR: e3.r - 1,
              start: e3.start,
              end: e3.end,
              borderRadius: e3.borderRadius
            });
          }
          constructor(t3, e3, i3) {
            super(t3, e3, i3), this.half = 0, this.name ?? (this.name = "Slice");
            let s2 = (t4) => {
              this.slice("select" === t4.type);
            };
            o(this, "select", s2), o(this, "unselect", s2);
          }
          isValid() {
            return a(this.y) && this.y >= 0;
          }
          setVisible(t3, e3 = true) {
            t3 !== this.visible && this.update({
              visible: t3 ?? !this.visible
            }, e3, void 0, false);
          }
          slice(t3, e3, i3) {
            let o2 = this.series;
            s(i3, o2.chart), e3 = l(e3, true), this.sliced = this.options.sliced = t3 = r(t3) ? t3 : !this.sliced, o2.options.data[o2.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
          }
        }
        return n(d.prototype, {
          connectorShapes: {
            fixedOffset: function(t3, e3, i3) {
              let s2 = e3.breakAt, o2 = e3.touchingSliceAt, r2 = i3.softConnector ? ["C", t3.x + ("left" === t3.alignment ? -5 : 5), t3.y, 2 * s2.x - o2.x, 2 * s2.y - o2.y, s2.x, s2.y] : ["L", s2.x, s2.y];
              return [["M", t3.x, t3.y], r2, ["L", o2.x, o2.y]];
            },
            straight: function(t3, e3) {
              let i3 = e3.touchingSliceAt;
              return [["M", t3.x, t3.y], ["L", i3.x, i3.y]];
            },
            crookedLine: function(t3, e3, i3) {
              let {
                breakAt: s2,
                touchingSliceAt: o2
              } = e3, {
                series: r2
              } = this, [n2, a2, l2] = r2.center, d2 = l2 / 2, {
                plotLeft: c,
                plotWidth: p
              } = r2.chart, u = "left" === t3.alignment, {
                x: g,
                y: f
              } = t3, m = s2.x;
              if (i3.crookDistance) {
                let t4 = h(i3.crookDistance, 1);
                m = u ? n2 + d2 + (p + c - n2 - d2) * (1 - t4) : c + (n2 - d2) * t4;
              } else m = n2 + (a2 - f) * Math.tan((this.angle || 0) - Math.PI / 2);
              let x = [["M", g, f]];
              return (u ? m <= g && m >= s2.x : m >= g && m <= s2.x) && x.push(["L", m, f]), x.push(["L", s2.x, s2.y], ["L", o2.x, o2.y]), x;
            }
          }
        }), d;
      }), i(e, "Series/Pie/PieSeriesDefaults.js", [], function() {
        return {
          borderRadius: 3,
          center: [null, null],
          clip: false,
          colorByPoint: true,
          dataLabels: {
            connectorPadding: 5,
            connectorShape: "crookedLine",
            crookDistance: void 0,
            distance: 30,
            enabled: true,
            formatter: function() {
              return this.point.isNull ? void 0 : this.point.name;
            },
            softConnector: true,
            x: 0
          },
          fillColor: void 0,
          ignoreHiddenPoint: true,
          inactiveOtherPoints: true,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: false,
          slicedOffset: 10,
          stickyTracking: false,
          tooltip: {
            followPointer: true
          },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: {
            hover: {
              brightness: 0.1
            }
          }
        };
      }), i(e, "Series/Pie/PieSeries.js", [e["Series/CenteredUtilities.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Series/Pie/PiePoint.js"], e["Series/Pie/PieSeriesDefaults.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a, l) {
        let {
          getStartAndEndRadians: h
        } = t2, {
          noop: d
        } = i2, {
          clamp: c,
          extend: p,
          fireEvent: u,
          merge: g,
          pick: f
        } = l;
        class m extends r {
          animate(t3) {
            let e3 = this, i3 = e3.points, s2 = e3.startAngleRad;
            t3 || i3.forEach(function(t4) {
              let i4 = t4.graphic, o2 = t4.shapeArgs;
              i4 && o2 && (i4.attr({
                r: f(t4.startR, e3.center && e3.center[3] / 2),
                start: s2,
                end: s2
              }), i4.animate({
                r: o2.r,
                start: o2.start,
                end: o2.end
              }, e3.options.animation));
            });
          }
          drawEmpty() {
            let t3, e3;
            let i3 = this.startAngleRad, s2 = this.endAngleRad, o2 = this.options;
            0 === this.total && this.center ? (t3 = this.center[0], e3 = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t3, e3, this.center[1] / 2, 0, i3, s2).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
              d: a.arc(t3, e3, this.center[2] / 2, 0, {
                start: i3,
                end: s2,
                innerR: this.center[3] / 2
              })
            }), this.chart.styledMode || this.graph.attr({
              "stroke-width": o2.borderWidth,
              fill: o2.fillColor || "none",
              stroke: o2.color || "#cccccc"
            })) : this.graph && (this.graph = this.graph.destroy());
          }
          drawPoints() {
            let t3 = this.chart.renderer;
            this.points.forEach(function(e3) {
              e3.graphic && e3.hasNewShapeType() && (e3.graphic = e3.graphic.destroy()), e3.graphic || (e3.graphic = t3[e3.shapeType](e3.shapeArgs).add(e3.series.group), e3.delayedRendering = true);
            });
          }
          generatePoints() {
            super.generatePoints(), this.updateTotals();
          }
          getX(t3, e3, i3, s2) {
            let o2 = this.center, r2 = this.radii ? this.radii[i3.index] || 0 : o2[2] / 2, n2 = s2.dataLabelPosition, a2 = n2?.distance || 0, l2 = Math.asin(c((t3 - o2[1]) / (r2 + a2), -1, 1));
            return o2[0] + Math.cos(l2) * (r2 + a2) * (e3 ? -1 : 1) + (a2 > 0 ? (e3 ? -1 : 1) * (s2.padding || 0) : 0);
          }
          hasData() {
            return !!this.processedXData.length;
          }
          redrawPoints() {
            let t3, e3, i3, s2;
            let o2 = this, r2 = o2.chart;
            this.drawEmpty(), o2.group && !r2.styledMode && o2.group.shadow(o2.options.shadow), o2.points.forEach(function(n2) {
              let a2 = {};
              e3 = n2.graphic, !n2.isNull && e3 ? (s2 = n2.shapeArgs, t3 = n2.getTranslate(), r2.styledMode || (i3 = o2.pointAttribs(n2, n2.selected && "select")), n2.delayedRendering ? (e3.setRadialReference(o2.center).attr(s2).attr(t3), r2.styledMode || e3.attr(i3).attr({
                "stroke-linejoin": "round"
              }), n2.delayedRendering = false) : (e3.setRadialReference(o2.center), r2.styledMode || g(true, a2, i3), g(true, a2, s2, t3), e3.animate(a2)), e3.attr({
                visibility: n2.visible ? "inherit" : "hidden"
              }), e3.addClass(n2.getClassName(), true)) : e3 && (n2.graphic = e3.destroy());
            });
          }
          sortByAngle(t3, e3) {
            t3.sort(function(t4, i3) {
              return void 0 !== t4.angle && (i3.angle - t4.angle) * e3;
            });
          }
          translate(t3) {
            u(this, "translate"), this.generatePoints();
            let e3 = this.options, i3 = e3.slicedOffset, s2 = h(e3.startAngle, e3.endAngle), o2 = this.startAngleRad = s2.start, r2 = (this.endAngleRad = s2.end) - o2, n2 = this.points, a2 = e3.ignoreHiddenPoint, l2 = n2.length, d2, c2, p2, g2, f2, m2, x, y = 0;
            for (t3 || (this.center = t3 = this.getCenter()), m2 = 0; m2 < l2; m2++) {
              x = n2[m2], d2 = o2 + y * r2, x.isValid() && (!a2 || x.visible) && (y += x.percentage / 100), c2 = o2 + y * r2;
              let e4 = {
                x: t3[0],
                y: t3[1],
                r: t3[2] / 2,
                innerR: t3[3] / 2,
                start: Math.round(1e3 * d2) / 1e3,
                end: Math.round(1e3 * c2) / 1e3
              };
              x.shapeType = "arc", x.shapeArgs = e4, (p2 = (c2 + d2) / 2) > 1.5 * Math.PI ? p2 -= 2 * Math.PI : p2 < -Math.PI / 2 && (p2 += 2 * Math.PI), x.slicedTranslation = {
                translateX: Math.round(Math.cos(p2) * i3),
                translateY: Math.round(Math.sin(p2) * i3)
              }, g2 = Math.cos(p2) * t3[2] / 2, f2 = Math.sin(p2) * t3[2] / 2, x.tooltipPos = [t3[0] + 0.7 * g2, t3[1] + 0.7 * f2], x.half = p2 < -Math.PI / 2 || p2 > Math.PI / 2 ? 1 : 0, x.angle = p2;
            }
            u(this, "afterTranslate");
          }
          updateTotals() {
            let t3 = this.points, e3 = t3.length, i3 = this.options.ignoreHiddenPoint, s2, o2, r2 = 0;
            for (s2 = 0; s2 < e3; s2++) (o2 = t3[s2]).isValid() && (!i3 || o2.visible) && (r2 += o2.y);
            for (s2 = 0, this.total = r2; s2 < e3; s2++) (o2 = t3[s2]).percentage = r2 > 0 && (o2.visible || !i3) ? o2.y / r2 * 100 : 0, o2.total = r2;
          }
        }
        return m.defaultOptions = g(r.defaultOptions, o), p(m.prototype, {
          axisTypes: [],
          directTouch: true,
          drawGraph: void 0,
          drawTracker: e2.prototype.drawTracker,
          getCenter: t2.getCenter,
          getSymbol: d,
          invertible: false,
          isCartesian: false,
          noSharedTooltip: true,
          pointAttribs: e2.prototype.pointAttribs,
          pointClass: s,
          requireSorting: false,
          searchPoint: d,
          trackerGroups: ["group", "dataLabelsGroup"]
        }), n.registerSeriesType("pie", m), m;
      }), i(e, "Series/Pie/PieDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        var r;
        let {
          composed: n,
          noop: a
        } = e2, {
          distribute: l
        } = i2, {
          series: h
        } = s, {
          arrayMax: d,
          clamp: c,
          defined: p,
          pick: u,
          pushUnique: g,
          relativeLength: f
        } = o;
        return function(e3) {
          let i3 = {
            radialDistributionY: function(t3, e4) {
              return (e4.dataLabelPosition?.top || 0) + t3.distributeBox.pos;
            },
            radialDistributionX: function(t3, e4, i4, s3, o3) {
              let r3 = o3.dataLabelPosition;
              return t3.getX(i4 < (r3?.top || 0) + 2 || i4 > (r3?.bottom || 0) - 2 ? s3 : i4, e4.half, e4, o3);
            },
            justify: function(t3, e4, i4, s3) {
              return s3[0] + (t3.half ? -1 : 1) * (i4 + (e4.dataLabelPosition?.distance || 0));
            },
            alignToPlotEdges: function(t3, e4, i4, s3) {
              let o3 = t3.getBBox().width;
              return e4 ? o3 + s3 : i4 - o3 - s3;
            },
            alignToConnectors: function(t3, e4, i4, s3) {
              let o3 = 0, r3;
              return t3.forEach(function(t4) {
                (r3 = t4.dataLabel.getBBox().width) > o3 && (o3 = r3);
              }), e4 ? o3 + s3 : i4 - o3 - s3;
            }
          };
          function s2(t3, e4) {
            let {
              center: i4,
              options: s3
            } = this, o3 = i4[2] / 2, r3 = t3.angle || 0, n2 = Math.cos(r3), a2 = Math.sin(r3), l2 = i4[0] + n2 * o3, h2 = i4[1] + a2 * o3, d2 = Math.min((s3.slicedOffset || 0) + (s3.borderWidth || 0), e4 / 5);
            return {
              natural: {
                x: l2 + n2 * e4,
                y: h2 + a2 * e4
              },
              computed: {},
              alignment: e4 < 0 ? "center" : t3.half ? "right" : "left",
              connectorPosition: {
                breakAt: {
                  x: l2 + n2 * d2,
                  y: h2 + a2 * d2
                },
                touchingSliceAt: {
                  x: l2,
                  y: h2
                }
              },
              distance: e4
            };
          }
          function o2() {
            let t3 = this, e4 = t3.points, i4 = t3.chart, s3 = i4.plotWidth, o3 = i4.plotHeight, r3 = i4.plotLeft, n2 = Math.round(i4.chartWidth / 3), a2 = t3.center, c2 = a2[2] / 2, g2 = a2[1], m2 = [[], []], x = [0, 0, 0, 0], y = t3.dataLabelPositioners, b, v, M, k = 0;
            t3.visible && t3.hasDataLabels?.() && (e4.forEach((t4) => {
              (t4.dataLabels || []).forEach((t5) => {
                t5.shortened && (t5.attr({
                  width: "auto"
                }).css({
                  width: "auto",
                  textOverflow: "clip"
                }), t5.shortened = false);
              });
            }), h.prototype.drawDataLabels.apply(t3), e4.forEach((t4) => {
              (t4.dataLabels || []).forEach((e5, i5) => {
                let s4 = a2[2] / 2, o4 = e5.options, r4 = f(o4?.distance || 0, s4);
                0 === i5 && m2[t4.half].push(t4), !p(o4?.style?.width) && e5.getBBox().width > n2 && (e5.css({
                  width: Math.round(0.7 * n2) + "px"
                }), e5.shortened = true), e5.dataLabelPosition = this.getDataLabelPosition(t4, r4), k = Math.max(k, r4);
              });
            }), m2.forEach((e5, n3) => {
              let h2 = e5.length, d2 = [], f2, m3, b2 = 0, S;
              h2 && (t3.sortByAngle(e5, n3 - 0.5), k > 0 && (f2 = Math.max(0, g2 - c2 - k), m3 = Math.min(g2 + c2 + k, i4.plotHeight), e5.forEach((t4) => {
                (t4.dataLabels || []).forEach((e6) => {
                  let s4 = e6.dataLabelPosition;
                  s4 && s4.distance > 0 && (s4.top = Math.max(0, g2 - c2 - s4.distance), s4.bottom = Math.min(g2 + c2 + s4.distance, i4.plotHeight), b2 = e6.getBBox().height || 21, e6.lineHeight = i4.renderer.fontMetrics(e6.text || e6).h + 2 * e6.padding, t4.distributeBox = {
                    target: (e6.dataLabelPosition?.natural.y || 0) - s4.top + e6.lineHeight / 2,
                    size: b2,
                    rank: t4.y
                  }, d2.push(t4.distributeBox));
                });
              }), l(d2, S = m3 + b2 - f2, S / 5)), e5.forEach((i5) => {
                (i5.dataLabels || []).forEach((l2) => {
                  let h3 = l2.options || {}, g3 = i5.distributeBox, f3 = l2.dataLabelPosition, m4 = f3?.natural.y || 0, b3 = h3.connectorPadding || 0, k2 = l2.lineHeight || 21, S2 = (k2 - l2.getBBox().height) / 2, C = 0, w = m4, A = "inherit";
                  if (f3) {
                    if (d2 && p(g3) && f3.distance > 0 && (void 0 === g3.pos ? A = "hidden" : (M = g3.size, w = y.radialDistributionY(i5, l2))), h3.justify) C = y.justify(i5, l2, c2, a2);
                    else switch (h3.alignTo) {
                      case "connectors":
                        C = y.alignToConnectors(e5, n3, s3, r3);
                        break;
                      case "plotEdges":
                        C = y.alignToPlotEdges(l2, n3, s3, r3);
                        break;
                      default:
                        C = y.radialDistributionX(t3, i5, w - S2, m4, l2);
                    }
                    if (f3.attribs = {
                      visibility: A,
                      align: f3.alignment
                    }, f3.posAttribs = {
                      x: C + (h3.x || 0) + ({
                        left: b3,
                        right: -b3
                      }[f3.alignment] || 0),
                      y: w + (h3.y || 0) - k2 / 2
                    }, f3.computed.x = C, f3.computed.y = w - S2, u(h3.crop, true)) {
                      let t4;
                      C - (v = l2.getBBox().width) < b3 && 1 === n3 ? (t4 = Math.round(v - C + b3), x[3] = Math.max(t4, x[3])) : C + v > s3 - b3 && 0 === n3 && (t4 = Math.round(C + v - s3 + b3), x[1] = Math.max(t4, x[1])), w - M / 2 < 0 ? x[0] = Math.max(Math.round(-w + M / 2), x[0]) : w + M / 2 > o3 && (x[2] = Math.max(Math.round(w + M / 2 - o3), x[2])), f3.sideOverflow = t4;
                    }
                  }
                });
              }));
            }), (0 === d(x) || this.verifyDataLabelOverflow(x)) && (this.placeDataLabels(), this.points.forEach((e5) => {
              (e5.dataLabels || []).forEach((s4) => {
                let {
                  connectorColor: o4,
                  connectorWidth: r4 = 1
                } = s4.options || {}, n3 = s4.dataLabelPosition;
                if (r4) {
                  let a3;
                  b = s4.connector, n3 && n3.distance > 0 ? (a3 = !b, b || (s4.connector = b = i4.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e5.colorIndex + (e5.className ? " " + e5.className : "")).add(t3.dataLabelsGroup)), i4.styledMode || b.attr({
                    "stroke-width": r4,
                    stroke: o4 || e5.color || "#666666"
                  }), b[a3 ? "attr" : "animate"]({
                    d: e5.getConnectorPath(s4)
                  }), b.attr({
                    visibility: n3.attribs?.visibility
                  })) : b && (s4.connector = b.destroy());
                }
              });
            })));
          }
          function r2() {
            this.points.forEach((t3) => {
              (t3.dataLabels || []).forEach((t4) => {
                let e4 = t4.dataLabelPosition;
                e4 ? (e4.sideOverflow && (t4.css({
                  width: Math.max(t4.getBBox().width - e4.sideOverflow, 0) + "px",
                  textOverflow: (t4.options?.style || {}).textOverflow || "ellipsis"
                }), t4.shortened = true), t4.attr(e4.attribs), t4[t4.moved ? "animate" : "attr"](e4.posAttribs), t4.moved = true) : t4 && t4.attr({
                  y: -9999
                });
              }), delete t3.distributeBox;
            }, this);
          }
          function m(t3) {
            let e4 = this.center, i4 = this.options, s3 = i4.center, o3 = i4.minSize || 80, r3 = o3, n2 = null !== i4.size;
            return !n2 && (null !== s3[0] ? r3 = Math.max(e4[2] - Math.max(t3[1], t3[3]), o3) : (r3 = Math.max(e4[2] - t3[1] - t3[3], o3), e4[0] += (t3[3] - t3[1]) / 2), null !== s3[1] ? r3 = c(r3, o3, e4[2] - Math.max(t3[0], t3[2])) : (r3 = c(r3, o3, e4[2] - t3[0] - t3[2]), e4[1] += (t3[0] - t3[2]) / 2), r3 < e4[2] ? (e4[2] = r3, e4[3] = Math.min(i4.thickness ? Math.max(0, r3 - 2 * i4.thickness) : Math.max(0, f(i4.innerSize || 0, r3)), r3), this.translate(e4), this.drawDataLabels && this.drawDataLabels()) : n2 = true), n2;
          }
          e3.compose = function(e4) {
            if (t2.compose(h), g(n, "PieDataLabel")) {
              let t3 = e4.prototype;
              t3.dataLabelPositioners = i3, t3.alignDataLabel = a, t3.drawDataLabels = o2, t3.getDataLabelPosition = s2, t3.placeDataLabels = r2, t3.verifyDataLabelOverflow = m;
            }
          };
        }(r || (r = {})), r;
      }), i(e, "Core/Geometry/GeometryUtilities.js", [], function() {
        var t2, e2;
        return (e2 = t2 || (t2 = {})).getCenterOfPoints = function(t3) {
          let e3 = t3.reduce((t4, e4) => (t4.x += e4.x, t4.y += e4.y, t4), {
            x: 0,
            y: 0
          });
          return {
            x: e3.x / t3.length,
            y: e3.y / t3.length
          };
        }, e2.getDistanceBetweenPoints = function(t3, e3) {
          return Math.sqrt(Math.pow(e3.x - t3.x, 2) + Math.pow(e3.y - t3.y, 2));
        }, e2.getAngleBetweenPoints = function(t3, e3) {
          return Math.atan2(e3.x - t3.x, e3.y - t3.y);
        }, e2.pointInPolygon = function({
          x: t3,
          y: e3
        }, i2) {
          let s = i2.length, o, r, n = false;
          for (o = 0, r = s - 1; o < s; r = o++) {
            let [s2, a] = i2[o], [l, h] = i2[r];
            a > e3 != h > e3 && t3 < (l - s2) * (e3 - a) / (h - a) + s2 && (n = !n);
          }
          return n;
        }, t2;
      }), i(e, "Extensions/OverlappingDataLabels.js", [e["Core/Geometry/GeometryUtilities.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          pointInPolygon: i2
        } = t2, {
          addEvent: s,
          fireEvent: o,
          objectEach: r,
          pick: n
        } = e2;
        function a(t3) {
          let e3 = t3.length, s2 = (t4, e4) => !(e4.x >= t4.x + t4.width || e4.x + e4.width <= t4.x || e4.y >= t4.y + t4.height || e4.y + e4.height <= t4.y), r2 = (t4, e4) => {
            for (let s3 of t4) if (i2({
              x: s3[0],
              y: s3[1]
            }, e4)) return true;
            return false;
          }, n2, a2, h2, d, c, p = false;
          for (let i3 = 0; i3 < e3; i3++) (n2 = t3[i3]) && (n2.oldOpacity = n2.opacity, n2.newOpacity = 1, n2.absoluteBox = function(t4) {
            if (t4 && (!t4.alignAttr || t4.placed)) {
              let e4 = t4.box ? 0 : t4.padding || 0, i4 = t4.alignAttr || {
                x: t4.attr("x"),
                y: t4.attr("y")
              }, s3 = t4.getBBox();
              return t4.width = s3.width, t4.height = s3.height, {
                x: i4.x + (t4.parentGroup?.translateX || 0) + e4,
                y: i4.y + (t4.parentGroup?.translateY || 0) + e4,
                width: (t4.width || 0) - 2 * e4,
                height: (t4.height || 0) - 2 * e4,
                polygon: s3?.polygon
              };
            }
          }(n2));
          t3.sort((t4, e4) => (e4.labelrank || 0) - (t4.labelrank || 0));
          for (let i3 = 0; i3 < e3; ++i3) {
            d = (a2 = t3[i3]) && a2.absoluteBox;
            let o2 = d?.polygon;
            for (let n3 = i3 + 1; n3 < e3; ++n3) {
              c = (h2 = t3[n3]) && h2.absoluteBox;
              let e4 = false;
              if (d && c && a2 !== h2 && 0 !== a2.newOpacity && 0 !== h2.newOpacity && "hidden" !== a2.visibility && "hidden" !== h2.visibility) {
                let t4 = c.polygon;
                if (o2 && t4 && o2 !== t4 ? r2(o2, t4) && (e4 = true) : s2(d, c) && (e4 = true), e4) {
                  let t5 = a2.labelrank < h2.labelrank ? a2 : h2, e5 = t5.text;
                  t5.newOpacity = 0, e5?.element.querySelector("textPath") && e5.hide();
                }
              }
            }
          }
          for (let e4 of t3) l(e4, this) && (p = true);
          p && o(this, "afterHideAllOverlappingLabels");
        }
        function l(t3, e3) {
          let i3, s2, r2 = false;
          return t3 && (s2 = t3.newOpacity, t3.oldOpacity !== s2 && (t3.hasClass("highcharts-data-label") ? (t3[s2 ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), i3 = function() {
            e3.styledMode || t3.css({
              pointerEvents: s2 ? "auto" : "none"
            });
          }, r2 = true, t3[t3.isOld ? "animate" : "attr"]({
            opacity: s2
          }, void 0, i3), o(e3, "afterHideOverlappingLabel")) : t3.attr({
            opacity: s2
          })), t3.isOld = true), r2;
        }
        function h() {
          let t3 = this, e3 = [];
          for (let i3 of t3.labelCollectors || []) e3 = e3.concat(i3());
          for (let i3 of t3.yAxis || []) i3.stacking && i3.options.stackLabels && !i3.options.stackLabels.allowOverlap && r(i3.stacking.stacks, (t4) => {
            r(t4, (t5) => {
              t5.label && e3.push(t5.label);
            });
          });
          for (let i3 of t3.series || []) if (i3.visible && i3.hasDataLabels?.()) {
            let s2 = (i4) => {
              for (let s3 of i4) s3.visible && (s3.dataLabels || []).forEach((i5) => {
                let o2 = i5.options || {};
                i5.labelrank = n(o2.labelrank, s3.labelrank, s3.shapeArgs?.height), o2.allowOverlap ?? Number(o2.distance) > 0 ? (i5.oldOpacity = i5.opacity, i5.newOpacity = 1, l(i5, t3)) : e3.push(i5);
              });
            };
            s2(i3.nodes || []), s2(i3.points);
          }
          this.hideOverlappingLabels(e3);
        }
        return {
          compose: function(t3) {
            let e3 = t3.prototype;
            e3.hideOverlappingLabels || (e3.hideOverlappingLabels = a, s(t3, "render", h));
          }
        };
      }), i(e, "Extensions/BorderRadius.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let {
          defaultOptions: s
        } = t2, {
          noop: o
        } = e2, {
          addEvent: r,
          extend: n,
          isObject: a,
          merge: l,
          relativeLength: h
        } = i2, d = {
          radius: 0,
          scope: "stack",
          where: void 0
        }, c = o, p = o;
        function u(t3, e3, i3, s2, o2 = {}) {
          let r2 = c(t3, e3, i3, s2, o2), {
            innerR: n2 = 0,
            r: a2 = i3,
            start: l2 = 0,
            end: d2 = 0
          } = o2;
          if (o2.open || !o2.borderRadius) return r2;
          let p2 = d2 - l2, g2 = Math.sin(p2 / 2), f2 = Math.max(Math.min(h(o2.borderRadius || 0, a2 - n2), (a2 - n2) / 2, a2 * g2 / (1 + g2)), 0), m2 = Math.min(f2, p2 / Math.PI * 2 * n2), x2 = r2.length - 1;
          for (; x2--; ) !function(t4, e4, i4) {
            let s3, o3, r3;
            let n3 = t4[e4], a3 = t4[e4 + 1];
            if ("Z" === a3[0] && (a3 = t4[0]), ("M" === n3[0] || "L" === n3[0]) && "A" === a3[0] ? (s3 = n3, o3 = a3, r3 = true) : "A" === n3[0] && ("M" === a3[0] || "L" === a3[0]) && (s3 = a3, o3 = n3), s3 && o3 && o3.params) {
              let n4 = o3[1], a4 = o3[5], l3 = o3.params, {
                start: h2,
                end: d3,
                cx: c2,
                cy: p3
              } = l3, u2 = a4 ? n4 - i4 : n4 + i4, g3 = u2 ? Math.asin(i4 / u2) : 0, f3 = a4 ? g3 : -g3, m3 = Math.cos(g3) * u2;
              r3 ? (l3.start = h2 + f3, s3[1] = c2 + m3 * Math.cos(h2), s3[2] = p3 + m3 * Math.sin(h2), t4.splice(e4 + 1, 0, ["A", i4, i4, 0, 0, 1, c2 + n4 * Math.cos(l3.start), p3 + n4 * Math.sin(l3.start)])) : (l3.end = d3 - f3, o3[6] = c2 + n4 * Math.cos(l3.end), o3[7] = p3 + n4 * Math.sin(l3.end), t4.splice(e4 + 1, 0, ["A", i4, i4, 0, 0, 1, c2 + m3 * Math.cos(d3), p3 + m3 * Math.sin(d3)])), o3[4] = Math.abs(l3.end - l3.start) < Math.PI ? 0 : 1;
            }
          }(r2, x2, x2 > 1 ? m2 : f2);
          return r2;
        }
        function g() {
          if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
            let {
              options: t3,
              yAxis: e3
            } = this, i3 = "percent" === t3.stacking, o2 = s.plotOptions?.[this.type]?.borderRadius, r2 = f(t3.borderRadius, a(o2) ? o2 : {}), l2 = e3.options.reversed;
            for (let s2 of this.points) {
              let {
                shapeArgs: o3
              } = s2;
              if ("roundedRect" === s2.shapeType && o3) {
                let {
                  width: a2 = 0,
                  height: d2 = 0,
                  y: c2 = 0
                } = o3, p2 = c2, u2 = d2;
                if ("stack" === r2.scope && s2.stackTotal) {
                  let o4 = e3.translate(i3 ? 100 : s2.stackTotal, false, true, false, true), r3 = e3.translate(t3.threshold || 0, false, true, false, true), n2 = this.crispCol(0, Math.min(o4, r3), 0, Math.abs(o4 - r3));
                  p2 = n2.y, u2 = n2.height;
                }
                let g2 = (s2.negative ? -1 : 1) * (l2 ? -1 : 1) == -1, f2 = r2.where;
                !f2 && this.is("waterfall") && Math.abs((s2.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (f2 = "all"), f2 || (f2 = "end");
                let m2 = Math.min(h(r2.radius, a2), a2 / 2, "all" === f2 ? d2 / 2 : 1 / 0) || 0;
                "end" === f2 && (g2 && (p2 -= m2), u2 += m2), n(o3, {
                  brBoxHeight: u2,
                  brBoxY: p2,
                  r: m2
                });
              }
            }
          }
        }
        function f(t3, e3) {
          return a(t3) || (t3 = {
            radius: t3 || 0
          }), l(d, e3, t3);
        }
        function m() {
          let t3 = f(this.options.borderRadius);
          for (let e3 of this.points) {
            let i3 = e3.shapeArgs;
            i3 && (i3.borderRadius = h(t3.radius, (i3.r || 0) - (i3.innerR || 0)));
          }
        }
        function x(t3, e3, i3, s2, o2 = {}) {
          let r2 = p(t3, e3, i3, s2, o2), {
            r: n2 = 0,
            brBoxHeight: a2 = s2,
            brBoxY: l2 = e3
          } = o2, h2 = e3 - l2, d2 = l2 + a2 - (e3 + s2), c2 = h2 - n2 > -0.1 ? 0 : n2, u2 = d2 - n2 > -0.1 ? 0 : n2, g2 = Math.max(c2 && h2, 0), f2 = Math.max(u2 && d2, 0), m2 = [t3 + c2, e3], y = [t3 + i3 - c2, e3], b = [t3 + i3, e3 + c2], v = [t3 + i3, e3 + s2 - u2], M = [t3 + i3 - u2, e3 + s2], k = [t3 + u2, e3 + s2], S = [t3, e3 + s2 - u2], C = [t3, e3 + c2], w = (t4, e4) => Math.sqrt(Math.pow(t4, 2) - Math.pow(e4, 2));
          if (g2) {
            let t4 = w(c2, c2 - g2);
            m2[0] -= t4, y[0] += t4, b[1] = C[1] = e3 + c2 - g2;
          }
          if (s2 < c2 - g2) {
            let o3 = w(c2, c2 - g2 - s2);
            b[0] = v[0] = t3 + i3 - c2 + o3, M[0] = Math.min(b[0], M[0]), k[0] = Math.max(v[0], k[0]), S[0] = C[0] = t3 + c2 - o3, b[1] = C[1] = e3 + s2;
          }
          if (f2) {
            let t4 = w(u2, u2 - f2);
            M[0] += t4, k[0] -= t4, v[1] = S[1] = e3 + s2 - u2 + f2;
          }
          if (s2 < u2 - f2) {
            let o3 = w(u2, u2 - f2 - s2);
            b[0] = v[0] = t3 + i3 - u2 + o3, y[0] = Math.min(b[0], y[0]), m2[0] = Math.max(v[0], m2[0]), S[0] = C[0] = t3 + u2 - o3, v[1] = S[1] = e3;
          }
          return r2.length = 0, r2.push(["M", ...m2], ["L", ...y], ["A", c2, c2, 0, 0, 1, ...b], ["L", ...v], ["A", u2, u2, 0, 0, 1, ...M], ["L", ...k], ["A", u2, u2, 0, 0, 1, ...S], ["L", ...C], ["A", c2, c2, 0, 0, 1, ...m2], ["Z"]), r2;
        }
        return {
          compose: function(t3, e3, i3) {
            let s2 = t3.types.pie;
            if (!e3.symbolCustomAttribs.includes("borderRadius")) {
              let o2 = i3.prototype.symbols;
              r(t3, "afterColumnTranslate", g, {
                order: 9
              }), r(s2, "afterTranslate", m), e3.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), c = o2.arc, p = o2.roundedRect, o2.arc = u, o2.roundedRect = x;
            }
          },
          optionsToObject: f
        };
      }), i(e, "Core/Responsive.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let {
          diffObjects: i2,
          extend: s,
          find: o,
          merge: r,
          pick: n,
          uniqueKey: a
        } = t2;
        return function(t3) {
          function e3(t4, e4) {
            let i3 = t4.condition;
            (i3.callback || function() {
              return this.chartWidth <= n(i3.maxWidth, Number.MAX_VALUE) && this.chartHeight <= n(i3.maxHeight, Number.MAX_VALUE) && this.chartWidth >= n(i3.minWidth, 0) && this.chartHeight >= n(i3.minHeight, 0);
            }).call(this) && e4.push(t4._id);
          }
          function l(t4, e4) {
            let s2 = this.options.responsive, n2 = this.currentResponsive, l2 = [], h;
            !e4 && s2 && s2.rules && s2.rules.forEach((t5) => {
              void 0 === t5._id && (t5._id = a()), this.matchResponsiveRule(t5, l2);
            }, this);
            let d = r(...l2.map((t5) => o((s2 || {}).rules || [], (e5) => e5._id === t5)).map((t5) => t5 && t5.chartOptions));
            d.isResponsiveOptions = true, l2 = l2.toString() || void 0;
            let c = n2 && n2.ruleIds;
            l2 === c || (n2 && (this.currentResponsive = void 0, this.updatingResponsive = true, this.update(n2.undoOptions, t4, true), this.updatingResponsive = false), l2 ? ((h = i2(d, this.options, true, this.collectionsWithUpdate)).isResponsiveOptions = true, this.currentResponsive = {
              ruleIds: l2,
              mergedOptions: d,
              undoOptions: h
            }, this.updatingResponsive || this.update(d, t4, true)) : this.currentResponsive = void 0);
          }
          t3.compose = function(t4) {
            let i3 = t4.prototype;
            return i3.matchResponsiveRule || s(i3, {
              matchResponsiveRule: e3,
              setResponsive: l
            }), t4;
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Defaults.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Templating.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Renderer/HTML/HTMLElement.js"], e["Core/Axis/Axis.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Axis/LogarithmicAxis.js"], e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], e["Core/Axis/Tick.js"], e["Core/Tooltip.js"], e["Core/Series/Point.js"], e["Core/Pointer.js"], e["Core/Legend/Legend.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Chart/Chart.js"], e["Extensions/ScrollablePlotArea.js"], e["Core/Axis/Stacking/StackingAxis.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Column/ColumnDataLabel.js"], e["Series/Pie/PieDataLabel.js"], e["Core/Series/DataLabel.js"], e["Extensions/OverlappingDataLabels.js"], e["Extensions/BorderRadius.js"], e["Core/Responsive.js"], e["Core/Color/Color.js"], e["Core/Time.js"]], function(t2, e2, i2, s, o, r, n, a, l, h, d, c, p, u, g, f, m, x, y, b, v, M, k, S, C, w, A, T, P, O, L, E, D, B, I, j) {
        return t2.AST = r, t2.Axis = p, t2.Chart = k, t2.Color = I, t2.DataLabel = L, t2.Fx = s, t2.HTMLElement = c, t2.Legend = v, t2.LegendSymbol = M, t2.OverlappingDataLabels = t2.OverlappingDataLabels || E, t2.PlotLineOrBand = f, t2.Point = y, t2.Pointer = b, t2.RendererRegistry = a, t2.Series = A, t2.SeriesRegistry = T, t2.StackItem = w, t2.SVGElement = h, t2.SVGRenderer = d, t2.Templating = n, t2.Tick = m, t2.Time = j, t2.Tooltip = x, t2.animate = o.animate, t2.animObject = o.animObject, t2.chart = k.chart, t2.color = I.parse, t2.dateFormat = n.dateFormat, t2.defaultOptions = i2.defaultOptions, t2.distribute = l.distribute, t2.format = n.format, t2.getDeferredAnimation = o.getDeferredAnimation, t2.getOptions = i2.getOptions, t2.numberFormat = n.numberFormat, t2.seriesType = T.seriesType, t2.setAnimation = o.setAnimation, t2.setOptions = i2.setOptions, t2.stop = o.stop, t2.time = i2.defaultTime, t2.timers = s.timers, D.compose(t2.Series, t2.SVGElement, t2.SVGRenderer), P.compose(t2.Series.types.column), L.compose(t2.Series), u.compose(t2.Axis), c.compose(t2.SVGRenderer), v.compose(t2.Chart), g.compose(t2.Axis), E.compose(t2.Chart), O.compose(t2.Series.types.pie), f.compose(t2.Axis), b.compose(t2.Chart), B.compose(t2.Chart), S.compose(t2.Axis, t2.Chart, t2.Series), C.compose(t2.Axis, t2.Chart, t2.Series), x.compose(t2.Pointer), e2.extend(t2, e2), t2;
      }), i(e, "Extensions/ArrowSymbols.js", [], function() {
        function t2(t3, e3, i3, s2) {
          return [["M", t3, e3 + s2 / 2], ["L", t3 + i3, e3], ["L", t3, e3 + s2 / 2], ["L", t3 + i3, e3 + s2]];
        }
        function e2(e3, i3, s2, o) {
          return t2(e3, i3, s2 / 2, o);
        }
        function i2(t3, e3, i3, s2) {
          return [["M", t3 + i3, e3], ["L", t3, e3 + s2 / 2], ["L", t3 + i3, e3 + s2], ["Z"]];
        }
        function s(t3, e3, s2, o) {
          return i2(t3, e3, s2 / 2, o);
        }
        return {
          compose: function(o) {
            let r = o.prototype.symbols;
            r.arrow = t2, r["arrow-filled"] = i2, r["arrow-filled-half"] = s, r["arrow-half"] = e2, r["triangle-left"] = i2, r["triangle-left-half"] = s;
          }
        };
      }), i(e, "Gantt/Connection.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          defined: i2,
          error: s,
          merge: o,
          objectEach: r
        } = e2, n = t2.deg2rad, a = Math.max, l = Math.min;
        return class {
          constructor(t3, e3, i3) {
            this.init(t3, e3, i3);
          }
          init(t3, e3, i3) {
            this.fromPoint = t3, this.toPoint = e3, this.options = i3, this.chart = t3.series.chart, this.pathfinder = this.chart.pathfinder;
          }
          renderPath(t3, e3) {
            let i3 = this.chart, s2 = i3.styledMode, o2 = this.pathfinder, r2 = {}, n2 = this.graphics && this.graphics.path;
            o2.group || (o2.group = i3.renderer.g().addClass("highcharts-pathfinder-group").attr({
              zIndex: -1
            }).add(i3.seriesGroup)), o2.group.translate(i3.plotLeft, i3.plotTop), n2 && n2.renderer || (n2 = i3.renderer.path().add(o2.group), s2 || n2.attr({
              opacity: 0
            })), n2.attr(e3), r2.d = t3, s2 || (r2.opacity = 1), n2.animate(r2), this.graphics = this.graphics || {}, this.graphics.path = n2;
          }
          addMarker(t3, e3, i3) {
            let s2, o2, r2, a2, l2, h, d, c;
            let p = this.fromPoint.series.chart, u = p.pathfinder, g = p.renderer, f = "start" === t3 ? this.fromPoint : this.toPoint, m = f.getPathfinderAnchorPoint(e3);
            e3.enabled && ((c = "start" === t3 ? i3[1] : i3[i3.length - 2]) && "M" === c[0] || "L" === c[0]) && (d = {
              x: c[1],
              y: c[2]
            }, o2 = f.getRadiansToVector(d, m), s2 = f.getMarkerVector(o2, e3.radius, m), r2 = -o2 / n, e3.width && e3.height ? (l2 = e3.width, h = e3.height) : l2 = h = 2 * e3.radius, this.graphics = this.graphics || {}, a2 = {
              x: s2.x - l2 / 2,
              y: s2.y - h / 2,
              width: l2,
              height: h,
              rotation: r2,
              rotationOriginX: s2.x,
              rotationOriginY: s2.y
            }, this.graphics[t3] ? this.graphics[t3].animate(a2) : (this.graphics[t3] = g.symbol(e3.symbol).addClass("highcharts-point-connecting-path-" + t3 + "-marker highcharts-color-" + this.fromPoint.colorIndex).attr(a2).add(u.group), g.styledMode || this.graphics[t3].attr({
              fill: e3.color || this.fromPoint.color,
              stroke: e3.lineColor,
              "stroke-width": e3.lineWidth,
              opacity: 0
            }).animate({
              opacity: 1
            }, f.series.options.animation)));
          }
          getPath(t3) {
            let e3 = this.pathfinder, i3 = this.chart, r2 = e3.algorithms[t3.type], n2 = e3.chartObstacles;
            return "function" != typeof r2 ? (s('"' + t3.type + '" is not a Pathfinder algorithm.'), {
              path: [],
              obstacles: []
            }) : (r2.requiresObstacles && !n2 && (n2 = e3.chartObstacles = e3.getChartObstacles(t3), i3.options.connectors.algorithmMargin = t3.algorithmMargin, e3.chartObstacleMetrics = e3.getObstacleMetrics(n2)), r2(this.fromPoint.getPathfinderAnchorPoint(t3.startMarker), this.toPoint.getPathfinderAnchorPoint(t3.endMarker), o({
              chartObstacles: n2,
              lineObstacles: e3.lineObstacles || [],
              obstacleMetrics: e3.chartObstacleMetrics,
              hardBounds: {
                xMin: 0,
                xMax: i3.plotWidth,
                yMin: 0,
                yMax: i3.plotHeight
              },
              obstacleOptions: {
                margin: t3.algorithmMargin
              },
              startDirectionX: e3.getAlgorithmStartDirection(t3.startMarker)
            }, t3)));
          }
          render() {
            let t3 = this.fromPoint, e3 = t3.series, s2 = e3.chart, r2 = s2.pathfinder, n2 = {}, h = o(s2.options.connectors, e3.options.connectors, t3.options.connectors, this.options);
            !s2.styledMode && (n2.stroke = h.lineColor || t3.color, n2["stroke-width"] = h.lineWidth, h.dashStyle && (n2.dashstyle = h.dashStyle)), n2.class = "highcharts-point-connecting-path highcharts-color-" + t3.colorIndex, i2((h = o(n2, h)).marker.radius) || (h.marker.radius = l(a(Math.ceil((h.algorithmMargin || 8) / 2) - 1, 1), 5));
            let d = this.getPath(h), c = d.path;
            d.obstacles && (r2.lineObstacles = r2.lineObstacles || [], r2.lineObstacles = r2.lineObstacles.concat(d.obstacles)), this.renderPath(c, n2), this.addMarker("start", o(h.marker, h.startMarker), c), this.addMarker("end", o(h.marker, h.endMarker), c);
          }
          destroy() {
            this.graphics && (r(this.graphics, function(t3) {
              t3.destroy();
            }), delete this.graphics);
          }
        };
      }), i(e, "Extensions/CurrentDateIndication.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          composed: i2
        } = t2, {
          addEvent: s,
          merge: o,
          pushUnique: r,
          wrap: n
        } = e2, a = {
          color: "#ccd3ff",
          width: 2,
          label: {
            format: "%a, %b %d %Y, %H:%M",
            formatter: function(t3, e3) {
              return this.axis.chart.time.dateFormat(e3 || "", t3);
            },
            rotation: 0,
            style: {
              fontSize: "0.7em"
            }
          }
        };
        function l() {
          let t3 = this.options, e3 = t3.currentDateIndicator;
          if (e3) {
            let i3 = "object" == typeof e3 ? o(a, e3) : o(a);
            i3.value = Date.now(), i3.className = "highcharts-current-date-indicator", t3.plotLines || (t3.plotLines = []), t3.plotLines.push(i3);
          }
        }
        function h() {
          this.label && this.label.attr({
            text: this.getLabelText(this.options.label)
          });
        }
        function d(t3, e3) {
          let i3 = this.options;
          return i3 && i3.className && -1 !== i3.className.indexOf("highcharts-current-date-indicator") && i3.label && "function" == typeof i3.label.formatter ? (i3.value = Date.now(), i3.label.formatter.call(this, i3.value, i3.label.format)) : t3.call(this, e3);
        }
        return {
          compose: function(t3, e3) {
            r(i2, "CurrentDateIndication") && (s(t3, "afterSetOptions", l), s(e3, "render", h), n(e3.prototype, "getLabelText", d));
          }
        };
      }), i(e, "Core/Chart/GanttChart.js", [e["Core/Chart/Chart.js"], e["Core/Defaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let {
          defaultOptions: o
        } = e2, {
          isArray: r,
          merge: n,
          splat: a
        } = i2;
        class l extends t2 {
          init(t3, e3) {
            let i3;
            let s2 = t3.xAxis, l2 = t3.yAxis;
            t3.xAxis = t3.yAxis = void 0;
            let h = n(true, {
              chart: {
                type: "gantt"
              },
              title: {
                text: ""
              },
              legend: {
                enabled: false
              },
              navigator: {
                series: {
                  type: "gantt"
                },
                yAxis: {
                  type: "category"
                }
              }
            }, t3, {
              isGantt: true
            });
            t3.xAxis = s2, t3.yAxis = l2, h.xAxis = (r(t3.xAxis) ? t3.xAxis : [t3.xAxis || {}, {}]).map((t4, e4) => (1 === e4 && (i3 = 0), n({
              grid: {
                borderColor: "#cccccc",
                enabled: true
              },
              opposite: o.xAxis?.opposite ?? t4.opposite ?? true,
              linkedTo: i3
            }, t4, {
              type: "datetime"
            }))), h.yAxis = a(t3.yAxis || {}).map((t4) => n({
              grid: {
                borderColor: "#cccccc",
                enabled: true
              },
              staticScale: 50,
              reversed: true,
              type: t4.categories ? t4.type : "treegrid"
            }, t4)), super.init(h, e3);
          }
        }
        return (s = l || (l = {})).ganttChart = function(t3, e3, i3) {
          return new s(t3, e3, i3);
        }, l;
      }), i(e, "Stock/Navigator/ChartNavigatorComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let i2;
        let {
          isTouchDevice: s
        } = t2, {
          addEvent: o,
          merge: r,
          pick: n
        } = e2, a = [];
        function l() {
          this.navigator && this.navigator.setBaseSeries(null, false);
        }
        function h() {
          let t3, e3, i3;
          let s2 = this.legend, o2 = this.navigator;
          if (o2) {
            t3 = s2 && s2.options, e3 = o2.xAxis, i3 = o2.yAxis;
            let {
              scrollbarHeight: r2,
              scrollButtonSize: a2
            } = o2;
            this.inverted ? (o2.left = o2.opposite ? this.chartWidth - r2 - o2.height : this.spacing[3] + r2, o2.top = this.plotTop + a2) : (o2.left = n(e3.left, this.plotLeft + a2), o2.top = o2.navigatorOptions.top || this.chartHeight - o2.height - r2 - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (t3 && "bottom" === t3.verticalAlign && "proximate" !== t3.layout && t3.enabled && !t3.floating ? s2.legendHeight + n(t3.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), e3 && i3 && (this.inverted ? e3.options.left = i3.options.left = o2.left : e3.options.top = i3.options.top = o2.top, e3.setAxisSize(), i3.setAxisSize());
          }
        }
        function d(t3) {
          !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this), n(t3.redraw, true) && this.redraw(t3.animation));
        }
        function c() {
          let t3 = this.options;
          (t3.navigator.enabled || t3.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this));
        }
        function p() {
          let t3 = this.options, e3 = t3.navigator, i3 = t3.rangeSelector;
          if ((e3 && e3.enabled || i3 && i3.enabled) && (!s && "x" === this.zooming.type || s && "x" === this.zooming.pinchType)) return false;
        }
        function u(t3) {
          let e3 = t3.navigator;
          if (e3 && t3.xAxis[0]) {
            let i3 = t3.xAxis[0].getExtremes();
            e3.render(i3.min, i3.max);
          }
        }
        function g(t3) {
          let e3 = t3.options.navigator || {}, i3 = t3.options.scrollbar || {};
          !this.navigator && !this.scroller && (e3.enabled || i3.enabled) && (r(true, this.options.navigator, e3), r(true, this.options.scrollbar, i3), delete t3.options.navigator, delete t3.options.scrollbar);
        }
        return {
          compose: function(t3, s2) {
            if (e2.pushUnique(a, t3)) {
              let e3 = t3.prototype;
              i2 = s2, e3.callbacks.push(u), o(t3, "afterAddSeries", l), o(t3, "afterSetChartSize", h), o(t3, "afterUpdate", d), o(t3, "beforeRender", c), o(t3, "beforeShowResetZoom", p), o(t3, "update", g);
            }
          }
        };
      }), i(e, "Core/Axis/NavigatorAxisComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          isTouchDevice: i2
        } = t2, {
          addEvent: s,
          correctFloat: o,
          defined: r,
          isNumber: n,
          pick: a
        } = e2;
        function l() {
          this.navigatorAxis || (this.navigatorAxis = new d(this));
        }
        function h(t3) {
          let e3;
          let s2 = this.chart, o2 = s2.options, n2 = o2.navigator, a2 = this.navigatorAxis, l2 = s2.zooming.pinchType, h2 = o2.rangeSelector, d2 = s2.zooming.type;
          if (this.isXAxis && (n2?.enabled || h2?.enabled)) {
            if ("y" === d2 && "zoom" === t3.trigger) e3 = false;
            else if (("zoom" === t3.trigger && "xy" === d2 || i2 && "xy" === l2) && this.options.range) {
              let e4 = a2.previousZoom;
              r(t3.min) ? a2.previousZoom = [this.min, this.max] : e4 && (t3.min = e4[0], t3.max = e4[1], a2.previousZoom = void 0);
            }
          }
          void 0 !== e3 && t3.preventDefault();
        }
        class d {
          static compose(t3) {
            t3.keepProps.includes("navigatorAxis") || (t3.keepProps.push("navigatorAxis"), s(t3, "init", l), s(t3, "setExtremes", h));
          }
          constructor(t3) {
            this.axis = t3;
          }
          destroy() {
            this.axis = void 0;
          }
          toFixedRange(t3, e3, i3, s2) {
            let l2 = this.axis, h2 = (l2.pointRange || 0) / 2, d2 = a(i3, l2.translate(t3, true, !l2.horiz)), c = a(s2, l2.translate(e3, true, !l2.horiz));
            return r(i3) || (d2 = o(d2 + h2)), r(s2) || (c = o(c - h2)), n(d2) && n(c) || (d2 = c = void 0), {
              min: d2,
              max: c
            };
          }
        }
        return d;
      }), i(e, "Stock/Navigator/NavigatorDefaults.js", [e["Core/Color/Color.js"], e["Core/Series/SeriesRegistry.js"]], function(t2, e2) {
        let {
          parse: i2
        } = t2, {
          seriesTypes: s
        } = e2;
        return {
          height: 40,
          margin: 25,
          maskInside: true,
          handles: {
            width: 7,
            borderRadius: 0,
            height: 15,
            symbols: ["navigator-handle", "navigator-handle"],
            enabled: true,
            lineWidth: 1,
            backgroundColor: "#f2f2f2",
            borderColor: "#999999"
          },
          maskFill: i2("#667aff").setOpacity(0.3).get(),
          outlineColor: "#999999",
          outlineWidth: 1,
          series: {
            type: void 0 === s.areaspline ? "line" : "areaspline",
            fillOpacity: 0.05,
            lineWidth: 1,
            compare: null,
            sonification: {
              enabled: false
            },
            dataGrouping: {
              approximation: "average",
              enabled: true,
              groupPixelWidth: 2,
              firstAnchor: "firstPoint",
              anchor: "middle",
              lastAnchor: "lastPoint",
              units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]]
            },
            dataLabels: {
              enabled: false,
              zIndex: 2
            },
            id: "highcharts-navigator-series",
            className: "highcharts-navigator-series",
            lineColor: null,
            marker: {
              enabled: false
            },
            threshold: null
          },
          xAxis: {
            className: "highcharts-navigator-xaxis",
            tickLength: 0,
            lineWidth: 0,
            gridLineColor: "#e6e6e6",
            id: "navigator-x-axis",
            gridLineWidth: 1,
            tickPixelInterval: 200,
            labels: {
              align: "left",
              style: {
                color: "#000000",
                fontSize: "0.7em",
                opacity: 0.6,
                textOutline: "2px contrast"
              },
              x: 3,
              y: -4
            },
            crosshair: false
          },
          yAxis: {
            className: "highcharts-navigator-yaxis",
            gridLineWidth: 0,
            startOnTick: false,
            endOnTick: false,
            minPadding: 0.1,
            id: "navigator-y-axis",
            maxPadding: 0.1,
            labels: {
              enabled: false
            },
            crosshair: false,
            title: {
              text: null
            },
            tickLength: 0,
            tickWidth: 0
          }
        };
      }), i(e, "Stock/Navigator/NavigatorSymbols.js", [e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          relativeLength: i2
        } = e2;
        return {
          "navigator-handle": function(e3, s, o, r, n = {}) {
            let a = n.width ? n.width / 2 : o, l = i2(n.borderRadius || 0, Math.min(2 * a, r));
            return [["M", -1.5, (r = n.height || r) / 2 - 3.5], ["L", -1.5, r / 2 + 4.5], ["M", 0.5, r / 2 - 3.5], ["L", 0.5, r / 2 + 4.5], ...t2.rect(-a - 1, 0.5, 2 * a + 1, r, {
              r: l
            })];
          }
        };
      }), i(e, "Stock/Utilities/StockUtilities.js", [e["Core/Utilities.js"]], function(t2) {
        let {
          defined: e2
        } = t2;
        return {
          setFixedRange: function(t3) {
            let i2 = this.xAxis[0];
            e2(i2.dataMax) && e2(i2.dataMin) && t3 ? this.fixedRange = Math.min(t3, i2.dataMax - i2.dataMin) : this.fixedRange = t3;
          }
        };
      }), i(e, "Stock/Navigator/NavigatorComposition.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/NavigatorAxisComposition.js"], e["Stock/Navigator/NavigatorDefaults.js"], e["Stock/Navigator/NavigatorSymbols.js"], e["Core/Renderer/RendererRegistry.js"], e["Stock/Utilities/StockUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a) {
        let {
          setOptions: l
        } = t2, {
          composed: h
        } = e2, {
          getRendererType: d
        } = r, {
          setFixedRange: c
        } = n, {
          addEvent: p,
          extend: u,
          pushUnique: g
        } = a;
        function f() {
          this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, false);
        }
        return {
          compose: function(t3, e3, r2) {
            i2.compose(e3), g(h, "Navigator") && (t3.prototype.setFixedRange = c, u(d().prototype.symbols, o), p(r2, "afterUpdate", f), l({
              navigator: s
            }));
          }
        };
      }), i(e, "Core/Axis/ScrollbarAxis.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        var i2;
        let {
          composed: s
        } = t2, {
          addEvent: o,
          defined: r,
          pick: n,
          pushUnique: a
        } = e2;
        return function(t3) {
          let e3;
          function i3(t4) {
            let e4 = n(t4.options && t4.options.min, t4.min), i4 = n(t4.options && t4.options.max, t4.max);
            return {
              axisMin: e4,
              axisMax: i4,
              scrollMin: r(t4.dataMin) ? Math.min(e4, t4.min, t4.dataMin, n(t4.threshold, 1 / 0)) : e4,
              scrollMax: r(t4.dataMax) ? Math.max(i4, t4.max, t4.dataMax, n(t4.threshold, -1 / 0)) : i4
            };
          }
          function l() {
            let t4 = this.scrollbar, e4 = t4 && !t4.options.opposite, i4 = this.horiz ? 2 : e4 ? 3 : 1;
            t4 && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[i4] += t4.size + (t4.options.margin || 0));
          }
          function h() {
            let t4 = this;
            t4.options && t4.options.scrollbar && t4.options.scrollbar.enabled && (t4.options.scrollbar.vertical = !t4.horiz, t4.options.startOnTick = t4.options.endOnTick = false, t4.scrollbar = new e3(t4.chart.renderer, t4.options.scrollbar, t4.chart), o(t4.scrollbar, "changed", function(e4) {
              let s2, o2;
              let {
                axisMin: n2,
                axisMax: a2,
                scrollMin: l2,
                scrollMax: h2
              } = i3(t4), d2 = h2 - l2;
              if (r(n2) && r(a2)) {
                if (t4.horiz && !t4.reversed || !t4.horiz && t4.reversed ? (s2 = l2 + d2 * this.to, o2 = l2 + d2 * this.from) : (s2 = l2 + d2 * (1 - this.from), o2 = l2 + d2 * (1 - this.to)), this.shouldUpdateExtremes(e4.DOMType)) {
                  let i4 = "mousemove" !== e4.DOMType && "touchmove" !== e4.DOMType && void 0;
                  t4.setExtremes(o2, s2, true, i4, e4);
                } else this.setRange(this.from, this.to);
              }
            }));
          }
          function d() {
            let t4, e4, s2;
            let {
              scrollMin: o2,
              scrollMax: n2
            } = i3(this), a2 = this.scrollbar, l2 = this.axisTitleMargin + (this.titleOffset || 0), h2 = this.chart.scrollbarsOffsets, d2 = this.options.margin || 0;
            if (a2 && h2) {
              if (this.horiz) this.opposite || (h2[1] += l2), a2.position(this.left, this.top + this.height + 2 + h2[1] - (this.opposite ? d2 : 0), this.width, this.height), this.opposite || (h2[1] += d2), t4 = 1;
              else {
                let e5;
                this.opposite && (h2[0] += l2), e5 = a2.options.opposite ? this.left + this.width + 2 + h2[0] - (this.opposite ? 0 : d2) : this.opposite ? 0 : d2, a2.position(e5, this.top, this.width, this.height), this.opposite && (h2[0] += d2), t4 = 0;
              }
              h2[t4] += a2.size + (a2.options.margin || 0), isNaN(o2) || isNaN(n2) || !r(this.min) || !r(this.max) || this.min === this.max ? a2.setRange(0, 1) : (e4 = (this.min - o2) / (n2 - o2), s2 = (this.max - o2) / (n2 - o2), this.horiz && !this.reversed || !this.horiz && this.reversed ? a2.setRange(e4, s2) : a2.setRange(1 - s2, 1 - e4));
            }
          }
          t3.compose = function(t4, i4) {
            a(s, "Axis.Scrollbar") && (e3 = i4, o(t4, "afterGetOffset", l), o(t4, "afterInit", h), o(t4, "afterRender", d));
          };
        }(i2 || (i2 = {})), i2;
      }), i(e, "Stock/Scrollbar/ScrollbarDefaults.js", [], function() {
        return {
          height: 10,
          barBorderRadius: 5,
          buttonBorderRadius: 0,
          buttonsEnabled: false,
          liveRedraw: void 0,
          margin: void 0,
          minWidth: 6,
          opposite: true,
          step: 0.2,
          zIndex: 3,
          barBackgroundColor: "#cccccc",
          barBorderWidth: 0,
          barBorderColor: "#cccccc",
          buttonArrowColor: "#333333",
          buttonBackgroundColor: "#e6e6e6",
          buttonBorderColor: "#cccccc",
          buttonBorderWidth: 1,
          rifleColor: "none",
          trackBackgroundColor: "rgba(255, 255, 255, 0.001)",
          trackBorderColor: "#cccccc",
          trackBorderRadius: 5,
          trackBorderWidth: 1
        };
      }), i(e, "Stock/Scrollbar/Scrollbar.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/ScrollbarAxis.js"], e["Stock/Scrollbar/ScrollbarDefaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let {
          defaultOptions: r
        } = t2, {
          addEvent: n,
          correctFloat: a,
          crisp: l,
          defined: h,
          destroyObjectProperties: d,
          fireEvent: c,
          merge: p,
          pick: u,
          removeEvent: g
        } = o;
        class f {
          static compose(t3) {
            i2.compose(t3, f);
          }
          static swapXY(t3, e3) {
            return e3 && t3.forEach((t4) => {
              let e4;
              let i3 = t4.length;
              for (let s2 = 0; s2 < i3; s2 += 2) "number" == typeof (e4 = t4[s2 + 1]) && (t4[s2 + 1] = t4[s2 + 2], t4[s2 + 2] = e4);
            }), t3;
          }
          constructor(t3, e3, i3) {
            this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(t3, e3, i3);
          }
          addEvents() {
            let t3 = this.options.inverted ? [1, 0] : [0, 1], e3 = this.scrollbarButtons, i3 = this.scrollbarGroup.element, s2 = this.track.element, o2 = this.mouseDownHandler.bind(this), r2 = this.mouseMoveHandler.bind(this), a2 = this.mouseUpHandler.bind(this), l2 = [[e3[t3[0]].element, "click", this.buttonToMinClick.bind(this)], [e3[t3[1]].element, "click", this.buttonToMaxClick.bind(this)], [s2, "click", this.trackClick.bind(this)], [i3, "mousedown", o2], [i3.ownerDocument, "mousemove", r2], [i3.ownerDocument, "mouseup", a2], [i3, "touchstart", o2], [i3.ownerDocument, "touchmove", r2], [i3.ownerDocument, "touchend", a2]];
            l2.forEach(function(t4) {
              n.apply(null, t4);
            }), this._events = l2;
          }
          buttonToMaxClick(t3) {
            let e3 = (this.to - this.from) * u(this.options.step, 0.2);
            this.updatePosition(this.from + e3, this.to + e3), c(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMEvent: t3
            });
          }
          buttonToMinClick(t3) {
            let e3 = a(this.to - this.from) * u(this.options.step, 0.2);
            this.updatePosition(a(this.from - e3), a(this.to - e3)), c(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMEvent: t3
            });
          }
          cursorToScrollbarPosition(t3) {
            let e3 = this.options, i3 = e3.minWidth > this.calculatedWidth ? e3.minWidth : 0;
            return {
              chartX: (t3.chartX - this.x - this.xOffset) / (this.barWidth - i3),
              chartY: (t3.chartY - this.y - this.yOffset) / (this.barWidth - i3)
            };
          }
          destroy() {
            let t3 = this, e3 = t3.chart.scroller;
            t3.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(e4) {
              t3[e4] && t3[e4].destroy && (t3[e4] = t3[e4].destroy());
            }), e3 && t3 === e3.scrollbar && (e3.scrollbar = null, d(e3.scrollbarButtons));
          }
          drawScrollbarButton(t3) {
            let e3 = this.renderer, i3 = this.scrollbarButtons, s2 = this.options, o2 = this.size, r2 = e3.g().add(this.group);
            if (i3.push(r2), s2.buttonsEnabled) {
              let n2 = e3.rect().addClass("highcharts-scrollbar-button").add(r2);
              this.chart.styledMode || n2.attr({
                stroke: s2.buttonBorderColor,
                "stroke-width": s2.buttonBorderWidth,
                fill: s2.buttonBackgroundColor
              }), n2.attr(n2.crisp({
                x: -0.5,
                y: -0.5,
                width: o2,
                height: o2,
                r: s2.buttonBorderRadius
              }, n2.strokeWidth()));
              let a2 = e3.path(f.swapXY([["M", o2 / 2 + (t3 ? -1 : 1), o2 / 2 - 3], ["L", o2 / 2 + (t3 ? -1 : 1), o2 / 2 + 3], ["L", o2 / 2 + (t3 ? 2 : -2), o2 / 2]], s2.vertical)).addClass("highcharts-scrollbar-arrow").add(i3[t3]);
              this.chart.styledMode || a2.attr({
                fill: s2.buttonArrowColor
              });
            }
          }
          init(t3, e3, i3) {
            this.scrollbarButtons = [], this.renderer = t3, this.userOptions = e3, this.options = p(s, r.scrollbar, e3), this.options.margin = u(this.options.margin, 10), this.chart = i3, this.size = u(this.options.size, this.options.height), e3.enabled && (this.render(), this.addEvents());
          }
          mouseDownHandler(t3) {
            let e3 = this.chart.pointer?.normalize(t3) || t3, i3 = this.cursorToScrollbarPosition(e3);
            this.chartX = i3.chartX, this.chartY = i3.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = true;
          }
          mouseMoveHandler(t3) {
            let e3;
            let i3 = this.chart.pointer?.normalize(t3) || t3, s2 = this.options.vertical ? "chartY" : "chartX", o2 = this.initPositions || [];
            this.grabbedCenter && (!t3.touches || 0 !== t3.touches[0][s2]) && (e3 = this.cursorToScrollbarPosition(i3)[s2] - this[s2], this.hasDragged = true, this.updatePosition(o2[0] + e3, o2[1] + e3), this.hasDragged && c(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMType: t3.type,
              DOMEvent: t3
            }));
          }
          mouseUpHandler(t3) {
            this.hasDragged && c(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMType: t3.type,
              DOMEvent: t3
            }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
          }
          position(t3, e3, i3, s2) {
            let {
              buttonsEnabled: o2,
              margin: r2 = 0,
              vertical: n2
            } = this.options, a2 = this.rendered ? "animate" : "attr", l2 = s2, h2 = 0;
            this.group.show(), this.x = t3, this.y = e3 + this.trackBorderWidth, this.width = i3, this.height = s2, this.xOffset = l2, this.yOffset = h2, n2 ? (this.width = this.yOffset = i3 = h2 = this.size, this.xOffset = l2 = 0, this.yOffset = h2 = o2 ? this.size : 0, this.barWidth = s2 - (o2 ? 2 * i3 : 0), this.x = t3 += r2) : (this.height = s2 = this.size, this.xOffset = l2 = o2 ? this.size : 0, this.barWidth = i3 - (o2 ? 2 * s2 : 0), this.y = this.y + r2), this.group[a2]({
              translateX: t3,
              translateY: this.y
            }), this.track[a2]({
              width: i3,
              height: s2
            }), this.scrollbarButtons[1][a2]({
              translateX: n2 ? 0 : i3 - l2,
              translateY: n2 ? s2 - h2 : 0
            });
          }
          removeEvents() {
            this._events.forEach(function(t3) {
              g.apply(null, t3);
            }), this._events.length = 0;
          }
          render() {
            let t3 = this.renderer, e3 = this.options, i3 = this.size, s2 = this.chart.styledMode, o2 = t3.g("scrollbar").attr({
              zIndex: e3.zIndex
            }).hide().add();
            this.group = o2, this.track = t3.rect().addClass("highcharts-scrollbar-track").attr({
              r: e3.trackBorderRadius || 0,
              height: i3,
              width: i3
            }).add(o2), s2 || this.track.attr({
              fill: e3.trackBackgroundColor,
              stroke: e3.trackBorderColor,
              "stroke-width": e3.trackBorderWidth
            });
            let r2 = this.trackBorderWidth = this.track.strokeWidth();
            this.track.attr({
              x: -l(0, r2),
              y: -l(0, r2)
            }), this.scrollbarGroup = t3.g().add(o2), this.scrollbar = t3.rect().addClass("highcharts-scrollbar-thumb").attr({
              height: i3 - r2,
              width: i3 - r2,
              r: e3.barBorderRadius || 0
            }).add(this.scrollbarGroup), this.scrollbarRifles = t3.path(f.swapXY([["M", -3, i3 / 4], ["L", -3, 2 * i3 / 3], ["M", 0, i3 / 4], ["L", 0, 2 * i3 / 3], ["M", 3, i3 / 4], ["L", 3, 2 * i3 / 3]], e3.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), s2 || (this.scrollbar.attr({
              fill: e3.barBackgroundColor,
              stroke: e3.barBorderColor,
              "stroke-width": e3.barBorderWidth
            }), this.scrollbarRifles.attr({
              stroke: e3.rifleColor,
              "stroke-width": 1
            })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-l(0, this.scrollbarStrokeWidth), -l(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
          }
          setRange(t3, e3) {
            let i3, s2;
            let o2 = this.options, r2 = o2.vertical, n2 = o2.minWidth, l2 = this.barWidth, d2 = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
            if (!h(l2)) return;
            let c2 = l2 * Math.min(e3, 1);
            i3 = Math.ceil(l2 * (t3 = Math.max(t3, 0))), this.calculatedWidth = s2 = a(c2 - i3), s2 < n2 && (i3 = (l2 - n2 + s2) * t3, s2 = n2);
            let p2 = Math.floor(i3 + this.xOffset + this.yOffset), u2 = s2 / 2 - 0.5;
            this.from = t3, this.to = e3, r2 ? (this.scrollbarGroup[d2]({
              translateY: p2
            }), this.scrollbar[d2]({
              height: s2
            }), this.scrollbarRifles[d2]({
              translateY: u2
            }), this.scrollbarTop = p2, this.scrollbarLeft = 0) : (this.scrollbarGroup[d2]({
              translateX: p2
            }), this.scrollbar[d2]({
              width: s2
            }), this.scrollbarRifles[d2]({
              translateX: u2
            }), this.scrollbarLeft = p2, this.scrollbarTop = 0), s2 <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), false === o2.showFull && (t3 <= 0 && e3 >= 1 ? this.group.hide() : this.group.show()), this.rendered = true;
          }
          shouldUpdateExtremes(t3) {
            return u(this.options.liveRedraw, e2.svg && !e2.isTouchDevice && !this.chart.boosted) || "mouseup" === t3 || "touchend" === t3 || !h(t3);
          }
          trackClick(t3) {
            let e3 = this.chart.pointer?.normalize(t3) || t3, i3 = this.to - this.from, s2 = this.y + this.scrollbarTop, o2 = this.x + this.scrollbarLeft;
            this.options.vertical && e3.chartY > s2 || !this.options.vertical && e3.chartX > o2 ? this.updatePosition(this.from + i3, this.to + i3) : this.updatePosition(this.from - i3, this.to - i3), c(this, "changed", {
              from: this.from,
              to: this.to,
              trigger: "scrollbar",
              DOMEvent: t3
            });
          }
          update(t3) {
            this.destroy(), this.init(this.chart.renderer, p(true, this.options, t3), this.chart);
          }
          updatePosition(t3, e3) {
            e3 > 1 && (t3 = a(1 - a(e3 - t3)), e3 = 1), t3 < 0 && (e3 = a(e3 - t3), t3 = 0), this.from = t3, this.to = e3;
          }
        }
        return f.defaultOptions = s, r.scrollbar = p(true, f.defaultOptions, r.scrollbar), f;
      }), i(e, "Stock/Navigator/Navigator.js", [e["Core/Axis/Axis.js"], e["Stock/Navigator/ChartNavigatorComposition.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/NavigatorAxisComposition.js"], e["Stock/Navigator/NavigatorComposition.js"], e["Stock/Scrollbar/Scrollbar.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a, l) {
        let {
          defaultOptions: h
        } = i2, {
          isTouchDevice: d
        } = s, {
          prototype: {
            symbols: c
          }
        } = a, {
          addEvent: p,
          clamp: u,
          correctFloat: g,
          defined: f,
          destroyObjectProperties: m,
          erase: x,
          extend: y,
          find: b,
          fireEvent: v,
          isArray: M,
          isNumber: k,
          merge: S,
          pick: C,
          removeEvent: w,
          splat: A
        } = l;
        function T(t3, ...e3) {
          let i3 = [].filter.call(e3, k);
          if (i3.length) return Math[t3].apply(0, i3);
        }
        class P {
          static compose(t3, i3, s2) {
            e2.compose(t3, P), r.compose(t3, i3, s2);
          }
          constructor(t3) {
            this.isDirty = false, this.scrollbarHeight = 0, this.init(t3);
          }
          drawHandle(t3, e3, i3, s2) {
            let o2 = this.navigatorOptions.handles.height;
            this.handles[e3][s2](i3 ? {
              translateX: Math.round(this.left + this.height / 2),
              translateY: Math.round(this.top + parseInt(t3, 10) + 0.5 - o2)
            } : {
              translateX: Math.round(this.left + parseInt(t3, 10)),
              translateY: Math.round(this.top + this.height / 2 - o2 / 2 - 1)
            });
          }
          drawOutline(t3, e3, i3, s2) {
            let o2 = this.navigatorOptions.maskInside, r2 = this.outline.strokeWidth(), n2 = r2 / 2, a2 = r2 % 2 / 2, l2 = this.scrollButtonSize, h2 = this.size, d2 = this.top, c2 = this.height, p2 = d2 - n2, u2 = d2 + c2, g2 = this.left, f2, m2;
            i3 ? (f2 = d2 + e3 + a2, e3 = d2 + t3 + a2, m2 = [["M", g2 + c2, d2 - l2 - a2], ["L", g2 + c2, f2], ["L", g2, f2], ["M", g2, e3], ["L", g2 + c2, e3], ["L", g2 + c2, d2 + h2 + l2]], o2 && m2.push(["M", g2 + c2, f2 - n2], ["L", g2 + c2, e3 + n2])) : (g2 -= l2, t3 += g2 + l2 - a2, e3 += g2 + l2 - a2, m2 = [["M", g2, p2], ["L", t3, p2], ["L", t3, u2], ["M", e3, u2], ["L", e3, p2], ["L", g2 + h2 + 2 * l2, p2]], o2 && m2.push(["M", t3 - n2, p2], ["L", e3 + n2, p2])), this.outline[s2]({
              d: m2
            });
          }
          drawMasks(t3, e3, i3, s2) {
            let o2, r2, n2, a2;
            let l2 = this.left, h2 = this.top, d2 = this.height;
            i3 ? (n2 = [l2, l2, l2], a2 = [h2, h2 + t3, h2 + e3], r2 = [d2, d2, d2], o2 = [t3, e3 - t3, this.size - e3]) : (n2 = [l2, l2 + t3, l2 + e3], a2 = [h2, h2, h2], r2 = [t3, e3 - t3, this.size - e3], o2 = [d2, d2, d2]), this.shades.forEach((t4, e4) => {
              t4[s2]({
                x: n2[e4],
                y: a2[e4],
                width: r2[e4],
                height: o2[e4]
              });
            });
          }
          renderElements() {
            let t3 = this, e3 = t3.navigatorOptions, i3 = e3.maskInside, s2 = t3.chart, o2 = s2.inverted, r2 = s2.renderer, n2 = {
              cursor: o2 ? "ns-resize" : "ew-resize"
            }, a2 = t3.navigatorGroup ?? (t3.navigatorGroup = r2.g("navigator").attr({
              zIndex: 8,
              visibility: "hidden"
            }).add());
            if ([!i3, i3, !i3].forEach((i4, o3) => {
              let l2 = t3.shades[o3] ?? (t3.shades[o3] = r2.rect().addClass("highcharts-navigator-mask" + (1 === o3 ? "-inside" : "-outside")).add(a2));
              s2.styledMode || (l2.attr({
                fill: i4 ? e3.maskFill : "rgba(0,0,0,0)"
              }), 1 === o3 && l2.css(n2));
            }), t3.outline || (t3.outline = r2.path().addClass("highcharts-navigator-outline").add(a2)), s2.styledMode || t3.outline.attr({
              "stroke-width": e3.outlineWidth,
              stroke: e3.outlineColor
            }), e3.handles?.enabled) {
              let i4 = e3.handles, {
                height: o3,
                width: l2
              } = i4;
              [0, 1].forEach((e4) => {
                let h2 = i4.symbols[e4];
                if (t3.handles[e4]) {
                  if (h2 !== t3.handles[e4].symbolName) {
                    let i5 = c[h2].call(c, -l2 / 2 - 1, 0, l2, o3);
                    t3.handles[e4].attr({
                      d: i5
                    }), t3.handles[e4].symbolName = h2;
                  }
                } else t3.handles[e4] = r2.symbol(h2, -l2 / 2 - 1, 0, l2, o3, i4), t3.handles[e4].attr({
                  zIndex: 7 - e4
                }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][e4]).add(a2);
                s2.inverted && t3.handles[e4].attr({
                  rotation: 90,
                  rotationOriginX: Math.floor(-l2 / 2),
                  rotationOriginY: (o3 + l2) / 2
                }), s2.styledMode || t3.handles[e4].attr({
                  fill: i4.backgroundColor,
                  stroke: i4.borderColor,
                  "stroke-width": i4.lineWidth,
                  width: i4.width,
                  height: i4.height,
                  x: -l2 / 2 - 1,
                  y: 0
                }).css(n2);
              });
            }
          }
          update(t3, e3 = false) {
            let i3 = this.chart, s2 = i3.options.chart.inverted !== i3.scrollbar?.options.vertical;
            if (S(true, i3.options.navigator, t3), this.navigatorOptions = i3.options.navigator || {}, this.setOpposite(), f(t3.enabled) || s2) return this.destroy(), this.navigatorEnabled = t3.enabled || this.navigatorEnabled, this.init(i3);
            if (this.navigatorEnabled && (this.isDirty = true, false === t3.adaptToUpdatedData && this.baseSeries.forEach((t4) => {
              w(t4, "updatedData", this.updatedDataHandler);
            }, this), t3.adaptToUpdatedData && this.baseSeries.forEach((t4) => {
              t4.eventsToUnbind.push(p(t4, "updatedData", this.updatedDataHandler));
            }, this), (t3.series || t3.baseSeries) && this.setBaseSeries(void 0, false), t3.height || t3.xAxis || t3.yAxis)) {
              this.height = t3.height ?? this.height;
              let e4 = this.getXAxisOffsets();
              this.xAxis.update(__spreadProps(__spreadValues({}, t3.xAxis), {
                offsets: e4,
                [i3.inverted ? "width" : "height"]: this.height,
                [i3.inverted ? "height" : "width"]: void 0
              }), false), this.yAxis.update(__spreadProps(__spreadValues({}, t3.yAxis), {
                [i3.inverted ? "width" : "height"]: this.height
              }), false);
            }
            e3 && i3.redraw();
          }
          render(t3, e3, i3, s2) {
            let o2 = this.chart, r2 = this.xAxis, n2 = r2.pointRange || 0, a2 = r2.navigatorAxis.fake ? o2.xAxis[0] : r2, l2 = this.navigatorEnabled, h2 = this.rendered, d2 = o2.inverted, c2 = o2.xAxis[0].minRange, p2 = o2.xAxis[0].options.maxRange, m2 = this.scrollButtonSize, x2, y2, b2, M2 = this.scrollbarHeight, S2, w2;
            if (this.hasDragged && !f(i3)) return;
            if (this.isDirty && this.renderElements(), t3 = g(t3 - n2 / 2), e3 = g(e3 + n2 / 2), !k(t3) || !k(e3)) {
              if (!h2) return;
              i3 = 0, s2 = C(r2.width, a2.width);
            }
            this.left = C(r2.left, o2.plotLeft + m2 + (d2 ? o2.plotWidth : 0));
            let A2 = this.size = S2 = C(r2.len, (d2 ? o2.plotHeight : o2.plotWidth) - 2 * m2);
            x2 = d2 ? M2 : S2 + 2 * m2, i3 = C(i3, r2.toPixels(t3, true)), s2 = C(s2, r2.toPixels(e3, true)), k(i3) && Math.abs(i3) !== 1 / 0 || (i3 = 0, s2 = x2);
            let T2 = r2.toValue(i3, true), P2 = r2.toValue(s2, true), O = Math.abs(g(P2 - T2));
            O < c2 ? this.grabbedLeft ? i3 = r2.toPixels(P2 - c2 - n2, true) : this.grabbedRight && (s2 = r2.toPixels(T2 + c2 + n2, true)) : f(p2) && g(O - n2) > p2 && (this.grabbedLeft ? i3 = r2.toPixels(P2 - p2 - n2, true) : this.grabbedRight && (s2 = r2.toPixels(T2 + p2 + n2, true))), this.zoomedMax = u(Math.max(i3, s2), 0, A2), this.zoomedMin = u(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i3, s2), 0, A2), this.range = this.zoomedMax - this.zoomedMin, A2 = Math.round(this.zoomedMax);
            let L = Math.round(this.zoomedMin);
            l2 && (this.navigatorGroup.attr({
              visibility: "inherit"
            }), w2 = h2 && !this.hasDragged ? "animate" : "attr", this.drawMasks(L, A2, d2, w2), this.drawOutline(L, A2, d2, w2), this.navigatorOptions.handles.enabled && (this.drawHandle(L, 0, d2, w2), this.drawHandle(A2, 1, d2, w2))), this.scrollbar && (d2 ? (b2 = this.top - m2, y2 = this.left - M2 + (l2 || !a2.opposite ? 0 : (a2.titleOffset || 0) + a2.axisTitleMargin), M2 = S2 + 2 * m2) : (b2 = this.top + (l2 ? this.height : -M2), y2 = this.left - m2), this.scrollbar.position(y2, b2, x2, M2), this.scrollbar.setRange(this.zoomedMin / (S2 || 1), this.zoomedMax / (S2 || 1))), this.rendered = true, this.isDirty = false, v(this, "afterRender");
          }
          addMouseEvents() {
            let t3 = this, e3 = t3.chart, i3 = e3.container, s2 = [], o2, r2;
            t3.mouseMoveHandler = o2 = function(e4) {
              t3.onMouseMove(e4);
            }, t3.mouseUpHandler = r2 = function(e4) {
              t3.onMouseUp(e4);
            }, (s2 = t3.getPartsEvents("mousedown")).push(p(e3.renderTo, "mousemove", o2), p(i3.ownerDocument, "mouseup", r2), p(e3.renderTo, "touchmove", o2), p(i3.ownerDocument, "touchend", r2)), s2.concat(t3.getPartsEvents("touchstart")), t3.eventsToUnbind = s2, t3.series && t3.series[0] && s2.push(p(t3.series[0].xAxis, "foundExtremes", function() {
              e3.navigator.modifyNavigatorAxisExtremes();
            }));
          }
          getPartsEvents(t3) {
            let e3 = this, i3 = [];
            return ["shades", "handles"].forEach(function(s2) {
              e3[s2].forEach(function(o2, r2) {
                i3.push(p(o2.element, t3, function(t4) {
                  e3[s2 + "Mousedown"](t4, r2);
                }));
              });
            }), i3;
          }
          shadesMousedown(t3, e3) {
            t3 = this.chart.pointer?.normalize(t3) || t3;
            let i3 = this.chart, s2 = this.xAxis, o2 = this.zoomedMin, r2 = this.size, n2 = this.range, a2 = this.left, l2 = t3.chartX, h2, d2, c2, p2;
            i3.inverted && (l2 = t3.chartY, a2 = this.top), 1 === e3 ? (this.grabbedCenter = l2, this.fixedWidth = n2, this.dragOffset = l2 - o2) : (p2 = l2 - a2 - n2 / 2, 0 === e3 ? p2 = Math.max(0, p2) : 2 === e3 && p2 + n2 >= r2 && (p2 = r2 - n2, this.reversedExtremes ? (p2 -= n2, d2 = this.getUnionExtremes().dataMin) : h2 = this.getUnionExtremes().dataMax), p2 !== o2 && (this.fixedWidth = n2, f((c2 = s2.navigatorAxis.toFixedRange(p2, p2 + n2, d2, h2)).min) && v(this, "setRange", {
              min: Math.min(c2.min, c2.max),
              max: Math.max(c2.min, c2.max),
              redraw: true,
              eventArguments: {
                trigger: "navigator"
              }
            })));
          }
          handlesMousedown(t3, e3) {
            t3 = this.chart.pointer?.normalize(t3) || t3;
            let i3 = this.chart, s2 = i3.xAxis[0], o2 = this.reversedExtremes;
            0 === e3 ? (this.grabbedLeft = true, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = o2 ? s2.min : s2.max) : (this.grabbedRight = true, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = o2 ? s2.max : s2.min), i3.setFixedRange(void 0);
          }
          onMouseMove(t3) {
            let e3 = this, i3 = e3.chart, s2 = e3.navigatorSize, o2 = e3.range, r2 = e3.dragOffset, n2 = i3.inverted, a2 = e3.left, l2;
            (!t3.touches || 0 !== t3.touches[0].pageX) && (l2 = (t3 = i3.pointer?.normalize(t3) || t3).chartX, n2 && (a2 = e3.top, l2 = t3.chartY), e3.grabbedLeft ? (e3.hasDragged = true, e3.render(0, 0, l2 - a2, e3.otherHandlePos)) : e3.grabbedRight ? (e3.hasDragged = true, e3.render(0, 0, e3.otherHandlePos, l2 - a2)) : e3.grabbedCenter && (e3.hasDragged = true, l2 < r2 ? l2 = r2 : l2 > s2 + r2 - o2 && (l2 = s2 + r2 - o2), e3.render(0, 0, l2 - r2, l2 - r2 + o2)), e3.hasDragged && e3.scrollbar && C(e3.scrollbar.options.liveRedraw, !d && !this.chart.boosted) && (t3.DOMType = t3.type, setTimeout(function() {
              e3.onMouseUp(t3);
            }, 0)));
          }
          onMouseUp(t3) {
            let e3, i3, s2, o2, r2, n2;
            let a2 = this.chart, l2 = this.xAxis, h2 = this.scrollbar, d2 = t3.DOMEvent || t3, c2 = a2.inverted, p2 = this.rendered && !this.hasDragged ? "animate" : "attr";
            (this.hasDragged && (!h2 || !h2.hasDragged) || "scrollbar" === t3.trigger) && (s2 = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? o2 = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (r2 = this.fixedExtreme), this.zoomedMax === this.size && (r2 = this.reversedExtremes ? s2.dataMin : s2.dataMax), 0 === this.zoomedMin && (o2 = this.reversedExtremes ? s2.dataMax : s2.dataMin), f((n2 = l2.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, o2, r2)).min) && v(this, "setRange", {
              min: Math.min(n2.min, n2.max),
              max: Math.max(n2.min, n2.max),
              redraw: true,
              animation: !this.hasDragged && null,
              eventArguments: {
                trigger: "navigator",
                triggerOp: "navigator-drag",
                DOMEvent: d2
              }
            })), "mousemove" !== t3.DOMType && "touchmove" !== t3.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && k(this.zoomedMin) && k(this.zoomedMax) && (i3 = Math.round(this.zoomedMin), e3 = Math.round(this.zoomedMax), this.shades && this.drawMasks(i3, e3, c2, p2), this.outline && this.drawOutline(i3, e3, c2, p2), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(i3, 0, c2, p2), this.drawHandle(e3, 1, c2, p2)));
          }
          removeEvents() {
            this.eventsToUnbind && (this.eventsToUnbind.forEach(function(t3) {
              t3();
            }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
          }
          removeBaseSeriesEvents() {
            let t3 = this.baseSeries || [];
            this.navigatorEnabled && t3[0] && (false !== this.navigatorOptions.adaptToUpdatedData && t3.forEach(function(t4) {
              w(t4, "updatedData", this.updatedDataHandler);
            }, this), t3[0].xAxis && w(t3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
          }
          getXAxisOffsets() {
            return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
          }
          init(e3) {
            let i3 = e3.options, s2 = i3.navigator || {}, r2 = s2.enabled, a2 = i3.scrollbar || {}, l2 = a2.enabled, h2 = r2 && s2.height || 0, d2 = l2 && a2.height || 0, c2 = a2.buttonsEnabled && d2 || 0;
            this.handles = [], this.shades = [], this.chart = e3, this.setBaseSeries(), this.height = h2, this.scrollbarHeight = d2, this.scrollButtonSize = c2, this.scrollbarEnabled = l2, this.navigatorEnabled = r2, this.navigatorOptions = s2, this.scrollbarOptions = a2, this.setOpposite();
            let u2 = this, g2 = u2.baseSeries, f2 = e3.xAxis.length, m2 = e3.yAxis.length, x2 = g2 && g2[0] && g2[0].xAxis || e3.xAxis[0] || {
              options: {}
            };
            if (e3.isDirtyBox = true, u2.navigatorEnabled) {
              let i4 = this.getXAxisOffsets();
              u2.xAxis = new t2(e3, S({
                breaks: x2.options.breaks,
                ordinal: x2.options.ordinal,
                overscroll: x2.options.overscroll
              }, s2.xAxis, {
                type: "datetime",
                index: f2,
                isInternal: true,
                offset: 0,
                keepOrdinalPadding: true,
                startOnTick: false,
                endOnTick: false,
                minPadding: x2.options.ordinal ? 0 : x2.options.minPadding,
                maxPadding: x2.options.ordinal ? 0 : x2.options.maxPadding,
                zoomEnabled: false
              }, e3.inverted ? {
                offsets: i4,
                width: h2
              } : {
                offsets: i4,
                height: h2
              }), "xAxis"), u2.yAxis = new t2(e3, S(s2.yAxis, {
                alignTicks: false,
                offset: 0,
                index: m2,
                isInternal: true,
                reversed: C(s2.yAxis && s2.yAxis.reversed, e3.yAxis[0] && e3.yAxis[0].reversed, false),
                zoomEnabled: false
              }, e3.inverted ? {
                width: h2
              } : {
                height: h2
              }), "yAxis"), g2 || s2.series.data ? u2.updateNavigatorSeries(false) : 0 === e3.series.length && (u2.unbindRedraw = p(e3, "beforeRedraw", function() {
                e3.series.length > 0 && !u2.series && (u2.setBaseSeries(), u2.unbindRedraw());
              })), u2.reversedExtremes = e3.inverted && !u2.xAxis.reversed || !e3.inverted && u2.xAxis.reversed, u2.renderElements(), u2.addMouseEvents();
            } else u2.xAxis = {
              chart: e3,
              navigatorAxis: {
                fake: true
              },
              translate: function(t3, i4) {
                let s3 = e3.xAxis[0], o2 = s3.getExtremes(), r3 = s3.len - 2 * c2, n2 = T("min", s3.options.min, o2.dataMin), a3 = T("max", s3.options.max, o2.dataMax) - n2;
                return i4 ? t3 * a3 / r3 + n2 : r3 * (t3 - n2) / a3;
              },
              toPixels: function(t3) {
                return this.translate(t3);
              },
              toValue: function(t3) {
                return this.translate(t3, true);
              }
            }, u2.xAxis.navigatorAxis.axis = u2.xAxis, u2.xAxis.navigatorAxis.toFixedRange = o.prototype.toFixedRange.bind(u2.xAxis.navigatorAxis);
            if (e3.options.scrollbar.enabled) {
              let t3 = S(e3.options.scrollbar, {
                vertical: e3.inverted
              });
              !k(t3.margin) && u2.navigatorEnabled && (t3.margin = e3.inverted ? -3 : 3), e3.scrollbar = u2.scrollbar = new n(e3.renderer, t3, e3), p(u2.scrollbar, "changed", function(t4) {
                let e4 = u2.size, i4 = e4 * this.to, s3 = e4 * this.from;
                u2.hasDragged = u2.scrollbar.hasDragged, u2.render(0, 0, s3, i4), this.shouldUpdateExtremes(t4.DOMType) && setTimeout(function() {
                  u2.onMouseUp(t4);
                });
              });
            }
            u2.addBaseSeriesEvents(), u2.addChartEvents();
          }
          setOpposite() {
            let t3 = this.navigatorOptions, e3 = this.navigatorEnabled, i3 = this.chart;
            this.opposite = C(t3.opposite, !!(!e3 && i3.inverted));
          }
          getUnionExtremes(t3) {
            let e3;
            let i3 = this.chart.xAxis[0], s2 = this.xAxis, o2 = s2.options, r2 = i3.options;
            return t3 && null === i3.dataMin || (e3 = {
              dataMin: C(o2 && o2.min, T("min", r2.min, i3.dataMin, s2.dataMin, s2.min)),
              dataMax: C(o2 && o2.max, T("max", r2.max, i3.dataMax, s2.dataMax, s2.max))
            }), e3;
          }
          setBaseSeries(t3, e3) {
            let i3 = this.chart, s2 = this.baseSeries = [];
            t3 = t3 || i3.options && i3.options.navigator.baseSeries || (i3.series.length ? b(i3.series, (t4) => !t4.options.isInternal).index : 0), (i3.series || []).forEach((e4, i4) => {
              !e4.options.isInternal && (e4.options.showInNavigator || (i4 === t3 || e4.options.id === t3) && false !== e4.options.showInNavigator) && s2.push(e4);
            }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(true, e3);
          }
          updateNavigatorSeries(t3, e3) {
            let i3 = this, s2 = i3.chart, o2 = i3.baseSeries, r2 = {
              enableMouseTracking: false,
              index: null,
              linkedTo: null,
              group: "nav",
              padXAxis: false,
              xAxis: this.navigatorOptions.xAxis?.id,
              yAxis: this.navigatorOptions.yAxis?.id,
              showInLegend: false,
              stacking: void 0,
              isInternal: true,
              states: {
                inactive: {
                  opacity: 1
                }
              }
            }, n2 = i3.series = (i3.series || []).filter((t4) => {
              let e4 = t4.baseSeries;
              return !(0 > o2.indexOf(e4)) || (e4 && (w(e4, "updatedData", i3.updatedDataHandler), delete e4.navigatorSeries), t4.chart && t4.destroy(), false);
            }), a2, l2, d2 = i3.navigatorOptions.series, c2;
            o2 && o2.length && o2.forEach((t4) => {
              let p2 = t4.navigatorSeries, u2 = y({
                color: t4.color,
                visible: t4.visible
              }, M(d2) ? h.navigator.series : d2);
              if (p2 && false === i3.navigatorOptions.adaptToUpdatedData) return;
              r2.name = "Navigator " + o2.length, c2 = (a2 = t4.options || {}).navigatorOptions || {}, u2.dataLabels = A(u2.dataLabels), (l2 = S(a2, r2, u2, c2)).pointRange = C(u2.pointRange, c2.pointRange, h.plotOptions[l2.type || "line"].pointRange);
              let g2 = c2.data || u2.data;
              i3.hasNavigatorData = i3.hasNavigatorData || !!g2, l2.data = g2 || a2.data && a2.data.slice(0), p2 && p2.options ? p2.update(l2, e3) : (t4.navigatorSeries = s2.initSeries(l2), s2.setSortedData(), t4.navigatorSeries.baseSeries = t4, n2.push(t4.navigatorSeries));
            }), (d2.data && !(o2 && o2.length) || M(d2)) && (i3.hasNavigatorData = false, (d2 = A(d2)).forEach((t4, e4) => {
              r2.name = "Navigator " + (n2.length + 1), (l2 = S(h.navigator.series, {
                color: s2.series[e4] && !s2.series[e4].options.isInternal && s2.series[e4].color || s2.options.colors[e4] || s2.options.colors[0]
              }, r2, t4)).data = t4.data, l2.data && (i3.hasNavigatorData = true, n2.push(s2.initSeries(l2)));
            })), t3 && this.addBaseSeriesEvents();
          }
          addBaseSeriesEvents() {
            let t3 = this, e3 = t3.baseSeries || [];
            e3[0] && e3[0].xAxis && e3[0].eventsToUnbind.push(p(e3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), e3.forEach((i3) => {
              i3.eventsToUnbind.push(p(i3, "show", function() {
                this.navigatorSeries && this.navigatorSeries.setVisible(true, false);
              })), i3.eventsToUnbind.push(p(i3, "hide", function() {
                this.navigatorSeries && this.navigatorSeries.setVisible(false, false);
              })), false !== this.navigatorOptions.adaptToUpdatedData && i3.xAxis && i3.eventsToUnbind.push(p(i3, "updatedData", this.updatedDataHandler)), i3.eventsToUnbind.push(p(i3, "remove", function() {
                e3 && x(e3, i3), this.navigatorSeries && (x(t3.series, this.navigatorSeries), f(this.navigatorSeries.options) && this.navigatorSeries.remove(false), delete this.navigatorSeries);
              }));
            });
          }
          getBaseSeriesMin(t3) {
            return this.baseSeries.reduce(function(t4, e3) {
              return Math.min(t4, e3.xData && e3.xData.length ? e3.xData[0] : t4);
            }, t3);
          }
          modifyNavigatorAxisExtremes() {
            let t3 = this.xAxis;
            if (void 0 !== t3.getExtremes) {
              let e3 = this.getUnionExtremes(true);
              e3 && (e3.dataMin !== t3.min || e3.dataMax !== t3.max) && (t3.min = e3.dataMin, t3.max = e3.dataMax);
            }
          }
          modifyBaseAxisExtremes() {
            let t3, e3;
            let i3 = this.chart.navigator, s2 = this.getExtremes(), o2 = s2.min, r2 = s2.max, n2 = s2.dataMin, a2 = s2.dataMax, l2 = r2 - o2, h2 = i3.stickToMin, d2 = i3.stickToMax, c2 = C(this.ordinal?.convertOverscroll(this.options.overscroll), 0), p2 = i3.series && i3.series[0], u2 = !!this.setExtremes;
            !(this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger) && (h2 && (t3 = (e3 = n2) + l2), d2 && (t3 = a2 + c2, h2 || (e3 = Math.max(n2, t3 - l2, i3.getBaseSeriesMin(p2 && p2.xData ? p2.xData[0] : -Number.MAX_VALUE)))), u2 && (h2 || d2) && k(e3) && (this.min = this.userMin = e3, this.max = this.userMax = t3)), i3.stickToMin = i3.stickToMax = null;
          }
          updatedDataHandler() {
            let t3 = this.chart.navigator, e3 = this.navigatorSeries, i3 = t3.reversedExtremes ? 0 === Math.round(t3.zoomedMin) : Math.round(t3.zoomedMax) >= Math.round(t3.size);
            t3.stickToMax = C(this.chart.options.navigator && this.chart.options.navigator.stickToMax, i3), t3.stickToMin = t3.shouldStickToMin(this, t3), e3 && !t3.hasNavigatorData && (e3.options.pointStart = this.xData[0], e3.setData(this.options.data, false, null, false));
          }
          shouldStickToMin(t3, e3) {
            let i3 = e3.getBaseSeriesMin(t3.xData[0]), s2 = t3.xAxis, o2 = s2.max, r2 = s2.min, n2 = s2.options.range;
            return !!(k(o2) && k(r2)) && (n2 && o2 - i3 > 0 ? o2 - i3 < n2 : r2 <= i3);
          }
          addChartEvents() {
            this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(p(this.chart, "redraw", function() {
              let t3 = this.navigator, e3 = t3 && (t3.baseSeries && t3.baseSeries[0] && t3.baseSeries[0].xAxis || this.xAxis[0]);
              e3 && t3.render(e3.min, e3.max);
            }), p(this.chart, "getMargins", function() {
              let t3 = this.navigator, e3 = t3.opposite ? "plotTop" : "marginBottom";
              this.inverted && (e3 = t3.opposite ? "marginRight" : "plotLeft"), this[e3] = (this[e3] || 0) + (t3.navigatorEnabled || !this.inverted ? t3.height + t3.scrollbarHeight : 0) + t3.navigatorOptions.margin;
            }), p(P, "setRange", function(t3) {
              this.chart.xAxis[0].setExtremes(t3.min, t3.max, t3.redraw, t3.animation, t3.eventArguments);
            }));
          }
          destroy() {
            this.removeEvents(), this.xAxis && (x(this.chart.xAxis, this.xAxis), x(this.chart.axes, this.xAxis)), this.yAxis && (x(this.chart.yAxis, this.yAxis), x(this.chart.axes, this.yAxis)), (this.series || []).forEach((t3) => {
              t3.destroy && t3.destroy();
            }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((t3) => {
              this[t3] && this[t3].destroy && this[t3].destroy(), this[t3] = null;
            }), [this.handles].forEach((t3) => {
              m(t3);
            }), this.navigatorEnabled = false;
          }
        }
        return P;
      }), i(e, "Stock/RangeSelector/RangeSelectorDefaults.js", [], function() {
        return {
          lang: {
            rangeSelectorZoom: "Zoom",
            rangeSelectorFrom: "",
            rangeSelectorTo: "→"
          },
          rangeSelector: {
            allButtonsEnabled: false,
            buttons: void 0,
            buttonSpacing: 5,
            dropdown: "responsive",
            enabled: void 0,
            verticalAlign: "top",
            buttonTheme: {
              width: 28,
              height: 18,
              padding: 2,
              zIndex: 7
            },
            floating: false,
            x: 0,
            y: 0,
            height: void 0,
            inputBoxBorderColor: "none",
            inputBoxHeight: 17,
            inputBoxWidth: void 0,
            inputDateFormat: "%e %b %Y",
            inputDateParser: void 0,
            inputEditDateFormat: "%Y-%m-%d",
            inputEnabled: true,
            inputPosition: {
              align: "right",
              x: 0,
              y: 0
            },
            inputSpacing: 5,
            selected: void 0,
            buttonPosition: {
              align: "left",
              x: 0,
              y: 0
            },
            inputStyle: {
              color: "#334eff",
              cursor: "pointer",
              fontSize: "0.8em"
            },
            labelStyle: {
              color: "#666666",
              fontSize: "0.8em"
            }
          }
        };
      }), i(e, "Stock/RangeSelector/RangeSelectorComposition.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Stock/RangeSelector/RangeSelectorDefaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let o;
        let {
          defaultOptions: r
        } = t2, {
          composed: n
        } = e2, {
          addEvent: a,
          defined: l,
          extend: h,
          isNumber: d,
          merge: c,
          pick: p,
          pushUnique: u
        } = s, g = [];
        function f() {
          let t3, e3;
          let i3 = this.range, s2 = i3.type, o2 = this.max, r2 = this.chart.time, n2 = function(t4, e4) {
            let i4 = "year" === s2 ? "FullYear" : "Month", o3 = new r2.Date(t4), n3 = r2.get(i4, o3);
            return r2.set(i4, o3, n3 + e4), n3 === r2.get(i4, o3) && r2.set("Date", o3, 0), o3.getTime() - t4;
          };
          d(i3) ? (t3 = o2 - i3, e3 = i3) : i3 && (t3 = o2 + n2(o2, -(i3.count || 1)), this.chart && this.chart.setFixedRange(o2 - t3));
          let a2 = p(this.dataMin, Number.MIN_VALUE);
          return d(t3) || (t3 = a2), t3 <= a2 && (t3 = a2, void 0 === e3 && (e3 = n2(t3, i3.count)), this.newMax = Math.min(t3 + e3, p(this.dataMax, Number.MAX_VALUE))), d(o2) ? !d(i3) && i3 && i3._offsetMin && (t3 += i3._offsetMin) : t3 = void 0, t3;
        }
        function m() {
          this.options.rangeSelector && this.options.rangeSelector.enabled && (this.rangeSelector = new o(this));
        }
        function x() {
          let t3 = this.rangeSelector;
          if (t3) {
            d(t3.deferredYTDClick) && (t3.clickButton(t3.deferredYTDClick), delete t3.deferredYTDClick);
            let e3 = t3.options.verticalAlign;
            t3.options.floating || ("bottom" === e3 ? this.extraBottomMargin = true : "middle" === e3 || (this.extraTopMargin = true));
          }
        }
        function y() {
          let t3;
          let e3 = this.rangeSelector;
          if (!e3) return;
          let i3 = this.xAxis[0].getExtremes(), s2 = this.legend, o2 = e3 && e3.options.verticalAlign;
          d(i3.min) && e3.render(i3.min, i3.max), s2.display && "top" === o2 && o2 === s2.options.verticalAlign && (t3 = c(this.spacingBox), "vertical" === s2.options.layout ? t3.y = this.plotTop : t3.y += e3.getHeight(), s2.group.placed = false, s2.align(t3));
        }
        function b() {
          for (let t3 = 0, e3 = g.length; t3 < e3; ++t3) {
            let e4 = g[t3];
            if (e4[0] === this) {
              e4[1].forEach((t4) => t4()), g.splice(t3, 1);
              return;
            }
          }
        }
        function v() {
          let t3 = this.rangeSelector;
          if (t3) {
            let e3 = t3.getHeight();
            this.extraTopMargin && (this.plotTop += e3), this.extraBottomMargin && (this.marginBottom += e3);
          }
        }
        function M(t3) {
          let e3 = t3.options.rangeSelector, i3 = this.extraBottomMargin, s2 = this.extraTopMargin, r2 = this.rangeSelector;
          if (e3 && e3.enabled && !l(r2) && this.options.rangeSelector && (this.options.rangeSelector.enabled = true, this.rangeSelector = r2 = new o(this)), this.extraBottomMargin = false, this.extraTopMargin = false, r2) {
            let t4 = e3 && e3.verticalAlign || r2.options && r2.options.verticalAlign;
            r2.options.floating || ("bottom" === t4 ? this.extraBottomMargin = true : "middle" === t4 || (this.extraTopMargin = true)), (this.extraBottomMargin !== i3 || this.extraTopMargin !== s2) && (this.isDirtyBox = true);
          }
        }
        return {
          compose: function(t3, e3, s2) {
            if (o = s2, u(n, "RangeSelector")) {
              let s3 = e3.prototype;
              t3.prototype.minFromRange = f, a(e3, "afterGetContainer", m), a(e3, "beforeRender", x), a(e3, "destroy", b), a(e3, "getMargins", v), a(e3, "redraw", y), a(e3, "update", M), s3.callbacks.push(y), h(r, {
                rangeSelector: i2.rangeSelector
              }), h(r.lang, i2.lang);
            }
          }
        };
      }), i(e, "Core/Axis/OrdinalAxis.js", [e["Core/Axis/Axis.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let {
          addEvent: r,
          correctFloat: n,
          css: a,
          defined: l,
          error: h,
          isNumber: d,
          pick: c,
          timeUnits: p,
          isString: u
        } = s;
        return function(t3) {
          function s2(t4, e3, i3, o3, r2 = [], n2 = 0, a2) {
            let d2 = {}, c2 = this.options.tickPixelInterval, u2 = this.chart.time, g2 = [], f2, m2, x2, y2, b2, v2 = 0, M2 = [], k2 = -Number.MAX_VALUE;
            if (!this.options.ordinal && !this.options.breaks || !r2 || r2.length < 3 || void 0 === e3) return u2.getTimeTicks.apply(u2, arguments);
            let S2 = r2.length;
            for (f2 = 0; f2 < S2; f2++) {
              if (b2 = f2 && r2[f2 - 1] > i3, r2[f2] < e3 && (v2 = f2), f2 === S2 - 1 || r2[f2 + 1] - r2[f2] > 5 * n2 || b2) {
                if (r2[f2] > k2) {
                  for (m2 = u2.getTimeTicks(t4, r2[v2], r2[f2], o3); m2.length && m2[0] <= k2; ) m2.shift();
                  m2.length && (k2 = m2[m2.length - 1]), g2.push(M2.length), M2 = M2.concat(m2);
                }
                v2 = f2 + 1;
              }
              if (b2) break;
            }
            if (m2) {
              if (y2 = m2.info, a2 && y2.unitRange <= p.hour) {
                for (v2 = 1, f2 = M2.length - 1; v2 < f2; v2++) u2.dateFormat("%d", M2[v2]) !== u2.dateFormat("%d", M2[v2 - 1]) && (d2[M2[v2]] = "day", x2 = true);
                x2 && (d2[M2[0]] = "day"), y2.higherRanks = d2;
              }
              y2.segmentStarts = g2, M2.info = y2;
            } else h(12, false, this.chart);
            if (a2 && l(c2)) {
              let t5 = M2.length, e4 = [], s3 = [], o4, r3, n3, a3, l2, h2 = t5;
              for (; h2--; ) r3 = this.translate(M2[h2]), n3 && (s3[h2] = n3 - r3), e4[h2] = n3 = r3;
              for (s3.sort((t6, e5) => t6 - e5), (a3 = s3[Math.floor(s3.length / 2)]) < 0.6 * c2 && (a3 = null), h2 = M2[t5 - 1] > i3 ? t5 - 1 : t5, n3 = void 0; h2--; ) l2 = Math.abs(n3 - (r3 = e4[h2])), n3 && l2 < 0.8 * c2 && (null === a3 || l2 < 0.8 * a3) ? (d2[M2[h2]] && !d2[M2[h2 + 1]] ? (o4 = h2 + 1, n3 = r3) : o4 = h2, M2.splice(o4, 1)) : n3 = r3;
            }
            return M2;
          }
          function o2(t4) {
            let e3 = this.ordinal.positions;
            if (!e3) return t4;
            let i3 = e3.length - 1, s3;
            return (t4 < 0 ? t4 = e3[0] : t4 > i3 ? t4 = e3[i3] : (i3 = Math.floor(t4), s3 = t4 - i3), void 0 !== s3 && void 0 !== e3[i3]) ? e3[i3] + (s3 ? s3 * (e3[i3 + 1] - e3[i3]) : 0) : t4;
          }
          function g(t4) {
            let e3 = this.ordinal, i3 = this.old ? this.old.min : this.min, s3 = this.old ? this.old.transA : this.transA, o3 = e3.getExtendedPositions();
            if (o3 && o3.length) {
              let r2 = n((t4 - i3) * s3 + this.minPixelPadding), a2 = n(e3.getIndexOfPoint(r2, o3)), l2 = n(a2 % 1);
              if (a2 >= 0 && a2 <= o3.length - 1) {
                let t5 = o3[Math.floor(a2)], e4 = o3[Math.ceil(a2)];
                return o3[Math.floor(a2)] + l2 * (e4 - t5);
              }
            }
            return t4;
          }
          function f(e3, i3) {
            let s3 = t3.Additions.findIndexOf(e3, i3, true);
            if (e3[s3] === i3) return s3;
            let o3 = (i3 - e3[s3]) / (e3[s3 + 1] - e3[s3]);
            return s3 + o3;
          }
          function m() {
            this.ordinal || (this.ordinal = new t3.Additions(this));
          }
          function x() {
            let {
              eventArgs: t4,
              options: e3
            } = this;
            if (this.isXAxis && l(e3.overscroll) && 0 !== e3.overscroll && d(this.max) && d(this.min) && (this.options.ordinal && !this.ordinal.originalOrdinalRange && this.ordinal.getExtendedPositions(false), this.max === this.dataMax && (t4?.trigger !== "pan" || this.isInternal) && t4?.trigger !== "navigator")) {
              let i3 = this.ordinal.convertOverscroll(e3.overscroll);
              this.max += i3, !this.isInternal && l(this.userMin) && t4?.trigger !== "mousewheel" && (this.min += i3);
            }
          }
          function y() {
            this.horiz && !this.isDirty && (this.isDirty = this.isOrdinal && this.chart.navigator && !this.chart.navigator.adaptToUpdatedData);
          }
          function b() {
            this.ordinal && (this.ordinal.beforeSetTickPositions(), this.tickInterval = this.ordinal.postProcessTickInterval(this.tickInterval));
          }
          function v(t4) {
            let e3 = this.xAxis[0], i3 = e3.ordinal.convertOverscroll(e3.options.overscroll), s3 = t4.originalEvent.chartX, o3 = this.options.chart.panning, r2 = false;
            if (o3 && "y" !== o3.type && e3.options.ordinal && e3.series.length && (!t4.touches || t4.touches.length <= 1)) {
              let t5, o4;
              let n2 = this.mouseDownX, l2 = e3.getExtremes(), h2 = l2.dataMin, d2 = l2.dataMax, c2 = l2.min, p2 = l2.max, u2 = this.hoverPoints, g2 = e3.closestPointRange || e3.ordinal && e3.ordinal.overscrollPointsRange, f2 = Math.round((n2 - s3) / (e3.translationSlope * (e3.ordinal.slope || g2))), m2 = e3.ordinal.getExtendedPositions(), x2 = {
                ordinal: {
                  positions: m2,
                  extendedOrdinalPositions: m2
                }
              }, y2 = e3.index2val, b2 = e3.val2lin;
              if (c2 <= h2 && f2 < 0 || p2 + i3 >= d2 && f2 > 0) return;
              x2.ordinal.positions ? Math.abs(f2) > 1 && (u2 && u2.forEach(function(t6) {
                t6.setState();
              }), d2 > (o4 = x2.ordinal.positions)[o4.length - 1] && o4.push(d2), this.setFixedRange(p2 - c2), (t5 = e3.navigatorAxis.toFixedRange(void 0, void 0, y2.apply(x2, [b2.apply(x2, [c2, true]) + f2]), y2.apply(x2, [b2.apply(x2, [p2, true]) + f2]))).min >= Math.min(l2.dataMin, c2) && t5.max <= Math.max(d2, p2) + i3 && e3.setExtremes(t5.min, t5.max, true, false, {
                trigger: "pan"
              }), this.mouseDownX = s3, a(this.container, {
                cursor: "move"
              })) : r2 = true;
            } else r2 = true;
            r2 || o3 && /y/.test(o3.type) ? i3 && (e3.max = e3.dataMax + i3) : t4.preventDefault();
          }
          function M() {
            let t4 = this.xAxis;
            t4 && t4.options.ordinal && (delete t4.ordinal.index, delete t4.ordinal.originalOrdinalRange);
          }
          function k(t4, e3) {
            let i3;
            let s3 = this.ordinal, o3 = s3.positions, r2 = s3.slope, n2;
            if (!o3) return t4;
            let a2 = o3.length;
            if (o3[0] <= t4 && o3[a2 - 1] >= t4) i3 = f(o3, t4);
            else {
              if (!((n2 = s3.getExtendedPositions && s3.getExtendedPositions()) && n2.length)) return t4;
              let a3 = n2.length;
              r2 || (r2 = (n2[a3 - 1] - n2[0]) / a3);
              let l2 = f(n2, o3[0]);
              if (t4 >= n2[0] && t4 <= n2[a3 - 1]) i3 = f(n2, t4) - l2;
              else {
                if (!e3) return t4;
                i3 = t4 < n2[0] ? -l2 - (n2[0] - t4) / r2 : (t4 - n2[a3 - 1]) / r2 + a3 - l2;
              }
            }
            return e3 ? i3 : r2 * (i3 || 0) + s3.offset;
          }
          t3.compose = function(t4, e3, i3) {
            let n2 = t4.prototype;
            return n2.ordinal2lin || (n2.getTimeTicks = s2, n2.index2val = o2, n2.lin2val = g, n2.val2lin = k, n2.ordinal2lin = n2.val2lin, r(t4, "afterInit", m), r(t4, "foundExtremes", x), r(t4, "afterSetScale", y), r(t4, "initialAxisTranslation", b), r(i3, "pan", v), r(i3, "touchpan", v), r(e3, "updatedData", M)), t4;
          };
          class S {
            constructor(t4) {
              this.index = {}, this.axis = t4;
            }
            beforeSetTickPositions() {
              let t4 = this.axis, e3 = t4.ordinal, i3 = t4.getExtremes(), s3 = i3.min, o3 = i3.max, r2 = t4.brokenAxis?.hasBreaks, n2 = t4.options.ordinal, a2, l2, h2, d2, p2, u2, g2, f2 = [], m2 = Number.MAX_VALUE, x2 = false, y2 = false, b2 = false;
              if (n2 || r2) {
                let i4 = 0;
                if (t4.series.forEach(function(t5, e4) {
                  if (l2 = [], e4 > 0 && "highcharts-navigator-series" !== t5.options.id && t5.processedXData.length > 1 && (y2 = i4 !== t5.processedXData[1] - t5.processedXData[0]), i4 = t5.processedXData[1] - t5.processedXData[0], t5.boosted && (b2 = t5.boosted), t5.reserveSpace() && (false !== t5.takeOrdinalPosition || r2) && (a2 = (f2 = f2.concat(t5.processedXData)).length, f2.sort(function(t6, e5) {
                    return t6 - e5;
                  }), m2 = Math.min(m2, c(t5.closestPointRange, m2)), a2)) {
                    for (e4 = 0; e4 < a2 - 1; ) f2[e4] !== f2[e4 + 1] && l2.push(f2[e4 + 1]), e4++;
                    l2[0] !== f2[0] && l2.unshift(f2[0]), f2 = l2;
                  }
                }), t4.ordinal.originalOrdinalRange || (t4.ordinal.originalOrdinalRange = (f2.length - 1) * m2), y2 && b2 && (f2.pop(), f2.shift()), (a2 = f2.length) > 2) {
                  for (h2 = f2[1] - f2[0], g2 = a2 - 1; g2-- && !x2; ) f2[g2 + 1] - f2[g2] !== h2 && (x2 = true);
                  !t4.options.keepOrdinalPadding && (f2[0] - s3 > h2 || o3 - f2[f2.length - 1] > h2) && (x2 = true);
                } else t4.options.overscroll && (2 === a2 ? m2 = f2[1] - f2[0] : 1 === a2 ? (m2 = t4.ordinal.convertOverscroll(t4.options.overscroll), f2 = [f2[0], f2[0] + m2]) : m2 = e3.overscrollPointsRange);
                x2 || t4.forceOrdinal ? (t4.options.overscroll && (e3.overscrollPointsRange = m2, f2 = f2.concat(e3.getOverscrollPositions())), e3.positions = f2, d2 = t4.ordinal2lin(Math.max(s3, f2[0]), true), p2 = Math.max(t4.ordinal2lin(Math.min(o3, f2[f2.length - 1]), true), 1), e3.slope = u2 = (o3 - s3) / (p2 - d2), e3.offset = s3 - d2 * u2) : (e3.overscrollPointsRange = c(t4.closestPointRange, e3.overscrollPointsRange), e3.positions = t4.ordinal.slope = e3.offset = void 0);
              }
              t4.isOrdinal = n2 && x2, e3.groupIntervalFactor = null;
            }
            static findIndexOf(t4, e3, i3) {
              let s3 = 0, o3 = t4.length - 1, r2;
              for (; s3 < o3; ) t4[r2 = Math.ceil((s3 + o3) / 2)] <= e3 ? s3 = r2 : o3 = r2 - 1;
              return t4[s3] === e3 ? s3 : i3 ? s3 : -1;
            }
            getExtendedPositions(t4 = true) {
              let s3 = this, o3 = s3.axis, r2 = o3.constructor.prototype, n2 = o3.chart, a2 = o3.series[0]?.currentDataGrouping, l2 = a2 ? a2.count + a2.unitName : "raw", h2 = t4 ? o3.ordinal.convertOverscroll(o3.options.overscroll) : 0, d2 = o3.getExtremes(), c2, p2, u2 = s3.index;
              return u2 || (u2 = s3.index = {}), u2[l2] || ((c2 = {
                series: [],
                chart: n2,
                forceOrdinal: false,
                getExtremes: function() {
                  return {
                    min: d2.dataMin,
                    max: d2.dataMax + h2
                  };
                },
                applyGrouping: r2.applyGrouping,
                getGroupPixelWidth: r2.getGroupPixelWidth,
                getTimeTicks: r2.getTimeTicks,
                options: {
                  ordinal: true
                },
                ordinal: {
                  getGroupIntervalFactor: this.getGroupIntervalFactor
                },
                ordinal2lin: r2.ordinal2lin,
                getIndexOfPoint: r2.getIndexOfPoint,
                val2lin: r2.val2lin
              }).ordinal.axis = c2, o3.series.forEach(function(o4) {
                p2 = {
                  xAxis: c2,
                  xData: o4.xData.slice(),
                  chart: n2,
                  groupPixelWidth: o4.groupPixelWidth,
                  destroyGroupedData: e2.noop,
                  getProcessedData: i2.prototype.getProcessedData,
                  applyGrouping: i2.prototype.applyGrouping,
                  reserveSpace: i2.prototype.reserveSpace,
                  visible: o4.visible
                }, t4 && (p2.xData = p2.xData.concat(s3.getOverscrollPositions())), p2.options = {
                  dataGrouping: a2 ? {
                    firstAnchor: o4.options.dataGrouping?.firstAnchor,
                    anchor: o4.options.dataGrouping?.anchor,
                    lastAnchor: o4.options.dataGrouping?.firstAnchor,
                    enabled: true,
                    forced: true,
                    approximation: "open",
                    units: [[a2.unitName, [a2.count]]]
                  } : {
                    enabled: false
                  }
                }, c2.series.push(p2), o4.processData.apply(p2);
              }), c2.applyGrouping({
                hasExtremesChanged: true
              }), p2?.closestPointRange !== p2?.basePointRange && p2.currentDataGrouping && (c2.forceOrdinal = true), o3.ordinal.beforeSetTickPositions.apply({
                axis: c2
              }), !o3.ordinal.originalOrdinalRange && c2.ordinal.originalOrdinalRange && (o3.ordinal.originalOrdinalRange = c2.ordinal.originalOrdinalRange), u2[l2] = c2.ordinal.positions), u2[l2];
            }
            getGroupIntervalFactor(t4, e3, i3) {
              let s3 = i3.processedXData, o3 = s3.length, r2 = [], n2, a2, l2 = this.groupIntervalFactor;
              if (!l2) {
                for (a2 = 0; a2 < o3 - 1; a2++) r2[a2] = s3[a2 + 1] - s3[a2];
                r2.sort(function(t5, e4) {
                  return t5 - e4;
                }), n2 = r2[Math.floor(o3 / 2)], t4 = Math.max(t4, s3[0]), e3 = Math.min(e3, s3[o3 - 1]), this.groupIntervalFactor = l2 = o3 * n2 / (e3 - t4);
              }
              return l2;
            }
            getIndexOfPoint(t4, e3) {
              let i3;
              let s3 = this.axis, o3 = 0, r2 = function(t5) {
                let {
                  min: e4,
                  max: i4
                } = s3;
                return !!(l(e4) && l(i4)) && t5.points.some((t6) => t6.x >= e4 && t6.x <= i4);
              };
              s3.series.forEach((t5) => {
                let e4 = t5.points?.[0];
                l(e4?.plotX) && (e4.plotX < i3 || !l(i3)) && r2(t5) && (i3 = e4.plotX, o3 = e4.x);
              }), i3 ?? (i3 = s3.minPixelPadding);
              let a2 = s3.translationSlope * (this.slope || s3.closestPointRange || this.overscrollPointsRange), h2 = n((t4 - i3) / a2);
              return S.findIndexOf(e3, o3, true) + h2;
            }
            getOverscrollPositions() {
              let t4 = this.axis, e3 = this.convertOverscroll(t4.options.overscroll), i3 = this.overscrollPointsRange, s3 = [], o3 = t4.dataMax;
              if (l(i3)) for (; o3 <= t4.dataMax + e3; ) s3.push(o3 += i3);
              return s3;
            }
            postProcessTickInterval(t4) {
              let e3 = this.axis, i3 = this.slope;
              return i3 ? e3.options.breaks ? e3.closestPointRange || t4 : t4 / (i3 / e3.closestPointRange) : t4;
            }
            convertOverscroll(t4 = 0) {
              let e3 = this, i3 = e3.axis, s3 = function(t5) {
                return c(e3.originalOrdinalRange, l(i3.dataMax) && l(i3.dataMin) ? i3.dataMax - i3.dataMin : 0) * t5;
              };
              if (u(t4)) {
                let e4 = parseInt(t4, 10);
                if (/%$/.test(t4)) return s3(e4 / 100);
                if (/px/.test(t4)) {
                  let t5 = Math.min(e4, 0.9 * i3.len) / i3.len;
                  return s3(t5 / (1 - t5));
                }
                return 0;
              }
              return t4;
            }
          }
          t3.Additions = S;
        }(o || (o = {})), o;
      }), i(e, "Stock/RangeSelector/RangeSelector.js", [e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Stock/RangeSelector/RangeSelectorComposition.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"], e["Core/Axis/OrdinalAxis.js"]], function(e2, i2, s, o, r, n, a) {
        let {
          defaultOptions: l
        } = i2, {
          addEvent: h,
          createElement: d,
          css: c,
          defined: p,
          destroyObjectProperties: u,
          discardElement: g,
          extend: f,
          fireEvent: m,
          isNumber: x,
          merge: y,
          objectEach: b,
          pad: v,
          pick: M,
          pInt: k,
          splat: S
        } = n;
        class C {
          static compose(t2, e3) {
            o.compose(t2, e3, C);
          }
          constructor(t2) {
            this.buttonOptions = C.prototype.defaultButtons, this.initialButtonGroupWidth = 0, this.init(t2);
          }
          clickButton(t2, i3) {
            let s2 = this.chart, o2 = this.buttonOptions[t2], r2 = s2.xAxis[0], n2 = s2.scroller && s2.scroller.getUnionExtremes() || r2 || {}, a2 = o2.type, l2 = o2.dataGrouping, d2 = n2.dataMin, c2 = n2.dataMax, u2, g2 = r2 && Math.round(Math.min(r2.max, M(c2, r2.max))), f2, y2 = o2._range, b2, v2, k2, C2 = true;
            if (null !== d2 && null !== c2) {
              if (this.setSelected(t2), l2 && (this.forcedDataGrouping = true, e2.prototype.setDataGrouping.call(r2 || {
                chart: this.chart
              }, l2, false), this.frozenStates = o2.preserveDataGrouping), "month" === a2 || "year" === a2) r2 ? (v2 = {
                range: o2,
                max: g2,
                chart: s2,
                dataMin: d2,
                dataMax: c2
              }, u2 = r2.minFromRange.call(v2), x(v2.newMax) && (g2 = v2.newMax), C2 = false) : y2 = o2;
              else if (y2) g2 = Math.min((u2 = Math.max(g2 - y2, d2)) + y2, c2), C2 = false;
              else if ("ytd" === a2) {
                if (r2) (void 0 === c2 || void 0 === d2) && (d2 = Number.MAX_VALUE, c2 = Number.MIN_VALUE, s2.series.forEach((t3) => {
                  let e3 = t3.xData;
                  e3 && (d2 = Math.min(e3[0], d2), c2 = Math.max(e3[e3.length - 1], c2));
                }), i3 = false), u2 = b2 = (k2 = this.getYTDExtremes(c2, d2, s2.time.useUTC)).min, g2 = k2.max;
                else {
                  this.deferredYTDClick = t2;
                  return;
                }
              } else "all" === a2 && r2 && (s2.navigator && s2.navigator.baseSeries[0] && (s2.navigator.baseSeries[0].xAxis.options.range = void 0), u2 = d2, g2 = c2);
              if (C2 && o2._offsetMin && p(u2) && (u2 += o2._offsetMin), o2._offsetMax && p(g2) && (g2 += o2._offsetMax), this.dropdown && (this.dropdown.selectedIndex = t2 + 1), r2) r2.setExtremes(u2, g2, M(i3, true), void 0, {
                trigger: "rangeSelectorButton",
                rangeSelectorButton: o2
              }), s2.setFixedRange(o2._range);
              else {
                f2 = S(s2.options.xAxis)[0];
                let t3 = h(s2, "afterGetAxes", function() {
                  let t4 = s2.xAxis[0];
                  t4.range = t4.options.range = y2, t4.min = t4.options.min = b2;
                });
                h(s2, "load", function() {
                  let e3 = s2.xAxis[0];
                  s2.setFixedRange(o2._range), e3.options.range = f2.range, e3.options.min = f2.min, t3();
                });
              }
              m(this, "afterBtnClick");
            }
          }
          setSelected(t2) {
            this.selected = this.options.selected = t2;
          }
          init(t2) {
            let e3 = this, i3 = t2.options.rangeSelector, s2 = i3.buttons || e3.defaultButtons.slice(), o2 = i3.selected, r2 = function() {
              let t3 = e3.minInput, i4 = e3.maxInput;
              t3 && t3.blur && m(t3, "blur"), i4 && i4.blur && m(i4, "blur");
            };
            e3.chart = t2, e3.options = i3, e3.buttons = [], e3.buttonOptions = s2, this.eventsToUnbind = [], this.eventsToUnbind.push(h(t2.container, "mousedown", r2)), this.eventsToUnbind.push(h(t2, "resize", r2)), s2.forEach(e3.computeButtonRange), void 0 !== o2 && s2[o2] && this.clickButton(o2, false), this.eventsToUnbind.push(h(t2, "load", function() {
              t2.xAxis && t2.xAxis[0] && h(t2.xAxis[0], "setExtremes", function(i4) {
                x(this.max) && x(this.min) && this.max - this.min !== t2.fixedRange && "rangeSelectorButton" !== i4.trigger && "updatedData" !== i4.trigger && e3.forcedDataGrouping && !e3.frozenStates && this.setDataGrouping(false, false);
              });
            })), this.createElements();
          }
          updateButtonStates() {
            let t2 = this, e3 = this.chart, i3 = this.dropdown, s2 = this.dropdownLabel, o2 = e3.xAxis[0], r2 = Math.round(o2.max - o2.min), n2 = !o2.hasVisibleSeries, h2 = 24 * 36e5, d2 = e3.scroller && e3.scroller.getUnionExtremes() || o2, p2 = d2.dataMin, u2 = d2.dataMax, g2 = t2.getYTDExtremes(u2, p2, e3.time.useUTC), f2 = g2.min, m2 = g2.max, y2 = t2.selected, b2 = t2.options.allButtonsEnabled, v2 = Array(t2.buttonOptions.length).fill(0), M2 = x(y2), k2 = t2.buttons, S2 = false, C2 = null;
            t2.buttonOptions.forEach((e4, i4) => {
              let s3 = e4._range, l2 = e4.type, d3 = e4.count || 1, c2 = e4._offsetMax - e4._offsetMin, g3 = i4 === y2, x2 = s3 > u2 - p2, k3 = s3 < o2.minRange, w = false, A = s3 === r2;
              if (g3 && x2 && (S2 = true), o2.isOrdinal && o2.ordinal?.positions && s3 && r2 < s3) {
                let t3 = o2.ordinal.positions, e5 = a.Additions.findIndexOf(t3, o2.min, true), i5 = Math.min(a.Additions.findIndexOf(t3, o2.max, true) + 1, t3.length - 1);
                t3[i5] - t3[e5] > s3 && (A = true);
              } else ("month" === l2 || "year" === l2) && r2 + 36e5 >= {
                month: 28,
                year: 365
              }[l2] * h2 * d3 - c2 && r2 - 36e5 <= {
                month: 31,
                year: 366
              }[l2] * h2 * d3 + c2 ? A = true : "ytd" === l2 ? (A = m2 - f2 + c2 === r2, w = !g3) : "all" === l2 && (A = o2.max - o2.min >= u2 - p2);
              let T = !b2 && !(S2 && "all" === l2) && (x2 || k3 || n2), P = S2 && "all" === l2 || !w && A || g3 && t2.frozenStates;
              T ? v2[i4] = 3 : P && (!M2 || i4 === y2) && (C2 = i4);
            }), null !== C2 ? (v2[C2] = 2, t2.setSelected(C2)) : (t2.setSelected(), s2 && (s2.setState(0), s2.attr({
              text: (l.lang.rangeSelectorZoom || "") + " ▾"
            })));
            for (let e4 = 0; e4 < v2.length; e4++) {
              let o3 = v2[e4], r3 = k2[e4];
              if (r3.state !== o3 && (r3.setState(o3), i3)) {
                i3.options[e4 + 1].disabled = 3 === o3, 2 === o3 && (s2 && (s2.setState(2), s2.attr({
                  text: t2.buttonOptions[e4].text + " ▾"
                })), i3.selectedIndex = e4 + 1);
                let r4 = s2.getBBox();
                c(i3, {
                  width: `${r4.width}px`,
                  height: `${r4.height}px`
                });
              }
            }
          }
          computeButtonRange(t2) {
            let e3 = t2.type, i3 = t2.count || 1, s2 = {
              millisecond: 1,
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
              week: 6048e5
            };
            s2[e3] ? t2._range = s2[e3] * i3 : ("month" === e3 || "year" === e3) && (t2._range = 24 * {
              month: 30,
              year: 365
            }[e3] * 36e5 * i3), t2._offsetMin = M(t2.offsetMin, 0), t2._offsetMax = M(t2.offsetMax, 0), t2._range += t2._offsetMax - t2._offsetMin;
          }
          getInputValue(t2) {
            let e3 = "min" === t2 ? this.minInput : this.maxInput, i3 = this.chart.options.rangeSelector, s2 = this.chart.time;
            return e3 ? ("text" === e3.type && i3.inputDateParser || this.defaultInputDateParser)(e3.value, s2.useUTC, s2) : 0;
          }
          setInputValue(t2, e3) {
            let i3 = this.options, s2 = this.chart.time, o2 = "min" === t2 ? this.minInput : this.maxInput, r2 = "min" === t2 ? this.minDateBox : this.maxDateBox;
            if (o2) {
              let t3 = o2.getAttribute("data-hc-time"), n2 = p(t3) ? Number(t3) : void 0;
              if (p(e3)) {
                let t4 = n2;
                p(t4) && o2.setAttribute("data-hc-time-previous", t4), o2.setAttribute("data-hc-time", e3), n2 = e3;
              }
              o2.value = s2.dateFormat(this.inputTypeFormats[o2.type] || i3.inputEditDateFormat, n2), r2 && r2.attr({
                text: s2.dateFormat(i3.inputDateFormat, n2)
              });
            }
          }
          setInputExtremes(t2, e3, i3) {
            let s2 = "min" === t2 ? this.minInput : this.maxInput;
            if (s2) {
              let t3 = this.inputTypeFormats[s2.type], o2 = this.chart.time;
              if (t3) {
                let r2 = o2.dateFormat(t3, e3);
                s2.min !== r2 && (s2.min = r2);
                let n2 = o2.dateFormat(t3, i3);
                s2.max !== n2 && (s2.max = n2);
              }
            }
          }
          showInput(t2) {
            let e3 = "min" === t2 ? this.minDateBox : this.maxDateBox, i3 = "min" === t2 ? this.minInput : this.maxInput;
            if (i3 && e3 && this.inputGroup) {
              let t3 = "text" === i3.type, {
                translateX: s2 = 0,
                translateY: o2 = 0
              } = this.inputGroup, {
                x: r2 = 0,
                width: n2 = 0,
                height: a2 = 0
              } = e3, {
                inputBoxWidth: l2
              } = this.options;
              c(i3, {
                width: t3 ? n2 + (l2 ? -2 : 20) + "px" : "auto",
                height: a2 - 2 + "px",
                border: "2px solid silver"
              }), t3 && l2 ? c(i3, {
                left: s2 + r2 + "px",
                top: o2 + "px"
              }) : c(i3, {
                left: Math.min(Math.round(r2 + s2 - (i3.offsetWidth - n2) / 2), this.chart.chartWidth - i3.offsetWidth) + "px",
                top: o2 - (i3.offsetHeight - a2) / 2 + "px"
              });
            }
          }
          hideInput(t2) {
            let e3 = "min" === t2 ? this.minInput : this.maxInput;
            e3 && c(e3, {
              top: "-9999em",
              border: 0,
              width: "1px",
              height: "1px"
            });
          }
          defaultInputDateParser(t2, e3, i3) {
            let o2 = t2.split("/").join("-").split(" ").join("T");
            if (-1 === o2.indexOf("T") && (o2 += "T00:00"), e3) o2 += "Z";
            else {
              let t3;
              if (s.isSafari && !((t3 = o2).length > 6 && (t3.lastIndexOf("-") === t3.length - 6 || t3.lastIndexOf("+") === t3.length - 6))) {
                let t4 = new Date(o2).getTimezoneOffset() / 60;
                o2 += t4 <= 0 ? `+${v(-t4)}:00` : `-${v(t4)}:00`;
              }
            }
            let r2 = Date.parse(o2);
            if (!x(r2)) {
              let e4 = t2.split("-");
              r2 = Date.UTC(k(e4[0]), k(e4[1]) - 1, k(e4[2]));
            }
            return i3 && e3 && x(r2) && (r2 += i3.getTimezoneOffset(r2)), r2;
          }
          drawInput(t2) {
            let {
              chart: e3,
              div: i3,
              inputGroup: o2
            } = this, r2 = this, n2 = e3.renderer.style || {}, a2 = e3.renderer, h2 = e3.options.rangeSelector, p2 = l.lang, u2 = "min" === t2;
            function g2(t3) {
              let {
                maxInput: i4,
                minInput: s2
              } = r2, o3 = e3.xAxis[0], n3 = e3.scroller?.getUnionExtremes() || o3, a3 = n3.dataMin, l2 = n3.dataMax, h3 = e3.xAxis[0].getExtremes()[t3], d2 = r2.getInputValue(t3);
              x(d2) && d2 !== h3 && (u2 && i4 && x(a3) ? d2 > Number(i4.getAttribute("data-hc-time")) ? d2 = void 0 : d2 < a3 && (d2 = a3) : s2 && x(l2) && (d2 < Number(s2.getAttribute("data-hc-time")) ? d2 = void 0 : d2 > l2 && (d2 = l2)), void 0 !== d2 && o3.setExtremes(u2 ? d2 : o3.min, u2 ? o3.max : d2, void 0, void 0, {
                trigger: "rangeSelectorInput"
              }));
            }
            let m2 = p2[u2 ? "rangeSelectorFrom" : "rangeSelectorTo"] || "", b2 = a2.label(m2, 0).addClass("highcharts-range-label").attr({
              padding: m2 ? 2 : 0,
              height: m2 ? h2.inputBoxHeight : 0
            }).add(o2), v2 = a2.label("", 0).addClass("highcharts-range-input").attr({
              padding: 2,
              width: h2.inputBoxWidth,
              height: h2.inputBoxHeight,
              "text-align": "center"
            }).on("click", function() {
              r2.showInput(t2), r2[t2 + "Input"].focus();
            });
            e3.styledMode || v2.attr({
              stroke: h2.inputBoxBorderColor,
              "stroke-width": 1
            }), v2.add(o2);
            let M2 = d("input", {
              name: t2,
              className: "highcharts-range-selector"
            }, void 0, i3);
            M2.setAttribute("type", function(t3) {
              if (-1 !== t3.indexOf("%L")) return "text";
              let e4 = ["a", "A", "d", "e", "w", "b", "B", "m", "o", "y", "Y"].some((e5) => -1 !== t3.indexOf("%" + e5)), i4 = ["H", "k", "I", "l", "M", "S"].some((e5) => -1 !== t3.indexOf("%" + e5));
              return e4 && i4 ? "datetime-local" : e4 ? "date" : i4 ? "time" : "text";
            }(h2.inputDateFormat || "%e %b %Y")), e3.styledMode || (b2.css(y(n2, h2.labelStyle)), v2.css(y({
              color: "#333333"
            }, n2, h2.inputStyle)), c(M2, f({
              position: "absolute",
              border: 0,
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
              width: "1px",
              height: "1px",
              padding: 0,
              textAlign: "center",
              fontSize: n2.fontSize,
              fontFamily: n2.fontFamily,
              top: "-9999em"
            }, h2.inputStyle))), M2.onfocus = () => {
              r2.showInput(t2);
            }, M2.onblur = () => {
              M2 === s.doc.activeElement && g2(t2), r2.hideInput(t2), r2.setInputValue(t2), M2.blur();
            };
            let k2 = false;
            return M2.onchange = () => {
              k2 || (g2(t2), r2.hideInput(t2), M2.blur());
            }, M2.onkeypress = (e4) => {
              13 === e4.keyCode && g2(t2);
            }, M2.onkeydown = (e4) => {
              k2 = true, ("ArrowUp" === e4.key || "ArrowDown" === e4.key || "Tab" === e4.key) && g2(t2);
            }, M2.onkeyup = () => {
              k2 = false;
            }, {
              dateBox: v2,
              input: M2,
              label: b2
            };
          }
          getPosition() {
            let t2 = this.chart, e3 = t2.options.rangeSelector, i3 = "top" === e3.verticalAlign ? t2.plotTop - t2.axisOffset[0] : 0;
            return {
              buttonTop: i3 + e3.buttonPosition.y,
              inputTop: i3 + e3.inputPosition.y - 10
            };
          }
          getYTDExtremes(t2, e3, i3) {
            let s2 = this.chart.time, o2 = new s2.Date(t2), r2 = s2.get("FullYear", o2), n2 = Math.max(e3, i3 ? s2.Date.UTC(r2, 0, 1) : +new s2.Date(r2, 0, 1)), a2 = o2.getTime();
            return {
              max: Math.min(t2 || a2, a2),
              min: n2
            };
          }
          createElements() {
            let t2 = this.chart, e3 = t2.renderer, i3 = t2.container, s2 = t2.options, o2 = s2.rangeSelector, r2 = o2.inputEnabled, n2 = M(s2.chart.style?.zIndex, 0) + 1;
            if (false !== o2.enabled && (this.group = e3.g("range-selector-group").attr({
              zIndex: 7
            }).add(), this.div = d("div", void 0, {
              position: "relative",
              height: 0,
              zIndex: n2
            }), this.buttonOptions.length && this.renderButtons(), i3.parentNode && i3.parentNode.insertBefore(this.div, i3), r2)) {
              this.inputGroup = e3.g("input-group").add(this.group);
              let t3 = this.drawInput("min");
              this.minDateBox = t3.dateBox, this.minLabel = t3.label, this.minInput = t3.input;
              let i4 = this.drawInput("max");
              this.maxDateBox = i4.dateBox, this.maxLabel = i4.label, this.maxInput = i4.input;
            }
          }
          render(t2, e3) {
            let i3 = this.chart, s2 = i3.options.rangeSelector, o2 = s2.inputEnabled;
            if (false !== s2.enabled) {
              if (o2) {
                this.setInputValue("min", t2), this.setInputValue("max", e3);
                let o3 = i3.scroller && i3.scroller.getUnionExtremes() || i3.xAxis[0] || {};
                if (p(o3.dataMin) && p(o3.dataMax)) {
                  let t3 = i3.xAxis[0].minRange || 0;
                  this.setInputExtremes("min", o3.dataMin, Math.min(o3.dataMax, this.getInputValue("max")) - t3), this.setInputExtremes("max", Math.max(o3.dataMin, this.getInputValue("min")) + t3, o3.dataMax);
                }
                if (this.inputGroup) {
                  let t3 = 0;
                  [this.minLabel, this.minDateBox, this.maxLabel, this.maxDateBox].forEach((e4) => {
                    if (e4) {
                      let {
                        width: i4
                      } = e4.getBBox();
                      i4 && (e4.attr({
                        x: t3
                      }), t3 += i4 + s2.inputSpacing);
                    }
                  });
                }
              }
              this.alignElements(), this.updateButtonStates();
            }
          }
          renderButtons() {
            let {
              buttons: t2,
              chart: e3,
              options: i3
            } = this, o2 = l.lang, r2 = e3.renderer, n2 = y(i3.buttonTheme), a2 = n2 && n2.states, c2 = n2.width || 28;
            delete n2.width, delete n2.states, this.buttonGroup = r2.g("range-selector-buttons").add(this.group);
            let p2 = this.dropdown = d("select", void 0, {
              position: "absolute",
              padding: 0,
              border: 0,
              cursor: "pointer",
              opacity: 1e-4
            }, this.div), u2 = e3.userOptions.rangeSelector?.buttonTheme;
            this.dropdownLabel = r2.button("", 0, 0, () => {
            }, y(n2, {
              "stroke-width": M(n2["stroke-width"], 0),
              width: "auto",
              paddingLeft: M(i3.buttonTheme.paddingLeft, u2?.padding, 8),
              paddingRight: M(i3.buttonTheme.paddingRight, u2?.padding, 8)
            }), a2 && a2.hover, a2 && a2.select, a2 && a2.disabled).hide().add(this.group), h(p2, "touchstart", () => {
              p2.style.fontSize = "16px";
            });
            let g2 = s.isMS ? "mouseover" : "mouseenter", f2 = s.isMS ? "mouseout" : "mouseleave";
            h(p2, g2, () => {
              m(this.dropdownLabel.element, g2);
            }), h(p2, f2, () => {
              m(this.dropdownLabel.element, f2);
            }), h(p2, "change", () => {
              m(this.buttons[p2.selectedIndex - 1].element, "click");
            }), this.zoomText = r2.label(o2.rangeSelectorZoom || "", 0).attr({
              padding: i3.buttonTheme.padding,
              height: i3.buttonTheme.height,
              paddingLeft: 0,
              paddingRight: 0
            }).add(this.buttonGroup), this.chart.styledMode || (this.zoomText.css(i3.labelStyle), n2["stroke-width"] = M(n2["stroke-width"], 0)), d("option", {
              textContent: this.zoomText.textStr,
              disabled: true
            }, void 0, p2), this.buttonOptions.forEach((e4, i4) => {
              d("option", {
                textContent: e4.title || e4.text
              }, void 0, p2), t2[i4] = r2.button(e4.text, 0, 0, (t3) => {
                let s2;
                let o3 = e4.events && e4.events.click;
                o3 && (s2 = o3.call(e4, t3)), false !== s2 && this.clickButton(i4), this.isActive = true;
              }, n2, a2 && a2.hover, a2 && a2.select, a2 && a2.disabled).attr({
                "text-align": "center",
                width: c2
              }).add(this.buttonGroup), e4.title && t2[i4].attr("title", e4.title);
            });
          }
          alignElements() {
            let {
              buttonGroup: t2,
              buttons: e3,
              chart: i3,
              group: s2,
              inputGroup: o2,
              options: r2,
              zoomText: n2
            } = this, a2 = i3.options, l2 = a2.exporting && false !== a2.exporting.enabled && a2.navigation && a2.navigation.buttonOptions, {
              buttonPosition: h2,
              inputPosition: d2,
              verticalAlign: c2
            } = r2, p2 = (t3, e4) => l2 && this.titleCollision(i3) && "top" === c2 && "right" === e4.align && e4.y - t3.getBBox().height - 12 < (l2.y || 0) + (l2.height || 0) + i3.spacing[0] ? -40 : 0, u2 = i3.plotLeft;
            if (s2 && h2 && d2) {
              let a3 = h2.x - i3.spacing[3];
              if (t2) {
                if (this.positionButtons(), !this.initialButtonGroupWidth) {
                  let t3 = 0;
                  n2 && (t3 += n2.getBBox().width + 5), e3.forEach((i4, s3) => {
                    t3 += i4.width || 0, s3 !== e3.length - 1 && (t3 += r2.buttonSpacing);
                  }), this.initialButtonGroupWidth = t3;
                }
                u2 -= i3.spacing[3];
                let o3 = p2(t2, h2);
                this.alignButtonGroup(o3), this.buttonGroup?.translateY && this.dropdownLabel.attr({
                  y: this.buttonGroup.translateY
                }), s2.placed = t2.placed = i3.hasLoaded;
              }
              let l3 = 0;
              o2 && (l3 = p2(o2, d2), "left" === d2.align ? a3 = u2 : "right" === d2.align && (a3 = -Math.max(i3.axisOffset[1], -l3)), o2.align({
                y: d2.y,
                width: o2.getBBox().width,
                align: d2.align,
                x: d2.x + a3 - 2
              }, true, i3.spacingBox), o2.placed = i3.hasLoaded), this.handleCollision(l3), s2.align({
                verticalAlign: c2
              }, true, i3.spacingBox);
              let g2 = s2.alignAttr.translateY, f2 = s2.getBBox().height + 20, m2 = 0;
              if ("bottom" === c2) {
                let t3 = i3.legend && i3.legend.options;
                m2 = g2 - (f2 = f2 + (t3 && "bottom" === t3.verticalAlign && t3.enabled && !t3.floating ? i3.legend.legendHeight + M(t3.margin, 10) : 0) - 20) - (r2.floating ? 0 : r2.y) - (i3.titleOffset ? i3.titleOffset[2] : 0) - 10;
              }
              "top" === c2 ? (r2.floating && (m2 = 0), i3.titleOffset && i3.titleOffset[0] && (m2 = i3.titleOffset[0]), m2 += i3.margin[0] - i3.spacing[0] || 0) : "middle" === c2 && (d2.y === h2.y ? m2 = g2 : (d2.y || h2.y) && (d2.y < 0 || h2.y < 0 ? m2 -= Math.min(d2.y, h2.y) : m2 = g2 - f2)), s2.translate(r2.x, r2.y + Math.floor(m2));
              let {
                minInput: x2,
                maxInput: y2,
                dropdown: b2
              } = this;
              r2.inputEnabled && x2 && y2 && (x2.style.marginTop = s2.translateY + "px", y2.style.marginTop = s2.translateY + "px"), b2 && (b2.style.marginTop = s2.translateY + "px");
            }
          }
          alignButtonGroup(t2, e3) {
            let {
              chart: i3,
              options: s2,
              buttonGroup: o2
            } = this, {
              buttonPosition: r2
            } = s2, n2 = i3.plotLeft - i3.spacing[3], a2 = r2.x - i3.spacing[3];
            "right" === r2.align ? a2 += t2 - n2 : "center" === r2.align && (a2 -= n2 / 2), o2 && o2.align({
              y: r2.y,
              width: M(e3, this.initialButtonGroupWidth),
              align: r2.align,
              x: a2
            }, true, i3.spacingBox);
          }
          positionButtons() {
            let {
              buttons: t2,
              chart: e3,
              options: i3,
              zoomText: s2
            } = this, o2 = e3.hasLoaded ? "animate" : "attr", {
              buttonPosition: r2
            } = i3, n2 = e3.plotLeft, a2 = n2;
            s2 && "hidden" !== s2.visibility && (s2[o2]({
              x: M(n2 + r2.x, n2)
            }), a2 += r2.x + s2.getBBox().width + 5);
            for (let e4 = 0, s3 = this.buttonOptions.length; e4 < s3; ++e4) "hidden" !== t2[e4].visibility ? (t2[e4][o2]({
              x: a2
            }), a2 += (t2[e4].width || 0) + i3.buttonSpacing) : t2[e4][o2]({
              x: n2
            });
          }
          handleCollision(t2) {
            let {
              chart: e3,
              buttonGroup: i3,
              inputGroup: s2
            } = this, {
              buttonPosition: o2,
              dropdown: r2,
              inputPosition: n2
            } = this.options, a2 = () => {
              let t3 = 0;
              return this.buttons.forEach((e4) => {
                let i4 = e4.getBBox();
                i4.width > t3 && (t3 = i4.width);
              }), t3;
            }, l2 = (e4) => {
              if (s2?.alignOptions && i3) {
                let r3 = s2.alignAttr.translateX + s2.alignOptions.x - t2 + s2.getBBox().x + 2, a3 = s2.alignOptions.width || 0, l3 = i3.alignAttr.translateX + i3.getBBox().x;
                return l3 + e4 > r3 && r3 + a3 > l3 && o2.y < n2.y + s2.getBBox().height;
              }
              return false;
            }, h2 = () => {
              s2 && i3 && s2.attr({
                translateX: s2.alignAttr.translateX + (e3.axisOffset[1] >= -t2 ? 0 : -t2),
                translateY: s2.alignAttr.translateY + i3.getBBox().height + 10
              });
            };
            if (i3) {
              if ("always" === r2) {
                this.collapseButtons(), l2(a2()) && h2();
                return;
              }
              "never" === r2 && this.expandButtons();
            }
            s2 && i3 ? n2.align === o2.align || l2(this.initialButtonGroupWidth + 20) ? "responsive" === r2 ? (this.collapseButtons(), l2(a2()) && h2()) : h2() : "responsive" === r2 && this.expandButtons() : i3 && "responsive" === r2 && (this.initialButtonGroupWidth > e3.plotWidth ? this.collapseButtons() : this.expandButtons());
          }
          collapseButtons() {
            let {
              buttons: t2,
              zoomText: e3
            } = this;
            true !== this.isCollapsed && (this.isCollapsed = true, e3.hide(), t2.forEach((t3) => void t3.hide()), this.showDropdown());
          }
          expandButtons() {
            let {
              buttons: t2,
              zoomText: e3
            } = this;
            false !== this.isCollapsed && (this.isCollapsed = false, this.hideDropdown(), e3.show(), t2.forEach((t3) => void t3.show()), this.positionButtons());
          }
          showDropdown() {
            let {
              buttonGroup: t2,
              chart: e3,
              dropdownLabel: i3,
              dropdown: s2
            } = this;
            if (t2 && s2) {
              let {
                translateX: o2 = 0,
                translateY: r2 = 0
              } = t2, n2 = e3.plotLeft + o2;
              i3.attr({
                x: n2,
                y: r2
              }).show(), c(s2, {
                left: n2 + "px",
                top: r2 + "px",
                visibility: "inherit"
              }), this.hasVisibleDropdown = true;
            }
          }
          hideDropdown() {
            let {
              dropdown: t2
            } = this;
            t2 && (this.dropdownLabel.hide(), c(t2, {
              visibility: "hidden",
              width: "1px",
              height: "1px"
            }), this.hasVisibleDropdown = false);
          }
          getHeight() {
            let t2 = this.options, e3 = this.group, i3 = t2.inputPosition, s2 = t2.buttonPosition, o2 = t2.y, r2 = s2.y, n2 = i3.y, a2 = 0;
            if (t2.height) return t2.height;
            this.alignElements(), a2 = e3 ? e3.getBBox(true).height + 13 + o2 : 0;
            let l2 = Math.min(n2, r2);
            return (n2 < 0 && r2 < 0 || n2 > 0 && r2 > 0) && (a2 += Math.abs(l2)), a2;
          }
          titleCollision(t2) {
            return !(t2.options.title.text || t2.options.subtitle.text);
          }
          update(t2, e3 = true) {
            let i3 = this.chart;
            y(true, i3.options.rangeSelector, t2), this.destroy(), this.init(i3), e3 && this.render();
          }
          destroy() {
            let e3 = this, i3 = e3.minInput, s2 = e3.maxInput;
            e3.eventsToUnbind && (e3.eventsToUnbind.forEach((t2) => t2()), e3.eventsToUnbind = void 0), u(e3.buttons), i3 && (i3.onfocus = i3.onblur = i3.onchange = null), s2 && (s2.onfocus = s2.onblur = s2.onchange = null), b(e3, function(i4, s3) {
              i4 && "chart" !== s3 && (i4 instanceof r ? i4.destroy() : i4 instanceof t.HTMLElement && g(i4)), i4 !== C.prototype[s3] && (e3[s3] = null);
            }, this);
          }
        }
        return f(C.prototype, {
          defaultButtons: [{
            type: "month",
            count: 1,
            text: "1m",
            title: "View 1 month"
          }, {
            type: "month",
            count: 3,
            text: "3m",
            title: "View 3 months"
          }, {
            type: "month",
            count: 6,
            text: "6m",
            title: "View 6 months"
          }, {
            type: "ytd",
            text: "YTD",
            title: "View year to date"
          }, {
            type: "year",
            count: 1,
            text: "1y",
            title: "View 1 year"
          }, {
            type: "all",
            text: "All",
            title: "View all"
          }],
          inputTypeFormats: {
            "datetime-local": "%Y-%m-%dT%H:%M:%S",
            date: "%Y-%m-%d",
            time: "%H:%M:%S"
          }
        }), C;
      }), i(e, "Series/PathUtilities.js", [], function() {
        function t2(t3, e2) {
          let i2 = [];
          for (let s = 0; s < t3.length; s++) {
            let o = t3[s][1], r = t3[s][2];
            if ("number" == typeof o && "number" == typeof r) {
              if (0 === s) i2.push(["M", o, r]);
              else if (s === t3.length - 1) i2.push(["L", o, r]);
              else if (e2) {
                let n = t3[s - 1], a = t3[s + 1];
                if (n && a) {
                  let t4 = n[1], s2 = n[2], l = a[1], h = a[2];
                  if ("number" == typeof t4 && "number" == typeof l && "number" == typeof s2 && "number" == typeof h && t4 !== l && s2 !== h) {
                    let n2 = t4 < l ? 1 : -1, a2 = s2 < h ? 1 : -1;
                    i2.push(["L", o - n2 * Math.min(Math.abs(o - t4), e2), r - a2 * Math.min(Math.abs(r - s2), e2)], ["C", o, r, o, r, o + n2 * Math.min(Math.abs(o - l), e2), r + a2 * Math.min(Math.abs(r - h), e2)]);
                  }
                }
              } else i2.push(["L", o, r]);
            }
          }
          return i2;
        }
        return {
          applyRadius: t2,
          getLinkPath: {
            default: function(e2) {
              let {
                x1: i2,
                y1: s,
                x2: o,
                y2: r,
                width: n = 0,
                inverted: a = false,
                radius: l,
                parentVisible: h
              } = e2, d = [["M", i2, s], ["L", i2, s], ["C", i2, s, i2, r, i2, r], ["L", i2, r], ["C", i2, s, i2, r, i2, r], ["L", i2, r]];
              return h ? t2([["M", i2, s], ["L", i2 + n * (a ? -0.5 : 0.5), s], ["L", i2 + n * (a ? -0.5 : 0.5), r], ["L", o, r]], l) : d;
            },
            straight: function(t3) {
              let {
                x1: e2,
                y1: i2,
                x2: s,
                y2: o,
                width: r = 0,
                inverted: n = false,
                parentVisible: a
              } = t3;
              return a ? [["M", e2, i2], ["L", e2 + r * (n ? -1 : 1), o], ["L", s, o]] : [["M", e2, i2], ["L", e2, o], ["L", e2, o]];
            },
            curved: function(t3) {
              let {
                x1: e2,
                y1: i2,
                x2: s,
                y2: o,
                offset: r = 0,
                width: n = 0,
                inverted: a = false,
                parentVisible: l
              } = t3;
              return l ? [["M", e2, i2], ["C", e2 + r, i2, e2 - r + n * (a ? -1 : 1), o, e2 + n * (a ? -1 : 1), o], ["L", s, o]] : [["M", e2, i2], ["C", e2, i2, e2, o, e2, o], ["L", s, o]];
            }
          }
        };
      }), i(e, "Gantt/PathfinderAlgorithms.js", [e["Series/PathUtilities.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          pick: i2
        } = e2, {
          min: s,
          max: o,
          abs: r
        } = Math;
        function n(t3, e3, i3) {
          let s2 = e3 - 1e-7, o2 = i3 || 0, r2 = t3.length - 1, n2, a2;
          for (; o2 <= r2; ) if ((a2 = s2 - t3[n2 = r2 + o2 >> 1].xMin) > 0) o2 = n2 + 1;
          else {
            if (!(a2 < 0)) return n2;
            r2 = n2 - 1;
          }
          return o2 > 0 ? o2 - 1 : 0;
        }
        function a(t3, e3) {
          let i3 = n(t3, e3.x + 1) + 1;
          for (; i3--; ) {
            var s2;
            if (t3[i3].xMax >= e3.x && (s2 = t3[i3], e3.x <= s2.xMax && e3.x >= s2.xMin && e3.y <= s2.yMax && e3.y >= s2.yMin)) return i3;
          }
          return -1;
        }
        function l(t3) {
          let e3 = [];
          if (t3.length) {
            e3.push(["M", t3[0].start.x, t3[0].start.y]);
            for (let i3 = 0; i3 < t3.length; ++i3) e3.push(["L", t3[i3].end.x, t3[i3].end.y]);
          }
          return e3;
        }
        function h(t3, e3) {
          t3.yMin = o(t3.yMin, e3.yMin), t3.yMax = s(t3.yMax, e3.yMax), t3.xMin = o(t3.xMin, e3.xMin), t3.xMax = s(t3.xMax, e3.xMax);
        }
        let d = function(e3, s2, o2) {
          let n2 = [], h2 = o2.chartObstacles, d2 = a(h2, e3), c2 = a(h2, s2), p, u = i2(o2.startDirectionX, r(s2.x - e3.x) > r(s2.y - e3.y)) ? "x" : "y", g, f, m, x;
          function y(t3, e4, i3, s3, o3) {
            let r2 = {
              x: t3.x,
              y: t3.y
            };
            return r2[e4] = i3[s3 || e4] + (o3 || 0), r2;
          }
          function b(t3, e4, i3) {
            let s3 = r(e4[i3] - t3[i3 + "Min"]) > r(e4[i3] - t3[i3 + "Max"]);
            return y(e4, i3, t3, i3 + (s3 ? "Max" : "Min"), s3 ? 1 : -1);
          }
          c2 > -1 ? (p = {
            start: f = b(h2[c2], s2, u),
            end: s2
          }, x = f) : x = s2, d2 > -1 && (f = b(g = h2[d2], e3, u), n2.push({
            start: e3,
            end: f
          }), f[u] >= e3[u] == f[u] >= x[u] && (m = e3[u = "y" === u ? "x" : "y"] < s2[u], n2.push({
            start: f,
            end: y(f, u, g, u + (m ? "Max" : "Min"), m ? 1 : -1)
          }), u = "y" === u ? "x" : "y"));
          let v = n2.length ? n2[n2.length - 1].end : e3;
          f = y(v, u, x), n2.push({
            start: v,
            end: f
          });
          let M = y(f, u = "y" === u ? "x" : "y", x);
          return n2.push({
            start: f,
            end: M
          }), n2.push(p), {
            path: t2.applyRadius(l(n2), o2.radius),
            obstacles: n2
          };
        };
        function c(t3, e3, d2) {
          let c2 = i2(d2.startDirectionX, r(e3.x - t3.x) > r(e3.y - t3.y)), p = c2 ? "x" : "y", u = [], g = d2.obstacleMetrics, f = s(t3.x, e3.x) - g.maxWidth - 10, m = o(t3.x, e3.x) + g.maxWidth + 10, x = s(t3.y, e3.y) - g.maxHeight - 10, y = o(t3.y, e3.y) + g.maxHeight + 10, b, v, M, k = false, S = d2.chartObstacles, C = n(S, m), w = n(S, f);
          function A(t4, e4, i3) {
            let o2, r2, a2, l2;
            let h2 = t4.x < e4.x ? 1 : -1;
            t4.x < e4.x ? (o2 = t4, r2 = e4) : (o2 = e4, r2 = t4), t4.y < e4.y ? (l2 = t4, a2 = e4) : (l2 = e4, a2 = t4);
            let d3 = h2 < 0 ? s(n(S, r2.x), S.length - 1) : 0;
            for (; S[d3] && (h2 > 0 && S[d3].xMin <= r2.x || h2 < 0 && S[d3].xMax >= o2.x); ) {
              if (S[d3].xMin <= r2.x && S[d3].xMax >= o2.x && S[d3].yMin <= a2.y && S[d3].yMax >= l2.y) {
                if (i3) return {
                  y: t4.y,
                  x: t4.x < e4.x ? S[d3].xMin - 1 : S[d3].xMax + 1,
                  obstacle: S[d3]
                };
                return {
                  x: t4.x,
                  y: t4.y < e4.y ? S[d3].yMin - 1 : S[d3].yMax + 1,
                  obstacle: S[d3]
                };
              }
              d3 += h2;
            }
            return e4;
          }
          function T(t4, e4, i3, s2, o2) {
            let n2 = o2.soft, a2 = o2.hard, l2 = s2 ? "x" : "y", h2 = {
              x: e4.x,
              y: e4.y
            }, d3 = {
              x: e4.x,
              y: e4.y
            }, c3 = t4[l2 + "Max"] >= n2[l2 + "Max"], p2 = t4[l2 + "Min"] <= n2[l2 + "Min"], u2 = t4[l2 + "Max"] >= a2[l2 + "Max"], g2 = t4[l2 + "Min"] <= a2[l2 + "Min"], f2 = r(t4[l2 + "Min"] - e4[l2]), m2 = r(t4[l2 + "Max"] - e4[l2]), x2 = 10 > r(f2 - m2) ? e4[l2] < i3[l2] : m2 < f2;
            d3[l2] = t4[l2 + "Min"], h2[l2] = t4[l2 + "Max"];
            let y2 = A(e4, d3, s2)[l2] !== d3[l2], b2 = A(e4, h2, s2)[l2] !== h2[l2];
            return x2 = y2 ? !b2 || x2 : !b2 && x2, x2 = p2 ? !c3 || x2 : !c3 && x2, x2 = g2 ? !u2 || x2 : !u2 && x2;
          }
          for ((C = a(S = S.slice(w, C + 1), e3)) > -1 && (M = function(t4, e4, i3) {
            let o2 = s(t4.xMax - e4.x, e4.x - t4.xMin) < s(t4.yMax - e4.y, e4.y - t4.yMin), r2 = T(t4, e4, i3, o2, {
              soft: d2.hardBounds,
              hard: d2.hardBounds
            });
            return o2 ? {
              y: e4.y,
              x: t4[r2 ? "xMax" : "xMin"] + (r2 ? 1 : -1)
            } : {
              x: e4.x,
              y: t4[r2 ? "yMax" : "yMin"] + (r2 ? 1 : -1)
            };
          }(S[C], e3, t3), u.push({
            end: e3,
            start: M
          }), e3 = M); (C = a(S, e3)) > -1; ) v = e3[p] - t3[p] < 0, (M = {
            x: e3.x,
            y: e3.y
          })[p] = S[C][v ? p + "Max" : p + "Min"] + (v ? 1 : -1), u.push({
            end: e3,
            start: M
          }), e3 = M;
          return {
            path: l(b = (b = function t4(e4, i3, r2) {
              let n2, l2, c3, p2, u2, g2, b2;
              if (e4.x === i3.x && e4.y === i3.y) return [];
              let v2 = r2 ? "x" : "y", M2 = d2.obstacleOptions.margin, C2 = {
                soft: {
                  xMin: f,
                  xMax: m,
                  yMin: x,
                  yMax: y
                },
                hard: d2.hardBounds
              };
              return (u2 = a(S, e4)) > -1 ? (p2 = T(u2 = S[u2], e4, i3, r2, C2), h(u2, d2.hardBounds), b2 = r2 ? {
                y: e4.y,
                x: u2[p2 ? "xMax" : "xMin"] + (p2 ? 1 : -1)
              } : {
                x: e4.x,
                y: u2[p2 ? "yMax" : "yMin"] + (p2 ? 1 : -1)
              }, (g2 = a(S, b2)) > -1 && (h(g2 = S[g2], d2.hardBounds), b2[v2] = p2 ? o(u2[v2 + "Max"] - M2 + 1, (g2[v2 + "Min"] + u2[v2 + "Max"]) / 2) : s(u2[v2 + "Min"] + M2 - 1, (g2[v2 + "Max"] + u2[v2 + "Min"]) / 2), e4.x === b2.x && e4.y === b2.y ? (k && (b2[v2] = p2 ? o(u2[v2 + "Max"], g2[v2 + "Max"]) + 1 : s(u2[v2 + "Min"], g2[v2 + "Min"]) - 1), k = !k) : k = false), l2 = [{
                start: e4,
                end: b2
              }]) : (n2 = A(e4, {
                x: r2 ? i3.x : e4.x,
                y: r2 ? e4.y : i3.y
              }, r2), l2 = [{
                start: e4,
                end: {
                  x: n2.x,
                  y: n2.y
                }
              }], n2[r2 ? "x" : "y"] !== i3[r2 ? "x" : "y"] && (p2 = T(n2.obstacle, n2, i3, !r2, C2), h(n2.obstacle, d2.hardBounds), c3 = {
                x: r2 ? n2.x : n2.obstacle[p2 ? "xMax" : "xMin"] + (p2 ? 1 : -1),
                y: r2 ? n2.obstacle[p2 ? "yMax" : "yMin"] + (p2 ? 1 : -1) : n2.y
              }, r2 = !r2, l2 = l2.concat(t4({
                x: n2.x,
                y: n2.y
              }, c3, r2)))), l2 = l2.concat(t4(l2[l2.length - 1].end, i3, !r2));
            }(t3, e3, c2)).concat(u.reverse())),
            obstacles: b
          };
        }
        return d.requiresObstacles = true, c.requiresObstacles = true, {
          fastAvoid: c,
          straight: function(t3, e3) {
            return {
              path: [["M", t3.x, t3.y], ["L", e3.x, e3.y]],
              obstacles: [{
                start: t3,
                end: e3
              }]
            };
          },
          simpleConnect: d
        };
      }), i(e, "Gantt/ConnectorsDefaults.js", [], function() {
        return {
          connectors: {
            type: "straight",
            radius: 0,
            lineWidth: 1,
            marker: {
              enabled: false,
              align: "center",
              verticalAlign: "middle",
              inside: false,
              lineWidth: 1
            },
            startMarker: {
              symbol: "diamond"
            },
            endMarker: {
              symbol: "arrow-filled"
            }
          }
        };
      }), i(e, "Gantt/PathfinderComposition.js", [e["Gantt/ConnectorsDefaults.js"], e["Core/Defaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let {
          setOptions: o
        } = e2, {
          defined: r,
          error: n,
          merge: a
        } = i2;
        function l(t3) {
          let e3 = t3.shapeArgs;
          if (e3) return {
            xMin: e3.x || 0,
            xMax: (e3.x || 0) + (e3.width || 0),
            yMin: e3.y || 0,
            yMax: (e3.y || 0) + (e3.height || 0)
          };
          let i3 = t3.graphic && t3.graphic.getBBox();
          return i3 ? {
            xMin: t3.plotX - i3.width / 2,
            xMax: t3.plotX + i3.width / 2,
            yMin: t3.plotY - i3.height / 2,
            yMax: t3.plotY + i3.height / 2
          } : null;
        }
        return function(e3) {
          function i3(t3) {
            let e4, i4;
            let s3 = l(this);
            switch (t3.align) {
              case "right":
                e4 = "xMax";
                break;
              case "left":
                e4 = "xMin";
            }
            switch (t3.verticalAlign) {
              case "top":
                i4 = "yMin";
                break;
              case "bottom":
                i4 = "yMax";
            }
            return {
              x: e4 ? s3[e4] : (s3.xMin + s3.xMax) / 2,
              y: i4 ? s3[i4] : (s3.yMin + s3.yMax) / 2
            };
          }
          function s2(t3, e4) {
            let i4;
            return !r(e4) && (i4 = l(this)) && (e4 = {
              x: (i4.xMin + i4.xMax) / 2,
              y: (i4.yMin + i4.yMax) / 2
            }), Math.atan2(e4.y - t3.y, t3.x - e4.x);
          }
          function h(t3, e4, i4) {
            let s3 = 2 * Math.PI, o2 = l(this), r2 = o2.xMax - o2.xMin, n2 = o2.yMax - o2.yMin, a2 = Math.atan2(n2, r2), h2 = r2 / 2, d = n2 / 2, c = o2.xMin + h2, p = o2.yMin + d, u = {
              x: c,
              y: p
            }, g = t3, f = 1, m = false, x = 1, y = 1;
            for (; g < -Math.PI; ) g += s3;
            for (; g > Math.PI; ) g -= s3;
            return f = Math.tan(g), g > -a2 && g <= a2 ? (y = -1, m = true) : g > a2 && g <= Math.PI - a2 ? y = -1 : g > Math.PI - a2 || g <= -(Math.PI - a2) ? (x = -1, m = true) : x = -1, m ? (u.x += x * h2, u.y += y * h2 * f) : (u.x += n2 / (2 * f) * x, u.y += y * d), i4.x !== c && (u.x = i4.x), i4.y !== p && (u.y = i4.y), {
              x: u.x + e4 * Math.cos(g),
              y: u.y - e4 * Math.sin(g)
            };
          }
          e3.compose = function(e4, r2, l2) {
            let d = l2.prototype;
            d.getPathfinderAnchorPoint || (e4.prototype.callbacks.push(function(t3) {
              false !== t3.options.connectors.enabled && ((t3.options.pathfinder || t3.series.reduce(function(t4, e5) {
                return e5.options && a(true, e5.options.connectors = e5.options.connectors || {}, e5.options.pathfinder), t4 || e5.options && e5.options.pathfinder;
              }, false)) && (a(true, t3.options.connectors = t3.options.connectors || {}, t3.options.pathfinder), n('WARNING: Pathfinder options have been renamed. Use "chart.connectors" or "series.connectors" instead.')), this.pathfinder = new r2(this), this.pathfinder.update(true));
            }), d.getMarkerVector = h, d.getPathfinderAnchorPoint = i3, d.getRadiansToVector = s2, o(t2));
          };
        }(s || (s = {})), s;
      }), i(e, "Gantt/Pathfinder.js", [e["Gantt/Connection.js"], e["Gantt/PathfinderAlgorithms.js"], e["Gantt/PathfinderComposition.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let {
          addEvent: r,
          defined: n,
          pick: a,
          splat: l
        } = o, h = Math.max, d = Math.min;
        class c {
          static compose(t3, e3) {
            i2.compose(t3, c, e3);
          }
          constructor(t3) {
            this.init(t3);
          }
          init(t3) {
            this.chart = t3, this.connections = [], r(t3, "redraw", function() {
              this.pathfinder.update();
            });
          }
          update(e3) {
            let i3 = this.chart, o2 = this, r2 = o2.connections;
            o2.connections = [], i3.series.forEach(function(e4) {
              e4.visible && !e4.options.isInternal && e4.points.forEach(function(e5) {
                let r3;
                let n2 = e5.options;
                n2 && n2.dependency && (n2.connect = n2.dependency);
                let a2 = e5.options?.connect && l(e5.options.connect);
                e5.visible && false !== e5.isInside && a2 && a2.forEach(function(n3) {
                  (r3 = i3.get("string" == typeof n3 ? n3 : n3.to)) instanceof s && r3.series.visible && r3.visible && false !== r3.isInside && o2.connections.push(new t2(e5, r3, "string" == typeof n3 ? {} : n3));
                });
              });
            });
            for (let t3 = 0, e4, i4, s2 = r2.length, n2 = o2.connections.length; t3 < s2; ++t3) {
              i4 = false;
              let s3 = r2[t3];
              for (e4 = 0; e4 < n2; ++e4) {
                let t4 = o2.connections[e4];
                if ((s3.options && s3.options.type) === (t4.options && t4.options.type) && s3.fromPoint === t4.fromPoint && s3.toPoint === t4.toPoint) {
                  t4.graphics = s3.graphics, i4 = true;
                  break;
                }
              }
              i4 || s3.destroy();
            }
            delete this.chartObstacles, delete this.lineObstacles, o2.renderConnections(e3);
          }
          renderConnections(t3) {
            t3 ? this.chart.series.forEach(function(t4) {
              let e3 = function() {
                let e4 = t4.chart.pathfinder;
                (e4 && e4.connections || []).forEach(function(e5) {
                  e5.fromPoint && e5.fromPoint.series === t4 && e5.render();
                }), t4.pathfinderRemoveRenderEvent && (t4.pathfinderRemoveRenderEvent(), delete t4.pathfinderRemoveRenderEvent);
              };
              false === t4.options.animation ? e3() : t4.pathfinderRemoveRenderEvent = r(t4, "afterAnimate", e3);
            }) : this.connections.forEach(function(t4) {
              t4.render();
            });
          }
          getChartObstacles(t3) {
            let e3 = this.chart.series, i3 = a(t3.algorithmMargin, 0), s2 = [], o2;
            for (let t4 = 0, o3 = e3.length; t4 < o3; ++t4) if (e3[t4].visible && !e3[t4].options.isInternal) for (let o4 = 0, r2 = e3[t4].points.length, n2, a2; o4 < r2; ++o4) (a2 = e3[t4].points[o4]).visible && (n2 = function(t5) {
              let e4 = t5.shapeArgs;
              if (e4) return {
                xMin: e4.x || 0,
                xMax: (e4.x || 0) + (e4.width || 0),
                yMin: e4.y || 0,
                yMax: (e4.y || 0) + (e4.height || 0)
              };
              let i4 = t5.graphic && t5.graphic.getBBox();
              return i4 ? {
                xMin: t5.plotX - i4.width / 2,
                xMax: t5.plotX + i4.width / 2,
                yMin: t5.plotY - i4.height / 2,
                yMax: t5.plotY + i4.height / 2
              } : null;
            }(a2)) && s2.push({
              xMin: n2.xMin - i3,
              xMax: n2.xMax + i3,
              yMin: n2.yMin - i3,
              yMax: n2.yMax + i3
            });
            return s2 = s2.sort(function(t4, e4) {
              return t4.xMin - e4.xMin;
            }), n(t3.algorithmMargin) || (o2 = t3.algorithmMargin = function(t4) {
              let e4;
              let i4 = t4.length, s3 = [];
              for (let o3 = 0; o3 < i4; ++o3) for (let r2 = o3 + 1; r2 < i4; ++r2) (e4 = function t5(e5, i5, s4) {
                let o4 = a(s4, 10), r3 = e5.yMax + o4 > i5.yMin - o4 && e5.yMin - o4 < i5.yMax + o4, n2 = e5.xMax + o4 > i5.xMin - o4 && e5.xMin - o4 < i5.xMax + o4, l2 = r3 ? e5.xMin > i5.xMax ? e5.xMin - i5.xMax : i5.xMin - e5.xMax : 1 / 0, h2 = n2 ? e5.yMin > i5.yMax ? e5.yMin - i5.yMax : i5.yMin - e5.yMax : 1 / 0;
                return n2 && r3 ? o4 ? t5(e5, i5, Math.floor(o4 / 2)) : 1 / 0 : d(l2, h2);
              }(t4[o3], t4[r2])) < 80 && s3.push(e4);
              return s3.push(80), h(Math.floor(s3.sort(function(t5, e5) {
                return t5 - e5;
              })[Math.floor(s3.length / 10)] / 2 - 1), 1);
            }(s2), s2.forEach(function(t4) {
              t4.xMin -= o2, t4.xMax += o2, t4.yMin -= o2, t4.yMax += o2;
            })), s2;
          }
          getObstacleMetrics(t3) {
            let e3 = 0, i3 = 0, s2, o2, r2 = t3.length;
            for (; r2--; ) s2 = t3[r2].xMax - t3[r2].xMin, o2 = t3[r2].yMax - t3[r2].yMin, e3 < s2 && (e3 = s2), i3 < o2 && (i3 = o2);
            return {
              maxHeight: i3,
              maxWidth: e3
            };
          }
          getAlgorithmStartDirection(t3) {
            let e3 = "left" !== t3.align && "right" !== t3.align, i3 = "top" !== t3.verticalAlign && "bottom" !== t3.verticalAlign;
            return e3 ? !!i3 && void 0 : !!i3 || void 0;
          }
        }
        return c.prototype.algorithms = e2, c;
      }), i(e, "masters/modules/pathfinder.src.js", [e["Core/Globals.js"], e["Gantt/Pathfinder.js"], e["Extensions/ArrowSymbols.js"]], function(t2, e2, i2) {
        return t2.Pathfinder = t2.Pathfinder || e2, i2.compose(t2.SVGRenderer), t2.Pathfinder.compose(t2.Chart, t2.Point), t2;
      }), i(e, "Extensions/StaticScale.js", [e["Core/Utilities.js"]], function(t2) {
        let {
          addEvent: e2,
          defined: i2,
          isNumber: s,
          pick: o
        } = t2;
        function r() {
          let t3 = this.chart.options.chart;
          !this.horiz && s(this.options.staticScale) && (!t3.height || t3.scrollablePlotArea && t3.scrollablePlotArea.minHeight) && (this.staticScale = this.options.staticScale);
        }
        function n() {
          if ("adjustHeight" !== this.redrawTrigger) {
            for (let t3 of this.axes || []) {
              let e3 = t3.chart, s2 = !!e3.initiatedScale && e3.options.animation, r2 = t3.options.staticScale;
              if (t3.staticScale && i2(t3.min)) {
                let i3 = o(t3.brokenAxis && t3.brokenAxis.unitLength, t3.max + t3.tickInterval - t3.min) * r2, n2 = (i3 = Math.max(i3, r2)) - e3.plotHeight;
                !e3.scrollablePixelsY && Math.abs(n2) >= 1 && (e3.plotHeight = i3, e3.redrawTrigger = "adjustHeight", e3.setSize(void 0, e3.chartHeight + n2, s2)), t3.series.forEach(function(t4) {
                  let i4 = t4.sharedClipKey && e3.sharedClips[t4.sharedClipKey];
                  i4 && i4.attr(e3.inverted ? {
                    width: e3.plotHeight
                  } : {
                    height: e3.plotHeight
                  });
                });
              }
            }
            this.initiatedScale = true;
          }
          this.redrawTrigger = null;
        }
        return {
          compose: function(t3, i3) {
            let s2 = i3.prototype;
            s2.adjustHeight || (e2(t3, "afterSetOptions", r), s2.adjustHeight = n, e2(i3, "render", s2.adjustHeight));
          }
        };
      }), i(e, "masters/modules/static-scale.src.js", [e["Core/Globals.js"], e["Extensions/StaticScale.js"]], function(t2, e2) {
        return e2.compose(t2.Axis, t2.Chart), t2;
      }), i(e, "Series/XRange/XRangeSeriesDefaults.js", [e["Core/Utilities.js"]], function(t2) {
        let {
          correctFloat: e2,
          isNumber: i2,
          isObject: s
        } = t2;
        return {
          colorByPoint: true,
          dataLabels: {
            formatter: function() {
              let t3 = this.point.partialFill;
              if (s(t3) && (t3 = t3.amount), i2(t3) && t3 > 0) return e2(100 * t3) + "%";
            },
            inside: true,
            verticalAlign: "middle",
            style: {
              whiteSpace: "nowrap"
            }
          },
          tooltip: {
            headerFormat: '<span style="font-size: 0.8em">{point.x} - {point.x2}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.yCategory}</b><br/>'
          },
          borderRadius: 3,
          pointRange: 0
        };
      }), i(e, "Series/XRange/XRangePoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          column: {
            prototype: {
              pointClass: i2
            }
          }
        } = t2.seriesTypes, {
          extend: s
        } = e2;
        class o extends i2 {
          static getColorByCategory(t3, e3) {
            let i3 = t3.options.colors || t3.chart.options.colors, s2 = i3 ? i3.length : t3.chart.options.chart.colorCount, o2 = e3.y % s2, r = i3 && i3[o2];
            return {
              colorIndex: o2,
              color: r
            };
          }
          resolveColor() {
            let t3 = this.series;
            if (t3.options.colorByPoint && !this.options.color) {
              let e3 = o.getColorByCategory(t3, this);
              t3.chart.styledMode || (this.color = e3.color), this.options.colorIndex || (this.colorIndex = e3.colorIndex);
            } else this.color = this.options.color || t3.color;
          }
          constructor(t3, e3) {
            super(t3, e3), this.y || (this.y = 0);
          }
          setState() {
            super.setState.apply(this, arguments), this.series.drawPoint(this, this.series.getAnimationVerb());
          }
          getLabelConfig() {
            let t3 = super.getLabelConfig.call(this), e3 = this.series.yAxis.categories;
            return t3.x2 = this.x2, t3.yCategory = this.yCategory = e3 && e3[this.y], t3.key = this.category || this.name, t3;
          }
          isValid() {
            return "number" == typeof this.x && "number" == typeof this.x2;
          }
        }
        return s(o.prototype, {
          ttBelow: false,
          tooltipDateKeys: ["x", "x2"]
        }), o;
      }), i(e, "Series/XRange/XRangeSeries.js", [e["Core/Globals.js"], e["Core/Color/Color.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Series/XRange/XRangeSeriesDefaults.js"], e["Series/XRange/XRangePoint.js"]], function(t2, e2, i2, s, o, r) {
        let {
          composed: n,
          noop: a
        } = t2, {
          parse: l
        } = e2, {
          column: h
        } = i2.seriesTypes, {
          addEvent: d,
          clamp: c,
          crisp: p,
          defined: u,
          extend: g,
          find: f,
          isNumber: m,
          isObject: x,
          merge: y,
          pick: b,
          pushUnique: v,
          relativeLength: M
        } = s;
        function k() {
          let t3, e3;
          if (this.isXAxis) {
            for (let i3 of (t3 = b(this.dataMax, -Number.MAX_VALUE), this.series)) if (i3.x2Data) for (let s2 of i3.x2Data) s2 && s2 > t3 && (t3 = s2, e3 = true);
            e3 && (this.dataMax = t3);
          }
        }
        class S extends h {
          static compose(t3) {
            v(n, "Series.XRange") && d(t3, "afterGetSeriesExtremes", k);
          }
          init() {
            super.init.apply(this, arguments), this.options.stacking = void 0;
          }
          getColumnMetrics() {
            let t3 = () => {
              for (let t4 of this.chart.series) {
                let e4 = t4.xAxis;
                t4.xAxis = t4.yAxis, t4.yAxis = e4;
              }
            };
            t3();
            let e3 = super.getColumnMetrics();
            return t3(), e3;
          }
          cropData(t3, e3, i3, s2) {
            let o2 = super.cropData(this.x2Data, e3, i3, s2);
            return o2.xData = t3.slice(o2.start, o2.end), o2;
          }
          findPointIndex(t3) {
            let e3;
            let {
              cropStart: i3,
              points: s2
            } = this, {
              id: o2
            } = t3;
            if (o2) {
              let t4 = f(s2, (t5) => t5.id === o2);
              e3 = t4 ? t4.index : void 0;
            }
            if (void 0 === e3) {
              let i4 = f(s2, (e4) => e4.x === t3.x && e4.x2 === t3.x2 && !e4.touched);
              e3 = i4 ? i4.index : void 0;
            }
            return this.cropped && m(e3) && m(i3) && e3 >= i3 && (e3 -= i3), e3;
          }
          alignDataLabel(t3) {
            let e3 = t3.plotX;
            t3.plotX = b(t3.dlBox && t3.dlBox.centerX, t3.plotX), t3.dataLabel && t3.shapeArgs?.width && t3.dataLabel.css({
              width: `${t3.shapeArgs.width}px`
            }), super.alignDataLabel.apply(this, arguments), t3.plotX = e3;
          }
          translatePoint(t3) {
            let e3 = this.xAxis, i3 = this.yAxis, s2 = this.columnMetrics, o2 = this.options, r2 = o2.minPointLength || 0, n2 = (t3.shapeArgs && t3.shapeArgs.width || 0) / 2, a2 = this.pointXOffset = s2.offset, l2 = b(t3.x2, t3.x + (t3.len || 0)), h2 = o2.borderRadius, d2 = this.chart.plotTop, g2 = this.chart.plotLeft, f2 = t3.plotX, v2 = e3.translate(l2, 0, 0, 0, 1), k2 = Math.abs(v2 - f2), S2 = this.chart.inverted, C = b(o2.borderWidth, 1), w, A, T = s2.offset, P = Math.round(s2.width), O, L, E, D;
            r2 && ((w = r2 - k2) < 0 && (w = 0), f2 -= w / 2, v2 += w / 2), f2 = Math.max(f2, -10), v2 = c(v2, -10, e3.len + 10), u(t3.options.pointWidth) && (T -= (Math.ceil(t3.options.pointWidth) - P) / 2, P = Math.ceil(t3.options.pointWidth)), o2.pointPlacement && m(t3.plotY) && i3.categories && (t3.plotY = i3.translate(t3.y, 0, 1, 0, 1, o2.pointPlacement));
            let B = p(Math.min(f2, v2), C), I = p(Math.max(f2, v2), C) - B, j = Math.min(M("object" == typeof h2 ? h2.radius : h2 || 0, P), Math.min(I, P) / 2), R = {
              x: B,
              y: p((t3.plotY || 0) + T, C),
              width: I,
              height: P,
              r: j
            };
            t3.shapeArgs = R, S2 ? t3.tooltipPos[1] += a2 + n2 : t3.tooltipPos[0] -= n2 + a2 - R.width / 2, L = (O = R.x) + R.width, O < 0 || L > e3.len ? (O = c(O, 0, e3.len), E = (L = c(L, 0, e3.len)) - O, t3.dlBox = y(R, {
              x: O,
              width: L - O,
              centerX: E ? E / 2 : null
            })) : t3.dlBox = null;
            let G = t3.tooltipPos, z = S2 ? 1 : 0, N = S2 ? 0 : 1, W = this.columnMetrics ? this.columnMetrics.offset : -s2.width / 2;
            S2 ? G[z] += R.width / 2 : G[z] = c(G[z] + (e3.reversed ? -1 : 0) * R.width, e3.left - g2, e3.left + e3.len - g2 - 1), G[N] = c(G[N] + (S2 ? -1 : 1) * W, i3.top - d2, i3.top + i3.len - d2 - 1), (A = t3.partialFill) && (x(A) && (A = A.amount), m(A) || (A = 0), t3.partShapeArgs = y(R), D = Math.max(Math.round(k2 * A + t3.plotX - f2), 0), t3.clipRectArgs = {
              x: e3.reversed ? R.x + k2 - D : R.x,
              y: R.y,
              width: D,
              height: R.height
            });
          }
          translate() {
            for (let t3 of (super.translate.apply(this, arguments), this.points)) this.translatePoint(t3);
          }
          drawPoint(t3, e3) {
            let i3 = this.options, s2 = this.chart.renderer, o2 = t3.shapeType, r2 = t3.shapeArgs, n2 = t3.partShapeArgs, a2 = t3.clipRectArgs, h2 = t3.state, d2 = i3.states[h2 || "normal"] || {}, c2 = void 0 === h2 ? "attr" : e3, p2 = this.pointAttribs(t3, h2), u2 = b(this.chart.options.chart.animation, d2.animation), g2 = t3.graphic, f2 = t3.partialFill;
            if (t3.isNull || false === t3.visible) g2 && (t3.graphic = g2.destroy());
            else if (g2 ? g2.rect[e3](r2) : (t3.graphic = g2 = s2.g("point").addClass(t3.getClassName()).add(t3.group || this.group), g2.rect = s2[o2](y(r2)).addClass(t3.getClassName()).addClass("highcharts-partfill-original").add(g2)), n2 && (g2.partRect ? (g2.partRect[e3](y(n2)), g2.partialClipRect[e3](y(a2))) : (g2.partialClipRect = s2.clipRect(a2.x, a2.y, a2.width, a2.height), g2.partRect = s2[o2](n2).addClass("highcharts-partfill-overlay").add(g2).clip(g2.partialClipRect))), !this.chart.styledMode && (g2.rect[e3](p2, u2).shadow(i3.shadow), n2)) {
              x(f2) || (f2 = {}), x(i3.partialFill) && (f2 = y(i3.partialFill, f2));
              let e4 = f2.fill || l(p2.fill).brighten(-0.3).get() || l(t3.color || this.color).brighten(-0.3).get();
              p2.fill = e4, g2.partRect[c2](p2, u2).shadow(i3.shadow);
            }
          }
          drawPoints() {
            let t3 = this.getAnimationVerb();
            for (let e3 of this.points) this.drawPoint(e3, t3);
          }
          getAnimationVerb() {
            return this.chart.pointCount < (this.options.animationLimit || 250) ? "animate" : "attr";
          }
          isPointInside(t3) {
            let e3 = t3.shapeArgs, i3 = t3.plotX, s2 = t3.plotY;
            return e3 ? void 0 !== i3 && void 0 !== s2 && s2 >= 0 && s2 <= this.yAxis.len && (e3.x || 0) + (e3.width || 0) >= 0 && i3 <= this.xAxis.len : super.isPointInside.apply(this, arguments);
          }
        }
        return S.defaultOptions = y(h.defaultOptions, o), g(S.prototype, {
          pointClass: r,
          pointArrayMap: ["x2", "y"],
          getExtremesFromAll: true,
          parallelArrays: ["x", "x2", "y"],
          requireSorting: false,
          type: "xrange",
          animate: i2.series.prototype.animate,
          autoIncrement: a,
          buildKDTree: a
        }), i2.registerSeriesType("xrange", S), S;
      }), i(e, "masters/modules/xrange.src.js", [e["Core/Globals.js"], e["Series/XRange/XRangeSeries.js"]], function(t2, e2) {
        return e2.compose(t2.Axis), t2;
      }), i(e, "Series/Gantt/GanttPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          xrange: {
            prototype: {
              pointClass: i2
            }
          }
        } = t2.seriesTypes, {
          pick: s
        } = e2;
        class o extends i2 {
          static setGanttPointAliases(t3) {
            function e3(e4, i3) {
              void 0 !== i3 && (t3[e4] = i3);
            }
            e3("x", s(t3.start, t3.x)), e3("x2", s(t3.end, t3.x2)), e3("partialFill", s(t3.completed, t3.partialFill));
          }
          applyOptions(t3, e3) {
            let i3 = super.applyOptions(t3, e3);
            return o.setGanttPointAliases(i3), i3;
          }
          isValid() {
            return ("number" == typeof this.start || "number" == typeof this.x) && ("number" == typeof this.end || "number" == typeof this.x2 || this.milestone);
          }
        }
        return o;
      }), i(e, "Series/Gantt/GanttSeriesDefaults.js", [e["Core/Utilities.js"]], function(t2) {
        let {
          isNumber: e2
        } = t2;
        return {
          grouping: false,
          dataLabels: {
            enabled: true
          },
          tooltip: {
            headerFormat: '<span style="font-size: 0.8em">{series.name}</span><br/>',
            pointFormat: null,
            pointFormatter: function() {
              let t3 = this.series, i2 = t3.xAxis, s = t3.tooltipOptions.dateTimeLabelFormats, o = i2.options.startOfWeek, r = t3.tooltipOptions, n = this.options.milestone, a = r.xDateFormat, l = "<b>" + (this.name || this.yCategory) + "</b>";
              if (r.pointFormat) return this.tooltipFormatter(r.pointFormat);
              !a && e2(this.start) && (a = t3.chart.time.getDateFormat(i2.closestPointRange, this.start, o, s || {}));
              let h = t3.chart.time.dateFormat(a, this.start), d = t3.chart.time.dateFormat(a, this.end);
              return l += "<br/>", n ? l += h + "<br/>" : l += "Start: " + h + "<br/>End: " + d + "<br/>", l;
            }
          },
          connectors: {
            type: "simpleConnect",
            animation: {
              reversed: true
            },
            radius: 0,
            startMarker: {
              enabled: true,
              symbol: "arrow-filled",
              radius: 4,
              fill: "#fa0",
              align: "left"
            },
            endMarker: {
              enabled: false,
              align: "right"
            }
          }
        };
      }), i(e, "Core/Axis/BrokenAxis.js", [e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t2, e2) {
        var i2;
        let {
          addEvent: s,
          find: o,
          fireEvent: r,
          isArray: n,
          isNumber: a,
          pick: l
        } = e2;
        return function(e3) {
          function i3() {
            void 0 !== this.brokenAxis && this.brokenAxis.setBreaks(this.options.breaks, false);
          }
          function h() {
            this.brokenAxis?.hasBreaks && (this.options.ordinal = false);
          }
          function d() {
            let t3 = this.brokenAxis;
            if (t3?.hasBreaks) {
              let e4 = this.tickPositions, i4 = this.tickPositions.info, s2 = [];
              for (let i5 = 0; i5 < e4.length; i5++) t3.isInAnyBreak(e4[i5]) || s2.push(e4[i5]);
              this.tickPositions = s2, this.tickPositions.info = i4;
            }
          }
          function c() {
            this.brokenAxis || (this.brokenAxis = new m(this));
          }
          function p() {
            let {
              isDirty: t3,
              options: {
                connectNulls: e4
              },
              points: i4,
              xAxis: s2,
              yAxis: o2
            } = this;
            if (t3) {
              let t4 = i4.length;
              for (; t4--; ) {
                let r2 = i4[t4], n2 = !(null === r2.y && false === e4) && (s2?.brokenAxis?.isInAnyBreak(r2.x, true) || o2?.brokenAxis?.isInAnyBreak(r2.y, true));
                r2.visible = !n2 && false !== r2.options.visible;
              }
            }
          }
          function u() {
            this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, l(this.pointArrayMap, ["y"]));
          }
          function g(t3, e4) {
            let i4, s2, o2;
            let n2 = this, h2 = n2.points;
            if (t3?.brokenAxis?.hasBreaks) {
              let d2 = t3.brokenAxis;
              e4.forEach(function(e5) {
                i4 = d2?.breakArray || [], s2 = t3.isXAxis ? t3.min : l(n2.options.threshold, t3.min);
                let c2 = t3?.options?.breaks?.filter(function(t4) {
                  let e6 = true;
                  for (let s3 = 0; s3 < i4.length; s3++) {
                    let o3 = i4[s3];
                    if (o3.from === t4.from && o3.to === t4.to) {
                      e6 = false;
                      break;
                    }
                  }
                  return e6;
                });
                h2.forEach(function(n3) {
                  o2 = l(n3["stack" + e5.toUpperCase()], n3[e5]), i4.forEach(function(e6) {
                    if (a(s2) && a(o2)) {
                      let i5 = "";
                      s2 < e6.from && o2 > e6.to || s2 > e6.from && o2 < e6.from ? i5 = "pointBreak" : (s2 < e6.from && o2 > e6.from && o2 < e6.to || s2 > e6.from && o2 > e6.to && o2 < e6.from) && (i5 = "pointInBreak"), i5 && r(t3, i5, {
                        point: n3,
                        brk: e6
                      });
                    }
                  }), c2?.forEach(function(e6) {
                    r(t3, "pointOutsideOfBreak", {
                      point: n3,
                      brk: e6
                    });
                  });
                });
              });
            }
          }
          function f() {
            let e4 = this.currentDataGrouping, i4 = e4?.gapSize, s2 = this.points.slice(), o2 = this.yAxis, r2 = this.options.gapSize, n2 = s2.length - 1;
            if (r2 && n2 > 0) {
              let e5, a2;
              for ("value" !== this.options.gapUnit && (r2 *= this.basePointRange), i4 && i4 > r2 && i4 >= this.basePointRange && (r2 = i4); n2--; ) if (a2 && false !== a2.visible || (a2 = s2[n2 + 1]), e5 = s2[n2], false !== a2.visible && false !== e5.visible) {
                if (a2.x - e5.x > r2) {
                  let i5 = (e5.x + a2.x) / 2;
                  s2.splice(n2 + 1, 0, {
                    isNull: true,
                    x: i5
                  }), o2.stacking && this.options.stacking && ((o2.stacking.stacks[this.stackKey][i5] = new t2(o2, o2.options.stackLabels, false, i5, this.stack)).total = 0);
                }
                a2 = e5;
              }
            }
            return this.getGraphPath(s2);
          }
          e3.compose = function(t3, e4) {
            if (!t3.keepProps.includes("brokenAxis")) {
              t3.keepProps.push("brokenAxis"), s(t3, "init", c), s(t3, "afterInit", i3), s(t3, "afterSetTickPositions", d), s(t3, "afterSetOptions", h);
              let o2 = e4.prototype;
              o2.drawBreaks = g, o2.gappedPath = f, s(e4, "afterGeneratePoints", p), s(e4, "afterRender", u);
            }
            return t3;
          };
          class m {
            static isInBreak(t3, e4) {
              let i4 = t3.repeat || 1 / 0, s2 = t3.from, o2 = t3.to - t3.from, r2 = e4 >= s2 ? (e4 - s2) % i4 : i4 - (s2 - e4) % i4;
              return t3.inclusive ? r2 <= o2 : r2 < o2 && 0 !== r2;
            }
            static lin2Val(t3) {
              let e4 = this.brokenAxis, i4 = e4 && e4.breakArray;
              if (!i4 || !a(t3)) return t3;
              let s2 = t3, o2, r2;
              for (r2 = 0; r2 < i4.length && !((o2 = i4[r2]).from >= s2); r2++) o2.to < s2 ? s2 += o2.len : m.isInBreak(o2, s2) && (s2 += o2.len);
              return s2;
            }
            static val2Lin(t3) {
              let e4 = this.brokenAxis, i4 = e4 && e4.breakArray;
              if (!i4 || !a(t3)) return t3;
              let s2 = t3, o2, r2;
              for (r2 = 0; r2 < i4.length; r2++) if ((o2 = i4[r2]).to <= t3) s2 -= o2.len;
              else if (o2.from >= t3) break;
              else if (m.isInBreak(o2, t3)) {
                s2 -= t3 - o2.from;
                break;
              }
              return s2;
            }
            constructor(t3) {
              this.hasBreaks = false, this.axis = t3;
            }
            findBreakAt(t3, e4) {
              return o(e4, function(e5) {
                return e5.from < t3 && t3 < e5.to;
              });
            }
            isInAnyBreak(t3, e4) {
              let i4 = this.axis, s2 = i4.options.breaks || [], o2 = s2.length, r2, n2, h2;
              if (o2 && a(t3)) {
                for (; o2--; ) m.isInBreak(s2[o2], t3) && (r2 = true, n2 || (n2 = l(s2[o2].showPoints, !i4.isXAxis)));
                h2 = r2 && e4 ? r2 && !n2 : r2;
              }
              return h2;
            }
            setBreaks(t3, e4) {
              let i4 = this, s2 = i4.axis, o2 = n(t3) && !!t3.length && !!Object.keys(t3[0]).length;
              s2.isDirty = i4.hasBreaks !== o2, i4.hasBreaks = o2, t3 !== s2.options.breaks && (s2.options.breaks = s2.userOptions.breaks = t3), s2.forceRedraw = true, s2.series.forEach(function(t4) {
                t4.isDirty = true;
              }), o2 || s2.val2lin !== m.val2Lin || (delete s2.val2lin, delete s2.lin2val), o2 && (s2.userOptions.ordinal = false, s2.lin2val = m.lin2Val, s2.val2lin = m.val2Lin, s2.setExtremes = function(t4, e5, o3, r2, n2) {
                if (i4.hasBreaks) {
                  let s3;
                  let o4 = this.options.breaks || [];
                  for (; s3 = i4.findBreakAt(t4, o4); ) t4 = s3.to;
                  for (; s3 = i4.findBreakAt(e5, o4); ) e5 = s3.from;
                  e5 < t4 && (e5 = t4);
                }
                s2.constructor.prototype.setExtremes.call(this, t4, e5, o3, r2, n2);
              }, s2.setAxisTranslation = function() {
                if (s2.constructor.prototype.setAxisTranslation.call(this), i4.unitLength = void 0, i4.hasBreaks) {
                  let t4 = s2.options.breaks || [], e5 = [], o3 = [], n2 = l(s2.pointRangePadding, 0), h2 = 0, d2, c2, p2 = s2.userMin || s2.min, u2 = s2.userMax || s2.max, g2, f2;
                  t4.forEach(function(t5) {
                    c2 = t5.repeat || 1 / 0, a(p2) && a(u2) && (m.isInBreak(t5, p2) && (p2 += t5.to % c2 - p2 % c2), m.isInBreak(t5, u2) && (u2 -= u2 % c2 - t5.from % c2));
                  }), t4.forEach(function(t5) {
                    if (g2 = t5.from, c2 = t5.repeat || 1 / 0, a(p2) && a(u2)) {
                      for (; g2 - c2 > p2; ) g2 -= c2;
                      for (; g2 < p2; ) g2 += c2;
                      for (f2 = g2; f2 < u2; f2 += c2) e5.push({
                        value: f2,
                        move: "in"
                      }), e5.push({
                        value: f2 + t5.to - t5.from,
                        move: "out",
                        size: t5.breakSize
                      });
                    }
                  }), e5.sort(function(t5, e6) {
                    return t5.value === e6.value ? ("in" === t5.move ? 0 : 1) - ("in" === e6.move ? 0 : 1) : t5.value - e6.value;
                  }), d2 = 0, g2 = p2, e5.forEach(function(t5) {
                    1 === (d2 += "in" === t5.move ? 1 : -1) && "in" === t5.move && (g2 = t5.value), 0 === d2 && a(g2) && (o3.push({
                      from: g2,
                      to: t5.value,
                      len: t5.value - g2 - (t5.size || 0)
                    }), h2 += t5.value - g2 - (t5.size || 0));
                  }), i4.breakArray = o3, a(p2) && a(u2) && a(s2.min) && (i4.unitLength = u2 - p2 - h2 + n2, r(s2, "afterBreaks"), s2.staticScale ? s2.transA = s2.staticScale : i4.unitLength && (s2.transA *= (u2 - s2.min + n2) / i4.unitLength), n2 && (s2.minPixelPadding = s2.transA * (s2.minPointOffset || 0)), s2.min = p2, s2.max = u2);
                }
              }), l(e4, true) && s2.chart.redraw();
            }
          }
          e3.Additions = m;
        }(i2 || (i2 = {})), i2;
      }), i(e, "Core/Axis/GridAxis.js", [e["Core/Axis/Axis.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s, o;
        let {
          dateFormats: r
        } = e2, {
          addEvent: n,
          defined: a,
          erase: l,
          find: h,
          isArray: d,
          isNumber: c,
          merge: p,
          pick: u,
          timeUnits: g,
          wrap: f
        } = i2;
        function m(t3) {
          return i2.isObject(t3, true);
        }
        function x(t3, e3) {
          let i3 = {
            width: 0,
            height: 0
          };
          if (e3.forEach(function(e4) {
            let s2 = t3[e4], o2 = 0, r2 = 0, n2;
            m(s2) && (o2 = (n2 = m(s2.label) ? s2.label : {}).getBBox ? n2.getBBox().height : 0, n2.textStr && !c(n2.textPxLength) && (n2.textPxLength = n2.getBBox().width), r2 = c(n2.textPxLength) ? Math.round(n2.textPxLength) : 0, n2.textStr && (r2 = Math.round(n2.getBBox().width)), i3.height = Math.max(o2, i3.height), i3.width = Math.max(r2, i3.width));
          }), "treegrid" === this.options.type && this.treeGrid && this.treeGrid.mapOfPosToGridNode) {
            let t4 = this.treeGrid.mapOfPosToGridNode[-1].height || 0;
            i3.width += this.options.labels.indentation * (t4 - 1);
          }
          return i3;
        }
        function y(t3) {
          let {
            grid: e3
          } = this, i3 = 3 === this.side;
          if (i3 || t3.apply(this), !e3?.isColumn) {
            let t4 = e3?.columns || [];
            i3 && (t4 = t4.slice().reverse()), t4.forEach((t5) => {
              t5.getOffset();
            });
          }
          i3 && t3.apply(this);
        }
        function b(t3) {
          if (true === (this.options.grid || {}).enabled) {
            let {
              axisTitle: e3,
              height: i3,
              horiz: o2,
              left: r2,
              offset: n2,
              opposite: a2,
              options: l2,
              top: h2,
              width: d2
            } = this, c2 = this.tickSize(), p2 = e3 && e3.getBBox().width, g2 = l2.title.x, f2 = l2.title.y, m2 = u(l2.title.margin, o2 ? 5 : 10), x2 = e3 ? this.chart.renderer.fontMetrics(e3).f : 0, y2 = (o2 ? h2 + i3 : r2) + (o2 ? 1 : -1) * (a2 ? -1 : 1) * (c2 ? c2[0] / 2 : 0) + (this.side === s.bottom ? x2 : 0);
            t3.titlePosition.x = o2 ? r2 - (p2 || 0) / 2 - m2 + g2 : y2 + (a2 ? d2 : 0) + n2 + g2, t3.titlePosition.y = o2 ? y2 - (a2 ? i3 : 0) + (a2 ? x2 : -x2) / 2 + n2 + f2 : h2 - m2 + f2;
          }
        }
        function v() {
          let {
            chart: e3,
            options: {
              grid: i3 = {}
            },
            userOptions: s2
          } = this;
          if (i3.enabled && function(t3) {
            let e4 = t3.options;
            e4.labels.align = u(e4.labels.align, "center"), t3.categories || (e4.showLastLabel = false), t3.labelRotation = 0, e4.labels.rotation = 0, e4.minTickInterval = 1;
          }(this), i3.columns) {
            let o2 = this.grid.columns = [], r2 = this.grid.columnIndex = 0;
            for (; ++r2 < i3.columns.length; ) {
              let n2 = p(s2, i3.columns[r2], {
                isInternal: true,
                linkedTo: 0,
                scrollbar: {
                  enabled: false
                }
              }, {
                grid: {
                  columns: void 0
                }
              }), a2 = new t2(this.chart, n2, "yAxis");
              a2.grid.isColumn = true, a2.grid.columnIndex = r2, l(e3.axes, a2), l(e3[this.coll] || [], a2), o2.push(a2);
            }
          }
        }
        function M() {
          let {
            axisTitle: t3,
            grid: e3,
            options: i3
          } = this;
          if (true === (i3.grid || {}).enabled) {
            let o2 = this.min || 0, r2 = this.max || 0, n2 = this.ticks[this.tickPositions[0]];
            if (t3 && !this.chart.styledMode && n2?.slotWidth && !this.options.title.style.width && t3.css({
              width: `${n2.slotWidth}px`
            }), this.maxLabelDimensions = this.getMaxLabelDimensions(this.ticks, this.tickPositions), this.rightWall && this.rightWall.destroy(), this.grid && this.grid.isOuterAxis() && this.axisLine) {
              let t4 = i3.lineWidth;
              if (t4) {
                let e4 = this.getLinePath(t4), n3 = e4[0], a2 = e4[1], l2 = (this.tickSize("tick") || [1])[0] * (this.side === s.top || this.side === s.left ? -1 : 1);
                if ("M" === n3[0] && "L" === a2[0] && (this.horiz ? (n3[2] += l2, a2[2] += l2) : (n3[1] += l2, a2[1] += l2)), !this.horiz && this.chart.marginRight) {
                  let t5 = ["L", this.left, n3[2] || 0], e5 = [n3, t5], s2 = ["L", this.chart.chartWidth - this.chart.marginRight, this.toPixels(r2 + this.tickmarkOffset)], l3 = [["M", a2[1] || 0, this.toPixels(r2 + this.tickmarkOffset)], s2];
                  this.grid.upperBorder || o2 % 1 == 0 || (this.grid.upperBorder = this.grid.renderBorder(e5)), this.grid.upperBorder && (this.grid.upperBorder.attr({
                    stroke: i3.lineColor,
                    "stroke-width": i3.lineWidth
                  }), this.grid.upperBorder.animate({
                    d: e5
                  })), this.grid.lowerBorder || r2 % 1 == 0 || (this.grid.lowerBorder = this.grid.renderBorder(l3)), this.grid.lowerBorder && (this.grid.lowerBorder.attr({
                    stroke: i3.lineColor,
                    "stroke-width": i3.lineWidth
                  }), this.grid.lowerBorder.animate({
                    d: l3
                  }));
                }
                this.grid.axisLineExtra ? (this.grid.axisLineExtra.attr({
                  stroke: i3.lineColor,
                  "stroke-width": i3.lineWidth
                }), this.grid.axisLineExtra.animate({
                  d: e4
                })) : this.grid.axisLineExtra = this.grid.renderBorder(e4), this.axisLine[this.showAxis ? "show" : "hide"]();
              }
            }
            if ((e3 && e3.columns || []).forEach((t4) => t4.render()), !this.horiz && this.chart.hasRendered && (this.scrollbar || this.linkedParent && this.linkedParent.scrollbar) && this.tickPositions.length) {
              let t4, e4;
              let i4 = this.tickmarkOffset, s2 = this.tickPositions[this.tickPositions.length - 1], n3 = this.tickPositions[0];
              for (; (t4 = this.hiddenLabels.pop()) && t4.element; ) t4.show();
              for (; (e4 = this.hiddenMarks.pop()) && e4.element; ) e4.show();
              (t4 = this.ticks[n3].label) && (o2 - n3 > i4 ? this.hiddenLabels.push(t4.hide()) : t4.show()), (t4 = this.ticks[s2].label) && (s2 - r2 > i4 ? this.hiddenLabels.push(t4.hide()) : t4.show());
              let a2 = this.ticks[s2].mark;
              a2 && s2 - r2 < i4 && s2 - r2 > 0 && this.ticks[s2].isLast && this.hiddenMarks.push(a2.hide());
            }
          }
        }
        function k() {
          let t3 = this.tickPositions && this.tickPositions.info, e3 = this.options, i3 = e3.grid || {}, s2 = this.userOptions.labels || {};
          i3.enabled && (this.horiz ? (this.series.forEach((t4) => {
            t4.options.pointRange = 0;
          }), t3 && e3.dateTimeLabelFormats && e3.labels && !a(s2.align) && (false === e3.dateTimeLabelFormats[t3.unitName].range || t3.count > 1) && (e3.labels.align = "left", a(s2.x) || (e3.labels.x = 3))) : "treegrid" !== this.options.type && this.grid && this.grid.columns && (this.minPointOffset = this.tickInterval));
        }
        function S(t3) {
          let e3;
          let i3 = this.options, s2 = t3.userOptions, o2 = i3 && m(i3.grid) ? i3.grid : {};
          true === o2.enabled && (e3 = p(true, {
            className: "highcharts-grid-axis " + (s2.className || ""),
            dateTimeLabelFormats: {
              hour: {
                list: ["%H:%M", "%H"]
              },
              day: {
                list: ["%A, %e. %B", "%a, %e. %b", "%E"]
              },
              week: {
                list: ["Week %W", "W%W"]
              },
              month: {
                list: ["%B", "%b", "%o"]
              }
            },
            grid: {
              borderWidth: 1
            },
            labels: {
              padding: 2,
              style: {
                fontSize: "0.9em"
              }
            },
            margin: 0,
            title: {
              text: null,
              reserveSpace: false,
              rotation: 0,
              style: {
                textOverflow: "ellipsis"
              }
            },
            units: [["millisecond", [1, 10, 100]], ["second", [1, 10]], ["minute", [1, 5, 15]], ["hour", [1, 6]], ["day", [1]], ["week", [1]], ["month", [1]], ["year", null]]
          }, s2), "xAxis" !== this.coll || (a(s2.linkedTo) && !a(s2.tickPixelInterval) && (e3.tickPixelInterval = 350), !(!a(s2.tickPixelInterval) && a(s2.linkedTo)) || a(s2.tickPositioner) || a(s2.tickInterval) || a(s2.units) || (e3.tickPositioner = function(t4, i4) {
            let s3 = this.linkedParent && this.linkedParent.tickPositions && this.linkedParent.tickPositions.info;
            if (s3) {
              let o3 = e3.units || [], r2, n2 = 1, a2 = "year";
              for (let t5 = 0; t5 < o3.length; t5++) {
                let e4 = o3[t5];
                if (e4 && e4[0] === s3.unitName) {
                  r2 = t5;
                  break;
                }
              }
              let l2 = c(r2) && o3[r2 + 1];
              if (l2) {
                a2 = l2[0] || "year";
                let t5 = l2[1];
                n2 = t5 && t5[0] || 1;
              } else "year" === s3.unitName && (n2 = 10 * s3.count);
              let h2 = g[a2];
              return this.tickInterval = h2 * n2, this.chart.time.getTimeTicks({
                unitRange: h2,
                count: n2,
                unitName: a2
              }, t4, i4, this.options.startOfWeek);
            }
          })), p(true, this.options, e3), this.horiz && (i3.minPadding = u(s2.minPadding, 0), i3.maxPadding = u(s2.maxPadding, 0)), c(i3.grid.borderWidth) && (i3.tickWidth = i3.lineWidth = o2.borderWidth));
        }
        function C(t3) {
          let e3 = t3.userOptions, i3 = e3 && e3.grid || {}, s2 = i3.columns;
          i3.enabled && s2 && p(true, this.options, s2[0]);
        }
        function w() {
          (this.grid.columns || []).forEach((t3) => t3.setScale());
        }
        function A(t3) {
          let {
            horiz: e3,
            maxLabelDimensions: i3,
            options: {
              grid: s2 = {}
            }
          } = this;
          if (s2.enabled && i3) {
            let o2 = 2 * this.options.labels.distance, r2 = e3 ? s2.cellHeight || o2 + i3.height : o2 + i3.width;
            d(t3.tickSize) ? t3.tickSize[0] = r2 : t3.tickSize = [r2, 0];
          }
        }
        function T() {
          this.axes.forEach((t3) => {
            (t3.grid && t3.grid.columns || []).forEach((t4) => {
              t4.setAxisSize(), t4.setAxisTranslation();
            });
          });
        }
        function P(t3) {
          let {
            grid: e3
          } = this;
          (e3.columns || []).forEach((e4) => e4.destroy(t3.keepEvents)), e3.columns = void 0;
        }
        function O(t3) {
          let e3 = t3.userOptions || {}, i3 = e3.grid || {};
          i3.enabled && a(i3.borderColor) && (e3.tickColor = e3.lineColor = i3.borderColor), this.grid || (this.grid = new I(this)), this.hiddenLabels = [], this.hiddenMarks = [];
        }
        function L(t3) {
          let e3 = this.label, i3 = this.axis, o2 = i3.reversed, r2 = i3.chart, n2 = i3.options.grid || {}, a2 = i3.options.labels, l2 = a2.align, h2 = s[i3.side], d2 = t3.tickmarkOffset, p2 = i3.tickPositions, u2 = this.pos - d2, g2 = c(p2[t3.index + 1]) ? p2[t3.index + 1] - d2 : (i3.max || 0) + d2, f2 = i3.tickSize("tick"), m2 = f2 ? f2[0] : 0, x2 = f2 ? f2[1] / 2 : 0;
          if (true === n2.enabled) {
            let s2, n3, d3, c2;
            if ("top" === h2 ? n3 = (s2 = i3.top + i3.offset) - m2 : "bottom" === h2 ? s2 = (n3 = r2.chartHeight - i3.bottom + i3.offset) + m2 : (s2 = i3.top + i3.len - (i3.translate(o2 ? g2 : u2) || 0), n3 = i3.top + i3.len - (i3.translate(o2 ? u2 : g2) || 0)), "right" === h2 ? c2 = (d3 = r2.chartWidth - i3.right + i3.offset) + m2 : "left" === h2 ? d3 = (c2 = i3.left + i3.offset) - m2 : (d3 = Math.round(i3.left + (i3.translate(o2 ? g2 : u2) || 0)) - x2, c2 = Math.min(Math.round(i3.left + (i3.translate(o2 ? u2 : g2) || 0)) - x2, i3.left + i3.len)), this.slotWidth = c2 - d3, t3.pos.x = "left" === l2 ? d3 : "right" === l2 ? c2 : d3 + (c2 - d3) / 2, t3.pos.y = n3 + (s2 - n3) / 2, e3) {
              let i4 = r2.renderer.fontMetrics(e3), s3 = e3.getBBox().height;
              if (a2.useHTML) t3.pos.y += i4.b + -(s3 / 2);
              else {
                let e4 = Math.round(s3 / i4.h);
                t3.pos.y += (i4.b - (i4.h - i4.f)) / 2 + -((e4 - 1) * i4.h / 2);
              }
            }
            t3.pos.x += i3.horiz && a2.x || 0;
          }
        }
        function E(t3) {
          let {
            axis: i3,
            value: s2
          } = t3;
          if (i3.options.grid && i3.options.grid.enabled) {
            let o2;
            let r2 = i3.tickPositions, n2 = (i3.linkedParent || i3).series[0], a2 = s2 === r2[0], l2 = s2 === r2[r2.length - 1], d2 = n2 && h(n2.options.data, function(t4) {
              return t4[i3.isXAxis ? "x" : "y"] === s2;
            });
            d2 && n2.is("gantt") && (o2 = p(d2), e2.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(o2)), t3.isFirst = a2, t3.isLast = l2, t3.point = o2;
          }
        }
        function D() {
          let t3 = this.options, e3 = t3.grid || {}, i3 = this.categories, s2 = this.tickPositions, o2 = s2[0], r2 = s2[1], n2 = s2[s2.length - 1], a2 = s2[s2.length - 2], l2 = this.linkedParent && this.linkedParent.min, h2 = this.linkedParent && this.linkedParent.max, d2 = l2 || this.min, p2 = h2 || this.max, u2 = this.tickInterval, g2 = c(d2) && d2 >= o2 + u2 && d2 < r2, f2 = c(d2) && o2 < d2 && o2 + u2 > d2, m2 = c(p2) && n2 > p2 && n2 - u2 < p2, x2 = c(p2) && p2 <= n2 - u2 && p2 > a2;
          true === e3.enabled && !i3 && (this.isXAxis || this.isLinked) && ((f2 || g2) && !t3.startOnTick && (s2[0] = d2), (m2 || x2) && !t3.endOnTick && (s2[s2.length - 1] = p2));
        }
        function B(t3) {
          var e3;
          let {
            options: {
              grid: i3 = {}
            }
          } = this;
          return true === i3.enabled && this.categories ? this.tickInterval : t3.apply(this, (e3 = arguments, Array.prototype.slice.call(e3, 1)));
        }
        (o = s || (s = {}))[o.top = 0] = "top", o[o.right = 1] = "right", o[o.bottom = 2] = "bottom", o[o.left = 3] = "left";
        class I {
          constructor(t3) {
            this.axis = t3;
          }
          isOuterAxis() {
            let t3 = this.axis, e3 = t3.chart, i3 = t3.grid.columnIndex, s2 = t3.linkedParent?.grid.columns || t3.grid.columns || [], o2 = i3 ? t3.linkedParent : t3, r2 = -1, n2 = 0;
            return 3 === t3.side && !e3.inverted && s2.length ? !t3.linkedParent : ((e3[t3.coll] || []).forEach((e4, i4) => {
              e4.side !== t3.side || e4.options.isInternal || (n2 = i4, e4 !== o2 || (r2 = i4));
            }), n2 === r2 && (!c(i3) || s2.length === i3));
          }
          renderBorder(t3) {
            let e3 = this.axis, i3 = e3.chart.renderer, s2 = e3.options, o2 = i3.path(t3).addClass("highcharts-axis-line").add(e3.axisGroup);
            return i3.styledMode || o2.attr({
              stroke: s2.lineColor,
              "stroke-width": s2.lineWidth,
              zIndex: 7
            }), o2;
          }
        }
        return r.E = function(t3) {
          return this.dateFormat("%a", t3, true).charAt(0);
        }, r.W = function(t3) {
          let e3 = this, i3 = new this.Date(t3);
          ["Hours", "Milliseconds", "Minutes", "Seconds"].forEach(function(t4) {
            e3.set(t4, i3, 0);
          });
          let s2 = (this.get("Day", i3) + 6) % 7, o2 = new this.Date(i3.valueOf());
          this.set("Date", o2, this.get("Date", i3) - s2 + 3);
          let r2 = new this.Date(this.get("FullYear", o2), 0, 1);
          return 4 !== this.get("Day", r2) && (this.set("Month", i3, 0), this.set("Date", i3, 1 + (11 - this.get("Day", r2)) % 7)), (1 + Math.floor((o2.valueOf() - r2.valueOf()) / 6048e5)).toString();
        }, {
          compose: function(t3, e3, i3) {
            return t3.keepProps.includes("grid") || (t3.keepProps.push("grid"), t3.prototype.getMaxLabelDimensions = x, f(t3.prototype, "unsquish", B), f(t3.prototype, "getOffset", y), n(t3, "init", O), n(t3, "afterGetTitlePosition", b), n(t3, "afterInit", v), n(t3, "afterRender", M), n(t3, "afterSetAxisTranslation", k), n(t3, "afterSetOptions", S), n(t3, "afterSetOptions", C), n(t3, "afterSetScale", w), n(t3, "afterTickSize", A), n(t3, "trimTicks", D), n(t3, "destroy", P), n(e3, "afterSetChartSize", T), n(i3, "afterGetLabelPosition", L), n(i3, "labelFormat", E)), t3;
          }
        };
      }), i(e, "Gantt/Tree.js", [e["Core/Utilities.js"]], function(t2) {
        let {
          extend: e2,
          isNumber: i2,
          pick: s
        } = t2;
        function o(t3, r, n, a, l, h) {
          let d = h && h.after, c = h && h.before, p = {
            data: a,
            depth: n - 1,
            id: t3,
            level: n,
            parent: r || ""
          }, u = 0, g = 0, f, m;
          "function" == typeof c && c(p, h);
          let x = (l[t3] || []).map((e3) => {
            let s2 = o(e3.id, t3, n + 1, e3, l, h), r2 = e3.start || NaN, a2 = true === e3.milestone ? r2 : e3.end || NaN;
            return f = !i2(f) || r2 < f ? r2 : f, m = !i2(m) || a2 > m ? a2 : m, u = u + 1 + s2.descendants, g = Math.max(s2.height + 1, g), s2;
          });
          return a && (a.start = s(a.start, f), a.end = s(a.end, m)), e2(p, {
            children: x,
            descendants: u,
            height: g
          }), "function" == typeof d && d(p, h), p;
        }
        return {
          getNode: o,
          getTree: function(t3, e3) {
            return o("", null, 1, null, function(t4) {
              let e4 = [], i3 = t4.reduce((t5, i4) => {
                let {
                  parent: s2 = "",
                  id: o2
                } = i4;
                return void 0 === t5[s2] && (t5[s2] = []), t5[s2].push(i4), o2 && e4.push(o2), t5;
              }, {});
              return Object.keys(i3).forEach((t5) => {
                if ("" !== t5 && -1 === e4.indexOf(t5)) {
                  let e5 = i3[t5].map(function(t6) {
                    let e6 = __objRest(t6, []);
                    return e6;
                  });
                  i3[""].push(...e5), delete i3[t5];
                }
              }), i3;
            }(t3), e3);
          }
        };
      }), i(e, "Core/Axis/TreeGrid/TreeGridTick.js", [e["Core/Utilities.js"]], function(t2) {
        let {
          addEvent: e2,
          removeEvent: i2,
          isObject: s,
          isNumber: o,
          pick: r,
          wrap: n
        } = t2;
        function a() {
          this.treeGrid || (this.treeGrid = new d(this));
        }
        function l(t3, e3, i3, n2, a2, l2, h2, d2, c) {
          let p, u, g;
          let f = r(this.options && this.options.labels, l2), m = this.pos, x = this.axis, y = "treegrid" === x.options.type, b = t3.apply(this, [e3, i3, n2, a2, f, h2, d2, c]);
          if (y) {
            let {
              width: t4 = 0,
              padding: e4 = x.linkedParent ? 0 : 5
            } = f && s(f.symbol, true) ? f.symbol : {}, i4 = f && o(f.indentation) ? f.indentation : 0;
            g = (u = (p = x.treeGrid.mapOfPosToGridNode) && p[m]) && u.depth || 1, b.x += t4 + 2 * e4 + (g - 1) * i4;
          }
          return b;
        }
        function h(t3) {
          let n2, a2, l2;
          let {
            pos: h2,
            axis: d2,
            label: c,
            treeGrid: p,
            options: u
          } = this, g = p?.labelIcon, f = c?.element, {
            treeGrid: m,
            options: x,
            chart: y,
            tickPositions: b
          } = d2, v = m.mapOfPosToGridNode, M = r(u?.labels, x?.labels), k = M && s(M.symbol, true) ? M.symbol : {}, S = v && v[h2], {
            descendants: C,
            depth: w
          } = S || {}, A = S && C && C > 0, T = "treegrid" === x.type && f, P = b.indexOf(h2) > -1, O = "highcharts-treegrid-node-", L = O + "level-", E = y.styledMode;
          T && S && c.removeClass(RegExp(L + ".*")).addClass(L + w), t3.apply(this, Array.prototype.slice.call(arguments, 1)), T && A ? (n2 = m.isCollapsed(S), function(t4, e3) {
            let i3 = t4.treeGrid, s2 = !i3.labelIcon, n3 = e3.renderer, a3 = e3.xy, l3 = e3.options, h3 = l3.width || 0, d3 = l3.height || 0, c2 = l3.padding ?? t4.axis.linkedParent ? 0 : 5, p2 = {
              x: a3.x - h3 / 2 - c2,
              y: a3.y - d3 / 2
            }, u2 = e3.collapsed ? 90 : 180, g2 = e3.show && o(p2.y), f2 = i3.labelIcon;
            f2 || (i3.labelIcon = f2 = n3.path(n3.symbols[l3.type](l3.x || 0, l3.y || 0, h3, d3)).addClass("highcharts-label-icon").add(e3.group)), f2[g2 ? "show" : "hide"](), n3.styledMode || f2.attr({
              cursor: "pointer",
              fill: r(e3.color, "#666666"),
              "stroke-width": 1,
              stroke: l3.lineColor,
              strokeWidth: l3.lineWidth || 0
            }), f2[s2 ? "attr" : "animate"]({
              translateX: p2.x,
              translateY: p2.y,
              rotation: u2
            });
          }(this, {
            color: !E && c.styles.color || "",
            collapsed: n2,
            group: c.parentGroup,
            options: k,
            renderer: c.renderer,
            show: P,
            xy: c.xy
          }), a2 = O + (n2 ? "collapsed" : "expanded"), l2 = O + (n2 ? "expanded" : "collapsed"), c.addClass(a2).removeClass(l2), E || c.css({
            cursor: "pointer"
          }), [c, g].forEach((t4) => {
            t4 && !t4.attachedTreeGridEvents && (e2(t4.element, "mouseover", function() {
              c.addClass("highcharts-treegrid-node-active"), c.renderer.styledMode || c.css({
                textDecoration: "underline"
              });
            }), e2(t4.element, "mouseout", function() {
              !function(t5, e3) {
                let i3 = s(e3.style) ? e3.style : {};
                t5.removeClass("highcharts-treegrid-node-active"), t5.renderer.styledMode || t5.css({
                  textDecoration: i3.textDecoration || "none"
                });
              }(c, M);
            }), e2(t4.element, "click", function() {
              p.toggleCollapse();
            }), t4.attachedTreeGridEvents = true);
          })) : g && (i2(f), c?.css({
            cursor: "default"
          }), g.destroy());
        }
        class d {
          static compose(t3) {
            let i3 = t3.prototype;
            i3.toggleCollapse || (e2(t3, "init", a), n(i3, "getLabelPosition", l), n(i3, "renderLabel", h), i3.collapse = function(t4) {
              this.treeGrid.collapse(t4);
            }, i3.expand = function(t4) {
              this.treeGrid.expand(t4);
            }, i3.toggleCollapse = function(t4) {
              this.treeGrid.toggleCollapse(t4);
            });
          }
          constructor(t3) {
            this.tick = t3;
          }
          collapse(t3) {
            let e3 = this.tick, i3 = e3.axis, s2 = i3.brokenAxis;
            if (s2 && i3.treeGrid.mapOfPosToGridNode) {
              let o2 = e3.pos, n2 = i3.treeGrid.mapOfPosToGridNode[o2], a2 = i3.treeGrid.collapse(n2);
              s2.setBreaks(a2, r(t3, true));
            }
          }
          destroy() {
            this.labelIcon && this.labelIcon.destroy();
          }
          expand(t3) {
            let {
              pos: e3,
              axis: i3
            } = this.tick, {
              treeGrid: s2,
              brokenAxis: o2
            } = i3, n2 = s2.mapOfPosToGridNode;
            if (o2 && n2) {
              let i4 = n2[e3], a2 = s2.expand(i4);
              o2.setBreaks(a2, r(t3, true));
            }
          }
          toggleCollapse(t3) {
            let e3 = this.tick, i3 = e3.axis, s2 = i3.brokenAxis;
            if (s2 && i3.treeGrid.mapOfPosToGridNode) {
              let o2 = e3.pos, n2 = i3.treeGrid.mapOfPosToGridNode[o2], a2 = i3.treeGrid.toggleCollapse(n2);
              s2.setBreaks(a2, r(t3, true));
            }
          }
        }
        return d;
      }), i(e, "Series/TreeUtilities.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let {
          extend: i2,
          isArray: s,
          isNumber: o,
          isObject: r,
          merge: n,
          pick: a,
          relativeLength: l
        } = e2;
        return {
          getColor: function(e3, i3) {
            let s2, o2, r2, n2, l2, h;
            let d = i3.index, c = i3.mapOptionsToLevel, p = i3.parentColor, u = i3.parentColorIndex, g = i3.series, f = i3.colors, m = i3.siblings, x = g.points, y = g.chart.options.chart;
            return e3 && (s2 = x[e3.i], o2 = c[e3.level] || {}, s2 && o2.colorByPoint && (n2 = s2.index % (f ? f.length : y.colorCount), r2 = f && f[n2]), g.chart.styledMode || (l2 = a(s2 && s2.options.color, o2 && o2.color, r2, p && ((e4) => {
              let i4 = o2 && o2.colorVariation;
              return i4 && "brightness" === i4.key && d && m ? t2.parse(e4).brighten(i4.to * (d / m)).get() : e4;
            })(p), g.color)), h = a(s2 && s2.options.colorIndex, o2 && o2.colorIndex, n2, u, i3.colorIndex)), {
              color: l2,
              colorIndex: h
            };
          },
          getLevelOptions: function(t3) {
            let e3, i3, l2, h, d, c;
            let p = {};
            if (r(t3)) for (h = o(t3.from) ? t3.from : 1, c = t3.levels, i3 = {}, e3 = r(t3.defaults) ? t3.defaults : {}, s(c) && (i3 = c.reduce((t4, i4) => {
              let s2, l3, d2;
              return r(i4) && o(i4.level) && (l3 = a((d2 = n({}, i4)).levelIsConstant, e3.levelIsConstant), delete d2.levelIsConstant, delete d2.level, r(t4[s2 = i4.level + (l3 ? 0 : h - 1)]) ? n(true, t4[s2], d2) : t4[s2] = d2), t4;
            }, {})), d = o(t3.to) ? t3.to : 1, l2 = 0; l2 <= d; l2++) p[l2] = n({}, e3, r(i3[l2]) ? i3[l2] : {});
            return p;
          },
          getNodeWidth: function(t3, e3) {
            let {
              chart: i3,
              options: s2
            } = t3, {
              nodeDistance: o2 = 0,
              nodeWidth: r2 = 0
            } = s2, {
              plotSizeX: n2 = 1
            } = i3;
            if ("auto" === r2) {
              if ("string" == typeof o2 && /%$/.test(o2)) return n2 / (e3 + parseFloat(o2) / 100 * (e3 - 1));
              let t4 = Number(o2);
              return (n2 + t4) / (e3 || 1) - t4;
            }
            return l(r2, n2);
          },
          setTreeValues: function t3(e3, s2) {
            let o2 = s2.before, r2 = s2.idRoot, n2 = s2.mapIdToNode[r2], l2 = false !== s2.levelIsConstant, h = s2.points[e3.i], d = h && h.options || {}, c = [], p = 0;
            e3.levelDynamic = e3.level - (l2 ? 0 : n2.level), e3.name = a(h && h.name, ""), e3.visible = r2 === e3.id || true === s2.visible, "function" == typeof o2 && (e3 = o2(e3, s2)), e3.children.forEach((o3, r3) => {
              let n3 = i2({}, s2);
              i2(n3, {
                index: r3,
                siblings: e3.children.length,
                visible: e3.visible
              }), o3 = t3(o3, n3), c.push(o3), o3.visible && (p += o3.val);
            });
            let u = a(d.value, p);
            return e3.visible = u >= 0 && (p > 0 || e3.visible), e3.children = c, e3.childrenTotal = p, e3.isLeaf = e3.visible && !p, e3.val = u, e3;
          },
          updateRootId: function(t3) {
            let e3, i3;
            return r(t3) && (i3 = r(t3.options) ? t3.options : {}, e3 = a(t3.rootNode, i3.rootId, ""), r(t3.userOptions) && (t3.userOptions.rootId = e3), t3.rootNode = e3), e3;
          }
        };
      }), i(e, "Core/Axis/TreeGrid/TreeGridAxis.js", [e["Core/Axis/BrokenAxis.js"], e["Core/Axis/GridAxis.js"], e["Gantt/Tree.js"], e["Core/Axis/TreeGrid/TreeGridTick.js"], e["Series/TreeUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let n;
        let {
          getLevelOptions: a
        } = o, {
          addEvent: l,
          find: h,
          fireEvent: d,
          isArray: c,
          isObject: p,
          isString: u,
          merge: g,
          pick: f,
          removeEvent: m,
          wrap: x
        } = r;
        function y(t3, e3) {
          let i3 = t3.collapseEnd || 0, s2 = t3.collapseStart || 0;
          return i3 >= e3 && (s2 -= 0.5), {
            from: s2,
            to: i3,
            showPoints: false
          };
        }
        function b(t3, e3, s2) {
          let o2 = [], r2 = [], n2 = {}, a2 = "boolean" == typeof e3 && e3, l2 = {}, d2 = -1, c2 = i2.getTree(t3, {
            after: function(t4) {
              let e4 = l2[t4.pos], i3 = 0, s3 = 0;
              e4.children.forEach(function(t5) {
                s3 += (t5.descendants || 0) + 1, i3 = Math.max((t5.height || 0) + 1, i3);
              }), e4.descendants = s3, e4.height = i3, e4.collapsed && r2.push(e4);
            },
            before: function(t4) {
              let e4, i3;
              let s3 = p(t4.data, true) ? t4.data : {}, r3 = u(s3.name) ? s3.name : "", c3 = n2[t4.parent], g2 = p(c3, true) ? l2[c3.pos] : null;
              a2 && p(g2, true) && (e4 = h(g2.children, function(t5) {
                return t5.name === r3;
              })) ? (i3 = e4.pos, e4.nodes.push(t4)) : i3 = d2++, !l2[i3] && (l2[i3] = e4 = {
                depth: g2 ? g2.depth + 1 : 0,
                name: r3,
                id: s3.id,
                nodes: [t4],
                children: [],
                pos: i3
              }, -1 !== i3 && o2.push(r3), p(g2, true) && g2.children.push(e4)), u(t4.id) && (n2[t4.id] = t4), e4 && true === s3.collapsed && (e4.collapsed = true), t4.pos = i3;
            }
          });
          return {
            categories: o2,
            mapOfIdToNode: n2,
            mapOfPosToGridNode: l2 = function(t4, e4) {
              let i3 = function(t5, s3, o3) {
                let r3 = t5.nodes, n3 = s3 + (-1 === s3 ? 0 : e4 - 1), a3 = (n3 - s3) / 2, l3 = s3 + a3;
                return r3.forEach(function(t6) {
                  let e5 = t6.data;
                  p(e5, true) && (e5.y = s3 + (e5.seriesIndex || 0), delete e5.seriesIndex), t6.pos = l3;
                }), o3[l3] = t5, t5.pos = l3, t5.tickmarkOffset = a3 + 0.5, t5.collapseStart = n3 + 0.5, t5.children.forEach(function(t6) {
                  i3(t6, n3 + 1, o3), n3 = (t6.collapseEnd || 0) - 0.5;
                }), t5.collapseEnd = n3 + 0.5, o3;
              };
              return i3(t4["-1"], -1, {});
            }(l2, s2),
            collapsedNodes: r2,
            tree: c2
          };
        }
        function v(t3) {
          t3.target.axes.filter(function(t4) {
            return "treegrid" === t4.options.type;
          }).forEach(function(e3) {
            let i3 = e3.options || {}, s2 = i3.labels, o2 = i3.uniqueNames, r2 = i3.max, n2 = !e3.treeGrid.mapOfPosToGridNode || e3.series.some(function(t4) {
              return !t4.hasRendered || t4.isDirtyData || t4.isDirty;
            }), l2 = 0, h2, d2;
            if (n2) {
              if (h2 = e3.series.reduce(function(t4, e4) {
                return e4.visible && ((e4.options.data || []).forEach(function(i4) {
                  e4.options.keys && e4.options.keys.length && (i4 = e4.pointClass.prototype.optionsToObject.call({
                    series: e4
                  }, i4), e4.pointClass.setGanttPointAliases(i4)), p(i4, true) && (i4.seriesIndex = l2, t4.push(i4));
                }), true === o2 && l2++), t4;
              }, []), r2 && h2.length < r2) for (let t4 = h2.length; t4 <= r2; t4++) h2.push({
                name: t4 + "​"
              });
              d2 = b(h2, o2 || false, true === o2 ? l2 : 1), e3.categories = d2.categories, e3.treeGrid.mapOfPosToGridNode = d2.mapOfPosToGridNode, e3.hasNames = true, e3.treeGrid.tree = d2.tree, e3.series.forEach(function(t4) {
                let e4 = (t4.options.data || []).map(function(e5) {
                  return c(e5) && t4.options.keys && t4.options.keys.length && h2.forEach(function(t5) {
                    e5.indexOf(t5.x) >= 0 && e5.indexOf(t5.x2) >= 0 && (e5 = t5);
                  }), p(e5, true) ? g(e5) : e5;
                });
                t4.visible && t4.setData(e4, false);
              }), e3.treeGrid.mapOptionsToLevel = a({
                defaults: s2,
                from: 1,
                levels: s2 && s2.levels,
                to: e3.treeGrid.tree && e3.treeGrid.tree.height
              }), "beforeRender" === t3.type && (e3.treeGrid.collapsedNodes = d2.collapsedNodes);
            }
          });
        }
        function M(t3, e3) {
          let i3 = this.treeGrid.mapOptionsToLevel || {}, s2 = "treegrid" === this.options.type, o2 = this.ticks, r2 = o2[e3], a2, l2, h2;
          s2 && this.treeGrid.mapOfPosToGridNode ? ((a2 = i3[(h2 = this.treeGrid.mapOfPosToGridNode[e3]).depth]) && (l2 = {
            labels: a2
          }), !r2 && n ? o2[e3] = r2 = new n(this, e3, void 0, void 0, {
            category: h2.name,
            tickmarkOffset: h2.tickmarkOffset,
            options: l2
          }) : (r2.parameters.category = h2.name, r2.options = l2, r2.addLabel())) : t3.apply(this, Array.prototype.slice.call(arguments, 1));
        }
        function k(t3, e3, i3, s2) {
          let o2 = this, r2 = "treegrid" === i3.type;
          o2.treeGrid || (o2.treeGrid = new w(o2)), r2 && (l(e3, "beforeRender", v), l(e3, "beforeRedraw", v), l(e3, "addSeries", function(t4) {
            if (t4.options.data) {
              let e4 = b(t4.options.data, i3.uniqueNames || false, 1);
              o2.treeGrid.collapsedNodes = (o2.treeGrid.collapsedNodes || []).concat(e4.collapsedNodes);
            }
          }), l(o2, "foundExtremes", function() {
            o2.treeGrid.collapsedNodes && o2.treeGrid.collapsedNodes.forEach(function(t4) {
              let e4 = o2.treeGrid.collapse(t4);
              o2.brokenAxis && (o2.brokenAxis.setBreaks(e4, false), o2.treeGrid.collapsedNodes && (o2.treeGrid.collapsedNodes = o2.treeGrid.collapsedNodes.filter((e5) => t4.collapseStart !== e5.collapseStart || t4.collapseEnd !== e5.collapseEnd)));
            });
          }), l(o2, "afterBreaks", function() {
            "yAxis" === o2.coll && !o2.staticScale && o2.chart.options.chart.height && (o2.isDirty = true);
          }), i3 = g({
            grid: {
              enabled: true
            },
            labels: {
              align: "left",
              levels: [{
                level: void 0
              }, {
                level: 1,
                style: {
                  fontWeight: "bold"
                }
              }],
              symbol: {
                type: "triangle",
                x: -5,
                y: -5,
                height: 10,
                width: 10
              }
            },
            uniqueNames: false
          }, i3, {
            reversed: true
          })), t3.apply(o2, [e3, i3, s2]), r2 && (o2.hasNames = true, o2.options.showLastLabel = true);
        }
        function S(t3) {
          let e3 = this.options, i3 = "number" == typeof e3.linkedTo ? this.chart[this.coll]?.[e3.linkedTo] : void 0;
          if ("treegrid" === e3.type) {
            if (this.min = f(this.userMin, e3.min, this.dataMin), this.max = f(this.userMax, e3.max, this.dataMax), d(this, "foundExtremes"), this.setAxisTranslation(), this.tickInterval = 1, this.tickmarkOffset = 0.5, this.tickPositions = this.treeGrid.mapOfPosToGridNode ? this.treeGrid.getTickPositions() : [], i3) {
              let t4 = i3.getExtremes();
              this.min = f(t4.min, t4.dataMin), this.max = f(t4.max, t4.dataMax), this.tickPositions = i3.tickPositions;
            }
            this.linkedParent = i3;
          } else t3.apply(this, Array.prototype.slice.call(arguments, 1));
        }
        function C(t3) {
          let e3 = this;
          "treegrid" === e3.options.type && e3.visible && e3.tickPositions.forEach(function(t4) {
            let i3 = e3.ticks[t4];
            i3.label && i3.label.attachedTreeGridEvents && (m(i3.label.element), i3.label.attachedTreeGridEvents = false);
          }), t3.apply(e3, Array.prototype.slice.call(arguments, 1));
        }
        class w {
          static compose(o2, r2, a2, l2) {
            if (!o2.keepProps.includes("treeGrid")) {
              let t3 = o2.prototype;
              o2.keepProps.push("treeGrid"), x(t3, "generateTick", M), x(t3, "init", k), x(t3, "setTickInterval", S), x(t3, "redraw", C), t3.utils = {
                getNode: i2.getNode
              }, n || (n = l2);
            }
            return e2.compose(o2, r2, l2), t2.compose(o2, a2), s.compose(l2), o2;
          }
          constructor(t3) {
            this.axis = t3;
          }
          setCollapsedStatus(t3) {
            let e3 = this.axis, i3 = e3.chart;
            e3.series.forEach(function(e4) {
              let s2 = e4.options.data;
              if (t3.id && s2) {
                let o2 = i3.get(t3.id), r2 = s2[e4.data.indexOf(o2)];
                o2 && r2 && (o2.collapsed = t3.collapsed, r2.collapsed = t3.collapsed);
              }
            });
          }
          collapse(t3) {
            let e3 = this.axis, i3 = e3.options.breaks || [], s2 = y(t3, e3.max);
            return i3.push(s2), t3.collapsed = true, e3.treeGrid.setCollapsedStatus(t3), i3;
          }
          expand(t3) {
            let e3 = this.axis, i3 = e3.options.breaks || [], s2 = y(t3, e3.max);
            return t3.collapsed = false, e3.treeGrid.setCollapsedStatus(t3), i3.reduce(function(t4, e4) {
              return (e4.to !== s2.to || e4.from !== s2.from) && t4.push(e4), t4;
            }, []);
          }
          getTickPositions() {
            let t3 = this.axis, e3 = Math.floor(t3.min / t3.tickInterval) * t3.tickInterval, i3 = Math.ceil(t3.max / t3.tickInterval) * t3.tickInterval;
            return Object.keys(t3.treeGrid.mapOfPosToGridNode || {}).reduce(function(s2, o2) {
              let r2 = +o2;
              return r2 >= e3 && r2 <= i3 && !(t3.brokenAxis && t3.brokenAxis.isInAnyBreak(r2)) && s2.push(r2), s2;
            }, []);
          }
          isCollapsed(t3) {
            let e3 = this.axis, i3 = e3.options.breaks || [], s2 = y(t3, e3.max);
            return i3.some(function(t4) {
              return t4.from === s2.from && t4.to === s2.to;
            });
          }
          toggleCollapse(t3) {
            return this.isCollapsed(t3) ? this.expand(t3) : this.collapse(t3);
          }
        }
        return w;
      }), i(e, "Series/Gantt/GanttSeries.js", [e["Series/Gantt/GanttPoint.js"], e["Series/Gantt/GanttSeriesDefaults.js"], e["Gantt/Pathfinder.js"], e["Core/Series/SeriesRegistry.js"], e["Extensions/StaticScale.js"], e["Core/Axis/TreeGrid/TreeGridAxis.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n) {
        let {
          series: a,
          seriesTypes: {
            xrange: l
          }
        } = s, {
          extend: h,
          isNumber: d,
          merge: c
        } = n;
        class p extends l {
          static compose(t3, e3, s2, n2) {
            l.compose(t3), e3 && (o.compose(t3, e3), s2) && (i2.compose(e3, s2.prototype.pointClass), n2 && r.compose(t3, e3, s2, n2));
          }
          drawPoint(t3, e3) {
            let i3 = this.options, s2 = this.chart.renderer, o2 = t3.shapeArgs, r2 = t3.plotY, n2 = t3.selected && "select", a2 = i3.stacking && !i3.borderRadius, l2 = t3.graphic, h2;
            t3.options.milestone ? d(r2) && null !== t3.y && false !== t3.visible ? (h2 = s2.symbols.diamond(o2.x || 0, o2.y || 0, o2.width || 0, o2.height || 0), l2 ? l2[e3]({
              d: h2
            }) : t3.graphic = l2 = s2.path(h2).addClass(t3.getClassName(), true).add(t3.group || this.group), this.chart.styledMode || t3.graphic.attr(this.pointAttribs(t3, n2)).shadow(i3.shadow, null, a2)) : l2 && (t3.graphic = l2.destroy()) : super.drawPoint(t3, e3);
          }
          translatePoint(t3) {
            let e3, i3;
            super.translatePoint(t3), t3.options.milestone && (i3 = (e3 = t3.shapeArgs).height || 0, t3.shapeArgs = {
              x: (e3.x || 0) - i3 / 2,
              y: e3.y,
              width: i3,
              height: i3
            });
          }
        }
        return p.defaultOptions = c(l.defaultOptions, e2), h(p.prototype, {
          pointArrayMap: ["start", "end", "y"],
          pointClass: t2,
          setData: a.prototype.setData
        }), s.registerSeriesType("gantt", p), p;
      }), i(e, "masters/modules/gantt.src.js", [e["Core/Globals.js"], e["Extensions/ArrowSymbols.js"], e["Gantt/Connection.js"], e["Extensions/CurrentDateIndication.js"], e["Core/Chart/GanttChart.js"], e["Stock/Navigator/Navigator.js"], e["Stock/RangeSelector/RangeSelector.js"], e["Stock/Scrollbar/Scrollbar.js"], e["Series/Gantt/GanttSeries.js"]], function(t2, e2, i2, s, o, r, n, a, l) {
        return t2.Connection = t2.Connection || i2, t2.GanttChart = t2.GanttChart || o, t2.Navigator = t2.Navigator || r, t2.RangeSelector = t2.RangeSelector || n, t2.Scrollbar = t2.Scrollbar || a, t2.ganttChart = t2.GanttChart.ganttChart, e2.compose(t2.SVGRenderer), s.compose(t2.Axis, t2.PlotLineOrBand), l.compose(t2.Axis, t2.Chart, t2.Series, t2.Tick), t2.Navigator.compose(t2.Chart, t2.Axis, t2.Series), t2.RangeSelector.compose(t2.Axis, t2.Chart), t2.Scrollbar.compose(t2.Axis), t2;
      }), i(e, "masters/highcharts-gantt.src.js", [e["masters/highcharts.src.js"]], function(t2) {
        return t2.product = "Highcharts Gantt", t2;
      }), e["masters/highcharts-gantt.src.js"]._modules = e, e["masters/highcharts-gantt.src.js"];
    });
  }
});
export default require_highcharts_gantt();
//# sourceMappingURL=highcharts_highcharts-gantt.js.map
