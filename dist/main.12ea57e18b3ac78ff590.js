/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.jpg */ "./src/assets/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fasthand&family=Nunito&family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --fs-800: 3rem;
  --fs-600: 1.5rem;
  --fs-500: 1.2rem;
  --fs-400: 1.1rem;
  --fs-200: 0.7rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', 'Roboto', sans-serif;
  height: 100vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-weight: bold;
  padding: 1em;
  overflow: hidden;
}

.temp-toggle {
  display: flex;
  gap: 0.5rem;
}

input[name='temp-in'] {
  appearance: none;
}

.temp-toggle label {
  height: 2em;
  width: 5em;
  background: rgb(27, 23, 23);
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-500);
  border-radius: 5%;
  cursor: pointer;
  box-shadow: 2px 2px 10px black;
}

input[name='temp-in']:checked + label {
  border: 1px solid gold;
}
.search-weather-section {
  float: right;
}

.search-weather-section div {
  float: right;
  border-bottom: 3px solid white;
  padding: 0.2em;
}
.error {
  margin-top: 3rem;
}
.search-weather-input {
  appearance: none;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: var(--fs-400);
  width: 180px;
  font-weight: 600;
}

.search-weather-input::placeholder {
  font-weight: 600;
  color: white;
}

.search-weather-button {
  background: transparent;
  border: none;
  cursor: pointer;
}

.search-weather-button img {
  height: 1.5em;
}

.search-weather-button:active {
  scale: 1.1;
}

.icon img {
  filter: grayscale(100%) brightness(500%);
}

.city-name {
  font-size: var(--fs-600);
}
.date-time {
  font-size: var(--fs-200);
}

main {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.weather-secondary {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
}
.property {
  color: rgb(196, 195, 195);
}
.value {
  font-size: var(--fs-500);
}
.weather-main {
  display: flex;
  flex-direction: column;
}
.weather-details div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.weather-details {
  display: flex;
  gap: 10vw;
  font-size: var(--fs-400);
}

.temperature-main {
  display: flex;
  align-items: center;
}

.temperature-main .temperature {
  font-size: var(--fs-800);
}

.loading-img {
  display: none;
  position: absolute;
  right: 47%;
  top: 30%;
}

@media (max-width: 950px) {
  :root {
    --fs-800: 2.5rem;
    --fs-600: 1.2rem;
    --fs-500: 0.8rem;
    --fs-400: 0.9rem;
    --fs-200: 0.5rem;
  }
}

@media (max-width: 550px) {
  :root {
    --fs-800: 2.1rem;
    --fs-600: 0.9rem;
    --fs-500: 0.6rem;
    --fs-400: 0.7rem;
    --fs-200: 0.4rem;
  }
  .search-weather-input {
    width: 140px;
  }
  .search-weather-button img {
    height: 1em;
  }
  .temp-toggle label {
    height: 1.5rem;
    width: 4rem;
  }
}

@media (max-width: 450px) {
  body {
    display: flex;
    flex-direction: column;
  }
  .weather-details {
    flex-direction: column;
    gap: 5rem;
  }
  .weather-details div {
    align-self: center;
  }
  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  .search-weather-section,
  .search-weather-section div {
    float: none;
  }
  .search-weather-section {
    align-self: center;
  }
  .error {
    position: absolute;
    right: 47%;
    top: 30%;
  }
}

@media (max-height: 580px) {
  .weather-secondary {
    gap: 0.2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2CAA2C;EAC3C,aAAa;EACb,yDAAyC;EACzC,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,8BAA8B;EAC9B,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,QAAQ;AACV;;AAEA;EACE;IACE,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,sBAAsB;IACtB,SAAS;EACX;EACA;IACE,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;EACrB;EACA;;IAEE,WAAW;EACb;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;IAClB,UAAU;IACV,QAAQ;EACV;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fasthand&family=Nunito&family=Roboto&display=swap');\r\n\r\n:root {\r\n  --fs-800: 3rem;\r\n  --fs-600: 1.5rem;\r\n  --fs-500: 1.2rem;\r\n  --fs-400: 1.1rem;\r\n  --fs-200: 0.7rem;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Nunito', 'Roboto', sans-serif;\r\n  height: 100vh;\r\n  background-image: url('../assets/bg.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  color: white;\r\n  font-weight: bold;\r\n  padding: 1em;\r\n  overflow: hidden;\r\n}\r\n\r\n.temp-toggle {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\ninput[name='temp-in'] {\r\n  appearance: none;\r\n}\r\n\r\n.temp-toggle label {\r\n  height: 2em;\r\n  width: 5em;\r\n  background: rgb(27, 23, 23);\r\n  color: gold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: var(--fs-500);\r\n  border-radius: 5%;\r\n  cursor: pointer;\r\n  box-shadow: 2px 2px 10px black;\r\n}\r\n\r\ninput[name='temp-in']:checked + label {\r\n  border: 1px solid gold;\r\n}\r\n.search-weather-section {\r\n  float: right;\r\n}\r\n\r\n.search-weather-section div {\r\n  float: right;\r\n  border-bottom: 3px solid white;\r\n  padding: 0.2em;\r\n}\r\n.error {\r\n  margin-top: 3rem;\r\n}\r\n.search-weather-input {\r\n  appearance: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-size: var(--fs-400);\r\n  width: 180px;\r\n  font-weight: 600;\r\n}\r\n\r\n.search-weather-input::placeholder {\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n\r\n.search-weather-button {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-weather-button img {\r\n  height: 1.5em;\r\n}\r\n\r\n.search-weather-button:active {\r\n  scale: 1.1;\r\n}\r\n\r\n.icon img {\r\n  filter: grayscale(100%) brightness(500%);\r\n}\r\n\r\n.city-name {\r\n  font-size: var(--fs-600);\r\n}\r\n.date-time {\r\n  font-size: var(--fs-200);\r\n}\r\n\r\nmain {\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.weather-secondary {\r\n  list-style: none;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(3, 1fr);\r\n  gap: 2rem;\r\n}\r\n.property {\r\n  color: rgb(196, 195, 195);\r\n}\r\n.value {\r\n  font-size: var(--fs-500);\r\n}\r\n.weather-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.weather-details div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.weather-details {\r\n  display: flex;\r\n  gap: 10vw;\r\n  font-size: var(--fs-400);\r\n}\r\n\r\n.temperature-main {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.temperature-main .temperature {\r\n  font-size: var(--fs-800);\r\n}\r\n\r\n.loading-img {\r\n  display: none;\r\n  position: absolute;\r\n  right: 47%;\r\n  top: 30%;\r\n}\r\n\r\n@media (max-width: 950px) {\r\n  :root {\r\n    --fs-800: 2.5rem;\r\n    --fs-600: 1.2rem;\r\n    --fs-500: 0.8rem;\r\n    --fs-400: 0.9rem;\r\n    --fs-200: 0.5rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 550px) {\r\n  :root {\r\n    --fs-800: 2.1rem;\r\n    --fs-600: 0.9rem;\r\n    --fs-500: 0.6rem;\r\n    --fs-400: 0.7rem;\r\n    --fs-200: 0.4rem;\r\n  }\r\n  .search-weather-input {\r\n    width: 140px;\r\n  }\r\n  .search-weather-button img {\r\n    height: 1em;\r\n  }\r\n  .temp-toggle label {\r\n    height: 1.5rem;\r\n    width: 4rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .weather-details {\r\n    flex-direction: column;\r\n    gap: 5rem;\r\n  }\r\n  .weather-details div {\r\n    align-self: center;\r\n  }\r\n  header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n  }\r\n  .search-weather-section,\r\n  .search-weather-section div {\r\n    float: none;\r\n  }\r\n  .search-weather-section {\r\n    align-self: center;\r\n  }\r\n  .error {\r\n    position: absolute;\r\n    right: 47%;\r\n    top: 30%;\r\n  }\r\n}\r\n\r\n@media (max-height: 580px) {\r\n  .weather-secondary {\r\n    gap: 0.2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderUI)
/* harmony export */ });
function renderUI(data) {
  const { current } = data;
  const { forecast } = data;
  const { location } = data;

  renderTempIn(current);

  const cityNamePara = document.getElementById('city-name');
  const dataTimePara = document.getElementById('date-time');

  cityNamePara.textContent = `${location.name},${location.country}`;
  dataTimePara.textContent = current.last_updated;

  const iconSpan = document.getElementById('icon');

  iconSpan.innerHTML = `<img src='${current.condition.icon}'></img>`;

  const weatherInTextPara = document.getElementById('weather-in-text');

  weatherInTextPara.textContent = current.condition.text;

  const windValue = document.getElementById('wind-value');
  windValue.textContent = `${current.wind_mph}m/h`;

  const humidityValue = document.getElementById('humidity-value');
  humidityValue.textContent = `${current.humidity}%`;

  const uvIndexValue = document.getElementById('uv-index-value');
  uvIndexValue.textContent = current.uv;

  const visibilityValue = document.getElementById('visibility-value');
  visibilityValue.textContent = `${current.vis_km}km`;

  const cloudiness = document.getElementById('cloudiness-value');
  cloudiness.textContent = `${current.cloud}%`;

  const chanceOfRain = document.getElementById('chance-of-rain-value');
  chanceOfRain.textContent = `${forecast.forecastday[0].day.daily_chance_of_rain}%`;

  const sunrise = document.getElementById('sunrise-value');
  sunrise.textContent = forecast.forecastday[0].astro.sunrise;

  const sunset = document.getElementById('sunset-value');
  sunset.textContent = forecast.forecastday[0].astro.sunset;

  const moonState = document.getElementById('moon-state-value');
  moonState.textContent = forecast.forecastday[0].astro.moon_phase;
}

function renderTempIn(current) {
  let selected = document.querySelector('input[name="temp-in"]:checked');
  const temperatureSpan = document.getElementById('temperature');
  const temperatureFeelsLikePara = document.getElementById(
    'temperature-feelslike'
  );

  // initial rendering

  temperatureSpan.textContent = `${current[selected.dataset.temp]}${
    selected.value
  }`;
  temperatureFeelsLikePara.textContent = `Feels like ${
    current[selected.dataset.feelslike]
  }${selected.value}`;

  const tempIns = document.querySelectorAll('input[name="temp-in"]');

  tempIns.forEach((tempIn) => {
    tempIn.addEventListener('input', () => {
      selected = document.querySelector('input[name="temp-in"]:checked');
      temperatureSpan.textContent = `${current[selected.dataset.temp]}${
        selected.value
      }`;
      temperatureFeelsLikePara.textContent = `Feels like ${
        current[selected.dataset.feelslike]
      }${selected.value}`;
    });
  });
}


/***/ }),

/***/ "./src/Weather.js":
/*!************************!*\
  !*** ./src/Weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(name) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=df142d1a2f8c446f95c211531231708&q=${name}&days=7`,
      { mode: 'cors' }
    );

    if (response.status === 400) {
      return new Error('Location not found');
    }
    if (response.status !== 200) {
      return new Error('We are having some problem, Plese try agin later');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}


/***/ }),

/***/ "./src/assets/bg.jpg":
/*!***************************!*\
  !*** ./src/assets/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd4d3b8442fc7919c47e.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weather */ "./src/Weather.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");




const searchWeatherInput = document.getElementById('search-weather-input');
const searchWeatherButton = document.getElementById('search-weather-button');

function renderWeather(event) {
  if (event.type === 'keydown' && event.key !== 'Enter') return;

  const errorPara = document.getElementById('error');
  const main = document.querySelector('main');
  const loadingImg = document.getElementById('loading-img');
  loadingImg.style.display = 'block';
  main.style.display = 'none';

  (0,_Weather__WEBPACK_IMPORTED_MODULE_1__["default"])(searchWeatherInput.value).then((data) => {
    loadingImg.style.display = 'none';
    main.style.display = 'flex';
    errorPara.style.display = 'none';
    if (data instanceof Error) {
      errorPara.textContent = data.message;
      errorPara.style.display = 'block';
      main.style.display = 'none';
    } else {
      (0,_UI__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    }
  });
}

searchWeatherButton.addEventListener('click', renderWeather);
searchWeatherInput.addEventListener('keydown', renderWeather);

})();

/******/ })()
;
//# sourceMappingURL=main.12ea57e18b3ac78ff590.js.map