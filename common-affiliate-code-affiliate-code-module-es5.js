(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-affiliate-code-affiliate-code-module"], {
    /***/
    "7Qth":
    /*!************************************************************************!*\
      !*** ./src/app/common/affiliate-code/affiliate-code-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: AffiliateCodePageRoutingModule */

    /***/
    function Qth(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AffiliateCodePageRoutingModule", function () {
        return AffiliateCodePageRoutingModule;
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


      var _affiliate_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./affiliate-code.page */
      "OI2a");

      var routes = [{
        path: '',
        component: _affiliate_code_page__WEBPACK_IMPORTED_MODULE_3__["AffiliateCodePage"]
      }];

      var AffiliateCodePageRoutingModule = function AffiliateCodePageRoutingModule() {
        _classCallCheck(this, AffiliateCodePageRoutingModule);
      };

      AffiliateCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AffiliateCodePageRoutingModule);
      /***/
    },

    /***/
    "HBFL":
    /*!****************************************************************!*\
      !*** ./src/app/common/affiliate-code/affiliate-code.module.ts ***!
      \****************************************************************/

    /*! exports provided: AffiliateCodePageModule */

    /***/
    function HBFL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AffiliateCodePageModule", function () {
        return AffiliateCodePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../common-declarations/common-declarations.module */
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


      var _affiliate_code_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./affiliate-code-routing.module */
      "7Qth");
      /* harmony import */


      var _affiliate_code_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./affiliate-code.page */
      "OI2a");

      var AffiliateCodePageModule = function AffiliateCodePageModule() {
        _classCallCheck(this, AffiliateCodePageModule);
      };

      AffiliateCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _affiliate_code_routing_module__WEBPACK_IMPORTED_MODULE_6__["AffiliateCodePageRoutingModule"], _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]],
        declarations: [_affiliate_code_page__WEBPACK_IMPORTED_MODULE_7__["AffiliateCodePage"]]
      })], AffiliateCodePageModule);
      /***/
    },

    /***/
    "JkoR":
    /*!****************************************************************!*\
      !*** ./src/app/common/affiliate-code/affiliate-code.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function JkoR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.affiliate-code {\n  padding-top: 3px;\n  cursor: pointer;\n}\n.icon-button {\n  height: 27px;\n  width: 27px;\n}\n.icon-button ion-icon {\n  --ionicon-stroke-width: 40px;\n  color: #c7bebe;\n}\n.discounts .discount {\n  border: 1px solid #ffa198;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  --border-radius:$radius;\n}\n.discounts .discount .use-discount-button {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYWZmaWxpYXRlLWNvZGUvYWZmaWxpYXRlLWNvZGUucGFnZS5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFrREY7QUFoREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQW1ERjtBQWxERTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQW9ESjtBQWhERTtFQUNFLHlCQUFBO0VDNEJILGtCRDNCMEI7RUM0QjFCLDBCRDVCMEI7RUM2QnZCLHVCRDdCdUI7RUM4QnZCLHVCQUFBO0FEd0JKO0FBcERJO0VBRUUsY0FBQTtBQXFETiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hZmZpbGlhdGUtY29kZS9hZmZpbGlhdGUtY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcbi5hZmZpbGlhdGUtY29kZSB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pY29uLWJ1dHRvbiB7XG4gIGhlaWdodDogMjdweDtcbiAgd2lkdGg6IDI3cHg7XG4gIGlvbi1pY29uIHtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0MHB4O1xuICAgIGNvbG9yOiAjYzdiZWJlO1xuICB9XG59XG4uZGlzY291bnRze1xuICAuZGlzY291bnR7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDVweCk7XG5cbiAgICAudXNlLWRpc2NvdW50LWJ1dHRvblxuICAgIHtcbiAgICAgIG1hcmdpbjoxMHB4IDA7XG4gICAgfVxuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "OI2a":
    /*!**************************************************************!*\
      !*** ./src/app/common/affiliate-code/affiliate-code.page.ts ***!
      \**************************************************************/

    /*! exports provided: AffiliateCodePage */

    /***/
    function OI2a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AffiliateCodePage", function () {
        return AffiliateCodePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_affiliate_code_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./affiliate-code.page.html */
      "UzYx");
      /* harmony import */


      var _affiliate_code_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./affiliate-code.page.scss */
      "JkoR");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../services/alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var AffiliateCodePage = /*#__PURE__*/function () {
        function AffiliateCodePage(alert, userService, auth) {
          _classCallCheck(this, AffiliateCodePage);

          this.alert = alert;
          this.userService = userService;
          this.auth = auth;
          this.affilitateCode = null;
          this.discounts = [];
          this.refresher = null;
          this.isSubmitting = false;
        }

        _createClass(AffiliateCodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.discountsShared.getUpdateNotifier(this).subscribe(function (result) {
              _this.discounts = _this.userService.discountsShared.resource();

              if (_this.refresher) {
                _this.refresher.complete();
              }
            });
            this.auth.getUser().then(function (user) {
              _this.affilitateCode = user.phone;
            });
            this.userService.discountsShared.request();
          }
        }, {
          key: "refresh",
          value: function refresh(ev) {
            this.refresher = ev.target;
            this.userService.discountsShared.request();
          }
        }, {
          key: "useDiscount",
          value: function useDiscount(discountId) {
            var _this2 = this;

            this.isSubmitting = true;
            this.userService.useDiscount(discountId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              _this2.alert.presentError("شارژ حساب با مشکل روبرو شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(-1);
            })).subscribe(function (result) {
              if (result != 1) {
                _this2.alert.presentSuccess("حساب شما شارژ شد.");

                _this2.userService.balanceShared.request();

                _this2.userService.discountsShared.request();
              }

              _this2.isSubmitting = false;
            });
          }
        }, {
          key: "copyToClipboard",
          value: function copyToClipboard() {
            var _this3 = this;

            navigator.clipboard.writeText(this.affilitateCode).then(function () {
              _this3.alert.presentToast("کد معرفی کپی شد.");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return AffiliateCodePage;
      }();

      AffiliateCodePage.ctorParameters = function () {
        return [{
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      AffiliateCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-affiliate-code',
        template: _raw_loader_affiliate_code_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_affiliate_code_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AffiliateCodePage);
      /***/
    },

    /***/
    "UzYx":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/affiliate-code/affiliate-code.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UzYx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>تخفیف و معرفی به دوستان</ion-title>\n    <ion-buttons class=\"\" slot=\"end\">\n      <ion-back-button  ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"action-container\">\n    <div class=\"action-content p-3\">\n      <p class=\"p-3 mb-1 text-center guide-text normal-text primary-color-text\">\n        کد زیر را برای دوستان خود ارسال کنید. با ثبت آن ها و استفاده از این کد\n        هنگام ثبت نام، هر دو کد تخفیف دریافت کنید.\n      </p>\n      <div\n        (click)=\"copyToClipboard()\"\n        class=\"m-2 d-flex align-items-center justify-content-center light-text large-text\"\n      >\n        <span class=\"affiliate-code\">{{affilitateCode}}</span>\n        <ion-button class=\"icon-button\">\n          <ion-icon name=\"copy-outline\"></ion-icon>\n        </ion-button>\n      </div>\n      <div class=\"discounts mt-4\">\n        <span *ngIf=\"discounts.length\" class=\"d-block primary-color-text normal-text text-center mt-3 mb-2\">\n        تخفیف های من\n        </span>\n        <div\n          class=\"discount mb-2 d-flex justify-content-around align-items-center\"\n          *ngFor=\"let discount of discounts\"\n        >\n          <div class=\"discount-value d-flex align-items-center\">\n            <span class=\"discount-value-number number-text normal-text ml-1\">\n              {{discount.value}}\n            </span>\n            <span class=\"discount-value-currency light-text small-text\">\n              تومان\n            </span>\n          </div>\n\n          <span\n            class=\"discount-expired small-text\"\n            [ngClass]=\"(discount.expired)?'secondary-color-text':'primary-color-text'\"\n          >\n            {{(discount.expired)?'منقضی شده': 'قابل استفاده'}}\n          </span>\n          <app-submit-button\n            [disabled] = \"discount.expired\"\n            class=\"use-discount-button\"\n            [isInlineAction]=\"true\"\n            (submitted)=\"useDiscount(discount.id)\"\n            [isWaiting] =\"isSubmitting\"\n            text=\"شارژ موجودی\"\n          >\n          </app-submit-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\"></div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-affiliate-code-affiliate-code-module-es5.js.map