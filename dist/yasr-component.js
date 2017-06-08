(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("yasgui-yasr"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "yasgui-yasr"], factory);
	else if(typeof exports === 'object')
		exports["yasr-component"] = factory(require("angular"), require("yasgui-yasr"));
	else
		root["yasr-component"] = factory(root["angular"], root["YASR"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(0);
var YASR = __webpack_require__(1);
var YasrComponentController = (function () {
    function YasrComponentController($element) {
        this.$element = $element;
    }
    YasrComponentController.prototype.$postLink = function () {
        this.yasr = YASR(this.$element[0], { getUsedPrefixes: this.prefixes });
        this.onInit({ yasr: this.yasr });
    };
    YasrComponentController.prototype.$onChanges = function (changes) {
        if (this.yasr && changes.data && changes.data.currentValue)
            this.yasr.setResponse(changes.data.currentValue);
        if (this.yasr && changes.prefixes)
            this.yasr.options.getUsedPrefixes = changes.prefixes.currentValue;
    };
    return YasrComponentController;
}());
exports.YasrComponentController = YasrComponentController;
var YasrComponent = (function () {
    function YasrComponent() {
        this.bindings = {
            data: '<',
            prefixes: '<',
            onInit: '&'
        };
        this.controller = YasrComponentController;
    }
    return YasrComponent;
}());
exports.YasrComponent = YasrComponent;
angular.module('fi.seco.yasr', []).component('yasr', new YasrComponent());


/***/ })
/******/ ]);
});
//# sourceMappingURL=yasr-component.js.map