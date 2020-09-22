(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_admin-adm-dashboard-adm-dashboard-module"], {
    /***/
    "01aq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_admin/adm-dashboard/adm-dashboard.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n\n    </ion-buttons>\n    \n    <ion-title \n      >داشبورد</ion-title\n    >\n    \n    <ion-buttons slot=\"start\">\n      \n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h5 class=\"rounded d-block normal-text secondary-color-text text-center mt-3 mb-1 mx-3 p-2 number-text\">\n    آمار مشاوران\n  </h5>\n  <app-remote-stats-container [data]=\"this.providerService.statsByStatusShared.resource() \"></app-remote-stats-container>\n  <h5 class=\"rounded d-block normal-text secondary-color-text text-center mt-3 mb-1 mx-3 p-2 number-text\">\n    آمار کاربران\n  </h5>\n  <app-remote-stats-container [data]=\"this.userService.statsShared.resource() \"></app-remote-stats-container>\n \n</ion-content>\n";
      /***/
    },

    /***/
    "b0+I":
    /*!*************************************************************************!*\
      !*** ./src/app/for_admin/adm-dashboard/adm-dashboard-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: AdmDashboardPageRoutingModule */

    /***/
    function b0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdmDashboardPageRoutingModule", function () {
        return AdmDashboardPageRoutingModule;
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


      var _adm_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adm-dashboard.page */
      "qqYD");

      var routes = [{
        path: '',
        component: _adm_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["AdmDashboardPage"]
      }];

      var AdmDashboardPageRoutingModule = function AdmDashboardPageRoutingModule() {
        _classCallCheck(this, AdmDashboardPageRoutingModule);
      };

      AdmDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdmDashboardPageRoutingModule);
      /***/
    },

    /***/
    "m9u8":
    /*!*****************************************************************!*\
      !*** ./src/app/for_admin/adm-dashboard/adm-dashboard.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function m9u8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nh5 {\n  border: 1px solid #ffa198;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9mb3JfYWRtaW4vYWRtLWRhc2hib2FyZC9hZG0tZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBRUkseUJBQUE7QUFpREoiLCJmaWxlIjoic3JjL2FwcC9mb3JfYWRtaW4vYWRtLWRhc2hib2FyZC9hZG0tZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uLnNjc3MnO1xuaDVcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDtcbn0iXX0= */";
      /***/
    },

    /***/
    "qqYD":
    /*!***************************************************************!*\
      !*** ./src/app/for_admin/adm-dashboard/adm-dashboard.page.ts ***!
      \***************************************************************/

    /*! exports provided: AdmDashboardPage */

    /***/
    function qqYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdmDashboardPage", function () {
        return AdmDashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_adm_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./adm-dashboard.page.html */
      "01aq");
      /* harmony import */


      var _adm_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./adm-dashboard.page.scss */
      "m9u8");
      /* harmony import */


      var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/provider.service */
      "gs/X");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var AdmDashboardPage = /*#__PURE__*/function () {
        function AdmDashboardPage(menu, userService, providerService, env) {
          _classCallCheck(this, AdmDashboardPage);

          this.menu = menu;
          this.userService = userService;
          this.providerService = providerService;
          this.env = env;
          this.refresher = null;
        }

        _createClass(AdmDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.menu.enable(true);
            this.providerService.statsByStatusShared.getUpdateNotifier(this).subscribe(function () {
              if (_this.refresher) {
                _this.refresher.complete();
              }
            });
            this.providerService.statsByStatusShared.request();
            this.userService.statsShared.getUpdateNotifier(this).subscribe(function () {
              if (_this.refresher) {
                _this.refresher.complete();
              }
            });
            this.userService.statsShared.request();
          }
        }, {
          key: "refresh",
          value: function refresh(event) {
            this.refresher = event.target;
            this.providerService.statsByStatusShared.request();
            this.userService.statsShared.request();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return AdmDashboardPage;
      }();

      AdmDashboardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
        }];
      };

      AdmDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-adm-dashboard',
        template: _raw_loader_adm_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adm_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]])], AdmDashboardPage);
      /***/
    },

    /***/
    "wmNl":
    /*!*****************************************************************!*\
      !*** ./src/app/for_admin/adm-dashboard/adm-dashboard.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AdmDashboardPageModule */

    /***/
    function wmNl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdmDashboardPageModule", function () {
        return AdmDashboardPageModule;
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


      var _adm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adm-dashboard-routing.module */
      "b0+I");
      /* harmony import */


      var _adm_dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./adm-dashboard.page */
      "qqYD");

      var AdmDashboardPageModule = function AdmDashboardPageModule() {
        _classCallCheck(this, AdmDashboardPageModule);
      };

      AdmDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _adm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdmDashboardPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]],
        declarations: [_adm_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["AdmDashboardPage"]]
      })], AdmDashboardPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=for_admin-adm-dashboard-adm-dashboard-module-es5.js.map