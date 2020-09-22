(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-user-payments-user-payments-module"], {
    /***/
    "58og":
    /*!**************************************************************!*\
      !*** ./src/app/common/user-payments/user-payments.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function og(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.verified-text.verified {\n  color: #71bcc1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vdXNlci1wYXltZW50cy91c2VyLXBheW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBOUNJO0VBRUksY0NHUTtBRDRDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vdXNlci1wYXltZW50cy91c2VyLXBheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uLnNjc3MnO1xuLnZlcmlmaWVkLXRleHRcbntcbiAgICAmLnZlcmlmaWVkXG4gICAge1xuICAgICAgICBjb2xvcjokcHJpbWFyeS1jb2xvcjtcbiAgICB9XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */";
      /***/
    },

    /***/
    "J4yp":
    /*!************************************************************!*\
      !*** ./src/app/common/user-payments/user-payments.page.ts ***!
      \************************************************************/

    /*! exports provided: UserPaymentsPage */

    /***/
    function J4yp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPaymentsPage", function () {
        return UserPaymentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_payments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-payments.page.html */
      "xB5s");
      /* harmony import */


      var _user_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-payments.page.scss */
      "58og");
      /* harmony import */


      var _models_payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/payment */
      "SI6r");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var UserPaymentsPage = /*#__PURE__*/function () {
        function UserPaymentsPage(userService, env) {
          _classCallCheck(this, UserPaymentsPage);

          this.userService = userService;
          this.env = env;
          this.refresher = null;
          this.getVerifiedText = _models_payment__WEBPACK_IMPORTED_MODULE_3__["Payment"].getVerifiedText;
        }

        _createClass(UserPaymentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.myPayments.getUpdateNotifier(this).subscribe(function (result) {
              _this.refresher && _this.refresher.complete();
            });
            this.userService.myPayments.request();
          }
        }, {
          key: "refresh",
          value: function refresh(event) {
            this.userService.myPayments.request();
            this.refresher = event.target;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return UserPaymentsPage;
      }();

      UserPaymentsPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
        }];
      };

      UserPaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-user-payments',
        template: _raw_loader_user_payments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]])], UserPaymentsPage);
      /***/
    },

    /***/
    "LcCl":
    /*!**************************************************************!*\
      !*** ./src/app/common/user-payments/user-payments.module.ts ***!
      \**************************************************************/

    /*! exports provided: UserPaymentsPageModule */

    /***/
    function LcCl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPaymentsPageModule", function () {
        return UserPaymentsPageModule;
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


      var _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../common-declarations/common-declarations.module */
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


      var _user_payments_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-payments-routing.module */
      "NIBY");
      /* harmony import */


      var _user_payments_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-payments.page */
      "J4yp");

      var UserPaymentsPageModule = function UserPaymentsPageModule() {
        _classCallCheck(this, UserPaymentsPageModule);
      };

      UserPaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _user_payments_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserPaymentsPageRoutingModule"], _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"], _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]],
        declarations: [_user_payments_page__WEBPACK_IMPORTED_MODULE_8__["UserPaymentsPage"]]
      })], UserPaymentsPageModule);
      /***/
    },

    /***/
    "NIBY":
    /*!**********************************************************************!*\
      !*** ./src/app/common/user-payments/user-payments-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: UserPaymentsPageRoutingModule */

    /***/
    function NIBY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPaymentsPageRoutingModule", function () {
        return UserPaymentsPageRoutingModule;
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


      var _user_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-payments.page */
      "J4yp");

      var routes = [{
        path: '',
        component: _user_payments_page__WEBPACK_IMPORTED_MODULE_3__["UserPaymentsPage"]
      }];

      var UserPaymentsPageRoutingModule = function UserPaymentsPageRoutingModule() {
        _classCallCheck(this, UserPaymentsPageRoutingModule);
      };

      UserPaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserPaymentsPageRoutingModule);
      /***/
    },

    /***/
    "SI6r":
    /*!***********************************!*\
      !*** ./src/app/models/payment.ts ***!
      \***********************************/

    /*! exports provided: Payment */

    /***/
    function SI6r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Payment", function () {
        return Payment;
      });

      var Payment = /*#__PURE__*/function () {
        function Payment() {
          _classCallCheck(this, Payment);
        }

        _createClass(Payment, null, [{
          key: "getVerifiedText",
          value: function getVerifiedText(payment) {
            if (payment.is_verified) {
              return 'تأیید شده';
            }

            return 'تأیید نشده';
          }
        }]);

        return Payment;
      }();
      /***/

    },

    /***/
    "xB5s":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-payments/user-payments.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xB5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n    <ion-title>تاریخچه پرداخت ها</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-payment-list-skeleton *ngIf=\"this.userService.myPayments.needsSkeleton()\"\n  [times] = \"4\"\n  ></app-payment-list-skeleton>\n  <ion-list>\n    <ion-item\n      class=\"shadow-item session-list-item\"\n      *ngFor=\"let payment of this.userService.myPayments.resource()\"\n      button\n    >\n      <div class=\"d-flex flex-column w-100 py-3\">\n        <div class=\"w-100 d-flex justify-content-between\">\n          <div class=\"amount-container d-flex align-items-center\">\n            <span class=\"primary-color-text normal-text number-text ml-1\"\n              >{{payment.amount}}</span\n            >\n            <span class=\"light-text small-text\">تومان</span>\n          </div>\n          <span class=\"date light-text small-text number-text\">\n            {{this.env.dateStringToJalaliDate(payment.created_at)}}\n          </span>\n          <span\n            class=\"small-text secondary-color-text verified-text\"\n            [ngClass]=\"payment.is_verified?'verified':''\"\n          >\n            {{getVerifiedText(payment)}}\n          </span>\n        </div>\n        <div\n          class=\"w-100 d-flex justify-content-between mt-2 pt-2 border-top\"\n          \n        >\n          <span class=\"light-text small-text\"> شماره ارجاع </span>\n          <span class=\"small-text primary-color-dark-text\" >\n            {{(payment.is_verified)?payment.reference_id:''}}\n          </span>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-user-payments-user-payments-module-es5.js.map