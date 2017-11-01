webpackJsonp([6],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = (function () {
    function AuthPageModule() {
    }
    return AuthPageModule;
}());
AuthPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* AuthPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* AuthPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* AuthPage */]
        ]
    })
], AuthPageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthPage = (function () {
    function AuthPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    AuthPage.prototype.ngOnInit = function () {
    };
    AuthPage.prototype.openSignUpPage = function () {
        this.navCtrl.push('SignUpPage');
    };
    AuthPage.prototype.openLoginPage = function () {
        this.navCtrl.push('LoginEmailPage');
    };
    AuthPage.prototype.openTermsOfService = function () {
        this.navCtrl.push('TermsOfServicePage');
    };
    AuthPage.prototype.loginUserWithFacebook = function () {
        var _this = this;
        this.auth.loginWithFacebook().subscribe(function (data) {
            _this.navCtrl.setRoot('TabsPage');
        }, function (err) {
            _this.error = err;
        });
    };
    AuthPage.prototype.loginUserWithGoogle = function () {
        var _this = this;
        this.auth.loginWithGoogle().subscribe(function (data) {
            _this.navCtrl.setRoot('TabsPage');
        }, function (err) {
            _this.error = err;
        });
    };
    return AuthPage;
}());
AuthPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/stylder/ionic-login-firebase/src/pages/auth/home/home.html"*/'<ion-content class="auth-home" padding>\n  <div class="logo">\n    <div class="logo-icon">\n      <img src="assets/images/logo.png" />     \n    </div>    \n  </div>\n\n  <button ion-button block class="facebook-btn" (click)="loginUserWithFacebook()">\n    <ion-icon name="logo-facebook"></ion-icon>\n    Acceder con Facebook\n  </button>\n\n  <button ion-button block color="danger" (click)="loginUserWithGoogle()">\n    <ion-icon name="logo-google"></ion-icon>\n    Acceder con Google+\n  </button>\n\n  <button ion-button color="light" class="sign-up-btn" (click)="openSignUpPage()">Registrarme</button>\n  <button ion-button color="light" class="log-in-btn" (click)="openLoginPage()" color="secondary">Acceder</button>\n\n  <div padding class="error" *ngIf="error">\n    <p>{{error}}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/stylder/ionic-login-firebase/src/pages/auth/home/home.html"*/,
        selector: 'auth-home',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */]])
], AuthPage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map