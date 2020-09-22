(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_user-usr-request-log-usr-request-log-module"], {
    /***/
    "GKgO":
    /*!****************************************************************************!*\
      !*** ./src/app/for_user/usr-request-log/usr-request-log-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: UsrRequestLogPageRoutingModule */

    /***/
    function GKgO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrRequestLogPageRoutingModule", function () {
        return UsrRequestLogPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _usr_request_log_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./usr-request-log.page */
      "ZQaA");

      var routes = [{
        path: '',
        component: _usr_request_log_page__WEBPACK_IMPORTED_MODULE_3__["UsrRequestLogPage"]
      }];

      var UsrRequestLogPageRoutingModule = function UsrRequestLogPageRoutingModule() {
        _classCallCheck(this, UsrRequestLogPageRoutingModule);
      };

      UsrRequestLogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsrRequestLogPageRoutingModule);
      /***/
    },

    /***/
    "ZQaA":
    /*!******************************************************************!*\
      !*** ./src/app/for_user/usr-request-log/usr-request-log.page.ts ***!
      \******************************************************************/

    /*! exports provided: UsrRequestLogPage */

    /***/
    function ZQaA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrRequestLogPage", function () {
        return UsrRequestLogPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_usr_request_log_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./usr-request-log.page.html */
      "a0v1");
      /* harmony import */


      var _usr_request_log_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./usr-request-log.page.scss */
      "kQYf");
      /* harmony import */


      var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var UsrRequestLogPage = /*#__PURE__*/function () {
        function UsrRequestLogPage(sessionsManager) {
          _classCallCheck(this, UsrRequestLogPage);

          this.sessionsManager = sessionsManager;
          this.refresher = null;
        }

        _createClass(UsrRequestLogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.sessionsManager.allMySessionsShared.getUpdateNotifier(this).subscribe(function (result) {
              _this.refresher && _this.refresher.complete();
            });
            this.sessionsManager.allMySessionsShared.request();
          }
        }, {
          key: "refresh",
          value: function refresh(event) {
            this.sessionsManager.allMySessionsShared.request();
            this.refresher = event.target;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return UsrRequestLogPage;
      }();

      UsrRequestLogPage.ctorParameters = function () {
        return [{
          type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]
        }];
      };

      UsrRequestLogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-usr-request-log",
        template: _raw_loader_usr_request_log_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usr_request_log_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]])], UsrRequestLogPage);
      /***/
    },

    /***/
    "a0v1":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_user/usr-request-log/usr-request-log.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a0v1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n    <ion-title>تاریخچه درخواست ها</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-session-list-minimal-skeleton *ngIf=\"this.sessionsManager.allMySessionsShared.needsSkeleton()\" [times]=\"10\">\n  </app-session-list-minimal-skeleton>\n  <app-session-list-item-minimal\n    [providerPerspective]=\"false\"\n    *ngFor=\"let session of this.sessionsManager.allMySessionsShared.resource()\"\n    [session]=\"session\"\n  >\n  </app-session-list-item-minimal>\n</ion-content>\n";
      /***/
    },

    /***/
    "ajVz":
    /*!********************************************************************!*\
      !*** ./src/app/for_user/usr-request-log/usr-request-log.module.ts ***!
      \********************************************************************/

    /*! exports provided: UsrRequestLogPageModule */

    /***/
    function ajVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrRequestLogPageModule", function () {
        return UsrRequestLogPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../skeleton/skeleton/skeleton.module */
      "L9ti");
      /* harmony import */


      var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../common/common-declarations/common-declarations.module */
      "Z25Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _usr_request_log_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./usr-request-log-routing.module */
      "GKgO");
      /* harmony import */


      var _usr_request_log_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./usr-request-log.page */
      "ZQaA");

      var UsrRequestLogPageModule = function UsrRequestLogPageModule() {
        _classCallCheck(this, UsrRequestLogPageModule);
      };

      UsrRequestLogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _usr_request_log_routing_module__WEBPACK_IMPORTED_MODULE_7__["UsrRequestLogPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"], _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]],
        declarations: [_usr_request_log_page__WEBPACK_IMPORTED_MODULE_8__["UsrRequestLogPage"]]
      })], UsrRequestLogPageModule);
      /***/
    },

    /***/
    "kQYf":
    /*!********************************************************************!*\
      !*** ./src/app/for_user/usr-request-log/usr-request-log.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function kQYf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl91c2VyL3Vzci1yZXF1ZXN0LWxvZy91c3ItcmVxdWVzdC1sb2cucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=for_user-usr-request-log-usr-request-log-module-es5.js.map