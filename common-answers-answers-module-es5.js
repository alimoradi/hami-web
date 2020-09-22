(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-answers-answers-module"], {
    /***/
    "+mj7":
    /*!************************************************!*\
      !*** ./src/app/common/answers/answers.page.ts ***!
      \************************************************/

    /*! exports provided: AnswersPage */

    /***/
    function mj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswersPage", function () {
        return AnswersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_answers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./answers.page.html */
      "zfpH");
      /* harmony import */


      var _answers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./answers.page.scss */
      "az2g");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/user */
      "2hxB");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _answer_answer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../answer/answer.component */
      "MrgP");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../services/public-question-and-answers.service */
      "ybCk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var AnswersPage = /*#__PURE__*/function () {
        function AnswersPage(route, qaService, alert, env) {
          _classCallCheck(this, AnswersPage);

          this.route = route;
          this.qaService = qaService;
          this.alert = alert;
          this.env = env;
          this.questionId = null;
          this.roleId = null;
          this.enableNewAnswer = false;
          this.userId = null;
          this.question = null;
          this.refresher = null;
          this.defaultBackUrl = [];
          this.getName = src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"].getName;
        }

        _createClass(AnswersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.questionId = this.route.snapshot.params.questionId;
            this.roleId = this.route.snapshot.params.roleId;
            this.userId = this.route.snapshot.params.userId;
            this.defaultBackUrl = ["/questions-and-answers", this.roleId, this.userId];

            if (this.roleId == this.env.PROVIDER_ROLE_ID) {
              this.enableNewAnswer = true;
            }

            this.qaService.questionWithAnswersShared.reset();
            this.qaService.questionWithAnswersShared.getUpdateNotifier(this).subscribe(function (result) {
              _this.question = _this.qaService.questionWithAnswersShared.resource();

              if (_this.refresher) {
                _this.refresher.complete();
              }
            });
            this.qaService.questionWithAnswersShared.request(this.questionId);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }, {
          key: "refresh",
          value: function refresh(ev) {
            this.refresher = ev.target;
            this.qaService.questionWithAnswersShared.request(this.questionId);
          }
        }, {
          key: "answer",
          value: function answer() {
            this.alert.presentModal(_answer_answer_component__WEBPACK_IMPORTED_MODULE_6__["AnswerComponent"], {
              questionId: this.questionId
            }, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe();
          }
        }]);

        return AnswersPage;
      }();

      AnswersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_8__["PublicQuestionAndAnswersService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }];
      };

      AnswersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: "app-answers",
        template: _raw_loader_answers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_answers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_8__["PublicQuestionAndAnswersService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])], AnswersPage);
      /***/
    },

    /***/
    "2Qbm":
    /*!**************************************************!*\
      !*** ./src/app/common/answers/answers.module.ts ***!
      \**************************************************/

    /*! exports provided: AnswersPageModule */

    /***/
    function Qbm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswersPageModule", function () {
        return AnswersPageModule;
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


      var _answers_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./answers-routing.module */
      "MGWZ");
      /* harmony import */


      var _answers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./answers.page */
      "+mj7");

      var AnswersPageModule = function AnswersPageModule() {
        _classCallCheck(this, AnswersPageModule);
      };

      AnswersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _answers_routing_module__WEBPACK_IMPORTED_MODULE_6__["AnswersPageRoutingModule"], _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"]],
        declarations: [_answers_page__WEBPACK_IMPORTED_MODULE_7__["AnswersPage"]]
      })], AnswersPageModule);
      /***/
    },

    /***/
    "MGWZ":
    /*!**********************************************************!*\
      !*** ./src/app/common/answers/answers-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: AnswersPageRoutingModule */

    /***/
    function MGWZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswersPageRoutingModule", function () {
        return AnswersPageRoutingModule;
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


      var _answers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./answers.page */
      "+mj7");

      var routes = [{
        path: '',
        component: _answers_page__WEBPACK_IMPORTED_MODULE_3__["AnswersPage"]
      }];

      var AnswersPageRoutingModule = function AnswersPageRoutingModule() {
        _classCallCheck(this, AnswersPageRoutingModule);
      };

      AnswersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AnswersPageRoutingModule);
      /***/
    },

    /***/
    "az2g":
    /*!**************************************************!*\
      !*** ./src/app/common/answers/answers.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function az2g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.question {\n  display: block;\n}\n.question.question-text {\n  border: 1px solid #ce321c;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  --border-radius:$radius;\n  padding: 1rem;\n}\n.answer-container .answer-text {\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  --border-radius:$radius;\n  border: 1px solid #d7f3f6;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5zd2Vycy9hbnN3ZXJzLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NBO0VBQ0UsY0FBQTtBQWlERjtBQS9DRTtFQUNFLHlCQUFBO0VDcUNILG1CRHBDMEI7RUNxQzFCLDJCRHJDMEI7RUNzQ3ZCLHdCRHRDdUI7RUN1Q3ZCLHVCQUFBO0VEdENBLGFBQUE7QUFvREo7QUExQ0U7RUN5QkQsbUJEeEIwQjtFQ3lCMUIsMkJEekIwQjtFQzBCdkIsd0JEMUJ1QjtFQzJCdkIsdUJBQUE7RUQxQkEseUJBQUE7RUFDQSxhQUFBO0FBK0NKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2Fuc3dlcnMvYW5zd2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb25cIjtcblxuLnF1ZXN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgJi5xdWVzdGlvbi10ZXh0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yLWRhcms7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygxMHB4KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgJi5hbnN3ZXItdGV4dCB7XG4gIH1cbn1cblxuLmFuc3dlci1jb250YWluZXIge1xuICAudXNlci1jb250YWluZXIge1xuICB9XG4gIC5hbnN3ZXItdGV4dCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygxMHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvci14bGlnaHQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxufVxuIiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */";
      /***/
    },

    /***/
    "zfpH":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/answers/answers.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function zfpH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>پاسخ ها</ion-title>\n    <ion-buttons class=\"\" slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n      <ion-button *ngIf=\"enableNewAnswer\" (click)=\"answer()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n      <ion-back-button\n         \n        [defaultHref]=\"defaultBackUrl\"\n      ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"action-container\">\n    <div *ngIf=\"question\" class=\"action-content text-right p-3\">\n      <span class=\"normal-text question question-text text-right mb-3\"\n        >{{question.content}}</span\n      >\n      <div\n        class=\"d-flex flex-column  answer-container\"\n        *ngFor=\"let answer of question.answers\"\n      >\n      <div class=\"user-container d-flex align-items-center mt-2\">\n        <app-user-avatar class=\"mr-2 xsmall-sized\" [user]=\"answer.user\"></app-user-avatar>\n        <span class=\"normal-text light-text mr-n2\">{{getName(answer.user)}}</span>\n      </div>\n       \n        <p class=\"question normal-text answer-text text-right mb-2\"\n          >{{answer.content}}</p\n        >\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\"></div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-answers-answers-module-es5.js.map