/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./AlexBrush-Regular.ttf */ "./src/AlexBrush-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./NotoSerif-Regular.ttf */ "./src/NotoSerif-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Alex Brush';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(truetype);\n}\n\n@font-face {\n\tfont-family: 'Noto Serif';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(truetype);\n}\n\n:root {\n    font-family: 'Noto Serif';\n    --lightgrey: rgb(235, 235, 235);\n    --background: rgba(0, 0, 0, 0.7);\n    \n    color: var(--lightgrey);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.background-img {\n    position: absolute;\n    z-index: -1;\n\n    object-fit: cover;\n    width: 100%;\n    height: 100vh;\n\n    filter: opacity(0.9)\n}\n\nbody > main {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: center;\n}\n\nbody > header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n    background-color: var(--background);\n}\n\n#header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    color: orange;\n    position: relative;\n    top: -5px\n}\n\n.logo-top {\n    font-family: 'Alex Brush';\n    font-size: 2rem;\n    position: relative;\n    top: 10px;\n    /* color: var(--lightgrey); */\n}\n\n.logo-bottom {\n    font-family: 'Noto Serif';\n    font-size: 12px;\n    color: var(--lightgrey);\n}\n\n/* Navigation */\n\nnav ul {\n    display: flex;\n    flex-direction: row;\n    gap: 2rem;\n    list-style: none;\n}\n\nnav a:hover {\n    color: orange;\n    cursor: pointer;\n    transition: color 300ms ease;\n}\n\nnav a {\n    display: block;\n    position: relative;\n    padding: 2px 0;\n}\n\nnav a::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: orange;\n    opacity: 0;\n    transition: opacity 300ms, transform 300ms;\n    transform: scale(0);\n    transform-origin: center;\n}\n\nnav a.active::after {\n    opacity: 1;\n    transform:scale(1);    \n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--background);\n    height: 3rem;\n}\n\nfooter a {\n    text-decoration: none;\n    color: orange;\n}\n\n\n.page-width {\n    width: clamp(500px, 75vw, 1200px);\n    padding: 0 2rem;\n}\n\n.page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#home-page {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.quote-block {\n    background-color: var(--background);\n    padding: 3rem;\n    font-size: larger;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    max-width: 600px;\n}\n\n.quote-block p.quote {\n    font-style: italic;\n}\n\n.quote-block p.author {\n    text-align: right;\n}\n\n/* Contact Us */\n#contact-page main {\n    background-color: var(--background);\n    padding: 2rem;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.info-block h2 {\n    margin-bottom: 5px;\n}\n\n\n\n#content h1 {\n    font-family: \"Alex Brush\";\n    font-size: 3rem;\n    color: orange;\n    \n    text-align: center;\n    padding: 1rem;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n}\n\n#content main {\n    display: flex;\n    gap: 3rem;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n\n.menu-item {\n    max-width: 300px;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.menu-item img{\n    max-width: 100%;\n}\n\n.menu-item p {\n    padding: 0.5rem\n}\n\n.menu-item .price {\n    text-align: right;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;CACzB,6DAAoD;AACrD;;AAEA;CACC,yBAAyB;CACzB,6DAAoD;AACrD;;AAEA;IACI,yBAAyB;IACzB,+BAA+B;IAC/B,gCAAgC;;IAEhC,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;;IAEX,iBAAiB;IACjB,WAAW;IACX,aAAa;;IAEb;AACJ;;AAEA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB;AACJ;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,uBAAuB;AAC3B;;AAEA,eAAe;;AAEf;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,WAAW;IACX,wBAAwB;IACxB,UAAU;IACV,0CAA0C;IAC1C,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;;AAGA;IACI,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,eAAe;AACf;IACI,mCAAmC;IACnC,aAAa;;IAEb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;;;AAIA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;;IAEb,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,eAAe;AACnB;;;AAGA;IACI,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["@font-face {\n\tfont-family: 'Alex Brush';\n\tsrc: url('./AlexBrush-Regular.ttf') format(truetype);\n}\n\n@font-face {\n\tfont-family: 'Noto Serif';\n\tsrc: url('./NotoSerif-Regular.ttf') format(truetype);\n}\n\n:root {\n    font-family: 'Noto Serif';\n    --lightgrey: rgb(235, 235, 235);\n    --background: rgba(0, 0, 0, 0.7);\n    \n    color: var(--lightgrey);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.background-img {\n    position: absolute;\n    z-index: -1;\n\n    object-fit: cover;\n    width: 100%;\n    height: 100vh;\n\n    filter: opacity(0.9)\n}\n\nbody > main {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: center;\n}\n\nbody > header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n    background-color: var(--background);\n}\n\n#header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    color: orange;\n    position: relative;\n    top: -5px\n}\n\n.logo-top {\n    font-family: 'Alex Brush';\n    font-size: 2rem;\n    position: relative;\n    top: 10px;\n    /* color: var(--lightgrey); */\n}\n\n.logo-bottom {\n    font-family: 'Noto Serif';\n    font-size: 12px;\n    color: var(--lightgrey);\n}\n\n/* Navigation */\n\nnav ul {\n    display: flex;\n    flex-direction: row;\n    gap: 2rem;\n    list-style: none;\n}\n\nnav a:hover {\n    color: orange;\n    cursor: pointer;\n    transition: color 300ms ease;\n}\n\nnav a {\n    display: block;\n    position: relative;\n    padding: 2px 0;\n}\n\nnav a::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: orange;\n    opacity: 0;\n    transition: opacity 300ms, transform 300ms;\n    transform: scale(0);\n    transform-origin: center;\n}\n\nnav a.active::after {\n    opacity: 1;\n    transform:scale(1);    \n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--background);\n    height: 3rem;\n}\n\nfooter a {\n    text-decoration: none;\n    color: orange;\n}\n\n\n.page-width {\n    width: clamp(500px, 75vw, 1200px);\n    padding: 0 2rem;\n}\n\n.page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#home-page {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.quote-block {\n    background-color: var(--background);\n    padding: 3rem;\n    font-size: larger;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    max-width: 600px;\n}\n\n.quote-block p.quote {\n    font-style: italic;\n}\n\n.quote-block p.author {\n    text-align: right;\n}\n\n/* Contact Us */\n#contact-page main {\n    background-color: var(--background);\n    padding: 2rem;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.info-block h2 {\n    margin-bottom: 5px;\n}\n\n\n\n#content h1 {\n    font-family: \"Alex Brush\";\n    font-size: 3rem;\n    color: orange;\n    \n    text-align: center;\n    padding: 1rem;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n}\n\n#content main {\n    display: flex;\n    gap: 3rem;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n\n.menu-item {\n    max-width: 300px;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.menu-item img{\n    max-width: 100%;\n}\n\n.menu-item p {\n    padding: 0.5rem\n}\n\n.menu-item .price {\n    text-align: right;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
    const contactPage = document.createElement('section');
    contactPage.setAttribute('id', 'contact-page');
    contactPage.classList.add('page-width');
    contactPage.classList.add('page');

    const header = document.createElement('header');
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    header.appendChild(heading);
    contactPage.appendChild(header);

    const main = document.createElement('main');
    contactPage.appendChild(main);

    const location = Location('123', 'Fake St', 'Suburb', 'STATE', '2000');
    const operatingHours = OperatingHours('Monday to Sunday', '11am - late');
    const phoneNumber = PhoneNumber('+61 2 1234 5678');

    main.appendChild(location.getLocationElement());
    main.appendChild(operatingHours.getOperatingHoursElement());
    main.appendChild(phoneNumber.getPhoneNumberElement());

    return contactPage;
}

const Location = (number, street, suburb, state, postCode) => {
    const _addressLine1 = `${number} ${street}`;
    const _addressLine2 = `${suburb}, ${state} ${postCode}`;
    const locationElement = createLocationElement(_addressLine1, _addressLine2);

    function createLocationElement(addressLine1, addressLine2) {
        const locationElement = document.createElement('section');
        locationElement.setAttribute('id', 'address');
        locationElement.classList.add('info-block');

        const heading = document.createElement('h2');
        heading.textContent = 'Location';
        locationElement.appendChild(heading);

        const addressLine1Element = document.createElement('p');
        addressLine1Element.textContent = addressLine1;
        locationElement.appendChild(addressLine1Element);
        
        const addressLine2Element = document.createElement('p');
        addressLine2Element.textContent = addressLine2;
        locationElement.appendChild(addressLine2Element);

        return locationElement;
    }

    const getAddress = () => {
        return `${_addressLine1}, ${_addressLine2}`;
    }

    const getAddressLine1 = () => {
        return _addressLine1;
    }

    const getAddressLine2 = () => {
        return _addressLine2;
    }

    const getLocationElement = () => {
        return locationElement;
    }

    return {
        getLocationElement,
        getAddress,
        getAddressLine1,
        getAddressLine2,
    }
}

const OperatingHours = (days, times) => {
    const operatingHoursElement = createOperatingHoursElement(days, times);

    function createOperatingHoursElement(days, times) {
        const operatingHoursElement = document.createElement('section');
        operatingHoursElement.setAttribute('id', 'operating-hours');
        operatingHoursElement.classList.add('info-block');    

        const heading = document.createElement('h2');
        heading.textContent = 'Opening Hours';
        operatingHoursElement.appendChild(heading);

        const daysLine = document.createElement('p');
        daysLine.textContent = days;
        operatingHoursElement.appendChild(daysLine);

        const hours = document.createElement('p');
        hours.textContent = times;
        operatingHoursElement.appendChild(hours);

        return operatingHoursElement;
    }
    
    const getOperatingHoursElement = () => {
        return operatingHoursElement;
    }

    return {
        getOperatingHoursElement,
    }
}

const PhoneNumber = (phoneNumber) => {
    const phoneNumberElement = createPhoneNumberElement(phoneNumber);

    function createPhoneNumberElement(phoneNumber) {
        const phoneNumberElement = document.createElement('section');
        phoneNumberElement.setAttribute('id', 'phone-number');
        phoneNumberElement.classList.add('info-block');

        const heading = document.createElement('h2');
        heading.textContent = 'Phone';
        phoneNumberElement.appendChild(heading);

        const number = document.createElement('p');
        number.textContent = phoneNumber;
        phoneNumberElement.appendChild(number);    

        return phoneNumberElement;
    }

    const getPhoneNumberElement = () => {
        return phoneNumberElement;
    }

    const getPhoneNumber = () => {
        return phoneNumber;
    }

    return {
        getPhoneNumber,
        getPhoneNumberElement,
    }
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
    const homePage = document.createElement('section');
    homePage.setAttribute('id', 'home-page');
    homePage.classList.add('page-width');
    homePage.classList.add('page');

    const quoteBlock = document.createElement('div');
    quoteBlock.classList.add('quote-block');
    homePage.appendChild(quoteBlock);

    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = '"Welcome to my kitchen! I only know how to make one dish, but it is the best dish you will ever taste!"';
    quoteBlock.appendChild(quote);

    const quoteAuthor = document.createElement('p');
    quoteAuthor.classList.add('author');
    quoteAuthor.textContent = '- Kenya Chan';
    quoteBlock.appendChild(quoteAuthor);

    return homePage;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penne.jpeg */ "./src/penne.jpeg");


function menuPage() {
    const menuPage = document.createElement('section');
    menuPage.setAttribute('id', 'menu-page');
    menuPage.classList.add('page-width');
    menuPage.classList.add('page');

    const header = document.createElement('header');
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    header.appendChild(heading);
    menuPage.appendChild(header);

    const main = document.createElement('main');
    menuPage.appendChild(main);

    const menuItem = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem.getMenuItemElement());

    const menuItem2 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem2.getMenuItemElement());

    const menuItem3 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem3.getMenuItemElement());

    const menuItem4 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem4.getMenuItemElement());

    const menuItem5 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem5.getMenuItemElement());

    const menuItem6 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem6.getMenuItemElement());
    return menuPage;
}

const MenuItem = (name, price, imageSrc) => {
    const menuItemElement = createMenuItemElement(name, price, imageSrc);

    function createMenuItemElement(name, price, imageSrc) {
        const menuItemElement = document.createElement('div');
        
        menuItemElement.classList.add('menu-item');

        const img = new Image();
        img.src = imageSrc;
        menuItemElement.appendChild(img);

        const itemName = document.createElement('p');
        itemName.classList.add('description');
        itemName.textContent = name;
        menuItemElement.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = price;
        menuItemElement.appendChild(itemPrice);    

        return menuItemElement;
    }

    const getName = () => {
        return name;
    }

    const getPrice = () => {
        return price;
    }

    const getImgSrc = () => {
        return imageSrc;
    }

    const getMenuItemElement = () => {
        return menuItemElement;
    }

    return {
        getName,
        getPrice,
        getImgSrc,
        getMenuItemElement,
    }
} 



/***/ }),

/***/ "./src/site-components.js":
/*!********************************!*\
  !*** ./src/site-components.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Logo": () => (/* binding */ Logo),
/* harmony export */   "NavBar": () => (/* binding */ NavBar),
/* harmony export */   "heroImageComponent": () => (/* binding */ heroImageComponent),
/* harmony export */   "quoteComponent": () => (/* binding */ quoteComponent)
/* harmony export */ });
function quoteComponent() {
    const quoteComponent = document.createElement('p');

    const quoteText = 'This restaurant is awesome!';

    quoteComponent.textContent = quoteText;

    return quoteComponent;
}

function heroImageComponent() {
    const heroImageComponent = document.createElement('img');

    const imgSrc = "../src/pasta.jpeg";

    heroImageComponent.setAttribute('src', imgSrc);

    return heroImageComponent;
}

const Footer = () => {
    const footerElement =  createFooter();

    function createFooter() {
        const footerElement = document.createElement('footer');

        const pageWidth = document.createElement('div');
        pageWidth.classList.add('page-width');
        pageWidth.setAttribute('id', 'footer');
        footerElement.appendChild(pageWidth);
        
        const authorLink = document.createElement('a');
        const link = "https://github.com/kenyachan";
        const author = "Kenya Chan"
        authorLink.setAttribute('href', link);
        authorLink.textContent = author;
        
        const authorP = document.createElement('p');
        authorP.textContent = "Created by ";
        authorP.appendChild(authorLink);
        
        pageWidth.appendChild(authorP);    
    
        return footerElement;
    }

    const getFooterElement = () => {
        return footerElement;
    }

    return {
        getFooterElement,
    }
}

const Header = () => {
    const headerElement = createHeader();
    
    function createHeader() {
        const headerElement = document.createElement('header');
        
        const pageWidth = document.createElement('div');
        pageWidth.classList.add('page-width');
        pageWidth.setAttribute('id', 'header');
        headerElement.appendChild(pageWidth);

        const logo = Logo();
        pageWidth.appendChild(logo.getLogoElement());

        return headerElement;
    }

    const getHeaderElement = () => {
        return headerElement;
    }

    return {
        getHeaderElement,
    }
}

const NavBar = (...nodeNames) => {
    const navLinks = [];
    const navBarElement = createNavElement();

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            setLinkActive(event.target);
        });
    });

    function setLinkActive(link) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        link.classList.add('active');
    }

    function createNavElement() {
        const navbar = document.createElement('nav');

        const list = document.createElement('ul');
        navbar.appendChild(list);

        nodeNames.forEach(name => {
            const node = createNavLink(name);
            list.appendChild(node);
        });
        
        return navbar;
    }

    function createNavLink(name) {
        const listItem = document.createElement('li');

        const navLink = document.createElement('a');
        navLink.textContent = name;
        navLink.setAttribute('id', name.toLowerCase());

        listItem.appendChild(navLink);
        navLinks.push(navLink);

        return listItem;
    }

    const getNavBarElement = () => {
        return navBarElement;
    }

    const getNavLinks = () => {
        return navLinks;
    }

    return {
        getNavBarElement, 
        getNavLinks,
    }  
}

const Logo = () => {
    const logoElement = createLogoElement();

    function createLogoElement() {
        const logoElement = document.createElement('div');
        logoElement.classList.add('logo');

        const logoTop = document.createElement('p');
        logoTop.classList.add('logo-top');
        logoTop.textContent = 'K';
        logoElement.appendChild(logoTop);

        const logoBottom = document.createElement('p');
        logoBottom.classList.add('logo-bottom');
        logoBottom.textContent = 'Kitchen';
        logoElement.appendChild(logoBottom);

        return logoElement;
    }

    const getLogoElement = () => {
        return logoElement;
    }

    return {
        getLogoElement,
    }
}


/***/ }),

/***/ "./src/AlexBrush-Regular.ttf":
/*!***********************************!*\
  !*** ./src/AlexBrush-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02c99e7bea6605650b6f.ttf";

/***/ }),

/***/ "./src/NotoSerif-Regular.ttf":
/*!***********************************!*\
  !*** ./src/NotoSerif-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f137c7ae4fdb27744a29.ttf";

/***/ }),

/***/ "./src/background.jpeg":
/*!*****************************!*\
  !*** ./src/background.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f89c8173c83e67cc9e58.jpeg";

/***/ }),

/***/ "./src/penne.jpeg":
/*!************************!*\
  !*** ./src/penne.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3c85bb47d79224bab01.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _site_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-components */ "./src/site-components.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _background_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background.jpeg */ "./src/background.jpeg");







const body = document.querySelector('body');

const backgroundImg = new Image();
backgroundImg.src = _background_jpeg__WEBPACK_IMPORTED_MODULE_5__;
backgroundImg.setAttribute('id', 'background-img');
backgroundImg.classList.add('background-img');

body.appendChild(backgroundImg);

const header = _site_components__WEBPACK_IMPORTED_MODULE_1__.Header();
const headerElement = header.getHeaderElement();

const navbar = _site_components__WEBPACK_IMPORTED_MODULE_1__.NavBar('Home', 'Menu', 'Contact');
headerElement.querySelector('.page-width').appendChild(navbar.getNavBarElement());

const navBarElement = navbar.getNavBarElement();
const homeLink = navBarElement.querySelector('#home');
const menuLink = navBarElement.querySelector('#menu');
const contactLink = navBarElement.querySelector('#contact');

homeLink.classList.add('active');

const content = document.createElement('main');
content.setAttribute('id', 'content');
content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])());

const footer = _site_components__WEBPACK_IMPORTED_MODULE_1__.Footer();
const footerElement = footer.getFooterElement();

body.appendChild(headerElement);
body.appendChild(content);
body.appendChild(footerElement);


homeLink.addEventListener('click', () => {
    loadHomePage();    
});

menuLink.addEventListener('click', () => {
    loadMenuPage();
});

contactLink.addEventListener('click', () => {
    loadContactsPage();
});

const loadHomePage = () => {
    content.replaceChild((0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])(), content.firstChild);
}

const loadContactsPage = () => {
    content.replaceChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])(), content.firstChild)
}

const loadMenuPage = () => {
    content.replaceChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])(), content.firstChild);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFJZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnNDOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0RkFBNEYsd0NBQVU7QUFDdEc7O0FBRUEsNkZBQTZGLHdDQUFVO0FBQ3ZHOztBQUVBLDZGQUE2Rix3Q0FBVTtBQUN2Rzs7QUFFQSw2RkFBNkYsd0NBQVU7QUFDdkc7O0FBRUEsNkZBQTZGLHdDQUFVO0FBQ3ZHOztBQUVBLDZGQUE2Rix3Q0FBVTtBQUN2RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTztBQUNQOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDK0I7QUFDaEI7QUFDTjtBQUNBO0FBQ21COztBQUVqRDs7QUFFQTtBQUNBLG9CQUFvQiw2Q0FBZ0I7QUFDcEM7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQSxlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFROztBQUU1QixlQUFlLG9EQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EseUJBQXlCLGlEQUFRO0FBQ2pDOztBQUVBO0FBQ0EseUJBQXlCLG9EQUFXO0FBQ3BDOztBQUVBO0FBQ0EseUJBQXlCLGlEQUFRO0FBQ2pDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2l0ZS1jb21wb25lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0FsZXhCcnVzaC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vTm90b1NlcmlmLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnQWxleCBCcnVzaCc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZic7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNlcmlmJztcXG4gICAgLS1saWdodGdyZXk6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGZpbHRlcjogb3BhY2l0eSgwLjkpXFxufVxcblxcbmJvZHkgPiBtYWluIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5ib2R5ID4gaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC01cHhcXG59XFxuXFxuLmxvZ28tdG9wIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGV4IEJydXNoJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgLyogY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7ICovXFxufVxcblxcbi5sb2dvLWJvdHRvbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gKi9cXG5cXG5uYXYgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xcbn1cXG5cXG5uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbn1cXG5cXG5uYXYgYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCB0cmFuc2Zvcm0gMzAwbXM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxubmF2IGEuYWN0aXZlOjphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTsgICAgXFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuXFxuLnBhZ2Utd2lkdGgge1xcbiAgICB3aWR0aDogY2xhbXAoNTAwcHgsIDc1dncsIDEyMDBweCk7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS1wYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5xdW90ZS1ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4ucXVvdGUtYmxvY2sgcC5xdW90ZSB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnF1b3RlLWJsb2NrIHAuYXV0aG9yIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi8qIENvbnRhY3QgVXMgKi9cXG4jY29udGFjdC1wYWdlIG1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluZm8tYmxvY2sgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcblxcblxcbiNjb250ZW50IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJBbGV4IEJydXNoXFxcIjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZ3tcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgICBwYWRkaW5nOiAwLjVyZW1cXG59XFxuXFxuLm1lbnUtaXRlbSAucHJpY2Uge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHlCQUF5QjtDQUN6Qiw2REFBb0Q7QUFDckQ7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsNkRBQW9EO0FBQ3JEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixnQ0FBZ0M7O0lBRWhDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVzs7SUFFWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7O0lBRWI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztJQUVULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdBbGV4IEJydXNoJztcXG5cXHRzcmM6IHVybCgnLi9BbGV4QnJ1c2gtUmVndWxhci50dGYnKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ05vdG8gU2VyaWYnO1xcblxcdHNyYzogdXJsKCcuL05vdG9TZXJpZi1SZWd1bGFyLnR0ZicpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNlcmlmJztcXG4gICAgLS1saWdodGdyZXk6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGZpbHRlcjogb3BhY2l0eSgwLjkpXFxufVxcblxcbmJvZHkgPiBtYWluIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5ib2R5ID4gaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC01cHhcXG59XFxuXFxuLmxvZ28tdG9wIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGV4IEJydXNoJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgLyogY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7ICovXFxufVxcblxcbi5sb2dvLWJvdHRvbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gKi9cXG5cXG5uYXYgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xcbn1cXG5cXG5uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbn1cXG5cXG5uYXYgYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCB0cmFuc2Zvcm0gMzAwbXM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxubmF2IGEuYWN0aXZlOjphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTsgICAgXFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuXFxuLnBhZ2Utd2lkdGgge1xcbiAgICB3aWR0aDogY2xhbXAoNTAwcHgsIDc1dncsIDEyMDBweCk7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS1wYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5xdW90ZS1ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4ucXVvdGUtYmxvY2sgcC5xdW90ZSB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnF1b3RlLWJsb2NrIHAuYXV0aG9yIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi8qIENvbnRhY3QgVXMgKi9cXG4jY29udGFjdC1wYWdlIG1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluZm8tYmxvY2sgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcblxcblxcbiNjb250ZW50IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJBbGV4IEJydXNoXFxcIjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZ3tcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgICBwYWRkaW5nOiAwLjVyZW1cXG59XFxuXFxuLm1lbnUtaXRlbSAucHJpY2Uge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3RQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1wYWdlJyk7XG4gICAgY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZS13aWR0aCcpO1xuICAgIGNvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IExvY2F0aW9uKCcxMjMnLCAnRmFrZSBTdCcsICdTdWJ1cmInLCAnU1RBVEUnLCAnMjAwMCcpO1xuICAgIGNvbnN0IG9wZXJhdGluZ0hvdXJzID0gT3BlcmF0aW5nSG91cnMoJ01vbmRheSB0byBTdW5kYXknLCAnMTFhbSAtIGxhdGUnKTtcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IFBob25lTnVtYmVyKCcrNjEgMiAxMjM0IDU2NzgnKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobG9jYXRpb24uZ2V0TG9jYXRpb25FbGVtZW50KCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQob3BlcmF0aW5nSG91cnMuZ2V0T3BlcmF0aW5nSG91cnNFbGVtZW50KCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIuZ2V0UGhvbmVOdW1iZXJFbGVtZW50KCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RQYWdlO1xufVxuXG5jb25zdCBMb2NhdGlvbiA9IChudW1iZXIsIHN0cmVldCwgc3VidXJiLCBzdGF0ZSwgcG9zdENvZGUpID0+IHtcbiAgICBjb25zdCBfYWRkcmVzc0xpbmUxID0gYCR7bnVtYmVyfSAke3N0cmVldH1gO1xuICAgIGNvbnN0IF9hZGRyZXNzTGluZTIgPSBgJHtzdWJ1cmJ9LCAke3N0YXRlfSAke3Bvc3RDb2RlfWA7XG4gICAgY29uc3QgbG9jYXRpb25FbGVtZW50ID0gY3JlYXRlTG9jYXRpb25FbGVtZW50KF9hZGRyZXNzTGluZTEsIF9hZGRyZXNzTGluZTIpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25FbGVtZW50KGFkZHJlc3NMaW5lMSwgYWRkcmVzc0xpbmUyKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgbG9jYXRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkcmVzcycpO1xuICAgICAgICBsb2NhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1ibG9jaycpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICAgICAgbG9jYXRpb25FbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFkZHJlc3NMaW5lMUVsZW1lbnQudGV4dENvbnRlbnQgPSBhZGRyZXNzTGluZTE7XG4gICAgICAgIGxvY2F0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChhZGRyZXNzTGluZTFFbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFkZHJlc3NMaW5lMkVsZW1lbnQudGV4dENvbnRlbnQgPSBhZGRyZXNzTGluZTI7XG4gICAgICAgIGxvY2F0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChhZGRyZXNzTGluZTJFbGVtZW50KTtcblxuICAgICAgICByZXR1cm4gbG9jYXRpb25FbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFkZHJlc3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtfYWRkcmVzc0xpbmUxfSwgJHtfYWRkcmVzc0xpbmUyfWA7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWRkcmVzc0xpbmUxID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2FkZHJlc3NMaW5lMTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBZGRyZXNzTGluZTIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfYWRkcmVzc0xpbmUyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExvY2F0aW9uRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMb2NhdGlvbkVsZW1lbnQsXG4gICAgICAgIGdldEFkZHJlc3MsXG4gICAgICAgIGdldEFkZHJlc3NMaW5lMSxcbiAgICAgICAgZ2V0QWRkcmVzc0xpbmUyLFxuICAgIH1cbn1cblxuY29uc3QgT3BlcmF0aW5nSG91cnMgPSAoZGF5cywgdGltZXMpID0+IHtcbiAgICBjb25zdCBvcGVyYXRpbmdIb3Vyc0VsZW1lbnQgPSBjcmVhdGVPcGVyYXRpbmdIb3Vyc0VsZW1lbnQoZGF5cywgdGltZXMpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW5nSG91cnNFbGVtZW50KGRheXMsIHRpbWVzKSB7XG4gICAgICAgIGNvbnN0IG9wZXJhdGluZ0hvdXJzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgb3BlcmF0aW5nSG91cnNFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlcmF0aW5nLWhvdXJzJyk7XG4gICAgICAgIG9wZXJhdGluZ0hvdXJzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLWJsb2NrJyk7ICAgIFxuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ09wZW5pbmcgSG91cnMnO1xuICAgICAgICBvcGVyYXRpbmdIb3Vyc0VsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgZGF5c0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRheXNMaW5lLnRleHRDb250ZW50ID0gZGF5cztcbiAgICAgICAgb3BlcmF0aW5nSG91cnNFbGVtZW50LmFwcGVuZENoaWxkKGRheXNMaW5lKTtcblxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG91cnMudGV4dENvbnRlbnQgPSB0aW1lcztcbiAgICAgICAgb3BlcmF0aW5nSG91cnNFbGVtZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgICAgICByZXR1cm4gb3BlcmF0aW5nSG91cnNFbGVtZW50O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRPcGVyYXRpbmdIb3Vyc0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpbmdIb3Vyc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0T3BlcmF0aW5nSG91cnNFbGVtZW50LFxuICAgIH1cbn1cblxuY29uc3QgUGhvbmVOdW1iZXIgPSAocGhvbmVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBwaG9uZU51bWJlckVsZW1lbnQgPSBjcmVhdGVQaG9uZU51bWJlckVsZW1lbnQocGhvbmVOdW1iZXIpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGhvbmVOdW1iZXJFbGVtZW50KHBob25lTnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHBob25lTnVtYmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgcGhvbmVOdW1iZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmUtbnVtYmVyJyk7XG4gICAgICAgIHBob25lTnVtYmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLWJsb2NrJyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnUGhvbmUnO1xuICAgICAgICBwaG9uZU51bWJlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBwaG9uZU51bWJlcjtcbiAgICAgICAgcGhvbmVOdW1iZXJFbGVtZW50LmFwcGVuZENoaWxkKG51bWJlcik7ICAgIFxuXG4gICAgICAgIHJldHVybiBwaG9uZU51bWJlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGhvbmVOdW1iZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGhvbmVOdW1iZXJFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBob25lTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGhvbmVOdW1iZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGhvbmVOdW1iZXIsXG4gICAgICAgIGdldFBob25lTnVtYmVyRWxlbWVudCxcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBob21lUGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtcGFnZScpO1xuICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utd2lkdGgnKTtcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG5cbiAgICBjb25zdCBxdW90ZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcXVvdGVCbG9jay5jbGFzc0xpc3QuYWRkKCdxdW90ZS1ibG9jaycpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHF1b3RlQmxvY2spO1xuXG4gICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcbiAgICBxdW90ZS50ZXh0Q29udGVudCA9ICdcIldlbGNvbWUgdG8gbXkga2l0Y2hlbiEgSSBvbmx5IGtub3cgaG93IHRvIG1ha2Ugb25lIGRpc2gsIGJ1dCBpdCBpcyB0aGUgYmVzdCBkaXNoIHlvdSB3aWxsIGV2ZXIgdGFzdGUhXCInO1xuICAgIHF1b3RlQmxvY2suYXBwZW5kQ2hpbGQocXVvdGUpO1xuXG4gICAgY29uc3QgcXVvdGVBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcXVvdGVBdXRob3IuY2xhc3NMaXN0LmFkZCgnYXV0aG9yJyk7XG4gICAgcXVvdGVBdXRob3IudGV4dENvbnRlbnQgPSAnLSBLZW55YSBDaGFuJztcbiAgICBxdW90ZUJsb2NrLmFwcGVuZENoaWxkKHF1b3RlQXV0aG9yKTtcblxuICAgIHJldHVybiBob21lUGFnZTtcbn0iLCJpbXBvcnQgcGFzdGFJbWFnZSBmcm9tICcuL3Blbm5lLmpwZWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBtZW51UGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtcGFnZScpO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utd2lkdGgnKTtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtID0gTWVudUl0ZW0oJ1Blbm5lIHdpdGggdG9tYXRvIG1lYXQgYm9sb2duZXNlIHNhdWNlIGFuZCBiYXNpbCcsICckMTIuNTAnLCBwYXN0YUltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVJdGVtLmdldE1lbnVJdGVtRWxlbWVudCgpKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IE1lbnVJdGVtKCdQZW5uZSB3aXRoIHRvbWF0byBtZWF0IGJvbG9nbmVzZSBzYXVjZSBhbmQgYmFzaWwnLCAnJDEyLjUwJywgcGFzdGFJbWFnZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbTIuZ2V0TWVudUl0ZW1FbGVtZW50KCkpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0zID0gTWVudUl0ZW0oJ1Blbm5lIHdpdGggdG9tYXRvIG1lYXQgYm9sb2duZXNlIHNhdWNlIGFuZCBiYXNpbCcsICckMTIuNTAnLCBwYXN0YUltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVJdGVtMy5nZXRNZW51SXRlbUVsZW1lbnQoKSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTQgPSBNZW51SXRlbSgnUGVubmUgd2l0aCB0b21hdG8gbWVhdCBib2xvZ25lc2Ugc2F1Y2UgYW5kIGJhc2lsJywgJyQxMi41MCcsIHBhc3RhSW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUl0ZW00LmdldE1lbnVJdGVtRWxlbWVudCgpKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtNSA9IE1lbnVJdGVtKCdQZW5uZSB3aXRoIHRvbWF0byBtZWF0IGJvbG9nbmVzZSBzYXVjZSBhbmQgYmFzaWwnLCAnJDEyLjUwJywgcGFzdGFJbWFnZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbTUuZ2V0TWVudUl0ZW1FbGVtZW50KCkpO1xuXG4gICAgY29uc3QgbWVudUl0ZW02ID0gTWVudUl0ZW0oJ1Blbm5lIHdpdGggdG9tYXRvIG1lYXQgYm9sb2duZXNlIHNhdWNlIGFuZCBiYXNpbCcsICckMTIuNTAnLCBwYXN0YUltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVJdGVtNi5nZXRNZW51SXRlbUVsZW1lbnQoKSk7XG4gICAgcmV0dXJuIG1lbnVQYWdlO1xufVxuXG5jb25zdCBNZW51SXRlbSA9IChuYW1lLCBwcmljZSwgaW1hZ2VTcmMpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbUVsZW1lbnQgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnQobmFtZSwgcHJpY2UsIGltYWdlU3JjKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtRWxlbWVudChuYW1lLCBwcmljZSwgaW1hZ2VTcmMpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBtZW51SXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVNyYztcbiAgICAgICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICAgICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7ICAgIFxuXG4gICAgICAgIHJldHVybiBtZW51SXRlbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpY2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbWdTcmMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbWFnZVNyYztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRNZW51SXRlbUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtZW51SXRlbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgZ2V0UHJpY2UsXG4gICAgICAgIGdldEltZ1NyYyxcbiAgICAgICAgZ2V0TWVudUl0ZW1FbGVtZW50LFxuICAgIH1cbn0gXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBxdW90ZUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBxdW90ZUNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IHF1b3RlVGV4dCA9ICdUaGlzIHJlc3RhdXJhbnQgaXMgYXdlc29tZSEnO1xuXG4gICAgcXVvdGVDb21wb25lbnQudGV4dENvbnRlbnQgPSBxdW90ZVRleHQ7XG5cbiAgICByZXR1cm4gcXVvdGVDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJvSW1hZ2VDb21wb25lbnQoKSB7XG4gICAgY29uc3QgaGVyb0ltYWdlQ29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25zdCBpbWdTcmMgPSBcIi4uL3NyYy9wYXN0YS5qcGVnXCI7XG5cbiAgICBoZXJvSW1hZ2VDb21wb25lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTcmMpO1xuXG4gICAgcmV0dXJuIGhlcm9JbWFnZUNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gIGNyZWF0ZUZvb3RlcigpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgICAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICAgICAgY29uc3QgcGFnZVdpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhZ2VXaWR0aC5jbGFzc0xpc3QuYWRkKCdwYWdlLXdpZHRoJyk7XG4gICAgICAgIHBhZ2VXaWR0aC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VXaWR0aCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdXRob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb25zdCBsaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20va2VueWFjaGFuXCI7XG4gICAgICAgIGNvbnN0IGF1dGhvciA9IFwiS2VueWEgQ2hhblwiXG4gICAgICAgIGF1dGhvckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XG4gICAgICAgIGF1dGhvckxpbmsudGV4dENvbnRlbnQgPSBhdXRob3I7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdXRob3JQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhdXRob3JQLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IFwiO1xuICAgICAgICBhdXRob3JQLmFwcGVuZENoaWxkKGF1dGhvckxpbmspO1xuICAgICAgICBcbiAgICAgICAgcGFnZVdpZHRoLmFwcGVuZENoaWxkKGF1dGhvclApOyAgICBcbiAgICBcbiAgICAgICAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Rm9vdGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Rm9vdGVyRWxlbWVudCxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcGFnZVdpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhZ2VXaWR0aC5jbGFzc0xpc3QuYWRkKCdwYWdlLXdpZHRoJyk7XG4gICAgICAgIHBhZ2VXaWR0aC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VXaWR0aCk7XG5cbiAgICAgICAgY29uc3QgbG9nbyA9IExvZ28oKTtcbiAgICAgICAgcGFnZVdpZHRoLmFwcGVuZENoaWxkKGxvZ28uZ2V0TG9nb0VsZW1lbnQoKSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGVhZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SGVhZGVyRWxlbWVudCxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoLi4ubm9kZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgbmF2TGlua3MgPSBbXTtcbiAgICBjb25zdCBuYXZCYXJFbGVtZW50ID0gY3JlYXRlTmF2RWxlbWVudCgpO1xuXG4gICAgbmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0TGlua0FjdGl2ZShldmVudC50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldExpbmtBY3RpdmUobGluaykge1xuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOYXZFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgICAgIG5vZGVOYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5hdkxpbmsobmFtZSk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuYXZiYXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2TGluayhuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChuYXZMaW5rKTtcbiAgICAgICAgbmF2TGlua3MucHVzaChuYXZMaW5rKTtcblxuICAgICAgICByZXR1cm4gbGlzdEl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmF2QmFyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hdkJhckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmF2TGlua3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYXZMaW5rcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYXZCYXJFbGVtZW50LCBcbiAgICAgICAgZ2V0TmF2TGlua3MsXG4gICAgfSAgXG59XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ29FbGVtZW50ID0gY3JlYXRlTG9nb0VsZW1lbnQoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvZ29FbGVtZW50KCkge1xuICAgICAgICBjb25zdCBsb2dvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2dvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgICAgICAgY29uc3QgbG9nb1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbG9nb1RvcC5jbGFzc0xpc3QuYWRkKCdsb2dvLXRvcCcpO1xuICAgICAgICBsb2dvVG9wLnRleHRDb250ZW50ID0gJ0snO1xuICAgICAgICBsb2dvRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvVG9wKTtcblxuICAgICAgICBjb25zdCBsb2dvQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsb2dvQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2xvZ28tYm90dG9tJyk7XG4gICAgICAgIGxvZ29Cb3R0b20udGV4dENvbnRlbnQgPSAnS2l0Y2hlbic7XG4gICAgICAgIGxvZ29FbGVtZW50LmFwcGVuZENoaWxkKGxvZ29Cb3R0b20pO1xuXG4gICAgICAgIHJldHVybiBsb2dvRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMb2dvRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvZ29FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExvZ29FbGVtZW50LFxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBzaXRlQ29tcG9uZW50cyBmcm9tICcuL3NpdGUtY29tcG9uZW50cyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYmFja2dyb3VuZEltZ1NyYyBmcm9tICcuL2JhY2tncm91bmQuanBlZyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmRJbWcuc3JjID0gYmFja2dyb3VuZEltZ1NyYztcbmJhY2tncm91bmRJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrZ3JvdW5kLWltZycpO1xuYmFja2dyb3VuZEltZy5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltZycpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpO1xuXG5jb25zdCBoZWFkZXIgPSBzaXRlQ29tcG9uZW50cy5IZWFkZXIoKTtcbmNvbnN0IGhlYWRlckVsZW1lbnQgPSBoZWFkZXIuZ2V0SGVhZGVyRWxlbWVudCgpO1xuXG5jb25zdCBuYXZiYXIgPSBzaXRlQ29tcG9uZW50cy5OYXZCYXIoJ0hvbWUnLCAnTWVudScsICdDb250YWN0Jyk7XG5oZWFkZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdpZHRoJykuYXBwZW5kQ2hpbGQobmF2YmFyLmdldE5hdkJhckVsZW1lbnQoKSk7XG5cbmNvbnN0IG5hdkJhckVsZW1lbnQgPSBuYXZiYXIuZ2V0TmF2QmFyRWxlbWVudCgpO1xuY29uc3QgaG9tZUxpbmsgPSBuYXZCYXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCBtZW51TGluayA9IG5hdkJhckVsZW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbmNvbnN0IGNvbnRhY3RMaW5rID0gbmF2QmFyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuXG5ob21lTGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpO1xuXG5jb25zdCBmb290ZXIgPSBzaXRlQ29tcG9uZW50cy5Gb290ZXIoKTtcbmNvbnN0IGZvb3RlckVsZW1lbnQgPSBmb290ZXIuZ2V0Rm9vdGVyRWxlbWVudCgpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCk7XG5cblxuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZEhvbWVQYWdlKCk7ICAgIFxufSk7XG5cbm1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvYWRNZW51UGFnZSgpO1xufSk7XG5cbmNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvYWRDb250YWN0c1BhZ2UoKTtcbn0pO1xuXG5jb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGQoaG9tZVBhZ2UoKSwgY29udGVudC5maXJzdENoaWxkKTtcbn1cblxuY29uc3QgbG9hZENvbnRhY3RzUGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZChjb250YWN0UGFnZSgpLCBjb250ZW50LmZpcnN0Q2hpbGQpXG59XG5cbmNvbnN0IGxvYWRNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZChtZW51UGFnZSgpLCBjb250ZW50LmZpcnN0Q2hpbGQpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==