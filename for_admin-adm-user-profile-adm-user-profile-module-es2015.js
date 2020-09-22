(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_admin-adm-user-profile-adm-user-profile-module"],{

/***/ "/OLa":
/*!*********************************************************************!*\
  !*** ./src/app/for_admin/adm-user-profile/adm-user-profile.page.ts ***!
  \*********************************************************************/
/*! exports provided: AdmUserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmUserProfilePage", function() { return AdmUserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adm_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adm-user-profile.page.html */ "ze2X");
/* harmony import */ var _adm_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-user-profile.page.scss */ "8ZBq");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let AdmUserProfilePage = class AdmUserProfilePage {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.defaultBack = ['/adm-users'];
    }
    ngOnInit() {
        let userId = this.route.snapshot.params.userId;
        if (this.userService.userShared.resource() && this.userService.userShared.resource().id != userId) {
            this.userService.userShared.reset();
        }
        this.userService.userShared.request(userId);
    }
};
AdmUserProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AdmUserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-adm-user-profile',
        template: _raw_loader_adm_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adm_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], AdmUserProfilePage);



/***/ }),

/***/ "8ZBq":
/*!***********************************************************************!*\
  !*** ./src/app/for_admin/adm-user-profile/adm-user-profile.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl9hZG1pbi9hZG0tdXNlci1wcm9maWxlL2FkbS11c2VyLXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kjP/":
/*!***********************************************************************!*\
  !*** ./src/app/for_admin/adm-user-profile/adm-user-profile.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdmUserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmUserProfilePageModule", function() { return AdmUserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../skeleton/skeleton/skeleton.module */ "L9ti");
/* harmony import */ var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../common/common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adm_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adm-user-profile-routing.module */ "p+kC");
/* harmony import */ var _adm_user_profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adm-user-profile.page */ "/OLa");









let AdmUserProfilePageModule = class AdmUserProfilePageModule {
};
AdmUserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _adm_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdmUserProfilePageRoutingModule"],
            _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"],
            _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]
        ],
        declarations: [_adm_user_profile_page__WEBPACK_IMPORTED_MODULE_8__["AdmUserProfilePage"]]
    })
], AdmUserProfilePageModule);



/***/ }),

/***/ "p+kC":
/*!*******************************************************************************!*\
  !*** ./src/app/for_admin/adm-user-profile/adm-user-profile-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdmUserProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmUserProfilePageRoutingModule", function() { return AdmUserProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adm_user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-user-profile.page */ "/OLa");




const routes = [
    {
        path: '',
        component: _adm_user_profile_page__WEBPACK_IMPORTED_MODULE_3__["AdmUserProfilePage"]
    }
];
let AdmUserProfilePageRoutingModule = class AdmUserProfilePageRoutingModule {
};
AdmUserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmUserProfilePageRoutingModule);



/***/ }),

/***/ "ze2X":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_admin/adm-user-profile/adm-user-profile.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>پروفایل کاربر</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n      <ion-back-button [defaultHref]=\"defaultBack\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-user-profile-skeleton *ngIf=\"userService.userShared.needsSkeleton()\"></app-user-profile-skeleton>\n\n<app-basic-user-profile *ngIf=\"userService.userShared.resource()\"[user]=\"userService.userShared.resource()\" ></app-basic-user-profile>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=for_admin-adm-user-profile-adm-user-profile-module-es2015.js.map