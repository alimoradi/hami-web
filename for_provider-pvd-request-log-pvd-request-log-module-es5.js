(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_provider-pvd-request-log-pvd-request-log-module"], {
    /***/
    "Ipa/":
    /*!************************************************************************!*\
      !*** ./src/app/for_provider/pvd-request-log/pvd-request-log.module.ts ***!
      \************************************************************************/

    /*! exports provided: PvdRequestLogPageModule */

    /***/
    function Ipa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PvdRequestLogPageModule", function () {
        return PvdRequestLogPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../common/common-declarations/common-declarations.module */
      "Z25Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _pvd_request_log_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pvd-request-log-routing.module */
      "Mori");
      /* harmony import */


      var _pvd_request_log_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pvd-request-log.page */
      "wLEm");

      var PvdRequestLogPageModule = function PvdRequestLogPageModule() {
        _classCallCheck(this, PvdRequestLogPageModule);
      };

      PvdRequestLogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pvd_request_log_routing_module__WEBPACK_IMPORTED_MODULE_6__["PvdRequestLogPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]],
        declarations: [_pvd_request_log_page__WEBPACK_IMPORTED_MODULE_7__["PvdRequestLogPage"]]
      })], PvdRequestLogPageModule);
      /***/
    },

    /***/
    "Mori":
    /*!********************************************************************************!*\
      !*** ./src/app/for_provider/pvd-request-log/pvd-request-log-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: PvdRequestLogPageRoutingModule */

    /***/
    function Mori(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PvdRequestLogPageRoutingModule", function () {
        return PvdRequestLogPageRoutingModule;
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


      var _pvd_request_log_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pvd-request-log.page */
      "wLEm");

      var routes = [{
        path: '',
        component: _pvd_request_log_page__WEBPACK_IMPORTED_MODULE_3__["PvdRequestLogPage"]
      }];

      var PvdRequestLogPageRoutingModule = function PvdRequestLogPageRoutingModule() {
        _classCallCheck(this, PvdRequestLogPageRoutingModule);
      };

      PvdRequestLogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PvdRequestLogPageRoutingModule);
      /***/
    },

    /***/
    "o6Rc":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_provider/pvd-request-log/pvd-request-log.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o6Rc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n    <ion-title>تاریخچه درخواست ها</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <app-session-list-item-minimal\n    [providerPerspective]=\"true\"\n    *ngFor=\"let session of sessions\"\n    [session] = \"session\"\n  >\n  </app-session-list-item-minimal>\n</ion-content>\n";
      /***/
    },

    /***/
    "r6C5":
    /*!************************************************************************!*\
      !*** ./src/app/for_provider/pvd-request-log/pvd-request-log.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function r6C5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl9wcm92aWRlci9wdmQtcmVxdWVzdC1sb2cvcHZkLXJlcXVlc3QtbG9nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wLEm":
    /*!**********************************************************************!*\
      !*** ./src/app/for_provider/pvd-request-log/pvd-request-log.page.ts ***!
      \**********************************************************************/

    /*! exports provided: PvdRequestLogPage */

    /***/
    function wLEm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PvdRequestLogPage", function () {
        return PvdRequestLogPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pvd_request_log_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pvd-request-log.page.html */
      "o6Rc");
      /* harmony import */


      var _pvd_request_log_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pvd-request-log.page.scss */
      "r6C5");
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

      var PvdRequestLogPage = /*#__PURE__*/function () {
        function PvdRequestLogPage(sessionsManager) {
          _classCallCheck(this, PvdRequestLogPage);

          this.sessionsManager = sessionsManager;
          this.sessions = [];
          this.refresher = null;
        }

        _createClass(PvdRequestLogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.sessionsManager.allMySessionsShared.getUpdateNotifier(this).subscribe(function (result) {
              _this.sessions = _this.sessionsManager.allMySessionsShared.resource();

              if (_this.refresher) {
                _this.refresher.complete();
              }
            });
            this.sessions = this.sessionsManager.allMySessionsShared.resource();
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

        return PvdRequestLogPage;
      }();

      PvdRequestLogPage.ctorParameters = function () {
        return [{
          type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]
        }];
      };

      PvdRequestLogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-pvd-request-log',
        template: _raw_loader_pvd_request_log_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pvd_request_log_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]])], PvdRequestLogPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=for_provider-pvd-request-log-pvd-request-log-module-es5.js.map