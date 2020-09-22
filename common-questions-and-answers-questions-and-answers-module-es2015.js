(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-questions-and-answers-questions-and-answers-module"],{

/***/ "7aTJ":
/*!******************************************************************************!*\
  !*** ./src/app/common/questions-and-answers/questions-and-answers.module.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionsAndAnswersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsAndAnswersPageModule", function() { return QuestionsAndAnswersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _questions_and_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-and-answers-routing.module */ "l/Li");
/* harmony import */ var _questions_and_answers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions-and-answers.page */ "DMyg");








let QuestionsAndAnswersPageModule = class QuestionsAndAnswersPageModule {
};
QuestionsAndAnswersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _questions_and_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__["QuestionsAndAnswersPageRoutingModule"],
            _common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_1__["CommonDeclarationsModule"],
        ],
        declarations: [_questions_and_answers_page__WEBPACK_IMPORTED_MODULE_7__["QuestionsAndAnswersPage"]],
        entryComponents: []
    })
], QuestionsAndAnswersPageModule);



/***/ }),

/***/ "DMyg":
/*!****************************************************************************!*\
  !*** ./src/app/common/questions-and-answers/questions-and-answers.page.ts ***!
  \****************************************************************************/
/*! exports provided: QuestionsAndAnswersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsAndAnswersPage", function() { return QuestionsAndAnswersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_questions_and_answers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./questions-and-answers.page.html */ "dDK8");
/* harmony import */ var _questions_and_answers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions-and-answers.page.scss */ "Fxua");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../ask-question/ask-question.component */ "YoRS");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/public-question-and-answers.service */ "ybCk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");












let QuestionsAndAnswersPage = class QuestionsAndAnswersPage {
    constructor(qaService, alert, navController, route, env) {
        this.qaService = qaService;
        this.alert = alert;
        this.navController = navController;
        this.route = route;
        this.env = env;
        this.questions = [];
        this.byMeFilter = false;
        this.refresher = null;
        this.roleId = null;
        this.enableNewQuestion = false;
        this.userId = null;
    }
    ngOnInit() {
        this.userId = this.route.snapshot.params.userId;
        this.roleId = this.route.snapshot.params.roleId;
        if (this.roleId == this.env.USER_ROLE_ID) {
            this.enableNewQuestion = true;
        }
        this.qaService.questionsShared.getUpdateNotifier(this).subscribe(result => {
            this.filterQuestions();
            if (this.refresher) {
                this.refresher.complete();
            }
        });
        this.qaService.questionsShared.request();
    }
    filterQuestions() {
        if (this.byMeFilter) {
            this.questions = this.qaService.questionsShared.resource().filter(q => {
                return q.user_id == this.userId;
            });
        }
        else {
            this.questions = this.qaService.questionsShared.resource();
        }
    }
    refresh(event) {
        this.refresher = event.target;
        this.qaService.questionsShared.request();
    }
    ask() {
        this.alert.presentModal(_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__["AskQuestionComponent"], {}, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe();
    }
    setFilterStatus(ev) {
        // this.selectedProviderFilterStatus = ev;
        if (ev.target.checked) {
            this.byMeFilter = true;
        }
        else {
            this.byMeFilter = false;
        }
        this.filterQuestions();
    }
    navigateToQuestion(questionId) {
        if (this.roleId && this.userId) {
            this.navController.navigateForward(['/answers',
                questionId, this.roleId, this.userId]);
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
};
QuestionsAndAnswersPage.ctorParameters = () => [
    { type: _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_8__["PublicQuestionAndAnswersService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
];
QuestionsAndAnswersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__["UntilDestroy"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'app-questions-and-answers',
        template: _raw_loader_questions_and_answers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_questions_and_answers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_8__["PublicQuestionAndAnswersService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
], QuestionsAndAnswersPage);



/***/ }),

/***/ "Fxua":
/*!******************************************************************************!*\
  !*** ./src/app/common/questions-and-answers/questions-and-answers.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nion-badge {\n  background-color: #ce321c;\n  border-radius: 0;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  --border-radius:$radius;\n  font-family: \"myIranSansFaNum\";\n  padding-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcXVlc3Rpb25zLWFuZC1hbnN3ZXJzL3F1ZXN0aW9ucy1hbmQtYW5zd2Vycy5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBQS9DQTtFQUNJLHlCQ01tQjtFQWtDdEIsZ0JEdkMwQjtFQ3dDMUIsd0JEeEMwQjtFQ3lDdkIscUJEekN1QjtFQzBDdkIsdUJBQUE7RUR6Q0EsOEJDRk87RURHUCxnQkFBQTtBQW9ESiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9xdWVzdGlvbnMtYW5kLWFuc3dlcnMvcXVlc3Rpb25zLWFuZC1hbnN3ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcblxuaW9uLWJhZGdle1xuICAgIGJhY2tncm91bmQtY29sb3I6JHNlY29uZGFyeS1jb2xvci1kYXJrO1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCk7XG4gICAgZm9udC1mYW1pbHk6ICRmb250TnVtO1xuICAgIHBhZGRpbmctdG9wOjdweDtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */");

/***/ }),

/***/ "dDK8":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/questions-and-answers/questions-and-answers.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n      <ion-button *ngIf=\"enableNewQuestion\" (click)=\"ask()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>پرسش و پاسخ</ion-title>\n    <ion-buttons class=\"\" slot=\"end\">\n      <ion-back-button\n         \n      ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"questions && enableNewQuestion && userId\" class=\"d-flex align-items-center px-4 mt-4\">\n    <span class=\"light-text small-text\">فقط سؤالات من</span>\n    <ion-toggle (ionChange)=\"setFilterStatus($event)\"></ion-toggle>\n  </div>\n  <ion-item button class=\"shadow-item\" (click)=\"navigateToQuestion(question.id)\" *ngFor=\"let question of questions\">\n    <p class=\"normal-text py-3 px-2 m-0\">{{question.content}}</p>\n    <ion-badge color=\"primary\" slot=\"end\" mode=\"ios\">{{question.answer_count}}</ion-badge>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "l/Li":
/*!**************************************************************************************!*\
  !*** ./src/app/common/questions-and-answers/questions-and-answers-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: QuestionsAndAnswersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsAndAnswersPageRoutingModule", function() { return QuestionsAndAnswersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _questions_and_answers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions-and-answers.page */ "DMyg");




const routes = [
    {
        path: '',
        component: _questions_and_answers_page__WEBPACK_IMPORTED_MODULE_3__["QuestionsAndAnswersPage"],
    }
];
let QuestionsAndAnswersPageRoutingModule = class QuestionsAndAnswersPageRoutingModule {
};
QuestionsAndAnswersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuestionsAndAnswersPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=common-questions-and-answers-questions-and-answers-module-es2015.js.map