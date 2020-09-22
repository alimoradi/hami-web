(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_user-usr-favorite-providers-usr-favorite-providers-module"], {
    /***/
    "0b+/":
    /*!**********************************************************************************!*\
      !*** ./src/app/for_user/usr-favorite-providers/usr-favorite-providers.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".provider-item-container .avatar {\n  height: 2rem;\n  width: 2rem;\n  background-size: cover;\n  background-position: center center;\n  background-size: cover;\n  background-position: center center;\n  margin-left: 0.8rem;\n  border-radius: 50px;\n}\n.provider-item-container .name {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.provider-item-container .category-name {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yX3VzZXIvdXNyLWZhdm9yaXRlLXByb3ZpZGVycy91c3ItZmF2b3JpdGUtcHJvdmlkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Ysa0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQU47QUFFSTtFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdJO0VBQ0UsaUJBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL2Zvcl91c2VyL3Vzci1mYXZvcml0ZS1wcm92aWRlcnMvdXNyLWZhdm9yaXRlLXByb3ZpZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvdmlkZXItaXRlbS1jb250YWluZXIge1xuICAgIC5hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIH1cbiAgICAubmFtZVxuICAgIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmNhdGVnb3J5LW5hbWV7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "LdIA":
    /*!**********************************************************************************!*\
      !*** ./src/app/for_user/usr-favorite-providers/usr-favorite-providers.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: UsrFavoriteProvidersPageModule */

    /***/
    function LdIA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrFavoriteProvidersPageModule", function () {
        return UsrFavoriteProvidersPageModule;
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


      var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../common/common-declarations/common-declarations.module */
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


      var _usr_favorite_providers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./usr-favorite-providers-routing.module */
      "zEuq");
      /* harmony import */


      var _usr_favorite_providers_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./usr-favorite-providers.page */
      "zAoG");

      var UsrFavoriteProvidersPageModule = function UsrFavoriteProvidersPageModule() {
        _classCallCheck(this, UsrFavoriteProvidersPageModule);
      };

      UsrFavoriteProvidersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _usr_favorite_providers_routing_module__WEBPACK_IMPORTED_MODULE_7__["UsrFavoriteProvidersPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"], _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]],
        declarations: [_usr_favorite_providers_page__WEBPACK_IMPORTED_MODULE_8__["UsrFavoriteProvidersPage"]]
      })], UsrFavoriteProvidersPageModule);
      /***/
    },

    /***/
    "UABC":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_user/usr-favorite-providers/usr-favorite-providers.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UABC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>مشاورین نشان شده</ion-title>\n    <ion-buttons slot=\"start\">\n      \n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-provider-list-skeleton *ngIf=\"this.providerService.favoriteProvidersShared.needsSkeleton()\" [times]=\"3\"></app-provider-list-skeleton>\n\n  <app-provider-list-item [isFavorite]=\"true\" [provider]=\"provider\" *ngFor=\"let provider of this.providerService.favoriteProvidersShared.resource()\">\n\n  </app-provider-list-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "zAoG":
    /*!********************************************************************************!*\
      !*** ./src/app/for_user/usr-favorite-providers/usr-favorite-providers.page.ts ***!
      \********************************************************************************/

    /*! exports provided: UsrFavoriteProvidersPage */

    /***/
    function zAoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrFavoriteProvidersPage", function () {
        return UsrFavoriteProvidersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_usr_favorite_providers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./usr-favorite-providers.page.html */
      "UABC");
      /* harmony import */


      var _usr_favorite_providers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./usr-favorite-providers.page.scss */
      "0b+/");
      /* harmony import */


      var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/env.service */
      "5zL6");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var _services_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/provider.service */
      "gs/X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var UsrFavoriteProvidersPage = /*#__PURE__*/function () {
        function UsrFavoriteProvidersPage(providerService, navController, env) {
          _classCallCheck(this, UsrFavoriteProvidersPage);

          this.providerService = providerService;
          this.navController = navController;
          this.env = env;
          this.getName = _models_user__WEBPACK_IMPORTED_MODULE_5__["User"].getName;
          this.refresher = null;
        }

        _createClass(UsrFavoriteProvidersPage, [{
          key: "navigateToProvider",
          value: function navigateToProvider(provider) {
            this.providerService.setSelectedProvider(provider);
            this.navController.navigateForward(["provider/" + provider.id]);
          }
        }, {
          key: "refresh",
          value: function refresh(event) {
            this.refresher = event.target;
            this.providerService.favoriteProvidersShared.request();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.providerService.favoriteProvidersShared.getUpdateNotifier(this).subscribe(function () {
              _this.refresher && _this.refresher.complete();
            });
            this.providerService.favoriteProvidersShared.request();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return UsrFavoriteProvidersPage;
      }();

      UsrFavoriteProvidersPage.ctorParameters = function () {
        return [{
          type: _services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }];
      };

      UsrFavoriteProvidersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "app-usr-favorite-providers",
        template: _raw_loader_usr_favorite_providers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usr_favorite_providers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])], UsrFavoriteProvidersPage);
      /***/
    },

    /***/
    "zEuq":
    /*!******************************************************************************************!*\
      !*** ./src/app/for_user/usr-favorite-providers/usr-favorite-providers-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: UsrFavoriteProvidersPageRoutingModule */

    /***/
    function zEuq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrFavoriteProvidersPageRoutingModule", function () {
        return UsrFavoriteProvidersPageRoutingModule;
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


      var _usr_favorite_providers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./usr-favorite-providers.page */
      "zAoG");

      var routes = [{
        path: '',
        component: _usr_favorite_providers_page__WEBPACK_IMPORTED_MODULE_3__["UsrFavoriteProvidersPage"]
      }];

      var UsrFavoriteProvidersPageRoutingModule = function UsrFavoriteProvidersPageRoutingModule() {
        _classCallCheck(this, UsrFavoriteProvidersPageRoutingModule);
      };

      UsrFavoriteProvidersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsrFavoriteProvidersPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=for_user-usr-favorite-providers-usr-favorite-providers-module-es5.js.map