(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "3WFG":
    /*!**********************************************!*\
      !*** ./src/app/services/calendar.service.ts ***!
      \**********************************************/

    /*! exports provided: CalendarService */

    /***/
    function WFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarService", function () {
        return CalendarService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _models_available_hours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../models/available-hours */
      "xG8R");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CalendarService = /*#__PURE__*/function () {
        function CalendarService(env, auth, http) {
          _classCallCheck(this, CalendarService);

          this.env = env;
          this.auth = auth;
          this.http = http;
          this.availableHoursArray = [];
          this.availableHoursUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(CalendarService, [{
          key: "addAvailableHours",
          value: function addAvailableHours(timeFrom, timeTo, repeat, repeatingDayOfWeek) {
            var _this = this;

            var hours = new _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"]();
            hours.time_from = timeFrom;
            hours.time_to = timeTo;
            hours.repeating_day_of_week = repeatingDayOfWeek;

            if (this.checkForOverlap(this.availableHoursArray, hours)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
            }

            var url = "calendar/addAvailableHours";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (token) {
              return _this.http.post(_this.env.API_URL + url, {
                time_from: timeFrom,
                time_to: timeTo,
                repeating_day_of_week: repeatingDayOfWeek
              }, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
                _this.availableHoursArray.push(result);

                _this.availableHoursUpdated.next(_this.availableHoursArray);
              }));
            }));
          }
        }, {
          key: "checkForOverlap",
          value: function checkForOverlap(hoursArray, hours) {
            var myArray = hoursArray.filter(function (item) {
              return item.repeating_day_of_week == hours.repeating_day_of_week;
            });

            for (var i = 0; i < myArray.length; i++) {
              if (this.haveOverlap(hours, myArray[i])) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "haveOverlap",
          value: function haveOverlap(hours1, hours2) {
            var hours1FromInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours1.time_from);

            var hours1ToInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours1.time_to);

            var hours2FromInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours2.time_from);

            var hours2ToInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours2.time_to);

            if (hours1FromInt >= hours2FromInt && hours1FromInt < hours2ToInt || hours1ToInt > hours2FromInt && hours1ToInt <= hours2ToInt || hours1FromInt <= hours2FromInt && hours1ToInt >= hours2ToInt) {
              return true;
            }

            return false;
          }
        }, {
          key: "toggleDisabledAvailableHours",
          value: function toggleDisabledAvailableHours(id) {
            var _this2 = this;

            var url = "calendar/toggleDisabledAvailableHours/" + id;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (token) {
              return _this2.http.post(_this2.env.API_URL + url, null, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
                _this2.availableHoursArray.find(function (hour) {
                  return hour.id == id;
                }).disabled = result.disabled;

                _this2.availableHoursUpdated.next(_this2.availableHoursArray);
              }));
            }));
          }
        }, {
          key: "removeAvailableHours",
          value: function removeAvailableHours(id) {
            var _this3 = this;

            var url = "calendar/removeAvailableHours/" + id;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (token) {
              return _this3.http.post(_this3.env.API_URL + url, null, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
                _this3.availableHoursArray.splice(_this3.availableHoursArray.indexOf(_this3.availableHoursArray.find(function (hour) {
                  return hour.id == id;
                })), 1);

                _this3.availableHoursUpdated.next(_this3.availableHoursArray);
              }));
            }));
          }
        }, {
          key: "emptyCalendar",
          value: function emptyCalendar() {
            this.availableHoursArray = [];
            this.availableHoursUpdated.next(this.availableHoursArray);
          }
        }, {
          key: "getAvailableHours",
          value: function getAvailableHours() {
            var _this4 = this;

            var providerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var body = null;
            var url = "calendar/availableHours";

            if (providerId != null) {
              body = {
                provider_id: providerId
              };
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (token) {
              return _this4.http.post(_this4.env.API_URL + url, body, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
                _this4.availableHoursArray = result;

                _this4.availableHoursUpdated.next(_this4.availableHoursArray);
              }));
            }));
          }
        }]);

        return CalendarService;
      }();

      CalendarService.ctorParameters = function () {
        return [{
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CalendarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CalendarService);
      /***/
    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "mp9f":
    /*!*************************************************!*\
      !*** ./src/app/services/form-helper.service.ts ***!
      \*************************************************/

    /*! exports provided: FormHelperService */

    /***/
    function mp9f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormHelperService", function () {
        return FormHelperService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/from-validation-message */
      "soHS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var FormHelperService = /*#__PURE__*/function () {
        function FormHelperService(alert) {
          _classCallCheck(this, FormHelperService);

          this.alert = alert;
        }

        _createClass(FormHelperService, [{
          key: "validateForm",
          value: function validateForm(validationMessages, form) {
            var _this5 = this;

            var _loop = function _loop() {
              var key = _Object$keys[_i];
              var controlErrors = form.get(key).errors;

              if (controlErrors != null) {
                var _loop2 = function _loop2() {
                  var keyError = _Object$keys2[_i2];

                  _this5.alert.presentError(validationMessages.find(function (v) {
                    return v.name == key;
                  }).validations.find(function (m) {
                    return m.type == keyError;
                  }).message);

                  return {
                    v: {
                      v: false
                    }
                  };
                };

                for (var _i2 = 0, _Object$keys2 = Object.keys(controlErrors); _i2 < _Object$keys2.length; _i2++) {
                  var _ret2 = _loop2();

                  if (typeof _ret2 === "object") return _ret2.v;
                }
              }
            };

            for (var _i = 0, _Object$keys = Object.keys(form.controls); _i < _Object$keys.length; _i++) {
              var _ret = _loop();

              if (typeof _ret === "object") return _ret.v;
            }

            return true;
          }
        }, {
          key: "addValidationMessage",
          value: function addValidationMessage(messagesObject, controlName, validationType, message) {
            var field = messagesObject.find(function (o) {
              return o.name == controlName;
            });

            if (!field) {
              field = new src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_2__["FormValidationMessageField"]();
              field.name = controlName;
              field.validations = [];
              messagesObject.push(field);
            }

            var validation = field.validations.find(function (v) {
              return v.type == validationType;
            });

            if (!validation) {
              validation = new src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_2__["FormValidationMessage"]();
              validation.type = validationType;
              field.validations.push(validation);
            }

            validation.message = message;
          }
        }, {
          key: "setConditionalValidators",
          value: function setConditionalValidators(control, controlToObserveValue, condition, validator, cleanUpComponent) {
            var _arguments = arguments;

            if (cleanUpComponent) {
              var cleanUpSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
              var originalDestroy = cleanUpComponent.ngOnDestroy;

              cleanUpComponent.ngOnDestroy = function () {
                originalDestroy.apply(cleanUpComponent, _arguments);
                cleanUpSubject.next();
                cleanUpSubject.complete();
              };

              controlToObserveValue.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(cleanUpSubject)).subscribe(function (result) {
                if (condition !== null && condition || result) {
                  control.setValidators(validator);
                } else {
                  control.clearValidators();
                }

                control.updateValueAndValidity();
              });
            }
          }
        }]);

        return FormHelperService;
      }();

      FormHelperService.ctorParameters = function () {
        return [{
          type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }];
      };

      FormHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])], FormHelperService);
      /***/
    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "soHS":
    /*!***************************************************!*\
      !*** ./src/app/models/from-validation-message.ts ***!
      \***************************************************/

    /*! exports provided: FormValidationMessageField, FormValidationMessage, FormValidationType */

    /***/
    function soHS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormValidationMessageField", function () {
        return FormValidationMessageField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormValidationMessage", function () {
        return FormValidationMessage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormValidationType", function () {
        return FormValidationType;
      });

      var FormValidationMessageField = function FormValidationMessageField() {
        _classCallCheck(this, FormValidationMessageField);
      };

      var FormValidationMessage = function FormValidationMessage() {
        _classCallCheck(this, FormValidationMessage);
      };

      var FormValidationType;

      (function (FormValidationType) {
        FormValidationType["REQUIRED"] = "required";
        FormValidationType["PATTERN"] = "pattern";
      })(FormValidationType || (FormValidationType = {}));
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map