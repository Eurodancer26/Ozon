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

/***/ "./src/js/modules/catalog.js":
/*!***********************************!*\
  !*** ./src/js/modules/catalog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/js/modules/render.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/js/modules/filters.js");



const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button'),
    itemCatalog = document.querySelectorAll('.catalog li');
  console.log();
  let isOpen;
  function openCatalog() {
    document.querySelector('.catalog').style.display = 'block';
    attachCatalogEvents();
  }
  function closeCatalog() {
    document.querySelector('.catalog').style.display = '';
    detachCatalogEvents();
  }
  function attachCatalogEvents() {
    btnCatalog.addEventListener('click', closeCatalog);
    btnCatalog.addEventListener('click', handleBtnCatalog);
    document.querySelector('.catalog').addEventListener('click', handleOutside);
  }
  function handleBtnCatalog() {
    if (!isOpen) {
      closeCatalog();
    }
  }
  function handleOutside(e) {
    const isClickOutside = !!e.target.closest('catalog');
    if (!isClickOutside) {
      closeCatalog();
    }
  }
  function detachCatalogEvents() {
    btnCatalog.removeEventListener('click', closeCatalog);
    btnCatalog.removeEventListener('click', handleBtnCatalog);
    document.querySelector('.catalog').removeEventListener('click', handleOutside);
  }
  btnCatalog.addEventListener('click', openCatalog);
  itemCatalog.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent;
      Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])().then(goods => {
        Object(_render__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_filters__WEBPACK_IMPORTED_MODULE_2__["categoryFilter"])(goods, text));
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (catalog);

/***/ }),

/***/ "./src/js/modules/filters.js":
/*!***********************************!*\
  !*** ./src/js/modules/filters.js ***!
  \***********************************/
/*! exports provided: categoryFilter, funcFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryFilter", function() { return categoryFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcFilter", function() { return funcFilter; });
const categoryFilter = (goods, val) => {
  return goods.filter(goodsItem => goodsItem.category.includes(val));
};
function funcFilter(goods, minVal, maxVal, checkSale, searchVal) {
  return goods.filter(goodsItem => {
    const isMin = minVal ? goodsItem.price >= minVal : true,
      isMax = maxVal ? goodsItem.price <= maxVal : true,
      isSale = checkSale ? goodsItem.sale : true;
    console.log(isSale);
    return isMin && isMax && isSale && goodsItem.title.toLowerCase().includes(searchVal.toLowerCase());
  });
}
;


/***/ }),

/***/ "./src/js/modules/helpers.js":
/*!***********************************!*\
  !*** ./src/js/modules/helpers.js ***!
  \***********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
var _this = undefined;
const debounce = function (func) {
  let ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(_this, args);
    }, ms);
  };
};


/***/ }),

/***/ "./src/js/modules/load.js":
/*!********************************!*\
  !*** ./src/js/modules/load.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/js/modules/render.js");



const load = url => {
  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])(url).then(goods => {
    Object(_render__WEBPACK_IMPORTED_MODULE_1__["default"])(goods);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (load);

/***/ }),

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

/***/ "./src/js/modules/render.js":
/*!**********************************!*\
  !*** ./src/js/modules/render.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const render = goods => {
  const goodsWrap = document.querySelector('.goods');
  goodsWrap.innerHTML = '';
  goods.forEach(item => {
    goodsWrap.insertAdjacentHTML('beforeend', `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    ${item.sale === true ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${item.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${item.price}</div>
                        <h5 class="card-title">${item.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>
        `);
  });
};

// https://test-4abc2-default-rtdb.firebaseio.com/goods.json

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/js/modules/render.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/js/modules/filters.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/js/modules/helpers.js");




const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input'),
    minInp = document.getElementById('min'),
    maxInp = document.getElementById('max'),
    labelCheckSale = document.querySelector('.filter-check_checkmark');
  function checkNumInput(e) {
    if (e.key.match(/[^0-9]/ig)) {
      e.preventDefault();
    }
  }
  const debounceFunc = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
    let min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    let sale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let searchInput = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])().then(goods => {
      Object(_render__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_filters__WEBPACK_IMPORTED_MODULE_2__["funcFilter"])(goods, min, max, sale, searchInput));
    });
  }, 800);
  function showChecked() {
    if (!labelCheckSale.classList.contains('checked')) {
      labelCheckSale.classList.add('checked');
    } else {
      labelCheckSale.classList.remove('checked');
    }
  }
  searchInput.addEventListener('input', () => {
    debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value);
  });
  labelCheckSale.addEventListener('click', () => {
    showChecked();
    debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value);
  });
  minInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value));
  minInp.addEventListener('keypress', checkNumInput);
  maxInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value));
  maxInp.addEventListener('keypress', checkNumInput);
  console.log(checkInp.checked, labelCheckSale.classList.contains('checked'));
};
/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ "./src/js/modules/load.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");
/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ "./src/js/modules/catalog.js");




window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('#cart', '.cart', '.cart-close', '.cart-body', 'cart-confirm');
  Object(_modules_search__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_catalog__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};
const getResource = async value => {
  try {
    const res = await fetch(`https://test-4abc2-default-rtdb.firebaseio.com/goods.json?${value ? `search=${value}` : ''}`);
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map