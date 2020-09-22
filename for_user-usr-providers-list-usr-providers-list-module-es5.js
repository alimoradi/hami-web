(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_user-usr-providers-list-usr-providers-list-module"], {
    /***/
    "ONet":
    /*!**************************************************************************!*\
      !*** ./src/app/for_user/usr-providers-list/usr-providers-list.module.ts ***!
      \**************************************************************************/

    /*! exports provided: UsrProvidersListPageModule */

    /***/
    function ONet(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrProvidersListPageModule", function () {
        return UsrProvidersListPageModule;
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


      var _usr_providers_list_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./usr-providers-list-routing.module */
      "mxsT");
      /* harmony import */


      var _usr_providers_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./usr-providers-list.page */
      "TYMk");

      var UsrProvidersListPageModule = function UsrProvidersListPageModule() {
        _classCallCheck(this, UsrProvidersListPageModule);
      };

      UsrProvidersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _usr_providers_list_routing_module__WEBPACK_IMPORTED_MODULE_7__["UsrProvidersListPageRoutingModule"], _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"], _skeleton_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_1__["SkeletonModule"]],
        declarations: [_usr_providers_list_page__WEBPACK_IMPORTED_MODULE_8__["UsrProvidersListPage"]]
      })], UsrProvidersListPageModule);
      /***/
    },

    /***/
    "TYMk":
    /*!************************************************************************!*\
      !*** ./src/app/for_user/usr-providers-list/usr-providers-list.page.ts ***!
      \************************************************************************/

    /*! exports provided: UsrProvidersListPage */

    /***/
    function TYMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrProvidersListPage", function () {
        return UsrProvidersListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_usr_providers_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./usr-providers-list.page.html */
      "wV6G");
      /* harmony import */


      var _usr_providers_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./usr-providers-list.page.scss */
      "U9Js");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/env.service */
      "5zL6");
      /* harmony import */


      var _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../models/remote-stats */
      "CGJ0");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../models/user */
      "2hxB");
      /* harmony import */


      var _models_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../models/provider */
      "oPjg");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../services/provider.service */
      "gs/X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");

      var UsrProvidersListPage = /*#__PURE__*/function () {
        function UsrProvidersListPage(providerService, navController, route, env) {
          _classCallCheck(this, UsrProvidersListPage);

          this.providerService = providerService;
          this.navController = navController;
          this.route = route;
          this.env = env;
          this.selectedProviderFilterStatus = _models_provider__WEBPACK_IMPORTED_MODULE_6__["ProviderStatus"].NA;
          this.getName = _models_user__WEBPACK_IMPORTED_MODULE_5__["User"].getName;
          this.loaded = false;
          this.statsType = _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"];
          this.providerGroupId = null;
          this.getStatusClass = _models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getStatusClass;
          this.getStatusText = _models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getStatusText;
          this.getDegreeText = _models_provider__WEBPACK_IMPORTED_MODULE_6__["Provider"].getDegreeString;
          this.refresher = null;
        }

        _createClass(UsrProvidersListPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {//this.userService.updateRemoteStats().subscribe();
          }
        }, {
          key: "refresh",
          value: function refresh(event) {
            this.refresher = event.target;
            this.providerService.providersByCategoryIdShared.request(this.providerGroupId);
          }
        }, {
          key: "setFilterStatus",
          value: function setFilterStatus(ev) {
            // this.selectedProviderFilterStatus = ev;
            if (ev.target.checked) {
              this.selectedProviderFilterStatus = _models_provider__WEBPACK_IMPORTED_MODULE_6__["ProviderStatus"].ONLINE;
            } else {
              this.selectedProviderFilterStatus = _models_provider__WEBPACK_IMPORTED_MODULE_6__["ProviderStatus"].NA;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.providerGroupId = this.route.snapshot.params.providerGroupId;

            if (this.providerService.providersByCategoryIdShared.resource().length && this.providerService.providerCategoryShared.resource() && this.providerService.providerCategoryShared.resource().id == this.providerGroupId) {} else {
              this.providerService.providersByCategoryIdShared.reset();
              this.providerService.providerCategoryShared.request(this.providerGroupId);
            }

            this.providerService.providersByCategoryIdShared.getUpdateNotifier(this).subscribe(function (result) {
              _this.refresher && _this.refresher.complete();
            });
            this.providerService.providersByCategoryIdShared.setFilter(function (p) {
              if (_this.selectedProviderFilterStatus == _models_provider__WEBPACK_IMPORTED_MODULE_6__["ProviderStatus"].NA) return true;
              return p.status == _this.selectedProviderFilterStatus;
            });
            this.providerService.providersByCategoryIdShared.request(this.providerGroupId);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }]);

        return UsrProvidersListPage;
      }();

      UsrProvidersListPage.ctorParameters = function () {
        return [{
          type: _services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]
        }];
      };

      UsrProvidersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__["UntilDestroy"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: "app-usr-providers-list",
        template: _raw_loader_usr_providers_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usr_providers_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])], UsrProvidersListPage);
      /***/
    },

    /***/
    "U9Js":
    /*!**************************************************************************!*\
      !*** ./src/app/for_user/usr-providers-list/usr-providers-list.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function U9Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl91c2VyL3Vzci1wcm92aWRlcnMtbGlzdC91c3ItcHJvdmlkZXJzLWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "mxsT":
    /*!**********************************************************************************!*\
      !*** ./src/app/for_user/usr-providers-list/usr-providers-list-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: UsrProvidersListPageRoutingModule */

    /***/
    function mxsT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsrProvidersListPageRoutingModule", function () {
        return UsrProvidersListPageRoutingModule;
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


      var _usr_providers_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./usr-providers-list.page */
      "TYMk");

      var routes = [{
        path: '',
        component: _usr_providers_list_page__WEBPACK_IMPORTED_MODULE_3__["UsrProvidersListPage"]
      }];

      var UsrProvidersListPageRoutingModule = function UsrProvidersListPageRoutingModule() {
        _classCallCheck(this, UsrProvidersListPageRoutingModule);
      };

      UsrProvidersListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsrProvidersListPageRoutingModule);
      /***/
    },

    /***/
    "wV6G":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_user/usr-providers-list/usr-providers-list.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wV6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n      <!-- <ion-button  (click)=\"presentPopover()\">\n        <ion-icon name=\"options-outline\"></ion-icon>\n      </ion-button> -->\n      <ion-back-button\n        defaultHref=\"provider-categories\"\n         \n      ></ion-back-button>\n    </ion-buttons>\n\n    <ion-title *ngIf=\"this.providerGroup\"\n      >زمینه {{this.providerGroup.name}}</ion-title\n    >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div\n    class=\"no-provider h-100 d-flex flex-column justify-content-center align-items-center\"\n    *ngIf=\"false\"\n  >\n    <ion-img src=\"/assets/image/no-providers.jpg\"></ion-img>\n    <span class=\"light-text normal-text\">\n      هنوز مشاوری در این دسته وجود ندارد.\n    </span>\n  </div>\n  <app-random-provider-avatars></app-random-provider-avatars>\n  <app-provider-list-skeleton *ngIf=\"providerService.providersByCategoryIdShared.needsSkeleton()\" [times]=\"3\"></app-provider-list-skeleton>\n  <ion-list>\n    <app-provider-list-item \n      *ngFor=\"let provider of providerService.providersByCategoryIdShared.filteredResource()\"\n      [provider] = \"provider\"\n      [category] = \"providerService.providerCategoryShared.resource()\"\n      [isFavorite] = \"providerService.isFavorite(provider.id) | async\"\n      \n    ></app-provider-list-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=for_user-usr-providers-list-usr-providers-list-module-es5.js.map