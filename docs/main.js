(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link routerLink=\"proxy\">Enter Proxy Tips</a>\n      <a mat-tab-link routerLink=\"enterResults\">Enter Results</a>\n      <a mat-tab-link routerLink=\"downloadResults\">Download Results</a>\n    </nav>\n    </div>\n  \n    <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/afl-ladder.service.ts":
/*!***************************************!*\
  !*** ./src/app/afl-ladder.service.ts ***!
  \***************************************/
/*! exports provided: AflLadderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AflLadderService", function() { return AflLadderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AflLadderService = /** @class */ (function () {
    function AflLadderService(httpClient) {
        this.httpClient = httpClient;
        //private ladderUrl: string = 'http://localhost:3000/ladder';
        this.ladderUrl = 'https://aqueous-stream-65471.herokuapp.com/ladder';
    }
    AflLadderService.prototype.sleep = function (duration) {
        return new Promise(function (resolve) { return setTimeout(resolve, duration); });
    };
    AflLadderService.prototype.getLadder = function (season, round) {
        return this.httpClient.get(this.ladderUrl + "/" + season + "/" + round);
    };
    AflLadderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AflLadderService);
    return AflLadderService;
}());



/***/ }),

/***/ "./src/app/afl-ladder/afl-ladder.component.css":
/*!*****************************************************!*\
  !*** ./src/app/afl-ladder/afl-ladder.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FmbC1sYWRkZXIvYWZsLWxhZGRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/afl-ladder/afl-ladder.component.html":
/*!******************************************************!*\
  !*** ./src/app/afl-ladder/afl-ladder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n\n<div style=\"padding-left:50px\">\n  <h2 align=\"left\">AFL Ladder for round 23</h2>\n  <br><br>\n  <img *ngIf=\"loading\" src=\"assets/giphy.gif\">\n  <table>\n    <tr align=left>\n    <th style=\"padding-left:10px;padding-right:10px\">Team Name</th>\n    <th style=\"padding-left:10px;padding-right:10px\">P</th>\n    <th style=\"padding-left:10px;padding-right:10px\">W</th>\n    <th style=\"padding-left:10px;padding-right:10px\">L</th>\n    <th style=\"padding-left:10px;padding-right:10px\">D</th>\n    <th style=\"padding-left:10px;padding-right:10px\" align=center>For</th>\n    <th style=\"padding-left:10px;padding-right:10px\" align=center>Against</th>\n    <th style=\"padding-left:10px;padding-right:10px\" align=center>%</th>\n    <th style=\"padding-left:10px;padding-right:10px\" align=center>Pts</th>\n    </tr>\n    <tr *ngFor=\"let line of ladder;index as i\" align=\"left\">\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.team}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.played}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.wins}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.losses}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.draws}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.for_points}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.against}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.percentage}}</td>\n      <td style=\"padding-left:10px;padding-right:10px\">{{line.points}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/afl-ladder/afl-ladder.component.ts":
/*!****************************************************!*\
  !*** ./src/app/afl-ladder/afl-ladder.component.ts ***!
  \****************************************************/
/*! exports provided: AflLadderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AflLadderComponent", function() { return AflLadderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _afl_ladder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../afl-ladder.service */ "./src/app/afl-ladder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AflLadderComponent = /** @class */ (function () {
    function AflLadderComponent(ladderService) {
        this.ladderService = ladderService;
        this.loading = false;
    }
    AflLadderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.ladderService.getLadder('2018', 23).subscribe(function (ladder) {
            _this.ladder = ladder;
            _this.loading = false;
        });
    };
    AflLadderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-afl-ladder',
            template: __webpack_require__(/*! ./afl-ladder.component.html */ "./src/app/afl-ladder/afl-ladder.component.html"),
            styles: [__webpack_require__(/*! ./afl-ladder.component.css */ "./src/app/afl-ladder/afl-ladder.component.css")]
        }),
        __metadata("design:paramtypes", [_afl_ladder_service__WEBPACK_IMPORTED_MODULE_1__["AflLadderService"]])
    ], AflLadderComponent);
    return AflLadderComponent;
}());



/***/ }),

/***/ "./src/app/afl-results/afl-results.component.css":
/*!*******************************************************!*\
  !*** ./src/app/afl-results/afl-results.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FmbC1yZXN1bHRzL2FmbC1yZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/afl-results/afl-results.component.html":
/*!********************************************************!*\
  !*** ./src/app/afl-results/afl-results.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav mat-tab-nav-bar>\n    <a mat-tab-link routerLink=\"round\">Round Results</a>\n    <a mat-tab-link routerLink=\"team\">Team Results</a>\n    <a mat-tab-link routerLink=\"head\">Head to Head Results</a>\n  </nav>\n  </div>\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/afl-results/afl-results.component.ts":
/*!******************************************************!*\
  !*** ./src/app/afl-results/afl-results.component.ts ***!
  \******************************************************/
/*! exports provided: AflResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AflResultsComponent", function() { return AflResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AflResultsComponent = /** @class */ (function () {
    function AflResultsComponent() {
    }
    AflResultsComponent.prototype.ngOnInit = function () {
    };
    AflResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-afl-results',
            template: __webpack_require__(/*! ./afl-results.component.html */ "./src/app/afl-results/afl-results.component.html"),
            styles: [__webpack_require__(/*! ./afl-results.component.css */ "./src/app/afl-results/afl-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AflResultsComponent);
    return AflResultsComponent;
}());



/***/ }),

/***/ "./src/app/api-logger.service.ts":
/*!***************************************!*\
  !*** ./src/app/api-logger.service.ts ***!
  \***************************************/
/*! exports provided: ApiLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiLoggerService", function() { return ApiLoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LOGGING = false;
var ApiLoggerService = /** @class */ (function () {
    function ApiLoggerService() {
    }
    ApiLoggerService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (response) { return _this.log(request, response); }, function (error) { return _this.log(request, error); }));
    };
    ApiLoggerService.prototype.log = function (request, response) {
        if (LOGGING) {
            console.log("HTTP request is " + JSON.stringify(request));
            console.log("HTTP response is " + JSON.stringify(response));
        }
    };
    ApiLoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ApiLoggerService);
    return ApiLoggerService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tips/tips.component */ "./src/app/tips/tips.component.ts");
/* harmony import */ var _afl_ladder_afl_ladder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./afl-ladder/afl-ladder.component */ "./src/app/afl-ladder/afl-ladder.component.ts");
/* harmony import */ var _tip_ladder_tip_ladder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tip-ladder/tip-ladder.component */ "./src/app/tip-ladder/tip-ladder.component.ts");
/* harmony import */ var _afl_results_afl_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./afl-results/afl-results.component */ "./src/app/afl-results/afl-results.component.ts");
/* harmony import */ var _round_results_round_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./round-results/round-results.component */ "./src/app/round-results/round-results.component.ts");
/* harmony import */ var _team_results_team_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-results/team-results.component */ "./src/app/team-results/team-results.component.ts");
/* harmony import */ var _head_to_head_head_to_head_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./head-to-head/head-to-head.component */ "./src/app/head-to-head/head-to-head.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _proxy_proxy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./proxy/proxy.component */ "./src/app/proxy/proxy.component.ts");
/* harmony import */ var _enter_results_enter_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enter-results/enter-results.component */ "./src/app/enter-results/enter-results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: "tips", component: _tips_tips_component__WEBPACK_IMPORTED_MODULE_2__["TipsComponent"] },
    { path: "aflLadder", component: _afl_ladder_afl_ladder_component__WEBPACK_IMPORTED_MODULE_3__["AflLadderComponent"] },
    { path: "tipLadder", component: _tip_ladder_tip_ladder_component__WEBPACK_IMPORTED_MODULE_4__["TipLadderComponent"] },
    { path: "aflResults", component: _afl_results_afl_results_component__WEBPACK_IMPORTED_MODULE_5__["AflResultsComponent"],
        children: [
            { path: "round", component: _round_results_round_results_component__WEBPACK_IMPORTED_MODULE_6__["RoundResultsComponent"] },
            { path: "team", component: _team_results_team_results_component__WEBPACK_IMPORTED_MODULE_7__["TeamResultsComponent"] },
            { path: "head", component: _head_to_head_head_to_head_component__WEBPACK_IMPORTED_MODULE_8__["HeadToHeadComponent"] }
        ]
    },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
        children: [
            { path: 'proxy', component: _proxy_proxy_component__WEBPACK_IMPORTED_MODULE_10__["ProxyComponent"] },
            { path: 'enterResults', component: _enter_results_enter_results_component__WEBPACK_IMPORTED_MODULE_11__["EnterResultsComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.mat-tab-link-active,\r\n.mat-tab-label-active {\r\n    background-color: #5EADB0;\r\n    color: #D5FEFF;\r\n    border: 1px solid #6B7F7F;\r\n    font-weight: bold;\r\n}\r\n.mat-tab-link,\r\n.mat-tab-label,\r\n.mat-tab-label-content {\r\n    line-height: 30px !important;\r\n    height: 30px !important;\r\n    min-width: 100px !important;\r\n    border: 1px solid #7e7e7e;\r\n}\r\n.tabContentContainer {\r\n    border: 1px solid #aaaaaa;\r\n    background: #ffffff 50% 50% repeat-x;\r\n}\r\n\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLm1hdC10YWItbGluay1hY3RpdmUsXHJcbi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUVBREIwO1xyXG4gICAgY29sb3I6ICNENUZFRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNkI3RjdGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hdC10YWItbGluayxcclxuLm1hdC10YWItbGFiZWwsXHJcbi5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdlN2U3ZTtcclxufVxyXG4udGFiQ29udGVudENvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiA1MCUgNTAlIHJlcGVhdC14O1xyXG59XHJcblxyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div style=\"text-align:center\">\n  <h1>\n    Kerrie's footy tipping\n  </h1>\n  <br><br>\n  <nav mat-tab-nav-bar>\n      <a mat-tab-link routerLink=\"tips\">Tips</a>\n      <a mat-tab-link routerLink=\"aflLadder\">AFL Ladder</a>\n      <a mat-tab-link routerLink=\"tipLadder\">Tipsters Ladder</a>\n      <a mat-tab-link routerLink=\"aflResults\">AFL Results</a>\n      <a mat-tab-link routerLink=\"admin\">Admin</a>\n  </nav>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Kerrie's footy tipping";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tips/tips.component */ "./src/app/tips/tips.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-logger.service */ "./src/app/api-logger.service.ts");
/* harmony import */ var _afl_ladder_afl_ladder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./afl-ladder/afl-ladder.component */ "./src/app/afl-ladder/afl-ladder.component.ts");
/* harmony import */ var _tip_ladder_tip_ladder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tip-ladder/tip-ladder.component */ "./src/app/tip-ladder/tip-ladder.component.ts");
/* harmony import */ var _afl_results_afl_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./afl-results/afl-results.component */ "./src/app/afl-results/afl-results.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _round_results_round_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./round-results/round-results.component */ "./src/app/round-results/round-results.component.ts");
/* harmony import */ var _team_results_team_results_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./team-results/team-results.component */ "./src/app/team-results/team-results.component.ts");
/* harmony import */ var _head_to_head_head_to_head_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./head-to-head/head-to-head.component */ "./src/app/head-to-head/head-to-head.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _proxy_proxy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./proxy/proxy.component */ "./src/app/proxy/proxy.component.ts");
/* harmony import */ var _enter_results_enter_results_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./enter-results/enter-results.component */ "./src/app/enter-results/enter-results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var LOGGING_INTERCEPTOR_PROVIDER = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
    useClass: _api_logger_service__WEBPACK_IMPORTED_MODULE_11__["ApiLoggerService"],
    multi: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tips_tips_component__WEBPACK_IMPORTED_MODULE_5__["TipsComponent"],
                _afl_ladder_afl_ladder_component__WEBPACK_IMPORTED_MODULE_12__["AflLadderComponent"],
                _tip_ladder_tip_ladder_component__WEBPACK_IMPORTED_MODULE_13__["TipLadderComponent"],
                _afl_results_afl_results_component__WEBPACK_IMPORTED_MODULE_14__["AflResultsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"],
                _round_results_round_results_component__WEBPACK_IMPORTED_MODULE_16__["RoundResultsComponent"],
                _team_results_team_results_component__WEBPACK_IMPORTED_MODULE_17__["TeamResultsComponent"],
                _head_to_head_head_to_head_component__WEBPACK_IMPORTED_MODULE_18__["HeadToHeadComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                _proxy_proxy_component__WEBPACK_IMPORTED_MODULE_20__["ProxyComponent"],
                _enter_results_enter_results_component__WEBPACK_IMPORTED_MODULE_21__["EnterResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
            ],
            providers: [LOGGING_INTERCEPTOR_PROVIDER],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enter-results/enter-results.component.css":
/*!***********************************************************!*\
  !*** ./src/app/enter-results/enter-results.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGVyLXJlc3VsdHMvZW50ZXItcmVzdWx0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/enter-results/enter-results.component.html":
/*!************************************************************!*\
  !*** ./src/app/enter-results/enter-results.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  enter-results works!\n</p>\n"

/***/ }),

/***/ "./src/app/enter-results/enter-results.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/enter-results/enter-results.component.ts ***!
  \**********************************************************/
/*! exports provided: EnterResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterResultsComponent", function() { return EnterResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnterResultsComponent = /** @class */ (function () {
    function EnterResultsComponent() {
    }
    EnterResultsComponent.prototype.ngOnInit = function () {
    };
    EnterResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enter-results',
            template: __webpack_require__(/*! ./enter-results.component.html */ "./src/app/enter-results/enter-results.component.html"),
            styles: [__webpack_require__(/*! ./enter-results.component.css */ "./src/app/enter-results/enter-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnterResultsComponent);
    return EnterResultsComponent;
}());



/***/ }),

/***/ "./src/app/fixture.service.ts":
/*!************************************!*\
  !*** ./src/app/fixture.service.ts ***!
  \************************************/
/*! exports provided: FixtureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixtureService", function() { return FixtureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FixtureService = /** @class */ (function () {
    function FixtureService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.fixtureUrl = 'https://aqueous-stream-65471.herokuapp.com/fixtures/';
        this.head2HeadUrl = 'https://aqueous-stream-65471.herokuapp.com/head';
    }
    FixtureService.prototype.getRoundFixtures = function (season, round) {
        return this.httpClient.get(this.fixtureUrl + "/" + season + "/" + round);
    };
    FixtureService.prototype.getHead2Head = function (team1, team2) {
        return this.httpClient.get(this.head2HeadUrl + "/" + team1 + "/" + team2);
    };
    FixtureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FixtureService);
    return FixtureService;
}());



/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.css":
/*!*********************************************************!*\
  !*** ./src/app/head-to-head/head-to-head.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWQtdG8taGVhZC9oZWFkLXRvLWhlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.html":
/*!**********************************************************!*\
  !*** ./src/app/head-to-head/head-to-head.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div style=\"padding-left:50px\" align=\"left\">\n  <label style=\"padding-right: 5px\">Team 1:  </label>\n  <select [(ngModel)]=\"team1\" (change)=\"selectChange()\"> // value is a string or number\n    <option *ngFor=\"let team of teams\" [value]=\"team\">{{team}}</option>\n  </select>\n  <br>\n  <label style=\"padding-right:5px\">Team 2:  </label>\n  <select [(ngModel)]=\"team2\" (change)=\"selectChange()\"> // value is a string or number\n    <option *ngFor=\"let team of teams\" [value]=\"team\">{{team}}</option>\n  </select>\n\n  <br>\n  <img *ngIf=\"loading\" src=\"assets/giphy.gif\">\n\n  <div *ngIf=\"fixtures.length > 0\">\n      <br>\n      <table>\n          <tr align=\"center\">\n            <th>Season</th>\n            <th>Round</th>\n            <th>Date Time</th>\n            <th>Venue</th>\n            <th>Home Team</th>\n            <th></th>\n            <th></th>\n            <th>Away Team</th>\n            <th></th>\n          </tr>\n            <tr *ngFor=\"let fixture of fixtures;index as i\">\n                <td>{{fixture.season}}</td>\n                <td>{{fixture.round}}</td>\n                <td>{{fixture.date_time}}</td>\n                <td>{{fixture.venue}}</td>\n                <div [ngStyle]=\"{'font-weight': boldWinner(fixture,'home')}\">\n                    <td >{{fixture.home_team}}</td>\n                </div> \n                <td>{{fixture.home_team_goals}}.{{fixture.home_team_behinds}}.{{fixture.home_team_points}}</td>\n                <td>{{getResult(fixture)}}</td>\n                <div [ngStyle]=\"{'font-weight': boldWinner(fixture,'away')}\">\n                    <td>{{fixture.away_team}}</td>\n                </div>\n                <td>{{fixture.away_team_goals}}.{{fixture.away_team_behinds}}.{{fixture.away_team_points}}</td>\n            </tr>\n        \n          \n        </table>\n  </div>\n  \n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.ts":
/*!********************************************************!*\
  !*** ./src/app/head-to-head/head-to-head.component.ts ***!
  \********************************************************/
/*! exports provided: HeadToHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadToHeadComponent", function() { return HeadToHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fixture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fixture.service */ "./src/app/fixture.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadToHeadComponent = /** @class */ (function () {
    function HeadToHeadComponent(fixtureService) {
        this.fixtureService = fixtureService;
        this.fixtures = [];
        this.loading = false;
        this.teams = [
            '',
            'Adelaide',
            'Brisbane Lions',
            'Carlton',
            'Collingwood',
            'Essendon',
            'Fremantle',
            'Geelong',
            'Gold Coast',
            'Greater Western Sydney',
            'Hawthorn',
            'Melbourne',
            'North Melbourne',
            'Port Adelaide',
            'Richmond',
            'St Kilda',
            'Sydney',
            'West Coast',
            'Western Bulldogs'
        ];
    }
    HeadToHeadComponent.prototype.ngOnInit = function () {
    };
    HeadToHeadComponent.prototype.selectChange = function () {
        var _this = this;
        if (this.team1 === undefined || this.team2 === undefined) {
            return;
        }
        this.loading = true;
        this.fixtureService.getHead2Head(this.team1, this.team2).subscribe(function (fixtures) {
            _this.fixtures = fixtures;
            _this.loading = false;
        });
    };
    HeadToHeadComponent.prototype.getResult = function (fixture) {
        var result = "";
        if (fixture.home_team_points > fixture.away_team_points) {
            result = "Defeated";
        }
        else if (fixture.home_team_points < fixture.away_team_points) {
            result = "Lost to";
        }
        else {
            result = "Drew with";
        }
        return result;
    };
    HeadToHeadComponent.prototype.boldWinner = function (fixture, team) {
        var result = "";
        if (fixture.home_team_points > fixture.away_team_points) {
            result = team === 'home' ? "bold" : "normal";
        }
        else if (fixture.home_team_points < fixture.away_team_points) {
            result = team === 'home' ? "normal" : "bold";
        }
        else {
            result = "normal";
        }
        return result;
    };
    HeadToHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head-to-head',
            template: __webpack_require__(/*! ./head-to-head.component.html */ "./src/app/head-to-head/head-to-head.component.html"),
            styles: [__webpack_require__(/*! ./head-to-head.component.css */ "./src/app/head-to-head/head-to-head.component.css")]
        }),
        __metadata("design:paramtypes", [_fixture_service__WEBPACK_IMPORTED_MODULE_1__["FixtureService"]])
    ], HeadToHeadComponent);
    return HeadToHeadComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <div align=\"left\"><h3>Messages</h3></div>\n  <div style=\"color:red\" align=\"left\" *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/proxy/proxy.component.css":
/*!*******************************************!*\
  !*** ./src/app/proxy/proxy.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3h5L3Byb3h5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/proxy/proxy.component.html":
/*!********************************************!*\
  !*** ./src/app/proxy/proxy.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  proxy works!\n</p>\n"

/***/ }),

/***/ "./src/app/proxy/proxy.component.ts":
/*!******************************************!*\
  !*** ./src/app/proxy/proxy.component.ts ***!
  \******************************************/
/*! exports provided: ProxyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyComponent", function() { return ProxyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProxyComponent = /** @class */ (function () {
    function ProxyComponent() {
    }
    ProxyComponent.prototype.ngOnInit = function () {
    };
    ProxyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proxy',
            template: __webpack_require__(/*! ./proxy.component.html */ "./src/app/proxy/proxy.component.html"),
            styles: [__webpack_require__(/*! ./proxy.component.css */ "./src/app/proxy/proxy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProxyComponent);
    return ProxyComponent;
}());



/***/ }),

/***/ "./src/app/round-results/round-results.component.css":
/*!***********************************************************!*\
  !*** ./src/app/round-results/round-results.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdW5kLXJlc3VsdHMvcm91bmQtcmVzdWx0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/round-results/round-results.component.html":
/*!************************************************************!*\
  !*** ./src/app/round-results/round-results.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n\n  <div style=\"padding-left:50px\">\n    <div align=\"left\">\n        <h1>Results for round 1 1998</h1>\n    </div>\n    <br><br>\n    <img *ngIf=\"loading\" src=\"assets/giphy.gif\">\n\n    <table>\n      <tr>\n        <th>Date Time</th>\n        <th>Venue</th>\n        <th>Home Team</th>\n        <th></th>\n        <th></th>\n        <th>Away Team</th>\n        <th></th>\n      </tr>\n        <tr *ngFor=\"let fixture of fixtures;index as i\">\n            <td>{{fixture.date_time}}</td>\n            <td>{{fixture.venue}}</td>\n            <div [ngStyle]=\"{'font-weight': boldWinner(fixture,'home')}\">\n                <td >{{fixture.home_team}}</td>\n            </div> \n            <td>{{fixture.home_team_goals}}.{{fixture.home_team_behinds}}.{{fixture.home_team_points}}</td>\n            <td>{{getResult(fixture)}}</td>\n            <div [ngStyle]=\"{'font-weight': boldWinner(fixture,'away')}\">\n                <td>{{fixture.away_team}}</td>\n            </div>\n            <td>{{fixture.away_team_goals}}.{{fixture.away_team_behinds}}.{{fixture.away_team_points}}</td>\n        </tr>\n\n      \n    </table>\n"

/***/ }),

/***/ "./src/app/round-results/round-results.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/round-results/round-results.component.ts ***!
  \**********************************************************/
/*! exports provided: RoundResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundResultsComponent", function() { return RoundResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fixture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fixture.service */ "./src/app/fixture.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoundResultsComponent = /** @class */ (function () {
    function RoundResultsComponent(fixtureService) {
        this.fixtureService = fixtureService;
        this.loading = false;
    }
    RoundResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.fixtureService.getRoundFixtures('1998', 1).subscribe(function (fixtures) {
            _this.fixtures = fixtures;
            _this.loading = false;
        });
    };
    RoundResultsComponent.prototype.getResult = function (fixture) {
        var result = "";
        if (fixture.home_team_points > fixture.away_team_points) {
            result = "Defeated";
        }
        else if (fixture.home_team_points < fixture.away_team_points) {
            result = "Lost to";
        }
        else {
            result = "Drew with";
        }
        return result;
    };
    RoundResultsComponent.prototype.boldWinner = function (fixture, team) {
        var result = "";
        if (fixture.home_team_points > fixture.away_team_points) {
            result = team === 'home' ? "bold" : "normal";
        }
        else if (fixture.home_team_points < fixture.away_team_points) {
            result = team === 'home' ? "normal" : "bold";
        }
        else {
            result = "normal";
        }
        return result;
    };
    RoundResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-round-results',
            template: __webpack_require__(/*! ./round-results.component.html */ "./src/app/round-results/round-results.component.html"),
            styles: [__webpack_require__(/*! ./round-results.component.css */ "./src/app/round-results/round-results.component.css")]
        }),
        __metadata("design:paramtypes", [_fixture_service__WEBPACK_IMPORTED_MODULE_1__["FixtureService"]])
    ], RoundResultsComponent);
    return RoundResultsComponent;
}());



/***/ }),

/***/ "./src/app/team-results/team-results.component.css":
/*!*********************************************************!*\
  !*** ./src/app/team-results/team-results.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tcmVzdWx0cy90ZWFtLXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/team-results/team-results.component.html":
/*!**********************************************************!*\
  !*** ./src/app/team-results/team-results.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  team-results works!\n</p>\n"

/***/ }),

/***/ "./src/app/team-results/team-results.component.ts":
/*!********************************************************!*\
  !*** ./src/app/team-results/team-results.component.ts ***!
  \********************************************************/
/*! exports provided: TeamResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamResultsComponent", function() { return TeamResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamResultsComponent = /** @class */ (function () {
    function TeamResultsComponent() {
    }
    TeamResultsComponent.prototype.ngOnInit = function () {
    };
    TeamResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-results',
            template: __webpack_require__(/*! ./team-results.component.html */ "./src/app/team-results/team-results.component.html"),
            styles: [__webpack_require__(/*! ./team-results.component.css */ "./src/app/team-results/team-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamResultsComponent);
    return TeamResultsComponent;
}());



/***/ }),

/***/ "./src/app/tip-ladder/tip-ladder.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tip-ladder/tip-ladder.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpcC1sYWRkZXIvdGlwLWxhZGRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tip-ladder/tip-ladder.component.html":
/*!******************************************************!*\
  !*** ./src/app/tip-ladder/tip-ladder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tip-ladder works!\n</p>\n"

/***/ }),

/***/ "./src/app/tip-ladder/tip-ladder.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tip-ladder/tip-ladder.component.ts ***!
  \****************************************************/
/*! exports provided: TipLadderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipLadderComponent", function() { return TipLadderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TipLadderComponent = /** @class */ (function () {
    function TipLadderComponent() {
    }
    TipLadderComponent.prototype.ngOnInit = function () {
    };
    TipLadderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tip-ladder',
            template: __webpack_require__(/*! ./tip-ladder.component.html */ "./src/app/tip-ladder/tip-ladder.component.html"),
            styles: [__webpack_require__(/*! ./tip-ladder.component.css */ "./src/app/tip-ladder/tip-ladder.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TipLadderComponent);
    return TipLadderComponent;
}());



/***/ }),

/***/ "./src/app/tip.ts":
/*!************************!*\
  !*** ./src/app/tip.ts ***!
  \************************/
/*! exports provided: Tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tip", function() { return Tip; });
var Tip = /** @class */ (function () {
    function Tip(season, round, game, user, date_time, pick, correct) {
        this.season = season;
        this.round = round;
        this.game = game;
        this.user = user;
        this.date_time = date_time;
        this.pick = pick;
        this.correct = correct;
    }
    return Tip;
}());



/***/ }),

/***/ "./src/app/tips.service.ts":
/*!*********************************!*\
  !*** ./src/app/tips.service.ts ***!
  \*********************************/
/*! exports provided: TipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsService", function() { return TipsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipsService = /** @class */ (function () {
    function TipsService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.tipUrl = 'https://aqueous-stream-65471.herokuapp.com/tips';
    }
    TipsService.prototype.addTip = function (tip) {
        return this.httpClient.post(this.tipUrl, tip, this.httpOptions);
    };
    TipsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TipsService);
    return TipsService;
}());



/***/ }),

/***/ "./src/app/tips/tips.component.css":
/*!*****************************************!*\
  !*** ./src/app/tips/tips.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-link-active,\r\n.mat-tab-label-active {\r\n    background-color: #5EADB0;\r\n    color: #D5FEFF;\r\n    border: 1px solid #6B7F7F;\r\n    font-weight: bold;\r\n}\r\n.mat-tab-link,\r\n.mat-tab-label,\r\n.mat-tab-label-content {\r\n    line-height: 30px !important;\r\n    height: 30px !important;\r\n    min-width: 100px !important;\r\n    border: 1px solid #7e7e7e;\r\n}\r\n.tabContentContainer {\r\n    border: 1px solid #aaaaaa;\r\n    background: #ffffff 50% 50% repeat-x;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlwcy90aXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsa0JBQWtCO0NBQ3JCO0FBQ0Q7OztJQUdJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHFDQUFxQztDQUN4QyIsImZpbGUiOiJzcmMvYXBwL3RpcHMvdGlwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItbGluay1hY3RpdmUsXHJcbi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUVBREIwO1xyXG4gICAgY29sb3I6ICNENUZFRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNkI3RjdGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hdC10YWItbGluayxcclxuLm1hdC10YWItbGFiZWwsXHJcbi5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdlN2U3ZTtcclxufVxyXG4udGFiQ29udGVudENvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiA1MCUgNTAlIHJlcGVhdC14O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tips/tips.component.html":
/*!******************************************!*\
  !*** ./src/app/tips/tips.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n\n<form name=\"myForm\">\n  <div style=\"padding-left:50px\">\n    <div align=\"left\">\n        <h1>Tips for round 1</h1>\n      </div>\n      <br><br>\n      <img *ngIf=\"loading\" src=\"assets/giphy.gif\">\n      <table>\n        <tr>\n          <th>Date Time</th>\n          <th>Venue</th>\n          <th></th>\n          <th>Home Team</th>\n          <th>Away Team</th>\n          <th></th>\n        </tr>\n        <tr *ngFor=\"let fixture of fixtures;index as i\" align=\"left\">\n          <td style=\"padding-left:10px;padding-right:10px\">{{fixture.date_time}}</td>\n          <td style=\"padding-left:10px;padding-right:10px\">{{fixture.venue}}</td>\n          <td style=\"padding-left:10px;padding-right:10px\"><input type=\"radio\" name=\"tip{{i}}\" [(ngModel)]=\"fixtures[i].pick\" value=\"home\"></td>\n          <td style=\"padding-left:10px;padding-right:10px\">{{fixture.home_team}}</td>\n          <td style=\"padding-left:10px;padding-right:10px\">{{fixture.away_team}}</td>\n          <td style=\"padding-left:10px;padding-right:10px\"><input type=\"radio\" name=\"tip{{i}}\" [(ngModel)]=\"fixtures[i].pick\" value=\"away\"></td>\n        </tr>\n      </table>\n      <br>\n      <div align=\"left\">\n          <button align=\"left\" (click)=\"addTips()\">Add Tips</button>\n        </div>\n        <br>\n      <app-messages></app-messages>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/tips/tips.component.ts":
/*!****************************************!*\
  !*** ./src/app/tips/tips.component.ts ***!
  \****************************************/
/*! exports provided: TipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsComponent", function() { return TipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tip */ "./src/app/tip.ts");
/* harmony import */ var _fixture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fixture.service */ "./src/app/fixture.service.ts");
/* harmony import */ var _tips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tips.service */ "./src/app/tips.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TipsComponent = /** @class */ (function () {
    function TipsComponent(fixtureService, tipsService, messageService) {
        this.fixtureService = fixtureService;
        this.tipsService = tipsService;
        this.messageService = messageService;
        this.error = false;
        this.loading = false;
    }
    TipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.fixtureService.getRoundFixtures('2018', 1).subscribe(function (fixtures) {
            _this.fixtures = fixtures;
            _this.loading = false;
        });
    };
    TipsComponent.prototype.addTips = function () {
        var _this = this;
        this.messageService.clear();
        this.loading = true;
        this.fixtures.forEach(function (fixture) {
            if (typeof fixture.pick === 'undefined') {
                _this.messageService.add("Please make a selection for " + fixture.home_team + " vs " + fixture.away_team);
                _this.error = true;
                _this.loading = false;
            }
        });
        if (!this.error) {
            this.fixtures.forEach(function (fixture) {
                var tip = new _tip__WEBPACK_IMPORTED_MODULE_1__["Tip"](fixture.season, fixture.round, fixture.game, "Matthew", new Date(), fixture.pick, 'N');
                _this.tipsService.addTip(tip).subscribe(function (tip) { return _this.tip = tip; });
            });
            this.messageService.add("Tips added");
            this.loading = false;
        }
    };
    TipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tips',
            template: __webpack_require__(/*! ./tips.component.html */ "./src/app/tips/tips.component.html"),
            styles: [__webpack_require__(/*! ./tips.component.css */ "./src/app/tips/tips.component.css")]
        }),
        __metadata("design:paramtypes", [_fixture_service__WEBPACK_IMPORTED_MODULE_2__["FixtureService"], _tips_service__WEBPACK_IMPORTED_MODULE_3__["TipsService"], _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], TipsComponent);
    return TipsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Data\angular\angular-footy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map