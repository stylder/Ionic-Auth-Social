webpackJsonp([4],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPagePageModule", function() { return SignUpPagePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPagePageModule = (function () {
    function SignUpPagePageModule() {
    }
    return SignUpPagePageModule;
}());
SignUpPagePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]
        ]
    })
], SignUpPagePageModule);

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = (function () {
    function SignUpPage(navCtrl, auth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.form = {
            email: '',
            password: ''
        };
    }
    SignUpPage.prototype.openForgotPasswordPage = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    SignUpPage.prototype.openLoginPage = function () {
        this.navCtrl.push('LoginEmailPage');
    };
    SignUpPage.prototype.register = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Por favor espera...'
        });
        loading.present();
        this.auth.registerUser(this.form).subscribe(function (registerData) {
            _this.auth.loginWithEmail(registerData).subscribe(function (loginData) {
                setTimeout(function () {
                    loading.dismiss();
                    _this.navCtrl.setRoot('TabsPage');
                }, 1000);
            }, function (loginError) {
                setTimeout(function () {
                    loading.dismiss();
                    _this.error = loginError;
                }, 1000);
            });
        }, function (registerError) {
            setTimeout(function () {
                loading.dismiss();
                if (registerError.code == "auth/invalid-email") {
                    _this.error = "Ingresa un email válido.";
                }
                else if (registerError.code == "auth/weak-password") {
                    _this.error = "La contraseña debe tener al menos 6 caracteres.";
                }
                else if (registerError.code == "auth/email-already-in-use") {
                    _this.error = "Ya existe un usuario con la direccion de correo.";
                }
                else {
                    _this.error = registerError;
                }
            }, 1000);
        });
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/stylder/ionic-login-firebase/src/pages/auth/sign-up/sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Registro de usuario\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="sign-up">\n  <ion-row>\n    <div padding class="forgot-password-txt" (click)="openForgotPasswordPage()">\n      Olvidé mi contraseña\n    </div>\n    <div padding class="log-in-txt" (click)="openLoginPage()">\n      Acceder\n    </div>\n  </ion-row>\n\n  <form (ngSubmit)="register()" #signUpForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="E-mail" [(ngModel)]="form.email" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="form.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button block [disabled]="!signUpForm.form.valid"\n      class="sign-up-btn">Registrarme\n    </button>\n\n    <div padding class="error" *ngIf="error">\n      <p>{{error}}</p>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/stylder/ionic-login-firebase/src/pages/auth/sign-up/sign-up.html"*/,
        selector: 'sign-up',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map