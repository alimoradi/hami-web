(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~for_admin-adm-providers-adm-providers-module~for_user-usr-view-provider-calendar-usr-view-pr~dc2823ca"], {
    /***/
    "+J/9":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js ***!
      \*********************************************************************/

    /*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */

    /***/
    function J9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
        return _fixedSizeVirtualScrollStrategyFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
        return FixedSizeVirtualScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
        return CdkFixedSizeVirtualScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function () {
        return SCROLL_DISPATCHER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
        return DEFAULT_SCROLL_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return ScrollDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function () {
        return SCROLL_DISPATCHER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return CdkScrollable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
        return ScrollingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function () {
        return ScrollDispatchModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function () {
        return VIEWPORT_RULER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
        return DEFAULT_RESIZE_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return ViewportRuler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () {
        return VIEWPORT_RULER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
        return CdkVirtualForOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
        return VIRTUAL_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
        return CdkVirtualScrollViewport;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "dEu6");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "LSvS");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "FWMu");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "chLL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The injection token used to specify the virtual scrolling strategy.
       * @type {?}
       */


      var _c0 = ["contentWrapper"];
      var _c1 = ["*"];
      var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Virtual scrolling strategy for lists with items of known fixed size.
       */

      var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param {?} itemSize The size of the items in the virtually scrolling list.
         * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */
        function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
          _classCallCheck(this, FixedSizeVirtualScrollStrategy);

          this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * \@docs-private Implemented as part of VirtualScrollStrategy.
           */

          this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          /**
           * The attached viewport.
           */

          this._viewport = null;
          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;
        }
        /**
         * Attaches this scroll strategy to a viewport.
         * @param {?} viewport The viewport to attach this strategy to.
         * @return {?}
         */


        _createClass(FixedSizeVirtualScrollStrategy, [{
          key: "attach",
          value: function attach(viewport) {
            this._viewport = viewport;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /**
           * Detaches this scroll strategy from the currently attached viewport.
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            this._scrolledIndexChange.complete();

            this._viewport = null;
          }
          /**
           * Update the item size and buffer size.
           * @param {?} itemSize The size of the items in the virtually scrolling list.
           * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
           * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
           * @return {?}
           */

        }, {
          key: "updateItemAndBufferSize",
          value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
            if (maxBufferPx < minBufferPx) {
              throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
            }

            this._itemSize = itemSize;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /**
           * \@docs-private Implemented as part of VirtualScrollStrategy.
           * @return {?}
           */

        }, {
          key: "onContentScrolled",
          value: function onContentScrolled() {
            this._updateRenderedRange();
          }
          /**
           * \@docs-private Implemented as part of VirtualScrollStrategy.
           * @return {?}
           */

        }, {
          key: "onDataLengthChanged",
          value: function onDataLengthChanged() {
            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /**
           * \@docs-private Implemented as part of VirtualScrollStrategy.
           * @return {?}
           */

        }, {
          key: "onContentRendered",
          value: function onContentRendered() {}
          /**
           * \@docs-private Implemented as part of VirtualScrollStrategy.
           * @return {?}
           */

        }, {
          key: "onRenderedOffsetChanged",
          value: function onRenderedOffsetChanged() {}
          /**
           * Scroll to the offset for the given index.
           * @param {?} index The index of the element to scroll to.
           * @param {?} behavior The ScrollBehavior to use when scrolling.
           * @return {?}
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index, behavior) {
            if (this._viewport) {
              this._viewport.scrollToOffset(index * this._itemSize, behavior);
            }
          }
          /**
           * Update the viewport's total content size.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateTotalContentSize",
          value: function _updateTotalContentSize() {
            if (!this._viewport) {
              return;
            }

            this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
          }
          /**
           * Update the viewport's rendered range.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateRenderedRange",
          value: function _updateRenderedRange() {
            if (!this._viewport) {
              return;
            }
            /** @type {?} */


            var scrollOffset = this._viewport.measureScrollOffset();
            /** @type {?} */


            var firstVisibleIndex = scrollOffset / this._itemSize;
            /** @type {?} */

            var renderedRange = this._viewport.getRenderedRange();
            /** @type {?} */


            var newRange = {
              start: renderedRange.start,
              end: renderedRange.end
            };
            /** @type {?} */

            var viewportSize = this._viewport.getViewportSize();
            /** @type {?} */


            var dataLength = this._viewport.getDataLength();
            /** @type {?} */


            var startBuffer = scrollOffset - newRange.start * this._itemSize;

            if (startBuffer < this._minBufferPx && newRange.start != 0) {
              /** @type {?} */
              var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
              newRange.start = Math.max(0, newRange.start - expandStart);
              newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
            } else {
              /** @type {?} */
              var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

              if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

                if (expandEnd > 0) {
                  newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                  newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
              }
            }

            this._viewport.setRenderedRange(newRange);

            this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

            this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
          }
        }]);

        return FixedSizeVirtualScrollStrategy;
      }();
      /**
       * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
       * `FixedSizeVirtualScrollStrategy` from the given directive.
       * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
       *     `FixedSizeVirtualScrollStrategy` from.
       * @return {?}
       */


      function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
        return fixedSizeDir._scrollStrategy;
      }
      /**
       * A virtual scroll strategy that supports fixed-size items.
       */


      var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
        function CdkFixedSizeVirtualScroll() {
          _classCallCheck(this, CdkFixedSizeVirtualScroll);

          this._itemSize = 20;
          this._minBufferPx = 100;
          this._maxBufferPx = 200;
          /**
           * The scroll strategy used by this directive.
           */

          this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /**
         * The size of the items in the list (in pixels).
         * @return {?}
         */


        _createClass(CdkFixedSizeVirtualScroll, [{
          key: "ngOnChanges",

          /**
           * @return {?}
           */
          value: function ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           * @return {?}
           */

        }, {
          key: "minBufferPx",
          get: function get() {
            return this._minBufferPx;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           * @return {?}
           */

        }, {
          key: "maxBufferPx",
          get: function get() {
            return this._maxBufferPx;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
          }
        }]);

        return CdkFixedSizeVirtualScroll;
      }();

      CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
        return new (t || CdkFixedSizeVirtualScroll)();
      };

      CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkFixedSizeVirtualScroll,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return CdkFixedSizeVirtualScroll;
          })]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport[itemSize]',
            providers: [{
              provide: VIRTUAL_SCROLL_STRATEGY,
              useFactory: _fixedSizeVirtualScrollStrategyFactory,
              deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
              /**
              * @return {?}
              */
              function () {
                return CdkFixedSizeVirtualScroll;
              })]
            }]
          }]
        }], function () {
          return [];
        }, {
          itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Time in ms to throttle the scrolling events by default.
       * @type {?}
       */


      var DEFAULT_SCROLL_TIME = 20;
      /**
       * Service contained all registered Scrollable references and emits an event when any one of the
       * Scrollable references emit a scrolled event.
       */

      var ScrollDispatcher = /*#__PURE__*/function () {
        /**
         * @param {?} _ngZone
         * @param {?} _platform
         */
        function ScrollDispatcher(_ngZone, _platform) {
          _classCallCheck(this, ScrollDispatcher);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /**
           * Subject for notifying that a registered scrollable reference element has been scrolled.
           */

          this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Keeps track of the global `scroll` and `resize` subscriptions.
           */

          this._globalSubscription = null;
          /**
           * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
           */

          this._scrolledCount = 0;
          /**
           * Map of all the scrollable references that are registered with the service and their
           * scroll event subscriptions.
           */

          this.scrollContainers = new Map();
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param {?} scrollable Scrollable instance to be registered.
         * @return {?}
         */


        _createClass(ScrollDispatcher, [{
          key: "register",
          value: function register(scrollable) {
            var _this = this;

            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this._scrolled.next(scrollable);
              }));
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param {?} scrollable Scrollable instance to be deregistered.
           * @return {?}
           */

        }, {
          key: "deregister",
          value: function deregister(scrollable) {
            /** @type {?} */
            var scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers["delete"](scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           * @param {?=} auditTimeInMs
           * @return {?}
           */

        }, {
          key: "scrolled",
          value: function scrolled() {
            var _this2 = this;

            var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

            if (!this._platform.isBrowser) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              if (!_this2._globalSubscription) {
                _this2._addGlobalListener();
              } // In the case of a 0ms delay, use an observable without auditTime
              // since it does add a perceptible delay in processing overhead.

              /** @type {?} */


              var subscription = auditTimeInMs > 0 ? _this2._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this2._scrolled.subscribe(observer);
              _this2._scrolledCount++;
              return (
                /**
                * @return {?}
                */
                function () {
                  subscription.unsubscribe();
                  _this2._scrolledCount--;

                  if (!_this2._scrolledCount) {
                    _this2._removeGlobalListener();
                  }
                }
              );
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this3 = this;

            this._removeGlobalListener();

            this.scrollContainers.forEach(
            /**
            * @param {?} _
            * @param {?} container
            * @return {?}
            */
            function (_, container) {
              return _this3.deregister(container);
            });

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param {?} elementRef Element whose ancestors to listen for.
           * @param {?=} auditTimeInMs Time to throttle the scroll events.
           * @return {?}
           */

        }, {
          key: "ancestorScrolled",
          value: function ancestorScrolled(elementRef, auditTimeInMs) {
            /** @type {?} */
            var ancestors = this.getAncestorScrollContainers(elementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} target
            * @return {?}
            */
            function (target) {
              return !target || ancestors.indexOf(target) > -1;
            }));
          }
          /**
           * Returns all registered Scrollables that contain the provided element.
           * @param {?} elementRef
           * @return {?}
           */

        }, {
          key: "getAncestorScrollContainers",
          value: function getAncestorScrollContainers(elementRef) {
            var _this4 = this;

            /** @type {?} */
            var scrollingContainers = [];
            this.scrollContainers.forEach(
            /**
            * @param {?} _subscription
            * @param {?} scrollable
            * @return {?}
            */
            function (_subscription, scrollable) {
              if (_this4._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /**
           * Returns true if the element is contained within the provided Scrollable.
           * @private
           * @param {?} scrollable
           * @param {?} elementRef
           * @return {?}
           */

        }, {
          key: "_scrollableContainsElement",
          value: function _scrollableContainsElement(scrollable, elementRef) {
            /** @type {?} */
            var element = elementRef.nativeElement;
            /** @type {?} */

            var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while (element =
            /** @type {?} */
            element.parentElement);

            return false;
          }
          /**
           * Sets up the global scroll listeners.
           * @private
           * @return {?}
           */

        }, {
          key: "_addGlobalListener",
          value: function _addGlobalListener() {
            var _this5 = this;

            this._globalSubscription = this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this5._scrolled.next();
              });
            });
          }
          /**
           * Cleans up the global scroll listener.
           * @private
           * @return {?}
           */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }]);

        return ScrollDispatcher;
      }();

      ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
        return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
      };

      ScrollDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ScrollDispatcher,
        factory: ScrollDispatcher.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      ScrollDispatcher.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };
      /** @nocollapse */


      ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ScrollDispatcher_Factory() {
          return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
        },
        token: ScrollDispatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }];
        }, null);
      })();
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @param {?} parentDispatcher
       * @param {?} ngZone
       * @param {?} platform
       * @return {?}
       */


      function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
        return parentDispatcher || new ScrollDispatcher(ngZone, platform);
      }
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @type {?}
       */


      var SCROLL_DISPATCHER_PROVIDER = {
        // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
        provide: ScrollDispatcher,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
        useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Sends an event when the directive's element is scrolled. Registers itself with the
       * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
       * can be listened to through the service.
       */

      var CdkScrollable = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} scrollDispatcher
         * @param {?} ngZone
         * @param {?=} dir
         */
        function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
          var _this6 = this;

          _classCallCheck(this, CdkScrollable);

          this.elementRef = elementRef;
          this.scrollDispatcher = scrollDispatcher;
          this.ngZone = ngZone;
          this.dir = dir;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            return _this6.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this6.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this6._destroyed)).subscribe(observer);
            });
          });
        }
        /**
         * @return {?}
         */


        _createClass(CdkScrollable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollDispatcher.register(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Returns observable that emits when a scroll event is fired on the host element.
           * @return {?}
           */

        }, {
          key: "elementScrolled",
          value: function elementScrolled() {
            return this._elementScrolled;
          }
          /**
           * Gets the ElementRef for the viewport.
           * @return {?}
           */

        }, {
          key: "getElementRef",
          value: function getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param {?} options specified the offsets to scroll to.
           * @return {?}
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(options) {
            /** @type {?} */
            var el = this.elementRef.nativeElement;
            /** @type {?} */

            var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

            options.left = options.left == null ? isRtl ? options.end : options.start : options.left;
            options.right = options.right == null ? isRtl ? options.start : options.end : options.right; // Rewrite the bottom offset as a top offset.

            if (options.bottom != null) {
              /** @type {?} */
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.


            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
              if (options.left != null) {
                /** @type {?} */
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                options.left = options.right;
              } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                options.left = options.right ? -options.right : options.right;
              }
            } else {
              if (options.right != null) {
                /** @type {?} */
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }
          /**
           * @private
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_applyScrollToOptions",
          value: function _applyScrollToOptions(options) {
            /** @type {?} */
            var el = this.elementRef.nativeElement;

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param {?} from The edge to measure from.
           * @return {?}
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            /** @type {?} */
            var LEFT = 'left';
            /** @type {?} */

            var RIGHT = 'right';
            /** @type {?} */

            var el = this.elementRef.nativeElement;

            if (from == 'top') {
              return el.scrollTop;
            }

            if (from == 'bottom') {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.

            /** @type {?} */


            var isRtl = this.dir && this.dir.value == 'rtl';

            if (from == 'start') {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == 'end') {
              from = isRtl ? LEFT : RIGHT;
            }

            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }]);

        return CdkScrollable;
      }();

      CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
        return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8));
      };

      CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkScrollable,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
      });
      /** @nocollapse */

      CdkScrollable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkScrollable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdk-scrollable], [cdkScrollable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Checks if the given ranges are equal.
       * @param {?} r1
       * @param {?} r2
       * @return {?}
       */


      function rangesEqual(r1, r2) {
        return r1.start == r2.start && r1.end == r2.end;
      }
      /**
       * Scheduler to be used for scroll events. Needs to fall back to
       * something that doesn't rely on requestAnimationFrame on environments
       * that don't support it (e.g. server-side rendering).
       * @type {?}
       */


      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
      /**
       * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
       */

      var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
        _inherits(CdkVirtualScrollViewport, _CdkScrollable);

        var _super = _createSuper(CdkVirtualScrollViewport);

        /**
         * @param {?} elementRef
         * @param {?} _changeDetectorRef
         * @param {?} ngZone
         * @param {?} _scrollStrategy
         * @param {?} dir
         * @param {?} scrollDispatcher
         */
        function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
          var _this7;

          _classCallCheck(this, CdkVirtualScrollViewport);

          _this7 = _super.call(this, elementRef, scrollDispatcher, ngZone, dir);
          _this7.elementRef = elementRef;
          _this7._changeDetectorRef = _changeDetectorRef;
          _this7._scrollStrategy = _scrollStrategy;
          /**
           * Emits when the viewport is detached from a CdkVirtualForOf.
           */

          _this7._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Emits when the rendered range changes.
           */

          _this7._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this7._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
          // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
          // depending on how the strategy calculates the scrolled index, it may come at a cost to
          // performance.

          /**
           * Emits when the index of the first element visible in the viewport changes.
           */

          _this7.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            return _this7._scrollStrategy.scrolledIndexChange.subscribe(
            /**
            * @param {?} index
            * @return {?}
            */
            function (index) {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this7.ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return observer.next(index);
                });
              });
            });
          });
          /**
           * A stream that emits whenever the rendered range changes.
           */

          _this7.renderedRangeStream = _this7._renderedRangeSubject.asObservable();
          /**
           * The total size of all content (in pixels), including content that is not currently rendered.
           */

          _this7._totalContentSize = 0;
          /**
           * A string representing the `style.width` property value to be used for the spacer element.
           */

          _this7._totalContentWidth = '';
          /**
           * A string representing the `style.height` property value to be used for the spacer element.
           */

          _this7._totalContentHeight = '';
          /**
           * The currently rendered range of indices.
           */

          _this7._renderedRange = {
            start: 0,
            end: 0
          };
          /**
           * The length of the data bound to this viewport (in number of items).
           */

          _this7._dataLength = 0;
          /**
           * The size of the viewport (in pixels).
           */

          _this7._viewportSize = 0;
          /**
           * The last rendered content offset that was set.
           */

          _this7._renderedContentOffset = 0;
          /**
           * Whether the last rendered content offset was to the end of the content (and therefore needs to
           * be rewritten as an offset to the start of the content).
           */

          _this7._renderedContentOffsetNeedsRewrite = false;
          /**
           * Whether there is a pending change detection cycle.
           */

          _this7._isChangeDetectionPending = false;
          /**
           * A list of functions to run after the next change detection cycle.
           */

          _this7._runAfterChangeDetection = [];

          if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
          }

          return _this7;
        }
        /**
         * The direction the viewport scrolls.
         * @return {?}
         */


        _createClass(CdkVirtualScrollViewport, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            var _this8 = this;

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.


            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this8._measureViewportSize();

                _this8._scrollStrategy.attach(_this8);

                _this8.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
                /** @type {?} */
                null), // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  return _this8._scrollStrategy.onContentScrolled();
                });

                _this8._markChangeDetectionNeeded();
              });
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects


            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
          }
          /**
           * Attaches a `CdkVirtualForOf` to this viewport.
           * @param {?} forOf
           * @return {?}
           */

        }, {
          key: "attach",
          value: function attach(forOf) {
            var _this9 = this;

            if (this._forOf) {
              throw Error('CdkVirtualScrollViewport is already attached.');
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.


            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this9._forOf = forOf;

              _this9._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this9._detachedSubject)).subscribe(
              /**
              * @param {?} data
              * @return {?}
              */
              function (data) {
                /** @type {?} */
                var newLength = data.length;

                if (newLength !== _this9._dataLength) {
                  _this9._dataLength = newLength;

                  _this9._scrollStrategy.onDataLengthChanged();
                }

                _this9._doChangeDetection();
              });
            });
          }
          /**
           * Detaches the current `CdkVirtualForOf`.
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /**
           * Gets the length of the data bound to this viewport (in number of items).
           * @return {?}
           */

        }, {
          key: "getDataLength",
          value: function getDataLength() {
            return this._dataLength;
          }
          /**
           * Gets the size of the viewport (in pixels).
           * @return {?}
           */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /**
           * Get the current rendered range of items.
           * @return {?}
           */

        }, {
          key: "getRenderedRange",
          value: function getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           * @param {?} size
           * @return {?}
           */

        }, {
          key: "setTotalContentSize",
          value: function setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /**
           * Sets the currently rendered range of indices.
           * @param {?} range
           * @return {?}
           */

        }, {
          key: "setRenderedRange",
          value: function setRenderedRange(range) {
            var _this10 = this;

            if (!rangesEqual(this._renderedRange, range)) {
              this._renderedRangeSubject.next(this._renderedRange = range);

              this._markChangeDetectionNeeded(
              /**
              * @return {?}
              */
              function () {
                return _this10._scrollStrategy.onContentRendered();
              });
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           * @return {?}
           */

        }, {
          key: "getOffsetToRenderedContentStart",
          value: function getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           * @param {?} offset
           * @param {?=} to
           * @return {?}
           */

        }, {
          key: "setRenderedContentOffset",
          value: function setRenderedContentOffset(offset) {
            var _this11 = this;

            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.

            /** @type {?} */
            var isRtl = this.dir && this.dir.value == 'rtl';
            /** @type {?} */

            var isHorizontal = this.orientation == 'horizontal';
            /** @type {?} */

            var axis = isHorizontal ? 'X' : 'Y';
            /** @type {?} */

            var axisDirection = isHorizontal && isRtl ? -1 : 1;
            /** @type {?} */

            var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
            this._renderedContentOffset = offset;

            if (to === 'to-end') {
              transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(
              /**
              * @return {?}
              */
              function () {
                if (_this11._renderedContentOffsetNeedsRewrite) {
                  _this11._renderedContentOffset -= _this11.measureRenderedContentSize();
                  _this11._renderedContentOffsetNeedsRewrite = false;

                  _this11.setRenderedContentOffset(_this11._renderedContentOffset);
                } else {
                  _this11._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param {?} offset The offset to scroll to.
           * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           * @return {?}
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            /** @type {?} */
            var options = {
              behavior: behavior
            };

            if (this.orientation === 'horizontal') {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param {?} index The index of the element to scroll to.
           * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           * @return {?}
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           * @return {?}
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            return _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
          }
          /**
           * Measure the combined size of all of the rendered items.
           * @return {?}
           */

        }, {
          key: "measureRenderedContentSize",
          value: function measureRenderedContentSize() {
            /** @type {?} */
            var contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           * @param {?} range
           * @return {?}
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /**
           * Update the viewport dimensions and re-render.
           * @return {?}
           */

        }, {
          key: "checkViewportSize",
          value: function checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /**
           * Measure the viewport size.
           * @private
           * @return {?}
           */

        }, {
          key: "_measureViewportSize",
          value: function _measureViewportSize() {
            /** @type {?} */
            var viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
          }
          /**
           * Queue up change detection to run.
           * @private
           * @param {?=} runAfter
           * @return {?}
           */

        }, {
          key: "_markChangeDetectionNeeded",
          value: function _markChangeDetectionNeeded(runAfter) {
            var _this12 = this;

            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.


            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                return Promise.resolve().then(
                /**
                * @return {?}
                */
                function () {
                  _this12._doChangeDetection();
                });
              });
            }
          }
          /**
           * Run change detection.
           * @private
           * @return {?}
           */

        }, {
          key: "_doChangeDetection",
          value: function _doChangeDetection() {
            var _this13 = this;

            this._isChangeDetectionPending = false; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this13._changeDetectorRef.markForCheck();
            }); // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
            /** @type {?} */

            var runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            var _iterator = _createForOfIteratorHelper(runAfterChangeDetection),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var fn = _step.value;
                fn();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Calculates the `style.width` and `style.height` for the spacer element.
           * @private
           * @return {?}
           */

        }, {
          key: "_calculateSpacerSize",
          value: function _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
            this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
          }
        }, {
          key: "orientation",
          get: function get() {
            return this._orientation;
          }
          /**
           * @param {?} orientation
           * @return {?}
           */
          ,
          set: function set(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
        }]);

        return CdkVirtualScrollViewport;
      }(CdkScrollable);

      CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
        return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher));
      };

      CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdkVirtualScrollViewport,
        selectors: [["cdk-virtual-scroll-viewport"]],
        viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
          }
        },
        hostAttrs: [1, "cdk-virtual-scroll-viewport"],
        hostVars: 4,
        hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
          }
        },
        inputs: {
          orientation: "orientation"
        },
        outputs: {
          scrolledIndexChange: "scrolledIndexChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkScrollable,
          useExisting: CdkVirtualScrollViewport
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 4,
        consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
        template: function CdkVirtualScrollViewport_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
          }
        },
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      CdkVirtualScrollViewport.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }];
      };

      CdkVirtualScrollViewport.propDecorators = {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport',
            template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
            host: {
              'class': 'cdk-virtual-scroll-viewport',
              '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
              '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: CdkScrollable,
              useExisting: CdkVirtualScrollViewport
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [VIRTUAL_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: ScrollDispatcher
          }];
        }, {
          scrolledIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentWrapper', {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Helper to extract size from a DOM Node.
       * @param {?} orientation
       * @param {?} node
       * @return {?}
       */


      function getSize(orientation, node) {
        /** @type {?} */
        var el =
        /** @type {?} */
        node;

        if (!el.getBoundingClientRect) {
          return 0;
        }
        /** @type {?} */


        var rect = el.getBoundingClientRect();
        return orientation == 'horizontal' ? rect.width : rect.height;
      }
      /**
       * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
       * container.
       * @template T
       */


      var CdkVirtualForOf = /*#__PURE__*/function () {
        /**
         * @param {?} _viewContainerRef
         * @param {?} _template
         * @param {?} _differs
         * @param {?} _viewport
         * @param {?} ngZone
         */
        function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
          var _this14 = this;

          _classCallCheck(this, CdkVirtualForOf);

          this._viewContainerRef = _viewContainerRef;
          this._template = _template;
          this._differs = _differs;
          this._viewport = _viewport;
          /**
           * Emits when the rendered view of the data changes.
           */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Subject that emits when a new DataSource instance is given.
           */

          this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

          this.cdkVirtualForTemplateCacheSize = 20;
          /**
           * Emits whenever the data in the current DataSource changes.
           */

          this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
          /** @type {?} */
          null), // Bundle up the previous and current data sources so we can work with both.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
          // new one, passing back a stream of data changes which we run through `switchMap` to give
          // us a data stream that emits the latest data from whatever the current `DataSource` is.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                prev = _ref2[0],
                cur = _ref2[1];

            return _this14._changeDataSource(prev, cur);
          }), // Replay the last emitted data when someone subscribes.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          /**
           * The differ used to calculate changes to the data.
           */

          this._differ = null;
          /**
           * The template cache used to hold on ot template instancess that have been stamped out, but don't
           * currently need to be rendered. These instances will be reused in the future rather than
           * stamping out brand new ones.
           */

          this._templateCache = [];
          /**
           * Whether the rendered data should be updated during the next ngDoCheck cycle.
           */

          this._needsUpdate = false;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.dataStream.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this14._data = data;

            _this14._onRenderedDataChange();
          });

          this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} range
          * @return {?}
          */
          function (range) {
            _this14._renderedRange = range;
            ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this14.viewChange.next(_this14._renderedRange);
            });

            _this14._onRenderedDataChange();
          });

          this._viewport.attach(this);
        }
        /**
         * The DataSource to display.
         * @return {?}
         */


        _createClass(CdkVirtualForOf, [{
          key: "measureRangeSize",

          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           * @param {?} range
           * @param {?} orientation
           * @return {?}
           */
          value: function measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
              throw Error("Error: attempted to measure an item that isn't rendered.");
            } // The index into the list of rendered views for the first item in the range.

            /** @type {?} */


            var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            /** @type {?} */

            var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

            /** @type {?} */

            var totalSize = 0;
            /** @type {?} */

            var i = rangeLen;

            while (i--) {
              /** @type {?} */
              var view =
              /** @type {?} */
              this._viewContainerRef.get(i + renderedStartIndex);
              /** @type {?} */


              var j = view ? view.rootNodes.length : 0;

              while (j--) {
                totalSize += getSize(orientation,
                /** @type {?} */
                view.rootNodes[j]);
              }
            }

            return totalSize;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).

              /** @type {?} */
              var changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next();

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            var _iterator2 = _createForOfIteratorHelper(this._templateCache),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var view = _step2.value;
                view.destroy();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /**
           * React to scroll state changes in the viewport.
           * @private
           * @return {?}
           */

        }, {
          key: "_onRenderedDataChange",
          value: function _onRenderedDataChange() {
            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

            if (!this._differ) {
              this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
            }

            this._needsUpdate = true;
          }
          /**
           * Swap out one `DataSource` for another.
           * @private
           * @param {?} oldDs
           * @param {?} newDs
           * @return {?}
           */

        }, {
          key: "_changeDataSource",
          value: function _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }
          /**
           * Update the `CdkVirtualForOfContext` for all views.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateContext",
          value: function _updateContext() {
            /** @type {?} */
            var count = this._data.length;
            /** @type {?} */

            var i = this._viewContainerRef.length;

            while (i--) {
              /** @type {?} */
              var view =
              /** @type {?} */
              this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /**
           * Apply changes to the DOM.
           * @private
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "_applyChanges",
          value: function _applyChanges(changes) {
            var _this15 = this;

            // Rearrange the views to put them in the right location.
            changes.forEachOperation(
            /**
            * @param {?} record
            * @param {?} adjustedPreviousIndex
            * @param {?} currentIndex
            * @return {?}
            */
            function (record, adjustedPreviousIndex, currentIndex) {
              if (record.previousIndex == null) {
                // Item added.
                // Item added.

                /** @type {?} */
                var view = _this15._insertViewForNewItem(
                /** @type {?} */
                currentIndex);

                view.context.$implicit = record.item;
              } else if (currentIndex == null) {
                // Item removed.
                _this15._cacheView(_this15._detachView(
                /** @type {?} */
                adjustedPreviousIndex));
              } else {
                // Item moved.
                // Item moved.

                /** @type {?} */
                var _view =
                /** @type {?} */
                _this15._viewContainerRef.get(
                /** @type {?} */
                adjustedPreviousIndex);

                _this15._viewContainerRef.move(_view, currentIndex);

                _view.context.$implicit = record.item;
              }
            }); // Update $implicit for any items that had an identity change.

            changes.forEachIdentityChange(
            /**
            * @param {?} record
            * @return {?}
            */
            function (record) {
              /** @type {?} */
              var view =
              /** @type {?} */
              _this15._viewContainerRef.get(
              /** @type {?} */
              record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            /** @type {?} */

            var count = this._data.length;
            /** @type {?} */

            var i = this._viewContainerRef.length;

            while (i--) {
              /** @type {?} */
              var view =
              /** @type {?} */
              this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /**
           * Cache the given detached view.
           * @private
           * @param {?} view
           * @return {?}
           */

        }, {
          key: "_cacheView",
          value: function _cacheView(view) {
            if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
              this._templateCache.push(view);
            } else {
              /** @type {?} */
              var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.


              if (index === -1) {
                view.destroy();
              } else {
                this._viewContainerRef.remove(index);
              }
            }
          }
          /**
           * Inserts a view for a new item, either from the cache or by creating a new one.
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "_insertViewForNewItem",
          value: function _insertViewForNewItem(index) {
            return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
          }
          /**
           * Update the computed properties on the `CdkVirtualForOfContext`.
           * @private
           * @param {?} context
           * @return {?}
           */

        }, {
          key: "_updateComputedContextProperties",
          value: function _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }
          /**
           * Creates a new embedded view and moves it to the given index
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "_createEmbeddedViewAt",
          value: function _createEmbeddedViewAt(index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return this._viewContainerRef.createEmbeddedView(this._template, {
              $implicit:
              /** @type {?} */
              null,
              cdkVirtualForOf: this._cdkVirtualForOf,
              index: -1,
              count: -1,
              first: false,
              last: false,
              odd: false,
              even: false
            }, index);
          }
          /**
           * Inserts a recycled view from the cache at the given index.
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "_insertViewFromCache",
          value: function _insertViewFromCache(index) {
            /** @type {?} */
            var cachedView = this._templateCache.pop();

            if (cachedView) {
              this._viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
          /**
           * Detaches the embedded view at the given index.
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "_detachView",
          value: function _detachView(index) {
            return (
              /** @type {?} */
              this._viewContainerRef.detach(index)
            );
          }
        }, {
          key: "cdkVirtualForOf",
          get: function get() {
            return this._cdkVirtualForOf;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._cdkVirtualForOf = value;
            /** @type {?} */

            var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["isDataSource"])(value) ? value : // Slice the value if its an NgIterable to ensure we're working with an array.
            new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));

            this._dataSourceChanges.next(ds);
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           * @return {?}
           */

        }, {
          key: "cdkVirtualForTrackBy",
          get: function get() {
            return this._cdkVirtualForTrackBy;
          }
          /**
           * @param {?} fn
           * @return {?}
           */
          ,
          set: function set(fn) {
            var _this16 = this;

            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
            /**
            * @param {?} index
            * @param {?} item
            * @return {?}
            */
            function (index, item) {
              return fn(index + (_this16._renderedRange ? _this16._renderedRange.start : 0), item);
            } : undefined;
          }
          /**
           * The template used to stamp out new elements.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "cdkVirtualForTemplate",
          set: function set(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
        }]);

        return CdkVirtualForOf;
      }();

      CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
        return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkVirtualForOf,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate"
        }
      });
      /** @nocollapse */

      CdkVirtualForOf.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualForOf, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkVirtualFor][cdkVirtualForOf]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
          }, {
            type: CdkVirtualScrollViewport,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          cdkVirtualForTemplateCacheSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cdkVirtualForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cdkVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cdkVirtualForTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ScrollingModule = function ScrollingModule() {
        _classCallCheck(this, ScrollingModule);
      };

      ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScrollingModule
      });
      ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ScrollingModule_Factory(t) {
          return new (t || ScrollingModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollingModule, {
          declarations: function declarations() {
            return [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport],
            declarations: [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport]
          }]
        }], null, null);
      })();
      /**
       * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
       * \@breaking-change 8.0.0 delete this alias
       */


      var ScrollDispatchModule = function ScrollDispatchModule() {
        _classCallCheck(this, ScrollDispatchModule);
      };

      ScrollDispatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScrollDispatchModule
      });
      ScrollDispatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ScrollDispatchModule_Factory(t) {
          return new (t || ScrollDispatchModule)();
        },
        imports: [[ScrollingModule], ScrollingModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollDispatchModule, {
          imports: [ScrollingModule],
          exports: [ScrollingModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDispatchModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [ScrollingModule],
            exports: [ScrollingModule]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Time in ms to throttle the resize events by default.
       * @type {?}
       */


      var DEFAULT_RESIZE_TIME = 20;
      /**
       * Simple utility for getting the bounds of the browser viewport.
       * \@docs-private
       */

      var ViewportRuler = /*#__PURE__*/function () {
        /**
         * @param {?} _platform
         * @param {?} ngZone
         */
        function ViewportRuler(_platform, ngZone) {
          var _this17 = this;

          _classCallCheck(this, ViewportRuler);

          this._platform = _platform;
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this17._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.

            _this17._invalidateCache = _this17.change().subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this17._updateViewportSize();
            });
          });
        }
        /**
         * @return {?}
         */


        _createClass(ViewportRuler, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._invalidateCache.unsubscribe();
          }
          /**
           * Returns the viewport's width and height.
           * @return {?}
           */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }
            /** @type {?} */


            var output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize =
              /** @type {?} */
              null;
            }

            return output;
          }
          /**
           * Gets a ClientRect for the viewport's bounds.
           * @return {?}
           */

        }, {
          key: "getViewportRect",
          value: function getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().

            /** @type {?} */
            var scrollPosition = this.getViewportScrollPosition();

            var _this$getViewportSize = this.getViewportSize(),
                width = _this$getViewportSize.width,
                height = _this$getViewportSize.height;

            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height: height,
              width: width
            };
          }
          /**
           * Gets the (top, left) scroll position of the viewport.
           * @return {?}
           */

        }, {
          key: "getViewportScrollPosition",
          value: function getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.

            /** @type {?} */


            var documentElement =
            /** @type {?} */
            document.documentElement;
            /** @type {?} */

            var documentRect = documentElement.getBoundingClientRect();
            /** @type {?} */

            var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
            /** @type {?} */

            var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
            return {
              top: top,
              left: left
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * @param {?=} throttleTime Time in milliseconds to throttle the stream.
           * @return {?}
           */

        }, {
          key: "change",
          value: function change() {
            var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
          }
          /**
           * Updates the cached viewport size.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateViewportSize",
          value: function _updateViewportSize() {
            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            };
          }
        }]);

        return ViewportRuler;
      }();

      ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
        return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      ViewportRuler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ViewportRuler,
        factory: ViewportRuler.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      ViewportRuler.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };
      /** @nocollapse */


      ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ViewportRuler_Factory() {
          return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: ViewportRuler,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewportRuler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @param {?} parentRuler
       * @param {?} platform
       * @param {?} ngZone
       * @return {?}
       */


      function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
        return parentRuler || new ViewportRuler(platform, ngZone);
      }
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @type {?}
       */


      var VIEWPORT_RULER_PROVIDER = {
        // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
        provide: ViewportRuler,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
        useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=scrolling.js.map

      /***/
    },

    /***/
    "2dEz":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/observers.js ***!
      \*********************************************************************/

    /*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */

    /***/
    function dEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
        return MutationObserverFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
        return ContentObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
        return CdkObserveContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
        return ObserversModule;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "dEu6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
       * \@docs-private
       */


      var MutationObserverFactory = /*#__PURE__*/function () {
        function MutationObserverFactory() {
          _classCallCheck(this, MutationObserverFactory);
        }

        _createClass(MutationObserverFactory, [{
          key: "create",

          /**
           * @param {?} callback
           * @return {?}
           */
          value: function create(callback) {
            return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
          }
        }]);

        return MutationObserverFactory;
      }();

      MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
        return new (t || MutationObserverFactory)();
      };

      MutationObserverFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: MutationObserverFactory,
        factory: MutationObserverFactory.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      MutationObserverFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function MutationObserverFactory_Factory() {
          return new MutationObserverFactory();
        },
        token: MutationObserverFactory,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * An injectable service that allows watching elements for changes to their content.
       */


      var ContentObserver = /*#__PURE__*/function () {
        /**
         * @param {?} _mutationObserverFactory
         */
        function ContentObserver(_mutationObserverFactory) {
          _classCallCheck(this, ContentObserver);

          this._mutationObserverFactory = _mutationObserverFactory;
          /**
           * Keeps track of the existing MutationObservers so they can be reused.
           */

          this._observedElements = new Map();
        }
        /**
         * @return {?}
         */


        _createClass(ContentObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this18 = this;

            this._observedElements.forEach(
            /**
            * @param {?} _
            * @param {?} element
            * @return {?}
            */
            function (_, element) {
              return _this18._cleanupObserver(element);
            });
          }
          /**
           * @param {?} elementOrRef
           * @return {?}
           */

        }, {
          key: "observe",
          value: function observe(elementOrRef) {
            var _this19 = this;

            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              /** @type {?} */
              var stream = _this19._observeElement(element);
              /** @type {?} */


              var subscription = stream.subscribe(observer);
              return (
                /**
                * @return {?}
                */
                function () {
                  subscription.unsubscribe();

                  _this19._unobserveElement(element);
                }
              );
            });
          }
          /**
           * Observes the given element by using the existing MutationObserver if available, or creating a
           * new one if not.
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_observeElement",
          value: function _observeElement(element) {
            if (!this._observedElements.has(element)) {
              /** @type {?} */
              var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
              /** @type {?} */

              var observer = this._mutationObserverFactory.create(
              /**
              * @param {?} mutations
              * @return {?}
              */
              function (mutations) {
                return stream.next(mutations);
              });

              if (observer) {
                observer.observe(element, {
                  characterData: true,
                  childList: true,
                  subtree: true
                });
              }

              this._observedElements.set(element, {
                observer: observer,
                stream: stream,
                count: 1
              });
            } else {
              /** @type {?} */this._observedElements.get(element).count++;
            }

            return (
              /** @type {?} */
              this._observedElements.get(element).stream
            );
          }
          /**
           * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
           * observing this element.
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_unobserveElement",
          value: function _unobserveElement(element) {
            if (this._observedElements.has(element)) {
              /** @type {?} */this._observedElements.get(element).count--;

              if (!
              /** @type {?} */
              this._observedElements.get(element).count) {
                this._cleanupObserver(element);
              }
            }
          }
          /**
           * Clean up the underlying MutationObserver for the specified element.
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_cleanupObserver",
          value: function _cleanupObserver(element) {
            if (this._observedElements.has(element)) {
              var _this$_observedElemen =
              /** @type {?} */
              this._observedElements.get(element),
                  observer = _this$_observedElemen.observer,
                  stream = _this$_observedElemen.stream;

              if (observer) {
                observer.disconnect();
              }

              stream.complete();

              this._observedElements["delete"](element);
            }
          }
        }]);

        return ContentObserver;
      }();

      ContentObserver.ɵfac = function ContentObserver_Factory(t) {
        return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory));
      };

      ContentObserver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ContentObserver,
        factory: ContentObserver.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      ContentObserver.ctorParameters = function () {
        return [{
          type: MutationObserverFactory
        }];
      };
      /** @nocollapse */


      ContentObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ContentObserver_Factory() {
          return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
        },
        token: ContentObserver,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: MutationObserverFactory
          }];
        }, null);
      })();
      /**
       * Directive that triggers a callback whenever the content of
       * its associated element has changed.
       */


      var CdkObserveContent = /*#__PURE__*/function () {
        /**
         * @param {?} _contentObserver
         * @param {?} _elementRef
         * @param {?} _ngZone
         */
        function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
          _classCallCheck(this, CdkObserveContent);

          this._contentObserver = _contentObserver;
          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /**
           * Event emitted for each change in the element's content.
           */

          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._disabled = false;
          this._currentSubscription = null;
        }
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         * @return {?}
         */


        _createClass(CdkObserveContent, [{
          key: "ngAfterContentInit",

          /**
           * @return {?}
           */
          value: function ngAfterContentInit() {
            if (!this._currentSubscription && !this.disabled) {
              this._subscribe();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribe();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_subscribe",
          value: function _subscribe() {
            var _this20 = this;

            this._unsubscribe();
            /** @type {?} */


            var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
            // Consider brining it back inside the zone next time we're making breaking changes.
            // Bringing it back inside can cause things like infinite change detection loops and changed
            // after checked errors if people's code isn't handling it properly.


            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this20._currentSubscription = (_this20.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this20.debounce)) : stream).subscribe(_this20.event);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            if (this._currentSubscription) {
              this._currentSubscription.unsubscribe();
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
          }
          /**
           * Debounce interval for emitting the changes.
           * @return {?}
           */

        }, {
          key: "debounce",
          get: function get() {
            return this._debounce;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

            this._subscribe();
          }
        }]);

        return CdkObserveContent;
      }();

      CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
        return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkObserveContent,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
          disabled: ["cdkObserveContentDisabled", "disabled"],
          debounce: "debounce"
        },
        outputs: {
          event: "cdkObserveContent"
        },
        exportAs: ["cdkObserveContent"]
      });
      /** @nocollapse */

      CdkObserveContent.ctorParameters = function () {
        return [{
          type: ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkObserveContent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkObserveContent]',
            exportAs: 'cdkObserveContent'
          }]
        }], function () {
          return [{
            type: ContentObserver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkObserveContent']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkObserveContentDisabled']
          }],
          debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var ObserversModule = function ObserversModule() {
        _classCallCheck(this, ObserversModule);
      };

      ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ObserversModule
      });
      ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ObserversModule_Factory(t) {
          return new (t || ObserversModule)();
        },
        providers: [MutationObserverFactory]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, {
          declarations: [CdkObserveContent],
          exports: [CdkObserveContent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkObserveContent],
            declarations: [CdkObserveContent],
            providers: [MutationObserverFactory]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=observers.js.map

      /***/

    },

    /***/
    "3+Bf":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/keycodes.js ***!
      \********************************************************************/

    /*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META, hasModifierKey */

    /***/
    function Bf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
        return MAC_ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
        return BACKSPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TAB", function () {
        return TAB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
        return NUM_CENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENTER", function () {
        return ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
        return SHIFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
        return CONTROL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALT", function () {
        return ALT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
        return PAUSE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
        return CAPS_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
        return ESCAPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPACE", function () {
        return SPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
        return PAGE_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
        return PAGE_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "END", function () {
        return END;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOME", function () {
        return HOME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
        return LEFT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
        return UP_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
        return RIGHT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
        return DOWN_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
        return PLUS_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
        return PRINT_SCREEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "INSERT", function () {
        return INSERT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE", function () {
        return DELETE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZERO", function () {
        return ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ONE", function () {
        return ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TWO", function () {
        return TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THREE", function () {
        return THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOUR", function () {
        return FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIVE", function () {
        return FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIX", function () {
        return SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
        return SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
        return EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NINE", function () {
        return NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
        return FF_SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
        return FF_EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
        return QUESTION_MARK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
        return AT_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "W", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "X", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "META", function () {
        return META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
        return MAC_WK_CMD_LEFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
        return MAC_WK_CMD_RIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
        return CONTEXT_MENU;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
        return NUMPAD_ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
        return NUMPAD_ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
        return NUMPAD_TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
        return NUMPAD_THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
        return NUMPAD_FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
        return NUMPAD_FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
        return NUMPAD_SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
        return NUMPAD_SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
        return NUMPAD_EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
        return NUMPAD_NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
        return NUMPAD_MULTIPLY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
        return NUMPAD_PLUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
        return NUMPAD_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
        return NUMPAD_PERIOD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
        return NUMPAD_DIVIDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F1", function () {
        return F1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F2", function () {
        return F2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F3", function () {
        return F3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F4", function () {
        return F4;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F5", function () {
        return F5;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F6", function () {
        return F6;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F7", function () {
        return F7;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F8", function () {
        return F8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F9", function () {
        return F9;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F10", function () {
        return F10;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F11", function () {
        return F11;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F12", function () {
        return F12;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
        return NUM_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
        return SCROLL_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
        return FIRST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
        return FF_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MUTE", function () {
        return MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
        return VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
        return VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
        return FF_MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
        return FF_VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
        return LAST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
        return FF_VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
        return SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
        return EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMMA", function () {
        return COMMA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DASH", function () {
        return DASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SLASH", function () {
        return SLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
        return APOSTROPHE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILDE", function () {
        return TILDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
        return OPEN_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
        return BACKSLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
        return CLOSE_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
        return SINGLE_QUOTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
        return MAC_META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
        return hasModifierKey;
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var MAC_ENTER = 3;
      /** @type {?} */

      var BACKSPACE = 8;
      /** @type {?} */

      var TAB = 9;
      /** @type {?} */

      var NUM_CENTER = 12;
      /** @type {?} */

      var ENTER = 13;
      /** @type {?} */

      var SHIFT = 16;
      /** @type {?} */

      var CONTROL = 17;
      /** @type {?} */

      var ALT = 18;
      /** @type {?} */

      var PAUSE = 19;
      /** @type {?} */

      var CAPS_LOCK = 20;
      /** @type {?} */

      var ESCAPE = 27;
      /** @type {?} */

      var SPACE = 32;
      /** @type {?} */

      var PAGE_UP = 33;
      /** @type {?} */

      var PAGE_DOWN = 34;
      /** @type {?} */

      var END = 35;
      /** @type {?} */

      var HOME = 36;
      /** @type {?} */

      var LEFT_ARROW = 37;
      /** @type {?} */

      var UP_ARROW = 38;
      /** @type {?} */

      var RIGHT_ARROW = 39;
      /** @type {?} */

      var DOWN_ARROW = 40;
      /** @type {?} */

      var PLUS_SIGN = 43;
      /** @type {?} */

      var PRINT_SCREEN = 44;
      /** @type {?} */

      var INSERT = 45;
      /** @type {?} */

      var DELETE = 46;
      /** @type {?} */

      var ZERO = 48;
      /** @type {?} */

      var ONE = 49;
      /** @type {?} */

      var TWO = 50;
      /** @type {?} */

      var THREE = 51;
      /** @type {?} */

      var FOUR = 52;
      /** @type {?} */

      var FIVE = 53;
      /** @type {?} */

      var SIX = 54;
      /** @type {?} */

      var SEVEN = 55;
      /** @type {?} */

      var EIGHT = 56;
      /** @type {?} */

      var NINE = 57;
      /** @type {?} */

      var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

      /** @type {?} */

      var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

      /** @type {?} */

      var QUESTION_MARK = 63;
      /** @type {?} */

      var AT_SIGN = 64;
      /** @type {?} */

      var A = 65;
      /** @type {?} */

      var B = 66;
      /** @type {?} */

      var C = 67;
      /** @type {?} */

      var D = 68;
      /** @type {?} */

      var E = 69;
      /** @type {?} */

      var F = 70;
      /** @type {?} */

      var G = 71;
      /** @type {?} */

      var H = 72;
      /** @type {?} */

      var I = 73;
      /** @type {?} */

      var J = 74;
      /** @type {?} */

      var K = 75;
      /** @type {?} */

      var L = 76;
      /** @type {?} */

      var M = 77;
      /** @type {?} */

      var N = 78;
      /** @type {?} */

      var O = 79;
      /** @type {?} */

      var P = 80;
      /** @type {?} */

      var Q = 81;
      /** @type {?} */

      var R = 82;
      /** @type {?} */

      var S = 83;
      /** @type {?} */

      var T = 84;
      /** @type {?} */

      var U = 85;
      /** @type {?} */

      var V = 86;
      /** @type {?} */

      var W = 87;
      /** @type {?} */

      var X = 88;
      /** @type {?} */

      var Y = 89;
      /** @type {?} */

      var Z = 90;
      /** @type {?} */

      var META = 91; // WIN_KEY_LEFT

      /** @type {?} */

      var MAC_WK_CMD_LEFT = 91;
      /** @type {?} */

      var MAC_WK_CMD_RIGHT = 93;
      /** @type {?} */

      var CONTEXT_MENU = 93;
      /** @type {?} */

      var NUMPAD_ZERO = 96;
      /** @type {?} */

      var NUMPAD_ONE = 97;
      /** @type {?} */

      var NUMPAD_TWO = 98;
      /** @type {?} */

      var NUMPAD_THREE = 99;
      /** @type {?} */

      var NUMPAD_FOUR = 100;
      /** @type {?} */

      var NUMPAD_FIVE = 101;
      /** @type {?} */

      var NUMPAD_SIX = 102;
      /** @type {?} */

      var NUMPAD_SEVEN = 103;
      /** @type {?} */

      var NUMPAD_EIGHT = 104;
      /** @type {?} */

      var NUMPAD_NINE = 105;
      /** @type {?} */

      var NUMPAD_MULTIPLY = 106;
      /** @type {?} */

      var NUMPAD_PLUS = 107;
      /** @type {?} */

      var NUMPAD_MINUS = 109;
      /** @type {?} */

      var NUMPAD_PERIOD = 110;
      /** @type {?} */

      var NUMPAD_DIVIDE = 111;
      /** @type {?} */

      var F1 = 112;
      /** @type {?} */

      var F2 = 113;
      /** @type {?} */

      var F3 = 114;
      /** @type {?} */

      var F4 = 115;
      /** @type {?} */

      var F5 = 116;
      /** @type {?} */

      var F6 = 117;
      /** @type {?} */

      var F7 = 118;
      /** @type {?} */

      var F8 = 119;
      /** @type {?} */

      var F9 = 120;
      /** @type {?} */

      var F10 = 121;
      /** @type {?} */

      var F11 = 122;
      /** @type {?} */

      var F12 = 123;
      /** @type {?} */

      var NUM_LOCK = 144;
      /** @type {?} */

      var SCROLL_LOCK = 145;
      /** @type {?} */

      var FIRST_MEDIA = 166;
      /** @type {?} */

      var FF_MINUS = 173;
      /** @type {?} */

      var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

      /** @type {?} */

      var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

      /** @type {?} */

      var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

      /** @type {?} */

      var FF_MUTE = 181;
      /** @type {?} */

      var FF_VOLUME_DOWN = 182;
      /** @type {?} */

      var LAST_MEDIA = 183;
      /** @type {?} */

      var FF_VOLUME_UP = 183;
      /** @type {?} */

      var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

      /** @type {?} */

      var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

      /** @type {?} */

      var COMMA = 188;
      /** @type {?} */

      var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

      /** @type {?} */

      var SLASH = 191;
      /** @type {?} */

      var APOSTROPHE = 192;
      /** @type {?} */

      var TILDE = 192;
      /** @type {?} */

      var OPEN_SQUARE_BRACKET = 219;
      /** @type {?} */

      var BACKSLASH = 220;
      /** @type {?} */

      var CLOSE_SQUARE_BRACKET = 221;
      /** @type {?} */

      var SINGLE_QUOTE = 222;
      /** @type {?} */

      var MAC_META = 224;
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Checks whether a modifier key is pressed.
       * @param {?} event Event to be checked.
       * @param {...?} modifiers
       * @return {?}
       */

      function hasModifierKey(event) {
        for (var _len = arguments.length, modifiers = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          modifiers[_key - 1] = arguments[_key];
        }

        if (modifiers.length) {
          return modifiers.some(
          /**
          * @param {?} modifier
          * @return {?}
          */
          function (modifier) {
            return event[modifier];
          });
        }

        return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=keycodes.js.map

      /***/

    },

    /***/
    "6KbF":
    /*!******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js ***!
      \******************************************************************/

    /*! exports provided: Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, BasePortalHost, DomPortalOutlet, DomPortalHost, CdkPortal, TemplatePortalDirective, CdkPortalOutlet, PortalHostDirective, PortalModule, PortalInjector */

    /***/
    function KbF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Portal", function () {
        return Portal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
        return ComponentPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
        return TemplatePortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
        return BasePortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
        return BasePortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
        return DomPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
        return DomPortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
        return CdkPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
        return TemplatePortalDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
        return CdkPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
        return PortalHostDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
        return PortalModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
        return PortalInjector;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Throws an exception when attempting to attach a null portal to a host.
       * \@docs-private
       * @return {?}
       */


      function throwNullPortalError() {
        throw Error('Must provide a portal to attach');
      }
      /**
       * Throws an exception when attempting to attach a portal to a host that is already attached.
       * \@docs-private
       * @return {?}
       */


      function throwPortalAlreadyAttachedError() {
        throw Error('Host already has a portal attached');
      }
      /**
       * Throws an exception when attempting to attach a portal to an already-disposed host.
       * \@docs-private
       * @return {?}
       */


      function throwPortalOutletAlreadyDisposedError() {
        throw Error('This PortalOutlet has already been disposed');
      }
      /**
       * Throws an exception when attempting to attach an unknown portal type.
       * \@docs-private
       * @return {?}
       */


      function throwUnknownPortalTypeError() {
        throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
      }
      /**
       * Throws an exception when attempting to attach a portal to a null host.
       * \@docs-private
       * @return {?}
       */


      function throwNullPortalOutletError() {
        throw Error('Attempting to attach a portal to a null PortalOutlet');
      }
      /**
       * Throws an exception when attempting to detach a portal that is not attached.
       * \@docs-private
       * @return {?}
       */


      function throwNoPortalAttachedError() {
        throw Error('Attempting to detach a portal that is not attached to a host');
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A `Portal` is something that you want to render somewhere else.
       * It can be attach to / detached from a `PortalOutlet`.
       * @abstract
       * @template T
       */


      var Portal = /*#__PURE__*/function () {
        function Portal() {
          _classCallCheck(this, Portal);
        }

        _createClass(Portal, [{
          key: "attach",

          /**
           * Attach this portal to a host.
           * @param {?} host
           * @return {?}
           */
          value: function attach(host) {
            if (host == null) {
              throwNullPortalOutletError();
            }

            if (host.hasAttached()) {
              throwPortalAlreadyAttachedError();
            }

            this._attachedHost = host;
            return (
              /** @type {?} */
              host.attach(this)
            );
          }
          /**
           * Detach this portal from its host
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            /** @type {?} */
            var host = this._attachedHost;

            if (host == null) {
              throwNoPortalAttachedError();
            } else {
              this._attachedHost = null;
              host.detach();
            }
          }
          /**
           * Whether this portal is attached to a host.
           * @return {?}
           */

        }, {
          key: "setAttachedHost",

          /**
           * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
           * the PortalOutlet when it is performing an `attach()` or `detach()`.
           * @param {?} host
           * @return {?}
           */
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
        }]);

        return Portal;
      }();
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       * @template T
       */


      var ComponentPortal = /*#__PURE__*/function (_Portal) {
        _inherits(ComponentPortal, _Portal);

        var _super2 = _createSuper(ComponentPortal);

        /**
         * @param {?} component
         * @param {?=} viewContainerRef
         * @param {?=} injector
         * @param {?=} componentFactoryResolver
         */
        function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
          var _this21;

          _classCallCheck(this, ComponentPortal);

          _this21 = _super2.call(this);
          _this21.component = component;
          _this21.viewContainerRef = viewContainerRef;
          _this21.injector = injector;
          _this21.componentFactoryResolver = componentFactoryResolver;
          return _this21;
        }

        return ComponentPortal;
      }(Portal);
      /**
       * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
       * @template C
       */


      var TemplatePortal = /*#__PURE__*/function (_Portal2) {
        _inherits(TemplatePortal, _Portal2);

        var _super3 = _createSuper(TemplatePortal);

        /**
         * @param {?} template
         * @param {?} viewContainerRef
         * @param {?=} context
         */
        function TemplatePortal(template, viewContainerRef, context) {
          var _this22;

          _classCallCheck(this, TemplatePortal);

          _this22 = _super3.call(this);
          _this22.templateRef = template;
          _this22.viewContainerRef = viewContainerRef;
          _this22.context = context;
          return _this22;
        }
        /**
         * @return {?}
         */


        _createClass(TemplatePortal, [{
          key: "attach",

          /**
           * Attach the portal to the provided `PortalOutlet`.
           * When a context is provided it will override the `context` property of the `TemplatePortal`
           * instance.
           * @param {?} host
           * @param {?=} context
           * @return {?}
           */
          value: function attach(host) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
            this.context = context;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
          }
          /**
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            this.context = undefined;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
          }
        }, {
          key: "origin",
          get: function get() {
            return this.templateRef.elementRef;
          }
        }]);

        return TemplatePortal;
      }(Portal);
      /**
       * Partial implementation of PortalOutlet that handles attaching
       * ComponentPortal and TemplatePortal.
       * @abstract
       */


      var BasePortalOutlet = /*#__PURE__*/function () {
        function BasePortalOutlet() {
          _classCallCheck(this, BasePortalOutlet);

          /**
           * Whether this host has already been permanently disposed.
           */
          this._isDisposed = false;
        }
        /**
         * Whether this host has an attached portal.
         * @return {?}
         */


        _createClass(BasePortalOutlet, [{
          key: "hasAttached",
          value: function hasAttached() {
            return !!this._attachedPortal;
          }
          /**
           * Attaches a portal.
           * @param {?} portal
           * @return {?}
           */

        }, {
          key: "attach",
          value: function attach(portal) {
            if (!portal) {
              throwNullPortalError();
            }

            if (this.hasAttached()) {
              throwPortalAlreadyAttachedError();
            }

            if (this._isDisposed) {
              throwPortalOutletAlreadyDisposedError();
            }

            if (portal instanceof ComponentPortal) {
              this._attachedPortal = portal;
              return this.attachComponentPortal(portal);
            } else if (portal instanceof TemplatePortal) {
              this._attachedPortal = portal;
              return this.attachTemplatePortal(portal);
            }

            throwUnknownPortalTypeError();
          }
          /**
           * Detaches a previously attached portal.
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost(null);

              this._attachedPortal = null;
            }

            this._invokeDisposeFn();
          }
          /**
           * Permanently dispose of this portal host.
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.hasAttached()) {
              this.detach();
            }

            this._invokeDisposeFn();

            this._isDisposed = true;
          }
          /**
           * \@docs-private
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_invokeDisposeFn",
          value: function _invokeDisposeFn() {
            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = null;
            }
          }
        }]);

        return BasePortalOutlet;
      }();
      /**
       * @deprecated Use `BasePortalOutlet` instead.
       * \@breaking-change 9.0.0
       * @abstract
       */


      var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
        _inherits(BasePortalHost, _BasePortalOutlet);

        var _super4 = _createSuper(BasePortalHost);

        function BasePortalHost() {
          _classCallCheck(this, BasePortalHost);

          return _super4.apply(this, arguments);
        }

        return BasePortalHost;
      }(BasePortalOutlet);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       */


      var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
        _inherits(DomPortalOutlet, _BasePortalOutlet2);

        var _super5 = _createSuper(DomPortalOutlet);

        /**
         * @param {?} outletElement
         * @param {?} _componentFactoryResolver
         * @param {?} _appRef
         * @param {?} _defaultInjector
         */
        function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
          var _this23;

          _classCallCheck(this, DomPortalOutlet);

          _this23 = _super5.call(this);
          _this23.outletElement = outletElement;
          _this23._componentFactoryResolver = _componentFactoryResolver;
          _this23._appRef = _appRef;
          _this23._defaultInjector = _defaultInjector;
          return _this23;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @template T
         * @param {?} portal Portal to be attached
         * @return {?} Reference to the created component.
         */


        _createClass(DomPortalOutlet, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            var _this24 = this;

            /** @type {?} */
            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            /** @type {?} */

            var componentFactory = resolver.resolveComponentFactory(portal.component);
            /** @type {?} */

            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the view to the application.

            if (portal.viewContainerRef) {
              componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
              this.setDisposeFn(
              /**
              * @return {?}
              */
              function () {
                return componentRef.destroy();
              });
            } else {
              componentRef = componentFactory.create(portal.injector || this._defaultInjector);

              this._appRef.attachView(componentRef.hostView);

              this.setDisposeFn(
              /**
              * @return {?}
              */
              function () {
                _this24._appRef.detachView(componentRef.hostView);

                componentRef.destroy();
              });
            } // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.


            this.outletElement.appendChild(this._getComponentRootNode(componentRef));
            return componentRef;
          }
          /**
           * Attaches a template portal to the DOM as an embedded view.
           * @template C
           * @param {?} portal Portal to be attached.
           * @return {?} Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this25 = this;

            /** @type {?} */
            var viewContainer = portal.viewContainerRef;
            /** @type {?} */

            var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
            viewRef.detectChanges(); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
            // But for the DomPortalOutlet the view can be added everywhere in the DOM
            // (e.g Overlay Container) To move the view to the specified host element. We just
            // re-append the existing root nodes.

            viewRef.rootNodes.forEach(
            /**
            * @param {?} rootNode
            * @return {?}
            */
            function (rootNode) {
              return _this25.outletElement.appendChild(rootNode);
            });
            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var index = viewContainer.indexOf(viewRef);

              if (index !== -1) {
                viewContainer.remove(index);
              }
            }); // TODO(jelbourn): Return locals from view.

            return viewRef;
          }
          /**
           * Clears out a portal from the DOM.
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

            if (this.outletElement.parentNode != null) {
              this.outletElement.parentNode.removeChild(this.outletElement);
            }
          }
          /**
           * Gets the root HTMLElement for an instantiated component.
           * @private
           * @param {?} componentRef
           * @return {?}
           */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return (
              /** @type {?} */

              /** @type {?} */
              componentRef.hostView.rootNodes[0]
            );
          }
        }]);

        return DomPortalOutlet;
      }(BasePortalOutlet);
      /**
       * @deprecated Use `DomPortalOutlet` instead.
       * \@breaking-change 9.0.0
       */


      var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
        _inherits(DomPortalHost, _DomPortalOutlet);

        var _super6 = _createSuper(DomPortalHost);

        function DomPortalHost() {
          _classCallCheck(this, DomPortalHost);

          return _super6.apply(this, arguments);
        }

        return DomPortalHost;
      }(DomPortalOutlet);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
       * the directive instance itself can be attached to a host, enabling declarative use of portals.
       */


      var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
        _inherits(CdkPortal, _TemplatePortal);

        var _super7 = _createSuper(CdkPortal);

        /**
         * @param {?} templateRef
         * @param {?} viewContainerRef
         */
        function CdkPortal(templateRef, viewContainerRef) {
          _classCallCheck(this, CdkPortal);

          return _super7.call(this, templateRef, viewContainerRef);
        }

        return CdkPortal;
      }(TemplatePortal);

      CdkPortal.ɵfac = function CdkPortal_Factory(t) {
        return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortal,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      CdkPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortal]',
            exportAs: 'cdkPortal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, null);
      })();
      /**
       * @deprecated Use `CdkPortal` instead.
       * \@breaking-change 9.0.0
       */


      var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
        _inherits(TemplatePortalDirective, _CdkPortal);

        var _super8 = _createSuper(TemplatePortalDirective);

        function TemplatePortalDirective() {
          _classCallCheck(this, TemplatePortalDirective);

          return _super8.apply(this, arguments);
        }

        return TemplatePortalDirective;
      }(CdkPortal);

      TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
        return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
      };

      TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TemplatePortalDirective,
        selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortal,
          useExisting: TemplatePortalDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵTemplatePortalDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdk-portal], [portal]',
            exportAs: 'cdkPortal',
            providers: [{
              provide: CdkPortal,
              useExisting: TemplatePortalDirective
            }]
          }]
        }], null, null);
      })();
      /**
       * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
       * directly attached to it, enabling declarative use.
       *
       * Usage:
       * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
       */


      var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
        _inherits(CdkPortalOutlet, _BasePortalOutlet3);

        var _super9 = _createSuper(CdkPortalOutlet);

        /**
         * @param {?} _componentFactoryResolver
         * @param {?} _viewContainerRef
         */
        function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
          var _this26;

          _classCallCheck(this, CdkPortalOutlet);

          _this26 = _super9.call(this);
          _this26._componentFactoryResolver = _componentFactoryResolver;
          _this26._viewContainerRef = _viewContainerRef;
          /**
           * Whether the portal component is initialized.
           */

          _this26._isInitialized = false;
          /**
           * Emits when a portal is attached to the outlet.
           */

          _this26.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this26;
        }
        /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */


        _createClass(CdkPortalOutlet, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            this._isInitialized = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

            this._attachedPortal = null;
            this._attachedRef = null;
          }
          /**
           * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
           *
           * @template T
           * @param {?} portal Portal to be attached to the portal outlet.
           * @return {?} Reference to the created component.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.

            /** @type {?} */

            var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
            /** @type {?} */

            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            /** @type {?} */

            var componentFactory = resolver.resolveComponentFactory(portal.component);
            /** @type {?} */

            var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
            /**
            * @return {?}
            */
            function () {
              return ref.destroy();
            });

            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
          }
          /**
           * Attach the given TemplatePortal to this PortlHost as an embedded View.
           * @template C
           * @param {?} portal Portal to be attached.
           * @return {?} Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this27 = this;

            portal.setAttachedHost(this);
            /** @type {?} */

            var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
            /**
            * @return {?}
            */
            function () {
              return _this27._viewContainerRef.clear();
            });

            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
          }
        }, {
          key: "portal",
          get: function get() {
            return this._attachedPortal;
          }
          /**
           * @param {?} portal
           * @return {?}
           */
          ,
          set: function set(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
              return;
            }

            if (this.hasAttached()) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
            }

            if (portal) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
            }

            this._attachedPortal = portal;
          }
          /**
           * Component or view reference that is attached to the portal.
           * @return {?}
           */

        }, {
          key: "attachedRef",
          get: function get() {
            return this._attachedRef;
          }
        }]);

        return CdkPortalOutlet;
      }(BasePortalOutlet);

      CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
        return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortalOutlet,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
          portal: ["cdkPortalOutlet", "portal"]
        },
        outputs: {
          attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      CdkPortalOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };

      CdkPortalOutlet.propDecorators = {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalOutlet]',
            exportAs: 'cdkPortalOutlet',
            inputs: ['portal: cdkPortalOutlet']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, {
          attached: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * @deprecated Use `CdkPortalOutlet` instead.
       * \@breaking-change 9.0.0
       */


      var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
        _inherits(PortalHostDirective, _CdkPortalOutlet);

        var _super10 = _createSuper(PortalHostDirective);

        function PortalHostDirective() {
          _classCallCheck(this, PortalHostDirective);

          return _super10.apply(this, arguments);
        }

        return PortalHostDirective;
      }(CdkPortalOutlet);

      PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
        return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
      };

      PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PortalHostDirective,
        selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
        inputs: {
          portal: ["cdkPortalHost", "portal"]
        },
        exportAs: ["cdkPortalHost"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortalOutlet,
          useExisting: PortalHostDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵPortalHostDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalHost], [portalHost]',
            exportAs: 'cdkPortalHost',
            inputs: ['portal: cdkPortalHost'],
            providers: [{
              provide: CdkPortalOutlet,
              useExisting: PortalHostDirective
            }]
          }]
        }], null, null);
      })();

      var PortalModule = function PortalModule() {
        _classCallCheck(this, PortalModule);
      };

      PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PortalModule
      });
      PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PortalModule_Factory(t) {
          return new (t || PortalModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
            declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Custom injector to be used when providing custom
       * injection tokens to components inside a portal.
       * \@docs-private
       */


      var PortalInjector = /*#__PURE__*/function () {
        /**
         * @param {?} _parentInjector
         * @param {?} _customTokens
         */
        function PortalInjector(_parentInjector, _customTokens) {
          _classCallCheck(this, PortalInjector);

          this._parentInjector = _parentInjector;
          this._customTokens = _customTokens;
        }
        /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */


        _createClass(PortalInjector, [{
          key: "get",
          value: function get(token, notFoundValue) {
            /** @type {?} */
            var value = this._customTokens.get(token);

            if (typeof value !== 'undefined') {
              return value;
            }

            return this._parentInjector.get(token, notFoundValue);
          }
        }]);

        return PortalInjector;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=portal.js.map

      /***/

    },

    /***/
    "Bdq1":
    /*!***************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/cdk.js ***!
      \***************************************************************/

    /*! exports provided: VERSION */

    /***/
    function Bdq1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Current version of the Angular Component Development Kit.
       * @type {?}
       */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=cdk.js.map

      /***/
    },

    /***/
    "FWMu":
    /*!****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js ***!
      \****************************************************************/

    /*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */

    /***/
    function FWMu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Directionality", function () {
        return Directionality;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
        return DIR_DOCUMENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dir", function () {
        return Dir;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
        return BidiModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return DIR_DOCUMENT_FACTORY;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Injection token used to inject the document into Directionality.
       * This is used so that the value can be faked in tests.
       *
       * We can't use the real document in tests because changing the real `dir` causes geometry-based
       * tests in Safari to fail.
       *
       * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
       * themselves use things like `querySelector` in test code.
       *
       * This token is defined in a separate file from Directionality as a workaround for
       * https://github.com/angular/angular/issues/22559
       *
       * \@docs-private
       * @type {?}
       */


      var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
        providedIn: 'root',
        factory: DIR_DOCUMENT_FACTORY
      });
      /**
       * \@docs-private
       * @return {?}
       */

      function DIR_DOCUMENT_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The directionality (LTR / RTL) context for the application (or a subtree of it).
       * Exposes the current direction and a stream of direction changes.
       */


      var Directionality = /*#__PURE__*/function () {
        /**
         * @param {?=} _document
         */
        function Directionality(_document) {
          _classCallCheck(this, Directionality);

          /**
           * The current 'ltr' or 'rtl' value.
           */
          this.value = 'ltr';
          /**
           * Stream that emits whenever the 'ltr' / 'rtl' state changes.
           */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */

            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */

            var value = bodyDir || htmlDir;
            this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
          }
        }
        /**
         * @return {?}
         */


        _createClass(Directionality, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return Directionality;
      }();

      Directionality.ɵfac = function Directionality_Factory(t) {
        return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DIR_DOCUMENT, 8));
      };

      Directionality.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Directionality,
        factory: Directionality.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      Directionality.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      };
      /** @nocollapse */


      Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function Directionality_Factory() {
          return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8));
        },
        token: Directionality,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Directionality, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [DIR_DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Directive to listen for changes of direction of part of the DOM.
       *
       * Provides itself as Directionality such that descendant directives only need to ever inject
       * Directionality to get the closest direction.
       */


      var Dir = /*#__PURE__*/function () {
        function Dir() {
          _classCallCheck(this, Dir);

          /**
           * Normalized direction that accounts for invalid/unsupported values.
           */
          this._dir = 'ltr';
          /**
           * Whether the `value` has been set to its initial value.
           */

          this._isInitialized = false;
          /**
           * Event emitted when the direction changes.
           */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * \@docs-private
         * @return {?}
         */


        _createClass(Dir, [{
          key: "ngAfterContentInit",

          /**
           * Initialize once default value has been set.
           * @return {?}
           */
          value: function ngAfterContentInit() {
            this._isInitialized = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }, {
          key: "dir",
          get: function get() {
            return this._dir;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var old = this._dir;
            /** @type {?} */

            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

            if (old !== this._dir && this._isInitialized) {
              this.change.emit(this._dir);
            }
          }
          /**
           * Current layout direction of the element.
           * @return {?}
           */

        }, {
          key: "value",
          get: function get() {
            return this.dir;
          }
        }]);

        return Dir;
      }();

      Dir.ɵfac = function Dir_Factory(t) {
        return new (t || Dir)();
      };

      Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: Dir,
        selectors: [["", "dir", ""]],
        hostVars: 1,
        hostBindings: function Dir_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("dir", ctx._rawDir);
          }
        },
        inputs: {
          dir: "dir"
        },
        outputs: {
          change: "dirChange"
        },
        exportAs: ["dir"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: Directionality,
          useExisting: Dir
        }])]
      });
      Dir.propDecorators = {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Dir, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[dir]',
            providers: [{
              provide: Directionality,
              useExisting: Dir
            }],
            host: {
              '[attr.dir]': '_rawDir'
            },
            exportAs: 'dir'
          }]
        }], function () {
          return [];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['dirChange']
          }],
          dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BidiModule = function BidiModule() {
        _classCallCheck(this, BidiModule);
      };

      BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: BidiModule
      });
      BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function BidiModule_Factory(t) {
          return new (t || BidiModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BidiModule, {
          declarations: [Dir],
          exports: [Dir]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BidiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [Dir],
            declarations: [Dir]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=bidi.js.map

      /***/

    },

    /***/
    "IRfi":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js ***!
      \***************************************************************************/

    /*! exports provided: MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */

    /***/
    function IRfi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
        return MatFormFieldModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatError", function () {
        return MatError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
        return MAT_FORM_FIELD_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
        return MatFormField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
        return MatFormFieldControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
        return getMatFormFieldPlaceholderConflictError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
        return getMatFormFieldDuplicatedHintError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
        return getMatFormFieldMissingControlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHint", function () {
        return MatHint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
        return MatPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
        return MatPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
        return MatSuffix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
        return MatLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
        return matFormFieldAnimations;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "FWMu");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "dEu6");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "j14s");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "LSvS");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "2dEz");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _c0 = ["underline"];
      var _c1 = ["connectionContainer"];
      var _c2 = ["inputContainer"];
      var _c3 = ["label"];

      function MatFormField_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MatFormField_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
        }
      }

      function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
        }
      }

      function MatFormField_label_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.updateOutlineGap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat)("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
        }
      }

      function MatFormField_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
        }
      }

      function MatFormField_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
        }
      }

      function MatFormField_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
        }
      }

      function MatFormField_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
        }
      }

      var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
      var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
      var nextUniqueId = 0;
      /**
       * Single error message to be shown underneath the form field.
       */

      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        }
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            }
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Animations used by the MatFormField.
       * \@docs-private
       * @type {?}
       */


      var matFormFieldAnimations = {
        /**
         * Animation that transitions the form field's error and hint messages.
         */
        transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * An interface which allows a control to work inside of a `MatFormField`.
       * @abstract
       * @template T
       */

      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@docs-private
       * @return {?}
       */


      function getMatFormFieldPlaceholderConflictError() {
        return Error('Placeholder attribute and child element were both specified.');
      }
      /**
       * \@docs-private
       * @param {?} align
       * @return {?}
       */


      function getMatFormFieldDuplicatedHintError(align) {
        return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
      }
      /**
       * \@docs-private
       * @return {?}
       */


      function getMatFormFieldMissingControlError() {
        return Error('mat-form-field must contain a MatFormFieldControl.');
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var nextUniqueId$1 = 0;
      /**
       * Hint text to be shown underneath the form field control.
       */

      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-right", ctx.align == "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        }
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-right]': 'align == "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            }
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The floating label for a `mat-form-field`.
       */


      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-label'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The placeholder text for an `MatFormField`.
       * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
       *     placeholder.
       * \@breaking-change 8.0.0
       */


      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-placeholder'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Prefix to be placed in front of the form field.
       */


      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matPrefix]'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Suffix to be placed at the end of the form field.
       */


      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matSuffix]'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var nextUniqueId$2 = 0;
      /** @type {?} */

      var floatingLabelScale = 0.75;
      /** @type {?} */

      var outlineGapPadding = 5;
      /**
       * Boilerplate for applying mixins to MatFormField.
       * \@docs-private
       */

      var MatFormFieldBase =
      /**
       * @param {?} _elementRef
       */
      function MatFormFieldBase(_elementRef) {
        _classCallCheck(this, MatFormFieldBase);

        this._elementRef = _elementRef;
      };
      /**
       * Base class to which we're applying the form field mixins.
       * \@docs-private
       * @type {?}
       */


      var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatFormFieldBase, 'primary');
      /**
       * Injection token that can be used to configure the
       * default options for all form field within an app.
       * @type {?}
       */


      var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      /**
       * Container for form controls that applies Material Design styling and behavior.
       */

      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super11 = _createSuper(MatFormField);

        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         * @param {?} labelOptions
         * @param {?} _dir
         * @param {?} _defaults
         * @param {?} _platform
         * @param {?} _ngZone
         * @param {?} _animationMode
         */
        function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this28;

          _classCallCheck(this, MatFormField);

          _this28 = _super11.call(this, _elementRef);
          _this28._elementRef = _elementRef;
          _this28._changeDetectorRef = _changeDetectorRef;
          _this28._dir = _dir;
          _this28._defaults = _defaults;
          _this28._platform = _platform;
          _this28._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this28._outlineGapCalculationNeededImmediately = false;
          /**
           * Whether the outline gap needs to be calculated next time the zone has stabilized.
           */

          _this28._outlineGapCalculationNeededOnStable = false;
          _this28._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Override for the logic that disables the label animation in certain cases.
           */

          _this28._showAlwaysAnimate = false;
          /**
           * State of the mat-hint and mat-error animations.
           */

          _this28._subscriptAnimationState = '';
          _this28._hintLabel = ''; // Unique id for the hint label.

          _this28._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

          _this28._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          /* Holds the previous direction emitted by directionality service change emitter.
               This is used in updateOutlineGap() method to update the width and position of the gap in the
               outline. Only relevant for the outline appearance. The direction is getting updated in the
               UI after directionality service change emission. So the outlines gaps are getting
               updated in updateOutlineGap() method before connectionContainer child direction change
               in UI. We may get wrong calculations. So we are storing the previous direction to get the
               correct outline calculations*/

          _this28._previousDirection = 'ltr';
          _this28._labelOptions = labelOptions ? labelOptions : {};
          _this28.floatLabel = _this28._labelOptions["float"] || 'auto';
          _this28._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this28.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this28._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this28;
        }
        /**
         * The form-field appearance style.
         * @return {?}
         */


        _createClass(MatFormField, [{
          key: "getConnectedOverlayOrigin",

          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           * @return {?}
           */
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this29 = this;

            this._validateControlChild();
            /** @type {?} */


            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(
            /** @type {?} */
            null)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this29._validatePlaceholders();

              _this29._syncDescribedByIds();

              _this29._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this29._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this29._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this29._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this29._outlineGapCalculationNeededOnStable) {
                  _this29.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this29._outlineGapCalculationNeededOnStable = true;

              _this29._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this29._processHints();

              _this29._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this29._syncDescribedByIds();

              _this29._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this29.updateOutlineGap();

                _this29._previousDirection = _this29._dir.value;
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Determines whether a class from the NgControl should be forwarded to the host element.
           * @param {?} prop
           * @return {?}
           */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            /** @type {?} */
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!this._labelChild;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
          /**
           * @return {?}
           */

        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /**
           * Determines whether to display hints or errors.
           * @return {?}
           */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /**
           * Animates the placeholder up and locks it in position.
           * @return {?}
           */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this30 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  _this30._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           * @private
           * @return {?}
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /**
           * Does any extra processing that is required when handling the hints.
           * @private
           * @return {?}
           */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           * @private
           * @return {?}
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this31 = this;

            if (this._hintChildren) {
              /** @type {?} */
              var startHint;
              /** @type {?} */

              var endHint;

              this._hintChildren.forEach(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this31.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           * @private
           * @return {?}
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              /** @type {?} */
              var ids = [];

              if (this._getDisplayedMessages() === 'hint') {
                /** @type {?} */
                var startHint = this._hintChildren ? this._hintChildren.find(
                /**
                * @param {?} hint
                * @return {?}
                */
                function (hint) {
                  return hint.align === 'start';
                }) : null;
                /** @type {?} */

                var endHint = this._hintChildren ? this._hintChildren.find(
                /**
                * @param {?} hint
                * @return {?}
                */
                function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids = this._errorChildren.map(
                /**
                * @param {?} error
                * @return {?}
                */
                function (error) {
                  return error.id;
                });
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /**
           * Throws an error if the form field's control is missing.
           * @protected
           * @return {?}
           */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           * @return {?}
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            /** @type {?} */
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!
            /** @type {?} */
            document.documentElement.contains(this._elementRef.nativeElement)) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }
            /** @type {?} */


            var startWidth = 0;
            /** @type {?} */

            var gapWidth = 0;
            /** @type {?} */

            var container = this._connectionContainerRef.nativeElement;
            /** @type {?} */

            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            /** @type {?} */

            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              /** @type {?} */
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }
              /** @type {?} */


              var containerStart = this._getStartEnd(containerRect);
              /** @type {?} */


              var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
              /** @type {?} */


              var labelWidth = 0;

              var _iterator3 = _createForOfIteratorHelper(labelEl.children),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var child = _step3.value;
                  labelWidth += child.offsetWidth;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              startWidth = labelStart - containerStart - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var i = 0; i < startEls.length; i++) {
              startEls.item(i).style.width = "".concat(startWidth, "px");
            }

            for (var _i2 = 0; _i2 < gapEls.length; _i2++) {
              gapEls.item(_i2).style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /**
           * Gets the start end of the rect considering the current directionality.
           * @private
           * @param {?} rect
           * @return {?}
           */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._previousDirection === 'rtl' ? rect.right : rect.left;
          }
        }, {
          key: "appearance",
          get: function get() {
            return this._appearance;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /**
           * Whether the required marker should be hidden.
           * @return {?}
           */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the floating label should always float or not.
           * @return {?}
           */

        }, {
          key: "_shouldAlwaysFloat",
          get: function get() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /**
           * Whether the label can float or not.
           * @return {?}
           */

        }, {
          key: "_canLabelFloat",
          get: function get() {
            return this.floatLabel !== 'never';
          }
          /**
           * Text for the form field hint.
           * @return {?}
           */

        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
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
           * @return {?}
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._labelOptions["float"] || 'auto';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this hacky workaround in order to support both Ivy
            // and ViewEngine. We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_labelChild",
          get: function get() {
            return this._labelChildNonStatic || this._labelChildStatic;
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatError, false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatHint, false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatPrefix, false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatSuffix, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 44,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat)("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });
      /** @nocollapse */

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['underline', {
            "static": false
          }]
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputContainer', {
            "static": false
          }]
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['label', {
            "static": false
          }]
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": false
          }]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [MatLabel, {
            "static": false
          }]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [MatPlaceholder, {
            "static": false
          }]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatError]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatHint]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatPrefix]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatSuffix]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content><span>{{_control.placeholder}}</span></ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
            // MatInput is a directive and can't have styles, so we need to include its styles here
            // in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
            // big deal for people who aren't using MatInput.
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.mat-accent]': 'color == "accent"',
              '[class.mat-warn]': 'color == "warn"',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['underline', {
              "static": false
            }]
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputContainer', {
              "static": false
            }]
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['label', {
              "static": false
            }]
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": false
            }]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [MatLabel, {
              "static": false
            }]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [MatPlaceholder, {
              "static": false
            }]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatError]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatHint]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatPrefix]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatSuffix]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"]];
          },
          exports: function exports() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"]],
            exports: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=form-field.js.map

      /***/

    },

    /***/
    "LSvS":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js ***!
      \********************************************************************/

    /*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */

    /***/
    function LSvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Platform", function () {
        return Platform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
        return PlatformModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
        return getSupportedInputTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
        return supportsPassiveEventListeners;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
        return normalizePassiveListenerOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
        return supportsScrollBehavior;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
        return getRtlScrollAxisType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function () {
        return RtlScrollAxisType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
        return _supportsShadowDom;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Whether the current platform supports the V8 Break Iterator. The V8 check
      // is necessary to detect all Blink based browsers.

      /** @type {?} */


      var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        hasV8BreakIterator = typeof Intl !== 'undefined' &&
        /** @type {?} */
        Intl.v8BreakIterator;
      } catch (_a) {
        hasV8BreakIterator = false;
      }
      /**
       * Service to detect the current platform by comparing the userAgent strings and
       * checking browser-specific global properties.
       */


      var Platform =
      /**
       * \@breaking-change 8.0.0 remove optional decorator
       * @param {?=} _platformId
       */
      function Platform(_platformId) {
        _classCallCheck(this, Platform);

        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */

        this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */

        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */

        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

        this.BLINK = this.isBrowser && !!(
        /** @type {?} */
        window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.

        this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */

        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.

        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.

        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.

        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      };

      Platform.ɵfac = function Platform_Factory(t) {
        return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
      };

      Platform.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Platform,
        factory: Platform.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      Platform.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };
      /** @nocollapse */


      Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Platform_Factory() {
          return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
        },
        token: Platform,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PlatformModule = function PlatformModule() {
        _classCallCheck(this, PlatformModule);
      };

      PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PlatformModule
      });
      PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PlatformModule_Factory(t) {
          return new (t || PlatformModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Cached result Set of input types support by the current browser.
       * @type {?}
       */


      var supportedInputTypes;
      /**
       * Types of `<input>` that *might* be supported.
       * @type {?}
       */

      var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
      // first changing it to something else:
      // The specified value "" does not conform to the required format.
      // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
      'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
      /**
       * @return {?} The input types supported by this browser.
       */

      function getSupportedInputTypes() {
        // Result is cached.
        if (supportedInputTypes) {
          return supportedInputTypes;
        } // We can't check if an input type is not supported until we're on the browser, so say that
        // everything is supported when not on the browser. We don't use `Platform` here since it's
        // just a helper function and can't inject it.


        if (typeof document !== 'object' || !document) {
          supportedInputTypes = new Set(candidateInputTypes);
          return supportedInputTypes;
        }
        /** @type {?} */


        var featureTestInput = document.createElement('input');
        supportedInputTypes = new Set(candidateInputTypes.filter(
        /**
        * @param {?} value
        * @return {?}
        */
        function (value) {
          featureTestInput.setAttribute('type', value);
          return featureTestInput.type === value;
        }));
        return supportedInputTypes;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Cached result of whether the user's browser supports passive event listeners.
       * @type {?}
       */


      var supportsPassiveEvents;
      /**
       * Checks whether the user's browser supports passive event listeners.
       * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
       * @return {?}
       */

      function supportsPassiveEventListeners() {
        if (supportsPassiveEvents == null && typeof window !== 'undefined') {
          try {
            window.addEventListener('test',
            /** @type {?} */
            null, Object.defineProperty({}, 'passive', {
              get:
              /**
              * @return {?}
              */
              function get() {
                return supportsPassiveEvents = true;
              }
            }));
          } finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
          }
        }

        return supportsPassiveEvents;
      }
      /**
       * Normalizes an `AddEventListener` object to something that can be passed
       * to `addEventListener` on any browser, no matter whether it supports the
       * `options` parameter.
       * @param {?} options Object to be normalized.
       * @return {?}
       */


      function normalizePassiveListenerOptions(options) {
        return supportsPassiveEventListeners() ? options : !!options.capture;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @enum {number} */


      var RtlScrollAxisType = {
        /**
         * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
         * all the way right.
         */
        NORMAL: 0,

        /**
         * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
         * all the way right.
         */
        NEGATED: 1,

        /**
         * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
         * all the way right.
         */
        INVERTED: 2
      };
      RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
      RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
      RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
      /**
       * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
       * @type {?}
       */

      var rtlScrollAxisType;
      /**
       * Check whether the browser supports scroll behaviors.
       * @return {?}
       */

      function supportsScrollBehavior() {
        return !!(typeof document == 'object' && 'scrollBehavior' in
        /** @type {?} */
        document.documentElement.style);
      }
      /**
       * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
       * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
       * @return {?}
       */


      function getRtlScrollAxisType() {
        // We can't check unless we're on the browser. Just assume 'normal' if we're not.
        if (typeof document !== 'object' || !document) {
          return RtlScrollAxisType.NORMAL;
        }

        if (!rtlScrollAxisType) {
          // Create a 1px wide scrolling container and a 2px wide content element.

          /** @type {?} */
          var scrollContainer = document.createElement('div');
          /** @type {?} */

          var containerStyle = scrollContainer.style;
          scrollContainer.dir = 'rtl';
          containerStyle.height = '1px';
          containerStyle.width = '1px';
          containerStyle.overflow = 'auto';
          containerStyle.visibility = 'hidden';
          containerStyle.pointerEvents = 'none';
          containerStyle.position = 'absolute';
          /** @type {?} */

          var content = document.createElement('div');
          /** @type {?} */

          var contentStyle = content.style;
          contentStyle.width = '2px';
          contentStyle.height = '1px';
          scrollContainer.appendChild(content);
          document.body.appendChild(scrollContainer);
          rtlScrollAxisType = RtlScrollAxisType.NORMAL; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
          // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
          // dealing with one of the other two types of browsers.

          if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
          }

          /** @type {?} */
          scrollContainer.parentNode.removeChild(scrollContainer);
        }

        return rtlScrollAxisType;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var shadowDomIsSupported;
      /**
       * Checks whether the user's browser support Shadow DOM.
       * @return {?}
       */

      function _supportsShadowDom() {
        if (shadowDomIsSupported == null) {
          /** @type {?} */
          var head = typeof document !== 'undefined' ? document.head : null;
          shadowDomIsSupported = !!(head && (
          /** @type {?} */
          head.createShadowRoot || head.attachShadow));
        }

        return shadowDomIsSupported;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=platform.js.map

      /***/

    },

    /***/
    "NGqq":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/esm2015/autocomplete.js ***!
      \*****************************************************************************/

    /*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin */

    /***/
    function NGqq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
        return MatAutocompleteSelectedEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
        return MatAutocomplete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
        return MatAutocompleteModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
        return getMatAutocompleteMissingPanelError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
        return AUTOCOMPLETE_OPTION_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
        return AUTOCOMPLETE_PANEL_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
        return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
        return MatAutocompleteTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
        return MatAutocompleteOrigin;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "tkJt");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "dEu6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "j14s");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "FWMu");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "3+Bf");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "OCB9");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "LSvS");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "6KbF");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "+J/9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Autocomplete IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       * @type {?}
       */


      var _c0 = ["panel"];

      function MatAutocomplete_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
        }
      }

      var _c1 = ["*"];
      var _uniqueAutocompleteIdCounter = 0;
      /**
       * Event object that is emitted when an autocomplete option is selected.
       */

      var MatAutocompleteSelectedEvent =
      /**
       * @param {?} source
       * @param {?} option
       */
      function MatAutocompleteSelectedEvent(source, option) {
        _classCallCheck(this, MatAutocompleteSelectedEvent);

        this.source = source;
        this.option = option;
      }; // Boilerplate for applying mixins to MatAutocomplete.

      /**
       * \@docs-private
       */


      var MatAutocompleteBase = function MatAutocompleteBase() {
        _classCallCheck(this, MatAutocompleteBase);
      };
      /** @type {?} */


      var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
      /**
       * Injection token to be used to override the default options for `mat-autocomplete`.
       * @type {?}
       */


      var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
        providedIn: 'root',
        factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
      });
      /**
       * \@docs-private
       * @return {?}
       */

      function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
        return {
          autoActiveFirstOption: false
        };
      }

      var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteMixin) {
        _inherits(MatAutocomplete, _MatAutocompleteMixin);

        var _super12 = _createSuper(MatAutocomplete);

        /**
         * @param {?} _changeDetectorRef
         * @param {?} _elementRef
         * @param {?} defaults
         */
        function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
          var _this32;

          _classCallCheck(this, MatAutocomplete);

          _this32 = _super12.call(this);
          _this32._changeDetectorRef = _changeDetectorRef;
          _this32._elementRef = _elementRef;
          /**
           * Whether the autocomplete panel should be visible, depending on option length.
           */

          _this32.showPanel = false;
          _this32._isOpen = false;
          /**
           * Function that maps an option's control value to its display value in the trigger.
           */

          _this32.displayWith = null;
          /**
           * Event that is emitted whenever an option from the list is selected.
           */

          _this32.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that is emitted when the autocomplete panel is opened.
           */

          _this32.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that is emitted when the autocomplete panel is closed.
           */

          _this32.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this32._classList = {};
          /**
           * Unique ID to be used by autocomplete trigger's "aria-owns" property.
           */

          _this32.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
          _this32._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
          return _this32;
        }
        /**
         * Whether the autocomplete panel is open.
         * @return {?}
         */


        _createClass(MatAutocomplete, [{
          key: "ngAfterContentInit",

          /**
           * @return {?}
           */
          value: function ngAfterContentInit() {
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap(); // Set the initial visibility state.

            this._setVisibility();
          }
          /**
           * Sets the panel scrollTop. This allows us to manually scroll to display options
           * above or below the fold, as they are not actually being focused when active.
           * @param {?} scrollTop
           * @return {?}
           */

        }, {
          key: "_setScrollTop",
          value: function _setScrollTop(scrollTop) {
            if (this.panel) {
              this.panel.nativeElement.scrollTop = scrollTop;
            }
          }
          /**
           * Returns the panel's scrollTop.
           * @return {?}
           */

        }, {
          key: "_getScrollTop",
          value: function _getScrollTop() {
            return this.panel ? this.panel.nativeElement.scrollTop : 0;
          }
          /**
           * Panel should hide itself when the option list is empty.
           * @return {?}
           */

        }, {
          key: "_setVisibility",
          value: function _setVisibility() {
            this.showPanel = !!this.options.length;

            this._setVisibilityClasses(this._classList);

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Emits the `select` event.
           * @param {?} option
           * @return {?}
           */

        }, {
          key: "_emitSelectEvent",
          value: function _emitSelectEvent(option) {
            /** @type {?} */
            var event = new MatAutocompleteSelectedEvent(this, option);
            this.optionSelected.emit(event);
          }
          /**
           * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
           * @private
           * @param {?} classList
           * @return {?}
           */

        }, {
          key: "_setVisibilityClasses",
          value: function _setVisibilityClasses(classList) {
            classList['mat-autocomplete-visible'] = this.showPanel;
            classList['mat-autocomplete-hidden'] = !this.showPanel;
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this._isOpen && this.showPanel;
          }
          /**
           * Whether the first option should be highlighted when the autocomplete panel is opened.
           * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
           * @return {?}
           */

        }, {
          key: "autoActiveFirstOption",
          get: function get() {
            return this._autoActiveFirstOption;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * Takes classes set on the host mat-autocomplete element and applies them to the panel
           * inside the overlay container to allow for easy styling.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "classList",
          set: function set(value) {
            if (value && value.length) {
              this._classList = value.split(' ').reduce(
              /**
              * @param {?} classList
              * @param {?} className
              * @return {?}
              */
              function (classList, className) {
                classList[className.trim()] = true;
                return classList;
              },
              /** @type {?} */
              {});
            } else {
              this._classList = {};
            }

            this._setVisibilityClasses(this._classList);

            this._elementRef.nativeElement.className = '';
          }
        }]);

        return MatAutocomplete;
      }(_MatAutocompleteMixinBase);

      MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) {
        return new (t || MatAutocomplete)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS));
      };

      MatAutocomplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatAutocomplete,
        selectors: [["mat-autocomplete"]],
        contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
          }
        },
        viewQuery: function MatAutocomplete_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          }
        },
        hostAttrs: [1, "mat-autocomplete"],
        inputs: {
          disableRipple: "disableRipple",
          displayWith: "displayWith",
          autoActiveFirstOption: "autoActiveFirstOption",
          classList: ["class", "classList"],
          panelWidth: "panelWidth"
        },
        outputs: {
          optionSelected: "optionSelected",
          opened: "opened",
          closed: "closed"
        },
        exportAs: ["matAutocomplete"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatAutocomplete
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
        template: function MatAutocomplete_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]],
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatAutocomplete.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatAutocomplete.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
            "static": true
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel', {
            "static": false
          }]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        autoActiveFirstOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        panelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        optionSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['class']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocomplete, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-autocomplete',
            template: "<ng-template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel><ng-content></ng-content></div></ng-template>",
            styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            exportAs: 'matAutocomplete',
            inputs: ['disableRipple'],
            host: {
              'class': 'mat-autocomplete'
            },
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
              useExisting: MatAutocomplete
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['class']
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
              "static": true
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel', {
              "static": false
            }]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
              descendants: true
            }]
          }],
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]
          }],
          panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Directive applied to an element to make it usable
       * as a connection point for an autocomplete panel.
       */


      var MatAutocompleteOrigin =
      /**
       * @param {?} elementRef
       */
      function MatAutocompleteOrigin(elementRef) {
        _classCallCheck(this, MatAutocompleteOrigin);

        this.elementRef = elementRef;
      };

      MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) {
        return new (t || MatAutocompleteOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      MatAutocompleteOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteOrigin,
        selectors: [["", "matAutocompleteOrigin", ""]],
        exportAs: ["matAutocompleteOrigin"]
      });
      /** @nocollapse */

      MatAutocompleteOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matAutocompleteOrigin]',
            exportAs: 'matAutocompleteOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The height of each autocomplete option.
       * @type {?}
       */


      var AUTOCOMPLETE_OPTION_HEIGHT = 48;
      /**
       * The total height of the autocomplete panel.
       * @type {?}
       */

      var AUTOCOMPLETE_PANEL_HEIGHT = 256;
      /**
       * Injection token that determines the scroll handling while the autocomplete panel is open.
       * @type {?}
       */

      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
      /**
       * \@docs-private
       * @param {?} overlay
       * @return {?}
       */

      function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
        return (
          /**
          * @return {?}
          */
          function () {
            return overlay.scrollStrategies.reposition();
          }
        );
      }
      /**
       * \@docs-private
       * @type {?}
       */


      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
        useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Provider that allows the autocomplete to register as a ControlValueAccessor.
       * \@docs-private
       * @type {?}
       */

      var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatAutocompleteTrigger;
        }),
        multi: true
      };
      /**
       * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
       * \@docs-private
       * @return {?}
       */

      function getMatAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
      }

      var MatAutocompleteTrigger = /*#__PURE__*/function () {
        /**
         * @param {?} _element
         * @param {?} _overlay
         * @param {?} _viewContainerRef
         * @param {?} _zone
         * @param {?} _changeDetectorRef
         * @param {?} scrollStrategy
         * @param {?} _dir
         * @param {?} _formField
         * @param {?} _document
         * @param {?=} _viewportRuler
         */
        function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
          var _this33 = this;

          _classCallCheck(this, MatAutocompleteTrigger);

          this._element = _element;
          this._overlay = _overlay;
          this._viewContainerRef = _viewContainerRef;
          this._zone = _zone;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._formField = _formField;
          this._document = _document;
          this._viewportRuler = _viewportRuler;
          this._componentDestroyed = false;
          this._autocompleteDisabled = false;
          /**
           * Whether or not the label state is being overridden.
           */

          this._manuallyFloatingLabel = false;
          /**
           * Subscription to viewport size changes.
           */

          this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"].EMPTY;
          /**
           * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
           * closed autocomplete from being reopened if the user switches to another browser tab and then
           * comes back.
           */

          this._canOpenOnNextFocus = true;
          /**
           * Stream of keyboard events that can close the panel.
           */

          this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          /**
           * Event handler for when the window is blurred. Needs to be an
           * arrow function in order to preserve the context.
           */

          this._windowBlurHandler =
          /**
          * @return {?}
          */
          function () {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this33._canOpenOnNextFocus = _this33._document.activeElement !== _this33._element.nativeElement || _this33.panelOpen;
          };
          /**
           * `View -> model callback called when value changes`
           */


          this._onChange =
          /**
          * @return {?}
          */
          function () {};
          /**
           * `View -> model callback called when autocomplete has been touched`
           */


          this._onTouched =
          /**
          * @return {?}
          */
          function () {};
          /**
           * Position of the autocomplete panel relative to the trigger element. A position of `auto`
           * will render the panel underneath the trigger if there is enough space for it to fit in
           * the viewport, otherwise the panel will be shown above it. If the position is set to
           * `above` or `below`, the panel will always be shown above or below the trigger. no matter
           * whether it fits completely in the viewport.
           */


          this.position = 'auto';
          /**
           * `autocomplete` attribute to be set on the input element.
           * \@docs-private
           */

          this.autocompleteAttribute = 'off';
          this._overlayAttached = false;
          /**
           * Stream of autocomplete option selections.
           */

          this.optionSelections =
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["defer"])(
          /**
          * @return {?}
          */
          function () {
            if (_this33.autocomplete && _this33.autocomplete.options) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"]).apply(void 0, _toConsumableArray(_this33.autocomplete.options.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.onSelectionChange;
              })));
            } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.


            return _this33._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return _this33.optionSelections;
            }));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         * @return {?}
         */


        _createClass(MatAutocompleteTrigger, [{
          key: "ngAfterViewInit",

          /**
           * @return {?}
           */
          value: function ngAfterViewInit() {
            var _this34 = this;

            if (typeof window !== 'undefined') {
              this._zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                window.addEventListener('blur', _this34._windowBlurHandler);
              });

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["_supportsShadowDom"])()) {
                /** @type {?} */
                var element = this._element.nativeElement;
                /** @type {?} */

                var rootNode = element.getRootNode ? element.getRootNode() : null; // We need to take the `ShadowRoot` off of `window`, because the built-in types are
                // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.

                this._isInsideShadowRoot = rootNode instanceof
                /** @type {?} */
                window.ShadowRoot;
              }
            }
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['position'] && this._positionStrategy) {
              this._setStrategyPositions(this._positionStrategy);

              if (this.panelOpen) {
                /** @type {?} */
                this._overlayRef.updatePosition();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (typeof window !== 'undefined') {
              window.removeEventListener('blur', this._windowBlurHandler);
            }

            this._viewportSubscription.unsubscribe();

            this._componentDestroyed = true;

            this._destroyPanel();

            this._closeKeyEventStream.complete();
          }
          /**
           * Whether or not the autocomplete panel is open.
           * @return {?}
           */

        }, {
          key: "openPanel",

          /**
           * Opens the autocomplete suggestion panel.
           * @return {?}
           */
          value: function openPanel() {
            this._attachOverlay();

            this._floatLabel();
          }
          /**
           * Closes the autocomplete suggestion panel.
           * @return {?}
           */

        }, {
          key: "closePanel",
          value: function closePanel() {
            this._resetLabel();

            if (!this._overlayAttached) {
              return;
            }

            if (this.panelOpen) {
              // Only emit if the panel was visible.
              this.autocomplete.closed.emit();
            }

            this.autocomplete._isOpen = this._overlayAttached = false;

            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();

              this._closingActionsSubscription.unsubscribe();
            } // Note that in some cases this can end up being called after the component is destroyed.
            // Add a check to ensure that we don't try to run change detection on a destroyed view.


            if (!this._componentDestroyed) {
              // We need to trigger change detection manually, because
              // `fromEvent` doesn't seem to do it at the proper time.
              // This ensures that the label is reset when the
              // user clicks outside.
              this._changeDetectorRef.detectChanges();
            }
          }
          /**
           * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
           * within the viewport.
           * @return {?}
           */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._overlayAttached) {
              /** @type {?} */
              this._overlayRef.updatePosition();
            }
          }
          /**
           * A stream of actions that should close the autocomplete panel, including
           * when an option is selected, on blur, and when TAB is pressed.
           * @return {?}
           */

        }, {
          key: "_getOutsideClickStream",

          /**
           * Stream of clicks outside of the autocomplete panel.
           * @private
           * @return {?}
           */
          value: function _getOutsideClickStream() {
            var _this35 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(
            /** @type {?} */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'click'),
            /** @type {?} */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
              // fall back to check the first element in the path of the click event.

              /** @type {?} */
              var clickTarget =
              /** @type {?} */
              _this35._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
              /** @type {?} */

              var formField = _this35._formField ? _this35._formField._elementRef.nativeElement : null;
              return _this35._overlayAttached && clickTarget !== _this35._element.nativeElement && (!formField || !formField.contains(clickTarget)) && !!_this35._overlayRef && !_this35._overlayRef.overlayElement.contains(clickTarget);
            }));
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this36 = this;

            Promise.resolve(null).then(
            /**
            * @return {?}
            */
            function () {
              return _this36._setTriggerValue(value);
            });
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._element.nativeElement.disabled = isDisabled;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            /** @type {?} */
            var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
            // in line with other browsers. By default, pressing escape on IE will cause it to revert
            // the input value to the one that it had on focus, however it won't dispatch any events
            // which means that the model value will be out of sync with the view.

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]) {
              event.preventDefault();
            }

            if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] && this.panelOpen) {
              this.activeOption._selectViaInteraction();

              this._resetActiveItem();

              event.preventDefault();
            } else if (this.autocomplete) {
              /** @type {?} */
              var prevActiveItem = this.autocomplete._keyManager.activeItem;
              /** @type {?} */

              var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"];

              if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["TAB"]) {
                this.autocomplete._keyManager.onKeydown(event);
              } else if (isArrowKey && this._canOpen()) {
                this.openPanel();
              }

              if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption();
              }
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleInput",
          value: function _handleInput(event) {
            /** @type {?} */
            var target =
            /** @type {?} */
            event.target;
            /** @type {?} */

            var value = target.value; // Based on `NumberValueAccessor` from forms.

            if (target.type === 'number') {
              value = value == '' ? null : parseFloat(value);
            } // If the input has a placeholder, IE will fire the `input` event on page load,
            // focus and blur, in addition to when the user actually changed the value. To
            // filter out all of the extra events, we save the value on focus and between
            // `input` events, and we check whether it changed.
            // See: https://connect.microsoft.com/IE/feedback/details/885747/


            if (this._previousValue !== value) {
              this._previousValue = value;

              this._onChange(value);

              if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            if (!this._canOpenOnNextFocus) {
              this._canOpenOnNextFocus = true;
            } else if (this._canOpen()) {
              this._previousValue = this._element.nativeElement.value;

              this._attachOverlay();

              this._floatLabel(true);
            }
          }
          /**
           * In "auto" mode, the label will animate down as soon as focus is lost.
           * This causes the value to jump when selecting an option with the mouse.
           * This method manually floats the label until the panel can be closed.
           * @private
           * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
           * @return {?}
           */

        }, {
          key: "_floatLabel",
          value: function _floatLabel() {
            var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this._formField && this._formField.floatLabel === 'auto') {
              if (shouldAnimate) {
                this._formField._animateAndLockLabel();
              } else {
                this._formField.floatLabel = 'always';
              }

              this._manuallyFloatingLabel = true;
            }
          }
          /**
           * If the label has been manually elevated, return it to its normal state.
           * @private
           * @return {?}
           */

        }, {
          key: "_resetLabel",
          value: function _resetLabel() {
            if (this._manuallyFloatingLabel) {
              this._formField.floatLabel = 'auto';
              this._manuallyFloatingLabel = false;
            }
          }
          /**
           * Given that we are not actually focusing active options, we must manually adjust scroll
           * to reveal options below the fold. First, we find the offset of the option from the top
           * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
           * the panel height + the option height, so the active option will be just visible at the
           * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
           * will become the offset. If that offset is visible within the panel already, the scrollTop is
           * not adjusted.
           * @private
           * @return {?}
           */

        }, {
          key: "_scrollToOption",
          value: function _scrollToOption() {
            /** @type {?} */
            var index = this.autocomplete._keyManager.activeItemIndex || 0;
            /** @type {?} */

            var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);

            if (index === 0 && labelCount === 1) {
              // If we've got one group label before the option and we're at the top option,
              // scroll the list to the top. This is better UX than scrolling the list to the
              // top of the option, because it allows the user to read the top group's label.
              this.autocomplete._setScrollTop(0);
            } else {
              /** @type {?} */
              var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);

              this.autocomplete._setScrollTop(newScrollPosition);
            }
          }
          /**
           * This method listens to a stream of panel closing actions and resets the
           * stream every time the option list changes.
           * @private
           * @return {?}
           */

        }, {
          key: "_subscribeToClosingActions",
          value: function _subscribeToClosingActions() {
            var _this37 = this;

            /** @type {?} */
            var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));
            /** @type {?} */


            var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(
            /**
            * @return {?}
            */
            function () {
              return _this37._positionStrategy.reapplyLastPosition();
            }), // Defer emitting to the stream until the next tick, because changing
            // bindings in here will cause "changed after checked" errors.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
            // that were created, and flatten it so our stream only emits closing events...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var wasOpen = _this37.panelOpen;

              _this37._resetActiveItem();

              _this37.autocomplete._setVisibility();

              if (_this37.panelOpen) {
                /** @type {?} */
                _this37._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.


                if (wasOpen !== _this37.panelOpen) {
                  _this37.autocomplete.opened.emit();
                }
              }

              return _this37.panelClosingActions;
            }), // when the first closing event occurs...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
            .subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this37._setValueAndClose(event);
            });
          }
          /**
           * Destroys the autocomplete suggestion panel.
           * @private
           * @return {?}
           */

        }, {
          key: "_destroyPanel",
          value: function _destroyPanel() {
            if (this._overlayRef) {
              this.closePanel();

              this._overlayRef.dispose();

              this._overlayRef = null;
            }
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_setTriggerValue",
          value: function _setTriggerValue(value) {
            /** @type {?} */
            var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
            // The display value can also be the number zero and shouldn't fall back to an empty string.

            /** @type {?} */

            var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
            // through change detection.

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
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_setValueAndClose",
          value: function _setValueAndClose(event) {
            if (event && event.source) {
              this._clearPreviousSelectedOption(event.source);

              this._setTriggerValue(event.source.value);

              this._onChange(event.source.value);

              this._element.nativeElement.focus();

              this.autocomplete._emitSelectEvent(event.source);
            }

            this.closePanel();
          }
          /**
           * Clear any previous selected option and emit a selection change event for this option
           * @private
           * @param {?} skip
           * @return {?}
           */

        }, {
          key: "_clearPreviousSelectedOption",
          value: function _clearPreviousSelectedOption(skip) {
            this.autocomplete.options.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              if (option != skip && option.selected) {
                option.deselect();
              }
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this38 = this;

            if (!this.autocomplete) {
              throw getMatAutocompleteMissingPanelError();
            }
            /** @type {?} */


            var overlayRef = this._overlayRef;

            if (!overlayRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
              overlayRef = this._overlay.create(this._getOverlayConfig());
              this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
              // the overlay event targeting provided by the CDK overlay.

              overlayRef.keydownEvents().subscribe(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] && event.altKey) {
                  _this38._resetActiveItem();

                  _this38._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                  // reach the input itself and cause the overlay to be reopened.


                  event.stopPropagation();
                  event.preventDefault();
                }
              });

              if (this._viewportRuler) {
                this._viewportSubscription = this._viewportRuler.change().subscribe(
                /**
                * @return {?}
                */
                function () {
                  if (_this38.panelOpen && overlayRef) {
                    overlayRef.updateSize({
                      width: _this38._getPanelWidth()
                    });
                  }
                });
              }
            } else {
              // Update the trigger, panel width and direction, in case anything has changed.
              this._positionStrategy.setOrigin(this._getConnectedElement());

              overlayRef.updateSize({
                width: this._getPanelWidth()
              });
            }

            if (overlayRef && !overlayRef.hasAttached()) {
              overlayRef.attach(this._portal);
              this._closingActionsSubscription = this._subscribeToClosingActions();
            }
            /** @type {?} */


            var wasOpen = this.panelOpen;

            this.autocomplete._setVisibility();

            this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
            // autocomplete won't be shown if there are no options.

            if (this.panelOpen && wasOpen !== this.panelOpen) {
              this.autocomplete.opened.emit();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
              positionStrategy: this._getOverlayPosition(),
              scrollStrategy: this._scrollStrategy(),
              width: this._getPanelWidth(),
              direction: this._dir
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            /** @type {?} */
            var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

            this._setStrategyPositions(strategy);

            this._positionStrategy = strategy;
            return strategy;
          }
          /**
           * Sets the positions on a position strategy based on the directive's input state.
           * @private
           * @param {?} positionStrategy
           * @return {?}
           */

        }, {
          key: "_setStrategyPositions",
          value: function _setStrategyPositions(positionStrategy) {
            /** @type {?} */
            var belowPosition = {
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            };
            /** @type {?} */

            var abovePosition = {
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom',
              // The overlay edge connected to the trigger should have squared corners, while
              // the opposite end has rounded corners. We apply a CSS class to swap the
              // border-radius based on the overlay position.
              panelClass: 'mat-autocomplete-panel-above'
            };
            /** @type {?} */

            var positions;

            if (this.position === 'above') {
              positions = [abovePosition];
            } else if (this.position === 'below') {
              positions = [belowPosition];
            } else {
              positions = [belowPosition, abovePosition];
            }

            positionStrategy.withPositions(positions);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getConnectedElement",
          value: function _getConnectedElement() {
            if (this.connectedTo) {
              return this.connectedTo.elementRef;
            }

            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getPanelWidth",
          value: function _getPanelWidth() {
            return this.autocomplete.panelWidth || this._getHostWidth();
          }
          /**
           * Returns the width of the input element, so the panel width can match it.
           * @private
           * @return {?}
           */

        }, {
          key: "_getHostWidth",
          value: function _getHostWidth() {
            return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
          }
          /**
           * Resets the active item to -1 so arrow events will activate the
           * correct options, or to 0 if the consumer opted into it.
           * @private
           * @return {?}
           */

        }, {
          key: "_resetActiveItem",
          value: function _resetActiveItem() {
            this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
          }
          /**
           * Determines whether the panel can be opened.
           * @private
           * @return {?}
           */

        }, {
          key: "_canOpen",
          value: function _canOpen() {
            /** @type {?} */
            var element = this._element.nativeElement;
            return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
          }
        }, {
          key: "autocompleteDisabled",
          get: function get() {
            return this._autocompleteDisabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "panelOpen",
          get: function get() {
            return this._overlayAttached && this.autocomplete.showPanel;
          }
        }, {
          key: "panelClosingActions",
          get: function get() {
            var _this39 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this39._overlayAttached;
            })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this39._overlayAttached;
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])()).pipe( // Normalize the output so we return a consistent type.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
            }));
          }
          /**
           * The currently active option, coerced to MatOption type.
           * @return {?}
           */

        }, {
          key: "activeOption",
          get: function get() {
            if (this.autocomplete && this.autocomplete._keyManager) {
              return this.autocomplete._keyManager.activeItem;
            }

            return null;
          }
        }]);

        return MatAutocompleteTrigger;
      }();

      MatAutocompleteTrigger.ɵfac = function MatAutocompleteTrigger_Factory(t) {
        return new (t || MatAutocompleteTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"]));
      };

      MatAutocompleteTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteTrigger,
        selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
        hostAttrs: [1, "mat-autocomplete-trigger"],
        hostVars: 7,
        hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
              return ctx._handleFocus();
            })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
              return ctx._onTouched();
            })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
              return ctx._handleInput($event);
            })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
          }
        },
        inputs: {
          position: ["matAutocompletePosition", "position"],
          autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
          autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
          autocomplete: ["matAutocomplete", "autocomplete"],
          connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
        },
        exportAs: ["matAutocompleteTrigger"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      MatAutocompleteTrigger.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"]
        }];
      };

      MatAutocompleteTrigger.propDecorators = {
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocomplete']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompletePosition']
        }],
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteConnectedTo']
        }],
        autocompleteAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['autocomplete']
        }],
        autocompleteDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "input[matAutocomplete], textarea[matAutocomplete]",
            host: {
              'class': 'mat-autocomplete-trigger',
              '[attr.autocomplete]': 'autocompleteAttribute',
              '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
              '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
              '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
              '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
              '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
              '[attr.aria-haspopup]': '!autocompleteDisabled',
              // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
              // a little earlier. This avoids issues where IE delays the focusing of the input.
              '(focusin)': '_handleFocus()',
              '(blur)': '_onTouched()',
              '(input)': '_handleInput($event)',
              '(keydown)': '_handleKeydown($event)'
            },
            exportAs: 'matAutocompleteTrigger',
            providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompletePosition']
          }],
          autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['autocomplete']
          }],
          autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteDisabled']
          }],
          autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocomplete']
          }],
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteConnectedTo']
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatAutocompleteModule = function MatAutocompleteModule() {
        _classCallCheck(this, MatAutocompleteModule);
      };

      MatAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatAutocompleteModule
      });
      MatAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatAutocompleteModule_Factory(t) {
          return new (t || MatAutocompleteModule)();
        },
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatAutocompleteModule, {
          declarations: function declarations() {
            return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
          },
          exports: function exports() {
            return [MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
            exports: [MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
            providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=autocomplete.js.map

      /***/

    },

    /***/
    "OCB9":
    /*!*******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js ***!
      \*******************************************************************/

    /*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, validateVerticalPosition, validateHorizontalPosition, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */

    /***/
    function OCB9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Overlay", function () {
        return Overlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
        return OverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
        return CdkOverlayOrigin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
        return CdkConnectedOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
        return FullscreenOverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
        return OverlayRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
        return OverlayKeyboardDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
        return OverlayPositionBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
        return GlobalPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
        return ConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
        return FlexibleConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
        return OverlayConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
        return validateVerticalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
        return validateHorizontalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
        return ConnectionPositionPair;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
        return ScrollingVisibility;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
        return ConnectedOverlayPositionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
        return ScrollStrategyOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
        return RepositionScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
        return CloseScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
        return NoopScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
        return BlockScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
        return OverlayModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
        return OVERLAY_PROVIDERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return OVERLAY_CONTAINER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return OVERLAY_CONTAINER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "dEu6");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "+J/9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"];
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "LSvS");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "FWMu");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "6KbF");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "3+Bf");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Strategy that will prevent the user from scrolling while the overlay is visible.
       */


      var BlockScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param {?} _viewportRuler
         * @param {?} document
         */
        function BlockScrollStrategy(_viewportRuler, document) {
          _classCallCheck(this, BlockScrollStrategy);

          this._viewportRuler = _viewportRuler;
          this._previousHTMLStyles = {
            top: '',
            left: ''
          };
          this._isEnabled = false;
          this._document = document;
        }
        /**
         * Attaches this scroll strategy to an overlay.
         * @return {?}
         */


        _createClass(BlockScrollStrategy, [{
          key: "attach",
          value: function attach() {}
          /**
           * Blocks page-level scroll while the attached overlay is open.
           * @return {?}
           */

        }, {
          key: "enable",
          value: function enable() {
            if (this._canBeEnabled()) {
              /** @type {?} */
              var root =
              /** @type {?} */
              this._document.documentElement;
              this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

              this._previousHTMLStyles.left = root.style.left || '';
              this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
              // have the user agent margin, whereas the `html` is guaranteed not to have one.

              root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
              root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
              root.classList.add('cdk-global-scrollblock');
              this._isEnabled = true;
            }
          }
          /**
           * Unblocks page-level scroll while the attached overlay is open.
           * @return {?}
           */

        }, {
          key: "disable",
          value: function disable() {
            if (this._isEnabled) {
              /** @type {?} */
              var html =
              /** @type {?} */
              this._document.documentElement;
              /** @type {?} */

              var body =
              /** @type {?} */
              this._document.body;
              /** @type {?} */

              var htmlStyle =
              /** @type {?} */
              html.style;
              /** @type {?} */

              var bodyStyle =
              /** @type {?} */
              body.style;
              /** @type {?} */

              var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
              /** @type {?} */

              var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
              this._isEnabled = false;
              htmlStyle.left = this._previousHTMLStyles.left;
              htmlStyle.top = this._previousHTMLStyles.top;
              html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
              // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

              htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
              window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
              htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
              bodyStyle.scrollBehavior = previousBodyScrollBehavior;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_canBeEnabled",
          value: function _canBeEnabled() {
            // Since the scroll strategies can't be singletons, we have to use a global CSS class
            // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
            // scrolling multiple times.

            /** @type {?} */
            var html =
            /** @type {?} */
            this._document.documentElement;

            if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
              return false;
            }
            /** @type {?} */


            var body = this._document.body;
            /** @type {?} */

            var viewport = this._viewportRuler.getViewportSize();

            return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
          }
        }]);

        return BlockScrollStrategy;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
       * @return {?}
       */


      function getMatScrollStrategyAlreadyAttachedError() {
        return Error("Scroll strategy has already been attached.");
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Strategy that will close the overlay as soon as the user starts scrolling.
       */


      var CloseScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param {?} _scrollDispatcher
         * @param {?} _ngZone
         * @param {?} _viewportRuler
         * @param {?=} _config
         */
        function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
          var _this40 = this;

          _classCallCheck(this, CloseScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._config = _config;
          this._scrollSubscription = null;
          /**
           * Detaches the overlay ref and disables the scroll strategy.
           */

          this._detach =
          /**
          * @return {?}
          */
          function () {
            _this40.disable();

            if (_this40._overlayRef.hasAttached()) {
              _this40._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return _this40._overlayRef.detach();
              });
            }
          };
        }
        /**
         * Attaches this scroll strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */


        _createClass(CloseScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /**
           * Enables the closing of the attached overlay on scroll.
           * @return {?}
           */

        }, {
          key: "enable",
          value: function enable() {
            var _this41 = this;

            if (this._scrollSubscription) {
              return;
            }
            /** @type {?} */


            var stream = this._scrollDispatcher.scrolled(0);

            if (this._config && this._config.threshold && this._config.threshold > 1) {
              this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
              this._scrollSubscription = stream.subscribe(
              /**
              * @return {?}
              */
              function () {
                /** @type {?} */
                var scrollPosition = _this41._viewportRuler.getViewportScrollPosition().top;

                if (Math.abs(scrollPosition - _this41._initialScrollPosition) >
                /** @type {?} */

                /** @type {?} */
                _this41._config.threshold) {
                  _this41._detach();
                } else {
                  _this41._overlayRef.updatePosition();
                }
              });
            } else {
              this._scrollSubscription = stream.subscribe(this._detach);
            }
          }
          /**
           * Disables the closing the attached overlay on scroll.
           * @return {?}
           */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef =
            /** @type {?} */
            null;
          }
        }]);

        return CloseScrollStrategy;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Scroll strategy that doesn't do anything.
       */


      var NoopScrollStrategy = /*#__PURE__*/function () {
        function NoopScrollStrategy() {
          _classCallCheck(this, NoopScrollStrategy);
        }

        _createClass(NoopScrollStrategy, [{
          key: "enable",

          /**
           * Does nothing, as this scroll strategy is a no-op.
           * @return {?}
           */
          value: function enable() {}
          /**
           * Does nothing, as this scroll strategy is a no-op.
           * @return {?}
           */

        }, {
          key: "disable",
          value: function disable() {}
          /**
           * Does nothing, as this scroll strategy is a no-op.
           * @return {?}
           */

        }, {
          key: "attach",
          value: function attach() {}
        }]);

        return NoopScrollStrategy;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // TODO(jelbourn): move this to live with the rest of the scrolling code
      // TODO(jelbourn): someday replace this with IntersectionObservers

      /**
       * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
       * \@docs-private
       * @param {?} element Dimensions of the element (from getBoundingClientRect)
       * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @return {?} Whether the element is scrolled out of view
       */


      function isElementScrolledOutsideView(element, scrollContainers) {
        return scrollContainers.some(
        /**
        * @param {?} containerBounds
        * @return {?}
        */
        function (containerBounds) {
          /** @type {?} */
          var outsideAbove = element.bottom < containerBounds.top;
          /** @type {?} */

          var outsideBelow = element.top > containerBounds.bottom;
          /** @type {?} */

          var outsideLeft = element.right < containerBounds.left;
          /** @type {?} */

          var outsideRight = element.left > containerBounds.right;
          return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
      }
      /**
       * Gets whether an element is clipped by any of its scrolling containers.
       * \@docs-private
       * @param {?} element Dimensions of the element (from getBoundingClientRect)
       * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @return {?} Whether the element is clipped
       */


      function isElementClippedByScrolling(element, scrollContainers) {
        return scrollContainers.some(
        /**
        * @param {?} scrollContainerRect
        * @return {?}
        */
        function (scrollContainerRect) {
          /** @type {?} */
          var clippedAbove = element.top < scrollContainerRect.top;
          /** @type {?} */

          var clippedBelow = element.bottom > scrollContainerRect.bottom;
          /** @type {?} */

          var clippedLeft = element.left < scrollContainerRect.left;
          /** @type {?} */

          var clippedRight = element.right > scrollContainerRect.right;
          return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Strategy that will update the element position as the user is scrolling.
       */


      var RepositionScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param {?} _scrollDispatcher
         * @param {?} _viewportRuler
         * @param {?} _ngZone
         * @param {?=} _config
         */
        function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
          _classCallCheck(this, RepositionScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._viewportRuler = _viewportRuler;
          this._ngZone = _ngZone;
          this._config = _config;
          this._scrollSubscription = null;
        }
        /**
         * Attaches this scroll strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */


        _createClass(RepositionScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /**
           * Enables repositioning of the attached overlay on scroll.
           * @return {?}
           */

        }, {
          key: "enable",
          value: function enable() {
            var _this42 = this;

            if (!this._scrollSubscription) {
              /** @type {?} */
              var throttle = this._config ? this._config.scrollThrottle : 0;
              this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this42._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


                if (_this42._config && _this42._config.autoClose) {
                  /** @type {?} */
                  var overlayRect = _this42._overlayRef.overlayElement.getBoundingClientRect();

                  var _this42$_viewportRule = _this42._viewportRuler.getViewportSize(),
                      width = _this42$_viewportRule.width,
                      height = _this42$_viewportRule.height; // TODO(crisbeto): include all ancestor scroll containers here once
                  // we have a way of exposing the trigger element to the scroll strategy.

                  /** @type {?} */


                  var parentRects = [{
                    width: width,
                    height: height,
                    bottom: height,
                    right: width,
                    top: 0,
                    left: 0
                  }];

                  if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                    _this42.disable();

                    _this42._ngZone.run(
                    /**
                    * @return {?}
                    */
                    function () {
                      return _this42._overlayRef.detach();
                    });
                  }
                }
              });
            }
          }
          /**
           * Disables repositioning of the attached overlay on scroll.
           * @return {?}
           */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef =
            /** @type {?} */
            null;
          }
        }]);

        return RepositionScrollStrategy;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Options for how an overlay will handle scrolling.
       *
       * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
       * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
       */


      var ScrollStrategyOptions =
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _viewportRuler
       * @param {?} _ngZone
       * @param {?} document
       */
      function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this43 = this;

        _classCallCheck(this, ScrollStrategyOptions);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */

        this.noop =
        /**
        * @return {?}
        */
        function () {
          return new NoopScrollStrategy();
        };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */


        this.close =
        /**
        * @param {?=} config
        * @return {?}
        */
        function (config) {
          return new CloseScrollStrategy(_this43._scrollDispatcher, _this43._ngZone, _this43._viewportRuler, config);
        };
        /**
         * Block scrolling.
         */


        this.block =
        /**
        * @return {?}
        */
        function () {
          return new BlockScrollStrategy(_this43._viewportRuler, _this43._document);
        };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */


        this.reposition =
        /**
        * @param {?=} config
        * @return {?}
        */
        function (config) {
          return new RepositionScrollStrategy(_this43._scrollDispatcher, _this43._viewportRuler, _this43._ngZone, config);
        };

        this._document = document;
      };

      ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
        return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      ScrollStrategyOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ScrollStrategyOptions,
        factory: ScrollStrategyOptions.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      ScrollStrategyOptions.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };
      /** @nocollapse */


      ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function ScrollStrategyOptions_Factory() {
          return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
        },
        token: ScrollStrategyOptions,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Initial configuration used when creating an overlay.
       */


      var OverlayConfig =
      /**
       * @param {?=} config
       */
      function OverlayConfig(config) {
        _classCallCheck(this, OverlayConfig);

        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */

        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */

        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */

        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.disposeOnNavigation = false;

        if (config) {
          /** @type {?} */
          var configKeys =
          /** @type {?} */
          Object.keys(config);

          for (var _i3 = 0, _configKeys = configKeys; _i3 < _configKeys.length; _i3++) {
            var key = _configKeys[_i3];

            if (config[key] !== undefined) {
              // TypeScript, as of version 3.5, sees the left-hand-side of this expression
              // as "I don't know *which* key this is, so the only valid value is the intersection
              // of all the posible values." In this case, that happens to be `undefined`. TypeScript
              // is not smart enough to see that the right-hand-side is actually an access of the same
              // exact type with the same exact key, meaning that the value type must be identical.
              // So we use `any` to work around this.
              this[key] =
              /** @type {?} */
              config[key];
            }
          }
        }
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The points of the origin element and the overlay element to connect.
       */


      var ConnectionPositionPair =
      /**
       * @param {?} origin
       * @param {?} overlay
       * @param {?=} offsetX
       * @param {?=} offsetY
       * @param {?=} panelClass
       */
      function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
        _classCallCheck(this, ConnectionPositionPair);

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
      };
      /**
       * Set of properties regarding the position of the origin and overlay relative to the viewport
       * with respect to the containing Scrollable elements.
       *
       * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
       * bounds of any one of the strategy's Scrollable's bounding client rectangle.
       *
       * The overlay and origin are outside view if there is no overlap between their bounding client
       * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
       *
       *       -----------                    -----------
       *       | outside |                    | clipped |
       *       |  view   |              --------------------------
       *       |         |              |     |         |        |
       *       ----------               |     -----------        |
       *  --------------------------    |                        |
       *  |                        |    |      Scrollable        |
       *  |                        |    |                        |
       *  |                        |     --------------------------
       *  |      Scrollable        |
       *  |                        |
       *  --------------------------
       *
       * \@docs-private
       */


      var ScrollingVisibility = function ScrollingVisibility() {
        _classCallCheck(this, ScrollingVisibility);
      };
      /**
       * The change event emitted by the strategy when a fallback position is used.
       */


      var ConnectedOverlayPositionChange =
      /**
       * @param {?} connectionPair
       * @param {?} scrollableViewProperties
       */
      function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
        _classCallCheck(this, ConnectedOverlayPositionChange);

        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      };
      /** @nocollapse */


      ConnectedOverlayPositionChange.ctorParameters = function () {
        return [{
          type: ConnectionPositionPair
        }, {
          type: ScrollingVisibility,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };
      /**
       * Validates whether a vertical position property matches the expected values.
       * \@docs-private
       * @param {?} property Name of the property being validated.
       * @param {?} value Value of the property being validated.
       * @return {?}
       */


      function validateVerticalPosition(property, value) {
        if (value !== 'top' && value !== 'bottom' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
        }
      }
      /**
       * Validates whether a horizontal position property matches the expected values.
       * \@docs-private
       * @param {?} property Name of the property being validated.
       * @param {?} value Value of the property being validated.
       * @return {?}
       */


      function validateHorizontalPosition(property, value) {
        if (value !== 'start' && value !== 'end' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var OverlayKeyboardDispatcher = /*#__PURE__*/function () {
        /**
         * @param {?} document
         */
        function OverlayKeyboardDispatcher(document) {
          var _this44 = this;

          _classCallCheck(this, OverlayKeyboardDispatcher);

          /**
           * Currently attached overlays in the order they were attached.
           */
          this._attachedOverlays = [];
          /**
           * Keyboard event listener that will be attached to the body.
           */

          this._keydownListener =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var overlays = _this44._attachedOverlays;

            for (var i = overlays.length - 1; i > -1; i--) {
              // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
              // We want to target the most recent overlay, rather than trying to match where the event came
              // from, because some components might open an overlay, but keep focus on a trigger element
              // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
              // because we don't want overlays that don't handle keyboard events to block the ones below
              // them that do.
              if (overlays[i]._keydownEventSubscriptions > 0) {
                overlays[i]._keydownEvents.next(event);

                break;
              }
            }
          };

          this._document = document;
        }
        /**
         * @return {?}
         */


        _createClass(OverlayKeyboardDispatcher, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._detach();
          }
          /**
           * Add a new overlay to the list of attached overlay refs.
           * @param {?} overlayRef
           * @return {?}
           */

        }, {
          key: "add",
          value: function add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef); // Lazily start dispatcher once first overlay is added

            if (!this._isAttached) {
              this._document.body.addEventListener('keydown', this._keydownListener);

              this._isAttached = true;
            }

            this._attachedOverlays.push(overlayRef);
          }
          /**
           * Remove an overlay from the list of attached overlay refs.
           * @param {?} overlayRef
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove(overlayRef) {
            /** @type {?} */
            var index = this._attachedOverlays.indexOf(overlayRef);

            if (index > -1) {
              this._attachedOverlays.splice(index, 1);
            } // Remove the global listener once there are no more overlays.


            if (this._attachedOverlays.length === 0) {
              this._detach();
            }
          }
          /**
           * Detaches the global keyboard event listener.
           * @private
           * @return {?}
           */

        }, {
          key: "_detach",
          value: function _detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('keydown', this._keydownListener);

              this._isAttached = false;
            }
          }
        }]);

        return OverlayKeyboardDispatcher;
      }();

      OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
        return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      OverlayKeyboardDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: OverlayKeyboardDispatcher,
        factory: OverlayKeyboardDispatcher.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      OverlayKeyboardDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };
      /** @nocollapse */


      OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function OverlayKeyboardDispatcher_Factory() {
          return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
        },
        token: OverlayKeyboardDispatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @param {?} dispatcher
       * @param {?} _document
       * @return {?}
       */


      function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
        return dispatcher || new OverlayKeyboardDispatcher(_document);
      }
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @type {?}
       */


      var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
        // If there is already an OverlayKeyboardDispatcher available, use that.
        // Otherwise, provide a new one.
        provide: OverlayKeyboardDispatcher,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), OverlayKeyboardDispatcher],
        /** @type {?} */
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]],
        useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Container inside which all overlays will render.
       */

      var OverlayContainer = /*#__PURE__*/function () {
        /**
         * @param {?} document
         */
        function OverlayContainer(document) {
          _classCallCheck(this, OverlayContainer);

          this._document = document;
        }
        /**
         * @return {?}
         */


        _createClass(OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._containerElement && this._containerElement.parentNode) {
              this._containerElement.parentNode.removeChild(this._containerElement);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @return {?} the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           * @protected
           * @return {?}
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            /** @type {?} */
            var containerClass = 'cdk-overlay-container';
            /** @type {?} */

            var previousContainers = this._document.getElementsByClassName(containerClass); // Remove any old containers. This can happen when transitioning from the server to the client.


            for (var i = 0; i < previousContainers.length; i++) {
              /** @type {?} */
              previousContainers[i].parentNode.removeChild(previousContainers[i]);
            }
            /** @type {?} */


            var container = this._document.createElement('div');

            container.classList.add(containerClass);

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return OverlayContainer;
      }();

      OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      OverlayContainer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: OverlayContainer,
        factory: OverlayContainer.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };
      /** @nocollapse */


      OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function OverlayContainer_Factory() {
          return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
        },
        token: OverlayContainer,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @param {?} parentContainer
       * @param {?} _document
       * @return {?}
       */


      function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
        return parentContainer || new OverlayContainer(_document);
      }
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @type {?}
       */


      var OVERLAY_CONTAINER_PROVIDER = {
        // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
        provide: OverlayContainer,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), OverlayContainer],
        /** @type {?} */
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]],
        useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */

      var OverlayRef = /*#__PURE__*/function () {
        /**
         * @param {?} _portalOutlet
         * @param {?} _host
         * @param {?} _pane
         * @param {?} _config
         * @param {?} _ngZone
         * @param {?} _keyboardDispatcher
         * @param {?} _document
         * @param {?=} _location
         */
        function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
          var _this45 = this;

          _classCallCheck(this, OverlayRef);

          this._portalOutlet = _portalOutlet;
          this._host = _host;
          this._pane = _pane;
          this._config = _config;
          this._ngZone = _ngZone;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._document = _document;
          this._location = _location;
          this._backdropElement = null;
          this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;

          this._backdropClickHandler =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this45._backdropClick.next(event);
          };

          this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            /** @type {?} */
            var subscription = _this45._keydownEvents.subscribe(observer);

            _this45._keydownEventSubscriptions++;
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();
                _this45._keydownEventSubscriptions--;
              }
            );
          });
          /**
           * Stream of keydown events dispatched to this overlay.
           */

          this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Amount of subscriptions to the keydown events.
           */

          this._keydownEventSubscriptions = 0;

          if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;

            this._scrollStrategy.attach(this);
          }

          this._positionStrategy = _config.positionStrategy;
        }
        /**
         * The overlay's HTML element
         * @return {?}
         */


        _createClass(OverlayRef, [{
          key: "attach",

          /**
           * Attaches content, given via a Portal, to the overlay.
           * If the overlay is configured to have a backdrop, it will be created.
           *
           * @param {?} portal Portal instance to which to attach the overlay.
           * @return {?} The portal attachment result.
           */
          value: function attach(portal) {
            var _this46 = this;

            /** @type {?} */
            var attachResult = this._portalOutlet.attach(portal);

            if (this._positionStrategy) {
              this._positionStrategy.attach(this);
            } // Update the pane element with the given configuration.


            if (!this._host.parentElement && this._previousHostParent) {
              this._previousHostParent.appendChild(this._host);
            }

            this._updateStackingOrder();

            this._updateElementSize();

            this._updateElementDirection();

            if (this._scrollStrategy) {
              this._scrollStrategy.enable();
            } // Update the position once the zone is stable so that the overlay will be fully rendered
            // before attempting to position it, as the position may depend on the size of the rendered
            // content.


            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              // The overlay could've been detached before the zone has stabilized.
              if (_this46.hasAttached()) {
                _this46.updatePosition();
              }
            }); // Enable pointer events for the overlay pane element.


            this._togglePointerEvents(true);

            if (this._config.hasBackdrop) {
              this._attachBackdrop();
            }

            if (this._config.panelClass) {
              this._toggleClasses(this._pane, this._config.panelClass, true);
            } // Only emit the `attachments` event once all other setup is done.


            this._attachments.next(); // Track this overlay by the keyboard dispatcher


            this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
            // once the constructor parameter is made required.


            if (this._config.disposeOnNavigation && this._location) {
              this._locationChanges = this._location.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this46.dispose();
              });
            }

            return attachResult;
          }
          /**
           * Detaches an overlay from a portal.
           * @return {?} The portal detachment result.
           */

        }, {
          key: "detach",
          value: function detach() {
            if (!this.hasAttached()) {
              return;
            }

            this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
            // This is necessary because otherwise the pane element will cover the page and disable
            // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

            this._togglePointerEvents(false);

            if (this._positionStrategy && this._positionStrategy.detach) {
              this._positionStrategy.detach();
            }

            if (this._scrollStrategy) {
              this._scrollStrategy.disable();
            }
            /** @type {?} */


            var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


            this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


            this._keyboardDispatcher.remove(this); // Keeping the host element in DOM the can cause scroll jank, because it still gets
            // rendered, even though it's transparent and unclickable which is why we remove it.


            this._detachContentWhenStable(); // Stop listening for location changes.


            this._locationChanges.unsubscribe();

            return detachmentResult;
          }
          /**
           * Cleans up the overlay from the DOM.
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            /** @type {?} */
            var isAttached = this.hasAttached();

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._disposeScrollStrategy();

            this.detachBackdrop();

            this._locationChanges.unsubscribe();

            this._keyboardDispatcher.remove(this);

            this._portalOutlet.dispose();

            this._attachments.complete();

            this._backdropClick.complete();

            this._keydownEvents.complete();

            if (this._host && this._host.parentNode) {
              this._host.parentNode.removeChild(this._host);

              this._host =
              /** @type {?} */
              null;
            }

            this._previousHostParent = this._pane =
            /** @type {?} */
            null;

            if (isAttached) {
              this._detachments.next();
            }

            this._detachments.complete();
          }
          /**
           * Whether the overlay has attached content.
           * @return {?}
           */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._portalOutlet.hasAttached();
          }
          /**
           * Gets an observable that emits when the backdrop has been clicked.
           * @return {?}
           */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._backdropClick.asObservable();
          }
          /**
           * Gets an observable that emits when the overlay has been attached.
           * @return {?}
           */

        }, {
          key: "attachments",
          value: function attachments() {
            return this._attachments.asObservable();
          }
          /**
           * Gets an observable that emits when the overlay has been detached.
           * @return {?}
           */

        }, {
          key: "detachments",
          value: function detachments() {
            return this._detachments.asObservable();
          }
          /**
           * Gets an observable of keydown events targeted to this overlay.
           * @return {?}
           */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._keydownEventsObservable;
          }
          /**
           * Gets the current overlay configuration, which is immutable.
           * @return {?}
           */

        }, {
          key: "getConfig",
          value: function getConfig() {
            return this._config;
          }
          /**
           * Updates the position of the overlay based on the position strategy.
           * @return {?}
           */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._positionStrategy) {
              this._positionStrategy.apply();
            }
          }
          /**
           * Switches to a new position strategy and updates the overlay position.
           * @param {?} strategy
           * @return {?}
           */

        }, {
          key: "updatePositionStrategy",
          value: function updatePositionStrategy(strategy) {
            if (strategy === this._positionStrategy) {
              return;
            }

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._positionStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              this.updatePosition();
            }
          }
          /**
           * Update the size properties of the overlay.
           * @param {?} sizeConfig
           * @return {?}
           */

        }, {
          key: "updateSize",
          value: function updateSize(sizeConfig) {
            this._config = Object.assign({}, this._config, sizeConfig);

            this._updateElementSize();
          }
          /**
           * Sets the LTR/RTL direction for the overlay.
           * @param {?} dir
           * @return {?}
           */

        }, {
          key: "setDirection",
          value: function setDirection(dir) {
            this._config = Object.assign({}, this._config, {
              direction: dir
            });

            this._updateElementDirection();
          }
          /**
           * Add a CSS class or an array of classes to the overlay pane.
           * @param {?} classes
           * @return {?}
           */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, true);
            }
          }
          /**
           * Remove a CSS class or an array of classes from the overlay pane.
           * @param {?} classes
           * @return {?}
           */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, false);
            }
          }
          /**
           * Returns the layout direction of the overlay panel.
           * @return {?}
           */

        }, {
          key: "getDirection",
          value: function getDirection() {
            /** @type {?} */
            var direction = this._config.direction;

            if (!direction) {
              return 'ltr';
            }

            return typeof direction === 'string' ? direction : direction.value;
          }
          /**
           * Switches to a new scroll strategy.
           * @param {?} strategy
           * @return {?}
           */

        }, {
          key: "updateScrollStrategy",
          value: function updateScrollStrategy(strategy) {
            if (strategy === this._scrollStrategy) {
              return;
            }

            this._disposeScrollStrategy();

            this._scrollStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              strategy.enable();
            }
          }
          /**
           * Updates the text direction of the overlay panel.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateElementDirection",
          value: function _updateElementDirection() {
            this._host.setAttribute('dir', this.getDirection());
          }
          /**
           * Updates the size of the overlay element based on the overlay config.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateElementSize",
          value: function _updateElementSize() {
            if (!this._pane) {
              return;
            }
            /** @type {?} */


            var style = this._pane.style;
            style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.width);
            style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.height);
            style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minWidth);
            style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minHeight);
            style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxWidth);
            style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxHeight);
          }
          /**
           * Toggles the pointer events for the overlay pane element.
           * @private
           * @param {?} enablePointer
           * @return {?}
           */

        }, {
          key: "_togglePointerEvents",
          value: function _togglePointerEvents(enablePointer) {
            this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
          }
          /**
           * Attaches a backdrop for this overlay.
           * @private
           * @return {?}
           */

        }, {
          key: "_attachBackdrop",
          value: function _attachBackdrop() {
            var _this47 = this;

            /** @type {?} */
            var showingClass = 'cdk-overlay-backdrop-showing';
            this._backdropElement = this._document.createElement('div');

            this._backdropElement.classList.add('cdk-overlay-backdrop');

            if (this._config.backdropClass) {
              this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
            } // Insert the backdrop before the pane in the DOM order,
            // in order to handle stacked overlays properly.


            /** @type {?} */
            this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
            // action desired when such a click occurs (usually closing the overlay).


            this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                requestAnimationFrame(
                /**
                * @return {?}
                */
                function () {
                  if (_this47._backdropElement) {
                    _this47._backdropElement.classList.add(showingClass);
                  }
                });
              });
            } else {
              this._backdropElement.classList.add(showingClass);
            }
          }
          /**
           * Updates the stacking order of the element, moving it to the top if necessary.
           * This is required in cases where one overlay was detached, while another one,
           * that should be behind it, was destroyed. The next time both of them are opened,
           * the stacking will be wrong, because the detached element's pane will still be
           * in its original DOM position.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateStackingOrder",
          value: function _updateStackingOrder() {
            if (this._host.nextSibling) {
              /** @type {?} */
              this._host.parentNode.appendChild(this._host);
            }
          }
          /**
           * Detaches the backdrop (if any) associated with the overlay.
           * @return {?}
           */

        }, {
          key: "detachBackdrop",
          value: function detachBackdrop() {
            var _this48 = this;

            /** @type {?} */
            var backdropToDetach = this._backdropElement;

            if (!backdropToDetach) {
              return;
            }
            /** @type {?} */


            var timeoutId;
            /** @type {?} */

            var finishDetach =
            /**
            * @return {?}
            */
            function finishDetach() {
              // It may not be attached to anything in certain cases (e.g. unit tests).
              if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', _this48._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);

                if (backdropToDetach.parentNode) {
                  backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
              } // It is possible that a new portal has been attached to this overlay since we started
              // removing the backdrop. If that is the case, only clear the backdrop reference if it
              // is still the same instance that we started to remove.


              if (_this48._backdropElement == backdropToDetach) {
                _this48._backdropElement = null;
              }

              if (_this48._config.backdropClass) {
                _this48._toggleClasses(
                /** @type {?} */
                backdropToDetach, _this48._config.backdropClass, false);
              }

              clearTimeout(timeoutId);
            };

            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              backdropToDetach.addEventListener('transitionend', finishDetach);
            }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.


            backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.

            timeoutId = this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return setTimeout(finishDetach, 500);
            });
          }
          /**
           * Toggles a single CSS class or an array of classes on an element.
           * @private
           * @param {?} element
           * @param {?} cssClasses
           * @param {?} isAdd
           * @return {?}
           */

        }, {
          key: "_toggleClasses",
          value: function _toggleClasses(element, cssClasses, isAdd) {
            /** @type {?} */
            var classList = element.classList;
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              // We can't do a spread here, because IE doesn't support setting multiple classes.
              // Also trying to add an empty string to a DOMTokenList will throw.
              if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
              }
            });
          }
          /**
           * Detaches the overlay content next time the zone stabilizes.
           * @private
           * @return {?}
           */

        }, {
          key: "_detachContentWhenStable",
          value: function _detachContentWhenStable() {
            var _this49 = this;

            // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
            // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
            // be patched to run inside the zone, which will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // We can't remove the host here immediately, because the overlay pane's content
              // might still be animating. This stream helps us avoid interrupting the animation
              // by waiting for the pane to become empty.

              /** @type {?} */
              var subscription = _this49._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this49._attachments, _this49._detachments))).subscribe(
              /**
              * @return {?}
              */
              function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this49._pane || !_this49._host || _this49._pane.children.length === 0) {
                  if (_this49._pane && _this49._config.panelClass) {
                    _this49._toggleClasses(_this49._pane, _this49._config.panelClass, false);
                  }

                  if (_this49._host && _this49._host.parentElement) {
                    _this49._previousHostParent = _this49._host.parentElement;

                    _this49._previousHostParent.removeChild(_this49._host);
                  }

                  subscription.unsubscribe();
                }
              });
            });
          }
          /**
           * Disposes of a scroll strategy.
           * @private
           * @return {?}
           */

        }, {
          key: "_disposeScrollStrategy",
          value: function _disposeScrollStrategy() {
            /** @type {?} */
            var scrollStrategy = this._scrollStrategy;

            if (scrollStrategy) {
              scrollStrategy.disable();

              if (scrollStrategy.detach) {
                scrollStrategy.detach();
              }
            }
          }
        }, {
          key: "overlayElement",
          get: function get() {
            return this._pane;
          }
          /**
           * The overlay's backdrop HTML element.
           * @return {?}
           */

        }, {
          key: "backdropElement",
          get: function get() {
            return this._backdropElement;
          }
          /**
           * Wrapper around the panel element. Can be used for advanced
           * positioning where a wrapper with specific styling is
           * required around the overlay pane.
           * @return {?}
           */

        }, {
          key: "hostElement",
          get: function get() {
            return this._host;
          }
        }]);

        return OverlayRef;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // TODO: refactor clipping detection into a separate thing (part of scrolling module)
      // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

      /**
       * Class to be added to the overlay bounding box.
       * @type {?}
       */


      var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       */

      var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
        /**
         * @param {?} connectedTo
         * @param {?} _viewportRuler
         * @param {?} _document
         * @param {?} _platform
         * @param {?} _overlayContainer
         */
        function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, FlexibleConnectedPositionStrategy);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
          /**
           * Last size used for the bounding box. Used to avoid resizing the overlay after open.
           */

          this._lastBoundingBoxSize = {
            width: 0,
            height: 0
          };
          /**
           * Whether the overlay was pushed in a previous positioning.
           */

          this._isPushed = false;
          /**
           * Whether the overlay can be pushed on-screen on the initial open.
           */

          this._canPush = true;
          /**
           * Whether the overlay can grow via flexible width/height after the initial open.
           */

          this._growAfterOpen = false;
          /**
           * Whether the overlay's width and height can be constrained to fit within the viewport.
           */

          this._hasFlexibleDimensions = true;
          /**
           * Whether the overlay position is locked.
           */

          this._positionLocked = false;
          /**
           * Amount of space that must be maintained between the overlay and the edge of the viewport.
           */

          this._viewportMargin = 0;
          /**
           * The Scrollable containers used to check scrollable view properties on position change.
           */

          this._scrollables = [];
          /**
           * Ordered list of preferred positions, from most to least desirable.
           */

          this._preferredPositions = [];
          /**
           * Subject that emits whenever the position changes.
           */

          this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Subscription to viewport size changes.
           */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Default offset for the overlay along the x axis.
           */

          this._offsetX = 0;
          /**
           * Default offset for the overlay along the y axis.
           */

          this._offsetY = 0;
          /**
           * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
           */

          this._appliedPanelClasses = [];
          /**
           * Observable sequence of position changes.
           */

          this.positionChanges = this._positionChanges.asObservable();
          this.setOrigin(connectedTo);
        }
        /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */


        _createClass(FlexibleConnectedPositionStrategy, [{
          key: "attach",

          /**
           * Attaches this position strategy to an overlay.
           * @param {?} overlayRef
           * @return {?}
           */
          value: function attach(overlayRef) {
            var _this50 = this;

            if (this._overlayRef && overlayRef !== this._overlayRef) {
              throw Error('This position strategy is already attached to an overlay');
            }

            this._validatePositions();

            overlayRef.hostElement.classList.add(boundingBoxClass);
            this._overlayRef = overlayRef;
            this._boundingBox = overlayRef.hostElement;
            this._pane = overlayRef.overlayElement;
            this._isDisposed = false;
            this._isInitialRender = true;
            this._lastPosition = null;

            this._resizeSubscription.unsubscribe();

            this._resizeSubscription = this._viewportRuler.change().subscribe(
            /**
            * @return {?}
            */
            function () {
              // When the window is resized, we want to trigger the next reposition as if it
              // was an initial render, in order for the strategy to pick a new optimal position,
              // otherwise position locking will cause it to stay at the old one.
              _this50._isInitialRender = true;

              _this50.apply();
            });
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin best fits on-screen.
           *
           * The selection of a position goes as follows:
           *  - If any positions fit completely within the viewport as-is,
           *      choose the first position that does so.
           *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
           *      choose the position with the greatest available size modified by the positions' weight.
           *  - If pushing is enabled, take the position that went off-screen the least and push it
           *      on-screen.
           *  - If none of the previous criteria were met, use the position that goes off-screen the least.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "apply",
          value: function apply() {
            // We shouldn't do anything if the strategy was disposed or we're on the server.
            if (this._isDisposed || !this._platform.isBrowser) {
              return;
            } // If the position has been applied already (e.g. when the overlay was opened) and the
            // consumer opted into locking in the position, re-use the old position, in order to
            // prevent the overlay from jumping around.


            if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
              this.reapplyLastPosition();
              return;
            }

            this._clearPanelClasses();

            this._resetOverlayElementStyles();

            this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
            // the overlay relative to the origin.
            // We use the viewport rect to determine whether a position would go off-screen.


            this._viewportRect = this._getNarrowedViewportRect();
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            /** @type {?} */

            var originRect = this._originRect;
            /** @type {?} */

            var overlayRect = this._overlayRect;
            /** @type {?} */

            var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

            /** @type {?} */

            var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

            /** @type {?} */

            var fallback; // Go through each of the preferred positions looking for a good fit.
            // If a good fit is found, it will be applied immediately.

            var _iterator4 = _createForOfIteratorHelper(this._preferredPositions),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var pos = _step4.value;

                // Get the exact (x, y) coordinate for the point-of-origin on the origin element.

                /** @type {?} */
                var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
                // overlay in this position. We use the top-left corner for calculations and later translate
                // this into an appropriate (top, left, bottom, right) style.

                /** @type {?} */


                var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.

                /** @type {?} */


                var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


                if (overlayFit.isCompletelyWithinViewport) {
                  this._isPushed = false;

                  this._applyPosition(pos, originPoint);

                  return;
                } // If the overlay has flexible dimensions, we can use this position
                // so long as there's enough space for the minimum dimensions.


                if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                  // Save positions where the overlay will fit with flexible dimensions. We will use these
                  // if none of the positions fit *without* flexible dimensions.
                  flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                  });
                  continue;
                } // If the current preferred position does not fit on the screen, remember the position
                // if it has more visible area on-screen than we've seen and move onto the next preferred
                // position.


                if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                  fallback = {
                    overlayFit: overlayFit,
                    overlayPoint: overlayPoint,
                    originPoint: originPoint,
                    position: pos,
                    overlayRect: overlayRect
                  };
                }
              } // If there are any positions where the overlay would fit with flexible dimensions, choose the
              // one that has the greatest area available modified by the position's weight

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (flexibleFits.length) {
              /** @type {?} */
              var bestFit = null;
              /** @type {?} */

              var bestScore = -1;

              var _iterator5 = _createForOfIteratorHelper(flexibleFits),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var fit = _step5.value;

                  /** @type {?} */
                  var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                  if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              this._isPushed = false;

              this._applyPosition(
              /** @type {?} */
              bestFit.position,
              /** @type {?} */
              bestFit.origin);

              return;
            } // When none of the preferred positions fit within the viewport, take the position
            // that went off-screen the least and attempt to push it on-screen.


            if (this._canPush) {
              // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
              this._isPushed = true;

              this._applyPosition(
              /** @type {?} */
              fallback.position,
              /** @type {?} */
              fallback.originPoint);

              return;
            } // All options for getting the overlay within the viewport have been exhausted, so go with the
            // position that went off-screen the least.


            this._applyPosition(
            /** @type {?} */
            fallback.position,
            /** @type {?} */
            fallback.originPoint);
          }
          /**
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            this._clearPanelClasses();

            this._lastPosition = null;
            this._previousPushAmount = null;

            this._resizeSubscription.unsubscribe();
          }
          /**
           * Cleanup after the element gets destroyed.
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed) {
              return;
            } // We can't use `_resetBoundingBoxStyles` here, because it resets
            // some properties to zero, rather than removing them.


            if (this._boundingBox) {
              extendStyles(this._boundingBox.style,
              /** @type {?} */
              {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: ''
              });
            }

            if (this._pane) {
              this._resetOverlayElementStyles();
            }

            if (this._overlayRef) {
              this._overlayRef.hostElement.classList.remove(boundingBoxClass);
            }

            this.detach();

            this._positionChanges.complete();

            this._overlayRef = this._boundingBox =
            /** @type {?} */
            null;
            this._isDisposed = true;
          }
          /**
           * This re-aligns the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           * @return {?}
           */

        }, {
          key: "reapplyLastPosition",
          value: function reapplyLastPosition() {
            if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
              this._originRect = this._getOriginRect();
              this._overlayRect = this._pane.getBoundingClientRect();
              this._viewportRect = this._getNarrowedViewportRect();
              /** @type {?} */

              var lastPosition = this._lastPosition || this._preferredPositions[0];
              /** @type {?} */

              var originPoint = this._getOriginPoint(this._originRect, lastPosition);

              this._applyPosition(lastPosition, originPoint);
            }
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           * @template THIS
           * @this {THIS}
           * @param {?} scrollables
           * @return {THIS}
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            /** @type {?} */
            this._scrollables = scrollables;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Adds new preferred positions.
           * @template THIS
           * @this {THIS}
           * @param {?} positions List of positions options for this overlay.
           * @return {THIS}
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            /** @type {?} */
            this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
            // it in order to avoid it being picked up if the consumer tries to re-apply.

            if (positions.indexOf(
            /** @type {?} */

            /** @type {?} */
            this._lastPosition) === -1) {
              /** @type {?} */
              this._lastPosition = null;
            }

            /** @type {?} */
            this._validatePositions();

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
           * @template THIS
           * @this {THIS}
           * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
           * @return {THIS}
           */

        }, {
          key: "withViewportMargin",
          value: function withViewportMargin(margin) {
            /** @type {?} */
            this._viewportMargin = margin;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets whether the overlay's width and height can be constrained to fit within the viewport.
           * @template THIS
           * @this {THIS}
           * @param {?=} flexibleDimensions
           * @return {THIS}
           */

        }, {
          key: "withFlexibleDimensions",
          value: function withFlexibleDimensions() {
            var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            /** @type {?} */
            this._hasFlexibleDimensions = flexibleDimensions;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets whether the overlay can grow after the initial open via flexible width/height.
           * @template THIS
           * @this {THIS}
           * @param {?=} growAfterOpen
           * @return {THIS}
           */

        }, {
          key: "withGrowAfterOpen",
          value: function withGrowAfterOpen() {
            var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            /** @type {?} */
            this._growAfterOpen = growAfterOpen;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
           * @template THIS
           * @this {THIS}
           * @param {?=} canPush
           * @return {THIS}
           */

        }, {
          key: "withPush",
          value: function withPush() {
            var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            /** @type {?} */
            this._canPush = canPush;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @template THIS
           * @this {THIS}
           * @param {?=} isLocked Whether the overlay should locked in.
           * @return {THIS}
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition() {
            var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            /** @type {?} */
            this._positionLocked = isLocked;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the origin, relative to which to position the overlay.
           * Using an element origin is useful for building components that need to be positioned
           * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
           * used for cases like contextual menus which open relative to the user's pointer.
           * @template THIS
           * @this {THIS}
           * @param {?} origin Reference to the new origin.
           * @return {THIS}
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            /** @type {?} */
            this._origin = origin;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the default offset for the overlay's connection point on the x-axis.
           * @template THIS
           * @this {THIS}
           * @param {?} offset New offset in the X axis.
           * @return {THIS}
           */

        }, {
          key: "withDefaultOffsetX",
          value: function withDefaultOffsetX(offset) {
            /** @type {?} */
            this._offsetX = offset;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the default offset for the overlay's connection point on the y-axis.
           * @template THIS
           * @this {THIS}
           * @param {?} offset New offset in the Y axis.
           * @return {THIS}
           */

        }, {
          key: "withDefaultOffsetY",
          value: function withDefaultOffsetY(offset) {
            /** @type {?} */
            this._offsetY = offset;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Configures that the position strategy should set a `transform-origin` on some elements
           * inside the overlay, depending on the current position that is being applied. This is
           * useful for the cases where the origin of an animation can change depending on the
           * alignment of the overlay.
           * @template THIS
           * @this {THIS}
           * @param {?} selector CSS selector that will be used to find the target
           *    elements onto which to set the transform origin.
           * @return {THIS}
           */

        }, {
          key: "withTransformOriginOn",
          value: function withTransformOriginOn(selector) {
            /** @type {?} */
            this._transformOriginSelector = selector;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
           * @private
           * @param {?} originRect
           * @param {?} pos
           * @return {?}
           */

        }, {
          key: "_getOriginPoint",
          value: function _getOriginPoint(originRect, pos) {
            /** @type {?} */
            var x;

            if (pos.originX == 'center') {
              // Note: when centering we should always use the `left`
              // offset, otherwise the position will be wrong in RTL.
              x = originRect.left + originRect.width / 2;
            } else {
              /** @type {?} */
              var startX = this._isRtl() ? originRect.right : originRect.left;
              /** @type {?} */

              var endX = this._isRtl() ? originRect.left : originRect.right;
              x = pos.originX == 'start' ? startX : endX;
            }
            /** @type {?} */


            var y;

            if (pos.originY == 'center') {
              y = originRect.top + originRect.height / 2;
            } else {
              y = pos.originY == 'top' ? originRect.top : originRect.bottom;
            }

            return {
              x: x,
              y: y
            };
          }
          /**
           * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
           * origin point to which the overlay should be connected.
           * @private
           * @param {?} originPoint
           * @param {?} overlayRect
           * @param {?} pos
           * @return {?}
           */

        }, {
          key: "_getOverlayPoint",
          value: function _getOverlayPoint(originPoint, overlayRect, pos) {
            // Calculate the (overlayStartX, overlayStartY), the start of the
            // potential overlay position relative to the origin point.

            /** @type {?} */
            var overlayStartX;

            if (pos.overlayX == 'center') {
              overlayStartX = -overlayRect.width / 2;
            } else if (pos.overlayX === 'start') {
              overlayStartX = this._isRtl() ? -overlayRect.width : 0;
            } else {
              overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
            }
            /** @type {?} */


            var overlayStartY;

            if (pos.overlayY == 'center') {
              overlayStartY = -overlayRect.height / 2;
            } else {
              overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
            } // The (x, y) coordinates of the overlay.


            return {
              x: originPoint.x + overlayStartX,
              y: originPoint.y + overlayStartY
            };
          }
          /**
           * Gets how well an overlay at the given point will fit within the viewport.
           * @private
           * @param {?} point
           * @param {?} overlay
           * @param {?} viewport
           * @param {?} position
           * @return {?}
           */

        }, {
          key: "_getOverlayFit",
          value: function _getOverlayFit(point, overlay, viewport, position) {
            var x = point.x,
                y = point.y;
            /** @type {?} */

            var offsetX = this._getOffset(position, 'x');
            /** @type {?} */


            var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


            if (offsetX) {
              x += offsetX;
            }

            if (offsetY) {
              y += offsetY;
            } // How much the overlay would overflow at this position, on each side.

            /** @type {?} */


            var leftOverflow = 0 - x;
            /** @type {?} */

            var rightOverflow = x + overlay.width - viewport.width;
            /** @type {?} */

            var topOverflow = 0 - y;
            /** @type {?} */

            var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

            /** @type {?} */

            var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
            /** @type {?} */


            var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
            /** @type {?} */


            var visibleArea = visibleWidth * visibleHeight;
            return {
              visibleArea: visibleArea,
              isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
              fitsInViewportVertically: visibleHeight === overlay.height,
              fitsInViewportHorizontally: visibleWidth == overlay.width
            };
          }
          /**
           * Whether the overlay can fit within the viewport when it may resize either its width or height.
           * @private
           * @param {?} fit How well the overlay fits in the viewport at some position.
           * @param {?} point The (x, y) coordinates of the overlat at some position.
           * @param {?} viewport The geometry of the viewport.
           * @return {?}
           */

        }, {
          key: "_canFitWithFlexibleDimensions",
          value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
            if (this._hasFlexibleDimensions) {
              /** @type {?} */
              var availableHeight = viewport.bottom - point.y;
              /** @type {?} */

              var availableWidth = viewport.right - point.x;
              /** @type {?} */

              var minHeight = this._overlayRef.getConfig().minHeight;
              /** @type {?} */


              var minWidth = this._overlayRef.getConfig().minWidth;
              /** @type {?} */


              var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
              /** @type {?} */

              var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
              return verticalFit && horizontalFit;
            }

            return false;
          }
          /**
           * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
           * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
           * right and bottom).
           *
           * @private
           * @param {?} start Starting point from which the overlay is pushed.
           * @param {?} overlay Dimensions of the overlay.
           * @param {?} scrollPosition Current viewport scroll position.
           * @return {?} The point at which to position the overlay after pushing. This is effectively a new
           *     originPoint.
           */

        }, {
          key: "_pushOverlayOnScreen",
          value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
            // If the position is locked and we've pushed the overlay already, reuse the previous push
            // amount, rather than pushing it again. If we were to continue pushing, the element would
            // remain in the viewport, which goes against the expectations when position locking is enabled.
            if (this._previousPushAmount && this._positionLocked) {
              return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
              };
            }
            /** @type {?} */


            var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
            // side, which we'll use to decide which direction to push it.

            /** @type {?} */

            var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
            /** @type {?} */

            var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
            /** @type {?} */

            var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
            /** @type {?} */

            var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

            /** @type {?} */

            var pushX = 0;
            /** @type {?} */

            var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
            // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
            // viewport and allow for the trailing end of the overlay to go out of bounds.

            if (overlay.width <= viewport.width) {
              pushX = overflowLeft || -overflowRight;
            } else {
              pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
            }

            if (overlay.height <= viewport.height) {
              pushY = overflowTop || -overflowBottom;
            } else {
              pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
            }

            this._previousPushAmount = {
              x: pushX,
              y: pushY
            };
            return {
              x: start.x + pushX,
              y: start.y + pushY
            };
          }
          /**
           * Applies a computed position to the overlay and emits a position change.
           * @private
           * @param {?} position The position preference
           * @param {?} originPoint The point on the origin element where the overlay is connected.
           * @return {?}
           */

        }, {
          key: "_applyPosition",
          value: function _applyPosition(position, originPoint) {
            this._setTransformOrigin(position);

            this._setOverlayElementStyles(originPoint, position);

            this._setBoundingBoxStyles(originPoint, position);

            if (position.panelClass) {
              this._addPanelClasses(position.panelClass);
            } // Save the last connected position in case the position needs to be re-calculated.


            this._lastPosition = position; // Notify that the position has been changed along with its change properties.
            // We only emit if we've got any subscriptions, because the scroll visibility
            // calculcations can be somewhat expensive.

            if (this._positionChanges.observers.length) {
              /** @type {?} */
              var scrollableViewProperties = this._getScrollVisibility();
              /** @type {?} */


              var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

              this._positionChanges.next(changeEvent);
            }

            this._isInitialRender = false;
          }
          /**
           * Sets the transform origin based on the configured selector and the passed-in position.
           * @private
           * @param {?} position
           * @return {?}
           */

        }, {
          key: "_setTransformOrigin",
          value: function _setTransformOrigin(position) {
            if (!this._transformOriginSelector) {
              return;
            }
            /** @type {?} */


            var elements =
            /** @type {?} */
            this._boundingBox.querySelectorAll(this._transformOriginSelector);
            /** @type {?} */


            var xOrigin;
            /** @type {?} */

            var yOrigin = position.overlayY;

            if (position.overlayX === 'center') {
              xOrigin = 'center';
            } else if (this._isRtl()) {
              xOrigin = position.overlayX === 'start' ? 'right' : 'left';
            } else {
              xOrigin = position.overlayX === 'start' ? 'left' : 'right';
            }

            for (var i = 0; i < elements.length; i++) {
              elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
            }
          }
          /**
           * Gets the position and size of the overlay's sizing container.
           *
           * This method does no measuring and applies no styles so that we can cheaply compute the
           * bounds for all positions and choose the best fit based on these results.
           * @private
           * @param {?} origin
           * @param {?} position
           * @return {?}
           */

        }, {
          key: "_calculateBoundingBoxRect",
          value: function _calculateBoundingBoxRect(origin, position) {
            /** @type {?} */
            var viewport = this._viewportRect;
            /** @type {?} */

            var isRtl = this._isRtl();
            /** @type {?} */


            var height;
            /** @type {?} */

            var top;
            /** @type {?} */

            var bottom;

            if (position.overlayY === 'top') {
              // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
              top = origin.y;
              height = viewport.height - top + this._viewportMargin;
            } else if (position.overlayY === 'bottom') {
              // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
              // the viewport margin back in, because the viewport rect is narrowed down to remove the
              // margin, whereas the `origin` position is calculated based on its `ClientRect`.
              bottom = viewport.height - origin.y + this._viewportMargin * 2;
              height = viewport.height - bottom + this._viewportMargin;
            } else {
              // If neither top nor bottom, it means that the overlay is vertically centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.bottom - origin.y` and
              // `origin.y - viewport.top`.

              /** @type {?} */
              var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
              /** @type {?} */

              var previousHeight = this._lastBoundingBoxSize.height;
              height = smallestDistanceToViewportEdge * 2;
              top = origin.y - smallestDistanceToViewportEdge;

              if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - previousHeight / 2;
              }
            } // The overlay is opening 'right-ward' (the content flows to the right).

            /** @type {?} */


            var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

            /** @type {?} */

            var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
            /** @type {?} */

            var width;
            /** @type {?} */

            var left;
            /** @type {?} */

            var right;

            if (isBoundedByLeftViewportEdge) {
              right = viewport.width - origin.x + this._viewportMargin;
              width = origin.x - this._viewportMargin;
            } else if (isBoundedByRightViewportEdge) {
              left = origin.x;
              width = viewport.right - origin.x;
            } else {
              // If neither start nor end, it means that the overlay is horizontally centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.right - origin.x` and
              // `origin.x - viewport.left`.

              /** @type {?} */
              var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
              /** @type {?} */


              var previousWidth = this._lastBoundingBoxSize.width;
              width = _smallestDistanceToViewportEdge * 2;
              left = origin.x - _smallestDistanceToViewportEdge;

              if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - previousWidth / 2;
              }
            }

            return {
              top:
              /** @type {?} */
              top,
              left:
              /** @type {?} */
              left,
              bottom:
              /** @type {?} */
              bottom,
              right:
              /** @type {?} */
              right,
              width: width,
              height: height
            };
          }
          /**
           * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
           * origin's connection point and stetches to the bounds of the viewport.
           *
           * @private
           * @param {?} origin The point on the origin element where the overlay is connected.
           * @param {?} position The position preference
           * @return {?}
           */

        }, {
          key: "_setBoundingBoxStyles",
          value: function _setBoundingBoxStyles(origin, position) {
            /** @type {?} */
            var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
            // when applying a new size.


            if (!this._isInitialRender && !this._growAfterOpen) {
              boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
              boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
            }
            /** @type {?} */


            var styles =
            /** @type {?} */
            {};

            if (this._hasExactPosition()) {
              styles.top = styles.left = '0';
              styles.bottom = styles.right = '';
              styles.width = styles.height = '100%';
            } else {
              /** @type {?} */
              var maxHeight = this._overlayRef.getConfig().maxHeight;
              /** @type {?} */


              var maxWidth = this._overlayRef.getConfig().maxWidth;

              styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.height);
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.top);
              styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.bottom);
              styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.width);
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.left);
              styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

              if (position.overlayX === 'center') {
                styles.alignItems = 'center';
              } else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
              }

              if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
              } else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
              }

              if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxHeight);
              }

              if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxWidth);
              }
            }

            this._lastBoundingBoxSize = boundingBoxRect;
            extendStyles(
            /** @type {?} */
            this._boundingBox.style, styles);
          }
          /**
           * Resets the styles for the bounding box so that a new positioning can be computed.
           * @private
           * @return {?}
           */

        }, {
          key: "_resetBoundingBoxStyles",
          value: function _resetBoundingBoxStyles() {
            extendStyles(
            /** @type {?} */
            this._boundingBox.style,
            /** @type {?} */
            {
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }
          /**
           * Resets the styles for the overlay pane so that a new positioning can be computed.
           * @private
           * @return {?}
           */

        }, {
          key: "_resetOverlayElementStyles",
          value: function _resetOverlayElementStyles() {
            extendStyles(this._pane.style,
            /** @type {?} */
            {
              top: '',
              left: '',
              bottom: '',
              right: '',
              position: '',
              transform: ''
            });
          }
          /**
           * Sets positioning styles to the overlay element.
           * @private
           * @param {?} originPoint
           * @param {?} position
           * @return {?}
           */

        }, {
          key: "_setOverlayElementStyles",
          value: function _setOverlayElementStyles(originPoint, position) {
            /** @type {?} */
            var styles =
            /** @type {?} */
            {};

            if (this._hasExactPosition()) {
              /** @type {?} */
              var scrollPosition = this._viewportRuler.getViewportScrollPosition();

              extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
              extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
            } else {
              styles.position = 'static';
            } // Use a transform to apply the offsets. We do this because the `center` positions rely on
            // being in the normal flex flow and setting a `top` / `left` at all will completely throw
            // off the position. We also can't use margins, because they won't have an effect in some
            // cases where the element doesn't have anything to "push off of". Finally, this works
            // better both with flexible and non-flexible positioning.

            /** @type {?} */


            var transformString = '';
            /** @type {?} */

            var offsetX = this._getOffset(position, 'x');
            /** @type {?} */


            var offsetY = this._getOffset(position, 'y');

            if (offsetX) {
              transformString += "translateX(".concat(offsetX, "px) ");
            }

            if (offsetY) {
              transformString += "translateY(".concat(offsetY, "px)");
            }

            styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
            // we need these values to both be set to "100%" for the automatic flexible sizing to work.
            // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.

            if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
              styles.maxHeight = '';
            }

            if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
              styles.maxWidth = '';
            }

            extendStyles(this._pane.style, styles);
          }
          /**
           * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
           * @private
           * @param {?} position
           * @param {?} originPoint
           * @param {?} scrollPosition
           * @return {?}
           */

        }, {
          key: "_getExactOverlayY",
          value: function _getExactOverlayY(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the
            // preferred position has changed since the last `apply`.

            /** @type {?} */
            var styles =
            /** @type {?} */
            {
              top: null,
              bottom: null
            };
            /** @type {?} */

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            }
            /** @type {?} */


            var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
            // autocomplete), mobile browsers will shift everything in order to put the input in the middle
            // of the screen and to make space for the virtual keyboard. We need to account for this offset,
            // otherwise our positioning will be thrown off.


            overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
            // above or below the origin and the direction in which the element will expand.

            if (position.overlayY === 'bottom') {
              // When using `bottom`, we adjust the y position such that it is the distance
              // from the bottom of the viewport rather than the top.

              /** @type {?} */
              var documentHeight =
              /** @type {?} */
              this._document.documentElement.clientHeight;
              styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
            } else {
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.y);
            }

            return styles;
          }
          /**
           * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
           * @private
           * @param {?} position
           * @param {?} originPoint
           * @param {?} scrollPosition
           * @return {?}
           */

        }, {
          key: "_getExactOverlayX",
          value: function _getExactOverlayX(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the preferred position has
            // changed since the last `apply`.

            /** @type {?} */
            var styles =
            /** @type {?} */
            {
              left: null,
              right: null
            };
            /** @type {?} */

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
            // or "after" the origin, which determines the direction in which the element will expand.
            // For the horizontal axis, the meaning of "before" and "after" change based on whether the
            // page is in RTL or LTR.

            /** @type {?} */


            var horizontalStyleProperty;

            if (this._isRtl()) {
              horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
            } else {
              horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
            } // When we're setting `right`, we adjust the x position such that it is the distance
            // from the right edge of the viewport rather than the left edge.


            if (horizontalStyleProperty === 'right') {
              /** @type {?} */
              var documentWidth =
              /** @type {?} */
              this._document.documentElement.clientWidth;
              styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
            } else {
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.x);
            }

            return styles;
          }
          /**
           * Gets the view properties of the trigger and overlay, including whether they are clipped
           * or completely outside the view of any of the strategy's scrollables.
           * @private
           * @return {?}
           */

        }, {
          key: "_getScrollVisibility",
          value: function _getScrollVisibility() {
            // Note: needs fresh rects since the position could've changed.

            /** @type {?} */
            var originBounds = this._getOriginRect();
            /** @type {?} */


            var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
            // every time, we should be able to use the scrollTop of the containers if the size of those
            // containers hasn't changed.

            /** @type {?} */


            var scrollContainerBounds = this._scrollables.map(
            /**
            * @param {?} scrollable
            * @return {?}
            */
            function (scrollable) {
              return scrollable.getElementRef().nativeElement.getBoundingClientRect();
            });

            return {
              isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
              isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
              isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
              isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
            };
          }
          /**
           * Subtracts the amount that an element is overflowing on an axis from its length.
           * @private
           * @param {?} length
           * @param {...?} overflows
           * @return {?}
           */

        }, {
          key: "_subtractOverflows",
          value: function _subtractOverflows(length) {
            for (var _len2 = arguments.length, overflows = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              overflows[_key2 - 1] = arguments[_key2];
            }

            return overflows.reduce(
            /**
            * @param {?} currentValue
            * @param {?} currentOverflow
            * @return {?}
            */
            function (currentValue, currentOverflow) {
              return currentValue - Math.max(currentOverflow, 0);
            }, length);
          }
          /**
           * Narrows the given viewport rect by the current _viewportMargin.
           * @private
           * @return {?}
           */

        }, {
          key: "_getNarrowedViewportRect",
          value: function _getNarrowedViewportRect() {
            // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
            // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
            // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
            // and `innerHeight` that do. This is necessary, because the overlay container uses
            // 100% `width` and `height` which don't include the scrollbar either.

            /** @type {?} */
            var width =
            /** @type {?} */
            this._document.documentElement.clientWidth;
            /** @type {?} */

            var height =
            /** @type {?} */
            this._document.documentElement.clientHeight;
            /** @type {?} */

            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            return {
              top: scrollPosition.top + this._viewportMargin,
              left: scrollPosition.left + this._viewportMargin,
              right: scrollPosition.left + width - this._viewportMargin,
              bottom: scrollPosition.top + height - this._viewportMargin,
              width: width - 2 * this._viewportMargin,
              height: height - 2 * this._viewportMargin
            };
          }
          /**
           * Whether the we're dealing with an RTL context
           * @private
           * @return {?}
           */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._overlayRef.getDirection() === 'rtl';
          }
          /**
           * Determines whether the overlay uses exact or flexible positioning.
           * @private
           * @return {?}
           */

        }, {
          key: "_hasExactPosition",
          value: function _hasExactPosition() {
            return !this._hasFlexibleDimensions || this._isPushed;
          }
          /**
           * Retrieves the offset of a position along the x or y axis.
           * @private
           * @param {?} position
           * @param {?} axis
           * @return {?}
           */

        }, {
          key: "_getOffset",
          value: function _getOffset(position, axis) {
            if (axis === 'x') {
              // We don't do something like `position['offset' + axis]` in
              // order to avoid breking minifiers that rename properties.
              return position.offsetX == null ? this._offsetX : position.offsetX;
            }

            return position.offsetY == null ? this._offsetY : position.offsetY;
          }
          /**
           * Validates that the current position match the expected values.
           * @private
           * @return {?}
           */

        }, {
          key: "_validatePositions",
          value: function _validatePositions() {
            if (!this._preferredPositions.length) {
              throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
            } // TODO(crisbeto): remove these once Angular's template type
            // checking is advanced enough to catch these cases.


            this._preferredPositions.forEach(
            /**
            * @param {?} pair
            * @return {?}
            */
            function (pair) {
              validateHorizontalPosition('originX', pair.originX);
              validateVerticalPosition('originY', pair.originY);
              validateHorizontalPosition('overlayX', pair.overlayX);
              validateVerticalPosition('overlayY', pair.overlayY);
            });
          }
          /**
           * Adds a single CSS class or an array of classes on the overlay panel.
           * @private
           * @param {?} cssClasses
           * @return {?}
           */

        }, {
          key: "_addPanelClasses",
          value: function _addPanelClasses(cssClasses) {
            var _this51 = this;

            if (this._pane) {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(
              /**
              * @param {?} cssClass
              * @return {?}
              */
              function (cssClass) {
                if (cssClass !== '' && _this51._appliedPanelClasses.indexOf(cssClass) === -1) {
                  _this51._appliedPanelClasses.push(cssClass);

                  _this51._pane.classList.add(cssClass);
                }
              });
            }
          }
          /**
           * Clears the classes that the position strategy has applied from the overlay panel.
           * @private
           * @return {?}
           */

        }, {
          key: "_clearPanelClasses",
          value: function _clearPanelClasses() {
            var _this52 = this;

            if (this._pane) {
              this._appliedPanelClasses.forEach(
              /**
              * @param {?} cssClass
              * @return {?}
              */
              function (cssClass) {
                _this52._pane.classList.remove(cssClass);
              });

              this._appliedPanelClasses = [];
            }
          }
          /**
           * Returns the ClientRect of the current origin.
           * @private
           * @return {?}
           */

        }, {
          key: "_getOriginRect",
          value: function _getOriginRect() {
            /** @type {?} */
            var origin = this._origin;

            if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]) {
              return origin.nativeElement.getBoundingClientRect();
            }

            if (origin instanceof HTMLElement) {
              return origin.getBoundingClientRect();
            }
            /** @type {?} */


            var width = origin.width || 0;
            /** @type {?} */

            var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

            return {
              top: origin.y,
              bottom: origin.y + height,
              left: origin.x,
              right: origin.x + width,
              height: height,
              width: width
            };
          }
        }, {
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
        }]);

        return FlexibleConnectedPositionStrategy;
      }();
      /**
       * Shallow-extends a stylesheet object with another stylesheet object.
       * @param {?} dest
       * @param {?} source
       * @return {?}
       */


      function extendStyles(dest, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
          }
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative to some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
       * \@breaking-change 8.0.0
       */


      var ConnectedPositionStrategy = /*#__PURE__*/function () {
        /**
         * @param {?} originPos
         * @param {?} overlayPos
         * @param {?} connectedTo
         * @param {?} viewportRuler
         * @param {?} document
         * @param {?} platform
         * @param {?} overlayContainer
         */
        function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
          _classCallCheck(this, ConnectedPositionStrategy);

          /**
           * Ordered list of preferred positions, from most to least desirable.
           */
          this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
          // the extra logic, we create an instance of the positioning strategy that has some
          // defaults that make it behave as the old position strategy and to which we'll
          // proxy all of the API calls.

          this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
          this.withFallbackPosition(originPos, overlayPos);
        }
        /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */


        _createClass(ConnectedPositionStrategy, [{
          key: "attach",

          /**
           * Attach this position strategy to an overlay.
           * @param {?} overlayRef
           * @return {?}
           */
          value: function attach(overlayRef) {
            this._overlayRef = overlayRef;

            this._positionStrategy.attach(overlayRef);

            if (this._direction) {
              overlayRef.setDirection(this._direction);
              this._direction = null;
            }
          }
          /**
           * Disposes all resources used by the position strategy.
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            this._positionStrategy.dispose();
          }
          /**
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "detach",
          value: function detach() {
            this._positionStrategy.detach();
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin fits on-screen.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "apply",
          value: function apply() {
            this._positionStrategy.apply();
          }
          /**
           * Re-positions the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           * @return {?}
           */

        }, {
          key: "recalculateLastPosition",
          value: function recalculateLastPosition() {
            this._positionStrategy.reapplyLastPosition();
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           * @param {?} scrollables
           * @return {?}
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._positionStrategy.withScrollableContainers(scrollables);
          }
          /**
           * Adds a new preferred fallback position.
           * @template THIS
           * @this {THIS}
           * @param {?} originPos
           * @param {?} overlayPos
           * @param {?=} offsetX
           * @param {?=} offsetY
           * @return {THIS}
           */

        }, {
          key: "withFallbackPosition",
          value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
            /** @type {?} */
            var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

            /** @type {?} */
            this._preferredPositions.push(position);

            /** @type {?} */
            this._positionStrategy.withPositions(
            /** @type {?} */
            this._preferredPositions);

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the layout direction so the overlay's position can be adjusted to match.
           * @template THIS
           * @this {THIS}
           * @param {?} dir New layout direction.
           * @return {THIS}
           */

        }, {
          key: "withDirection",
          value: function withDirection(dir) {
            // Since the direction might be declared before the strategy is attached,
            // we save the value in a temporary property and we'll transfer it to the
            // overlay ref on attachment.
            if (
            /** @type {?} */
            this._overlayRef) {
              /** @type {?} */
              this._overlayRef.setDirection(dir);
            } else {
              /** @type {?} */
              this._direction = dir;
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets an offset for the overlay's connection point on the x-axis
           * @template THIS
           * @this {THIS}
           * @param {?} offset New offset in the X axis.
           * @return {THIS}
           */

        }, {
          key: "withOffsetX",
          value: function withOffsetX(offset) {
            /** @type {?} */
            this._positionStrategy.withDefaultOffsetX(offset);

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets an offset for the overlay's connection point on the y-axis
           * @template THIS
           * @this {THIS}
           * @param {?} offset New offset in the Y axis.
           * @return {THIS}
           */

        }, {
          key: "withOffsetY",
          value: function withOffsetY(offset) {
            /** @type {?} */
            this._positionStrategy.withDefaultOffsetY(offset);

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @template THIS
           * @this {THIS}
           * @param {?} isLocked Whether the overlay should locked in.
           * @return {THIS}
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition(isLocked) {
            /** @type {?} */
            this._positionStrategy.withLockedPosition(isLocked);

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Overwrites the current set of positions with an array of new ones.
           * @template THIS
           * @this {THIS}
           * @param {?} positions Position pairs to be set on the strategy.
           * @return {THIS}
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            /** @type {?} */
            this._preferredPositions = positions.slice();

            /** @type {?} */
            this._positionStrategy.withPositions(
            /** @type {?} */
            this._preferredPositions);

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the origin element, relative to which to position the overlay.
           * @template THIS
           * @this {THIS}
           * @param {?} origin Reference to the new origin element.
           * @return {THIS}
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            /** @type {?} */
            this._positionStrategy.setOrigin(origin);

            return (
              /** @type {?} */
              this
            );
          }
        }, {
          key: "_isRtl",
          get: function get() {
            return this._overlayRef.getDirection() === 'rtl';
          }
          /**
           * Emits an event when the connection point changes.
           * @return {?}
           */

        }, {
          key: "onPositionChange",
          get: function get() {
            return this._positionStrategy.positionChanges;
          }
          /**
           * Ordered list of preferred positions, from most to least desirable.
           * @return {?}
           */

        }, {
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
        }]);

        return ConnectedPositionStrategy;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class to be added to the overlay pane wrapper.
       * @type {?}
       */


      var wrapperClass = 'cdk-global-overlay-wrapper';
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * explicit position relative to the browser's viewport. We use flexbox, instead of
       * transforms, in order to avoid issues with subpixel rendering which can cause the
       * element to become blurry.
       */

      var GlobalPositionStrategy = /*#__PURE__*/function () {
        function GlobalPositionStrategy() {
          _classCallCheck(this, GlobalPositionStrategy);

          this._cssPosition = 'static';
          this._topOffset = '';
          this._bottomOffset = '';
          this._leftOffset = '';
          this._rightOffset = '';
          this._alignItems = '';
          this._justifyContent = '';
          this._width = '';
          this._height = '';
        }
        /**
         * @param {?} overlayRef
         * @return {?}
         */


        _createClass(GlobalPositionStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            /** @type {?} */
            var config = overlayRef.getConfig();
            this._overlayRef = overlayRef;

            if (this._width && !config.width) {
              overlayRef.updateSize({
                width: this._width
              });
            }

            if (this._height && !config.height) {
              overlayRef.updateSize({
                height: this._height
              });
            }

            overlayRef.hostElement.classList.add(wrapperClass);
            this._isDisposed = false;
          }
          /**
           * Sets the top position of the overlay. Clears any previously set vertical position.
           * @template THIS
           * @this {THIS}
           * @param {?=} value New top offset.
           * @return {THIS}
           */

        }, {
          key: "top",
          value: function top() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            /** @type {?} */
            this._bottomOffset = '';

            /** @type {?} */
            this._topOffset = value;

            /** @type {?} */
            this._alignItems = 'flex-start';
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the left position of the overlay. Clears any previously set horizontal position.
           * @template THIS
           * @this {THIS}
           * @param {?=} value New left offset.
           * @return {THIS}
           */

        }, {
          key: "left",
          value: function left() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            /** @type {?} */
            this._rightOffset = '';

            /** @type {?} */
            this._leftOffset = value;

            /** @type {?} */
            this._justifyContent = 'flex-start';
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the bottom position of the overlay. Clears any previously set vertical position.
           * @template THIS
           * @this {THIS}
           * @param {?=} value New bottom offset.
           * @return {THIS}
           */

        }, {
          key: "bottom",
          value: function bottom() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            /** @type {?} */
            this._topOffset = '';

            /** @type {?} */
            this._bottomOffset = value;

            /** @type {?} */
            this._alignItems = 'flex-end';
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the right position of the overlay. Clears any previously set horizontal position.
           * @template THIS
           * @this {THIS}
           * @param {?=} value New right offset.
           * @return {THIS}
           */

        }, {
          key: "right",
          value: function right() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            /** @type {?} */
            this._leftOffset = '';

            /** @type {?} */
            this._rightOffset = value;

            /** @type {?} */
            this._justifyContent = 'flex-end';
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the overlay width and clears any previously set width.
           * @deprecated Pass the `width` through the `OverlayConfig`.
           * \@breaking-change 8.0.0
           * @template THIS
           * @this {THIS}
           * @param {?=} value New width for the overlay
           * @return {THIS}
           */

        }, {
          key: "width",
          value: function width() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (
            /** @type {?} */
            this._overlayRef) {
              /** @type {?} */
              this._overlayRef.updateSize({
                width: value
              });
            } else {
              /** @type {?} */
              this._width = value;
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Sets the overlay height and clears any previously set height.
           * @deprecated Pass the `height` through the `OverlayConfig`.
           * \@breaking-change 8.0.0
           * @template THIS
           * @this {THIS}
           * @param {?=} value New height for the overlay
           * @return {THIS}
           */

        }, {
          key: "height",
          value: function height() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (
            /** @type {?} */
            this._overlayRef) {
              /** @type {?} */
              this._overlayRef.updateSize({
                height: value
              });
            } else {
              /** @type {?} */
              this._height = value;
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Centers the overlay horizontally with an optional offset.
           * Clears any previously set horizontal position.
           *
           * @template THIS
           * @this {THIS}
           * @param {?=} offset Overlay offset from the horizontal center.
           * @return {THIS}
           */

        }, {
          key: "centerHorizontally",
          value: function centerHorizontally() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            /** @type {?} */
            this.left(offset);

            /** @type {?} */
            this._justifyContent = 'center';
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Centers the overlay vertically with an optional offset.
           * Clears any previously set vertical position.
           *
           * @template THIS
           * @this {THIS}
           * @param {?=} offset Overlay offset from the vertical center.
           * @return {THIS}
           */

        }, {
          key: "centerVertically",
          value: function centerVertically() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            /** @type {?} */
            this.top(offset);

            /** @type {?} */
            this._alignItems = 'center';
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Apply the position to the element.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "apply",
          value: function apply() {
            // Since the overlay ref applies the strategy asynchronously, it could
            // have been disposed before it ends up being applied. If that is the
            // case, we shouldn't do anything.
            if (!this._overlayRef || !this._overlayRef.hasAttached()) {
              return;
            }
            /** @type {?} */


            var styles = this._overlayRef.overlayElement.style;
            /** @type {?} */

            var parentStyles = this._overlayRef.hostElement.style;
            /** @type {?} */

            var config = this._overlayRef.getConfig();

            styles.position = this._cssPosition;
            styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
            styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
            styles.marginBottom = this._bottomOffset;
            styles.marginRight = this._rightOffset;

            if (config.width === '100%') {
              parentStyles.justifyContent = 'flex-start';
            } else if (this._justifyContent === 'center') {
              parentStyles.justifyContent = 'center';
            } else if (this._overlayRef.getConfig().direction === 'rtl') {
              // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
              // don't want that because our positioning is explicitly `left` and `right`, hence
              // why we do another inversion to ensure that the overlay stays in the same position.
              // TODO: reconsider this if we add `start` and `end` methods.
              if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
              } else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
              }
            } else {
              parentStyles.justifyContent = this._justifyContent;
            }

            parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
          }
          /**
           * Cleans up the DOM changes from the position strategy.
           * \@docs-private
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed || !this._overlayRef) {
              return;
            }
            /** @type {?} */


            var styles = this._overlayRef.overlayElement.style;
            /** @type {?} */

            var parent = this._overlayRef.hostElement;
            /** @type {?} */

            var parentStyles = parent.style;
            parent.classList.remove(wrapperClass);
            parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
            this._overlayRef =
            /** @type {?} */
            null;
            this._isDisposed = true;
          }
        }]);

        return GlobalPositionStrategy;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Builder for overlay position strategy.
       */


      var OverlayPositionBuilder = /*#__PURE__*/function () {
        /**
         * @param {?} _viewportRuler
         * @param {?} _document
         * @param {?} _platform
         * @param {?} _overlayContainer
         */
        function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, OverlayPositionBuilder);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         * @return {?}
         */


        _createClass(OverlayPositionBuilder, [{
          key: "global",
          value: function global() {
            return new GlobalPositionStrategy();
          }
          /**
           * Creates a relative position strategy.
           * @deprecated Use `flexibleConnectedTo` instead.
           * \@breaking-change 8.0.0
           * @param {?} elementRef
           * @param {?} originPos
           * @param {?} overlayPos
           * @return {?}
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(elementRef, originPos, overlayPos) {
            return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
          /**
           * Creates a flexible position strategy.
           * @param {?} origin Origin relative to which to position the overlay.
           * @return {?}
           */

        }, {
          key: "flexibleConnectedTo",
          value: function flexibleConnectedTo(origin) {
            return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
        }]);

        return OverlayPositionBuilder;
      }();

      OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
        return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](OverlayContainer));
      };

      OverlayPositionBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: OverlayPositionBuilder,
        factory: OverlayPositionBuilder.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      OverlayPositionBuilder.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: OverlayContainer
        }];
      };
      /** @nocollapse */


      OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function OverlayPositionBuilder_Factory() {
          return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(OverlayContainer));
        },
        token: OverlayPositionBuilder,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: OverlayContainer
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Next overlay unique ID.
       * @type {?}
       */


      var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because the ComponentFactoryResolver
      // it needs is different based on where OverlayModule is imported.

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
       */

      var Overlay = /*#__PURE__*/function () {
        /**
         * @param {?} scrollStrategies
         * @param {?} _overlayContainer
         * @param {?} _componentFactoryResolver
         * @param {?} _positionBuilder
         * @param {?} _keyboardDispatcher
         * @param {?} _injector
         * @param {?} _ngZone
         * @param {?} _document
         * @param {?} _directionality
         * @param {?=} _location
         */
        function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
          _classCallCheck(this, Overlay);

          this.scrollStrategies = scrollStrategies;
          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._positionBuilder = _positionBuilder;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._injector = _injector;
          this._ngZone = _ngZone;
          this._document = _document;
          this._directionality = _directionality;
          this._location = _location;
        }
        /**
         * Creates an overlay.
         * @param {?=} config Configuration applied to the overlay.
         * @return {?} Reference to the created overlay.
         */


        _createClass(Overlay, [{
          key: "create",
          value: function create(config) {
            /** @type {?} */
            var host = this._createHostElement();
            /** @type {?} */


            var pane = this._createPaneElement(host);
            /** @type {?} */


            var portalOutlet = this._createPortalOutlet(pane);
            /** @type {?} */


            var overlayConfig = new OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
          }
          /**
           * Gets a position builder that can be used, via fluent API,
           * to construct and configure a position strategy.
           * @return {?} An overlay position builder.
           */

        }, {
          key: "position",
          value: function position() {
            return this._positionBuilder;
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @private
           * @param {?} host
           * @return {?} Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(host) {
            /** @type {?} */
            var pane = this._document.createElement('div');

            pane.id = "cdk-overlay-".concat(nextUniqueId++);
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
          }
          /**
           * Creates the host element that wraps around an overlay
           * and can be used for advanced positioning.
           * @private
           * @return {?} Newly-create host element.
           */

        }, {
          key: "_createHostElement",
          value: function _createHostElement() {
            /** @type {?} */
            var host = this._document.createElement('div');

            this._overlayContainer.getContainerElement().appendChild(host);

            return host;
          }
          /**
           * Create a DomPortalOutlet into which the overlay content can be loaded.
           * @private
           * @param {?} pane The DOM element to turn into a portal outlet.
           * @return {?} A portal outlet for the given DOM element.
           */

        }, {
          key: "_createPortalOutlet",
          value: function _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
              this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]);
            }

            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
          }
        }]);

        return Overlay;
      }();

      Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], 8));
      };

      Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: Overlay,
        factory: Overlay.ɵfac
      });
      /** @nocollapse */

      Overlay.ctorParameters = function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: ScrollStrategyOptions
          }, {
            type: OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
          }, {
            type: OverlayPositionBuilder
          }, {
            type: OverlayKeyboardDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Default set of positions for the overlay. Follows the behavior of a dropdown.
       * @type {?}
       */


      var defaultPositionList = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }];
      /**
       * Injection token that determines the scroll handling while the connected overlay is open.
       * @type {?}
       */

      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
      /**
       * Directive applied to an element to make it usable as an origin for an Overlay using a
       * ConnectedPositionStrategy.
       */

      var CdkOverlayOrigin =
      /**
       * @param {?} elementRef
       */
      function CdkOverlayOrigin(elementRef) {
        _classCallCheck(this, CdkOverlayOrigin);

        this.elementRef = elementRef;
      };

      CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
        return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: CdkOverlayOrigin,
        selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
        exportAs: ["cdkOverlayOrigin"]
      });
      /** @nocollapse */

      CdkOverlayOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
            exportAs: 'cdkOverlayOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive to facilitate declarative creation of an
       * Overlay using a FlexibleConnectedPositionStrategy.
       */


      var CdkConnectedOverlay = /*#__PURE__*/function () {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.

        /**
         * @param {?} _overlay
         * @param {?} templateRef
         * @param {?} viewContainerRef
         * @param {?} scrollStrategyFactory
         * @param {?} _dir
         */
        function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
          _classCallCheck(this, CdkConnectedOverlay);

          this._overlay = _overlay;
          this._dir = _dir;
          this._hasBackdrop = false;
          this._lockPosition = false;
          this._growAfterOpen = false;
          this._flexibleDimensions = false;
          this._push = false;
          this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Margin between the overlay and the viewport edges.
           */

          this.viewportMargin = 0;
          /**
           * Whether the overlay is open.
           */

          this.open = false;
          /**
           * Event emitted when the backdrop is clicked.
           */

          this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event emitted when the position has changed.
           */

          this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event emitted when the overlay has been attached.
           */

          this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event emitted when the overlay has been detached.
           */

          this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Emits when there are keyboard events that are targeted at the overlay.
           */

          this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](templateRef, viewContainerRef);
          this._scrollStrategyFactory = scrollStrategyFactory;
          this.scrollStrategy = this._scrollStrategyFactory();
        }
        /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */


        _createClass(CdkConnectedOverlay, [{
          key: "ngOnDestroy",

          /**
           * @return {?}
           */
          value: function ngOnDestroy() {
            if (this._overlayRef) {
              this._overlayRef.dispose();
            }

            this._backdropSubscription.unsubscribe();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._position) {
              this._updatePositionStrategy(this._position);

              this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight
              });

              if (changes['origin'] && this.open) {
                this._position.apply();
              }
            }

            if (changes['open']) {
              this.open ? this._attachOverlay() : this._detachOverlay();
            }
          }
          /**
           * Creates an overlay
           * @private
           * @return {?}
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this53 = this;

            if (!this.positions || !this.positions.length) {
              this.positions = defaultPositionList;
            }

            this._overlayRef = this._overlay.create(this._buildConfig());

            this._overlayRef.keydownEvents().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this53.overlayKeydown.next(event);

              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                event.preventDefault();

                _this53._detachOverlay();
              }
            });
          }
          /**
           * Builds the overlay config based on the directive's inputs
           * @private
           * @return {?}
           */

        }, {
          key: "_buildConfig",
          value: function _buildConfig() {
            /** @type {?} */
            var positionStrategy = this._position = this._createPositionStrategy();
            /** @type {?} */


            var overlayConfig = new OverlayConfig({
              direction: this._dir,
              positionStrategy: positionStrategy,
              scrollStrategy: this.scrollStrategy,
              hasBackdrop: this.hasBackdrop
            });

            if (this.width || this.width === 0) {
              overlayConfig.width = this.width;
            }

            if (this.height || this.height === 0) {
              overlayConfig.height = this.height;
            }

            if (this.minWidth || this.minWidth === 0) {
              overlayConfig.minWidth = this.minWidth;
            }

            if (this.minHeight || this.minHeight === 0) {
              overlayConfig.minHeight = this.minHeight;
            }

            if (this.backdropClass) {
              overlayConfig.backdropClass = this.backdropClass;
            }

            if (this.panelClass) {
              overlayConfig.panelClass = this.panelClass;
            }

            return overlayConfig;
          }
          /**
           * Updates the state of a position strategy, based on the values of the directive inputs.
           * @private
           * @param {?} positionStrategy
           * @return {?}
           */

        }, {
          key: "_updatePositionStrategy",
          value: function _updatePositionStrategy(positionStrategy) {
            var _this54 = this;

            /** @type {?} */
            var positions = this.positions.map(
            /**
            * @param {?} currentPosition
            * @return {?}
            */
            function (currentPosition) {
              return {
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || _this54.offsetX,
                offsetY: currentPosition.offsetY || _this54.offsetY,
                panelClass: currentPosition.panelClass || undefined
              };
            });
            return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition);
          }
          /**
           * Returns the position strategy of the overlay to be set on the overlay config
           * @private
           * @return {?}
           */

        }, {
          key: "_createPositionStrategy",
          value: function _createPositionStrategy() {
            var _this55 = this;

            /** @type {?} */
            var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

            this._updatePositionStrategy(strategy);

            strategy.positionChanges.subscribe(
            /**
            * @param {?} p
            * @return {?}
            */
            function (p) {
              return _this55.positionChange.emit(p);
            });
            return strategy;
          }
          /**
           * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
           * @private
           * @return {?}
           */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this56 = this;

            if (!this._overlayRef) {
              this._createOverlay();
            } else {
              // Update the overlay size, in case the directive's inputs have changed
              this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }

            if (!this._overlayRef.hasAttached()) {
              this._overlayRef.attach(this._templatePortal);

              this.attach.emit();
            }

            if (this.hasBackdrop) {
              this._backdropSubscription = this._overlayRef.backdropClick().subscribe(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this56.backdropClick.emit(event);
              });
            } else {
              this._backdropSubscription.unsubscribe();
            }
          }
          /**
           * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
           * @private
           * @return {?}
           */

        }, {
          key: "_detachOverlay",
          value: function _detachOverlay() {
            if (this._overlayRef) {
              this._overlayRef.detach();

              this.detach.emit();
            }

            this._backdropSubscription.unsubscribe();
          }
        }, {
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          }
          /**
           * @param {?} offsetX
           * @return {?}
           */
          ,
          set: function set(offsetX) {
            this._offsetX = offsetX;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /**
           * The offset in pixels for the overlay connection point on the y-axis
           * @return {?}
           */

        }, {
          key: "offsetY",
          get: function get() {
            return this._offsetY;
          }
          /**
           * @param {?} offsetY
           * @return {?}
           */
          ,
          set: function set(offsetY) {
            this._offsetY = offsetY;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /**
           * Whether or not the overlay should attach a backdrop.
           * @return {?}
           */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether or not the overlay should be locked when scrolling.
           * @return {?}
           */

        }, {
          key: "lockPosition",
          get: function get() {
            return this._lockPosition;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the overlay's width and height can be constrained to fit within the viewport.
           * @return {?}
           */

        }, {
          key: "flexibleDimensions",
          get: function get() {
            return this._flexibleDimensions;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the overlay can grow after the initial open when flexible positioning is turned on.
           * @return {?}
           */

        }, {
          key: "growAfterOpen",
          get: function get() {
            return this._growAfterOpen;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the overlay can be pushed on-screen if none of the provided positions fit.
           * @return {?}
           */

        }, {
          key: "push",
          get: function get() {
            return this._push;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * The associated overlay reference.
           * @return {?}
           */

        }, {
          key: "overlayRef",
          get: function get() {
            return this._overlayRef;
          }
          /**
           * The element's layout direction.
           * @return {?}
           */

        }, {
          key: "dir",
          get: function get() {
            return this._dir ? this._dir.value : 'ltr';
          }
        }]);

        return CdkConnectedOverlay;
      }();

      CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
        return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8));
      };

      CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: CdkConnectedOverlay,
        selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
        inputs: {
          viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
          open: ["cdkConnectedOverlayOpen", "open"],
          scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
          offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
          offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
          hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
          lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
          flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
          growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
          push: ["cdkConnectedOverlayPush", "push"],
          positions: ["cdkConnectedOverlayPositions", "positions"],
          origin: ["cdkConnectedOverlayOrigin", "origin"],
          width: ["cdkConnectedOverlayWidth", "width"],
          height: ["cdkConnectedOverlayHeight", "height"],
          minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
          minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
          backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
          panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"]
        },
        outputs: {
          backdropClick: "backdropClick",
          positionChange: "positionChange",
          attach: "attach",
          detach: "detach",
          overlayKeydown: "overlayKeydown"
        },
        exportAs: ["cdkConnectedOverlay"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      CdkConnectedOverlay.ctorParameters = function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      CdkConnectedOverlay.propDecorators = {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
            exportAs: 'cdkConnectedOverlay'
          }]
        }], function () {
          return [{
            type: Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          viewportMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayViewportMargin']
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayOpen']
          }],
          backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          attach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          detach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayScrollStrategy']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayOffsetX']
          }],
          offsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayOffsetY']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayHasBackdrop']
          }],
          lockPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayLockPosition']
          }],
          flexibleDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayFlexibleDimensions']
          }],
          growAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayGrowAfterOpen']
          }],
          push: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayPush']
          }],
          positions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayPositions']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayOrigin']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayWidth']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayHeight']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayMinWidth']
          }],
          minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayMinHeight']
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayBackdropClass']
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['cdkConnectedOverlayPanelClass']
          }]
        });
      })();
      /**
       * \@docs-private
       * @param {?} overlay
       * @return {?}
       */


      function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return (
          /**
          * @return {?}
          */
          function () {
            return overlay.scrollStrategies.reposition();
          }
        );
      }
      /**
       * \@docs-private
       * @type {?}
       */


      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
        provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
        deps: [Overlay],
        useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var OverlayModule = function OverlayModule() {
        _classCallCheck(this, OverlayModule);
      };

      OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: OverlayModule
      });
      OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function OverlayModule_Factory(t) {
          return new (t || OverlayModule)();
        },
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OverlayModule, {
          declarations: function declarations() {
            return [CdkConnectedOverlay, CdkOverlayOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]];
          },
          exports: function exports() {
            return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OverlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
            exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
            declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
            providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @deprecated Use `OverlayModule` instead.
       * \@breaking-change 8.0.0
       * \@docs-private
       * @type {?}
       */


      var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"], OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Alternative to OverlayContainer that supports correct displaying of overlay elements in
       * Fullscreen mode
       * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
       *
       * Should be provided in the root component.
       */

      var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
        _inherits(FullscreenOverlayContainer, _OverlayContainer);

        var _super13 = _createSuper(FullscreenOverlayContainer);

        /**
         * @param {?} _document
         */
        function FullscreenOverlayContainer(_document) {
          _classCallCheck(this, FullscreenOverlayContainer);

          return _super13.call(this, _document);
        }
        /**
         * @return {?}
         */


        _createClass(FullscreenOverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

            if (this._fullScreenEventName && this._fullScreenListener) {
              this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var _this57 = this;

            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

            this._adjustParentForFullscreenChange();

            this._addFullscreenChangeListener(
            /**
            * @return {?}
            */
            function () {
              return _this57._adjustParentForFullscreenChange();
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_adjustParentForFullscreenChange",
          value: function _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
              return;
            }
            /** @type {?} */


            var fullscreenElement = this.getFullscreenElement();
            /** @type {?} */

            var parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
          }
          /**
           * @private
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "_addFullscreenChangeListener",
          value: function _addFullscreenChangeListener(fn) {
            /** @type {?} */
            var eventName = this._getEventName();

            if (eventName) {
              if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
              }

              this._document.addEventListener(eventName, fn);

              this._fullScreenListener = fn;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getEventName",
          value: function _getEventName() {
            if (!this._fullScreenEventName) {
              /** @type {?} */
              var _document =
              /** @type {?} */
              this._document;

              if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
              } else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
              } else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
              } else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
              }
            }

            return this._fullScreenEventName;
          }
          /**
           * When the page is put into fullscreen mode, a specific element is specified.
           * Only that element and its children are visible when in fullscreen mode.
           * @return {?}
           */

        }, {
          key: "getFullscreenElement",
          value: function getFullscreenElement() {
            /** @type {?} */
            var _document =
            /** @type {?} */
            this._document;
            return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
          }
        }]);

        return FullscreenOverlayContainer;
      }(OverlayContainer);

      FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
        return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      FullscreenOverlayContainer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: FullscreenOverlayContainer,
        factory: FullscreenOverlayContainer.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      FullscreenOverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };
      /** @nocollapse */


      FullscreenOverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function FullscreenOverlayContainer_Factory() {
          return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
        },
        token: FullscreenOverlayContainer,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=overlay.js.map

      /***/

    },

    /***/
    "chLL":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/collections.js ***!
      \***********************************************************************/

    /*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */

    /***/
    function chLL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
        return UniqueSelectionDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
        return ArrayDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
        return isDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSource", function () {
        return DataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
        return getMultipleValuesInSingleSelectionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
        return SelectionModel;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @abstract
       * @template T
       */


      var DataSource = function DataSource() {
        _classCallCheck(this, DataSource);
      };
      /**
       * Checks whether an object is a data source.
       * @param {?} value
       * @return {?}
       */


      function isDataSource(value) {
        // Check if the value is a DataSource by observing if it has a connect function. Cannot
        // be checked as an `instanceof DataSource` since people could create their own sources
        // that match the interface, but don't extend DataSource.
        return value && typeof value.connect === 'function';
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * DataSource wrapper for a native array.
       * @template T
       */


      var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
        _inherits(ArrayDataSource, _DataSource);

        var _super14 = _createSuper(ArrayDataSource);

        /**
         * @param {?} _data
         */
        function ArrayDataSource(_data) {
          var _this58;

          _classCallCheck(this, ArrayDataSource);

          _this58 = _super14.call(this);
          _this58._data = _data;
          return _this58;
        }
        /**
         * @return {?}
         */


        _createClass(ArrayDataSource, [{
          key: "connect",
          value: function connect() {
            return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
          }
          /**
           * @return {?}
           */

        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return ArrayDataSource;
      }(DataSource);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class to be used to power selecting one or more options from a list.
       * @template T
       */


      var SelectionModel = /*#__PURE__*/function () {
        /**
         * @param {?=} _multiple
         * @param {?=} initiallySelectedValues
         * @param {?=} _emitChanges
         */
        function SelectionModel() {
          var _this59 = this;

          var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

          var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          _classCallCheck(this, SelectionModel);

          this._multiple = _multiple;
          this._emitChanges = _emitChanges;
          /**
           * Currently-selected values.
           */

          this._selection = new Set();
          /**
           * Keeps track of the deselected options that haven't been emitted by the change event.
           */

          this._deselectedToEmit = [];
          /**
           * Keeps track of the selected options that haven't been emitted by the change event.
           */

          this._selectedToEmit = [];
          /**
           * Event emitted when the value has changed.
           */

          this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          /**
           * Event emitted when the value has changed.
           * @deprecated Use `changed` instead.
           * \@breaking-change 8.0.0 To be changed to `changed`
           */

          this.onChange = this.changed;

          if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
              initiallySelectedValues.forEach(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return _this59._markSelected(value);
              });
            } else {
              this._markSelected(initiallySelectedValues[0]);
            } // Clear the array in order to avoid firing the change event for preselected values.


            this._selectedToEmit.length = 0;
          }
        }
        /**
         * Selected values.
         * @return {?}
         */


        _createClass(SelectionModel, [{
          key: "select",

          /**
           * Selects a value or an array of values.
           * @param {...?} values
           * @return {?}
           */
          value: function select() {
            var _this60 = this;

            for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              values[_key3] = arguments[_key3];
            }

            this._verifyValueAssignment(values);

            values.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this60._markSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Deselects a value or an array of values.
           * @param {...?} values
           * @return {?}
           */

        }, {
          key: "deselect",
          value: function deselect() {
            var _this61 = this;

            for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              values[_key4] = arguments[_key4];
            }

            this._verifyValueAssignment(values);

            values.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this61._unmarkSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Toggles a value between selected and deselected.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle(value) {
            this.isSelected(value) ? this.deselect(value) : this.select(value);
          }
          /**
           * Clears all of the selected values.
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            this._unmarkAll();

            this._emitChangeEvent();
          }
          /**
           * Determines whether a value is selected.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isSelected",
          value: function isSelected(value) {
            return this._selection.has(value);
          }
          /**
           * Determines whether the model does not have a value.
           * @return {?}
           */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._selection.size === 0;
          }
          /**
           * Determines whether the model has a value.
           * @return {?}
           */

        }, {
          key: "hasValue",
          value: function hasValue() {
            return !this.isEmpty();
          }
          /**
           * Sorts the selected values based on a predicate function.
           * @param {?=} predicate
           * @return {?}
           */

        }, {
          key: "sort",
          value: function sort(predicate) {
            if (this._multiple && this.selected) {
              /** @type {?} */
              this._selected.sort(predicate);
            }
          }
          /**
           * Gets whether multiple values can be selected.
           * @return {?}
           */

        }, {
          key: "isMultipleSelection",
          value: function isMultipleSelection() {
            return this._multiple;
          }
          /**
           * Emits a change event and clears the records of selected and deselected values.
           * @private
           * @return {?}
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            // Clear the selected values so they can be re-cached.
            this._selected = null;

            if (this._selectedToEmit.length || this._deselectedToEmit.length) {
              this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
              });
              this._deselectedToEmit = [];
              this._selectedToEmit = [];
            }
          }
          /**
           * Selects a value.
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_markSelected",
          value: function _markSelected(value) {
            if (!this.isSelected(value)) {
              if (!this._multiple) {
                this._unmarkAll();
              }

              this._selection.add(value);

              if (this._emitChanges) {
                this._selectedToEmit.push(value);
              }
            }
          }
          /**
           * Deselects a value.
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_unmarkSelected",
          value: function _unmarkSelected(value) {
            if (this.isSelected(value)) {
              this._selection["delete"](value);

              if (this._emitChanges) {
                this._deselectedToEmit.push(value);
              }
            }
          }
          /**
           * Clears out the selected values.
           * @private
           * @return {?}
           */

        }, {
          key: "_unmarkAll",
          value: function _unmarkAll() {
            var _this62 = this;

            if (!this.isEmpty()) {
              this._selection.forEach(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return _this62._unmarkSelected(value);
              });
            }
          }
          /**
           * Verifies the value assignment and throws an error if the specified value array is
           * including multiple values while the selection model is not supporting multiple values.
           * @private
           * @param {?} values
           * @return {?}
           */

        }, {
          key: "_verifyValueAssignment",
          value: function _verifyValueAssignment(values) {
            if (values.length > 1 && !this._multiple) {
              throw getMultipleValuesInSingleSelectionError();
            }
          }
        }, {
          key: "selected",
          get: function get() {
            if (!this._selected) {
              this._selected = Array.from(this._selection.values());
            }

            return this._selected;
          }
        }]);

        return SelectionModel;
      }();
      /**
       * Returns an error that reports that multiple values are passed into a selection model
       * with a single value.
       * \@docs-private
       * @return {?}
       */


      function getMultipleValuesInSingleSelectionError() {
        return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class to coordinate unique selection based on name.
       * Intended to be consumed as an Angular service.
       * This service is needed because native radio change events are only fired on the item currently
       * being selected, and we still need to uncheck the previous selection.
       *
       * This service does not *store* any IDs and names because they may change at any time, so it is
       * less error-prone if they are simply passed through when the events occur.
       */


      var UniqueSelectionDispatcher = /*#__PURE__*/function () {
        function UniqueSelectionDispatcher() {
          _classCallCheck(this, UniqueSelectionDispatcher);

          this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param {?} id ID of the item.
         * @param {?} name Name of the item.
         * @return {?}
         */


        _createClass(UniqueSelectionDispatcher, [{
          key: "notify",
          value: function notify(id, name) {
            var _iterator6 = _createForOfIteratorHelper(this._listeners),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var listener = _step6.value;
                listener(id, name);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
          /**
           * Listen for future changes to item selection.
           * @param {?} listener
           * @return {?} Function used to deregister listener
           */

        }, {
          key: "listen",
          value: function listen(listener) {
            var _this63 = this;

            this._listeners.push(listener);

            return (
              /**
              * @return {?}
              */
              function () {
                _this63._listeners = _this63._listeners.filter(
                /**
                * @param {?} registered
                * @return {?}
                */
                function (registered) {
                  return listener !== registered;
                });
              }
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._listeners = [];
          }
        }]);

        return UniqueSelectionDispatcher;
      }();

      UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
        return new (t || UniqueSelectionDispatcher)();
      };

      UniqueSelectionDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UniqueSelectionDispatcher,
        factory: UniqueSelectionDispatcher.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function UniqueSelectionDispatcher_Factory() {
          return new UniqueSelectionDispatcher();
        },
        token: UniqueSelectionDispatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=collections.js.map

      /***/

    },

    /***/
    "dEu6":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/coercion.js ***!
      \********************************************************************/

    /*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */

    /***/
    function dEu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
        return coerceBooleanProperty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
        return coerceNumberProperty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
        return _isNumberValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
        return coerceCssPixelValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
        return coerceElement;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Coerces a data-bound value (typically a string) to a boolean.
       * @param {?} value
       * @return {?}
       */


      function coerceBooleanProperty(value) {
        return value != null && "".concat(value) !== 'false';
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} value
       * @param {?=} fallbackValue
       * @return {?}
       */


      function coerceNumberProperty(value) {
        var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return _isNumberValue(value) ? Number(value) : fallbackValue;
      }
      /**
       * Whether the provided value is considered a number.
       * \@docs-private
       * @param {?} value
       * @return {?}
       */


      function _isNumberValue(value) {
        // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
        // and other non-number values as NaN, where Number just uses 0) but it considers the string
        // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
        return !isNaN(parseFloat(
        /** @type {?} */
        value)) && !isNaN(Number(value));
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Wraps the provided value in an array, unless the provided value is an array.
       * @template T
       * @param {?} value
       * @return {?}
       */


      function coerceArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Coerces a value to a CSS pixel value.
       * @param {?} value
       * @return {?}
       */


      function coerceCssPixelValue(value) {
        if (value == null) {
          return '';
        }

        return typeof value === 'string' ? value : "".concat(value, "px");
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Coerces an ElementRef or an Element into an element.
       * Useful for APIs that can accept either a ref or the native element itself.
       * @template T
       * @param {?} elementOrRef
       * @return {?}
       */


      function coerceElement(elementOrRef) {
        return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=coercion.js.map

      /***/

    },

    /***/
    "j14s":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js ***!
      \*********************************************************************/

    /*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */

    /***/
    function j14s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
        return AnimationCurves;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
        return AnimationDurations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
        return MatCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
        return MATERIAL_SANITY_CHECKS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
        return mixinDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
        return mixinColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
        return mixinDisableRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
        return mixinTabIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
        return mixinErrorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
        return mixinInitialized;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
        return NativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
        return MatNativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
        return MAT_DATE_LOCALE_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
        return MAT_DATE_LOCALE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
        return MAT_DATE_LOCALE_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
        return DateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
        return MAT_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
        return NativeDateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
        return MAT_NATIVE_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
        return ShowOnDirtyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
        return ErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
        return MAT_HAMMER_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
        return GestureConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLines", function () {
        return setLines;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLine", function () {
        return MatLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
        return MatLineSetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
        return MatLineModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
        return MatOptionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
        return _countGroupLabelsBeforeOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
        return _getOptionScrollPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
        return MatOptionSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
        return MAT_OPTION_PARENT_COMPONENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOption", function () {
        return MatOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
        return MatOptgroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
        return MAT_LABEL_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
        return MatRippleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
        return MAT_RIPPLE_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
        return MatRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleState", function () {
        return RippleState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
        return RippleRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
        return defaultRippleAnimationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
        return RippleRenderer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
        return MatPseudoCheckboxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
        return MatPseudoCheckbox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JAN", function () {
        return JAN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FEB", function () {
        return FEB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAR", function () {
        return MAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APR", function () {
        return APR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAY", function () {
        return MAY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JUN", function () {
        return JUN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JUL", function () {
        return JUL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUG", function () {
        return AUG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEP", function () {
        return SEP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OCT", function () {
        return OCT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NOV", function () {
        return NOV;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEC", function () {
        return DEC;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa1", function () {
        return MATERIAL_SANITY_CHECKS_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "FWMu");
      /* harmony import */


      var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk */
      "Bdq1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "dEu6");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "LSvS");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "tkJt");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "3+Bf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Current version of Angular Material.
       * @type {?}
       */


      var _c0 = ["*", [["mat-option"], ["ng-container"]]];
      var _c1 = ["*", "mat-option, ng-container"];

      function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "")("disabled", ctx_r0.disabled);
        }
      }

      var _c2 = ["*"];
      var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * \@docs-private
       */

      var AnimationCurves = function AnimationCurves() {
        _classCallCheck(this, AnimationCurves);
      };

      AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
      AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
      AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
      AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
      /**
       * \@docs-private
       */

      var AnimationDurations = function AnimationDurations() {
        _classCallCheck(this, AnimationDurations);
      };

      AnimationDurations.COMPLEX = '375ms';
      AnimationDurations.ENTERING = '225ms';
      AnimationDurations.EXITING = '195ms';
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Private version constant to circumvent test/build issues,
      // i.e. avoid core to depend on the @angular/material primary entry-point
      // Can be removed once the Material primary entry-point no longer
      // re-exports all secondary entry-points

      /** @type {?} */

      var VERSION$2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
      /**
       * \@docs-private
       * @return {?}
       */

      function MATERIAL_SANITY_CHECKS_FACTORY() {
        return true;
      }
      /**
       * Injection token that configures whether the Material sanity checks are enabled.
       * @type {?}
       */


      var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
        providedIn: 'root',
        factory: MATERIAL_SANITY_CHECKS_FACTORY
      });
      /**
       * Module that captures anything that should be loaded and/or run for *all* Angular Material
       * components. This includes Bidi, etc.
       *
       * This module should be imported to each top-level component module (e.g., MatTabsModule).
       */

      var MatCommonModule = /*#__PURE__*/function () {
        /**
         * @param {?} _sanityChecksEnabled
         * @param {?=} _hammerLoader
         */
        function MatCommonModule(_sanityChecksEnabled, _hammerLoader) {
          _classCallCheck(this, MatCommonModule);

          this._sanityChecksEnabled = _sanityChecksEnabled;
          this._hammerLoader = _hammerLoader;
          /**
           * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
           */

          this._hasDoneGlobalChecks = false;
          /**
           * Whether we've already checked for HammerJs availability.
           */

          this._hasCheckedHammer = false;
          /**
           * Reference to the global `document` object.
           */

          this._document = typeof document === 'object' && document ? document : null;
          /**
           * Reference to the global 'window' object.
           */

          this._window = typeof window === 'object' && window ? window : null;

          if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();

            this._checkThemeIsPresent();

            this._checkCdkVersionMatch();

            this._hasDoneGlobalChecks = true;
          }
        }
        /**
         * Whether any sanity checks are enabled
         * @private
         * @return {?}
         */


        _createClass(MatCommonModule, [{
          key: "_areChecksEnabled",
          value: function _areChecksEnabled() {
            return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
          }
          /**
           * Whether the code is running in tests.
           * @private
           * @return {?}
           */

        }, {
          key: "_isTestEnv",
          value: function _isTestEnv() {
            /** @type {?} */
            var window =
            /** @type {?} */
            this._window;
            return window && (window.__karma__ || window.jasmine);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_checkDoctypeIsDefined",
          value: function _checkDoctypeIsDefined() {
            if (this._document && !this._document.doctype) {
              console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_checkThemeIsPresent",
          value: function _checkThemeIsPresent() {
            // We need to assert that the `body` is defined, because these checks run very early
            // and the `body` won't be defined if the consumer put their scripts in the `head`.
            if (!this._document || !this._document.body || typeof getComputedStyle !== 'function') {
              return;
            }
            /** @type {?} */


            var testElement = this._document.createElement('div');

            testElement.classList.add('mat-theme-loaded-marker');

            this._document.body.appendChild(testElement);
            /** @type {?} */


            var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
            // Firefox, the computed style is null if an application is running inside of a hidden iframe.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

            if (computedStyle && computedStyle.display !== 'none') {
              console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
            }

            this._document.body.removeChild(testElement);
          }
          /**
           * Checks whether the material version matches the cdk version
           * @private
           * @return {?}
           */

        }, {
          key: "_checkCdkVersionMatch",
          value: function _checkCdkVersionMatch() {
            if (VERSION$2.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
              console.warn('The Angular Material version (' + VERSION$2.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
            }
          }
          /**
           * Checks whether HammerJS is available.
           * @return {?}
           */

        }, {
          key: "_checkHammerIsAvailable",
          value: function _checkHammerIsAvailable() {
            if (this._hasCheckedHammer || !this._window) {
              return;
            }

            if (this._areChecksEnabled() && !
            /** @type {?} */
            this._window['Hammer'] && !this._hammerLoader) {
              console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
            }

            this._hasCheckedHammer = true;
          }
        }]);

        return MatCommonModule;
      }();

      MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCommonModule
      });
      MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatCommonModule_Factory(t) {
          return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"], 8));
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
      });
      /** @nocollapse */

      MatCommonModule.ctorParameters = function () {
        return [{
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"]]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, {
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
          }]
        }], function () {
          return [{
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MATERIAL_SANITY_CHECKS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Mixin to augment a directive with a `disabled` property.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinDisabled(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super15 = _createSuper(_class);

          /**
           * @param {...?} args
           */
          function _class() {
            var _this64;

            _classCallCheck(this, _class);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this64 = _super15.call.apply(_super15, [this].concat(args));
            _this64._disabled = false;
            return _this64;
          }
          /**
           * @return {?}
           */


          _createClass(_class, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Mixin to augment a directive with a `color` property.
       * @template T
       * @param {?} base
       * @param {?=} defaultColor
       * @return {?}
       */


      function mixinColor(base, defaultColor) {
        return /*#__PURE__*/function (_base2) {
          _inherits(_class2, _base2);

          var _super16 = _createSuper(_class2);

          _createClass(_class2, [{
            key: "color",

            /**
             * @return {?}
             */
            get: function get() {
              return this._color;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              /** @type {?} */
              var colorPalette = value || defaultColor;

              if (colorPalette !== this._color) {
                if (this._color) {
                  this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
                }

                if (colorPalette) {
                  this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
                }

                this._color = colorPalette;
              }
            }
            /**
             * @param {...?} args
             */

          }]);

          function _class2() {
            var _this65;

            _classCallCheck(this, _class2);

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this65 = _super16.call.apply(_super16, [this].concat(args)); // Set the default color that can be specified from the mixin.

            _this65.color = defaultColor;
            return _this65;
          }

          return _class2;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Mixin to augment a directive with a `disableRipple` property.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinDisableRipple(base) {
        return /*#__PURE__*/function (_base3) {
          _inherits(_class3, _base3);

          var _super17 = _createSuper(_class3);

          /**
           * @param {...?} args
           */
          function _class3() {
            var _this66;

            _classCallCheck(this, _class3);

            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            _this66 = _super17.call.apply(_super17, [this].concat(args));
            _this66._disableRipple = false;
            return _this66;
          }
          /**
           * Whether the ripple effect is disabled or not.
           * @return {?}
           */


          _createClass(_class3, [{
            key: "disableRipple",
            get: function get() {
              return this._disableRipple;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class3;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Mixin to augment a directive with a `tabIndex` property.
       * @template T
       * @param {?} base
       * @param {?=} defaultTabIndex
       * @return {?}
       */


      function mixinTabIndex(base) {
        var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return /*#__PURE__*/function (_base4) {
          _inherits(_class4, _base4);

          var _super18 = _createSuper(_class4);

          /**
           * @param {...?} args
           */
          function _class4() {
            var _this67;

            _classCallCheck(this, _class4);

            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            _this67 = _super18.call.apply(_super18, [this].concat(args));
            _this67._tabIndex = defaultTabIndex;
            return _this67;
          }
          /**
           * @return {?}
           */


          _createClass(_class4, [{
            key: "tabIndex",
            get: function get() {
              return this.disabled ? -1 : this._tabIndex;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              // If the specified tabIndex value is null or undefined, fall back to the default value.
              this._tabIndex = value != null ? value : defaultTabIndex;
            }
          }]);

          return _class4;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Mixin to augment a directive with updateErrorState method.
       * For component with `errorState` and need to update `errorState`.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinErrorState(base) {
        return /*#__PURE__*/function (_base5) {
          _inherits(_class5, _base5);

          var _super19 = _createSuper(_class5);

          /**
           * @param {...?} args
           */
          function _class5() {
            var _this68;

            _classCallCheck(this, _class5);

            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }

            _this68 = _super19.call.apply(_super19, [this].concat(args));
            /**
             * Whether the component is in an error state.
             */

            _this68.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */

            _this68.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            return _this68;
          }
          /**
           * @return {?}
           */


          _createClass(_class5, [{
            key: "updateErrorState",
            value: function updateErrorState() {
              /** @type {?} */
              var oldState = this.errorState;
              /** @type {?} */

              var parent = this._parentFormGroup || this._parentForm;
              /** @type {?} */

              var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
              /** @type {?} */

              var control = this.ngControl ?
              /** @type {?} */
              this.ngControl.control : null;
              /** @type {?} */

              var newState = matcher.isErrorState(control, parent);

              if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
              }
            }
          }]);

          return _class5;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
       * @template T
       * @param {?} base
       * @return {?}
       */


      function mixinInitialized(base) {
        return /*#__PURE__*/function (_base6) {
          _inherits(_class6, _base6);

          var _super20 = _createSuper(_class6);

          /**
           * @param {...?} args
           */
          function _class6() {
            var _this69;

            _classCallCheck(this, _class6);

            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }

            _this69 = _super20.call.apply(_super20, [this].concat(args));
            /**
             * Whether this directive has been marked as initialized.
             */

            _this69._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */

            _this69._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */

            _this69.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
            /**
            * @param {?} subscriber
            * @return {?}
            */
            function (subscriber) {
              // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
              // when _markInitialized is called.
              if (_this69._isInitialized) {
                _this69._notifySubscriber(subscriber);
              } else {
                /** @type {?} */
                _this69._pendingSubscribers.push(subscriber);
              }
            });
            return _this69;
          }
          /**
           * Marks the state as initialized and notifies pending subscribers. Should be called at the end
           * of ngOnInit.
           * \@docs-private
           * @return {?}
           */


          _createClass(_class6, [{
            key: "_markInitialized",
            value: function _markInitialized() {
              if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
              }

              this._isInitialized = true;

              /** @type {?} */
              this._pendingSubscribers.forEach(this._notifySubscriber);

              this._pendingSubscribers = null;
            }
            /**
             * Emits and completes the subscriber stream (should only emit once).
             * @param {?} subscriber
             * @return {?}
             */

          }, {
            key: "_notifySubscriber",
            value: function _notifySubscriber(subscriber) {
              subscriber.next();
              subscriber.complete();
            }
          }]);

          return _class6;
        }(base);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * InjectionToken for datepicker that can be used to override default locale code.
       * @type {?}
       */


      var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
        providedIn: 'root',
        factory: MAT_DATE_LOCALE_FACTORY
      });
      /**
       * \@docs-private
       * @return {?}
       */

      function MAT_DATE_LOCALE_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
      }
      /**
       * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
       * If you are importing and providing this in your code you can simply remove it.
       * @deprecated
       * \@breaking-change 8.0.0
       * @type {?}
       */


      var MAT_DATE_LOCALE_PROVIDER = {
        provide: MAT_DATE_LOCALE,
        useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
      };
      /**
       * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
       * @abstract
       * @template D
       */

      var DateAdapter = /*#__PURE__*/function () {
        function DateAdapter() {
          _classCallCheck(this, DateAdapter);

          this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        /**
         * A stream that emits when the locale changes.
         * @return {?}
         */


        _createClass(DateAdapter, [{
          key: "deserialize",

          /**
           * Attempts to deserialize a value to a valid date object. This is different from parsing in that
           * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
           * string). The default implementation does not allow any deserialization, it simply checks that
           * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
           * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
           * support passing values from your backend directly to these properties by overriding this method
           * to also deserialize the format used by your backend.
           * @param {?} value The value to be deserialized into a date object.
           * @return {?} The deserialized date object, either a valid date, null if the value can be
           *     deserialized into a null date (e.g. the empty string), or an invalid date.
           */
          value: function deserialize(value) {
            if (value == null || this.isDateInstance(value) && this.isValid(value)) {
              return value;
            }

            return this.invalid();
          }
          /**
           * Sets the locale used for all dates.
           * @param {?} locale The new locale.
           * @return {?}
           */

        }, {
          key: "setLocale",
          value: function setLocale(locale) {
            this.locale = locale;

            this._localeChanges.next();
          }
          /**
           * Compares two dates.
           * @param {?} first The first date to compare.
           * @param {?} second The second date to compare.
           * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
           *     a number greater than 0 if the first date is later.
           */

        }, {
          key: "compareDate",
          value: function compareDate(first, second) {
            return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
          }
          /**
           * Checks if two dates are equal.
           * @param {?} first The first date to check.
           * @param {?} second The second date to check.
           * @return {?} Whether the two dates are equal.
           *     Null dates are considered equal to other null dates.
           */

        }, {
          key: "sameDate",
          value: function sameDate(first, second) {
            if (first && second) {
              /** @type {?} */
              var firstValid = this.isValid(first);
              /** @type {?} */

              var secondValid = this.isValid(second);

              if (firstValid && secondValid) {
                return !this.compareDate(first, second);
              }

              return firstValid == secondValid;
            }

            return first == second;
          }
          /**
           * Clamp the given date between min and max dates.
           * @param {?} date The date to clamp.
           * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
           * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
           * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
           *     otherwise `date`.
           */

        }, {
          key: "clampDate",
          value: function clampDate(date, min, max) {
            if (min && this.compareDate(date, min) < 0) {
              return min;
            }

            if (max && this.compareDate(date, max) > 0) {
              return max;
            }

            return date;
          }
        }, {
          key: "localeChanges",
          get: function get() {
            return this._localeChanges;
          }
        }]);

        return DateAdapter;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // TODO(mmalerba): Remove when we no longer support safari 9.

      /**
       * Whether the browser supports the Intl API.
       * @type {?}
       */

      var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        SUPPORTS_INTL_API = typeof Intl != 'undefined';
      } catch (_a) {
        SUPPORTS_INTL_API = false;
      }
      /**
       * The default month names to use if Intl API is not available.
       * @type {?}
       */


      var DEFAULT_MONTH_NAMES = {
        'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
      };

      var ɵ0 =
      /**
      * @param {?} i
      * @return {?}
      */
      function ɵ0(i) {
        return String(i + 1);
      };
      /**
       * The default date names to use if Intl API is not available.
       * @type {?}
       */


      var DEFAULT_DATE_NAMES = range(31, ɵ0);
      /**
       * The default day of the week names to use if Intl API is not available.
       * @type {?}
       */

      var DEFAULT_DAY_OF_WEEK_NAMES = {
        'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      };
      /**
       * Matches strings that have the form of a valid RFC 3339 string
       * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
       * because the regex will match strings an with out of bounds month, date, etc.
       * @type {?}
       */

      var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
      /**
       * Creates an array and fills it with values.
       * @template T
       * @param {?} length
       * @param {?} valueFunction
       * @return {?}
       */

      function range(length, valueFunction) {
        /** @type {?} */
        var valuesArray = Array(length);

        for (var i = 0; i < length; i++) {
          valuesArray[i] = valueFunction(i);
        }

        return valuesArray;
      }
      /**
       * Adapts the native JS Date for use with cdk-based components that work with dates.
       */


      var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
        _inherits(NativeDateAdapter, _DateAdapter);

        var _super21 = _createSuper(NativeDateAdapter);

        /**
         * @param {?} matDateLocale
         * @param {?} platform
         */
        function NativeDateAdapter(matDateLocale, platform) {
          var _thisSuper, _this70;

          _classCallCheck(this, NativeDateAdapter);

          _this70 = _super21.call(this);
          /**
           * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
           * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
           * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
           * will produce `'8/13/1800'`.
           *
           * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
           * getting the string representation of a Date object from its utc representation. We're keeping
           * it here for sometime, just for precaution, in case we decide to revert some of these changes
           * though.
           */

          _this70.useUtcForDisplay = true;

          _get((_thisSuper = _assertThisInitialized(_this70), _getPrototypeOf(NativeDateAdapter.prototype)), "setLocale", _thisSuper).call(_thisSuper, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


          _this70.useUtcForDisplay = !platform.TRIDENT;
          _this70._clampDate = platform.TRIDENT || platform.EDGE;
          return _this70;
        }
        /**
         * @param {?} date
         * @return {?}
         */


        _createClass(NativeDateAdapter, [{
          key: "getYear",
          value: function getYear(date) {
            return date.getFullYear();
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getMonth",
          value: function getMonth(date) {
            return date.getMonth();
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getDate",
          value: function getDate(date) {
            return date.getDate();
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getDayOfWeek",
          value: function getDayOfWeek(date) {
            return date.getDay();
          }
          /**
           * @param {?} style
           * @return {?}
           */

        }, {
          key: "getMonthNames",
          value: function getMonthNames(style) {
            var _this71 = this;

            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                month: style,
                timeZone: 'utc'
              });
              return range(12,
              /**
              * @param {?} i
              * @return {?}
              */
              function (i) {
                return _this71._stripDirectionalityCharacters(_this71._format(dtf, new Date(2017, i, 1)));
              });
            }

            return DEFAULT_MONTH_NAMES[style];
          }
          /**
           * @return {?}
           */

        }, {
          key: "getDateNames",
          value: function getDateNames() {
            var _this72 = this;

            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                day: 'numeric',
                timeZone: 'utc'
              });
              return range(31,
              /**
              * @param {?} i
              * @return {?}
              */
              function (i) {
                return _this72._stripDirectionalityCharacters(_this72._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DATE_NAMES;
          }
          /**
           * @param {?} style
           * @return {?}
           */

        }, {
          key: "getDayOfWeekNames",
          value: function getDayOfWeekNames(style) {
            var _this73 = this;

            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                weekday: style,
                timeZone: 'utc'
              });
              return range(7,
              /**
              * @param {?} i
              * @return {?}
              */
              function (i) {
                return _this73._stripDirectionalityCharacters(_this73._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DAY_OF_WEEK_NAMES[style];
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getYearName",
          value: function getYearName(date) {
            if (SUPPORTS_INTL_API) {
              /** @type {?} */
              var dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                timeZone: 'utc'
              });
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return String(this.getYear(date));
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFirstDayOfWeek",
          value: function getFirstDayOfWeek() {
            // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
            return 0;
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "getNumDaysInMonth",
          value: function getNumDaysInMonth(date) {
            return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "clone",
          value: function clone(date) {
            return new Date(date.getTime());
          }
          /**
           * @param {?} year
           * @param {?} month
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "createDate",
          value: function createDate(year, month, date) {
            // Check for invalid month and date (except upper bound on date which we have to check after
            // creating the Date).
            if (month < 0 || month > 11) {
              throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
            }

            if (date < 1) {
              throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
            }
            /** @type {?} */


            var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


            if (result.getMonth() != month) {
              throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
            }

            return result;
          }
          /**
           * @return {?}
           */

        }, {
          key: "today",
          value: function today() {
            return new Date();
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "parse",
          value: function parse(value) {
            // We have no way using the native JS Date to set the parse format or locale, so we ignore these
            // parameters.
            if (typeof value == 'number') {
              return new Date(value);
            }

            return value ? new Date(Date.parse(value)) : null;
          }
          /**
           * @param {?} date
           * @param {?} displayFormat
           * @return {?}
           */

        }, {
          key: "format",
          value: function format(date, displayFormat) {
            if (!this.isValid(date)) {
              throw Error('NativeDateAdapter: Cannot format invalid date.');
            }

            if (SUPPORTS_INTL_API) {
              // On IE and Edge the i18n API will throw a hard error that can crash the entire app
              // if we attempt to format a date whose year is less than 1 or greater than 9999.
              if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
              }

              displayFormat = Object.assign({}, displayFormat, {
                timeZone: 'utc'
              });
              /** @type {?} */

              var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return this._stripDirectionalityCharacters(date.toDateString());
          }
          /**
           * @param {?} date
           * @param {?} years
           * @return {?}
           */

        }, {
          key: "addCalendarYears",
          value: function addCalendarYears(date, years) {
            return this.addCalendarMonths(date, years * 12);
          }
          /**
           * @param {?} date
           * @param {?} months
           * @return {?}
           */

        }, {
          key: "addCalendarMonths",
          value: function addCalendarMonths(date, months) {
            /** @type {?} */
            var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
            // month. In this case we want to go to the last day of the desired month.
            // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
            // guarantee this.


            if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
              newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
            }

            return newDate;
          }
          /**
           * @param {?} date
           * @param {?} days
           * @return {?}
           */

        }, {
          key: "addCalendarDays",
          value: function addCalendarDays(date, days) {
            return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "toIso8601",
          value: function toIso8601(date) {
            return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
          }
          /**
           * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
           * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
           * invalid date for all other values.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (typeof value === 'string') {
              if (!value) {
                return null;
              } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
              // string is the right format first.


              if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                var date = new Date(value);

                if (this.isValid(date)) {
                  return date;
                }
              }
            }

            return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
          }
          /**
           * @param {?} obj
           * @return {?}
           */

        }, {
          key: "isDateInstance",
          value: function isDateInstance(obj) {
            return obj instanceof Date;
          }
          /**
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "isValid",
          value: function isValid(date) {
            return !isNaN(date.getTime());
          }
          /**
           * @return {?}
           */

        }, {
          key: "invalid",
          value: function invalid() {
            return new Date(NaN);
          }
          /**
           * Creates a date but allows the month and date to overflow.
           * @private
           * @param {?} year
           * @param {?} month
           * @param {?} date
           * @return {?}
           */

        }, {
          key: "_createDateWithOverflow",
          value: function _createDateWithOverflow(year, month, date) {
            /** @type {?} */
            var result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
            // abbreviations for 19xx.

            if (year >= 0 && year < 100) {
              result.setFullYear(this.getYear(result) - 1900);
            }

            return result;
          }
          /**
           * Pads a number to make it two digits.
           * @private
           * @param {?} n The number to pad.
           * @return {?} The padded number.
           */

        }, {
          key: "_2digit",
          value: function _2digit(n) {
            return ('00' + n).slice(-2);
          }
          /**
           * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
           * other browsers do not. We remove them to make output consistent and because they interfere with
           * date parsing.
           * @private
           * @param {?} str The string to strip direction characters from.
           * @return {?} The stripped string.
           */

        }, {
          key: "_stripDirectionalityCharacters",
          value: function _stripDirectionalityCharacters(str) {
            return str.replace(/[\u200e\u200f]/g, '');
          }
          /**
           * When converting Date object to string, javascript built-in functions may return wrong
           * results because it applies its internal DST rules. The DST rules around the world change
           * very frequently, and the current valid rule is not always valid in previous years though.
           * We work around this problem building a new Date object which has its internal UTC
           * representation with the local date and time.
           * @private
           * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
           *    timeZone set to 'utc' to work fine.
           * @param {?} date Date from which we want to get the string representation according to dtf
           * @return {?} A Date object with its UTC representation based on the passed in date info
           */

        }, {
          key: "_format",
          value: function _format(dtf, date) {
            /** @type {?} */
            var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
            return dtf.format(d);
          }
        }]);

        return NativeDateAdapter;
      }(DateAdapter);

      NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
        return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
      };

      NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NativeDateAdapter,
        factory: NativeDateAdapter.ɵfac
      });
      /** @nocollapse */

      NativeDateAdapter.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_DATE_LOCALE]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var MAT_NATIVE_DATE_FORMATS = {
        parse: {
          dateInput: null
        },
        display: {
          dateInput: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          },
          monthYearLabel: {
            year: 'numeric',
            month: 'short'
          },
          dateA11yLabel: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          },
          monthYearA11yLabel: {
            year: 'numeric',
            month: 'long'
          }
        }
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var NativeDateModule = function NativeDateModule() {
        _classCallCheck(this, NativeDateModule);
      };

      NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NativeDateModule
      });
      NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NativeDateModule_Factory(t) {
          return new (t || NativeDateModule)();
        },
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }],
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, {
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
            providers: [{
              provide: DateAdapter,
              useClass: NativeDateAdapter
            }]
          }]
        }], null, null);
      })();

      var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

      var MatNativeDateModule = function MatNativeDateModule() {
        _classCallCheck(this, MatNativeDateModule);
      };

      MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatNativeDateModule
      });
      MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatNativeDateModule_Factory(t) {
          return new (t || MatNativeDateModule)();
        },
        providers: [{
          provide: MAT_DATE_FORMATS,
          useValue: ɵ0$1
        }],
        imports: [[NativeDateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
          imports: [NativeDateModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [NativeDateModule],
            providers: [{
              provide: MAT_DATE_FORMATS,
              useValue: ɵ0$1
            }]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Error state matcher that matches when a control is invalid and dirty.
       */


      var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
        function ShowOnDirtyErrorStateMatcher() {
          _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
        }

        _createClass(ShowOnDirtyErrorStateMatcher, [{
          key: "isErrorState",

          /**
           * @param {?} control
           * @param {?} form
           * @return {?}
           */
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.dirty || form && form.submitted));
          }
        }]);

        return ShowOnDirtyErrorStateMatcher;
      }();

      ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
        return new (t || ShowOnDirtyErrorStateMatcher)();
      };

      ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowOnDirtyErrorStateMatcher,
        factory: ShowOnDirtyErrorStateMatcher.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /**
       * Provider that defines how form controls behave with regards to displaying error messages.
       */


      var ErrorStateMatcher = /*#__PURE__*/function () {
        function ErrorStateMatcher() {
          _classCallCheck(this, ErrorStateMatcher);
        }

        _createClass(ErrorStateMatcher, [{
          key: "isErrorState",

          /**
           * @param {?} control
           * @param {?} form
           * @return {?}
           */
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.touched || form && form.submitted));
          }
        }]);

        return ErrorStateMatcher;
      }();

      ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
        return new (t || ErrorStateMatcher)();
      };

      ErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorStateMatcher,
        factory: ErrorStateMatcher.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ErrorStateMatcher_Factory() {
          return new ErrorStateMatcher();
        },
        token: ErrorStateMatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Injection token that can be used to provide options to the Hammerjs instance.
       * More info at http://hammerjs.github.io/api/.
       * @type {?}
       */


      var MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
      /** @type {?} */

      var ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = ['longpress', 'slide', 'slidestart', 'slideend', 'slideright', 'slideleft'];

      var ɵ0$2 =
      /**
      * @return {?}
      */
      function ɵ0$2() {},
          ɵ1 =
      /**
      * @return {?}
      */
      function ɵ1() {};
      /**
       * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
       * been loaded on the page.
       * @type {?}
       */


      var noopHammerInstance = {
        on: ɵ0$2,
        off: ɵ1
      };
      /**
       * Adjusts configuration of our gesture library, Hammer.
       */

      var GestureConfig = /*#__PURE__*/function (_angular_platform_bro) {
        _inherits(GestureConfig, _angular_platform_bro);

        var _super22 = _createSuper(GestureConfig);

        /**
         * @param {?=} _hammerOptions
         * @param {?=} commonModule
         */
        function GestureConfig(_hammerOptions, commonModule) {
          var _this74;

          _classCallCheck(this, GestureConfig);

          _this74 = _super22.call(this);
          _this74._hammerOptions = _hammerOptions;
          /**
           * List of new event names to add to the gesture support list
           */

          _this74.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;

          if (commonModule) {
            commonModule._checkHammerIsAvailable();
          }

          return _this74;
        }
        /**
         * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
         *
         * Our gesture names come from the Material Design gestures spec:
         * https://material.io/design/#gestures-touch-mechanics
         *
         * More information on default recognizers can be found in Hammer docs:
         * http://hammerjs.github.io/recognizer-pan/
         * http://hammerjs.github.io/recognizer-press/
         *
         * @param {?} element Element to which to assign the new HammerJS gestures.
         * @return {?} Newly-created HammerJS instance.
         */


        _createClass(GestureConfig, [{
          key: "buildHammer",
          value: function buildHammer(element) {
            /** @type {?} */
            var hammer = typeof window !== 'undefined' ?
            /** @type {?} */
            window.Hammer : null;

            if (!hammer) {
              // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
              // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
              // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
              // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
              // `this.events` to the set we support, instead of conditionally setting it to `[]` if
              // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
              // undefined).
              // @breaking-change 8.0.0
              return noopHammerInstance;
            }
            /** @type {?} */


            var mc = new hammer(element, this._hammerOptions || undefined); // Default Hammer Recognizers.

            /** @type {?} */

            var pan = new hammer.Pan();
            /** @type {?} */

            var swipe = new hammer.Swipe();
            /** @type {?} */

            var press = new hammer.Press(); // Notice that a HammerJS recognizer can only depend on one other recognizer once.
            // Otherwise the previous `recognizeWith` will be dropped.
            // TODO: Confirm threshold numbers with Material Design UX Team

            /** @type {?} */

            var slide = this._createRecognizer(pan, {
              event: 'slide',
              threshold: 0
            }, swipe);
            /** @type {?} */


            var longpress = this._createRecognizer(press, {
              event: 'longpress',
              time: 500
            }); // Overwrite the default `pan` event to use the swipe event.


            pan.recognizeWith(swipe); // Since the slide event threshold is set to zero, the slide recognizer can fire and
            // accidentally reset the longpress recognizer. In order to make sure that the two
            // recognizers can run simultaneously but don't affect each other, we allow the slide
            // recognizer to recognize while a longpress is being processed.
            // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124

            longpress.recognizeWith(slide); // Add customized gestures to Hammer manager

            mc.add([swipe, press, pan, slide, longpress]);
            return (
              /** @type {?} */
              mc
            );
          }
          /**
           * Creates a new recognizer, without affecting the default recognizers of HammerJS
           * @private
           * @param {?} base
           * @param {?} options
           * @param {...?} inheritances
           * @return {?}
           */

        }, {
          key: "_createRecognizer",
          value: function _createRecognizer(base, options) {
            /** @type {?} */
            var recognizer = new
            /** @type {?} */
            base.constructor(options);

            for (var _len11 = arguments.length, inheritances = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
              inheritances[_key11 - 2] = arguments[_key11];
            }

            inheritances.push(base);
            inheritances.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return recognizer.recognizeWith(item);
            });
            return recognizer;
          }
        }]);

        return GestureConfig;
      }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]);

      GestureConfig.ɵfac = function GestureConfig_Factory(t) {
        return new (t || GestureConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_HAMMER_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatCommonModule, 8));
      };

      GestureConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GestureConfig,
        factory: GestureConfig.ɵfac
      });
      /** @nocollapse */

      GestureConfig.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_HAMMER_OPTIONS]
          }]
        }, {
          type: MatCommonModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestureConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_HAMMER_OPTIONS]
            }]
          }, {
            type: MatCommonModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Shared directive to count lines inside a text area, such as a list item.
       * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
       * counted by checking the query list's length.
       */


      var MatLine = function MatLine() {
        _classCallCheck(this, MatLine);
      };

      MatLine.ɵfac = function MatLine_Factory(t) {
        return new (t || MatLine)();
      };

      MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatLine,
        selectors: [["", "mat-line", ""], ["", "matLine", ""]],
        hostAttrs: [1, "mat-line"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-line], [matLine]',
            host: {
              'class': 'mat-line'
            }
          }]
        }], null, null);
      })();
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * \@docs-private
       * @param {?} lines
       * @param {?} element
       * @return {?}
       */


      function setLines(lines, element) {
        // Note: doesn't need to unsubscribe, because `changes`
        // gets completed by Angular when the view is destroyed.
        lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref3) {
          var length = _ref3.length;
          setClass(element, 'mat-2-line', false);
          setClass(element, 'mat-3-line', false);
          setClass(element, 'mat-multi-line', false);

          if (length === 2 || length === 3) {
            setClass(element, "mat-".concat(length, "-line"), true);
          } else if (length > 3) {
            setClass(element, "mat-multi-line", true);
          }
        });
      }
      /**
       * Adds or removes a class from an element.
       * @param {?} element
       * @param {?} className
       * @param {?} isAdd
       * @return {?}
       */


      function setClass(element, className, isAdd) {
        /** @type {?} */
        var classList = element.nativeElement.classList;
        isAdd ? classList.add(className) : classList.remove(className);
      }
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * \@docs-private
       * @deprecated Use `setLines` instead.
       * \@breaking-change 8.0.0
       */


      var MatLineSetter =
      /**
       * @param {?} lines
       * @param {?} element
       */
      function MatLineSetter(lines, element) {
        _classCallCheck(this, MatLineSetter);

        setLines(lines, element);
      };

      var MatLineModule = function MatLineModule() {
        _classCallCheck(this, MatLineModule);
      };

      MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatLineModule
      });
      MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatLineModule_Factory(t) {
          return new (t || MatLineModule)();
        },
        imports: [[MatCommonModule], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, {
          declarations: [MatLine],
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule],
            exports: [MatLine, MatCommonModule],
            declarations: [MatLine]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @enum {number} */


      var RippleState = {
        FADING_IN: 0,
        VISIBLE: 1,
        FADING_OUT: 2,
        HIDDEN: 3
      };
      RippleState[RippleState.FADING_IN] = 'FADING_IN';
      RippleState[RippleState.VISIBLE] = 'VISIBLE';
      RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
      RippleState[RippleState.HIDDEN] = 'HIDDEN';
      /**
       * Reference to a previously launched ripple element.
       */

      var RippleRef = /*#__PURE__*/function () {
        /**
         * @param {?} _renderer
         * @param {?} element
         * @param {?} config
         */
        function RippleRef(_renderer, element, config) {
          _classCallCheck(this, RippleRef);

          this._renderer = _renderer;
          this.element = element;
          this.config = config;
          /**
           * Current state of the ripple.
           */

          this.state = RippleState.HIDDEN;
        }
        /**
         * Fades out the ripple element.
         * @return {?}
         */


        _createClass(RippleRef, [{
          key: "fadeOut",
          value: function fadeOut() {
            this._renderer.fadeOutRipple(this);
          }
        }]);

        return RippleRef;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Default ripple animation configuration for ripples without an explicit
       * animation config specified.
       * @type {?}
       */


      var defaultRippleAnimationConfig = {
        enterDuration: 450,
        exitDuration: 400
      };
      /**
       * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
       * events to avoid synthetic mouse events.
       * @type {?}
       */

      var ignoreMouseEventsTimeout = 800;
      /**
       * Options that apply to all the event listeners that are bound by the ripple renderer.
       * @type {?}
       */

      var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * Helper service that performs DOM manipulations. Not intended to be used outside this module.
       * The constructor takes a reference to the ripple directive's host element and a map of DOM
       * event handlers to be installed on the element that triggers ripple animations.
       * This will eventually become a custom renderer once Angular support exists.
       * \@docs-private
       */

      var RippleRenderer = /*#__PURE__*/function () {
        /**
         * @param {?} _target
         * @param {?} _ngZone
         * @param {?} elementOrElementRef
         * @param {?} platform
         */
        function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
          var _this75 = this;

          _classCallCheck(this, RippleRenderer);

          this._target = _target;
          this._ngZone = _ngZone;
          /**
           * Whether the pointer is currently down or not.
           */

          this._isPointerDown = false;
          /**
           * Events to be registered on the trigger element.
           */

          this._triggerEvents = new Map();
          /**
           * Set of currently active ripple references.
           */

          this._activeRipples = new Set();
          /**
           * Function being called whenever the trigger is being pressed using mouse.
           */

          this._onMousedown =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.

            /** @type {?} */
            var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
            /** @type {?} */

            var isSyntheticEvent = _this75._lastTouchStartEvent && Date.now() < _this75._lastTouchStartEvent + ignoreMouseEventsTimeout;

            if (!_this75._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
              _this75._isPointerDown = true;

              _this75.fadeInRipple(event.clientX, event.clientY, _this75._target.rippleConfig);
            }
          };
          /**
           * Function being called whenever the trigger is being pressed using touch.
           */


          this._onTouchStart =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (!_this75._target.rippleDisabled) {
              // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
              // events will launch a second ripple if we don't ignore mouse events for a specific
              // time after a touchstart event.
              _this75._lastTouchStartEvent = Date.now();
              _this75._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
              // their finger down, but used another finger to tap the element again.

              /** @type {?} */

              var touches = event.changedTouches;

              for (var i = 0; i < touches.length; i++) {
                _this75.fadeInRipple(touches[i].clientX, touches[i].clientY, _this75._target.rippleConfig);
              }
            }
          };
          /**
           * Function being called whenever the trigger is being released.
           */


          this._onPointerUp =
          /**
          * @return {?}
          */
          function () {
            if (!_this75._isPointerDown) {
              return;
            }

            _this75._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

            _this75._activeRipples.forEach(
            /**
            * @param {?} ripple
            * @return {?}
            */
            function (ripple) {
              // By default, only ripples that are completely visible will fade out on pointer release.
              // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.

              /** @type {?} */
              var isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;

              if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
              }
            });
          }; // Only do anything if we're on the browser.


          if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef); // Specify events which need to be registered on the trigger.

            this._triggerEvents.set('mousedown', this._onMousedown).set('mouseup', this._onPointerUp).set('mouseleave', this._onPointerUp).set('touchstart', this._onTouchStart).set('touchend', this._onPointerUp).set('touchcancel', this._onPointerUp);
          }
        }
        /**
         * Fades in a ripple at the given coordinates.
         * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
         * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
         * @param {?=} config Extra ripple options.
         * @return {?}
         */


        _createClass(RippleRenderer, [{
          key: "fadeInRipple",
          value: function fadeInRipple(x, y) {
            var _this76 = this;

            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            /** @type {?} */
            var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
            /** @type {?} */


            var animationConfig = Object.assign({}, defaultRippleAnimationConfig, config.animation);

            if (config.centered) {
              x = containerRect.left + containerRect.width / 2;
              y = containerRect.top + containerRect.height / 2;
            }
            /** @type {?} */


            var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
            /** @type {?} */

            var offsetX = x - containerRect.left;
            /** @type {?} */

            var offsetY = y - containerRect.top;
            /** @type {?} */

            var duration = animationConfig.enterDuration;
            /** @type {?} */

            var ripple = document.createElement('div');
            ripple.classList.add('mat-ripple-element');
            ripple.style.left = "".concat(offsetX - radius, "px");
            ripple.style.top = "".concat(offsetY - radius, "px");
            ripple.style.height = "".concat(radius * 2, "px");
            ripple.style.width = "".concat(radius * 2, "px"); // If the color is not set, the default CSS color will be used.

            ripple.style.backgroundColor = config.color || null;
            ripple.style.transitionDuration = "".concat(duration, "ms");

            this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
            // ripple elements. This is critical because then the `scale` would not animate properly.


            enforceStyleRecalculation(ripple);
            ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

            /** @type {?} */

            var rippleRef = new RippleRef(this, ripple, config);
            rippleRef.state = RippleState.FADING_IN; // Add the ripple reference to the list of all active ripples.

            this._activeRipples.add(rippleRef);

            if (!config.persistent) {
              this._mostRecentTransientRipple = rippleRef;
            } // Wait for the ripple element to be completely faded in.
            // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


            this._runTimeoutOutsideZone(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var isMostRecentTransientRipple = rippleRef === _this76._mostRecentTransientRipple;
              rippleRef.state = RippleState.VISIBLE; // When the timer runs out while the user has kept their pointer down, we want to
              // keep only the persistent ripples and the latest transient ripple. We do this,
              // because we don't want stacked transient ripples to appear after their enter
              // animation has finished.

              if (!config.persistent && (!isMostRecentTransientRipple || !_this76._isPointerDown)) {
                rippleRef.fadeOut();
              }
            }, duration);

            return rippleRef;
          }
          /**
           * Fades out a ripple reference.
           * @param {?} rippleRef
           * @return {?}
           */

        }, {
          key: "fadeOutRipple",
          value: function fadeOutRipple(rippleRef) {
            /** @type {?} */
            var wasActive = this._activeRipples["delete"](rippleRef);

            if (rippleRef === this._mostRecentTransientRipple) {
              this._mostRecentTransientRipple = null;
            } // Clear out the cached bounding rect if we have no more ripples.


            if (!this._activeRipples.size) {
              this._containerRect = null;
            } // For ripples that are not active anymore, don't re-run the fade-out animation.


            if (!wasActive) {
              return;
            }
            /** @type {?} */


            var rippleEl = rippleRef.element;
            /** @type {?} */

            var animationConfig = Object.assign({}, defaultRippleAnimationConfig, rippleRef.config.animation);
            rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
            rippleEl.style.opacity = '0';
            rippleRef.state = RippleState.FADING_OUT; // Once the ripple faded out, the ripple can be safely removed from the DOM.

            this._runTimeoutOutsideZone(
            /**
            * @return {?}
            */
            function () {
              rippleRef.state = RippleState.HIDDEN;

              /** @type {?} */
              rippleEl.parentNode.removeChild(rippleEl);
            }, animationConfig.exitDuration);
          }
          /**
           * Fades out all currently active ripples.
           * @return {?}
           */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._activeRipples.forEach(
            /**
            * @param {?} ripple
            * @return {?}
            */
            function (ripple) {
              return ripple.fadeOut();
            });
          }
          /**
           * Sets up the trigger event listeners
           * @param {?} elementOrElementRef
           * @return {?}
           */

        }, {
          key: "setupTriggerEvents",
          value: function setupTriggerEvents(elementOrElementRef) {
            var _this77 = this;

            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);

            if (!element || element === this._triggerElement) {
              return;
            } // Remove all previously registered event listeners from the trigger element.


            this._removeTriggerEvents();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this77._triggerEvents.forEach(
              /**
              * @param {?} fn
              * @param {?} type
              * @return {?}
              */
              function (fn, type) {
                element.addEventListener(type, fn, passiveEventOptions);
              });
            });

            this._triggerElement = element;
          }
          /**
           * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
           * @private
           * @param {?} fn
           * @param {?=} delay
           * @return {?}
           */

        }, {
          key: "_runTimeoutOutsideZone",
          value: function _runTimeoutOutsideZone(fn) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return setTimeout(fn, delay);
            });
          }
          /**
           * Removes previously registered event listeners from the trigger element.
           * @return {?}
           */

        }, {
          key: "_removeTriggerEvents",
          value: function _removeTriggerEvents() {
            var _this78 = this;

            if (this._triggerElement) {
              this._triggerEvents.forEach(
              /**
              * @param {?} fn
              * @param {?} type
              * @return {?}
              */
              function (fn, type) {
                /** @type {?} */
                _this78._triggerElement.removeEventListener(type, fn, passiveEventOptions);
              });
            }
          }
        }]);

        return RippleRenderer;
      }();
      /**
       * Enforces a style recalculation of a DOM element by computing its styles.
       * @param {?} element
       * @return {?}
       */


      function enforceStyleRecalculation(element) {
        // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
        // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
        // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
        window.getComputedStyle(element).getPropertyValue('opacity');
      }
      /**
       * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
       * @param {?} x
       * @param {?} y
       * @param {?} rect
       * @return {?}
       */


      function distanceToFurthestCorner(x, y, rect) {
        /** @type {?} */
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        /** @type {?} */

        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Injection token that can be used to specify the global ripple options.
       * @type {?}
       */


      var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

      var MatRipple = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} ngZone
         * @param {?} platform
         * @param {?=} globalOptions
         * @param {?=} animationMode
         */
        function MatRipple(_elementRef, ngZone, platform, globalOptions, animationMode) {
          _classCallCheck(this, MatRipple);

          this._elementRef = _elementRef;
          /**
           * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
           * will be the distance from the center of the ripple to the furthest corner of the host element's
           * bounding rectangle.
           */

          this.radius = 0;
          this._disabled = false;
          /**
           * Whether ripple directive is initialized and the input bindings are set.
           */

          this._isInitialized = false;
          this._globalOptions = globalOptions || {};
          this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);

          if (animationMode === 'NoopAnimations') {
            this._globalOptions.animation = {
              enterDuration: 0,
              exitDuration: 0
            };
          }
        }
        /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         * @return {?}
         */


        _createClass(MatRipple, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            this._isInitialized = true;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rippleRenderer._removeTriggerEvents();
          }
          /**
           * Fades out all currently showing ripple elements.
           * @return {?}
           */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._rippleRenderer.fadeOutAll();
          }
          /**
           * Ripple configuration from the directive's input values.
           * \@docs-private Implemented as part of RippleTarget
           * @return {?}
           */

        }, {
          key: "_setupTriggerEventsIfEnabled",

          /**
           * Sets up the trigger event listeners if ripples are enabled.
           * @private
           * @return {?}
           */
          value: function _setupTriggerEventsIfEnabled() {
            if (!this.disabled && this._isInitialized) {
              this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
          }
          /**
           * Launches a manual ripple at the specified coordinated or just by the ripple config.
           * @param {?} configOrX
           * @param {?=} y
           * @param {?=} config
           * @return {?}
           */

        }, {
          key: "launch",
          value: function launch(configOrX) {
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var config = arguments.length > 2 ? arguments[2] : undefined;

            if (typeof configOrX === 'number') {
              return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign({}, this.rippleConfig, config));
            } else {
              return this._rippleRenderer.fadeInRipple(0, 0, Object.assign({}, this.rippleConfig, configOrX));
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = value;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * The element that triggers the ripple when click events are received.
           * Defaults to the directive's host element.
           * @return {?}
           */

        }, {
          key: "trigger",
          get: function get() {
            return this._trigger || this._elementRef.nativeElement;
          }
          /**
           * @param {?} trigger
           * @return {?}
           */
          ,
          set: function set(trigger) {
            this._trigger = trigger;

            this._setupTriggerEventsIfEnabled();
          }
        }, {
          key: "rippleConfig",
          get: function get() {
            return {
              centered: this.centered,
              radius: this.radius,
              color: this.color,
              animation: Object.assign({}, this._globalOptions.animation, this.animation),
              terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
            };
          }
          /**
           * Whether ripples on pointer-down are disabled or not.
           * \@docs-private Implemented as part of RippleTarget
           * @return {?}
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || !!this._globalOptions.disabled;
          }
        }]);

        return MatRipple;
      }();

      MatRipple.ɵfac = function MatRipple_Factory(t) {
        return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRipple,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function MatRipple_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
          }
        },
        inputs: {
          radius: ["matRippleRadius", "radius"],
          disabled: ["matRippleDisabled", "disabled"],
          trigger: ["matRippleTrigger", "trigger"],
          color: ["matRippleColor", "color"],
          unbounded: ["matRippleUnbounded", "unbounded"],
          centered: ["matRippleCentered", "centered"],
          animation: ["matRippleAnimation", "animation"]
        },
        exportAs: ["matRipple"]
      });
      /** @nocollapse */

      MatRipple.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatRipple.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-ripple], [matRipple]',
            exportAs: 'matRipple',
            host: {
              'class': 'mat-ripple',
              '[class.mat-ripple-unbounded]': 'unbounded'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleRadius']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleDisabled']
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleTrigger']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleColor']
          }],
          unbounded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleUnbounded']
          }],
          centered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleCentered']
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleAnimation']
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatRippleModule = function MatRippleModule() {
        _classCallCheck(this, MatRippleModule);
      };

      MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatRippleModule
      });
      MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatRippleModule_Factory(t) {
          return new (t || MatRippleModule)();
        },
        imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, {
          declarations: function declarations() {
            return [MatRipple];
          },
          imports: function imports() {
            return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]];
          },
          exports: function exports() {
            return [MatRipple, MatCommonModule];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
            exports: [MatRipple, MatCommonModule],
            declarations: [MatRipple]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Component that shows a simplified checkbox without including any kind of "real" checkbox.
       * Meant to be used when the checkbox is purely decorative and a large number of them will be
       * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
       * Note that theming is meant to be handled by the parent element, e.g.
       * `mat-primary .mat-pseudo-checkbox`.
       *
       * Note that this component will be completely invisible to screen-reader users. This is *not*
       * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
       * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
       * of more complex components that appropriately handle selected / checked state.
       * \@docs-private
       */


      var MatPseudoCheckbox =
      /**
       * @param {?=} _animationMode
       */
      function MatPseudoCheckbox(_animationMode) {
        _classCallCheck(this, MatPseudoCheckbox);

        this._animationMode = _animationMode;
        /**
         * Display state of the checkbox.
         */

        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */

        this.disabled = false;
      };

      MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
        return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPseudoCheckbox,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 8,
        hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          state: "state",
          disabled: "disabled"
        },
        decls: 0,
        vars: 0,
        template: function MatPseudoCheckbox_Template(rf, ctx) {},
        styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatPseudoCheckbox.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatPseudoCheckbox.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'mat-pseudo-checkbox',
            styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
            template: '',
            host: {
              'class': 'mat-pseudo-checkbox',
              '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
              '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
              '[class.mat-pseudo-checkbox-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            }
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
        _classCallCheck(this, MatPseudoCheckboxModule);
      };

      MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPseudoCheckboxModule
      });
      MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatPseudoCheckboxModule_Factory(t) {
          return new (t || MatPseudoCheckboxModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
          declarations: [MatPseudoCheckbox],
          exports: [MatPseudoCheckbox]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [MatPseudoCheckbox],
            declarations: [MatPseudoCheckbox]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Boilerplate for applying mixins to MatOptgroup.

      /**
       * \@docs-private
       */


      var MatOptgroupBase = function MatOptgroupBase() {
        _classCallCheck(this, MatOptgroupBase);
      };
      /** @type {?} */


      var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.

      /** @type {?} */


      var _uniqueOptgroupIdCounter = 0;
      /**
       * Component that is used to group instances of `mat-option`.
       */

      var MatOptgroup = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
        _inherits(MatOptgroup, _MatOptgroupMixinBase2);

        var _super23 = _createSuper(MatOptgroup);

        function MatOptgroup() {
          var _this79;

          _classCallCheck(this, MatOptgroup);

          _this79 = _super23.apply(this, arguments);
          /**
           * Unique id for the underlying label.
           */

          _this79._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
          return _this79;
        }

        return MatOptgroup;
      }(_MatOptgroupMixinBase);

      MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
        return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
      };

      MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOptgroup,
        selectors: [["mat-optgroup"]],
        hostAttrs: ["role", "group", 1, "mat-optgroup"],
        hostVars: 4,
        hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          label: "label"
        },
        exportAs: ["matOptgroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [[1, "mat-optgroup-label", 3, "id"]],
        template: function MatOptgroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
          }
        },
        styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
        encapsulation: 2,
        changeDetection: 0
      });
      MatOptgroup.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      var ɵMatOptgroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-optgroup',
            exportAs: 'matOptgroup',
            template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
            host: {
              'class': 'mat-optgroup',
              'role': 'group',
              '[class.mat-optgroup-disabled]': 'disabled',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-labelledby]': '_labelId'
            }
          }]
        }], null, {
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Option IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       * @type {?}
       */


      var _uniqueIdCounter = 0;
      /**
       * Event object emitted by MatOption when selected or deselected.
       */

      var MatOptionSelectionChange =
      /**
       * @param {?} source
       * @param {?=} isUserInput
       */
      function MatOptionSelectionChange(source) {
        var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, MatOptionSelectionChange);

        this.source = source;
        this.isUserInput = isUserInput;
      };
      /**
       * Injection token used to provide the parent component to options.
       * @type {?}
       */


      var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
      /**
       * Single option inside of a `<mat-select>` element.
       */

      var MatOption = /*#__PURE__*/function () {
        /**
         * @param {?} _element
         * @param {?} _changeDetectorRef
         * @param {?} _parent
         * @param {?} group
         */
        function MatOption(_element, _changeDetectorRef, _parent, group) {
          _classCallCheck(this, MatOption);

          this._element = _element;
          this._changeDetectorRef = _changeDetectorRef;
          this._parent = _parent;
          this.group = group;
          this._selected = false;
          this._active = false;
          this._disabled = false;
          this._mostRecentViewValue = '';
          /**
           * The unique ID of the option.
           */

          this.id = "mat-option-".concat(_uniqueIdCounter++);
          /**
           * Event emitted when the option is selected or deselected.
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the state of the option changes and any parents have to be notified.
           */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        /**
         * Whether the wrapping component is in multiple selection mode.
         * @return {?}
         */


        _createClass(MatOption, [{
          key: "select",

          /**
           * Selects the option.
           * @return {?}
           */
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /**
           * Deselects the option.
           * @return {?}
           */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /**
           * Sets focus onto this option.
           * @param {?=} _origin
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus(_origin, options) {
            // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
            // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.

            /** @type {?} */
            var element = this._getHostElement();

            if (typeof element.focus === 'function') {
              element.focus(options);
            }
          }
          /**
           * This method sets display styles on the option to make it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           * @return {?}
           */

        }, {
          key: "setActiveStyles",
          value: function setActiveStyles() {
            if (!this._active) {
              this._active = true;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * This method removes display styles on the option that made it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           * @return {?}
           */

        }, {
          key: "setInactiveStyles",
          value: function setInactiveStyles() {
            if (this._active) {
              this._active = false;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Gets the label to be used when determining whether the option should be focused.
           * @return {?}
           */

        }, {
          key: "getLabel",
          value: function getLabel() {
            return this.viewValue;
          }
          /**
           * Ensures the option is selected when activated from the keyboard.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
              this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


              event.preventDefault();
            }
          }
          /**
           * `Selects the option while indicating the selection came from the user. Used to
           * determine if the select's view -> model callback should be invoked.`
           * @return {?}
           */

        }, {
          key: "_selectViaInteraction",
          value: function _selectViaInteraction() {
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
           * @return {?}
           */

        }, {
          key: "_getAriaSelected",
          value: function _getAriaSelected() {
            return this.selected || (this.multiple ? false : null);
          }
          /**
           * Returns the correct tabindex for the option depending on disabled state.
           * @return {?}
           */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /**
           * Gets the host DOM element.
           * @return {?}
           */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            // Since parent components could be using the option's label to display the selected values
            // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
            // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
            // relatively cheap, however we still limit them only to selected options in order to avoid
            // hitting the DOM too often.
            if (this._selected) {
              /** @type {?} */
              var viewValue = this.viewValue;

              if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;

                this._stateChanges.next();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
          /**
           * Emits the selection change event.
           * @private
           * @param {?=} isUserInput
           * @return {?}
           */

        }, {
          key: "_emitSelectionChangeEvent",
          value: function _emitSelectionChangeEvent() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
          }
        }, {
          key: "multiple",
          get: function get() {
            return this._parent && this._parent.multiple;
          }
          /**
           * Whether or not the option is currently selected.
           * @return {?}
           */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
          /**
           * Whether the option is disabled.
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.group && this.group.disabled || this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether ripples for the option are disabled.
           * @return {?}
           */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._parent && this._parent.disableRipple;
          }
          /**
           * Whether or not the option is currently active and ready to be selected.
           * An active option displays styles as if it is focused, but the
           * focus is actually retained somewhere else. This comes in handy
           * for components like autocomplete where focus must remain on the input.
           * @return {?}
           */

        }, {
          key: "active",
          get: function get() {
            return this._active;
          }
          /**
           * The displayed value of the option. It is necessary to show the selected option in the
           * select's trigger.
           * @return {?}
           */

        }, {
          key: "viewValue",
          get: function get() {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
          }
        }]);

        return MatOption;
      }();

      MatOption.ɵfac = function MatOption_Factory(t) {
        return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatOptgroup, 8));
      };

      MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOption,
        selectors: [["mat-option"]],
        hostAttrs: ["role", "option", 1, "mat-option"],
        hostVars: 12,
        hostBindings: function MatOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
              return ctx._selectViaInteraction();
            })("keydown", function MatOption_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
          }
        },
        inputs: {
          id: "id",
          disabled: "disabled",
          value: "value"
        },
        outputs: {
          onSelectionChange: "onSelectionChange"
        },
        exportAs: ["matOption"],
        ngContentSelectors: _c2,
        decls: 4,
        vars: 3,
        consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]],
        template: function MatOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], MatRipple, MatPseudoCheckbox],
        styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      MatOption.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-option',
            exportAs: 'matOption',
            host: {
              'role': 'option',
              '[attr.tabindex]': '_getTabIndex()',
              '[class.mat-selected]': 'selected',
              '[class.mat-option-multiple]': 'multiple',
              '[class.mat-active]': 'active',
              '[id]': 'id',
              '[attr.aria-selected]': '_getAriaSelected()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[class.mat-option-disabled]': 'disabled',
              '(click)': '_selectViaInteraction()',
              '(keydown)': '_handleKeydown($event)',
              'class': 'mat-option'
            },
            styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
            template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTION_PARENT_COMPONENT]
            }]
          }, {
            type: MatOptgroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Counts the amount of option group labels that precede the specified option.
       * \@docs-private
       * @param {?} optionIndex Index of the option at which to start counting.
       * @param {?} options Flat list of all of the options.
       * @param {?} optionGroups Flat list of all of the option groups.
       * @return {?}
       */


      function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
        if (optionGroups.length) {
          /** @type {?} */
          var optionsArray = options.toArray();
          /** @type {?} */

          var groups = optionGroups.toArray();
          /** @type {?} */

          var groupCounter = 0;

          for (var i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
              groupCounter++;
            }
          }

          return groupCounter;
        }

        return 0;
      }
      /**
       * Determines the position to which to scroll a panel in order for an option to be into view.
       * \@docs-private
       * @param {?} optionIndex Index of the option to be scrolled into the view.
       * @param {?} optionHeight Height of the options.
       * @param {?} currentScrollPosition Current scroll position of the panel.
       * @param {?} panelHeight Height of the panel.
       * @return {?}
       */


      function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
        /** @type {?} */
        var optionOffset = optionIndex * optionHeight;

        if (optionOffset < currentScrollPosition) {
          return optionOffset;
        }

        if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
          return Math.max(0, optionOffset - panelHeight + optionHeight);
        }

        return currentScrollPosition;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatOptionModule = function MatOptionModule() {
        _classCallCheck(this, MatOptionModule);
      };

      MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatOptionModule
      });
      MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatOptionModule_Factory(t) {
          return new (t || MatOptionModule)();
        },
        imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, {
          declarations: function declarations() {
            return [MatOption, MatOptgroup];
          },
          imports: function imports() {
            return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule];
          },
          exports: function exports() {
            return [MatOption, MatOptgroup];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule],
            exports: [MatOption, MatOptgroup],
            declarations: [MatOption, MatOptgroup]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * InjectionToken that can be used to specify the global label options.
       * @type {?}
       */


      var MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * When constructing a Date, the month is zero-based. This can be confusing, since people are
       * used to seeing them one-based. So we create these aliases to make writing the tests easier.
       * \@docs-private
       * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
       * @type {?}
       */

      var JAN = 0;
      /** @type {?} */

      var FEB = 1;
      /** @type {?} */

      var MAR = 2;
      /** @type {?} */

      var APR = 3;
      /** @type {?} */

      var MAY = 4;
      /** @type {?} */

      var JUN = 5;
      /** @type {?} */

      var JUL = 6;
      /** @type {?} */

      var AUG = 7;
      /** @type {?} */

      var SEP = 8;
      /** @type {?} */

      var OCT = 9;
      /** @type {?} */

      var NOV = 10;
      /** @type {?} */

      var DEC = 11;
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=core.js.map

      /***/
    },

    /***/
    "tkJt":
    /*!****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js ***!
      \****************************************************************/

    /*! exports provided: ARIA_DESCRIBER_PROVIDER_FACTORY, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_PROVIDER_FACTORY, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, FOCUS_MONITOR_PROVIDER_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */

    /***/
    function tkJt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function () {
        return ARIA_DESCRIBER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
        return MESSAGES_CONTAINER_ID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
        return CDK_DESCRIBEDBY_ID_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
        return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
        return AriaDescriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function () {
        return ARIA_DESCRIBER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
        return ActiveDescendantKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
        return FocusKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
        return ListKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
        return FocusTrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
        return FocusTrapFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
        return CdkTrapFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
        return InteractivityChecker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function () {
        return LIVE_ANNOUNCER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
        return LiveAnnouncer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
        return CdkAriaLive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function () {
        return LIVE_ANNOUNCER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
        return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function () {
        return FOCUS_MONITOR_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
        return TOUCH_BUFFER_MS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
        return FocusMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
        return CdkMonitorFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function () {
        return FOCUS_MONITOR_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
        return isFakeMousedownFromScreenReader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
        return A11yModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "3+Bf");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "LSvS");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "dEu6");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "2dEz");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * IDs are deliminated by an empty space, as per the spec.
       * @type {?}
       */


      var ID_DELIMINATOR = ' ';
      /**
       * Adds the given ID to the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       * @param {?} el
       * @param {?} attr
       * @param {?} id
       * @return {?}
       */

      function addAriaReferencedId(el, attr, id) {
        /** @type {?} */
        var ids = getAriaReferenceIds(el, attr);

        if (ids.some(
        /**
        * @param {?} existingId
        * @return {?}
        */
        function (existingId) {
          return existingId.trim() == id.trim();
        })) {
          return;
        }

        ids.push(id.trim());
        el.setAttribute(attr, ids.join(ID_DELIMINATOR));
      }
      /**
       * Removes the given ID from the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       * @param {?} el
       * @param {?} attr
       * @param {?} id
       * @return {?}
       */


      function removeAriaReferencedId(el, attr, id) {
        /** @type {?} */
        var ids = getAriaReferenceIds(el, attr);
        /** @type {?} */

        var filteredIds = ids.filter(
        /**
        * @param {?} val
        * @return {?}
        */
        function (val) {
          return val != id.trim();
        });

        if (filteredIds.length) {
          el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
        } else {
          el.removeAttribute(attr);
        }
      }
      /**
       * Gets the list of IDs referenced by the given ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       * @param {?} el
       * @param {?} attr
       * @return {?}
       */


      function getAriaReferenceIds(el, attr) {
        // Get string array of all individual ids (whitespace deliminated) in the attribute value
        return (el.getAttribute(attr) || '').match(/\S+/g) || [];
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * ID used for the body container where all messages are appended.
       * @type {?}
       */


      var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
      /**
       * ID prefix used for each created message element.
       * @type {?}
       */

      var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
      /**
       * Attribute given to each host element that is described by a message element.
       * @type {?}
       */

      var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
      /**
       * Global incremental identifier for each registered message element.
       * @type {?}
       */

      var nextId = 0;
      /**
       * Global map of all registered message elements that have been placed into the document.
       * @type {?}
       */

      var messageRegistry = new Map();
      /**
       * Container for all registered messages.
       * @type {?}
       */

      var messagesContainer = null;
      /**
       * Utility that creates visually hidden elements with a message content. Useful for elements that
       * want to use aria-describedby to further describe themselves without adding additional visual
       * content.
       */

      var AriaDescriber = /*#__PURE__*/function () {
        /**
         * @param {?} _document
         */
        function AriaDescriber(_document) {
          _classCallCheck(this, AriaDescriber);

          this._document = _document;
        }
        /**
         * Adds to the host element an aria-describedby reference to a hidden element that contains
         * the message. If the same message has already been registered, then it will reuse the created
         * message element.
         * @param {?} hostElement
         * @param {?} message
         * @return {?}
         */


        _createClass(AriaDescriber, [{
          key: "describe",
          value: function describe(hostElement, message) {
            if (!this._canBeDescribed(hostElement, message)) {
              return;
            }

            if (typeof message !== 'string') {
              // We need to ensure that the element has an ID.
              this._setMessageId(message);

              messageRegistry.set(message, {
                messageElement: message,
                referenceCount: 0
              });
            } else if (!messageRegistry.has(message)) {
              this._createMessageElement(message);
            }

            if (!this._isElementDescribedByMessage(hostElement, message)) {
              this._addMessageReference(hostElement, message);
            }
          }
          /**
           * Removes the host element's aria-describedby reference to the message element.
           * @param {?} hostElement
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "removeDescription",
          value: function removeDescription(hostElement, message) {
            if (!this._isElementNode(hostElement)) {
              return;
            }

            if (this._isElementDescribedByMessage(hostElement, message)) {
              this._removeMessageReference(hostElement, message);
            } // If the message is a string, it means that it's one that we created for the
            // consumer so we can remove it safely, otherwise we should leave it in place.


            if (typeof message === 'string') {
              /** @type {?} */
              var registeredMessage = messageRegistry.get(message);

              if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(message);
              }
            }

            if (messagesContainer && messagesContainer.childNodes.length === 0) {
              this._deleteMessagesContainer();
            }
          }
          /**
           * Unregisters all created message elements and removes the message container.
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /** @type {?} */
            var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

            for (var i = 0; i < describedElements.length; i++) {
              this._removeCdkDescribedByReferenceIds(describedElements[i]);

              describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
            }

            if (messagesContainer) {
              this._deleteMessagesContainer();
            }

            messageRegistry.clear();
          }
          /**
           * Creates a new element in the visually hidden message container element with the message
           * as its content and adds it to the message registry.
           * @private
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "_createMessageElement",
          value: function _createMessageElement(message) {
            /** @type {?} */
            var messageElement = this._document.createElement('div');

            this._setMessageId(messageElement);

            messageElement.textContent = message;

            this._createMessagesContainer();

            /** @type {?} */
            messagesContainer.appendChild(messageElement);
            messageRegistry.set(message, {
              messageElement: messageElement,
              referenceCount: 0
            });
          }
          /**
           * Assigns a unique ID to an element, if it doesn't have one already.
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_setMessageId",
          value: function _setMessageId(element) {
            if (!element.id) {
              element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
            }
          }
          /**
           * Deletes the message element from the global messages container.
           * @private
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "_deleteMessageElement",
          value: function _deleteMessageElement(message) {
            /** @type {?} */
            var registeredMessage = messageRegistry.get(message);
            /** @type {?} */

            var messageElement = registeredMessage && registeredMessage.messageElement;

            if (messagesContainer && messageElement) {
              messagesContainer.removeChild(messageElement);
            }

            messageRegistry["delete"](message);
          }
          /**
           * Creates the global container for all aria-describedby messages.
           * @private
           * @return {?}
           */

        }, {
          key: "_createMessagesContainer",
          value: function _createMessagesContainer() {
            if (!messagesContainer) {
              /** @type {?} */
              var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
              // already a container on the page, but we don't have a reference to it. Clear the
              // old container so we don't get duplicates. Doing this, instead of emptying the previous
              // container, should be slightly faster.


              if (preExistingContainer) {
                /** @type {?} */
                preExistingContainer.parentNode.removeChild(preExistingContainer);
              }

              messagesContainer = this._document.createElement('div');
              messagesContainer.id = MESSAGES_CONTAINER_ID;
              messagesContainer.setAttribute('aria-hidden', 'true');
              messagesContainer.style.display = 'none';

              this._document.body.appendChild(messagesContainer);
            }
          }
          /**
           * Deletes the global messages container.
           * @private
           * @return {?}
           */

        }, {
          key: "_deleteMessagesContainer",
          value: function _deleteMessagesContainer() {
            if (messagesContainer && messagesContainer.parentNode) {
              messagesContainer.parentNode.removeChild(messagesContainer);
              messagesContainer = null;
            }
          }
          /**
           * Removes all cdk-describedby messages that are hosted through the element.
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_removeCdkDescribedByReferenceIds",
          value: function _removeCdkDescribedByReferenceIds(element) {
            // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX

            /** @type {?} */
            var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
            });
            element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
          }
          /**
           * Adds a message reference to the element using aria-describedby and increments the registered
           * message's reference count.
           * @private
           * @param {?} element
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "_addMessageReference",
          value: function _addMessageReference(element, message) {
            /** @type {?} */
            var registeredMessage =
            /** @type {?} */
            messageRegistry.get(message); // Add the aria-describedby reference and set the
            // describedby_host attribute to mark the element.

            addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
            registeredMessage.referenceCount++;
          }
          /**
           * Removes a message reference from the element using aria-describedby
           * and decrements the registered message's reference count.
           * @private
           * @param {?} element
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "_removeMessageReference",
          value: function _removeMessageReference(element, message) {
            /** @type {?} */
            var registeredMessage =
            /** @type {?} */
            messageRegistry.get(message);
            registeredMessage.referenceCount--;
            removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }
          /**
           * Returns true if the element has been described by the provided message ID.
           * @private
           * @param {?} element
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "_isElementDescribedByMessage",
          value: function _isElementDescribedByMessage(element, message) {
            /** @type {?} */
            var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
            /** @type {?} */

            var registeredMessage = messageRegistry.get(message);
            /** @type {?} */

            var messageId = registeredMessage && registeredMessage.messageElement.id;
            return !!messageId && referenceIds.indexOf(messageId) != -1;
          }
          /**
           * Determines whether a message can be described on a particular element.
           * @private
           * @param {?} element
           * @param {?} message
           * @return {?}
           */

        }, {
          key: "_canBeDescribed",
          value: function _canBeDescribed(element, message) {
            if (!this._isElementNode(element)) {
              return false;
            }

            if (message && typeof message === 'object') {
              // We'd have to make some assumptions about the description element's text, if the consumer
              // passed in an element. Assume that if an element is passed in, the consumer has verified
              // that it can be used as a description.
              return true;
            }
            /** @type {?} */


            var trimmedMessage = message == null ? '' : "".concat(message).trim();
            /** @type {?} */

            var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
            // element, because screen readers will end up reading out the same text twice in a row.

            return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
          }
          /**
           * Checks whether a node is an Element node.
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_isElementNode",
          value: function _isElementNode(element) {
            return element.nodeType === this._document.ELEMENT_NODE;
          }
        }]);

        return AriaDescriber;
      }();

      AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
        return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      AriaDescriber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AriaDescriber,
        factory: AriaDescriber.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      AriaDescriber.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };
      /** @nocollapse */


      AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AriaDescriber_Factory() {
          return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: AriaDescriber,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @param {?} parentDispatcher
       * @param {?} _document
       * @return {?}
       */


      function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
        return parentDispatcher || new AriaDescriber(_document);
      }
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @type {?}
       */


      var ARIA_DESCRIBER_PROVIDER = {
        // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
        provide: AriaDescriber,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
        /** @type {?} */
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]],
        useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * This class manages keyboard events for selectable lists. If you pass it a query list
       * of items, it will set the active item correctly when arrow events occur.
       * @template T
       */

      var ListKeyManager = /*#__PURE__*/function () {
        /**
         * @param {?} _items
         */
        function ListKeyManager(_items) {
          var _this80 = this;

          _classCallCheck(this, ListKeyManager);

          this._items = _items;
          this._activeItemIndex = -1;
          this._activeItem = null;
          this._wrap = false;
          this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
          this._vertical = true;
          this._allowedModifierKeys = [];
          /**
           * Predicate function that can be used to check whether an item should be skipped
           * by the key manager. By default, disabled items are skipped.
           */

          this._skipPredicateFn =
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.disabled;
          }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


          this._pressedLetters = [];
          /**
           * Stream that emits any time the TAB key is pressed, so components can react
           * when focus is shifted off of the list.
           */

          this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Stream that emits whenever the active item of the list manager changes.
           */

          this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
          // not have access to a QueryList of the items they want to manage (e.g. when the
          // items aren't being collected via `ViewChildren` or `ContentChildren`).

          if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(
            /**
            * @param {?} newItems
            * @return {?}
            */
            function (newItems) {
              if (_this80._activeItem) {
                /** @type {?} */
                var itemArray = newItems.toArray();
                /** @type {?} */

                var newIndex = itemArray.indexOf(_this80._activeItem);

                if (newIndex > -1 && newIndex !== _this80._activeItemIndex) {
                  _this80._activeItemIndex = newIndex;
                }
              }
            });
          }
        }
        /**
         * Sets the predicate function that determines which items should be skipped by the
         * list key manager.
         * @template THIS
         * @this {THIS}
         * @param {?} predicate Function that determines whether the given item should be skipped.
         * @return {THIS}
         */


        _createClass(ListKeyManager, [{
          key: "skipPredicate",
          value: function skipPredicate(predicate) {
            /** @type {?} */
            this._skipPredicateFn = predicate;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Configures wrapping mode, which determines whether the active item will wrap to
           * the other end of list when there are no more items in the given direction.
           * @template THIS
           * @this {THIS}
           * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
           * @return {THIS}
           */

        }, {
          key: "withWrap",
          value: function withWrap() {
            var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            /** @type {?} */
            this._wrap = shouldWrap;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Configures whether the key manager should be able to move the selection vertically.
           * @template THIS
           * @this {THIS}
           * @param {?=} enabled Whether vertical selection should be enabled.
           * @return {THIS}
           */

        }, {
          key: "withVerticalOrientation",
          value: function withVerticalOrientation() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            /** @type {?} */
            this._vertical = enabled;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Configures the key manager to move the selection horizontally.
           * Passing in `null` will disable horizontal movement.
           * @template THIS
           * @this {THIS}
           * @param {?} direction Direction in which the selection can be moved.
           * @return {THIS}
           */

        }, {
          key: "withHorizontalOrientation",
          value: function withHorizontalOrientation(direction) {
            /** @type {?} */
            this._horizontal = direction;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Modifier keys which are allowed to be held down and whose default actions will be prevented
           * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
           * @template THIS
           * @this {THIS}
           * @param {?} keys
           * @return {THIS}
           */

        }, {
          key: "withAllowedModifierKeys",
          value: function withAllowedModifierKeys(keys) {
            /** @type {?} */
            this._allowedModifierKeys = keys;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Turns on typeahead mode which allows users to set the active item by typing.
           * @template THIS
           * @this {THIS}
           * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
           * @return {THIS}
           */

        }, {
          key: "withTypeAhead",
          value: function withTypeAhead() {
            var _this81 = this;

            var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

            if (
            /** @type {?} */
            this._items.length &&
            /** @type {?} */
            this._items.some(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return typeof item.getLabel !== 'function';
            })) {
              throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
            }

            /** @type {?} */
            this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
            // and convert those letters back into a string. Afterwards find the first item that starts
            // with that string and select it.


            /** @type {?} */
            this._typeaheadSubscription =
            /** @type {?} */
            this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
            /**
            * @param {?} keyCode
            * @return {?}
            */
            function (keyCode) {
              return (
                /** @type {?} */
                _this81._pressedLetters.push(keyCode)
              );
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                _this81._pressedLetters.length > 0
              );
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                _this81._pressedLetters.join('')
              );
            })).subscribe(
            /**
            * @param {?} inputString
            * @return {?}
            */
            function (inputString) {
              /** @type {?} */
              var items =
              /** @type {?} */
              _this81._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
              // following the current active item.


              for (var i = 1; i < items.length + 1; i++) {
                /** @type {?} */
                var index = (
                /** @type {?} */
                _this81._activeItemIndex + i) % items.length;
                /** @type {?} */

                var item = items[index];

                if (!
                /** @type {?} */
                _this81._skipPredicateFn(item) &&
                /** @type {?} */
                item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                  /** @type {?} */
                  _this81.setActiveItem(index);

                  break;
                }
              }

              /** @type {?} */
              _this81._pressedLetters = [];
            });
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            /** @type {?} */
            var previousIndex = this._activeItemIndex;
            this.updateActiveItem(item);

            if (this._activeItemIndex !== previousIndex) {
              this.change.next(this._activeItemIndex);
            }
          }
          /**
           * Sets the active item depending on the key event passed in.
           * @param {?} event Keyboard event to be used for determining which element should be active.
           * @return {?}
           */

        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            var _this82 = this;

            /** @type {?} */
            var keyCode = event.keyCode;
            /** @type {?} */

            var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
            /** @type {?} */

            var isModifierAllowed = modifiers.every(
            /**
            * @param {?} modifier
            * @return {?}
            */
            function (modifier) {
              return !event[modifier] || _this82._allowedModifierKeys.indexOf(modifier) > -1;
            });

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                  // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                  // otherwise fall back to resolving alphanumeric characters via the keyCode.
                  if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                  } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                  }
                } // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.


                return;
            }

            this._pressedLetters = [];
            event.preventDefault();
          }
          /**
           * Index of the currently active item.
           * @return {?}
           */

        }, {
          key: "setFirstItemActive",

          /**
           * Sets the active item to the first enabled item in the list.
           * @return {?}
           */
          value: function setFirstItemActive() {
            this._setActiveItemByIndex(0, 1);
          }
          /**
           * Sets the active item to the last enabled item in the list.
           * @return {?}
           */

        }, {
          key: "setLastItemActive",
          value: function setLastItemActive() {
            this._setActiveItemByIndex(this._items.length - 1, -1);
          }
          /**
           * Sets the active item to the next enabled item in the list.
           * @return {?}
           */

        }, {
          key: "setNextItemActive",
          value: function setNextItemActive() {
            this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
          }
          /**
           * Sets the active item to a previous enabled item in the list.
           * @return {?}
           */

        }, {
          key: "setPreviousItemActive",
          value: function setPreviousItemActive() {
            this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "updateActiveItem",
          value: function updateActiveItem(item) {
            /** @type {?} */
            var itemArray = this._getItemsArray();
            /** @type {?} */


            var index = typeof item === 'number' ? item : itemArray.indexOf(item);
            /** @type {?} */

            var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

            this._activeItem = activeItem == null ? null : activeItem;
            this._activeItemIndex = index;
          }
          /**
           * Allows setting of the activeItemIndex without any other effects.
           * @deprecated Use `updateActiveItem` instead.
           * \@breaking-change 8.0.0
           * @param {?} index The new activeItemIndex.
           * @return {?}
           */

        }, {
          key: "updateActiveItemIndex",
          value: function updateActiveItemIndex(index) {
            this.updateActiveItem(index);
          }
          /**
           * This method sets the active item, given a list of items and the delta between the
           * currently active item and the new active item. It will calculate differently
           * depending on whether wrap mode is turned on.
           * @private
           * @param {?} delta
           * @return {?}
           */

        }, {
          key: "_setActiveItemByDelta",
          value: function _setActiveItemByDelta(delta) {
            this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
          }
          /**
           * Sets the active item properly given "wrap" mode. In other words, it will continue to move
           * down the list until it finds an item that is not disabled, and it will wrap if it
           * encounters either end of the list.
           * @private
           * @param {?} delta
           * @return {?}
           */

        }, {
          key: "_setActiveInWrapMode",
          value: function _setActiveInWrapMode(delta) {
            /** @type {?} */
            var items = this._getItemsArray();

            for (var i = 1; i <= items.length; i++) {
              /** @type {?} */
              var index = (this._activeItemIndex + delta * i + items.length) % items.length;
              /** @type {?} */

              var item = items[index];

              if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
              }
            }
          }
          /**
           * Sets the active item properly given the default mode. In other words, it will
           * continue to move down the list until it finds an item that is not disabled. If
           * it encounters either end of the list, it will stop and not wrap.
           * @private
           * @param {?} delta
           * @return {?}
           */

        }, {
          key: "_setActiveInDefaultMode",
          value: function _setActiveInDefaultMode(delta) {
            this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
          }
          /**
           * Sets the active item to the first enabled item starting at the index specified. If the
           * item is disabled, it will move in the fallbackDelta direction until it either
           * finds an enabled item or encounters the end of the list.
           * @private
           * @param {?} index
           * @param {?} fallbackDelta
           * @return {?}
           */

        }, {
          key: "_setActiveItemByIndex",
          value: function _setActiveItemByIndex(index, fallbackDelta) {
            /** @type {?} */
            var items = this._getItemsArray();

            if (!items[index]) {
              return;
            }

            while (this._skipPredicateFn(items[index])) {
              index += fallbackDelta;

              if (!items[index]) {
                return;
              }
            }

            this.setActiveItem(index);
          }
          /**
           * Returns the items as an array.
           * @private
           * @return {?}
           */

        }, {
          key: "_getItemsArray",
          value: function _getItemsArray() {
            return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
          }
        }, {
          key: "activeItemIndex",
          get: function get() {
            return this._activeItemIndex;
          }
          /**
           * The active item.
           * @return {?}
           */

        }, {
          key: "activeItem",
          get: function get() {
            return this._activeItem;
          }
        }]);

        return ListKeyManager;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
        _inherits(ActiveDescendantKeyManager, _ListKeyManager);

        var _super24 = _createSuper(ActiveDescendantKeyManager);

        function ActiveDescendantKeyManager() {
          _classCallCheck(this, ActiveDescendantKeyManager);

          return _super24.apply(this, arguments);
        }

        _createClass(ActiveDescendantKeyManager, [{
          key: "setActiveItem",

          /**
           * @param {?} index
           * @return {?}
           */
          value: function setActiveItem(index) {
            if (this.activeItem) {
              this.activeItem.setInactiveStyles();
            }

            _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

            if (this.activeItem) {
              this.activeItem.setActiveStyles();
            }
          }
        }]);

        return ActiveDescendantKeyManager;
      }(ListKeyManager);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
        _inherits(FocusKeyManager, _ListKeyManager2);

        var _super25 = _createSuper(FocusKeyManager);

        function FocusKeyManager() {
          var _this83;

          _classCallCheck(this, FocusKeyManager);

          _this83 = _super25.apply(this, arguments);
          _this83._origin = 'program';
          return _this83;
        }
        /**
         * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Focus origin to be used when focusing items.
         * @return {THIS}
         */


        _createClass(FocusKeyManager, [{
          key: "setFocusOrigin",
          value: function setFocusOrigin(origin) {
            /** @type {?} */
            this._origin = origin;
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

            if (this.activeItem) {
              this.activeItem.focus(this._origin);
            }
          }
        }]);

        return FocusKeyManager;
      }(ListKeyManager);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
      // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
      // supported.

      /**
       * Utility for checking the interactivity of an element, such as whether is is focusable or
       * tabbable.
       */


      var InteractivityChecker = /*#__PURE__*/function () {
        /**
         * @param {?} _platform
         */
        function InteractivityChecker(_platform) {
          _classCallCheck(this, InteractivityChecker);

          this._platform = _platform;
        }
        /**
         * Gets whether an element is disabled.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is disabled.
         */


        _createClass(InteractivityChecker, [{
          key: "isDisabled",
          value: function isDisabled(element) {
            // This does not capture some cases, such as a non-form control with a disabled attribute or
            // a form control inside of a disabled form, but should capture the most common cases.
            return element.hasAttribute('disabled');
          }
          /**
           * Gets whether an element is visible for the purposes of interactivity.
           *
           * This will capture states like `display: none` and `visibility: hidden`, but not things like
           * being clipped by an `overflow: hidden` parent or being outside the viewport.
           *
           * @param {?} element
           * @return {?} Whether the element is visible.
           */

        }, {
          key: "isVisible",
          value: function isVisible(element) {
            return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
          }
          /**
           * Gets whether an element can be reached via Tab key.
           * Assumes that the element has already been checked with isFocusable.
           *
           * @param {?} element Element to be checked.
           * @return {?} Whether the element is tabbable.
           */

        }, {
          key: "isTabbable",
          value: function isTabbable(element) {
            // Nothing is tabbable on the server 😎
            if (!this._platform.isBrowser) {
              return false;
            }
            /** @type {?} */


            var frameElement = getFrameElement(getWindow(element));

            if (frameElement) {
              /** @type {?} */
              var frameType = frameElement && frameElement.nodeName.toLowerCase(); // Frame elements inherit their tabindex onto all child elements.

              if (getTabIndexValue(frameElement) === -1) {
                return false;
              } // Webkit and Blink consider anything inside of an <object> element as non-tabbable.


              if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
              } // Webkit and Blink disable tabbing to an element inside of an invisible frame.


              if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
              }
            }
            /** @type {?} */


            var nodeName = element.nodeName.toLowerCase();
            /** @type {?} */

            var tabIndexValue = getTabIndexValue(element);

            if (element.hasAttribute('contenteditable')) {
              return tabIndexValue !== -1;
            }

            if (nodeName === 'iframe') {
              // The frames may be tabbable depending on content, but it's not possibly to reliably
              // investigate the content of the frames.
              return false;
            }

            if (nodeName === 'audio') {
              if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
              } else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
              }
            }

            if (nodeName === 'video') {
              if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
              } else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
              }
            }

            if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
              // In all Blink and WebKit based browsers <object> elements are never tabbable.
              return false;
            } // In iOS the browser only considers some specific elements as tabbable.


            if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
              return false;
            }

            return element.tabIndex >= 0;
          }
          /**
           * Gets whether an element can be focused by the user.
           *
           * @param {?} element Element to be checked.
           * @return {?} Whether the element is focusable.
           */

        }, {
          key: "isFocusable",
          value: function isFocusable(element) {
            // Perform checks in order of left to most expensive.
            // Again, naive approach that does not capture many edge cases and browser quirks.
            return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
          }
        }]);

        return InteractivityChecker;
      }();

      InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
        return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      };

      InteractivityChecker.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: InteractivityChecker,
        factory: InteractivityChecker.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      InteractivityChecker.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };
      /** @nocollapse */


      InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function InteractivityChecker_Factory() {
          return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
        },
        token: InteractivityChecker,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
          }];
        }, null);
      })();
      /**
       * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
       * the frameElement property is being accessed from a different host address, this property
       * should be accessed carefully.
       * @param {?} window
       * @return {?}
       */


      function getFrameElement(window) {
        try {
          return (
            /** @type {?} */
            window.frameElement
          );
        } catch (_a) {
          return null;
        }
      }
      /**
       * Checks whether the specified element has any geometry / rectangles.
       * @param {?} element
       * @return {?}
       */


      function hasGeometry(element) {
        // Use logic from jQuery to check for an invisible element.
        // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
        return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
      }
      /**
       * Gets whether an element's
       * @param {?} element
       * @return {?}
       */


      function isNativeFormElement(element) {
        /** @type {?} */
        var nodeName = element.nodeName.toLowerCase();
        return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
      }
      /**
       * Gets whether an element is an `<input type="hidden">`.
       * @param {?} element
       * @return {?}
       */


      function isHiddenInput(element) {
        return isInputElement(element) && element.type == 'hidden';
      }
      /**
       * Gets whether an element is an anchor that has an href attribute.
       * @param {?} element
       * @return {?}
       */


      function isAnchorWithHref(element) {
        return isAnchorElement(element) && element.hasAttribute('href');
      }
      /**
       * Gets whether an element is an input element.
       * @param {?} element
       * @return {?}
       */


      function isInputElement(element) {
        return element.nodeName.toLowerCase() == 'input';
      }
      /**
       * Gets whether an element is an anchor element.
       * @param {?} element
       * @return {?}
       */


      function isAnchorElement(element) {
        return element.nodeName.toLowerCase() == 'a';
      }
      /**
       * Gets whether an element has a valid tabindex.
       * @param {?} element
       * @return {?}
       */


      function hasValidTabIndex(element) {
        if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
          return false;
        }
        /** @type {?} */


        var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

        if (tabIndex == '-32768') {
          return false;
        }

        return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
      }
      /**
       * Returns the parsed tabindex from the element attributes instead of returning the
       * evaluated tabindex from the browsers defaults.
       * @param {?} element
       * @return {?}
       */


      function getTabIndexValue(element) {
        if (!hasValidTabIndex(element)) {
          return null;
        } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054

        /** @type {?} */


        var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
        return isNaN(tabIndex) ? -1 : tabIndex;
      }
      /**
       * Checks whether the specified element is potentially tabbable on iOS
       * @param {?} element
       * @return {?}
       */


      function isPotentiallyTabbableIOS(element) {
        /** @type {?} */
        var nodeName = element.nodeName.toLowerCase();
        /** @type {?} */

        var inputType = nodeName === 'input' &&
        /** @type {?} */
        element.type;
        return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
      }
      /**
       * Gets whether an element is potentially focusable without taking current visible/disabled state
       * into account.
       * @param {?} element
       * @return {?}
       */


      function isPotentiallyFocusable(element) {
        // Inputs are potentially focusable *unless* they're type="hidden".
        if (isHiddenInput(element)) {
          return false;
        }

        return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
      }
      /**
       * Gets the parent window of a DOM node with regards of being inside of an iframe.
       * @param {?} node
       * @return {?}
       */


      function getWindow(node) {
        // ownerDocument is null if `node` itself *is* a document.
        return node.ownerDocument && node.ownerDocument.defaultView || window;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class currently uses a relatively simple approach to focus trapping.
       * It assumes that the tab order is the same as DOM order, which is not necessarily true.
       * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
       */


      var FocusTrap = /*#__PURE__*/function () {
        /**
         * @param {?} _element
         * @param {?} _checker
         * @param {?} _ngZone
         * @param {?} _document
         * @param {?=} deferAnchors
         */
        function FocusTrap(_element, _checker, _ngZone, _document) {
          var _this84 = this;

          var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          _classCallCheck(this, FocusTrap);

          this._element = _element;
          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
          this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

          this.startAnchorListener =
          /**
          * @return {?}
          */
          function () {
            return _this84.focusLastTabbableElement();
          };

          this.endAnchorListener =
          /**
          * @return {?}
          */
          function () {
            return _this84.focusFirstTabbableElement();
          };

          this._enabled = true;

          if (!deferAnchors) {
            this.attachAnchors();
          }
        }
        /**
         * Whether the focus trap is active.
         * @return {?}
         */


        _createClass(FocusTrap, [{
          key: "destroy",

          /**
           * Destroys the focus trap by cleaning up the anchors.
           * @return {?}
           */
          value: function destroy() {
            /** @type {?} */
            var startAnchor = this._startAnchor;
            /** @type {?} */

            var endAnchor = this._endAnchor;

            if (startAnchor) {
              startAnchor.removeEventListener('focus', this.startAnchorListener);

              if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
              }
            }

            if (endAnchor) {
              endAnchor.removeEventListener('focus', this.endAnchorListener);

              if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
              }
            }

            this._startAnchor = this._endAnchor = null;
          }
          /**
           * Inserts the anchors into the DOM. This is usually done automatically
           * in the constructor, but can be deferred for cases like directives with `*ngIf`.
           * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
           * if the target element isn't currently in the DOM.
           */

        }, {
          key: "attachAnchors",
          value: function attachAnchors() {
            var _this85 = this;

            // If we're not on the browser, there can be no focus to trap.
            if (this._hasAttached) {
              return true;
            }

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (!_this85._startAnchor) {
                _this85._startAnchor = _this85._createAnchor();

                /** @type {?} */
                _this85._startAnchor.addEventListener('focus', _this85.startAnchorListener);
              }

              if (!_this85._endAnchor) {
                _this85._endAnchor = _this85._createAnchor();

                /** @type {?} */
                _this85._endAnchor.addEventListener('focus', _this85.endAnchorListener);
              }
            });

            if (this._element.parentNode) {
              this._element.parentNode.insertBefore(
              /** @type {?} */
              this._startAnchor, this._element);

              this._element.parentNode.insertBefore(
              /** @type {?} */
              this._endAnchor, this._element.nextSibling);

              this._hasAttached = true;
            }

            return this._hasAttached;
          }
          /**
           * Waits for the zone to stabilize, then either focuses the first element that the
           * user specified, or the first tabbable element.
           * @return {?} Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfuly.
           */

        }, {
          key: "focusInitialElementWhenReady",
          value: function focusInitialElementWhenReady() {
            var _this86 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              _this86._executeOnStable(
              /**
              * @return {?}
              */
              function () {
                return resolve(_this86.focusInitialElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the first tabbable element within the focus trap region.
           * @return {?} Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfuly.
           */

        }, {
          key: "focusFirstTabbableElementWhenReady",
          value: function focusFirstTabbableElementWhenReady() {
            var _this87 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              _this87._executeOnStable(
              /**
              * @return {?}
              */
              function () {
                return resolve(_this87.focusFirstTabbableElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the last tabbable element within the focus trap region.
           * @return {?} Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfuly.
           */

        }, {
          key: "focusLastTabbableElementWhenReady",
          value: function focusLastTabbableElementWhenReady() {
            var _this88 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              _this88._executeOnStable(
              /**
              * @return {?}
              */
              function () {
                return resolve(_this88.focusLastTabbableElement());
              });
            });
          }
          /**
           * Get the specified boundary element of the trapped region.
           * @private
           * @param {?} bound The boundary to get (start or end of trapped region).
           * @return {?} The boundary element.
           */

        }, {
          key: "_getRegionBoundary",
          value: function _getRegionBoundary(bound) {
            // Contains the deprecated version of selector, for temporary backwards comparability.

            /** @type {?} */
            var markers =
            /** @type {?} */
            this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

            for (var i = 0; i < markers.length; i++) {
              // @breaking-change 8.0.0
              if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
              } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
              }
            }

            if (bound == 'start') {
              return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
            }

            return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
          }
          /**
           * Focuses the element that should be focused when the focus trap is initialized.
           * @return {?} Whether focus was moved successfuly.
           */

        }, {
          key: "focusInitialElement",
          value: function focusInitialElement() {
            // Contains the deprecated version of selector, for temporary backwards comparability.

            /** @type {?} */
            var redirectToElement =
            /** @type {?} */
            this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

            if (redirectToElement) {
              // @breaking-change 8.0.0
              if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
              } // Warn the consumer if the element they've pointed to
              // isn't focusable, when not in production mode.


              if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
              }

              redirectToElement.focus();
              return true;
            }

            return this.focusFirstTabbableElement();
          }
          /**
           * Focuses the first tabbable element within the focus trap region.
           * @return {?} Whether focus was moved successfuly.
           */

        }, {
          key: "focusFirstTabbableElement",
          value: function focusFirstTabbableElement() {
            /** @type {?} */
            var redirectToElement = this._getRegionBoundary('start');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Focuses the last tabbable element within the focus trap region.
           * @return {?} Whether focus was moved successfuly.
           */

        }, {
          key: "focusLastTabbableElement",
          value: function focusLastTabbableElement() {
            /** @type {?} */
            var redirectToElement = this._getRegionBoundary('end');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Checks whether the focus trap has successfuly been attached.
           * @return {?}
           */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._hasAttached;
          }
          /**
           * Get the first tabbable element from a DOM subtree (inclusive).
           * @private
           * @param {?} root
           * @return {?}
           */

        }, {
          key: "_getFirstTabbableElement",
          value: function _getFirstTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
            // back to `childNodes` which includes text nodes, comments etc.

            /** @type {?} */


            var children = root.children || root.childNodes;

            for (var i = 0; i < children.length; i++) {
              /** @type {?} */
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(
              /** @type {?} */
              children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /**
           * Get the last tabbable element from a DOM subtree (inclusive).
           * @private
           * @param {?} root
           * @return {?}
           */

        }, {
          key: "_getLastTabbableElement",
          value: function _getLastTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in reverse DOM order.

            /** @type {?} */


            var children = root.children || root.childNodes;

            for (var i = children.length - 1; i >= 0; i--) {
              /** @type {?} */
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(
              /** @type {?} */
              children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /**
           * Creates an anchor element.
           * @private
           * @return {?}
           */

        }, {
          key: "_createAnchor",
          value: function _createAnchor() {
            /** @type {?} */
            var anchor = this._document.createElement('div');

            this._toggleAnchorTabIndex(this._enabled, anchor);

            anchor.classList.add('cdk-visually-hidden');
            anchor.classList.add('cdk-focus-trap-anchor');
            anchor.setAttribute('aria-hidden', 'true');
            return anchor;
          }
          /**
           * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
           * @private
           * @param {?} isEnabled Whether the focus trap is enabled.
           * @param {?} anchor Anchor on which to toggle the tabindex.
           * @return {?}
           */

        }, {
          key: "_toggleAnchorTabIndex",
          value: function _toggleAnchorTabIndex(isEnabled, anchor) {
            // Remove the tabindex completely, rather than setting it to -1, because if the
            // element has a tabindex, the user might still hit it when navigating with the arrow keys.
            isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
          }
          /**
           * Executes a function when the zone is stable.
           * @private
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "_executeOnStable",
          value: function _executeOnStable(fn) {
            if (this._ngZone.isStable) {
              fn();
            } else {
              this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
            }
          }
        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._enabled = value;

            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(value, this._startAnchor);

              this._toggleAnchorTabIndex(value, this._endAnchor);
            }
          }
        }]);

        return FocusTrap;
      }();
      /**
       * Factory that allows easy instantiation of focus traps.
       */


      var FocusTrapFactory = /*#__PURE__*/function () {
        /**
         * @param {?} _checker
         * @param {?} _ngZone
         * @param {?} _document
         */
        function FocusTrapFactory(_checker, _ngZone, _document) {
          _classCallCheck(this, FocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
        }
        /**
         * Creates a focus-trapped region around the given element.
         * @param {?} element The element around which focus will be trapped.
         * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
         *     manually by the user.
         * @return {?} The created focus trap instance.
         */


        _createClass(FocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
          }
        }]);

        return FocusTrapFactory;
      }();

      FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
        return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      FocusTrapFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FocusTrapFactory,
        factory: FocusTrapFactory.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      FocusTrapFactory.ctorParameters = function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };
      /** @nocollapse */


      FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusTrapFactory_Factory() {
          return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: FocusTrapFactory,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Directive for trapping focus within a region.
       */


      var CdkTrapFocus = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} _focusTrapFactory
         * @param {?} _document
         */
        function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
          _classCallCheck(this, CdkTrapFocus);

          this._elementRef = _elementRef;
          this._focusTrapFactory = _focusTrapFactory;
          /**
           * Previously focused element to restore focus to upon destroy when using autoCapture.
           */

          this._previouslyFocusedElement = null;
          this._document = _document;
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
        /**
         * Whether the focus trap is active.
         * @return {?}
         */


        _createClass(CdkTrapFocus, [{
          key: "ngOnDestroy",

          /**
           * @return {?}
           */
          value: function ngOnDestroy() {
            this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
            // element now that the trapped region is being destroyed.

            if (this._previouslyFocusedElement) {
              this._previouslyFocusedElement.focus();

              this._previouslyFocusedElement = null;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.focusTrap.attachAnchors();

            if (this.autoCapture) {
              this._previouslyFocusedElement =
              /** @type {?} */
              this._document.activeElement;
              this.focusTrap.focusInitialElementWhenReady();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (!this.focusTrap.hasAttached()) {
              this.focusTrap.attachAnchors();
            }
          }
        }, {
          key: "enabled",
          get: function get() {
            return this.focusTrap.enabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the directive should automatially move focus into the trapped region upon
           * initialization and return focus to the previous activeElement upon destruction.
           * @return {?}
           */

        }, {
          key: "autoCapture",
          get: function get() {
            return this._autoCapture;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkTrapFocus;
      }();

      CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
        return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTrapFocus,
        selectors: [["", "cdkTrapFocus", ""]],
        inputs: {
          enabled: ["cdkTrapFocus", "enabled"],
          autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
        },
        exportAs: ["cdkTrapFocus"]
      });
      /** @nocollapse */

      CdkTrapFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      CdkTrapFocus.propDecorators = {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocusAutoCapture']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkTrapFocus]',
            exportAs: 'cdkTrapFocus'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusTrapFactory
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, {
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocus']
          }],
          autoCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocusAutoCapture']
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
        providedIn: 'root',
        factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
      });
      /**
       * \@docs-private
       * @return {?}
       */

      function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
        return null;
      }
      /**
       * Injection token that can be used to configure the default options for the LiveAnnouncer.
       * @type {?}
       */


      var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var LiveAnnouncer = /*#__PURE__*/function () {
        /**
         * @param {?} elementToken
         * @param {?} _ngZone
         * @param {?} _document
         * @param {?=} _defaultOptions
         */
        function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
          _classCallCheck(this, LiveAnnouncer);

          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
          // reference browser globals (HTMLElement, Document) on non-browser environments, since having
          // a class decorator causes TypeScript to preserve the constructor signature types.

          this._document = _document;
          this._liveElement = elementToken || this._createLiveElement();
        }
        /**
         * @param {?} message
         * @param {...?} args
         * @return {?}
         */


        _createClass(LiveAnnouncer, [{
          key: "announce",
          value: function announce(message) {
            var _this89 = this;

            /** @type {?} */
            var defaultOptions = this._defaultOptions;
            /** @type {?} */

            var politeness;
            /** @type {?} */

            var duration;

            for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
              args[_key12 - 1] = arguments[_key12];
            }

            if (args.length === 1 && typeof args[0] === 'number') {
              duration = args[0];
            } else {
              politeness = args[0];
              duration = args[1];
            }

            this.clear();
            clearTimeout(this._previousTimeout);

            if (!politeness) {
              politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
            }

            if (duration == null && defaultOptions) {
              duration = defaultOptions.duration;
            } // TODO: ensure changing the politeness works on all environments we support.


            this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
            // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
            // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
            //   second time without clearing and then using a non-zero delay.
            // (using JAWS 17 at time of this writing).


            return this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return new Promise(
              /**
              * @param {?} resolve
              * @return {?}
              */
              function (resolve) {
                clearTimeout(_this89._previousTimeout);
                _this89._previousTimeout = setTimeout(
                /**
                * @return {?}
                */
                function () {
                  _this89._liveElement.textContent = message;
                  resolve();

                  if (typeof duration === 'number') {
                    _this89._previousTimeout = setTimeout(
                    /**
                    * @return {?}
                    */
                    function () {
                      return _this89.clear();
                    }, duration);
                  }
                }, 100);
              });
            });
          }
          /**
           * Clears the current text from the announcer element. Can be used to prevent
           * screen readers from reading the text out again while the user is going
           * through the page landmarks.
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this._liveElement) {
              this._liveElement.textContent = '';
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this._previousTimeout);

            if (this._liveElement && this._liveElement.parentNode) {
              this._liveElement.parentNode.removeChild(this._liveElement);

              this._liveElement =
              /** @type {?} */
              null;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_createLiveElement",
          value: function _createLiveElement() {
            /** @type {?} */
            var elementClass = 'cdk-live-announcer-element';
            /** @type {?} */

            var previousElements = this._document.getElementsByClassName(elementClass);
            /** @type {?} */


            var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


            for (var i = 0; i < previousElements.length; i++) {
              /** @type {?} */
              previousElements[i].parentNode.removeChild(previousElements[i]);
            }

            liveEl.classList.add(elementClass);
            liveEl.classList.add('cdk-visually-hidden');
            liveEl.setAttribute('aria-atomic', 'true');
            liveEl.setAttribute('aria-live', 'polite');

            this._document.body.appendChild(liveEl);

            return liveEl;
          }
        }]);

        return LiveAnnouncer;
      }();

      LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
        return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      };

      LiveAnnouncer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LiveAnnouncer,
        factory: LiveAnnouncer.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      LiveAnnouncer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      };
      /** @nocollapse */


      LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function LiveAnnouncer_Factory() {
          return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
        },
        token: LiveAnnouncer,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
       * with a wider range of browsers and screen readers.
       */


      var CdkAriaLive = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} _liveAnnouncer
         * @param {?} _contentObserver
         * @param {?} _ngZone
         */
        function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
          _classCallCheck(this, CdkAriaLive);

          this._elementRef = _elementRef;
          this._liveAnnouncer = _liveAnnouncer;
          this._contentObserver = _contentObserver;
          this._ngZone = _ngZone;
          this._politeness = 'off';
        }
        /**
         * The aria-live politeness level to use when announcing messages.
         * @return {?}
         */


        _createClass(CdkAriaLive, [{
          key: "ngOnDestroy",

          /**
           * @return {?}
           */
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }
          }
        }, {
          key: "politeness",
          get: function get() {
            return this._politeness;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            var _this90 = this;

            this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';

            if (this._politeness === 'off') {
              if (this._subscription) {
                this._subscription.unsubscribe();

                this._subscription = null;
              }
            } else if (!this._subscription) {
              this._subscription = this._ngZone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                return _this90._contentObserver.observe(_this90._elementRef).subscribe(
                /**
                * @return {?}
                */
                function () {
                  // Note that we use textContent here, rather than innerText, in order to avoid a reflow.

                  /** @type {?} */
                  var elementText = _this90._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                  // changes which we don't want to announce.

                  if (elementText !== _this90._previousAnnouncedText) {
                    _this90._liveAnnouncer.announce(elementText, _this90._politeness);

                    _this90._previousAnnouncedText = elementText;
                  }
                });
              });
            }
          }
        }]);

        return CdkAriaLive;
      }();

      CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
        return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAriaLive,
        selectors: [["", "cdkAriaLive", ""]],
        inputs: {
          politeness: ["cdkAriaLive", "politeness"]
        },
        exportAs: ["cdkAriaLive"]
      });
      /** @nocollapse */

      CdkAriaLive.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkAriaLive.propDecorators = {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAriaLive']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAriaLive]',
            exportAs: 'cdkAriaLive'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: LiveAnnouncer
          }, {
            type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          politeness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAriaLive']
          }]
        });
      })();
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @param {?} parentAnnouncer
       * @param {?} liveElement
       * @param {?} _document
       * @param {?} ngZone
       * @return {?}
       */


      function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentAnnouncer, liveElement, _document, ngZone) {
        return parentAnnouncer || new LiveAnnouncer(liveElement, ngZone, _document);
      }
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @type {?}
       */


      var LIVE_ANNOUNCER_PROVIDER = {
        // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
        provide: LiveAnnouncer,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer], [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]],
        useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
      // that a value of around 650ms seems appropriate.

      /** @type {?} */

      var TOUCH_BUFFER_MS = 650;
      /**
       * Event listener options that enable capturing and also
       * mark the listener as passive if the browser supports it.
       * @type {?}
       */

      var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["normalizePassiveListenerOptions"])({
        passive: true,
        capture: true
      });
      /**
       * Monitors mouse and keyboard events to determine the cause of focus events.
       */

      var FocusMonitor = /*#__PURE__*/function () {
        /**
         * @param {?} _ngZone
         * @param {?} _platform
         */
        function FocusMonitor(_ngZone, _platform) {
          var _this91 = this;

          _classCallCheck(this, FocusMonitor);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /**
           * The focus origin that the next focus event is a result of.
           */

          this._origin = null;
          /**
           * Whether the window has just been focused.
           */

          this._windowFocused = false;
          /**
           * Map of elements being monitored to their info.
           */

          this._elementInfo = new Map();
          /**
           * The number of elements currently being monitored.
           */

          this._monitoredElementCount = 0;
          /**
           * Event listener for `keydown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */

          this._documentKeydownListener =
          /**
          * @return {?}
          */
          function () {
            // On keydown record the origin and clear any touch event that may be in progress.
            _this91._lastTouchTarget = null;

            _this91._setOriginForCurrentEventQueue('keyboard');
          };
          /**
           * Event listener for `mousedown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentMousedownListener =
          /**
          * @return {?}
          */
          function () {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!_this91._lastTouchTarget) {
              _this91._setOriginForCurrentEventQueue('mouse');
            }
          };
          /**
           * Event listener for `touchstart` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentTouchstartListener =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // When the touchstart event fires the focus event is not yet in the event queue. This means
            // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
            // see if a focus happens.
            if (_this91._touchTimeoutId != null) {
              clearTimeout(_this91._touchTimeoutId);
            } // Since this listener is bound on the `document` level, any events coming from the shadow DOM
            // will have their `target` set to the shadow root. If available, use `composedPath` to
            // figure out the event target.


            _this91._lastTouchTarget = event.composedPath ? event.composedPath()[0] : event.target;
            _this91._touchTimeoutId = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this91._lastTouchTarget = null;
            }, TOUCH_BUFFER_MS);
          };
          /**
           * Event listener for `focus` events on the window.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._windowFocusListener =
          /**
          * @return {?}
          */
          function () {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            _this91._windowFocused = true;
            _this91._windowFocusTimeoutId = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this91._windowFocused = false;
            });
          };
        }
        /**
         * @param {?} element
         * @param {?=} checkChildren
         * @return {?}
         */


        _createClass(FocusMonitor, [{
          key: "monitor",
          value: function monitor(element) {
            var _this92 = this;

            var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // Do nothing if we're not on the browser platform.
            if (!this._platform.isBrowser) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
            /** @type {?} */


            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element); // Check if we're already monitoring this element.

            if (this._elementInfo.has(nativeElement)) {
              /** @type {?} */
              var cachedInfo = this._elementInfo.get(nativeElement);

              /** @type {?} */
              cachedInfo.checkChildren = checkChildren;
              return (
                /** @type {?} */
                cachedInfo.subject.asObservable()
              );
            } // Create monitored element info.

            /** @type {?} */


            var info = {
              unlisten:
              /**
              * @return {?}
              */
              function unlisten() {},
              checkChildren: checkChildren,
              subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
            };

            this._elementInfo.set(nativeElement, info);

            this._incrementMonitoredElementCount(); // Start listening. We need to listen in capture phase since focus events don't bubble.

            /** @type {?} */


            var focusListener =
            /**
            * @param {?} event
            * @return {?}
            */
            function focusListener(event) {
              return _this92._onFocus(event, nativeElement);
            };
            /** @type {?} */


            var blurListener =
            /**
            * @param {?} event
            * @return {?}
            */
            function blurListener(event) {
              return _this92._onBlur(event, nativeElement);
            };

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              nativeElement.addEventListener('focus', focusListener, true);
              nativeElement.addEventListener('blur', blurListener, true);
            }); // Create an unlisten function for later.


            info.unlisten =
            /**
            * @return {?}
            */
            function () {
              nativeElement.removeEventListener('focus', focusListener, true);
              nativeElement.removeEventListener('blur', blurListener, true);
            };

            return info.subject.asObservable();
          }
          /**
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(element) {
            /** @type {?} */
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);
            /** @type {?} */

            var elementInfo = this._elementInfo.get(nativeElement);

            if (elementInfo) {
              elementInfo.unlisten();
              elementInfo.subject.complete();

              this._setClasses(nativeElement);

              this._elementInfo["delete"](nativeElement);

              this._decrementMonitoredElementCount();
            }
          }
          /**
           * @param {?} element
           * @param {?} origin
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focusVia",
          value: function focusVia(element, origin, options) {
            /** @type {?} */
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);

            this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


            if (typeof nativeElement.focus === 'function') {
              // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.

              /** @type {?} */
              nativeElement.focus(options);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this93 = this;

            this._elementInfo.forEach(
            /**
            * @param {?} _info
            * @param {?} element
            * @return {?}
            */
            function (_info, element) {
              return _this93.stopMonitoring(element);
            });
          }
          /**
           * @private
           * @param {?} element
           * @param {?} className
           * @param {?} shouldSet
           * @return {?}
           */

        }, {
          key: "_toggleClass",
          value: function _toggleClass(element, className, shouldSet) {
            if (shouldSet) {
              element.classList.add(className);
            } else {
              element.classList.remove(className);
            }
          }
          /**
           * Sets the focus classes on the element based on the given focus origin.
           * @private
           * @param {?} element The element to update the classes on.
           * @param {?=} origin The focus origin.
           * @return {?}
           */

        }, {
          key: "_setClasses",
          value: function _setClasses(element, origin) {
            /** @type {?} */
            var elementInfo = this._elementInfo.get(element);

            if (elementInfo) {
              this._toggleClass(element, 'cdk-focused', !!origin);

              this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

              this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

              this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

              this._toggleClass(element, 'cdk-program-focused', origin === 'program');
            }
          }
          /**
           * Sets the origin and schedules an async function to clear it at the end of the event queue.
           * @private
           * @param {?} origin The origin to set.
           * @return {?}
           */

        }, {
          key: "_setOriginForCurrentEventQueue",
          value: function _setOriginForCurrentEventQueue(origin) {
            var _this94 = this;

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this94._origin = origin; // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
              // tick after the interaction event fired. To ensure the focus origin is always correct,
              // the focus origin will be determined at the beginning of the next tick.

              _this94._originTimeoutId = setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this94._origin = null;
              }, 1);
            });
          }
          /**
           * Checks whether the given focus event was caused by a touchstart event.
           * @private
           * @param {?} event The focus event to check.
           * @return {?} Whether the event was caused by a touch.
           */

        }, {
          key: "_wasCausedByTouch",
          value: function _wasCausedByTouch(event) {
            // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
            // Consider the following dom structure:
            //
            // <div #parent tabindex="0" cdkFocusClasses>
            //   <div #child (click)="#parent.focus()"></div>
            // </div>
            //
            // If the user touches the #child element and the #parent is programmatically focused as a
            // result, this code will still consider it to have been caused by the touch event and will
            // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
            // relatively small edge-case that can be worked around by using
            // focusVia(parentEl, 'program') to focus the parent element.
            //
            // If we decide that we absolutely must handle this case correctly, we can do so by listening
            // for the first focus event after the touchstart, and then the first blur event after that
            // focus event. When that blur event fires we know that whatever follows is not a result of the
            // touchstart.

            /** @type {?} */
            var focusTarget = event.target;
            return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
          }
          /**
           * Handles focus events on a registered element.
           * @private
           * @param {?} event The focus event.
           * @param {?} element The monitored element.
           * @return {?}
           */

        }, {
          key: "_onFocus",
          value: function _onFocus(event, element) {
            // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
            // focus event affecting the monitored element. If we want to use the origin of the first event
            // instead we should check for the cdk-focused class here and return if the element already has
            // it. (This only matters for elements that have includesChildren = true).
            // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
            // focus event affecting the monitored element. If we want to use the origin of the first event
            // instead we should check for the cdk-focused class here and return if the element already has
            // it. (This only matters for elements that have includesChildren = true).
            // If we are not counting child-element-focus as focused, make sure that the event target is the
            // monitored element itself.

            /** @type {?} */
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || !elementInfo.checkChildren && element !== event.target) {
              return;
            } // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
            // 1) The window has just regained focus, in which case we want to restore the focused state of
            //    the element from before the window blurred.
            // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
            // 3) The element was programmatically focused, in which case we should mark the origin as
            //    'program'.

            /** @type {?} */


            var origin = this._origin;

            if (!origin) {
              if (this._windowFocused && this._lastFocusOrigin) {
                origin = this._lastFocusOrigin;
              } else if (this._wasCausedByTouch(event)) {
                origin = 'touch';
              } else {
                origin = 'program';
              }
            }

            this._setClasses(element, origin);

            this._emitOrigin(elementInfo.subject, origin);

            this._lastFocusOrigin = origin;
          }
          /**
           * Handles blur events on a registered element.
           * @param {?} event The blur event.
           * @param {?} element The monitored element.
           * @return {?}
           */

        }, {
          key: "_onBlur",
          value: function _onBlur(event, element) {
            // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
            // order to focus another child of the monitored element.

            /** @type {?} */
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
              return;
            }

            this._setClasses(element);

            this._emitOrigin(elementInfo.subject, null);
          }
          /**
           * @private
           * @param {?} subject
           * @param {?} origin
           * @return {?}
           */

        }, {
          key: "_emitOrigin",
          value: function _emitOrigin(subject, origin) {
            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return subject.next(origin);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_incrementMonitoredElementCount",
          value: function _incrementMonitoredElementCount() {
            var _this95 = this;

            // Register global listeners when first element is monitored.
            if (++this._monitoredElementCount == 1 && this._platform.isBrowser) {
              // Note: we listen to events in the capture phase so we
              // can detect them even if the user stops propagation.
              this._ngZone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                document.addEventListener('keydown', _this95._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', _this95._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', _this95._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', _this95._windowFocusListener);
              });
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_decrementMonitoredElementCount",
          value: function _decrementMonitoredElementCount() {
            // Unregister global listeners when last element is unmonitored.
            if (! --this._monitoredElementCount) {
              document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
              document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
              document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
              window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.

              clearTimeout(this._windowFocusTimeoutId);
              clearTimeout(this._touchTimeoutId);
              clearTimeout(this._originTimeoutId);
            }
          }
        }]);

        return FocusMonitor;
      }();

      FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
        return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      };

      FocusMonitor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FocusMonitor,
        factory: FocusMonitor.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      FocusMonitor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };
      /** @nocollapse */


      FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusMonitor_Factory() {
          return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
        },
        token: FocusMonitor,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
          }];
        }, null);
      })();
      /**
       * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
       * programmatically) and adds corresponding classes to the element.
       *
       * There are two variants of this directive:
       * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
       *    focused.
       * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
       */


      var CdkMonitorFocus = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} _focusMonitor
         */
        function CdkMonitorFocus(_elementRef, _focusMonitor) {
          var _this96 = this;

          _classCallCheck(this, CdkMonitorFocus);

          this._elementRef = _elementRef;
          this._focusMonitor = _focusMonitor;
          this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(
          /**
          * @param {?} origin
          * @return {?}
          */
          function (origin) {
            return _this96.cdkFocusChange.emit(origin);
          });
        }
        /**
         * @return {?}
         */


        _createClass(CdkMonitorFocus, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            this._monitorSubscription.unsubscribe();
          }
        }]);

        return CdkMonitorFocus;
      }();

      CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
        return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor));
      };

      CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkMonitorFocus,
        selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
        outputs: {
          cdkFocusChange: "cdkFocusChange"
        }
      });
      /** @nocollapse */

      CdkMonitorFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusMonitor
        }];
      };

      CdkMonitorFocus.propDecorators = {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusMonitor
          }];
        }, {
          cdkFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @param {?} parentDispatcher
       * @param {?} ngZone
       * @param {?} platform
       * @return {?}
       */


      function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
        return parentDispatcher || new FocusMonitor(ngZone, platform);
      }
      /**
       * \@docs-private \@deprecated \@breaking-change 8.0.0
       * @type {?}
       */


      var FOCUS_MONITOR_PROVIDER = {
        // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
        provide: FocusMonitor,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]],
        useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Screenreaders will often fire fake mousedown events when a focusable element
       * is activated using the keyboard. We can typically distinguish between these faked
       * mousedown events and real mousedown events using the "buttons" property. While
       * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
       * the left mouse button), faked mousedowns will usually set the property value to 0.
       * @param {?} event
       * @return {?}
       */

      function isFakeMousedownFromScreenReader(event) {
        return event.buttons === 0;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var A11yModule = function A11yModule() {
        _classCallCheck(this, A11yModule);
      };

      A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: A11yModule
      });
      A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function A11yModule_Factory(t) {
          return new (t || A11yModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, {
          declarations: function declarations() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]];
          },
          exports: function exports() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
            declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
            exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=a11y.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~for_admin-adm-providers-adm-providers-module~for_user-usr-view-provider-calendar-usr-view-pr~dc2823ca-es5.js.map