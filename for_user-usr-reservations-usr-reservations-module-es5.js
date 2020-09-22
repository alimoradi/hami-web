(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_user-usr-reservations-usr-reservations-module"], {
    /***/
    "9igO":
    /*!**********************************************************************!*\
      !*** ./src/app/for_user/usr-reservations/usr-reservations.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function igO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.count-badge {\n  background-color: #ffa198;\n  color: white;\n  font-size: 11px;\n  margin-top: -2px;\n  margin-right: 4px;\n  padding: 2px 6px;\n  height: 15px;\n}\n.badge-label {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9mb3JfdXNlci91c3ItcmVzZXJ2YXRpb25zL3Vzci1yZXNlcnZhdGlvbnMucGFnZS5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUFFSSx5QkNTb0I7RURScEIsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaURKO0FBL0NBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0FBaURKIiwiZmlsZSI6InNyYy9hcHAvZm9yX3VzZXIvdXNyLXJlc2VydmF0aW9ucy91c3ItcmVzZXJ2YXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcbi5jb3VudC1iYWRnZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6JHNlY29uZGFyeS1jb2xvci14bGlnaHQ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcbiAgICBwYWRkaW5nOjJweCA2cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xufVxuLmJhZGdlLWxhYmVsXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */";
      /***/
    },

    /***/
    "Vhcu":
    /*!**********************************************************************!*\
      !*** ./src/app/for_user/usr-reservations/usr-reservations.module.ts ***!
      \**********************************************************************/

    /*! exports provided: UsrReservationsPageModule */

    /***/
    function Vhcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrReservationsPageModule", function () {
        return UsrReservationsPageModule;
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


      var _usr_reservations_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./usr-reservations-routing.module */
      "iSoB");
      /* harmony import */


      var _usr_reservations_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./usr-reservations.page */
      "h8PL");

      var UsrReservationsPageModule = function UsrReservationsPageModule() {
        _classCallCheck(this, UsrReservationsPageModule);
      };

      UsrReservationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _usr_reservations_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsrReservationsPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]],
        declarations: [_usr_reservations_page__WEBPACK_IMPORTED_MODULE_7__["UsrReservationsPage"]]
      })], UsrReservationsPageModule);
      /***/
    },

    /***/
    "h8PL":
    /*!********************************************************************!*\
      !*** ./src/app/for_user/usr-reservations/usr-reservations.page.ts ***!
      \********************************************************************/

    /*! exports provided: UsrReservationsPage */

    /***/
    function h8PL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrReservationsPage", function () {
        return UsrReservationsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_usr_reservations_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./usr-reservations.page.html */
      "yYpH");
      /* harmony import */


      var _usr_reservations_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./usr-reservations.page.scss */
      "9igO");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var _models_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../models/session */
      "m6xN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var UsrReservationsPage = /*#__PURE__*/function () {
        function UsrReservationsPage(sessionsManagerService, navController, env) {
          _classCallCheck(this, UsrReservationsPage);

          this.sessionsManagerService = sessionsManagerService;
          this.navController = navController;
          this.env = env;
          this.state = _models_session__WEBPACK_IMPORTED_MODULE_5__["SessionState"];
          this.stateString = _models_session__WEBPACK_IMPORTED_MODULE_5__["Session"].getStateStringByState;
          this.selectedState = _models_session__WEBPACK_IMPORTED_MODULE_5__["SessionState"].ACTIVE;
          this.filteredSessions = [];
          this.activeCount = 0;
          this.reservedCount = 0;
          this.endedCount = 0;
          this.refresher = null;
        }

        _createClass(UsrReservationsPage, [{
          key: "segmentChanged",
          value: function segmentChanged(event) {
            //this.selectedState = event.target.value;
            this.filterSessions();
          }
        }, {
          key: "setCount",
          value: function setCount() {
            this.activeCount = this.sessionsManagerService.allMySessionsShared.resource().filter(function (session) {
              return _models_session__WEBPACK_IMPORTED_MODULE_5__["Session"].getState(session) == _models_session__WEBPACK_IMPORTED_MODULE_5__["SessionState"].ACTIVE;
            }).length;
            this.reservedCount = this.sessionsManagerService.allMySessionsShared.resource().filter(function (session) {
              return _models_session__WEBPACK_IMPORTED_MODULE_5__["Session"].getState(session) == _models_session__WEBPACK_IMPORTED_MODULE_5__["SessionState"].RESERVED;
            }).length;
            this.endedCount = this.sessionsManagerService.allMySessionsShared.resource().filter(function (session) {
              return _models_session__WEBPACK_IMPORTED_MODULE_5__["Session"].getState(session) == _models_session__WEBPACK_IMPORTED_MODULE_5__["SessionState"].ENDED;
            }).length;
          }
        }, {
          key: "filterSessions",
          value: function filterSessions() {
            var _this = this;

            var sessions = this.sessionsManagerService.allMySessionsShared.resource().filter(function (session) {
              return _models_session__WEBPACK_IMPORTED_MODULE_5__["Session"].getState(session) == _this.selectedState;
            });
            this.filteredSessions = [{
              title: null,
              sessions: sessions,
              count: sessions.length
            }];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.sessionsManagerService.allMySessionsShared.getUpdateNotifier(this).subscribe(function (result) {
              _this2.filterSessions();

              _this2.setCount();

              if (_this2.refresher) {
                _this2.refresher.complete();
              }
            });
            this.filterSessions();
            this.setCount();
            this.sessionsManagerService.allMySessionsShared.request();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "refresh",
          value: function refresh(ev) {
            this.refresher = ev.target;
            this.sessionsManagerService.allMySessionsShared.request();
          }
        }, {
          key: "navigateToPeerChats",
          value: function navigateToPeerChats() {
            this.navController.navigateForward(['peer-chats/' + this.env.USER_ROLE_ID]);
          }
        }]);

        return UsrReservationsPage;
      }();

      UsrReservationsPage.ctorParameters = function () {
        return [{
          type: _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionsManagerService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }];
      };

      UsrReservationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-usr-reservations',
        template: _raw_loader_usr_reservations_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usr_reservations_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionsManagerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])], UsrReservationsPage);
      /***/
    },

    /***/
    "iSoB":
    /*!******************************************************************************!*\
      !*** ./src/app/for_user/usr-reservations/usr-reservations-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: UsrReservationsPageRoutingModule */

    /***/
    function iSoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrReservationsPageRoutingModule", function () {
        return UsrReservationsPageRoutingModule;
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


      var _usr_reservations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./usr-reservations.page */
      "h8PL");

      var routes = [{
        path: '',
        component: _usr_reservations_page__WEBPACK_IMPORTED_MODULE_3__["UsrReservationsPage"]
      }];

      var UsrReservationsPageRoutingModule = function UsrReservationsPageRoutingModule() {
        _classCallCheck(this, UsrReservationsPageRoutingModule);
      };

      UsrReservationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsrReservationsPageRoutingModule);
      /***/
    },

    /***/
    "yYpH":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_user/usr-reservations/usr-reservations.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yYpH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>مشاوره های من</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"\" (click)=\"navigateToPeerChats()\">\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </ion-button>\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-segment\n    class=\"primary-segment\"\n    scrollable\n    [(ngModel)]=\"selectedState\"\n    (ionChange)=\"segmentChanged($event)\"\n    mode=\"ios\"\n  >\n    <ion-segment-button [value]=\"state.ACTIVE\">\n      <ion-label class=\"badge-label\"\n        >{{stateString(state.ACTIVE)}}\n        <ion-badge class=\"count-badge\" mode=\"ios\">{{activeCount}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button [value]=\"state.RESERVED\">\n      <ion-label class=\"badge-label\"\n        >{{stateString(state.RESERVED)}}\n        <ion-badge class=\"count-badge\" mode=\"ios\">{{reservedCount}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button [value]=\"state.ENDED\">\n      <ion-label class=\"badge-label\"\n        >{{stateString(state.ENDED)}}\n        <ion-badge class=\"count-badge\" mode=\"ios\">{{endedCount}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <app-session-list\n    [sessionListArray]=\"filteredSessions\"\n    [providerPerspective]=\"false\"\n  >\n  </app-session-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=for_user-usr-reservations-usr-reservations-module-es5.js.map