(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-peer-chats-peer-chats-module"],{

/***/ "7zy9":
/*!******************************************************!*\
  !*** ./src/app/common/peer-chats/peer-chats.page.ts ***!
  \******************************************************/
/*! exports provided: PeerChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerChatsPage", function() { return PeerChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_peer_chats_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./peer-chats.page.html */ "AKYy");
/* harmony import */ var _peer_chats_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peer-chats.page.scss */ "Abvv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sessions-manager-service */ "qm69");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");









let PeerChatsPage = class PeerChatsPage {
    constructor(sessionsManager, env, route) {
        this.sessionsManager = sessionsManager;
        this.env = env;
        this.route = route;
        this.peers = [];
        this.refresher = null;
        this.getName = src_app_models_user__WEBPACK_IMPORTED_MODULE_6__["User"].getName;
        this.getRoleName = src_app_models_user__WEBPACK_IMPORTED_MODULE_6__["User"].getRoleName;
        this.defaultBackUrl = "";
        this.roleId = null;
    }
    ngOnInit() {
        this.roleId = this.route.snapshot.params.roleId;
        if (this.roleId == this.env.USER_ROLE_ID) {
            this.defaultBackUrl = "usr-reservations";
        }
        else {
            this.defaultBackUrl = "pvd-reservations";
        }
        this.sessionsManager.myPeerSubscriptionsShared
            .getUpdateNotifier(this)
            .subscribe((result) => {
            this.peers = this.sessionsManager.myPeerSubscriptionsShared.resource();
            if (this.refresher) {
                this.refresher.complete();
            }
        });
        this.sessionsManager.myPeerSubscriptionsShared.request();
    }
    refresh(ev) {
        this.refresher = ev.target;
        this.sessionsManager.myPeerSubscriptionsShared.request();
    }
    chat(user) {
        this.sessionsManager.startPeer2PeerChat(user);
        let type;
        if (this.roleId == src_app_models_user__WEBPACK_IMPORTED_MODULE_6__["RoleId"].USER_ROLE_ID) {
            type = src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["ChatType"].P2P_WITH_PROVIDER;
        }
        else {
            type = src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["ChatType"].P2P_WITH_USER;
        }
        //this.sessionsManager.enterChat(type, user.id,this.roleId == RoleId.PROVIDER_ROLE_ID);
    }
    getUnreadMessages(user) {
        return this.sessionsManager.getUserUnreadMessagesCount(user);
    }
    isOnline(user) {
        return this.sessionsManager.isUserOnline(user);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
};
PeerChatsPage.ctorParameters = () => [
    { type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PeerChatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__["UntilDestroy"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "app-peer-chats",
        template: _raw_loader_peer_chats_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_peer_chats_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PeerChatsPage);



/***/ }),

/***/ "AKYy":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/peer-chats/peer-chats.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n      <ion-back-button\n         \n        [defaultHref]=\"defaultBackUrl\"\n      ></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>چت های هماهنگی</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div\n    class=\"no-chats h-100 d-flex flex-column align-items-center justify-content-center\"\n    *ngIf=\"peers.length < 1\"\n  >\n    <ion-img src=\"assets/image/no-chats.jpg\"></ion-img>\n    <span class=\"light-text normal-text\">هنوز موردی در لیست نیست.</span>\n  </div>\n  <ion-list>\n    <ion-item\n      button\n      class=\"provider-item-container shadow-item\"\n      *ngFor=\"let user of peers\"\n      (click)=\"chat(user)\"\n    >\n      <app-user-avatar [user]=\"user\"></app-user-avatar>\n      <ion-text class=\"d-flex flex-column\">\n        <span class=\"name number-text dark-text\">{{getName(user)}}</span>\n        <small class=\"category-name light-text\">{{getRoleName(user)}} </small>\n      </ion-text>\n      <ion-badge\n        *ngIf=\"getUnreadMessages(user)\"\n        slot=\"end\"\n        color=\"primary\"\n        mode=\"ios\"\n        slot=\"end\"\n        >{{ getUnreadMessages(user) }}</ion-badge\n      >\n      <ion-icon\n        slot=\"end\"\n        class=\"online-status\"\n        [ngClass]=\"(isOnline(user))?'online':''\"\n        [name]=\"this.env.ONLINE_ICON\"\n      ></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "Abvv":
/*!********************************************************!*\
  !*** ./src/app/common/peer-chats/peer-chats.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9wZWVyLWNoYXRzL3BlZXItY2hhdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Q195":
/*!****************************************************************!*\
  !*** ./src/app/common/peer-chats/peer-chats-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PeerChatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerChatsPageRoutingModule", function() { return PeerChatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _peer_chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./peer-chats.page */ "7zy9");




const routes = [
    {
        path: '',
        component: _peer_chats_page__WEBPACK_IMPORTED_MODULE_3__["PeerChatsPage"]
    }
];
let PeerChatsPageRoutingModule = class PeerChatsPageRoutingModule {
};
PeerChatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PeerChatsPageRoutingModule);



/***/ }),

/***/ "aAhI":
/*!********************************************************!*\
  !*** ./src/app/common/peer-chats/peer-chats.module.ts ***!
  \********************************************************/
/*! exports provided: PeerChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerChatsPageModule", function() { return PeerChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _peer_chats_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./peer-chats-routing.module */ "Q195");
/* harmony import */ var _peer_chats_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./peer-chats.page */ "7zy9");








let PeerChatsPageModule = class PeerChatsPageModule {
};
PeerChatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _peer_chats_routing_module__WEBPACK_IMPORTED_MODULE_6__["PeerChatsPageRoutingModule"],
            _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]
        ],
        declarations: [_peer_chats_page__WEBPACK_IMPORTED_MODULE_7__["PeerChatsPage"]]
    })
], PeerChatsPageModule);



/***/ })

}]);
//# sourceMappingURL=common-peer-chats-peer-chats-module-es2015.js.map