(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"], {
    /***/
    "9WYv":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function WYv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\t<ion-buttons slot=\"end\">\n\t\t<app-loading-toolbar-button></app-loading-toolbar-button>\n\t  </ion-buttons>\n    <ion-title>ثبت نام</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form\n    [formGroup]=\"registerForm\"\n    (ngSubmit)=\"register(registerForm)\"\n    class=\"action-container register-form\"\n    method=\"post\"\n  >\n    <div class=\"action-content\">\n      <div class=\"row justify-content-center\" *ngIf=\"registerForm.controls.isProvider.value\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input  placeholder=\"نام\" formControlName=\"firstName\"></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\" *ngIf=\"registerForm.controls.isProvider.value\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"نام خانوادگی\"\n              formControlName=\"lastName\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              type=\"phone\"\n              placeholder=\"شماره موبایل ۰۹XXXXXXXX\"\n              formControlName=\"phone\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              type=\"password\"\n              placeholder=\"گذرواژه\"\n              formControlName=\"password\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row mt-3 justify-content-start\">\n        <div class=\"col-6 d-flex align-items-center justify-content-right\">\n          <ion-checkbox\n          formControlName=\"isProvider\"\n            #isProvider\n            class=\"primary-checkbox\"\n          ></ion-checkbox>\n          <span class=\"light-text small-text mr-2\">به عنوان مشاور</span>\n        </div>\n      </div>\n      <div   class=\"row mt-3 justify-content-start\">\n        <div  class=\"col-6 d-flex align-items-center justify-content-right\">\n          <ion-checkbox\n            formControlName=\"hasAffiliateCode\"\n            \n            class=\"primary-checkbox\"\n          ></ion-checkbox>\n          <span class=\"light-text small-text mr-2\">کد معرفی دارم.</span>\n        </div>\n      </div>\n      <div *ngIf=\"registerForm.controls.hasAffiliateCode.value \" class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              type=\"phone\"\n              placeholder=\"کد معرف ۰۹XXXXXXXX\"\n              formControlName=\"affiliateCode\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row mt-3 justify-content-start\">\n        <div class=\"col-6 d-flex align-items-center justify-content-right\">\n          <ion-checkbox\n            formControlName=\"acceptedTerms\"\n            #acceptedTerms\n            class=\"primary-checkbox\"\n          ></ion-checkbox>\n          <span class=\"light-text small-text mr-2\" ><u (click)=\"openTerms()\">قوانین</u> را می پذیرم.</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper dual\">\n        <app-submit-button [disabled]=\"!registerForm.controls.acceptedTerms.value\" text=\"ثبت نام\" ></app-submit-button>\n        <span class=\"small-text light-text align-self-center mt-3 mb-1\">حساب کاربری از پیش ساخته اید؟</span>\n\n        <ion-button\n          class=\"secondary-button\"\n          routerLink=\"/login\"\n          routerDirection=\"back\"\n          >وارد شوید</ion-button\n        >\n      </div>\n    </div>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "Ro0S":
    /*!**********************************************************!*\
      !*** ./src/app/auth/register/register-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function Ro0S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "yhyc");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "UrDz":
    /*!**************************************************!*\
      !*** ./src/app/auth/register/register.module.ts ***!
      \**************************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function UrDz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../common/static/terms/terms.component */
      "rywU");
      /* harmony import */


      var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../common/common-declarations/common-declarations.module */
      "Z25Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register-routing.module */
      "Ro0S");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register.page */
      "yhyc");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_7__["RegisterPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_3__["CommonDeclarationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]],
        entryComponents: [_common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_2__["TermsComponent"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "r/uw":
    /*!**************************************************!*\
      !*** ./src/app/auth/register/register.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function rUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".register-form {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm1cbntcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59Il19 */";
      /***/
    },

    /***/
    "yhyc":
    /*!************************************************!*\
      !*** ./src/app/auth/register/register.page.ts ***!
      \************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function yhyc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "9WYv");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "r/uw");
      /* harmony import */


      var _services_form_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/form-helper.service */
      "mp9f");
      /* harmony import */


      var src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/from-validation-message */
      "soHS");
      /* harmony import */


      var _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../common/static/terms/terms.component */
      "rywU");
      /* harmony import */


      var _services_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/provider.service */
      "gs/X");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../services/alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(menu, alertService, navContorll, authService, env, providerService, modalController, formHelper) {
          _classCallCheck(this, RegisterPage);

          this.menu = menu;
          this.alertService = alertService;
          this.navContorll = navContorll;
          this.authService = authService;
          this.env = env;
          this.providerService = providerService;
          this.modalController = modalController;
          this.formHelper = formHelper;
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern("09\\d{9}")])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required),
            isProvider: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](false),
            hasAffiliateCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](false),
            affiliateCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](""),
            acceptedTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](false)
          });
          this.validationMessages = [];
          this.formHelper.addValidationMessage(this.validationMessages, "firstName", src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__["FormValidationType"].REQUIRED, "نام الزامی است.");
          this.formHelper.addValidationMessage(this.validationMessages, "lastName", src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__["FormValidationType"].REQUIRED, "نام خانوادگی الزامی است.");
          this.formHelper.addValidationMessage(this.validationMessages, "affiliateCode", src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__["FormValidationType"].REQUIRED, "کد معرف وارد نشده است.");
          this.formHelper.addValidationMessage(this.validationMessages, "affiliateCode", src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__["FormValidationType"].PATTERN, "کد معرف یک شماره موبایل است.");
          this.formHelper.addValidationMessage(this.validationMessages, "phone", src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__["FormValidationType"].REQUIRED, "شماره موبایل الزامی است.");
          this.formHelper.addValidationMessage(this.validationMessages, "phone", src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__["FormValidationType"].PATTERN, "فرمت شماره موبایل صحیح نیست.");
          this.formHelper.addValidationMessage(this.validationMessages, "password", src_app_models_from_validation_message__WEBPACK_IMPORTED_MODULE_4__["FormValidationType"].REQUIRED, "گذرواژه الزامی است.");
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formHelper.setConditionalValidators(this.registerForm.controls.firstName, this.registerForm.controls.isProvider, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, this);
            this.formHelper.setConditionalValidators(this.registerForm.controls.lastName, this.registerForm.controls.isProvider, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, this);
            this.formHelper.setConditionalValidators(this.registerForm.controls.affiliateCode, this.registerForm.controls.hasAffiliateCode, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern("09\\d{9}")]), this);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menu.enable(false);
          }
        }, {
          key: "openTerms",
          value: function openTerms() {
            this.presentTermsModal().subscribe();
          }
        }, {
          key: "presentTermsModal",
          value: function presentTermsModal() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(this.modalController.create({
              component: _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__["TermsComponent"],
              componentProps: {}
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(modal.present());
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.menu.enable(true);
          }
        }, {
          key: "register",
          value: function register(form) {
            var _this = this;

            if (!this.formHelper.validateForm(this.validationMessages, form)) {
              return;
            }

            var firstName = null;
            var lastName = null;
            var roleId = this.env.USER_ROLE_ID;

            if (form.value.isProvider) {
              roleId = this.env.PROVIDER_ROLE_ID;
              firstName = form.value.firstName;
              lastName = form.value.lastName;
            }

            var affiliateCode = null;

            if (!form.controls.isProvider.value && form.controls.hasAffiliateCode.value && form.value.affiliateCode != "") {
              affiliateCode = form.value.affiliateCode;
            }

            this.env.somethingIsPending("registering");
            this.authService.register(form.value.phone, firstName, lastName, form.value.password, roleId, affiliateCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (result) {
              {
                return _this.authService.requestVerificationCode(form.value.phone, form.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (result) {
                  _this.authService.tempPassword = form.value.password;
                  _this.authService.tempPhoneNumber = form.value.phone;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (err) {
                  _this.alertService.presentError(_this.env.serverErrorMessage(err.error["error_code"]));

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(false);
                }));
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) {
              _this.alertService.presentError(_this.env.serverErrorMessage(error.error["error_code"]));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(false);
            })).subscribe(function (data) {
              _this.env.somethingIsDonePending("registering");

              if (data != false) {
                _this.alertService.presentSuccess("کد اعتبارسنجی به شماره همراه شما راسال شد.");

                _this.navContorll.navigateForward("/verify");
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["MenuController"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["NavController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"]
        }, {
          type: _services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"]
        }, {
          type: _services_form_helper_service__WEBPACK_IMPORTED_MODULE_3__["FormHelperService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
        selector: "app-register",
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__["MenuController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"], _services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"], _services_form_helper_service__WEBPACK_IMPORTED_MODULE_3__["FormHelperService"]])], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-register-register-module-es5.js.map