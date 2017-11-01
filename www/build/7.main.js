webpackJsonp([7],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = (function () {
    function ForgotPasswordPageModule() {
    }
    return ForgotPasswordPageModule;
}());
ForgotPasswordPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]
        ]
    })
], ForgotPasswordPageModule);

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Providers

var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(loadingCtrl, auth) {
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.form = {
            email: ''
        };
    }
    ForgotPasswordPage.prototype.reset = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Por favor espera...'
        });
        loading.present();
        this.auth.sendPasswordResetEmail(this.form.email).subscribe(function (data) {
            _this.error = 'Verifica tu correo para reestablecer tu contraseña.';
            loading.dismiss();
        }, function (error) {
            console.log(error);
            if (error.code == "auth/invalid-email") {
                _this.error = "Ingresa un email válido.";
            }
            else if (error.code == "auth/weak-password") {
                _this.error = "La contraseña debe tener al menos 6 caracteres.";
            }
            else if (error.code == "auth/email-already-in-use") {
                _this.error = "Ya existe un usuario con la direccion de correo.";
            }
            else {
                _this.error = error;
            }
            loading.dismiss();
        });
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/stylder/ionic-login-firebase/src/pages/auth/forgot-password/forgot-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Reestablecer contraseña\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forgot-password">\n  <div padding class="reset-password-txt">\n    Ingresa tu correo y te enviaremos un link para reestablecer tu contraseña.\n  </div>\n\n  <form (ngSubmit)="reset()" #resetForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="E-mail" [(ngModel)]="form.email" name="email"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button block [disabled]="!resetForm.form.valid" class="reset-password-btn">\n      Reestablecer\n    </button>\n\n    <div padding class="error" *ngIf="error">\n      <p>{{error}}</p>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/stylder/ionic-login-firebase/src/pages/auth/forgot-password/forgot-password.html"*/,
        selector: 'forgot-password',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map