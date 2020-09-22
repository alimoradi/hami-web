(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["for_admin-adm-provider-categories-adm-provider-categories-module"],{

/***/ "2wDZ":
/*!*************************************************************************************!*\
  !*** ./src/app/for_admin/adm-provider-categories/adm-provider-categories.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans.ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSans;\n  src: url('IRANSans_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum).ttf');\n  font-weight: 400;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_UltraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: myIranSansFaNum;\n  src: url('IRANSans(FaNum)_Medium.ttf');\n  font-weight: 500;\n}\n.category-name {\n  font-family: \"myIranSans\";\n  font-size: 0.7rem;\n}\n.category-icon {\n  color: #e65844;\n}\nion-item-option {\n  background-color: transparent;\n  color: #e65844;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9mb3JfYWRtaW4vYWRtLXByb3ZpZGVyLWNhdGVnb3JpZXMvYWRtLXByb3ZpZGVyLWNhdGVnb3JpZXMucGFnZS5zY3NzIiwic3JjL3RoZW1lL2NvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QUFoREE7RUFFSSx5QkNESTtFREVKLGlCQUFBO0FBaURKO0FBOUNBO0VBRUksY0NJYztBRDRDbEI7QUE1Q0E7RUFFSSw2QkFBQTtFQUNBLGNDSGM7QURpRGxCIiwiZmlsZSI6InNyYy9hcHAvZm9yX2FkbWluL2FkbS1wcm92aWRlci1jYXRlZ29yaWVzL2FkbS1wcm92aWRlci1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0JvbGQudHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2FucztcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zX0xpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9VbHRyYUxpZ2h0LnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9NZWRpdW0udHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbXlJcmFuU2Fuc0ZhTnVtO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSVJBTlNhbnMoRmFOdW0pLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG15SXJhblNhbnNGYU51bTtcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zKEZhTnVtKV9MaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfVWx0cmFMaWdodC50dGYnKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBteUlyYW5TYW5zRmFOdW07XG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9JUkFOU2FucyhGYU51bSlfTWVkaXVtLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0iLCJAaW1wb3J0ICdzcmMvdGhlbWUvY29tbW9uLnNjc3MnO1xuLmNhdGVnb3J5LW5hbWVcbntcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgZm9udC1zaXplOjAuN3JlbTtcblxufVxuLmNhdGVnb3J5LWljb25cbntcbiAgICBjb2xvcjokc2Vjb25kYXJ5LWNvbG9yIDtcbn1cblxuXG5pb24taXRlbS1vcHRpb25cbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiRzZWNvbmRhcnktY29sb3I7XG59IiwiXG5AaW1wb3J0ICdmb250cy5zY3NzJztcbiRmb250IDogXCJteUlyYW5TYW5zXCI7XG4kZm9udE51bSA6IFwibXlJcmFuU2Fuc0ZhTnVtXCI7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiAjNDc5NjliO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6I2E1ZGFkZTtcbiRwcmltYXJ5LWNvbG9yLXhkYXJrOiMyYzgxODY7XG4kcHJpbWFyeS1jb2xvci14bGlnaHQ6I2Q3ZjNmNjtcbiRwcmltYXJ5LWNvbG9yOiAjNzFiY2MxO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrOiAjY2UzMjFjO1xuJHNlY29uZGFyeS1jb2xvci1saWdodDojZmU3ZjcwO1xuJHNlY29uZGFyeS1jb2xvci14ZGFyazojYTIxZDBhO1xuJHNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2ZmYTE5ODtcbiRzZWNvbmRhcnktY29sb3I6ICNlNjU4NDQ7XG4kdGVydGlhcnktY29sb3I6IzcxY2U5OTtcbiRxdWF0ZXJuYXJ5LWNvbG9yOiNlZWJkNjA7XG4kZGFyay10ZXh0LWNvbG9yOiM0ZTRlNGU7XG4kbGlnaHQtdGV4dC1jb2xvcjojYTVhNWE1O1xuJG9ubGluZS1jb2xvcjpsaW1lO1xuJG9mZmxpbmUtY29sb3I6Z3JheTtcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gYm94LXNoYWRvdygkbGVmdCwgJHRvcCwgJHJhZGl1cywgJGNvbG9yKSB7XG5cdGJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJHJhZGl1cyAkY29sb3I7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkcmFkaXVzICRjb2xvcjtcblx0LW1vei1ib3gtc2hhZG93OiAkbGVmdCAkdG9wICRyYWRpdXMgJGNvbG9yO1xufVxuQG1peGluIGJveC1zaGFkb3ctZnVsbCgkbGVmdCwgJHRvcCwgJGJsdXIsICRzcHJlYWQsICRjb2xvcikge1xuXHRib3gtc2hhZG93OiAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG5cdC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cbkBtaXhpbiBib3gtc2hhZG93LWZ1bGwtaW5zZXQoJGxlZnQsICR0b3AsICRibHVyLCAkc3ByZWFkLCAkY29sb3IpIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgJGxlZnQgJHRvcCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkbGVmdCAkdG9wICRibHVyICRzcHJlYWQgJGNvbG9yO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0ICRsZWZ0ICR0b3AgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiRyYWRpdXM7XG59XG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn0iXX0= */");

/***/ }),

/***/ "9+JZ":
/*!********************************************************************************************!*\
  !*** ./src/app/for_admin/adm-add-provider-category/adm-add-provider-category.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AdmAddProviderCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmAddProviderCategoryComponent", function() { return AdmAddProviderCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adm_add_provider_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adm-add-provider-category.component.html */ "u0+4");
/* harmony import */ var _adm_add_provider_category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-add-provider-category.component.scss */ "cAS3");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../models/remote-stats */ "CGJ0");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/provider.service */ "gs/X");
/* harmony import */ var _common_select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../common/select-icon/select-icon.component */ "eZ8L");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _models_provider_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../models/provider-group */ "KIUr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");














let AdmAddProviderCategoryComponent = class AdmAddProviderCategoryComponent {
    constructor(modal, iconModal, providerService, loading, alert, env, userService) {
        this.modal = modal;
        this.iconModal = iconModal;
        this.providerService = providerService;
        this.loading = loading;
        this.alert = alert;
        this.env = env;
        this.userService = userService;
        this.isEdit = false;
        this.category = new _models_provider_group__WEBPACK_IMPORTED_MODULE_9__["ProviderGroup"]();
        this.statsType = _models_remote_stats__WEBPACK_IMPORTED_MODULE_4__["RemoteStatsType"];
        this.title = "";
    }
    dismiss() {
        this.modal.dismiss();
    }
    selectIcon() {
        this.presentLoading().subscribe((result) => {
            this.presentSelectIconModal().subscribe((presented) => {
                this.loading.dismiss();
            });
        });
    }
    formValid() {
        return this.category.name != "" && this.category.icon_name != "";
    }
    presentSelectIconModal() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.iconModal.create({
            component: _common_select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_7__["SelectIconComponent"],
            componentProps: {},
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["concatMap"])((modal) => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(modal.onDidDismiss()).subscribe((data) => {
                let iconName = data["dataa"];
                if (iconName != "") {
                    this.category.icon_name = data["data"];
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(modal.present());
        }));
    }
    presentLoading() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.loading.create({
            mode: "ios",
            translucent: true,
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["concatMap"])((modal) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(modal.onDidDismiss()).subscribe((data) => { });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(modal.present());
        }));
    }
    ngOnInit() {
        if (!this.isEdit) {
            this.title = "گروه جدید";
        }
        else {
            this.userService.updateRemoteStats().subscribe();
            this.title = "ویرایش گروه";
        }
    }
    submit() {
        if (this.isEdit) {
            this.env.somethingIsPending("editing provider category");
            this.providerService
                .editCategory(this.category)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
                this.alert.presentError("ویرایش گروه مشاوره با مشکل مواجه شد.");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(false);
            }))
                .subscribe((result) => {
                this.env.somethingIsDonePending("editing provider category");
                if (result) {
                    this.alert.presentSuccess("گروه با موفقیت ویرایش شد.");
                }
            });
        }
        else {
            this.env.somethingIsPending("adding provider category");
            this.providerService
                .addCategory(this.category)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
                this.alert.presentError("ثبت گروه جدید با مشکل مواجه شد.");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(false);
            }))
                .subscribe((result) => {
                this.env.somethingIsDonePending("adding provider category");
                if (result) {
                    this.alert.presentSuccess("گروه با موفقیت ثبت شد.");
                }
            });
        }
        this.dismiss();
    }
};
AdmAddProviderCategoryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AdmAddProviderCategoryComponent.propDecorators = {
    isEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};
AdmAddProviderCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: "app-adm-add-provider-category",
        template: _raw_loader_adm_add_provider_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adm_add_provider_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], AdmAddProviderCategoryComponent);



/***/ }),

/***/ "IVZr":
/*!*********************************************************************************************!*\
  !*** ./src/app/for_admin/adm-provider-categories/adm-provider-categories-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdmProviderCategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProviderCategoriesPageRoutingModule", function() { return AdmProviderCategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adm_provider_categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-provider-categories.page */ "zhIX");




const routes = [
    {
        path: '',
        component: _adm_provider_categories_page__WEBPACK_IMPORTED_MODULE_3__["AdmProviderCategoriesPage"]
    }
];
let AdmProviderCategoriesPageRoutingModule = class AdmProviderCategoriesPageRoutingModule {
};
AdmProviderCategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmProviderCategoriesPageRoutingModule);



/***/ }),

/***/ "cAS3":
/*!**********************************************************************************************!*\
  !*** ./src/app/for_admin/adm-add-provider-category/adm-add-provider-category.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcl9hZG1pbi9hZG0tYWRkLXByb3ZpZGVyLWNhdGVnb3J5L2FkbS1hZGQtcHJvdmlkZXItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "eyp8":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_admin/adm-provider-categories/adm-provider-categories.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>گروه های مشاوره</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"end\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <app-loading-toolbar-button></app-loading-toolbar-button>\n      <ion-button (click)=\"addCategory()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let group of categories\">\n      <ion-item-options side=\"end\" class=\"\">\n        <ion-item-option\n          class=\"normal-text my-font\"\n          (click)=\"deleteCategory(group)\"\n        >\n          <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n\n      <ion-item button class=\"shadow-item\" (click)=\"editCategory(group)\">\n        <ion-icon\n          slot=\"start\"\n          [name]=\"group.icon_name\"\n          class=\"category-icon\"\n        ></ion-icon>\n        <span class=\"category-name\">\n          {{group.name}}\n        </span>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "gGEd":
/*!*************************************************************************************!*\
  !*** ./src/app/for_admin/adm-provider-categories/adm-provider-categories.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdmProviderCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProviderCategoriesPageModule", function() { return AdmProviderCategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/select-icon/select-icon.component */ "eZ8L");
/* harmony import */ var _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../common/common-declarations/common-declarations.module */ "Z25Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adm_provider_categories_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adm-provider-categories-routing.module */ "IVZr");
/* harmony import */ var _adm_provider_categories_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adm-provider-categories.page */ "zhIX");
/* harmony import */ var _adm_add_provider_category_adm_add_provider_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../adm-add-provider-category/adm-add-provider-category.component */ "9+JZ");










let AdmProviderCategoriesPageModule = class AdmProviderCategoriesPageModule {
};
AdmProviderCategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _adm_provider_categories_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdmProviderCategoriesPageRoutingModule"],
            _common_common_declarations_common_declarations_module__WEBPACK_IMPORTED_MODULE_2__["CommonDeclarationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        declarations: [_adm_provider_categories_page__WEBPACK_IMPORTED_MODULE_8__["AdmProviderCategoriesPage"], _adm_add_provider_category_adm_add_provider_category_component__WEBPACK_IMPORTED_MODULE_9__["AdmAddProviderCategoryComponent"]],
        entryComponents: [_adm_add_provider_category_adm_add_provider_category_component__WEBPACK_IMPORTED_MODULE_9__["AdmAddProviderCategoryComponent"], _common_select_icon_select_icon_component__WEBPACK_IMPORTED_MODULE_1__["SelectIconComponent"]]
    })
], AdmProviderCategoriesPageModule);



/***/ }),

/***/ "u0+4":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/for_admin/adm-add-provider-category/adm-add-provider-category.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"flex-container action-container\">\n    <div class=\"action-content\"  >\n      <app-remote-stats *ngIf=\"isEdit && category\" [statsType]=\"statsType.CATEGORY_PROVIDERS_STATS\" [categoryId]=\"category.id\"></app-remote-stats>\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"نام\"\n              [(ngModel)]=\"category.name\"\n              required\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input\n              placeholder=\"توصیف\"\n              [(ngModel)]=\"category.description\"\n              \n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n          <ion-item>\n            <ion-input\n              placeholder=\"نام آیکون\"\n              [(ngModel)]=\"category.icon_name\"\n              type=\"text\"\n              #iconInput\n              required\n              (click)=\"selectIcon()\"\n            ></ion-input>\n            <ion-icon slot=\"end\" [name]=\"iconInput.value\"></ion-icon>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n    <div class=\"actions\">\n      \n      <div class=\"actions-wrapper\">\n        <ion-button class=\"primary-button\" (click)=\"submit()\" fill=\"solid\" [disabled]=\"!formValid()\">\n           ثبت\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "zhIX":
/*!***********************************************************************************!*\
  !*** ./src/app/for_admin/adm-provider-categories/adm-provider-categories.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AdmProviderCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProviderCategoriesPage", function() { return AdmProviderCategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adm_provider_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adm-provider-categories.page.html */ "eyp8");
/* harmony import */ var _adm_provider_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-provider-categories.page.scss */ "2wDZ");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/provider.service */ "gs/X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _adm_add_provider_category_adm_add_provider_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../adm-add-provider-category/adm-add-provider-category.component */ "9+JZ");











let AdmProviderCategoriesPage = class AdmProviderCategoriesPage {
    constructor(providerService, navController, menu, env, alert, modalController) {
        this.providerService = providerService;
        this.navController = navController;
        this.menu = menu;
        this.env = env;
        this.alert = alert;
        this.modalController = modalController;
    }
    navigateToCategory(providerGroupdId) {
        this.navController.navigateForward([
            "dashboard/providers/" + providerGroupdId,
        ]);
    }
    addCategory() {
        this.presentAddCategoryModal(false, null).subscribe();
    }
    editCategory(category) {
        this.presentAddCategoryModal(true, category).subscribe();
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
    presentAddCategoryModal(isEdit, category = null) {
        let props = {
            'isEdit': isEdit
        };
        if (category) {
            props['category'] = category;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(this.modalController.create({
            component: _adm_add_provider_category_adm_add_provider_category_component__WEBPACK_IMPORTED_MODULE_10__["AdmAddProviderCategoryComponent"],
            componentProps: props
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(modal => {
            modal.onDidDismiss;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(modal.onDidDismiss()).subscribe(data => {
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(modal.present());
        }));
    }
    loadGroups(refresher = null) {
        // this.env.somethingIsPending("fetching user provider groups");
        // return this.providerService.getCategories().pipe(catchError(error=>{
        //   this.alert.presentError('دریافت گروه های مشاوره با مشکل مواجه شد.')
        //   return of(false);
        // })).subscribe(result=>{
        //   this.env.somethingIsDonePending("fetching user provider groups");
        //   if(refresher)
        //   {
        //     refresher.complete();
        //   }
        // });
    }
    deleteCategory(group) {
    }
    refresh(event) {
        this.loadGroups(event.target);
    }
    ngOnInit() {
        this.categoriesSubscription = this.providerService.providerCategoriesUpdated.subscribe(result => {
            this.categories = result;
        });
        this.loadGroups();
    }
    ngOnDestroy() {
        this.categoriesSubscription.unsubscribe();
    }
};
AdmProviderCategoriesPage.ctorParameters = () => [
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
AdmProviderCategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-adm-provider-categories',
        template: _raw_loader_adm_provider_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adm_provider_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
], AdmProviderCategoriesPage);



/***/ })

}]);
//# sourceMappingURL=for_admin-adm-provider-categories-adm-provider-categories-module-es2015.js.map