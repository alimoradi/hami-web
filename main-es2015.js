(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+HkC":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/static/terms/terms.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>قوانین و مقررات</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4 *ngIf=\"!providerPerspective\">\n    قوانین و مقررات\n  </h4>\n  <ul *ngIf=\"!providerPerspective\">\n    <li>\n      <p>\n        اپلیکیشن حامی لاین بستری برای ارتباط بین کاربران و روان­شناسان واجد\n        صلاحیت فراهم می­آورد و هیچگونه دخل و تصرفی در محتوای مبادله شده ندارد.\n        لذا تصمیماتی که کاربران بدنبال راهنمایی و مشورت با روان­شناسان حامی لاین\n        می­گیرند، مسئولیت آن تماما برعهده کاربران است و حامی لاین و روان­شناسان\n        مسئولیتی در قبال تصمیمات گرفته شده و تبعات آن ندارند.\n      </p>\n    </li>\n    <li>\n      <p>\n        کاربران باید تابع قوانین جمهوری اسلامی باشند و اعمالی که مصادیق مجرمانه\n        داشته باشد از قبیل مزاحمت، تهدید، توهین و... به هر یک از روان­شناسان، یا\n        اشخاص حقوقی و حقوقی، مانع از ادامه عضویت آنها در اپلیکیشن حامی لاین\n        خواهد شد و امکان عضویت مجدد از آنان سلب می­شود.\n      </p>\n    </li>\n    <li>\n      <p>\n        کاربران از درخواست شماره تماس شخصی روان­شناسان و صحبت در فضایی غیر از\n        آنچه تعریف شده است اجتناب کنند، در صورت محرز شدن اکانت آنها حذف خواهد شد\n        و امکان عضویت مجدد نخواهند داشت.\n      </p>\n    </li>\n    <li>\n      <p>\n        محتوای مشاوره بین کاربر و روان­شناس کاملا و دوطرفه محرمانه است لذا\n        کاربران از انتشار محتوای مشاوره جدا اجتناب کنند در صورت محرز شدن پیگرد\n        قانونی دارد.\n      </p>\n    </li>\n    <li>\n      <p>\n        اطمینان از کیفیت خدمات، محتوای مشاوره بصورت اطلاعات کدگذاری شده و\n        محرمانه بایگانی می­گردد.\n      </p>\n    </li>\n  </ul>\n  <h4 *ngIf=\"providerPerspective\">قوانین و شرایط همکاری (روان­شناسان)</h4>\n  <ul *ngIf=\"providerPerspective\">\n    <li>\n      <p>روان شناسان و مشاوران ملزم به رعایت حقوق کاربران و پاسخگویی به موقع هستند. در غیر اینصورت امتیاز منفی دریافت می کنند.</p>\n    </li>\n    <li>\n      <p>-ارائه مشاوره باید مبتنی بر اصول علمی و دانش عملی باشد.</p>\n    </li>\n    <li>\n      <p>در صورت عدم توانایی در ارائه خدمت و راهنمایی مکفی در موارد خاص، کاربران را به سوپروایزر ارجاع دهند تا از مشاوره رایگاه بهره مند گردند.</p>\n    </li>\n    <li>\n      <p>روان­شناسان و مشاوران ملزم به رعایت قوانین نظام روان­شناسی و مشاوره جمهوری اسلامی ایران هستند.</p>\n    </li>\n    <li>\n      <p>روان­شناسان ملزم به رعایت کدهای اخلاقی مشاوره هستند(حفظ رازداری، عدم ورود به رابطه دوگانه، ..)</p>\n    </li>\n    <li>\n      <p>روان­شناسان از دادن شماره تماس شخصی جدا خودداری کنند در صورت محرز شدن از ادامه همکاری معذور خواهند شد.</p>\n    </li>\n  </ul>\n  <h4 *ngIf=\"!providerPerspective\">حقوق کاربران</h4>\n  <ul class=\"pb-5\" *ngIf=\"!providerPerspective\">\n    <li>\n      <p>محرمانه ماندن اطلاعات شخصی و هویتی و و محتوای جلسات</p>\n    </li>\n    <li>\n      <p>امکان دریافت یک جلسه رایگان در صورت عدم رضایت یا بازپس­گیری هزینه مشاوره</p>\n    </li>\n    <li>\n      <p>امکان ثبت شکایت در سایت و رسیدگی ادمین در اسرع وقت</p>\n    </li>\n   \n  </ul>\n</ion-content>\n");

/***/ }),

/***/ "+PLf":
/*!***************************************************************!*\
  !*** ./src/app/common/user-avatar/user-avatar.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi91c2VyLWF2YXRhci91c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "/xhe":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/remote-stats/remote-stats.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"this.env.remoteStats\" class=\"stats-top-container\">\n  <div *ngIf=\"isTotalProvidersType\" class=\"stats-type-container row no-gutters\">\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"مشاور\"\n        [number]=\"this.env.remoteStats.total_provider_count\"\n      >\n      </app-remote-stats-box>\n    </div>\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"آنلاین\"\n        [number]=\"this.env.remoteStats.online_provider_count\"\n      >\n      </app-remote-stats-box>\n    </div>\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"در حال مشاوره\"\n        [number]=\"this.env.remoteStats.in_session_provider_count\"\n      >\n      </app-remote-stats-box>\n    </div>\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"آفلاین\"\n        [number]=\"\n          this.env.remoteStats.total_provider_count -\n          this.env.remoteStats.online_provider_count\n        \"\n      >\n      </app-remote-stats-box>\n    </div>\n  </div>\n  <div\n    *ngIf=\"isCategoryProvidersType\"\n    class=\"stats-type-container row no-gutters\"\n  >\n    <div class=\"col\">\n      <div\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.NA ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.NA)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().total_provider_count\n        }}</span>\n        <span class=\"stats-text\">مشاور</span>\n      </div>\n    </div>\n    <div class=\"col\">\n      <a\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.ONLINE ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.ONLINE)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().online_provider_count\n        }}</span>\n        <span class=\"stats-text\">آنلاین</span>\n      </a>\n    </div>\n    <div class=\"col\">\n      <a\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.IN_SESSION ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.IN_SESSION)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().in_session_provider_count\n        }}</span>\n        <span class=\"stats-text\">در حال مشاوره</span>\n      </a>\n    </div>\n    <div class=\"col\">\n      <a\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.OFFLINE ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.OFFLINE)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().total_provider_count -\n            categoryStats().online_provider_count\n        }}</span>\n        <span class=\"stats-text\">آفلاین</span>\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alimoradi/Documents/Projects/tests/hami-mobile-10/src/main.ts */"zUnb");


/***/ }),

/***/ "0uqL":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/provider-info-edit/provider-info-edit.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addCategory()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>اطلاعات تخصصی</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\"  >\n      <ion-item button (click)=\"openDegrees()\">\n        <ion-label class=\"light-text\">مدرک تحصیلی</ion-label>\n        <span class=\"light-text number-text\">{{getDegreeText(selectedDegree)}}</span>\n       </ion-item>\n      <ion-item button (click)=\"openTextFees()\">\n        <ion-label class=\"light-text\">تعرفه مشاوره متنی</ion-label>\n        <span class=\"light-text number-text\">{{selectedTextFee}}</span>\n       </ion-item>\n       <ion-item button (click)=\"openCallFees()\">\n        <ion-label class=\"light-text\">تعرفه مشاوره تلفنی</ion-label>\n        <span class=\"light-text number-text\">{{selectedCallFee}}</span>\n       </ion-item>\n       <span class=\"border-top border-bottom mt-3 d-block mb-2 py-2 light-text large-text text-center\">\n         زمینه های مشاوره\n       </span>\n      <ion-item-sliding *ngFor=\"let category of categories\" >\n        <ion-item-options side=\"end\" class=\"\">\n          <ion-item-option class=\"normal-text my-font\" (click)=\"deleteCategory(category.id)\">\n            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      \n       \n          <ion-item\n          button\n          class=\"shadow-item\"\n        >\n         <ion-icon\n              slot=\"start\"\n              [name]=\"category.icon_name\"\n              class=\"category-icon large-text ml-2\"\n            ></ion-icon>\n            <span class=\"category-name\">\n              {{category.name}}\n            </span>\n        </ion-item>\n        </ion-item-sliding>\n\n      \n    </div>\n    <div class=\"actions\">\n      \n      <div class=\"actions-wrapper\">\n        <ion-button [disabled]=\"!isFormValid()\" *ngIf=\"editable\" class=\"primary-button\" (click)=\"submit()\" fill=\"solid\">\n           ثبت\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "185P":
/*!*************************************************************************************!*\
  !*** ./src/app/common/loading-toolbar-button/loading-toolbar-button.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".retry-text {\n  font-size: 0.5rem;\n  margin-right: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYWRpbmctdG9vbGJhci1idXR0b24vbG9hZGluZy10b29sYmFyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2FkaW5nLXRvb2xiYXItYnV0dG9uL2xvYWRpbmctdG9vbGJhci1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV0cnktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "1CAP":
/*!***************************************************************!*\
  !*** ./src/app/common/session-list/session-list.component.ts ***!
  \***************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-list.component.html */ "S3x2");
/* harmony import */ var _session_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-list.component.scss */ "TFAd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SessionListComponent = class SessionListComponent {
    constructor() { }
    ngOnInit() { }
};
SessionListComponent.ctorParameters = () => [];
SessionListComponent.propDecorators = {
    sessionListArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    providerPerspective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SessionListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-list',
        template: _raw_loader_session_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SessionListComponent);



/***/ }),

/***/ "1I1D":
/*!*********************************!*\
  !*** ./src/app/models/model.ts ***!
  \*********************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
class Model {
    constructor(mustFetchItself, fetchCallback, fetchObject, fetchParameter) {
        this.mustFetchItself = false;
        this.isFetching = false;
        this.fetchParameter = null;
        this.fetchCallback = null;
        this.fetchObject = null;
        this.mustFetchItself = mustFetchItself || false;
        this.fetchParameter = fetchParameter || null;
        this.fetchObject = fetchObject || null;
        if (this.mustFetchItself) {
            this.fetchCallback = fetchCallback.bind(fetchObject) || null;
            this.isFetching = false;
            this.fetch();
        }
    }
    fetch() {
        if (!this.isFetching) {
            this.isFetching = true;
            this.fetchCallback(this.fetchParameter).subscribe(result => {
                Object.assign(this, result);
                this.isFetching = false;
            });
        }
    }
}


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User, UserStatsType, RoleId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatsType", function() { return UserStatsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleId", function() { return RoleId; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "1I1D");

class User extends _model__WEBPACK_IMPORTED_MODULE_0__["Model"] {
    static getName(user) {
        if (user.role_id != RoleId.USER_ROLE_ID) {
            return user.first_name + ' ' + user.last_name;
        }
        return user.phone;
    }
    static getRoleName(user) {
        if (user.role_id == User.PROVIDER_ROLE_ID) {
            return 'مشاور';
        }
        if (user.role_id == User.USER_ROLE_ID) {
            return 'کاربر';
        }
        if (user.role_id == User.ADMIN_ROLE_ID) {
            return 'مدیر';
        }
    }
}
User.PROVIDER_ROLE_ID = 1;
User.USER_ROLE_ID = 2;
User.ADMIN_ROLE_ID = 3;
var UserStatsType;
(function (UserStatsType) {
    UserStatsType[UserStatsType["USER_STATS_TOTAL_COUNT"] = 2] = "USER_STATS_TOTAL_COUNT";
    UserStatsType[UserStatsType["USER_STATS_VERIFIED_COUNT"] = 1] = "USER_STATS_VERIFIED_COUNT";
})(UserStatsType || (UserStatsType = {}));
var RoleId;
(function (RoleId) {
    RoleId[RoleId["USER_ROLE_ID"] = 2] = "USER_ROLE_ID";
    RoleId[RoleId["PROVIDER_ROLE_ID"] = 1] = "PROVIDER_ROLE_ID";
    RoleId[RoleId["ADMIN_ROLE_ID"] = 3] = "ADMIN_ROLE_ID";
})(RoleId || (RoleId = {}));


/***/ }),

/***/ "2qNV":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/change-password/change-password.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>تغییر گذرواژه</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form\n    class=\"flex-container action-container\"\n    [formGroup]=\"changePassForm\"\n    (ngSubmit)=\"changePassword()\"\n  >\n    <div class=\"action-content\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"oldPassword\"\n              placeholder=\"گذرواژه فعلی\"\n              type=\"password\"\n              name=\"password\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"newPassword\"\n              placeholder=\"گذرواژه جدید\"\n              type=\"password\"\n              name=\"newPassword\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"newPasswordRepeat\"\n              placeholder=\"تکرار\"\n              type=\"password\"\n              name=\"newPasswordRepeat\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <ion-button [disabled]=\"!changePassForm.valid\" type=\"submit\" class=\"primary-button\"\n          >تغییر گذرواژه</ion-button\n        >\n      </div>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "3LUQ":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AlertService = class AlertService {
    constructor(toastController, alertController, modalController, actionSheet) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.actionSheet = actionSheet;
    }
    presentNotEnoughBalance(required, available, depositComponent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                mode: "ios",
                header: "اعتبار کافی نیست",
                message: "اعتبار شما " + available + " تومان و اعتبار مورد نیاز " + required + " تومان است.",
                buttons: [
                    {
                        text: 'افزایش اعتبار',
                        handler: () => {
                            this.presentModal(depositComponent, { amount: required - available }).subscribe();
                        }
                    },
                    {
                        text: 'انصراف',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1000,
                position: "top",
                color: "dark",
                mode: "ios",
            });
            toast.present();
        });
    }
    presentLoadingModal(loadingModal) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loadingModal.create({
            mode: "ios",
            translucent: true,
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((modal) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.present());
        }));
    }
    presentSuccess(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1000,
                cssClass: "success-toast",
                position: "top",
                mode: "ios",
            });
            toast.present();
        });
    }
    presentError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1000,
                cssClass: "error-toast",
                position: "top",
                mode: "ios",
            });
            toast.present();
        });
    }
    presentViewNotify(message, callback, binder) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            callback = callback.bind(binder);
            const toast = yield this.toastController.create({
                message: message,
                cssClass: "notify-toast",
                position: "top",
                duration: 2000,
                translucent: true,
                mode: "ios",
                buttons: [
                    {
                        side: "end",
                        text: "نمایش",
                        cssClass: "notify-toast-button",
                        handler: () => {
                            callback();
                        },
                    },
                ],
            });
            toast.present();
        });
    }
    presentNotif(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1000,
                cssClass: "notif-toast",
                position: "top",
            });
            toast.present();
        });
    }
    presentActionSheet(buttons, addCancelButton = false) {
        if (addCancelButton) {
            this.addCancelButton(buttons);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.actionSheet.create({
            mode: "ios",
            buttons: buttons,
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.onDidDismiss()).subscribe((data) => {
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.present());
        }));
    }
    openSessionDurationsActionSheet(isTextSession, handler, binder, timingType, reserveHours) {
        handler = handler.bind(binder);
        let buttons = [];
        for (let i = 1; i < 5; i++) {
            let duration = i * 15;
            buttons.push({
                text: duration + ' دقیقه',
                role: "destructive",
                handler: () => {
                    if (reserveHours) {
                        handler(duration, isTextSession, timingType, reserveHours);
                    }
                    else {
                        handler(duration, isTextSession, timingType);
                    }
                }
            });
        }
        this.addCancelButton(buttons);
        this.presentActionSheet(buttons).subscribe();
    }
    openSessionTypesActionSheet(callback, binder, reserveHours = null) {
        let buttons = [];
        buttons.push({
            text: 'مشاوره نوشتاری',
            role: "destructive",
            handler: () => {
                this.openSessionDurationsActionSheet(true, callback, binder, reserveHours);
            }
        });
        buttons.push({
            text: 'مشاوره تلفنی',
            role: "destructive",
            handler: () => {
                this.openSessionDurationsActionSheet(false, callback, binder, reserveHours);
            }
        });
        this.addCancelButton(buttons);
        this.presentActionSheet(buttons).subscribe();
    }
    addCancelButton(buttons) {
        buttons.push({
            text: "انصراف",
            role: "cancel",
        });
    }
    presentModal(component, props = null, backdropDissmis = true, callback = null, callbackBindObject = null) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.modalController.create({
            component: component,
            componentProps: props,
            backdropDismiss: backdropDissmis
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(modal => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.onDidDismiss()).subscribe(data => {
                if (data["data"] && callback) {
                    callback.apply(callbackBindObject, [data["data"]]);
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.present());
        }));
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
], AlertService);



/***/ }),

/***/ "4bXV":
/*!**********************************************************!*\
  !*** ./src/app/common/static/terms/terms.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nh4 {\n  font-family: \"myIranSans\";\n  text-align: right;\n  padding: 0.5rem 3rem;\n  color: #4e4e4e;\n  font-weight: bold;\n  font-size: 1rem;\n}\nul {\n  padding-left: 2rem;\n}\np {\n  text-align: right;\n  color: #676767;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc3RhdGljL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUE5Q0E7RUFDSSx5QkNGSTtFREdKLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZ0RKO0FBOUNBO0VBQ0ksa0JBQUE7QUFpREo7QUEvQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWtESiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdGF0aWMvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcblxuXG5oNHtcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzowLjVyZW0gM3JlbTtcbiAgICBjb2xvcjogIzRlNGU0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6MXJlbTtcbn1cbnVse1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbnB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IzY3Njc2NztcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "5k3Q":
/*!*****************************************************************!*\
  !*** ./src/app/common/ask-question/ask-question.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.question-text {\n  border: 1px solid #d7f3f6;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  --border-radius:$radius;\n  font-family: \"myIranSans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYXNrLXF1ZXN0aW9uL2Fzay1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NBO0VBRUkseUJBQUE7RUN1Q0gsbUJEdEMwQjtFQ3VDMUIsMkJEdkMwQjtFQ3dDdkIsd0JEeEN1QjtFQ3lDdkIsdUJBQUE7RUR4Q0EseUJDSkk7QUR1RFIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYXNrLXF1ZXN0aW9uL2Fzay1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcblxuLnF1ZXN0aW9uLXRleHRcbntcbiAgICBib3JkZXI6MXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yLXhsaWdodDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDEwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "5zL6":
/*!*****************************************!*\
  !*** ./src/app/services/env.service.ts ***!
  \*****************************************/
/*! exports provided: EnvService, DaysOfWeek, ServerErrors, Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvService", function() { return EnvService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysOfWeek", function() { return DaysOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrors", function() { return ServerErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_remote_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/remote-config */ "IKOy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jalali-moment */ "BCsW");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jalali_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let EnvService = class EnvService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        //STORAGE_URL = "http://138.201.44.53/storage/";
        this.STORAGE_URL = "http://51.210.61.202/storage/";
        this.API_URL = "http://51.210.61.202/api/";
        ///STORAGE_URL = "http://hami-server/storage/";
        //API_URL = "http://hami-server/api/";
        this.CLIENT_ID = 2;
        //CLIENT_SECRET = "MCcVBipyFsSnH70rH7yiSw1DYUPrKgmVZzFkDPPH";
        this.CLIENT_SECRET = "7kjwxxyo57iNhRtUo373ztWq2AozoWZT0QBn1dcT";
        //CHAT_URL = "138.201.44.53:81/";
        this.CHAT_URL = "51.210.61.202:8080/";
        this.CHAT_APP_NAME = "hami";
        this.CHAT_API_KEY = "AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K";
        this.FAVORITE_ICON = "heart-outline";
        this.NON_FAVORITE_ICON = "heart-outline";
        this.ONLINE_ICON = "ellipse";
        this.PROVIDER_ROLE_ID = 1;
        this.USER_ROLE_ID = 2;
        this.SPLASH_ENABLED = true;
        this.WEB_NOTIFICATIONS_ONLY = false;
        this.MOCK_PAYMENT = false;
        this.ADMIN_ROLE_ID = 3;
        this.ENABLE_TINODE_LOGGING = false;
        this.somethingPendingCount = 0;
        this.pendingStack = [];
        this.remoteStats = null;
        this.somethingPendingUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        //this.setDevelopmentEnvironment(true, false);
        this.REMOTE_CONFIG = new _models_remote_config__WEBPACK_IMPORTED_MODULE_1__["RemoteConfig"]();
        this.REMOTE_CONFIG.provider_pres_topic = "grpOr6izjjiy0d";
    }
    static getUserRoleId() {
        return 2;
    }
    getPublicStorageUrl(fileName) {
        return this.STORAGE_URL + fileName;
    }
    dateStringToJalaliDate(date, format = "jYYYY/jMM/jDD") {
        if (date == null) {
            return null;
        }
        return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date))
            .locale("fa")
            .format(format);
    }
    setDevelopmentEnvironment(useRemoteServer = false, onlyWebNotif = true, mockPayment = true) {
        if (!useRemoteServer) {
            this.API_URL = "http://hami-server/api/";
        }
        this.SPLASH_ENABLED = false;
        this.WEB_NOTIFICATIONS_ONLY = onlyWebNotif;
        this.MOCK_PAYMENT = mockPayment;
    }
    somethingIsPending(what) {
        let pendingItem = this.pendingStack.find((pending) => pending.what == what);
        if (pendingItem) {
            pendingItem.count++;
        }
        else {
            pendingItem = { what: what, count: 1 };
            this.pendingStack.push(pendingItem);
        }
        if (++this.somethingPendingCount == 1) {
            this.somethingPendingUpdated.next(true);
        }
    }
    somethingIsDonePending(what) {
        try {
            let pendingItem = this.pendingStack.find((pending) => pending.what == what);
            this.somethingPendingCount -= pendingItem.count;
            this.pendingStack.splice(this.pendingStack.indexOf(pendingItem), 1);
            if (this.somethingPendingCount == 0) {
                this.somethingPendingUpdated.next(false);
            }
        }
        catch (_a) {
            console.error("error stop pending " + what);
        }
        console.log(JSON.parse(JSON.stringify(this.pendingStack)));
    }
    dateStringToJalaliTime(date) {
        if (date == null) {
            return null;
        }
        return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date))
            .locale("fa")
            .format("HH:mm");
    }
    dateStringToJalaliMonthName(date) {
        if (date == null) {
            return null;
        }
        return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date))
            .locale("fa")
            .format("jMMM");
    }
    dateStringToJalaliDayOfWeekName(date) {
        if (date == null) {
            return null;
        }
        return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date))
            .locale("fa")
            .format("ddd");
    }
    dateStringToJalaliFullDate(date) {
        if (date == null) {
            return null;
        }
        return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date))
            .locale("fa")
            .format("ddd، jD jMMM jYYYY");
    }
    dateStringToJalaliYear(date) {
        if (date == null) {
            return null;
        }
        return parseInt(jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("jYYYY"));
    }
    dateStringToJalaliMonth(date) {
        if (date == null) {
            return null;
        }
        return parseInt(jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("jM"));
    }
    dateStringToJalaliDay(date) {
        if (date == null) {
            return null;
        }
        return parseInt(jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("jD"));
    }
    getTehranDateTime(utc) {
        return new Date(new Date(utc + " UTC").toLocaleString("en-US", {
            timeZone: "Asia/Tehran",
        }));
    }
    generateUTCNowString() {
        return this.datePipe.transform(new Date().toUTCString(), "yyyy-MM-dd HH:mm:ss", "UTC");
    }
    generateUTCString(date, format = "yyyy-MM-dd HH:mm:ss") {
        return this.datePipe.transform(date.toUTCString(), format, "UTC");
    }
    getMonthName(monthNumber) {
        return jalali_moment__WEBPACK_IMPORTED_MODULE_4__("1367/" + monthNumber, "jYYYY/jM")
            .locale("fa")
            .format("jMMM");
    }
    dayOfWeekText(dayOfWeekNumber) {
        switch (dayOfWeekNumber) {
            case 6:
                return "یکشنبه";
            case 0:
                return "دوشنبه";
            case 1:
                return "سه شنبه";
            case 2:
                return "چهارشنبه";
            case 3:
                return "پنجشنبه";
            case 4:
                return "جمعه";
            case 5:
                return "شنبه";
        }
    }
    serverErrorMessage(errorCode) {
        let message = "";
        switch (errorCode) {
            case ServerErrors.PROVIDER_NOT_ONLINE:
                message = "مشاور آنلاین نیست.";
                break;
            case ServerErrors.PROVIDER_SESSIONS_CONFLICT:
                message = "زمان رزرو با جلسات مشاور هم پوشانی دارد.";
                break;
            case ServerErrors.USER_SESSIONS_CONFLICT:
                message = "زمان رزرو با جلسات شما هم پوشانی دارد.";
                break;
            case ServerErrors.USER_NOT_EXISTS:
                message = "شماره موبایل معتبر نیست.";
                break;
            case ServerErrors.VERIFICATION_CODE_NOT_SENT:
                message = "ارسال پیام اعتبارسنجی با مشکل روبرو شد.";
                break;
            case ServerErrors.DUPLICATE_USER:
                message = "کاربر قبلا در سیستم ثبت شده است.";
                break;
            case ServerErrors.INVALID_POST_DATA:
                message = "خطا در داده های ارسالی.";
                break;
            case ServerErrors.VERIFICATION_CODE_INVALID:
                message = "کد اعتبارسنجی نامعتبر است.";
                break;
            case ServerErrors.PAYMENT_GET_AUTHORITY_FAILED:
                message = "دریافت اجازه پرداخت با مشکل روبرو شد.";
                break;
            default:
                message = "عملیات با مشکل روبرو شد.";
        }
        return message;
    }
};
EnvService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
], EnvService);

var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var ServerErrors;
(function (ServerErrors) {
    ServerErrors[ServerErrors["PROVIDER_NOT_ONLINE"] = 101] = "PROVIDER_NOT_ONLINE";
    ServerErrors[ServerErrors["PROVIDER_SESSIONS_CONFLICT"] = 102] = "PROVIDER_SESSIONS_CONFLICT";
    ServerErrors[ServerErrors["USER_SESSIONS_CONFLICT"] = 103] = "USER_SESSIONS_CONFLICT";
    ServerErrors[ServerErrors["USER_NOT_EXISTS"] = 104] = "USER_NOT_EXISTS";
    ServerErrors[ServerErrors["VERIFICATION_CODE_NOT_SENT"] = 105] = "VERIFICATION_CODE_NOT_SENT";
    ServerErrors[ServerErrors["VERIFICATION_CODE_INVALID"] = 106] = "VERIFICATION_CODE_INVALID";
    ServerErrors[ServerErrors["DUPLICATE_USER"] = 107] = "DUPLICATE_USER";
    ServerErrors[ServerErrors["INVALID_POST_DATA"] = 108] = "INVALID_POST_DATA";
    ServerErrors[ServerErrors["PAYMENT_GET_AUTHORITY_FAILED"] = 109] = "PAYMENT_GET_AUTHORITY_FAILED";
})(ServerErrors || (ServerErrors = {}));
class Icons {
}
Icons.iconNames = [
    "add-circle-outline",
    "add-outline",
    "airplane-outline",
    "alarm-outline",
    "albums-outline",
    "alert-circle-outline",
    "alert-outline",
    "american-football-outline",
    "analytics-outline",
    "aperture-outline",
    "apps-outline",
    "archive-outline",
    "arrow-back-circle-outline",
    "arrow-back-outline",
    "arrow-down-circle-outline",
    "arrow-down-outline",
    "arrow-forward-circle-outline",
    "arrow-forward-outline",
    "arrow-redo-circle-outline",
    "arrow-redo-outline",
    "arrow-undo-circle-outline",
    "arrow-undo-outline",
    "arrow-up-circle-outline",
    "arrow-up-outline",
    "at-circle-outline",
    "at-outline",
    "attach-outline",
    "backspace-outline",
    "bandage-outline",
    "bar-chart-outline",
    "barbell-outline",
    "barcode-outline",
    "baseball-outline",
    "basket-outline",
    "basketball-outline",
    "battery-charging-outline",
    "battery-dead-outline",
    "battery-full-outline",
    "battery-half-outline",
    "beaker-outline",
    "bed-outline",
    "beer-outline",
    "bicycle-outline",
    "bluetooth-outline",
    "boat-outline",
    "body-outline",
    "bonfire-outline",
    "book-outline",
    "bookmark-outline",
    "bookmarks-outline",
    "briefcase-outline",
    "browsers-outline",
    "brush-outline",
    "bug-outline",
    "build-outline",
    "bulb-outline",
    "bus-outline",
    "business-outline",
    "cafe-outline",
    "calculator-outline",
    "calendar-outline",
    "call-outline",
    "camera-outline",
    "camera-reverse-outline",
    "car-outline",
    "car-sport-outline",
    "card-outline",
    "caret-back-circle-outline",
    "caret-back-outline",
    "caret-down-circle-outline",
    "caret-down-outline",
    "caret-forward-circle-outline",
    "caret-forward-outline",
    "caret-up-circle-outline",
    "caret-up-outline",
    "cart-outline",
    "cash-outline",
    "cellular-outline",
    "chatbox-ellipses-outline",
    "chatbox-outline",
    "chatbubble-ellipses-outline",
    "chatbubble-outline",
    "chatbubbles-outline",
    "checkbox-outline",
    "checkmark-circle-outline",
    "checkmark-done-circle-outline",
    "checkmark-done-outline",
    "checkmark-outline",
    "chevron-back-circle-outline",
    "chevron-back-outline",
    "chevron-down-circle-outline",
    "chevron-down-outline",
    "chevron-forward-circle-outline",
    "chevron-forward-outline",
    "chevron-up-circle-outline",
    "chevron-up-outline",
    "clipboard-outline",
    "close-circle-outline",
    "close-outline",
    "cloud-circle-outline",
    "cloud-done-outline",
    "cloud-download-outline",
    "cloud-offline-outline",
    "cloud-outline",
    "cloud-upload-outline",
    "cloudy-night-outline",
    "cloudy-outline",
    "code-download-outline",
    "code-outline",
    "code-slash-outline",
    "code-working-outline",
    "cog-outline",
    "color-fill-outline",
    "color-filter-outline",
    "color-palette-outline",
    "color-wand-outline",
    "compass-outline",
    "construct-outline",
    "contract-outline",
    "contrast-outline",
    "copy-outline",
    "create-outline",
    "crop-outline",
    "cube-outline",
    "cut-outline",
    "desktop-outline",
    "disc-outline",
    "document-attach-outline",
    "document-outline",
    "document-text-outline",
    "documents-outline",
    "download-outline",
    "duplicate-outline",
    "ear-outline",
    "earth-outline",
    "easel-outline",
    "egg-outline",
    "ellipse-outline",
    "ellipsis-horizontal-circle-outline",
    "ellipsis-horizontal-outline",
    "ellipsis-vertical-circle-outline",
    "ellipsis-vertical-outline",
    "enter-outline",
    "exit-outline",
    "expand-outline",
    "eye-off-outline",
    "eye-outline",
    "eyedrop-outline",
    "fast-food-outline",
    "female-outline",
    "file-tray-full-outline",
    "file-tray-outline",
    "file-tray-stacked-outline",
    "film-outline",
    "filter-outline",
    "finger-print-outline",
    "fitness-outline",
    "flag-outline",
    "flame-outline",
    "flash-off-outline",
    "flash-outline",
    "flashlight-outline",
    "flask-outline",
    "flower-outline",
    "folder-open-outline",
    "folder-outline",
    "football-outline",
    "funnel-outline",
    "game-controller-outline",
    "gift-outline",
    "git-branch-outline",
    "git-commit-outline",
    "git-compare-outline",
    "git-merge-outline",
    "git-network-outline",
    "git-pull-request-outline",
    "glasses-outline",
    "globe-outline",
    "golf-outline",
    "grid-outline",
    "hammer-outline",
    "hand-left-outline",
    "hand-right-outline",
    "happy-outline",
    "hardware-chip-outline",
    "headset-outline",
    "heart-circle-outline",
    "heart-dislike-circle-outline",
    "heart-dislike-outline",
    "heart-half-outline",
    "heart-outline",
    "help-buoy-outline",
    "help-circle-outline",
    "help-outline",
    "home-outline",
    "hourglass-outline",
    "ice-cream-outline",
    "image-outline",
    "images-outline",
    "infinite-outline",
    "information-circle-outline",
    "information-outline",
    "journal-outline",
    "key-outline",
    "keypad-outline",
    "language-outline",
    "laptop-outline",
    "layers-outline",
    "leaf-outline",
    "library-outline",
    "link-outline",
    "list-circle-outline",
    "list-outline",
    "locate-outline",
    "location-outline",
    "lock-closed-outline",
    "lock-open-outline",
    "log-in-outline",
    "log-out-outline",
    "magnet-outline",
    "mail-open-outline",
    "mail-outline",
    "mail-unread-outline",
    "male-female-outline",
    "male-outline",
    "man-outline",
    "map-outline",
    "medal-outline",
    "medical-outline",
    "medkit-outline",
    "megaphone-outline",
    "menu-outline",
    "mic-circle-outline",
    "mic-off-circle-outline",
    "mic-off-outline",
    "mic-outline",
    "moon-outline",
    "move-outline",
    "musical-note-outline",
    "musical-notes-outline",
    "navigate-circle-outline",
    "navigate-outline",
    "newspaper-outline",
    "notifications-circle-outline",
    "notifications-off-circle-outline",
    "notifications-off-outline",
    "notifications-outline",
    "nuclear-outline",
    "nutrition-outline",
    "open-outline",
    "options-outline",
    "paper-plane-outline",
    "partly-sunny-outline",
    "pause-circle-outline",
    "pause-outline",
    "paw-outline",
    "pencil-outline",
    "people-circle-outline",
    "people-outline",
    "person-add-outline",
    "person-circle-outline",
    "person-outline",
    "person-remove-outline",
    "phone-landscape-outline",
    "phone-portrait-outline",
    "pie-chart-outline",
    "pin-outline",
    "pint-outline",
    "pizza-outline",
    "planet-outline",
    "play-back-circle-outline",
    "play-back-outline",
    "play-circle-outline",
    "play-forward-circle-outline",
    "play-forward-outline",
    "play-outline",
    "play-skip-back-circle-outline",
    "play-skip-back-outline",
    "play-skip-forward-circle-outline",
    "play-skip-forward-outline",
    "podium-outline",
    "power-outline",
    "pricetag-outline",
    "pricetags-outline",
    "print-outline",
    "pulse-outline",
    "push-outline",
    "qr-code-outline",
    "radio-button-off-outline",
    "radio-button-on-outline",
    "radio-outline",
    "rainy-outline",
    "reader-outline",
    "receipt-outline",
    "recording-outline",
    "refresh-circle-outline",
    "refresh-outline",
    "reload-circle-outline",
    "reload-outline",
    "remove-circle-outline",
    "remove-outline",
    "reorder-four-outline",
    "reorder-three-outline",
    "reorder-two-outline",
    "repeat-outline",
    "resize-outline",
    "restaurant-outline",
    "return-down-back-outline",
    "return-down-forward-outline",
    "return-up-back-outline",
    "return-up-forward-outline",
    "ribbon-outline",
    "rocket-outline",
    "rose-outline",
    "sad-outline",
    "save-outline",
    "scan-circle-outline",
    "scan-outline",
    "school-outline",
    "search-circle-outline",
    "search-outline",
    "send-outline",
    "server-outline",
    "settings-outline",
    "shapes-outline",
    "share-outline",
    "share-social-outline",
    "shield-checkmark-outline",
    "shield-outline",
    "shirt-outline",
    "shuffle-outline",
    "skull-outline",
    "snow-outline",
    "speedometer-outline",
    "square-outline",
    "star-half-outline",
    "star-outline",
    "stats-chart-outline",
    "stop-circle-outline",
    "stop-outline",
    "stopwatch-outline",
    "subway-outline",
    "sunny-outline",
    "swap-horizontal-outline",
    "swap-vertical-outline",
    "sync-circle-outline",
    "sync-outline",
    "tablet-landscape-outline",
    "tablet-portrait-outline",
    "tennisball-outline",
    "terminal-outline",
    "text-outline",
    "thermometer-outline",
    "thumbs-down-outline",
    "thumbs-up-outline",
    "thunderstorm-outline",
    "time-outline",
    "timer-outline",
    "today-outline",
    "toggle-outline",
    "trail-sign-outline",
    "train-outline",
    "transgender-outline",
    "trash-bin-outline",
    "trash-outline",
    "trending-down-outline",
    "trending-up-outline",
    "triangle-outline",
    "trophy-outline",
    "tv-outline",
    "umbrella-outline",
    "videocam-outline",
    "volume-high-outline",
    "volume-low-outline",
    "volume-medium-outline",
    "volume-mute-outline",
    "volume-off-outline",
    "walk-outline",
    "wallet-outline",
    "warning-outline",
    "watch-outline",
    "water-outline",
    "wifi-outline",
    "wine-outline",
    "woman-outline",
];


/***/ }),

/***/ "6FpD":
/*!******************************************************!*\
  !*** ./src/app/services/shared-resources.service.ts ***!
  \******************************************************/
/*! exports provided: SharedResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedResourcesService", function() { return SharedResourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-helper.service */ "tLlE");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../architecture/shared-resource-async-request-bundle */ "JTjR");






let SharedResourcesService = class SharedResourcesService {
    constructor(env, httpHelper, storage) {
        this.env = env;
        this.httpHelper = httpHelper;
        this.storage = storage;
        _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"].HttpHelper = this.httpHelper;
        _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"].Env = this.env;
        _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"].Storage = this.storage;
    }
};
SharedResourcesService.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] },
    { type: _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
SharedResourcesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"],
        _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], SharedResourcesService);



/***/ }),

/***/ "6cTQ":
/*!**************************************************************!*\
  !*** ./src/app/architecture/auto-arrayed-shared-resource.ts ***!
  \**************************************************************/
/*! exports provided: AutoArrayedGetResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoArrayedGetResource", function() { return AutoArrayedGetResource; });
/* harmony import */ var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/architecture/shared-resource-async-request-bundle */ "JTjR");
/* harmony import */ var _arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayed-shared-resource */ "DEPO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class AutoArrayedGetResource extends _arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_1__["ArrayedSharedResource"] {
    constructor(url, authenticated = true) {
        super(null, [], null);
        this.url = url;
        this.authenticated = authenticated;
        this.producer = this.producerFunction;
        this.producer = this.producer.bind(this);
    }
    producerFunction(argument) {
        let url = this.url;
        if (argument) {
            url = url + "/" + argument;
        }
        return src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceAsyncRequestBundle"].HttpHelper.get(url, this.authenticated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            this.setResource(result);
            return result;
        }));
    }
}


/***/ }),

/***/ "7Tm6":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/remote-stats-container/remote-stats-container.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"stats-top-container\">\n  <div class=\"stats-type-container row no-gutters justify-content-center\">\n    <app-remote-stats-box\n      *ngFor=\"let stat of data\"\n      [url]=\"stat.url\"\n      [text]=\"stat.text\"\n      [number]=\"stat.number\"\n    >\n    </app-remote-stats-box>\n  </div>\n</div>\n");

/***/ }),

/***/ "7VJn":
/*!*****************************************************************************************!*\
  !*** ./src/app/common/session-info-icon-summary/session-info-icon-summary.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SessionInfoIconSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionInfoIconSummaryComponent", function() { return SessionInfoIconSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_info_icon_summary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-info-icon-summary.component.html */ "tJN7");
/* harmony import */ var _session_info_icon_summary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-info-icon-summary.component.scss */ "ys1Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SessionInfoIconSummaryComponent = class SessionInfoIconSummaryComponent {
    constructor() { }
    ngOnInit() { }
};
SessionInfoIconSummaryComponent.ctorParameters = () => [];
SessionInfoIconSummaryComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    time: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    stateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SessionInfoIconSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-info-icon-summary',
        template: _raw_loader_session_info_icon_summary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_info_icon_summary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SessionInfoIconSummaryComponent);



/***/ }),

/***/ "7jyQ":
/*!*****************************************************************************!*\
  !*** ./node_modules/jalali-moment/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "2/yN",
	"./af.js": "2/yN",
	"./ar": "2fY4",
	"./ar-dz": "hpot",
	"./ar-dz.js": "hpot",
	"./ar-kw": "FxCd",
	"./ar-kw.js": "FxCd",
	"./ar-ly": "UWQ+",
	"./ar-ly.js": "UWQ+",
	"./ar-ma": "d81T",
	"./ar-ma.js": "d81T",
	"./ar-sa": "hlNI",
	"./ar-sa.js": "hlNI",
	"./ar-tn": "1gfi",
	"./ar-tn.js": "1gfi",
	"./ar.js": "2fY4",
	"./az": "1IL0",
	"./az.js": "1IL0",
	"./be": "qnCN",
	"./be.js": "qnCN",
	"./bg": "Ov6M",
	"./bg.js": "Ov6M",
	"./bm": "+Obh",
	"./bm.js": "+Obh",
	"./bn": "LULx",
	"./bn.js": "LULx",
	"./bo": "p9+f",
	"./bo.js": "p9+f",
	"./br": "eypF",
	"./br.js": "eypF",
	"./bs": "ShUO",
	"./bs.js": "ShUO",
	"./ca": "FYvP",
	"./ca.js": "FYvP",
	"./cs": "jkyO",
	"./cs.js": "jkyO",
	"./cv": "2R46",
	"./cv.js": "2R46",
	"./cy": "jWkq",
	"./cy.js": "jWkq",
	"./da": "wynC",
	"./da.js": "wynC",
	"./de": "9RZR",
	"./de-at": "4EKq",
	"./de-at.js": "4EKq",
	"./de-ch": "G2yM",
	"./de-ch.js": "G2yM",
	"./de.js": "9RZR",
	"./dv": "eaO8",
	"./dv.js": "eaO8",
	"./el": "YrNT",
	"./el.js": "YrNT",
	"./en-au": "slHb",
	"./en-au.js": "slHb",
	"./en-ca": "Nts3",
	"./en-ca.js": "Nts3",
	"./en-gb": "mjMm",
	"./en-gb.js": "mjMm",
	"./en-ie": "dpul",
	"./en-ie.js": "dpul",
	"./en-il": "FMBq",
	"./en-il.js": "FMBq",
	"./en-in": "bl2D",
	"./en-in.js": "bl2D",
	"./en-nz": "YVOy",
	"./en-nz.js": "YVOy",
	"./en-sg": "swtn",
	"./en-sg.js": "swtn",
	"./eo": "uFaB",
	"./eo.js": "uFaB",
	"./es": "11GN",
	"./es-do": "SVl/",
	"./es-do.js": "SVl/",
	"./es-us": "Ye35",
	"./es-us.js": "Ye35",
	"./es.js": "11GN",
	"./et": "DVdz",
	"./et.js": "DVdz",
	"./eu": "vprZ",
	"./eu.js": "vprZ",
	"./fa": "0nVr",
	"./fa.js": "0nVr",
	"./fi": "X3iN",
	"./fi.js": "X3iN",
	"./fil": "Y7av",
	"./fil.js": "Y7av",
	"./fo": "juws",
	"./fo.js": "juws",
	"./fr": "hk0p",
	"./fr-ca": "wm2J",
	"./fr-ca.js": "wm2J",
	"./fr-ch": "NKgo",
	"./fr-ch.js": "NKgo",
	"./fr.js": "hk0p",
	"./fy": "KcN/",
	"./fy.js": "KcN/",
	"./ga": "2N9e",
	"./ga.js": "2N9e",
	"./gd": "CGzN",
	"./gd.js": "CGzN",
	"./gl": "unPK",
	"./gl.js": "unPK",
	"./gom-deva": "1MmZ",
	"./gom-deva.js": "1MmZ",
	"./gom-latn": "ErMy",
	"./gom-latn.js": "ErMy",
	"./gu": "60e4",
	"./gu.js": "60e4",
	"./he": "EvPf",
	"./he.js": "EvPf",
	"./hi": "Tg0B",
	"./hi.js": "Tg0B",
	"./hr": "cBSw",
	"./hr.js": "cBSw",
	"./hu": "FCA5",
	"./hu.js": "FCA5",
	"./hy-am": "uigC",
	"./hy-am.js": "uigC",
	"./id": "QQUQ",
	"./id.js": "QQUQ",
	"./is": "crRU",
	"./is.js": "crRU",
	"./it": "zBzr",
	"./it-ch": "teQT",
	"./it-ch.js": "teQT",
	"./it.js": "zBzr",
	"./ja": "kYIn",
	"./ja.js": "kYIn",
	"./jv": "JYad",
	"./jv.js": "JYad",
	"./ka": "PB6v",
	"./ka.js": "PB6v",
	"./kk": "OUrd",
	"./kk.js": "OUrd",
	"./km": "/JfV",
	"./km.js": "/JfV",
	"./kn": "HY9m",
	"./kn.js": "HY9m",
	"./ko": "ltmD",
	"./ko.js": "ltmD",
	"./ku": "N7b1",
	"./ku.js": "N7b1",
	"./ky": "1mn8",
	"./ky.js": "1mn8",
	"./lb": "Mpmn",
	"./lb.js": "Mpmn",
	"./lo": "GN8d",
	"./lo.js": "GN8d",
	"./lt": "9+C/",
	"./lt.js": "9+C/",
	"./lv": "plLn",
	"./lv.js": "plLn",
	"./me": "Q4im",
	"./me.js": "Q4im",
	"./mi": "vDz9",
	"./mi.js": "vDz9",
	"./mk": "LSGO",
	"./mk.js": "LSGO",
	"./ml": "CBy8",
	"./ml.js": "CBy8",
	"./mn": "zWnF",
	"./mn.js": "zWnF",
	"./mr": "MxZ2",
	"./mr.js": "MxZ2",
	"./ms": "pjKT",
	"./ms-my": "LUdl",
	"./ms-my.js": "LUdl",
	"./ms.js": "pjKT",
	"./mt": "lW3Z",
	"./mt.js": "lW3Z",
	"./my": "9wEo",
	"./my.js": "9wEo",
	"./nb": "iJfK",
	"./nb.js": "iJfK",
	"./ne": "UPht",
	"./ne.js": "UPht",
	"./nl": "buk/",
	"./nl-be": "mjsj",
	"./nl-be.js": "mjsj",
	"./nl.js": "buk/",
	"./nn": "L1ak",
	"./nn.js": "L1ak",
	"./oc-lnc": "u6EH",
	"./oc-lnc.js": "u6EH",
	"./pa-in": "cc5u",
	"./pa-in.js": "cc5u",
	"./pl": "qCVo",
	"./pl.js": "qCVo",
	"./pt": "mn/O",
	"./pt-br": "C5on",
	"./pt-br.js": "C5on",
	"./pt.js": "mn/O",
	"./ro": "V19m",
	"./ro.js": "V19m",
	"./ru": "yTtZ",
	"./ru.js": "yTtZ",
	"./sd": "acM4",
	"./sd.js": "acM4",
	"./se": "lSMZ",
	"./se.js": "lSMZ",
	"./si": "O+he",
	"./si.js": "O+he",
	"./sk": "8cr0",
	"./sk.js": "8cr0",
	"./sl": "5obH",
	"./sl.js": "5obH",
	"./sq": "xXjV",
	"./sq.js": "xXjV",
	"./sr": "S1eU",
	"./sr-cyrl": "YYnf",
	"./sr-cyrl.js": "YYnf",
	"./sr.js": "S1eU",
	"./ss": "GfYJ",
	"./ss.js": "GfYJ",
	"./sv": "Fo9I",
	"./sv.js": "Fo9I",
	"./sw": "EGKT",
	"./sw.js": "EGKT",
	"./ta": "uLqe",
	"./ta.js": "uLqe",
	"./te": "xwL8",
	"./te.js": "xwL8",
	"./tet": "d9+z",
	"./tet.js": "d9+z",
	"./tg": "Z0eb",
	"./tg.js": "Z0eb",
	"./th": "+gKs",
	"./th.js": "+gKs",
	"./tk": "qGf2",
	"./tk.js": "qGf2",
	"./tl-ph": "XDfA",
	"./tl-ph.js": "XDfA",
	"./tlh": "7L2X",
	"./tlh.js": "7L2X",
	"./tr": "Sd9I",
	"./tr.js": "Sd9I",
	"./tzl": "h2pr",
	"./tzl.js": "h2pr",
	"./tzm": "+P0v",
	"./tzm-latn": "XG2G",
	"./tzm-latn.js": "XG2G",
	"./tzm.js": "+P0v",
	"./ug-cn": "kZRC",
	"./ug-cn.js": "kZRC",
	"./uk": "ObCk",
	"./uk.js": "ObCk",
	"./ur": "b7Vg",
	"./ur.js": "b7Vg",
	"./uz": "deEg",
	"./uz-latn": "U6gn",
	"./uz-latn.js": "U6gn",
	"./uz.js": "deEg",
	"./vi": "ryXU",
	"./vi.js": "ryXU",
	"./x-pseudo": "ZOIo",
	"./x-pseudo.js": "ZOIo",
	"./yo": "mOPG",
	"./yo.js": "mOPG",
	"./zh-cn": "phPW",
	"./zh-cn.js": "phPW",
	"./zh-hk": "NqX4",
	"./zh-hk.js": "NqX4",
	"./zh-mo": "tw3I",
	"./zh-mo.js": "tw3I",
	"./zh-tw": "HJah",
	"./zh-tw.js": "HJah"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "7jyQ";

/***/ }),

/***/ "7sa6":
/*!*****************************************************************!*\
  !*** ./src/app/common/remote-stats/remote-stats.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.stats-top-container {\n  display: block;\n  padding: 0rem 0.5rem;\n}\n.stats-top-container .stats-type-container {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzL3JlbW90ZS1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBa0RGO0FBakRFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBbURKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3JlbW90ZS1zdGF0cy9yZW1vdGUtc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb24uc2Nzc1wiO1xuLnN0YXRzLXRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHJlbSAwLjVyZW07XG4gIC5zdGF0cy10eXBlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIFxuICAgIH1cbiAgXG59XG4iXX0= */");

/***/ }),

/***/ "84Bo":
/*!**************************************************************!*\
  !*** ./src/app/common/static/contact/contact.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nh4 {\n  font-family: \"myIranSans\";\n  text-align: right;\n  padding: 0.5rem 3rem;\n  color: #4e4e4e;\n  font-weight: bold;\n  font-size: 1rem;\n}\nul {\n  padding-left: 2rem;\n}\np {\n  text-align: right;\n  color: #676767;\n  font-size: 0.8rem;\n  padding: 0.1rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc3RhdGljL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBOUNBO0VBQ0kseUJDRkk7RURHSixpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWdESjtBQTlDQTtFQUNJLGtCQUFBO0FBaURKO0FBL0NBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWtESiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdGF0aWMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIkBpbXBvcnQgJ3NyYy90aGVtZS9jb21tb24uc2Nzcyc7XG5cblxuaDR7XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6MC41cmVtIDNyZW07XG4gICAgY29sb3I6ICM0ZTRlNGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjFyZW07XG59XG51bHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5we1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzowLjFyZW0gMnJlbTtcbn1cbiIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */");

/***/ }),

/***/ "9YIV":
/*!*************************************************************!*\
  !*** ./src/app/common/date-picker/date-picker.component.ts ***!
  \*************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_date_picker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./date-picker.component.html */ "qnXZ");
/* harmony import */ var _date_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-picker.component.scss */ "Xzsu");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jalali-moment */ "BCsW");
/* harmony import */ var jalali_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jalali_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










let DatePickerComponent = class DatePickerComponent {
    constructor(modalController, picker, env) {
        this.modalController = modalController;
        this.picker = picker;
        this.env = env;
        this.yearValue = 1;
        this.month = 1;
        this.day = 1;
        this.pickerType = PickerType.YEAR;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        let tempDateString = this.env.generateUTCString(this.date, "yyyy/MM/dd");
        this.setYear(this.env.dateStringToJalaliYear(tempDateString));
        this.month = this.env.dateStringToJalaliMonth(tempDateString);
        this.day = this.env.dateStringToJalaliDay(tempDateString);
    }
    dismiss() {
        this.modalController.dismiss();
    }
    confirm() {
        this.modalController.dismiss({
            date: new Date(jalali_moment__WEBPACK_IMPORTED_MODULE_6__(this.getYear() + "/" + this.month + "/" + this.day, "jYYYY/jM/jD").toLocaleString()),
        });
    }
    select(pickerType) {
        this.pickerType = pickerType;
        this.openPicker().subscribe();
    }
    openPicker() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.picker.create({
            columns: this.getColumns(),
            buttons: [
                {
                    text: "انصراف",
                    role: "cancel",
                },
                {
                    text: "تأیید",
                    handler: (value) => {
                        this.setValue(value["col-1"]["value"]);
                    },
                },
            ],
            mode: "ios",
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((picker) => {
            picker.addEventListener("ionPickerColChange", (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
            picker.columns[0].selectedIndex = this.getSelectedIndex();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(picker.present());
        }));
    }
    getSelectedIndex() {
        switch (this.pickerType) {
            case PickerType.YEAR:
                return this.yearValue - 1;
            case PickerType.MONTH:
                return this.month - 1;
            case PickerType.DAY:
                return this.day - 1;
        }
    }
    setValue(val) {
        switch (this.pickerType) {
            case PickerType.YEAR:
                this.yearValue = val;
                this.select(PickerType.MONTH);
                break;
            case PickerType.MONTH:
                this.month = val;
                this.select(PickerType.DAY);
                break;
            case PickerType.DAY:
                this.day = val;
                break;
        }
    }
    getMonthName() {
        return this.env.getMonthName(this.month);
    }
    setYear(year) {
        this.yearValue = year - 1398;
    }
    getYear(value = this.yearValue) {
        return value + 1398;
    }
    getYears() {
        let options = [];
        for (let i = 1; i < 3; i++) {
            options.push({
                text: this.getYear(i),
                value: i,
            });
        }
        return options;
    }
    getMonths() {
        let options = [];
        let selected = false;
        for (let i = 1; i < 13; i++) {
            options.push({
                text: this.env.getMonthName(i),
                value: i,
            });
        }
        return options;
    }
    getDayes() {
        let options = [];
        let dateString = this.getYear() + "/" + this.month;
        for (let i = 1; i <= jalali_moment__WEBPACK_IMPORTED_MODULE_6__(dateString, "jYYYY/jM").jDaysInMonth(); i++) {
            options.push({
                text: i,
                value: i,
            });
        }
        return options;
    }
    getColumns() {
        let columns = [];
        let options = [];
        switch (this.pickerType) {
            case PickerType.YEAR:
                options = this.getYears();
                break;
            case PickerType.MONTH:
                options = this.getMonths();
                break;
            case PickerType.DAY:
                options = this.getDayes();
                break;
        }
        columns.push({
            name: "col-1",
            options: options,
        });
        return columns;
    }
};
DatePickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
];
DatePickerComponent.propDecorators = {
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
DatePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-date-picker",
        template: _raw_loader_date_picker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_date_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
], DatePickerComponent);

var PickerType;
(function (PickerType) {
    PickerType[PickerType["YEAR"] = 0] = "YEAR";
    PickerType[PickerType["MONTH"] = 1] = "MONTH";
    PickerType[PickerType["DAY"] = 2] = "DAY";
})(PickerType || (PickerType = {}));


/***/ }),

/***/ "9cBY":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/basic-user-profile/basic-user-profile.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"row primary-background pt-5 justify-content-center\">\n  <div class=\"col-auto\">\n    <app-user-avatar\n      class=\"large-sized\"\n      [user]=\"this.user\"\n    ></app-user-avatar>\n  </div>\n</div>\n<div  class=\"row primary-background pt-2 pb-4 mb-3\">\n  <div class=\"col-12 justify-content-center d-flex align-items-center\">\n    <ion-icon\n      class=\"online-status\"\n      [ngClass]=\"(isOnline())?'online':'offline'\"\n      [name]=\"this.env.ONLINE_ICON\"\n    ></ion-icon>\n    <div class=\"name\">\n      <span class=\"normal-text number-text\"> {{getName(this.user)}}</span>\n      \n    </div>\n    \n  </div>\n  <div *ngIf=\"provider\" class=\"col-12 justify-content-center d-flex align-items-center\">\n    <span class=\"small-text ml-1 sessions-count-label\">تعداد جلسات: </span>\n    <span class=\"normal-text number-text sessions-count\">{{provider.ended_sessions_count}}</span>\n    \n  </div>\n  <div *ngIf=\"provider\" class=\"col-12 justify-content-center d-flex align-items-center\">\n    <ion-icon name=\"star\" class=\"small-text ml-1 mean-score-label\"> </ion-icon>\n    <span class=\"normal-text number-text mean-score ml-1\">{{provider.mean_score}}</span>\n    <span class=\"xsmall-text ml-1\"> از</span>\n    <span class=\"normal-text number-text\">5</span>\n  </div>\n \n  \n</div>");

/***/ }),

/***/ "9y04":
/*!***************************************************************!*\
  !*** ./src/app/common/select-icon/select-icon.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-button {\n  --background: white;\n  --background-hover: white;\n  --background-focused: white;\n  --box-shadow: none;\n  --ripple-color: white;\n  --color: gray;\n  font-size: 0rem;\n  height: auto;\n}\n.icon-button .icon {\n  font-size: 1.8rem;\n  --ionicon-stroke-width: 10px;\n  color: black;\n}\n.icon-button:hover {\n  --background: white;\n}\n.icon-button:hover .icon {\n  --ionicon-stroke-width: 18px;\n}\n.icon-button:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NlbGVjdC1pY29uL3NlbGVjdC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBZUEsWUFBQTtBQWRKO0FBQUk7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBRE07RUFDRSw0QkFBQTtBQUdSO0FBQUk7RUFDRSxhQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2VsZWN0LWljb24vc2VsZWN0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogd2hpdGU7XG4gICAgLy8tLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1yaXBwbGUtY29sb3I6IHdoaXRlO1xuICAgIC0tY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAwcmVtO1xuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogMTBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLmljb24ge1xuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIGhlaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BbMm":
/*!**************************************!*\
  !*** ./src/app/models/voice-call.ts ***!
  \**************************************/
/*! exports provided: VoiceCall, VoiceCallDirection, VoiceCallState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceCall", function() { return VoiceCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceCallDirection", function() { return VoiceCallDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceCallState", function() { return VoiceCallState; });
class VoiceCall {
}
var VoiceCallDirection;
(function (VoiceCallDirection) {
    VoiceCallDirection[VoiceCallDirection["OUTGOING"] = 1] = "OUTGOING";
    VoiceCallDirection[VoiceCallDirection["INCOMING"] = 2] = "INCOMING";
})(VoiceCallDirection || (VoiceCallDirection = {}));
var VoiceCallState;
(function (VoiceCallState) {
    VoiceCallState[VoiceCallState["NEW"] = 1] = "NEW";
    VoiceCallState[VoiceCallState["TRYING"] = 2] = "TRYING";
    VoiceCallState[VoiceCallState["RINGING"] = 3] = "RINGING";
    VoiceCallState[VoiceCallState["ACCEPTED"] = 4] = "ACCEPTED";
    VoiceCallState[VoiceCallState["CONVERSATION"] = 5] = "CONVERSATION";
    VoiceCallState[VoiceCallState["PAUSED"] = 6] = "PAUSED";
    VoiceCallState[VoiceCallState["FINISHED"] = 7] = "FINISHED";
    VoiceCallState[VoiceCallState["FLUSHED"] = 8] = "FLUSHED";
})(VoiceCallState || (VoiceCallState = {}));


/***/ }),

/***/ "C+bK":
/*!*******************************************************!*\
  !*** ./src/app/common/deposit/deposit.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9kZXBvc2l0L2RlcG9zaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "CGJ0":
/*!****************************************!*\
  !*** ./src/app/models/remote-stats.ts ***!
  \****************************************/
/*! exports provided: RemoteStats, CategoryStats, RemoteStatsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStats", function() { return RemoteStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStats", function() { return CategoryStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStatsType", function() { return RemoteStatsType; });
class RemoteStats {
}
class CategoryStats {
}
var RemoteStatsType;
(function (RemoteStatsType) {
    RemoteStatsType[RemoteStatsType["TOTAL_PROVIDERS_STATS"] = 1] = "TOTAL_PROVIDERS_STATS";
    RemoteStatsType[RemoteStatsType["CATEGORY_PROVIDERS_STATS"] = 2] = "CATEGORY_PROVIDERS_STATS";
    RemoteStatsType[RemoteStatsType["USERS_STATS"] = 3] = "USERS_STATS";
})(RemoteStatsType || (RemoteStatsType = {}));


/***/ }),

/***/ "DEPO":
/*!*********************************************************!*\
  !*** ./src/app/architecture/arrayed-shared-resource.ts ***!
  \*********************************************************/
/*! exports provided: ArrayedSharedResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayedSharedResource", function() { return ArrayedSharedResource; });
/* harmony import */ var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/architecture/shared-resource-async-request-bundle */ "JTjR");

class ArrayedSharedResource extends src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceAsyncRequestBundle"] {
    constructor() {
        super(...arguments);
        this.filterFunction = null;
    }
    filteredResource() {
        if (this.filterFunction != null && this.resource())
            return this.resource().filter(this.filterFunction);
        return this.resource();
    }
    setFilter(filterFn) {
        this.filterFunction = filterFn;
    }
    needsNoItemAlert() {
        return (this.getResourceStatus() == src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceUpdateStatus"].UPDATED &&
            this.filteredResource().length < 1);
    }
}


/***/ }),

/***/ "DUqy":
/*!*************************************************************************************!*\
  !*** ./src/app/common/random-provider-avatars/random-provider-avatars.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RandomProviderAvatarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomProviderAvatarsComponent", function() { return RandomProviderAvatarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_random_provider_avatars_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./random-provider-avatars.component.html */ "vpln");
/* harmony import */ var _random_provider_avatars_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random-provider-avatars.component.scss */ "SdEw");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/provider.service */ "gs/X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let RandomProviderAvatarsComponent = class RandomProviderAvatarsComponent {
    constructor(providerService, env) {
        this.providerService = providerService;
        this.env = env;
        this.categoryId = null;
        this.avatars = [];
    }
    ngOnInit() {
        this.providerService.randomAvatarSrcListShared.request();
    }
    getAvatarZClass(index) {
        switch (index) {
            case 0:
            case 6:
                return "z-4";
            case 1:
            case 5:
                return "z-3";
            case 2:
            case 4:
                return "z-2";
            case 3:
                return "z-1";
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
};
RandomProviderAvatarsComponent.ctorParameters = () => [
    { type: src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
];
RandomProviderAvatarsComponent.propDecorators = {
    categoryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
RandomProviderAvatarsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-random-provider-avatars',
        template: _raw_loader_random_provider_avatars_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_random_provider_avatars_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
], RandomProviderAvatarsComponent);



/***/ }),

/***/ "DYp9":
/*!*************************************************************************!*\
  !*** ./src/app/common/remote-stats-box/remote-stats-box.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.stats-box {\n  box-shadow: 0px 0px 3px #e4e4e4;\n  -webkit-box-shadow: 0px 0px 3px #e4e4e4;\n  -moz-box-shadow: 0px 0px 3px #e4e4e4;\n  border-radius: 12px;\n  -webkit-border-radius: 12px;\n  -moz-border-radius: 12px;\n  --border-radius:$radius;\n  --border-style: none;\n  margin: 1rem 0.4rem 0.2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1rem;\n  height: 100px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.stats-box:active, .stats-box.selected {\n  border: 1px solid #71bcc1;\n}\n.stats-box .stats-text {\n  font-size: 0.7rem;\n  color: #737373;\n  text-align: center;\n}\n.stats-box .stats-number {\n  font-weight: bold;\n  color: #71bcc1;\n  font-size: 1.6rem;\n  font-family: \"myIranSansFaNum\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzLWJveC9yZW1vdGUtc3RhdHMtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUMyQkMsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBYUEsbUJEcEN3QjtFQ3FDeEIsMkJEckN3QjtFQ3NDckIsd0JEdENxQjtFQ3VDckIsdUJBQUE7RUR0Q0Ysb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQW1ERjtBQWxFRTtFQUVFLHlCQUFBO0FBbUVKO0FBckRFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF1REo7QUFyREU7RUFDRSxpQkFBQTtFQUNBLGNDakJZO0VEa0JaLGlCQUFBO0VBQ0EsOEJDeEJPO0FEK0VYIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3JlbW90ZS1zdGF0cy1ib3gvcmVtb3RlLXN0YXRzLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0IFwic3JjL3RoZW1lL2NvbW1vbi5zY3NzXCI7XG4uc3RhdHMtYm94IHtcbiAgJjphY3RpdmUsXG4gICYuc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICB9XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAwcHgsIDNweCwgI2U0ZTRlNCk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMTJweCk7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICBtYXJnaW46IDFyZW0gMC40cmVtIDAuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLnN0YXRzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc3RhdHMtbnVtYmVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6ICRmb250TnVtO1xuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "FexU":
/*!*******************************************************************************!*\
  !*** ./src/app/common/additional-info-edit/additional-info-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdditionalInfoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInfoEditComponent", function() { return AdditionalInfoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_additional_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./additional-info-edit.component.html */ "m9S8");
/* harmony import */ var _additional_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./additional-info-edit.component.scss */ "sWap");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "qfBg");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/alert.service */ "3LUQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_additional_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/additional-info */ "MJJW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");












let AdditionalInfoEditComponent = class AdditionalInfoEditComponent {
    constructor(modal, userService, alert, env) {
        this.modal = modal;
        this.userService = userService;
        this.alert = alert;
        this.env = env;
        this.editable = false;
    }
    dismiss(data = null) {
        this.modal.dismiss(data);
    }
    showSubmit() {
        return true;
    }
    processEmptyFields() {
        if (this.additionalInfo.address == null)
            this.additionalInfo.address = "";
        if (this.additionalInfo.land_line_number == null)
            this.additionalInfo.land_line_number = "";
        if (this.additionalInfo.national_code == null)
            this.additionalInfo.national_code = "";
        if (this.additionalInfo.postal_code == null)
            this.additionalInfo.postal_code = "";
    }
    submit() {
        this.env.somethingIsPending("editing provider info");
        this.userService
            .updateAdditionalInfo(this.additionalInfo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((error) => {
            this.alert.presentError("ثبت اطلاعات تکمیلی با مشکل مواجه شد.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(false);
        }))
            .subscribe((result) => {
            this.env.somethingIsDonePending("editing provider info");
            if (result) {
                this.alert.presentSuccess("اطلاعات تکمیلی با موفقیت ویرایش شد.");
            }
        });
        this.dismiss(this.additionalInfo);
    }
    ngOnInit() {
    }
};
AdditionalInfoEditComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] }
];
AdditionalInfoEditComponent.propDecorators = {
    additionalInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
};
AdditionalInfoEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "app-additional-info-edit",
        template: _raw_loader_additional_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_additional_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]])
], AdditionalInfoEditComponent);



/***/ }),

/***/ "HeTM":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/submit-button/submit-button.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button\n  [disabled] = \"isWaiting || disabled\"\n  (click)=\"submit()\"\n  type=\"submit\"\n  expand=\"block\"\n  class=\"\"\n  [ngClass]=\"(isInlineAction)?'inline-action-button':'primary-button m-3'\"\n  >{{(!isWaiting)?text: ''}}\n  <ion-spinner class=\"submit-waiting-spinner\" *ngIf=\"isWaiting\" name=\"lines-small\"></ion-spinner>\n</ion-button>\n");

/***/ }),

/***/ "IKOy":
/*!*****************************************!*\
  !*** ./src/app/models/remote-config.ts ***!
  \*****************************************/
/*! exports provided: RemoteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteConfig", function() { return RemoteConfig; });
class RemoteConfig {
}


/***/ }),

/***/ "IP2b":
/*!**********************************************!*\
  !*** ./src/app/guard/home-redirect.guard.ts ***!
  \**********************************************/
/*! exports provided: HomeRedirectGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRedirectGuard", function() { return HomeRedirectGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/alert.service */ "3LUQ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let HomeRedirectGuard = class HomeRedirectGuard {
    constructor(router, authService, alertService) {
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
    }
    canActivate(next, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.authService.isAuthenticated()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((result) => {
            if (result) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.authService.isUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((isUser) => {
                    if (isUser) {
                        this.router.navigateByUrl("/provider-categories");
                    }
                    else {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.authService.isAdmin()).subscribe(isAdmin => {
                            if (isAdmin) {
                                this.router.navigateByUrl("/adm-dashboard");
                            }
                            else {
                                this.router.navigateByUrl("/pvd-reservations");
                            }
                        });
                    }
                    return false;
                }));
            }
            else {
                this.router.navigateByUrl("/login");
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(false);
        }));
    }
};
HomeRedirectGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
HomeRedirectGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
], HomeRedirectGuard);



/***/ }),

/***/ "Ixvq":
/*!***************************************************!*\
  !*** ./src/app/common/score/score.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stars-container .star {\n  color: gold;\n  font-size: 2rem;\n  margin: 0 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJzLWNvbnRhaW5lclxue1xuICAgIC5zdGFyXG4gICAge1xuICAgICAgICBjb2xvcjpnb2xkO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbjogMCAwLjdyZW07XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "JTjR":
/*!**********************************************************************!*\
  !*** ./src/app/architecture/shared-resource-async-request-bundle.ts ***!
  \**********************************************************************/
/*! exports provided: SharedResourceAsyncRequestBundle, SharedResourceUpdateStatus, SharedResourceAsyncRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedResourceAsyncRequestBundle", function() { return SharedResourceAsyncRequestBundle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedResourceUpdateStatus", function() { return SharedResourceUpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedResourceAsyncRequest", function() { return SharedResourceAsyncRequest; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



class SharedResourceAsyncRequestBundle {
    constructor(producer, sharedResourceDefaultValue, ownerObject, cacheable = false) {
        this.requestHook = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.WaitingQueue = [];
        this.processingQueue = [];
        this.processedCache = [];
        this.iterationStatus = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
        this.updateNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resourceReadyNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resourceUpdateStatus = SharedResourceUpdateStatus.NOT_UPDATED;
        this.cacheable = false;
        this.producer = producer;
        if (ownerObject) {
            this.producer = this.producer.bind(ownerObject);
        }
        this.sharedResource = sharedResourceDefaultValue;
        this.cacheable = cacheable;
        this.receiveRequests();
    }
    getResourceStatus() {
        return this.resourceUpdateStatus;
    }
    reset() {
        this.resourceUpdateStatus = SharedResourceUpdateStatus.NOT_UPDATED;
        this.processingQueue = [];
        this.iterationStatus = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
        this.WaitingQueue = [];
        this.sharedResource = null;
        this.processedCache = [];
        this.updateNotifier.next(this.sharedResource);
    }
    getUpdateNotifier(cleanUpComponent = null) {
        let notifier = this.updateNotifier.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])());
        if (cleanUpComponent) {
            notifier = notifier.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(cleanUpComponent));
        }
        return notifier;
    }
    needsSkeleton() {
        return (this.getResourceStatus() ==
            SharedResourceUpdateStatus.ATTEMPTING_FIRST_UPDATE);
    }
    getResourceReadyNotifier(cleanUpComponent = null) {
        let notifier = this.resourceReadyNotifier.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])());
        if (cleanUpComponent) {
            notifier = notifier.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(cleanUpComponent));
        }
        return notifier;
    }
    setResource(value) {
        this.sharedResource = value;
        this.updateNotifier.next(value);
    }
    resource() {
        return this.sharedResource;
    }
    receiveRequests() {
        this.requestHook.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(1000)).subscribe((request) => {
            this.setRequestStatus(request, SharedResourceAsyncRequestStatus.AWAITING_PROCESS);
            this.WaitingQueue.push(request);
            this.pokeIterator();
        });
    }
    iterate() {
        this.iterationSingleProcessComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.iterationSingleProcessComplete.subscribe((request) => {
            this.processingQueue.splice(this.processingQueue.indexOf(request), 1);
            this.processedCache.push(request);
            this.processNext();
        });
        this.processNext();
    }
    processNext() {
        if (this.WaitingQueue.length) {
            let request = this.WaitingQueue.pop();
            this.setRequestStatus(request, SharedResourceAsyncRequestStatus.PROCESSING);
            this.processingQueue.push(request);
            switch (this.resourceUpdateStatus) {
                case SharedResourceUpdateStatus.NOT_UPDATED:
                    this.setStatus(SharedResourceUpdateStatus.ATTEMPTING_FIRST_UPDATE);
                    break;
                case SharedResourceUpdateStatus.ERROR_ON_LAST_UPDATE_ATTEMPT:
                    this.setStatus(SharedResourceUpdateStatus.ATTEMPTING_UPDATE_AFTER_ERROR);
                    break;
                default:
                    this.setStatus(SharedResourceUpdateStatus.ATTEMPTING_UPDATE);
            }
            this.produce(request)
                .subscribe((result) => {
                this.setStatus(SharedResourceUpdateStatus.UPDATED);
                this.resourceReadyNotifier.next();
                this.setRequestStatus(request, SharedResourceAsyncRequestStatus.COMPLETED);
                this.iterationSingleProcessComplete.next(request);
            });
        }
        this.iterationSingleProcessComplete.complete();
        this.iterationStatus = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
    }
    produce(request) {
        return this.producer(request.argument).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    pokeIterator() {
        if (this.iterationStatus == SharedResourceAsyncRequestIteratorStatus.SLEEPING) {
            this.iterate();
        }
    }
    setStatus(status) {
        this.resourceUpdateStatus = status;
    }
    setRequestStatus(request, status) {
        if (SharedResourceAsyncRequestBundle.Env) {
            switch (status) {
                case SharedResourceAsyncRequestStatus.COMPLETED:
                case SharedResourceAsyncRequestStatus.ERROR:
                    SharedResourceAsyncRequestBundle.Env.somethingIsDonePending("Async Request: " + request.identifier);
                    break;
                case SharedResourceAsyncRequestStatus.PROCESSING:
                    SharedResourceAsyncRequestBundle.Env.somethingIsPending("Async Request: " + request.identifier);
            }
        }
        request.status = status;
    }
    request(argument) {
        let request = new SharedResourceAsyncRequest();
        request.argument = argument;
        request.identifier = this.randomRequestIdentifier();
        request.time = new Date().getTime();
        this.requestHook.next(request);
        return request;
    }
    randomRequestIdentifier() {
        return Math.random() * 10000 + 1;
    }
}
var SharedResourceUpdateStatus;
(function (SharedResourceUpdateStatus) {
    SharedResourceUpdateStatus[SharedResourceUpdateStatus["NOT_UPDATED"] = 0] = "NOT_UPDATED";
    SharedResourceUpdateStatus[SharedResourceUpdateStatus["UPDATED"] = 1] = "UPDATED";
    SharedResourceUpdateStatus[SharedResourceUpdateStatus["ERROR_ON_LAST_UPDATE_ATTEMPT"] = 2] = "ERROR_ON_LAST_UPDATE_ATTEMPT";
    SharedResourceUpdateStatus[SharedResourceUpdateStatus["ATTEMPTING_FIRST_UPDATE"] = 3] = "ATTEMPTING_FIRST_UPDATE";
    SharedResourceUpdateStatus[SharedResourceUpdateStatus["ATTEMPTING_UPDATE"] = 4] = "ATTEMPTING_UPDATE";
    SharedResourceUpdateStatus[SharedResourceUpdateStatus["ATTEMPTING_UPDATE_AFTER_ERROR"] = 5] = "ATTEMPTING_UPDATE_AFTER_ERROR";
})(SharedResourceUpdateStatus || (SharedResourceUpdateStatus = {}));
class SharedResourceAsyncRequest {
}
var SharedResourceAsyncRequestStatus;
(function (SharedResourceAsyncRequestStatus) {
    SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["AWAITING_PROCESS"] = 0] = "AWAITING_PROCESS";
    SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["PROCESSING"] = 1] = "PROCESSING";
    SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["COMPLETED"] = 2] = "COMPLETED";
    SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["ERROR"] = 3] = "ERROR";
})(SharedResourceAsyncRequestStatus || (SharedResourceAsyncRequestStatus = {}));
class SharedResourceAsyncRequestIterator {
    constructor() {
        this.status = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
    }
}
var SharedResourceAsyncRequestIteratorStatus;
(function (SharedResourceAsyncRequestIteratorStatus) {
    SharedResourceAsyncRequestIteratorStatus[SharedResourceAsyncRequestIteratorStatus["BUSY"] = 0] = "BUSY";
    SharedResourceAsyncRequestIteratorStatus[SharedResourceAsyncRequestIteratorStatus["HUNGRY"] = 1] = "HUNGRY";
    SharedResourceAsyncRequestIteratorStatus[SharedResourceAsyncRequestIteratorStatus["SLEEPING"] = 2] = "SLEEPING";
})(SharedResourceAsyncRequestIteratorStatus || (SharedResourceAsyncRequestIteratorStatus = {}));


/***/ }),

/***/ "K4UH":
/*!****************************************!*\
  !*** ./src/app/services/im.service.ts ***!
  \****************************************/
/*! exports provided: IMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMService", function() { return IMService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ "OC8m");
/* harmony import */ var src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/smart-audio.service */ "snxI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _file_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-helper.service */ "Y+EJ");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/message */ "qZOq");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tinode_sdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tinode-sdk */ "p+xU");
/* harmony import */ var tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinode_sdk__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_file_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/file-model */ "X9GW");
















const Drafty = tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a.Drafty;
let IMService = class IMService {
    constructor(env, alert, fileService, auth, smartAudio, notifs) {
        this.env = env;
        this.alert = alert;
        this.fileService = fileService;
        this.auth = auth;
        this.smartAudio = smartAudio;
        this.notifs = notifs;
        this.username = null;
        this.password = null;
        this.chatList = [];
        this.messageInfoUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](null);
        this.allReceived = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
        this.noMoreMessages = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
        this.contactsFetched = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
        this.messages = [];
        this.newMessages = [];
        this.fetchingMessages = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
        this.allRendered = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
        this.fetchedContactList = false;
        this.cachedFiles = [];
        this.messageGotDirty = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.messageAddedToEnd = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"]();
        this.messageAddedToStart = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.notifyDirtySubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.fileFetchSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.isTypingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.isClientInChatPage = false;
        this.reconnectCountdown = null;
        this.topicPresWatchQueue = [];
        this.connectionStatusChanged = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"]();
        this.autoReconnectRemainingSecondsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.keepScrollState = false;
        this.rendered = 0;
        this.onConnect = this.onConnect.bind(this);
        this.onDisconnect = this.onDisconnect.bind(this);
        this.tnMeContactUpdate = this.tnMeContactUpdate.bind(this);
        this.tnMeSubsUpdated = this.tnMeSubsUpdated.bind(this);
        this.tnMeMetaDesc = this.tnMeMetaDesc.bind(this);
        this.handleNewMessage = this.handleNewMessage.bind(this);
        this.handleAllMessagesReceived = this.handleAllMessagesReceived.bind(this);
        this.handleAllNewPageMessagesReceived = this.handleAllNewPageMessagesReceived.bind(this);
        this.handleInfoReceipt = this.handleInfoReceipt.bind(this);
        this.handlePresUpdated = this.handlePresUpdated.bind(this);
        this.handleAutoreconnectIteration = this.handleAutoreconnectIteration.bind(this);
        this.auth.loggedOut.subscribe((result) => {
            this.cachedFiles = [];
            this.messages = [];
            this.username = null;
            this.password = null;
        });
        this.notifyDirtySubject.subscribe((output) => {
            this.messageGotDirty.next(this.messages.indexOf(output));
        });
        this.fileFetchSuccess.subscribe((output) => {
            this.messageGotDirty.next(output);
        });
        this.setup();
    }
    notifyEnteredChatPage(entered = true) {
        this.isClientInChatPage = entered;
    }
    setup() {
        this.tinode = new tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a(this.env.CHAT_APP_NAME, this.env.CHAT_URL, this.env.CHAT_API_KEY, null, false);
        this.tinode.enableLogging(this.env.ENABLE_TINODE_LOGGING, true);
        this.tinode.onConnect = this.onConnect;
        this.tinode.onDisconnect = this.onDisconnect;
        this.tinode.onAutoreconnectIteration = this.handleAutoreconnectIteration;
        this.env.somethingIsPending("chat connecting");
        this.tinode.connect();
        this.authLogoutSubscription = this.auth.loggedOut.subscribe((result) => {
            this.logout();
        });
        //this.tinode.onAutoreconnectIteration = this.onAutoreconnectIteration;
    }
    logout() {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("settings");
        this.tinode.onConnect = undefined;
        this.tinode.onDisconnect = undefined;
        this.tinode.onAutoreconnectIteration = undefined;
        this.authLogoutSubscription.unsubscribe();
        this.tinode.disconnect();
        this.tinode = null;
        this.setup();
    }
    onConnect() {
        clearInterval(this.networkProbeIntervalHandel);
        this.networkProbeIntervalHandel = setInterval(() => {
            this.tinode.networkProbe();
        }, 3000);
        console.log("IM Server Connected");
        this.connectionStatusChanged.next(true);
        this.env.somethingIsDonePending("chat connecting");
        this.auth
            .getUser()
            .then((user) => {
            this.login(user);
        }, (error) => {
            let fetchUserSubscription = this.auth.fetchedUser
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe((result) => {
                console.log("feteched user");
                if (result) {
                    this.auth
                        .getUser()
                        .then((user) => {
                        this.login(user);
                    }, (error) => {
                        console.log("Cant get User");
                    })
                        .catch();
                }
            });
        })
            .catch();
    }
    reconnect() {
        this.tinode.reconnect();
        if (this.reconnectCountdown)
            clearInterval(this.reconnectCountdown);
    }
    handleAutoreconnectIteration(sec, prom) {
        console.log(prom);
        if (this.reconnectCountdown)
            clearInterval(this.reconnectCountdown);
        if (prom) {
            // Reconnecting now
            prom
                .then(() => {
                // Reconnected: clear error
                if (this.reconnectCountdown)
                    clearInterval(this.reconnectCountdown);
                this.connectionStatusChanged.next(true);
            })
                .catch((err) => { });
            return;
        }
        let count = sec / 1000;
        count = count | count;
        this.reconnectCountdown = setInterval(() => {
            this.autoReconnectRemainingSecondsUpdated.next(count--);
        }, 1000);
    }
    onDisconnect() {
        clearInterval(this.networkProbeIntervalHandel);
        this.env.somethingIsDonePending("chat connecting");
        console.log("IM Server Disonnected");
        this.connectionStatusChanged.next(false);
    }
    login(user) {
        console.log("log in");
        this.username = user.tinode_username;
        this.password = user.tinode_pass;
        if (this.username == null) {
            let tempUserName = (Math.floor(Math.random() * 1000000) + 1).toString();
            let tempPass = (Math.floor(Math.random() * 1000000) + 1).toString();
            this.env.somethingIsPending("loggin in chat");
            Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.createAccount(tempUserName, tempPass)).subscribe((uid) => {
                this.auth
                    .updateChatCredentials(tempUserName, tempPass, uid)
                    .subscribe();
                this.username = tempUserName;
                this.password = tempPass;
            });
        }
        else {
            if (this.username != null && this.password != null) {
                if (this.tinode.isConnected()) {
                    if (!this.tinode.isAuthenticated()) {
                        this.env.somethingIsPending("loggin in chat");
                        let promise = this.tinode.loginBasic(this.username, this.password);
                        promise.then(() => {
                            this.onLoggedIn();
                        });
                    }
                }
            }
        }
    }
    onLoggedIn() {
        this.env.somethingIsDonePending("loggin in chat");
        console.log("Logged into IM Server");
        var me = this.tinode.getMeTopic();
        me.onMetaDesc = this.tnMeMetaDesc;
        me.onContactUpdate = this.tnMeContactUpdate;
        me.onSubsUpdated = this.tnMeSubsUpdated;
        //myUserId: this.tinode.getCurrentUserID()
        // Subscribe, fetch topic desc, the list of subscriptions. Messages are not fetched.
        me.subscribe(me
            .startMetaQuery()
            .withLaterSub()
            .withDesc()
            .withTags()
            .withCred()
            .build())
            .catch((err) => {
            this.tinode.disconnect();
        })
            .finally(() => { });
        //this.handleMustSubscribeTopics(user);
    }
    sendMessage(text) {
        //let msg = Drafty.attachJSON(Drafty.parse(text));
        var promise = null;
        const topic = this.tinode.getTopic(this.topic);
        var msg = topic.createMessage(text, false);
        if (!topic.isSubscribed()) {
            promise = Promise.resolve();
            promise = promise.then(() => {
                return topic.subscribe();
            });
        }
        topic
            .publishDraft(msg, promise)
            .then((ctrl) => {
            if (topic.isArchived()) {
                return topic.archive(false);
            }
        })
            .catch((err) => {
            console.error(err.message, "err");
        });
    }
    tnMeContactUpdate(what, cont) {
        this.resetContactList();
    }
    tnMeSubsUpdated() {
        this.resetContactList();
        //console.log('tnMeSubsUpdated');
    }
    tnMeMetaDesc(desc) {
        this.resetContactList();
        //console.log('tnMeMetaDesc');
    }
    createAccount(username, password) {
        return this.tinode.connect().then(() => {
            return this.tinode.createAccountBasic(username, password).then(() => {
                this.onLoggedIn();
                return this.getCurrentUserId();
            });
        });
    }
    getCurrentUserId() {
        return this.tinode.getCurrentUserID();
    }
    resetContactList() {
        this.chatList = [];
        this.tinode.getMeTopic().contacts((c) => {
            this.chatList.push(c);
        });
        this.fetchedContactList = true;
        this.contactsFetched.next(true);
    }
    isTopicInContacts(topicName) {
        return  true && this.findTopicInContacts(topicName);
    }
    findTopicInContacts(topicName) {
        let contact = this.chatList.filter((item) => item.topic == topicName);
        if (contact.length) {
            return contact[0];
        }
        return false;
    }
    isContactTopicOnline(topicName) {
        /* let contact = this.findTopicInContacts(topicName);
        if (contact) {
          return contact.online;
        }
        return false; */
        return this.tinode.isTopicOnline(topicName);
    }
    acceptTopic(topic) {
        topic = this.tinode.getTopic(topic);
        let getQuery = topic.startMetaQuery();
        return topic.subscribe(getQuery.build()).then((ctrl) => {
            return ctrl.topic;
        });
    }
    createNewGroupTopic() {
        let newTopicName = this.tinode.newGroupTopicName();
        let params = null;
        params = {
            _topicName: newTopicName,
        };
        params.desc = { public: "", private: { comment: "" } };
        let topic = this.tinode.getTopic(newTopicName);
        let getQuery = topic.startMetaQuery();
        return topic.subscribe(getQuery.build(), params).then((ctrl) => {
            return ctrl.topic;
        });
    }
    leave(oldTopicName) {
        if (!oldTopicName) {
            return;
        }
        //this.cachedFiles = [];
        let oldTopic = this.tinode.getTopic(oldTopicName);
        this.fetchingMessages.next(false);
        oldTopic.onData = undefined;
        oldTopic.onAllMessagesReceived = undefined;
        oldTopic.onInfo = undefined;
        oldTopic.onMetaDesc = undefined;
        oldTopic.onSubsUpdated = undefined;
        oldTopic.onPres = undefined;
        this.cleanSlate();
        if (oldTopic && oldTopic.isSubscribed()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(oldTopic.leave());
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(true);
    }
    setTopic(topic, isNew = false, isGroup = false) {
        this.env.somethingIsPending("setting chat topic");
        let changedTopic = topic != this.topic;
        this.rendered = 0;
        return this.leave(topic)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(() => {
            this.topic = this.tinode.getTopic(topic);
            let params = null;
            let setQuery = undefined;
            if (isNew) {
                params = {
                    _topicName: topic,
                };
                if (!isGroup) {
                    params.sub = {
                        mode: "JRWPS",
                    };
                    params.desc = {
                        defacs: { auth: "JRWPS" },
                    };
                }
                else {
                    params.desc = { public: "", private: { comment: "" } };
                }
                setQuery = params;
            }
            if (this.topic) {
                this.topic.onData = this.handleNewMessage;
                this.topic.onAllMessagesReceived = this.handleAllMessagesReceived;
                this.topic.onInfo = this.handleInfoReceipt;
            }
            let getQuery = this.topic
                .startMetaQuery()
                .withLaterDesc()
                .withLaterSub();
            getQuery = getQuery.withLaterData(30);
            //getQuery = getQuery.withData(1, null, 30);
            getQuery = getQuery.withLaterDel();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.topic.subscribe(getQuery.build(), setQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.error("unable to set topic");
                this.env.somethingIsDonePending("setting chat topic");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ctrl) => {
                if (ctrl) {
                    if (this.topic != ctrl.topic) {
                        this.topic = ctrl.topic;
                        this.env.somethingIsDonePending("setting chat topic");
                    }
                    return true;
                }
                return false;
            }));
        }));
    }
    handlePresUpdated(pres) {
        if (pres.what == "acs") {
            this.alert.presentToast("accepted");
        }
    }
    getMessagesPage() {
        let topic = this.tinode.getTopic(this.topic);
        //topic.onAllMessagesReceived = this.handleAllNewPageMessagesReceived;
        if (!topic.msgHasMoreMessages(false)) {
            this.noMoreMessages.next(true);
            return;
        }
        topic.getMessagesPage(20);
    }
    noteReceived(msg) {
        const topic = this.tinode.getTopic(this.topic);
        if (topic.msgStatus(msg) >= tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a.MESSAGE_STATUS_SENT &&
            msg.from != this.tinode.getCurrentUserID()) {
            topic.noteRecv(msg.seq);
        }
    }
    noteRead(msg) {
        const topic = this.tinode.getTopic(this.topic);
        if (topic.msgStatus(msg) >= tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a.MESSAGE_STATUS_SENT &&
            msg.from != this.tinode.getCurrentUserID()) {
            topic.noteRead(msg.seq);
        }
    }
    noteTyping() {
        const topic = this.tinode.getTopic(this.topic);
        topic.noteKeyPress();
    }
    handleNewMessage(msg) {
        this.fetchingMessages.next(true);
        const topic = this.tinode.getTopic(this.topic);
        let isNew = topic.isNewMessage(msg.seq);
        switch (isNew) {
            case true:
            //this.newMessageReceived.next(msg);
            case false:
                if (msg) {
                    if (!msg.deleted) {
                        let message = this.convertMessage(msg);
                        if (message.content) {
                            this.keepScrollState = false;
                            let lastIdx = this.messages.length - 1;
                            let index = lastIdx + 1;
                            if (lastIdx > -1 &&
                                message.content == this.messages[lastIdx].content &&
                                message.from == this.messages[lastIdx].from &&
                                message.status != this.messages[lastIdx].status &&
                                this.messages[lastIdx].status == 1) {
                                this.rendered--;
                                index--;
                                this.messageGotDirty.next(lastIdx);
                                this.messages[lastIdx] = message;
                                this.notifs
                                    .notifySentMessage(this.peerUser.id, message.topic)
                                    .subscribe();
                            }
                            else {
                                if (lastIdx < 0 || message.seq > this.messages[lastIdx].seq) {
                                    this.keepScrollState = false;
                                    this.messages.push(message);
                                    this.messageAddedToEnd.next(index);
                                }
                                else {
                                    this.keepScrollState = true;
                                    index = this.findMessageInsertIndex(this.messages, message.seq, 0);
                                    this.messages.splice(index, 0, message);
                                    if (this.messages[index - 1] != undefined &&
                                        message.from == this.messages[index - 1].from) {
                                        message.isLast = true;
                                        this.messages[index - 1].isLast = false;
                                    }
                                    this.messageAddedToStart.next(index);
                                }
                            }
                            //determine if isFiwrst
                            if (index == 0 || message.from != this.messages[index - 1].from) {
                                //message.isFirst = true;
                            }
                            // console.log('length: ' + this.messages.length);
                            // console.log('index: '+ index + ' from: ' + message.from + ' content: ' + message.content);
                            // console.log('index-1: '+ (index-1) + ' from: ' + this.messages[index-1].from);
                            if (this.messages[index + 1] == undefined ||
                                message.from != this.messages[index + 1].from) {
                                message.isLast = true;
                                if (this.messages[index - 1] != undefined &&
                                    this.messages[index - 1].from == message.from) {
                                    this.messages[index - 1].isLast = false;
                                }
                            }
                        }
                    }
                }
        }
    }
    findMessageInsertIndex(messageArray, messageSeq, startIndex = 0) {
        if (messageSeq < messageArray[startIndex].seq)
            return startIndex;
        return this.findMessageInsertIndex(messageArray, messageSeq, startIndex + 1);
    }
    getTopicMessages(callback) {
        const topic = this.tinode.getTopic(this.topic);
        return topic.messages(callback);
    }
    HandlePeerTyping() {
        this.isTypingSubject.next(true);
        clearTimeout(this.typingTimeOut);
        this.typingTimeOut = setTimeout(() => {
            this.isTypingSubject.next(false);
        }, 500);
    }
    handleInfoReceipt(info) {
        const topic = this.tinode.getTopic(this.topic);
        var status = null;
        switch (info.what) {
            case "read":
                status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_READ;
                break;
            case "recv":
                status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_RECEIVED;
                break;
            case "kp":
                this.HandlePeerTyping();
                return;
            default:
        }
        var messageIndex = undefined;
        var foundIndex = false;
        for (let index = this.messages.length - 1; index > 0; index--) {
            if (!foundIndex && this.messages[index].seq == info.seq) {
                this.messages[index].status = status;
                this.messageGotDirty.next(index);
                foundIndex = true;
                continue;
            }
            if (foundIndex) {
                if (this.messages[index].status < status) {
                    this.messages[index].status = status;
                }
                else {
                    break;
                }
            }
        }
    }
    incrementRendered() {
        this.rendered++;
        if (this.rendered == this.messages.length) {
            this.allRendered.next(true);
        }
    }
    hasFetchedContactList() {
        return this.fetchedContactList;
    }
    getMessageStatus(msg) {
        return this.tinode.getTopic(msg.topic).msgStatus(msg);
    }
    handleAllNewPageMessagesReceived(params) {
        //this.keepScrollState = true;
        //this.messages = this.newMessages.concat(this.messages);
        //this.newMessages = [];
        this.fetchingMessages.next(false);
        //this.allReceived.next(true);
        if (params == 0) {
            this.noMoreMessages.next(true);
        }
    }
    handleAllMessagesReceived(count) {
        //console.log(this.newMessages);
        //this.messages = this.messages.concat(this.newMessages);
        if (count == 0) {
            this.tinode.getTopic(this.topic).messages(this.handleNewMessage);
        }
        this.newMessages = [];
        //this.rendered = 0;
        //this.loadMessages();
        //this.messages = this.newMessages;
        this.fetchingMessages.next(false);
        this.allReceived.next(true);
    }
    loadMessages() {
        this.newMessages = [];
        this.fetchingMessages.next(true);
        this.getTopicMessages((msg) => {
            if (!msg.deleted) {
                let message = this.convertMessage(msg);
                if (message.content) {
                    this.newMessages.push(message);
                }
            }
        });
    }
    convertMessage(msg) {
        let message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["Message"]();
        if (msg.from == this.tinode.getCurrentUserID()) {
            message.fromMe = true;
        }
        message.from = msg.from;
        message.seq = msg.seq;
        message.topic = msg.topic;
        message.content = msg.content;
        message.NotifyDirtySubject = this.notifyDirtySubject;
        message.ts = msg.ts;
        if (msg.content) {
            if (msg.head) {
                message.head = msg.head;
                message.mime = msg.head.mime;
                if (this.messageIsDrafty(msg.head.mime)) {
                    //message.attachments = this.getMessageAttachments(message.content);
                    let file = new _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileModel"]();
                    file.name = message.content.ent[0].data.name;
                    file.mime_type = message.content.ent[0].data.mime;
                    file.size = message.content.ent[0].data.size;
                    if (this.fileService.isImageMime(file.mime_type)) {
                        file.fetch_status =
                            _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST;
                        file.fetchOnSrcRequest = true;
                        file.fetchObject = this;
                        file.fetchCallback = this.getImage;
                        file.ownerMessage = message;
                        message.file = file;
                        message.isImage = true;
                    }
                    else if (this.fileService.isAudioMime(file.mime_type)) {
                        file.fetch_status =
                            _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST;
                        file.fetchOnSrcRequest = true;
                        file.fetchObject = this;
                        file.fetchCallback = this.getAudio;
                        file.ownerMessage = message;
                        message.file = file;
                        message.isAudio = true;
                    }
                }
            }
            message.status = this.getMessageStatus(msg);
        }
        return message;
    }
    messageIsDrafty(mime) {
        return mime == Drafty.getContentType();
    }
    getMessageAttachments(content) {
        let attachments = [];
        if (content.ent && content.ent.length > 0) {
            for (var i in content.ent) {
                if (content.ent[i] && content.ent[i].tp == "IM") {
                    let attachement = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageAttachment"]();
                    attachement.downloadUrl = Drafty.getDownloadUrl(content.ent[i].data);
                    attachement.fileName = content.ent[i].data.name;
                    attachement.mimeType = content.ent[i].data.mime;
                    attachments.push(attachement);
                }
            }
        }
        return attachments;
    }
    cleanSlate() {
        this.messages = [];
        this.newMessages = [];
        this.chatList = [];
        this.rendered = 0;
        this.topic = null;
        this.keepScrollState = false;
        this.noMoreMessages.next(false);
        this.cachedFiles = [];
        this.messageAddedToEnd = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"]();
    }
    getImage(message) {
        let cachedFile = this.cachedFiles.find((file) => {
            return file.name == message.file.name;
        });
        if (cachedFile != undefined) {
            message.file = cachedFile;
            message.file.ownerMessage = message;
            message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
            this.fileFetchSuccess.next(this.messages.indexOf(message));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(message.file);
        }
        else {
            return this.fileService.downloadImage(message.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((result) => {
                message.file.content = result;
                message.file.img_src = URL.createObjectURL(message.file.content);
                return this.fileService.getImageDimensions(message.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((output) => {
                    message.file = output;
                    message.file.fetch_status =
                        _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
                    this.fileFetchSuccess.next(this.messages.indexOf(message));
                    return message.file;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
            }));
        }
    }
    getAudio(message) {
        let cachedFile = this.cachedFiles.find((file) => {
            return file.name == message.file.name;
        });
        if (cachedFile != undefined) {
            message.file.audio_src = cachedFile.audio_src;
            message.file.content = cachedFile.content;
            message.file.ownerMessage = message;
            message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
            this.fileFetchSuccess.next(this.messages.indexOf(message));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(message.file);
        }
        else {
            return this.fileService.downloadAudio(message.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
                message.file.content = result;
                message.file.audio_src = URL.createObjectURL(message.file.content);
                message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
                this.fileFetchSuccess.next(this.messages.indexOf(message));
                return message.file;
            }));
        }
    }
    sendImage(file) {
        var message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["Message"]();
        message.NotifyDirtySubject = this.notifyDirtySubject;
        message.status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_NONE;
        message.file = new _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileModel"]();
        message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
        message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_UPLOADING;
        message.file.content = file;
        message.file.size = file.size;
        this.fileService.processImageProperties(message.file).subscribe((result) => {
            message.file = result;
            message.isImage = true;
            message.fromMe = true;
            message.isLast = true;
            message.file.ownerMessage = message;
            message.seq = (Math.floor(Math.random() * 1000000) + 1).toString();
            this.messages.push(message);
            this.messageAddedToEnd.next(this.messages.length - 1);
            this.fileService.uploadImage(message.file).subscribe((result) => {
                message.file.name = result.name;
                message.file.extension = result.extension;
                message.file.upload_status =
                    _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_SUCCESS;
                let msg = Drafty.attachFile(null, message.file.mime_type, null, message.file.name, message.file.size, null);
                this.messages.splice(this.messages.indexOf(message), 1);
                this.cachedFiles.push(message.file);
                this.sendMessage(msg);
            }, (error) => {
                message.file.upload_status =
                    _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_FAIL;
                console.error(error);
            });
        }, (error) => {
            console.error(error);
        });
    }
    sendAudio(auido) {
        var message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["Message"]();
        message.NotifyDirtySubject = this.notifyDirtySubject;
        message.status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_NONE;
        message.file = new _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileModel"]();
        message.isAudio = true;
        message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
        message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_UPLOADING;
        message.file.content = auido;
        message.file.mime_type = "audio/webm";
        message.file.size = auido.size;
        message.file.audio_src = URL.createObjectURL(message.file.content);
        message.file.name = (Math.floor(Math.random() * 1000000) + 1).toString();
        message.fromMe = true;
        message.isLast = true;
        message.file.ownerMessage = message;
        message.seq = (Math.floor(Math.random() * 1000000) + 1).toString();
        this.messages.push(message);
        this.messageAddedToEnd.next(this.messages.length - 1);
        this.fileService.uploadAudio(message.file).subscribe((result) => {
            console.log(result);
            message.file.name = result.name;
            message.file.extension = result.extension;
            //message.file.upload_status = FileUploadStatus.FILE_UPLOAD_STATUS_SUCCESS;
            message.notifyDirty();
            let msg = Drafty.attachFile(null, message.file.mime_type, null, message.file.name, message.file.size, null);
            this.messages.splice(this.messages.indexOf(message), 1);
            this.cachedFiles.push(message.file);
            this.sendMessage(msg);
        }, (error) => {
            message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_FAIL;
        });
    }
};
IMService.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _file_helper_service__WEBPACK_IMPORTED_MODULE_5__["FileHelperService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_2__["SmartAudioService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }
];
IMService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _file_helper_service__WEBPACK_IMPORTED_MODULE_5__["FileHelperService"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_2__["SmartAudioService"],
        _notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
], IMService);



/***/ }),

/***/ "KIUr":
/*!******************************************!*\
  !*** ./src/app/models/provider-group.ts ***!
  \******************************************/
/*! exports provided: ProviderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderGroup", function() { return ProviderGroup; });
class ProviderGroup {
}


/***/ }),

/***/ "KhDX":
/*!*************************************************!*\
  !*** ./src/app/common/call/call.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.actions-wrapper {\n  flex-direction: row !important;\n}\n.actions-wrapper .call-action {\n  border-radius: 50px;\n  -webkit-border-radius: 50px;\n  -moz-border-radius: 50px;\n  --border-radius:$radius;\n  --border-radius:50px;\n  width: 60px;\n  height: 60px;\n  --padding-end:0;\n  --padding-start:0;\n}\n.actions-wrapper .call-action.reject {\n  --background: #e65844;\n  --background-activated:#fe7f70;\n}\n.actions-wrapper .call-action.accept {\n  --background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vY2FsbC9jYWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUFDRSw4QkFBQTtBQWtERjtBQTdDRTtFQ29DRCxtQkRuQzBCO0VDb0MxQiwyQkRwQzBCO0VDcUN2Qix3QkRyQ3VCO0VDc0N2Qix1QkFBQTtFRHJDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBa0RKO0FBakRJO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtBQW1ETjtBQWpESTtFQUNFLG1CQUFBO0FBbUROIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NhbGwvY2FsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0IFwic3JjL3RoZW1lL2NvbW1vbi5zY3NzXCI7XG4uYWN0aW9ucy13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAuY2FsbC1zdGF0ZS10ZXh0XG4gIHtcbiAgICAgIFxuICB9XG4gIC5jYWxsLWFjdGlvbiB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1MHB4KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6NTBweDtcbiAgICB3aWR0aDo2MHB4O1xuICAgIGhlaWdodDo2MHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6MDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgICAmLnJlamVjdCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNlNjU4NDQ7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZTdmNzA7XG4gICAgfVxuICAgICYuYWNjZXB0IHtcbiAgICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XG4gICAgfVxuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "MJJW":
/*!*******************************************!*\
  !*** ./src/app/models/additional-info.ts ***!
  \*******************************************/
/*! exports provided: AdditionalInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInfo", function() { return AdditionalInfo; });
class AdditionalInfo {
}


/***/ }),

/***/ "MoGL":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/remote-stats-box/remote-stats-box.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"stats-box\" (click)=\"navigate()\">\n  <span class=\"stats-number number-text\">\n    {{number}}\n  </span>\n  <span class=\"stats-text\">{{text}}</span>\n</a>");

/***/ }),

/***/ "MrgP":
/*!***************************************************!*\
  !*** ./src/app/common/answer/answer.component.ts ***!
  \***************************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_answer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./answer.component.html */ "kuGV");
/* harmony import */ var _answer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer.component.scss */ "NfT3");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/public-question-and-answers.service */ "ybCk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let AnswerComponent = class AnswerComponent {
    constructor(modalController, qaService, alert) {
        this.modalController = modalController;
        this.qaService = qaService;
        this.alert = alert;
        this.answering = false;
        this.answerString = "";
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss();
    }
    answer() {
        this.answering = true;
        this.qaService.answer(this.answerString, this.questionId).subscribe(result => {
            this.alert.presentSuccess("پاسخ با موفقیت اضافه شد");
            this.qaService.questionWithAnswersShared.request(this.questionId);
            this.answering = false;
            this.dismiss();
        });
    }
};
AnswerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
AnswerComponent.propDecorators = {
    questionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
};
AnswerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-answer',
        template: _raw_loader_answer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_answer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], AnswerComponent);



/***/ }),

/***/ "NfT3":
/*!*****************************************************!*\
  !*** ./src/app/common/answer/answer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.question-text {\n  border: 1px solid #d7f3f6;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  --border-radius:$radius;\n  font-family: \"myIranSans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5zd2VyL2Fuc3dlci5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NBO0VBRUkseUJBQUE7RUN1Q0gsbUJEdEMwQjtFQ3VDMUIsMkJEdkMwQjtFQ3dDdkIsd0JEeEN1QjtFQ3lDdkIsdUJBQUE7RUR4Q0EseUJDSkk7QUR1RFIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYW5zd2VyL2Fuc3dlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcblxuLnF1ZXN0aW9uLXRleHRcbntcbiAgICBib3JkZXI6MXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yLXhsaWdodDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDEwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService, firebaseConfig, NotificationCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCode", function() { return NotificationCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call.service */ "tCwg");
/* harmony import */ var _models_voice_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/voice-call */ "BbMm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../models/user */ "2hxB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "E9qw");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/messaging */ "YK9e");
















let NotificationService = class NotificationService {
    constructor(auth, firebaseX, platform, route, alert, http, env, nav, afMessaging, callService, userService) {
        this.auth = auth;
        this.firebaseX = firebaseX;
        this.platform = platform;
        this.route = route;
        this.alert = alert;
        this.http = http;
        this.env = env;
        this.nav = nav;
        this.afMessaging = afMessaging;
        this.callService = callService;
        this.userService = userService;
        this.token = null;
        this.showNoitfEnable = false;
        this.sessionManagerService = null;
        if (!this.env.WEB_NOTIFICATIONS_ONLY && this.platform.is("android")) {
            ///if(false){
            this.platform.ready().then((ready) => {
                this.setAndroidParameters();
                this.subscribeToEvents();
            });
        }
        else {
            this.setBrowserParameters();
            this.subscribeToEvents();
        }
    }
    subscribeToEvents() {
        this.onMessageReceived.subscribe((message) => {
            console.log("message received: " + message);
            this.dispatchNotification(message);
        });
        this.tokenChanges.subscribe((token) => {
            console.log("token refresh: " + token);
            this.token = token;
            this.auth
                .isAuthenticated()
                .then((result) => {
                this.setToken();
            })
                .catch((err) => { });
        });
        this.auth
            .isAuthenticated()
            .then((result) => {
            this.setToken();
        })
            .catch((err) => { });
        this.auth.roleDetected.subscribe((result) => {
            if (result) {
                console.log('before setToken');
                this.setToken();
            }
        });
        this.auth.loggedOutExToken.subscribe(exToken => {
            if (exToken) {
                this.unsetToken(exToken);
            }
        });
    }
    handleNewMessage(data) {
        let user = JSON.parse(data.sender);
        let notifMessage = "پیام جدید از ";
        notifMessage += _models_user__WEBPACK_IMPORTED_MODULE_10__["User"].getName(user);
        let belongsToSessionChat = data.topic.substr(0, 3) == "grp";
        if (belongsToSessionChat) {
            //this.alert.presentViewNotify(notifMessage, this.openSessionsPage, this);
        }
        else {
            this.alert.presentViewNotify(notifMessage, this.openPeerChatList, this);
        }
    }
    setAndroidParameters() {
        this.onMessageReceived = this.firebaseX.onMessageReceived();
        this.tokenChanges = this.firebaseX.onTokenRefresh();
    }
    setBrowserParameters() {
        this.onMessageReceived = this.afMessaging.messages.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((message) => message["data"]));
        this.tokenChanges = this.afMessaging.requestPermission.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMapTo"])(this.afMessaging.tokenChanges));
    }
    dispatchNotification(data) {
        let notificationCode = parseInt(data["notification_code"]);
        switch (notificationCode) {
            case NotificationCode.NEW_MESSAGE:
                this.handleNewMessage(data);
                break;
            case NotificationCode.INCOMING_CALL:
                this.handleIncomingCall(data);
                break;
            case NotificationCode.SESSION_UPDATE:
                this.handleSessionUpdateNotif(data);
                break;
            case NotificationCode.PAYMENT_CONFIRMED:
                this.handlePaymentConfirmed();
                break;
            default:
        }
    }
    handlePaymentConfirmed() {
        this.userService.balanceShared.request();
        this.alert.presentSuccess("افزایش اعتبار انجام شد.");
    }
    handleIncomingCall(data) {
        let call = new _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCall"]();
        call.id = data["call_id"];
        call.access_token = data["access_token"];
        call.maxDuration = data['max_duration'];
        call.caller = JSON.parse(data["caller"]);
        this.callService.receiveCall(call);
    }
    handleSessionUpdateNotif(message) {
        if (this.sessionManagerService) {
            let session = JSON.parse(message.session);
            let sender = JSON.parse(message.sender);
            this.sessionManagerService.handleIncomingSessionUpdateNotification(session, sender);
        }
    }
    openPeerChatList() {
        this.auth.getUser().then((user) => {
            this.nav.navigateRoot(["/peer-chats/" + user.role_id]);
        });
    }
    setToken() {
        if (this.token) {
            this.auth.remoteSetFcmToken(this.token).subscribe();
        }
    }
    unsetToken(exAuthToken) {
        if (this.platform.is("android")) {
            this.firebaseX.unregister();
        }
        else {
            this.afMessaging.getToken
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(token => this.afMessaging.deleteToken(token)));
        }
        this.auth.remoteUnsetFcmToken(exAuthToken).subscribe();
    }
    notifyPvdSessionAccepted(sessionId) { }
    notifySessionUpdate(sessionId, recipientId) {
        let url = "notify/sessionUpdate";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])((token) => {
            return this.http.post(this.env.API_URL + url, {
                recipient_user_id: recipientId,
                session_id: sessionId,
            }, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
        }));
    }
    notifySentMessage(recipientId, topic) {
        let url = "notify/sentMessage";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])((token) => {
            return this.http.post(this.env.API_URL + url, {
                recipient_user_id: recipientId,
                topic: topic,
            }, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
        }));
    }
};
NotificationService.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseX"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"] },
    { type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__["AngularFireMessaging"] },
    { type: _call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseX"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"],
        _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__["AngularFireMessaging"],
        _call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
], NotificationService);

const firebaseConfig = {
    apiKey: "AIzaSyCsPCmdxIh8mtrrrzKAUyym_mY4Y-fcGBk",
    authDomain: "hami-a7e39.firebaseapp.com",
    databaseURL: "https://hami-a7e39.firebaseio.com",
    projectId: "hami-a7e39",
    storageBucket: "hami-a7e39.appspot.com",
    messagingSenderId: "92310210926",
    appId: "1:92310210926:web:4bf75a8482aa17db7d197f",
};
var NotificationCode;
(function (NotificationCode) {
    NotificationCode[NotificationCode["NEW_MESSAGE"] = 0] = "NEW_MESSAGE";
    NotificationCode[NotificationCode["SESSION_UPDATE"] = 1] = "SESSION_UPDATE";
    NotificationCode[NotificationCode["INCOMING_CALL"] = 2] = "INCOMING_CALL";
    NotificationCode[NotificationCode["PAYMENT_CONFIRMED"] = 3] = "PAYMENT_CONFIRMED";
})(NotificationCode || (NotificationCode = {}));


/***/ }),

/***/ "OFPZ":
/*!************************************************************!*\
  !*** ./src/app/common/static/contact/contact.component.ts ***!
  \************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "sMNq");
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.scss */ "84Bo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ContactComponent = class ContactComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismiss() {
        this.modal.dismiss();
    }
    ngOnInit() { }
};
ContactComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ContactComponent);



/***/ }),

/***/ "OXsI":
/*!*****************************************************************************************!*\
  !*** ./src/app/common/session-list-item-minimal/session-list-item-minimal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SessionListItemMinimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListItemMinimalComponent", function() { return SessionListItemMinimalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_list_item_minimal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-list-item-minimal.component.html */ "m+j5");
/* harmony import */ var _session_list_item_minimal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-list-item-minimal.component.scss */ "jp0Q");
/* harmony import */ var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sessions-manager-service */ "qm69");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../session-info/session-info.component */ "YNR+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../models/user */ "2hxB");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/env.service */ "5zL6");
/* harmony import */ var src_app_models_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/session */ "m6xN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












let SessionListItemMinimalComponent = class SessionListItemMinimalComponent {
    constructor(env, modalController, sessionsManager, navController) {
        this.env = env;
        this.modalController = modalController;
        this.sessionsManager = sessionsManager;
        this.navController = navController;
        this.stateText = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getStateString;
        this.sessionType = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionType"];
        this.sessionTimingTypeText = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getTimingTypeString;
    }
    ngOnInit() {
        if (this.providerPerspective == true) {
            this.user = this.session.user;
            this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.user);
            this.avatarUrl = this.env.getPublicStorageUrl(this.session.user.avatar);
        }
        else {
            this.user = this.session.provider.user;
            this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.provider.user);
            this.avatarUrl = this.env.getPublicStorageUrl(this.session.provider.user.avatar);
        }
    }
    navigateToSession() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                this.presentSessionInfoModel().subscribe();
        }
    }
    presentSessionInfoModel() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.modalController.create({
            component: _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__["SessionInfoComponent"],
            componentProps: {
                session: this.session,
                providerPerspective: this.providerPerspective,
            },
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(modal.present());
        }));
    }
    getSessionDateTimeText() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "زمان شروع جلسه";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "زمان درخواست";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "زمان تأیید رزرو";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "زمان رد درخواست";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "زمان پایان جلسه";
        }
    }
    getSessionTime() {
        return this.env.dateStringToJalaliTime(this.session.created_at);
    }
    getSessionDate() {
        return this.env.dateStringToJalaliDate(this.session.created_at);
    }
    getClass() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "active";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "requested";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "reserved";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "rejected";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "ended";
        }
    }
};
SessionListItemMinimalComponent.ctorParameters = () => [
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
SessionListItemMinimalComponent.propDecorators = {
    session: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    providerPerspective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};
SessionListItemMinimalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-session-list-item-minimal",
        template: _raw_loader_session_list_item_minimal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_list_item_minimal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
], SessionListItemMinimalComponent);



/***/ }),

/***/ "OhPj":
/*!*************************************************************************!*\
  !*** ./src/app/common/session-list-item/session-list-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: SessionListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListItemComponent", function() { return SessionListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-list-item.component.html */ "TxdI");
/* harmony import */ var _session_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-list-item.component.scss */ "mW0d");
/* harmony import */ var _services_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/call.service */ "tCwg");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sessions-manager-service */ "qm69");
/* harmony import */ var _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../session-info/session-info.component */ "YNR+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../models/user */ "2hxB");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/env.service */ "5zL6");
/* harmony import */ var src_app_models_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/session */ "m6xN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












let SessionListItemComponent = class SessionListItemComponent {
    constructor(env, modalController, sessionsManager, alert, navController, callService) {
        this.env = env;
        this.modalController = modalController;
        this.sessionsManager = sessionsManager;
        this.alert = alert;
        this.navController = navController;
        this.callService = callService;
        this.minimal = false;
        this.sessionType = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionType"];
        this.sessionTimingTypeText = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getTimingTypeString;
    }
    ngOnInit() {
        if (this.providerPerspective == true) {
            this.user = this.session.user;
            this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.user);
            this.avatarUrl = this.env.getPublicStorageUrl(this.session.user.avatar);
        }
        else {
            this.user = this.session.provider.user;
            this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.provider.user);
            this.avatarUrl = this.env.getPublicStorageUrl(this.session.provider.user.avatar);
        }
    }
    isOnline() {
        return this.sessionsManager.isUserOnline(this.user);
    }
    navigateToSession() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                if (this.session.type == src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionType"].Call) {
                    this.call();
                }
                else {
                    if (this.providerPerspective) {
                        this.sessionsManager.pvdStartSessionChat(this.session);
                    }
                    else {
                        this.sessionsManager.usrStartSessionChat(this.session);
                    }
                }
                break;
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                this.openInfoModal();
        }
    }
    call() {
        let user;
        if (this.providerPerspective) {
            user = this.session.user;
        }
        else {
            user = this.session.provider.user;
        }
        this.callService.call(user, this.session.duration);
    }
    openInfoModal(ev = null) {
        if (ev) {
            ev.stopPropagation();
        }
        this.alert
            .presentModal(_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__["SessionInfoComponent"], {
            session: this.session,
            providerPerspective: this.providerPerspective,
        }, true)
            .subscribe();
    }
    getSessionDateTimeText() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "زمان شروع جلسه";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "زمان درخواست";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "زمان تأیید رزرو";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "زمان رد درخواست";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "زمان پایان جلسه";
        }
    }
    getSessionReservedTime() {
        return this.env.dateStringToJalaliTime(this.session.reserved_from);
    }
    getSessionReservedDate() {
        return this.env.dateStringToJalaliDate(this.session.reserved_from);
    }
    getSessionTime() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return this.env.dateStringToJalaliTime(this.session.started);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return this.env.dateStringToJalaliTime(this.session.created_at);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return this.env.dateStringToJalaliTime(this.session.accepted);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
            //return this.env.dateStringToJalaliTime(this.session.ended);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return this.env.dateStringToJalaliTime(this.session.ended);
        }
    }
    getSessionDate() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return this.env.dateStringToJalaliDate(this.session.started);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return this.env.dateStringToJalaliDate(this.session.created_at);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return this.env.dateStringToJalaliDate(this.session.accepted);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return this.env.dateStringToJalaliDate(this.session.ended);
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return this.env.dateStringToJalaliDate(this.session.ended);
        }
    }
    getClass() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "active";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "requested";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "reserved";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "rejected";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "ended";
        }
    }
    getUnreadMessages() {
        return this.sessionsManager.getSessionUnreadMessagesCount(this.session);
    }
    getSessionDurationText() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "مدت زمان درخواستی";
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "مدت زمان جلسه";
        }
    }
    getSessionDuration() {
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return this.session.duration;
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return this.sessionsManager.calculateSessionDuration(this.session);
        }
    }
    isActive() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].isActive(this.session);
    }
    isEnded() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].isEnded(this.session);
    }
    isReserved() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].isReserved(this.session);
    }
    getSessionTotalFee() {
        return this.sessionsManager.calculateSessionTotalFee(this.session);
    }
};
SessionListItemComponent.ctorParameters = () => [
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _services_call_service__WEBPACK_IMPORTED_MODULE_3__["CallService"] }
];
SessionListItemComponent.propDecorators = {
    session: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    providerPerspective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    minimal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};
SessionListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-session-list-item",
        template: _raw_loader_session_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _services_call_service__WEBPACK_IMPORTED_MODULE_3__["CallService"]])
], SessionListItemComponent);



/***/ }),

/***/ "OtR6":
/*!***********************************************************************!*\
  !*** ./src/app/common/remote-stats-box/remote-stats-box.component.ts ***!
  \***********************************************************************/
/*! exports provided: RemoteStatsBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStatsBoxComponent", function() { return RemoteStatsBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_remote_stats_box_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./remote-stats-box.component.html */ "MoGL");
/* harmony import */ var _remote_stats_box_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remote-stats-box.component.scss */ "DYp9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let RemoteStatsBoxComponent = class RemoteStatsBoxComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    navigate() {
        if (this.url) {
            this.navCtrl.navigateForward(this.url);
        }
    }
};
RemoteStatsBoxComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
RemoteStatsBoxComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    number: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
RemoteStatsBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-remote-stats-box",
        template: _raw_loader_remote_stats_box_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remote_stats_box_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], RemoteStatsBoxComponent);



/***/ }),

/***/ "QVeo":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/score/score.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>امتیاز دهید</ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <div class=\"action-container\">\n\n  \n  <div class=\"action-content d-flex flex-column align-items-center justify-content-center h-100\">\n    <label class=\"small-text light-text number-text\">\n    بر اساس ارزیابی خود از کیفیت جلسه از ۱ تا ۵ به مشاور خود امتیاز دهید.\n  </label>\n  <div class=\"stars-container d-flex ltr justify-content-center\">\n    <ion-icon class=\"star\"  [name]=\"(score >= number)?'star':'star-outline'\" *ngFor=\"let number of [1,2,3,4,5]\" (click)=\"setScore(number)\"></ion-icon>\n  </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"actions-wrapper\">\n      <app-submit-button [disabled]=\"score==null\"  text=\"ثبت امتیاز\" (submitted)=\"submit()\">\n\n      </app-submit-button>\n    </div>\n  </div>\n  \n</div>\n</ion-content>");

/***/ }),

/***/ "R/5v":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-icon/select-icon.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>انتخاب آیکون</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"text-center\">\n  <ion-button (click)=\"dismiss(icon)\" *ngFor=\"let icon of icons\" class=\"m-2 icon-button\">\n    <ion-icon class=\"icon\" [name]=\"icon\" ></ion-icon>\n  </ion-button>\n  \n  </ion-content>");

/***/ }),

/***/ "S0U/":
/*!***********************************************************************************!*\
  !*** ./src/app/common/remote-stats-container/remote-stats-container.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RemoteStatsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStatsContainerComponent", function() { return RemoteStatsContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_remote_stats_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./remote-stats-container.component.html */ "7Tm6");
/* harmony import */ var _remote_stats_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remote-stats-container.component.scss */ "Z9HY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RemoteStatsContainerComponent = class RemoteStatsContainerComponent {
    constructor() { }
    ngOnInit() { }
};
RemoteStatsContainerComponent.ctorParameters = () => [];
RemoteStatsContainerComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RemoteStatsContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-remote-stats-container',
        template: _raw_loader_remote_stats_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remote_stats_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RemoteStatsContainerComponent);



/***/ }),

/***/ "S3x2":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-list/session-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list *ngFor=\"let sessionList of sessionListArray\">\n  <div *ngIf=\"sessionList.title\" class=\"row\">\n    <div class=\"col-12 list-header\">\n      <span class=\"normal-text\">{{\n        sessionList.title + \" (\" + sessionList.count + \")\"\n      }}</span>\n    </div>\n  </div>\n  <div *ngIf=\"sessionList.count < 1\" class=\"d-flex justify-content-center shadow-item session-list-item\">\n    <ion-icon  name=\"ellipsis-horizontal-outline\"></ion-icon>\n  </div>\n  <app-session-list-item\n    [providerPerspective]=\"providerPerspective\"\n    [session]=\"session\"\n    *ngFor=\"let session of sessionList.sessions\"\n  >\n  </app-session-list-item>\n</ion-list>\n");

/***/ }),

/***/ "SUno":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-provider-category/select-provider-category.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>انتخاب زمینه مشاوره</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\"  >\n      <ion-list>\n        <ion-item\n          button\n          class=\"shadow-item\"\n          *ngFor=\"let group of providerGroups\"\n          (click)=\"selectCategory(group)\"\n        >\n         <ion-icon\n              slot=\"start\"\n              [name]=\"group.icon_name\"\n              class=\"category-icon large-text ml-2\"\n            ></ion-icon>\n            <span class=\"category-name\">\n              {{group.name}}\n            </span>\n          \n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"actions\">\n      \n      \n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "SdEw":
/*!***************************************************************************************!*\
  !*** ./src/app/common/random-provider-avatars/random-provider-avatars.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.random-avatars-container {\n  display: flex;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  justify-content: center;\n}\n.random-avatars-container .random-avatar-col {\n  display: inline;\n}\n.random-avatars-container .random-avatar-col.z-1 {\n  z-index: 4;\n}\n.random-avatars-container .random-avatar-col.z-1 .random-avatar {\n  height: 80px;\n  width: 80px;\n}\n.random-avatars-container .random-avatar-col.z-2 {\n  z-index: 3;\n}\n.random-avatars-container .random-avatar-col.z-2 .random-avatar {\n  height: 65px;\n  width: 65px;\n  opacity: 80%;\n}\n.random-avatars-container .random-avatar-col.z-3 {\n  z-index: 2;\n}\n.random-avatars-container .random-avatar-col.z-3 .random-avatar {\n  height: 52px;\n  width: 52px;\n  opacity: 60%;\n}\n.random-avatars-container .random-avatar-col.z-4 {\n  z-index: 1;\n}\n.random-avatars-container .random-avatar-col.z-4 .random-avatar {\n  height: 40px;\n  width: 40px;\n  opacity: 40%;\n}\n.random-avatars-container .random-avatar-col .random-avatar {\n  margin: 0 -10px;\n  box-shadow: 0px 0px 16px 1px #71bcc1;\n  -webkit-box-shadow: 0px 0px 16px 1px #71bcc1;\n  -moz-box-shadow: 0px 0px 16px 1px #71bcc1;\n  background-size: cover;\n  border-radius: 50px;\n  -webkit-border-radius: 50px;\n  -moz-border-radius: 50px;\n  --border-radius:$radius;\n  border: 1px solid #98d9e2;\n}\n.random-avatars-container .random-avatar-col .random-avatar.sk {\n  box-shadow: 0px 0px 0 0 transparent;\n  -webkit-box-shadow: 0px 0px 0 0 transparent;\n  -moz-box-shadow: 0px 0px 0 0 transparent;\n  border: none;\n  background-size: 750px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMvcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBQWhEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFrREY7QUFqREU7RUFDRSxlQUFBO0FBbURKO0FBbERJO0VBQ0ksVUFBQTtBQW9EUjtBQW5EUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBcURaO0FBakRNO0VBQ0ksVUFBQTtBQW1EVjtBQWxEUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW9EWjtBQWpETTtFQUNJLFVBQUE7QUFtRFY7QUFsRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFvRFo7QUFqRE07RUFDSSxVQUFBO0FBbURWO0FBbERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBb0RaO0FBakRJO0VBQ0ksZUFBQTtFQ1JQLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSx5Q0FBQTtFRFFLLHNCQUFBO0VDQUwsbUJEQzRCO0VDQTVCLDJCQUFBO0VBQ0csd0JERHlCO0VDRXpCLHVCQUFBO0VEREUseUJBQUE7QUF3RE47QUF2RE07RUNiTCxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RURjTyxZQUFBO0VBQ0Esc0JBQUE7QUEwRFIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMvcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb25cIjtcbi5yYW5kb20tYXZhdGFycy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAucmFuZG9tLWF2YXRhci1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAmLnotMSB7XG4gICAgICAgIHotaW5kZXg6IDQ7XG4gICAgICAgIC5yYW5kb20tYXZhdGFye1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgICAmLnotMiB7XG4gICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgLnJhbmRvbS1hdmF0YXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDgwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi56LTMge1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIC5yYW5kb20tYXZhdGFye1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgICBvcGFjaXR5OiA2MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuei00IHtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAucmFuZG9tLWF2YXRhcntcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogNDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgLnJhbmRvbS1hdmF0YXIge1xuICAgICAgICBtYXJnaW46MCAtMTBweDtcbiAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3ctZnVsbCgwcHgsIDBweCwgMTZweCwgMXB4LCAkcHJpbWFyeS1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1MHB4KTtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzk4ZDllMjtcbiAgICAgICYuc2tcbiAgICAgIHtcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdy1mdWxsKDBweCwgMHB4LCAwLCAwLCB0cmFuc3BhcmVudCk7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDc1MHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sessions-manager-service */ "qm69");
/* harmony import */ var _common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/change-password/change-password.component */ "kVPr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/deposit/deposit.component */ "wDsb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/provider.service */ "gs/X");
/* harmony import */ var _common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/static/contact/contact.component */ "OFPZ");
/* harmony import */ var _common_static_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/static/about/about.component */ "uI3J");
/* harmony import */ var _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/static/terms/terms.component */ "rywU");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/user */ "2hxB");
/* harmony import */ var _services_smart_audio_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/smart-audio.service */ "snxI");
/* harmony import */ var src_app_services_im_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/im.service */ "K4UH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/notification.service */ "OC8m");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! gsap/MorphSVGPlugin */ "Ci6W");
/* harmony import */ var gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/alert.service */ "3LUQ");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _services_shared_resources_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/shared-resources.service */ "6FpD");



























let AppComponent = class AppComponent {
    constructor(platform, statusBar, authService, navCtrl, sharedResourceService, alertService, menu, env, notifactions, imService, smartAudio, actionSheet, modalController, providerService, userService, notifService, sessionsManager) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.sharedResourceService = sharedResourceService;
        this.alertService = alertService;
        this.menu = menu;
        this.env = env;
        this.notifactions = notifactions;
        this.imService = imService;
        this.smartAudio = smartAudio;
        this.actionSheet = actionSheet;
        this.modalController = modalController;
        this.providerService = providerService;
        this.userService = userService;
        this.notifService = notifService;
        this.sessionsManager = sessionsManager;
        this.user = null;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
        this.getName = _models_user__WEBPACK_IMPORTED_MODULE_12__["User"].getName;
        this.activitySwitch = null;
        this.roleDetectedSubscription = null;
        this.splashing = true;
        this.role = null;
        this.splashCompleteCallback = this.splashCompleteCallback.bind(this);
        this.initializeApp();
        this.loadUserData();
        this.authService.loggedIn.subscribe((result) => {
            this.loadUserData();
        });
        this.authService.fetchedUser.subscribe((user) => {
            this.loadUserData();
        });
    }
    toggleActivitySwitch(toggle) {
        toggle.disabled = true;
        this.env.somethingIsPending("toggling provider activity switch");
        this.providerService
            .toggleActivitySwitch(!toggle.checked)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(false);
        }))
            .subscribe((result) => {
            this.env.somethingIsDonePending("toggling provider activity switch");
            toggle.disabled = false;
            if (!result) {
                toggle.checked = !toggle.checked;
            }
        });
    }
    loadUserData() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.authService.isAuthenticated())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(false);
        }))
            .subscribe((result) => {
            if (result) {
                this.authService.getUser().then((result) => {
                    this.user = result;
                    this.userService.balanceShared.request();
                    this.userSubject.next(result);
                });
            }
        });
        if (this.roleDetectedSubscription) {
            this.roleDetectedSubscription.unsubscribe();
        }
        this.roleDetectedSubscription = this.authService.roleDetected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .subscribe((roleId) => {
            this.authService.isAuthenticated().then((result) => {
                if (result) {
                    this.role = roleId;
                    if (this.role == this.env.PROVIDER_ROLE_ID) {
                        this.providerService
                            .getActivitySwitch()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(-1);
                        }))
                            .subscribe((result) => {
                            if (result != -1) {
                                this.activitySwitch = result;
                            }
                        });
                    }
                }
            });
        });
    }
    appPages() {
        let menuItems = [];
        if (this.role != null) {
            if (this.role == this.env.USER_ROLE_ID) {
                menuItems = [
                    {
                        title: "درخواست مشاوره",
                        url: "/provider-categories",
                        icon: "home-outline",
                    },
                    {
                        title: "مشاوره های من",
                        url: "/usr-reservations",
                        icon: "cart-outline",
                    },
                    {
                        title: "تاریخچه درخواست ها",
                        url: "/usr-request-log",
                        icon: "archive-outline",
                    },
                    {
                        title: "مشاورین نشان شده",
                        url: "/usr/favorites",
                        icon: "star-outline",
                    },
                    {
                        title: "تخفیف",
                        url: "/affiliate-code",
                        icon: "color-filter-outline",
                    },
                    {
                        title: "پرداخت ها",
                        url: `/user-payments/${this.user.id}`,
                        icon: 'receipt-outline'
                    }
                ];
            }
            else if (this.role == this.env.PROVIDER_ROLE_ID) {
                menuItems = [
                    {
                        title: "مشاوره های من",
                        url: "/pvd-reservations",
                        icon: "home-outline",
                    },
                    {
                        title: "درخواست های جدید",
                        url: "/pvd-active-requests",
                        icon: "home-outline",
                        badge_value: this.sessionsManager.myActiveRequestsShared.resource()
                            .length,
                        badge_condition: this.sessionsManager.myActiveRequestsShared.resource() &&
                            this.sessionsManager.myActiveRequestsShared.resource().length > 0,
                    },
                    {
                        title: "ساعات کاری",
                        url: "/pvd-manage-available-hours",
                        icon: "calendar-outline",
                    },
                    {
                        title: "گزارش درآمد",
                        url: "/pvd-income-report",
                        icon: "calculator-outline",
                    },
                    {
                        title: "تاریخچه درخواست ها",
                        url: "/pvd-request-log",
                        icon: "archive-outline",
                    },
                    {
                        title: "پروفایل",
                        url: "/profile",
                        icon: "person-outline",
                    },
                ];
            }
            else if (this.role == this.env.ADMIN_ROLE_ID) {
                menuItems = [
                    {
                        title: "داشبورد",
                        url: "/adm-dashboard",
                        icon: "home-outline",
                    },
                    {
                        title: "کاربران",
                        url: "/adm-users",
                        icon: "people-outline",
                    },
                    {
                        title: "مشاورین",
                        url: "/adm-providers",
                        icon: "list-outline",
                    },
                    {
                        title: "پروفایل",
                        url: "/profile",
                        icon: "person-outline",
                    },
                ];
            }
        }
        return menuItems;
    }
    ionViewWillEnter() { }
    ngOnInit() {
        if (!this.env.SPLASH_ENABLED) {
            this.splashing = false;
        }
    }
    profile() {
        if (this.user && this.user.role_id != this.env.USER_ROLE_ID) {
            this.navCtrl.navigateRoot(["/profile"]);
            this.menu.close();
        }
    }
    animateSplash() {
        if (!this.env.SPLASH_ENABLED) {
            this.splashing = false;
            return;
        }
        let animation = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Observable"]((observer) => {
            //gsap.registerPlugin(DrawSVGPlugin);
            const anim = new gsap__WEBPACK_IMPORTED_MODULE_24__["TimelineMax"]();
            gsap__WEBPACK_IMPORTED_MODULE_24__["gsap"].registerPlugin(gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19__["MorphSVGPlugin"]);
            var shapes = ".hands-svg";
            var tl = gsap__WEBPACK_IMPORTED_MODULE_24__["gsap"].timeline();
            anim.to("#frown-svg", {
                morphSVG: "#smile-svg",
                y: 0,
                duration: 2,
                ease: "power4.inOut",
            }, 1);
            anim.to(".eyes", { y: 0, ease: "bounce", duration: 1, stagger: 0.1 }, 3);
            anim.to("#right-hand-svg", { opacity: 1, x: 10, y: 10, duration: 4, ease: "expo.out" }, 3);
            anim.to("#left-hand-svg", { opacity: 1, x: -10, y: 10, duration: 4, ease: "expo.out" }, 3);
            anim
                .to("#left-eye", { attr: { ry: 1 }, duration: 0.2, ease: "power4.in" }, 5)
                .to("#left-eye", { attr: { ry: 15.5 }, ease: "power4.out", duration: 0.2 }, 5.3);
            anim.to(".splash-svg", {
                opacity: 0,
                scale: 0.2,
                duration: 0.7,
                ease: "elastic.in(1, 1)",
                onComplete: this.splashCompleteCallback,
                onCompleteParams: [observer],
            }, 6);
            //anim.fromTo("#right-hand-svg", {opacity:0, x:100, y:100}, {opacity:1, x:0, y:0, duration:2},0)
        });
        animation.subscribe(null, null, () => {
            console.log("splash complete");
        });
    }
    splashCompleteCallback(toNext) {
        this.splashing = false;
        toNext.next();
        toNext.complete();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
        });
        this.smartAudio.preload("beep1", "assets/audio/beep1.mp3");
        this.smartAudio.preload("ringback-tone", "assets/audio/ringback-tone.ogg");
        this.smartAudio.preload("ringing", "assets/audio/ringing.mp3");
    }
    loadTermsPage() {
        this.loadStaticPage(_common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_11__["TermsComponent"], { providerPerspective: (this.role == this.env.PROVIDER_ROLE_ID) ? true : false }).subscribe();
    }
    loadChangePassword() {
        this.alertService
            .presentModal(_common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe();
    }
    loadQuestionAnswerPage() {
        this.navCtrl.navigateRoot(['/questions-and-answers', this.role, this.user.id]);
        this.menu.close();
    }
    loadAffiliatePage() {
        this.navCtrl.navigateRoot(['/affiliate-code']);
        this.menu.close();
    }
    loadAboutPage() {
        this.loadStaticPage(_common_static_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]).subscribe();
    }
    loadContactPage() {
        this.loadStaticPage(_common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]).subscribe();
    }
    loadStaticPage(component, props = null) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.modalController.create({
            component: component,
            componentProps: props,
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.present());
        }));
    }
    logout() {
        this.authService.logout();
        this.alertService.presentSuccess("از حساب کاربری خود خارج شده اید.");
        this.navCtrl.navigateRoot("/login");
    }
    initiateLogout() {
        this.presentLogoutConfirmation().subscribe();
    }
    presentLogoutConfirmation() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.actionSheet.create({
            mode: "ios",
            buttons: [
                {
                    text: "خروج",
                    role: "destructive",
                    handler: () => {
                        this.logout();
                    },
                },
                {
                    text: "انصراف",
                    role: "cancel",
                    handler: () => { },
                },
            ],
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.present());
        }));
    }
    openAddCredit() {
        this.presentDepositModal().subscribe();
    }
    presentDepositModal() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.modalController.create({
            component: _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"],
            componentProps: {},
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.present());
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__["StatusBar"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["NavController"] },
    { type: _services_shared_resources_service__WEBPACK_IMPORTED_MODULE_25__["SharedResourcesService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_23__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["MenuController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_17__["EnvService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] },
    { type: src_app_services_im_service__WEBPACK_IMPORTED_MODULE_14__["IMService"] },
    { type: _services_smart_audio_service__WEBPACK_IMPORTED_MODULE_13__["SmartAudioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ModalController"] },
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] },
    { type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_18__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_20__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__["StatusBar"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["NavController"],
        _services_shared_resources_service__WEBPACK_IMPORTED_MODULE_25__["SharedResourcesService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_23__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["MenuController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_17__["EnvService"],
        _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"],
        src_app_services_im_service__WEBPACK_IMPORTED_MODULE_14__["IMService"],
        _services_smart_audio_service__WEBPACK_IMPORTED_MODULE_13__["SmartAudioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ModalController"],
        _services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"],
        src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]])
], AppComponent);



/***/ }),

/***/ "SyN7":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-avatar/user-avatar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"avatar-container\">\n  <ion-avatar #avatar [ngClass]=\"(this.hasAvatar && !justContainer)?'':'d-none'\" >\n  \n</ion-avatar>\n<div *ngIf=\"!this.hasAvatar && !justContainer\" >\n  <svg class=\"alt-avatar\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 512 512\"><path d=\"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z\"></path><path d=\"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z\"></path></svg>\n</div>\n</div>\n");

/***/ }),

/***/ "TFAd":
/*!*****************************************************************!*\
  !*** ./src/app/common/session-list/session-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWxpc3Qvc2Vzc2lvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "TxdI":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-list-item/session-list-item.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item\n  class=\"shadow-item session-list-item\"\n  (click)=\"navigateToSession()\"\n  [ngClass]=\"getClass()\"\n  button\n  detail=\"false\"\n>\n  <div class=\"d-flex flex-column justify-content-center my-3 h-100 w-100\">\n    <div class=\"d-flex align-items-center justify-content-between\">\n      <div class=\"d-flex align-items-center\">\n        <app-user-avatar [user]=\"user\"> </app-user-avatar>\n        <ion-icon\n          *ngIf=\"false && isActive()\"\n          slot=\"end\"\n          [ngClass]=\"isOnline() ? 'online' : ''\"\n          class=\"online-status ml-2\"\n          name=\"ellipse\"\n        ></ion-icon>\n        <span class=\"peer-name number-text normal-text dark-text d-flex align-items-center\">\n          {{ peerName }}\n        </span>\n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\" session.type == sessionType.TEXT\"\n          name=\"chatbubbles-outline\"\n        ></ion-icon>\n        \n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\" session.type == sessionType.Call\"\n          name=\"call-outline\"\n        ></ion-icon>\n        \n      </div>\n\n      <div class=\"d-flex align-items-center\">\n        \n        <span class=\"session-info-tag ml-1 session-timing-type-text xsmall-text\">\n          {{ sessionTimingTypeText(session) }}\n        </span>\n        <ion-badge\n          *ngIf=\"getUnreadMessages() > 0 && isActive()\"\n          slot=\"end\"\n          color=\"primary\"\n          mode=\"ios\"\n          slot=\"end\"\n          class=\"unread-count-badge\"\n          >{{ getUnreadMessages() }}</ion-badge\n        >\n        <ion-button *ngIf=\"isActive()\" (click)=\"openInfoModal($event)\" class=\"icon-button session-info-icon-button mr-1\">\n          <ion-icon slot=\"icon-only\" name=\"settings-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"session-info-summary\" *ngIf=\"isEnded() || isActive()\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"ml-3 light-text small-text\">{{\n          getSessionDateTimeText()\n        }}</span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"time-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionTime() }}</span\n            >\n          </div>\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"calendar-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionDate() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"session-info-summary\" *ngIf=\"isReserved()\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"ml-3 light-text small-text\">\n          درخواست رزرو برای\n        </span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"time-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionReservedTime() }}</span\n            >\n          </div>\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"calendar-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionReservedDate() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"session-info-summary\" *ngIf=\"true || isActive() || isEnded()\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"light-text ml-3 small-text\">\n          {{ getSessionDurationText() }}\n        </span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"hourglass-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionDuration() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"session-info-summary\" *ngIf=\" isActive() || isEnded() || !providerPerspective\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"light-text ml-3 small-text\">\n          هزینه\n        </span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"cash-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionTotalFee() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-item>\n");

/***/ }),

/***/ "VOgj":
/*!*****************************************************************!*\
  !*** ./src/app/common/submit-button/submit-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: SubmitButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonComponent", function() { return SubmitButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_submit_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./submit-button.component.html */ "HeTM");
/* harmony import */ var _submit_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit-button.component.scss */ "XO9+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SubmitButtonComponent = class SubmitButtonComponent {
    constructor() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    submit() {
        this.submitted.emit();
    }
    ngOnInit() { }
};
SubmitButtonComponent.ctorParameters = () => [];
SubmitButtonComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    isWaiting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isInlineAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SubmitButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-submit-button',
        template: _raw_loader_submit_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_submit_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SubmitButtonComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app class=\"container-fluid\" [ngClass]=\"(splashing)?'splash-container':''\">\n  <svg *ngIf=\"splashing\" (load)=\"animateSplash()\" class=\"splash-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"226\" viewBox=\"-22 10 360 226\">\n  \n    \n    <path id=\"right-hand-svg\" class=\"cls-1 hands-svg\" d=\"M311,29v84s1.932,22.067-15,39-67,67-67,67-15.729,16.819-26-3-12-25-12-25-8.758-19.875,8-36,65-59,65-59,10.171-4.829,16,1,3.116,13.884,0,17l-25,25s-6.754,8.478-1,9,6.659,0.86,15-7,20.223-19.195,23-25,7.989-12.574-6-28c-2.364-2.67-4-3.379-4-8V29s-1.243-14,14-14S311,29,311,29Z\"/>\n    <path id=\"left-hand-svg\" data-name=\"Shape 1 copy\" class=\"hands-svg cls-1\" d=\"M0.062,29.023V113.16s-1.927,22.1,14.958,39.064l66.812,67.109s15.685,16.847,25.927-3,11.966-25.041,11.966-25.041,8.734-19.908-7.977-36.059-64.818-59.1-64.818-59.1-10.142-4.837-15.955,1-3.107,13.907,0,17.027L55.905,139.2s6.735,8.492,1,9.015-6.64.862-14.958-7.011-20.166-19.227-22.935-25.041-7.966-12.6,5.983-28.046c2.357-2.675,3.989-3.384,3.989-8.013V29.023S30.22,15,15.02,15,0.062,29.023.062,29.023Z\"/>\n    <path  class=\"cls-1 lips-svg\" id=\"smile-svg\" d=\"M69,57s61.17,55.412,127,26c22.912-11.322,26.259-17.465,37-30s23-6,23-6,13.678,1.263,0,19-27.663,34.519-53,43-57.715,8.871-89-4C80.052,91.265,57.362,65.537,54,61s-5.888-8.437-3-11S57.626,46.89,69,57Z\"/>\n    <path class=\"lips-svg\" id=\"frown-svg\" d=\"M69.219,103.245S130.29,47.659,196.013,77.163c22.875,11.358,26.217,17.519,36.94,30.094s22.963,6.019,22.963,6.019,13.656-1.267,0-19.06S228.3,59.589,203,51.082s-57.621-8.9-88.856,4.013C80.253,68.873,57.6,94.681,54.243,99.232s-5.878,8.463-3,11.034S57.864,113.386,69.219,103.245Z\"/>\n\n    \n    <ellipse id=\"left-eye\" class=\"eyes\" cx=\"137.5\" cy=\"15.5\" rx=\"15.5\" ry=\"15.5\" />\n    <circle id=\"right-eye\" data-name=\"Ellipse 1 copy\" class=\"cls-2 eyes\" cx=\"175.5\" cy=\"15.5\" r=\"15.5\"/>\n    </svg>\n    \n  <ion-menu *ngIf=\"!splashing\" contentId=\"main-content\" type=\"overlay\" side=\"end\">\n    <div class=\"d-flex flex-column h-100 menu-content\">\n      <div class=\"flex-column align-items-center d-flex mt-4\">\n        <a (click)=\"profile()\" class=\"flex-column align-items-center d-flex\">\n          <app-user-avatar\n            class=\"large-sized avatar\"\n            [userObservable]=\"userSubject\"\n          ></app-user-avatar>\n          <span *ngIf=\"user\" class=\"normal-text number-text light-text mt-2\">\n            {{\n              user.role_id == this.env.USER_ROLE_ID ? user.phone : getName(user)\n            }}\n          </span>\n        </a>\n        <div\n          class=\"credit-container w-100 d-flex align-items-center mt-3 justify-content-around\"\n          *ngIf=\"\n            role &&\n            this.userService.balanceShared.resource() != null &&\n            role == this.env.USER_ROLE_ID\n          \"\n        >\n          <div class=\"d-flex align-items-center justify-content-center\">\n            <span class=\"small-text ml-2 light-text\"> اعتبار:</span>\n            <span class=\"credit-number normal-text primary-text number-text ltr\"\n              >{{ this.userService.balanceShared.resource().spendable }}\n            </span>\n            <span class=\"small-text mr-1 light-text\">تومان</span>\n          </div>\n          <ion-button\n            fill=\"clear\"\n            class=\"small-text\"\n            size=\"small\"\n            (click)=\"openAddCredit()\"\n          >\n            <ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n            افزایش اعتبار\n          </ion-button>\n        </div>\n        <div\n          class=\"d-flex align-items-center mt-2 justify-content-center\"\n          *ngIf=\"role && role == this.env.PROVIDER_ROLE_ID\"\n        >\n          <span class=\"small-text light-text\">فعال</span>\n          <ion-toggle\n            [disabled]=\"activitySwitch == null\"\n            [(ngModel)]=\"activitySwitch\"\n            #activityToggle\n            (click)=\"toggleActivitySwitch(activityToggle)\"\n          ></ion-toggle>\n          <span class=\"small-text light-text\">غیرفعال</span>\n        </div>\n      </div>\n\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let p of this.appPages()\">\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label class=\"normal-text\">\n              {{ p.title }}\n            </ion-label>\n            <ion-badge color=\"primary\" mode=\"ios\" *ngIf=\"p.badge_value && p.badge_condition\">{{p.badge_value}}</ion-badge>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-item button (click)=\"loadQuestionAnswerPage()\">\n          <ion-icon slot=\"start\" name=\"help-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            پرسش و پاسخ\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadChangePassword()\">\n          <ion-icon slot=\"start\" name=\"finger-print-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            تغییر گذرواژه\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadTermsPage()\">\n          <ion-icon slot=\"start\" name=\"trail-sign-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            قوانین و مقررات\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadAboutPage()\">\n          <ion-icon slot=\"start\" name=\"information-circle-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            درباره حامی لاین\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadContactPage()\">\n          <ion-icon slot=\"start\" name=\"at-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            ارتباط با ما\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"initiateLogout()\">\n          <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            خروج\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-menu>\n  <ion-router-outlet\n    *ngIf=\"!splashing\"\n    id=\"main-content\"\n    class=\"content\"\n  ></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WIZs":
/*!*************************************************************!*\
  !*** ./src/app/common/user-avatar/user-avatar.component.ts ***!
  \*************************************************************/
/*! exports provided: UserAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function() { return UserAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-avatar.component.html */ "SyN7");
/* harmony import */ var _user_avatar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-avatar.component.scss */ "+PLf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../models/user */ "2hxB");








let UserAvatarComponent = class UserAvatarComponent {
    constructor(env, changeDetection) {
        this.env = env;
        this.changeDetection = changeDetection;
        this.hasAvatar = false;
        this.justContainer = false;
    }
    ngOnInit() {
        this.img = new Image();
        if (this.userObservable != null) {
            this.userObservable.subscribe(user => {
                this.loadImage(user.avatar_thumbnail);
            });
        }
    }
    ngAfterViewInit() {
        if (this.user != null) {
            let avatarUrl = this.user.avatar_thumbnail;
            if (avatarUrl != null) {
                this.loadImage(avatarUrl);
            }
        }
    }
    ngOnDestroy() {
        if (this.userObservable != null) {
            this.userObservable.unsubscribe();
        }
    }
    loadImage(avatarUrl) {
        this.img.src = this.env.getPublicStorageUrl(avatarUrl);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.img, "load").subscribe((result) => {
            this.avatar.nativeElement.appendChild(this.img);
            this.hasAvatar = true;
            //this.changeDetection.detectChanges()
        });
    }
};
UserAvatarComponent.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
UserAvatarComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userObservable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    justContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['avatar', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
UserAvatarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-user-avatar",
        template: _raw_loader_user_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_avatar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], UserAvatarComponent);



/***/ }),

/***/ "X9GW":
/*!**************************************!*\
  !*** ./src/app/models/file-model.ts ***!
  \**************************************/
/*! exports provided: FileModel, FileFetchStatus, AudioPlaybackState, FileUploadStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFetchStatus", function() { return FileFetchStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlaybackState", function() { return AudioPlaybackState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadStatus", function() { return FileUploadStatus; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class FileModel {
    constructor() {
        this.upload_progress = 0;
        this.fetch_progress = 0;
        this.ownerMessage = null;
        this.img_src = null;
        this.audio_src = null;
        this.audio_playback_state = AudioPlaybackState.NOT_PLAYED;
        this.fetchOnSrcRequest = false;
        this.fetchCallback = null;
        this.fetchObject = null;
        this.fetchedSuccessfully = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.audioPlayBackProgress = 0;
    }
    imgSrcRequest() {
        this.prepareSelfFetch();
        return this.img_src;
    }
    audioSrcRequest() {
        this.prepareSelfFetch();
        return this.audio_src;
    }
    prepareSelfFetch() {
        if (this.fetchOnSrcRequest &&
            this.fetchCallback != null &&
            this.fetchObject != null &&
            this.fetch_status ==
                FileFetchStatus.FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST &&
            this.ownerMessage != null) {
            this.fetchCallback = this.fetchCallback.bind(this.fetchObject);
            this.fetch();
        }
    }
    emmitFileProgressHappend() {
        if (this.ownerMessage != null && this.ownerMessage.NotifyDirtySubject != null) {
            this.ownerMessage.notifyDirty();
        }
    }
    setupAudioListeners() {
        if (this.audio_playback_state == AudioPlaybackState.WAITING_LOAD) {
            this.fetchedSuccessfully.subscribe(result => {
                this.audio_element.src = this.audioSrcRequest();
                this.audio_element.play();
            });
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.audio_element, 'pause').subscribe(event => {
            if (this.audio_element.ended) {
                this.audio_playback_state = AudioPlaybackState.ENDED;
            }
            else {
                this.audio_playback_state = AudioPlaybackState.PAUSED;
            }
            this.ownerMessage.notifyDirty();
            this.stopSendingAudioPlaybackProgress();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.audio_element, 'play').subscribe(event => {
            this.audio_playback_state = AudioPlaybackState.PLAYING;
            this.ownerMessage.notifyDirty();
            this.startSendingAudioPlaybackProgress();
        });
    }
    startSendingAudioPlaybackProgress() {
        this.audioPlayBackProgressIntervalHandle = setInterval(() => {
            let duration = this.audio_element.duration;
            if (duration == Infinity) {
                duration = this.size / 6000;
            }
            this.audioPlayBackProgress = this.audio_element.currentTime / duration;
            this.ownerMessage.notifyDirty();
        }, 50);
    }
    stopSendingAudioPlaybackProgress() {
        clearInterval(this.audioPlayBackProgressIntervalHandle);
    }
    togglePlayAudio() {
        switch (this.audio_playback_state) {
            case AudioPlaybackState.NOT_PLAYED:
                this.audio_element = new Audio();
                if (this.fetch_status == FileFetchStatus.FILE_FETCH_STATUS_SUCCESS) {
                    this.audio_element.src = this.audioSrcRequest();
                    this.audio_element.play();
                }
                else {
                    this.audioSrcRequest();
                    this.audio_playback_state = AudioPlaybackState.WAITING_LOAD;
                    this.ownerMessage.notifyDirty();
                }
                this.setupAudioListeners();
                break;
            case AudioPlaybackState.PAUSED:
                this.audio_element.play();
                break;
            case AudioPlaybackState.ENDED:
                this.audio_element.play();
                break;
            case AudioPlaybackState.PLAYING:
                this.audio_element.pause();
                break;
        }
    }
    isPortrait() {
        if (this.width < this.height) {
            return true;
        }
        return false;
    }
    fetch() {
        this.fetch_status = FileFetchStatus.FILE_FETCH_STATUS_FETCHING;
        this.fetchCallback(this.ownerMessage).subscribe(output => {
            Object.assign(this, output);
            this.fetch_status = FileFetchStatus.FILE_FETCH_STATUS_SUCCESS;
            this.fetchedSuccessfully.next(this);
            this.fetchedSuccessfully.complete();
        });
    }
}
var FileFetchStatus;
(function (FileFetchStatus) {
    FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_FETCHING"] = 1] = "FILE_FETCH_STATUS_FETCHING";
    FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_SUCCESS"] = 0] = "FILE_FETCH_STATUS_SUCCESS";
    FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_FAILED"] = 2] = "FILE_FETCH_STATUS_FAILED";
    FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST"] = 4] = "FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST";
})(FileFetchStatus || (FileFetchStatus = {}));
var AudioPlaybackState;
(function (AudioPlaybackState) {
    AudioPlaybackState[AudioPlaybackState["NOT_PLAYED"] = 0] = "NOT_PLAYED";
    AudioPlaybackState[AudioPlaybackState["PLAYING"] = 1] = "PLAYING";
    AudioPlaybackState[AudioPlaybackState["PAUSED"] = 2] = "PAUSED";
    AudioPlaybackState[AudioPlaybackState["ENDED"] = 3] = "ENDED";
    AudioPlaybackState[AudioPlaybackState["WAITING_LOAD"] = 4] = "WAITING_LOAD";
})(AudioPlaybackState || (AudioPlaybackState = {}));
var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus[FileUploadStatus["FILE_UPLOAD_STATUS_UPLOADING"] = 1] = "FILE_UPLOAD_STATUS_UPLOADING";
    FileUploadStatus[FileUploadStatus["FILE_UPLOAD_STATUS_SUCCESS"] = 0] = "FILE_UPLOAD_STATUS_SUCCESS";
    FileUploadStatus[FileUploadStatus["FILE_UPLOAD_STATUS_FAIL"] = 2] = "FILE_UPLOAD_STATUS_FAIL"; //
})(FileUploadStatus || (FileUploadStatus = {}));


/***/ }),

/***/ "XO9+":
/*!*******************************************************************!*\
  !*** ./src/app/common/submit-button/submit-button.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdWJtaXQtYnV0dG9uL3N1Ym1pdC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Xzsu":
/*!***************************************************************!*\
  !*** ./src/app/common/date-picker/date-picker.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Y+EJ":
/*!*************************************************!*\
  !*** ./src/app/services/file-helper.service.ts ***!
  \*************************************************/
/*! exports provided: FileHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHelperService", function() { return FileHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");











let FileHelperService = class FileHelperService {
    constructor(http, env, androidPermissions, platform, auth) {
        this.http = http;
        this.env = env;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.auth = auth;
        this.imageMimeTypes = ["image/jpeg", "image/gif", "image/png", "image/svg", "image/svg+xml"];
        this.audioMimeTypes = ["audio/webm"];
    }
    uploadImage(image) {
        return this.uploadToServer(image);
    }
    uploadUserAvatar(image) {
        return this.uploadAvatarToServer(image);
    }
    processImageProperties(image) {
        image.name = this.getFileName(image.content);
        return this.getMimeType(image, this.imageMimeTypes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(result => {
            image.mime_type = result;
            image.img_src = URL.createObjectURL(image.content);
            return this.getImageDimensions(image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
    }
    downloadImage(image) {
        return this.downloadFromServer(image, 'files/downloadMessageFile/');
    }
    downloadAudio(audio) {
        return this.downloadFromServer(audio, 'files/downloadMessageFile/');
    }
    downloadVerificationDocument(file) {
        return this.downloadFromServer(file, 'providers/downloadVerificationDocument/', 'image/jpeg');
    }
    getFileName(file) {
        return file.name;
    }
    uploadAudio(audio) {
        return this.uploadToServer(audio);
    }
    getImageDimensions(image) {
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = image.img_src;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(img, "load").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(event => {
            let e = event.target;
            image.height = e.height;
            image.width = e.width;
            return image;
        }));
    }
    getMimeType(file, allowedMimeTypes) {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](observer => {
            var reader = new FileReader();
            reader.onload = (event) => {
                var parts = event.target.result.split(",");
                var mimeTemp = /^data:(image\/[-+a-z0-9.]+);base64/.exec(parts[0]);
                var mime = null;
                if (mimeTemp && mimeTemp.length > 1) {
                    mime = mimeTemp[1];
                }
                if (allowedMimeTypes.includes(mime)) {
                    observer.next(mime);
                    observer.complete();
                }
                else {
                    observer.error("error");
                }
            };
            reader.readAsDataURL(file.content);
        });
        return observable;
    }
    uploadToServer(file) {
        let url = "files/uploadMessageFile";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(token => {
            let formData = new FormData();
            formData.append("file", file.content, file.name);
            return this.http
                .post(this.env.API_URL + url, formData, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                },
                reportProgress: true,
                observe: 'events'
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return this.getEventMessage(result, file);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return result.body;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
    }
    uploadVerifciationDocument(file, title) {
        let url = "providers/uploadVerificationDocument";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(token => {
            let formData = new FormData();
            formData.append("file", file.content, file.name);
            formData.append('title', title);
            return this.http
                .post(this.env.API_URL + url, formData, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                },
                reportProgress: true,
                observe: 'events'
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return this.getEventMessage(result, file);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return result.body;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
    }
    uploadAvatarToServer(file) {
        let url = "files/uploadAvatar";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(token => {
            let formData = new FormData();
            formData.append("file", file.content, file.name);
            return this.http
                .post(this.env.API_URL + url, formData, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                },
                reportProgress: true,
                observe: 'events'
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return this.getEventMessage(result, file);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return result.body;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
    }
    isImageMime(mime) {
        return this.imageMimeTypes.includes(mime);
    }
    isAudioMime(mime) {
        return this.audioMimeTypes.includes(mime);
    }
    downloadFromServer(file, url, mime = null) {
        let mimeType = mime;
        if (mimeType == null) {
            mimeType = file.mime_type;
        }
        url = url + file.name;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(token => {
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: mimeType,
                    "Content-Type": mimeType
                },
                reportProgress: true,
                observe: 'events',
                responseType: "blob"
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return this.getEventMessage(result, file);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
                return result.body;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
    }
    getEventMessage(event, file) {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            file.upload_progress = percentDone;
            file.emmitFileProgressHappend();
        }
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            file.fetch_progress = percentDone;
            file.emmitFileProgressHappend();
        }
        return event;
    }
    checkPermission() {
        if (this.platform.is("cordova")) {
            return this.androidPermissions
                .checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
                .then((result) => {
                if (result.hasPermission) {
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        return Promise.resolve(true);
    }
    askPermission() {
        return this.androidPermissions
            .requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
            .then((result) => {
            if (result.hasPermission) {
                return true;
            }
            return false;
        });
    }
};
FileHelperService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
FileHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])({
        providedIn: "root"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], FileHelperService);



/***/ }),

/***/ "YNR+":
/*!***************************************************************!*\
  !*** ./src/app/common/session-info/session-info.component.ts ***!
  \***************************************************************/
/*! exports provided: SessionInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionInfoComponent", function() { return SessionInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-info.component.html */ "kWjE");
/* harmony import */ var _session_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-info.component.scss */ "cM+S");
/* harmony import */ var src_app_models_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/session */ "m6xN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/alert.service */ "3LUQ");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../models/user */ "2hxB");
/* harmony import */ var _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/sessions-manager-service */ "qm69");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/env.service */ "5zL6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













let SessionInfoComponent = class SessionInfoComponent {
    constructor(modal, env, sessionsManager, alert, nav, modalController) {
        this.modal = modal;
        this.env = env;
        this.sessionsManager = sessionsManager;
        this.alert = alert;
        this.nav = nav;
        this.modalController = modalController;
        this.openedFromSessionChat = false;
        this.sessionTypeEnum = src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["SessionType"];
        this.user = null;
        this.waiting = false;
    }
    ngOnInit() {
        if (this.providerPerspective) {
            this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].getName(this.session.user);
            this.user = this.session.user;
            this.avatarUrl = this.env.getPublicStorageUrl(this.session.user.avatar);
        }
        else {
            this.user = this.session.provider.user;
            this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].getName(this.session.provider.user);
            this.avatarUrl = this.env.getPublicStorageUrl(this.session.provider.user.avatar);
        }
    }
    getSessionState() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].getStateString(this.session);
    }
    getSessionTimingType() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].getTimingTypeString(this.session);
    }
    dismiss() {
        this.modal.dismiss();
    }
    getSessionTime(when) {
        switch (when) {
            case "started":
                return this.env.dateStringToJalaliTime(this.session.started);
            case "created":
                return this.env.dateStringToJalaliTime(this.session.created_at);
            case "accepted":
                return this.env.dateStringToJalaliTime(this.session.accepted);
            case "rejected":
            case "ended":
                return this.env.dateStringToJalaliTime(this.session.ended);
            case "requested":
                return this.env.dateStringToJalaliTime(this.session.reserved_from);
            case "requestedTo":
                return this.env.dateStringToJalaliTime(this.session.reserved_to);
        }
    }
    getSessionDate(when) {
        switch (when) {
            case "started":
                return this.env.dateStringToJalaliDate(this.session.started);
            case "created":
                return this.env.dateStringToJalaliDate(this.session.created_at);
            case "accepted":
                return this.env.dateStringToJalaliDate(this.session.accepted);
            case "rejected":
            case "ended":
                return this.env.dateStringToJalaliDate(this.session.ended);
            case "requested":
                return this.env.dateStringToJalaliDate(this.session.reserved_from);
            case "requestedTo":
                return this.env.dateStringToJalaliDate(this.session.reserved_to);
        }
    }
    isMock() {
        return this.session.mock_session;
    }
    isRequested() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isRequested(this.session);
    }
    isReserved() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isReserved(this.session);
    }
    isActive() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isActive(this.session);
    }
    isEnded() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isEnded(this.session);
    }
    isRejected() {
        return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isRejected(this.session);
    }
    accept() {
        this.sessionsManager
            .acceptSession(this.session)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.alert.presentError("عملیات با مشکل روبرو شد.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(-1);
        }))
            .subscribe((result) => {
            if (result != -1) {
                if (this.session.timing_type == src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["SessionTimingType"].IMMEDIATE) {
                    this.nav.navigateRoot(['/pvd-reservations']);
                }
                this.alert.presentSuccess("درخواست رزرو تأیید شد.");
            }
            this.dismiss();
        });
    }
    reject() {
        this.sessionsManager
            .rejectSession(this.session)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.alert.presentError("عملیات با مشکل روبرو شد.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }))
            .subscribe((result) => {
            if (result != null) {
                this.alert.presentSuccess("درخواست رزرو رد شد.");
            }
            this.dismiss();
        });
    }
    start() {
        this.sessionsManager
            .startSession(this.session)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.alert.presentError("عملیات با مشکل روبرو شد.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }))
            .subscribe((result) => {
            if (result != null) {
                this.alert.presentSuccess("جلسه شروع شد.");
            }
            this.dismiss();
        });
    }
    end() {
        this.sessionsManager
            .rejectSession(this.session)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.alert.presentError("عملیات با مشکل روبرو شد.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }))
            .subscribe((result) => {
            if (result != null) {
                this.alert.presentSuccess("جلسه پایان یافت.");
            }
            this.dismiss();
        });
    }
    request() {
        this.waiting = true;
        this.sessionsManager
            .chechRequestEligibility(this.session.provider.id, this.session.reserved_from, this.session.reserved_to, this.session.duration, this.session.type, this.session.timing_type)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            this.alert.presentError(this.env.serverErrorMessage(error.error['error_code']));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(-1);
        }))
            .subscribe((result) => {
            if (result != -1) {
                this.sessionsManager
                    .usrRequestSession(this.session.provider.id, this.session.reserved_from, this.session.reserved_to, this.session.duration, this.session.type, this.session.timing_type)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(-1);
                }))
                    .subscribe((result) => {
                    this.waiting = false;
                    if (result == -1) {
                        this.alert.presentError("درخواست جلسه مشاوره با مشکل روبرو شد.");
                    }
                    else if (result != null) {
                        this.alert.presentSuccess("درخواست جلسه مشاوره ارسال شد.");
                        this.nav.navigateBack(["usr-request-log"]);
                    }
                    else {
                        this.alert.presentError("قبلا یک در خواست پاسخ داده نشده دارید.");
                    }
                    this.dismiss();
                    //this.nav.navigateBack(["provider/" + this.session.provider.id]);
                });
            }
            else {
                this.dismiss();
            }
        });
    }
    calculateSessionDuration() {
        return this.sessionsManager.calculateSessionDuration(this.session);
    }
    calculateSessionTotalFee() {
        return this.sessionsManager.calculateSessionTotalFee(this.session);
    }
    chatHistory() {
        if (this.providerPerspective) {
            this.sessionsManager.pvdStartSessionChat(this.session);
        }
        else {
            this.sessionsManager.usrStartSessionChat(this.session);
        }
        this.dismiss();
    }
    score() {
        if (!this.session.score) {
            this.sessionsManager.openScoreSession(this.session, this.session.score, (score) => {
                this.session.score = score;
            }, this);
        }
    }
};
SessionInfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"] },
    { type: _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_8__["SessionsManagerService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] }
];
SessionInfoComponent.propDecorators = {
    session: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    providerPerspective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    openedFromSessionChat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};
SessionInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-session-info",
        template: _raw_loader_session_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"],
        _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_8__["SessionsManagerService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]])
], SessionInfoComponent);



/***/ }),

/***/ "YoRS":
/*!***************************************************************!*\
  !*** ./src/app/common/ask-question/ask-question.component.ts ***!
  \***************************************************************/
/*! exports provided: AskQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskQuestionComponent", function() { return AskQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ask_question_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ask-question.component.html */ "c3t1");
/* harmony import */ var _ask_question_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ask-question.component.scss */ "5k3Q");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/public-question-and-answers.service */ "ybCk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let AskQuestionComponent = class AskQuestionComponent {
    constructor(modalController, qaService, alert) {
        this.modalController = modalController;
        this.qaService = qaService;
        this.alert = alert;
        this.aksing = false;
        this.questionContent = "";
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss();
    }
    ask() {
        if (this.questionContent.length > 20) {
            this.qaService.aks(this.questionContent).subscribe(result => {
                this.alert.presentSuccess("سوال با موفقیت اضافه شد");
                this.qaService.questionsShared.request();
                this.dismiss();
            });
        }
    }
};
AskQuestionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
AskQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-ask-question',
        template: _raw_loader_ask_question_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ask_question_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], AskQuestionComponent);



/***/ }),

/***/ "Z1Qc":
/*!*****************************************************************************!*\
  !*** ./src/app/common/provider-list-item/provider-list-item.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.provider-item-container.online {\n  box-shadow: 0px 0px 11px -4px lime;\n  -webkit-box-shadow: 0px 0px 11px -4px lime;\n  -moz-box-shadow: 0px 0px 11px -4px lime;\n}\n.provider-item-container.online .status-text {\n  color: lime;\n}\n.provider-item-container .avatar {\n  height: 2rem;\n  width: 2rem;\n  background-size: cover;\n  background-position: center center;\n  background-size: cover;\n  background-position: center center;\n  margin-left: 0.8rem;\n  border-radius: 50px;\n}\n.provider-item-container .name {\n  font-size: 0.8rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n.provider-item-container .name .favorite-icon {\n  display: none;\n}\n.provider-item-container .name .favorite-icon.favorite {\n  display: inline-block;\n}\n.provider-item-container .provider-info-tag {\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  --border-radius:$radius;\n  color: white;\n  background-color: #a5dade;\n  padding: 0rem 0.6rem;\n}\n.provider-item-container .provider-info-tag.fee-tag {\n  display: flex;\n  align-items: center;\n  font-family: \"myIranSansFaNum\" !important;\n}\n.provider-item-container .provider-info-tag .provider-tag-icon {\n  margin-left: 0.2rem;\n  --ionicon-stroke-width:34;\n}\n.provider-item-container .category-name {\n  font-size: 0.7rem;\n}\n.provider-item-container .status-text {\n  color: #a5a5a5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcHJvdmlkZXItbGlzdC1pdGVtL3Byb3ZpZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NFO0VDK0JELGtDQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtBRG1CRDtBQWxESTtFQUNFLFdDYVE7QUR1Q2Q7QUE3Q0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQStDSjtBQTdDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUErQ0o7QUE5Q0k7RUFFRSxhQUFBO0FBK0NOO0FBOUNNO0VBRUUscUJBQUE7QUErQ1I7QUEzQ0U7RUNPRCxtQkROMEI7RUNPMUIsMkJEUDBCO0VDUXZCLHdCRFJ1QjtFQ1N2Qix1QkFBQTtFRFJBLFlBQUE7RUFDQSx5QkNsQ2lCO0VEbUNqQixvQkFBQTtBQWdESjtBQS9DSTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBZ0ROO0FBOUNJO0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtBQStDTjtBQTNDRTtFQUNFLGlCQUFBO0FBNkNKO0FBMUNFO0VBQ0UsY0MxQ2M7QURzRmxCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Byb3ZpZGVyLWxpc3QtaXRlbS9wcm92aWRlci1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb24uc2Nzc1wiO1xuLnByb3ZpZGVyLWl0ZW0tY29udGFpbmVyIHtcbiAgJi5vbmxpbmUge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3ctZnVsbCgwcHgsIDBweCwgMTFweCwgLTRweCwgJG9ubGluZS1jb2xvcik7XG4gICAgLnN0YXR1cy10ZXh0IHtcbiAgICAgIGNvbG9yOiAkb25saW5lLWNvbG9yO1xuICAgIH1cbiAgfVxuICAvLyAmLm9mZmxpbmUsICYuaW4tc2Vzc2lvbntcbiAgLy8gICBAaW5jbHVkZSBib3gtc2hhZG93LWZ1bGwoMHB4LCAwcHgsIDExcHgsIC00cHgsICRvZmZsaW5lLWNvbG9yKTtcbiAgLy8gfVxuXG4gIC5hdmF0YXIge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuICAubmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmZhdm9yaXRlLWljb25cbiAgICB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgJi5mYXZvcml0ZVxuICAgICAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm92aWRlci1pbmZvLXRhZyB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygyMHB4KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG4gICAgcGFkZGluZzowcmVtIDAuNnJlbTtcbiAgICAmLmZlZS10YWdcbiAgICB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udE51bSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHJvdmlkZXItdGFnLWljb25cbiAgICB7XG4gICAgICBtYXJnaW4tbGVmdDowLjJyZW07XG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOjM0O1xuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLnN0YXR1cy10ZXh0IHtcbiAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG4gIH1cbn1cbiIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */");

/***/ }),

/***/ "Z25Y":
/*!**************************************************************************!*\
  !*** ./src/app/common/common-declarations/common-declarations.module.ts ***!
  \**************************************************************************/
/*! exports provided: CommonDeclarationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDeclarationsModule", function() { return CommonDeclarationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _provider_list_item_provider_list_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../provider-list-item/provider-list-item.component */ "zs2g");
/* harmony import */ var _basic_user_profile_basic_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../basic-user-profile/basic-user-profile.component */ "uNJR");
/* harmony import */ var _remote_stats_container_remote_stats_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../remote-stats-container/remote-stats-container.component */ "S0U/");
/* harmony import */ var _remote_stats_box_remote_stats_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../remote-stats-box/remote-stats-box.component */ "OtR6");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../answer/answer.component */ "MrgP");
/* harmony import */ var _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../ask-question/ask-question.component */ "YoRS");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../call/call.component */ "eKhv");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../score/score.component */ "kg6Y");
/* harmony import */ var _session_list_item_minimal_session_list_item_minimal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../session-list-item-minimal/session-list-item-minimal.component */ "OXsI");
/* harmony import */ var _random_provider_avatars_random_provider_avatars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../random-provider-avatars/random-provider-avatars.component */ "DUqy");
/* harmony import */ var _submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../submit-button/submit-button.component */ "VOgj");
/* harmony import */ var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../deposit/deposit.component */ "wDsb");
/* harmony import */ var _remote_stats_remote_stats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../remote-stats/remote-stats.component */ "u7RM");
/* harmony import */ var _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../select-provider-category/select-provider-category.component */ "bPLR");
/* harmony import */ var _provider_info_edit_provider_info_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../provider-info-edit/provider-info-edit.component */ "sL+R");
/* harmony import */ var _static_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../static/contact/contact.component */ "OFPZ");
/* harmony import */ var _static_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../static/about/about.component */ "uI3J");
/* harmony import */ var _static_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../static/terms/terms.component */ "rywU");
/* harmony import */ var _additional_info_edit_additional_info_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../additional-info-edit/additional-info-edit.component */ "FexU");
/* harmony import */ var _select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../select-icon/select-icon.component */ "eZ8L");
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../date-picker/date-picker.component */ "9YIV");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../change-password/change-password.component */ "kVPr");
/* harmony import */ var _session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../session-info-icon-summary/session-info-icon-summary.component */ "7VJn");
/* harmony import */ var _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../session-info/session-info.component */ "YNR+");
/* harmony import */ var _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./../user-avatar/user-avatar.component */ "WIZs");
/* harmony import */ var _loading_toolbar_button_loading_toolbar_button_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../loading-toolbar-button/loading-toolbar-button.component */ "yZtM");
/* harmony import */ var _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../../directives/ng-var.directive */ "wl2M");
/* harmony import */ var _session_list_session_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../session-list/session-list.component */ "1CAP");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _session_list_item_session_list_item_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../session-list-item/session-list-item.component */ "OhPj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "ofXK");


































let CommonDeclarationsModule = class CommonDeclarationsModule {
};
CommonDeclarationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_32__["NgModule"])({
        declarations: [
            _session_list_item_session_list_item_component__WEBPACK_IMPORTED_MODULE_31__["SessionListItemComponent"],
            _session_list_session_list_component__WEBPACK_IMPORTED_MODULE_28__["SessionListComponent"],
            _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_27__["NgVarDirective"],
            _loading_toolbar_button_loading_toolbar_button_component__WEBPACK_IMPORTED_MODULE_26__["LoadingToolbarButtonComponent"],
            _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_25__["UserAvatarComponent"],
            _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_24__["SessionInfoComponent"],
            _session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_23__["SessionInfoIconSummaryComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"],
            _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_21__["DatePickerComponent"],
            _select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_20__["SelectIconComponent"],
            _additional_info_edit_additional_info_edit_component__WEBPACK_IMPORTED_MODULE_19__["AdditionalInfoEditComponent"],
            _static_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"],
            _static_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
            _static_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
            _provider_info_edit_provider_info_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProviderInfoEditComponent"],
            _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_14__["SelectProviderCategoryComponent"],
            _remote_stats_remote_stats_component__WEBPACK_IMPORTED_MODULE_13__["RemoteStatsComponent"],
            _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["DepositComponent"],
            _submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__["SubmitButtonComponent"],
            _random_provider_avatars_random_provider_avatars_component__WEBPACK_IMPORTED_MODULE_10__["RandomProviderAvatarsComponent"],
            _session_list_item_minimal_session_list_item_minimal_component__WEBPACK_IMPORTED_MODULE_9__["SessionListItemMinimalComponent"],
            _score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"],
            _call_call_component__WEBPACK_IMPORTED_MODULE_7__["CallComponent"],
            _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__["AskQuestionComponent"],
            _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__["AnswerComponent"],
            _remote_stats_box_remote_stats_box_component__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsBoxComponent"],
            _remote_stats_container_remote_stats_container_component__WEBPACK_IMPORTED_MODULE_3__["RemoteStatsContainerComponent"],
            _basic_user_profile_basic_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["BasicUserProfileComponent"],
            _provider_list_item_provider_list_item_component__WEBPACK_IMPORTED_MODULE_1__["ProviderListItemComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"]],
        exports: [
            _session_list_item_session_list_item_component__WEBPACK_IMPORTED_MODULE_31__["SessionListItemComponent"],
            _session_list_session_list_component__WEBPACK_IMPORTED_MODULE_28__["SessionListComponent"],
            _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_27__["NgVarDirective"],
            _loading_toolbar_button_loading_toolbar_button_component__WEBPACK_IMPORTED_MODULE_26__["LoadingToolbarButtonComponent"],
            _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_25__["UserAvatarComponent"],
            _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_24__["SessionInfoComponent"],
            _session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_23__["SessionInfoIconSummaryComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"],
            _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_21__["DatePickerComponent"],
            _select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_20__["SelectIconComponent"],
            _additional_info_edit_additional_info_edit_component__WEBPACK_IMPORTED_MODULE_19__["AdditionalInfoEditComponent"],
            _static_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"],
            _static_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
            _static_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
            _provider_info_edit_provider_info_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProviderInfoEditComponent"],
            _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_14__["SelectProviderCategoryComponent"],
            _remote_stats_remote_stats_component__WEBPACK_IMPORTED_MODULE_13__["RemoteStatsComponent"],
            _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["DepositComponent"],
            _submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__["SubmitButtonComponent"],
            _random_provider_avatars_random_provider_avatars_component__WEBPACK_IMPORTED_MODULE_10__["RandomProviderAvatarsComponent"],
            _session_list_item_minimal_session_list_item_minimal_component__WEBPACK_IMPORTED_MODULE_9__["SessionListItemMinimalComponent"],
            _score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"],
            _call_call_component__WEBPACK_IMPORTED_MODULE_7__["CallComponent"],
            _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__["AskQuestionComponent"],
            _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__["AnswerComponent"],
            _remote_stats_box_remote_stats_box_component__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsBoxComponent"],
            _remote_stats_container_remote_stats_container_component__WEBPACK_IMPORTED_MODULE_3__["RemoteStatsContainerComponent"],
            _basic_user_profile_basic_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["BasicUserProfileComponent"],
            _provider_list_item_provider_list_item_component__WEBPACK_IMPORTED_MODULE_1__["ProviderListItemComponent"]
        ],
    })
], CommonDeclarationsModule);



/***/ }),

/***/ "Z9HY":
/*!*************************************************************************************!*\
  !*** ./src/app/common/remote-stats-container/remote-stats-container.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.stats-top-container {\n  display: block;\n  padding: 0rem 0.5rem;\n}\n.stats-top-container .stats-type-container {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzLWNvbnRhaW5lci9yZW1vdGUtc3RhdHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFrREY7QUFqREU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFtREoiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzLWNvbnRhaW5lci9yZW1vdGUtc3RhdHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvY29tbW9uLnNjc3NcIjtcbi5zdGF0cy10b3AtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDByZW0gMC41cmVtO1xuICAuc3RhdHMtdHlwZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBcbiAgICB9XG4gIFxufVxuIl19 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_answer_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/answer/answer.component */ "MrgP");
/* harmony import */ var _common_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/ask-question/ask-question.component */ "YoRS");
/* harmony import */ var _common_call_call_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/call/call.component */ "eKhv");
/* harmony import */ var _common_score_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/score/score.component */ "kg6Y");
/* harmony import */ var _common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/change-password/change-password.component */ "kVPr");
/* harmony import */ var _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/deposit/deposit.component */ "wDsb");
/* harmony import */ var _common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/static/contact/contact.component */ "OFPZ");
/* harmony import */ var _common_static_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/static/about/about.component */ "uI3J");
/* harmony import */ var _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/static/terms/terms.component */ "rywU");
/* harmony import */ var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _common_session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/session-info-icon-summary/session-info-icon-summary.component */ "7VJn");
/* harmony import */ var _common_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/session-info/session-info.component */ "YNR+");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "E9qw");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "fLLL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire */ "05qF");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/messaging */ "YK9e");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/notification.service */ "OC8m");

































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]],
        entryComponents: [
            _common_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_12__["SessionInfoComponent"],
            _common_session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_11__["SessionInfoIconSummaryComponent"],
            _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
            _common_static_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            _common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
            _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"],
            _common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"],
            _common_score_score_component__WEBPACK_IMPORTED_MODULE_4__["ScoreComponent"],
            _common_call_call_component__WEBPACK_IMPORTED_MODULE_3__["CallComponent"],
            _common_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_2__["AskQuestionComponent"],
            _common_answer_answer_component__WEBPACK_IMPORTED_MODULE_1__["AnswerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_27__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_10__["CommonDeclarationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"].initializeApp(_services_notification_service__WEBPACK_IMPORTED_MODULE_32__["firebaseConfig"]),
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_31__["AngularFireMessagingModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_22__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_21__["SplashScreen"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonicRouteStrategy"] },
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_26__["NativeStorage"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseX"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeAudio"],
            _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "Zn2K":
/*!********************************************************!*\
  !*** ./src/app/architecture/single-shared-resource.ts ***!
  \********************************************************/
/*! exports provided: SingleSharedResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSharedResource", function() { return SingleSharedResource; });
/* harmony import */ var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/architecture/shared-resource-async-request-bundle */ "JTjR");

class SingleSharedResource extends src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceAsyncRequestBundle"] {
    constructor(producer, sharedResourceDefaultValue, ownerObject) {
        super(producer, sharedResourceDefaultValue, ownerObject);
    }
}


/***/ }),

/***/ "bPLR":
/*!***************************************************************************************!*\
  !*** ./src/app/common/select-provider-category/select-provider-category.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SelectProviderCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProviderCategoryComponent", function() { return SelectProviderCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_provider_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-provider-category.component.html */ "SUno");
/* harmony import */ var _select_provider_category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-provider-category.component.scss */ "fzXQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SelectProviderCategoryComponent = class SelectProviderCategoryComponent {
    constructor(modal) {
        this.modal = modal;
        this.providerGroups = [];
    }
    selectCategory(category) {
        this.dismiss(category);
    }
    ngOnInit() {
    }
    dismiss(data = null) {
        this.modal.dismiss(data);
    }
};
SelectProviderCategoryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SelectProviderCategoryComponent.propDecorators = {
    providerGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SelectProviderCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-provider-category',
        template: _raw_loader_select_provider_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_provider_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], SelectProviderCategoryComponent);



/***/ }),

/***/ "c3t1":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/ask-question/ask-question.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>سؤال جدید</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"action-container\">\n    <div class=\"action-content p-4 text-right\">\n      <span class=\"normal-text d-block mb-2\">\n        محتوای سؤال\n      </span>\n      <p class=\"light-text small-text\">\n        سؤال خود را حداکثر در ۲۵۵ کاراکتر و به وضوخ بیان کنید تا توسط مشاورین ما به آن پاسخ داده شود.\n      </p>\n      <ion-textarea\n            \n            [(ngModel)]=\"questionContent\"\n            class=\"question-text px-3\"\n            maxlength=255\n            mode=\"ios\"\n            autoGrow=true\n            ></ion-textarea\n          >\n          <span class=\"small-text light-text mr-2\">{{questionContent.length}}/255</span>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <app-submit-button [disabled]=\"questionContent.length < 10\" (submitted)=\"ask()\" [isWaiting]=\"aksing\" text=\"ارسال\"></app-submit-button>\n      </div>\n    </div>\n  </div>\n  </ion-content>");

/***/ }),

/***/ "cM+S":
/*!*****************************************************************!*\
  !*** ./src/app/common/session-info/session-info.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.header-md:after {\n  background-image: none;\n}\n.score {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem;\n}\n.score .score-button {\n  color: white;\n  font-family: \"myIranSans\" !important;\n  border-radius: 50px;\n  -webkit-border-radius: 50px;\n  -moz-border-radius: 50px;\n  --border-radius:$radius;\n  --box-shadow:none;\n  --background:transparent;\n  border: 1px solid white;\n  font-size: 0.7rem;\n  --padding-bottom:0.3rem;\n  --padding-top:0.3rem;\n  letter-spacing: normal;\n  height: auto;\n}\n.score .score-button.readonly {\n  border: none;\n}\n.score .score-button .score-icon {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc2Vzc2lvbi1pbmZvL3Nlc3Npb24taW5mby5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBQ0Usc0JBQUE7QUFrREY7QUFoREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBbURKO0FBbERFO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VDaUNILG1CRGhDMEI7RUNpQzFCLDJCRGpDMEI7RUNrQ3ZCLHdCRGxDdUI7RUNtQ3ZCLHVCQUFBO0VEbENBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXVESjtBQXRESTtFQUVJLFlBQUE7QUF1RFI7QUFyREk7RUFDRSxXQUFBO0FBdUROIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Nlc3Npb24taW5mby9zZXNzaW9uLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLnNjb3JlIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzowLjVyZW07XG4gIC5zY29yZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJGZvbnQgIWltcG9ydGFudDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwcHgpO1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206MC4zcmVtO1xuICAgIC0tcGFkZGluZy10b3A6MC4zcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgICYucmVhZG9ubHlcbiAgICB7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgIH1cbiAgICAuc2NvcmUtaWNvbiB7XG4gICAgICBjb2xvcjogZ29sZDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */");

/***/ }),

/***/ "eKhv":
/*!***********************************************!*\
  !*** ./src/app/common/call/call.component.ts ***!
  \***********************************************/
/*! exports provided: CallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_call_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./call.component.html */ "i6BT");
/* harmony import */ var _call_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call.component.scss */ "KhDX");
/* harmony import */ var _models_voice_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/voice-call */ "BbMm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/call.service */ "tCwg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









let CallComponent = class CallComponent {
    constructor(modalController, callService) {
        this.modalController = modalController;
        this.callService = callService;
        this.call = this.callService.voiceCall;
        this.callDirection = _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallDirection"];
        this.callState = _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"];
        this.conversationSeconds = 0;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    setCallTimerSeconds() {
        this.callTimerSeconds = new Date(1970, 0, 1).setSeconds(this.call.maxDuration - this.conversationSeconds);
    }
    ngOnInit() {
        if (this.call.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallDirection"].OUTGOING) {
            this.callService.makeTheCall().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(-1);
            })).subscribe(result => {
                if (result != -1) {
                    this.callService.initiateConnectCall();
                }
                else {
                    this.dismiss();
                }
            });
        }
        else {
        }
        this.callService.callStateUpdated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
            switch (this.call.state) {
                case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].ACCEPTED:
                    this.setCallTimerSeconds();
                    break;
                case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].CONVERSATION:
                    this.callTimerIntervalHanlde = setInterval(() => {
                        this.conversationSeconds++;
                        this.setCallTimerSeconds();
                    }, 1000);
            }
        });
        this.callService.callFinished.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
            console.log("finished subjec");
            this.dismiss();
        });
    }
    getCallStateText() {
        switch (this.call.state) {
            case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].NEW:
                return 'Connecting...';
            case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].TRYING:
                return 'Calling...';
            case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].RINGING:
                return 'Ringing...';
        }
    }
    connectIncoming() {
        this.callService.initiateConnectCall();
    }
    hangUp() {
        if (this.call.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallDirection"].INCOMING && this.call.state == _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].RINGING) {
            this.callService.rejectCall();
        }
        else {
            this.callService.hangupCall();
        }
        this.dismiss();
    }
    accept() {
        this.callService.acceptCall();
    }
    dismiss() {
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        clearInterval(this.callTimerIntervalHanlde);
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
CallComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_call_service__WEBPACK_IMPORTED_MODULE_5__["CallService"] }
];
CallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-call',
        template: _raw_loader_call_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_call_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _services_call_service__WEBPACK_IMPORTED_MODULE_5__["CallService"]])
], CallComponent);



/***/ }),

/***/ "eQox":
/*!**********************************************************!*\
  !*** ./src/app/common/static/about/about.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nh4 {\n  font-family: \"myIranSans\";\n  text-align: right;\n  padding: 0.5rem 3rem;\n  color: #4e4e4e;\n  font-weight: bold;\n  font-size: 1rem;\n}\nul {\n  padding-left: 2rem;\n}\np {\n  text-align: right;\n  color: #676767;\n  font-size: 0.8rem;\n  padding: 0.1rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc3RhdGljL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUE5Q0E7RUFDSSx5QkNGSTtFREdKLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZ0RKO0FBOUNBO0VBQ0ksa0JBQUE7QUFpREo7QUEvQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBa0RKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3N0YXRpYy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uLnNjc3MnO1xuXG5cbmg0e1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOjAuNXJlbSAzcmVtO1xuICAgIGNvbG9yOiAjNGU0ZTRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZToxcmVtO1xufVxudWx7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxucHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjojNjc2NzY3O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHBhZGRpbmc6MC4xcmVtIDJyZW07XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */");

/***/ }),

/***/ "eZ8L":
/*!*************************************************************!*\
  !*** ./src/app/common/select-icon/select-icon.component.ts ***!
  \*************************************************************/
/*! exports provided: SelectIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectIconComponent", function() { return SelectIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-icon.component.html */ "R/5v");
/* harmony import */ var _select_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-icon.component.scss */ "9y04");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/env.service */ "5zL6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let SelectIconComponent = class SelectIconComponent {
    constructor(modal) {
        this.modal = modal;
        this.icons = [];
    }
    ngOnInit() {
        this.icons = _services_env_service__WEBPACK_IMPORTED_MODULE_3__["Icons"].iconNames;
    }
    dismiss(iconName = "") {
        this.modal.dismiss(iconName);
    }
};
SelectIconComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SelectIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-select-icon',
        template: _raw_loader_select_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], SelectIconComponent);



/***/ }),

/***/ "fAhz":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/provider-list-item/provider-list-item.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item\n      button\n      class=\"provider-item-container shadow-item\"\n      [ngClass]=\"getStatusClass(provider.status)\"\n      (click)=\"navigateToProvider(provider)\"\n    >\n      <app-user-avatar [user]=\"provider.user\"></app-user-avatar>\n      <ion-text class=\"w-100 d-flex flex-column\">\n        <div class=\"d-flex justify-content-between mt-2 align-items-center\">\n          <span class=\"name dark-text\">\n            {{getName(provider.user)}}\n            <ion-icon\n              class=\"favorite-icon mr-1\"\n              name=\"heart-outline\"\n              [ngClass]=\"isFavorite?'favorite':''\"\n            ></ion-icon\n          ></span>\n          <span class=\"provider-info-tag degree-tag xsmall-text\">\n            {{getDegreeText(provider.education_degree)}}\n          </span>\n        </div>\n        <small *ngIf=\"category\" class=\"category-name light-text\"\n          >مشاور {{category.name}}</small\n        >\n        <div\n          class=\"d-flex justify-content-between mt-2 mb-3 border-top pt-2 align-items-center\"\n        >\n          <small class=\"xsmall-text status-text\">\n            {{getStatusText(provider.status)}}\n          </small>\n          <div class=\"d-flex\">\n            <span\n              class=\"ml-1 provider-info-tag text-fee-tag fee-tag small-text\"\n            >\n              <ion-icon\n                class=\"provider-tag-icon\"\n                name=\"chatbubbles-outline\"\n              ></ion-icon>\n              {{provider.per_minute_text_fee}}\n            </span>\n            <span class=\"provider-info-tag call-fee-tag fee-tag small-text\">\n              <ion-icon\n                class=\"provider-tag-icon\"\n                name=\"call-outline\"\n              ></ion-icon>\n              {{provider.per_minute_call_fee}}\n            </span>\n          </div>\n        </div>\n      </ion-text>\n    </ion-item>");

/***/ }),

/***/ "fzXQ":
/*!*****************************************************************************************!*\
  !*** ./src/app/common/select-provider-category/select-provider-category.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.category-name {\n  font-family: \"myIranSans\";\n  font-size: 0.7rem;\n}\n.category-icon {\n  color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc2VsZWN0LXByb3ZpZGVyLWNhdGVnb3J5L3NlbGVjdC1wcm92aWRlci1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBRUkseUJDREk7RURFSixpQkFBQTtBQWlESjtBQTlDQTtFQUVJLGNDSWM7QUQ0Q2xCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NlbGVjdC1wcm92aWRlci1jYXRlZ29yeS9zZWxlY3QtcHJvdmlkZXItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcbi5jYXRlZ29yeS1uYW1lXG57XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIGZvbnQtc2l6ZTowLjdyZW07XG5cbn1cbi5jYXRlZ29yeS1pY29uXG57XG4gICAgY29sb3I6JHNlY29uZGFyeS1jb2xvciA7XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */");

/***/ }),

/***/ "gs/X":
/*!**********************************************!*\
  !*** ./src/app/services/provider.service.ts ***!
  \**********************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../architecture/shared-resource-async-request-bundle */ "JTjR");
/* harmony import */ var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../architecture/auto-single-get-resource */ "sTv3");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-helper.service */ "tLlE");
/* harmony import */ var src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/architecture/auto-arrayed-shared-resource */ "6cTQ");
/* harmony import */ var src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/provider */ "oPjg");
/* harmony import */ var _models_file_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../models/file-model */ "X9GW");
/* harmony import */ var _file_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-helper.service */ "Y+EJ");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./env.service */ "5zL6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
















let ProviderService = class ProviderService {
    constructor(http, env, auth, fileHelper, httpHelper) {
        this.http = http;
        this.env = env;
        this.auth = auth;
        this.fileHelper = fileHelper;
        this.httpHelper = httpHelper;
        this.selectedProviderShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("providers/getById");
        this.providerByUserIdShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("providers/getByUserId");
        this.randomAvatarSrcListShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/getRandomAvatars", false);
        this.providerCategoriesShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("categories", false);
        this.providerCategoryShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("categories", false);
        this.providersByCategoryIdShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/getByCategoryId", false);
        this.favoriteProvidersShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/favorites", true);
        this.favoriteProviders = [];
        this.fetchedFavorites = false;
        this.providerCategoriesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.auth.loggedOut.subscribe((result) => {
            if (result == true) {
                this.favoriteProviders = [];
                this.fetchedFavorites = false;
            }
        });
        this.allProvidersShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/getAll");
        this.statsByStatusShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_1__["SharedResourceAsyncRequestBundle"](this.statsByStatus, [], this);
    }
    getProviderByUserId(userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/getByUserId/" + userId;
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => {
                return result;
            }));
        }));
    }
    getProviders() {
        let url = "providers/getAll";
        return this.http
            .get(this.env.API_URL + url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((data) => {
            this.allProvidersShared.setResource(data);
            return data;
        }));
    }
    verifyProvider(provider) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/verify/" + provider.id;
            return this.http.post(this.env.API_URL + url, null, {
                headers: headers,
            });
        }));
    }
    addCategory(category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/addCategory";
            return this.http
                .post(this.env.API_URL + url, {
                name: category.name,
                description: category.description,
                icon_name: category.icon_name,
            }, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((categoryResult) => {
                this.providerGroups.push(categoryResult);
                this.providerCategoriesUpdated.next(this.providerGroups);
                return categoryResult;
            }));
        }));
    }
    editCategory(category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/editCategory";
            return this.http
                .post(this.env.API_URL + url, {
                id: category.id,
                name: category.name,
                description: category.description,
                icon_name: category.icon_name,
            }, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((categoryResult) => {
                this.updateCategoryInProviderGroups(categoryResult);
                return categoryResult;
            }));
        }));
    }
    getFees() {
        let url = "providers/getFees";
        return this.http
            .get(this.env.API_URL + url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((data) => data));
    }
    updateCategoryInProviderGroups(category) {
        let oldCat = this.providerGroups.find((cat) => {
            return cat.id == category.id;
        });
        oldCat.name = category.name;
        oldCat.icon_name = category.icon_name;
        this.providerCategoriesUpdated.next(this.providerGroups);
    }
    getByUid(uid) {
        let url = "providers/getByUid/" + uid;
        return this.http
            .get(this.env.API_URL + url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((data) => data));
    }
    getById(id) {
        let url = "providers/getById/" + id;
        return this.http
            .get(this.env.API_URL + url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((data) => {
            this.selectedProviderShared.setResource(data);
            return data;
        }));
    }
    getSelectedGroup() {
        return this.selectedGroup;
    }
    setSelectedProvider(provider) {
        this.selectedProvider = provider;
    }
    getSelectedProvider() {
        return this.selectedProvider;
    }
    getRemoteFavorites() {
        return this.auth.getToken().then((token) => {
            let url = "providers/favorites";
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => {
                this.fetchedFavorites = true;
                this.favoriteProviders = result;
                return this.favoriteProviders;
            }))
                .toPromise();
        });
    }
    getFavoriteProviders() {
        if (!this.fetchedFavorites) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.getRemoteFavorites());
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(this.favoriteProviders);
    }
    addFavorite(providerId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/addFavorite/" + providerId;
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((favoriteProvider) => {
                this.favoriteProviders.push(favoriteProvider);
                return true;
            }));
        }));
    }
    toggleActivitySwitch(state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let functionName = "activitySwitchOn";
            if (!state) {
                functionName = "activitySwitchOff";
            }
            let url = "providers/" + functionName;
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((favoriteProvider) => {
                return true;
            }));
        }));
    }
    getActivitySwitch() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/getActivitySwitch";
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => {
                return result;
            }));
        }));
    }
    deleteFavorite(providerId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/deleteFavorite/" + providerId;
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((favoriteProvider) => {
                let provider = this.favoriteProviders.find((pvd) => {
                    return pvd.provider_id == providerId;
                });
                this.favoriteProviders.splice(this.favoriteProviders.indexOf(provider), 1);
                return true;
            }));
        }));
    }
    isFavorite(providerId) {
        if (this.favoriteProvidersShared.getResourceStatus() == _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_1__["SharedResourceUpdateStatus"].NOT_UPDATED) {
            this.favoriteProvidersShared.request();
        }
        if (this.favoriteProvidersShared.resource().length < 1) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
        }
        let contact = this.favoriteProvidersShared.resource().filter((favorite) => favorite.id == providerId);
        if (contact.length) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(contact[0]);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
    }
    toggleFavorite(providerId) {
        return this.isFavorite(providerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((result) => {
            if (result) {
                return this.deleteFavorite(providerId);
            }
            else {
                return this.addFavorite(providerId);
            }
        }));
    }
    uploadCertificate(file) {
        return this.fileHelper.uploadVerifciationDocument(file, "certificate");
    }
    downloadCertificate(provider) {
        provider.certificateFile.fetch_status =
            _models_file_model__WEBPACK_IMPORTED_MODULE_6__["FileFetchStatus"].FILE_FETCH_STATUS_FETCHING;
        return this.fileHelper
            .downloadVerificationDocument(provider.certificateFile)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((result) => {
            provider.certificateFile.content = result;
            provider.certificateFile.img_src = URL.createObjectURL(provider.certificateFile.content);
            return this.fileHelper
                .getImageDimensions(provider.certificateFile)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((output) => {
                provider.certificateFile = output;
                provider.certificateFile.fetch_status =
                    _models_file_model__WEBPACK_IMPORTED_MODULE_6__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
                return provider.certificateFile;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])());
        }));
    }
    favoriteClass(providerId) {
        return this.isFavorite(providerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => (result != false ? "favorite" : "")));
    }
    updateProviderInfo(provider) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/updateProviderInfo/" + provider.id;
            return this.http
                .post(this.env.API_URL + url, {
                provider_categories: provider.provider_categories.map((cat) => cat.id),
                per_minute_text_fee: provider.per_minute_text_fee,
                per_minute_call_fee: provider.per_minute_call_fee,
                education_degree: provider.education_degree,
            }, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => {
                return result;
            }));
        }));
    }
    updateAboutMe(provider) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/updateAboutMe/" + provider.id;
            return this.http
                .post(this.env.API_URL + url, {
                about_me: provider.about_me,
            }, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => {
                return result;
            }));
        }));
    }
    statsByStatus() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "providers/providerStatsByStatus";
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => {
                result = result;
                let remoteData = [
                    {
                        text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"].getStatTypeString(src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_TOTAL_COUNT),
                        number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_TOTAL_COUNT],
                        url: null,
                        link_options: null,
                    },
                    {
                        text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"].getStatTypeString(src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_ONLINE_COUNT),
                        number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_ONLINE_COUNT],
                        url: null,
                        link_options: null,
                    },
                    {
                        text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"].getStatTypeString(src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_IN_SESSION_COUNT),
                        number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_IN_SESSION_COUNT],
                        url: null,
                        link_options: null,
                    },
                    {
                        text: "آفلاین",
                        number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_TOTAL_COUNT] -
                            result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_IN_SESSION_COUNT] -
                            result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_ONLINE_COUNT],
                        url: null,
                        link_options: null,
                    },
                ];
                this.statsByStatusShared.setResource(remoteData);
                return remoteData;
            }));
        }));
    }
};
ProviderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_11__["EnvService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _file_helper_service__WEBPACK_IMPORTED_MODULE_7__["FileHelperService"] },
    { type: _http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"] }
];
ProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
        _env_service__WEBPACK_IMPORTED_MODULE_11__["EnvService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _file_helper_service__WEBPACK_IMPORTED_MODULE_7__["FileHelperService"],
        _http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"]])
], ProviderService);



/***/ }),

/***/ "i6BT":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/call/call.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"action-container\">\n    <div class=\"action-content align-items-center d-flex pt-5 flex-column\">\n      <app-user-avatar\n        class=\"large-sized\"\n        [user]=\"\n          call.direction == callDirection.INCOMING ? call.caller : call.receptor\n        \"\n      ></app-user-avatar>\n      <span\n        *ngIf=\"\n          call.state == callState.NEW ||\n          call.state == callState.TRYING ||\n          call.state == callState.RINGING\n        \"\n        class=\"call-state-text mt-2 ltr normal-text\"\n        >{{ getCallStateText() }}</span\n      >\n      <span\n        *ngIf=\"\n          call.state == callState.ACCEPTED ||\n          call.state == callState.CONVERSATION\n        \"\n        class=\"call-timer-text mt-2 ltr normal-text\"\n        >{{ callTimerSeconds | date: \"mm:ss\" }}</span\n      >\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper justify-content-around\">\n        <ion-button\n          class=\"call-action reject\"\n          (click)=\"hangUp()\"\n          [disabled]=\"call.state == callState.NEW\"\n        >\n          <ion-icon\n            slot=\"icon-only\"\n            class=\"icon\"\n            name=\"call-outline\"\n          ></ion-icon>\n        </ion-button>\n        <ion-button\n          class=\"call-action accept\"\n          (click)=\"accept()\"\n          *ngIf=\"\n            call.direction == callDirection.INCOMING &&\n            (call.state == callState.NEW || call.state == callState.RINGING)\n          \"\n          [disabled]=\"call.state == callState.NEW\"\n        >\n          <ion-icon\n            slot=\"icon-only\"\n            class=\"icon\"\n            name=\"call-outline\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "jp0Q":
/*!*******************************************************************************************!*\
  !*** ./src/app/common/session-list-item-minimal/session-list-item-minimal.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.session-type-icon {\n  margin-left: 0.4rem;\n  --ionicon-stroke-width: 40;\n  padding: 0.3rem;\n}\n.session-info-tag {\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  --border-radius:$radius;\n  color: white;\n  background-color: #a5dade;\n}\n.session-state-text,\n.session-timing-type-text {\n  padding: 0.1rem 0.4rem;\n}\n.requested .session-state-text {\n  background-color: #eebd60;\n}\n.reserved .session-state-text {\n  background-color: #71bcc1;\n}\nß.active .session-state-text {\n  background-color: #71ce99;\n}\n.ended .session-state-text {\n  background-color: #71bcc1;\n}\n.rejected .session-state-text {\n  background-color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Nlc3Npb24tbGlzdC1pdGVtLW1pbmltYWwvc2Vzc2lvbi1saXN0LWl0ZW0tbWluaW1hbC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBREVKO0FBaERBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFrREY7QUFoREE7RUVvQ0MsbUJGbkN3QjtFRW9DeEIsMkJGcEN3QjtFRXFDckIsd0JGckNxQjtFRXNDckIsdUJBQUE7RUZyQ0YsWUFBQTtFQUNBLHlCRUxtQjtBRjJEckI7QUFwREE7O0VBRUUsc0JBQUE7QUF1REY7QUFwREU7RUFDRSx5QkVIYztBRjBEbEI7QUFyREU7RUFDRSx5QkViWTtBRm9FaEI7QUFyREU7RUFDRSx5QkVWWTtBRmlFaEI7QUFyREU7RUFDRSx5QkVuQlk7QUYwRWhCO0FBckRFO0VBQ0UseUJFakJjO0FGd0VsQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWxpc3QtaXRlbS1taW5pbWFsL3Nlc3Npb24tbGlzdC1pdGVtLW1pbmltYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3RoZW1lL2NvbW1vbi5zY3NzXCI7XG5cbi5zZXNzaW9uLXR5cGUtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG4gIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQwO1xuICBwYWRkaW5nOiAwLjNyZW07XG59XG4uc2Vzc2lvbi1pbmZvLXRhZyB7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMjBweCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG59XG4uc2Vzc2lvbi1zdGF0ZS10ZXh0LFxuLnNlc3Npb24tdGltaW5nLXR5cGUtdGV4dCB7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjRyZW07XG59XG4uc2Vzc2lvbi1zdGF0ZS10ZXh0IHtcbiAgLnJlcXVlc3RlZCAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcbiAgfVxuICAucmVzZXJ2ZWQgJiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cbiAgw58uYWN0aXZlICZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xuICB9XG4gIC5lbmRlZCAme1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG4gIC5yZWplY3RlZCAme1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kP+L":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/deposit/deposit.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>افزایش اعتبار</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\">\n      <ion-item button (click)=\"openDepostPresets()\" *ngIf=\"amount == null\">\n        <ion-label class=\"light-text\">میزان افزایش اعتبار</ion-label>\n        <span *ngIf=\"selectedPreset\" class=\"light-text number-text\">{{\n          selectedPreset + \" تومان\"\n        }}</span>\n      </ion-item>\n      <ion-item *ngIf=\"amount\">\n        <ion-label class=\"light-text\">میزان افزایش اعتبار</ion-label>\n        <span class=\"light-text number-text\">{{ amount + \" تومان\" }}</span>\n      </ion-item>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <app-submit-button\n          [disabled]=\"(!selectedPreset && !amount) || depositing\"\n          (submitted)=\"submit()\"\n          text=\"افزایش اعتبار\"\n          [isWaiting] = \"depositing\"\n        >\n        </app-submit-button>\n        \n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "kVPr":
/*!*********************************************************************!*\
  !*** ./src/app/common/change-password/change-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.component.html */ "2qNV");
/* harmony import */ var _change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.component.scss */ "lzRO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/alert.service */ "3LUQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(modalController, alert, auth) {
        this.modalController = modalController;
        this.alert = alert;
        this.auth = auth;
        this.changePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            newPasswordRepeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
        });
    }
    ngOnInit() { }
    changePassword() {
        let oldPass = this.changePassForm.value.oldPassword;
        let newPass = this.changePassForm.value.newPassword;
        let newPassRepeat = this.changePassForm.value.newPasswordRepeat;
        if (newPass != newPassRepeat) {
            this.alert.presentError('گذرواژه و تکرار آن برابر نیستند.');
            return;
        }
        this.auth.changePassword(oldPass, newPass).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.alert.presentSuccess('گذرواژه فعلی صحیح نیست.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        })).subscribe(result => {
            if (result) {
                this.alert.presentSuccess('گذرواژه تغییر یافت.');
                this.dismiss();
            }
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], ChangePasswordComponent);



/***/ }),

/***/ "kWjE":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-info/session-info.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>جلسه مشاوره</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"isEnded() && !openedFromSessionChat\">\n      <ion-button (click)=\"chatHistory()\">\n        <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\">\n      <div class=\"row justify-content-center primary-background pt-5\">\n        <div class=\"col-auto\">\n          <app-user-avatar class=\"large-sized\" [user]=\"user\"></app-user-avatar>\n        </div>\n      </div>\n      <div class=\"row justify-content-center primary-background pt-2 pb-4\">\n        <div class=\"col-auto\">\n          <span class=\"number-text large-text\">\n            {{ peerName }}\n          </span>\n        </div>\n      </div>\n      <div\n        *ngIf=\"isActive() || isEnded()\"\n        class=\"row justify-content-center primary-background pt-2 pb-4\"\n      >\n        <div\n          class=\"col-4 col-md-2 justify-content-center d-flex flex-column align-items-center\"\n        >\n          <span class=\"bold-text large-text\">\n            {{ calculateSessionDuration() }}\n          </span>\n          <span class=\"small-text\">\n            دقیقه\n          </span>\n        </div>\n        <div\n          class=\"col-1 justify-content-center d-flex flex-column align-items-center\"\n        >\n          <ion-icon name=\"stats-chart-outline\" class=\"stats-icon\"></ion-icon>\n        </div>\n        <div\n          class=\"col-4 col-md-2 justify-content-center d-flex flex-column align-items-center\"\n        >\n          <span class=\"bold-text large-text\">\n            {{ calculateSessionTotalFee() }}\n          </span>\n          <span class=\"small-text\">\n            تومان\n          </span>\n        </div>\n      </div>\n      <div\n        class=\"score primary-background\"\n        *ngIf=\"isEnded() && !providerPerspective\"\n      >\n        <ion-button\n          class=\"score-button\"\n          [ngClass]=\"session.score ? 'readonly' : ''\"\n          (click)=\"score()\"\n        >\n          <ion-icon class=\"ml-1 score-icon\" name=\"star-outline\"></ion-icon>\n          <span *ngIf=\"session.score == null\"> امتیاز بدهید </span>\n          <span *ngIf=\"session.score != null\">{{ session.score }}</span>\n        </ion-button>\n      </div>\n      <ion-item>\n        <span class=\"small-text light-text\">وضعیت جلسه</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">{{\n          getSessionState()\n        }}</span>\n      </ion-item>\n      <ion-item>\n        <span class=\"small-text light-text\">نوع درخواست</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">{{\n          getSessionTimingType()\n        }}</span>\n      </ion-item>\n      <ion-item>\n        <span class=\"small-text light-text\">نوع جلسه</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">{{\n          session.type == sessionTypeEnum.TEXT ? \"نوشتاری\" : \"تلفنی\"\n        }}</span>\n      </ion-item>\n      <app-session-info-icon-summary\n        [time]=\"getSessionTime('created')\"\n        [date]=\"getSessionDate('created')\"\n        stateClass=\"requested\"\n        label=\"ثبت درخواست\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        [time]=\"getSessionTime('requested')\"\n        [date]=\"getSessionDate('requested')\"\n        stateClass=\"requested\"\n        label=\"شروع بازه درخواستی\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        [time]=\"getSessionTime('requestedTo')\"\n        [date]=\"getSessionDate('requestedTo')\"\n        stateClass=\"requested\"\n        label=\"پایان بازه درخواستی\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        [time]=\"session.duration\"\n        [date]=\"null\"\n        stateClass=\"requested\"\n        label=\"مدت زمان درخواستی (دقیقه)\"\n      ></app-session-info-icon-summary>\n\n      <app-session-info-icon-summary\n        *ngIf=\"isActive() || isEnded() || isReserved()\"\n        [time]=\"getSessionTime('accepted')\"\n        [date]=\"getSessionDate('accepted')\"\n        stateClass=\"reserved\"\n        label=\"تأیید رزرو\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        *ngIf=\"isActive() || isEnded()\"\n        [time]=\"getSessionTime('started')\"\n        [date]=\"getSessionDate('started')\"\n        stateClass=\"active\"\n        label=\"شروع جلسه\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        *ngIf=\"isEnded()\"\n        [time]=\"getSessionTime('ended')\"\n        [date]=\"getSessionDate('ended')\"\n        stateClass=\"ended\"\n        label=\"پایان جلسه\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        *ngIf=\"isRejected()\"\n        [time]=\"getSessionTime('rejected')\"\n        [date]=\"getSessionDate('rejected')\"\n        stateClass=\"rejected\"\n        label=\"رد شده\"\n      >\n      </app-session-info-icon-summary>\n    </div>\n    <div class=\"actions\">\n      <div\n        class=\"actions-wrapper dual\"\n        *ngIf=\"isRequested() && providerPerspective == true && !isMock()\"\n      >\n        <ion-button class=\"primary-button\" (click)=\"accept()\" fill=\"solid\">\n          قبول درخواست\n        </ion-button>\n        <ion-button class=\"secondary-button\" (click)=\"reject()\" fill=\"solid\">\n          رد درخواست\n        </ion-button>\n      </div>\n      <div\n        class=\"actions-wrapper\"\n        *ngIf=\"isReserved() && providerPerspective == true && !isMock()\"\n      >\n        <ion-button class=\"primary-button\" (click)=\"start()\" fill=\"solid\">\n          شروع جلسه\n        </ion-button>\n      </div>\n      <div\n        class=\"actions-wrapper\"\n        *ngIf=\"isActive()  && !isMock()\"\n      >\n        <ion-button class=\"primary-button\" (click)=\"end()\" fill=\"solid\">\n          پایان جلسه\n        </ion-button>\n      </div>\n      <div class=\"actions-wrapper\" *ngIf=\"isMock()\">\n        <app-submit-button\n          text=\"درخواست رزرو\"\n          (submitted)=\"request()\"\n          [isWaiting]=\"waiting\"\n        ></app-submit-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "kg6Y":
/*!*************************************************!*\
  !*** ./src/app/common/score/score.component.ts ***!
  \*************************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_score_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./score.component.html */ "QVeo");
/* harmony import */ var _score_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.component.scss */ "Ixvq");
/* harmony import */ var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sessions-manager-service */ "qm69");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_models_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/session */ "m6xN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let ScoreComponent = class ScoreComponent {
    constructor(modalController, alert, sessionsManager) {
        this.modalController = modalController;
        this.alert = alert;
        this.sessionsManager = sessionsManager;
        this.score = null;
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss();
    }
    setScore(score) {
        this.score = score;
    }
    submit() {
        this.sessionsManager.updateScore(this.session.id, this.score).subscribe(result => {
            this.alert.presentSuccess("امتیاز شما ثبت شد.");
            this.modalController.dismiss(this.score);
        });
    }
};
ScoreComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"] }
];
ScoreComponent.propDecorators = {
    score: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
    session: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
};
ScoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-score',
        template: _raw_loader_score_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_score_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]])
], ScoreComponent);



/***/ }),

/***/ "kuGV":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/answer/answer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>پاسخ جدید</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"action-container\">\n    <div class=\"action-content p-4 text-right\">\n      <span class=\"normal-text d-block mb-2\">\n        محتوای پاسخ\n      </span>\n      <p class=\"light-text small-text\">\n        پاسخ خود را حداکثر در ۱۰۰۰ کاراکتر و به وضوخ بیان کنید.\n      </p>\n      <ion-textarea\n            \n            [(ngModel)]=\"answerString\"\n            class=\"question-text px-3\"\n            maxlength=1000\n            mode=\"ios\"\n            autoGrow=true\n            ></ion-textarea\n          >\n          <span class=\"small-text light-text mr-2\">{{answerString.length}}/1000</span>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <app-submit-button (submitted)=\"answer()\" [disabled]=\"answerString.length < 1\" [isWaiting]=\"answering\" text=\"ارسال\"></app-submit-button>\n      </div>\n    </div>\n  </div>\n  </ion-content>");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../architecture/auto-single-get-resource */ "sTv3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./env.service */ "5zL6");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let AuthService = class AuthService {
    constructor(http, storage, env) {
        this.http = http;
        this.storage = storage;
        this.env = env;
        this.user = null;
        this.fetchedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.roleDetected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.loggedOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loggedOutExToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tempPhoneNumber = null;
        this.tempPassword = null;
        this.currentUserShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__["AutoSingleGetResource"]('user');
        this.role = this.env.USER_ROLE_ID;
    }
    login(phone, password, roleId) {
        return this.http
            .post(this.env.API_URL + "login", {
            username: phone,
            password: password,
            client_id: this.env.CLIENT_ID,
            grant_type: "password",
            client_secret: this.env.CLIENT_SECRET,
            role_id: roleId,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((access_token) => {
            this.saveToken(access_token).then((result) => {
                this.saveUser();
            });
            this.loggedIn.next(true);
            this.token = access_token;
            return access_token;
        }));
    }
    remoteSetFcmToken(fcmToken) {
        let url = "setFcmToken";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((token) => {
            return this.http.post(this.env.API_URL + url, {
                fcm_token: fcmToken,
            }, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
        }));
    }
    remoteUnsetFcmToken(authExToken) {
        let url = "unsetFcmToken";
        return this.http.post(this.env.API_URL + url, null, {
            headers: {
                Authorization: authExToken["token_type"] + " " + authExToken["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
    }
    changePassword(oldPass, newPass) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((token) => {
            return this.http.post(this.env.API_URL + "changePassword", {
                old_password: oldPass,
                new_password: newPass,
            }, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
        }));
    }
    updateChatCredentials(username, pass, uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((token) => {
            return this.http.post(this.env.API_URL + "updateChatCredentials", {
                tinode_username: username,
                tinode_pass: pass,
                tinode_uid: uid,
            }, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
        }));
    }
    register(phone, fName, lName, password, roleId = this.env.USER_ROLE_ID, affiliateCode) {
        return this.http.post(this.env.API_URL + "register", {
            phone: phone,
            password: password,
            client_id: this.env.CLIENT_ID,
            client_secret: this.env.CLIENT_SECRET,
            first_name: fName,
            role_id: roleId,
            last_name: lName,
            affiliate_code: affiliateCode
        });
        //return of(true);
        /* return from(this.imService.createAccount(phone, password)).pipe(
          catchError(error=>{
            if(error.message == 'duplicate credential (409)')
            {
              return of(false);
            }
            throw "problem creating tinode account";
            
          }),
          mergeMap(data => {
            return this.http.post(this.env.API_URL + "register", {
              phone: phone,
              password: password,
              tinode_username: phone,
              tinode_pass: password,
              tinode_uid: data,
              client_id: this.env.CLIENT_ID,
              client_secret: this.env.CLIENT_SECRET,
              first_name: fName,
              last_name: lName
            });
          })
        ); */
    }
    requestVerificationCode(phone, password) {
        return this.http
            .post(this.env.API_URL + "requestVerificationCode", {
            phone: phone,
            password: password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            if (result["success"] == true) {
                return true;
            }
        }));
    }
    requestVerificationCodeForPasswordRetrieval(phone) {
        return this.http
            .post(this.env.API_URL + "requestVerificationCodeForPasswordRetrieval", {
            phone: phone,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            if (result["success"] == true) {
                return true;
            }
        }));
    }
    retrievePassword(phone, password, verificationCode) {
        return this.http
            .post(this.env.API_URL + "retrievePassword", {
            phone: phone,
            password: password,
            verification_code: verificationCode
        });
    }
    verify(verificationCode, phoneNumber) {
        return this.http
            .post(this.env.API_URL + "verify", {
            phone: phoneNumber,
            verification_code: verificationCode,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            if (result["success"] == true) {
                return true;
            }
        }));
    }
    getUserRemote() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            Authorization: this.token["token_type"] + " " + this.token["access_token"],
        });
        return this.http
            .get(this.env.API_URL + "user", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            this.user = user;
            this.saveUser();
            this.roleDetected.next(user.role_id);
            this.fetchedUser.next(user);
            return user;
        }));
    }
    isAuthenticated() {
        return this.getToken()
            .then()
            .catch((err) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("err");
        });
    }
    logout() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).subscribe((token) => {
            this.loggedOutExToken.next(token);
            this.storage.remove("token");
            this.storage.remove("user");
            delete this.token;
            delete this.user;
            this.loggedOut.next(true);
        });
    }
    isProvider() {
        return this.getUser()
            .then((user) => {
            if (user.role_id == this.env.PROVIDER_ROLE_ID) {
                this.role = this.env.PROVIDER_ROLE_ID;
                return true;
            }
            return false;
        })
            .catch((error) => {
            return Promise.reject(error);
        });
    }
    isAdmin() {
        return this.getUser()
            .then((user) => {
            if (user.role_id == this.env.ADMIN_ROLE_ID) {
                this.role = this.env.ADMIN_ROLE_ID;
                return true;
            }
            return false;
        })
            .catch((error) => {
            return Promise.reject(error);
        });
    }
    isUser() {
        return this.getUser()
            .then((user) => {
            if (user.role_id == this.env.USER_ROLE_ID) {
                this.role = this.env.USER_ROLE_ID;
                return true;
            }
            this.role = this.env.PROVIDER_ROLE_ID;
            return false;
        })
            .catch((error) => {
            return Promise.reject(error);
        });
    }
    getUser() {
        return this.isAuthenticated()
            .then((token) => {
            if (token) {
                if (this.user && this.user != null) {
                    this.roleDetected.next(this.user.role_id);
                    return Promise.resolve(this.user);
                }
                else {
                    return this.storage.get("user").then((user) => {
                        if (user != null) {
                            let parsedUser = JSON.parse(user);
                            this.user = parsedUser;
                            this.roleDetected.next(this.user.role_id);
                            return Promise.resolve(this.user);
                        }
                        else {
                            return this.getUserRemote()
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                                return Promise.reject(null);
                            }))
                                .toPromise();
                        }
                    }, (error) => {
                        return this.getUserRemote();
                    });
                }
            }
            else {
                return Promise.reject(false);
            }
        }, (error) => {
            return Promise.reject(false);
        })
            .catch((error) => {
            return Promise.reject(error);
        });
    }
    saveUser() {
        return this.getUser().then((user) => {
            return this.storage.set("user", JSON.stringify(user));
        });
    }
    saveToken(access_token) {
        return this.storage.set("token", access_token);
    }
    getToken() {
        if (this.token && this.token != null) {
            return Promise.resolve(this.token);
        }
        else {
            return this.storage.get("token").then((token) => {
                if (token != null) {
                    this.token = token;
                    return Promise.resolve(this.token);
                }
                else {
                    return Promise.reject("token not found");
                }
            });
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]])
], AuthService);



/***/ }),

/***/ "lzRO":
/*!***********************************************************************!*\
  !*** ./src/app/common/change-password/change-password.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "m+j5":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-list-item-minimal/session-list-item-minimal.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item\n  class=\"shadow-item session-list-item\"\n  (click)=\"navigateToSession()\"\n  [ngClass]=\"getClass()\"\n  button\n>\n  <app-user-avatar [user]=\"user\"> </app-user-avatar>\n\n  <div class=\"d-flex flex-column justify-content-center my-3 h-100 w-100\">\n    <div class=\"d-flex justify-content-between align-items-center\">\n      <span class=\"peer-name number-text normal-text dark-text d-flex align-items-center\">\n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\"session.type == sessionType.TEXT\"\n          name=\"chatbubbles-outline\"\n        ></ion-icon>\n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\"session.type == sessionType.Call\"\n          name=\"call-outline\"\n        ></ion-icon>\n\n        {{ peerName }}\n      </span>\n      <span>\n        <span class=\"session-info-tag ml-1 session-timing-type-text xsmall-text\">\n          {{ sessionTimingTypeText(session) }}\n        </span>\n        <span class=\"session-info-tag session-state-text xsmall-text\">\n        {{ stateText(session) }}\n      </span>\n      </span>\n      \n    </div>\n\n    <div class=\"session-info-summary\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"ml-3 light-text small-text\"> درخواست</span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"time-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionTime() }}</span\n            >\n          </div>\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"calendar-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionDate() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-item>\n");

/***/ }),

/***/ "m6xN":
/*!***********************************!*\
  !*** ./src/app/models/session.ts ***!
  \***********************************/
/*! exports provided: Session, SessionState, SessionType, SessionTimingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionState", function() { return SessionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionType", function() { return SessionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionTimingType", function() { return SessionTimingType; });
/* harmony import */ var _available_hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available-hours */ "xG8R");

class Session {
    constructor() {
        this.mock_session = false;
    }
    static getState(session) {
        if (session.accepted == null && session.ended == null) {
            return SessionState.REQUESTED;
        }
        if (session.accepted != null && session.started == null) {
            return SessionState.RESERVED;
        }
        if (session.started != null && session.ended == null) {
            return SessionState.ACTIVE;
        }
        if (session.accepted != null && session.ended != null) {
            return SessionState.ENDED;
        }
        if (session.accepted == null && session.ended != null) {
            return SessionState.REJECTED;
        }
    }
    static getTimingTypeString(session) {
        if (session.timing_type == SessionTimingType.RESERVATION) {
            return 'رزرو';
        }
        if (session.timing_type == SessionTimingType.IMMEDIATE) {
            return 'آنی';
        }
    }
    static getStateString(session) {
        const state = Session.getState(session);
        return Session.getStateStringByState(state);
    }
    static getStateStringByState(state) {
        switch (state) {
            case SessionState.ACTIVE:
                return "باز";
            case SessionState.RESERVED:
                return "در انتظار شروع";
            case SessionState.ENDED:
                return "پایان یافته";
            case SessionState.REJECTED:
                return "رد شده";
            case SessionState.REQUESTED:
                return "درخواست شده";
        }
    }
    static isActive(session) {
        return Session.getState(session) == SessionState.ACTIVE;
    }
    static isEnded(session) {
        return Session.getState(session) == SessionState.ENDED;
    }
    static isRequested(session) {
        return Session.getState(session) == SessionState.REQUESTED;
    }
    static isReserved(session) {
        return Session.getState(session) == SessionState.RESERVED;
    }
    static isRejected(session) {
        return Session.getState(session) == SessionState.REJECTED;
    }
    static createMockSession(hours, date, provider, duration, type, timingType) {
        if (hours == null) {
            hours = new _available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"]();
            _available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].SetTimeNow(hours);
        }
        let fromDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeFromHourString(hours)), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeFromMinuteString(hours)));
        let toDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeToHourString(hours)), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeToMinuteString(hours)));
        let session = {
            mock_session: true,
            reserved_from: fromDate.toUTCString(),
            reserved_to: toDate.toUTCString(),
            created_at: new Date().toUTCString(),
            duration: duration,
            provider: provider,
            type: type,
            timing_type: timingType
        };
        return session;
    }
}
var SessionState;
(function (SessionState) {
    SessionState[SessionState["REQUESTED"] = 0] = "REQUESTED";
    SessionState[SessionState["RESERVED"] = 1] = "RESERVED";
    SessionState[SessionState["ACTIVE"] = 2] = "ACTIVE";
    SessionState[SessionState["ENDED"] = 3] = "ENDED";
    SessionState[SessionState["REJECTED"] = 4] = "REJECTED";
})(SessionState || (SessionState = {}));
var SessionType;
(function (SessionType) {
    SessionType[SessionType["TEXT"] = 1] = "TEXT";
    SessionType[SessionType["Call"] = 2] = "Call";
})(SessionType || (SessionType = {}));
var SessionTimingType;
(function (SessionTimingType) {
    SessionTimingType[SessionTimingType["IMMEDIATE"] = 1] = "IMMEDIATE";
    SessionTimingType[SessionTimingType["RESERVATION"] = 0] = "RESERVATION";
})(SessionTimingType || (SessionTimingType = {}));


/***/ }),

/***/ "m9S8":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/additional-info-edit/additional-info-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>اطلاعات تکمیلی</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\"  >\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"کد ملی\"\n              [(ngModel)]=\"additionalInfo.national_code\"\n              required\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"آدرس\"\n              [(ngModel)]=\"additionalInfo.address\"\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"شماره تلفن ثابت\"\n              [(ngModel)]=\"additionalInfo.land_line_number\"\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      \n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"کد پستی\"\n              [(ngModel)]=\"additionalInfo.postal_code\"\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"actions\">\n      \n      <div class=\"actions-wrapper\">\n        <ion-button *ngIf=\"editable\" class=\"primary-button\" (click)=\"submit()\" fill=\"solid\">\n           ثبت\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "mW0d":
/*!***************************************************************************!*\
  !*** ./src/app/common/session-list-item/session-list-item.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.session-type-icon {\n  margin-right: 0.4rem;\n  --ionicon-stroke-width: 40;\n  padding: 0.3rem;\n}\n.session-info-tag {\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  --border-radius:$radius;\n  color: white;\n  background-color: #ce321c;\n}\n.session-state-text,\n.session-timing-type-text {\n  padding: 0.1rem 0.4rem;\n}\n.requested .session-state-text {\n  background-color: #eebd60;\n}\n.reserved .session-state-text {\n  background-color: #71bcc1;\n}\nß.active .session-state-text {\n  background-color: #71ce99;\n}\n.ended .session-state-text {\n  background-color: #71bcc1;\n}\n.rejected .session-state-text {\n  background-color: #e65844;\n}\n.icon-button {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Nlc3Npb24tbGlzdC1pdGVtL3Nlc3Npb24tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2ZvbnRzLnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUFoREE7RUFDSSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQWtESjtBQWhERTtFRW9DRCxtQkZuQzBCO0VFb0MxQiwyQkZwQzBCO0VFcUN2Qix3QkZyQ3VCO0VFc0N2Qix1QkFBQTtFRnJDQSxZQUFBO0VBQ0EseUJFRG1CO0FGdUR2QjtBQXBERTs7RUFFRSxzQkFBQTtBQXVESjtBQXBESTtFQUNFLHlCRUhZO0FGMERsQjtBQXJESTtFQUNFLHlCRWJVO0FGb0VoQjtBQXJESTtFQUNFLHlCRVZVO0FGaUVoQjtBQXJESTtFQUNFLHlCRW5CVTtBRjBFaEI7QUFyREk7RUFDRSx5QkVqQlk7QUZ3RWxCO0FBcERFO0VBRUUsZUFBQTtBQXNESiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWxpc3QtaXRlbS9zZXNzaW9uLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdGhlbWUvY29tbW9uLnNjc3NcIjtcblxuLnNlc3Npb24tdHlwZS1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0MDtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbiAgLnNlc3Npb24taW5mby10YWcge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMjBweCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3ItZGFyaztcbiAgfVxuICAuc2Vzc2lvbi1zdGF0ZS10ZXh0LFxuICAuc2Vzc2lvbi10aW1pbmctdHlwZS10ZXh0IHtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMC40cmVtO1xuICB9XG4gIC5zZXNzaW9uLXN0YXRlLXRleHQge1xuICAgIC5yZXF1ZXN0ZWQgJiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcbiAgICB9XG4gICAgLnJlc2VydmVkICYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgfVxuICAgIMOfLmFjdGl2ZSAme1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAuZW5kZWQgJntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAucmVqZWN0ZWQgJntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgfVxuICB9XG4gIC5pY29uLWJ1dHRvblxuICB7XG4gICAgZm9udC1zaXplOjFyZW07XG4gIH1cbiAgIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */");

/***/ }),

/***/ "mW1N":
/*!*****************************************************************************!*\
  !*** ./src/app/common/basic-user-profile/basic-user-profile.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.avatar {\n  width: 6rem;\n  margin: 1rem;\n  height: 6rem;\n  background-size: cover;\n  background-position: center center;\n  border-radius: 50px;\n}\n.name {\n  text-align: right;\n  font-family: \"myIranSans\";\n}\n.online-status {\n  padding: 0 0.4rem;\n}\n.sessions-count-label {\n  color: #2c8186;\n}\n.mean-score-label {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYmFzaWMtdXNlci1wcm9maWxlL2Jhc2ljLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBaURGO0FBL0NBO0VBQ0UsaUJBQUE7RUFDQSx5QkNWTTtBRDREUjtBQWhEQTtFQUNFLGlCQUFBO0FBbURGO0FBaERBO0VBQ0UsY0NibUI7QURnRXJCO0FBakRBO0VBQ0UsV0FBQTtBQW9ERiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9iYXNpYy11c2VyLXByb2ZpbGUvYmFzaWMtdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvY29tbW9uLnNjc3NcIjtcblxuLmF2YXRhciB7XG4gIHdpZHRoOiA2cmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5uYW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcbn1cbi5vbmxpbmUtc3RhdHVzIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG59XG5cbi5zZXNzaW9ucy1jb3VudC1sYWJlbCB7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvci14ZGFyaztcbn1cbi5tZWFuLXNjb3JlLWxhYmVsIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5zZXNzaW9ucy1jb3VudCB7XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "nnJo":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/loading-toolbar-button/loading-toolbar-button.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button *ngIf=\"visible\" class=\"\" disabled>\n  <ion-spinner name=\"lines-small\"></ion-spinner>\n</ion-button>\n<ion-button *ngIf=\"imNoConnection\" (click)=\"imReconnect()\">\n  <ion-icon  name=\"refresh-outline\"></ion-icon>\n  <span class=\"retry-text\"> سعی مجدد در {{imRetryRemainingSeconds}} ثانیه</span>\n</ion-button>");

/***/ }),

/***/ "oPjg":
/*!************************************!*\
  !*** ./src/app/models/provider.ts ***!
  \************************************/
/*! exports provided: Provider, ProviderStatus, ProviderStatsType, EducationalDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderStatus", function() { return ProviderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderStatsType", function() { return ProviderStatsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationalDegree", function() { return EducationalDegree; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "1I1D");

class Provider extends _model__WEBPACK_IMPORTED_MODULE_0__["Model"] {
    static getVerifiedByAdminText(provider) {
        if (provider.verified_by_admin) {
            return "تأیید شده";
        }
        return "در انتظار تأیید";
    }
    static getStatusText(status) {
        switch (status) {
            case ProviderStatus.OFFLINE:
                return "غیرفعال";
            case ProviderStatus.IN_SESSION:
                return "در جلسه";
            case ProviderStatus.ONLINE:
                return "فعال";
        }
    }
    static getStatusClass(status) {
        switch (status) {
            case ProviderStatus.OFFLINE:
                return "offline";
            case ProviderStatus.IN_SESSION:
                return "in-session";
            case ProviderStatus.ONLINE:
                return "online";
        }
    }
    static getCertificateFileName(provider) {
        if (provider.provider_verification_documents == null) {
            return false;
        }
        let doc = provider.provider_verification_documents.find((document) => {
            return document.title == "certificate";
        });
        if (doc) {
            return doc.url;
        }
        return false;
    }
    static getDegreeString(degree) {
        switch (degree) {
            case EducationalDegree.HIGH_SCHOOL_DIPLOMA:
                return "دیپلم";
            case EducationalDegree.BACHELORS:
                return "کارشناسی";
            case EducationalDegree.MASTERS:
                return "کارشناسی ارشد";
            case EducationalDegree.PHD:
                return "دکتری";
        }
    }
    static getStatTypeString(statType) {
        switch (statType) {
            case ProviderStatsType.PROVIDER_STATS_ONLINE_COUNT:
                return "آنلاین";
            case ProviderStatsType.PROVIDER_STATS_IN_SESSION_COUNT:
                return "در حال مشاوره";
            case ProviderStatsType.PROVIDER_STATS_TOTAL_COUNT:
                return "کل";
        }
    }
}
var ProviderStatus;
(function (ProviderStatus) {
    ProviderStatus[ProviderStatus["OFFLINE"] = 0] = "OFFLINE";
    ProviderStatus[ProviderStatus["ONLINE"] = 1] = "ONLINE";
    ProviderStatus[ProviderStatus["IN_SESSION"] = 2] = "IN_SESSION";
    ProviderStatus[ProviderStatus["NA"] = 3] = "NA";
})(ProviderStatus || (ProviderStatus = {}));
var ProviderStatsType;
(function (ProviderStatsType) {
    ProviderStatsType[ProviderStatsType["PROVIDER_STATS_ONLINE_COUNT"] = 1] = "PROVIDER_STATS_ONLINE_COUNT";
    ProviderStatsType[ProviderStatsType["PROVIDER_STATS_IN_SESSION_COUNT"] = 2] = "PROVIDER_STATS_IN_SESSION_COUNT";
    ProviderStatsType[ProviderStatsType["PROVIDER_STATS_TOTAL_COUNT"] = 3] = "PROVIDER_STATS_TOTAL_COUNT";
})(ProviderStatsType || (ProviderStatsType = {}));
var EducationalDegree;
(function (EducationalDegree) {
    EducationalDegree[EducationalDegree["HIGH_SCHOOL_DIPLOMA"] = 1] = "HIGH_SCHOOL_DIPLOMA";
    EducationalDegree[EducationalDegree["BACHELORS"] = 2] = "BACHELORS";
    EducationalDegree[EducationalDegree["MASTERS"] = 3] = "MASTERS";
    EducationalDegree[EducationalDegree["PHD"] = 4] = "PHD";
})(EducationalDegree || (EducationalDegree = {}));


/***/ }),

/***/ "qZOq":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message, MessageAttachment, MessageStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAttachment", function() { return MessageAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatus", function() { return MessageStatus; });
class Message {
    constructor() {
        this.fromMe = false;
        this.attachments = null;
        this.isFirst = false;
        this.isLast = false;
        this.isImage = false;
        this.isAudio = false;
        this.file = null;
    }
    getIsLast() {
        return this.isLast;
    }
    notifyDirty() {
        this.NotifyDirtySubject.next(this);
    }
}
class MessageAttachment {
}
var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["MESSAGE_STATUS_NONE"] = 0] = "MESSAGE_STATUS_NONE";
    MessageStatus[MessageStatus["MESSAGE_STATUS_QUEUED"] = 1] = "MESSAGE_STATUS_QUEUED";
    MessageStatus[MessageStatus["MESSAGE_STATUS_SENDING"] = 2] = "MESSAGE_STATUS_SENDING";
    MessageStatus[MessageStatus["MESSAGE_STATUS_FAILED"] = 3] = "MESSAGE_STATUS_FAILED";
    MessageStatus[MessageStatus["MESSAGE_STATUS_SENT"] = 4] = "MESSAGE_STATUS_SENT";
    MessageStatus[MessageStatus["MESSAGE_STATUS_RECEIVED"] = 5] = "MESSAGE_STATUS_RECEIVED";
    MessageStatus[MessageStatus["MESSAGE_STATUS_READ"] = 6] = "MESSAGE_STATUS_READ";
    MessageStatus[MessageStatus["MESSAGE_STATUS_TO_ME"] = 7] = "MESSAGE_STATUS_TO_ME"; // Message from another user.
})(MessageStatus || (MessageStatus = {}));


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../architecture/auto-single-get-resource */ "sTv3");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-helper.service */ "tLlE");
/* harmony import */ var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/architecture/shared-resource-async-request-bundle */ "JTjR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models/user */ "2hxB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../architecture/auto-arrayed-shared-resource */ "6cTQ");













let UserService = class UserService {
    constructor(http, env, auth, httpHelper) {
        this.http = http;
        this.env = env;
        this.auth = auth;
        this.httpHelper = httpHelper;
        this.balance = null;
        this.allUsersShared = new _architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_11__["AutoArrayedGetResource"]("users/getAll");
        this.userShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__["AutoSingleGetResource"]("users/getById");
        this.myPayments = new _architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_11__["AutoArrayedGetResource"]("users/payments");
        this.auth.loggedIn.subscribe(result => {
            this.balanceShared.request();
        });
        this.auth.loggedOut.subscribe(result => {
            this.balance = null;
        });
        this.balanceShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__["SharedResourceAsyncRequestBundle"](this.updateUserBalance, null, this);
        this.discountsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__["SharedResourceAsyncRequestBundle"](this.getDiscounts, null, this);
        this.statsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__["SharedResourceAsyncRequestBundle"](this.getStats, [], this);
    }
    updateUserBalance() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "users/getBalance";
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((result) => {
                this.balanceShared.setResource(result);
                this.balance = result;
                return result;
            }));
        }));
    }
    getById(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken().then(token => {
            let url = "users/getById/" + id;
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(data => {
                return data;
            })).toPromise();
        }));
    }
    getByUid(uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken().then(token => {
            let url = "users/getByUid/" + uid;
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(data => {
                return data;
            })).toPromise();
        }));
    }
    getPaymentAuthority(amount) {
        return this.httpHelper.getAuthenticated('payment/getPaymentAuthority/' + amount);
    }
    updateRemoteStats() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "stats";
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((result) => {
                this.env.remoteStats = result;
                return result;
            }));
        }));
    }
    getAdditionalInfo(userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(token => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
            });
            let url = "users/getAdditionalInfo/" + userId;
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(result => {
                return result;
            }));
        }));
    }
    updateAdditionalInfo(info) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(token => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
            });
            let url = "users/updateInfo";
            return this.http
                .post(this.env.API_URL + url, JSON.stringify(info), {
                headers: headers
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(result => {
                return result;
            }));
        }));
    }
    deposit(amount) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(token => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
            });
            let url = "users/deposit";
            return this.http
                .post(this.env.API_URL + url, {
                amount: amount
            }, {
                headers: headers
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(result => {
                return result;
            }));
        }));
    }
    getDiscounts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(token => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
            });
            let url = "getDiscounts";
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(result => {
                this.discountsShared.setResource(result);
                return result;
            }));
        }));
    }
    useDiscount(discountId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(token => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
            });
            let url = "useDiscount/" + discountId;
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: headers
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(result => {
                return result;
            }));
        }));
    }
    getStats() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "users/usersStats";
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((result) => {
                result = result;
                let remoteData = [
                    {
                        text: 'کل',
                        number: result[_models_user__WEBPACK_IMPORTED_MODULE_5__["UserStatsType"].USER_STATS_TOTAL_COUNT],
                        url: null,
                        link_options: null,
                    }, {
                        text: 'تایید شده',
                        number: result[_models_user__WEBPACK_IMPORTED_MODULE_5__["UserStatsType"].USER_STATS_VERIFIED_COUNT],
                        url: null,
                        link_options: null,
                    }
                ];
                this.statsShared.setResource(remoteData);
                return remoteData;
            }));
        }));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"]])
], UserService);



/***/ }),

/***/ "qm4o":
/*!*****************************************************************************!*\
  !*** ./src/app/common/provider-info-edit/provider-info-edit.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.category-name {\n  font-family: \"myIranSans\";\n  font-size: 0.7rem;\n}\n.category-icon {\n  color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcHJvdmlkZXItaW5mby1lZGl0L3Byb3ZpZGVyLWluZm8tZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBRUkseUJDREk7RURFSixpQkFBQTtBQWlESjtBQTlDQTtFQUVJLGNDSWM7QUQ0Q2xCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Byb3ZpZGVyLWluZm8tZWRpdC9wcm92aWRlci1pbmZvLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcbi5jYXRlZ29yeS1uYW1lXG57XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIGZvbnQtc2l6ZTowLjdyZW07XG5cbn1cbi5jYXRlZ29yeS1pY29uXG57XG4gICAgY29sb3I6JHNlY29uZGFyeS1jb2xvciA7XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */");

/***/ }),

/***/ "qm69":
/*!******************************************************!*\
  !*** ./src/app/services/sessions-manager-service.ts ***!
  \******************************************************/
/*! exports provided: SessionsManagerService, ChatType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsManagerService", function() { return SessionsManagerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatType", function() { return ChatType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-helper.service */ "tLlE");
/* harmony import */ var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../architecture/auto-single-get-resource */ "sTv3");
/* harmony import */ var _common_score_score_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/score/score.component */ "kg6Y");
/* harmony import */ var src_app_models_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/session */ "m6xN");
/* harmony import */ var _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../common/deposit/deposit.component */ "wDsb");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification.service */ "OC8m");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provider.service */ "gs/X");
/* harmony import */ var src_app_models_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/provider */ "oPjg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _im_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./im.service */ "K4UH");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../models/user */ "2hxB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./env.service */ "5zL6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../architecture/shared-resource-async-request-bundle */ "JTjR");























let SessionsManagerService = class SessionsManagerService {
    constructor(env, auth, http, imService, navController, providerService, userService, notificationService, alert, actionSheet, httpHelper) {
        this.env = env;
        this.auth = auth;
        this.http = http;
        this.imService = imService;
        this.navController = navController;
        this.providerService = providerService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.alert = alert;
        this.actionSheet = actionSheet;
        this.httpHelper = httpHelper;
        this.myCurrentSessions = [];
        this.myPastSessions = [];
        this.myCurrentSessionsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.myPastSessionsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.isUser = null;
        this.onlineObservables = [];
        this.onlineIds = [];
        this.hasActiveIMTopic = false;
        this.IMPeerUser = null;
        this.MyUser = null;
        this.sessionShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("sessions/getById");
        this.usrPeerProviders = [];
        this.pvdPeerUsers = [];
        this.myCurrentSessionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getMyCurrentSessions, [], this);
        this.allMySessionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getAllMySessions, [], this);
        this.myActiveRequestsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getMyActiveRequests, [], this);
        this.myPeerSubscriptionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getPeers, [], this);
        this.selectedProviderReservedSessionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getProviderReservedSessions, [], this);
        this.auth.getUser().then((user) => {
            this.MyUser = user;
        });
        this.auth.loggedOut.subscribe((result) => {
            if (result == true) {
                //logout stuff
                this.isUser = null;
            }
        });
        this.notificationService.sessionManagerService = this;
        this.imService.contactsFetched.subscribe((result) => {
            if (result) {
                this.onlineIds.forEach((id) => {
                    let index = this.onlineIds.indexOf(id);
                    this.onlineObservables[index].next(this.imService.isContactTopicOnline(id));
                });
                this.auth.isUser().then((is) => {
                    this.isUser = is;
                    if (is) {
                        //this.getUsrPeerProviders();
                    }
                    else {
                        //this.getPvdPeerUsers();
                        //this.checkPublicProviderPresSubscription();
                    }
                });
            }
        });
    }
    checkPublicProviderPresSubscription() {
        const topic = this.env.REMOTE_CONFIG.provider_pres_topic;
        if (!this.imService.isTopicInContacts(topic)) {
            this.imService.acceptTopic(topic);
        }
    }
    returnUrlIfNoActiveIMTopic() {
        return this.auth
            .isAuthenticated()
            .then((result) => {
            if (result) {
                return this.auth.isUser().then((result) => {
                    if (result) {
                        return "peer-chats/" + this.env.USER_ROLE_ID;
                    }
                    else {
                        return "peer-chats/" + this.env.USER_ROLE_ID;
                    }
                });
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])("login").toPromise();
            }
        }, (error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])("login").toPromise();
        })
            .catch();
    }
    getProviderReservedSessions(providerId) {
        let url = "sessions/getProviderPresentAndFutureSessions/" + providerId;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                this.selectedProviderReservedSessionsShared.setResource(result);
                return result;
            }));
        }));
    }
    getAllMySessions() {
        let url = "sessions/getSessions";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                this.allMySessionsShared.setResource(result);
                return result;
            }));
        }));
    }
    getMyActiveRequests() {
        let url = "sessions/getActiveRequests";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                this.myActiveRequestsShared.setResource(result);
                return result;
            }));
        }));
    }
    getMyCurrentSessions() {
        let url = "sessions/getPresentAndFutureSessions";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                this.myCurrentSessions = result;
                this.myCurrentSessionsShared.setResource(result);
                this.myCurrentSessionsUpdated.next(this.myCurrentSessions);
                return result;
            }));
        }));
    }
    getMyPastSessions() {
        let url = "sessions/getPastSessions";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .get(this.env.API_URL + url, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                this.myPastSessions = result;
                this.myPastSessionsUpdated.next(this.myPastSessions);
                return result;
            }));
        }));
    }
    remoteEndSession(session) {
        let url = "sessions/end/" + session.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                return result;
            }));
        }));
    }
    calculateSessionDuration(session) {
        if (session.started == null) {
            return null;
        }
        let endDate = null;
        if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ENDED) {
            endDate = session.ended;
        }
        else if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ACTIVE) {
            endDate = this.env.generateUTCNowString();
        }
        var diffMs = new Date(endDate).getTime() - new Date(session.started).getTime(); // milliseconds between now & Christmas
        var diffDays = Math.floor(diffMs / 86400000); // days
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        var diffMins = Math.ceil(((diffMs % 86400000) % 3600000) / 60000); // minutes
        var totalDiffMins = Math.floor(diffMs / 60000);
        return totalDiffMins;
    }
    calculateSessionTotalFee(session) {
        let duration = session.duration;
        if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ACTIVE ||
            src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ENDED) {
            duration = this.calculateSessionDuration(session);
        }
        if (duration != null) {
            if (duration < 5) {
                return 0;
            }
            let total = duration * session.per_minute_fee;
            return total;
        }
        return 0;
    }
    addOnlineObserver(user) {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.onlineObservables.push(observable);
        this.onlineIds.push(user.tinode_uid);
        return observable;
    }
    removeOnlineObserver(user) {
        let index = this.onlineIds.indexOf(user.tinode_uid);
        this.onlineIds.splice(index, 1);
        this.onlineObservables.splice(index, 1);
    }
    usrHasRequestedSessionForThisProvider(providerId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
        return this.getMyCurrentSessions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((sessions) => {
            let found = 0;
            sessions.forEach((session) => {
                if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].isRequested(session)) {
                    found++;
                }
            });
            return found > 0;
        }));
    }
    chechRequestEligibility(providerId, dateFrom, dateTo, duration, type, timingType) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "sessions/checkRequestEligibility";
            return this.http.post(this.env.API_URL + url, {
                provider_id: providerId,
                date_from: dateFrom,
                date_to: dateTo,
                duration: duration,
                type: type,
                timing_type: timingType,
            }, {
                headers: headers,
            });
        }));
    }
    usrRequestSession(providerId, dateFrom, dateTo, duration, type, timingType) {
        return this.usrHasRequestedSessionForThisProvider(providerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((has) => {
            if (!has) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.imService.createNewGroupTopic()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((topicName) => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
                        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                            Authorization: token["token_type"] + " " + token["access_token"],
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        });
                        let url = "sessions/request";
                        return this.http
                            .post(this.env.API_URL + url, {
                            provider_id: providerId,
                            chat_topic_name: topicName,
                            reserved_from: dateFrom,
                            reserved_to: dateTo,
                            duration: duration,
                            type: type,
                            timing_type: timingType,
                        }, {
                            headers: headers,
                        })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((session) => {
                            this.notificationService
                                .notifySessionUpdate(session.id, session.provider.user.id)
                                .subscribe();
                            this.userService.updateUserBalance().subscribe();
                            this.imService.resetContactList();
                            this.myCurrentSessions.push(session);
                            this.myCurrentSessionsUpdated.next(this.myCurrentSessions);
                            return session;
                        }));
                    }));
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(null);
        }));
    }
    incomeReport(dateFrom, dateTo) {
        let url = "sessions/selectRangeByDate";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, {
                from_date: dateFrom,
                to_date: dateTo,
            }, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                return result;
            }));
        }));
    }
    isUserOnline(user) {
        if (user == null)
            return false;
        return this.imService.isContactTopicOnline(user.tinode_uid);
    }
    getUserUnreadMessagesCount(user) {
        return this.getTopicUnreadMessagesCount(user.tinode_uid);
    }
    getSessionUnreadMessagesCount(session) {
        return this.getTopicUnreadMessagesCount(session.chat_topic_name);
    }
    getTopicUnreadMessagesCount(topic) {
        let contact = this.imService.chatList.find((contactItem) => {
            return contactItem.topic == topic;
        });
        if (contact != undefined) {
            if (contact.unread != undefined)
                return parseInt(contact.unread);
        }
        return 0;
    }
    isUserInContacts(user) {
        if (user == null)
            return false;
        return this.imService.isTopicInContacts(user.tinode_uid);
    }
    isContactListReady() {
        return this.imService.fetchedContactList;
    }
    getUsrPeerProviders() {
        let uids = [];
        this.imService.chatList
            .filter((contact) => {
            return contact.topic.substr(0, 3) == "usr";
        })
            .forEach((contact) => {
            uids.push(contact.topic);
            if (this.usrPeerProviders.find((provider) => {
                return provider.user.tinode_uid == contact.topic;
            }) == undefined) {
                let provider = new src_app_models_provider__WEBPACK_IMPORTED_MODULE_10__["Provider"](true, this.providerService.getByUid, this.providerService, contact.topic);
                provider.user = new _models_user__WEBPACK_IMPORTED_MODULE_13__["User"]();
                provider.user.tinode_uid = contact.topic;
                this.usrPeerProviders.push(provider);
            }
        });
    }
    getPvdPeerUsers() {
        let uids = [];
        this.imService.chatList
            .filter((contact) => {
            return contact.topic.substr(0, 3) == "usr";
        })
            .forEach((contact) => {
            uids.push(contact.topic);
            if (this.pvdPeerUsers.find((user) => {
                return user.tinode_uid == contact.topic;
            }) == undefined) {
                let user = new _models_user__WEBPACK_IMPORTED_MODULE_13__["User"](true, this.userService.getByUid, this.userService, contact.topic);
                user.tinode_uid = contact.topic;
                this.pvdPeerUsers.push(user);
            }
        });
    }
    startPeer2PeerChat(user) {
        this.startChat(user.tinode_uid, user, null, !this.isUserInContacts(user));
    }
    usrStartSessionChat(session) {
        this.startChat(session.chat_topic_name, session.provider.user, session, false);
    }
    pvdStartSessionChat(session) {
        this.startChat(session.chat_topic_name, session.user, session, false);
    }
    leaveChatPage() {
        this.imService.leave(this.imService.topic).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe();
        this.imService.notifyEnteredChatPage(false);
        this.IMPeerUser = null;
        this.session = null;
        this.hasActiveIMTopic = false;
    }
    enterChat(type, id, providerPerspective) {
        this.navController.navigateForward(["/messenger", type, id, (providerPerspective ? 1 : 0)]);
    }
    startChat(topic, peerUser, session, isNew) {
        this.imService.setTopic(topic, isNew).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(-1))).subscribe((result) => {
            if (result) {
                this.IMPeerUser = peerUser;
                this.session = session;
                this.imService.peerUser = peerUser;
                this.hasActiveIMTopic = true;
                this.navController.navigateForward(["/usr/session"]);
            }
            else {
                this.alert.presentError("ورود به گفتگو با مشکل مواجه شد.");
            }
        });
    }
    acceptSession(session) {
        let url = "sessions/accept/" + session.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                result;
                this.notificationService
                    .notifySessionUpdate(session.id, session.user.id)
                    .subscribe();
                this.myActiveRequestsShared.request();
                this.allMySessionsShared.request();
                this.imService.acceptTopic(session.chat_topic_name);
                return result;
            }));
        }));
    }
    rejectSession(session) {
        return this.endSession(session);
    }
    startSession(session) {
        let url = "sessions/start/" + session.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                this.notificationService
                    .notifySessionUpdate(session.id, session.user.id)
                    .subscribe();
                this.allMySessionsShared.request();
                return result;
            }));
        }));
    }
    endSession(session) {
        let url = "sessions/end/" + session.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            return this.http
                .post(this.env.API_URL + url, null, {
                headers: {
                    Authorization: token["token_type"] + " " + token["access_token"],
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((result) => {
                this.notificationService
                    .notifySessionUpdate(session.id, session.user.id)
                    .subscribe();
                this.myActiveRequestsShared.request();
                this.allMySessionsShared.request();
                this.openReservationPage();
                return result;
            }));
        }));
    }
    updateSessioStatenInCurrentSessions(session) {
        let oldSession = this.myCurrentSessions.find((rSession) => {
            return rSession.id == session.id;
        });
        oldSession.accepted = session.accepted;
        oldSession.created_at = session.created_at;
        oldSession.ended = session.ended;
        oldSession.started = session.started;
        this.myCurrentSessionsUpdated.next(this.myCurrentSessions);
    }
    removeSessionFromCurrentSessions(session) {
        this.myCurrentSessions.splice(this.myCurrentSessions.indexOf(this.myCurrentSessions.find((rSession) => {
            return rSession.id == session.id;
        })), 1);
        this.myCurrentSessionsUpdated.next(this.myCurrentSessions);
    }
    hasEnoughBalanceForSessionRequest(provider, sessionType, duration, showNotEnoughBalanceModal = true) {
        let fee = provider.per_minute_text_fee;
        if (sessionType == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionType"].Call) {
            fee = provider.per_minute_call_fee;
        }
        const cost = fee * duration;
        const balance = this.userService.balanceShared.resource().spendable;
        if (cost > balance) {
            if (showNotEnoughBalanceModal) {
                this.alert.presentNotEnoughBalance(cost, balance, _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__["DepositComponent"]);
            }
            return false;
        }
        return true;
    }
    updateScore(sessionId, score) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "sessions/updateScore/" + sessionId;
            return this.http.post(this.env.API_URL + url, {
                score: score,
            }, {
                headers: headers,
            });
        }));
    }
    reserveSession(date, hours, provider, sessionTiminType, sessionInfoComponent) {
        this.openSessionTypesActionSheet(sessionTiminType, hours, date, provider, sessionInfoComponent);
    }
    openSessionTypesActionSheet(timingType, reserveHours, date, provider, sessionInfoComponent) {
        let buttons = [];
        buttons.push({
            text: "مشاوره نوشتاری",
            role: "destructive",
            handler: () => {
                this.openSessionDurationsActionSheet(src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionType"].TEXT, timingType, reserveHours, date, provider, sessionInfoComponent);
            },
        });
        buttons.push({
            text: "مشاوره تلفنی",
            role: "destructive",
            handler: () => {
                this.openSessionDurationsActionSheet(src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionType"].Call, timingType, reserveHours, date, provider, sessionInfoComponent);
            },
        });
        this.alert.addCancelButton(buttons);
        this.alert.presentActionSheet(buttons).subscribe();
    }
    openRequestSessionPage(duration, sessionType, sessionTimingType, hours, date, provider, sessionInfoComponent) {
        if (this.hasEnoughBalanceForSessionRequest(provider, sessionType, duration)) {
            const props = {
                session: src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].createMockSession(hours, date, provider, duration, sessionType, sessionTimingType),
                providerPerspective: false,
            };
            this.alert
                .presentModal(sessionInfoComponent, props)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1))
                .subscribe();
        }
    }
    openSessionDurationsActionSheet(sessionType, timingType, reserveHours, date, provider, sessionInfoComponent) {
        let buttons = [];
        for (let i = 1; i < 5; i++) {
            let duration = i * 15;
            buttons.push({
                text: duration + " دقیقه",
                role: "destructive",
                handler: () => {
                    this.openRequestSessionPage(duration, sessionType, timingType, reserveHours, date, provider, sessionInfoComponent);
                },
            });
        }
        this.alert.addCancelButton(buttons);
        this.alert.presentActionSheet(buttons).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe();
    }
    handleIncomingSessionUpdateNotification(session, sender) {
        let senderName = _models_user__WEBPACK_IMPORTED_MODULE_13__["User"].getName(sender);
        let notifMessage = "";
        let pageToOpen = null;
        switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session)) {
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].REQUESTED:
                notifMessage = "درخواست جلسه جدید از طرف " + senderName;
                this.myActiveRequestsShared.request();
                pageToOpen = this.openPvdActiveRequestsPage;
                break;
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].REJECTED:
                notifMessage = "درخواست شما توسط " + senderName + " رد شد";
                this.userService.balanceShared.request();
                this.allMySessionsShared.request();
                pageToOpen = this.openRequestLogPage;
                break;
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ENDED:
                notifMessage = "جلسه مشاوره توسط " + senderName + " پایان یافت.";
                pageToOpen = this.openReservationPage;
                this.allMySessionsShared.request();
                this.openReservationPage();
                break;
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].RESERVED:
                notifMessage = "درخواست رزرو شما توسط " + senderName + " تأیید شد";
                this.allMySessionsShared.request();
                pageToOpen = this.openReservationPage;
                break;
            case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ACTIVE:
                notifMessage = "جلسه مشاوره با " + senderName + " باز شد";
                this.allMySessionsShared.request();
                pageToOpen = this.openReservationPage;
                break;
        }
        if (pageToOpen) {
            this.alert.presentViewNotify(notifMessage, pageToOpen, this);
        }
        else {
            this.alert.presentNotif(notifMessage);
        }
    }
    openReservationPage() {
        this.auth.getUser().then((user) => {
            if (user.role_id == this.env.USER_ROLE_ID) {
                this.navController.navigateRoot(["/usr-reservations"]);
            }
            else {
                this.navController.navigateRoot(["/pvd-reservations"]);
            }
        });
    }
    openRequestLogPage() {
        this.auth.getUser().then((user) => {
            if (user.role_id == this.env.USER_ROLE_ID) {
                this.navController.navigateRoot(["/usr-request-log"]);
            }
            else {
                this.navController.navigateRoot(["/pvd-request-log"]);
            }
        });
    }
    openPvdActiveRequestsPage() {
        this.navController.navigateRoot(["/pvd-active-requests"]);
    }
    openScoreSession(session, score, callback, thisObject) {
        this.alert.presentModal(_common_score_score_component__WEBPACK_IMPORTED_MODULE_3__["ScoreComponent"], { session: session, score: score }, true, callback, thisObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe();
    }
    getPeers() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "getPeers";
            return this.http.get(this.env.API_URL + url, {
                headers: headers,
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(result => {
                this.myPeerSubscriptionsShared.setResource(result);
                return result;
            }));
        }));
    }
};
SessionsManagerService.ctorParameters = () => [
    { type: _env_service__WEBPACK_IMPORTED_MODULE_18__["EnvService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"] },
    { type: _im_service__WEBPACK_IMPORTED_MODULE_12__["IMService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["NavController"] },
    { type: _provider_service__WEBPACK_IMPORTED_MODULE_9__["ProviderService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ActionSheetController"] },
    { type: _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"] }
];
SessionsManagerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_env_service__WEBPACK_IMPORTED_MODULE_18__["EnvService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"],
        _im_service__WEBPACK_IMPORTED_MODULE_12__["IMService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["NavController"],
        _provider_service__WEBPACK_IMPORTED_MODULE_9__["ProviderService"],
        _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
        _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ActionSheetController"],
        _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"]])
], SessionsManagerService);

var ChatType;
(function (ChatType) {
    ChatType[ChatType["P2P_WITH_USER"] = 1] = "P2P_WITH_USER";
    ChatType[ChatType["P2P_WITH_PROVIDER"] = 2] = "P2P_WITH_PROVIDER";
    ChatType[ChatType["SESSION"] = 3] = "SESSION";
})(ChatType || (ChatType = {}));


/***/ }),

/***/ "qnXZ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/date-picker/date-picker.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>انتخاب تاریخ</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\">\n      <ion-item button (click)=\"select(0)\">\n        <span class=\"small-text light-text\">سال</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">\n        {{getYear()}}\n        </span>\n      </ion-item>\n      <ion-item button (click)=\"select(1)\">\n        <span class=\"small-text light-text\">ماه</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">\n          {{getMonthName()}}\n        </span>\n      </ion-item>\n      <ion-item button (click)=\"select(2)\">\n        <span class=\"small-text light-text\">روز</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">\n          {{day}}\n        </span>\n      </ion-item>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <ion-button class=\"primary-button\" (click)=\"confirm()\" fill=\"solid\">\n          تأیید\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "rywU":
/*!********************************************************!*\
  !*** ./src/app/common/static/terms/terms.component.ts ***!
  \********************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms.component.html */ "+HkC");
/* harmony import */ var _terms_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.component.scss */ "4bXV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let TermsComponent = class TermsComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismiss() {
        this.modal.dismiss();
    }
    ngOnInit() { }
};
TermsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
TermsComponent.propDecorators = {
    providerPerspective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
TermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-terms',
        template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], TermsComponent);



/***/ }),

/***/ "sL+R":
/*!***************************************************************************!*\
  !*** ./src/app/common/provider-info-edit/provider-info-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProviderInfoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderInfoEditComponent", function() { return ProviderInfoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_provider_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./provider-info-edit.component.html */ "0uqL");
/* harmony import */ var _provider_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider-info-edit.component.scss */ "qm4o");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../select-provider-category/select-provider-category.component */ "bPLR");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/provider.service */ "gs/X");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/provider */ "oPjg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");












let ProviderInfoEditComponent = class ProviderInfoEditComponent {
    constructor(modal, modalController, env, providerService, actionSheet, alert) {
        this.modal = modal;
        this.modalController = modalController;
        this.env = env;
        this.providerService = providerService;
        this.actionSheet = actionSheet;
        this.alert = alert;
        this.editable = false;
        this.providerGroups = [];
        this.categories = [];
        this.fees = [];
        this.selectedTextFee = null;
        this.selectedCallFee = null;
        this.selectedDegree = 3;
        this.getDegreeText = src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__["Provider"].getDegreeString;
    }
    loadProviderCategories() {
        //this.env.somethingIsPending("fetching user provider groups");
        // return this.providerService.getCategories().pipe(
        //   map((result) => {
        //     //this.env.somethingIsDonePending("fetching user provider groups");
        //     return (this.providerGroups = result as ProviderGroup[]);
        //   })
        // );
    }
    loadFees() {
        return this.providerService.getFees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((result) => {
            return (this.fees = result);
        }));
    }
    ngOnInit() {
        if (this.provider.provider_categories) {
            this.categories = this.provider.provider_categories;
        }
        this.selectedTextFee = (this.provider.per_minute_text_fee) ? this.provider.per_minute_text_fee : null;
        this.selectedCallFee = (this.provider.per_minute_call_fee) ? this.provider.per_minute_call_fee : null;
        //this.loadProviderCategories().subscribe();
        this.loadFees().subscribe();
    }
    addCategory() {
        if (!this.editable)
            return;
        this.presentSelectCategoryModal().subscribe();
    }
    presentSelectCategoryModal() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.modalController.create({
            component: _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_4__["SelectProviderCategoryComponent"],
            componentProps: {
                providerGroups: this.providerGroups,
            },
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((modalController) => {
            modalController.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(modalController.onDidDismiss()).subscribe((data) => {
                if (data["data"]) {
                    if (data["data"]) {
                        this.addCategoryToProvider(data["data"]);
                    }
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(modalController.present());
        }));
    }
    addCategoryToProvider(selectedCategory) {
        let hasCat = false;
        hasCat = this.categories.find((category) => {
            return category.id == selectedCategory.id;
        });
        if (!hasCat) {
            this.categories.push(selectedCategory);
        }
    }
    deleteCategory(id) {
        if (!this.editable)
            return;
        let cat = this.categories.find((category) => {
            return category.id == id;
        });
        this.categories.splice(this.categories.indexOf(cat), 1);
    }
    submit() {
        let provider = new src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__["Provider"]();
        provider.per_minute_call_fee = this.selectedCallFee;
        provider.per_minute_text_fee = this.selectedTextFee;
        provider.provider_categories = this.categories;
        provider.education_degree = this.selectedDegree;
        provider.id = this.provider.id;
        this.providerService.updateProviderInfo(provider).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(error => {
            this.alert.presentError("به روزرسانی اطلاعات با مشکل روبرو شد.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
        })).subscribe(result => {
            if (result) {
                this.provider = result;
                this.alert.presentSuccess("به روزرسانی اطلاعات انجام شد.");
                this.dismiss();
            }
        });
    }
    dismiss(data = null) {
        this.modal.dismiss(data);
    }
    openCallFees() {
        if (!this.editable)
            return;
        let buttons = [];
        if (this.fees.length) {
            this.fees.filter(fee => {
                return fee.name == "call";
            }).forEach(fee => {
                buttons.push({
                    text: fee.value,
                    role: "destructive",
                    handler: () => {
                        this.selectedCallFee = fee.value;
                    },
                });
            });
            this.alert.presentActionSheet(buttons, true).subscribe();
        }
    }
    isFormValid() {
        return this.selectedCallFee && this.selectedTextFee && this.categories.length;
    }
    openTextFees() {
        if (!this.editable)
            return;
        let buttons = [];
        if (this.fees.length) {
            this.fees.filter(fee => {
                return fee.name == "text";
            }).forEach(fee => {
                buttons.push({
                    text: fee.value,
                    role: "destructive",
                    handler: () => {
                        this.selectedTextFee = fee.value;
                    },
                });
            });
            this.alert.presentActionSheet(buttons, true).subscribe();
        }
    }
    openDegrees() {
        if (!this.editable)
            return;
        let buttons = [];
        for (let i = 1; i < 5; i++) {
            buttons.push({
                text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__["Provider"].getDegreeString(i),
                role: "destructive",
                handler: () => {
                    this.selectedDegree = i;
                },
            });
        }
        this.alert.presentActionSheet(buttons, true).subscribe();
    }
};
ProviderInfoEditComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"] },
    { type: src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
ProviderInfoEditComponent.propDecorators = {
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    provider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }]
};
ProviderInfoEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: "app-provider-info-edit",
        template: _raw_loader_provider_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_provider_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"],
        src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], ProviderInfoEditComponent);



/***/ }),

/***/ "sMNq":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/static/contact/contact.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>تماس با ما</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\n    <ion-label class=\"light-text normal-text\">http://hamiline.ir\n    </ion-label>\n  </ion-item>\n  \n  <ion-item>\n    <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\n    <ion-label class=\"light-text normal-text\">info@hamiline.ir    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"logo-whatsapp\"></ion-icon>\n    <ion-label class=\"number-text light-text normal-text\">09012045559\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\n    <ion-label class=\"number-text light-text normal-text\">@hamiline.ir\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"paper-plane-outline\"></ion-icon>\n    <ion-label class=\"number-text light-text normal-text\">t.me/hamiline\n    </ion-label>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "sTv3":
/*!**********************************************************!*\
  !*** ./src/app/architecture/auto-single-get-resource.ts ***!
  \**********************************************************/
/*! exports provided: AutoSingleGetResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSingleGetResource", function() { return AutoSingleGetResource; });
/* harmony import */ var _single_shared_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-shared-resource */ "Zn2K");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-resource-async-request-bundle */ "JTjR");



class AutoSingleGetResource extends _single_shared_resource__WEBPACK_IMPORTED_MODULE_0__["SingleSharedResource"] {
    constructor(url, authenticated = true) {
        super(null, null, null);
        this.url = url;
        this.authenticated = authenticated;
        this.producer = this.producerFunction;
        this.producer = this.producer.bind(this);
    }
    producerFunction(argument) {
        return _shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_2__["SharedResourceAsyncRequestBundle"].HttpHelper
            .get(this.url + "/" + argument, this.authenticated)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            this.setResource(result);
            return result;
        }));
    }
}


/***/ }),

/***/ "sWap":
/*!*********************************************************************************!*\
  !*** ./src/app/common/additional-info-edit/additional-info-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hZGRpdGlvbmFsLWluZm8tZWRpdC9hZGRpdGlvbmFsLWluZm8tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "snxI":
/*!*************************************************!*\
  !*** ./src/app/services/smart-audio.service.ts ***!
  \*************************************************/
/*! exports provided: SmartAudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartAudioService", function() { return SmartAudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");







let SmartAudioService = class SmartAudioService {
    constructor(platform, http, androidPermissions) {
        this.platform = platform;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.audioType = "html5";
        this.sounds = [];
        this.recordingStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.recordingStopped = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sourcePlaying = false;
        if (platform.is("cordova")) {
            this.audioType = "native";
        }
        this.draw = this.draw.bind(this);
    }
    draw() {
        if (this.sourcePlaying) {
            let drawVisual = requestAnimationFrame(this.draw);
        }
        this.analyser.getByteFrequencyData(this.dataArray);
        var barWidth = (100 / this.bufferLength) * 2.5;
        var x = 0;
        var barHeight;
        for (var i = 0; i < this.bufferLength; i++) {
            barHeight = this.dataArray[i] / 2;
            x += barWidth + 1;
        }
    }
    preload(key, asset) {
        let audio = {
            key: key,
            asset: asset,
            type: "html5",
        };
        this.sounds.push(audio);
    }
    play(key, loop = false) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            let audio = this.sounds.find((sound) => {
                return sound.key === key;
            });
            let audioAsset = new Audio(audio.asset);
            audioAsset.addEventListener("ended", () => {
                //observer.next(true);
                observer.complete();
            });
            if (loop) {
                audioAsset.loop = true;
            }
            audioAsset.play().then(() => {
                observer.next(audioAsset);
            });
        });
    }
    pause(auidoHandle) {
        auidoHandle.pause();
    }
    stopRecord() {
        if (this.mediaRecorder) {
            this.mediaRecorder.stop();
        }
    }
    checkPermission() {
        if (this.platform.is("cordova")) {
            return this.androidPermissions
                .checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
                .then((result) => {
                if (result.hasPermission) {
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        return Promise.resolve(true);
    }
    askPermission() {
        return this.androidPermissions
            .requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
            .then((result) => {
            if (result.hasPermission) {
                return true;
            }
            return false;
        });
    }
    startRecord() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(navigator.mediaDevices.getUserMedia({ audio: true }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe((stream) => {
                this.mediaRecorder = new MediaRecorder(stream);
                console.log("media recorder");
                //this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.RECORD]);
                this.play("beep1").subscribe((result) => {
                    this.mediaRecorder.start();
                });
                const audioChunks = [];
                this.mediaRecorder.addEventListener("dataavailable", (event) => {
                    audioChunks.push(event.data);
                });
                this.mediaRecorder.addEventListener("start", () => {
                    this.recordingStarted.next();
                });
                this.mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    observer.next(audioBlob);
                    this.recordingStopped.next();
                    observer.complete();
                    //const audioUrl = URL.createObjectURL(audioBlob);
                    //const audio = new Audio(audioUrl);
                    //audio.play();
                });
            });
        });
    }
};
SmartAudioService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"] }
];
SmartAudioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"]])
], SmartAudioService);



/***/ }),

/***/ "tCwg":
/*!******************************************!*\
  !*** ./src/app/services/call.service.ts ***!
  \******************************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_call_call_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/call/call.component */ "eKhv");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/smart-audio.service */ "snxI");
/* harmony import */ var _models_voice_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models/voice-call */ "BbMm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");













let CallService = class CallService {
    constructor(auth, http, env, smartAudio, alert, platform) {
        this.auth = auth;
        this.http = http;
        this.env = env;
        this.smartAudio = smartAudio;
        this.alert = alert;
        this.platform = platform;
        this.innerCall = null;
        this.callStateUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.callFinished = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.cordovaCall = null;
        this.kavenegarCall = new KavenegarCall(Environment.PRODUCTION);
    }
    setCallState(state) {
        if (state == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING && this.voiceCall.state != _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING) {
            if (this.voiceCall.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].OUTGOING) {
                this.smartAudio
                    .play("ringback-tone", true)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
                    .subscribe((element) => {
                    this.ringbackAudioHandle = element;
                });
            }
            else {
                this.smartAudio
                    .play("ringing", true)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
                    .subscribe((element) => {
                    this.ringingAudioHandle = element;
                });
            }
        }
        if (this.voiceCall.state == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING) {
            console.log(state);
            if (this.voiceCall.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].OUTGOING) {
                if (this.ringbackAudioHandle) {
                    this.smartAudio.pause(this.ringbackAudioHandle);
                }
            }
            else {
                if (this.ringingAudioHandle) {
                    this.smartAudio.pause(this.ringingAudioHandle);
                }
            }
        }
        this.voiceCall.state = state;
        this.callStateUpdated.next(this.voiceCall);
    }
    call(receptor, maxDurationInMinutes) {
        this.auth.getUser().then((user) => {
            let call = new _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCall"]();
            call.receptor = receptor;
            call.caller = user;
            call.maxDuration = maxDurationInMinutes * 60;
            call.direction = _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].OUTGOING;
            this.voiceCall = call;
            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].NEW);
            this.alert
                .presentModal(_common_call_call_component__WEBPACK_IMPORTED_MODULE_1__["CallComponent"], { call: call }, false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
                .subscribe();
        });
    }
    receiveCall(call) {
        this.auth.getUser().then((user) => {
            call.direction = _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].INCOMING;
            call.receptor = user;
            this.voiceCall = call;
            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].NEW);
            this.initiateConnectCall();
            this.alert
                .presentModal(_common_call_call_component__WEBPACK_IMPORTED_MODULE_1__["CallComponent"], { call: call }, false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
                .subscribe();
        });
    }
    makeTheCall() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "makeCall";
            return this.http
                .post(this.env.API_URL + url, {
                receptor_user_id: this.voiceCall.receptor.id,
                max_duration: this.voiceCall.maxDuration,
            }, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((result) => {
                return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])((tempCall) => {
                this.voiceCall.id = tempCall.id;
                this.voiceCall.access_token = tempCall.access_token;
                this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].TRYING);
            }));
        }));
    }
    cancelCall() {
        this.voiceCall = null;
        this.innerCall = null;
    }
    acceptCall() {
        this.innerCall.accept();
        this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].ACCEPTED);
    }
    ring() {
        this.innerCall.ringing();
        this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING);
    }
    hangupCall() {
        this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FINISHED);
        this.innerCall.hangup();
    }
    rejectCall() {
        this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FLUSHED);
        this.innerCall.reject();
    }
    disposeCall() {
        console.log('dispose');
        if (this.innerCall) {
            console.log('dispose if');
            this.innerCall.dispose();
            this.callFinished.next(this.voiceCall);
            this.cancelCall;
        }
    }
    initiateConnectCall() {
        this.smartAudio.checkPermission().then((result) => {
            if (result) {
                this.connectCall();
            }
            else {
                this.smartAudio.askPermission().then((result) => {
                    if (result) {
                        this.connectCall();
                    }
                    else {
                        return;
                    }
                }, (reject) => {
                    return;
                });
            }
        });
    }
    connectCall() {
        navigator.mediaDevices
            .getUserMedia({
            audio: true,
        })
            .then((stream) => {
            console.log("stream");
            const params = {
                callId: this.voiceCall.id,
                accessToken: this.voiceCall.access_token,
                localStream: stream,
                remoteElement: document.getElementById("audio2"),
            };
            this.kavenegarCall.initCall(params, (joinResult, call) => {
                if (call == null) {
                    console.info("initCall was not successful :" + joinResult);
                    return;
                }
                this.innerCall = call;
                if (call.direction === CallDirection.INBOUND) {
                }
                call.onFinished = (reason) => { };
                call.onMediaStateChanged = (event) => {
                    if (call.direction === CallDirection.INBOUND) {
                        if (call.receptorMediaStatus == "connected") {
                            if (this.voiceCall.state == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].NEW) {
                                this.ring();
                                this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING);
                            }
                        }
                    }
                    console.info("Remote Media Status => caller :" +
                        call.callerMediaStatus +
                        " , receptor : " +
                        call.receptorMediaStatus);
                };
                call.onMessagingStateChanged = (event) => {
                    console.info("Messaging Status : " + event);
                };
                call.onStatusChanged = (status) => {
                    switch (status) {
                        case "ringing":
                            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING);
                            break;
                        case "accepted":
                            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].ACCEPTED);
                            break;
                        case "conversation":
                            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].CONVERSATION);
                            break;
                        case "finished":
                            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FINISHED);
                            this.disposeCall();
                            break;
                        case "flushed":
                            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FLUSHED);
                            break;
                    }
                    console.info("Call Status : " + status);
                };
            });
        })
            .catch((error) => {
            alert("getUserMediaError :" + error);
        });
    }
};
CallService.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"] },
    { type: src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_4__["SmartAudioService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
CallService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"],
        src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_4__["SmartAudioService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], CallService);



/***/ }),

/***/ "tJN7":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-info-icon-summary/session-info-icon-summary.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item   class=\"session-info-summary\" [ngClass]=\"stateClass\">\n  <span class=\"small-text light-text\">{{label}}</span>\n  <div slot=\"end\" class=\"session-info-summary-row\">\n    <div class=\"session-info-summary-item session-info-summary-time\">\n      <ion-icon\n        class=\"session-info-summary-item-icon\"\n        name=\"time-outline\"\n      ></ion-icon>\n      <span class=\"session-info-summary-item-text small-text number-text\">{{ time }}</span>\n    </div>\n    <div *ngIf=\"date\" class=\"session-info-summary-item session-info-summary-date\">\n      <ion-icon\n        class=\"session-info-summary-item-icon\"\n        name=\"calendar-outline\"\n      ></ion-icon>\n      <span class=\"session-info-summary-item-text small-text number-text\">{{ date}}</span>\n    </div>\n  </div>\n</ion-item>");

/***/ }),

/***/ "tLlE":
/*!*************************************************!*\
  !*** ./src/app/services/http-helper.service.ts ***!
  \*************************************************/
/*! exports provided: HttpHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHelperService", function() { return HttpHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let HttpHelperService = class HttpHelperService {
    constructor(auth, http, env) {
        this.auth = auth;
        this.http = http;
        this.env = env;
    }
    getAuthenticated(url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            return this.http.get(this.env.API_URL + url, {
                headers: headers
            });
        }));
    }
    get(url, authenticated = true) {
        if (authenticated) {
            return this.getAuthenticated(url);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            return this.http.get(this.env.API_URL + url, {
                headers: headers
            });
        }));
    }
};
HttpHelperService.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"] }
];
HttpHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"]])
], HttpHelperService);



/***/ }),

/***/ "u7RM":
/*!***************************************************************!*\
  !*** ./src/app/common/remote-stats/remote-stats.component.ts ***!
  \***************************************************************/
/*! exports provided: RemoteStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStatsComponent", function() { return RemoteStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_remote_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./remote-stats.component.html */ "/xhe");
/* harmony import */ var _remote_stats_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remote-stats.component.scss */ "7sa6");
/* harmony import */ var _models_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/provider */ "oPjg");
/* harmony import */ var _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../models/remote-stats */ "CGJ0");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let RemoteStatsComponent = class RemoteStatsComponent {
    constructor(env) {
        this.env = env;
        this.providerStatusSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.isTotalProvidersType = false;
        this.isCategoryProvidersType = false;
        this.isUsersTypes = false;
        this.providerStatus = _models_provider__WEBPACK_IMPORTED_MODULE_3__["ProviderStatus"];
        this.selectedPorivderStatus = _models_provider__WEBPACK_IMPORTED_MODULE_3__["ProviderStatus"].NA;
    }
    ngOnInit() {
        this.isTotalProvidersType = this.statsType == _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"].TOTAL_PROVIDERS_STATS;
        this.isCategoryProvidersType = this.statsType == _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"].CATEGORY_PROVIDERS_STATS;
        this.isUsersTypes = this.statsType == _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"].USERS_STATS;
    }
    selectProviderStatus(status) {
        this.selectedPorivderStatus = status;
        this.providerStatusSelected.emit(status);
    }
    categoryStats() {
        return this.env.remoteStats.category_stats.find(catStat => {
            return catStat.category_id == this.categoryId;
        });
    }
};
RemoteStatsComponent.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] }
];
RemoteStatsComponent.propDecorators = {
    statsType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    categoryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    providerStatusSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
};
RemoteStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-remote-stats',
        template: _raw_loader_remote_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remote_stats_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]])
], RemoteStatsComponent);



/***/ }),

/***/ "uI3J":
/*!********************************************************!*\
  !*** ./src/app/common/static/about/about.component.ts ***!
  \********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "zPWW");
/* harmony import */ var _about_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.scss */ "eQox");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AboutComponent = class AboutComponent {
    constructor(modal) {
        this.modal = modal;
    }
    dismiss() {
        this.modal.dismiss();
    }
    ngOnInit() { }
};
AboutComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], AboutComponent);



/***/ }),

/***/ "uNJR":
/*!***************************************************************************!*\
  !*** ./src/app/common/basic-user-profile/basic-user-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: BasicUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicUserProfileComponent", function() { return BasicUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_basic_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basic-user-profile.component.html */ "9cBY");
/* harmony import */ var _basic_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-user-profile.component.scss */ "mW1N");
/* harmony import */ var _models_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/provider */ "oPjg");
/* harmony import */ var _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/sessions-manager-service */ "qm69");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let BasicUserProfileComponent = class BasicUserProfileComponent {
    constructor(env, sessionsManagerService) {
        this.env = env;
        this.sessionsManagerService = sessionsManagerService;
        this.provider = null;
        this.getName = _models_user__WEBPACK_IMPORTED_MODULE_6__["User"].getName;
    }
    ngOnInit() { }
    isOnline() {
        return this.sessionsManagerService.isUserOnline(this.user);
    }
};
BasicUserProfileComponent.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionsManagerService"] }
];
BasicUserProfileComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
    provider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
};
BasicUserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-basic-user-profile',
        template: _raw_loader_basic_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basic_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
        _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionsManagerService"]])
], BasicUserProfileComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _guard_home_redirect_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/home-redirect.guard */ "IP2b");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: "",
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        pathMatch: "full",
        canActivate: [_guard_home_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["HomeRedirectGuard"]]
    },
    {
        path: "login",
        loadChildren: () => Promise.all(/*! import() | auth-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-login-login-module")]).then(__webpack_require__.bind(null, /*! ./auth/login/login.module */ "lu3c")).then(m => m.LoginPageModule)
    },
    {
        path: "register",
        loadChildren: () => Promise.all(/*! import() | auth-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-register-register-module")]).then(__webpack_require__.bind(null, /*! ./auth/register/register.module */ "UrDz")).then(m => m.RegisterPageModule)
    },
    {
        path: "verify",
        loadChildren: () => __webpack_require__.e(/*! import() | auth-verify-verify-module */ "auth-verify-verify-module").then(__webpack_require__.bind(null, /*! ./auth/verify/verify.module */ "FABh")).then(m => m.VerifyPageModule)
    },
    {
        path: "forgot-password-phone",
        loadChildren: () => Promise.all(/*! import() | auth-forgot-password-phone-forgot-password-phone-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-forgot-password-phone-forgot-password-phone-module")]).then(__webpack_require__.bind(null, /*! ./auth/forgot-password-phone/forgot-password-phone.module */ "LMdc")).then(m => m.ForgotPasswordPhonePageModule)
    },
    {
        path: "forgot-password-password/:phoneNumber",
        loadChildren: () => Promise.all(/*! import() | auth-forgot-password-password-forgot-password-password-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-forgot-password-password-forgot-password-password-module")]).then(__webpack_require__.bind(null, /*! ./auth/forgot-password-password/forgot-password-password.module */ "UtjZ")).then(m => m.ForgotPasswordPasswordPageModule)
    },
    {
        path: "usr/session",
        loadChildren: () => Promise.all(/*! import() | messaging-message-session-message-session-module */[__webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("default~messaging-message-session-message-session-module~messaging-messenger-messenger-module"), __webpack_require__.e("messaging-message-session-message-session-module")]).then(__webpack_require__.bind(null, /*! ./messaging/message-session/message-session.module */ "ma2l")).then(m => m.MessageSessionPageModule)
    },
    {
        path: "usr/favorites",
        loadChildren: () => Promise.all(/*! import() | for_user-usr-favorite-providers-usr-favorite-providers-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_user-usr-favorite-providers-usr-favorite-providers-module")]).then(__webpack_require__.bind(null, /*! ./for_user/usr-favorite-providers/usr-favorite-providers.module */ "LdIA")).then(m => m.UsrFavoriteProvidersPageModule)
    },
    {
        path: "provider/:providerId",
        loadChildren: () => Promise.all(/*! import() | src-app-for_user-usr-provider-single-usr-provider-single-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("src-app-for_user-usr-provider-single-usr-provider-single-module")]).then(__webpack_require__.bind(null, /*! src/app/for_user/usr-provider-single/usr-provider-single.module */ "4Bmf")).then(m => m.UsrProviderSinglePageModule)
    },
    {
        path: 'pvd-reservations',
        redirectTo: 'pvd-reservations'
        //loadChildren: () => import('./for_provider/pvd-dashboard/pvd-dashboard.module').then( m => m.PvdDashboardPageModule)
    },
    {
        path: 'pvd-manage-available-hours',
        loadChildren: () => Promise.all(/*! import() | for_provider-pvd-manage-available-hours-pvd-manage-available-hours-module */[__webpack_require__.e("common"), __webpack_require__.e("for_provider-pvd-manage-available-hours-pvd-manage-available-hours-module")]).then(__webpack_require__.bind(null, /*! ./for_provider/pvd-manage-available-hours/pvd-manage-available-hours.module */ "bVQq")).then(m => m.PvdManageAvailableHoursPageModule)
    },
    {
        path: 'usr-view-provider-calendar/:providerId',
        loadChildren: () => Promise.all(/*! import() | for_user-usr-view-provider-calendar-usr-view-provider-calendar-module */[__webpack_require__.e("default~for_admin-adm-providers-adm-providers-module~for_user-usr-view-provider-calendar-usr-view-pr~dc2823ca"), __webpack_require__.e("default~for_provider-pvd-income-report-pvd-income-report-module~for_user-usr-view-provider-calendar-~6c128219"), __webpack_require__.e("common"), __webpack_require__.e("for_user-usr-view-provider-calendar-usr-view-provider-calendar-module")]).then(__webpack_require__.bind(null, /*! ./for_user/usr-view-provider-calendar/usr-view-provider-calendar.module */ "stco")).then(m => m.UsrViewProviderCalendarPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
    },
    {
        path: 'pvd-income-report',
        loadChildren: () => Promise.all(/*! import() | for_provider-pvd-income-report-pvd-income-report-module */[__webpack_require__.e("default~for_provider-pvd-income-report-pvd-income-report-module~for_user-usr-view-provider-calendar-~6c128219"), __webpack_require__.e("for_provider-pvd-income-report-pvd-income-report-module")]).then(__webpack_require__.bind(null, /*! ./for_provider/pvd-income-report/pvd-income-report.module */ "12iu")).then(m => m.PvdIncomeReportPageModule)
    },
    {
        path: 'adm-dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | for_admin-adm-dashboard-adm-dashboard-module */ "for_admin-adm-dashboard-adm-dashboard-module").then(__webpack_require__.bind(null, /*! ./for_admin/adm-dashboard/adm-dashboard.module */ "wmNl")).then(m => m.AdmDashboardPageModule)
    },
    {
        path: 'adm-provider-categories',
        loadChildren: () => __webpack_require__.e(/*! import() | for_admin-adm-provider-categories-adm-provider-categories-module */ "for_admin-adm-provider-categories-adm-provider-categories-module").then(__webpack_require__.bind(null, /*! ./for_admin/adm-provider-categories/adm-provider-categories.module */ "gGEd")).then(m => m.AdmProviderCategoriesPageModule)
    },
    {
        path: 'adm-providers',
        loadChildren: () => Promise.all(/*! import() | for_admin-adm-providers-adm-providers-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("default~for_admin-adm-providers-adm-providers-module~for_user-usr-view-provider-calendar-usr-view-pr~dc2823ca"), __webpack_require__.e("for_admin-adm-providers-adm-providers-module")]).then(__webpack_require__.bind(null, /*! ./for_admin/adm-providers/adm-providers.module */ "hbUo")).then(m => m.AdmProvidersPageModule)
    },
    {
        path: 'usr-reservations',
        loadChildren: () => __webpack_require__.e(/*! import() | for_user-usr-reservations-usr-reservations-module */ "for_user-usr-reservations-usr-reservations-module").then(__webpack_require__.bind(null, /*! ./for_user/usr-reservations/usr-reservations.module */ "Vhcu")).then(m => m.UsrReservationsPageModule)
    },
    {
        path: 'pvd-reservations',
        loadChildren: () => __webpack_require__.e(/*! import() | for_provider-pvd-reservations-pvd-reservations-module */ "for_provider-pvd-reservations-pvd-reservations-module").then(__webpack_require__.bind(null, /*! ./for_provider/pvd-reservations/pvd-reservations.module */ "Hj8W")).then(m => m.PvdReservationsPageModule)
    },
    {
        path: 'usr-select-session-type/:providerId',
        loadChildren: () => __webpack_require__.e(/*! import() | for_user-usr-select-session-type-usr-select-session-type-module */ "for_user-usr-select-session-type-usr-select-session-type-module").then(__webpack_require__.bind(null, /*! ./for_user/usr-select-session-type/usr-select-session-type.module */ "ZU5J")).then(m => m.UsrSelectSessionTypePageModule)
    },
    {
        path: 'usr-providers/:providerGroupId',
        loadChildren: () => Promise.all(/*! import() | for_user-usr-providers-list-usr-providers-list-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_user-usr-providers-list-usr-providers-list-module")]).then(__webpack_require__.bind(null, /*! ./for_user/usr-providers-list/usr-providers-list.module */ "ONet")).then(m => m.UsrProvidersListPageModule)
    },
    {
        path: 'usr-request-log',
        loadChildren: () => Promise.all(/*! import() | for_user-usr-request-log-usr-request-log-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_user-usr-request-log-usr-request-log-module")]).then(__webpack_require__.bind(null, /*! ./for_user/usr-request-log/usr-request-log.module */ "ajVz")).then(m => m.UsrRequestLogPageModule)
    },
    {
        path: 'pvd-request-log',
        loadChildren: () => __webpack_require__.e(/*! import() | for_provider-pvd-request-log-pvd-request-log-module */ "for_provider-pvd-request-log-pvd-request-log-module").then(__webpack_require__.bind(null, /*! ./for_provider/pvd-request-log/pvd-request-log.module */ "Ipa/")).then(m => m.PvdRequestLogPageModule)
    },
    {
        path: 'pvd-active-requests',
        loadChildren: () => Promise.all(/*! import() | for_provider-pvd-active-requests-pvd-active-requests-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_provider-pvd-active-requests-pvd-active-requests-module")]).then(__webpack_require__.bind(null, /*! ./for_provider/pvd-active-requests/pvd-active-requests.module */ "ocB8")).then(m => m.PvdActiveRequestsPageModule)
    },
    {
        path: 'questions-and-answers/:roleId/:userId',
        loadChildren: () => __webpack_require__.e(/*! import() | common-questions-and-answers-questions-and-answers-module */ "common-questions-and-answers-questions-and-answers-module").then(__webpack_require__.bind(null, /*! ./common/questions-and-answers/questions-and-answers.module */ "7aTJ")).then(m => m.QuestionsAndAnswersPageModule)
    },
    {
        path: 'answers/:questionId/:roleId/:userId',
        loadChildren: () => __webpack_require__.e(/*! import() | common-answers-answers-module */ "common-answers-answers-module").then(__webpack_require__.bind(null, /*! ./common/answers/answers.module */ "2Qbm")).then(m => m.AnswersPageModule)
    },
    {
        path: "provider-categories",
        loadChildren: () => Promise.all(/*! import() | src-app-for_user-usr-provider-groups-usr-provider-groups-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("src-app-for_user-usr-provider-groups-usr-provider-groups-module")]).then(__webpack_require__.bind(null, /*! src/app/for_user/usr-provider-groups/usr-provider-groups.module */ "pfOn")).then(m => m.UsrProviderGroupsPageModule)
    },
    {
        path: 'peer-chats/:roleId',
        loadChildren: () => __webpack_require__.e(/*! import() | common-peer-chats-peer-chats-module */ "common-peer-chats-peer-chats-module").then(__webpack_require__.bind(null, /*! ./common/peer-chats/peer-chats.module */ "aAhI")).then(m => m.PeerChatsPageModule)
    },
    {
        path: 'affiliate-code',
        loadChildren: () => __webpack_require__.e(/*! import() | common-affiliate-code-affiliate-code-module */ "common-affiliate-code-affiliate-code-module").then(__webpack_require__.bind(null, /*! ./common/affiliate-code/affiliate-code.module */ "HBFL")).then(m => m.AffiliateCodePageModule)
    },
    {
        path: 'adm-users',
        loadChildren: () => Promise.all(/*! import() | for_admin-adm-users-adm-users-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_admin-adm-users-adm-users-module")]).then(__webpack_require__.bind(null, /*! ./for_admin/adm-users/adm-users.module */ "p316")).then(m => m.AdmUsersPageModule)
    },
    {
        path: 'adm-user-profile/:userId',
        loadChildren: () => Promise.all(/*! import() | for_admin-adm-user-profile-adm-user-profile-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_admin-adm-user-profile-adm-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./for_admin/adm-user-profile/adm-user-profile.module */ "kjP/")).then(m => m.AdmUserProfilePageModule)
    },
    {
        path: 'message-session',
        loadChildren: () => Promise.all(/*! import() | messaging-message-session-message-session-module */[__webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("default~messaging-message-session-message-session-module~messaging-messenger-messenger-module"), __webpack_require__.e("messaging-message-session-message-session-module")]).then(__webpack_require__.bind(null, /*! ./messaging/message-session/message-session.module */ "ma2l")).then(m => m.MessageSessionPageModule)
    },
    {
        path: 'messenger/:type/:id/:providerPerspective',
        loadChildren: () => Promise.all(/*! import() | messaging-messenger-messenger-module */[__webpack_require__.e("default~messaging-message-session-message-session-module~messaging-messenger-messenger-module"), __webpack_require__.e("messaging-messenger-messenger-module")]).then(__webpack_require__.bind(null, /*! ./messaging/messenger/messenger.module */ "efRh")).then(m => m.MessengerPageModule)
    },
    {
        path: 'user-payments/:userId',
        loadChildren: () => Promise.all(/*! import() | common-user-payments-user-payments-module */[__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("common-user-payments-user-payments-module")]).then(__webpack_require__.bind(null, /*! ./common/user-payments/user-payments.module */ "LcCl")).then(m => m.UserPaymentsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vpln":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/random-provider-avatars/random-provider-avatars.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"random-avatars-container\"\n  #skeleton\n  *ngIf=\"this.providerService.randomAvatarSrcListShared.needsSkeleton()\"\n>\n  <div\n    class=\"random-avatar-col\"\n    *ngFor=\"let avatar of [0, 1, 2, 3, 4, 5, 6]; let i = index\"\n    [ngClass]=\"getAvatarZClass(i)\"\n  >\n    <ion-skeleton-text animated *ngIf=\"true\" class=\"random-avatar sk\">\n    </ion-skeleton-text>\n  </div>\n</div>\n<div  class=\"random-avatars-container\" *ngIf=\"!this.providerService.randomAvatarSrcListShared.needsSkeleton()\">\n  <div\n    class=\"random-avatar-col\"\n    *ngFor=\"\n      let avatar of this.providerService.randomAvatarSrcListShared.resource();\n      let i = index\n    \"\n    [ngClass]=\"getAvatarZClass(i)\"\n  >\n    <div\n      class=\"random-avatar\"\n      [ngStyle]=\"{\n        'background-image': 'url(' + env.getPublicStorageUrl(avatar) + ')'\n      }\"\n    ></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "wDsb":
/*!*****************************************************!*\
  !*** ./src/app/common/deposit/deposit.component.ts ***!
  \*****************************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deposit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deposit.component.html */ "kP+L");
/* harmony import */ var _deposit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit.component.scss */ "C+bK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");











let DepositComponent = class DepositComponent {
    constructor(modal, actionSheet, userService, alert, loadingModal, env) {
        this.modal = modal;
        this.actionSheet = actionSheet;
        this.userService = userService;
        this.alert = alert;
        this.loadingModal = loadingModal;
        this.env = env;
        this.amount = null;
        this.selectedPreset = null;
        this.depositing = false;
    }
    submit() {
        let amount = 0;
        if (this.amount) {
            amount = this.amount;
        }
        else {
            amount = this.selectedPreset;
        }
        if (this.env.MOCK_PAYMENT) {
            this.deposit(amount);
            return;
        }
        this.alert.presentLoadingModal(this.loadingModal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe();
        this.userService
            .getPaymentAuthority(amount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => {
            const errorType = error["error"]["error"];
            this.alert.presentError(this.env.serverErrorMessage(error.error["error_code"]));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
        }))
            .subscribe((result) => {
            this.loadingModal.dismiss();
            if (result) {
                window.open("https://www.zarinpal.com/pg/StartPay/" +
                    result["authority_code"] +
                    "MobileGate");
                this.dismiss();
            }
        });
    }
    openDepostPresets() {
        this.presentDepositPresets().subscribe();
    }
    presentDepositPresets() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.actionSheet.create({
            mode: "ios",
            buttons: [
                {
                    text: "۱۰۰۰ تومان",
                    role: "destructive",
                    handler: () => {
                        this.selectedPreset = 1000;
                    },
                },
                {
                    text: "۱۰۰۰۰ تومان",
                    role: "destructive",
                    handler: () => {
                        this.selectedPreset = 10000;
                    },
                },
                {
                    text: "۲۰۰۰۰ تومان",
                    role: "destructive",
                    handler: () => {
                        this.selectedPreset = 20000;
                    },
                },
                { text: "انصراف", role: "cancel" },
            ],
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(modal.present());
        }));
    }
    deposit(amount) {
        this.depositing = true;
        this.userService
            .deposit(amount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => {
            this.alert.presentError("افزایش اعتبار با مشکل روبرو شد.");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
        }))
            .subscribe((result) => {
            this.depositing = false;
            if (result) {
                this.alert.presentSuccess("افزایش اعتبار انجام شد.");
                this.userService.updateUserBalance().subscribe();
                this.dismiss();
            }
        });
    }
    ngOnInit() { }
    dismiss(data = null) {
        this.modal.dismiss(data);
    }
};
DepositComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] }
];
DepositComponent.propDecorators = {
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }]
};
DepositComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: "app-deposit",
        template: _raw_loader_deposit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deposit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]])
], DepositComponent);



/***/ }),

/***/ "wl2M":
/*!************************************************!*\
  !*** ./src/app/directives/ng-var.directive.ts ***!
  \************************************************/
/*! exports provided: NgVarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgVarDirective", function() { return NgVarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let NgVarDirective = class NgVarDirective {
    constructor(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    set ngVar(context) {
        this.context.$implicit = this.context.ngVar = context;
        this.updateView();
    }
    updateView() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }
};
NgVarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
NgVarDirective.propDecorators = {
    ngVar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
NgVarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngVar]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], NgVarDirective);



/***/ }),

/***/ "xG8R":
/*!*******************************************!*\
  !*** ./src/app/models/available-hours.ts ***!
  \*******************************************/
/*! exports provided: AvailableHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableHours", function() { return AvailableHours; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");

class AvailableHours {
    constructor() {
        this.overlappingSession = null;
        this.reservedByMe = false;
        this.reserveAccepted = false;
        this.reserved = false;
        this.cssClass = "";
    }
    static fillCSSClass(hours) {
        let c = "";
        if (hours.reserved) {
            c += " reserved";
        }
        if (hours.reservedByMe) {
            c += " reserved-by-me";
        }
        if (hours.reserveAccepted) {
            c += " reserve-accepted";
        }
        hours.cssClass = c;
    }
    static getReservationStatusText(hours) {
        let text = "قابل رزرو";
        if (hours.reserved) {
            text = "پرشده";
        }
        if (hours.reservedByMe) {
            text = "درخواست داده شده";
        }
        if (hours.reserveAccepted) {
            text = "رزرو شده";
        }
        return text;
    }
    static getMinuteString(hourString) {
        return hourString.substr(3, 2);
    }
    static getHourString(hourString) {
        return hourString.substr(0, 2);
    }
    static getTimeFromHourString(hours) {
        return AvailableHours.getHourString(hours.time_from);
    }
    static getTimeToHourString(hours) {
        return AvailableHours.getHourString(hours.time_to);
    }
    static getTimeFromMinuteString(hours) {
        return AvailableHours.getMinuteString(hours.time_from);
    }
    static getTimeToMinuteString(hours) {
        return AvailableHours.getMinuteString(hours.time_to);
    }
    static SetTimeToBasedOnTimeFrom(hours) {
        let pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en");
        let hourFrom = parseInt(AvailableHours.getTimeFromHourString(hours));
        let minFrom = parseInt(AvailableHours.getTimeFromMinuteString(hours));
        let from = new Date().setUTCHours(hourFrom + 1, minFrom);
        return hours.time_to = pipe.transform(from, "HH:mm", 'UTC');
    }
    static SetTimeNow(hours) {
        let pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en");
        hours.time_from = pipe.transform(new Date(), "HH:mm");
        AvailableHours.SetTimeToBasedOnTimeFrom(hours);
    }
    static getMilitaryFormatInt(hourString) {
        return parseInt(AvailableHours.getHourString(hourString) + AvailableHours.getMinuteString(hourString));
    }
}


/***/ }),

/***/ "yZtM":
/*!***********************************************************************************!*\
  !*** ./src/app/common/loading-toolbar-button/loading-toolbar-button.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoadingToolbarButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingToolbarButtonComponent", function() { return LoadingToolbarButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loading_toolbar_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loading-toolbar-button.component.html */ "nnJo");
/* harmony import */ var _loading_toolbar_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-toolbar-button.component.scss */ "185P");
/* harmony import */ var src_app_services_im_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/im.service */ "K4UH");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let LoadingToolbarButtonComponent = class LoadingToolbarButtonComponent {
    constructor(env, imService) {
        this.env = env;
        this.imService = imService;
        this.visible = false;
        this.imNoConnection = false;
        this.imRetryRemainingSeconds = 0;
    }
    ngOnInit() {
        this.visible == this.env.somethingPendingCount > 0;
        this.pendingSubscription = this.env.somethingPendingUpdated.subscribe((pending) => {
            this.visible = pending;
        });
        this.imConnectionSubscription = this.imService.connectionStatusChanged.subscribe(result => {
            this.imNoConnection = !result;
        });
        this.imAutoReconnectCountdownSubscription = this.imService.autoReconnectRemainingSecondsUpdated.subscribe(result => {
            this.imRetryRemainingSeconds = result;
        });
    }
    ionViewWillEnter() {
    }
    ngOnDestroy() {
        this.pendingSubscription.unsubscribe();
        this.imConnectionSubscription.unsubscribe();
        this.imAutoReconnectCountdownSubscription.unsubscribe();
    }
    ionViewWillLeave() {
    }
    imReconnect() {
        this.imService.reconnect();
    }
};
LoadingToolbarButtonComponent.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
    { type: src_app_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"] }
];
LoadingToolbarButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-loading-toolbar-button",
        template: _raw_loader_loading_toolbar_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loading_toolbar_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"], src_app_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"]])
], LoadingToolbarButtonComponent);



/***/ }),

/***/ "ybCk":
/*!*****************************************************************!*\
  !*** ./src/app/services/public-question-and-answers.service.ts ***!
  \*****************************************************************/
/*! exports provided: PublicQuestionAndAnswersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicQuestionAndAnswersService", function() { return PublicQuestionAndAnswersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/architecture/shared-resource-async-request-bundle */ "JTjR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let PublicQuestionAndAnswersService = class PublicQuestionAndAnswersService {
    constructor(auth, http, env) {
        this.auth = auth;
        this.http = http;
        this.env = env;
        this.questionsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"](this.getAllQuestions, [], this);
        this.questionWithAnswersShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"](this.getAnswers, null, this);
        this.myQuestionsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"](this.getMyQuestions, [], this);
    }
    getAllQuestions() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Accept: "application/json",
            "Content-Type": "application/json",
        });
        let url = "questions/getAllQuestions";
        return this.http
            .get(this.env.API_URL + url, {
            headers: headers,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((result) => {
            this.questionsShared.setResource(result);
            return result;
        }));
    }
    getAnswers(questionId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Accept: "application/json",
            "Content-Type": "application/json",
        });
        let url = "questions/getAnswers/" + questionId;
        return this.http
            .get(this.env.API_URL + url, {
            headers: headers,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((result) => {
            this.questionWithAnswersShared.setResource(result);
            return result;
        }));
    }
    getMyQuestions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "questions/getMyQuestions";
            return this.http
                .get(this.env.API_URL + url, {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((result) => {
                this.myQuestionsShared.setResource(result);
                return result;
            }));
        }));
    }
    aks(content) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "questions/ask";
            return this.http.post(this.env.API_URL + url, {
                content: content,
            }, {
                headers: headers,
            });
        }));
    }
    answer(content, questionId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])((token) => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json",
            });
            let url = "questions/answer";
            return this.http.post(this.env.API_URL + url, {
                content: content,
                question_id: questionId,
            }, {
                headers: headers,
            });
        }));
    }
};
PublicQuestionAndAnswersService.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"] }
];
PublicQuestionAndAnswersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"]])
], PublicQuestionAndAnswersService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nion-item, ion-list, ion-menu-toggle {\n  --background:transparent;\n  background-color: transparent;\n}\nion-list {\n  overflow-y: scroll;\n}\n.credit-container {\n  padding: 0.8rem;\n  background: black;\n}\n.credit-container .credit-number {\n  color: white !important;\n}\n.credit-container ion-icon {\n  color: white;\n  font-size: 1.4rem;\n}\n.splash-container {\n  justify-content: center;\n  align-items: center;\n}\n.splash-container .splash-svg {\n  width: 200px;\n  fill: #71bcc1;\n}\n.splash-container .splash-svg #smile-svg {\n  display: none;\n}\n.splash-container .splash-svg #frown-svg {\n  transform: translateY(35px);\n}\n.splash-container .splash-svg .hands-svg {\n  opacity: 0;\n}\n.splash-container .splash-svg .eyes {\n  transform: translateY(-200px);\n}\n.fixed-fab {\n  bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBQTFDQTtFQUVJLHdCQUFBO0VBQ0EsNkJBQUE7QUEyQ0o7QUF6Q0E7RUFFSSxrQkFBQTtBQTJDSjtBQXpDQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQTJDSjtBQTFDSTtFQUVJLHVCQUFBO0FBMkNSO0FBekNJO0VBRUksWUFBQTtFQUNBLGlCQUFBO0FBMENSO0FBdkNBO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtBQXlDSjtBQXhDSTtFQUVJLFlBQUE7RUFDQSxhQzdCUTtBRHNFaEI7QUF2Q087RUFFSSxhQUFBO0FBd0NYO0FBdENPO0VBRUMsMkJBQUE7QUF1Q1I7QUFyQ087RUFFSSxVQUFBO0FBc0NYO0FBcENPO0VBRUMsNkJBQUE7QUFxQ1I7QUFoQ0E7RUFFSSx1QkFBQTtBQWtDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcbi5tZW51LWNvbnRlbnRcbntcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOnVybCgnc3JjL2Fzc2V0cy9pbWFnZS9tZW51LWJnLmpwZycpO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xufVxuaW9uLWl0ZW0saW9uLWxpc3QsaW9uLW1lbnUtdG9nZ2xlXG57XG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59XG5pb24tbGlzdFxue1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5jcmVkaXQtY29udGFpbmVyXG57XG4gICAgcGFkZGluZzowLjhyZW07XG4gICAgYmFja2dyb3VuZDpibGFjaztcbiAgICAuY3JlZGl0LW51bWJlclxuICAgIHtcbiAgICAgICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWljb25cbiAgICB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6MS40cmVtO1xuICAgIH1cbn1cbi5zcGxhc2gtY29udGFpbmVyXG57XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuc3BsYXNoLXN2Z1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBmaWxsOiRwcmltYXJ5LWNvbG9yO1xuICAgICAgIC8vIG9wYWNpdHk6IDA7XG4gICAgICAgI3NtaWxlLXN2Z1xuICAgICAgIHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICB9XG4gICAgICAgI2Zyb3duLXN2Z1xuICAgICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMzVweCk7XG4gICAgICAgfVxuICAgICAgIC5oYW5kcy1zdmdcbiAgICAgICB7XG4gICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgfVxuICAgICAgIC5leWVzXG4gICAgICAge1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwcHgpO1xuICAgICAgIH1cbiAgICAgICBcbiAgICB9XG59XG4uZml4ZWQtZmFiXG57XG4gICAgYm90dG9tOjEwcHggIWltcG9ydGFudDtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "ys1Z":
/*!*******************************************************************************************!*\
  !*** ./src/app/common/session-info-icon-summary/session-info-icon-summary.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.session-info-summary {\n  display: flex;\n}\n.session-info-summary.requested .session-info-summary-item {\n  color: #eebd60;\n}\n.session-info-summary.reserved .session-info-summary-item {\n  color: #71bcc1;\n}\n.session-info-summary.active .session-info-summary-item {\n  color: #71ce99;\n}\n.session-info-summary.ended {\n  color: #71bcc1;\n}\n.session-info-summary.rejected {\n  color: #e65844;\n}\n.session-info-summary .session-info-summary-row {\n  display: flex;\n}\n.session-info-summary .session-info-summary-row .session-info-summary-item {\n  display: flex;\n  margin: 0.3rem 1rem 0 0rem;\n}\n.session-info-summary .session-info-summary-row .session-info-summary-item .session-info-summary-item-icon {\n  margin-left: 0.2rem;\n}\n.session-info-summary .session-info-summary-row .session-info-summary-item .session-info-summary-item-text {\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc2Vzc2lvbi1pbmZvLWljb24tc3VtbWFyeS9zZXNzaW9uLWluZm8taWNvbi1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUEvQ0E7RUFzQkUsYUFBQTtBQTRCRjtBQWhESTtFQUNFLGNDVVk7QUR3Q2xCO0FBOUNJO0VBQ0UsY0NGVTtBRGtEaEI7QUE1Q0k7RUFDRSxjQ0RVO0FEK0NoQjtBQTNDRTtFQUNFLGNDWFk7QUR3RGhCO0FBM0NFO0VBQ0UsY0NUYztBRHNEbEI7QUExQ0U7RUFDRSxhQUFBO0FBNENKO0FBM0NJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FBNkNOO0FBNUNNO0VBQ0UsbUJBQUE7QUE4Q1I7QUE1Q007RUFFSSxtQkFBQTtBQTZDViIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWluZm8taWNvbi1zdW1tYXJ5L3Nlc3Npb24taW5mby1pY29uLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb25cIjtcblxuLnNlc3Npb24taW5mby1zdW1tYXJ5IHtcbiAgJi5yZXF1ZXN0ZWQge1xuICAgIC5zZXNzaW9uLWluZm8tc3VtbWFyeS1pdGVtIHtcbiAgICAgIGNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi5yZXNlcnZlZCB7XG4gICAgLnNlc3Npb24taW5mby1zdW1tYXJ5LWl0ZW0ge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgLnNlc3Npb24taW5mby1zdW1tYXJ5LWl0ZW0ge1xuICAgICAgY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi5lbmRlZHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cbiAgJi5yZWplY3RlZHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICAuc2Vzc2lvbi1pbmZvLXN1bW1hcnktcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5zZXNzaW9uLWluZm8tc3VtbWFyeS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDAuM3JlbSAxcmVtIDAgMHJlbTtcbiAgICAgIC5zZXNzaW9uLWluZm8tc3VtbWFyeS1pdGVtLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICAgICAgfVxuICAgICAgLnNlc3Npb24taW5mby1zdW1tYXJ5LWl0ZW0tdGV4dFxuICAgICAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "zPWW":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/static/about/about.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>درباره حامی لاین</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4>\n    درباره ی حامی لاین\n  </h4>\n  <p>\n    <b>حامی لاین</b> اراِیه دهنده خدمات روان­شناسی بصورت تلفنی و آنلاین مبتنی بر\n    شبکه است. این خدمات کاملا حرفه­ ای و مبتنی بر دانش روان­ شناسی است و از اصل\n    حرفه یاورانه تبعیت می­ کند. این خدمات با استفاده از اپلیکیشنی که برای این\n    منظور طراحی شده است ارائه می­ گردد. سودمندی مشاوره و راهنمایی تلفنی در کمک\n    به حل و فصل مشکلات یا کاهش مسایل تماس گیرندگان در ادبیات مشاوره تلفنی به\n    اثبات رسیده است و سابقه استفاده از آن به چندین دهه قبل باز می­ گردد.\n  </p>\n  <p>\n    با توجه به تغییر سبک زندگی در دهه اخیر و فراگیری استفاده از اینترنت و به\n    کارگیری ابزارهای هوشمند ارتباطی، لزوم بکارگیری فناوری روز به منظور تسهیل و\n    بهینه­ سازی شیوه­ های رفع نیازمندیهای زندگی امروزی، تبدیل به ضرورتی اجتناب\n    ناپذیر شده است. از این دید، خدمات روان­ شناسی آنلاین ابزاری برای پاسخگویی به\n    این نیازمندیهاست.\n  </p>\n  <h4>رسالت گروه حامی لاین</h4>\n  <p class=\"pb-5\">\n    گروه حامی لاین بر آن است با ارائه خدمات روان شناسی باکیفیت، در دسترس، به\n    صرفه و امن در هر زمانی و مکانی برای گروه های مختلف، به ارتقاء سلامت روان\n    افراد، خانواده ها و در نهایت جامعه کمک نماید.\n  </p>\n</ion-content>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zs2g":
/*!***************************************************************************!*\
  !*** ./src/app/common/provider-list-item/provider-list-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProviderListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderListItemComponent", function() { return ProviderListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_provider_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./provider-list-item.component.html */ "fAhz");
/* harmony import */ var _provider_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider-list-item.component.scss */ "Z1Qc");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/user */ "2hxB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _models_provider_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../models/provider-group */ "KIUr");
/* harmony import */ var src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/provider */ "oPjg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let ProviderListItemComponent = class ProviderListItemComponent {
    constructor(navController) {
        this.navController = navController;
        this.provider = null;
        this.category = null;
        this.providerProfileUrl = '/provider';
        this.isFavorite = false;
        this.getStatusClass = src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getStatusClass;
        this.getStatusText = src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getStatusText;
        this.getDegreeText = src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getDegreeString;
        this.getName = _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].getName;
    }
    ngOnInit() { }
    navigateToProvider(provider) {
        this.navController.navigateForward([this.providerProfileUrl, provider.id]);
    }
};
ProviderListItemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ProviderListItemComponent.propDecorators = {
    provider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
    category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
    providerProfileUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
    isFavorite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
};
ProviderListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-provider-list-item',
        template: _raw_loader_provider_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_provider_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], ProviderListItemComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map