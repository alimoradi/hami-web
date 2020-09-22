(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_provider-pvd-active-requests-pvd-active-requests-module"], {
    /***/
    "0c1o":
    /*!******************************************************************************!*\
      !*** ./src/app/for_provider/pvd-active-requests/pvd-active-requests.page.ts ***!
      \******************************************************************************/

    /*! exports provided: PvdActiveRequestsPage */

    /***/
    function c1o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PvdActiveRequestsPage", function () {
        return PvdActiveRequestsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pvd_active_requests_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pvd-active-requests.page.html */
      "hT4d");
      /* harmony import */


      var _pvd_active_requests_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pvd-active-requests.page.scss */
      "YBY+");
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

      var PvdActiveRequestsPage = /*#__PURE__*/function () {
        function PvdActiveRequestsPage(sessionsManager) {
          _classCallCheck(this, PvdActiveRequestsPage);

          this.sessionsManager = sessionsManager;
          this.refresher = null;
        }

        _createClass(PvdActiveRequestsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.sessionsManager.myActiveRequestsShared.getUpdateNotifier(this).subscribe(function (result) {
              _this.refresher && _this.refresher.complete();
            });
            this.sessionsManager.myActiveRequestsShared.request();
          }
        }, {
          key: "refresh",
          value: function refresh(event) {
            this.sessionsManager.myActiveRequestsShared.request();
            this.refresher = event.target;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return PvdActiveRequestsPage;
      }();

      PvdActiveRequestsPage.ctorParameters = function () {
        return [{
          type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]
        }];
      };

      PvdActiveRequestsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-pvd-active-requests',
        template: _raw_loader_pvd_active_requests_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pvd_active_requests_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]])], PvdActiveRequestsPage);
      /***/
    },

    /***/
    "9/V2":
    /*!****************************************************************************************!*\
      !*** ./src/app/for_provider/pvd-active-requests/pvd-active-requests-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: PvdActiveRequestsPageRoutingModule */

    /***/
    function V2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PvdActiveRequestsPageRoutingModule", function () {
        return PvdActiveRequestsPageRoutingModule;
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


      var _pvd_active_requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pvd-active-requests.page */
      "0c1o");

      var routes = [{
        path: '',
        component: _pvd_active_requests_page__WEBPACK_IMPORTED_MODULE_3__["PvdActiveRequestsPage"]
      }];

      var PvdActiveRequestsPageRoutingModule = function PvdActiveRequestsPageRoutingModule() {
        _classCallCheck(this, PvdActiveRequestsPageRoutingModule);
      };

      PvdActiveRequestsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PvdActiveRequestsPageRoutingModule);
      /***/
    },

    /***/
    "YBY+":
    /*!********************************************************************************!*\
      !*** ./src/app/for_provider/pvd-active-requests/pvd-active-requests.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function YBY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl9wcm92aWRlci9wdmQtYWN0aXZlLXJlcXVlc3RzL3B2ZC1hY3RpdmUtcmVxdWVzdHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "hT4d":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_provider/pvd-active-requests/pvd-active-requests.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hT4d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n    <ion-title>درخواست های جدید</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <app-session-list-minimal-skeleton\n    *ngIf=\"this.sessionsManager.myActiveRequestsShared.needsSkeleton()\"\n    [times]=\"5\"\n  ></app-session-list-minimal-skeleton>\n  <app-session-list-item-minimal\n    [providerPerspective]=\"true\"\n    *ngFor=\"let session of this.sessionsManager.myActiveRequestsShared.resource()\"\n    [session] = \"session\"\n  >\n  </app-session-list-item-minimal>\n</ion-content>\n";
      /***/
    },

    /***/
    "ocB8":
    /*!********************************************************************************!*\
      !*** ./src/app/for_provider/pvd-active-requests/pvd-active-requests.module.ts ***!
      \********************************************************************************/

    /*! exports provided: PvdActiveRequestsPageModule */

    /***/
    function ocB8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PvdActiveRequestsPageModule", function () {
        return PvdActiveRequestsPageModule;
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


      var _pvd_active_requests_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pvd-active-requests-routing.module */
      "9/V2");
      /* harmony import */


      var _pvd_active_requests_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pvd-active-requests.page */
      "0c1o");

      var PvdActiveRequestsPageModule = function PvdActiveRequestsPageModule() {
        _classCallCheck(this, PvdActiveRequestsPageModule);
      };

      PvdActiveRequestsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _pvd_active_requests_routing_module__WEBPACK_IMPORTED_MODULE_7__["PvdActiveRequestsPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"], _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]],
        declarations: [_pvd_active_requests_page__WEBPACK_IMPORTED_MODULE_8__["PvdActiveRequestsPage"]]
      })], PvdActiveRequestsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=for_provider-pvd-active-requests-pvd-active-requests-module-es5.js.map