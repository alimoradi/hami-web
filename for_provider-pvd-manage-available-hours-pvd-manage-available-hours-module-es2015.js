(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_provider-pvd-manage-available-hours-pvd-manage-available-hours-module"],{

/***/ "2Ibb":
/*!******************************************************************************************************!*\
  !*** ./src/app/for_provider/pvd-manage-available-hours/pvd-manage-available-hours-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: PvdManageAvailableHoursPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PvdManageAvailableHoursPageRoutingModule", function() { return PvdManageAvailableHoursPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pvd_manage_available_hours_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pvd-manage-available-hours.page */ "xqkm");




const routes = [
    {
        path: '',
        component: _pvd_manage_available_hours_page__WEBPACK_IMPORTED_MODULE_3__["PvdManageAvailableHoursPage"]
    }
];
let PvdManageAvailableHoursPageRoutingModule = class PvdManageAvailableHoursPageRoutingModule {
};
PvdManageAvailableHoursPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PvdManageAvailableHoursPageRoutingModule);



/***/ }),

/***/ "F/Az":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_provider/pvd-manage-available-hours/pvd-manage-available-hours.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"add()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>ساعات کاری</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-segment class=\"primary-segment\" scrollable [value]=\"selectedDayOfWeek\" (ionChange)=\"segmentChanged($event)\" mode=\"ios\">\n    <ion-segment-button [value]=\"5\">\n      <ion-label>شنبه</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"6\">\n      <ion-label>یکشنبه</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"0\">\n      <ion-label>دوشنبه</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"1\">\n      <ion-label>سه شنبه</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"2\">\n      <ion-label>چهارشنبه</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"3\">\n      <ion-label>پنج شنبه</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"4\">\n      <ion-label>جمعه</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n\n<ion-item-sliding *ngFor=\"let hours of filteredHours\" >\n  <ion-item-options side=\"end\" class=\"\">\n    <ion-item-option class=\"normal-text my-font\" (click)=\"delete(hours.id)\">\n      <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n    </ion-item-option>\n  </ion-item-options>\n\n  <ion-item class=\"shadow-item\" button>\n    <span class=\"normal-text\">{{hours.time_from}}</span>\n  <span class=\"small-text light-text mx-2\">تا</span>\n  <span class=\"normal-text\">{{hours.time_to}}</span>\n  <ion-toggle class=\"primary-toggle\" slot=\"end\" [checked]=\"!hours.disabled\" (ionChange)=\"toggleDisabledHours(hours.id)\"></ion-toggle>\n  </ion-item>\n\n  \n</ion-item-sliding>\n</ion-content>\n");

/***/ }),

/***/ "FROO":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_provider/pvd-add-available-hours/pvd-add-available-hours.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>ساعات کاری جدید</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <form\n      [formGroup]=\"availableHoursForm\"\n      class=\"action-content flex-container d-flex flex-column justify-content-between h-100\"\n    >\n      <div>\n        <ion-item>\n          <ion-label>زمان شروع</ion-label>\n          <ion-datetime\n            display-format=\"HH:mm\"\n            doneText=\"تأیید\"\n            cancelText=\"انصراف\"\n            mode=\"ios\"\n            picker-format=\"HH:mm\"\n            formControlName=\"timeFrom\"\n          ></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>زمان پایان</ion-label>\n          <ion-datetime\n            display-format=\"HH:mm\"\n            doneText=\"تأیید\"\n            cancelText=\"انصراف\"\n            mode=\"ios\"\n            picker-format=\"Hmm\"\n            formControlName=\"timeTo\"\n          ></ion-datetime>\n        </ion-item>\n        <ion-item class=\"d-none\">\n          <ion-label>تکرار</ion-label>\n          <ion-toggle\n            mode=\"ios\"\n            #repeatToggle\n            formControlName=\"repeat\"\n          ></ion-toggle>\n        </ion-item>\n        <ion-item\n          [disabled]=\"!repeatToggle.checked\"\n          (click)=\"selectDayOfWeek()\"\n        >\n          <ion-label>روز تکرار</ion-label>\n          <span slot=\"end\">{{\n            getDayText()\n          }}</span>\n        </ion-item>\n      </div>\n    </form>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <app-submit-button text=\"ثبت\" [isWaiting]=\"isSubmitWaiting\" (submitted)=\"submit()\">\n\n        </app-submit-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "X//e":
/*!*******************************************************************************************!*\
  !*** ./src/app/for_provider/pvd-add-available-hours/pvd-add-available-hours.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PvdAddAvailableHoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PvdAddAvailableHoursComponent", function() { return PvdAddAvailableHoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pvd_add_available_hours_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pvd-add-available-hours.component.html */ "FROO");
/* harmony import */ var _pvd_add_available_hours_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pvd-add-available-hours.component.scss */ "lnlA");
/* harmony import */ var _models_available_hours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/available-hours */ "xG8R");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/calendar.service */ "3WFG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












let PvdAddAvailableHoursComponent = class PvdAddAvailableHoursComponent {
    constructor(modal, picker, env, calendarService, alert) {
        this.modal = modal;
        this.picker = picker;
        this.env = env;
        this.calendarService = calendarService;
        this.alert = alert;
        this.isSubmitWaiting = false;
        this.availableHoursForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            timeFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("08:00"),
            timeTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: "09:00", disabled: true }),
            repeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: true, disabled: true })
        });
        this.availableHoursForm.controls.timeFrom.valueChanges.subscribe(result => {
            let hours = new _models_available_hours__WEBPACK_IMPORTED_MODULE_3__["AvailableHours"]();
            hours.time_from = result;
            _models_available_hours__WEBPACK_IMPORTED_MODULE_3__["AvailableHours"].SetTimeToBasedOnTimeFrom(hours);
            this.availableHoursForm.controls.timeTo.setValue(hours.time_to);
        });
    }
    dismiss(refresh = false) {
        this.modal.dismiss({ refresh: refresh });
    }
    selectDayOfWeek() {
        this.openDayOfWeekPicker().subscribe();
    }
    openDayOfWeekPicker() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.picker.create({
            columns: this.getColumns(),
            buttons: [
                {
                    text: "انصراف",
                    role: "cancel",
                },
                {
                    text: "تأیید",
                    handler: (value) => {
                        this.dayOfWeek = value['col-1']["value"];
                    },
                }
            ],
            mode: "ios",
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((picker) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(picker.present());
        }));
    }
    getColumns() {
        let columns = [];
        let options = [];
        for (let i = 0; i < 7; i++) {
            options.push({
                text: this.env.dayOfWeekText(i),
                value: i,
            });
        }
        columns.push({
            name: "col-1",
            options: options,
            selectedIndex: this.dayOfWeek
        });
        return columns;
    }
    submit() {
        this.isSubmitWaiting = true;
        let timeFrom = this.availableHoursForm.controls.timeFrom.value;
        let timeTo = this.availableHoursForm.controls.timeTo.value;
        let repeat = this.availableHoursForm.controls.repeat.value;
        let repeatDayOfWeek = this.dayOfWeek;
        this.calendarService.addAvailableHours(timeFrom, timeTo, repeat, repeatDayOfWeek).subscribe(result => {
            if (result) {
                this.alert.presentSuccess("ساعات کاری اضافه شد.");
                this.modal.dismiss();
            }
            else {
                this.alert.presentError("بین ساعت های انتخابی این روز هم پوشانی وجود دارد.");
            }
            this.isSubmitWaiting = false;
        });
    }
    ngOnInit() {
    }
    getDayText() {
        return this.env.dayOfWeekText(parseInt(this.dayOfWeek));
    }
};
PvdAddAvailableHoursComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PickerController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"] },
    { type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_5__["CalendarService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
PvdAddAvailableHoursComponent.propDecorators = {
    dayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};
PvdAddAvailableHoursComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-pvd-add-available-hours",
        template: _raw_loader_pvd_add_available_hours_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pvd_add_available_hours_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PickerController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"],
        _services_calendar_service__WEBPACK_IMPORTED_MODULE_5__["CalendarService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], PvdAddAvailableHoursComponent);



/***/ }),

/***/ "bVQq":
/*!**********************************************************************************************!*\
  !*** ./src/app/for_provider/pvd-manage-available-hours/pvd-manage-available-hours.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: PvdManageAvailableHoursPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PvdManageAvailableHoursPageModule", function() { return PvdManageAvailableHoursPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _pvd_add_available_hours_pvd_add_available_hours_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pvd-add-available-hours/pvd-add-available-hours.component */ "X//e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pvd_manage_available_hours_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pvd-manage-available-hours-routing.module */ "2Ibb");
/* harmony import */ var _pvd_manage_available_hours_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pvd-manage-available-hours.page */ "xqkm");









let PvdManageAvailableHoursPageModule = class PvdManageAvailableHoursPageModule {
};
PvdManageAvailableHoursPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _pvd_manage_available_hours_routing_module__WEBPACK_IMPORTED_MODULE_7__["PvdManageAvailableHoursPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]
        ],
        declarations: [_pvd_manage_available_hours_page__WEBPACK_IMPORTED_MODULE_8__["PvdManageAvailableHoursPage"], _pvd_add_available_hours_pvd_add_available_hours_component__WEBPACK_IMPORTED_MODULE_2__["PvdAddAvailableHoursComponent"]],
        entryComponents: [_pvd_add_available_hours_pvd_add_available_hours_component__WEBPACK_IMPORTED_MODULE_2__["PvdAddAvailableHoursComponent"]]
    })
], PvdManageAvailableHoursPageModule);



/***/ }),

/***/ "lnlA":
/*!*********************************************************************************************!*\
  !*** ./src/app/for_provider/pvd-add-available-hours/pvd-add-available-hours.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl9wcm92aWRlci9wdmQtYWRkLWF2YWlsYWJsZS1ob3Vycy9wdmQtYWRkLWF2YWlsYWJsZS1ob3Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vOMz":
/*!**********************************************************************************************!*\
  !*** ./src/app/for_provider/pvd-manage-available-hours/pvd-manage-available-hours.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nion-item-option {\n  background-color: transparent;\n  color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9mb3JfcHJvdmlkZXIvcHZkLW1hbmFnZS1hdmFpbGFibGUtaG91cnMvcHZkLW1hbmFnZS1hdmFpbGFibGUtaG91cnMucGFnZS5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUEvQ0E7RUFFSSw2QkFBQTtFQUNBLGNDUWM7QUR3Q2xCIiwiZmlsZSI6InNyYy9hcHAvZm9yX3Byb3ZpZGVyL3B2ZC1tYW5hZ2UtYXZhaWxhYmxlLWhvdXJzL3B2ZC1tYW5hZ2UtYXZhaWxhYmxlLWhvdXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcblxuaW9uLWl0ZW0tb3B0aW9uXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBjb2xvcjokc2Vjb25kYXJ5LWNvbG9yO1xufSIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */");

/***/ }),

/***/ "xqkm":
/*!********************************************************************************************!*\
  !*** ./src/app/for_provider/pvd-manage-available-hours/pvd-manage-available-hours.page.ts ***!
  \********************************************************************************************/
/*! exports provided: PvdManageAvailableHoursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PvdManageAvailableHoursPage", function() { return PvdManageAvailableHoursPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pvd_manage_available_hours_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pvd-manage-available-hours.page.html */ "F/Az");
/* harmony import */ var _pvd_manage_available_hours_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pvd-manage-available-hours.page.scss */ "vOMz");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/calendar.service */ "3WFG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _pvd_add_available_hours_pvd_add_available_hours_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../pvd-add-available-hours/pvd-add-available-hours.component */ "X//e");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");










let PvdManageAvailableHoursPage = class PvdManageAvailableHoursPage {
    constructor(modalController, calendarService, env) {
        this.modalController = modalController;
        this.calendarService = calendarService;
        this.env = env;
        this.selectedDayOfWeek = src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["DaysOfWeek"].Saturday;
        this.unfilteredAvailableHoursArray = [];
        this.filteredHours = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.calendarSubscription = this.calendarService.availableHoursUpdated.subscribe((result) => {
            this.unfilteredAvailableHoursArray = result;
            this.fitlerHours();
        });
        this.calendarService.getAvailableHours().subscribe();
    }
    add() {
        this.presentAddAvailableHoursModal().subscribe();
    }
    ionViewWillLeave() {
        this.calendarSubscription.unsubscribe();
    }
    segmentChanged(ev) {
        this.selectedDayOfWeek = ev.target.value;
        this.fitlerHours();
    }
    fitlerHours() {
        this.filteredHours = this.unfilteredAvailableHoursArray.filter((hour) => {
            return hour.repeating_day_of_week == this.selectedDayOfWeek;
        });
    }
    refresh(ev) {
        this.calendarService.getAvailableHours().subscribe(result => {
            ev.target.complete();
        });
    }
    delete(id) {
        this.calendarService.removeAvailableHours(id).subscribe();
    }
    toggleDisabledHours(id) {
        this.calendarService.toggleDisabledAvailableHours(id).subscribe();
    }
    presentAddAvailableHoursModal() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.modalController.create({
            component: _pvd_add_available_hours_pvd_add_available_hours_component__WEBPACK_IMPORTED_MODULE_6__["PvdAddAvailableHoursComponent"],
            componentProps: {
                dayOfWeek: this.selectedDayOfWeek
            }
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(modal.present());
        }));
    }
};
PvdManageAvailableHoursPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"] }
];
PvdManageAvailableHoursPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: "app-pvd-manage-available-hours",
        template: _raw_loader_pvd_manage_available_hours_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pvd_manage_available_hours_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"]])
], PvdManageAvailableHoursPage);



/***/ })

}]);
//# sourceMappingURL=for_provider-pvd-manage-available-hours-pvd-manage-available-hours-module-es2015.js.map