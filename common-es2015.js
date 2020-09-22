(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2c9M":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "3WFG":
/*!**********************************************!*\
  !*** ./src/app/services/calendar.service.ts ***!
  \**********************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_available_hours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/available-hours */ "xG8R");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CalendarService = class CalendarService {
    constructor(env, auth, http) {
        this.env = env;
        this.auth = auth;
        this.http = http;
        this.availableHoursArray = [];
        this.availableHoursUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    addAvailableHours(timeFrom, timeTo, repeat, repeatingDayOfWeek) {
        let hours = new _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"]();
        hours.time_from = timeFrom;
        hours.time_to = timeTo;
        hours.repeating_day_of_week = repeatingDayOfWeek;
        if (this.checkForOverlap(this.availableHoursArray, hours)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
        let url = "calendar/addAvailableHours";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, {
                time_from: timeFrom,
                time_to: timeTo,
                repeating_day_of_week: repeatingDayOfWeek,
            }, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => {
                this.availableHoursArray.push(result);
                this.availableHoursUpdated.next(this.availableHoursArray);
            }));
        }));
    }
    checkForOverlap(hoursArray, hours) {
        const myArray = hoursArray.filter((item) => {
            return item.repeating_day_of_week == hours.repeating_day_of_week;
        });
        for (let i = 0; i < myArray.length; i++) {
            if (this.haveOverlap(hours, myArray[i])) {
                return true;
            }
        }
        return false;
    }
    haveOverlap(hours1, hours2) {
        const hours1FromInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours1.time_from);
        const hours1ToInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours1.time_to);
        const hours2FromInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours2.time_from);
        const hours2ToInt = _models_available_hours__WEBPACK_IMPORTED_MODULE_1__["AvailableHours"].getMilitaryFormatInt(hours2.time_to);
        if ((hours1FromInt >= hours2FromInt && hours1FromInt < hours2ToInt) ||
            (hours1ToInt > hours2FromInt && hours1ToInt <= hours2ToInt) ||
            (hours1FromInt <= hours2FromInt && hours1ToInt >= hours2ToInt)) {
            return true;
        }
        return false;
    }
    toggleDisabledAvailableHours(id) {
        let url = "calendar/toggleDisabledAvailableHours/" + id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => {
                this.availableHoursArray.find((hour) => hour.id == id).disabled = result.disabled;
                this.availableHoursUpdated.next(this.availableHoursArray);
            }));
        }));
    }
    removeAvailableHours(id) {
        let url = "calendar/removeAvailableHours/" + id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => {
                this.availableHoursArray.splice(this.availableHoursArray.indexOf(this.availableHoursArray.find((hour) => hour.id == id)), 1);
                this.availableHoursUpdated.next(this.availableHoursArray);
            }));
        }));
    }
    emptyCalendar() {
        this.availableHoursArray = [];
        this.availableHoursUpdated.next(this.availableHoursArray);
    }
    getAvailableHours(providerId = null) {
        let body = null;
        let url = "calendar/availableHours";
        if (providerId != null) {
            body = {
                provider_id: providerId,
            };
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, body, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => {
                this.availableHoursArray = result;
                this.availableHoursUpdated.next(this.availableHoursArray);
            }));
        }));
    }
};
CalendarService.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CalendarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CalendarService);



/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "U/uv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "mp9f":
/*!*************************************************!*\
  !*** ./src/app/services/form-helper.service.ts ***!
  \*************************************************/
/*! exports provided: FormHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHelperService", function() { return FormHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/from-validation-message */ "soHS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let FormHelperService = class FormHelperService {
    constructor(alert) {
        this.alert = alert;
    }
    validateForm(validationMessages, form) {
        for (let key of Object.keys(form.controls)) {
            const controlErrors = form.get(key).errors;
            if (controlErrors != null) {
                for (let keyError of Object.keys(controlErrors)) {
                    this.alert.presentError(validationMessages
                        .find((v) => v.name == key)
                        .validations.find((m) => m.type == keyError).message);
                    return false;
                }
            }
        }
        return true;
    }
    addValidationMessage(messagesObject, controlName, validationType, message) {
        let field = messagesObject.find((o) => o.name == controlName);
        if (!field) {
            field = new src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_2__["FormValidationMessageField"]();
            field.name = controlName;
            field.validations = [];
            messagesObject.push(field);
        }
        let validation = field.validations.find((v) => v.type == validationType);
        if (!validation) {
            validation = new src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_2__["FormValidationMessage"]();
            validation.type = validationType;
            field.validations.push(validation);
        }
        validation.message = message;
    }
    setConditionalValidators(control, controlToObserveValue, condition, validator, cleanUpComponent) {
        if (cleanUpComponent) {
            let cleanUpSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            const originalDestroy = cleanUpComponent.ngOnDestroy;
            cleanUpComponent.ngOnDestroy = () => {
                originalDestroy.apply(cleanUpComponent, arguments);
                cleanUpSubject.next();
                cleanUpSubject.complete();
            };
            controlToObserveValue.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(cleanUpSubject)).subscribe((result) => {
                if ((condition !== null && condition) || result) {
                    control.setValidators(validator);
                }
                else {
                    control.clearValidators();
                }
                control.updateValueAndValidity();
            });
        }
    }
};
FormHelperService.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
];
FormHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
], FormHelperService);



/***/ }),

/***/ "sPtc":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "soHS":
/*!***************************************************!*\
  !*** ./src/app/models/from-validation-message.ts ***!
  \***************************************************/
/*! exports provided: FormValidationMessageField, FormValidationMessage, FormValidationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationMessageField", function() { return FormValidationMessageField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationMessage", function() { return FormValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationType", function() { return FormValidationType; });
class FormValidationMessageField {
}
class FormValidationMessage {
}
var FormValidationType;
(function (FormValidationType) {
    FormValidationType["REQUIRED"] = "required";
    FormValidationType["PATTERN"] = "pattern";
})(FormValidationType || (FormValidationType = {}));


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map