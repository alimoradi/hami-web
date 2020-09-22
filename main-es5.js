(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+HkC":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/static/terms/terms.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>قوانین و مقررات</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4 *ngIf=\"!providerPerspective\">\n    قوانین و مقررات\n  </h4>\n  <ul *ngIf=\"!providerPerspective\">\n    <li>\n      <p>\n        اپلیکیشن حامی لاین بستری برای ارتباط بین کاربران و روان­شناسان واجد\n        صلاحیت فراهم می­آورد و هیچگونه دخل و تصرفی در محتوای مبادله شده ندارد.\n        لذا تصمیماتی که کاربران بدنبال راهنمایی و مشورت با روان­شناسان حامی لاین\n        می­گیرند، مسئولیت آن تماما برعهده کاربران است و حامی لاین و روان­شناسان\n        مسئولیتی در قبال تصمیمات گرفته شده و تبعات آن ندارند.\n      </p>\n    </li>\n    <li>\n      <p>\n        کاربران باید تابع قوانین جمهوری اسلامی باشند و اعمالی که مصادیق مجرمانه\n        داشته باشد از قبیل مزاحمت، تهدید، توهین و... به هر یک از روان­شناسان، یا\n        اشخاص حقوقی و حقوقی، مانع از ادامه عضویت آنها در اپلیکیشن حامی لاین\n        خواهد شد و امکان عضویت مجدد از آنان سلب می­شود.\n      </p>\n    </li>\n    <li>\n      <p>\n        کاربران از درخواست شماره تماس شخصی روان­شناسان و صحبت در فضایی غیر از\n        آنچه تعریف شده است اجتناب کنند، در صورت محرز شدن اکانت آنها حذف خواهد شد\n        و امکان عضویت مجدد نخواهند داشت.\n      </p>\n    </li>\n    <li>\n      <p>\n        محتوای مشاوره بین کاربر و روان­شناس کاملا و دوطرفه محرمانه است لذا\n        کاربران از انتشار محتوای مشاوره جدا اجتناب کنند در صورت محرز شدن پیگرد\n        قانونی دارد.\n      </p>\n    </li>\n    <li>\n      <p>\n        اطمینان از کیفیت خدمات، محتوای مشاوره بصورت اطلاعات کدگذاری شده و\n        محرمانه بایگانی می­گردد.\n      </p>\n    </li>\n  </ul>\n  <h4 *ngIf=\"providerPerspective\">قوانین و شرایط همکاری (روان­شناسان)</h4>\n  <ul *ngIf=\"providerPerspective\">\n    <li>\n      <p>روان شناسان و مشاوران ملزم به رعایت حقوق کاربران و پاسخگویی به موقع هستند. در غیر اینصورت امتیاز منفی دریافت می کنند.</p>\n    </li>\n    <li>\n      <p>-ارائه مشاوره باید مبتنی بر اصول علمی و دانش عملی باشد.</p>\n    </li>\n    <li>\n      <p>در صورت عدم توانایی در ارائه خدمت و راهنمایی مکفی در موارد خاص، کاربران را به سوپروایزر ارجاع دهند تا از مشاوره رایگاه بهره مند گردند.</p>\n    </li>\n    <li>\n      <p>روان­شناسان و مشاوران ملزم به رعایت قوانین نظام روان­شناسی و مشاوره جمهوری اسلامی ایران هستند.</p>\n    </li>\n    <li>\n      <p>روان­شناسان ملزم به رعایت کدهای اخلاقی مشاوره هستند(حفظ رازداری، عدم ورود به رابطه دوگانه، ..)</p>\n    </li>\n    <li>\n      <p>روان­شناسان از دادن شماره تماس شخصی جدا خودداری کنند در صورت محرز شدن از ادامه همکاری معذور خواهند شد.</p>\n    </li>\n  </ul>\n  <h4 *ngIf=\"!providerPerspective\">حقوق کاربران</h4>\n  <ul class=\"pb-5\" *ngIf=\"!providerPerspective\">\n    <li>\n      <p>محرمانه ماندن اطلاعات شخصی و هویتی و و محتوای جلسات</p>\n    </li>\n    <li>\n      <p>امکان دریافت یک جلسه رایگان در صورت عدم رضایت یا بازپس­گیری هزینه مشاوره</p>\n    </li>\n    <li>\n      <p>امکان ثبت شکایت در سایت و رسیدگی ادمین در اسرع وقت</p>\n    </li>\n   \n  </ul>\n</ion-content>\n";
      /***/
    },

    /***/
    "+PLf":
    /*!***************************************************************!*\
      !*** ./src/app/common/user-avatar/user-avatar.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function PLf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi91c2VyLWF2YXRhci91c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "/xhe":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/remote-stats/remote-stats.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xhe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"this.env.remoteStats\" class=\"stats-top-container\">\n  <div *ngIf=\"isTotalProvidersType\" class=\"stats-type-container row no-gutters\">\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"مشاور\"\n        [number]=\"this.env.remoteStats.total_provider_count\"\n      >\n      </app-remote-stats-box>\n    </div>\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"آنلاین\"\n        [number]=\"this.env.remoteStats.online_provider_count\"\n      >\n      </app-remote-stats-box>\n    </div>\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"در حال مشاوره\"\n        [number]=\"this.env.remoteStats.in_session_provider_count\"\n      >\n      </app-remote-stats-box>\n    </div>\n    <div class=\"col\">\n      <app-remote-stats-box\n        text=\"آفلاین\"\n        [number]=\"\n          this.env.remoteStats.total_provider_count -\n          this.env.remoteStats.online_provider_count\n        \"\n      >\n      </app-remote-stats-box>\n    </div>\n  </div>\n  <div\n    *ngIf=\"isCategoryProvidersType\"\n    class=\"stats-type-container row no-gutters\"\n  >\n    <div class=\"col\">\n      <div\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.NA ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.NA)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().total_provider_count\n        }}</span>\n        <span class=\"stats-text\">مشاور</span>\n      </div>\n    </div>\n    <div class=\"col\">\n      <a\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.ONLINE ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.ONLINE)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().online_provider_count\n        }}</span>\n        <span class=\"stats-text\">آنلاین</span>\n      </a>\n    </div>\n    <div class=\"col\">\n      <a\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.IN_SESSION ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.IN_SESSION)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().in_session_provider_count\n        }}</span>\n        <span class=\"stats-text\">در حال مشاوره</span>\n      </a>\n    </div>\n    <div class=\"col\">\n      <a\n        class=\"stats-box\"\n        [ngClass]=\"\n          selectedPorivderStatus == providerStatus.OFFLINE ? 'selected' : ''\n        \"\n        (click)=\"selectProviderStatus(providerStatus.OFFLINE)\"\n      >\n        <span class=\"stats-number\">{{\n          categoryStats().total_provider_count -\n            categoryStats().online_provider_count\n        }}</span>\n        <span class=\"stats-text\">آفلاین</span>\n      </a>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/alimoradi/Documents/Projects/tests/hami-mobile-10/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0uqL":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/provider-info-edit/provider-info-edit.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uqL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addCategory()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>اطلاعات تخصصی</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\"  >\n      <ion-item button (click)=\"openDegrees()\">\n        <ion-label class=\"light-text\">مدرک تحصیلی</ion-label>\n        <span class=\"light-text number-text\">{{getDegreeText(selectedDegree)}}</span>\n       </ion-item>\n      <ion-item button (click)=\"openTextFees()\">\n        <ion-label class=\"light-text\">تعرفه مشاوره متنی</ion-label>\n        <span class=\"light-text number-text\">{{selectedTextFee}}</span>\n       </ion-item>\n       <ion-item button (click)=\"openCallFees()\">\n        <ion-label class=\"light-text\">تعرفه مشاوره تلفنی</ion-label>\n        <span class=\"light-text number-text\">{{selectedCallFee}}</span>\n       </ion-item>\n       <span class=\"border-top border-bottom mt-3 d-block mb-2 py-2 light-text large-text text-center\">\n         زمینه های مشاوره\n       </span>\n      <ion-item-sliding *ngFor=\"let category of categories\" >\n        <ion-item-options side=\"end\" class=\"\">\n          <ion-item-option class=\"normal-text my-font\" (click)=\"deleteCategory(category.id)\">\n            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      \n       \n          <ion-item\n          button\n          class=\"shadow-item\"\n        >\n         <ion-icon\n              slot=\"start\"\n              [name]=\"category.icon_name\"\n              class=\"category-icon large-text ml-2\"\n            ></ion-icon>\n            <span class=\"category-name\">\n              {{category.name}}\n            </span>\n        </ion-item>\n        </ion-item-sliding>\n\n      \n    </div>\n    <div class=\"actions\">\n      \n      <div class=\"actions-wrapper\">\n        <ion-button [disabled]=\"!isFormValid()\" *ngIf=\"editable\" class=\"primary-button\" (click)=\"submit()\" fill=\"solid\">\n           ثبت\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "185P":
    /*!*************************************************************************************!*\
      !*** ./src/app/common/loading-toolbar-button/loading-toolbar-button.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".retry-text {\n  font-size: 0.5rem;\n  margin-right: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYWRpbmctdG9vbGJhci1idXR0b24vbG9hZGluZy10b29sYmFyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2FkaW5nLXRvb2xiYXItYnV0dG9uL2xvYWRpbmctdG9vbGJhci1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV0cnktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xufSJdfQ== */";
      /***/
    },

    /***/
    "1CAP":
    /*!***************************************************************!*\
      !*** ./src/app/common/session-list/session-list.component.ts ***!
      \***************************************************************/

    /*! exports provided: SessionListComponent */

    /***/
    function CAP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionListComponent", function () {
        return SessionListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_session_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./session-list.component.html */
      "S3x2");
      /* harmony import */


      var _session_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./session-list.component.scss */
      "TFAd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SessionListComponent = /*#__PURE__*/function () {
        function SessionListComponent() {
          _classCallCheck(this, SessionListComponent);
        }

        _createClass(SessionListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SessionListComponent;
      }();

      SessionListComponent.ctorParameters = function () {
        return [];
      };

      SessionListComponent.propDecorators = {
        sessionListArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        providerPerspective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SessionListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-list',
        template: _raw_loader_session_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SessionListComponent);
      /***/
    },

    /***/
    "1I1D":
    /*!*********************************!*\
      !*** ./src/app/models/model.ts ***!
      \*********************************/

    /*! exports provided: Model */

    /***/
    function I1D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Model", function () {
        return Model;
      });

      var Model = /*#__PURE__*/function () {
        function Model(mustFetchItself, fetchCallback, fetchObject, fetchParameter) {
          _classCallCheck(this, Model);

          this.mustFetchItself = false;
          this.isFetching = false;
          this.fetchParameter = null;
          this.fetchCallback = null;
          this.fetchObject = null;
          this.mustFetchItself = mustFetchItself || false;
          this.fetchParameter = fetchParameter || null;
          this.fetchObject = fetchObject || null;

          if (this.mustFetchItself) {
            this.fetchCallback = fetchCallback.bind(fetchObject) || null;
            this.isFetching = false;
            this.fetch();
          }
        }

        _createClass(Model, [{
          key: "fetch",
          value: function fetch() {
            var _this = this;

            if (!this.isFetching) {
              this.isFetching = true;
              this.fetchCallback(this.fetchParameter).subscribe(function (result) {
                Object.assign(_this, result);
                _this.isFetching = false;
              });
            }
          }
        }]);

        return Model;
      }();
      /***/

    },

    /***/
    "2hxB":
    /*!********************************!*\
      !*** ./src/app/models/user.ts ***!
      \********************************/

    /*! exports provided: User, UserStatsType, RoleId */

    /***/
    function hxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserStatsType", function () {
        return UserStatsType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleId", function () {
        return RoleId;
      });
      /* harmony import */


      var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./model */
      "1I1D");

      var User = /*#__PURE__*/function (_model__WEBPACK_IMPOR) {
        _inherits(User, _model__WEBPACK_IMPOR);

        var _super = _createSuper(User);

        function User() {
          _classCallCheck(this, User);

          return _super.apply(this, arguments);
        }

        _createClass(User, null, [{
          key: "getName",
          value: function getName(user) {
            if (user.role_id != RoleId.USER_ROLE_ID) {
              return user.first_name + ' ' + user.last_name;
            }

            return user.phone;
          }
        }, {
          key: "getRoleName",
          value: function getRoleName(user) {
            if (user.role_id == User.PROVIDER_ROLE_ID) {
              return 'مشاور';
            }

            if (user.role_id == User.USER_ROLE_ID) {
              return 'کاربر';
            }

            if (user.role_id == User.ADMIN_ROLE_ID) {
              return 'مدیر';
            }
          }
        }]);

        return User;
      }(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]);

      User.PROVIDER_ROLE_ID = 1;
      User.USER_ROLE_ID = 2;
      User.ADMIN_ROLE_ID = 3;
      var UserStatsType;

      (function (UserStatsType) {
        UserStatsType[UserStatsType["USER_STATS_TOTAL_COUNT"] = 2] = "USER_STATS_TOTAL_COUNT";
        UserStatsType[UserStatsType["USER_STATS_VERIFIED_COUNT"] = 1] = "USER_STATS_VERIFIED_COUNT";
      })(UserStatsType || (UserStatsType = {}));

      var RoleId;

      (function (RoleId) {
        RoleId[RoleId["USER_ROLE_ID"] = 2] = "USER_ROLE_ID";
        RoleId[RoleId["PROVIDER_ROLE_ID"] = 1] = "PROVIDER_ROLE_ID";
        RoleId[RoleId["ADMIN_ROLE_ID"] = 3] = "ADMIN_ROLE_ID";
      })(RoleId || (RoleId = {}));
      /***/

    },

    /***/
    "2qNV":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/change-password/change-password.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qNV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>تغییر گذرواژه</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form\n    class=\"flex-container action-container\"\n    [formGroup]=\"changePassForm\"\n    (ngSubmit)=\"changePassword()\"\n  >\n    <div class=\"action-content\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"oldPassword\"\n              placeholder=\"گذرواژه فعلی\"\n              type=\"password\"\n              name=\"password\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"newPassword\"\n              placeholder=\"گذرواژه جدید\"\n              type=\"password\"\n              name=\"newPassword\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              formControlName=\"newPasswordRepeat\"\n              placeholder=\"تکرار\"\n              type=\"password\"\n              name=\"newPasswordRepeat\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <ion-button [disabled]=\"!changePassForm.valid\" type=\"submit\" class=\"primary-button\"\n          >تغییر گذرواژه</ion-button\n        >\n      </div>\n    </div>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "3LUQ":
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function LUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(toastController, alertController, modalController, actionSheet) {
          _classCallCheck(this, AlertService);

          this.toastController = toastController;
          this.alertController = alertController;
          this.modalController = modalController;
          this.actionSheet = actionSheet;
        }

        _createClass(AlertService, [{
          key: "presentNotEnoughBalance",
          value: function presentNotEnoughBalance(required, available, depositComponent) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: "my-custom-class",
                        mode: "ios",
                        header: "اعتبار کافی نیست",
                        message: "اعتبار شما " + available + " تومان و اعتبار مورد نیاز " + required + " تومان است.",
                        buttons: [{
                          text: 'افزایش اعتبار',
                          handler: function handler() {
                            _this2.presentModal(depositComponent, {
                              amount: required - available
                            }).subscribe();
                          }
                        }, {
                          text: 'انصراف',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1000,
                        position: "top",
                        color: "dark",
                        mode: "ios"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoadingModal",
          value: function presentLoadingModal(loadingModal) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loadingModal.create({
              mode: "ios",
              translucent: true
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (modal) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.present());
            }));
          }
        }, {
          key: "presentSuccess",
          value: function presentSuccess(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1000,
                        cssClass: "success-toast",
                        position: "top",
                        mode: "ios"
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentError",
          value: function presentError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1000,
                        cssClass: "error-toast",
                        position: "top",
                        mode: "ios"
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentViewNotify",
          value: function presentViewNotify(message, callback, binder) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      callback = callback.bind(binder);
                      _context5.next = 3;
                      return this.toastController.create({
                        message: message,
                        cssClass: "notify-toast",
                        position: "top",
                        duration: 2000,
                        translucent: true,
                        mode: "ios",
                        buttons: [{
                          side: "end",
                          text: "نمایش",
                          cssClass: "notify-toast-button",
                          handler: function handler() {
                            callback();
                          }
                        }]
                      });

                    case 3:
                      toast = _context5.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentNotif",
          value: function presentNotif(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1000,
                        cssClass: "notif-toast",
                        position: "top"
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(buttons) {
            var addCancelButton = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (addCancelButton) {
              this.addCancelButton(buttons);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.actionSheet.create({
              mode: "ios",
              buttons: buttons
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.present());
            }));
          }
        }, {
          key: "openSessionDurationsActionSheet",
          value: function openSessionDurationsActionSheet(isTextSession, _handler, binder, timingType, reserveHours) {
            _handler = _handler.bind(binder);
            var buttons = [];

            var _loop = function _loop(i) {
              var duration = i * 15;
              buttons.push({
                text: duration + ' دقیقه',
                role: "destructive",
                handler: function handler() {
                  if (reserveHours) {
                    _handler(duration, isTextSession, timingType, reserveHours);
                  } else {
                    _handler(duration, isTextSession, timingType);
                  }
                }
              });
            };

            for (var i = 1; i < 5; i++) {
              _loop(i);
            }

            this.addCancelButton(buttons);
            this.presentActionSheet(buttons).subscribe();
          }
        }, {
          key: "openSessionTypesActionSheet",
          value: function openSessionTypesActionSheet(callback, binder) {
            var _this3 = this;

            var reserveHours = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var buttons = [];
            buttons.push({
              text: 'مشاوره نوشتاری',
              role: "destructive",
              handler: function handler() {
                _this3.openSessionDurationsActionSheet(true, callback, binder, reserveHours);
              }
            });
            buttons.push({
              text: 'مشاوره تلفنی',
              role: "destructive",
              handler: function handler() {
                _this3.openSessionDurationsActionSheet(false, callback, binder, reserveHours);
              }
            });
            this.addCancelButton(buttons);
            this.presentActionSheet(buttons).subscribe();
          }
        }, {
          key: "addCancelButton",
          value: function addCancelButton(buttons) {
            buttons.push({
              text: "انصراف",
              role: "cancel"
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal(component) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var backdropDissmis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var callbackBindObject = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.modalController.create({
              component: component,
              componentProps: props,
              backdropDismiss: backdropDissmis
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.onDidDismiss()).subscribe(function (data) {
                if (data["data"] && callback) {
                  callback.apply(callbackBindObject, [data["data"]]);
                }
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.present());
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])], AlertService);
      /***/
    },

    /***/
    "4bXV":
    /*!**********************************************************!*\
      !*** ./src/app/common/static/terms/terms.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function bXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nh4 {\n  font-family: \"myIranSans\";\n  text-align: right;\n  padding: 0.5rem 3rem;\n  color: #4e4e4e;\n  font-weight: bold;\n  font-size: 1rem;\n}\nul {\n  padding-left: 2rem;\n}\np {\n  text-align: right;\n  color: #676767;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc3RhdGljL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUE5Q0E7RUFDSSx5QkNGSTtFREdKLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZ0RKO0FBOUNBO0VBQ0ksa0JBQUE7QUFpREo7QUEvQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWtESiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdGF0aWMvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcblxuXG5oNHtcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzowLjVyZW0gM3JlbTtcbiAgICBjb2xvcjogIzRlNGU0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6MXJlbTtcbn1cbnVse1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbnB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IzY3Njc2NztcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "5k3Q":
    /*!*****************************************************************!*\
      !*** ./src/app/common/ask-question/ask-question.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function k3Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.question-text {\n  border: 1px solid #d7f3f6;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  --border-radius:$radius;\n  font-family: \"myIranSans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYXNrLXF1ZXN0aW9uL2Fzay1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NBO0VBRUkseUJBQUE7RUN1Q0gsbUJEdEMwQjtFQ3VDMUIsMkJEdkMwQjtFQ3dDdkIsd0JEeEN1QjtFQ3lDdkIsdUJBQUE7RUR4Q0EseUJDSkk7QUR1RFIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYXNrLXF1ZXN0aW9uL2Fzay1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcblxuLnF1ZXN0aW9uLXRleHRcbntcbiAgICBib3JkZXI6MXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yLXhsaWdodDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDEwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "5zL6":
    /*!*****************************************!*\
      !*** ./src/app/services/env.service.ts ***!
      \*****************************************/

    /*! exports provided: EnvService, DaysOfWeek, ServerErrors, Icons */

    /***/
    function zL6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvService", function () {
        return EnvService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DaysOfWeek", function () {
        return DaysOfWeek;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrors", function () {
        return ServerErrors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Icons", function () {
        return Icons;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _models_remote_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../models/remote-config */
      "IKOy");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var jalali_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jalali-moment */
      "BCsW");
      /* harmony import */


      var jalali_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jalali_moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var EnvService = /*#__PURE__*/function () {
        function EnvService(datePipe) {
          _classCallCheck(this, EnvService);

          this.datePipe = datePipe; //STORAGE_URL = "http://138.201.44.53/storage/";

          this.STORAGE_URL = "http://51.210.61.202/storage/";
          this.API_URL = "http://51.210.61.202/api/"; ///STORAGE_URL = "http://hami-server/storage/";
          //API_URL = "http://hami-server/api/";

          this.CLIENT_ID = 2; //CLIENT_SECRET = "MCcVBipyFsSnH70rH7yiSw1DYUPrKgmVZzFkDPPH";

          this.CLIENT_SECRET = "7kjwxxyo57iNhRtUo373ztWq2AozoWZT0QBn1dcT"; //CHAT_URL = "138.201.44.53:81/";

          this.CHAT_URL = "51.210.61.202:8080/";
          this.CHAT_APP_NAME = "hami";
          this.CHAT_API_KEY = "AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K";
          this.FAVORITE_ICON = "heart-outline";
          this.NON_FAVORITE_ICON = "heart-outline";
          this.ONLINE_ICON = "ellipse";
          this.PROVIDER_ROLE_ID = 1;
          this.USER_ROLE_ID = 2;
          this.SPLASH_ENABLED = true;
          this.WEB_NOTIFICATIONS_ONLY = false;
          this.MOCK_PAYMENT = false;
          this.ADMIN_ROLE_ID = 3;
          this.ENABLE_TINODE_LOGGING = false;
          this.somethingPendingCount = 0;
          this.pendingStack = [];
          this.remoteStats = null;
          this.somethingPendingUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](); //this.setDevelopmentEnvironment(true, false);

          this.REMOTE_CONFIG = new _models_remote_config__WEBPACK_IMPORTED_MODULE_1__["RemoteConfig"]();
          this.REMOTE_CONFIG.provider_pres_topic = "grpOr6izjjiy0d";
        }

        _createClass(EnvService, [{
          key: "getPublicStorageUrl",
          value: function getPublicStorageUrl(fileName) {
            return this.STORAGE_URL + fileName;
          }
        }, {
          key: "dateStringToJalaliDate",
          value: function dateStringToJalaliDate(date) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "jYYYY/jMM/jDD";

            if (date == null) {
              return null;
            }

            return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format(format);
          }
        }, {
          key: "setDevelopmentEnvironment",
          value: function setDevelopmentEnvironment() {
            var useRemoteServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var onlyWebNotif = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var mockPayment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (!useRemoteServer) {
              this.API_URL = "http://hami-server/api/";
            }

            this.SPLASH_ENABLED = false;
            this.WEB_NOTIFICATIONS_ONLY = onlyWebNotif;
            this.MOCK_PAYMENT = mockPayment;
          }
        }, {
          key: "somethingIsPending",
          value: function somethingIsPending(what) {
            var pendingItem = this.pendingStack.find(function (pending) {
              return pending.what == what;
            });

            if (pendingItem) {
              pendingItem.count++;
            } else {
              pendingItem = {
                what: what,
                count: 1
              };
              this.pendingStack.push(pendingItem);
            }

            if (++this.somethingPendingCount == 1) {
              this.somethingPendingUpdated.next(true);
            }
          }
        }, {
          key: "somethingIsDonePending",
          value: function somethingIsDonePending(what) {
            try {
              var pendingItem = this.pendingStack.find(function (pending) {
                return pending.what == what;
              });
              this.somethingPendingCount -= pendingItem.count;
              this.pendingStack.splice(this.pendingStack.indexOf(pendingItem), 1);

              if (this.somethingPendingCount == 0) {
                this.somethingPendingUpdated.next(false);
              }
            } catch (_a) {
              console.error("error stop pending " + what);
            }

            console.log(JSON.parse(JSON.stringify(this.pendingStack)));
          }
        }, {
          key: "dateStringToJalaliTime",
          value: function dateStringToJalaliTime(date) {
            if (date == null) {
              return null;
            }

            return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("HH:mm");
          }
        }, {
          key: "dateStringToJalaliMonthName",
          value: function dateStringToJalaliMonthName(date) {
            if (date == null) {
              return null;
            }

            return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("jMMM");
          }
        }, {
          key: "dateStringToJalaliDayOfWeekName",
          value: function dateStringToJalaliDayOfWeekName(date) {
            if (date == null) {
              return null;
            }

            return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("ddd");
          }
        }, {
          key: "dateStringToJalaliFullDate",
          value: function dateStringToJalaliFullDate(date) {
            if (date == null) {
              return null;
            }

            return jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("ddd، jD jMMM jYYYY");
          }
        }, {
          key: "dateStringToJalaliYear",
          value: function dateStringToJalaliYear(date) {
            if (date == null) {
              return null;
            }

            return parseInt(jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("jYYYY"));
          }
        }, {
          key: "dateStringToJalaliMonth",
          value: function dateStringToJalaliMonth(date) {
            if (date == null) {
              return null;
            }

            return parseInt(jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("jM"));
          }
        }, {
          key: "dateStringToJalaliDay",
          value: function dateStringToJalaliDay(date) {
            if (date == null) {
              return null;
            }

            return parseInt(jalali_moment__WEBPACK_IMPORTED_MODULE_4__(this.getTehranDateTime(date)).locale("fa").format("jD"));
          }
        }, {
          key: "getTehranDateTime",
          value: function getTehranDateTime(utc) {
            return new Date(new Date(utc + " UTC").toLocaleString("en-US", {
              timeZone: "Asia/Tehran"
            }));
          }
        }, {
          key: "generateUTCNowString",
          value: function generateUTCNowString() {
            return this.datePipe.transform(new Date().toUTCString(), "yyyy-MM-dd HH:mm:ss", "UTC");
          }
        }, {
          key: "generateUTCString",
          value: function generateUTCString(date) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yyyy-MM-dd HH:mm:ss";
            return this.datePipe.transform(date.toUTCString(), format, "UTC");
          }
        }, {
          key: "getMonthName",
          value: function getMonthName(monthNumber) {
            return jalali_moment__WEBPACK_IMPORTED_MODULE_4__("1367/" + monthNumber, "jYYYY/jM").locale("fa").format("jMMM");
          }
        }, {
          key: "dayOfWeekText",
          value: function dayOfWeekText(dayOfWeekNumber) {
            switch (dayOfWeekNumber) {
              case 6:
                return "یکشنبه";

              case 0:
                return "دوشنبه";

              case 1:
                return "سه شنبه";

              case 2:
                return "چهارشنبه";

              case 3:
                return "پنجشنبه";

              case 4:
                return "جمعه";

              case 5:
                return "شنبه";
            }
          }
        }, {
          key: "serverErrorMessage",
          value: function serverErrorMessage(errorCode) {
            var message = "";

            switch (errorCode) {
              case ServerErrors.PROVIDER_NOT_ONLINE:
                message = "مشاور آنلاین نیست.";
                break;

              case ServerErrors.PROVIDER_SESSIONS_CONFLICT:
                message = "زمان رزرو با جلسات مشاور هم پوشانی دارد.";
                break;

              case ServerErrors.USER_SESSIONS_CONFLICT:
                message = "زمان رزرو با جلسات شما هم پوشانی دارد.";
                break;

              case ServerErrors.USER_NOT_EXISTS:
                message = "شماره موبایل معتبر نیست.";
                break;

              case ServerErrors.VERIFICATION_CODE_NOT_SENT:
                message = "ارسال پیام اعتبارسنجی با مشکل روبرو شد.";
                break;

              case ServerErrors.DUPLICATE_USER:
                message = "کاربر قبلا در سیستم ثبت شده است.";
                break;

              case ServerErrors.INVALID_POST_DATA:
                message = "خطا در داده های ارسالی.";
                break;

              case ServerErrors.VERIFICATION_CODE_INVALID:
                message = "کد اعتبارسنجی نامعتبر است.";
                break;

              case ServerErrors.PAYMENT_GET_AUTHORITY_FAILED:
                message = "دریافت اجازه پرداخت با مشکل روبرو شد.";
                break;

              default:
                message = "عملیات با مشکل روبرو شد.";
            }

            return message;
          }
        }], [{
          key: "getUserRoleId",
          value: function getUserRoleId() {
            return 2;
          }
        }]);

        return EnvService;
      }();

      EnvService.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }];
      };

      EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], EnvService);
      var DaysOfWeek;

      (function (DaysOfWeek) {
        DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
        DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
        DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
        DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
        DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
        DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
        DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
      })(DaysOfWeek || (DaysOfWeek = {}));

      var ServerErrors;

      (function (ServerErrors) {
        ServerErrors[ServerErrors["PROVIDER_NOT_ONLINE"] = 101] = "PROVIDER_NOT_ONLINE";
        ServerErrors[ServerErrors["PROVIDER_SESSIONS_CONFLICT"] = 102] = "PROVIDER_SESSIONS_CONFLICT";
        ServerErrors[ServerErrors["USER_SESSIONS_CONFLICT"] = 103] = "USER_SESSIONS_CONFLICT";
        ServerErrors[ServerErrors["USER_NOT_EXISTS"] = 104] = "USER_NOT_EXISTS";
        ServerErrors[ServerErrors["VERIFICATION_CODE_NOT_SENT"] = 105] = "VERIFICATION_CODE_NOT_SENT";
        ServerErrors[ServerErrors["VERIFICATION_CODE_INVALID"] = 106] = "VERIFICATION_CODE_INVALID";
        ServerErrors[ServerErrors["DUPLICATE_USER"] = 107] = "DUPLICATE_USER";
        ServerErrors[ServerErrors["INVALID_POST_DATA"] = 108] = "INVALID_POST_DATA";
        ServerErrors[ServerErrors["PAYMENT_GET_AUTHORITY_FAILED"] = 109] = "PAYMENT_GET_AUTHORITY_FAILED";
      })(ServerErrors || (ServerErrors = {}));

      var Icons = function Icons() {
        _classCallCheck(this, Icons);
      };

      Icons.iconNames = ["add-circle-outline", "add-outline", "airplane-outline", "alarm-outline", "albums-outline", "alert-circle-outline", "alert-outline", "american-football-outline", "analytics-outline", "aperture-outline", "apps-outline", "archive-outline", "arrow-back-circle-outline", "arrow-back-outline", "arrow-down-circle-outline", "arrow-down-outline", "arrow-forward-circle-outline", "arrow-forward-outline", "arrow-redo-circle-outline", "arrow-redo-outline", "arrow-undo-circle-outline", "arrow-undo-outline", "arrow-up-circle-outline", "arrow-up-outline", "at-circle-outline", "at-outline", "attach-outline", "backspace-outline", "bandage-outline", "bar-chart-outline", "barbell-outline", "barcode-outline", "baseball-outline", "basket-outline", "basketball-outline", "battery-charging-outline", "battery-dead-outline", "battery-full-outline", "battery-half-outline", "beaker-outline", "bed-outline", "beer-outline", "bicycle-outline", "bluetooth-outline", "boat-outline", "body-outline", "bonfire-outline", "book-outline", "bookmark-outline", "bookmarks-outline", "briefcase-outline", "browsers-outline", "brush-outline", "bug-outline", "build-outline", "bulb-outline", "bus-outline", "business-outline", "cafe-outline", "calculator-outline", "calendar-outline", "call-outline", "camera-outline", "camera-reverse-outline", "car-outline", "car-sport-outline", "card-outline", "caret-back-circle-outline", "caret-back-outline", "caret-down-circle-outline", "caret-down-outline", "caret-forward-circle-outline", "caret-forward-outline", "caret-up-circle-outline", "caret-up-outline", "cart-outline", "cash-outline", "cellular-outline", "chatbox-ellipses-outline", "chatbox-outline", "chatbubble-ellipses-outline", "chatbubble-outline", "chatbubbles-outline", "checkbox-outline", "checkmark-circle-outline", "checkmark-done-circle-outline", "checkmark-done-outline", "checkmark-outline", "chevron-back-circle-outline", "chevron-back-outline", "chevron-down-circle-outline", "chevron-down-outline", "chevron-forward-circle-outline", "chevron-forward-outline", "chevron-up-circle-outline", "chevron-up-outline", "clipboard-outline", "close-circle-outline", "close-outline", "cloud-circle-outline", "cloud-done-outline", "cloud-download-outline", "cloud-offline-outline", "cloud-outline", "cloud-upload-outline", "cloudy-night-outline", "cloudy-outline", "code-download-outline", "code-outline", "code-slash-outline", "code-working-outline", "cog-outline", "color-fill-outline", "color-filter-outline", "color-palette-outline", "color-wand-outline", "compass-outline", "construct-outline", "contract-outline", "contrast-outline", "copy-outline", "create-outline", "crop-outline", "cube-outline", "cut-outline", "desktop-outline", "disc-outline", "document-attach-outline", "document-outline", "document-text-outline", "documents-outline", "download-outline", "duplicate-outline", "ear-outline", "earth-outline", "easel-outline", "egg-outline", "ellipse-outline", "ellipsis-horizontal-circle-outline", "ellipsis-horizontal-outline", "ellipsis-vertical-circle-outline", "ellipsis-vertical-outline", "enter-outline", "exit-outline", "expand-outline", "eye-off-outline", "eye-outline", "eyedrop-outline", "fast-food-outline", "female-outline", "file-tray-full-outline", "file-tray-outline", "file-tray-stacked-outline", "film-outline", "filter-outline", "finger-print-outline", "fitness-outline", "flag-outline", "flame-outline", "flash-off-outline", "flash-outline", "flashlight-outline", "flask-outline", "flower-outline", "folder-open-outline", "folder-outline", "football-outline", "funnel-outline", "game-controller-outline", "gift-outline", "git-branch-outline", "git-commit-outline", "git-compare-outline", "git-merge-outline", "git-network-outline", "git-pull-request-outline", "glasses-outline", "globe-outline", "golf-outline", "grid-outline", "hammer-outline", "hand-left-outline", "hand-right-outline", "happy-outline", "hardware-chip-outline", "headset-outline", "heart-circle-outline", "heart-dislike-circle-outline", "heart-dislike-outline", "heart-half-outline", "heart-outline", "help-buoy-outline", "help-circle-outline", "help-outline", "home-outline", "hourglass-outline", "ice-cream-outline", "image-outline", "images-outline", "infinite-outline", "information-circle-outline", "information-outline", "journal-outline", "key-outline", "keypad-outline", "language-outline", "laptop-outline", "layers-outline", "leaf-outline", "library-outline", "link-outline", "list-circle-outline", "list-outline", "locate-outline", "location-outline", "lock-closed-outline", "lock-open-outline", "log-in-outline", "log-out-outline", "magnet-outline", "mail-open-outline", "mail-outline", "mail-unread-outline", "male-female-outline", "male-outline", "man-outline", "map-outline", "medal-outline", "medical-outline", "medkit-outline", "megaphone-outline", "menu-outline", "mic-circle-outline", "mic-off-circle-outline", "mic-off-outline", "mic-outline", "moon-outline", "move-outline", "musical-note-outline", "musical-notes-outline", "navigate-circle-outline", "navigate-outline", "newspaper-outline", "notifications-circle-outline", "notifications-off-circle-outline", "notifications-off-outline", "notifications-outline", "nuclear-outline", "nutrition-outline", "open-outline", "options-outline", "paper-plane-outline", "partly-sunny-outline", "pause-circle-outline", "pause-outline", "paw-outline", "pencil-outline", "people-circle-outline", "people-outline", "person-add-outline", "person-circle-outline", "person-outline", "person-remove-outline", "phone-landscape-outline", "phone-portrait-outline", "pie-chart-outline", "pin-outline", "pint-outline", "pizza-outline", "planet-outline", "play-back-circle-outline", "play-back-outline", "play-circle-outline", "play-forward-circle-outline", "play-forward-outline", "play-outline", "play-skip-back-circle-outline", "play-skip-back-outline", "play-skip-forward-circle-outline", "play-skip-forward-outline", "podium-outline", "power-outline", "pricetag-outline", "pricetags-outline", "print-outline", "pulse-outline", "push-outline", "qr-code-outline", "radio-button-off-outline", "radio-button-on-outline", "radio-outline", "rainy-outline", "reader-outline", "receipt-outline", "recording-outline", "refresh-circle-outline", "refresh-outline", "reload-circle-outline", "reload-outline", "remove-circle-outline", "remove-outline", "reorder-four-outline", "reorder-three-outline", "reorder-two-outline", "repeat-outline", "resize-outline", "restaurant-outline", "return-down-back-outline", "return-down-forward-outline", "return-up-back-outline", "return-up-forward-outline", "ribbon-outline", "rocket-outline", "rose-outline", "sad-outline", "save-outline", "scan-circle-outline", "scan-outline", "school-outline", "search-circle-outline", "search-outline", "send-outline", "server-outline", "settings-outline", "shapes-outline", "share-outline", "share-social-outline", "shield-checkmark-outline", "shield-outline", "shirt-outline", "shuffle-outline", "skull-outline", "snow-outline", "speedometer-outline", "square-outline", "star-half-outline", "star-outline", "stats-chart-outline", "stop-circle-outline", "stop-outline", "stopwatch-outline", "subway-outline", "sunny-outline", "swap-horizontal-outline", "swap-vertical-outline", "sync-circle-outline", "sync-outline", "tablet-landscape-outline", "tablet-portrait-outline", "tennisball-outline", "terminal-outline", "text-outline", "thermometer-outline", "thumbs-down-outline", "thumbs-up-outline", "thunderstorm-outline", "time-outline", "timer-outline", "today-outline", "toggle-outline", "trail-sign-outline", "train-outline", "transgender-outline", "trash-bin-outline", "trash-outline", "trending-down-outline", "trending-up-outline", "triangle-outline", "trophy-outline", "tv-outline", "umbrella-outline", "videocam-outline", "volume-high-outline", "volume-low-outline", "volume-medium-outline", "volume-mute-outline", "volume-off-outline", "walk-outline", "wallet-outline", "warning-outline", "watch-outline", "water-outline", "wifi-outline", "wine-outline", "woman-outline"];
      /***/
    },

    /***/
    "6FpD":
    /*!******************************************************!*\
      !*** ./src/app/services/shared-resources.service.ts ***!
      \******************************************************/

    /*! exports provided: SharedResourcesService */

    /***/
    function FpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedResourcesService", function () {
        return SharedResourcesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _http_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http-helper.service */
      "tLlE");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../architecture/shared-resource-async-request-bundle */
      "JTjR");

      var SharedResourcesService = function SharedResourcesService(env, httpHelper, storage) {
        _classCallCheck(this, SharedResourcesService);

        this.env = env;
        this.httpHelper = httpHelper;
        this.storage = storage;
        _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"].HttpHelper = this.httpHelper;
        _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"].Env = this.env;
        _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"].Storage = this.storage;
      };

      SharedResourcesService.ctorParameters = function () {
        return [{
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"]
        }, {
          type: _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      SharedResourcesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"], _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], SharedResourcesService);
      /***/
    },

    /***/
    "6cTQ":
    /*!**************************************************************!*\
      !*** ./src/app/architecture/auto-arrayed-shared-resource.ts ***!
      \**************************************************************/

    /*! exports provided: AutoArrayedGetResource */

    /***/
    function cTQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoArrayedGetResource", function () {
        return AutoArrayedGetResource;
      });
      /* harmony import */


      var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/architecture/shared-resource-async-request-bundle */
      "JTjR");
      /* harmony import */


      var _arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./arrayed-shared-resource */
      "DEPO");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AutoArrayedGetResource = /*#__PURE__*/function (_arrayed_shared_resou) {
        _inherits(AutoArrayedGetResource, _arrayed_shared_resou);

        var _super2 = _createSuper(AutoArrayedGetResource);

        function AutoArrayedGetResource(url) {
          var _this4;

          var authenticated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          _classCallCheck(this, AutoArrayedGetResource);

          _this4 = _super2.call(this, null, [], null);
          _this4.url = url;
          _this4.authenticated = authenticated;
          _this4.producer = _this4.producerFunction;
          _this4.producer = _this4.producer.bind(_assertThisInitialized(_this4));
          return _this4;
        }

        _createClass(AutoArrayedGetResource, [{
          key: "producerFunction",
          value: function producerFunction(argument) {
            var _this5 = this;

            var url = this.url;

            if (argument) {
              url = url + "/" + argument;
            }

            return src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceAsyncRequestBundle"].HttpHelper.get(url, this.authenticated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              _this5.setResource(result);

              return result;
            }));
          }
        }]);

        return AutoArrayedGetResource;
      }(_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_1__["ArrayedSharedResource"]);
      /***/

    },

    /***/
    "7Tm6":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/remote-stats-container/remote-stats-container.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tm6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"stats-top-container\">\n  <div class=\"stats-type-container row no-gutters justify-content-center\">\n    <app-remote-stats-box\n      *ngFor=\"let stat of data\"\n      [url]=\"stat.url\"\n      [text]=\"stat.text\"\n      [number]=\"stat.number\"\n    >\n    </app-remote-stats-box>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "7VJn":
    /*!*****************************************************************************************!*\
      !*** ./src/app/common/session-info-icon-summary/session-info-icon-summary.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SessionInfoIconSummaryComponent */

    /***/
    function VJn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionInfoIconSummaryComponent", function () {
        return SessionInfoIconSummaryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_session_info_icon_summary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./session-info-icon-summary.component.html */
      "tJN7");
      /* harmony import */


      var _session_info_icon_summary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./session-info-icon-summary.component.scss */
      "ys1Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SessionInfoIconSummaryComponent = /*#__PURE__*/function () {
        function SessionInfoIconSummaryComponent() {
          _classCallCheck(this, SessionInfoIconSummaryComponent);
        }

        _createClass(SessionInfoIconSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SessionInfoIconSummaryComponent;
      }();

      SessionInfoIconSummaryComponent.ctorParameters = function () {
        return [];
      };

      SessionInfoIconSummaryComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        time: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        stateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SessionInfoIconSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-info-icon-summary',
        template: _raw_loader_session_info_icon_summary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_info_icon_summary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SessionInfoIconSummaryComponent);
      /***/
    },

    /***/
    "7jyQ":
    /*!*****************************************************************************!*\
      !*** ./node_modules/jalali-moment/node_modules/moment/locale sync ^\.\/.*$ ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function jyQ(module, exports, __webpack_require__) {
      var map = {
        "./af": "2/yN",
        "./af.js": "2/yN",
        "./ar": "2fY4",
        "./ar-dz": "hpot",
        "./ar-dz.js": "hpot",
        "./ar-kw": "FxCd",
        "./ar-kw.js": "FxCd",
        "./ar-ly": "UWQ+",
        "./ar-ly.js": "UWQ+",
        "./ar-ma": "d81T",
        "./ar-ma.js": "d81T",
        "./ar-sa": "hlNI",
        "./ar-sa.js": "hlNI",
        "./ar-tn": "1gfi",
        "./ar-tn.js": "1gfi",
        "./ar.js": "2fY4",
        "./az": "1IL0",
        "./az.js": "1IL0",
        "./be": "qnCN",
        "./be.js": "qnCN",
        "./bg": "Ov6M",
        "./bg.js": "Ov6M",
        "./bm": "+Obh",
        "./bm.js": "+Obh",
        "./bn": "LULx",
        "./bn.js": "LULx",
        "./bo": "p9+f",
        "./bo.js": "p9+f",
        "./br": "eypF",
        "./br.js": "eypF",
        "./bs": "ShUO",
        "./bs.js": "ShUO",
        "./ca": "FYvP",
        "./ca.js": "FYvP",
        "./cs": "jkyO",
        "./cs.js": "jkyO",
        "./cv": "2R46",
        "./cv.js": "2R46",
        "./cy": "jWkq",
        "./cy.js": "jWkq",
        "./da": "wynC",
        "./da.js": "wynC",
        "./de": "9RZR",
        "./de-at": "4EKq",
        "./de-at.js": "4EKq",
        "./de-ch": "G2yM",
        "./de-ch.js": "G2yM",
        "./de.js": "9RZR",
        "./dv": "eaO8",
        "./dv.js": "eaO8",
        "./el": "YrNT",
        "./el.js": "YrNT",
        "./en-au": "slHb",
        "./en-au.js": "slHb",
        "./en-ca": "Nts3",
        "./en-ca.js": "Nts3",
        "./en-gb": "mjMm",
        "./en-gb.js": "mjMm",
        "./en-ie": "dpul",
        "./en-ie.js": "dpul",
        "./en-il": "FMBq",
        "./en-il.js": "FMBq",
        "./en-in": "bl2D",
        "./en-in.js": "bl2D",
        "./en-nz": "YVOy",
        "./en-nz.js": "YVOy",
        "./en-sg": "swtn",
        "./en-sg.js": "swtn",
        "./eo": "uFaB",
        "./eo.js": "uFaB",
        "./es": "11GN",
        "./es-do": "SVl/",
        "./es-do.js": "SVl/",
        "./es-us": "Ye35",
        "./es-us.js": "Ye35",
        "./es.js": "11GN",
        "./et": "DVdz",
        "./et.js": "DVdz",
        "./eu": "vprZ",
        "./eu.js": "vprZ",
        "./fa": "0nVr",
        "./fa.js": "0nVr",
        "./fi": "X3iN",
        "./fi.js": "X3iN",
        "./fil": "Y7av",
        "./fil.js": "Y7av",
        "./fo": "juws",
        "./fo.js": "juws",
        "./fr": "hk0p",
        "./fr-ca": "wm2J",
        "./fr-ca.js": "wm2J",
        "./fr-ch": "NKgo",
        "./fr-ch.js": "NKgo",
        "./fr.js": "hk0p",
        "./fy": "KcN/",
        "./fy.js": "KcN/",
        "./ga": "2N9e",
        "./ga.js": "2N9e",
        "./gd": "CGzN",
        "./gd.js": "CGzN",
        "./gl": "unPK",
        "./gl.js": "unPK",
        "./gom-deva": "1MmZ",
        "./gom-deva.js": "1MmZ",
        "./gom-latn": "ErMy",
        "./gom-latn.js": "ErMy",
        "./gu": "60e4",
        "./gu.js": "60e4",
        "./he": "EvPf",
        "./he.js": "EvPf",
        "./hi": "Tg0B",
        "./hi.js": "Tg0B",
        "./hr": "cBSw",
        "./hr.js": "cBSw",
        "./hu": "FCA5",
        "./hu.js": "FCA5",
        "./hy-am": "uigC",
        "./hy-am.js": "uigC",
        "./id": "QQUQ",
        "./id.js": "QQUQ",
        "./is": "crRU",
        "./is.js": "crRU",
        "./it": "zBzr",
        "./it-ch": "teQT",
        "./it-ch.js": "teQT",
        "./it.js": "zBzr",
        "./ja": "kYIn",
        "./ja.js": "kYIn",
        "./jv": "JYad",
        "./jv.js": "JYad",
        "./ka": "PB6v",
        "./ka.js": "PB6v",
        "./kk": "OUrd",
        "./kk.js": "OUrd",
        "./km": "/JfV",
        "./km.js": "/JfV",
        "./kn": "HY9m",
        "./kn.js": "HY9m",
        "./ko": "ltmD",
        "./ko.js": "ltmD",
        "./ku": "N7b1",
        "./ku.js": "N7b1",
        "./ky": "1mn8",
        "./ky.js": "1mn8",
        "./lb": "Mpmn",
        "./lb.js": "Mpmn",
        "./lo": "GN8d",
        "./lo.js": "GN8d",
        "./lt": "9+C/",
        "./lt.js": "9+C/",
        "./lv": "plLn",
        "./lv.js": "plLn",
        "./me": "Q4im",
        "./me.js": "Q4im",
        "./mi": "vDz9",
        "./mi.js": "vDz9",
        "./mk": "LSGO",
        "./mk.js": "LSGO",
        "./ml": "CBy8",
        "./ml.js": "CBy8",
        "./mn": "zWnF",
        "./mn.js": "zWnF",
        "./mr": "MxZ2",
        "./mr.js": "MxZ2",
        "./ms": "pjKT",
        "./ms-my": "LUdl",
        "./ms-my.js": "LUdl",
        "./ms.js": "pjKT",
        "./mt": "lW3Z",
        "./mt.js": "lW3Z",
        "./my": "9wEo",
        "./my.js": "9wEo",
        "./nb": "iJfK",
        "./nb.js": "iJfK",
        "./ne": "UPht",
        "./ne.js": "UPht",
        "./nl": "buk/",
        "./nl-be": "mjsj",
        "./nl-be.js": "mjsj",
        "./nl.js": "buk/",
        "./nn": "L1ak",
        "./nn.js": "L1ak",
        "./oc-lnc": "u6EH",
        "./oc-lnc.js": "u6EH",
        "./pa-in": "cc5u",
        "./pa-in.js": "cc5u",
        "./pl": "qCVo",
        "./pl.js": "qCVo",
        "./pt": "mn/O",
        "./pt-br": "C5on",
        "./pt-br.js": "C5on",
        "./pt.js": "mn/O",
        "./ro": "V19m",
        "./ro.js": "V19m",
        "./ru": "yTtZ",
        "./ru.js": "yTtZ",
        "./sd": "acM4",
        "./sd.js": "acM4",
        "./se": "lSMZ",
        "./se.js": "lSMZ",
        "./si": "O+he",
        "./si.js": "O+he",
        "./sk": "8cr0",
        "./sk.js": "8cr0",
        "./sl": "5obH",
        "./sl.js": "5obH",
        "./sq": "xXjV",
        "./sq.js": "xXjV",
        "./sr": "S1eU",
        "./sr-cyrl": "YYnf",
        "./sr-cyrl.js": "YYnf",
        "./sr.js": "S1eU",
        "./ss": "GfYJ",
        "./ss.js": "GfYJ",
        "./sv": "Fo9I",
        "./sv.js": "Fo9I",
        "./sw": "EGKT",
        "./sw.js": "EGKT",
        "./ta": "uLqe",
        "./ta.js": "uLqe",
        "./te": "xwL8",
        "./te.js": "xwL8",
        "./tet": "d9+z",
        "./tet.js": "d9+z",
        "./tg": "Z0eb",
        "./tg.js": "Z0eb",
        "./th": "+gKs",
        "./th.js": "+gKs",
        "./tk": "qGf2",
        "./tk.js": "qGf2",
        "./tl-ph": "XDfA",
        "./tl-ph.js": "XDfA",
        "./tlh": "7L2X",
        "./tlh.js": "7L2X",
        "./tr": "Sd9I",
        "./tr.js": "Sd9I",
        "./tzl": "h2pr",
        "./tzl.js": "h2pr",
        "./tzm": "+P0v",
        "./tzm-latn": "XG2G",
        "./tzm-latn.js": "XG2G",
        "./tzm.js": "+P0v",
        "./ug-cn": "kZRC",
        "./ug-cn.js": "kZRC",
        "./uk": "ObCk",
        "./uk.js": "ObCk",
        "./ur": "b7Vg",
        "./ur.js": "b7Vg",
        "./uz": "deEg",
        "./uz-latn": "U6gn",
        "./uz-latn.js": "U6gn",
        "./uz.js": "deEg",
        "./vi": "ryXU",
        "./vi.js": "ryXU",
        "./x-pseudo": "ZOIo",
        "./x-pseudo.js": "ZOIo",
        "./yo": "mOPG",
        "./yo.js": "mOPG",
        "./zh-cn": "phPW",
        "./zh-cn.js": "phPW",
        "./zh-hk": "NqX4",
        "./zh-hk.js": "NqX4",
        "./zh-mo": "tw3I",
        "./zh-mo.js": "tw3I",
        "./zh-tw": "HJah",
        "./zh-tw.js": "HJah"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "7jyQ";
      /***/
    },

    /***/
    "7sa6":
    /*!*****************************************************************!*\
      !*** ./src/app/common/remote-stats/remote-stats.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function sa6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.stats-top-container {\n  display: block;\n  padding: 0rem 0.5rem;\n}\n.stats-top-container .stats-type-container {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzL3JlbW90ZS1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBa0RGO0FBakRFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBbURKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3JlbW90ZS1zdGF0cy9yZW1vdGUtc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb24uc2Nzc1wiO1xuLnN0YXRzLXRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHJlbSAwLjVyZW07XG4gIC5zdGF0cy10eXBlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIFxuICAgIH1cbiAgXG59XG4iXX0= */";
      /***/
    },

    /***/
    "84Bo":
    /*!**************************************************************!*\
      !*** ./src/app/common/static/contact/contact.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function Bo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nh4 {\n  font-family: \"myIranSans\";\n  text-align: right;\n  padding: 0.5rem 3rem;\n  color: #4e4e4e;\n  font-weight: bold;\n  font-size: 1rem;\n}\nul {\n  padding-left: 2rem;\n}\np {\n  text-align: right;\n  color: #676767;\n  font-size: 0.8rem;\n  padding: 0.1rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc3RhdGljL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBOUNBO0VBQ0kseUJDRkk7RURHSixpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWdESjtBQTlDQTtFQUNJLGtCQUFBO0FBaURKO0FBL0NBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWtESiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdGF0aWMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIkBpbXBvcnQgJ3NyYy90aGVtZS9jb21tb24uc2Nzcyc7XG5cblxuaDR7XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6MC41cmVtIDNyZW07XG4gICAgY29sb3I6ICM0ZTRlNGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjFyZW07XG59XG51bHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5we1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzowLjFyZW0gMnJlbTtcbn1cbiIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */";
      /***/
    },

    /***/
    "9YIV":
    /*!*************************************************************!*\
      !*** ./src/app/common/date-picker/date-picker.component.ts ***!
      \*************************************************************/

    /*! exports provided: DatePickerComponent */

    /***/
    function YIV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
        return DatePickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_date_picker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./date-picker.component.html */
      "qnXZ");
      /* harmony import */


      var _date_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-picker.component.scss */
      "Xzsu");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var jalali_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jalali-moment */
      "BCsW");
      /* harmony import */


      var jalali_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jalali_moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var DatePickerComponent = /*#__PURE__*/function () {
        function DatePickerComponent(modalController, picker, env) {
          _classCallCheck(this, DatePickerComponent);

          this.modalController = modalController;
          this.picker = picker;
          this.env = env;
          this.yearValue = 1;
          this.month = 1;
          this.day = 1;
          this.pickerType = PickerType.YEAR;
        }

        _createClass(DatePickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var tempDateString = this.env.generateUTCString(this.date, "yyyy/MM/dd");
            this.setYear(this.env.dateStringToJalaliYear(tempDateString));
            this.month = this.env.dateStringToJalaliMonth(tempDateString);
            this.day = this.env.dateStringToJalaliDay(tempDateString);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "confirm",
          value: function confirm() {
            this.modalController.dismiss({
              date: new Date(jalali_moment__WEBPACK_IMPORTED_MODULE_6__(this.getYear() + "/" + this.month + "/" + this.day, "jYYYY/jM/jD").toLocaleString())
            });
          }
        }, {
          key: "select",
          value: function select(pickerType) {
            this.pickerType = pickerType;
            this.openPicker().subscribe();
          }
        }, {
          key: "openPicker",
          value: function openPicker() {
            var _this6 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.picker.create({
              columns: this.getColumns(),
              buttons: [{
                text: "انصراف",
                role: "cancel"
              }, {
                text: "تأیید",
                handler: function handler(value) {
                  _this6.setValue(value["col-1"]["value"]);
                }
              }],
              mode: "ios"
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (picker) {
              picker.addEventListener("ionPickerColChange", function (event) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));
              });
              picker.columns[0].selectedIndex = _this6.getSelectedIndex();
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(picker.present());
            }));
          }
        }, {
          key: "getSelectedIndex",
          value: function getSelectedIndex() {
            switch (this.pickerType) {
              case PickerType.YEAR:
                return this.yearValue - 1;

              case PickerType.MONTH:
                return this.month - 1;

              case PickerType.DAY:
                return this.day - 1;
            }
          }
        }, {
          key: "setValue",
          value: function setValue(val) {
            switch (this.pickerType) {
              case PickerType.YEAR:
                this.yearValue = val;
                this.select(PickerType.MONTH);
                break;

              case PickerType.MONTH:
                this.month = val;
                this.select(PickerType.DAY);
                break;

              case PickerType.DAY:
                this.day = val;
                break;
            }
          }
        }, {
          key: "getMonthName",
          value: function getMonthName() {
            return this.env.getMonthName(this.month);
          }
        }, {
          key: "setYear",
          value: function setYear(year) {
            this.yearValue = year - 1398;
          }
        }, {
          key: "getYear",
          value: function getYear() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.yearValue;
            return value + 1398;
          }
        }, {
          key: "getYears",
          value: function getYears() {
            var options = [];

            for (var i = 1; i < 3; i++) {
              options.push({
                text: this.getYear(i),
                value: i
              });
            }

            return options;
          }
        }, {
          key: "getMonths",
          value: function getMonths() {
            var options = [];
            var selected = false;

            for (var i = 1; i < 13; i++) {
              options.push({
                text: this.env.getMonthName(i),
                value: i
              });
            }

            return options;
          }
        }, {
          key: "getDayes",
          value: function getDayes() {
            var options = [];
            var dateString = this.getYear() + "/" + this.month;

            for (var i = 1; i <= jalali_moment__WEBPACK_IMPORTED_MODULE_6__(dateString, "jYYYY/jM").jDaysInMonth(); i++) {
              options.push({
                text: i,
                value: i
              });
            }

            return options;
          }
        }, {
          key: "getColumns",
          value: function getColumns() {
            var columns = [];
            var options = [];

            switch (this.pickerType) {
              case PickerType.YEAR:
                options = this.getYears();
                break;

              case PickerType.MONTH:
                options = this.getMonths();
                break;

              case PickerType.DAY:
                options = this.getDayes();
                break;
            }

            columns.push({
              name: "col-1",
              options: options
            });
            return columns;
          }
        }]);

        return DatePickerComponent;
      }();

      DatePickerComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }];
      };

      DatePickerComponent.propDecorators = {
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      DatePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-date-picker",
        template: _raw_loader_date_picker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_date_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])], DatePickerComponent);
      var PickerType;

      (function (PickerType) {
        PickerType[PickerType["YEAR"] = 0] = "YEAR";
        PickerType[PickerType["MONTH"] = 1] = "MONTH";
        PickerType[PickerType["DAY"] = 2] = "DAY";
      })(PickerType || (PickerType = {}));
      /***/

    },

    /***/
    "9cBY":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/basic-user-profile/basic-user-profile.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cBY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div  class=\"row primary-background pt-5 justify-content-center\">\n  <div class=\"col-auto\">\n    <app-user-avatar\n      class=\"large-sized\"\n      [user]=\"this.user\"\n    ></app-user-avatar>\n  </div>\n</div>\n<div  class=\"row primary-background pt-2 pb-4 mb-3\">\n  <div class=\"col-12 justify-content-center d-flex align-items-center\">\n    <ion-icon\n      class=\"online-status\"\n      [ngClass]=\"(isOnline())?'online':'offline'\"\n      [name]=\"this.env.ONLINE_ICON\"\n    ></ion-icon>\n    <div class=\"name\">\n      <span class=\"normal-text number-text\"> {{getName(this.user)}}</span>\n      \n    </div>\n    \n  </div>\n  <div *ngIf=\"provider\" class=\"col-12 justify-content-center d-flex align-items-center\">\n    <span class=\"small-text ml-1 sessions-count-label\">تعداد جلسات: </span>\n    <span class=\"normal-text number-text sessions-count\">{{provider.ended_sessions_count}}</span>\n    \n  </div>\n  <div *ngIf=\"provider\" class=\"col-12 justify-content-center d-flex align-items-center\">\n    <ion-icon name=\"star\" class=\"small-text ml-1 mean-score-label\"> </ion-icon>\n    <span class=\"normal-text number-text mean-score ml-1\">{{provider.mean_score}}</span>\n    <span class=\"xsmall-text ml-1\"> از</span>\n    <span class=\"normal-text number-text\">5</span>\n  </div>\n \n  \n</div>";
      /***/
    },

    /***/
    "9y04":
    /*!***************************************************************!*\
      !*** ./src/app/common/select-icon/select-icon.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function y04(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icon-button {\n  --background: white;\n  --background-hover: white;\n  --background-focused: white;\n  --box-shadow: none;\n  --ripple-color: white;\n  --color: gray;\n  font-size: 0rem;\n  height: auto;\n}\n.icon-button .icon {\n  font-size: 1.8rem;\n  --ionicon-stroke-width: 10px;\n  color: black;\n}\n.icon-button:hover {\n  --background: white;\n}\n.icon-button:hover .icon {\n  --ionicon-stroke-width: 18px;\n}\n.icon-button:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NlbGVjdC1pY29uL3NlbGVjdC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBZUEsWUFBQTtBQWRKO0FBQUk7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBRE07RUFDRSw0QkFBQTtBQUdSO0FBQUk7RUFDRSxhQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2VsZWN0LWljb24vc2VsZWN0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogd2hpdGU7XG4gICAgLy8tLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1yaXBwbGUtY29sb3I6IHdoaXRlO1xuICAgIC0tY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAwcmVtO1xuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogMTBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLmljb24ge1xuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIGhlaWdodDogYXV0bztcbn0iXX0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BbMm":
    /*!**************************************!*\
      !*** ./src/app/models/voice-call.ts ***!
      \**************************************/

    /*! exports provided: VoiceCall, VoiceCallDirection, VoiceCallState */

    /***/
    function BbMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceCall", function () {
        return VoiceCall;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceCallDirection", function () {
        return VoiceCallDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceCallState", function () {
        return VoiceCallState;
      });

      var VoiceCall = function VoiceCall() {
        _classCallCheck(this, VoiceCall);
      };

      var VoiceCallDirection;

      (function (VoiceCallDirection) {
        VoiceCallDirection[VoiceCallDirection["OUTGOING"] = 1] = "OUTGOING";
        VoiceCallDirection[VoiceCallDirection["INCOMING"] = 2] = "INCOMING";
      })(VoiceCallDirection || (VoiceCallDirection = {}));

      var VoiceCallState;

      (function (VoiceCallState) {
        VoiceCallState[VoiceCallState["NEW"] = 1] = "NEW";
        VoiceCallState[VoiceCallState["TRYING"] = 2] = "TRYING";
        VoiceCallState[VoiceCallState["RINGING"] = 3] = "RINGING";
        VoiceCallState[VoiceCallState["ACCEPTED"] = 4] = "ACCEPTED";
        VoiceCallState[VoiceCallState["CONVERSATION"] = 5] = "CONVERSATION";
        VoiceCallState[VoiceCallState["PAUSED"] = 6] = "PAUSED";
        VoiceCallState[VoiceCallState["FINISHED"] = 7] = "FINISHED";
        VoiceCallState[VoiceCallState["FLUSHED"] = 8] = "FLUSHED";
      })(VoiceCallState || (VoiceCallState = {}));
      /***/

    },

    /***/
    "C+bK":
    /*!*******************************************************!*\
      !*** ./src/app/common/deposit/deposit.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function CBK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9kZXBvc2l0L2RlcG9zaXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "CGJ0":
    /*!****************************************!*\
      !*** ./src/app/models/remote-stats.ts ***!
      \****************************************/

    /*! exports provided: RemoteStats, CategoryStats, RemoteStatsType */

    /***/
    function CGJ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteStats", function () {
        return RemoteStats;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryStats", function () {
        return CategoryStats;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteStatsType", function () {
        return RemoteStatsType;
      });

      var RemoteStats = function RemoteStats() {
        _classCallCheck(this, RemoteStats);
      };

      var CategoryStats = function CategoryStats() {
        _classCallCheck(this, CategoryStats);
      };

      var RemoteStatsType;

      (function (RemoteStatsType) {
        RemoteStatsType[RemoteStatsType["TOTAL_PROVIDERS_STATS"] = 1] = "TOTAL_PROVIDERS_STATS";
        RemoteStatsType[RemoteStatsType["CATEGORY_PROVIDERS_STATS"] = 2] = "CATEGORY_PROVIDERS_STATS";
        RemoteStatsType[RemoteStatsType["USERS_STATS"] = 3] = "USERS_STATS";
      })(RemoteStatsType || (RemoteStatsType = {}));
      /***/

    },

    /***/
    "DEPO":
    /*!*********************************************************!*\
      !*** ./src/app/architecture/arrayed-shared-resource.ts ***!
      \*********************************************************/

    /*! exports provided: ArrayedSharedResource */

    /***/
    function DEPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayedSharedResource", function () {
        return ArrayedSharedResource;
      });
      /* harmony import */


      var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/architecture/shared-resource-async-request-bundle */
      "JTjR");

      var ArrayedSharedResource = /*#__PURE__*/function (_src_app_architecture) {
        _inherits(ArrayedSharedResource, _src_app_architecture);

        var _super3 = _createSuper(ArrayedSharedResource);

        function ArrayedSharedResource() {
          var _this7;

          _classCallCheck(this, ArrayedSharedResource);

          _this7 = _super3.apply(this, arguments);
          _this7.filterFunction = null;
          return _this7;
        }

        _createClass(ArrayedSharedResource, [{
          key: "filteredResource",
          value: function filteredResource() {
            if (this.filterFunction != null && this.resource()) return this.resource().filter(this.filterFunction);
            return this.resource();
          }
        }, {
          key: "setFilter",
          value: function setFilter(filterFn) {
            this.filterFunction = filterFn;
          }
        }, {
          key: "needsNoItemAlert",
          value: function needsNoItemAlert() {
            return this.getResourceStatus() == src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceUpdateStatus"].UPDATED && this.filteredResource().length < 1;
          }
        }]);

        return ArrayedSharedResource;
      }(src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceAsyncRequestBundle"]);
      /***/

    },

    /***/
    "DUqy":
    /*!*************************************************************************************!*\
      !*** ./src/app/common/random-provider-avatars/random-provider-avatars.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: RandomProviderAvatarsComponent */

    /***/
    function DUqy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RandomProviderAvatarsComponent", function () {
        return RandomProviderAvatarsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_random_provider_avatars_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./random-provider-avatars.component.html */
      "vpln");
      /* harmony import */


      var _random_provider_avatars_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./random-provider-avatars.component.scss */
      "SdEw");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/provider.service */
      "gs/X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RandomProviderAvatarsComponent = /*#__PURE__*/function () {
        function RandomProviderAvatarsComponent(providerService, env) {
          _classCallCheck(this, RandomProviderAvatarsComponent);

          this.providerService = providerService;
          this.env = env;
          this.categoryId = null;
          this.avatars = [];
        }

        _createClass(RandomProviderAvatarsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.providerService.randomAvatarSrcListShared.request();
          }
        }, {
          key: "getAvatarZClass",
          value: function getAvatarZClass(index) {
            switch (index) {
              case 0:
              case 6:
                return "z-4";

              case 1:
              case 5:
                return "z-3";

              case 2:
              case 4:
                return "z-2";

              case 3:
                return "z-1";
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return RandomProviderAvatarsComponent;
      }();

      RandomProviderAvatarsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }];
      };

      RandomProviderAvatarsComponent.propDecorators = {
        categoryId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      RandomProviderAvatarsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-random-provider-avatars',
        template: _raw_loader_random_provider_avatars_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_random_provider_avatars_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])], RandomProviderAvatarsComponent);
      /***/
    },

    /***/
    "DYp9":
    /*!*************************************************************************!*\
      !*** ./src/app/common/remote-stats-box/remote-stats-box.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function DYp9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.stats-box {\n  box-shadow: 0px 0px 3px #e4e4e4;\n  -webkit-box-shadow: 0px 0px 3px #e4e4e4;\n  -moz-box-shadow: 0px 0px 3px #e4e4e4;\n  border-radius: 12px;\n  -webkit-border-radius: 12px;\n  -moz-border-radius: 12px;\n  --border-radius:$radius;\n  --border-style: none;\n  margin: 1rem 0.4rem 0.2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1rem;\n  height: 100px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.stats-box:active, .stats-box.selected {\n  border: 1px solid #71bcc1;\n}\n.stats-box .stats-text {\n  font-size: 0.7rem;\n  color: #737373;\n  text-align: center;\n}\n.stats-box .stats-number {\n  font-weight: bold;\n  color: #71bcc1;\n  font-size: 1.6rem;\n  font-family: \"myIranSansFaNum\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzLWJveC9yZW1vdGUtc3RhdHMtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUMyQkMsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBYUEsbUJEcEN3QjtFQ3FDeEIsMkJEckN3QjtFQ3NDckIsd0JEdENxQjtFQ3VDckIsdUJBQUE7RUR0Q0Ysb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQW1ERjtBQWxFRTtFQUVFLHlCQUFBO0FBbUVKO0FBckRFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF1REo7QUFyREU7RUFDRSxpQkFBQTtFQUNBLGNDakJZO0VEa0JaLGlCQUFBO0VBQ0EsOEJDeEJPO0FEK0VYIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3JlbW90ZS1zdGF0cy1ib3gvcmVtb3RlLXN0YXRzLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0IFwic3JjL3RoZW1lL2NvbW1vbi5zY3NzXCI7XG4uc3RhdHMtYm94IHtcbiAgJjphY3RpdmUsXG4gICYuc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICB9XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LCAwcHgsIDNweCwgI2U0ZTRlNCk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMTJweCk7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICBtYXJnaW46IDFyZW0gMC40cmVtIDAuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLnN0YXRzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc3RhdHMtbnVtYmVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6ICRmb250TnVtO1xuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "FexU":
    /*!*******************************************************************************!*\
      !*** ./src/app/common/additional-info-edit/additional-info-edit.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: AdditionalInfoEditComponent */

    /***/
    function FexU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdditionalInfoEditComponent", function () {
        return AdditionalInfoEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_additional_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./additional-info-edit.component.html */
      "m9S8");
      /* harmony import */


      var _additional_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./additional-info-edit.component.scss */
      "sWap");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/alert.service */
      "3LUQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_additional_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/additional-info */
      "MJJW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AdditionalInfoEditComponent = /*#__PURE__*/function () {
        function AdditionalInfoEditComponent(modal, userService, alert, env) {
          _classCallCheck(this, AdditionalInfoEditComponent);

          this.modal = modal;
          this.userService = userService;
          this.alert = alert;
          this.env = env;
          this.editable = false;
        }

        _createClass(AdditionalInfoEditComponent, [{
          key: "dismiss",
          value: function dismiss() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.modal.dismiss(data);
          }
        }, {
          key: "showSubmit",
          value: function showSubmit() {
            return true;
          }
        }, {
          key: "processEmptyFields",
          value: function processEmptyFields() {
            if (this.additionalInfo.address == null) this.additionalInfo.address = "";
            if (this.additionalInfo.land_line_number == null) this.additionalInfo.land_line_number = "";
            if (this.additionalInfo.national_code == null) this.additionalInfo.national_code = "";
            if (this.additionalInfo.postal_code == null) this.additionalInfo.postal_code = "";
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this8 = this;

            this.env.somethingIsPending("editing provider info");
            this.userService.updateAdditionalInfo(this.additionalInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (error) {
              _this8.alert.presentError("ثبت اطلاعات تکمیلی با مشکل مواجه شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(false);
            })).subscribe(function (result) {
              _this8.env.somethingIsDonePending("editing provider info");

              if (result) {
                _this8.alert.presentSuccess("اطلاعات تکمیلی با موفقیت ویرایش شد.");
              }
            });
            this.dismiss(this.additionalInfo);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdditionalInfoEditComponent;
      }();

      AdditionalInfoEditComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
        }];
      };

      AdditionalInfoEditComponent.propDecorators = {
        additionalInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }]
      };
      AdditionalInfoEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "app-additional-info-edit",
        template: _raw_loader_additional_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_additional_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]])], AdditionalInfoEditComponent);
      /***/
    },

    /***/
    "HeTM":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/submit-button/submit-button.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HeTM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button\n  [disabled] = \"isWaiting || disabled\"\n  (click)=\"submit()\"\n  type=\"submit\"\n  expand=\"block\"\n  class=\"\"\n  [ngClass]=\"(isInlineAction)?'inline-action-button':'primary-button m-3'\"\n  >{{(!isWaiting)?text: ''}}\n  <ion-spinner class=\"submit-waiting-spinner\" *ngIf=\"isWaiting\" name=\"lines-small\"></ion-spinner>\n</ion-button>\n";
      /***/
    },

    /***/
    "IKOy":
    /*!*****************************************!*\
      !*** ./src/app/models/remote-config.ts ***!
      \*****************************************/

    /*! exports provided: RemoteConfig */

    /***/
    function IKOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteConfig", function () {
        return RemoteConfig;
      });

      var RemoteConfig = function RemoteConfig() {
        _classCallCheck(this, RemoteConfig);
      };
      /***/

    },

    /***/
    "IP2b":
    /*!**********************************************!*\
      !*** ./src/app/guard/home-redirect.guard.ts ***!
      \**********************************************/

    /*! exports provided: HomeRedirectGuard */

    /***/
    function IP2b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRedirectGuard", function () {
        return HomeRedirectGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/alert.service */
      "3LUQ");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var HomeRedirectGuard = /*#__PURE__*/function () {
        function HomeRedirectGuard(router, authService, alertService) {
          _classCallCheck(this, HomeRedirectGuard);

          this.router = router;
          this.authService = authService;
          this.alertService = alertService;
        }

        _createClass(HomeRedirectGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this9 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.authService.isAuthenticated()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (result) {
              if (result) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this9.authService.isUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (isUser) {
                  if (isUser) {
                    _this9.router.navigateByUrl("/provider-categories");
                  } else {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this9.authService.isAdmin()).subscribe(function (isAdmin) {
                      if (isAdmin) {
                        _this9.router.navigateByUrl("/adm-dashboard");
                      } else {
                        _this9.router.navigateByUrl("/pvd-reservations");
                      }
                    });
                  }

                  return false;
                }));
              } else {
                _this9.router.navigateByUrl("/login");
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(false);
            }));
          }
        }]);

        return HomeRedirectGuard;
      }();

      HomeRedirectGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }];
      };

      HomeRedirectGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])], HomeRedirectGuard);
      /***/
    },

    /***/
    "Ixvq":
    /*!***************************************************!*\
      !*** ./src/app/common/score/score.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Ixvq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".stars-container .star {\n  color: gold;\n  font-size: 2rem;\n  margin: 0 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJzLWNvbnRhaW5lclxue1xuICAgIC5zdGFyXG4gICAge1xuICAgICAgICBjb2xvcjpnb2xkO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbjogMCAwLjdyZW07XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "JTjR":
    /*!**********************************************************************!*\
      !*** ./src/app/architecture/shared-resource-async-request-bundle.ts ***!
      \**********************************************************************/

    /*! exports provided: SharedResourceAsyncRequestBundle, SharedResourceUpdateStatus, SharedResourceAsyncRequest */

    /***/
    function JTjR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedResourceAsyncRequestBundle", function () {
        return SharedResourceAsyncRequestBundle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedResourceUpdateStatus", function () {
        return SharedResourceUpdateStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedResourceAsyncRequest", function () {
        return SharedResourceAsyncRequest;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var SharedResourceAsyncRequestBundle = /*#__PURE__*/function () {
        function SharedResourceAsyncRequestBundle(producer, sharedResourceDefaultValue, ownerObject) {
          var cacheable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          _classCallCheck(this, SharedResourceAsyncRequestBundle);

          this.requestHook = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.WaitingQueue = [];
          this.processingQueue = [];
          this.processedCache = [];
          this.iterationStatus = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
          this.updateNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.resourceReadyNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.resourceUpdateStatus = SharedResourceUpdateStatus.NOT_UPDATED;
          this.cacheable = false;
          this.producer = producer;

          if (ownerObject) {
            this.producer = this.producer.bind(ownerObject);
          }

          this.sharedResource = sharedResourceDefaultValue;
          this.cacheable = cacheable;
          this.receiveRequests();
        }

        _createClass(SharedResourceAsyncRequestBundle, [{
          key: "getResourceStatus",
          value: function getResourceStatus() {
            return this.resourceUpdateStatus;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.resourceUpdateStatus = SharedResourceUpdateStatus.NOT_UPDATED;
            this.processingQueue = [];
            this.iterationStatus = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
            this.WaitingQueue = [];
            this.sharedResource = null;
            this.processedCache = [];
            this.updateNotifier.next(this.sharedResource);
          }
        }, {
          key: "getUpdateNotifier",
          value: function getUpdateNotifier() {
            var cleanUpComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var notifier = this.updateNotifier.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])());

            if (cleanUpComponent) {
              notifier = notifier.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(cleanUpComponent));
            }

            return notifier;
          }
        }, {
          key: "needsSkeleton",
          value: function needsSkeleton() {
            return this.getResourceStatus() == SharedResourceUpdateStatus.ATTEMPTING_FIRST_UPDATE;
          }
        }, {
          key: "getResourceReadyNotifier",
          value: function getResourceReadyNotifier() {
            var cleanUpComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var notifier = this.resourceReadyNotifier.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])());

            if (cleanUpComponent) {
              notifier = notifier.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(cleanUpComponent));
            }

            return notifier;
          }
        }, {
          key: "setResource",
          value: function setResource(value) {
            this.sharedResource = value;
            this.updateNotifier.next(value);
          }
        }, {
          key: "resource",
          value: function resource() {
            return this.sharedResource;
          }
        }, {
          key: "receiveRequests",
          value: function receiveRequests() {
            var _this10 = this;

            this.requestHook.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(1000)).subscribe(function (request) {
              _this10.setRequestStatus(request, SharedResourceAsyncRequestStatus.AWAITING_PROCESS);

              _this10.WaitingQueue.push(request);

              _this10.pokeIterator();
            });
          }
        }, {
          key: "iterate",
          value: function iterate() {
            var _this11 = this;

            this.iterationSingleProcessComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.iterationSingleProcessComplete.subscribe(function (request) {
              _this11.processingQueue.splice(_this11.processingQueue.indexOf(request), 1);

              _this11.processedCache.push(request);

              _this11.processNext();
            });
            this.processNext();
          }
        }, {
          key: "processNext",
          value: function processNext() {
            var _this12 = this;

            if (this.WaitingQueue.length) {
              var request = this.WaitingQueue.pop();
              this.setRequestStatus(request, SharedResourceAsyncRequestStatus.PROCESSING);
              this.processingQueue.push(request);

              switch (this.resourceUpdateStatus) {
                case SharedResourceUpdateStatus.NOT_UPDATED:
                  this.setStatus(SharedResourceUpdateStatus.ATTEMPTING_FIRST_UPDATE);
                  break;

                case SharedResourceUpdateStatus.ERROR_ON_LAST_UPDATE_ATTEMPT:
                  this.setStatus(SharedResourceUpdateStatus.ATTEMPTING_UPDATE_AFTER_ERROR);
                  break;

                default:
                  this.setStatus(SharedResourceUpdateStatus.ATTEMPTING_UPDATE);
              }

              this.produce(request).subscribe(function (result) {
                _this12.setStatus(SharedResourceUpdateStatus.UPDATED);

                _this12.resourceReadyNotifier.next();

                _this12.setRequestStatus(request, SharedResourceAsyncRequestStatus.COMPLETED);

                _this12.iterationSingleProcessComplete.next(request);
              });
            }

            this.iterationSingleProcessComplete.complete();
            this.iterationStatus = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
          }
        }, {
          key: "produce",
          value: function produce(request) {
            return this.producer(request.argument).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
          }
        }, {
          key: "pokeIterator",
          value: function pokeIterator() {
            if (this.iterationStatus == SharedResourceAsyncRequestIteratorStatus.SLEEPING) {
              this.iterate();
            }
          }
        }, {
          key: "setStatus",
          value: function setStatus(status) {
            this.resourceUpdateStatus = status;
          }
        }, {
          key: "setRequestStatus",
          value: function setRequestStatus(request, status) {
            if (SharedResourceAsyncRequestBundle.Env) {
              switch (status) {
                case SharedResourceAsyncRequestStatus.COMPLETED:
                case SharedResourceAsyncRequestStatus.ERROR:
                  SharedResourceAsyncRequestBundle.Env.somethingIsDonePending("Async Request: " + request.identifier);
                  break;

                case SharedResourceAsyncRequestStatus.PROCESSING:
                  SharedResourceAsyncRequestBundle.Env.somethingIsPending("Async Request: " + request.identifier);
              }
            }

            request.status = status;
          }
        }, {
          key: "request",
          value: function request(argument) {
            var request = new SharedResourceAsyncRequest();
            request.argument = argument;
            request.identifier = this.randomRequestIdentifier();
            request.time = new Date().getTime();
            this.requestHook.next(request);
            return request;
          }
        }, {
          key: "randomRequestIdentifier",
          value: function randomRequestIdentifier() {
            return Math.random() * 10000 + 1;
          }
        }]);

        return SharedResourceAsyncRequestBundle;
      }();

      var SharedResourceUpdateStatus;

      (function (SharedResourceUpdateStatus) {
        SharedResourceUpdateStatus[SharedResourceUpdateStatus["NOT_UPDATED"] = 0] = "NOT_UPDATED";
        SharedResourceUpdateStatus[SharedResourceUpdateStatus["UPDATED"] = 1] = "UPDATED";
        SharedResourceUpdateStatus[SharedResourceUpdateStatus["ERROR_ON_LAST_UPDATE_ATTEMPT"] = 2] = "ERROR_ON_LAST_UPDATE_ATTEMPT";
        SharedResourceUpdateStatus[SharedResourceUpdateStatus["ATTEMPTING_FIRST_UPDATE"] = 3] = "ATTEMPTING_FIRST_UPDATE";
        SharedResourceUpdateStatus[SharedResourceUpdateStatus["ATTEMPTING_UPDATE"] = 4] = "ATTEMPTING_UPDATE";
        SharedResourceUpdateStatus[SharedResourceUpdateStatus["ATTEMPTING_UPDATE_AFTER_ERROR"] = 5] = "ATTEMPTING_UPDATE_AFTER_ERROR";
      })(SharedResourceUpdateStatus || (SharedResourceUpdateStatus = {}));

      var SharedResourceAsyncRequest = function SharedResourceAsyncRequest() {
        _classCallCheck(this, SharedResourceAsyncRequest);
      };

      var SharedResourceAsyncRequestStatus;

      (function (SharedResourceAsyncRequestStatus) {
        SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["AWAITING_PROCESS"] = 0] = "AWAITING_PROCESS";
        SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["PROCESSING"] = 1] = "PROCESSING";
        SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["COMPLETED"] = 2] = "COMPLETED";
        SharedResourceAsyncRequestStatus[SharedResourceAsyncRequestStatus["ERROR"] = 3] = "ERROR";
      })(SharedResourceAsyncRequestStatus || (SharedResourceAsyncRequestStatus = {}));

      var SharedResourceAsyncRequestIterator = function SharedResourceAsyncRequestIterator() {
        _classCallCheck(this, SharedResourceAsyncRequestIterator);

        this.status = SharedResourceAsyncRequestIteratorStatus.SLEEPING;
      };

      var SharedResourceAsyncRequestIteratorStatus;

      (function (SharedResourceAsyncRequestIteratorStatus) {
        SharedResourceAsyncRequestIteratorStatus[SharedResourceAsyncRequestIteratorStatus["BUSY"] = 0] = "BUSY";
        SharedResourceAsyncRequestIteratorStatus[SharedResourceAsyncRequestIteratorStatus["HUNGRY"] = 1] = "HUNGRY";
        SharedResourceAsyncRequestIteratorStatus[SharedResourceAsyncRequestIteratorStatus["SLEEPING"] = 2] = "SLEEPING";
      })(SharedResourceAsyncRequestIteratorStatus || (SharedResourceAsyncRequestIteratorStatus = {}));
      /***/

    },

    /***/
    "K4UH":
    /*!****************************************!*\
      !*** ./src/app/services/im.service.ts ***!
      \****************************************/

    /*! exports provided: IMService */

    /***/
    function K4UH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IMService", function () {
        return IMService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.service */
      "OC8m");
      /* harmony import */


      var src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/smart-audio.service */
      "snxI");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");
      /* harmony import */


      var _file_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./file-helper.service */
      "Y+EJ");
      /* harmony import */


      var src_app_models_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/message */
      "qZOq");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tinode_sdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tinode-sdk */
      "p+xU");
      /* harmony import */


      var tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinode_sdk__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_file_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../models/file-model */
      "X9GW");

      var Drafty = tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a.Drafty;

      var IMService = /*#__PURE__*/function () {
        function IMService(env, alert, fileService, auth, smartAudio, notifs) {
          var _this13 = this;

          _classCallCheck(this, IMService);

          this.env = env;
          this.alert = alert;
          this.fileService = fileService;
          this.auth = auth;
          this.smartAudio = smartAudio;
          this.notifs = notifs;
          this.username = null;
          this.password = null;
          this.chatList = [];
          this.messageInfoUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](null);
          this.allReceived = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
          this.noMoreMessages = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
          this.contactsFetched = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
          this.messages = [];
          this.newMessages = [];
          this.fetchingMessages = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
          this.allRendered = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](false);
          this.fetchedContactList = false;
          this.cachedFiles = [];
          this.messageGotDirty = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.messageAddedToEnd = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"]();
          this.messageAddedToStart = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.notifyDirtySubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.fileFetchSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.isTypingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.isClientInChatPage = false;
          this.reconnectCountdown = null;
          this.topicPresWatchQueue = [];
          this.connectionStatusChanged = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"]();
          this.autoReconnectRemainingSecondsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.keepScrollState = false;
          this.rendered = 0;
          this.onConnect = this.onConnect.bind(this);
          this.onDisconnect = this.onDisconnect.bind(this);
          this.tnMeContactUpdate = this.tnMeContactUpdate.bind(this);
          this.tnMeSubsUpdated = this.tnMeSubsUpdated.bind(this);
          this.tnMeMetaDesc = this.tnMeMetaDesc.bind(this);
          this.handleNewMessage = this.handleNewMessage.bind(this);
          this.handleAllMessagesReceived = this.handleAllMessagesReceived.bind(this);
          this.handleAllNewPageMessagesReceived = this.handleAllNewPageMessagesReceived.bind(this);
          this.handleInfoReceipt = this.handleInfoReceipt.bind(this);
          this.handlePresUpdated = this.handlePresUpdated.bind(this);
          this.handleAutoreconnectIteration = this.handleAutoreconnectIteration.bind(this);
          this.auth.loggedOut.subscribe(function (result) {
            _this13.cachedFiles = [];
            _this13.messages = [];
            _this13.username = null;
            _this13.password = null;
          });
          this.notifyDirtySubject.subscribe(function (output) {
            _this13.messageGotDirty.next(_this13.messages.indexOf(output));
          });
          this.fileFetchSuccess.subscribe(function (output) {
            _this13.messageGotDirty.next(output);
          });
          this.setup();
        }

        _createClass(IMService, [{
          key: "notifyEnteredChatPage",
          value: function notifyEnteredChatPage() {
            var entered = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.isClientInChatPage = entered;
          }
        }, {
          key: "setup",
          value: function setup() {
            var _this14 = this;

            this.tinode = new tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a(this.env.CHAT_APP_NAME, this.env.CHAT_URL, this.env.CHAT_API_KEY, null, false);
            this.tinode.enableLogging(this.env.ENABLE_TINODE_LOGGING, true);
            this.tinode.onConnect = this.onConnect;
            this.tinode.onDisconnect = this.onDisconnect;
            this.tinode.onAutoreconnectIteration = this.handleAutoreconnectIteration;
            this.env.somethingIsPending("chat connecting");
            this.tinode.connect();
            this.authLogoutSubscription = this.auth.loggedOut.subscribe(function (result) {
              _this14.logout();
            }); //this.tinode.onAutoreconnectIteration = this.onAutoreconnectIteration;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem("auth-token");
            localStorage.removeItem("settings");
            this.tinode.onConnect = undefined;
            this.tinode.onDisconnect = undefined;
            this.tinode.onAutoreconnectIteration = undefined;
            this.authLogoutSubscription.unsubscribe();
            this.tinode.disconnect();
            this.tinode = null;
            this.setup();
          }
        }, {
          key: "onConnect",
          value: function onConnect() {
            var _this15 = this;

            clearInterval(this.networkProbeIntervalHandel);
            this.networkProbeIntervalHandel = setInterval(function () {
              _this15.tinode.networkProbe();
            }, 3000);
            console.log("IM Server Connected");
            this.connectionStatusChanged.next(true);
            this.env.somethingIsDonePending("chat connecting");
            this.auth.getUser().then(function (user) {
              _this15.login(user);
            }, function (error) {
              var fetchUserSubscription = _this15.auth.fetchedUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (result) {
                console.log("feteched user");

                if (result) {
                  _this15.auth.getUser().then(function (user) {
                    _this15.login(user);
                  }, function (error) {
                    console.log("Cant get User");
                  })["catch"]();
                }
              });
            })["catch"]();
          }
        }, {
          key: "reconnect",
          value: function reconnect() {
            this.tinode.reconnect();
            if (this.reconnectCountdown) clearInterval(this.reconnectCountdown);
          }
        }, {
          key: "handleAutoreconnectIteration",
          value: function handleAutoreconnectIteration(sec, prom) {
            var _this16 = this;

            console.log(prom);
            if (this.reconnectCountdown) clearInterval(this.reconnectCountdown);

            if (prom) {
              // Reconnecting now
              prom.then(function () {
                // Reconnected: clear error
                if (_this16.reconnectCountdown) clearInterval(_this16.reconnectCountdown);

                _this16.connectionStatusChanged.next(true);
              })["catch"](function (err) {});
              return;
            }

            var count = sec / 1000;
            count = count | count;
            this.reconnectCountdown = setInterval(function () {
              _this16.autoReconnectRemainingSecondsUpdated.next(count--);
            }, 1000);
          }
        }, {
          key: "onDisconnect",
          value: function onDisconnect() {
            clearInterval(this.networkProbeIntervalHandel);
            this.env.somethingIsDonePending("chat connecting");
            console.log("IM Server Disonnected");
            this.connectionStatusChanged.next(false);
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this17 = this;

            console.log("log in");
            this.username = user.tinode_username;
            this.password = user.tinode_pass;

            if (this.username == null) {
              var tempUserName = (Math.floor(Math.random() * 1000000) + 1).toString();
              var tempPass = (Math.floor(Math.random() * 1000000) + 1).toString();
              this.env.somethingIsPending("loggin in chat");
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.createAccount(tempUserName, tempPass)).subscribe(function (uid) {
                _this17.auth.updateChatCredentials(tempUserName, tempPass, uid).subscribe();

                _this17.username = tempUserName;
                _this17.password = tempPass;
              });
            } else {
              if (this.username != null && this.password != null) {
                if (this.tinode.isConnected()) {
                  if (!this.tinode.isAuthenticated()) {
                    this.env.somethingIsPending("loggin in chat");
                    var promise = this.tinode.loginBasic(this.username, this.password);
                    promise.then(function () {
                      _this17.onLoggedIn();
                    });
                  }
                }
              }
            }
          }
        }, {
          key: "onLoggedIn",
          value: function onLoggedIn() {
            var _this18 = this;

            this.env.somethingIsDonePending("loggin in chat");
            console.log("Logged into IM Server");
            var me = this.tinode.getMeTopic();
            me.onMetaDesc = this.tnMeMetaDesc;
            me.onContactUpdate = this.tnMeContactUpdate;
            me.onSubsUpdated = this.tnMeSubsUpdated; //myUserId: this.tinode.getCurrentUserID()
            // Subscribe, fetch topic desc, the list of subscriptions. Messages are not fetched.

            me.subscribe(me.startMetaQuery().withLaterSub().withDesc().withTags().withCred().build())["catch"](function (err) {
              _this18.tinode.disconnect();
            })["finally"](function () {}); //this.handleMustSubscribeTopics(user);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(text) {
            //let msg = Drafty.attachJSON(Drafty.parse(text));
            var promise = null;
            var topic = this.tinode.getTopic(this.topic);
            var msg = topic.createMessage(text, false);

            if (!topic.isSubscribed()) {
              promise = Promise.resolve();
              promise = promise.then(function () {
                return topic.subscribe();
              });
            }

            topic.publishDraft(msg, promise).then(function (ctrl) {
              if (topic.isArchived()) {
                return topic.archive(false);
              }
            })["catch"](function (err) {
              console.error(err.message, "err");
            });
          }
        }, {
          key: "tnMeContactUpdate",
          value: function tnMeContactUpdate(what, cont) {
            this.resetContactList();
          }
        }, {
          key: "tnMeSubsUpdated",
          value: function tnMeSubsUpdated() {
            this.resetContactList(); //console.log('tnMeSubsUpdated');
          }
        }, {
          key: "tnMeMetaDesc",
          value: function tnMeMetaDesc(desc) {
            this.resetContactList(); //console.log('tnMeMetaDesc');
          }
        }, {
          key: "createAccount",
          value: function createAccount(username, password) {
            var _this19 = this;

            return this.tinode.connect().then(function () {
              return _this19.tinode.createAccountBasic(username, password).then(function () {
                _this19.onLoggedIn();

                return _this19.getCurrentUserId();
              });
            });
          }
        }, {
          key: "getCurrentUserId",
          value: function getCurrentUserId() {
            return this.tinode.getCurrentUserID();
          }
        }, {
          key: "resetContactList",
          value: function resetContactList() {
            var _this20 = this;

            this.chatList = [];
            this.tinode.getMeTopic().contacts(function (c) {
              _this20.chatList.push(c);
            });
            this.fetchedContactList = true;
            this.contactsFetched.next(true);
          }
        }, {
          key: "isTopicInContacts",
          value: function isTopicInContacts(topicName) {
            return true && this.findTopicInContacts(topicName);
          }
        }, {
          key: "findTopicInContacts",
          value: function findTopicInContacts(topicName) {
            var contact = this.chatList.filter(function (item) {
              return item.topic == topicName;
            });

            if (contact.length) {
              return contact[0];
            }

            return false;
          }
        }, {
          key: "isContactTopicOnline",
          value: function isContactTopicOnline(topicName) {
            /* let contact = this.findTopicInContacts(topicName);
            if (contact) {
              return contact.online;
            }
            return false; */
            return this.tinode.isTopicOnline(topicName);
          }
        }, {
          key: "acceptTopic",
          value: function acceptTopic(topic) {
            topic = this.tinode.getTopic(topic);
            var getQuery = topic.startMetaQuery();
            return topic.subscribe(getQuery.build()).then(function (ctrl) {
              return ctrl.topic;
            });
          }
        }, {
          key: "createNewGroupTopic",
          value: function createNewGroupTopic() {
            var newTopicName = this.tinode.newGroupTopicName();
            var params = null;
            params = {
              _topicName: newTopicName
            };
            params.desc = {
              "public": "",
              "private": {
                comment: ""
              }
            };
            var topic = this.tinode.getTopic(newTopicName);
            var getQuery = topic.startMetaQuery();
            return topic.subscribe(getQuery.build(), params).then(function (ctrl) {
              return ctrl.topic;
            });
          }
        }, {
          key: "leave",
          value: function leave(oldTopicName) {
            if (!oldTopicName) {
              return;
            } //this.cachedFiles = [];


            var oldTopic = this.tinode.getTopic(oldTopicName);
            this.fetchingMessages.next(false);
            oldTopic.onData = undefined;
            oldTopic.onAllMessagesReceived = undefined;
            oldTopic.onInfo = undefined;
            oldTopic.onMetaDesc = undefined;
            oldTopic.onSubsUpdated = undefined;
            oldTopic.onPres = undefined;
            this.cleanSlate();

            if (oldTopic && oldTopic.isSubscribed()) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(oldTopic.leave());
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(true);
          }
        }, {
          key: "setTopic",
          value: function setTopic(topic) {
            var _this21 = this;

            var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            this.env.somethingIsPending("setting chat topic");
            var changedTopic = topic != this.topic;
            this.rendered = 0;
            return this.leave(topic).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () {
              _this21.topic = _this21.tinode.getTopic(topic);
              var params = null;
              var setQuery = undefined;

              if (isNew) {
                params = {
                  _topicName: topic
                };

                if (!isGroup) {
                  params.sub = {
                    mode: "JRWPS"
                  };
                  params.desc = {
                    defacs: {
                      auth: "JRWPS"
                    }
                  };
                } else {
                  params.desc = {
                    "public": "",
                    "private": {
                      comment: ""
                    }
                  };
                }

                setQuery = params;
              }

              if (_this21.topic) {
                _this21.topic.onData = _this21.handleNewMessage;
                _this21.topic.onAllMessagesReceived = _this21.handleAllMessagesReceived;
                _this21.topic.onInfo = _this21.handleInfoReceipt;
              }

              var getQuery = _this21.topic.startMetaQuery().withLaterDesc().withLaterSub();

              getQuery = getQuery.withLaterData(30); //getQuery = getQuery.withData(1, null, 30);

              getQuery = getQuery.withLaterDel();
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(_this21.topic.subscribe(getQuery.build(), setQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                console.error("unable to set topic");

                _this21.env.somethingIsDonePending("setting chat topic");

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ctrl) {
                if (ctrl) {
                  if (_this21.topic != ctrl.topic) {
                    _this21.topic = ctrl.topic;

                    _this21.env.somethingIsDonePending("setting chat topic");
                  }

                  return true;
                }

                return false;
              }));
            }));
          }
        }, {
          key: "handlePresUpdated",
          value: function handlePresUpdated(pres) {
            if (pres.what == "acs") {
              this.alert.presentToast("accepted");
            }
          }
        }, {
          key: "getMessagesPage",
          value: function getMessagesPage() {
            var topic = this.tinode.getTopic(this.topic); //topic.onAllMessagesReceived = this.handleAllNewPageMessagesReceived;

            if (!topic.msgHasMoreMessages(false)) {
              this.noMoreMessages.next(true);
              return;
            }

            topic.getMessagesPage(20);
          }
        }, {
          key: "noteReceived",
          value: function noteReceived(msg) {
            var topic = this.tinode.getTopic(this.topic);

            if (topic.msgStatus(msg) >= tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a.MESSAGE_STATUS_SENT && msg.from != this.tinode.getCurrentUserID()) {
              topic.noteRecv(msg.seq);
            }
          }
        }, {
          key: "noteRead",
          value: function noteRead(msg) {
            var topic = this.tinode.getTopic(this.topic);

            if (topic.msgStatus(msg) >= tinode_sdk__WEBPACK_IMPORTED_MODULE_10___default.a.MESSAGE_STATUS_SENT && msg.from != this.tinode.getCurrentUserID()) {
              topic.noteRead(msg.seq);
            }
          }
        }, {
          key: "noteTyping",
          value: function noteTyping() {
            var topic = this.tinode.getTopic(this.topic);
            topic.noteKeyPress();
          }
        }, {
          key: "handleNewMessage",
          value: function handleNewMessage(msg) {
            this.fetchingMessages.next(true);
            var topic = this.tinode.getTopic(this.topic);
            var isNew = topic.isNewMessage(msg.seq);

            switch (isNew) {
              case true: //this.newMessageReceived.next(msg);

              case false:
                if (msg) {
                  if (!msg.deleted) {
                    var message = this.convertMessage(msg);

                    if (message.content) {
                      this.keepScrollState = false;
                      var lastIdx = this.messages.length - 1;
                      var index = lastIdx + 1;

                      if (lastIdx > -1 && message.content == this.messages[lastIdx].content && message.from == this.messages[lastIdx].from && message.status != this.messages[lastIdx].status && this.messages[lastIdx].status == 1) {
                        this.rendered--;
                        index--;
                        this.messageGotDirty.next(lastIdx);
                        this.messages[lastIdx] = message;
                        this.notifs.notifySentMessage(this.peerUser.id, message.topic).subscribe();
                      } else {
                        if (lastIdx < 0 || message.seq > this.messages[lastIdx].seq) {
                          this.keepScrollState = false;
                          this.messages.push(message);
                          this.messageAddedToEnd.next(index);
                        } else {
                          this.keepScrollState = true;
                          index = this.findMessageInsertIndex(this.messages, message.seq, 0);
                          this.messages.splice(index, 0, message);

                          if (this.messages[index - 1] != undefined && message.from == this.messages[index - 1].from) {
                            message.isLast = true;
                            this.messages[index - 1].isLast = false;
                          }

                          this.messageAddedToStart.next(index);
                        }
                      } //determine if isFiwrst


                      if (index == 0 || message.from != this.messages[index - 1].from) {//message.isFirst = true;
                      } // console.log('length: ' + this.messages.length);
                      // console.log('index: '+ index + ' from: ' + message.from + ' content: ' + message.content);
                      // console.log('index-1: '+ (index-1) + ' from: ' + this.messages[index-1].from);


                      if (this.messages[index + 1] == undefined || message.from != this.messages[index + 1].from) {
                        message.isLast = true;

                        if (this.messages[index - 1] != undefined && this.messages[index - 1].from == message.from) {
                          this.messages[index - 1].isLast = false;
                        }
                      }
                    }
                  }
                }

            }
          }
        }, {
          key: "findMessageInsertIndex",
          value: function findMessageInsertIndex(messageArray, messageSeq) {
            var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            if (messageSeq < messageArray[startIndex].seq) return startIndex;
            return this.findMessageInsertIndex(messageArray, messageSeq, startIndex + 1);
          }
        }, {
          key: "getTopicMessages",
          value: function getTopicMessages(callback) {
            var topic = this.tinode.getTopic(this.topic);
            return topic.messages(callback);
          }
        }, {
          key: "HandlePeerTyping",
          value: function HandlePeerTyping() {
            var _this22 = this;

            this.isTypingSubject.next(true);
            clearTimeout(this.typingTimeOut);
            this.typingTimeOut = setTimeout(function () {
              _this22.isTypingSubject.next(false);
            }, 500);
          }
        }, {
          key: "handleInfoReceipt",
          value: function handleInfoReceipt(info) {
            var topic = this.tinode.getTopic(this.topic);
            var status = null;

            switch (info.what) {
              case "read":
                status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_READ;
                break;

              case "recv":
                status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_RECEIVED;
                break;

              case "kp":
                this.HandlePeerTyping();
                return;

              default:
            }

            var messageIndex = undefined;
            var foundIndex = false;

            for (var index = this.messages.length - 1; index > 0; index--) {
              if (!foundIndex && this.messages[index].seq == info.seq) {
                this.messages[index].status = status;
                this.messageGotDirty.next(index);
                foundIndex = true;
                continue;
              }

              if (foundIndex) {
                if (this.messages[index].status < status) {
                  this.messages[index].status = status;
                } else {
                  break;
                }
              }
            }
          }
        }, {
          key: "incrementRendered",
          value: function incrementRendered() {
            this.rendered++;

            if (this.rendered == this.messages.length) {
              this.allRendered.next(true);
            }
          }
        }, {
          key: "hasFetchedContactList",
          value: function hasFetchedContactList() {
            return this.fetchedContactList;
          }
        }, {
          key: "getMessageStatus",
          value: function getMessageStatus(msg) {
            return this.tinode.getTopic(msg.topic).msgStatus(msg);
          }
        }, {
          key: "handleAllNewPageMessagesReceived",
          value: function handleAllNewPageMessagesReceived(params) {
            //this.keepScrollState = true;
            //this.messages = this.newMessages.concat(this.messages);
            //this.newMessages = [];
            this.fetchingMessages.next(false); //this.allReceived.next(true);

            if (params == 0) {
              this.noMoreMessages.next(true);
            }
          }
        }, {
          key: "handleAllMessagesReceived",
          value: function handleAllMessagesReceived(count) {
            //console.log(this.newMessages);
            //this.messages = this.messages.concat(this.newMessages);
            if (count == 0) {
              this.tinode.getTopic(this.topic).messages(this.handleNewMessage);
            }

            this.newMessages = []; //this.rendered = 0;
            //this.loadMessages();
            //this.messages = this.newMessages;

            this.fetchingMessages.next(false);
            this.allReceived.next(true);
          }
        }, {
          key: "loadMessages",
          value: function loadMessages() {
            var _this23 = this;

            this.newMessages = [];
            this.fetchingMessages.next(true);
            this.getTopicMessages(function (msg) {
              if (!msg.deleted) {
                var message = _this23.convertMessage(msg);

                if (message.content) {
                  _this23.newMessages.push(message);
                }
              }
            });
          }
        }, {
          key: "convertMessage",
          value: function convertMessage(msg) {
            var message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["Message"]();

            if (msg.from == this.tinode.getCurrentUserID()) {
              message.fromMe = true;
            }

            message.from = msg.from;
            message.seq = msg.seq;
            message.topic = msg.topic;
            message.content = msg.content;
            message.NotifyDirtySubject = this.notifyDirtySubject;
            message.ts = msg.ts;

            if (msg.content) {
              if (msg.head) {
                message.head = msg.head;
                message.mime = msg.head.mime;

                if (this.messageIsDrafty(msg.head.mime)) {
                  //message.attachments = this.getMessageAttachments(message.content);
                  var file = new _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileModel"]();
                  file.name = message.content.ent[0].data.name;
                  file.mime_type = message.content.ent[0].data.mime;
                  file.size = message.content.ent[0].data.size;

                  if (this.fileService.isImageMime(file.mime_type)) {
                    file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST;
                    file.fetchOnSrcRequest = true;
                    file.fetchObject = this;
                    file.fetchCallback = this.getImage;
                    file.ownerMessage = message;
                    message.file = file;
                    message.isImage = true;
                  } else if (this.fileService.isAudioMime(file.mime_type)) {
                    file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST;
                    file.fetchOnSrcRequest = true;
                    file.fetchObject = this;
                    file.fetchCallback = this.getAudio;
                    file.ownerMessage = message;
                    message.file = file;
                    message.isAudio = true;
                  }
                }
              }

              message.status = this.getMessageStatus(msg);
            }

            return message;
          }
        }, {
          key: "messageIsDrafty",
          value: function messageIsDrafty(mime) {
            return mime == Drafty.getContentType();
          }
        }, {
          key: "getMessageAttachments",
          value: function getMessageAttachments(content) {
            var attachments = [];

            if (content.ent && content.ent.length > 0) {
              for (var i in content.ent) {
                if (content.ent[i] && content.ent[i].tp == "IM") {
                  var attachement = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageAttachment"]();
                  attachement.downloadUrl = Drafty.getDownloadUrl(content.ent[i].data);
                  attachement.fileName = content.ent[i].data.name;
                  attachement.mimeType = content.ent[i].data.mime;
                  attachments.push(attachement);
                }
              }
            }

            return attachments;
          }
        }, {
          key: "cleanSlate",
          value: function cleanSlate() {
            this.messages = [];
            this.newMessages = [];
            this.chatList = [];
            this.rendered = 0;
            this.topic = null;
            this.keepScrollState = false;
            this.noMoreMessages.next(false);
            this.cachedFiles = [];
            this.messageAddedToEnd = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"]();
          }
        }, {
          key: "getImage",
          value: function getImage(message) {
            var _this24 = this;

            var cachedFile = this.cachedFiles.find(function (file) {
              return file.name == message.file.name;
            });

            if (cachedFile != undefined) {
              message.file = cachedFile;
              message.file.ownerMessage = message;
              message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
              this.fileFetchSuccess.next(this.messages.indexOf(message));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(message.file);
            } else {
              return this.fileService.downloadImage(message.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (result) {
                message.file.content = result;
                message.file.img_src = URL.createObjectURL(message.file.content);
                return _this24.fileService.getImageDimensions(message.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (output) {
                  message.file = output;
                  message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;

                  _this24.fileFetchSuccess.next(_this24.messages.indexOf(message));

                  return message.file;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
              }));
            }
          }
        }, {
          key: "getAudio",
          value: function getAudio(message) {
            var _this25 = this;

            var cachedFile = this.cachedFiles.find(function (file) {
              return file.name == message.file.name;
            });

            if (cachedFile != undefined) {
              message.file.audio_src = cachedFile.audio_src;
              message.file.content = cachedFile.content;
              message.file.ownerMessage = message;
              message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
              this.fileFetchSuccess.next(this.messages.indexOf(message));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(message.file);
            } else {
              return this.fileService.downloadAudio(message.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
                message.file.content = result;
                message.file.audio_src = URL.createObjectURL(message.file.content);
                message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;

                _this25.fileFetchSuccess.next(_this25.messages.indexOf(message));

                return message.file;
              }));
            }
          }
        }, {
          key: "sendImage",
          value: function sendImage(file) {
            var _this26 = this;

            var message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["Message"]();
            message.NotifyDirtySubject = this.notifyDirtySubject;
            message.status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_NONE;
            message.file = new _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileModel"]();
            message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
            message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_UPLOADING;
            message.file.content = file;
            message.file.size = file.size;
            this.fileService.processImageProperties(message.file).subscribe(function (result) {
              message.file = result;
              message.isImage = true;
              message.fromMe = true;
              message.isLast = true;
              message.file.ownerMessage = message;
              message.seq = (Math.floor(Math.random() * 1000000) + 1).toString();

              _this26.messages.push(message);

              _this26.messageAddedToEnd.next(_this26.messages.length - 1);

              _this26.fileService.uploadImage(message.file).subscribe(function (result) {
                message.file.name = result.name;
                message.file.extension = result.extension;
                message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_SUCCESS;
                var msg = Drafty.attachFile(null, message.file.mime_type, null, message.file.name, message.file.size, null);

                _this26.messages.splice(_this26.messages.indexOf(message), 1);

                _this26.cachedFiles.push(message.file);

                _this26.sendMessage(msg);
              }, function (error) {
                message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_FAIL;
                console.error(error);
              });
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "sendAudio",
          value: function sendAudio(auido) {
            var _this27 = this;

            var message = new src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["Message"]();
            message.NotifyDirtySubject = this.notifyDirtySubject;
            message.status = src_app_models_message__WEBPACK_IMPORTED_MODULE_6__["MessageStatus"].MESSAGE_STATUS_NONE;
            message.file = new _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileModel"]();
            message.isAudio = true;
            message.file.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
            message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_UPLOADING;
            message.file.content = auido;
            message.file.mime_type = "audio/webm";
            message.file.size = auido.size;
            message.file.audio_src = URL.createObjectURL(message.file.content);
            message.file.name = (Math.floor(Math.random() * 1000000) + 1).toString();
            message.fromMe = true;
            message.isLast = true;
            message.file.ownerMessage = message;
            message.seq = (Math.floor(Math.random() * 1000000) + 1).toString();
            this.messages.push(message);
            this.messageAddedToEnd.next(this.messages.length - 1);
            this.fileService.uploadAudio(message.file).subscribe(function (result) {
              console.log(result);
              message.file.name = result.name;
              message.file.extension = result.extension; //message.file.upload_status = FileUploadStatus.FILE_UPLOAD_STATUS_SUCCESS;

              message.notifyDirty();
              var msg = Drafty.attachFile(null, message.file.mime_type, null, message.file.name, message.file.size, null);

              _this27.messages.splice(_this27.messages.indexOf(message), 1);

              _this27.cachedFiles.push(message.file);

              _this27.sendMessage(msg);
            }, function (error) {
              message.file.upload_status = _models_file_model__WEBPACK_IMPORTED_MODULE_12__["FileUploadStatus"].FILE_UPLOAD_STATUS_FAIL;
            });
          }
        }]);

        return IMService;
      }();

      IMService.ctorParameters = function () {
        return [{
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _file_helper_service__WEBPACK_IMPORTED_MODULE_5__["FileHelperService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_2__["SmartAudioService"]
        }, {
          type: _notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]
        }];
      };

      IMService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _file_helper_service__WEBPACK_IMPORTED_MODULE_5__["FileHelperService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_2__["SmartAudioService"], _notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])], IMService);
      /***/
    },

    /***/
    "KIUr":
    /*!******************************************!*\
      !*** ./src/app/models/provider-group.ts ***!
      \******************************************/

    /*! exports provided: ProviderGroup */

    /***/
    function KIUr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProviderGroup", function () {
        return ProviderGroup;
      });

      var ProviderGroup = function ProviderGroup() {
        _classCallCheck(this, ProviderGroup);
      };
      /***/

    },

    /***/
    "KhDX":
    /*!*************************************************!*\
      !*** ./src/app/common/call/call.component.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function KhDX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.actions-wrapper {\n  flex-direction: row !important;\n}\n.actions-wrapper .call-action {\n  border-radius: 50px;\n  -webkit-border-radius: 50px;\n  -moz-border-radius: 50px;\n  --border-radius:$radius;\n  --border-radius:50px;\n  width: 60px;\n  height: 60px;\n  --padding-end:0;\n  --padding-start:0;\n}\n.actions-wrapper .call-action.reject {\n  --background: #e65844;\n  --background-activated:#fe7f70;\n}\n.actions-wrapper .call-action.accept {\n  --background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vY2FsbC9jYWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUFDRSw4QkFBQTtBQWtERjtBQTdDRTtFQ29DRCxtQkRuQzBCO0VDb0MxQiwyQkRwQzBCO0VDcUN2Qix3QkRyQ3VCO0VDc0N2Qix1QkFBQTtFRHJDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBa0RKO0FBakRJO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtBQW1ETjtBQWpESTtFQUNFLG1CQUFBO0FBbUROIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NhbGwvY2FsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0IFwic3JjL3RoZW1lL2NvbW1vbi5zY3NzXCI7XG4uYWN0aW9ucy13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAuY2FsbC1zdGF0ZS10ZXh0XG4gIHtcbiAgICAgIFxuICB9XG4gIC5jYWxsLWFjdGlvbiB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1MHB4KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6NTBweDtcbiAgICB3aWR0aDo2MHB4O1xuICAgIGhlaWdodDo2MHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6MDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgICAmLnJlamVjdCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNlNjU4NDQ7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZTdmNzA7XG4gICAgfVxuICAgICYuYWNjZXB0IHtcbiAgICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XG4gICAgfVxuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "MJJW":
    /*!*******************************************!*\
      !*** ./src/app/models/additional-info.ts ***!
      \*******************************************/

    /*! exports provided: AdditionalInfo */

    /***/
    function MJJW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdditionalInfo", function () {
        return AdditionalInfo;
      });

      var AdditionalInfo = function AdditionalInfo() {
        _classCallCheck(this, AdditionalInfo);
      };
      /***/

    },

    /***/
    "MoGL":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/remote-stats-box/remote-stats-box.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MoGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a class=\"stats-box\" (click)=\"navigate()\">\n  <span class=\"stats-number number-text\">\n    {{number}}\n  </span>\n  <span class=\"stats-text\">{{text}}</span>\n</a>";
      /***/
    },

    /***/
    "MrgP":
    /*!***************************************************!*\
      !*** ./src/app/common/answer/answer.component.ts ***!
      \***************************************************/

    /*! exports provided: AnswerComponent */

    /***/
    function MrgP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswerComponent", function () {
        return AnswerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_answer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./answer.component.html */
      "kuGV");
      /* harmony import */


      var _answer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./answer.component.scss */
      "NfT3");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/public-question-and-answers.service */
      "ybCk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AnswerComponent = /*#__PURE__*/function () {
        function AnswerComponent(modalController, qaService, alert) {
          _classCallCheck(this, AnswerComponent);

          this.modalController = modalController;
          this.qaService = qaService;
          this.alert = alert;
          this.answering = false;
          this.answerString = "";
        }

        _createClass(AnswerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "answer",
          value: function answer() {
            var _this28 = this;

            this.answering = true;
            this.qaService.answer(this.answerString, this.questionId).subscribe(function (result) {
              _this28.alert.presentSuccess("پاسخ با موفقیت اضافه شد");

              _this28.qaService.questionWithAnswersShared.request(_this28.questionId);

              _this28.answering = false;

              _this28.dismiss();
            });
          }
        }]);

        return AnswerComponent;
      }();

      AnswerComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }];
      };

      AnswerComponent.propDecorators = {
        questionId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }]
      };
      AnswerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-answer',
        template: _raw_loader_answer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_answer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])], AnswerComponent);
      /***/
    },

    /***/
    "NfT3":
    /*!*****************************************************!*\
      !*** ./src/app/common/answer/answer.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function NfT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.question-text {\n  border: 1px solid #d7f3f6;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  --border-radius:$radius;\n  font-family: \"myIranSans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5zd2VyL2Fuc3dlci5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NBO0VBRUkseUJBQUE7RUN1Q0gsbUJEdEMwQjtFQ3VDMUIsMkJEdkMwQjtFQ3dDdkIsd0JEeEN1QjtFQ3lDdkIsdUJBQUE7RUR4Q0EseUJDSkk7QUR1RFIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYW5zd2VyL2Fuc3dlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcblxuLnF1ZXN0aW9uLXRleHRcbntcbiAgICBib3JkZXI6MXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yLXhsaWdodDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDEwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "OC8m":
    /*!**************************************************!*\
      !*** ./src/app/services/notification.service.ts ***!
      \**************************************************/

    /*! exports provided: NotificationService, firebaseConfig, NotificationCode */

    /***/
    function OC8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationCode", function () {
        return NotificationCode;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./call.service */
      "tCwg");
      /* harmony import */


      var _models_voice_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../models/voice-call */
      "BbMm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../models/user */
      "2hxB");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "E9qw");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/messaging */
      "YK9e");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(auth, firebaseX, platform, route, alert, http, env, nav, afMessaging, callService, userService) {
          var _this29 = this;

          _classCallCheck(this, NotificationService);

          this.auth = auth;
          this.firebaseX = firebaseX;
          this.platform = platform;
          this.route = route;
          this.alert = alert;
          this.http = http;
          this.env = env;
          this.nav = nav;
          this.afMessaging = afMessaging;
          this.callService = callService;
          this.userService = userService;
          this.token = null;
          this.showNoitfEnable = false;
          this.sessionManagerService = null;

          if (!this.env.WEB_NOTIFICATIONS_ONLY && this.platform.is("android")) {
            ///if(false){
            this.platform.ready().then(function (ready) {
              _this29.setAndroidParameters();

              _this29.subscribeToEvents();
            });
          } else {
            this.setBrowserParameters();
            this.subscribeToEvents();
          }
        }

        _createClass(NotificationService, [{
          key: "subscribeToEvents",
          value: function subscribeToEvents() {
            var _this30 = this;

            this.onMessageReceived.subscribe(function (message) {
              console.log("message received: " + message);

              _this30.dispatchNotification(message);
            });
            this.tokenChanges.subscribe(function (token) {
              console.log("token refresh: " + token);
              _this30.token = token;

              _this30.auth.isAuthenticated().then(function (result) {
                _this30.setToken();
              })["catch"](function (err) {});
            });
            this.auth.isAuthenticated().then(function (result) {
              _this30.setToken();
            })["catch"](function (err) {});
            this.auth.roleDetected.subscribe(function (result) {
              if (result) {
                console.log('before setToken');

                _this30.setToken();
              }
            });
            this.auth.loggedOutExToken.subscribe(function (exToken) {
              if (exToken) {
                _this30.unsetToken(exToken);
              }
            });
          }
        }, {
          key: "handleNewMessage",
          value: function handleNewMessage(data) {
            var user = JSON.parse(data.sender);
            var notifMessage = "پیام جدید از ";
            notifMessage += _models_user__WEBPACK_IMPORTED_MODULE_10__["User"].getName(user);
            var belongsToSessionChat = data.topic.substr(0, 3) == "grp";

            if (belongsToSessionChat) {//this.alert.presentViewNotify(notifMessage, this.openSessionsPage, this);
            } else {
              this.alert.presentViewNotify(notifMessage, this.openPeerChatList, this);
            }
          }
        }, {
          key: "setAndroidParameters",
          value: function setAndroidParameters() {
            this.onMessageReceived = this.firebaseX.onMessageReceived();
            this.tokenChanges = this.firebaseX.onTokenRefresh();
          }
        }, {
          key: "setBrowserParameters",
          value: function setBrowserParameters() {
            this.onMessageReceived = this.afMessaging.messages.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (message) {
              return message["data"];
            }));
            this.tokenChanges = this.afMessaging.requestPermission.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMapTo"])(this.afMessaging.tokenChanges));
          }
        }, {
          key: "dispatchNotification",
          value: function dispatchNotification(data) {
            var notificationCode = parseInt(data["notification_code"]);

            switch (notificationCode) {
              case NotificationCode.NEW_MESSAGE:
                this.handleNewMessage(data);
                break;

              case NotificationCode.INCOMING_CALL:
                this.handleIncomingCall(data);
                break;

              case NotificationCode.SESSION_UPDATE:
                this.handleSessionUpdateNotif(data);
                break;

              case NotificationCode.PAYMENT_CONFIRMED:
                this.handlePaymentConfirmed();
                break;

              default:
            }
          }
        }, {
          key: "handlePaymentConfirmed",
          value: function handlePaymentConfirmed() {
            this.userService.balanceShared.request();
            this.alert.presentSuccess("افزایش اعتبار انجام شد.");
          }
        }, {
          key: "handleIncomingCall",
          value: function handleIncomingCall(data) {
            var call = new _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCall"]();
            call.id = data["call_id"];
            call.access_token = data["access_token"];
            call.maxDuration = data['max_duration'];
            call.caller = JSON.parse(data["caller"]);
            this.callService.receiveCall(call);
          }
        }, {
          key: "handleSessionUpdateNotif",
          value: function handleSessionUpdateNotif(message) {
            if (this.sessionManagerService) {
              var session = JSON.parse(message.session);
              var sender = JSON.parse(message.sender);
              this.sessionManagerService.handleIncomingSessionUpdateNotification(session, sender);
            }
          }
        }, {
          key: "openPeerChatList",
          value: function openPeerChatList() {
            var _this31 = this;

            this.auth.getUser().then(function (user) {
              _this31.nav.navigateRoot(["/peer-chats/" + user.role_id]);
            });
          }
        }, {
          key: "setToken",
          value: function setToken() {
            if (this.token) {
              this.auth.remoteSetFcmToken(this.token).subscribe();
            }
          }
        }, {
          key: "unsetToken",
          value: function unsetToken(exAuthToken) {
            var _this32 = this;

            if (this.platform.is("android")) {
              this.firebaseX.unregister();
            } else {
              this.afMessaging.getToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (token) {
                return _this32.afMessaging.deleteToken(token);
              }));
            }

            this.auth.remoteUnsetFcmToken(exAuthToken).subscribe();
          }
        }, {
          key: "notifyPvdSessionAccepted",
          value: function notifyPvdSessionAccepted(sessionId) {}
        }, {
          key: "notifySessionUpdate",
          value: function notifySessionUpdate(sessionId, recipientId) {
            var _this33 = this;

            var url = "notify/sessionUpdate";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (token) {
              return _this33.http.post(_this33.env.API_URL + url, {
                recipient_user_id: recipientId,
                session_id: sessionId
              }, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              });
            }));
          }
        }, {
          key: "notifySentMessage",
          value: function notifySentMessage(recipientId, topic) {
            var _this34 = this;

            var url = "notify/sentMessage";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (token) {
              return _this34.http.post(_this34.env.API_URL + url, {
                recipient_user_id: recipientId,
                topic: topic
              }, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              });
            }));
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
        }, {
          type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseX"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"]
        }, {
          type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__["AngularFireMessaging"]
        }, {
          type: _call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseX"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__["AngularFireMessaging"], _call_service__WEBPACK_IMPORTED_MODULE_2__["CallService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])], NotificationService);
      var firebaseConfig = {
        apiKey: "AIzaSyCsPCmdxIh8mtrrrzKAUyym_mY4Y-fcGBk",
        authDomain: "hami-a7e39.firebaseapp.com",
        databaseURL: "https://hami-a7e39.firebaseio.com",
        projectId: "hami-a7e39",
        storageBucket: "hami-a7e39.appspot.com",
        messagingSenderId: "92310210926",
        appId: "1:92310210926:web:4bf75a8482aa17db7d197f"
      };
      var NotificationCode;

      (function (NotificationCode) {
        NotificationCode[NotificationCode["NEW_MESSAGE"] = 0] = "NEW_MESSAGE";
        NotificationCode[NotificationCode["SESSION_UPDATE"] = 1] = "SESSION_UPDATE";
        NotificationCode[NotificationCode["INCOMING_CALL"] = 2] = "INCOMING_CALL";
        NotificationCode[NotificationCode["PAYMENT_CONFIRMED"] = 3] = "PAYMENT_CONFIRMED";
      })(NotificationCode || (NotificationCode = {}));
      /***/

    },

    /***/
    "OFPZ":
    /*!************************************************************!*\
      !*** ./src/app/common/static/contact/contact.component.ts ***!
      \************************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function OFPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact.component.html */
      "sMNq");
      /* harmony import */


      var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact.component.scss */
      "84Bo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(modal) {
          _classCallCheck(this, ContactComponent);

          this.modal = modal;
        }

        _createClass(ContactComponent, [{
          key: "dismiss",
          value: function dismiss() {
            this.modal.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], ContactComponent);
      /***/
    },

    /***/
    "OXsI":
    /*!*****************************************************************************************!*\
      !*** ./src/app/common/session-list-item-minimal/session-list-item-minimal.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SessionListItemMinimalComponent */

    /***/
    function OXsI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionListItemMinimalComponent", function () {
        return SessionListItemMinimalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_session_list_item_minimal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./session-list-item-minimal.component.html */
      "m+j5");
      /* harmony import */


      var _session_list_item_minimal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./session-list-item-minimal.component.scss */
      "jp0Q");
      /* harmony import */


      var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../session-info/session-info.component */
      "YNR+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_models_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/session */
      "m6xN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SessionListItemMinimalComponent = /*#__PURE__*/function () {
        function SessionListItemMinimalComponent(env, modalController, sessionsManager, navController) {
          _classCallCheck(this, SessionListItemMinimalComponent);

          this.env = env;
          this.modalController = modalController;
          this.sessionsManager = sessionsManager;
          this.navController = navController;
          this.stateText = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getStateString;
          this.sessionType = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionType"];
          this.sessionTimingTypeText = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getTimingTypeString;
        }

        _createClass(SessionListItemMinimalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.providerPerspective == true) {
              this.user = this.session.user;
              this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.user);
              this.avatarUrl = this.env.getPublicStorageUrl(this.session.user.avatar);
            } else {
              this.user = this.session.provider.user;
              this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.provider.user);
              this.avatarUrl = this.env.getPublicStorageUrl(this.session.provider.user.avatar);
            }
          }
        }, {
          key: "navigateToSession",
          value: function navigateToSession() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                this.presentSessionInfoModel().subscribe();
            }
          }
        }, {
          key: "presentSessionInfoModel",
          value: function presentSessionInfoModel() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.modalController.create({
              component: _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__["SessionInfoComponent"],
              componentProps: {
                session: this.session,
                providerPerspective: this.providerPerspective
              }
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(modal.present());
            }));
          }
        }, {
          key: "getSessionDateTimeText",
          value: function getSessionDateTimeText() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "زمان شروع جلسه";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "زمان درخواست";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "زمان تأیید رزرو";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "زمان رد درخواست";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "زمان پایان جلسه";
            }
          }
        }, {
          key: "getSessionTime",
          value: function getSessionTime() {
            return this.env.dateStringToJalaliTime(this.session.created_at);
          }
        }, {
          key: "getSessionDate",
          value: function getSessionDate() {
            return this.env.dateStringToJalaliDate(this.session.created_at);
          }
        }, {
          key: "getClass",
          value: function getClass() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "active";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "requested";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "reserved";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "rejected";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "ended";
            }
          }
        }]);

        return SessionListItemMinimalComponent;
      }();

      SessionListItemMinimalComponent.ctorParameters = function () {
        return [{
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      SessionListItemMinimalComponent.propDecorators = {
        session: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }],
        providerPerspective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }]
      };
      SessionListItemMinimalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-session-list-item-minimal",
        template: _raw_loader_session_list_item_minimal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_list_item_minimal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], SessionListItemMinimalComponent);
      /***/
    },

    /***/
    "OhPj":
    /*!*************************************************************************!*\
      !*** ./src/app/common/session-list-item/session-list-item.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SessionListItemComponent */

    /***/
    function OhPj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionListItemComponent", function () {
        return SessionListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_session_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./session-list-item.component.html */
      "TxdI");
      /* harmony import */


      var _session_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./session-list-item.component.scss */
      "mW0d");
      /* harmony import */


      var _services_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/call.service */
      "tCwg");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../session-info/session-info.component */
      "YNR+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_models_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/session */
      "m6xN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SessionListItemComponent = /*#__PURE__*/function () {
        function SessionListItemComponent(env, modalController, sessionsManager, alert, navController, callService) {
          _classCallCheck(this, SessionListItemComponent);

          this.env = env;
          this.modalController = modalController;
          this.sessionsManager = sessionsManager;
          this.alert = alert;
          this.navController = navController;
          this.callService = callService;
          this.minimal = false;
          this.sessionType = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionType"];
          this.sessionTimingTypeText = src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getTimingTypeString;
        }

        _createClass(SessionListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.providerPerspective == true) {
              this.user = this.session.user;
              this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.user);
              this.avatarUrl = this.env.getPublicStorageUrl(this.session.user.avatar);
            } else {
              this.user = this.session.provider.user;
              this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].getName(this.session.provider.user);
              this.avatarUrl = this.env.getPublicStorageUrl(this.session.provider.user.avatar);
            }
          }
        }, {
          key: "isOnline",
          value: function isOnline() {
            return this.sessionsManager.isUserOnline(this.user);
          }
        }, {
          key: "navigateToSession",
          value: function navigateToSession() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                if (this.session.type == src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionType"].Call) {
                  this.call();
                } else {
                  if (this.providerPerspective) {
                    this.sessionsManager.pvdStartSessionChat(this.session);
                  } else {
                    this.sessionsManager.usrStartSessionChat(this.session);
                  }
                }

                break;

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                this.openInfoModal();
            }
          }
        }, {
          key: "call",
          value: function call() {
            var user;

            if (this.providerPerspective) {
              user = this.session.user;
            } else {
              user = this.session.provider.user;
            }

            this.callService.call(user, this.session.duration);
          }
        }, {
          key: "openInfoModal",
          value: function openInfoModal() {
            var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (ev) {
              ev.stopPropagation();
            }

            this.alert.presentModal(_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_6__["SessionInfoComponent"], {
              session: this.session,
              providerPerspective: this.providerPerspective
            }, true).subscribe();
          }
        }, {
          key: "getSessionDateTimeText",
          value: function getSessionDateTimeText() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "زمان شروع جلسه";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "زمان درخواست";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "زمان تأیید رزرو";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "زمان رد درخواست";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "زمان پایان جلسه";
            }
          }
        }, {
          key: "getSessionReservedTime",
          value: function getSessionReservedTime() {
            return this.env.dateStringToJalaliTime(this.session.reserved_from);
          }
        }, {
          key: "getSessionReservedDate",
          value: function getSessionReservedDate() {
            return this.env.dateStringToJalaliDate(this.session.reserved_from);
          }
        }, {
          key: "getSessionTime",
          value: function getSessionTime() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return this.env.dateStringToJalaliTime(this.session.started);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return this.env.dateStringToJalaliTime(this.session.created_at);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return this.env.dateStringToJalaliTime(this.session.accepted);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED: //return this.env.dateStringToJalaliTime(this.session.ended);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return this.env.dateStringToJalaliTime(this.session.ended);
            }
          }
        }, {
          key: "getSessionDate",
          value: function getSessionDate() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return this.env.dateStringToJalaliDate(this.session.started);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return this.env.dateStringToJalaliDate(this.session.created_at);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return this.env.dateStringToJalaliDate(this.session.accepted);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return this.env.dateStringToJalaliDate(this.session.ended);

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return this.env.dateStringToJalaliDate(this.session.ended);
            }
          }
        }, {
          key: "getClass",
          value: function getClass() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
                return "active";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
                return "requested";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
                return "reserved";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "rejected";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "ended";
            }
          }
        }, {
          key: "getUnreadMessages",
          value: function getUnreadMessages() {
            return this.sessionsManager.getSessionUnreadMessagesCount(this.session);
          }
        }, {
          key: "getSessionDurationText",
          value: function getSessionDurationText() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return "مدت زمان درخواستی";

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return "مدت زمان جلسه";
            }
          }
        }, {
          key: "getSessionDuration",
          value: function getSessionDuration() {
            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].getState(this.session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REQUESTED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].RESERVED:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].REJECTED:
                return this.session.duration;

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ACTIVE:
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["SessionState"].ENDED:
                return this.sessionsManager.calculateSessionDuration(this.session);
            }
          }
        }, {
          key: "isActive",
          value: function isActive() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].isActive(this.session);
          }
        }, {
          key: "isEnded",
          value: function isEnded() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].isEnded(this.session);
          }
        }, {
          key: "isReserved",
          value: function isReserved() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_10__["Session"].isReserved(this.session);
          }
        }, {
          key: "getSessionTotalFee",
          value: function getSessionTotalFee() {
            return this.sessionsManager.calculateSessionTotalFee(this.session);
          }
        }]);

        return SessionListItemComponent;
      }();

      SessionListItemComponent.ctorParameters = function () {
        return [{
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _services_call_service__WEBPACK_IMPORTED_MODULE_3__["CallService"]
        }];
      };

      SessionListItemComponent.propDecorators = {
        session: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }],
        providerPerspective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }],
        minimal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }]
      };
      SessionListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-session-list-item",
        template: _raw_loader_session_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_5__["SessionsManagerService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _services_call_service__WEBPACK_IMPORTED_MODULE_3__["CallService"]])], SessionListItemComponent);
      /***/
    },

    /***/
    "OtR6":
    /*!***********************************************************************!*\
      !*** ./src/app/common/remote-stats-box/remote-stats-box.component.ts ***!
      \***********************************************************************/

    /*! exports provided: RemoteStatsBoxComponent */

    /***/
    function OtR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteStatsBoxComponent", function () {
        return RemoteStatsBoxComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_remote_stats_box_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./remote-stats-box.component.html */
      "MoGL");
      /* harmony import */


      var _remote_stats_box_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./remote-stats-box.component.scss */
      "DYp9");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RemoteStatsBoxComponent = /*#__PURE__*/function () {
        function RemoteStatsBoxComponent(navCtrl) {
          _classCallCheck(this, RemoteStatsBoxComponent);

          this.navCtrl = navCtrl;
        }

        _createClass(RemoteStatsBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigate",
          value: function navigate() {
            if (this.url) {
              this.navCtrl.navigateForward(this.url);
            }
          }
        }]);

        return RemoteStatsBoxComponent;
      }();

      RemoteStatsBoxComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      RemoteStatsBoxComponent.propDecorators = {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        number: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      RemoteStatsBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-remote-stats-box",
        template: _raw_loader_remote_stats_box_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remote_stats_box_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], RemoteStatsBoxComponent);
      /***/
    },

    /***/
    "QVeo":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/score/score.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function QVeo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>امتیاز دهید</ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <div class=\"action-container\">\n\n  \n  <div class=\"action-content d-flex flex-column align-items-center justify-content-center h-100\">\n    <label class=\"small-text light-text number-text\">\n    بر اساس ارزیابی خود از کیفیت جلسه از ۱ تا ۵ به مشاور خود امتیاز دهید.\n  </label>\n  <div class=\"stars-container d-flex ltr justify-content-center\">\n    <ion-icon class=\"star\"  [name]=\"(score >= number)?'star':'star-outline'\" *ngFor=\"let number of [1,2,3,4,5]\" (click)=\"setScore(number)\"></ion-icon>\n  </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"actions-wrapper\">\n      <app-submit-button [disabled]=\"score==null\"  text=\"ثبت امتیاز\" (submitted)=\"submit()\">\n\n      </app-submit-button>\n    </div>\n  </div>\n  \n</div>\n</ion-content>";
      /***/
    },

    /***/
    "R/5v":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-icon/select-icon.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R5v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>انتخاب آیکون</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"text-center\">\n  <ion-button (click)=\"dismiss(icon)\" *ngFor=\"let icon of icons\" class=\"m-2 icon-button\">\n    <ion-icon class=\"icon\" [name]=\"icon\" ></ion-icon>\n  </ion-button>\n  \n  </ion-content>";
      /***/
    },

    /***/
    "S0U/":
    /*!***********************************************************************************!*\
      !*** ./src/app/common/remote-stats-container/remote-stats-container.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: RemoteStatsContainerComponent */

    /***/
    function S0U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteStatsContainerComponent", function () {
        return RemoteStatsContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_remote_stats_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./remote-stats-container.component.html */
      "7Tm6");
      /* harmony import */


      var _remote_stats_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./remote-stats-container.component.scss */
      "Z9HY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RemoteStatsContainerComponent = /*#__PURE__*/function () {
        function RemoteStatsContainerComponent() {
          _classCallCheck(this, RemoteStatsContainerComponent);
        }

        _createClass(RemoteStatsContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RemoteStatsContainerComponent;
      }();

      RemoteStatsContainerComponent.ctorParameters = function () {
        return [];
      };

      RemoteStatsContainerComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RemoteStatsContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-remote-stats-container',
        template: _raw_loader_remote_stats_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remote_stats_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RemoteStatsContainerComponent);
      /***/
    },

    /***/
    "S3x2":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-list/session-list.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S3x2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list *ngFor=\"let sessionList of sessionListArray\">\n  <div *ngIf=\"sessionList.title\" class=\"row\">\n    <div class=\"col-12 list-header\">\n      <span class=\"normal-text\">{{\n        sessionList.title + \" (\" + sessionList.count + \")\"\n      }}</span>\n    </div>\n  </div>\n  <div *ngIf=\"sessionList.count < 1\" class=\"d-flex justify-content-center shadow-item session-list-item\">\n    <ion-icon  name=\"ellipsis-horizontal-outline\"></ion-icon>\n  </div>\n  <app-session-list-item\n    [providerPerspective]=\"providerPerspective\"\n    [session]=\"session\"\n    *ngFor=\"let session of sessionList.sessions\"\n  >\n  </app-session-list-item>\n</ion-list>\n";
      /***/
    },

    /***/
    "SUno":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-provider-category/select-provider-category.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SUno(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>انتخاب زمینه مشاوره</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\"  >\n      <ion-list>\n        <ion-item\n          button\n          class=\"shadow-item\"\n          *ngFor=\"let group of providerGroups\"\n          (click)=\"selectCategory(group)\"\n        >\n         <ion-icon\n              slot=\"start\"\n              [name]=\"group.icon_name\"\n              class=\"category-icon large-text ml-2\"\n            ></ion-icon>\n            <span class=\"category-name\">\n              {{group.name}}\n            </span>\n          \n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"actions\">\n      \n      \n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "SdEw":
    /*!***************************************************************************************!*\
      !*** ./src/app/common/random-provider-avatars/random-provider-avatars.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function SdEw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.random-avatars-container {\n  display: flex;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  justify-content: center;\n}\n.random-avatars-container .random-avatar-col {\n  display: inline;\n}\n.random-avatars-container .random-avatar-col.z-1 {\n  z-index: 4;\n}\n.random-avatars-container .random-avatar-col.z-1 .random-avatar {\n  height: 80px;\n  width: 80px;\n}\n.random-avatars-container .random-avatar-col.z-2 {\n  z-index: 3;\n}\n.random-avatars-container .random-avatar-col.z-2 .random-avatar {\n  height: 65px;\n  width: 65px;\n  opacity: 80%;\n}\n.random-avatars-container .random-avatar-col.z-3 {\n  z-index: 2;\n}\n.random-avatars-container .random-avatar-col.z-3 .random-avatar {\n  height: 52px;\n  width: 52px;\n  opacity: 60%;\n}\n.random-avatars-container .random-avatar-col.z-4 {\n  z-index: 1;\n}\n.random-avatars-container .random-avatar-col.z-4 .random-avatar {\n  height: 40px;\n  width: 40px;\n  opacity: 40%;\n}\n.random-avatars-container .random-avatar-col .random-avatar {\n  margin: 0 -10px;\n  box-shadow: 0px 0px 16px 1px #71bcc1;\n  -webkit-box-shadow: 0px 0px 16px 1px #71bcc1;\n  -moz-box-shadow: 0px 0px 16px 1px #71bcc1;\n  background-size: cover;\n  border-radius: 50px;\n  -webkit-border-radius: 50px;\n  -moz-border-radius: 50px;\n  --border-radius:$radius;\n  border: 1px solid #98d9e2;\n}\n.random-avatars-container .random-avatar-col .random-avatar.sk {\n  box-shadow: 0px 0px 0 0 transparent;\n  -webkit-box-shadow: 0px 0px 0 0 transparent;\n  -moz-box-shadow: 0px 0px 0 0 transparent;\n  border: none;\n  background-size: 750px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMvcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBQWhEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFrREY7QUFqREU7RUFDRSxlQUFBO0FBbURKO0FBbERJO0VBQ0ksVUFBQTtBQW9EUjtBQW5EUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBcURaO0FBakRNO0VBQ0ksVUFBQTtBQW1EVjtBQWxEUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW9EWjtBQWpETTtFQUNJLFVBQUE7QUFtRFY7QUFsRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFvRFo7QUFqRE07RUFDSSxVQUFBO0FBbURWO0FBbERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBb0RaO0FBakRJO0VBQ0ksZUFBQTtFQ1JQLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSx5Q0FBQTtFRFFLLHNCQUFBO0VDQUwsbUJEQzRCO0VDQTVCLDJCQUFBO0VBQ0csd0JERHlCO0VDRXpCLHVCQUFBO0VEREUseUJBQUE7QUF3RE47QUF2RE07RUNiTCxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RURjTyxZQUFBO0VBQ0Esc0JBQUE7QUEwRFIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMvcmFuZG9tLXByb3ZpZGVyLWF2YXRhcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb25cIjtcbi5yYW5kb20tYXZhdGFycy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAucmFuZG9tLWF2YXRhci1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAmLnotMSB7XG4gICAgICAgIHotaW5kZXg6IDQ7XG4gICAgICAgIC5yYW5kb20tYXZhdGFye1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgICAmLnotMiB7XG4gICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgLnJhbmRvbS1hdmF0YXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDgwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi56LTMge1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIC5yYW5kb20tYXZhdGFye1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgICBvcGFjaXR5OiA2MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuei00IHtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAucmFuZG9tLWF2YXRhcntcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogNDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgLnJhbmRvbS1hdmF0YXIge1xuICAgICAgICBtYXJnaW46MCAtMTBweDtcbiAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3ctZnVsbCgwcHgsIDBweCwgMTZweCwgMXB4LCAkcHJpbWFyeS1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1MHB4KTtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzk4ZDllMjtcbiAgICAgICYuc2tcbiAgICAgIHtcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdy1mdWxsKDBweCwgMHB4LCAwLCAwLCB0cmFuc3BhcmVudCk7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDc1MHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var _common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./common/change-password/change-password.component */
      "kVPr");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common/deposit/deposit.component */
      "wDsb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _services_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/provider.service */
      "gs/X");
      /* harmony import */


      var _common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./common/static/contact/contact.component */
      "OFPZ");
      /* harmony import */


      var _common_static_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./common/static/about/about.component */
      "uI3J");
      /* harmony import */


      var _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./common/static/terms/terms.component */
      "rywU");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./models/user */
      "2hxB");
      /* harmony import */


      var _services_smart_audio_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/smart-audio.service */
      "snxI");
      /* harmony import */


      var src_app_services_im_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/im.service */
      "K4UH");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/notification.service */
      "OC8m");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! gsap/MorphSVGPlugin */
      "Ci6W");
      /* harmony import */


      var gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/alert.service */
      "3LUQ");
      /* harmony import */


      var gsap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! gsap */
      "z/o8");
      /* harmony import */


      var _services_shared_resources_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./services/shared-resources.service */
      "6FpD");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, statusBar, authService, navCtrl, sharedResourceService, alertService, menu, env, notifactions, imService, smartAudio, actionSheet, modalController, providerService, userService, notifService, sessionsManager) {
          var _this35 = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.statusBar = statusBar;
          this.authService = authService;
          this.navCtrl = navCtrl;
          this.sharedResourceService = sharedResourceService;
          this.alertService = alertService;
          this.menu = menu;
          this.env = env;
          this.notifactions = notifactions;
          this.imService = imService;
          this.smartAudio = smartAudio;
          this.actionSheet = actionSheet;
          this.modalController = modalController;
          this.providerService = providerService;
          this.userService = userService;
          this.notifService = notifService;
          this.sessionsManager = sessionsManager;
          this.user = null;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
          this.getName = _models_user__WEBPACK_IMPORTED_MODULE_12__["User"].getName;
          this.activitySwitch = null;
          this.roleDetectedSubscription = null;
          this.splashing = true;
          this.role = null;
          this.splashCompleteCallback = this.splashCompleteCallback.bind(this);
          this.initializeApp();
          this.loadUserData();
          this.authService.loggedIn.subscribe(function (result) {
            _this35.loadUserData();
          });
          this.authService.fetchedUser.subscribe(function (user) {
            _this35.loadUserData();
          });
        }

        _createClass(AppComponent, [{
          key: "toggleActivitySwitch",
          value: function toggleActivitySwitch(toggle) {
            var _this36 = this;

            toggle.disabled = true;
            this.env.somethingIsPending("toggling provider activity switch");
            this.providerService.toggleActivitySwitch(!toggle.checked).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(false);
            })).subscribe(function (result) {
              _this36.env.somethingIsDonePending("toggling provider activity switch");

              toggle.disabled = false;

              if (!result) {
                toggle.checked = !toggle.checked;
              }
            });
          }
        }, {
          key: "loadUserData",
          value: function loadUserData() {
            var _this37 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.authService.isAuthenticated()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(false);
            })).subscribe(function (result) {
              if (result) {
                _this37.authService.getUser().then(function (result) {
                  _this37.user = result;

                  _this37.userService.balanceShared.request();

                  _this37.userSubject.next(result);
                });
              }
            });

            if (this.roleDetectedSubscription) {
              this.roleDetectedSubscription.unsubscribe();
            }

            this.roleDetectedSubscription = this.authService.roleDetected.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000)).subscribe(function (roleId) {
              _this37.authService.isAuthenticated().then(function (result) {
                if (result) {
                  _this37.role = roleId;

                  if (_this37.role == _this37.env.PROVIDER_ROLE_ID) {
                    _this37.providerService.getActivitySwitch().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(-1);
                    })).subscribe(function (result) {
                      if (result != -1) {
                        _this37.activitySwitch = result;
                      }
                    });
                  }
                }
              });
            });
          }
        }, {
          key: "appPages",
          value: function appPages() {
            var menuItems = [];

            if (this.role != null) {
              if (this.role == this.env.USER_ROLE_ID) {
                menuItems = [{
                  title: "درخواست مشاوره",
                  url: "/provider-categories",
                  icon: "home-outline"
                }, {
                  title: "مشاوره های من",
                  url: "/usr-reservations",
                  icon: "cart-outline"
                }, {
                  title: "تاریخچه درخواست ها",
                  url: "/usr-request-log",
                  icon: "archive-outline"
                }, {
                  title: "مشاورین نشان شده",
                  url: "/usr/favorites",
                  icon: "star-outline"
                }, {
                  title: "تخفیف",
                  url: "/affiliate-code",
                  icon: "color-filter-outline"
                }, {
                  title: "پرداخت ها",
                  url: "/user-payments/".concat(this.user.id),
                  icon: 'receipt-outline'
                }];
              } else if (this.role == this.env.PROVIDER_ROLE_ID) {
                menuItems = [{
                  title: "مشاوره های من",
                  url: "/pvd-reservations",
                  icon: "home-outline"
                }, {
                  title: "درخواست های جدید",
                  url: "/pvd-active-requests",
                  icon: "home-outline",
                  badge_value: this.sessionsManager.myActiveRequestsShared.resource().length,
                  badge_condition: this.sessionsManager.myActiveRequestsShared.resource() && this.sessionsManager.myActiveRequestsShared.resource().length > 0
                }, {
                  title: "ساعات کاری",
                  url: "/pvd-manage-available-hours",
                  icon: "calendar-outline"
                }, {
                  title: "گزارش درآمد",
                  url: "/pvd-income-report",
                  icon: "calculator-outline"
                }, {
                  title: "تاریخچه درخواست ها",
                  url: "/pvd-request-log",
                  icon: "archive-outline"
                }, {
                  title: "پروفایل",
                  url: "/profile",
                  icon: "person-outline"
                }];
              } else if (this.role == this.env.ADMIN_ROLE_ID) {
                menuItems = [{
                  title: "داشبورد",
                  url: "/adm-dashboard",
                  icon: "home-outline"
                }, {
                  title: "کاربران",
                  url: "/adm-users",
                  icon: "people-outline"
                }, {
                  title: "مشاورین",
                  url: "/adm-providers",
                  icon: "list-outline"
                }, {
                  title: "پروفایل",
                  url: "/profile",
                  icon: "person-outline"
                }];
              }
            }

            return menuItems;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.env.SPLASH_ENABLED) {
              this.splashing = false;
            }
          }
        }, {
          key: "profile",
          value: function profile() {
            if (this.user && this.user.role_id != this.env.USER_ROLE_ID) {
              this.navCtrl.navigateRoot(["/profile"]);
              this.menu.close();
            }
          }
        }, {
          key: "animateSplash",
          value: function animateSplash() {
            var _this38 = this;

            if (!this.env.SPLASH_ENABLED) {
              this.splashing = false;
              return;
            }

            var animation = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Observable"](function (observer) {
              //gsap.registerPlugin(DrawSVGPlugin);
              var anim = new gsap__WEBPACK_IMPORTED_MODULE_24__["TimelineMax"]();
              gsap__WEBPACK_IMPORTED_MODULE_24__["gsap"].registerPlugin(gsap_MorphSVGPlugin__WEBPACK_IMPORTED_MODULE_19__["MorphSVGPlugin"]);
              var shapes = ".hands-svg";
              var tl = gsap__WEBPACK_IMPORTED_MODULE_24__["gsap"].timeline();
              anim.to("#frown-svg", {
                morphSVG: "#smile-svg",
                y: 0,
                duration: 2,
                ease: "power4.inOut"
              }, 1);
              anim.to(".eyes", {
                y: 0,
                ease: "bounce",
                duration: 1,
                stagger: 0.1
              }, 3);
              anim.to("#right-hand-svg", {
                opacity: 1,
                x: 10,
                y: 10,
                duration: 4,
                ease: "expo.out"
              }, 3);
              anim.to("#left-hand-svg", {
                opacity: 1,
                x: -10,
                y: 10,
                duration: 4,
                ease: "expo.out"
              }, 3);
              anim.to("#left-eye", {
                attr: {
                  ry: 1
                },
                duration: 0.2,
                ease: "power4.in"
              }, 5).to("#left-eye", {
                attr: {
                  ry: 15.5
                },
                ease: "power4.out",
                duration: 0.2
              }, 5.3);
              anim.to(".splash-svg", {
                opacity: 0,
                scale: 0.2,
                duration: 0.7,
                ease: "elastic.in(1, 1)",
                onComplete: _this38.splashCompleteCallback,
                onCompleteParams: [observer]
              }, 6); //anim.fromTo("#right-hand-svg", {opacity:0, x:100, y:100}, {opacity:1, x:0, y:0, duration:2},0)
            });
            animation.subscribe(null, null, function () {
              console.log("splash complete");
            });
          }
        }, {
          key: "splashCompleteCallback",
          value: function splashCompleteCallback(toNext) {
            this.splashing = false;
            toNext.next();
            toNext.complete();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this39 = this;

            this.platform.ready().then(function () {
              _this39.statusBar.styleDefault();
            });
            this.smartAudio.preload("beep1", "assets/audio/beep1.mp3");
            this.smartAudio.preload("ringback-tone", "assets/audio/ringback-tone.ogg");
            this.smartAudio.preload("ringing", "assets/audio/ringing.mp3");
          }
        }, {
          key: "loadTermsPage",
          value: function loadTermsPage() {
            this.loadStaticPage(_common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_11__["TermsComponent"], {
              providerPerspective: this.role == this.env.PROVIDER_ROLE_ID ? true : false
            }).subscribe();
          }
        }, {
          key: "loadChangePassword",
          value: function loadChangePassword() {
            this.alertService.presentModal(_common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe();
          }
        }, {
          key: "loadQuestionAnswerPage",
          value: function loadQuestionAnswerPage() {
            this.navCtrl.navigateRoot(['/questions-and-answers', this.role, this.user.id]);
            this.menu.close();
          }
        }, {
          key: "loadAffiliatePage",
          value: function loadAffiliatePage() {
            this.navCtrl.navigateRoot(['/affiliate-code']);
            this.menu.close();
          }
        }, {
          key: "loadAboutPage",
          value: function loadAboutPage() {
            this.loadStaticPage(_common_static_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]).subscribe();
          }
        }, {
          key: "loadContactPage",
          value: function loadContactPage() {
            this.loadStaticPage(_common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]).subscribe();
          }
        }, {
          key: "loadStaticPage",
          value: function loadStaticPage(component) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.modalController.create({
              component: component,
              componentProps: props
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.present());
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.alertService.presentSuccess("از حساب کاربری خود خارج شده اید.");
            this.navCtrl.navigateRoot("/login");
          }
        }, {
          key: "initiateLogout",
          value: function initiateLogout() {
            this.presentLogoutConfirmation().subscribe();
          }
        }, {
          key: "presentLogoutConfirmation",
          value: function presentLogoutConfirmation() {
            var _this40 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.actionSheet.create({
              mode: "ios",
              buttons: [{
                text: "خروج",
                role: "destructive",
                handler: function handler() {
                  _this40.logout();
                }
              }, {
                text: "انصراف",
                role: "cancel",
                handler: function handler() {}
              }]
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.present());
            }));
          }
        }, {
          key: "openAddCredit",
          value: function openAddCredit() {
            this.presentDepositModal().subscribe();
          }
        }, {
          key: "presentDepositModal",
          value: function presentDepositModal() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(this.modalController.create({
              component: _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"],
              componentProps: {}
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(modal.present());
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__["StatusBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["NavController"]
        }, {
          type: _services_shared_resources_service__WEBPACK_IMPORTED_MODULE_25__["SharedResourcesService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_23__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["MenuController"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_17__["EnvService"]
        }, {
          type: _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"]
        }, {
          type: src_app_services_im_service__WEBPACK_IMPORTED_MODULE_14__["IMService"]
        }, {
          type: _services_smart_audio_service__WEBPACK_IMPORTED_MODULE_13__["SmartAudioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ModalController"]
        }, {
          type: _services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"]
        }, {
          type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_18__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_20__["Platform"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_21__["StatusBar"], _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["NavController"], _services_shared_resources_service__WEBPACK_IMPORTED_MODULE_25__["SharedResourcesService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_23__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["MenuController"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_17__["EnvService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"], src_app_services_im_service__WEBPACK_IMPORTED_MODULE_14__["IMService"], _services_smart_audio_service__WEBPACK_IMPORTED_MODULE_13__["SmartAudioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["ModalController"], _services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"], src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]])], AppComponent);
      /***/
    },

    /***/
    "SyN7":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-avatar/user-avatar.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SyN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"avatar-container\">\n  <ion-avatar #avatar [ngClass]=\"(this.hasAvatar && !justContainer)?'':'d-none'\" >\n  \n</ion-avatar>\n<div *ngIf=\"!this.hasAvatar && !justContainer\" >\n  <svg class=\"alt-avatar\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 512 512\"><path d=\"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z\"></path><path d=\"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z\"></path></svg>\n</div>\n</div>\n";
      /***/
    },

    /***/
    "TFAd":
    /*!*****************************************************************!*\
      !*** ./src/app/common/session-list/session-list.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function TFAd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWxpc3Qvc2Vzc2lvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "TxdI":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-list-item/session-list-item.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TxdI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item\n  class=\"shadow-item session-list-item\"\n  (click)=\"navigateToSession()\"\n  [ngClass]=\"getClass()\"\n  button\n  detail=\"false\"\n>\n  <div class=\"d-flex flex-column justify-content-center my-3 h-100 w-100\">\n    <div class=\"d-flex align-items-center justify-content-between\">\n      <div class=\"d-flex align-items-center\">\n        <app-user-avatar [user]=\"user\"> </app-user-avatar>\n        <ion-icon\n          *ngIf=\"false && isActive()\"\n          slot=\"end\"\n          [ngClass]=\"isOnline() ? 'online' : ''\"\n          class=\"online-status ml-2\"\n          name=\"ellipse\"\n        ></ion-icon>\n        <span class=\"peer-name number-text normal-text dark-text d-flex align-items-center\">\n          {{ peerName }}\n        </span>\n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\" session.type == sessionType.TEXT\"\n          name=\"chatbubbles-outline\"\n        ></ion-icon>\n        \n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\" session.type == sessionType.Call\"\n          name=\"call-outline\"\n        ></ion-icon>\n        \n      </div>\n\n      <div class=\"d-flex align-items-center\">\n        \n        <span class=\"session-info-tag ml-1 session-timing-type-text xsmall-text\">\n          {{ sessionTimingTypeText(session) }}\n        </span>\n        <ion-badge\n          *ngIf=\"getUnreadMessages() > 0 && isActive()\"\n          slot=\"end\"\n          color=\"primary\"\n          mode=\"ios\"\n          slot=\"end\"\n          class=\"unread-count-badge\"\n          >{{ getUnreadMessages() }}</ion-badge\n        >\n        <ion-button *ngIf=\"isActive()\" (click)=\"openInfoModal($event)\" class=\"icon-button session-info-icon-button mr-1\">\n          <ion-icon slot=\"icon-only\" name=\"settings-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"session-info-summary\" *ngIf=\"isEnded() || isActive()\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"ml-3 light-text small-text\">{{\n          getSessionDateTimeText()\n        }}</span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"time-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionTime() }}</span\n            >\n          </div>\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"calendar-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionDate() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"session-info-summary\" *ngIf=\"isReserved()\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"ml-3 light-text small-text\">\n          درخواست رزرو برای\n        </span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"time-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionReservedTime() }}</span\n            >\n          </div>\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"calendar-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionReservedDate() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"session-info-summary\" *ngIf=\"true || isActive() || isEnded()\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"light-text ml-3 small-text\">\n          {{ getSessionDurationText() }}\n        </span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"hourglass-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionDuration() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"session-info-summary\" *ngIf=\" isActive() || isEnded() || !providerPerspective\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"light-text ml-3 small-text\">\n          هزینه\n        </span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"cash-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionTotalFee() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-item>\n";
      /***/
    },

    /***/
    "VOgj":
    /*!*****************************************************************!*\
      !*** ./src/app/common/submit-button/submit-button.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SubmitButtonComponent */

    /***/
    function VOgj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmitButtonComponent", function () {
        return SubmitButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_submit_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./submit-button.component.html */
      "HeTM");
      /* harmony import */


      var _submit_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./submit-button.component.scss */
      "XO9+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SubmitButtonComponent = /*#__PURE__*/function () {
        function SubmitButtonComponent() {
          _classCallCheck(this, SubmitButtonComponent);

          this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(SubmitButtonComponent, [{
          key: "submit",
          value: function submit() {
            this.submitted.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SubmitButtonComponent;
      }();

      SubmitButtonComponent.ctorParameters = function () {
        return [];
      };

      SubmitButtonComponent.propDecorators = {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        submitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        isWaiting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isInlineAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SubmitButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-submit-button',
        template: _raw_loader_submit_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_submit_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SubmitButtonComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app class=\"container-fluid\" [ngClass]=\"(splashing)?'splash-container':''\">\n  <svg *ngIf=\"splashing\" (load)=\"animateSplash()\" class=\"splash-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"226\" viewBox=\"-22 10 360 226\">\n  \n    \n    <path id=\"right-hand-svg\" class=\"cls-1 hands-svg\" d=\"M311,29v84s1.932,22.067-15,39-67,67-67,67-15.729,16.819-26-3-12-25-12-25-8.758-19.875,8-36,65-59,65-59,10.171-4.829,16,1,3.116,13.884,0,17l-25,25s-6.754,8.478-1,9,6.659,0.86,15-7,20.223-19.195,23-25,7.989-12.574-6-28c-2.364-2.67-4-3.379-4-8V29s-1.243-14,14-14S311,29,311,29Z\"/>\n    <path id=\"left-hand-svg\" data-name=\"Shape 1 copy\" class=\"hands-svg cls-1\" d=\"M0.062,29.023V113.16s-1.927,22.1,14.958,39.064l66.812,67.109s15.685,16.847,25.927-3,11.966-25.041,11.966-25.041,8.734-19.908-7.977-36.059-64.818-59.1-64.818-59.1-10.142-4.837-15.955,1-3.107,13.907,0,17.027L55.905,139.2s6.735,8.492,1,9.015-6.64.862-14.958-7.011-20.166-19.227-22.935-25.041-7.966-12.6,5.983-28.046c2.357-2.675,3.989-3.384,3.989-8.013V29.023S30.22,15,15.02,15,0.062,29.023.062,29.023Z\"/>\n    <path  class=\"cls-1 lips-svg\" id=\"smile-svg\" d=\"M69,57s61.17,55.412,127,26c22.912-11.322,26.259-17.465,37-30s23-6,23-6,13.678,1.263,0,19-27.663,34.519-53,43-57.715,8.871-89-4C80.052,91.265,57.362,65.537,54,61s-5.888-8.437-3-11S57.626,46.89,69,57Z\"/>\n    <path class=\"lips-svg\" id=\"frown-svg\" d=\"M69.219,103.245S130.29,47.659,196.013,77.163c22.875,11.358,26.217,17.519,36.94,30.094s22.963,6.019,22.963,6.019,13.656-1.267,0-19.06S228.3,59.589,203,51.082s-57.621-8.9-88.856,4.013C80.253,68.873,57.6,94.681,54.243,99.232s-5.878,8.463-3,11.034S57.864,113.386,69.219,103.245Z\"/>\n\n    \n    <ellipse id=\"left-eye\" class=\"eyes\" cx=\"137.5\" cy=\"15.5\" rx=\"15.5\" ry=\"15.5\" />\n    <circle id=\"right-eye\" data-name=\"Ellipse 1 copy\" class=\"cls-2 eyes\" cx=\"175.5\" cy=\"15.5\" r=\"15.5\"/>\n    </svg>\n    \n  <ion-menu *ngIf=\"!splashing\" contentId=\"main-content\" type=\"overlay\" side=\"end\">\n    <div class=\"d-flex flex-column h-100 menu-content\">\n      <div class=\"flex-column align-items-center d-flex mt-4\">\n        <a (click)=\"profile()\" class=\"flex-column align-items-center d-flex\">\n          <app-user-avatar\n            class=\"large-sized avatar\"\n            [userObservable]=\"userSubject\"\n          ></app-user-avatar>\n          <span *ngIf=\"user\" class=\"normal-text number-text light-text mt-2\">\n            {{\n              user.role_id == this.env.USER_ROLE_ID ? user.phone : getName(user)\n            }}\n          </span>\n        </a>\n        <div\n          class=\"credit-container w-100 d-flex align-items-center mt-3 justify-content-around\"\n          *ngIf=\"\n            role &&\n            this.userService.balanceShared.resource() != null &&\n            role == this.env.USER_ROLE_ID\n          \"\n        >\n          <div class=\"d-flex align-items-center justify-content-center\">\n            <span class=\"small-text ml-2 light-text\"> اعتبار:</span>\n            <span class=\"credit-number normal-text primary-text number-text ltr\"\n              >{{ this.userService.balanceShared.resource().spendable }}\n            </span>\n            <span class=\"small-text mr-1 light-text\">تومان</span>\n          </div>\n          <ion-button\n            fill=\"clear\"\n            class=\"small-text\"\n            size=\"small\"\n            (click)=\"openAddCredit()\"\n          >\n            <ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n            افزایش اعتبار\n          </ion-button>\n        </div>\n        <div\n          class=\"d-flex align-items-center mt-2 justify-content-center\"\n          *ngIf=\"role && role == this.env.PROVIDER_ROLE_ID\"\n        >\n          <span class=\"small-text light-text\">فعال</span>\n          <ion-toggle\n            [disabled]=\"activitySwitch == null\"\n            [(ngModel)]=\"activitySwitch\"\n            #activityToggle\n            (click)=\"toggleActivitySwitch(activityToggle)\"\n          ></ion-toggle>\n          <span class=\"small-text light-text\">غیرفعال</span>\n        </div>\n      </div>\n\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let p of this.appPages()\">\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label class=\"normal-text\">\n              {{ p.title }}\n            </ion-label>\n            <ion-badge color=\"primary\" mode=\"ios\" *ngIf=\"p.badge_value && p.badge_condition\">{{p.badge_value}}</ion-badge>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-item button (click)=\"loadQuestionAnswerPage()\">\n          <ion-icon slot=\"start\" name=\"help-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            پرسش و پاسخ\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadChangePassword()\">\n          <ion-icon slot=\"start\" name=\"finger-print-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            تغییر گذرواژه\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadTermsPage()\">\n          <ion-icon slot=\"start\" name=\"trail-sign-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            قوانین و مقررات\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadAboutPage()\">\n          <ion-icon slot=\"start\" name=\"information-circle-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            درباره حامی لاین\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"loadContactPage()\">\n          <ion-icon slot=\"start\" name=\"at-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            ارتباط با ما\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"initiateLogout()\">\n          <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n          <ion-label class=\"normal-text\">\n            خروج\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-menu>\n  <ion-router-outlet\n    *ngIf=\"!splashing\"\n    id=\"main-content\"\n    class=\"content\"\n  ></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "WIZs":
    /*!*************************************************************!*\
      !*** ./src/app/common/user-avatar/user-avatar.component.ts ***!
      \*************************************************************/

    /*! exports provided: UserAvatarComponent */

    /***/
    function WIZs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function () {
        return UserAvatarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-avatar.component.html */
      "SyN7");
      /* harmony import */


      var _user_avatar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-avatar.component.scss */
      "+PLf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");

      var UserAvatarComponent = /*#__PURE__*/function () {
        function UserAvatarComponent(env, changeDetection) {
          _classCallCheck(this, UserAvatarComponent);

          this.env = env;
          this.changeDetection = changeDetection;
          this.hasAvatar = false;
          this.justContainer = false;
        }

        _createClass(UserAvatarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            this.img = new Image();

            if (this.userObservable != null) {
              this.userObservable.subscribe(function (user) {
                _this41.loadImage(user.avatar_thumbnail);
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.user != null) {
              var avatarUrl = this.user.avatar_thumbnail;

              if (avatarUrl != null) {
                this.loadImage(avatarUrl);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.userObservable != null) {
              this.userObservable.unsubscribe();
            }
          }
        }, {
          key: "loadImage",
          value: function loadImage(avatarUrl) {
            var _this42 = this;

            this.img.src = this.env.getPublicStorageUrl(avatarUrl);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.img, "load").subscribe(function (result) {
              _this42.avatar.nativeElement.appendChild(_this42.img);

              _this42.hasAvatar = true; //this.changeDetection.detectChanges()
            });
          }
        }]);

        return UserAvatarComponent;
      }();

      UserAvatarComponent.ctorParameters = function () {
        return [{
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      UserAvatarComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        userObservable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        justContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['avatar', {
            "static": false,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      UserAvatarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-user-avatar",
        template: _raw_loader_user_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_avatar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], UserAvatarComponent);
      /***/
    },

    /***/
    "X9GW":
    /*!**************************************!*\
      !*** ./src/app/models/file-model.ts ***!
      \**************************************/

    /*! exports provided: FileModel, FileFetchStatus, AudioPlaybackState, FileUploadStatus */

    /***/
    function X9GW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileModel", function () {
        return FileModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileFetchStatus", function () {
        return FileFetchStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AudioPlaybackState", function () {
        return AudioPlaybackState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadStatus", function () {
        return FileUploadStatus;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var FileModel = /*#__PURE__*/function () {
        function FileModel() {
          _classCallCheck(this, FileModel);

          this.upload_progress = 0;
          this.fetch_progress = 0;
          this.ownerMessage = null;
          this.img_src = null;
          this.audio_src = null;
          this.audio_playback_state = AudioPlaybackState.NOT_PLAYED;
          this.fetchOnSrcRequest = false;
          this.fetchCallback = null;
          this.fetchObject = null;
          this.fetchedSuccessfully = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
          this.audioPlayBackProgress = 0;
        }

        _createClass(FileModel, [{
          key: "imgSrcRequest",
          value: function imgSrcRequest() {
            this.prepareSelfFetch();
            return this.img_src;
          }
        }, {
          key: "audioSrcRequest",
          value: function audioSrcRequest() {
            this.prepareSelfFetch();
            return this.audio_src;
          }
        }, {
          key: "prepareSelfFetch",
          value: function prepareSelfFetch() {
            if (this.fetchOnSrcRequest && this.fetchCallback != null && this.fetchObject != null && this.fetch_status == FileFetchStatus.FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST && this.ownerMessage != null) {
              this.fetchCallback = this.fetchCallback.bind(this.fetchObject);
              this.fetch();
            }
          }
        }, {
          key: "emmitFileProgressHappend",
          value: function emmitFileProgressHappend() {
            if (this.ownerMessage != null && this.ownerMessage.NotifyDirtySubject != null) {
              this.ownerMessage.notifyDirty();
            }
          }
        }, {
          key: "setupAudioListeners",
          value: function setupAudioListeners() {
            var _this43 = this;

            if (this.audio_playback_state == AudioPlaybackState.WAITING_LOAD) {
              this.fetchedSuccessfully.subscribe(function (result) {
                _this43.audio_element.src = _this43.audioSrcRequest();

                _this43.audio_element.play();
              });
            }

            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.audio_element, 'pause').subscribe(function (event) {
              if (_this43.audio_element.ended) {
                _this43.audio_playback_state = AudioPlaybackState.ENDED;
              } else {
                _this43.audio_playback_state = AudioPlaybackState.PAUSED;
              }

              _this43.ownerMessage.notifyDirty();

              _this43.stopSendingAudioPlaybackProgress();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.audio_element, 'play').subscribe(function (event) {
              _this43.audio_playback_state = AudioPlaybackState.PLAYING;

              _this43.ownerMessage.notifyDirty();

              _this43.startSendingAudioPlaybackProgress();
            });
          }
        }, {
          key: "startSendingAudioPlaybackProgress",
          value: function startSendingAudioPlaybackProgress() {
            var _this44 = this;

            this.audioPlayBackProgressIntervalHandle = setInterval(function () {
              var duration = _this44.audio_element.duration;

              if (duration == Infinity) {
                duration = _this44.size / 6000;
              }

              _this44.audioPlayBackProgress = _this44.audio_element.currentTime / duration;

              _this44.ownerMessage.notifyDirty();
            }, 50);
          }
        }, {
          key: "stopSendingAudioPlaybackProgress",
          value: function stopSendingAudioPlaybackProgress() {
            clearInterval(this.audioPlayBackProgressIntervalHandle);
          }
        }, {
          key: "togglePlayAudio",
          value: function togglePlayAudio() {
            switch (this.audio_playback_state) {
              case AudioPlaybackState.NOT_PLAYED:
                this.audio_element = new Audio();

                if (this.fetch_status == FileFetchStatus.FILE_FETCH_STATUS_SUCCESS) {
                  this.audio_element.src = this.audioSrcRequest();
                  this.audio_element.play();
                } else {
                  this.audioSrcRequest();
                  this.audio_playback_state = AudioPlaybackState.WAITING_LOAD;
                  this.ownerMessage.notifyDirty();
                }

                this.setupAudioListeners();
                break;

              case AudioPlaybackState.PAUSED:
                this.audio_element.play();
                break;

              case AudioPlaybackState.ENDED:
                this.audio_element.play();
                break;

              case AudioPlaybackState.PLAYING:
                this.audio_element.pause();
                break;
            }
          }
        }, {
          key: "isPortrait",
          value: function isPortrait() {
            if (this.width < this.height) {
              return true;
            }

            return false;
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this45 = this;

            this.fetch_status = FileFetchStatus.FILE_FETCH_STATUS_FETCHING;
            this.fetchCallback(this.ownerMessage).subscribe(function (output) {
              Object.assign(_this45, output);
              _this45.fetch_status = FileFetchStatus.FILE_FETCH_STATUS_SUCCESS;

              _this45.fetchedSuccessfully.next(_this45);

              _this45.fetchedSuccessfully.complete();
            });
          }
        }]);

        return FileModel;
      }();

      var FileFetchStatus;

      (function (FileFetchStatus) {
        FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_FETCHING"] = 1] = "FILE_FETCH_STATUS_FETCHING";
        FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_SUCCESS"] = 0] = "FILE_FETCH_STATUS_SUCCESS";
        FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_FAILED"] = 2] = "FILE_FETCH_STATUS_FAILED";
        FileFetchStatus[FileFetchStatus["FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST"] = 4] = "FILE_FETCH_STATUS_WAITING_SELF_FETCH_REQUEST";
      })(FileFetchStatus || (FileFetchStatus = {}));

      var AudioPlaybackState;

      (function (AudioPlaybackState) {
        AudioPlaybackState[AudioPlaybackState["NOT_PLAYED"] = 0] = "NOT_PLAYED";
        AudioPlaybackState[AudioPlaybackState["PLAYING"] = 1] = "PLAYING";
        AudioPlaybackState[AudioPlaybackState["PAUSED"] = 2] = "PAUSED";
        AudioPlaybackState[AudioPlaybackState["ENDED"] = 3] = "ENDED";
        AudioPlaybackState[AudioPlaybackState["WAITING_LOAD"] = 4] = "WAITING_LOAD";
      })(AudioPlaybackState || (AudioPlaybackState = {}));

      var FileUploadStatus;

      (function (FileUploadStatus) {
        FileUploadStatus[FileUploadStatus["FILE_UPLOAD_STATUS_UPLOADING"] = 1] = "FILE_UPLOAD_STATUS_UPLOADING";
        FileUploadStatus[FileUploadStatus["FILE_UPLOAD_STATUS_SUCCESS"] = 0] = "FILE_UPLOAD_STATUS_SUCCESS";
        FileUploadStatus[FileUploadStatus["FILE_UPLOAD_STATUS_FAIL"] = 2] = "FILE_UPLOAD_STATUS_FAIL"; //
      })(FileUploadStatus || (FileUploadStatus = {}));
      /***/

    },

    /***/
    "XO9+":
    /*!*******************************************************************!*\
      !*** ./src/app/common/submit-button/submit-button.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function XO9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdWJtaXQtYnV0dG9uL3N1Ym1pdC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Xzsu":
    /*!***************************************************************!*\
      !*** ./src/app/common/date-picker/date-picker.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Xzsu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Y+EJ":
    /*!*************************************************!*\
      !*** ./src/app/services/file-helper.service.ts ***!
      \*************************************************/

    /*! exports provided: FileHelperService */

    /***/
    function YEJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileHelperService", function () {
        return FileHelperService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");

      var FileHelperService = /*#__PURE__*/function () {
        function FileHelperService(http, env, androidPermissions, platform, auth) {
          _classCallCheck(this, FileHelperService);

          this.http = http;
          this.env = env;
          this.androidPermissions = androidPermissions;
          this.platform = platform;
          this.auth = auth;
          this.imageMimeTypes = ["image/jpeg", "image/gif", "image/png", "image/svg", "image/svg+xml"];
          this.audioMimeTypes = ["audio/webm"];
        }

        _createClass(FileHelperService, [{
          key: "uploadImage",
          value: function uploadImage(image) {
            return this.uploadToServer(image);
          }
        }, {
          key: "uploadUserAvatar",
          value: function uploadUserAvatar(image) {
            return this.uploadAvatarToServer(image);
          }
        }, {
          key: "processImageProperties",
          value: function processImageProperties(image) {
            var _this46 = this;

            image.name = this.getFileName(image.content);
            return this.getMimeType(image, this.imageMimeTypes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (result) {
              image.mime_type = result;
              image.img_src = URL.createObjectURL(image.content);
              return _this46.getImageDimensions(image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
          }
        }, {
          key: "downloadImage",
          value: function downloadImage(image) {
            return this.downloadFromServer(image, 'files/downloadMessageFile/');
          }
        }, {
          key: "downloadAudio",
          value: function downloadAudio(audio) {
            return this.downloadFromServer(audio, 'files/downloadMessageFile/');
          }
        }, {
          key: "downloadVerificationDocument",
          value: function downloadVerificationDocument(file) {
            return this.downloadFromServer(file, 'providers/downloadVerificationDocument/', 'image/jpeg');
          }
        }, {
          key: "getFileName",
          value: function getFileName(file) {
            return file.name;
          }
        }, {
          key: "uploadAudio",
          value: function uploadAudio(audio) {
            return this.uploadToServer(audio);
          }
        }, {
          key: "getImageDimensions",
          value: function getImageDimensions(image) {
            var img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = image.img_src;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(img, "load").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
              var e = event.target;
              image.height = e.height;
              image.width = e.width;
              return image;
            }));
          }
        }, {
          key: "getMimeType",
          value: function getMimeType(file, allowedMimeTypes) {
            var observable = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (observer) {
              var reader = new FileReader();

              reader.onload = function (event) {
                var parts = event.target.result.split(",");
                var mimeTemp = /^data:(image\/[-+a-z0-9.]+);base64/.exec(parts[0]);
                var mime = null;

                if (mimeTemp && mimeTemp.length > 1) {
                  mime = mimeTemp[1];
                }

                if (allowedMimeTypes.includes(mime)) {
                  observer.next(mime);
                  observer.complete();
                } else {
                  observer.error("error");
                }
              };

              reader.readAsDataURL(file.content);
            });
            return observable;
          }
        }, {
          key: "uploadToServer",
          value: function uploadToServer(file) {
            var _this47 = this;

            var url = "files/uploadMessageFile";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (token) {
              var formData = new FormData();
              formData.append("file", file.content, file.name);
              return _this47.http.post(_this47.env.API_URL + url, formData, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json"
                },
                reportProgress: true,
                observe: 'events'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return _this47.getEventMessage(result, file);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return result.body;
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
          }
        }, {
          key: "uploadVerifciationDocument",
          value: function uploadVerifciationDocument(file, title) {
            var _this48 = this;

            var url = "providers/uploadVerificationDocument";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (token) {
              var formData = new FormData();
              formData.append("file", file.content, file.name);
              formData.append('title', title);
              return _this48.http.post(_this48.env.API_URL + url, formData, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json"
                },
                reportProgress: true,
                observe: 'events'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return _this48.getEventMessage(result, file);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return result.body;
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
          }
        }, {
          key: "uploadAvatarToServer",
          value: function uploadAvatarToServer(file) {
            var _this49 = this;

            var url = "files/uploadAvatar";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (token) {
              var formData = new FormData();
              formData.append("file", file.content, file.name);
              return _this49.http.post(_this49.env.API_URL + url, formData, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json"
                },
                reportProgress: true,
                observe: 'events'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return _this49.getEventMessage(result, file);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return result.body;
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
          }
        }, {
          key: "isImageMime",
          value: function isImageMime(mime) {
            return this.imageMimeTypes.includes(mime);
          }
        }, {
          key: "isAudioMime",
          value: function isAudioMime(mime) {
            return this.audioMimeTypes.includes(mime);
          }
        }, {
          key: "downloadFromServer",
          value: function downloadFromServer(file, url) {
            var _this50 = this;

            var mime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var mimeType = mime;

            if (mimeType == null) {
              mimeType = file.mime_type;
            }

            url = url + file.name;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (token) {
              return _this50.http.get(_this50.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: mimeType,
                  "Content-Type": mimeType
                },
                reportProgress: true,
                observe: 'events',
                responseType: "blob"
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return _this50.getEventMessage(result, file);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                return result.body;
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
          }
        }, {
          key: "getEventMessage",
          value: function getEventMessage(event, file) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
              var percentDone = Math.round(100 * event.loaded / event.total);
              file.upload_progress = percentDone;
              file.emmitFileProgressHappend();
            }

            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
              var _percentDone = Math.round(100 * event.loaded / event.total);

              file.fetch_progress = _percentDone;
              file.emmitFileProgressHappend();
            }

            return event;
          }
        }, {
          key: "checkPermission",
          value: function checkPermission() {
            if (this.platform.is("cordova")) {
              return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
                if (result.hasPermission) {
                  return true;
                } else {
                  return false;
                }
              });
            }

            return Promise.resolve(true);
          }
        }, {
          key: "askPermission",
          value: function askPermission() {
            return this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
              if (result.hasPermission) {
                return true;
              }

              return false;
            });
          }
        }]);

        return FileHelperService;
      }();

      FileHelperService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      FileHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], FileHelperService);
      /***/
    },

    /***/
    "YNR+":
    /*!***************************************************************!*\
      !*** ./src/app/common/session-info/session-info.component.ts ***!
      \***************************************************************/

    /*! exports provided: SessionInfoComponent */

    /***/
    function YNR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionInfoComponent", function () {
        return SessionInfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_session_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./session-info.component.html */
      "kWjE");
      /* harmony import */


      var _session_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./session-info.component.scss */
      "cM+S");
      /* harmony import */


      var src_app_models_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/session */
      "m6xN");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/alert.service */
      "3LUQ");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SessionInfoComponent = /*#__PURE__*/function () {
        function SessionInfoComponent(modal, env, sessionsManager, alert, nav, modalController) {
          _classCallCheck(this, SessionInfoComponent);

          this.modal = modal;
          this.env = env;
          this.sessionsManager = sessionsManager;
          this.alert = alert;
          this.nav = nav;
          this.modalController = modalController;
          this.openedFromSessionChat = false;
          this.sessionTypeEnum = src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["SessionType"];
          this.user = null;
          this.waiting = false;
        }

        _createClass(SessionInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.providerPerspective) {
              this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].getName(this.session.user);
              this.user = this.session.user;
              this.avatarUrl = this.env.getPublicStorageUrl(this.session.user.avatar);
            } else {
              this.user = this.session.provider.user;
              this.peerName = _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].getName(this.session.provider.user);
              this.avatarUrl = this.env.getPublicStorageUrl(this.session.provider.user.avatar);
            }
          }
        }, {
          key: "getSessionState",
          value: function getSessionState() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].getStateString(this.session);
          }
        }, {
          key: "getSessionTimingType",
          value: function getSessionTimingType() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].getTimingTypeString(this.session);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modal.dismiss();
          }
        }, {
          key: "getSessionTime",
          value: function getSessionTime(when) {
            switch (when) {
              case "started":
                return this.env.dateStringToJalaliTime(this.session.started);

              case "created":
                return this.env.dateStringToJalaliTime(this.session.created_at);

              case "accepted":
                return this.env.dateStringToJalaliTime(this.session.accepted);

              case "rejected":
              case "ended":
                return this.env.dateStringToJalaliTime(this.session.ended);

              case "requested":
                return this.env.dateStringToJalaliTime(this.session.reserved_from);

              case "requestedTo":
                return this.env.dateStringToJalaliTime(this.session.reserved_to);
            }
          }
        }, {
          key: "getSessionDate",
          value: function getSessionDate(when) {
            switch (when) {
              case "started":
                return this.env.dateStringToJalaliDate(this.session.started);

              case "created":
                return this.env.dateStringToJalaliDate(this.session.created_at);

              case "accepted":
                return this.env.dateStringToJalaliDate(this.session.accepted);

              case "rejected":
              case "ended":
                return this.env.dateStringToJalaliDate(this.session.ended);

              case "requested":
                return this.env.dateStringToJalaliDate(this.session.reserved_from);

              case "requestedTo":
                return this.env.dateStringToJalaliDate(this.session.reserved_to);
            }
          }
        }, {
          key: "isMock",
          value: function isMock() {
            return this.session.mock_session;
          }
        }, {
          key: "isRequested",
          value: function isRequested() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isRequested(this.session);
          }
        }, {
          key: "isReserved",
          value: function isReserved() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isReserved(this.session);
          }
        }, {
          key: "isActive",
          value: function isActive() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isActive(this.session);
          }
        }, {
          key: "isEnded",
          value: function isEnded() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isEnded(this.session);
          }
        }, {
          key: "isRejected",
          value: function isRejected() {
            return src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["Session"].isRejected(this.session);
          }
        }, {
          key: "accept",
          value: function accept() {
            var _this51 = this;

            this.sessionsManager.acceptSession(this.session).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              _this51.alert.presentError("عملیات با مشکل روبرو شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(-1);
            })).subscribe(function (result) {
              if (result != -1) {
                if (_this51.session.timing_type == src_app_models_session__WEBPACK_IMPORTED_MODULE_3__["SessionTimingType"].IMMEDIATE) {
                  _this51.nav.navigateRoot(['/pvd-reservations']);
                }

                _this51.alert.presentSuccess("درخواست رزرو تأیید شد.");
              }

              _this51.dismiss();
            });
          }
        }, {
          key: "reject",
          value: function reject() {
            var _this52 = this;

            this.sessionsManager.rejectSession(this.session).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
              _this52.alert.presentError("عملیات با مشکل روبرو شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            })).subscribe(function (result) {
              if (result != null) {
                _this52.alert.presentSuccess("درخواست رزرو رد شد.");
              }

              _this52.dismiss();
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this53 = this;

            this.sessionsManager.startSession(this.session).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
              _this53.alert.presentError("عملیات با مشکل روبرو شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            })).subscribe(function (result) {
              if (result != null) {
                _this53.alert.presentSuccess("جلسه شروع شد.");
              }

              _this53.dismiss();
            });
          }
        }, {
          key: "end",
          value: function end() {
            var _this54 = this;

            this.sessionsManager.rejectSession(this.session).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
              _this54.alert.presentError("عملیات با مشکل روبرو شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            })).subscribe(function (result) {
              if (result != null) {
                _this54.alert.presentSuccess("جلسه پایان یافت.");
              }

              _this54.dismiss();
            });
          }
        }, {
          key: "request",
          value: function request() {
            var _this55 = this;

            this.waiting = true;
            this.sessionsManager.chechRequestEligibility(this.session.provider.id, this.session.reserved_from, this.session.reserved_to, this.session.duration, this.session.type, this.session.timing_type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              _this55.alert.presentError(_this55.env.serverErrorMessage(error.error['error_code']));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(-1);
            })).subscribe(function (result) {
              if (result != -1) {
                _this55.sessionsManager.usrRequestSession(_this55.session.provider.id, _this55.session.reserved_from, _this55.session.reserved_to, _this55.session.duration, _this55.session.type, _this55.session.timing_type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(-1);
                })).subscribe(function (result) {
                  _this55.waiting = false;

                  if (result == -1) {
                    _this55.alert.presentError("درخواست جلسه مشاوره با مشکل روبرو شد.");
                  } else if (result != null) {
                    _this55.alert.presentSuccess("درخواست جلسه مشاوره ارسال شد.");

                    _this55.nav.navigateBack(["usr-request-log"]);
                  } else {
                    _this55.alert.presentError("قبلا یک در خواست پاسخ داده نشده دارید.");
                  }

                  _this55.dismiss(); //this.nav.navigateBack(["provider/" + this.session.provider.id]);

                });
              } else {
                _this55.dismiss();
              }
            });
          }
        }, {
          key: "calculateSessionDuration",
          value: function calculateSessionDuration() {
            return this.sessionsManager.calculateSessionDuration(this.session);
          }
        }, {
          key: "calculateSessionTotalFee",
          value: function calculateSessionTotalFee() {
            return this.sessionsManager.calculateSessionTotalFee(this.session);
          }
        }, {
          key: "chatHistory",
          value: function chatHistory() {
            if (this.providerPerspective) {
              this.sessionsManager.pvdStartSessionChat(this.session);
            } else {
              this.sessionsManager.usrStartSessionChat(this.session);
            }

            this.dismiss();
          }
        }, {
          key: "score",
          value: function score() {
            var _this56 = this;

            if (!this.session.score) {
              this.sessionsManager.openScoreSession(this.session, this.session.score, function (score) {
                _this56.session.score = score;
              }, this);
            }
          }
        }]);

        return SessionInfoComponent;
      }();

      SessionInfoComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
        }, {
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"]
        }, {
          type: _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_8__["SessionsManagerService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
        }];
      };

      SessionInfoComponent.propDecorators = {
        session: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }],
        providerPerspective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }],
        openedFromSessionChat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }]
      };
      SessionInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-session-info",
        template: _raw_loader_session_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"], _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_8__["SessionsManagerService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]])], SessionInfoComponent);
      /***/
    },

    /***/
    "YoRS":
    /*!***************************************************************!*\
      !*** ./src/app/common/ask-question/ask-question.component.ts ***!
      \***************************************************************/

    /*! exports provided: AskQuestionComponent */

    /***/
    function YoRS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AskQuestionComponent", function () {
        return AskQuestionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ask_question_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ask-question.component.html */
      "c3t1");
      /* harmony import */


      var _ask_question_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ask-question.component.scss */
      "5k3Q");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/public-question-and-answers.service */
      "ybCk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AskQuestionComponent = /*#__PURE__*/function () {
        function AskQuestionComponent(modalController, qaService, alert) {
          _classCallCheck(this, AskQuestionComponent);

          this.modalController = modalController;
          this.qaService = qaService;
          this.alert = alert;
          this.aksing = false;
          this.questionContent = "";
        }

        _createClass(AskQuestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "ask",
          value: function ask() {
            var _this57 = this;

            if (this.questionContent.length > 20) {
              this.qaService.aks(this.questionContent).subscribe(function (result) {
                _this57.alert.presentSuccess("سوال با موفقیت اضافه شد");

                _this57.qaService.questionsShared.request();

                _this57.dismiss();
              });
            }
          }
        }]);

        return AskQuestionComponent;
      }();

      AskQuestionComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }];
      };

      AskQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-ask-question',
        template: _raw_loader_ask_question_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ask_question_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _services_public_question_and_answers_service__WEBPACK_IMPORTED_MODULE_4__["PublicQuestionAndAnswersService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])], AskQuestionComponent);
      /***/
    },

    /***/
    "Z1Qc":
    /*!*****************************************************************************!*\
      !*** ./src/app/common/provider-list-item/provider-list-item.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function Z1Qc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.provider-item-container.online {\n  box-shadow: 0px 0px 11px -4px lime;\n  -webkit-box-shadow: 0px 0px 11px -4px lime;\n  -moz-box-shadow: 0px 0px 11px -4px lime;\n}\n.provider-item-container.online .status-text {\n  color: lime;\n}\n.provider-item-container .avatar {\n  height: 2rem;\n  width: 2rem;\n  background-size: cover;\n  background-position: center center;\n  background-size: cover;\n  background-position: center center;\n  margin-left: 0.8rem;\n  border-radius: 50px;\n}\n.provider-item-container .name {\n  font-size: 0.8rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n.provider-item-container .name .favorite-icon {\n  display: none;\n}\n.provider-item-container .name .favorite-icon.favorite {\n  display: inline-block;\n}\n.provider-item-container .provider-info-tag {\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  --border-radius:$radius;\n  color: white;\n  background-color: #a5dade;\n  padding: 0rem 0.6rem;\n}\n.provider-item-container .provider-info-tag.fee-tag {\n  display: flex;\n  align-items: center;\n  font-family: \"myIranSansFaNum\" !important;\n}\n.provider-item-container .provider-info-tag .provider-tag-icon {\n  margin-left: 0.2rem;\n  --ionicon-stroke-width:34;\n}\n.provider-item-container .category-name {\n  font-size: 0.7rem;\n}\n.provider-item-container .status-text {\n  color: #a5a5a5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcHJvdmlkZXItbGlzdC1pdGVtL3Byb3ZpZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NFO0VDK0JELGtDQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtBRG1CRDtBQWxESTtFQUNFLFdDYVE7QUR1Q2Q7QUE3Q0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQStDSjtBQTdDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUErQ0o7QUE5Q0k7RUFFRSxhQUFBO0FBK0NOO0FBOUNNO0VBRUUscUJBQUE7QUErQ1I7QUEzQ0U7RUNPRCxtQkROMEI7RUNPMUIsMkJEUDBCO0VDUXZCLHdCRFJ1QjtFQ1N2Qix1QkFBQTtFRFJBLFlBQUE7RUFDQSx5QkNsQ2lCO0VEbUNqQixvQkFBQTtBQWdESjtBQS9DSTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBZ0ROO0FBOUNJO0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtBQStDTjtBQTNDRTtFQUNFLGlCQUFBO0FBNkNKO0FBMUNFO0VBQ0UsY0MxQ2M7QURzRmxCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Byb3ZpZGVyLWxpc3QtaXRlbS9wcm92aWRlci1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb24uc2Nzc1wiO1xuLnByb3ZpZGVyLWl0ZW0tY29udGFpbmVyIHtcbiAgJi5vbmxpbmUge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3ctZnVsbCgwcHgsIDBweCwgMTFweCwgLTRweCwgJG9ubGluZS1jb2xvcik7XG4gICAgLnN0YXR1cy10ZXh0IHtcbiAgICAgIGNvbG9yOiAkb25saW5lLWNvbG9yO1xuICAgIH1cbiAgfVxuICAvLyAmLm9mZmxpbmUsICYuaW4tc2Vzc2lvbntcbiAgLy8gICBAaW5jbHVkZSBib3gtc2hhZG93LWZ1bGwoMHB4LCAwcHgsIDExcHgsIC00cHgsICRvZmZsaW5lLWNvbG9yKTtcbiAgLy8gfVxuXG4gIC5hdmF0YXIge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuICAubmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmZhdm9yaXRlLWljb25cbiAgICB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgJi5mYXZvcml0ZVxuICAgICAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm92aWRlci1pbmZvLXRhZyB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygyMHB4KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG4gICAgcGFkZGluZzowcmVtIDAuNnJlbTtcbiAgICAmLmZlZS10YWdcbiAgICB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udE51bSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHJvdmlkZXItdGFnLWljb25cbiAgICB7XG4gICAgICBtYXJnaW4tbGVmdDowLjJyZW07XG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOjM0O1xuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLnN0YXR1cy10ZXh0IHtcbiAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG4gIH1cbn1cbiIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */";
      /***/
    },

    /***/
    "Z25Y":
    /*!**************************************************************************!*\
      !*** ./src/app/common/common-declarations/common-declarations.module.ts ***!
      \**************************************************************************/

    /*! exports provided: CommonDeclarationsModule */

    /***/
    function Z25Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonDeclarationsModule", function () {
        return CommonDeclarationsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _provider_list_item_provider_list_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../provider-list-item/provider-list-item.component */
      "zs2g");
      /* harmony import */


      var _basic_user_profile_basic_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../basic-user-profile/basic-user-profile.component */
      "uNJR");
      /* harmony import */


      var _remote_stats_container_remote_stats_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../remote-stats-container/remote-stats-container.component */
      "S0U/");
      /* harmony import */


      var _remote_stats_box_remote_stats_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../remote-stats-box/remote-stats-box.component */
      "OtR6");
      /* harmony import */


      var _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../answer/answer.component */
      "MrgP");
      /* harmony import */


      var _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../ask-question/ask-question.component */
      "YoRS");
      /* harmony import */


      var _call_call_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../call/call.component */
      "eKhv");
      /* harmony import */


      var _score_score_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../score/score.component */
      "kg6Y");
      /* harmony import */


      var _session_list_item_minimal_session_list_item_minimal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../session-list-item-minimal/session-list-item-minimal.component */
      "OXsI");
      /* harmony import */


      var _random_provider_avatars_random_provider_avatars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../random-provider-avatars/random-provider-avatars.component */
      "DUqy");
      /* harmony import */


      var _submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../submit-button/submit-button.component */
      "VOgj");
      /* harmony import */


      var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../deposit/deposit.component */
      "wDsb");
      /* harmony import */


      var _remote_stats_remote_stats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../remote-stats/remote-stats.component */
      "u7RM");
      /* harmony import */


      var _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../select-provider-category/select-provider-category.component */
      "bPLR");
      /* harmony import */


      var _provider_info_edit_provider_info_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../provider-info-edit/provider-info-edit.component */
      "sL+R");
      /* harmony import */


      var _static_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../static/contact/contact.component */
      "OFPZ");
      /* harmony import */


      var _static_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../static/about/about.component */
      "uI3J");
      /* harmony import */


      var _static_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../static/terms/terms.component */
      "rywU");
      /* harmony import */


      var _additional_info_edit_additional_info_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../additional-info-edit/additional-info-edit.component */
      "FexU");
      /* harmony import */


      var _select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./../select-icon/select-icon.component */
      "eZ8L");
      /* harmony import */


      var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./../date-picker/date-picker.component */
      "9YIV");
      /* harmony import */


      var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./../change-password/change-password.component */
      "kVPr");
      /* harmony import */


      var _session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./../session-info-icon-summary/session-info-icon-summary.component */
      "7VJn");
      /* harmony import */


      var _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./../session-info/session-info.component */
      "YNR+");
      /* harmony import */


      var _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./../user-avatar/user-avatar.component */
      "WIZs");
      /* harmony import */


      var _loading_toolbar_button_loading_toolbar_button_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./../loading-toolbar-button/loading-toolbar-button.component */
      "yZtM");
      /* harmony import */


      var _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./../../directives/ng-var.directive */
      "wl2M");
      /* harmony import */


      var _session_list_session_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./../session-list/session-list.component */
      "1CAP");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _session_list_item_session_list_item_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./../session-list-item/session-list-item.component */
      "OhPj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CommonDeclarationsModule = function CommonDeclarationsModule() {
        _classCallCheck(this, CommonDeclarationsModule);
      };

      CommonDeclarationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_32__["NgModule"])({
        declarations: [_session_list_item_session_list_item_component__WEBPACK_IMPORTED_MODULE_31__["SessionListItemComponent"], _session_list_session_list_component__WEBPACK_IMPORTED_MODULE_28__["SessionListComponent"], _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_27__["NgVarDirective"], _loading_toolbar_button_loading_toolbar_button_component__WEBPACK_IMPORTED_MODULE_26__["LoadingToolbarButtonComponent"], _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_25__["UserAvatarComponent"], _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_24__["SessionInfoComponent"], _session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_23__["SessionInfoIconSummaryComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_21__["DatePickerComponent"], _select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_20__["SelectIconComponent"], _additional_info_edit_additional_info_edit_component__WEBPACK_IMPORTED_MODULE_19__["AdditionalInfoEditComponent"], _static_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"], _static_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _static_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _provider_info_edit_provider_info_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProviderInfoEditComponent"], _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_14__["SelectProviderCategoryComponent"], _remote_stats_remote_stats_component__WEBPACK_IMPORTED_MODULE_13__["RemoteStatsComponent"], _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["DepositComponent"], _submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__["SubmitButtonComponent"], _random_provider_avatars_random_provider_avatars_component__WEBPACK_IMPORTED_MODULE_10__["RandomProviderAvatarsComponent"], _session_list_item_minimal_session_list_item_minimal_component__WEBPACK_IMPORTED_MODULE_9__["SessionListItemMinimalComponent"], _score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"], _call_call_component__WEBPACK_IMPORTED_MODULE_7__["CallComponent"], _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__["AskQuestionComponent"], _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__["AnswerComponent"], _remote_stats_box_remote_stats_box_component__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsBoxComponent"], _remote_stats_container_remote_stats_container_component__WEBPACK_IMPORTED_MODULE_3__["RemoteStatsContainerComponent"], _basic_user_profile_basic_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["BasicUserProfileComponent"], _provider_list_item_provider_list_item_component__WEBPACK_IMPORTED_MODULE_1__["ProviderListItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_29__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"]],
        exports: [_session_list_item_session_list_item_component__WEBPACK_IMPORTED_MODULE_31__["SessionListItemComponent"], _session_list_session_list_component__WEBPACK_IMPORTED_MODULE_28__["SessionListComponent"], _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_27__["NgVarDirective"], _loading_toolbar_button_loading_toolbar_button_component__WEBPACK_IMPORTED_MODULE_26__["LoadingToolbarButtonComponent"], _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_25__["UserAvatarComponent"], _session_info_session_info_component__WEBPACK_IMPORTED_MODULE_24__["SessionInfoComponent"], _session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_23__["SessionInfoIconSummaryComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_21__["DatePickerComponent"], _select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_20__["SelectIconComponent"], _additional_info_edit_additional_info_edit_component__WEBPACK_IMPORTED_MODULE_19__["AdditionalInfoEditComponent"], _static_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"], _static_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _static_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _provider_info_edit_provider_info_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProviderInfoEditComponent"], _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_14__["SelectProviderCategoryComponent"], _remote_stats_remote_stats_component__WEBPACK_IMPORTED_MODULE_13__["RemoteStatsComponent"], _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["DepositComponent"], _submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__["SubmitButtonComponent"], _random_provider_avatars_random_provider_avatars_component__WEBPACK_IMPORTED_MODULE_10__["RandomProviderAvatarsComponent"], _session_list_item_minimal_session_list_item_minimal_component__WEBPACK_IMPORTED_MODULE_9__["SessionListItemMinimalComponent"], _score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"], _call_call_component__WEBPACK_IMPORTED_MODULE_7__["CallComponent"], _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__["AskQuestionComponent"], _answer_answer_component__WEBPACK_IMPORTED_MODULE_5__["AnswerComponent"], _remote_stats_box_remote_stats_box_component__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsBoxComponent"], _remote_stats_container_remote_stats_container_component__WEBPACK_IMPORTED_MODULE_3__["RemoteStatsContainerComponent"], _basic_user_profile_basic_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["BasicUserProfileComponent"], _provider_list_item_provider_list_item_component__WEBPACK_IMPORTED_MODULE_1__["ProviderListItemComponent"]]
      })], CommonDeclarationsModule);
      /***/
    },

    /***/
    "Z9HY":
    /*!*************************************************************************************!*\
      !*** ./src/app/common/remote-stats-container/remote-stats-container.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z9HY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.stats-top-container {\n  display: block;\n  padding: 0rem 0.5rem;\n}\n.stats-top-container .stats-type-container {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzLWNvbnRhaW5lci9yZW1vdGUtc3RhdHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFrREY7QUFqREU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFtREoiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vcmVtb3RlLXN0YXRzLWNvbnRhaW5lci9yZW1vdGUtc3RhdHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvY29tbW9uLnNjc3NcIjtcbi5zdGF0cy10b3AtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDByZW0gMC41cmVtO1xuICAuc3RhdHMtdHlwZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBcbiAgICB9XG4gIFxufVxuIl19 */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _common_answer_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common/answer/answer.component */
      "MrgP");
      /* harmony import */


      var _common_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./common/ask-question/ask-question.component */
      "YoRS");
      /* harmony import */


      var _common_call_call_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common/call/call.component */
      "eKhv");
      /* harmony import */


      var _common_score_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./common/score/score.component */
      "kg6Y");
      /* harmony import */


      var _common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./common/change-password/change-password.component */
      "kVPr");
      /* harmony import */


      var _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common/deposit/deposit.component */
      "wDsb");
      /* harmony import */


      var _common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./common/static/contact/contact.component */
      "OFPZ");
      /* harmony import */


      var _common_static_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./common/static/about/about.component */
      "uI3J");
      /* harmony import */


      var _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./common/static/terms/terms.component */
      "rywU");
      /* harmony import */


      var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./common/common-declarations/common-declarations.module */
      "Z25Y");
      /* harmony import */


      var _common_session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./common/session-info-icon-summary/session-info-icon-summary.component */
      "7VJn");
      /* harmony import */


      var _common_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./common/session-info/session-info.component */
      "YNR+");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "E9qw");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/native-audio/ngx */
      "fLLL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "M2ZX");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/fire */
      "05qF");
      /* harmony import */


      var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/fire/messaging */
      "YK9e");
      /* harmony import */


      var _services_notification_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./services/notification.service */
      "OC8m");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]],
        entryComponents: [_common_session_info_session_info_component__WEBPACK_IMPORTED_MODULE_12__["SessionInfoComponent"], _common_session_info_icon_summary_session_info_icon_summary_component__WEBPACK_IMPORTED_MODULE_11__["SessionInfoIconSummaryComponent"], _common_static_terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"], _common_static_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _common_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"], _common_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], _common_score_score_component__WEBPACK_IMPORTED_MODULE_4__["ScoreComponent"], _common_call_call_component__WEBPACK_IMPORTED_MODULE_3__["CallComponent"], _common_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_2__["AskQuestionComponent"], _common_answer_answer_component__WEBPACK_IMPORTED_MODULE_1__["AnswerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_27__["IonicStorageModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_10__["CommonDeclarationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"].initializeApp(_services_notification_service__WEBPACK_IMPORTED_MODULE_32__["firebaseConfig"]), _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_31__["AngularFireMessagingModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_22__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_21__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonicRouteStrategy"]
        }, _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_26__["NativeStorage"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseX"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeAudio"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "Zn2K":
    /*!********************************************************!*\
      !*** ./src/app/architecture/single-shared-resource.ts ***!
      \********************************************************/

    /*! exports provided: SingleSharedResource */

    /***/
    function Zn2K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleSharedResource", function () {
        return SingleSharedResource;
      });
      /* harmony import */


      var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/architecture/shared-resource-async-request-bundle */
      "JTjR");

      var SingleSharedResource = /*#__PURE__*/function (_src_app_architecture2) {
        _inherits(SingleSharedResource, _src_app_architecture2);

        var _super4 = _createSuper(SingleSharedResource);

        function SingleSharedResource(producer, sharedResourceDefaultValue, ownerObject) {
          _classCallCheck(this, SingleSharedResource);

          return _super4.call(this, producer, sharedResourceDefaultValue, ownerObject);
        }

        return SingleSharedResource;
      }(src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_0__["SharedResourceAsyncRequestBundle"]);
      /***/

    },

    /***/
    "bPLR":
    /*!***************************************************************************************!*\
      !*** ./src/app/common/select-provider-category/select-provider-category.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: SelectProviderCategoryComponent */

    /***/
    function bPLR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectProviderCategoryComponent", function () {
        return SelectProviderCategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_provider_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-provider-category.component.html */
      "SUno");
      /* harmony import */


      var _select_provider_category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-provider-category.component.scss */
      "fzXQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SelectProviderCategoryComponent = /*#__PURE__*/function () {
        function SelectProviderCategoryComponent(modal) {
          _classCallCheck(this, SelectProviderCategoryComponent);

          this.modal = modal;
          this.providerGroups = [];
        }

        _createClass(SelectProviderCategoryComponent, [{
          key: "selectCategory",
          value: function selectCategory(category) {
            this.dismiss(category);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.modal.dismiss(data);
          }
        }]);

        return SelectProviderCategoryComponent;
      }();

      SelectProviderCategoryComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      SelectProviderCategoryComponent.propDecorators = {
        providerGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SelectProviderCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-provider-category',
        template: _raw_loader_select_provider_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_provider_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], SelectProviderCategoryComponent);
      /***/
    },

    /***/
    "c3t1":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/ask-question/ask-question.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c3t1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>سؤال جدید</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"action-container\">\n    <div class=\"action-content p-4 text-right\">\n      <span class=\"normal-text d-block mb-2\">\n        محتوای سؤال\n      </span>\n      <p class=\"light-text small-text\">\n        سؤال خود را حداکثر در ۲۵۵ کاراکتر و به وضوخ بیان کنید تا توسط مشاورین ما به آن پاسخ داده شود.\n      </p>\n      <ion-textarea\n            \n            [(ngModel)]=\"questionContent\"\n            class=\"question-text px-3\"\n            maxlength=255\n            mode=\"ios\"\n            autoGrow=true\n            ></ion-textarea\n          >\n          <span class=\"small-text light-text mr-2\">{{questionContent.length}}/255</span>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <app-submit-button [disabled]=\"questionContent.length < 10\" (submitted)=\"ask()\" [isWaiting]=\"aksing\" text=\"ارسال\"></app-submit-button>\n      </div>\n    </div>\n  </div>\n  </ion-content>";
      /***/
    },

    /***/
    "cM+S":
    /*!*****************************************************************!*\
      !*** ./src/app/common/session-info/session-info.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function cMS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.header-md:after {\n  background-image: none;\n}\n.score {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem;\n}\n.score .score-button {\n  color: white;\n  font-family: \"myIranSans\" !important;\n  border-radius: 50px;\n  -webkit-border-radius: 50px;\n  -moz-border-radius: 50px;\n  --border-radius:$radius;\n  --box-shadow:none;\n  --background:transparent;\n  border: 1px solid white;\n  font-size: 0.7rem;\n  --padding-bottom:0.3rem;\n  --padding-top:0.3rem;\n  letter-spacing: normal;\n  height: auto;\n}\n.score .score-button.readonly {\n  border: none;\n}\n.score .score-button .score-icon {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc2Vzc2lvbi1pbmZvL3Nlc3Npb24taW5mby5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBQ0Usc0JBQUE7QUFrREY7QUFoREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBbURKO0FBbERFO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VDaUNILG1CRGhDMEI7RUNpQzFCLDJCRGpDMEI7RUNrQ3ZCLHdCRGxDdUI7RUNtQ3ZCLHVCQUFBO0VEbENBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXVESjtBQXRESTtFQUVJLFlBQUE7QUF1RFI7QUFyREk7RUFDRSxXQUFBO0FBdUROIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Nlc3Npb24taW5mby9zZXNzaW9uLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLnNjb3JlIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzowLjVyZW07XG4gIC5zY29yZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJGZvbnQgIWltcG9ydGFudDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwcHgpO1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206MC4zcmVtO1xuICAgIC0tcGFkZGluZy10b3A6MC4zcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgICYucmVhZG9ubHlcbiAgICB7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgIH1cbiAgICAuc2NvcmUtaWNvbiB7XG4gICAgICBjb2xvcjogZ29sZDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */";
      /***/
    },

    /***/
    "eKhv":
    /*!***********************************************!*\
      !*** ./src/app/common/call/call.component.ts ***!
      \***********************************************/

    /*! exports provided: CallComponent */

    /***/
    function eKhv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallComponent", function () {
        return CallComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_call_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./call.component.html */
      "i6BT");
      /* harmony import */


      var _call_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./call.component.scss */
      "KhDX");
      /* harmony import */


      var _models_voice_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/voice-call */
      "BbMm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/call.service */
      "tCwg");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CallComponent = /*#__PURE__*/function () {
        function CallComponent(modalController, callService) {
          _classCallCheck(this, CallComponent);

          this.modalController = modalController;
          this.callService = callService;
          this.call = this.callService.voiceCall;
          this.callDirection = _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallDirection"];
          this.callState = _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"];
          this.conversationSeconds = 0;
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(CallComponent, [{
          key: "setCallTimerSeconds",
          value: function setCallTimerSeconds() {
            this.callTimerSeconds = new Date(1970, 0, 1).setSeconds(this.call.maxDuration - this.conversationSeconds);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this58 = this;

            if (this.call.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallDirection"].OUTGOING) {
              this.callService.makeTheCall().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(-1);
              })).subscribe(function (result) {
                if (result != -1) {
                  _this58.callService.initiateConnectCall();
                } else {
                  _this58.dismiss();
                }
              });
            } else {}

            this.callService.callStateUpdated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
              switch (_this58.call.state) {
                case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].ACCEPTED:
                  _this58.setCallTimerSeconds();

                  break;

                case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].CONVERSATION:
                  _this58.callTimerIntervalHanlde = setInterval(function () {
                    _this58.conversationSeconds++;

                    _this58.setCallTimerSeconds();
                  }, 1000);
              }
            });
            this.callService.callFinished.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
              console.log("finished subjec");

              _this58.dismiss();
            });
          }
        }, {
          key: "getCallStateText",
          value: function getCallStateText() {
            switch (this.call.state) {
              case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].NEW:
                return 'Connecting...';

              case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].TRYING:
                return 'Calling...';

              case _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].RINGING:
                return 'Ringing...';
            }
          }
        }, {
          key: "connectIncoming",
          value: function connectIncoming() {
            this.callService.initiateConnectCall();
          }
        }, {
          key: "hangUp",
          value: function hangUp() {
            if (this.call.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallDirection"].INCOMING && this.call.state == _models_voice_call__WEBPACK_IMPORTED_MODULE_3__["VoiceCallState"].RINGING) {
              this.callService.rejectCall();
            } else {
              this.callService.hangupCall();
            }

            this.dismiss();
          }
        }, {
          key: "accept",
          value: function accept() {
            this.callService.acceptCall();
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.callTimerIntervalHanlde);
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }]);

        return CallComponent;
      }();

      CallComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_call_service__WEBPACK_IMPORTED_MODULE_5__["CallService"]
        }];
      };

      CallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-call',
        template: _raw_loader_call_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_call_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_call_service__WEBPACK_IMPORTED_MODULE_5__["CallService"]])], CallComponent);
      /***/
    },

    /***/
    "eQox":
    /*!**********************************************************!*\
      !*** ./src/app/common/static/about/about.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function eQox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nh4 {\n  font-family: \"myIranSans\";\n  text-align: right;\n  padding: 0.5rem 3rem;\n  color: #4e4e4e;\n  font-weight: bold;\n  font-size: 1rem;\n}\nul {\n  padding-left: 2rem;\n}\np {\n  text-align: right;\n  color: #676767;\n  font-size: 0.8rem;\n  padding: 0.1rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc3RhdGljL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUE5Q0E7RUFDSSx5QkNGSTtFREdKLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZ0RKO0FBOUNBO0VBQ0ksa0JBQUE7QUFpREo7QUEvQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBa0RKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3N0YXRpYy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uLnNjc3MnO1xuXG5cbmg0e1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOjAuNXJlbSAzcmVtO1xuICAgIGNvbG9yOiAjNGU0ZTRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZToxcmVtO1xufVxudWx7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxucHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjojNjc2NzY3O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHBhZGRpbmc6MC4xcmVtIDJyZW07XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */";
      /***/
    },

    /***/
    "eZ8L":
    /*!*************************************************************!*\
      !*** ./src/app/common/select-icon/select-icon.component.ts ***!
      \*************************************************************/

    /*! exports provided: SelectIconComponent */

    /***/
    function eZ8L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectIconComponent", function () {
        return SelectIconComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-icon.component.html */
      "R/5v");
      /* harmony import */


      var _select_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-icon.component.scss */
      "9y04");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SelectIconComponent = /*#__PURE__*/function () {
        function SelectIconComponent(modal) {
          _classCallCheck(this, SelectIconComponent);

          this.modal = modal;
          this.icons = [];
        }

        _createClass(SelectIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.icons = _services_env_service__WEBPACK_IMPORTED_MODULE_3__["Icons"].iconNames;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            var iconName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.modal.dismiss(iconName);
          }
        }]);

        return SelectIconComponent;
      }();

      SelectIconComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      SelectIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-select-icon',
        template: _raw_loader_select_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], SelectIconComponent);
      /***/
    },

    /***/
    "fAhz":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/provider-list-item/provider-list-item.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fAhz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item\n      button\n      class=\"provider-item-container shadow-item\"\n      [ngClass]=\"getStatusClass(provider.status)\"\n      (click)=\"navigateToProvider(provider)\"\n    >\n      <app-user-avatar [user]=\"provider.user\"></app-user-avatar>\n      <ion-text class=\"w-100 d-flex flex-column\">\n        <div class=\"d-flex justify-content-between mt-2 align-items-center\">\n          <span class=\"name dark-text\">\n            {{getName(provider.user)}}\n            <ion-icon\n              class=\"favorite-icon mr-1\"\n              name=\"heart-outline\"\n              [ngClass]=\"isFavorite?'favorite':''\"\n            ></ion-icon\n          ></span>\n          <span class=\"provider-info-tag degree-tag xsmall-text\">\n            {{getDegreeText(provider.education_degree)}}\n          </span>\n        </div>\n        <small *ngIf=\"category\" class=\"category-name light-text\"\n          >مشاور {{category.name}}</small\n        >\n        <div\n          class=\"d-flex justify-content-between mt-2 mb-3 border-top pt-2 align-items-center\"\n        >\n          <small class=\"xsmall-text status-text\">\n            {{getStatusText(provider.status)}}\n          </small>\n          <div class=\"d-flex\">\n            <span\n              class=\"ml-1 provider-info-tag text-fee-tag fee-tag small-text\"\n            >\n              <ion-icon\n                class=\"provider-tag-icon\"\n                name=\"chatbubbles-outline\"\n              ></ion-icon>\n              {{provider.per_minute_text_fee}}\n            </span>\n            <span class=\"provider-info-tag call-fee-tag fee-tag small-text\">\n              <ion-icon\n                class=\"provider-tag-icon\"\n                name=\"call-outline\"\n              ></ion-icon>\n              {{provider.per_minute_call_fee}}\n            </span>\n          </div>\n        </div>\n      </ion-text>\n    </ion-item>";
      /***/
    },

    /***/
    "fzXQ":
    /*!*****************************************************************************************!*\
      !*** ./src/app/common/select-provider-category/select-provider-category.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function fzXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.category-name {\n  font-family: \"myIranSans\";\n  font-size: 0.7rem;\n}\n.category-icon {\n  color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc2VsZWN0LXByb3ZpZGVyLWNhdGVnb3J5L3NlbGVjdC1wcm92aWRlci1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBRUkseUJDREk7RURFSixpQkFBQTtBQWlESjtBQTlDQTtFQUVJLGNDSWM7QUQ0Q2xCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NlbGVjdC1wcm92aWRlci1jYXRlZ29yeS9zZWxlY3QtcHJvdmlkZXItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcbi5jYXRlZ29yeS1uYW1lXG57XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIGZvbnQtc2l6ZTowLjdyZW07XG5cbn1cbi5jYXRlZ29yeS1pY29uXG57XG4gICAgY29sb3I6JHNlY29uZGFyeS1jb2xvciA7XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */";
      /***/
    },

    /***/
    "gs/X":
    /*!**********************************************!*\
      !*** ./src/app/services/provider.service.ts ***!
      \**********************************************/

    /*! exports provided: ProviderService */

    /***/
    function gsX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProviderService", function () {
        return ProviderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../architecture/shared-resource-async-request-bundle */
      "JTjR");
      /* harmony import */


      var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../architecture/auto-single-get-resource */
      "sTv3");
      /* harmony import */


      var _http_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./http-helper.service */
      "tLlE");
      /* harmony import */


      var src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/architecture/auto-arrayed-shared-resource */
      "6cTQ");
      /* harmony import */


      var src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/provider */
      "oPjg");
      /* harmony import */


      var _models_file_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../models/file-model */
      "X9GW");
      /* harmony import */


      var _file_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./file-helper.service */
      "Y+EJ");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./env.service */
      "5zL6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProviderService = /*#__PURE__*/function () {
        function ProviderService(http, env, auth, fileHelper, httpHelper) {
          var _this59 = this;

          _classCallCheck(this, ProviderService);

          this.http = http;
          this.env = env;
          this.auth = auth;
          this.fileHelper = fileHelper;
          this.httpHelper = httpHelper;
          this.selectedProviderShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("providers/getById");
          this.providerByUserIdShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("providers/getByUserId");
          this.randomAvatarSrcListShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/getRandomAvatars", false);
          this.providerCategoriesShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("categories", false);
          this.providerCategoryShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("categories", false);
          this.providersByCategoryIdShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/getByCategoryId", false);
          this.favoriteProvidersShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/favorites", true);
          this.favoriteProviders = [];
          this.fetchedFavorites = false;
          this.providerCategoriesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.auth.loggedOut.subscribe(function (result) {
            if (result == true) {
              _this59.favoriteProviders = [];
              _this59.fetchedFavorites = false;
            }
          });
          this.allProvidersShared = new src_app_architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_4__["AutoArrayedGetResource"]("providers/getAll");
          this.statsByStatusShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_1__["SharedResourceAsyncRequestBundle"](this.statsByStatus, [], this);
        }

        _createClass(ProviderService, [{
          key: "getProviderByUserId",
          value: function getProviderByUserId(userId) {
            var _this60 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/getByUserId/" + userId;
              return _this60.http.get(_this60.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "getProviders",
          value: function getProviders() {
            var _this61 = this;

            var url = "providers/getAll";
            return this.http.get(this.env.API_URL + url, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (data) {
              _this61.allProvidersShared.setResource(data);

              return data;
            }));
          }
        }, {
          key: "verifyProvider",
          value: function verifyProvider(provider) {
            var _this62 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/verify/" + provider.id;
              return _this62.http.post(_this62.env.API_URL + url, null, {
                headers: headers
              });
            }));
          }
        }, {
          key: "addCategory",
          value: function addCategory(category) {
            var _this63 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/addCategory";
              return _this63.http.post(_this63.env.API_URL + url, {
                name: category.name,
                description: category.description,
                icon_name: category.icon_name
              }, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (categoryResult) {
                _this63.providerGroups.push(categoryResult);

                _this63.providerCategoriesUpdated.next(_this63.providerGroups);

                return categoryResult;
              }));
            }));
          }
        }, {
          key: "editCategory",
          value: function editCategory(category) {
            var _this64 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/editCategory";
              return _this64.http.post(_this64.env.API_URL + url, {
                id: category.id,
                name: category.name,
                description: category.description,
                icon_name: category.icon_name
              }, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (categoryResult) {
                _this64.updateCategoryInProviderGroups(categoryResult);

                return categoryResult;
              }));
            }));
          }
        }, {
          key: "getFees",
          value: function getFees() {
            var url = "providers/getFees";
            return this.http.get(this.env.API_URL + url, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateCategoryInProviderGroups",
          value: function updateCategoryInProviderGroups(category) {
            var oldCat = this.providerGroups.find(function (cat) {
              return cat.id == category.id;
            });
            oldCat.name = category.name;
            oldCat.icon_name = category.icon_name;
            this.providerCategoriesUpdated.next(this.providerGroups);
          }
        }, {
          key: "getByUid",
          value: function getByUid(uid) {
            var url = "providers/getByUid/" + uid;
            return this.http.get(this.env.API_URL + url, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            var _this65 = this;

            var url = "providers/getById/" + id;
            return this.http.get(this.env.API_URL + url, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (data) {
              _this65.selectedProviderShared.setResource(data);

              return data;
            }));
          }
        }, {
          key: "getSelectedGroup",
          value: function getSelectedGroup() {
            return this.selectedGroup;
          }
        }, {
          key: "setSelectedProvider",
          value: function setSelectedProvider(provider) {
            this.selectedProvider = provider;
          }
        }, {
          key: "getSelectedProvider",
          value: function getSelectedProvider() {
            return this.selectedProvider;
          }
        }, {
          key: "getRemoteFavorites",
          value: function getRemoteFavorites() {
            var _this66 = this;

            return this.auth.getToken().then(function (token) {
              var url = "providers/favorites";
              return _this66.http.get(_this66.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
                _this66.fetchedFavorites = true;
                _this66.favoriteProviders = result;
                return _this66.favoriteProviders;
              })).toPromise();
            });
          }
        }, {
          key: "getFavoriteProviders",
          value: function getFavoriteProviders() {
            if (!this.fetchedFavorites) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.getRemoteFavorites());
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(this.favoriteProviders);
          }
        }, {
          key: "addFavorite",
          value: function addFavorite(providerId) {
            var _this67 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/addFavorite/" + providerId;
              return _this67.http.post(_this67.env.API_URL + url, null, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (favoriteProvider) {
                _this67.favoriteProviders.push(favoriteProvider);

                return true;
              }));
            }));
          }
        }, {
          key: "toggleActivitySwitch",
          value: function toggleActivitySwitch(state) {
            var _this68 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var functionName = "activitySwitchOn";

              if (!state) {
                functionName = "activitySwitchOff";
              }

              var url = "providers/" + functionName;
              return _this68.http.post(_this68.env.API_URL + url, null, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (favoriteProvider) {
                return true;
              }));
            }));
          }
        }, {
          key: "getActivitySwitch",
          value: function getActivitySwitch() {
            var _this69 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/getActivitySwitch";
              return _this69.http.get(_this69.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "deleteFavorite",
          value: function deleteFavorite(providerId) {
            var _this70 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/deleteFavorite/" + providerId;
              return _this70.http.post(_this70.env.API_URL + url, null, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (favoriteProvider) {
                var provider = _this70.favoriteProviders.find(function (pvd) {
                  return pvd.provider_id == providerId;
                });

                _this70.favoriteProviders.splice(_this70.favoriteProviders.indexOf(provider), 1);

                return true;
              }));
            }));
          }
        }, {
          key: "isFavorite",
          value: function isFavorite(providerId) {
            if (this.favoriteProvidersShared.getResourceStatus() == _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_1__["SharedResourceUpdateStatus"].NOT_UPDATED) {
              this.favoriteProvidersShared.request();
            }

            if (this.favoriteProvidersShared.resource().length < 1) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
            }

            var contact = this.favoriteProvidersShared.resource().filter(function (favorite) {
              return favorite.id == providerId;
            });

            if (contact.length) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(contact[0]);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
          }
        }, {
          key: "toggleFavorite",
          value: function toggleFavorite(providerId) {
            var _this71 = this;

            return this.isFavorite(providerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (result) {
              if (result) {
                return _this71.deleteFavorite(providerId);
              } else {
                return _this71.addFavorite(providerId);
              }
            }));
          }
        }, {
          key: "uploadCertificate",
          value: function uploadCertificate(file) {
            return this.fileHelper.uploadVerifciationDocument(file, "certificate");
          }
        }, {
          key: "downloadCertificate",
          value: function downloadCertificate(provider) {
            var _this72 = this;

            provider.certificateFile.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_6__["FileFetchStatus"].FILE_FETCH_STATUS_FETCHING;
            return this.fileHelper.downloadVerificationDocument(provider.certificateFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (result) {
              provider.certificateFile.content = result;
              provider.certificateFile.img_src = URL.createObjectURL(provider.certificateFile.content);
              return _this72.fileHelper.getImageDimensions(provider.certificateFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (output) {
                provider.certificateFile = output;
                provider.certificateFile.fetch_status = _models_file_model__WEBPACK_IMPORTED_MODULE_6__["FileFetchStatus"].FILE_FETCH_STATUS_SUCCESS;
                return provider.certificateFile;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])());
            }));
          }
        }, {
          key: "favoriteClass",
          value: function favoriteClass(providerId) {
            return this.isFavorite(providerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
              return result != false ? "favorite" : "";
            }));
          }
        }, {
          key: "updateProviderInfo",
          value: function updateProviderInfo(provider) {
            var _this73 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/updateProviderInfo/" + provider.id;
              return _this73.http.post(_this73.env.API_URL + url, {
                provider_categories: provider.provider_categories.map(function (cat) {
                  return cat.id;
                }),
                per_minute_text_fee: provider.per_minute_text_fee,
                per_minute_call_fee: provider.per_minute_call_fee,
                education_degree: provider.education_degree
              }, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "updateAboutMe",
          value: function updateAboutMe(provider) {
            var _this74 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/updateAboutMe/" + provider.id;
              return _this74.http.post(_this74.env.API_URL + url, {
                about_me: provider.about_me
              }, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "statsByStatus",
          value: function statsByStatus() {
            var _this75 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "providers/providerStatsByStatus";
              return _this75.http.get(_this75.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
                result = result;
                var remoteData = [{
                  text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"].getStatTypeString(src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_TOTAL_COUNT),
                  number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_TOTAL_COUNT],
                  url: null,
                  link_options: null
                }, {
                  text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"].getStatTypeString(src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_ONLINE_COUNT),
                  number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_ONLINE_COUNT],
                  url: null,
                  link_options: null
                }, {
                  text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["Provider"].getStatTypeString(src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_IN_SESSION_COUNT),
                  number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_IN_SESSION_COUNT],
                  url: null,
                  link_options: null
                }, {
                  text: "آفلاین",
                  number: result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_TOTAL_COUNT] - result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_IN_SESSION_COUNT] - result[src_app_models_provider__WEBPACK_IMPORTED_MODULE_5__["ProviderStatsType"].PROVIDER_STATS_ONLINE_COUNT],
                  url: null,
                  link_options: null
                }];

                _this75.statsByStatusShared.setResource(remoteData);

                return remoteData;
              }));
            }));
          }
        }]);

        return ProviderService;
      }();

      ProviderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]
        }, {
          type: _env_service__WEBPACK_IMPORTED_MODULE_11__["EnvService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _file_helper_service__WEBPACK_IMPORTED_MODULE_7__["FileHelperService"]
        }, {
          type: _http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"]
        }];
      };

      ProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _env_service__WEBPACK_IMPORTED_MODULE_11__["EnvService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _file_helper_service__WEBPACK_IMPORTED_MODULE_7__["FileHelperService"], _http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"]])], ProviderService);
      /***/
    },

    /***/
    "i6BT":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/call/call.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function i6BT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"action-container\">\n    <div class=\"action-content align-items-center d-flex pt-5 flex-column\">\n      <app-user-avatar\n        class=\"large-sized\"\n        [user]=\"\n          call.direction == callDirection.INCOMING ? call.caller : call.receptor\n        \"\n      ></app-user-avatar>\n      <span\n        *ngIf=\"\n          call.state == callState.NEW ||\n          call.state == callState.TRYING ||\n          call.state == callState.RINGING\n        \"\n        class=\"call-state-text mt-2 ltr normal-text\"\n        >{{ getCallStateText() }}</span\n      >\n      <span\n        *ngIf=\"\n          call.state == callState.ACCEPTED ||\n          call.state == callState.CONVERSATION\n        \"\n        class=\"call-timer-text mt-2 ltr normal-text\"\n        >{{ callTimerSeconds | date: \"mm:ss\" }}</span\n      >\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper justify-content-around\">\n        <ion-button\n          class=\"call-action reject\"\n          (click)=\"hangUp()\"\n          [disabled]=\"call.state == callState.NEW\"\n        >\n          <ion-icon\n            slot=\"icon-only\"\n            class=\"icon\"\n            name=\"call-outline\"\n          ></ion-icon>\n        </ion-button>\n        <ion-button\n          class=\"call-action accept\"\n          (click)=\"accept()\"\n          *ngIf=\"\n            call.direction == callDirection.INCOMING &&\n            (call.state == callState.NEW || call.state == callState.RINGING)\n          \"\n          [disabled]=\"call.state == callState.NEW\"\n        >\n          <ion-icon\n            slot=\"icon-only\"\n            class=\"icon\"\n            name=\"call-outline\"\n          ></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "jp0Q":
    /*!*******************************************************************************************!*\
      !*** ./src/app/common/session-list-item-minimal/session-list-item-minimal.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function jp0Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.session-type-icon {\n  margin-left: 0.4rem;\n  --ionicon-stroke-width: 40;\n  padding: 0.3rem;\n}\n.session-info-tag {\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  --border-radius:$radius;\n  color: white;\n  background-color: #a5dade;\n}\n.session-state-text,\n.session-timing-type-text {\n  padding: 0.1rem 0.4rem;\n}\n.requested .session-state-text {\n  background-color: #eebd60;\n}\n.reserved .session-state-text {\n  background-color: #71bcc1;\n}\nß.active .session-state-text {\n  background-color: #71ce99;\n}\n.ended .session-state-text {\n  background-color: #71bcc1;\n}\n.rejected .session-state-text {\n  background-color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Nlc3Npb24tbGlzdC1pdGVtLW1pbmltYWwvc2Vzc2lvbi1saXN0LWl0ZW0tbWluaW1hbC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBREVKO0FBaERBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFrREY7QUFoREE7RUVvQ0MsbUJGbkN3QjtFRW9DeEIsMkJGcEN3QjtFRXFDckIsd0JGckNxQjtFRXNDckIsdUJBQUE7RUZyQ0YsWUFBQTtFQUNBLHlCRUxtQjtBRjJEckI7QUFwREE7O0VBRUUsc0JBQUE7QUF1REY7QUFwREU7RUFDRSx5QkVIYztBRjBEbEI7QUFyREU7RUFDRSx5QkViWTtBRm9FaEI7QUFyREU7RUFDRSx5QkVWWTtBRmlFaEI7QUFyREU7RUFDRSx5QkVuQlk7QUYwRWhCO0FBckRFO0VBQ0UseUJFakJjO0FGd0VsQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWxpc3QtaXRlbS1taW5pbWFsL3Nlc3Npb24tbGlzdC1pdGVtLW1pbmltYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3RoZW1lL2NvbW1vbi5zY3NzXCI7XG5cbi5zZXNzaW9uLXR5cGUtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG4gIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQwO1xuICBwYWRkaW5nOiAwLjNyZW07XG59XG4uc2Vzc2lvbi1pbmZvLXRhZyB7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMjBweCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG59XG4uc2Vzc2lvbi1zdGF0ZS10ZXh0LFxuLnNlc3Npb24tdGltaW5nLXR5cGUtdGV4dCB7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjRyZW07XG59XG4uc2Vzc2lvbi1zdGF0ZS10ZXh0IHtcbiAgLnJlcXVlc3RlZCAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcbiAgfVxuICAucmVzZXJ2ZWQgJiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cbiAgw58uYWN0aXZlICZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xuICB9XG4gIC5lbmRlZCAme1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG4gIC5yZWplY3RlZCAme1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kP+L":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/deposit/deposit.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kPL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>افزایش اعتبار</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\">\n      <ion-item button (click)=\"openDepostPresets()\" *ngIf=\"amount == null\">\n        <ion-label class=\"light-text\">میزان افزایش اعتبار</ion-label>\n        <span *ngIf=\"selectedPreset\" class=\"light-text number-text\">{{\n          selectedPreset + \" تومان\"\n        }}</span>\n      </ion-item>\n      <ion-item *ngIf=\"amount\">\n        <ion-label class=\"light-text\">میزان افزایش اعتبار</ion-label>\n        <span class=\"light-text number-text\">{{ amount + \" تومان\" }}</span>\n      </ion-item>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <app-submit-button\n          [disabled]=\"(!selectedPreset && !amount) || depositing\"\n          (submitted)=\"submit()\"\n          text=\"افزایش اعتبار\"\n          [isWaiting] = \"depositing\"\n        >\n        </app-submit-button>\n        \n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "kVPr":
    /*!*********************************************************************!*\
      !*** ./src/app/common/change-password/change-password.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ChangePasswordComponent */

    /***/
    function kVPr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
        return ChangePasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "2qNV");
      /* harmony import */


      var _change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./change-password.component.scss */
      "lzRO");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ChangePasswordComponent = /*#__PURE__*/function () {
        function ChangePasswordComponent(modalController, alert, auth) {
          _classCallCheck(this, ChangePasswordComponent);

          this.modalController = modalController;
          this.alert = alert;
          this.auth = auth;
          this.changePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            newPasswordRepeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])
          });
        }

        _createClass(ChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this76 = this;

            var oldPass = this.changePassForm.value.oldPassword;
            var newPass = this.changePassForm.value.newPassword;
            var newPassRepeat = this.changePassForm.value.newPasswordRepeat;

            if (newPass != newPassRepeat) {
              this.alert.presentError('گذرواژه و تکرار آن برابر نیستند.');
              return;
            }

            this.auth.changePassword(oldPass, newPass).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              _this76.alert.presentSuccess('گذرواژه فعلی صحیح نیست.');

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            })).subscribe(function (result) {
              if (result) {
                _this76.alert.presentSuccess('گذرواژه تغییر یافت.');

                _this76.dismiss();
              }
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return ChangePasswordComponent;
      }();

      ChangePasswordComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], ChangePasswordComponent);
      /***/
    },

    /***/
    "kWjE":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-info/session-info.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kWjE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>جلسه مشاوره</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"isEnded() && !openedFromSessionChat\">\n      <ion-button (click)=\"chatHistory()\">\n        <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\">\n      <div class=\"row justify-content-center primary-background pt-5\">\n        <div class=\"col-auto\">\n          <app-user-avatar class=\"large-sized\" [user]=\"user\"></app-user-avatar>\n        </div>\n      </div>\n      <div class=\"row justify-content-center primary-background pt-2 pb-4\">\n        <div class=\"col-auto\">\n          <span class=\"number-text large-text\">\n            {{ peerName }}\n          </span>\n        </div>\n      </div>\n      <div\n        *ngIf=\"isActive() || isEnded()\"\n        class=\"row justify-content-center primary-background pt-2 pb-4\"\n      >\n        <div\n          class=\"col-4 col-md-2 justify-content-center d-flex flex-column align-items-center\"\n        >\n          <span class=\"bold-text large-text\">\n            {{ calculateSessionDuration() }}\n          </span>\n          <span class=\"small-text\">\n            دقیقه\n          </span>\n        </div>\n        <div\n          class=\"col-1 justify-content-center d-flex flex-column align-items-center\"\n        >\n          <ion-icon name=\"stats-chart-outline\" class=\"stats-icon\"></ion-icon>\n        </div>\n        <div\n          class=\"col-4 col-md-2 justify-content-center d-flex flex-column align-items-center\"\n        >\n          <span class=\"bold-text large-text\">\n            {{ calculateSessionTotalFee() }}\n          </span>\n          <span class=\"small-text\">\n            تومان\n          </span>\n        </div>\n      </div>\n      <div\n        class=\"score primary-background\"\n        *ngIf=\"isEnded() && !providerPerspective\"\n      >\n        <ion-button\n          class=\"score-button\"\n          [ngClass]=\"session.score ? 'readonly' : ''\"\n          (click)=\"score()\"\n        >\n          <ion-icon class=\"ml-1 score-icon\" name=\"star-outline\"></ion-icon>\n          <span *ngIf=\"session.score == null\"> امتیاز بدهید </span>\n          <span *ngIf=\"session.score != null\">{{ session.score }}</span>\n        </ion-button>\n      </div>\n      <ion-item>\n        <span class=\"small-text light-text\">وضعیت جلسه</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">{{\n          getSessionState()\n        }}</span>\n      </ion-item>\n      <ion-item>\n        <span class=\"small-text light-text\">نوع درخواست</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">{{\n          getSessionTimingType()\n        }}</span>\n      </ion-item>\n      <ion-item>\n        <span class=\"small-text light-text\">نوع جلسه</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">{{\n          session.type == sessionTypeEnum.TEXT ? \"نوشتاری\" : \"تلفنی\"\n        }}</span>\n      </ion-item>\n      <app-session-info-icon-summary\n        [time]=\"getSessionTime('created')\"\n        [date]=\"getSessionDate('created')\"\n        stateClass=\"requested\"\n        label=\"ثبت درخواست\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        [time]=\"getSessionTime('requested')\"\n        [date]=\"getSessionDate('requested')\"\n        stateClass=\"requested\"\n        label=\"شروع بازه درخواستی\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        [time]=\"getSessionTime('requestedTo')\"\n        [date]=\"getSessionDate('requestedTo')\"\n        stateClass=\"requested\"\n        label=\"پایان بازه درخواستی\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        [time]=\"session.duration\"\n        [date]=\"null\"\n        stateClass=\"requested\"\n        label=\"مدت زمان درخواستی (دقیقه)\"\n      ></app-session-info-icon-summary>\n\n      <app-session-info-icon-summary\n        *ngIf=\"isActive() || isEnded() || isReserved()\"\n        [time]=\"getSessionTime('accepted')\"\n        [date]=\"getSessionDate('accepted')\"\n        stateClass=\"reserved\"\n        label=\"تأیید رزرو\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        *ngIf=\"isActive() || isEnded()\"\n        [time]=\"getSessionTime('started')\"\n        [date]=\"getSessionDate('started')\"\n        stateClass=\"active\"\n        label=\"شروع جلسه\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        *ngIf=\"isEnded()\"\n        [time]=\"getSessionTime('ended')\"\n        [date]=\"getSessionDate('ended')\"\n        stateClass=\"ended\"\n        label=\"پایان جلسه\"\n      >\n      </app-session-info-icon-summary>\n      <app-session-info-icon-summary\n        *ngIf=\"isRejected()\"\n        [time]=\"getSessionTime('rejected')\"\n        [date]=\"getSessionDate('rejected')\"\n        stateClass=\"rejected\"\n        label=\"رد شده\"\n      >\n      </app-session-info-icon-summary>\n    </div>\n    <div class=\"actions\">\n      <div\n        class=\"actions-wrapper dual\"\n        *ngIf=\"isRequested() && providerPerspective == true && !isMock()\"\n      >\n        <ion-button class=\"primary-button\" (click)=\"accept()\" fill=\"solid\">\n          قبول درخواست\n        </ion-button>\n        <ion-button class=\"secondary-button\" (click)=\"reject()\" fill=\"solid\">\n          رد درخواست\n        </ion-button>\n      </div>\n      <div\n        class=\"actions-wrapper\"\n        *ngIf=\"isReserved() && providerPerspective == true && !isMock()\"\n      >\n        <ion-button class=\"primary-button\" (click)=\"start()\" fill=\"solid\">\n          شروع جلسه\n        </ion-button>\n      </div>\n      <div\n        class=\"actions-wrapper\"\n        *ngIf=\"isActive()  && !isMock()\"\n      >\n        <ion-button class=\"primary-button\" (click)=\"end()\" fill=\"solid\">\n          پایان جلسه\n        </ion-button>\n      </div>\n      <div class=\"actions-wrapper\" *ngIf=\"isMock()\">\n        <app-submit-button\n          text=\"درخواست رزرو\"\n          (submitted)=\"request()\"\n          [isWaiting]=\"waiting\"\n        ></app-submit-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "kg6Y":
    /*!*************************************************!*\
      !*** ./src/app/common/score/score.component.ts ***!
      \*************************************************/

    /*! exports provided: ScoreComponent */

    /***/
    function kg6Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreComponent", function () {
        return ScoreComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_score_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./score.component.html */
      "QVeo");
      /* harmony import */


      var _score_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./score.component.scss */
      "Ixvq");
      /* harmony import */


      var src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_models_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/session */
      "m6xN");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ScoreComponent = /*#__PURE__*/function () {
        function ScoreComponent(modalController, alert, sessionsManager) {
          _classCallCheck(this, ScoreComponent);

          this.modalController = modalController;
          this.alert = alert;
          this.sessionsManager = sessionsManager;
          this.score = null;
        }

        _createClass(ScoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "setScore",
          value: function setScore(score) {
            this.score = score;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this77 = this;

            this.sessionsManager.updateScore(this.session.id, this.score).subscribe(function (result) {
              _this77.alert.presentSuccess("امتیاز شما ثبت شد.");

              _this77.modalController.dismiss(_this77.score);
            });
          }
        }]);

        return ScoreComponent;
      }();

      ScoreComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]
        }];
      };

      ScoreComponent.propDecorators = {
        score: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }],
        session: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }]
      };
      ScoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-score',
        template: _raw_loader_score_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_score_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], src_app_services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_3__["SessionsManagerService"]])], ScoreComponent);
      /***/
    },

    /***/
    "kuGV":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/answer/answer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function kuGV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>پاسخ جدید</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"action-container\">\n    <div class=\"action-content p-4 text-right\">\n      <span class=\"normal-text d-block mb-2\">\n        محتوای پاسخ\n      </span>\n      <p class=\"light-text small-text\">\n        پاسخ خود را حداکثر در ۱۰۰۰ کاراکتر و به وضوخ بیان کنید.\n      </p>\n      <ion-textarea\n            \n            [(ngModel)]=\"answerString\"\n            class=\"question-text px-3\"\n            maxlength=1000\n            mode=\"ios\"\n            autoGrow=true\n            ></ion-textarea\n          >\n          <span class=\"small-text light-text mr-2\">{{answerString.length}}/1000</span>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <app-submit-button (submitted)=\"answer()\" [disabled]=\"answerString.length < 1\" [isWaiting]=\"answering\" text=\"ارسال\"></app-submit-button>\n      </div>\n    </div>\n  </div>\n  </ion-content>";
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../architecture/auto-single-get-resource */
      "sTv3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./env.service */
      "5zL6");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, storage, env) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.storage = storage;
          this.env = env;
          this.user = null;
          this.fetchedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.roleDetected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.loggedOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.loggedOutExToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.tempPhoneNumber = null;
          this.tempPassword = null;
          this.currentUserShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__["AutoSingleGetResource"]('user');
          this.role = this.env.USER_ROLE_ID;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(phone, password, roleId) {
            var _this78 = this;

            return this.http.post(this.env.API_URL + "login", {
              username: phone,
              password: password,
              client_id: this.env.CLIENT_ID,
              grant_type: "password",
              client_secret: this.env.CLIENT_SECRET,
              role_id: roleId
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (access_token) {
              _this78.saveToken(access_token).then(function (result) {
                _this78.saveUser();
              });

              _this78.loggedIn.next(true);

              _this78.token = access_token;
              return access_token;
            }));
          }
        }, {
          key: "remoteSetFcmToken",
          value: function remoteSetFcmToken(fcmToken) {
            var _this79 = this;

            var url = "setFcmToken";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (token) {
              return _this79.http.post(_this79.env.API_URL + url, {
                fcm_token: fcmToken
              }, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              });
            }));
          }
        }, {
          key: "remoteUnsetFcmToken",
          value: function remoteUnsetFcmToken(authExToken) {
            var url = "unsetFcmToken";
            return this.http.post(this.env.API_URL + url, null, {
              headers: {
                Authorization: authExToken["token_type"] + " " + authExToken["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword(oldPass, newPass) {
            var _this80 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (token) {
              return _this80.http.post(_this80.env.API_URL + "changePassword", {
                old_password: oldPass,
                new_password: newPass
              }, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              });
            }));
          }
        }, {
          key: "updateChatCredentials",
          value: function updateChatCredentials(username, pass, uid) {
            var _this81 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (token) {
              return _this81.http.post(_this81.env.API_URL + "updateChatCredentials", {
                tinode_username: username,
                tinode_pass: pass,
                tinode_uid: uid
              }, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              });
            }));
          }
        }, {
          key: "register",
          value: function register(phone, fName, lName, password) {
            var roleId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.env.USER_ROLE_ID;
            var affiliateCode = arguments.length > 5 ? arguments[5] : undefined;
            return this.http.post(this.env.API_URL + "register", {
              phone: phone,
              password: password,
              client_id: this.env.CLIENT_ID,
              client_secret: this.env.CLIENT_SECRET,
              first_name: fName,
              role_id: roleId,
              last_name: lName,
              affiliate_code: affiliateCode
            }); //return of(true);

            /* return from(this.imService.createAccount(phone, password)).pipe(
              catchError(error=>{
                if(error.message == 'duplicate credential (409)')
                {
                  return of(false);
                }
                throw "problem creating tinode account";
                
              }),
              mergeMap(data => {
                return this.http.post(this.env.API_URL + "register", {
                  phone: phone,
                  password: password,
                  tinode_username: phone,
                  tinode_pass: password,
                  tinode_uid: data,
                  client_id: this.env.CLIENT_ID,
                  client_secret: this.env.CLIENT_SECRET,
                  first_name: fName,
                  last_name: lName
                });
              })
            ); */
          }
        }, {
          key: "requestVerificationCode",
          value: function requestVerificationCode(phone, password) {
            return this.http.post(this.env.API_URL + "requestVerificationCode", {
              phone: phone,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              if (result["success"] == true) {
                return true;
              }
            }));
          }
        }, {
          key: "requestVerificationCodeForPasswordRetrieval",
          value: function requestVerificationCodeForPasswordRetrieval(phone) {
            return this.http.post(this.env.API_URL + "requestVerificationCodeForPasswordRetrieval", {
              phone: phone
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              if (result["success"] == true) {
                return true;
              }
            }));
          }
        }, {
          key: "retrievePassword",
          value: function retrievePassword(phone, password, verificationCode) {
            return this.http.post(this.env.API_URL + "retrievePassword", {
              phone: phone,
              password: password,
              verification_code: verificationCode
            });
          }
        }, {
          key: "verify",
          value: function verify(verificationCode, phoneNumber) {
            return this.http.post(this.env.API_URL + "verify", {
              phone: phoneNumber,
              verification_code: verificationCode
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              if (result["success"] == true) {
                return true;
              }
            }));
          }
        }, {
          key: "getUserRemote",
          value: function getUserRemote() {
            var _this82 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              Authorization: this.token["token_type"] + " " + this.token["access_token"]
            });
            return this.http.get(this.env.API_URL + "user", {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              _this82.user = user;

              _this82.saveUser();

              _this82.roleDetected.next(user.role_id);

              _this82.fetchedUser.next(user);

              return user;
            }));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.getToken().then()["catch"](function (err) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("err");
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this83 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getToken()).subscribe(function (token) {
              _this83.loggedOutExToken.next(token);

              _this83.storage.remove("token");

              _this83.storage.remove("user");

              delete _this83.token;
              delete _this83.user;

              _this83.loggedOut.next(true);
            });
          }
        }, {
          key: "isProvider",
          value: function isProvider() {
            var _this84 = this;

            return this.getUser().then(function (user) {
              if (user.role_id == _this84.env.PROVIDER_ROLE_ID) {
                _this84.role = _this84.env.PROVIDER_ROLE_ID;
                return true;
              }

              return false;
            })["catch"](function (error) {
              return Promise.reject(error);
            });
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            var _this85 = this;

            return this.getUser().then(function (user) {
              if (user.role_id == _this85.env.ADMIN_ROLE_ID) {
                _this85.role = _this85.env.ADMIN_ROLE_ID;
                return true;
              }

              return false;
            })["catch"](function (error) {
              return Promise.reject(error);
            });
          }
        }, {
          key: "isUser",
          value: function isUser() {
            var _this86 = this;

            return this.getUser().then(function (user) {
              if (user.role_id == _this86.env.USER_ROLE_ID) {
                _this86.role = _this86.env.USER_ROLE_ID;
                return true;
              }

              _this86.role = _this86.env.PROVIDER_ROLE_ID;
              return false;
            })["catch"](function (error) {
              return Promise.reject(error);
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this87 = this;

            return this.isAuthenticated().then(function (token) {
              if (token) {
                if (_this87.user && _this87.user != null) {
                  _this87.roleDetected.next(_this87.user.role_id);

                  return Promise.resolve(_this87.user);
                } else {
                  return _this87.storage.get("user").then(function (user) {
                    if (user != null) {
                      var parsedUser = JSON.parse(user);
                      _this87.user = parsedUser;

                      _this87.roleDetected.next(_this87.user.role_id);

                      return Promise.resolve(_this87.user);
                    } else {
                      return _this87.getUserRemote().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                        return Promise.reject(null);
                      })).toPromise();
                    }
                  }, function (error) {
                    return _this87.getUserRemote();
                  });
                }
              } else {
                return Promise.reject(false);
              }
            }, function (error) {
              return Promise.reject(false);
            })["catch"](function (error) {
              return Promise.reject(error);
            });
          }
        }, {
          key: "saveUser",
          value: function saveUser() {
            var _this88 = this;

            return this.getUser().then(function (user) {
              return _this88.storage.set("user", JSON.stringify(user));
            });
          }
        }, {
          key: "saveToken",
          value: function saveToken(access_token) {
            return this.storage.set("token", access_token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            var _this89 = this;

            if (this.token && this.token != null) {
              return Promise.resolve(this.token);
            } else {
              return this.storage.get("token").then(function (token) {
                if (token != null) {
                  _this89.token = token;
                  return Promise.resolve(_this89.token);
                } else {
                  return Promise.reject("token not found");
                }
              });
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]])], AuthService);
      /***/
    },

    /***/
    "lzRO":
    /*!***********************************************************************!*\
      !*** ./src/app/common/change-password/change-password.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function lzRO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "m+j5":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-list-item-minimal/session-list-item-minimal.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item\n  class=\"shadow-item session-list-item\"\n  (click)=\"navigateToSession()\"\n  [ngClass]=\"getClass()\"\n  button\n>\n  <app-user-avatar [user]=\"user\"> </app-user-avatar>\n\n  <div class=\"d-flex flex-column justify-content-center my-3 h-100 w-100\">\n    <div class=\"d-flex justify-content-between align-items-center\">\n      <span class=\"peer-name number-text normal-text dark-text d-flex align-items-center\">\n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\"session.type == sessionType.TEXT\"\n          name=\"chatbubbles-outline\"\n        ></ion-icon>\n        <ion-icon\n          class=\"session-info-tag session-type-icon\"\n          *ngIf=\"session.type == sessionType.Call\"\n          name=\"call-outline\"\n        ></ion-icon>\n\n        {{ peerName }}\n      </span>\n      <span>\n        <span class=\"session-info-tag ml-1 session-timing-type-text xsmall-text\">\n          {{ sessionTimingTypeText(session) }}\n        </span>\n        <span class=\"session-info-tag session-state-text xsmall-text\">\n        {{ stateText(session) }}\n      </span>\n      </span>\n      \n    </div>\n\n    <div class=\"session-info-summary\">\n      <div class=\"session-info-summary-row\">\n        <span class=\"ml-3 light-text small-text\"> درخواست</span>\n        <div class=\"d-flex\">\n          <div class=\"session-info-summary-item session-info-summary-time\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"time-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionTime() }}</span\n            >\n          </div>\n          <div class=\"session-info-summary-item session-info-summary-date\">\n            <ion-icon\n              class=\"session-info-summary-item-icon\"\n              name=\"calendar-outline\"\n            ></ion-icon>\n            <span\n              class=\"session-info-summary-item-text small-text number-text\"\n              >{{ getSessionDate() }}</span\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-item>\n";
      /***/
    },

    /***/
    "m6xN":
    /*!***********************************!*\
      !*** ./src/app/models/session.ts ***!
      \***********************************/

    /*! exports provided: Session, SessionState, SessionType, SessionTimingType */

    /***/
    function m6xN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Session", function () {
        return Session;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionState", function () {
        return SessionState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionType", function () {
        return SessionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionTimingType", function () {
        return SessionTimingType;
      });
      /* harmony import */


      var _available_hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./available-hours */
      "xG8R");

      var Session = /*#__PURE__*/function () {
        function Session() {
          _classCallCheck(this, Session);

          this.mock_session = false;
        }

        _createClass(Session, null, [{
          key: "getState",
          value: function getState(session) {
            if (session.accepted == null && session.ended == null) {
              return SessionState.REQUESTED;
            }

            if (session.accepted != null && session.started == null) {
              return SessionState.RESERVED;
            }

            if (session.started != null && session.ended == null) {
              return SessionState.ACTIVE;
            }

            if (session.accepted != null && session.ended != null) {
              return SessionState.ENDED;
            }

            if (session.accepted == null && session.ended != null) {
              return SessionState.REJECTED;
            }
          }
        }, {
          key: "getTimingTypeString",
          value: function getTimingTypeString(session) {
            if (session.timing_type == SessionTimingType.RESERVATION) {
              return 'رزرو';
            }

            if (session.timing_type == SessionTimingType.IMMEDIATE) {
              return 'آنی';
            }
          }
        }, {
          key: "getStateString",
          value: function getStateString(session) {
            var state = Session.getState(session);
            return Session.getStateStringByState(state);
          }
        }, {
          key: "getStateStringByState",
          value: function getStateStringByState(state) {
            switch (state) {
              case SessionState.ACTIVE:
                return "باز";

              case SessionState.RESERVED:
                return "در انتظار شروع";

              case SessionState.ENDED:
                return "پایان یافته";

              case SessionState.REJECTED:
                return "رد شده";

              case SessionState.REQUESTED:
                return "درخواست شده";
            }
          }
        }, {
          key: "isActive",
          value: function isActive(session) {
            return Session.getState(session) == SessionState.ACTIVE;
          }
        }, {
          key: "isEnded",
          value: function isEnded(session) {
            return Session.getState(session) == SessionState.ENDED;
          }
        }, {
          key: "isRequested",
          value: function isRequested(session) {
            return Session.getState(session) == SessionState.REQUESTED;
          }
        }, {
          key: "isReserved",
          value: function isReserved(session) {
            return Session.getState(session) == SessionState.RESERVED;
          }
        }, {
          key: "isRejected",
          value: function isRejected(session) {
            return Session.getState(session) == SessionState.REJECTED;
          }
        }, {
          key: "createMockSession",
          value: function createMockSession(hours, date, provider, duration, type, timingType) {
            if (hours == null) {
              hours = new _available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"]();

              _available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].SetTimeNow(hours);
            }

            var fromDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeFromHourString(hours)), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeFromMinuteString(hours)));
            var toDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeToHourString(hours)), parseInt(_available_hours__WEBPACK_IMPORTED_MODULE_0__["AvailableHours"].getTimeToMinuteString(hours)));
            var session = {
              mock_session: true,
              reserved_from: fromDate.toUTCString(),
              reserved_to: toDate.toUTCString(),
              created_at: new Date().toUTCString(),
              duration: duration,
              provider: provider,
              type: type,
              timing_type: timingType
            };
            return session;
          }
        }]);

        return Session;
      }();

      var SessionState;

      (function (SessionState) {
        SessionState[SessionState["REQUESTED"] = 0] = "REQUESTED";
        SessionState[SessionState["RESERVED"] = 1] = "RESERVED";
        SessionState[SessionState["ACTIVE"] = 2] = "ACTIVE";
        SessionState[SessionState["ENDED"] = 3] = "ENDED";
        SessionState[SessionState["REJECTED"] = 4] = "REJECTED";
      })(SessionState || (SessionState = {}));

      var SessionType;

      (function (SessionType) {
        SessionType[SessionType["TEXT"] = 1] = "TEXT";
        SessionType[SessionType["Call"] = 2] = "Call";
      })(SessionType || (SessionType = {}));

      var SessionTimingType;

      (function (SessionTimingType) {
        SessionTimingType[SessionTimingType["IMMEDIATE"] = 1] = "IMMEDIATE";
        SessionTimingType[SessionTimingType["RESERVATION"] = 0] = "RESERVATION";
      })(SessionTimingType || (SessionTimingType = {}));
      /***/

    },

    /***/
    "m9S8":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/additional-info-edit/additional-info-edit.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m9S8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>اطلاعات تکمیلی</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\"  >\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"کد ملی\"\n              [(ngModel)]=\"additionalInfo.national_code\"\n              required\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"آدرس\"\n              [(ngModel)]=\"additionalInfo.address\"\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"شماره تلفن ثابت\"\n              [(ngModel)]=\"additionalInfo.land_line_number\"\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      \n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"کد پستی\"\n              [(ngModel)]=\"additionalInfo.postal_code\"\n              [disabled]=\"!editable\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"actions\">\n      \n      <div class=\"actions-wrapper\">\n        <ion-button *ngIf=\"editable\" class=\"primary-button\" (click)=\"submit()\" fill=\"solid\">\n           ثبت\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "mW0d":
    /*!***************************************************************************!*\
      !*** ./src/app/common/session-list-item/session-list-item.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function mW0d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.session-type-icon {\n  margin-right: 0.4rem;\n  --ionicon-stroke-width: 40;\n  padding: 0.3rem;\n}\n.session-info-tag {\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n  --border-radius:$radius;\n  color: white;\n  background-color: #ce321c;\n}\n.session-state-text,\n.session-timing-type-text {\n  padding: 0.1rem 0.4rem;\n}\n.requested .session-state-text {\n  background-color: #eebd60;\n}\n.reserved .session-state-text {\n  background-color: #71bcc1;\n}\nß.active .session-state-text {\n  background-color: #71ce99;\n}\n.ended .session-state-text {\n  background-color: #71bcc1;\n}\n.rejected .session-state-text {\n  background-color: #e65844;\n}\n.icon-button {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Nlc3Npb24tbGlzdC1pdGVtL3Nlc3Npb24tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2ZvbnRzLnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUFoREE7RUFDSSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQWtESjtBQWhERTtFRW9DRCxtQkZuQzBCO0VFb0MxQiwyQkZwQzBCO0VFcUN2Qix3QkZyQ3VCO0VFc0N2Qix1QkFBQTtFRnJDQSxZQUFBO0VBQ0EseUJFRG1CO0FGdUR2QjtBQXBERTs7RUFFRSxzQkFBQTtBQXVESjtBQXBESTtFQUNFLHlCRUhZO0FGMERsQjtBQXJESTtFQUNFLHlCRWJVO0FGb0VoQjtBQXJESTtFQUNFLHlCRVZVO0FGaUVoQjtBQXJESTtFQUNFLHlCRW5CVTtBRjBFaEI7QUFyREk7RUFDRSx5QkVqQlk7QUZ3RWxCO0FBcERFO0VBRUUsZUFBQTtBQXNESiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWxpc3QtaXRlbS9zZXNzaW9uLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdGhlbWUvY29tbW9uLnNjc3NcIjtcblxuLnNlc3Npb24tdHlwZS1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0MDtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbiAgLnNlc3Npb24taW5mby10YWcge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMjBweCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3ItZGFyaztcbiAgfVxuICAuc2Vzc2lvbi1zdGF0ZS10ZXh0LFxuICAuc2Vzc2lvbi10aW1pbmctdHlwZS10ZXh0IHtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMC40cmVtO1xuICB9XG4gIC5zZXNzaW9uLXN0YXRlLXRleHQge1xuICAgIC5yZXF1ZXN0ZWQgJiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcbiAgICB9XG4gICAgLnJlc2VydmVkICYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgfVxuICAgIMOfLmFjdGl2ZSAme1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAuZW5kZWQgJntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAucmVqZWN0ZWQgJntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgfVxuICB9XG4gIC5pY29uLWJ1dHRvblxuICB7XG4gICAgZm9udC1zaXplOjFyZW07XG4gIH1cbiAgIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIlxuQGltcG9ydCAnZm9udHMuc2Nzcyc7XG4kZm9udCA6IFwibXlJcmFuU2Fuc1wiO1xuJGZvbnROdW0gOiBcIm15SXJhblNhbnNGYU51bVwiO1xuJHByaW1hcnktY29sb3ItZGFyazogIzQ3OTY5YjtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiNhNWRhZGU7XG4kcHJpbWFyeS1jb2xvci14ZGFyazojMmM4MTg2O1xuJHByaW1hcnktY29sb3IteGxpZ2h0OiNkN2YzZjY7XG4kcHJpbWFyeS1jb2xvcjogIzcxYmNjMTtcbiRzZWNvbmRhcnktY29sb3ItZGFyazogI2NlMzIxYztcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6I2ZlN2Y3MDtcbiRzZWNvbmRhcnktY29sb3IteGRhcms6I2EyMWQwYTtcbiRzZWNvbmRhcnktY29sb3IteGxpZ2h0OiNmZmExOTg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTY1ODQ0O1xuJHRlcnRpYXJ5LWNvbG9yOiM3MWNlOTk7XG4kcXVhdGVybmFyeS1jb2xvcjojZWViZDYwO1xuJGRhcmstdGV4dC1jb2xvcjojNGU0ZTRlO1xuJGxpZ2h0LXRleHQtY29sb3I6I2E1YTVhNTtcbiRvbmxpbmUtY29sb3I6bGltZTtcbiRvZmZsaW5lLWNvbG9yOmdyYXk7XG5AbWl4aW4gcm90YXRlKCRkZWdyZWVzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xufVxuQG1peGluIGJveC1zaGFkb3coJGxlZnQsICR0b3AsICRyYWRpdXMsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsLWluc2V0KCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC0tYm9yZGVyLXJhZGl1czokcmFkaXVzO1xufVxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59Il19 */";
      /***/
    },

    /***/
    "mW1N":
    /*!*****************************************************************************!*\
      !*** ./src/app/common/basic-user-profile/basic-user-profile.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function mW1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.avatar {\n  width: 6rem;\n  margin: 1rem;\n  height: 6rem;\n  background-size: cover;\n  background-position: center center;\n  border-radius: 50px;\n}\n.name {\n  text-align: right;\n  font-family: \"myIranSans\";\n}\n.online-status {\n  padding: 0 0.4rem;\n}\n.sessions-count-label {\n  color: #2c8186;\n}\n.mean-score-label {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vYmFzaWMtdXNlci1wcm9maWxlL2Jhc2ljLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBL0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBaURGO0FBL0NBO0VBQ0UsaUJBQUE7RUFDQSx5QkNWTTtBRDREUjtBQWhEQTtFQUNFLGlCQUFBO0FBbURGO0FBaERBO0VBQ0UsY0NibUI7QURnRXJCO0FBakRBO0VBQ0UsV0FBQTtBQW9ERiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9iYXNpYy11c2VyLXByb2ZpbGUvYmFzaWMtdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fucy50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnNfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSkudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfSIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvY29tbW9uLnNjc3NcIjtcblxuLmF2YXRhciB7XG4gIHdpZHRoOiA2cmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5uYW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcbn1cbi5vbmxpbmUtc3RhdHVzIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG59XG5cbi5zZXNzaW9ucy1jb3VudC1sYWJlbCB7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvci14ZGFyaztcbn1cbi5tZWFuLXNjb3JlLWxhYmVsIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5zZXNzaW9ucy1jb3VudCB7XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "nnJo":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/loading-toolbar-button/loading-toolbar-button.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nnJo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button *ngIf=\"visible\" class=\"\" disabled>\n  <ion-spinner name=\"lines-small\"></ion-spinner>\n</ion-button>\n<ion-button *ngIf=\"imNoConnection\" (click)=\"imReconnect()\">\n  <ion-icon  name=\"refresh-outline\"></ion-icon>\n  <span class=\"retry-text\"> سعی مجدد در {{imRetryRemainingSeconds}} ثانیه</span>\n</ion-button>";
      /***/
    },

    /***/
    "oPjg":
    /*!************************************!*\
      !*** ./src/app/models/provider.ts ***!
      \************************************/

    /*! exports provided: Provider, ProviderStatus, ProviderStatsType, EducationalDegree */

    /***/
    function oPjg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Provider", function () {
        return Provider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProviderStatus", function () {
        return ProviderStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProviderStatsType", function () {
        return ProviderStatsType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationalDegree", function () {
        return EducationalDegree;
      });
      /* harmony import */


      var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./model */
      "1I1D");

      var Provider = /*#__PURE__*/function (_model__WEBPACK_IMPOR2) {
        _inherits(Provider, _model__WEBPACK_IMPOR2);

        var _super5 = _createSuper(Provider);

        function Provider() {
          _classCallCheck(this, Provider);

          return _super5.apply(this, arguments);
        }

        _createClass(Provider, null, [{
          key: "getVerifiedByAdminText",
          value: function getVerifiedByAdminText(provider) {
            if (provider.verified_by_admin) {
              return "تأیید شده";
            }

            return "در انتظار تأیید";
          }
        }, {
          key: "getStatusText",
          value: function getStatusText(status) {
            switch (status) {
              case ProviderStatus.OFFLINE:
                return "غیرفعال";

              case ProviderStatus.IN_SESSION:
                return "در جلسه";

              case ProviderStatus.ONLINE:
                return "فعال";
            }
          }
        }, {
          key: "getStatusClass",
          value: function getStatusClass(status) {
            switch (status) {
              case ProviderStatus.OFFLINE:
                return "offline";

              case ProviderStatus.IN_SESSION:
                return "in-session";

              case ProviderStatus.ONLINE:
                return "online";
            }
          }
        }, {
          key: "getCertificateFileName",
          value: function getCertificateFileName(provider) {
            if (provider.provider_verification_documents == null) {
              return false;
            }

            var doc = provider.provider_verification_documents.find(function (document) {
              return document.title == "certificate";
            });

            if (doc) {
              return doc.url;
            }

            return false;
          }
        }, {
          key: "getDegreeString",
          value: function getDegreeString(degree) {
            switch (degree) {
              case EducationalDegree.HIGH_SCHOOL_DIPLOMA:
                return "دیپلم";

              case EducationalDegree.BACHELORS:
                return "کارشناسی";

              case EducationalDegree.MASTERS:
                return "کارشناسی ارشد";

              case EducationalDegree.PHD:
                return "دکتری";
            }
          }
        }, {
          key: "getStatTypeString",
          value: function getStatTypeString(statType) {
            switch (statType) {
              case ProviderStatsType.PROVIDER_STATS_ONLINE_COUNT:
                return "آنلاین";

              case ProviderStatsType.PROVIDER_STATS_IN_SESSION_COUNT:
                return "در حال مشاوره";

              case ProviderStatsType.PROVIDER_STATS_TOTAL_COUNT:
                return "کل";
            }
          }
        }]);

        return Provider;
      }(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]);

      var ProviderStatus;

      (function (ProviderStatus) {
        ProviderStatus[ProviderStatus["OFFLINE"] = 0] = "OFFLINE";
        ProviderStatus[ProviderStatus["ONLINE"] = 1] = "ONLINE";
        ProviderStatus[ProviderStatus["IN_SESSION"] = 2] = "IN_SESSION";
        ProviderStatus[ProviderStatus["NA"] = 3] = "NA";
      })(ProviderStatus || (ProviderStatus = {}));

      var ProviderStatsType;

      (function (ProviderStatsType) {
        ProviderStatsType[ProviderStatsType["PROVIDER_STATS_ONLINE_COUNT"] = 1] = "PROVIDER_STATS_ONLINE_COUNT";
        ProviderStatsType[ProviderStatsType["PROVIDER_STATS_IN_SESSION_COUNT"] = 2] = "PROVIDER_STATS_IN_SESSION_COUNT";
        ProviderStatsType[ProviderStatsType["PROVIDER_STATS_TOTAL_COUNT"] = 3] = "PROVIDER_STATS_TOTAL_COUNT";
      })(ProviderStatsType || (ProviderStatsType = {}));

      var EducationalDegree;

      (function (EducationalDegree) {
        EducationalDegree[EducationalDegree["HIGH_SCHOOL_DIPLOMA"] = 1] = "HIGH_SCHOOL_DIPLOMA";
        EducationalDegree[EducationalDegree["BACHELORS"] = 2] = "BACHELORS";
        EducationalDegree[EducationalDegree["MASTERS"] = 3] = "MASTERS";
        EducationalDegree[EducationalDegree["PHD"] = 4] = "PHD";
      })(EducationalDegree || (EducationalDegree = {}));
      /***/

    },

    /***/
    "qZOq":
    /*!***********************************!*\
      !*** ./src/app/models/message.ts ***!
      \***********************************/

    /*! exports provided: Message, MessageAttachment, MessageStatus */

    /***/
    function qZOq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Message", function () {
        return Message;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageAttachment", function () {
        return MessageAttachment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageStatus", function () {
        return MessageStatus;
      });

      var Message = /*#__PURE__*/function () {
        function Message() {
          _classCallCheck(this, Message);

          this.fromMe = false;
          this.attachments = null;
          this.isFirst = false;
          this.isLast = false;
          this.isImage = false;
          this.isAudio = false;
          this.file = null;
        }

        _createClass(Message, [{
          key: "getIsLast",
          value: function getIsLast() {
            return this.isLast;
          }
        }, {
          key: "notifyDirty",
          value: function notifyDirty() {
            this.NotifyDirtySubject.next(this);
          }
        }]);

        return Message;
      }();

      var MessageAttachment = function MessageAttachment() {
        _classCallCheck(this, MessageAttachment);
      };

      var MessageStatus;

      (function (MessageStatus) {
        MessageStatus[MessageStatus["MESSAGE_STATUS_NONE"] = 0] = "MESSAGE_STATUS_NONE";
        MessageStatus[MessageStatus["MESSAGE_STATUS_QUEUED"] = 1] = "MESSAGE_STATUS_QUEUED";
        MessageStatus[MessageStatus["MESSAGE_STATUS_SENDING"] = 2] = "MESSAGE_STATUS_SENDING";
        MessageStatus[MessageStatus["MESSAGE_STATUS_FAILED"] = 3] = "MESSAGE_STATUS_FAILED";
        MessageStatus[MessageStatus["MESSAGE_STATUS_SENT"] = 4] = "MESSAGE_STATUS_SENT";
        MessageStatus[MessageStatus["MESSAGE_STATUS_RECEIVED"] = 5] = "MESSAGE_STATUS_RECEIVED";
        MessageStatus[MessageStatus["MESSAGE_STATUS_READ"] = 6] = "MESSAGE_STATUS_READ";
        MessageStatus[MessageStatus["MESSAGE_STATUS_TO_ME"] = 7] = "MESSAGE_STATUS_TO_ME"; // Message from another user.
      })(MessageStatus || (MessageStatus = {}));
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../architecture/auto-single-get-resource */
      "sTv3");
      /* harmony import */


      var _http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./http-helper.service */
      "tLlE");
      /* harmony import */


      var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/architecture/shared-resource-async-request-bundle */
      "JTjR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../models/user */
      "2hxB");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../architecture/auto-arrayed-shared-resource */
      "6cTQ");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, env, auth, httpHelper) {
          var _this90 = this;

          _classCallCheck(this, UserService);

          this.http = http;
          this.env = env;
          this.auth = auth;
          this.httpHelper = httpHelper;
          this.balance = null;
          this.allUsersShared = new _architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_11__["AutoArrayedGetResource"]("users/getAll");
          this.userShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_1__["AutoSingleGetResource"]("users/getById");
          this.myPayments = new _architecture_auto_arrayed_shared_resource__WEBPACK_IMPORTED_MODULE_11__["AutoArrayedGetResource"]("users/payments");
          this.auth.loggedIn.subscribe(function (result) {
            _this90.balanceShared.request();
          });
          this.auth.loggedOut.subscribe(function (result) {
            _this90.balance = null;
          });
          this.balanceShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__["SharedResourceAsyncRequestBundle"](this.updateUserBalance, null, this);
          this.discountsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__["SharedResourceAsyncRequestBundle"](this.getDiscounts, null, this);
          this.statsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_3__["SharedResourceAsyncRequestBundle"](this.getStats, [], this);
        }

        _createClass(UserService, [{
          key: "updateUserBalance",
          value: function updateUserBalance() {
            var _this91 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "users/getBalance";
              return _this91.http.get(_this91.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                _this91.balanceShared.setResource(result);

                _this91.balance = result;
                return result;
              }));
            }));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            var _this92 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken().then(function (token) {
              var url = "users/getById/" + id;
              return _this92.http.get(_this92.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
                return data;
              })).toPromise();
            }));
          }
        }, {
          key: "getByUid",
          value: function getByUid(uid) {
            var _this93 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken().then(function (token) {
              var url = "users/getByUid/" + uid;
              return _this93.http.get(_this93.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
                return data;
              })).toPromise();
            }));
          }
        }, {
          key: "getPaymentAuthority",
          value: function getPaymentAuthority(amount) {
            return this.httpHelper.getAuthenticated('payment/getPaymentAuthority/' + amount);
          }
        }, {
          key: "updateRemoteStats",
          value: function updateRemoteStats() {
            var _this94 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "stats";
              return _this94.http.get(_this94.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                _this94.env.remoteStats = result;
                return result;
              }));
            }));
          }
        }, {
          key: "getAdditionalInfo",
          value: function getAdditionalInfo(userId) {
            var _this95 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "users/getAdditionalInfo/" + userId;
              return _this95.http.get(_this95.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "updateAdditionalInfo",
          value: function updateAdditionalInfo(info) {
            var _this96 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "users/updateInfo";
              return _this96.http.post(_this96.env.API_URL + url, JSON.stringify(info), {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "deposit",
          value: function deposit(amount) {
            var _this97 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "users/deposit";
              return _this97.http.post(_this97.env.API_URL + url, {
                amount: amount
              }, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "getDiscounts",
          value: function getDiscounts() {
            var _this98 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "getDiscounts";
              return _this98.http.get(_this98.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                _this98.discountsShared.setResource(result);

                return result;
              }));
            }));
          }
        }, {
          key: "useDiscount",
          value: function useDiscount(discountId) {
            var _this99 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "useDiscount/" + discountId;
              return _this99.http.post(_this99.env.API_URL + url, null, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "getStats",
          value: function getStats() {
            var _this100 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "users/usersStats";
              return _this100.http.get(_this100.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                result = result;
                var remoteData = [{
                  text: 'کل',
                  number: result[_models_user__WEBPACK_IMPORTED_MODULE_5__["UserStatsType"].USER_STATS_TOTAL_COUNT],
                  url: null,
                  link_options: null
                }, {
                  text: 'تایید شده',
                  number: result[_models_user__WEBPACK_IMPORTED_MODULE_5__["UserStatsType"].USER_STATS_VERIFIED_COUNT],
                  url: null,
                  link_options: null
                }];

                _this100.statsShared.setResource(remoteData);

                return remoteData;
              }));
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"]])], UserService);
      /***/
    },

    /***/
    "qm4o":
    /*!*****************************************************************************!*\
      !*** ./src/app/common/provider-info-edit/provider-info-edit.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function qm4o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.category-name {\n  font-family: \"myIranSans\";\n  font-size: 0.7rem;\n}\n.category-icon {\n  color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vcHJvdmlkZXItaW5mby1lZGl0L3Byb3ZpZGVyLWluZm8tZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FBaERBO0VBRUkseUJDREk7RURFSixpQkFBQTtBQWlESjtBQTlDQTtFQUVJLGNDSWM7QUQ0Q2xCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3Byb3ZpZGVyLWluZm8tZWRpdC9wcm92aWRlci1pbmZvLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCAnc3JjL3RoZW1lL2NvbW1vbi5zY3NzJztcbi5jYXRlZ29yeS1uYW1lXG57XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIGZvbnQtc2l6ZTowLjdyZW07XG5cbn1cbi5jYXRlZ29yeS1pY29uXG57XG4gICAgY29sb3I6JHNlY29uZGFyeS1jb2xvciA7XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */";
      /***/
    },

    /***/
    "qm69":
    /*!******************************************************!*\
      !*** ./src/app/services/sessions-manager-service.ts ***!
      \******************************************************/

    /*! exports provided: SessionsManagerService, ChatType */

    /***/
    function qm69(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsManagerService", function () {
        return SessionsManagerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatType", function () {
        return ChatType;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _http_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http-helper.service */
      "tLlE");
      /* harmony import */


      var _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../architecture/auto-single-get-resource */
      "sTv3");
      /* harmony import */


      var _common_score_score_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../common/score/score.component */
      "kg6Y");
      /* harmony import */


      var src_app_models_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/session */
      "m6xN");
      /* harmony import */


      var _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../common/deposit/deposit.component */
      "wDsb");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./notification.service */
      "OC8m");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user.service */
      "qfBg");
      /* harmony import */


      var _provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./provider.service */
      "gs/X");
      /* harmony import */


      var src_app_models_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/provider */
      "oPjg");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _im_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./im.service */
      "K4UH");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../models/user */
      "2hxB");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./env.service */
      "5zL6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../architecture/shared-resource-async-request-bundle */
      "JTjR");

      var SessionsManagerService = /*#__PURE__*/function () {
        function SessionsManagerService(env, auth, http, imService, navController, providerService, userService, notificationService, alert, actionSheet, httpHelper) {
          var _this101 = this;

          _classCallCheck(this, SessionsManagerService);

          this.env = env;
          this.auth = auth;
          this.http = http;
          this.imService = imService;
          this.navController = navController;
          this.providerService = providerService;
          this.userService = userService;
          this.notificationService = notificationService;
          this.alert = alert;
          this.actionSheet = actionSheet;
          this.httpHelper = httpHelper;
          this.myCurrentSessions = [];
          this.myPastSessions = [];
          this.myCurrentSessionsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.myPastSessionsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
          this.isUser = null;
          this.onlineObservables = [];
          this.onlineIds = [];
          this.hasActiveIMTopic = false;
          this.IMPeerUser = null;
          this.MyUser = null;
          this.sessionShared = new _architecture_auto_single_get_resource__WEBPACK_IMPORTED_MODULE_2__["AutoSingleGetResource"]("sessions/getById");
          this.usrPeerProviders = [];
          this.pvdPeerUsers = [];
          this.myCurrentSessionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getMyCurrentSessions, [], this);
          this.allMySessionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getAllMySessions, [], this);
          this.myActiveRequestsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getMyActiveRequests, [], this);
          this.myPeerSubscriptionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getPeers, [], this);
          this.selectedProviderReservedSessionsShared = new _architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_20__["SharedResourceAsyncRequestBundle"](this.getProviderReservedSessions, [], this);
          this.auth.getUser().then(function (user) {
            _this101.MyUser = user;
          });
          this.auth.loggedOut.subscribe(function (result) {
            if (result == true) {
              //logout stuff
              _this101.isUser = null;
            }
          });
          this.notificationService.sessionManagerService = this;
          this.imService.contactsFetched.subscribe(function (result) {
            if (result) {
              _this101.onlineIds.forEach(function (id) {
                var index = _this101.onlineIds.indexOf(id);

                _this101.onlineObservables[index].next(_this101.imService.isContactTopicOnline(id));
              });

              _this101.auth.isUser().then(function (is) {
                _this101.isUser = is;

                if (is) {//this.getUsrPeerProviders();
                } else {//this.getPvdPeerUsers();
                    //this.checkPublicProviderPresSubscription();
                  }
              });
            }
          });
        }

        _createClass(SessionsManagerService, [{
          key: "checkPublicProviderPresSubscription",
          value: function checkPublicProviderPresSubscription() {
            var topic = this.env.REMOTE_CONFIG.provider_pres_topic;

            if (!this.imService.isTopicInContacts(topic)) {
              this.imService.acceptTopic(topic);
            }
          }
        }, {
          key: "returnUrlIfNoActiveIMTopic",
          value: function returnUrlIfNoActiveIMTopic() {
            var _this102 = this;

            return this.auth.isAuthenticated().then(function (result) {
              if (result) {
                return _this102.auth.isUser().then(function (result) {
                  if (result) {
                    return "peer-chats/" + _this102.env.USER_ROLE_ID;
                  } else {
                    return "peer-chats/" + _this102.env.USER_ROLE_ID;
                  }
                });
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])("login").toPromise();
              }
            }, function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])("login").toPromise();
            })["catch"]();
          }
        }, {
          key: "getProviderReservedSessions",
          value: function getProviderReservedSessions(providerId) {
            var _this103 = this;

            var url = "sessions/getProviderPresentAndFutureSessions/" + providerId;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this103.http.get(_this103.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this103.selectedProviderReservedSessionsShared.setResource(result);

                return result;
              }));
            }));
          }
        }, {
          key: "getAllMySessions",
          value: function getAllMySessions() {
            var _this104 = this;

            var url = "sessions/getSessions";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this104.http.get(_this104.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this104.allMySessionsShared.setResource(result);

                return result;
              }));
            }));
          }
        }, {
          key: "getMyActiveRequests",
          value: function getMyActiveRequests() {
            var _this105 = this;

            var url = "sessions/getActiveRequests";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this105.http.get(_this105.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this105.myActiveRequestsShared.setResource(result);

                return result;
              }));
            }));
          }
        }, {
          key: "getMyCurrentSessions",
          value: function getMyCurrentSessions() {
            var _this106 = this;

            var url = "sessions/getPresentAndFutureSessions";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this106.http.get(_this106.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this106.myCurrentSessions = result;

                _this106.myCurrentSessionsShared.setResource(result);

                _this106.myCurrentSessionsUpdated.next(_this106.myCurrentSessions);

                return result;
              }));
            }));
          }
        }, {
          key: "getMyPastSessions",
          value: function getMyPastSessions() {
            var _this107 = this;

            var url = "sessions/getPastSessions";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this107.http.get(_this107.env.API_URL + url, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this107.myPastSessions = result;

                _this107.myPastSessionsUpdated.next(_this107.myPastSessions);

                return result;
              }));
            }));
          }
        }, {
          key: "remoteEndSession",
          value: function remoteEndSession(session) {
            var _this108 = this;

            var url = "sessions/end/" + session.id;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this108.http.post(_this108.env.API_URL + url, null, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "calculateSessionDuration",
          value: function calculateSessionDuration(session) {
            if (session.started == null) {
              return null;
            }

            var endDate = null;

            if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ENDED) {
              endDate = session.ended;
            } else if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ACTIVE) {
              endDate = this.env.generateUTCNowString();
            }

            var diffMs = new Date(endDate).getTime() - new Date(session.started).getTime(); // milliseconds between now & Christmas

            var diffDays = Math.floor(diffMs / 86400000); // days

            var diffHrs = Math.floor(diffMs % 86400000 / 3600000); // hours

            var diffMins = Math.ceil(diffMs % 86400000 % 3600000 / 60000); // minutes

            var totalDiffMins = Math.floor(diffMs / 60000);
            return totalDiffMins;
          }
        }, {
          key: "calculateSessionTotalFee",
          value: function calculateSessionTotalFee(session) {
            var duration = session.duration;

            if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ACTIVE || src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session) == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ENDED) {
              duration = this.calculateSessionDuration(session);
            }

            if (duration != null) {
              if (duration < 5) {
                return 0;
              }

              var total = duration * session.per_minute_fee;
              return total;
            }

            return 0;
          }
        }, {
          key: "addOnlineObserver",
          value: function addOnlineObserver(user) {
            var observable = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
            this.onlineObservables.push(observable);
            this.onlineIds.push(user.tinode_uid);
            return observable;
          }
        }, {
          key: "removeOnlineObserver",
          value: function removeOnlineObserver(user) {
            var index = this.onlineIds.indexOf(user.tinode_uid);
            this.onlineIds.splice(index, 1);
            this.onlineObservables.splice(index, 1);
          }
        }, {
          key: "usrHasRequestedSessionForThisProvider",
          value: function usrHasRequestedSessionForThisProvider(providerId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
            return this.getMyCurrentSessions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (sessions) {
              var found = 0;
              sessions.forEach(function (session) {
                if (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].isRequested(session)) {
                  found++;
                }
              });
              return found > 0;
            }));
          }
        }, {
          key: "chechRequestEligibility",
          value: function chechRequestEligibility(providerId, dateFrom, dateTo, duration, type, timingType) {
            var _this109 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "sessions/checkRequestEligibility";
              return _this109.http.post(_this109.env.API_URL + url, {
                provider_id: providerId,
                date_from: dateFrom,
                date_to: dateTo,
                duration: duration,
                type: type,
                timing_type: timingType
              }, {
                headers: headers
              });
            }));
          }
        }, {
          key: "usrRequestSession",
          value: function usrRequestSession(providerId, dateFrom, dateTo, duration, type, timingType) {
            var _this110 = this;

            return this.usrHasRequestedSessionForThisProvider(providerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (has) {
              if (!has) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(_this110.imService.createNewGroupTopic()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (topicName) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(_this110.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                      Authorization: token["token_type"] + " " + token["access_token"],
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    });
                    var url = "sessions/request";
                    return _this110.http.post(_this110.env.API_URL + url, {
                      provider_id: providerId,
                      chat_topic_name: topicName,
                      reserved_from: dateFrom,
                      reserved_to: dateTo,
                      duration: duration,
                      type: type,
                      timing_type: timingType
                    }, {
                      headers: headers
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (session) {
                      _this110.notificationService.notifySessionUpdate(session.id, session.provider.user.id).subscribe();

                      _this110.userService.updateUserBalance().subscribe();

                      _this110.imService.resetContactList();

                      _this110.myCurrentSessions.push(session);

                      _this110.myCurrentSessionsUpdated.next(_this110.myCurrentSessions);

                      return session;
                    }));
                  }));
                }));
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(null);
            }));
          }
        }, {
          key: "incomeReport",
          value: function incomeReport(dateFrom, dateTo) {
            var _this111 = this;

            var url = "sessions/selectRangeByDate";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this111.http.post(_this111.env.API_URL + url, {
                from_date: dateFrom,
                to_date: dateTo
              }, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                return result;
              }));
            }));
          }
        }, {
          key: "isUserOnline",
          value: function isUserOnline(user) {
            if (user == null) return false;
            return this.imService.isContactTopicOnline(user.tinode_uid);
          }
        }, {
          key: "getUserUnreadMessagesCount",
          value: function getUserUnreadMessagesCount(user) {
            return this.getTopicUnreadMessagesCount(user.tinode_uid);
          }
        }, {
          key: "getSessionUnreadMessagesCount",
          value: function getSessionUnreadMessagesCount(session) {
            return this.getTopicUnreadMessagesCount(session.chat_topic_name);
          }
        }, {
          key: "getTopicUnreadMessagesCount",
          value: function getTopicUnreadMessagesCount(topic) {
            var contact = this.imService.chatList.find(function (contactItem) {
              return contactItem.topic == topic;
            });

            if (contact != undefined) {
              if (contact.unread != undefined) return parseInt(contact.unread);
            }

            return 0;
          }
        }, {
          key: "isUserInContacts",
          value: function isUserInContacts(user) {
            if (user == null) return false;
            return this.imService.isTopicInContacts(user.tinode_uid);
          }
        }, {
          key: "isContactListReady",
          value: function isContactListReady() {
            return this.imService.fetchedContactList;
          }
        }, {
          key: "getUsrPeerProviders",
          value: function getUsrPeerProviders() {
            var _this112 = this;

            var uids = [];
            this.imService.chatList.filter(function (contact) {
              return contact.topic.substr(0, 3) == "usr";
            }).forEach(function (contact) {
              uids.push(contact.topic);

              if (_this112.usrPeerProviders.find(function (provider) {
                return provider.user.tinode_uid == contact.topic;
              }) == undefined) {
                var provider = new src_app_models_provider__WEBPACK_IMPORTED_MODULE_10__["Provider"](true, _this112.providerService.getByUid, _this112.providerService, contact.topic);
                provider.user = new _models_user__WEBPACK_IMPORTED_MODULE_13__["User"]();
                provider.user.tinode_uid = contact.topic;

                _this112.usrPeerProviders.push(provider);
              }
            });
          }
        }, {
          key: "getPvdPeerUsers",
          value: function getPvdPeerUsers() {
            var _this113 = this;

            var uids = [];
            this.imService.chatList.filter(function (contact) {
              return contact.topic.substr(0, 3) == "usr";
            }).forEach(function (contact) {
              uids.push(contact.topic);

              if (_this113.pvdPeerUsers.find(function (user) {
                return user.tinode_uid == contact.topic;
              }) == undefined) {
                var user = new _models_user__WEBPACK_IMPORTED_MODULE_13__["User"](true, _this113.userService.getByUid, _this113.userService, contact.topic);
                user.tinode_uid = contact.topic;

                _this113.pvdPeerUsers.push(user);
              }
            });
          }
        }, {
          key: "startPeer2PeerChat",
          value: function startPeer2PeerChat(user) {
            this.startChat(user.tinode_uid, user, null, !this.isUserInContacts(user));
          }
        }, {
          key: "usrStartSessionChat",
          value: function usrStartSessionChat(session) {
            this.startChat(session.chat_topic_name, session.provider.user, session, false);
          }
        }, {
          key: "pvdStartSessionChat",
          value: function pvdStartSessionChat(session) {
            this.startChat(session.chat_topic_name, session.user, session, false);
          }
        }, {
          key: "leaveChatPage",
          value: function leaveChatPage() {
            this.imService.leave(this.imService.topic).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe();
            this.imService.notifyEnteredChatPage(false);
            this.IMPeerUser = null;
            this.session = null;
            this.hasActiveIMTopic = false;
          }
        }, {
          key: "enterChat",
          value: function enterChat(type, id, providerPerspective) {
            this.navController.navigateForward(["/messenger", type, id, providerPerspective ? 1 : 0]);
          }
        }, {
          key: "startChat",
          value: function startChat(topic, peerUser, session, isNew) {
            var _this114 = this;

            this.imService.setTopic(topic, isNew).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(-1);
            })).subscribe(function (result) {
              if (result) {
                _this114.IMPeerUser = peerUser;
                _this114.session = session;
                _this114.imService.peerUser = peerUser;
                _this114.hasActiveIMTopic = true;

                _this114.navController.navigateForward(["/usr/session"]);
              } else {
                _this114.alert.presentError("ورود به گفتگو با مشکل مواجه شد.");
              }
            });
          }
        }, {
          key: "acceptSession",
          value: function acceptSession(session) {
            var _this115 = this;

            var url = "sessions/accept/" + session.id;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this115.http.post(_this115.env.API_URL + url, null, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                result;

                _this115.notificationService.notifySessionUpdate(session.id, session.user.id).subscribe();

                _this115.myActiveRequestsShared.request();

                _this115.allMySessionsShared.request();

                _this115.imService.acceptTopic(session.chat_topic_name);

                return result;
              }));
            }));
          }
        }, {
          key: "rejectSession",
          value: function rejectSession(session) {
            return this.endSession(session);
          }
        }, {
          key: "startSession",
          value: function startSession(session) {
            var _this116 = this;

            var url = "sessions/start/" + session.id;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this116.http.post(_this116.env.API_URL + url, null, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this116.notificationService.notifySessionUpdate(session.id, session.user.id).subscribe();

                _this116.allMySessionsShared.request();

                return result;
              }));
            }));
          }
        }, {
          key: "endSession",
          value: function endSession(session) {
            var _this117 = this;

            var url = "sessions/end/" + session.id;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              return _this117.http.post(_this117.env.API_URL + url, null, {
                headers: {
                  Authorization: token["token_type"] + " " + token["access_token"],
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this117.notificationService.notifySessionUpdate(session.id, session.user.id).subscribe();

                _this117.myActiveRequestsShared.request();

                _this117.allMySessionsShared.request();

                _this117.openReservationPage();

                return result;
              }));
            }));
          }
        }, {
          key: "updateSessioStatenInCurrentSessions",
          value: function updateSessioStatenInCurrentSessions(session) {
            var oldSession = this.myCurrentSessions.find(function (rSession) {
              return rSession.id == session.id;
            });
            oldSession.accepted = session.accepted;
            oldSession.created_at = session.created_at;
            oldSession.ended = session.ended;
            oldSession.started = session.started;
            this.myCurrentSessionsUpdated.next(this.myCurrentSessions);
          }
        }, {
          key: "removeSessionFromCurrentSessions",
          value: function removeSessionFromCurrentSessions(session) {
            this.myCurrentSessions.splice(this.myCurrentSessions.indexOf(this.myCurrentSessions.find(function (rSession) {
              return rSession.id == session.id;
            })), 1);
            this.myCurrentSessionsUpdated.next(this.myCurrentSessions);
          }
        }, {
          key: "hasEnoughBalanceForSessionRequest",
          value: function hasEnoughBalanceForSessionRequest(provider, sessionType, duration) {
            var showNotEnoughBalanceModal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            var fee = provider.per_minute_text_fee;

            if (sessionType == src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionType"].Call) {
              fee = provider.per_minute_call_fee;
            }

            var cost = fee * duration;
            var balance = this.userService.balanceShared.resource().spendable;

            if (cost > balance) {
              if (showNotEnoughBalanceModal) {
                this.alert.presentNotEnoughBalance(cost, balance, _common_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_5__["DepositComponent"]);
              }

              return false;
            }

            return true;
          }
        }, {
          key: "updateScore",
          value: function updateScore(sessionId, score) {
            var _this118 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "sessions/updateScore/" + sessionId;
              return _this118.http.post(_this118.env.API_URL + url, {
                score: score
              }, {
                headers: headers
              });
            }));
          }
        }, {
          key: "reserveSession",
          value: function reserveSession(date, hours, provider, sessionTiminType, sessionInfoComponent) {
            this.openSessionTypesActionSheet(sessionTiminType, hours, date, provider, sessionInfoComponent);
          }
        }, {
          key: "openSessionTypesActionSheet",
          value: function openSessionTypesActionSheet(timingType, reserveHours, date, provider, sessionInfoComponent) {
            var _this119 = this;

            var buttons = [];
            buttons.push({
              text: "مشاوره نوشتاری",
              role: "destructive",
              handler: function handler() {
                _this119.openSessionDurationsActionSheet(src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionType"].TEXT, timingType, reserveHours, date, provider, sessionInfoComponent);
              }
            });
            buttons.push({
              text: "مشاوره تلفنی",
              role: "destructive",
              handler: function handler() {
                _this119.openSessionDurationsActionSheet(src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionType"].Call, timingType, reserveHours, date, provider, sessionInfoComponent);
              }
            });
            this.alert.addCancelButton(buttons);
            this.alert.presentActionSheet(buttons).subscribe();
          }
        }, {
          key: "openRequestSessionPage",
          value: function openRequestSessionPage(duration, sessionType, sessionTimingType, hours, date, provider, sessionInfoComponent) {
            if (this.hasEnoughBalanceForSessionRequest(provider, sessionType, duration)) {
              var props = {
                session: src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].createMockSession(hours, date, provider, duration, sessionType, sessionTimingType),
                providerPerspective: false
              };
              this.alert.presentModal(sessionInfoComponent, props).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe();
            }
          }
        }, {
          key: "openSessionDurationsActionSheet",
          value: function openSessionDurationsActionSheet(sessionType, timingType, reserveHours, date, provider, sessionInfoComponent) {
            var _this120 = this;

            var buttons = [];

            var _loop2 = function _loop2(i) {
              var duration = i * 15;
              buttons.push({
                text: duration + " دقیقه",
                role: "destructive",
                handler: function handler() {
                  _this120.openRequestSessionPage(duration, sessionType, timingType, reserveHours, date, provider, sessionInfoComponent);
                }
              });
            };

            for (var i = 1; i < 5; i++) {
              _loop2(i);
            }

            this.alert.addCancelButton(buttons);
            this.alert.presentActionSheet(buttons).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe();
          }
        }, {
          key: "handleIncomingSessionUpdateNotification",
          value: function handleIncomingSessionUpdateNotification(session, sender) {
            var senderName = _models_user__WEBPACK_IMPORTED_MODULE_13__["User"].getName(sender);

            var notifMessage = "";
            var pageToOpen = null;

            switch (src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["Session"].getState(session)) {
              case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].REQUESTED:
                notifMessage = "درخواست جلسه جدید از طرف " + senderName;
                this.myActiveRequestsShared.request();
                pageToOpen = this.openPvdActiveRequestsPage;
                break;

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].REJECTED:
                notifMessage = "درخواست شما توسط " + senderName + " رد شد";
                this.userService.balanceShared.request();
                this.allMySessionsShared.request();
                pageToOpen = this.openRequestLogPage;
                break;

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ENDED:
                notifMessage = "جلسه مشاوره توسط " + senderName + " پایان یافت.";
                pageToOpen = this.openReservationPage;
                this.allMySessionsShared.request();
                this.openReservationPage();
                break;

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].RESERVED:
                notifMessage = "درخواست رزرو شما توسط " + senderName + " تأیید شد";
                this.allMySessionsShared.request();
                pageToOpen = this.openReservationPage;
                break;

              case src_app_models_session__WEBPACK_IMPORTED_MODULE_4__["SessionState"].ACTIVE:
                notifMessage = "جلسه مشاوره با " + senderName + " باز شد";
                this.allMySessionsShared.request();
                pageToOpen = this.openReservationPage;
                break;
            }

            if (pageToOpen) {
              this.alert.presentViewNotify(notifMessage, pageToOpen, this);
            } else {
              this.alert.presentNotif(notifMessage);
            }
          }
        }, {
          key: "openReservationPage",
          value: function openReservationPage() {
            var _this121 = this;

            this.auth.getUser().then(function (user) {
              if (user.role_id == _this121.env.USER_ROLE_ID) {
                _this121.navController.navigateRoot(["/usr-reservations"]);
              } else {
                _this121.navController.navigateRoot(["/pvd-reservations"]);
              }
            });
          }
        }, {
          key: "openRequestLogPage",
          value: function openRequestLogPage() {
            var _this122 = this;

            this.auth.getUser().then(function (user) {
              if (user.role_id == _this122.env.USER_ROLE_ID) {
                _this122.navController.navigateRoot(["/usr-request-log"]);
              } else {
                _this122.navController.navigateRoot(["/pvd-request-log"]);
              }
            });
          }
        }, {
          key: "openPvdActiveRequestsPage",
          value: function openPvdActiveRequestsPage() {
            this.navController.navigateRoot(["/pvd-active-requests"]);
          }
        }, {
          key: "openScoreSession",
          value: function openScoreSession(session, score, callback, thisObject) {
            this.alert.presentModal(_common_score_score_component__WEBPACK_IMPORTED_MODULE_3__["ScoreComponent"], {
              session: session,
              score: score
            }, true, callback, thisObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe();
          }
        }, {
          key: "getPeers",
          value: function getPeers() {
            var _this123 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "getPeers";
              return _this123.http.get(_this123.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (result) {
                _this123.myPeerSubscriptionsShared.setResource(result);

                return result;
              }));
            }));
          }
        }]);

        return SessionsManagerService;
      }();

      SessionsManagerService.ctorParameters = function () {
        return [{
          type: _env_service__WEBPACK_IMPORTED_MODULE_18__["EnvService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]
        }, {
          type: _im_service__WEBPACK_IMPORTED_MODULE_12__["IMService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["NavController"]
        }, {
          type: _provider_service__WEBPACK_IMPORTED_MODULE_9__["ProviderService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ActionSheetController"]
        }, {
          type: _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"]
        }];
      };

      SessionsManagerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_env_service__WEBPACK_IMPORTED_MODULE_18__["EnvService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _im_service__WEBPACK_IMPORTED_MODULE_12__["IMService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["NavController"], _provider_service__WEBPACK_IMPORTED_MODULE_9__["ProviderService"], _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"], _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ActionSheetController"], _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"]])], SessionsManagerService);
      var ChatType;

      (function (ChatType) {
        ChatType[ChatType["P2P_WITH_USER"] = 1] = "P2P_WITH_USER";
        ChatType[ChatType["P2P_WITH_PROVIDER"] = 2] = "P2P_WITH_PROVIDER";
        ChatType[ChatType["SESSION"] = 3] = "SESSION";
      })(ChatType || (ChatType = {}));
      /***/

    },

    /***/
    "qnXZ":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/date-picker/date-picker.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qnXZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>انتخاب تاریخ</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\">\n      <ion-item button (click)=\"select(0)\">\n        <span class=\"small-text light-text\">سال</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">\n        {{getYear()}}\n        </span>\n      </ion-item>\n      <ion-item button (click)=\"select(1)\">\n        <span class=\"small-text light-text\">ماه</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">\n          {{getMonthName()}}\n        </span>\n      </ion-item>\n      <ion-item button (click)=\"select(2)\">\n        <span class=\"small-text light-text\">روز</span>\n        <span slot=\"end\" class=\"normal-text dark-text\">\n          {{day}}\n        </span>\n      </ion-item>\n    </div>\n    <div class=\"actions\">\n      <div class=\"actions-wrapper\">\n        <ion-button class=\"primary-button\" (click)=\"confirm()\" fill=\"solid\">\n          تأیید\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "rywU":
    /*!********************************************************!*\
      !*** ./src/app/common/static/terms/terms.component.ts ***!
      \********************************************************/

    /*! exports provided: TermsComponent */

    /***/
    function rywU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
        return TermsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./terms.component.html */
      "+HkC");
      /* harmony import */


      var _terms_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./terms.component.scss */
      "4bXV");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TermsComponent = /*#__PURE__*/function () {
        function TermsComponent(modal) {
          _classCallCheck(this, TermsComponent);

          this.modal = modal;
        }

        _createClass(TermsComponent, [{
          key: "dismiss",
          value: function dismiss() {
            this.modal.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsComponent;
      }();

      TermsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      TermsComponent.propDecorators = {
        providerPerspective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      TermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-terms',
        template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], TermsComponent);
      /***/
    },

    /***/
    "sL+R":
    /*!***************************************************************************!*\
      !*** ./src/app/common/provider-info-edit/provider-info-edit.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ProviderInfoEditComponent */

    /***/
    function sLR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProviderInfoEditComponent", function () {
        return ProviderInfoEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_provider_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./provider-info-edit.component.html */
      "0uqL");
      /* harmony import */


      var _provider_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./provider-info-edit.component.scss */
      "qm4o");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../select-provider-category/select-provider-category.component */
      "bPLR");
      /* harmony import */


      var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/provider.service */
      "gs/X");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/provider */
      "oPjg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ProviderInfoEditComponent = /*#__PURE__*/function () {
        function ProviderInfoEditComponent(modal, modalController, env, providerService, actionSheet, alert) {
          _classCallCheck(this, ProviderInfoEditComponent);

          this.modal = modal;
          this.modalController = modalController;
          this.env = env;
          this.providerService = providerService;
          this.actionSheet = actionSheet;
          this.alert = alert;
          this.editable = false;
          this.providerGroups = [];
          this.categories = [];
          this.fees = [];
          this.selectedTextFee = null;
          this.selectedCallFee = null;
          this.selectedDegree = 3;
          this.getDegreeText = src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__["Provider"].getDegreeString;
        }

        _createClass(ProviderInfoEditComponent, [{
          key: "loadProviderCategories",
          value: function loadProviderCategories() {//this.env.somethingIsPending("fetching user provider groups");
            // return this.providerService.getCategories().pipe(
            //   map((result) => {
            //     //this.env.somethingIsDonePending("fetching user provider groups");
            //     return (this.providerGroups = result as ProviderGroup[]);
            //   })
            // );
          }
        }, {
          key: "loadFees",
          value: function loadFees() {
            var _this124 = this;

            return this.providerService.getFees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) {
              return _this124.fees = result;
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.provider.provider_categories) {
              this.categories = this.provider.provider_categories;
            }

            this.selectedTextFee = this.provider.per_minute_text_fee ? this.provider.per_minute_text_fee : null;
            this.selectedCallFee = this.provider.per_minute_call_fee ? this.provider.per_minute_call_fee : null; //this.loadProviderCategories().subscribe();

            this.loadFees().subscribe();
          }
        }, {
          key: "addCategory",
          value: function addCategory() {
            if (!this.editable) return;
            this.presentSelectCategoryModal().subscribe();
          }
        }, {
          key: "presentSelectCategoryModal",
          value: function presentSelectCategoryModal() {
            var _this125 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.modalController.create({
              component: _select_provider_category_select_provider_category_component__WEBPACK_IMPORTED_MODULE_4__["SelectProviderCategoryComponent"],
              componentProps: {
                providerGroups: this.providerGroups
              }
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (modalController) {
              modalController.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(modalController.onDidDismiss()).subscribe(function (data) {
                if (data["data"]) {
                  if (data["data"]) {
                    _this125.addCategoryToProvider(data["data"]);
                  }
                }
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(modalController.present());
            }));
          }
        }, {
          key: "addCategoryToProvider",
          value: function addCategoryToProvider(selectedCategory) {
            var hasCat = false;
            hasCat = this.categories.find(function (category) {
              return category.id == selectedCategory.id;
            });

            if (!hasCat) {
              this.categories.push(selectedCategory);
            }
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
            if (!this.editable) return;
            var cat = this.categories.find(function (category) {
              return category.id == id;
            });
            this.categories.splice(this.categories.indexOf(cat), 1);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this126 = this;

            var provider = new src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__["Provider"]();
            provider.per_minute_call_fee = this.selectedCallFee;
            provider.per_minute_text_fee = this.selectedTextFee;
            provider.provider_categories = this.categories;
            provider.education_degree = this.selectedDegree;
            provider.id = this.provider.id;
            this.providerService.updateProviderInfo(provider).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (error) {
              _this126.alert.presentError("به روزرسانی اطلاعات با مشکل روبرو شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(false);
            })).subscribe(function (result) {
              if (result) {
                _this126.provider = result;

                _this126.alert.presentSuccess("به روزرسانی اطلاعات انجام شد.");

                _this126.dismiss();
              }
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.modal.dismiss(data);
          }
        }, {
          key: "openCallFees",
          value: function openCallFees() {
            var _this127 = this;

            if (!this.editable) return;
            var buttons = [];

            if (this.fees.length) {
              this.fees.filter(function (fee) {
                return fee.name == "call";
              }).forEach(function (fee) {
                buttons.push({
                  text: fee.value,
                  role: "destructive",
                  handler: function handler() {
                    _this127.selectedCallFee = fee.value;
                  }
                });
              });
              this.alert.presentActionSheet(buttons, true).subscribe();
            }
          }
        }, {
          key: "isFormValid",
          value: function isFormValid() {
            return this.selectedCallFee && this.selectedTextFee && this.categories.length;
          }
        }, {
          key: "openTextFees",
          value: function openTextFees() {
            var _this128 = this;

            if (!this.editable) return;
            var buttons = [];

            if (this.fees.length) {
              this.fees.filter(function (fee) {
                return fee.name == "text";
              }).forEach(function (fee) {
                buttons.push({
                  text: fee.value,
                  role: "destructive",
                  handler: function handler() {
                    _this128.selectedTextFee = fee.value;
                  }
                });
              });
              this.alert.presentActionSheet(buttons, true).subscribe();
            }
          }
        }, {
          key: "openDegrees",
          value: function openDegrees() {
            var _this129 = this;

            if (!this.editable) return;
            var buttons = [];

            var _loop3 = function _loop3(i) {
              buttons.push({
                text: src_app_models_provider__WEBPACK_IMPORTED_MODULE_7__["Provider"].getDegreeString(i),
                role: "destructive",
                handler: function handler() {
                  _this129.selectedDegree = i;
                }
              });
            };

            for (var i = 1; i < 5; i++) {
              _loop3(i);
            }

            this.alert.presentActionSheet(buttons, true).subscribe();
          }
        }]);

        return ProviderInfoEditComponent;
      }();

      ProviderInfoEditComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]
        }, {
          type: src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }];
      };

      ProviderInfoEditComponent.propDecorators = {
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        provider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }]
      };
      ProviderInfoEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: "app-provider-info-edit",
        template: _raw_loader_provider_info_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_provider_info_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"], src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])], ProviderInfoEditComponent);
      /***/
    },

    /***/
    "sMNq":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/static/contact/contact.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sMNq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>تماس با ما</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\n    <ion-label class=\"light-text normal-text\">http://hamiline.ir\n    </ion-label>\n  </ion-item>\n  \n  <ion-item>\n    <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\n    <ion-label class=\"light-text normal-text\">info@hamiline.ir    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"logo-whatsapp\"></ion-icon>\n    <ion-label class=\"number-text light-text normal-text\">09012045559\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\n    <ion-label class=\"number-text light-text normal-text\">@hamiline.ir\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"paper-plane-outline\"></ion-icon>\n    <ion-label class=\"number-text light-text normal-text\">t.me/hamiline\n    </ion-label>\n  </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "sTv3":
    /*!**********************************************************!*\
      !*** ./src/app/architecture/auto-single-get-resource.ts ***!
      \**********************************************************/

    /*! exports provided: AutoSingleGetResource */

    /***/
    function sTv3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoSingleGetResource", function () {
        return AutoSingleGetResource;
      });
      /* harmony import */


      var _single_shared_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-shared-resource */
      "Zn2K");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared-resource-async-request-bundle */
      "JTjR");

      var AutoSingleGetResource = /*#__PURE__*/function (_single_shared_resour) {
        _inherits(AutoSingleGetResource, _single_shared_resour);

        var _super6 = _createSuper(AutoSingleGetResource);

        function AutoSingleGetResource(url) {
          var _this130;

          var authenticated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          _classCallCheck(this, AutoSingleGetResource);

          _this130 = _super6.call(this, null, null, null);
          _this130.url = url;
          _this130.authenticated = authenticated;
          _this130.producer = _this130.producerFunction;
          _this130.producer = _this130.producer.bind(_assertThisInitialized(_this130));
          return _this130;
        }

        _createClass(AutoSingleGetResource, [{
          key: "producerFunction",
          value: function producerFunction(argument) {
            var _this131 = this;

            return _shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_2__["SharedResourceAsyncRequestBundle"].HttpHelper.get(this.url + "/" + argument, this.authenticated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
              _this131.setResource(result);

              return result;
            }));
          }
        }]);

        return AutoSingleGetResource;
      }(_single_shared_resource__WEBPACK_IMPORTED_MODULE_0__["SingleSharedResource"]);
      /***/

    },

    /***/
    "sWap":
    /*!*********************************************************************************!*\
      !*** ./src/app/common/additional-info-edit/additional-info-edit.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function sWap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hZGRpdGlvbmFsLWluZm8tZWRpdC9hZGRpdGlvbmFsLWluZm8tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "snxI":
    /*!*************************************************!*\
      !*** ./src/app/services/smart-audio.service.ts ***!
      \*************************************************/

    /*! exports provided: SmartAudioService */

    /***/
    function snxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SmartAudioService", function () {
        return SmartAudioService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");

      var SmartAudioService = /*#__PURE__*/function () {
        function SmartAudioService(platform, http, androidPermissions) {
          _classCallCheck(this, SmartAudioService);

          this.platform = platform;
          this.http = http;
          this.androidPermissions = androidPermissions;
          this.audioType = "html5";
          this.sounds = [];
          this.recordingStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.recordingStopped = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.sourcePlaying = false;

          if (platform.is("cordova")) {
            this.audioType = "native";
          }

          this.draw = this.draw.bind(this);
        }

        _createClass(SmartAudioService, [{
          key: "draw",
          value: function draw() {
            if (this.sourcePlaying) {
              var drawVisual = requestAnimationFrame(this.draw);
            }

            this.analyser.getByteFrequencyData(this.dataArray);
            var barWidth = 100 / this.bufferLength * 2.5;
            var x = 0;
            var barHeight;

            for (var i = 0; i < this.bufferLength; i++) {
              barHeight = this.dataArray[i] / 2;
              x += barWidth + 1;
            }
          }
        }, {
          key: "preload",
          value: function preload(key, asset) {
            var audio = {
              key: key,
              asset: asset,
              type: "html5"
            };
            this.sounds.push(audio);
          }
        }, {
          key: "play",
          value: function play(key) {
            var _this132 = this;

            var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              var audio = _this132.sounds.find(function (sound) {
                return sound.key === key;
              });

              var audioAsset = new Audio(audio.asset);
              audioAsset.addEventListener("ended", function () {
                //observer.next(true);
                observer.complete();
              });

              if (loop) {
                audioAsset.loop = true;
              }

              audioAsset.play().then(function () {
                observer.next(audioAsset);
              });
            });
          }
        }, {
          key: "pause",
          value: function pause(auidoHandle) {
            auidoHandle.pause();
          }
        }, {
          key: "stopRecord",
          value: function stopRecord() {
            if (this.mediaRecorder) {
              this.mediaRecorder.stop();
            }
          }
        }, {
          key: "checkPermission",
          value: function checkPermission() {
            if (this.platform.is("cordova")) {
              return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(function (result) {
                if (result.hasPermission) {
                  return true;
                } else {
                  return false;
                }
              });
            }

            return Promise.resolve(true);
          }
        }, {
          key: "askPermission",
          value: function askPermission() {
            return this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(function (result) {
              if (result.hasPermission) {
                return true;
              }

              return false;
            });
          }
        }, {
          key: "startRecord",
          value: function startRecord() {
            var _this133 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(navigator.mediaDevices.getUserMedia({
                audio: true
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (stream) {
                _this133.mediaRecorder = new MediaRecorder(stream);
                console.log("media recorder"); //this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.RECORD]);

                _this133.play("beep1").subscribe(function (result) {
                  _this133.mediaRecorder.start();
                });

                var audioChunks = [];

                _this133.mediaRecorder.addEventListener("dataavailable", function (event) {
                  audioChunks.push(event.data);
                });

                _this133.mediaRecorder.addEventListener("start", function () {
                  _this133.recordingStarted.next();
                });

                _this133.mediaRecorder.addEventListener("stop", function () {
                  var audioBlob = new Blob(audioChunks);
                  observer.next(audioBlob);

                  _this133.recordingStopped.next();

                  observer.complete(); //const audioUrl = URL.createObjectURL(audioBlob);
                  //const audio = new Audio(audioUrl);
                  //audio.play();
                });
              });
            });
          }
        }]);

        return SmartAudioService;
      }();

      SmartAudioService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"]
        }];
      };

      SmartAudioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"]])], SmartAudioService);
      /***/
    },

    /***/
    "tCwg":
    /*!******************************************!*\
      !*** ./src/app/services/call.service.ts ***!
      \******************************************/

    /*! exports provided: CallService */

    /***/
    function tCwg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallService", function () {
        return CallService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _common_call_call_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../common/call/call.component */
      "eKhv");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/smart-audio.service */
      "snxI");
      /* harmony import */


      var _models_voice_call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../models/voice-call */
      "BbMm");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var CallService = /*#__PURE__*/function () {
        function CallService(auth, http, env, smartAudio, alert, platform) {
          _classCallCheck(this, CallService);

          this.auth = auth;
          this.http = http;
          this.env = env;
          this.smartAudio = smartAudio;
          this.alert = alert;
          this.platform = platform;
          this.innerCall = null;
          this.callStateUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
          this.callFinished = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
          this.cordovaCall = null;
          this.kavenegarCall = new KavenegarCall(Environment.PRODUCTION);
        }

        _createClass(CallService, [{
          key: "setCallState",
          value: function setCallState(state) {
            var _this134 = this;

            if (state == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING && this.voiceCall.state != _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING) {
              if (this.voiceCall.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].OUTGOING) {
                this.smartAudio.play("ringback-tone", true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function (element) {
                  _this134.ringbackAudioHandle = element;
                });
              } else {
                this.smartAudio.play("ringing", true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function (element) {
                  _this134.ringingAudioHandle = element;
                });
              }
            }

            if (this.voiceCall.state == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING) {
              console.log(state);

              if (this.voiceCall.direction == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].OUTGOING) {
                if (this.ringbackAudioHandle) {
                  this.smartAudio.pause(this.ringbackAudioHandle);
                }
              } else {
                if (this.ringingAudioHandle) {
                  this.smartAudio.pause(this.ringingAudioHandle);
                }
              }
            }

            this.voiceCall.state = state;
            this.callStateUpdated.next(this.voiceCall);
          }
        }, {
          key: "call",
          value: function call(receptor, maxDurationInMinutes) {
            var _this135 = this;

            this.auth.getUser().then(function (user) {
              var call = new _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCall"]();
              call.receptor = receptor;
              call.caller = user;
              call.maxDuration = maxDurationInMinutes * 60;
              call.direction = _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].OUTGOING;
              _this135.voiceCall = call;

              _this135.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].NEW);

              _this135.alert.presentModal(_common_call_call_component__WEBPACK_IMPORTED_MODULE_1__["CallComponent"], {
                call: call
              }, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe();
            });
          }
        }, {
          key: "receiveCall",
          value: function receiveCall(call) {
            var _this136 = this;

            this.auth.getUser().then(function (user) {
              call.direction = _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallDirection"].INCOMING;
              call.receptor = user;
              _this136.voiceCall = call;

              _this136.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].NEW);

              _this136.initiateConnectCall();

              _this136.alert.presentModal(_common_call_call_component__WEBPACK_IMPORTED_MODULE_1__["CallComponent"], {
                call: call
              }, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe();
            });
          }
        }, {
          key: "makeTheCall",
          value: function makeTheCall() {
            var _this137 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "makeCall";
              return _this137.http.post(_this137.env.API_URL + url, {
                receptor_user_id: _this137.voiceCall.receptor.id,
                max_duration: _this137.voiceCall.maxDuration
              }, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (result) {
                return result;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (tempCall) {
                _this137.voiceCall.id = tempCall.id;
                _this137.voiceCall.access_token = tempCall.access_token;

                _this137.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].TRYING);
              }));
            }));
          }
        }, {
          key: "cancelCall",
          value: function cancelCall() {
            this.voiceCall = null;
            this.innerCall = null;
          }
        }, {
          key: "acceptCall",
          value: function acceptCall() {
            this.innerCall.accept();
            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].ACCEPTED);
          }
        }, {
          key: "ring",
          value: function ring() {
            this.innerCall.ringing();
            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING);
          }
        }, {
          key: "hangupCall",
          value: function hangupCall() {
            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FINISHED);
            this.innerCall.hangup();
          }
        }, {
          key: "rejectCall",
          value: function rejectCall() {
            this.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FLUSHED);
            this.innerCall.reject();
          }
        }, {
          key: "disposeCall",
          value: function disposeCall() {
            console.log('dispose');

            if (this.innerCall) {
              console.log('dispose if');
              this.innerCall.dispose();
              this.callFinished.next(this.voiceCall);
              this.cancelCall;
            }
          }
        }, {
          key: "initiateConnectCall",
          value: function initiateConnectCall() {
            var _this138 = this;

            this.smartAudio.checkPermission().then(function (result) {
              if (result) {
                _this138.connectCall();
              } else {
                _this138.smartAudio.askPermission().then(function (result) {
                  if (result) {
                    _this138.connectCall();
                  } else {
                    return;
                  }
                }, function (reject) {
                  return;
                });
              }
            });
          }
        }, {
          key: "connectCall",
          value: function connectCall() {
            var _this139 = this;

            navigator.mediaDevices.getUserMedia({
              audio: true
            }).then(function (stream) {
              console.log("stream");
              var params = {
                callId: _this139.voiceCall.id,
                accessToken: _this139.voiceCall.access_token,
                localStream: stream,
                remoteElement: document.getElementById("audio2")
              };

              _this139.kavenegarCall.initCall(params, function (joinResult, call) {
                if (call == null) {
                  console.info("initCall was not successful :" + joinResult);
                  return;
                }

                _this139.innerCall = call;

                if (call.direction === CallDirection.INBOUND) {}

                call.onFinished = function (reason) {};

                call.onMediaStateChanged = function (event) {
                  if (call.direction === CallDirection.INBOUND) {
                    if (call.receptorMediaStatus == "connected") {
                      if (_this139.voiceCall.state == _models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].NEW) {
                        _this139.ring();

                        _this139.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING);
                      }
                    }
                  }

                  console.info("Remote Media Status => caller :" + call.callerMediaStatus + " , receptor : " + call.receptorMediaStatus);
                };

                call.onMessagingStateChanged = function (event) {
                  console.info("Messaging Status : " + event);
                };

                call.onStatusChanged = function (status) {
                  switch (status) {
                    case "ringing":
                      _this139.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].RINGING);

                      break;

                    case "accepted":
                      _this139.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].ACCEPTED);

                      break;

                    case "conversation":
                      _this139.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].CONVERSATION);

                      break;

                    case "finished":
                      _this139.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FINISHED);

                      _this139.disposeCall();

                      break;

                    case "flushed":
                      _this139.setCallState(_models_voice_call__WEBPACK_IMPORTED_MODULE_5__["VoiceCallState"].FLUSHED);

                      break;
                  }

                  console.info("Call Status : " + status);
                };
              });
            })["catch"](function (error) {
              alert("getUserMediaError :" + error);
            });
          }
        }]);

        return CallService;
      }();

      CallService.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"]
        }, {
          type: src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_4__["SmartAudioService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      CallService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"], src_app_services_smart_audio_service__WEBPACK_IMPORTED_MODULE_4__["SmartAudioService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], CallService);
      /***/
    },

    /***/
    "tJN7":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/session-info-icon-summary/session-info-icon-summary.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tJN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item   class=\"session-info-summary\" [ngClass]=\"stateClass\">\n  <span class=\"small-text light-text\">{{label}}</span>\n  <div slot=\"end\" class=\"session-info-summary-row\">\n    <div class=\"session-info-summary-item session-info-summary-time\">\n      <ion-icon\n        class=\"session-info-summary-item-icon\"\n        name=\"time-outline\"\n      ></ion-icon>\n      <span class=\"session-info-summary-item-text small-text number-text\">{{ time }}</span>\n    </div>\n    <div *ngIf=\"date\" class=\"session-info-summary-item session-info-summary-date\">\n      <ion-icon\n        class=\"session-info-summary-item-icon\"\n        name=\"calendar-outline\"\n      ></ion-icon>\n      <span class=\"session-info-summary-item-text small-text number-text\">{{ date}}</span>\n    </div>\n  </div>\n</ion-item>";
      /***/
    },

    /***/
    "tLlE":
    /*!*************************************************!*\
      !*** ./src/app/services/http-helper.service.ts ***!
      \*************************************************/

    /*! exports provided: HttpHelperService */

    /***/
    function tLlE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpHelperService", function () {
        return HttpHelperService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var HttpHelperService = /*#__PURE__*/function () {
        function HttpHelperService(auth, http, env) {
          _classCallCheck(this, HttpHelperService);

          this.auth = auth;
          this.http = http;
          this.env = env;
        }

        _createClass(HttpHelperService, [{
          key: "getAuthenticated",
          value: function getAuthenticated(url) {
            var _this140 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              return _this140.http.get(_this140.env.API_URL + url, {
                headers: headers
              });
            }));
          }
        }, {
          key: "get",
          value: function get(url) {
            var _this141 = this;

            var authenticated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (authenticated) {
              return this.getAuthenticated(url);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              return _this141.http.get(_this141.env.API_URL + url, {
                headers: headers
              });
            }));
          }
        }]);

        return HttpHelperService;
      }();

      HttpHelperService.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"]
        }];
      };

      HttpHelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"]])], HttpHelperService);
      /***/
    },

    /***/
    "u7RM":
    /*!***************************************************************!*\
      !*** ./src/app/common/remote-stats/remote-stats.component.ts ***!
      \***************************************************************/

    /*! exports provided: RemoteStatsComponent */

    /***/
    function u7RM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteStatsComponent", function () {
        return RemoteStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_remote_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./remote-stats.component.html */
      "/xhe");
      /* harmony import */


      var _remote_stats_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./remote-stats.component.scss */
      "7sa6");
      /* harmony import */


      var _models_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/provider */
      "oPjg");
      /* harmony import */


      var _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../models/remote-stats */
      "CGJ0");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RemoteStatsComponent = /*#__PURE__*/function () {
        function RemoteStatsComponent(env) {
          _classCallCheck(this, RemoteStatsComponent);

          this.env = env;
          this.providerStatusSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
          this.isTotalProvidersType = false;
          this.isCategoryProvidersType = false;
          this.isUsersTypes = false;
          this.providerStatus = _models_provider__WEBPACK_IMPORTED_MODULE_3__["ProviderStatus"];
          this.selectedPorivderStatus = _models_provider__WEBPACK_IMPORTED_MODULE_3__["ProviderStatus"].NA;
        }

        _createClass(RemoteStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isTotalProvidersType = this.statsType == _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"].TOTAL_PROVIDERS_STATS;
            this.isCategoryProvidersType = this.statsType == _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"].CATEGORY_PROVIDERS_STATS;
            this.isUsersTypes = this.statsType == _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"].USERS_STATS;
          }
        }, {
          key: "selectProviderStatus",
          value: function selectProviderStatus(status) {
            this.selectedPorivderStatus = status;
            this.providerStatusSelected.emit(status);
          }
        }, {
          key: "categoryStats",
          value: function categoryStats() {
            var _this142 = this;

            return this.env.remoteStats.category_stats.find(function (catStat) {
              return catStat.category_id == _this142.categoryId;
            });
          }
        }]);

        return RemoteStatsComponent;
      }();

      RemoteStatsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }];
      };

      RemoteStatsComponent.propDecorators = {
        statsType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        categoryId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        providerStatusSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
        }]
      };
      RemoteStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-remote-stats',
        template: _raw_loader_remote_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remote_stats_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]])], RemoteStatsComponent);
      /***/
    },

    /***/
    "uI3J":
    /*!********************************************************!*\
      !*** ./src/app/common/static/about/about.component.ts ***!
      \********************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function uI3J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.component.html */
      "zPWW");
      /* harmony import */


      var _about_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.component.scss */
      "eQox");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(modal) {
          _classCallCheck(this, AboutComponent);

          this.modal = modal;
        }

        _createClass(AboutComponent, [{
          key: "dismiss",
          value: function dismiss() {
            this.modal.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], AboutComponent);
      /***/
    },

    /***/
    "uNJR":
    /*!***************************************************************************!*\
      !*** ./src/app/common/basic-user-profile/basic-user-profile.component.ts ***!
      \***************************************************************************/

    /*! exports provided: BasicUserProfileComponent */

    /***/
    function uNJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicUserProfileComponent", function () {
        return BasicUserProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic-user-profile.component.html */
      "9cBY");
      /* harmony import */


      var _basic_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-user-profile.component.scss */
      "mW1N");
      /* harmony import */


      var _models_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/provider */
      "oPjg");
      /* harmony import */


      var _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/sessions-manager-service */
      "qm69");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasicUserProfileComponent = /*#__PURE__*/function () {
        function BasicUserProfileComponent(env, sessionsManagerService) {
          _classCallCheck(this, BasicUserProfileComponent);

          this.env = env;
          this.sessionsManagerService = sessionsManagerService;
          this.provider = null;
          this.getName = _models_user__WEBPACK_IMPORTED_MODULE_6__["User"].getName;
        }

        _createClass(BasicUserProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isOnline",
          value: function isOnline() {
            return this.sessionsManagerService.isUserOnline(this.user);
          }
        }]);

        return BasicUserProfileComponent;
      }();

      BasicUserProfileComponent.ctorParameters = function () {
        return [{
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionsManagerService"]
        }];
      };

      BasicUserProfileComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }],
        provider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }]
      };
      BasicUserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-basic-user-profile',
        template: _raw_loader_basic_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basic_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"], _services_sessions_manager_service__WEBPACK_IMPORTED_MODULE_4__["SessionsManagerService"]])], BasicUserProfileComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _guard_home_redirect_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guard/home-redirect.guard */
      "IP2b");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        pathMatch: "full",
        canActivate: [_guard_home_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["HomeRedirectGuard"]]
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("auth-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./auth/login/login.module */
          "lu3c")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: "register",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-register-register-module */
          [__webpack_require__.e("common"), __webpack_require__.e("auth-register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./auth/register/register.module */
          "UrDz")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: "verify",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-verify-verify-module */
          "auth-verify-verify-module").then(__webpack_require__.bind(null,
          /*! ./auth/verify/verify.module */
          "FABh")).then(function (m) {
            return m.VerifyPageModule;
          });
        }
      }, {
        path: "forgot-password-phone",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-forgot-password-phone-forgot-password-phone-module */
          [__webpack_require__.e("common"), __webpack_require__.e("auth-forgot-password-phone-forgot-password-phone-module")]).then(__webpack_require__.bind(null,
          /*! ./auth/forgot-password-phone/forgot-password-phone.module */
          "LMdc")).then(function (m) {
            return m.ForgotPasswordPhonePageModule;
          });
        }
      }, {
        path: "forgot-password-password/:phoneNumber",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-forgot-password-password-forgot-password-password-module */
          [__webpack_require__.e("common"), __webpack_require__.e("auth-forgot-password-password-forgot-password-password-module")]).then(__webpack_require__.bind(null,
          /*! ./auth/forgot-password-password/forgot-password-password.module */
          "UtjZ")).then(function (m) {
            return m.ForgotPasswordPasswordPageModule;
          });
        }
      }, {
        path: "usr/session",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | messaging-message-session-message-session-module */
          [__webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("default~messaging-message-session-message-session-module~messaging-messenger-messenger-module"), __webpack_require__.e("messaging-message-session-message-session-module")]).then(__webpack_require__.bind(null,
          /*! ./messaging/message-session/message-session.module */
          "ma2l")).then(function (m) {
            return m.MessageSessionPageModule;
          });
        }
      }, {
        path: "usr/favorites",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_user-usr-favorite-providers-usr-favorite-providers-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_user-usr-favorite-providers-usr-favorite-providers-module")]).then(__webpack_require__.bind(null,
          /*! ./for_user/usr-favorite-providers/usr-favorite-providers.module */
          "LdIA")).then(function (m) {
            return m.UsrFavoriteProvidersPageModule;
          });
        }
      }, {
        path: "provider/:providerId",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-for_user-usr-provider-single-usr-provider-single-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("src-app-for_user-usr-provider-single-usr-provider-single-module")]).then(__webpack_require__.bind(null,
          /*! src/app/for_user/usr-provider-single/usr-provider-single.module */
          "4Bmf")).then(function (m) {
            return m.UsrProviderSinglePageModule;
          });
        }
      }, {
        path: 'pvd-reservations',
        redirectTo: 'pvd-reservations' //loadChildren: () => import('./for_provider/pvd-dashboard/pvd-dashboard.module').then( m => m.PvdDashboardPageModule)

      }, {
        path: 'pvd-manage-available-hours',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_provider-pvd-manage-available-hours-pvd-manage-available-hours-module */
          [__webpack_require__.e("common"), __webpack_require__.e("for_provider-pvd-manage-available-hours-pvd-manage-available-hours-module")]).then(__webpack_require__.bind(null,
          /*! ./for_provider/pvd-manage-available-hours/pvd-manage-available-hours.module */
          "bVQq")).then(function (m) {
            return m.PvdManageAvailableHoursPageModule;
          });
        }
      }, {
        path: 'usr-view-provider-calendar/:providerId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_user-usr-view-provider-calendar-usr-view-provider-calendar-module */
          [__webpack_require__.e("default~for_admin-adm-providers-adm-providers-module~for_user-usr-view-provider-calendar-usr-view-pr~dc2823ca"), __webpack_require__.e("default~for_provider-pvd-income-report-pvd-income-report-module~for_user-usr-view-provider-calendar-~6c128219"), __webpack_require__.e("common"), __webpack_require__.e("for_user-usr-view-provider-calendar-usr-view-provider-calendar-module")]).then(__webpack_require__.bind(null,
          /*! ./for_user/usr-view-provider-calendar/usr-view-provider-calendar.module */
          "stco")).then(function (m) {
            return m.UsrViewProviderCalendarPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'pvd-income-report',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_provider-pvd-income-report-pvd-income-report-module */
          [__webpack_require__.e("default~for_provider-pvd-income-report-pvd-income-report-module~for_user-usr-view-provider-calendar-~6c128219"), __webpack_require__.e("for_provider-pvd-income-report-pvd-income-report-module")]).then(__webpack_require__.bind(null,
          /*! ./for_provider/pvd-income-report/pvd-income-report.module */
          "12iu")).then(function (m) {
            return m.PvdIncomeReportPageModule;
          });
        }
      }, {
        path: 'adm-dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | for_admin-adm-dashboard-adm-dashboard-module */
          "for_admin-adm-dashboard-adm-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./for_admin/adm-dashboard/adm-dashboard.module */
          "wmNl")).then(function (m) {
            return m.AdmDashboardPageModule;
          });
        }
      }, {
        path: 'adm-provider-categories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | for_admin-adm-provider-categories-adm-provider-categories-module */
          "for_admin-adm-provider-categories-adm-provider-categories-module").then(__webpack_require__.bind(null,
          /*! ./for_admin/adm-provider-categories/adm-provider-categories.module */
          "gGEd")).then(function (m) {
            return m.AdmProviderCategoriesPageModule;
          });
        }
      }, {
        path: 'adm-providers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_admin-adm-providers-adm-providers-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("default~for_admin-adm-providers-adm-providers-module~for_user-usr-view-provider-calendar-usr-view-pr~dc2823ca"), __webpack_require__.e("for_admin-adm-providers-adm-providers-module")]).then(__webpack_require__.bind(null,
          /*! ./for_admin/adm-providers/adm-providers.module */
          "hbUo")).then(function (m) {
            return m.AdmProvidersPageModule;
          });
        }
      }, {
        path: 'usr-reservations',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | for_user-usr-reservations-usr-reservations-module */
          "for_user-usr-reservations-usr-reservations-module").then(__webpack_require__.bind(null,
          /*! ./for_user/usr-reservations/usr-reservations.module */
          "Vhcu")).then(function (m) {
            return m.UsrReservationsPageModule;
          });
        }
      }, {
        path: 'pvd-reservations',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | for_provider-pvd-reservations-pvd-reservations-module */
          "for_provider-pvd-reservations-pvd-reservations-module").then(__webpack_require__.bind(null,
          /*! ./for_provider/pvd-reservations/pvd-reservations.module */
          "Hj8W")).then(function (m) {
            return m.PvdReservationsPageModule;
          });
        }
      }, {
        path: 'usr-select-session-type/:providerId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | for_user-usr-select-session-type-usr-select-session-type-module */
          "for_user-usr-select-session-type-usr-select-session-type-module").then(__webpack_require__.bind(null,
          /*! ./for_user/usr-select-session-type/usr-select-session-type.module */
          "ZU5J")).then(function (m) {
            return m.UsrSelectSessionTypePageModule;
          });
        }
      }, {
        path: 'usr-providers/:providerGroupId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_user-usr-providers-list-usr-providers-list-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_user-usr-providers-list-usr-providers-list-module")]).then(__webpack_require__.bind(null,
          /*! ./for_user/usr-providers-list/usr-providers-list.module */
          "ONet")).then(function (m) {
            return m.UsrProvidersListPageModule;
          });
        }
      }, {
        path: 'usr-request-log',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_user-usr-request-log-usr-request-log-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_user-usr-request-log-usr-request-log-module")]).then(__webpack_require__.bind(null,
          /*! ./for_user/usr-request-log/usr-request-log.module */
          "ajVz")).then(function (m) {
            return m.UsrRequestLogPageModule;
          });
        }
      }, {
        path: 'pvd-request-log',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | for_provider-pvd-request-log-pvd-request-log-module */
          "for_provider-pvd-request-log-pvd-request-log-module").then(__webpack_require__.bind(null,
          /*! ./for_provider/pvd-request-log/pvd-request-log.module */
          "Ipa/")).then(function (m) {
            return m.PvdRequestLogPageModule;
          });
        }
      }, {
        path: 'pvd-active-requests',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_provider-pvd-active-requests-pvd-active-requests-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_provider-pvd-active-requests-pvd-active-requests-module")]).then(__webpack_require__.bind(null,
          /*! ./for_provider/pvd-active-requests/pvd-active-requests.module */
          "ocB8")).then(function (m) {
            return m.PvdActiveRequestsPageModule;
          });
        }
      }, {
        path: 'questions-and-answers/:roleId/:userId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | common-questions-and-answers-questions-and-answers-module */
          "common-questions-and-answers-questions-and-answers-module").then(__webpack_require__.bind(null,
          /*! ./common/questions-and-answers/questions-and-answers.module */
          "7aTJ")).then(function (m) {
            return m.QuestionsAndAnswersPageModule;
          });
        }
      }, {
        path: 'answers/:questionId/:roleId/:userId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | common-answers-answers-module */
          "common-answers-answers-module").then(__webpack_require__.bind(null,
          /*! ./common/answers/answers.module */
          "2Qbm")).then(function (m) {
            return m.AnswersPageModule;
          });
        }
      }, {
        path: "provider-categories",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-for_user-usr-provider-groups-usr-provider-groups-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("src-app-for_user-usr-provider-groups-usr-provider-groups-module")]).then(__webpack_require__.bind(null,
          /*! src/app/for_user/usr-provider-groups/usr-provider-groups.module */
          "pfOn")).then(function (m) {
            return m.UsrProviderGroupsPageModule;
          });
        }
      }, {
        path: 'peer-chats/:roleId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | common-peer-chats-peer-chats-module */
          "common-peer-chats-peer-chats-module").then(__webpack_require__.bind(null,
          /*! ./common/peer-chats/peer-chats.module */
          "aAhI")).then(function (m) {
            return m.PeerChatsPageModule;
          });
        }
      }, {
        path: 'affiliate-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | common-affiliate-code-affiliate-code-module */
          "common-affiliate-code-affiliate-code-module").then(__webpack_require__.bind(null,
          /*! ./common/affiliate-code/affiliate-code.module */
          "HBFL")).then(function (m) {
            return m.AffiliateCodePageModule;
          });
        }
      }, {
        path: 'adm-users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_admin-adm-users-adm-users-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_admin-adm-users-adm-users-module")]).then(__webpack_require__.bind(null,
          /*! ./for_admin/adm-users/adm-users.module */
          "p316")).then(function (m) {
            return m.AdmUsersPageModule;
          });
        }
      }, {
        path: 'adm-user-profile/:userId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | for_admin-adm-user-profile-adm-user-profile-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("for_admin-adm-user-profile-adm-user-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./for_admin/adm-user-profile/adm-user-profile.module */
          "kjP/")).then(function (m) {
            return m.AdmUserProfilePageModule;
          });
        }
      }, {
        path: 'message-session',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | messaging-message-session-message-session-module */
          [__webpack_require__.e("default~messaging-message-session-message-session-module~profile-profile-module~src-app-for_user-usr~729835b4"), __webpack_require__.e("default~messaging-message-session-message-session-module~messaging-messenger-messenger-module"), __webpack_require__.e("messaging-message-session-message-session-module")]).then(__webpack_require__.bind(null,
          /*! ./messaging/message-session/message-session.module */
          "ma2l")).then(function (m) {
            return m.MessageSessionPageModule;
          });
        }
      }, {
        path: 'messenger/:type/:id/:providerPerspective',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | messaging-messenger-messenger-module */
          [__webpack_require__.e("default~messaging-message-session-message-session-module~messaging-messenger-messenger-module"), __webpack_require__.e("messaging-messenger-messenger-module")]).then(__webpack_require__.bind(null,
          /*! ./messaging/messenger/messenger.module */
          "efRh")).then(function (m) {
            return m.MessengerPageModule;
          });
        }
      }, {
        path: 'user-payments/:userId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | common-user-payments-user-payments-module */
          [__webpack_require__.e("default~common-user-payments-user-payments-module~for_admin-adm-providers-adm-providers-module~for_a~9cdf1f8d"), __webpack_require__.e("common-user-payments-user-payments-module")]).then(__webpack_require__.bind(null,
          /*! ./common/user-payments/user-payments.module */
          "LcCl")).then(function (m) {
            return m.UserPaymentsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vpln":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/random-provider-avatars/random-provider-avatars.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vpln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"random-avatars-container\"\n  #skeleton\n  *ngIf=\"this.providerService.randomAvatarSrcListShared.needsSkeleton()\"\n>\n  <div\n    class=\"random-avatar-col\"\n    *ngFor=\"let avatar of [0, 1, 2, 3, 4, 5, 6]; let i = index\"\n    [ngClass]=\"getAvatarZClass(i)\"\n  >\n    <ion-skeleton-text animated *ngIf=\"true\" class=\"random-avatar sk\">\n    </ion-skeleton-text>\n  </div>\n</div>\n<div  class=\"random-avatars-container\" *ngIf=\"!this.providerService.randomAvatarSrcListShared.needsSkeleton()\">\n  <div\n    class=\"random-avatar-col\"\n    *ngFor=\"\n      let avatar of this.providerService.randomAvatarSrcListShared.resource();\n      let i = index\n    \"\n    [ngClass]=\"getAvatarZClass(i)\"\n  >\n    <div\n      class=\"random-avatar\"\n      [ngStyle]=\"{\n        'background-image': 'url(' + env.getPublicStorageUrl(avatar) + ')'\n      }\"\n    ></div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "wDsb":
    /*!*****************************************************!*\
      !*** ./src/app/common/deposit/deposit.component.ts ***!
      \*****************************************************/

    /*! exports provided: DepositComponent */

    /***/
    function wDsb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepositComponent", function () {
        return DepositComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_deposit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./deposit.component.html */
      "kP+L");
      /* harmony import */


      var _deposit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./deposit.component.scss */
      "C+bK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DepositComponent = /*#__PURE__*/function () {
        function DepositComponent(modal, actionSheet, userService, alert, loadingModal, env) {
          _classCallCheck(this, DepositComponent);

          this.modal = modal;
          this.actionSheet = actionSheet;
          this.userService = userService;
          this.alert = alert;
          this.loadingModal = loadingModal;
          this.env = env;
          this.amount = null;
          this.selectedPreset = null;
          this.depositing = false;
        }

        _createClass(DepositComponent, [{
          key: "submit",
          value: function submit() {
            var _this143 = this;

            var amount = 0;

            if (this.amount) {
              amount = this.amount;
            } else {
              amount = this.selectedPreset;
            }

            if (this.env.MOCK_PAYMENT) {
              this.deposit(amount);
              return;
            }

            this.alert.presentLoadingModal(this.loadingModal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe();
            this.userService.getPaymentAuthority(amount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
              var errorType = error["error"]["error"];

              _this143.alert.presentError(_this143.env.serverErrorMessage(error.error["error_code"]));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
            })).subscribe(function (result) {
              _this143.loadingModal.dismiss();

              if (result) {
                window.open("https://www.zarinpal.com/pg/StartPay/" + result["authority_code"] + "MobileGate");

                _this143.dismiss();
              }
            });
          }
        }, {
          key: "openDepostPresets",
          value: function openDepostPresets() {
            this.presentDepositPresets().subscribe();
          }
        }, {
          key: "presentDepositPresets",
          value: function presentDepositPresets() {
            var _this144 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.actionSheet.create({
              mode: "ios",
              buttons: [{
                text: "۱۰۰۰ تومان",
                role: "destructive",
                handler: function handler() {
                  _this144.selectedPreset = 1000;
                }
              }, {
                text: "۱۰۰۰۰ تومان",
                role: "destructive",
                handler: function handler() {
                  _this144.selectedPreset = 10000;
                }
              }, {
                text: "۲۰۰۰۰ تومان",
                role: "destructive",
                handler: function handler() {
                  _this144.selectedPreset = 20000;
                }
              }, {
                text: "انصراف",
                role: "cancel"
              }]
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (modal) {
              modal.onDidDismiss;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(modal.onDidDismiss()).subscribe(function (data) {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(modal.present());
            }));
          }
        }, {
          key: "deposit",
          value: function deposit(amount) {
            var _this145 = this;

            this.depositing = true;
            this.userService.deposit(amount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
              _this145.alert.presentError("افزایش اعتبار با مشکل روبرو شد.");

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(false);
            })).subscribe(function (result) {
              _this145.depositing = false;

              if (result) {
                _this145.alert.presentSuccess("افزایش اعتبار انجام شد.");

                _this145.userService.updateUserBalance().subscribe();

                _this145.dismiss();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.modal.dismiss(data);
          }
        }]);

        return DepositComponent;
      }();

      DepositComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
        }];
      };

      DepositComponent.propDecorators = {
        amount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }]
      };
      DepositComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: "app-deposit",
        template: _raw_loader_deposit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deposit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]])], DepositComponent);
      /***/
    },

    /***/
    "wl2M":
    /*!************************************************!*\
      !*** ./src/app/directives/ng-var.directive.ts ***!
      \************************************************/

    /*! exports provided: NgVarDirective */

    /***/
    function wl2M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgVarDirective", function () {
        return NgVarDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NgVarDirective = /*#__PURE__*/function () {
        function NgVarDirective(vcRef, templateRef) {
          _classCallCheck(this, NgVarDirective);

          this.vcRef = vcRef;
          this.templateRef = templateRef;
          this.context = {};
        }

        _createClass(NgVarDirective, [{
          key: "updateView",
          value: function updateView() {
            this.vcRef.clear();
            this.vcRef.createEmbeddedView(this.templateRef, this.context);
          }
        }, {
          key: "ngVar",
          set: function set(context) {
            this.context.$implicit = this.context.ngVar = context;
            this.updateView();
          }
        }]);

        return NgVarDirective;
      }();

      NgVarDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };

      NgVarDirective.propDecorators = {
        ngVar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      NgVarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngVar]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])], NgVarDirective);
      /***/
    },

    /***/
    "xG8R":
    /*!*******************************************!*\
      !*** ./src/app/models/available-hours.ts ***!
      \*******************************************/

    /*! exports provided: AvailableHours */

    /***/
    function xG8R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailableHours", function () {
        return AvailableHours;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AvailableHours = /*#__PURE__*/function () {
        function AvailableHours() {
          _classCallCheck(this, AvailableHours);

          this.overlappingSession = null;
          this.reservedByMe = false;
          this.reserveAccepted = false;
          this.reserved = false;
          this.cssClass = "";
        }

        _createClass(AvailableHours, null, [{
          key: "fillCSSClass",
          value: function fillCSSClass(hours) {
            var c = "";

            if (hours.reserved) {
              c += " reserved";
            }

            if (hours.reservedByMe) {
              c += " reserved-by-me";
            }

            if (hours.reserveAccepted) {
              c += " reserve-accepted";
            }

            hours.cssClass = c;
          }
        }, {
          key: "getReservationStatusText",
          value: function getReservationStatusText(hours) {
            var text = "قابل رزرو";

            if (hours.reserved) {
              text = "پرشده";
            }

            if (hours.reservedByMe) {
              text = "درخواست داده شده";
            }

            if (hours.reserveAccepted) {
              text = "رزرو شده";
            }

            return text;
          }
        }, {
          key: "getMinuteString",
          value: function getMinuteString(hourString) {
            return hourString.substr(3, 2);
          }
        }, {
          key: "getHourString",
          value: function getHourString(hourString) {
            return hourString.substr(0, 2);
          }
        }, {
          key: "getTimeFromHourString",
          value: function getTimeFromHourString(hours) {
            return AvailableHours.getHourString(hours.time_from);
          }
        }, {
          key: "getTimeToHourString",
          value: function getTimeToHourString(hours) {
            return AvailableHours.getHourString(hours.time_to);
          }
        }, {
          key: "getTimeFromMinuteString",
          value: function getTimeFromMinuteString(hours) {
            return AvailableHours.getMinuteString(hours.time_from);
          }
        }, {
          key: "getTimeToMinuteString",
          value: function getTimeToMinuteString(hours) {
            return AvailableHours.getMinuteString(hours.time_to);
          }
        }, {
          key: "SetTimeToBasedOnTimeFrom",
          value: function SetTimeToBasedOnTimeFrom(hours) {
            var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en");
            var hourFrom = parseInt(AvailableHours.getTimeFromHourString(hours));
            var minFrom = parseInt(AvailableHours.getTimeFromMinuteString(hours));
            var from = new Date().setUTCHours(hourFrom + 1, minFrom);
            return hours.time_to = pipe.transform(from, "HH:mm", 'UTC');
          }
        }, {
          key: "SetTimeNow",
          value: function SetTimeNow(hours) {
            var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en");
            hours.time_from = pipe.transform(new Date(), "HH:mm");
            AvailableHours.SetTimeToBasedOnTimeFrom(hours);
          }
        }, {
          key: "getMilitaryFormatInt",
          value: function getMilitaryFormatInt(hourString) {
            return parseInt(AvailableHours.getHourString(hourString) + AvailableHours.getMinuteString(hourString));
          }
        }]);

        return AvailableHours;
      }();
      /***/

    },

    /***/
    "yZtM":
    /*!***********************************************************************************!*\
      !*** ./src/app/common/loading-toolbar-button/loading-toolbar-button.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: LoadingToolbarButtonComponent */

    /***/
    function yZtM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingToolbarButtonComponent", function () {
        return LoadingToolbarButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loading_toolbar_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loading-toolbar-button.component.html */
      "nnJo");
      /* harmony import */


      var _loading_toolbar_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loading-toolbar-button.component.scss */
      "185P");
      /* harmony import */


      var src_app_services_im_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/im.service */
      "K4UH");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingToolbarButtonComponent = /*#__PURE__*/function () {
        function LoadingToolbarButtonComponent(env, imService) {
          _classCallCheck(this, LoadingToolbarButtonComponent);

          this.env = env;
          this.imService = imService;
          this.visible = false;
          this.imNoConnection = false;
          this.imRetryRemainingSeconds = 0;
        }

        _createClass(LoadingToolbarButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this146 = this;

            this.visible == this.env.somethingPendingCount > 0;
            this.pendingSubscription = this.env.somethingPendingUpdated.subscribe(function (pending) {
              _this146.visible = pending;
            });
            this.imConnectionSubscription = this.imService.connectionStatusChanged.subscribe(function (result) {
              _this146.imNoConnection = !result;
            });
            this.imAutoReconnectCountdownSubscription = this.imService.autoReconnectRemainingSecondsUpdated.subscribe(function (result) {
              _this146.imRetryRemainingSeconds = result;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.pendingSubscription.unsubscribe();
            this.imConnectionSubscription.unsubscribe();
            this.imAutoReconnectCountdownSubscription.unsubscribe();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }, {
          key: "imReconnect",
          value: function imReconnect() {
            this.imService.reconnect();
          }
        }]);

        return LoadingToolbarButtonComponent;
      }();

      LoadingToolbarButtonComponent.ctorParameters = function () {
        return [{
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
        }, {
          type: src_app_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"]
        }];
      };

      LoadingToolbarButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-loading-toolbar-button",
        template: _raw_loader_loading_toolbar_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loading_toolbar_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"], src_app_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"]])], LoadingToolbarButtonComponent);
      /***/
    },

    /***/
    "ybCk":
    /*!*****************************************************************!*\
      !*** ./src/app/services/public-question-and-answers.service.ts ***!
      \*****************************************************************/

    /*! exports provided: PublicQuestionAndAnswersService */

    /***/
    function ybCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicQuestionAndAnswersService", function () {
        return PublicQuestionAndAnswersService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/architecture/shared-resource-async-request-bundle */
      "JTjR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var PublicQuestionAndAnswersService = /*#__PURE__*/function () {
        function PublicQuestionAndAnswersService(auth, http, env) {
          _classCallCheck(this, PublicQuestionAndAnswersService);

          this.auth = auth;
          this.http = http;
          this.env = env;
          this.questionsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"](this.getAllQuestions, [], this);
          this.questionWithAnswersShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"](this.getAnswers, null, this);
          this.myQuestionsShared = new src_app_architecture_shared_resource_async_request_bundle__WEBPACK_IMPORTED_MODULE_5__["SharedResourceAsyncRequestBundle"](this.getMyQuestions, [], this);
        }

        _createClass(PublicQuestionAndAnswersService, [{
          key: "getAllQuestions",
          value: function getAllQuestions() {
            var _this147 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Accept: "application/json",
              "Content-Type": "application/json"
            });
            var url = "questions/getAllQuestions";
            return this.http.get(this.env.API_URL + url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
              _this147.questionsShared.setResource(result);

              return result;
            }));
          }
        }, {
          key: "getAnswers",
          value: function getAnswers(questionId) {
            var _this148 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Accept: "application/json",
              "Content-Type": "application/json"
            });
            var url = "questions/getAnswers/" + questionId;
            return this.http.get(this.env.API_URL + url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
              _this148.questionWithAnswersShared.setResource(result);

              return result;
            }));
          }
        }, {
          key: "getMyQuestions",
          value: function getMyQuestions() {
            var _this149 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "questions/getMyQuestions";
              return _this149.http.get(_this149.env.API_URL + url, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
                _this149.myQuestionsShared.setResource(result);

                return result;
              }));
            }));
          }
        }, {
          key: "aks",
          value: function aks(content) {
            var _this150 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "questions/ask";
              return _this150.http.post(_this150.env.API_URL + url, {
                content: content
              }, {
                headers: headers
              });
            }));
          }
        }, {
          key: "answer",
          value: function answer(content, questionId) {
            var _this151 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.auth.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (token) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: token["token_type"] + " " + token["access_token"],
                Accept: "application/json",
                "Content-Type": "application/json"
              });
              var url = "questions/answer";
              return _this151.http.post(_this151.env.API_URL + url, {
                content: content,
                question_id: questionId
              }, {
                headers: headers
              });
            }));
          }
        }]);

        return PublicQuestionAndAnswersService;
      }();

      PublicQuestionAndAnswersService.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"]
        }];
      };

      PublicQuestionAndAnswersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"]])], PublicQuestionAndAnswersService);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\nion-item, ion-list, ion-menu-toggle {\n  --background:transparent;\n  background-color: transparent;\n}\nion-list {\n  overflow-y: scroll;\n}\n.credit-container {\n  padding: 0.8rem;\n  background: black;\n}\n.credit-container .credit-number {\n  color: white !important;\n}\n.credit-container ion-icon {\n  color: white;\n  font-size: 1.4rem;\n}\n.splash-container {\n  justify-content: center;\n  align-items: center;\n}\n.splash-container .splash-svg {\n  width: 200px;\n  fill: #71bcc1;\n}\n.splash-container .splash-svg #smile-svg {\n  display: none;\n}\n.splash-container .splash-svg #frown-svg {\n  transform: translateY(35px);\n}\n.splash-container .splash-svg .hands-svg {\n  opacity: 0;\n}\n.splash-container .splash-svg .eyes {\n  transform: translateY(-200px);\n}\n.fixed-fab {\n  bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBQTFDQTtFQUVJLHdCQUFBO0VBQ0EsNkJBQUE7QUEyQ0o7QUF6Q0E7RUFFSSxrQkFBQTtBQTJDSjtBQXpDQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQTJDSjtBQTFDSTtFQUVJLHVCQUFBO0FBMkNSO0FBekNJO0VBRUksWUFBQTtFQUNBLGlCQUFBO0FBMENSO0FBdkNBO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtBQXlDSjtBQXhDSTtFQUVJLFlBQUE7RUFDQSxhQzdCUTtBRHNFaEI7QUF2Q087RUFFSSxhQUFBO0FBd0NYO0FBdENPO0VBRUMsMkJBQUE7QUF1Q1I7QUFyQ087RUFFSSxVQUFBO0FBc0NYO0FBcENPO0VBRUMsNkJBQUE7QUFxQ1I7QUFoQ0E7RUFFSSx1QkFBQTtBQWtDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uJztcbi5tZW51LWNvbnRlbnRcbntcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOnVybCgnc3JjL2Fzc2V0cy9pbWFnZS9tZW51LWJnLmpwZycpO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xufVxuaW9uLWl0ZW0saW9uLWxpc3QsaW9uLW1lbnUtdG9nZ2xlXG57XG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59XG5pb24tbGlzdFxue1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5jcmVkaXQtY29udGFpbmVyXG57XG4gICAgcGFkZGluZzowLjhyZW07XG4gICAgYmFja2dyb3VuZDpibGFjaztcbiAgICAuY3JlZGl0LW51bWJlclxuICAgIHtcbiAgICAgICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWljb25cbiAgICB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6MS40cmVtO1xuICAgIH1cbn1cbi5zcGxhc2gtY29udGFpbmVyXG57XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuc3BsYXNoLXN2Z1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBmaWxsOiRwcmltYXJ5LWNvbG9yO1xuICAgICAgIC8vIG9wYWNpdHk6IDA7XG4gICAgICAgI3NtaWxlLXN2Z1xuICAgICAgIHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICB9XG4gICAgICAgI2Zyb3duLXN2Z1xuICAgICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMzVweCk7XG4gICAgICAgfVxuICAgICAgIC5oYW5kcy1zdmdcbiAgICAgICB7XG4gICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgfVxuICAgICAgIC5leWVzXG4gICAgICAge1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjAwcHgpO1xuICAgICAgIH1cbiAgICAgICBcbiAgICB9XG59XG4uZml4ZWQtZmFiXG57XG4gICAgYm90dG9tOjEwcHggIWltcG9ydGFudDtcbn0iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "ys1Z":
    /*!*******************************************************************************************!*\
      !*** ./src/app/common/session-info-icon-summary/session-info-icon-summary.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function ys1Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.session-info-summary {\n  display: flex;\n}\n.session-info-summary.requested .session-info-summary-item {\n  color: #eebd60;\n}\n.session-info-summary.reserved .session-info-summary-item {\n  color: #71bcc1;\n}\n.session-info-summary.active .session-info-summary-item {\n  color: #71ce99;\n}\n.session-info-summary.ended {\n  color: #71bcc1;\n}\n.session-info-summary.rejected {\n  color: #e65844;\n}\n.session-info-summary .session-info-summary-row {\n  display: flex;\n}\n.session-info-summary .session-info-summary-row .session-info-summary-item {\n  display: flex;\n  margin: 0.3rem 1rem 0 0rem;\n}\n.session-info-summary .session-info-summary-row .session-info-summary-item .session-info-summary-item-icon {\n  margin-left: 0.2rem;\n}\n.session-info-summary .session-info-summary-row .session-info-summary-item .session-info-summary-item-text {\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vc2Vzc2lvbi1pbmZvLWljb24tc3VtbWFyeS9zZXNzaW9uLWluZm8taWNvbi1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUEvQ0E7RUFzQkUsYUFBQTtBQTRCRjtBQWhESTtFQUNFLGNDVVk7QUR3Q2xCO0FBOUNJO0VBQ0UsY0NGVTtBRGtEaEI7QUE1Q0k7RUFDRSxjQ0RVO0FEK0NoQjtBQTNDRTtFQUNFLGNDWFk7QUR3RGhCO0FBM0NFO0VBQ0UsY0NUYztBRHNEbEI7QUExQ0U7RUFDRSxhQUFBO0FBNENKO0FBM0NJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FBNkNOO0FBNUNNO0VBQ0UsbUJBQUE7QUE4Q1I7QUE1Q007RUFFSSxtQkFBQTtBQTZDViIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZXNzaW9uLWluZm8taWNvbi1zdW1tYXJ5L3Nlc3Npb24taW5mby1pY29uLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnM7XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2Fuc19MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfQm9sZC50dGYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX1VsdHJhTGlnaHQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pX01lZGl1bS50dGYnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiQGltcG9ydCBcInNyYy90aGVtZS9jb21tb25cIjtcblxuLnNlc3Npb24taW5mby1zdW1tYXJ5IHtcbiAgJi5yZXF1ZXN0ZWQge1xuICAgIC5zZXNzaW9uLWluZm8tc3VtbWFyeS1pdGVtIHtcbiAgICAgIGNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi5yZXNlcnZlZCB7XG4gICAgLnNlc3Npb24taW5mby1zdW1tYXJ5LWl0ZW0ge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgLnNlc3Npb24taW5mby1zdW1tYXJ5LWl0ZW0ge1xuICAgICAgY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi5lbmRlZHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cbiAgJi5yZWplY3RlZHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICAuc2Vzc2lvbi1pbmZvLXN1bW1hcnktcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5zZXNzaW9uLWluZm8tc3VtbWFyeS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDAuM3JlbSAxcmVtIDAgMHJlbTtcbiAgICAgIC5zZXNzaW9uLWluZm8tc3VtbWFyeS1pdGVtLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICAgICAgfVxuICAgICAgLnNlc3Npb24taW5mby1zdW1tYXJ5LWl0ZW0tdGV4dFxuICAgICAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBpbXBvcnQgJ2ZvbnRzLnNjc3MnO1xuJGZvbnQgOiBcIm15SXJhblNhbnNcIjtcbiRmb250TnVtIDogXCJteUlyYW5TYW5zRmFOdW1cIjtcbiRwcmltYXJ5LWNvbG9yLWRhcms6ICM0Nzk2OWI7XG4kcHJpbWFyeS1jb2xvci1saWdodDojYTVkYWRlO1xuJHByaW1hcnktY29sb3IteGRhcms6IzJjODE4NjtcbiRwcmltYXJ5LWNvbG9yLXhsaWdodDojZDdmM2Y2O1xuJHByaW1hcnktY29sb3I6ICM3MWJjYzE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICNjZTMyMWM7XG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiNmZTdmNzA7XG4kc2Vjb25kYXJ5LWNvbG9yLXhkYXJrOiNhMjFkMGE7XG4kc2Vjb25kYXJ5LWNvbG9yLXhsaWdodDojZmZhMTk4O1xuJHNlY29uZGFyeS1jb2xvcjogI2U2NTg0NDtcbiR0ZXJ0aWFyeS1jb2xvcjojNzFjZTk5O1xuJHF1YXRlcm5hcnktY29sb3I6I2VlYmQ2MDtcbiRkYXJrLXRleHQtY29sb3I6IzRlNGU0ZTtcbiRsaWdodC10ZXh0LWNvbG9yOiNhNWE1YTU7XG4kb25saW5lLWNvbG9yOmxpbWU7XG4kb2ZmbGluZS1jb2xvcjpncmF5O1xuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBib3gtc2hhZG93KCRsZWZ0LCAkdG9wLCAkcmFkaXVzLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG59XG5AbWl4aW4gYm94LXNoYWRvdy1mdWxsKCRsZWZ0LCAkdG9wLCAkYmx1ciwgJHNwcmVhZCwgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbC1pbnNldCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtLWJvcmRlci1yYWRpdXM6JHJhZGl1cztcbn1cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufSJdfQ== */";
      /***/
    },

    /***/
    "zPWW":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/static/about/about.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zPWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>درباره حامی لاین</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4>\n    درباره ی حامی لاین\n  </h4>\n  <p>\n    <b>حامی لاین</b> اراِیه دهنده خدمات روان­شناسی بصورت تلفنی و آنلاین مبتنی بر\n    شبکه است. این خدمات کاملا حرفه­ ای و مبتنی بر دانش روان­ شناسی است و از اصل\n    حرفه یاورانه تبعیت می­ کند. این خدمات با استفاده از اپلیکیشنی که برای این\n    منظور طراحی شده است ارائه می­ گردد. سودمندی مشاوره و راهنمایی تلفنی در کمک\n    به حل و فصل مشکلات یا کاهش مسایل تماس گیرندگان در ادبیات مشاوره تلفنی به\n    اثبات رسیده است و سابقه استفاده از آن به چندین دهه قبل باز می­ گردد.\n  </p>\n  <p>\n    با توجه به تغییر سبک زندگی در دهه اخیر و فراگیری استفاده از اینترنت و به\n    کارگیری ابزارهای هوشمند ارتباطی، لزوم بکارگیری فناوری روز به منظور تسهیل و\n    بهینه­ سازی شیوه­ های رفع نیازمندیهای زندگی امروزی، تبدیل به ضرورتی اجتناب\n    ناپذیر شده است. از این دید، خدمات روان­ شناسی آنلاین ابزاری برای پاسخگویی به\n    این نیازمندیهاست.\n  </p>\n  <h4>رسالت گروه حامی لاین</h4>\n  <p class=\"pb-5\">\n    گروه حامی لاین بر آن است با ارائه خدمات روان شناسی باکیفیت، در دسترس، به\n    صرفه و امن در هر زمانی و مکانی برای گروه های مختلف، به ارتقاء سلامت روان\n    افراد، خانواده ها و در نهایت جامعه کمک نماید.\n  </p>\n</ion-content>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zs2g":
    /*!***************************************************************************!*\
      !*** ./src/app/common/provider-list-item/provider-list-item.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ProviderListItemComponent */

    /***/
    function zs2g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProviderListItemComponent", function () {
        return ProviderListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_provider_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./provider-list-item.component.html */
      "fAhz");
      /* harmony import */


      var _provider_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./provider-list-item.component.scss */
      "Z1Qc");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _models_provider_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../models/provider-group */
      "KIUr");
      /* harmony import */


      var src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/provider */
      "oPjg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProviderListItemComponent = /*#__PURE__*/function () {
        function ProviderListItemComponent(navController) {
          _classCallCheck(this, ProviderListItemComponent);

          this.navController = navController;
          this.provider = null;
          this.category = null;
          this.providerProfileUrl = '/provider';
          this.isFavorite = false;
          this.getStatusClass = src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getStatusClass;
          this.getStatusText = src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getStatusText;
          this.getDegreeText = src_app_models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getDegreeString;
          this.getName = _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].getName;
        }

        _createClass(ProviderListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToProvider",
          value: function navigateToProvider(provider) {
            this.navController.navigateForward([this.providerProfileUrl, provider.id]);
          }
        }]);

        return ProviderListItemComponent;
      }();

      ProviderListItemComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      ProviderListItemComponent.propDecorators = {
        provider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }],
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }],
        providerProfileUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }],
        isFavorite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
        }]
      };
      ProviderListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-provider-list-item',
        template: _raw_loader_provider_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_provider_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], ProviderListItemComponent);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map