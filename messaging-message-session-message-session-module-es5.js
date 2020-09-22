(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-message-session-message-session-module"], {
    /***/
    "/U64":
    /*!*********************************************************************!*\
      !*** ./src/app/messaging/message-session/message-session.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function U64(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nion-title .avatar {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50px;\n  background-position: center center;\n  background-size: cover;\n  margin-left: 10px;\n  margin-top: 2px;\n}\nion-title .online-status {\n  padding-top: 4px;\n  padding-left: 10px;\n  line-height: 2px;\n}\nion-title .online-status ion-icon.online {\n  color: lime;\n}\nion-title .online-status ion-icon.offline {\n  color: gray;\n}\n.chat-content .input {\n  align-self: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9tZXNzYWdpbmcvbWVzc2FnZS1zZXNzaW9uL21lc3NhZ2Utc2Vzc2lvbi5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBQTlDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZ0RKO0FBOUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ0RKO0FBOUNNO0VBQ0UsV0FBQTtBQWdEUjtBQTlDTTtFQUNFLFdDRk87QURrRGY7QUF0Q0U7RUFDRSxlQUFBO0FBd0NKIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2Utc2Vzc2lvbi9tZXNzYWdlLXNlc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvY29tbW9uLnNjc3NcIjtcblxuaW9uLXRpdGxlIHtcbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbiAgLm9ubGluZS1zdGF0dXMge1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAycHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgJi5vbmxpbmUge1xuICAgICAgICBjb2xvcjogJG9ubGluZS1jb2xvcjtcbiAgICAgIH1cbiAgICAgICYub2ZmbGluZSB7XG4gICAgICAgIGNvbG9yOiAkb2ZmbGluZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm5hbWUtdGV4dCB7XG4gIH1cbiAgLnNlc3Npb24tc3RhdHVzIHtcbiAgfVxufVxuLmNoYXQtY29udGVudCB7XG4gIC5pbnB1dCB7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICB9XG59XG5cbiIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */";
      /***/
    },

    /***/
    "MTyT":
    /*!*******************************************************************!*\
      !*** ./src/app/messaging/message-session/message-session.page.ts ***!
      \*******************************************************************/

    /*! exports provided: MessageSessionPage */

    /***/
    function MTyT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageSessionPage", function () {
        return MessageSessionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_message_session_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./message-session.page.html */
      "OV+T");
      /* harmony import */


      var _message_session_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./message-session.page.scss */
      "/U64");
      /* harmony import */


      var _common_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../common/session-info/session-info.component */
      "YNR+");
      /* harmony import */


      var _services_im_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/im.service */
      "K4UH");
      /* harmony import */


      var _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/models/session */
      "m6xN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var tinode_sdk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tinode-sdk */
      "p+xU");
      /* harmony import */


      var tinode_sdk__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tinode_sdk__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var Drafty = tinode_sdk__WEBPACK_IMPORTED_MODULE_13___default.a.Drafty;

      function isSizedEvent(e) {
        return e && e.width !== undefined && e.height !== undefined;
      }

      var MessageSessionPage = /*#__PURE__*/function () {
        function MessageSessionPage(sessionsManagerService, imService, navController, alert, env, media, file, platform, ref, modalController) {
          _classCallCheck(this, MessageSessionPage);

          this.sessionsManagerService = sessionsManagerService;
          this.imService = imService;
          this.navController = navController;
          this.alert = alert;
          this.env = env;
          this.media = media;
          this.file = file;
          this.platform = platform;
          this.ref = ref;
          this.modalController = modalController;
          this.getName = _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].getName;
          this.isTyping = false;
          this.isOnline = false;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({
            sendInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]("")
          });
          this.ref.detach(); //this.smartAudio.preload("beep1", "assets/audio/beep1.mp3");
        }

        _createClass(MessageSessionPage, [{
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.sessionsManagerService.leaveChatPage(); //this.messageFileFetchSuccessSubscription.unsubscribe();
            //this.messageFileProgressSubscription.unsubscribe();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (!this.sessionsManagerService.hasActiveIMTopic) {
              this.alert.presentError("چت هماهنگی معتبر نیست.");
              this.sessionsManagerService.returnUrlIfNoActiveIMTopic().then(function (url) {
                _this.navController.navigateRoot([url]);
              });
            } else {
              this.title = this.sessionsManagerService.IMPeerUser.first_name;
            }
          }
        }, {
          key: "itemHeight",
          value: function itemHeight(item, index) {
            if (item.isImage) {
              return 213;
            }

            return 45;
            return 40;
          }
        }, {
          key: "ionViewCanEnter",
          value: function ionViewCanEnter() {//this.infiniteScroll.disabled = true;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.session = this.sessionsManagerService.session;
            this.env.somethingPendingUpdated.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this)).subscribe(function (result) {
              _this2.ref.detectChanges();
            });

            if (this.sessionsManagerService.hasActiveIMTopic) {
              this.isOnline = this.sessionsManagerService.isUserOnline(this.sessionsManagerService.IMPeerUser);
              this.sessionsManagerService.addOnlineObserver(this.sessionsManagerService.IMPeerUser).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this)).subscribe(function (result) {
                _this2.isOnline = result;

                _this2.ref.detectChanges();
              });
            }

            this.imService.isTypingSubject.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this)).subscribe(function (result) {
              _this2.isTyping = result;

              _this2.ref.detectChanges();
            });
            this.imService.messageAddedToStart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(400), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this)).subscribe(function (index) {
              _this2.content.getScrollElement().then(function (el) {
                _this2.ref.detectChanges();

                _this2.content.scrollY = false;
                var oldScrollHeight = el.scrollHeight;
                var oldScrollTop = el.scrollTop;
                var heightObservable = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Observable"](function (observer) {
                  _this2.heightIntervalHandle = setInterval(function () {
                    if (el.scrollHeight != oldScrollHeight) {
                      observer.next(el.scrollHeight);
                      observer.complete();
                    }

                    oldScrollTop = el.scrollTop;
                  }, 50);
                });
                heightObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["last"])()).subscribe(function (height) {
                  clearInterval(_this2.heightIntervalHandle);
                  var newScrollTop = oldScrollTop + (height - oldScrollHeight);
                  el.scrollTop = newScrollTop; // this.content.scrollToPoint(null, newScrollTop, 0).then(()=>{
                  //   this.content.scrollY = true;
                  // });

                  _this2.content.scrollY = true;

                  _this2.infiniteScroll.complete();
                });
              });
            });
            this.imService.messageGotDirty.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this)).subscribe(function (dirty) {
              _this2.vitrualScroll.checkRange(dirty); //this.ref.detectChanges();

            });
            this.imService.messageAddedToEnd.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__["untilDestroyed"])(this)).subscribe(function (index) {
              _this2.imService.noteReceived(_this2.imService.messages[index]);

              _this2.imService.noteRead(_this2.imService.messages[index]);

              clearTimeout(_this2.scrollToBottomTimeOut);

              _this2.ref.detectChanges();

              _this2.vitrualScroll.positionForItem(index).then(function (result) {});

              _this2.scrollToBottomTimeOut = setTimeout(function () {
                _this2.scrollToBottom();

                _this2.infiniteScroll.disabled = false;
              }, 1000);
            });
            this.imService.noMoreMessages.subscribe(function (yes) {
              if (yes) {
                _this2.infiniteScroll.complete();

                _this2.infiniteScroll.disabled = true;
              } else {//this.infiniteScroll.disabled = false;
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.imService.notifyEnteredChatPage(true);
          }
        }, {
          key: "messages",
          value: function messages() {
            return this.imService.messages;
          }
        }, {
          key: "openSessionInfo",
          value: function openSessionInfo() {
            var props = {
              session: this.session,
              providerPerspective: !this.sessionsManagerService.isUser,
              openedFromSessionChat: true
            };
            this.alert.presentModal(_common_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_3__["SessionInfoComponent"], props).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1)).subscribe();
          }
        }, {
          key: "isSessionChat",
          value: function isSessionChat() {
            return this.session != null;
          }
        }, {
          key: "isSessionEnded",
          value: function isSessionEnded() {
            if (this.isSessionChat()) {
              return src_app_models_session__WEBPACK_IMPORTED_MODULE_11__["Session"].isEnded(this.session);
            }

            return false;
          }
        }, {
          key: "isSessionActive",
          value: function isSessionActive() {
            if (this.isSessionChat()) {
              return src_app_models_session__WEBPACK_IMPORTED_MODULE_11__["Session"].isActive(this.session);
            }

            return false;
          }
        }, {
          key: "chatSubtitle",
          value: function chatSubtitle() {
            var subtitle;

            if (this.isSessionChat()) {
              subtitle = "جلسه مشاوره: ";
              subtitle += src_app_models_session__WEBPACK_IMPORTED_MODULE_11__["Session"].getStateString(this.session);
            } else {
              subtitle = "گفتگوی هماهنگی";
            }

            return subtitle;
          }
        }, {
          key: "track",
          value: function track(index, record) {
            return record.seq;
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            this.content.scrollToBottom(300);
          }
        }, {
          key: "nextPage",
          value: function nextPage(event) {
            this.imService.getMessagesPage();
          }
        }]);

        return MessageSessionPage;
      }();

      MessageSessionPage.ctorParameters = function () {
        return [{
          type: _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"]
        }, {
          type: _services_im_service__WEBPACK_IMPORTED_MODULE_4__["IMService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_14__["Media"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }];
      };

      MessageSessionPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"],
          args: ["content", {
            "static": false
          }]
        }],
        vitrualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonVirtualScroll"], {
            "static": false
          }]
        }],
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonInfiniteScroll"], {
            "static": false
          }]
        }]
      };
      MessageSessionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: "app-message-session",
        template: _raw_loader_message_session_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush,
        styles: [_message_session_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"], _services_im_service__WEBPACK_IMPORTED_MODULE_4__["IMService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_14__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]])], MessageSessionPage);
      /***/
    },

    /***/
    "OFTm":
    /*!*****************************************************************************!*\
      !*** ./src/app/messaging/message-session/message-session-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: MessageSessionPageRoutingModule */

    /***/
    function OFTm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageSessionPageRoutingModule", function () {
        return MessageSessionPageRoutingModule;
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


      var _message_session_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./message-session.page */
      "MTyT");

      var routes = [{
        path: '',
        component: _message_session_page__WEBPACK_IMPORTED_MODULE_3__["MessageSessionPage"]
      }];

      var MessageSessionPageRoutingModule = function MessageSessionPageRoutingModule() {
        _classCallCheck(this, MessageSessionPageRoutingModule);
      };

      MessageSessionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessageSessionPageRoutingModule);
      /***/
    },

    /***/
    "OV+T":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/message-session/message-session.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OVT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"(sessionsManagerService.IMPeerUser)\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-auto\">\n          \n          <app-user-avatar class=\"primary-background\" [user]=\"sessionsManagerService.IMPeerUser\"></app-user-avatar>\n        </div>\n        <div class=\"col d-flex flex-column justify-content-center\">\n          <div class=\"row no-gutters\">\n            <div class=\"col col-auto \">\n              <ion-icon\n                [ngClass]=\"isOnline?'online':''\"\n                [name]=\"this.env.ONLINE_ICON\"\n                class=\"online-status\"\n              ></ion-icon>\n            </div>\n            <span class=\" name-text\">\n              {{getName(this.sessionsManagerService.IMPeerUser)}}\n            </span>\n          </div>\n\n          <small class=\" session-status\">\n            {{chatSubtitle()}}\n          </small>\n        </div>\n      </div>\n    </ion-title>\n    <ion-buttons class=\"\" slot=\"end\">\n      \n     \n      <ion-button *ngIf=\"isSessionChat()\" (click)=\"openSessionInfo()\" >\n        <ion-icon name=\"settings-outline\"></ion-icon>\n      </ion-button>\n      <ion-back-button  ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <div class=\"chat-content\" #chatContent>\n    <ion-infinite-scroll\n      threshold=\"0px\"\n      (ionInfinite)=\"nextPage($event)\"\n      position=\"top\"\n    >\n      <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <div class=\"no-provider h-100 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"!messages() || messages().length <1\">\n      <ion-img src=\"/assets/image/no-providers.jpg\"></ion-img>\n      <span class=\"light-text normal-text\">\n        هنوز پیامی رد و بدل نشده است.\n      </span>\n    </div>\n    <ion-virtual-scroll [items]=\"messages()\" [trackBy]=\"track\" [itemHeight]=\"itemHeight\">\n      <div class=\"row\"  *virtualItem=\"let message\" >\n        \n          <app-message-content class=\"col-12\" *ngIf=\"message\" [message]=\"message\"></app-message-content>\n   \n      </div>\n    </ion-virtual-scroll>\n    \n    <div class=\"row\" *ngIf=\"this.isTyping\">\n      <app-typing-message class=\"col-12\"></app-typing-message>\n    </div>\n  </div>\n</ion-content>\n<app-send-message *ngIf=\"!isSessionEnded()\">\n\n</app-send-message>";
      /***/
    },

    /***/
    "ma2l":
    /*!*********************************************************************!*\
      !*** ./src/app/messaging/message-session/message-session.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MessageSessionPageModule */

    /***/
    function ma2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageSessionPageModule", function () {
        return MessageSessionPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _messaging_messaging_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../messaging/messaging.module */
      "MDOY");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _message_session_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./message-session-routing.module */
      "OFTm");
      /* harmony import */


      var _message_session_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./message-session.page */
      "MTyT");

      var MessageSessionPageModule = function MessageSessionPageModule() {
        _classCallCheck(this, MessageSessionPageModule);
      };

      MessageSessionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _message_session_routing_module__WEBPACK_IMPORTED_MODULE_8__["MessageSessionPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_3__["CommonDeclarationsModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_2__["NgxIonicImageViewerModule"], _messaging_messaging_module__WEBPACK_IMPORTED_MODULE_1__["MessagingModule"]],
        declarations: [_message_session_page__WEBPACK_IMPORTED_MODULE_9__["MessageSessionPage"]]
      })], MessageSessionPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=messaging-message-session-message-session-module-es5.js.map