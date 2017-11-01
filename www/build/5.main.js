webpackJsonp([5],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_email__ = __webpack_require__(314);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEmailPageModule", function() { return LoginEmailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginEmailPageModule = (function () {
    function LoginEmailPageModule() {
    }
    return LoginEmailPageModule;
}());
LoginEmailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_email__["a" /* LoginEmailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_email__["a" /* LoginEmailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_email__["a" /* LoginEmailPage */]
        ]
    })
], LoginEmailPageModule);

//# sourceMappingURL=login-email.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginEmailPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginEmailPage = (function () {
    function LoginEmailPage(navCtrl, auth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.form = {
            email: '',
            password: ''
        };
    }
    LoginEmailPage.prototype.openForgotPasswordPage = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    LoginEmailPage.prototype.openSignUpPage = function () {
        this.navCtrl.push('SignUpPage');
    };
    LoginEmailPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Por favor espera...'
        });
        loading.present();
        this.auth.loginWithEmail(this.form).subscribe(function (data) {
            setTimeout(function () {
                loading.dismiss();
                _this.navCtrl.setRoot('TabsPage');
                // The auth subscribe method inside the app.ts will handle the page switch to home
            }, 1000);
        }, function (err) {
            setTimeout(function () {
                loading.dismiss();
                if (err.code == "auth/invalid-email") {
                    _this.error = "Ingresa un email válido.";
                }
                else if (err.code == "auth/weak-password") {
                    _this.error = "La contraseña debe tener al menos 6 caracteres.";
                }
                else if (err.code == "auth/email-already-in-use") {
                    _this.error = "Ya existe un usuario con la direccion de correo.";
                }
                else {
                    _this.error = err;
                }
            }, 1000);
        });
    };
    return LoginEmailPage;
}());
LoginEmailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/stylder/ionic-login-firebase/src/pages/auth/login-email/login-email.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Acceder\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-email">\n  <ion-row>\n    <div padding class="forgot-password-txt" (click)="openForgotPasswordPage()">\n      Olvidé mi contraseña\n    </div>\n    <div padding class="sign-up-txt" (click)="openSignUpPage()">\n      Registrarme\n    </div>\n  </ion-row>\n\n  <form (ngSubmit)="login()" #loginForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="E-mail" [(ngModel)]="form.email" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="form.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button block [disabled]="!loginForm.form.valid"\n      class="log-in-btn">Acceder\n    </button>\n\n    <div padding class="error" *ngIf="error">\n      <p>{{error}}</p>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/stylder/ionic-login-firebase/src/pages/auth/login-email/login-email.html"*/,
        selector: 'login-email',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
], LoginEmailPage);

//# sourceMappingURL=login-email.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map