(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_admin-adm-users-adm-users-module"],{

/***/ "5n0z":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_admin/adm-users/adm-users.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n\n    <ion-title>کاربران</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-item>\n    <ion-input placeholder=\"شماره کاربر\" [(ngModel)]=\"searchParamPhone\">\n    </ion-input>\n  </ion-item>\n  <div\n    class=\"no-provider h-100 d-flex flex-column justify-content-center align-items-center\"\n    *ngIf=\"userService.allUsersShared.needsNoItemAlert()\"\n  >\n    <ion-img src=\"/assets/image/no-providers.jpg\"></ion-img>\n    <span class=\"light-text normal-text\"> کاربری در لیست موجود نیست. </span>\n  </div>\n\n  <app-user-skeleton\n    *ngIf=\"userService.allUsersShared.needsSkeleton()\"\n    [times]=\"4\"\n  ></app-user-skeleton>\n\n  <ion-list>\n    <ion-item\n      button\n      class=\"provider-item-container shadow-item\"\n      *ngFor=\"let user of userService.allUsersShared.filteredResource()\"\n      (click)=\"navigateToUser(user)\"\n    >\n      <app-user-avatar [user]=\"user\"></app-user-avatar>\n      <ion-text class=\"d-flex flex-column\">\n        <span class=\"name normal-text primary-color-text number-text\"\n          >{{getName(user)}}</span\n        >\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "OLvX":
/*!*********************************************************!*\
  !*** ./src/app/for_admin/adm-users/adm-users.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl9hZG1pbi9hZG0tdXNlcnMvYWRtLXVzZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gojK":
/*!*****************************************************************!*\
  !*** ./src/app/for_admin/adm-users/adm-users-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdmUsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmUsersPageRoutingModule", function() { return AdmUsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adm_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-users.page */ "idpj");




const routes = [
    {
        path: '',
        component: _adm_users_page__WEBPACK_IMPORTED_MODULE_3__["AdmUsersPage"]
    }
];
let AdmUsersPageRoutingModule = class AdmUsersPageRoutingModule {
};
AdmUsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmUsersPageRoutingModule);



/***/ }),

/***/ "idpj":
/*!*******************************************************!*\
  !*** ./src/app/for_admin/adm-users/adm-users.page.ts ***!
  \*******************************************************/
/*! exports provided: AdmUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmUsersPage", function() { return AdmUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adm_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adm-users.page.html */ "5n0z");
/* harmony import */ var _adm_users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-users.page.scss */ "OLvX");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");








let AdmUsersPage = class AdmUsersPage {
    constructor(userService, navController) {
        this.userService = userService;
        this.navController = navController;
        this.searchParamPhone = "";
        this.getName = src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"].getName;
    }
    ngOnInit() {
        this.userService.allUsersShared.getUpdateNotifier(this).subscribe(() => {
            if (this.refresher) {
                this.refresher.complete();
            }
        });
        this.userService.allUsersShared.setFilter(u => {
            return u.phone.includes(this.searchParamPhone.trim());
        });
        this.userService.allUsersShared.request();
    }
    refresh(ev) {
        this.refresher = ev.target;
        this.userService.allUsersShared.request();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
    navigateToUser(user) {
        this.navController.navigateForward(['/adm-user-profile', user.id]);
    }
};
AdmUsersPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
AdmUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["UntilDestroy"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-adm-users',
        template: _raw_loader_adm_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adm_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], AdmUsersPage);



/***/ }),

/***/ "p316":
/*!*********************************************************!*\
  !*** ./src/app/for_admin/adm-users/adm-users.module.ts ***!
  \*********************************************************/
/*! exports provided: AdmUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmUsersPageModule", function() { return AdmUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../skeleton/skeleton/skeleton.module */ "L9ti");
/* harmony import */ var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../common/common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adm_users_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adm-users-routing.module */ "gojK");
/* harmony import */ var _adm_users_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adm-users.page */ "idpj");









let AdmUsersPageModule = class AdmUsersPageModule {
};
AdmUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _adm_users_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdmUsersPageRoutingModule"],
            _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"],
            _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]
        ],
        declarations: [_adm_users_page__WEBPACK_IMPORTED_MODULE_8__["AdmUsersPage"]]
    })
], AdmUsersPageModule);



/***/ })

}]);
//# sourceMappingURL=for_admin-adm-users-adm-users-module-es2015.js.map