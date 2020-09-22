(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-verify-verify-module"], {
    /***/
    "FABh":
    /*!**********************************************!*\
      !*** ./src/app/auth/verify/verify.module.ts ***!
      \**********************************************/

    /*! exports provided: VerifyPageModule */

    /***/
    function FABh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
        return VerifyPageModule;
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


      var _verify_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify-routing.module */
      "Qs64");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./verify.page */
      "Wzv2");

      var VerifyPageModule = function VerifyPageModule() {
        _classCallCheck(this, VerifyPageModule);
      };

      VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerifyPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_7__["VerifyPage"]]
      })], VerifyPageModule);
      /***/
    },

    /***/
    "Qs64":
    /*!******************************************************!*\
      !*** ./src/app/auth/verify/verify-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: VerifyPageRoutingModule */

    /***/
    function Qs64(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
        return VerifyPageRoutingModule;
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


      var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify.page */
      "Wzv2");

      var routes = [{
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
      }];

      var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
        _classCallCheck(this, VerifyPageRoutingModule);
      };

      VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerifyPageRoutingModule);
      /***/
    },

    /***/
    "Wzv2":
    /*!********************************************!*\
      !*** ./src/app/auth/verify/verify.page.ts ***!
      \********************************************/

    /*! exports provided: VerifyPage */

    /***/
    function Wzv2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
        return VerifyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verify.page.html */
      "vxeM");
      /* harmony import */


      var _verify_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verify.page.scss */
      "hBbK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var VerifyPage = /*#__PURE__*/function () {
        function VerifyPage(authService, navCtrl, alertService, menu, env) {
          _classCallCheck(this, VerifyPage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.alertService = alertService;
          this.menu = menu;
          this.env = env;
          this.verifyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            verificationCodeInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]()
          });
        }

        _createClass(VerifyPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menu.enable(false);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.menu.enable(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verify",
          value: function verify(form) {
            var _this = this;

            this.env.somethingIsPending("verifying phone number");
            this.authService.verify(form.value.verificationCodeInput, this.authService.tempPhoneNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              _this.alertService.presentError('کد اعتبارسنجی صحیح نیست.');

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            })).subscribe(function (result) {
              if (result != false) {
                _this.alertService.presentSuccess('اکنون می توانید وارد شوید.');

                _this.navCtrl.navigateBack(['/login']);
              }

              _this.env.somethingIsDonePending("verifying phone number");
            });
          }
        }]);

        return VerifyPage;
      }();

      VerifyPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }];
      };

      VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: "app-verify",
        template: _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]])], VerifyPage);
      /***/
    },

    /***/
    "hBbK":
    /*!**********************************************!*\
      !*** ./src/app/auth/verify/verify.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function hBbK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "vxeM":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function vxeM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n      </ion-buttons>\n    <ion-title>اعتبارسنجی شماره موبایل</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form\n    [formGroup]=\"verifyForm\"\n    class=\"verify-form action-container\"\n    (ngSubmit)=\"verify(verifyForm)\"\n    method=\"post\"\n  >\n  <div class=\"action-content\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12 col-12\">\n        <ion-item>\n          <ion-input\n          clearOnEdit=true\n            formControlName=\"verificationCodeInput\"\n            placeholder=\"کد اعتبارسنجی\"\n            type=\"text\"\n            maxlength=\"4\"\n          ></ion-input>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <p class=\"text-center my-2 small-text light-text\">\n      کد ۴ رقمی به شماره موبایل شما ارسال شده است.\n    </p>\n    <div class=\"actions-wrapper\">\n      \n      <ion-button type=\"submit\"  class=\"primary-button\"\n          >ارسال کد\n        </ion-button>\n    </div>\n  </div>\n    \n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-verify-verify-module-es5.js.map