/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modal = (btnsSelector, modalSelector, closeSelector, modalContentSelector, modifierSelector) => {
  const btn = document.querySelector(btnsSelector),
    modal = document.querySelector(modalSelector);
  //   scroll = fixScroll();

  function openModal() {
    setTimeout(() => {
      modal.classList.add(modifierSelector);
    }, 200);
    modal.style.display = 'flex';
    // document.body.style.overflow = 'hidden';
    // document.body.style.marginRight = `${scroll}px`;
    attachModalEvents();
  }
  function closeModal() {
    modal.classList.remove(modifierSelector);
    setTimeout(() => {
      modal.style.display = 'none';
    }, 200);
    // document.body.style.overflow = '';
    // document.body.style.marginRight = `0px`;
    detachModalEvents();
  }
  function attachModalEvents() {
    modal.querySelector(closeSelector).addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscape);
    modal.addEventListener('click', handleOutside);
  }
  const handleEscape = e => e.key === 'Escape' ? closeModal() : null;
  function handleOutside(e) {
    const isClickOutside = !!e.target.closest(modalContentSelector);
    if (!isClickOutside) {
      closeModal();
    }
  }
  function detachModalEvents() {
    modal.querySelector(closeSelector).removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
    modal.removeEventListener('click', handleOutside);
  }

  // function fixScroll() {
  //     let div = document.createElement('div');
  //     div.classList.add('fixScroll');
  //     div.style.width = '50px';
  //     div.style.overflow = 'scroll';
  //     div.style.visibility = 'hidden';
  //     document.body.append(div);
  //     let scrollWidth = div.offsetWidth - div.clientWidth;

  //     return scrollWidth;
  // }

  btn.addEventListener('click', openModal);
};
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('#cart', '.cart', '.cart-close', '.cart-body', 'cart-confirm');
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map