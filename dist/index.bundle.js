"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nli {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\na {\n  cursor: pointer;\n}\n\nheader {\n  padding: 20px;\n  background-color: #000;\n  border-bottom: 2px solid rgb(72, 170, 173);\n}\n\n.logo {\n  font-size: 26px;\n  font-weight: 900;\n  color: rgb(72, 170, 173);\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 70px;\n}\n\n.nav-links a {\n  color: rgb(72, 170, 173);\n  font-weight: 900;\n  font-size: 20px;\n  transition: font-size 0.5s;\n}\n\n.nav-links a:hover {\n  font-size: 21px;\n}\n\nmain {\n  background-image: url(\"https://dali.madrasthemes.com/elementor/wp-content/uploads/2022/09/bg.png\");\n  background-size: cover;\n  padding: 1% 5% 0 5%;\n}\n\n#homepage {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  gap: 16px;\n  padding: 30px 90px;\n  text-align: center;\n}\n\n.popup_container {\n  background-color: #d3d3d3;\n  padding: 10px;\n  width: 53%;\n  z-index: 30;\n  margin: auto;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 94vh;\n  overflow-y: scroll;\n  border-radius: 12px;\n}\n\n.popup-inner {\n  width: 82%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.popup-inner h2,\n.popup-inner h3,\n.popup-inner h4 {\n  color: teal;\n}\n\n.comments_container {\n  width: 100%;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid teal;\n  border-radius: 8px;\n  max-height: 25vh;\n}\n\n.comments_container p {\n  padding: 5px 0 5px 5px;\n}\n\n.comments_container p:nth-child(odd) {\n  background-color: white;\n}\n\n.popup_container img {\n  display: inline-block;\n  width: 100%;\n}\n\n.popup_img {\n  width: 350px;\n  margin: auto;\n}\n\n.overlay {\n  background-color: blueviolet;\n  width: 100%;\n  height: 100%;\n}\n\n.close_button {\n  background-color: teal;\n  color: rgb(255, 255, 255);\n  border: none;\n  padding: 4px;\n  border-radius: 10px;\n  font-size: 20px;\n  float: right;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\ninput[type=\"text\"],\ntextarea {\n  border: 2px solid teal;\n  border-radius: 8px;\n  outline: none;\n  padding: 8px;\n}\n\n.add-comment {\n  color: white;\n  background-color: teal;\n  border: 2px solid white;\n  font-size: 17px;\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin: 0 auto;\n  width: 30%;\n  transition: background-color 1s, border 1s, color 1s, padding-left 1s,\n    padding-right 1s;\n}\n\n.add-comment:hover {\n  background-color: white;\n  border: 2px solid teal;\n  padding-right: 16px;\n  padding-left: 8px;\n  color: teal;\n}\n\n.movie {\n  padding: 4px;\n\n  justify-content: space-between;\n  flex-direction: column;\n  display: flex;\n}\n\n.movie-info {\n  color: cornflowerblue;\n  padding: 10px 0;\n}\n\n.movie-image {\n  width: 100%;\n  border-radius: 15px;\n  transition: transform 0.7s;\n}\n\n.movie-image:hover {\n  transform: scale(1.02);\n}\n\n.movie-name {\n  padding-bottom: 10px;\n}\n\n.like-icon {\n  cursor: pointer;\n  width: max-content;\n  margin-bottom: 10px;\n}\n\n.like-icon:active {\n  color: red;\n}\n\nfooter {\n  padding: 20px;\n  background-color: #000;\n  color: rgb(72, 170, 173);\n  text-align: center;\n}\n\n.footer-text {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\n.watch-button,\n.comment-button {\n  color: #fff;\n  padding: 5px 13px;\n  border: 2px solid #fff;\n  background-color: transparent;\n  font-size: 18px;\n  border-radius: 4px;\n  transition: padding-right 0.7s, padding-left 0.7s, border-color 0.7s,\n    color 0.7s;\n}\n\n.watch-button:hover,\n.comment-button:hover {\n  padding-right: 9px;\n  padding-left: 17px;\n  border-color: cornflowerblue;\n  color: cornflowerblue;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderMovies.js */ \"./src/modules/renderMovies.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_modules_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)();\n});\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiCollection.js":
/*!**************************************!*\
  !*** ./src/modules/apiCollection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   involvementApiKey: () => (/* binding */ involvementApiKey),\n/* harmony export */   involvementURL: () => (/* binding */ involvementURL),\n/* harmony export */   moviesURL: () => (/* binding */ moviesURL)\n/* harmony export */ });\nconst moviesURL = \"https://api.tvmaze.com/shows\";\n\nconst involvementURL =\n  \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\";\n\nconst involvementApiKey = \"KTd9w8KpncZIww7GFHXJ\";\n\n\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/apiCollection.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayComments: () => (/* binding */ displayComments)\n/* harmony export */ });\n/* harmony import */ var _postComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComments.js */ \"./src/modules/postComments.js\");\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n\n\n\nconst popupContainer = document.querySelector(\"#popup-container\");\n\nconst displayComments = async (id) => {\n  const commentsContainer = document.getElementById(\"commentsContainer\");\n  commentsContainer.textContent = \"\";\n  (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.fetchComments)(id).then((result) => {\n    if (!Array.isArray(result)) {\n      return;\n    }\n    result.forEach((e) => {\n      const paragraph = document.createElement(\"p\");\n      paragraph.textContent = `(${e.creation_date}) ${e.username}: ${e.comment}`;\n      commentsContainer.appendChild(paragraph);\n    });\n  });\n};\n\npopupContainer.addEventListener(\"click\", async (event) => {\n  const userName = document.querySelector(\"#name\").value;\n  const userComment = document.querySelector(\"#movie_comments\").value;\n  if (event.target.classList.contains(\"add-comment\")) {\n    event.preventDefault();\n    await (0,_postComments_js__WEBPACK_IMPORTED_MODULE_0__.postComments)(event.target.id, userName, userComment);\n    await (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.fetchComments)(event.target.id);\n    displayComments(event.target.id);\n    // commentCount(event.target.id);\n    document.querySelector(\"#name\").value = \"\";\n    document.querySelector(\"#movie_comments\").value = \"\";\n  }\n});\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayLikes: () => (/* binding */ displayLikes)\n/* harmony export */ });\n/* harmony import */ var _fetchLikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLikes */ \"./src/modules/fetchLikes.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n\n\n\nconst homepage = document.querySelector(\"#homepage\");\n\nconst displayLikes = async (movieID) => {\n  (0,_fetchLikes__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)().then((result) => {\n    const likesResult = result.find((item) => item.item_id === movieID);\n\n    let likesCount = 0;\n    if (likesResult) {\n      likesCount = likesResult.likes;\n    }\n    const likesHolder = document.getElementById(`likes-count-${movieID}`);\n    likesHolder.textContent = `${likesCount} Likes`;\n  });\n};\n\nconst handleLikeBtn = () => {\n  homepage.addEventListener(\"click\", async (event) => {\n    if (event.target.classList.contains(\"like-icon\")) {\n      const parentID = parseInt(event.target.parentElement.id, 10);\n      await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(parentID);\n      await displayLikes(parentID);\n    }\n  });\n};\n\nhandleLikeBtn();\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/displayLikes.js?");

/***/ }),

/***/ "./src/modules/fetchComment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\n\nconst commentURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/comments`;\n\nconst fetchComments = async (id) => {\n  const response = await fetch(`${commentURL}?item_id=${id}`);\n  const result = await response.json();\n  return result;\n};\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/fetchComment.js?");

/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\n\nconst fetchData = async () => {\n  const response = await fetch(_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.moviesURL);\n  const result = await response.json();\n  return result;\n};\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/fetchData.js?");

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\n\nconst likeURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/likes`;\n\nconst fetchLikes = async () => {\n  const response = await fetch(likeURL);\n  const result = await response.json();\n  return result;\n};\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/fetchLikes.js?");

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   itemCount: () => (/* binding */ itemCount)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n\n\nconst itemCount = () => {\n  const items = document.getElementById(\"items\");\n  (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)().then((result) => {\n    items.textContent = result.length;\n  });\n};\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/itemCount.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showPopup: () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _displayComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments */ \"./src/modules/displayComments.js\");\n\n\nconst popupContainer = document.querySelector(\"#popup-container\");\nconst overlay = document.getElementById(\"overlay\");\n\nconst closebuttonHandler = () => {\n  popupContainer.style.display = \"none\";\n};\n\nconst showPopup = (movie) => {\n  // Populate the popup with movie information\n  popupContainer.innerHTML = `<section class=\"popup_container\">\n    <button class=\"close_button\" id=\"close_popup\">&times;</button>\n      <div class=\"popup_img\">\n      <img src=\"${movie.image.medium}\" alt=\"movieImg\">\n      </div>\n      <div class=\"popup-inner\">\n        <h2 class=\"movieTitle\">${movie.name}</h2>\n        <article class=\"movieDescription\">${movie.summary}</article>\n        <h4>Comments:  (<span class=\"comments-count\" id=\"commentsCount\"></span>)</h4>\n      <div id=\"commentsContainer\" class=\"comments_container\">\n      </div>\n      <h3>Add comments</h3>\n      <form id=\"form\">\n        <input id=\"name\" type=\"text\" name=\"name\" placeholder=\"Your name\" required> <br>\n        <textarea name=\"comments\" id=\"movie_comments\" cols=\"15\" rows=\"5\" required placeholder=\"Your insights\"></textarea><br>\n        <button class=\"add-comment\" id=\"${movie.id}\">Add Comment</button>\n      </form>\n      </div>\n      \n    </section>`;\n  // Display the popup\n  popupContainer.style.display = \"block\";\n  overlay.style.display = \"block\";\n\n  const closeBtn = document.getElementById(\"close_popup\");\n  closeBtn.addEventListener(\"click\", closebuttonHandler);\n\n  (0,_displayComments__WEBPACK_IMPORTED_MODULE_0__.displayComments)(movie.id);\n  // commentCount(movie.id);\n  return popupContainer;\n};\n\n// close popup\ndocument.addEventListener(\"click\", (event) => {\n  if (event.target === popupContainer) {\n    popupContainer.style.display = \"none\";\n  }\n});\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postComments.js":
/*!*************************************!*\
  !*** ./src/modules/postComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postComments: () => (/* binding */ postComments)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\n\nconst commentURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/comments`;\n\nconst postComments = async (ID, name, comment) => {\n  await fetch(commentURL, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n    },\n    body: JSON.stringify({\n      item_id: ID,\n      username: name,\n      comment: comment,\n    }),\n  });\n};\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/postComments.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postLikes: () => (/* binding */ postLikes)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\n\nconst likeURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/likes`;\nconst postLikes = async (movieID) => {\n  await fetch(likeURL, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n    },\n    body: JSON.stringify({ item_id: movieID }),\n  });\n};\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/modules/renderMovies.js":
/*!*************************************!*\
  !*** ./src/modules/renderMovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMovies: () => (/* binding */ renderMovies)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/modules/displayLikes.js\");\n/* harmony import */ var _itemCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemCount.js */ \"./src/modules/itemCount.js\");\n\n\n\n\n\nconst homepage = document.querySelector(\"#homepage\");\n\nconst renderMovies = async () => {\n  homepage.innerHTML = \"\";\n\n  try {\n    const movies = await (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)();\n\n    movies.forEach((movie) => {\n      homepage.innerHTML += `\n      <div class=\"movie\">\n        <img src=${movie.image.medium} class=\"movie-image\" alt=\"Movie Poster\">\n        <div class=\"movie-info\">\n          <h4 class=\"movie-name\">${movie.name}</h4>\n          <div id=\"${movie.id}\" class=\"movie-likes\">\n            <i class=\"fa fa-heart-o like-icon\" aria-hidden=\"true\"></i>\n            <p id=\"likes-count-${movie.id}\"></p>\n          </div>\n        </div>\n        <div class=\"button-container\">\n          <a id=\"${movie.id}\" target=\"_blank\" href=${movie.url} class=\"watch-button\">Watch</a>\n          <button id=\"${movie.id}\" class=\"comment-button\">Comment</button>\n        </div>\n      </div>`;\n      (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_2__.displayLikes)(movie.id);\n      (0,_itemCount_js__WEBPACK_IMPORTED_MODULE_3__.itemCount)();\n    });\n\n    const commentButtons = document.querySelectorAll(\".comment-button\");\n    commentButtons.forEach((button) => {\n      button.addEventListener(\"click\", (event) => {\n        const movieId = event.target.id;\n        const movie = movies.find((m) => m.id == movieId);\n        (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.showPopup)(movie);\n      });\n    });\n  } catch (error) {\n    const message = document.getElementById(\"error_message\");\n    message.innerHTML = error;\n  }\n};\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/renderMovies.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);