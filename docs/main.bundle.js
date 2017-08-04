webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>\n    {{title}}\n  </h1>\n  <sc-calculator-form (operationEvent)=\"onOperation($event)\"></sc-calculator-form>\n  <sc-calculator-result [operation]=\"operation\" (calcHistory)=\"onHistory($event)\"></sc-calculator-result>\n  <sc-calculator-history [calcHistory]=\"calcHistory\"></sc-calculator-history>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Super Calculator';
        this.calcHistory = [];
    }
    AppComponent.prototype.onOperation = function (operation) {
        console.log('AppComponent', operation);
        this.operation = Object.assign({}, operation);
    };
    AppComponent.prototype.onHistory = function (history) {
        this.calcHistory.push(history);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'sc-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calculator_form_calculator_form_component__ = __webpack_require__("../../../../../src/app/calculator-form/calculator-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calculator_result_calculator_result_component__ = __webpack_require__("../../../../../src/app/calculator-result/calculator-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calculator_history_calculator_history_component__ = __webpack_require__("../../../../../src/app/calculator-history/calculator-history.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__calculator_form_calculator_form_component__["a" /* CalculatorFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__calculator_result_calculator_result_component__["a" /* CalculatorResultComponent */],
            __WEBPACK_IMPORTED_MODULE_7__calculator_history_calculator_history_component__["a" /* CalculatorHistoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calculator-form/calculator-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator-form/calculator-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit()\" class=\"form-inline\">\n  <div class=\"form-group\">\n    <input class=\"form-control\" type=\"number\" id=\"firstOperand\" name=\"firstOperand\" [(ngModel)]=\"operation.firstOperand\">\n  </div>\n  <div class=\"form-group\">\n    <select class=\"form-control\" id=\"operator\" name=\"operator\" [(ngModel)]=\"operation.operator\">\n      <option *ngFor=\"let operator of operators\" [ngValue]=\"operator.value\">{{operator.label}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <input class=\"form-control\" type=\"number\" id=\"secondOperand\" name=\"secondOperand\" [(ngModel)]=\"operation.secondOperand\">\n  </div>\n  <button id=\"calculateButton\" type=\"submit\" class=\"btn btn-default\">Calculate</button>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/calculator-form/calculator-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_enum__ = __webpack_require__("../../../../../src/app/operators.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation__ = __webpack_require__("../../../../../src/app/operation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculatorFormComponent = (function () {
    function CalculatorFormComponent() {
        this.operators = __WEBPACK_IMPORTED_MODULE_1__operators_enum__["a" /* OperatorsArray */];
        this.operationEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.operation = new __WEBPACK_IMPORTED_MODULE_2__operation__["a" /* Operation */]();
        this.operation.operator = __WEBPACK_IMPORTED_MODULE_1__operators_enum__["b" /* Operators */].ADD;
    }
    CalculatorFormComponent.prototype.ngOnInit = function () {
    };
    CalculatorFormComponent.prototype.onSubmit = function () {
        console.log('submit', this.operation);
        this.operationEvent.emit(this.operation);
    };
    return CalculatorFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], CalculatorFormComponent.prototype, "operationEvent", void 0);
CalculatorFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'sc-calculator-form',
        template: __webpack_require__("../../../../../src/app/calculator-form/calculator-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator-form/calculator-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorFormComponent);

//# sourceMappingURL=calculator-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/calculator-history.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorHistory; });
var CalculatorHistory = (function () {
    function CalculatorHistory(operation, result, date) {
        if (date === void 0) { date = new Date(); }
        this.operation = operation;
        this.result = result;
        this.date = date;
    }
    return CalculatorHistory;
}());

//# sourceMappingURL=calculator-history.js.map

/***/ }),

/***/ "../../../../../src/app/calculator-history/calculator-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator-history/calculator-history.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>History</h3>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Time</th>\n    <th>Expression</th>\n    <th>Result</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let item of calcHistory\">\n    <td>{{item.date | date:'mediumTime'}}</td>\n    <td>{{item.operation.firstOperand}} {{operators[item.operation.operator].label}} {{item.operation.secondOperand}}</td>\n    <td>{{item.result}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/calculator-history/calculator-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_enum__ = __webpack_require__("../../../../../src/app/operators.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorHistoryComponent = (function () {
    function CalculatorHistoryComponent() {
        this.operators = __WEBPACK_IMPORTED_MODULE_1__operators_enum__["a" /* OperatorsArray */];
        this.calcHistory = [];
    }
    CalculatorHistoryComponent.prototype.ngOnInit = function () {
    };
    CalculatorHistoryComponent.prototype.ngOnChanges = function () {
    };
    return CalculatorHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], CalculatorHistoryComponent.prototype, "calcHistory", void 0);
CalculatorHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'sc-calculator-history',
        template: __webpack_require__("../../../../../src/app/calculator-history/calculator-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator-history/calculator-history.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorHistoryComponent);

//# sourceMappingURL=calculator-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/calculator-result/calculator-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator-result/calculator-result.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{showResult}}</h2>\n"

/***/ }),

/***/ "../../../../../src/app/calculator-result/calculator-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation__ = __webpack_require__("../../../../../src/app/operation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_enum__ = __webpack_require__("../../../../../src/app/operators.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculator_history__ = __webpack_require__("../../../../../src/app/calculator-history.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculatorResultComponent = (function () {
    function CalculatorResultComponent() {
        this.times = 0;
        this.calcHistory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    CalculatorResultComponent.prototype.ngOnInit = function () {
    };
    CalculatorResultComponent.prototype.ngOnChanges = function () {
        console.log('OnChanges', this.operation, this.operation instanceof __WEBPACK_IMPORTED_MODULE_1__operation__["a" /* Operation */]);
        if (this.operation) {
            this.showResult = '';
            this.times = 5;
            this.delay(300);
        }
        else {
            this.showResult = 0;
        }
    };
    CalculatorResultComponent.prototype.delay = function (time) {
        var _this = this;
        console.log('delay', this.times);
        if (this.times !== 0) {
            this.showResult += '.';
            console.log(this.showResult);
            this.times--;
            setTimeout(function () {
                _this.delay(time);
            }, time);
        }
        else {
            this.showResult = this.calculate();
            if (typeof this.showResult === 'number') {
                var calcHistoryItem = new __WEBPACK_IMPORTED_MODULE_3__calculator_history__["a" /* CalculatorHistory */](this.operation, this.showResult);
                this.calcHistory.emit(calcHistoryItem);
            }
        }
    };
    CalculatorResultComponent.prototype.calculate = function () {
        console.log('calculate begin: ', this.operation);
        var result = 0;
        if (this.operation) {
            if (typeof this.operation.firstOperand !== 'number' || typeof this.operation.secondOperand !== 'number') {
                return 'Missing operand';
            }
            switch (this.operation.operator) {
                case __WEBPACK_IMPORTED_MODULE_2__operators_enum__["b" /* Operators */].ADD:
                    console.log('add');
                    result = this.operation.firstOperand + this.operation.secondOperand;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__operators_enum__["b" /* Operators */].SUBSTRACT:
                    console.log('substract');
                    result = this.operation.firstOperand - this.operation.secondOperand;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__operators_enum__["b" /* Operators */].MULTIPLE:
                    console.log('multiple');
                    result = this.operation.firstOperand * this.operation.secondOperand;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__operators_enum__["b" /* Operators */].DIVIDE:
                    console.log('divide');
                    result = this.operation.firstOperand / this.operation.secondOperand;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__operators_enum__["b" /* Operators */].MODULO:
                    console.log('modulo');
                    result = this.operation.firstOperand % this.operation.secondOperand;
                    break;
                default:
                    return 'Something went wrong';
            }
        }
        return result;
    };
    return CalculatorResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__operation__["a" /* Operation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__operation__["a" /* Operation */]) === "function" && _a || Object)
], CalculatorResultComponent.prototype, "operation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], CalculatorResultComponent.prototype, "calcHistory", void 0);
CalculatorResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'sc-calculator-result',
        template: __webpack_require__("../../../../../src/app/calculator-result/calculator-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator-result/calculator-result.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorResultComponent);

var _a;
//# sourceMappingURL=calculator-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/operation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_enum__ = __webpack_require__("../../../../../src/app/operators.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operation; });

var Operation = (function () {
    function Operation() {
        this.operator = __WEBPACK_IMPORTED_MODULE_0__operators_enum__["b" /* Operators */].ADD;
    }
    return Operation;
}());

//# sourceMappingURL=operation.js.map

/***/ }),

/***/ "../../../../../src/app/operators.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsArray; });
var Operators;
(function (Operators) {
    Operators[Operators["ADD"] = 0] = "ADD";
    Operators[Operators["SUBSTRACT"] = 1] = "SUBSTRACT";
    Operators[Operators["MULTIPLE"] = 2] = "MULTIPLE";
    Operators[Operators["DIVIDE"] = 3] = "DIVIDE";
    Operators[Operators["MODULO"] = 4] = "MODULO";
})(Operators || (Operators = {}));
var OperatorsArray = [
    { value: Operators.ADD, label: '+' },
    { value: Operators.SUBSTRACT, label: '-' },
    { value: Operators.MULTIPLE, label: '*' },
    { value: Operators.DIVIDE, label: '/' },
    { value: Operators.MODULO, label: '%' },
];
//# sourceMappingURL=operators.enum.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map