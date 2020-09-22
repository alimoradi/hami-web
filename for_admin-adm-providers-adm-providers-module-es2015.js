(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_admin-adm-providers-adm-providers-module"],{

/***/ "Dwui":
/*!*************************************************************************!*\
  !*** ./src/app/for_admin/adm-providers/adm-providers-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdmProvidersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProvidersPageRoutingModule", function() { return AdmProvidersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adm_providers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-providers.page */ "Z4nr");




const routes = [
    {
        path: '',
        component: _adm_providers_page__WEBPACK_IMPORTED_MODULE_3__["AdmProvidersPage"]
    }
];
let AdmProvidersPageRoutingModule = class AdmProvidersPageRoutingModule {
};
AdmProvidersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmProvidersPageRoutingModule);



/***/ }),

/***/ "KE/y":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_admin/adm-providers/adm-providers.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n\n    <ion-title>مشاورین</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-item>\n    <ion-input placeholder=\"نام مشاور\" [(ngModel)]=\"searchNameParam\">\n    </ion-input>\n  </ion-item>\n  <div\n    class=\"no-provider h-100 d-flex flex-column justify-content-center align-items-center\"\n    *ngIf=\"providerService.allProvidersShared.needsNoItemAlert()\"\n  >\n    <ion-img src=\"/assets/image/no-providers.jpg\"></ion-img>\n    <span class=\"light-text normal-text\">\n      هنوز مشاوری در این دسته وجود ندارد.\n    </span>\n  </div>\n\n  <app-user-skeleton [times]=\"5\" *ngIf=\"providerService.allProvidersShared.needsSkeleton()\"></app-user-skeleton>\n \n  <ion-list>\n    <ion-item\n      button\n      class=\"provider-item-container shadow-item\"\n      *ngFor=\"let provider of providerService.allProvidersShared.filteredResource()\"\n      (click)=\"navigateToProvider(provider)\"\n    >\n      <app-user-avatar [user]=\"provider.user\"></app-user-avatar>\n      <ion-text class=\"d-flex flex-column\">\n        <span class=\"name dark-text\">{{getName(provider.user)}}</span>\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "Z4nr":
/*!***************************************************************!*\
  !*** ./src/app/for_admin/adm-providers/adm-providers.page.ts ***!
  \***************************************************************/
/*! exports provided: AdmProvidersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProvidersPage", function() { return AdmProvidersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adm_providers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adm-providers.page.html */ "KE/y");
/* harmony import */ var _adm_providers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-providers.page.scss */ "gUK6");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/alert.service */ "3LUQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/provider.service */ "gs/X");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");











let AdmProvidersPage = class AdmProvidersPage {
    constructor(providerService, navController, env, route, alert) {
        this.providerService = providerService;
        this.navController = navController;
        this.env = env;
        this.route = route;
        this.alert = alert;
        this.getName = _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].getName;
        this.searchNameParam = "";
    }
    navigateToProvider(provider) {
        this.providerService.setSelectedProvider(provider);
        this.navController.navigateForward(["provider/" + provider.id]);
    }
    ngOnInit() {
        this.providerService.allProvidersShared.getUpdateNotifier(this).subscribe(() => {
            if (this.refresher) {
                this.refresher.complete();
            }
        });
        this.providerService.allProvidersShared.request();
        this.providerService.allProvidersShared.setFilter(p => {
            return _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].getName(p.user).includes(this.searchNameParam.trim());
        });
    }
    refresh(event) {
        this.refresher = event.target;
        this.providerService.allProvidersShared.request();
    }
    ngOnDestroy() {
    }
};
AdmProvidersPage.ctorParameters = () => [
    { type: src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
AdmProvidersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__["UntilDestroy"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-adm-providers',
        template: _raw_loader_adm_providers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adm_providers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], AdmProvidersPage);



/***/ }),

/***/ "gUK6":
/*!*****************************************************************!*\
  !*** ./src/app/for_admin/adm-providers/adm-providers.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl9hZG1pbi9hZG0tcHJvdmlkZXJzL2FkbS1wcm92aWRlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "hbUo":
/*!*****************************************************************!*\
  !*** ./src/app/for_admin/adm-providers/adm-providers.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdmProvidersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProvidersPageModule", function() { return AdmProvidersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../skeleton/skeleton/skeleton.module */ "L9ti");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "NGqq");
/* harmony import */ var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../common/common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adm_providers_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adm-providers-routing.module */ "Dwui");
/* harmony import */ var _adm_providers_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adm-providers.page */ "Z4nr");










let AdmProvidersPageModule = class AdmProvidersPageModule {
};
AdmProvidersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _adm_providers_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdmProvidersPageRoutingModule"],
            _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_3__["CommonDeclarationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]
        ],
        declarations: [_adm_providers_page__WEBPACK_IMPORTED_MODULE_9__["AdmProvidersPage"]]
    })
], AdmProvidersPageModule);



/***/ })

}]);
//# sourceMappingURL=for_admin-adm-providers-adm-providers-module-es2015.js.map