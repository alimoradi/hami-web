(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
    /***/
    "DdsG":
    /*!****************************************************!*\
      !*** ./src/app/auth/login/login-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function DdsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "v04T");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "eqV2":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function eqV2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n    <ion-title>ورود</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form\n    [formGroup]=\"loginForm\"\n    class=\"login-form action-container\"\n    (ngSubmit)=\"login(loginForm)\"\n    method=\"post\"\n  >\n    <div class=\"action-content\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"phone\"\n              placeholder=\"شماره موبایل ۰۹XXXXXXXX\"\n              type=\"phone\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"password\"\n              placeholder=\"گذرواژه\"\n              type=\"password\"\n              name=\"password\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <span (click)=\"forgotPassword()\" class=\"light-text small-text d-block text-left pl-2 mt-3\">گذرواژه ام را فراموش کرده ام.</span>\n      <!-- <div class=\"row mt-3 justify-content-start\">\n        <div class=\"col-6 d-flex align-items-center justify-content-right\">\n          <ion-checkbox\n            formControlName=\"isProvider\"\n            class=\"primary-checkbox\"\n          ></ion-checkbox>\n          <span class=\"light-text small-text mr-2\">به عنوان مشاور</span>\n        </div>\n      </div> -->\n    </div>\n    <div class=\"actions\">\n\t\t<div class=\"actions-wrapper dual\">\n\t\t\t\n      <app-submit-button [isWaiting]=\"submitDisabled\" text=\"وارد شوید\" ></app-submit-button>\n      <span class=\"small-text light-text align-self-center mt-3 mb-1\">هنوز حساب کاربری ندارید؟</span>\n\t\t  <ion-button\n            \n            routerLink=\"/register\"\n            class=\"secondary-button\"\n            routerDirection=\"forward\"\n            >ثبت نام کنید</ion-button\n          >\n\t\t</div>\n    </div>\t\n      \n    \n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "lu3c":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.module.ts ***!
      \********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function lu3c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-routing.module */
      "DdsG");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login.page */
      "v04T");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "v04T":
    /*!******************************************!*\
      !*** ./src/app/auth/login/login.page.ts ***!
      \******************************************/

    /*! exports provided: LoginPage */

    /***/
    function v04T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "eqV2");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "zjRc");
      /* harmony import */


      var _services_form_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/form-helper.service */
      "mp9f");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/models/from-validation-message */
      "soHS");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService, navCtrl, alertService, menu, env, formHelper) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.alertService = alertService;
          this.menu = menu;
          this.env = env;
          this.formHelper = formHelper;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("(09\\d{9})") //|admin")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            isProvider: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](false)
          });
          this.validationMessages = [];
          this.submitDisabled = false;
          this.formHelper.addValidationMessage(this.validationMessages, 'phone', src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_12__["FormValidationType"].REQUIRED, "شماره موبایل الزامی است.");
          this.formHelper.addValidationMessage(this.validationMessages, 'phone', src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_12__["FormValidationType"].PATTERN, "فرمت شماره موبایل صحیح نیست.");
          this.formHelper.addValidationMessage(this.validationMessages, 'password', src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_12__["FormValidationType"].REQUIRED, "گذرواژه الزامی است.");
        }

        _createClass(LoginPage, [{
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
          key: "login",
          value: function login(form) {
            var _this = this;

            console.log("login");

            if (!this.formHelper.validateForm(this.validationMessages, form)) {
              return;
            }

            var roleId = form.value.isProvider ? this.env.PROVIDER_ROLE_ID : this.env.USER_ROLE_ID;
            this.env.somethingIsPending("logging in");
            this.submitDisabled = true;
            this.authService.login(form.value.phone, form.value.password, roleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              var errorType = error["error"]["error"];

              switch (errorType) {
                case "invalid_credentials":
                  _this.alertService.presentError("شماره موبایل یا گذرواژه صحیح نیست.");

                  break;

                case "not_verified":
                  _this.alertService.presentError("شماره موبایل اعتبار سنجی نشده است.");

                  return _this.authService.requestVerificationCode(form.value.phone, form.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
                    _this.authService.tempPassword = form.value.password;
                    _this.authService.tempPhoneNumber = form.value.phone;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                    _this.alertService.presentError("ارسال پیام اعتبار سنجی با مشکل روبه رو شد.");

                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                    if (result != false) {
                      _this.alertService.presentSuccess("کد اعتبارسنجی به شماره همراه شما راسال شد.");

                      _this.navCtrl.navigateForward("/verify");
                    }

                    return false;
                  }));
                  break;

                default:
                  _this.alertService.presentError("ورود به حساب با مشکل روبرو شده است.");

              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
            })).subscribe(function (data) {
              _this.submitDisabled = false;

              _this.env.somethingIsDonePending("logging in");

              if (data != false) {
                _this.alertService.presentSuccess("خوش آمدید!");

                if (roleId == _this.env.PROVIDER_ROLE_ID) {
                  _this.navCtrl.navigateRoot(["/"]);
                } else {
                  _this.navCtrl.navigateRoot("/");
                }

                _this.authService.role = roleId;
              }
            }, function (error) {
              _this.submitDisabled = false;

              _this.env.somethingIsDonePending("logging in");
            });
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword() {
            this.navCtrl.navigateForward(['/forgot-password-phone']);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }, {
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _services_form_helper_service__WEBPACK_IMPORTED_MODULE_3__["FormHelperService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"], _services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"], _services_form_helper_service__WEBPACK_IMPORTED_MODULE_3__["FormHelperService"]])], LoginPage);
      /***/
    },

    /***/
    "zjRc":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function zjRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-form {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm1cbntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-login-login-module-es5.js.map