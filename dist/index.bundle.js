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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton,\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\nheader {\r\n  padding: 20px;\r\n  background-color: #000;\r\n  border-bottom: 2px solid rgb(72, 170, 173);\r\n}\r\n\r\n.logo {\r\n  font-size: 26px;\r\n  font-weight: 900;\r\n  color: rgb(72, 170, 173);\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 70px;\r\n}\r\n\r\n.nav-links a {\r\n  color: rgb(72, 170, 173);\r\n  font-weight: 900;\r\n  font-size: 20px;\r\n  transition: font-size 0.5s;\r\n}\r\n\r\n.nav-links a:hover {\r\n  font-size: 21px;\r\n}\r\n\r\nmain {\r\n  background-image: url(\"https://dali.madrasthemes.com/elementor/wp-content/uploads/2022/09/bg.png\");\r\n  background-size: cover;\r\n  padding: 1% 5% 0 5%;\r\n}\r\n\r\n#homepage {\r\n  display: grid;\r\n  grid-template-columns: 25% 25% 25% 25%;\r\n  gap: 16px;\r\n  padding: 30px 90px;\r\n  text-align: center;\r\n}\r\n\r\n.popup_container {\r\n  background-color: #d3d3d3;\r\n  padding: 10px;\r\n  width: 53%;\r\n  z-index: 30;\r\n  margin: auto;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 94vh;\r\n  overflow-y: scroll;\r\n  border-radius: 12px;\r\n}\r\n\r\n.popup-inner {\r\n  width: 82%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.popup-inner h2,\r\n.popup-inner h3,\r\n.popup-inner h4 {\r\n  color: teal;\r\n}\r\n\r\n.comments_container {\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 2px solid teal;\r\n  border-radius: 8px;\r\n  max-height: 25vh;\r\n}\r\n\r\n.comments_container p {\r\n  padding: 5px 0 5px 5px;\r\n}\r\n\r\n.comments_container p:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.popup_container img {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n.popup_img {\r\n  width: 350px;\r\n  margin: auto;\r\n}\r\n\r\n.overlay {\r\n  background-color: blueviolet;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.close_button {\r\n  background-color: teal;\r\n  color: rgb(255, 255, 255);\r\n  border: none;\r\n  padding: 4px;\r\n  border-radius: 10px;\r\n  font-size: 20px;\r\n  float: right;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  border: 2px solid teal;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  padding: 8px;\r\n}\r\n\r\n.add-comment {\r\n  color: white;\r\n  background-color: teal;\r\n  border: 2px solid white;\r\n  font-size: 17px;\r\n  padding: 4px 12px;\r\n  border-radius: 4px;\r\n  margin: 0 auto;\r\n  width: 30%;\r\n  transition: background-color 1s, border 1s, color 1s, padding-left 1s,\r\n    padding-right 1s;\r\n}\r\n\r\n.add-comment:hover {\r\n  background-color: white;\r\n  border: 2px solid teal;\r\n  padding-right: 16px;\r\n  padding-left: 8px;\r\n  color: teal;\r\n}\r\n\r\n.movie {\r\n  padding: 4px;\r\n\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  display: flex;\r\n}\r\n\r\n.movie-info {\r\n  color: cornflowerblue;\r\n  padding: 10px 0;\r\n}\r\n\r\n.movie-image {\r\n  width: 100%;\r\n  border-radius: 15px;\r\n  transition: transform 0.7s;\r\n}\r\n\r\n.movie-image:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.movie-name {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.like-icon {\r\n  cursor: pointer;\r\n  width: max-content;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.like-icon:active {\r\n  color: red;\r\n}\r\n\r\nfooter {\r\n  padding: 20px;\r\n  background-color: #000;\r\n  color: rgb(72, 170, 173);\r\n  text-align: center;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n}\r\n\r\n.watch-button,\r\n.comment-button {\r\n  color: #fff;\r\n  padding: 5px 13px;\r\n  border: 2px solid #fff;\r\n  background-color: transparent;\r\n  font-size: 18px;\r\n  border-radius: 4px;\r\n  transition: padding-right 0.7s, padding-left 0.7s, border-color 0.7s,\r\n    color 0.7s;\r\n}\r\n\r\n.watch-button:hover,\r\n.comment-button:hover {\r\n  padding-right: 9px;\r\n  padding-left: 17px;\r\n  border-color: cornflowerblue;\r\n  color: cornflowerblue;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderMovies.js */ \"./src/modules/renderMovies.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_modules_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)();\r\n});\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiCollection.js":
/*!**************************************!*\
  !*** ./src/modules/apiCollection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   involvementApiKey: () => (/* binding */ involvementApiKey),\n/* harmony export */   involvementURL: () => (/* binding */ involvementURL),\n/* harmony export */   moviesURL: () => (/* binding */ moviesURL)\n/* harmony export */ });\nconst moviesURL = \"https://api.tvmaze.com/shows\";\r\n\r\nconst involvementURL =\r\n  \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\";\r\n\r\nconst involvementApiKey = \"KTd9w8KpncZIww7GFHXJ\";\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/apiCollection.js?");

/***/ }),

/***/ "./src/modules/commentsCount.js":
/*!**************************************!*\
  !*** ./src/modules/commentsCount.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsCount: () => (/* binding */ commentsCount)\n/* harmony export */ });\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n\r\nconst commentsCount = async (id) => {\r\n  const commentsCount = document.getElementById(\"commentsCount\");\r\n  (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(id).then((result) => {\r\n    if (!Array.isArray(result)) {\r\n      commentsCount.textContent = \"No comments available\";\r\n      return;\r\n    }\r\n    commentsCount.textContent = result.length;\r\n  });\r\n};\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/commentsCount.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayComments: () => (/* binding */ displayComments)\n/* harmony export */ });\n/* harmony import */ var _postComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComments.js */ \"./src/modules/postComments.js\");\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n/* harmony import */ var _commentsCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentsCount.js */ \"./src/modules/commentsCount.js\");\n\r\n\r\n\r\n\r\nconst popupContainer = document.querySelector(\"#popup-container\");\r\n\r\nconst displayComments = async (id) => {\r\n  const commentsContainer = document.getElementById(\"commentsContainer\");\r\n  commentsContainer.textContent = \"\";\r\n  (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.fetchComments)(id).then((result) => {\r\n    if (!Array.isArray(result)) {\r\n      return;\r\n    }\r\n    result.forEach((e) => {\r\n      const paragraph = document.createElement(\"p\");\r\n      paragraph.textContent = `(${e.creation_date}) ${e.username}: ${e.comment}`;\r\n      commentsContainer.appendChild(paragraph);\r\n    });\r\n  });\r\n};\r\n\r\npopupContainer.addEventListener(\"click\", async (event) => {\r\n  const userName = document.querySelector(\"#name\").value;\r\n  const userComment = document.querySelector(\"#movie_comments\").value;\r\n  if (event.target.classList.contains(\"add-comment\")) {\r\n    event.preventDefault();\r\n    await (0,_postComments_js__WEBPACK_IMPORTED_MODULE_0__.postComments)(event.target.id, userName, userComment);\r\n    await (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_1__.fetchComments)(event.target.id);\r\n    displayComments(event.target.id);\r\n    (0,_commentsCount_js__WEBPACK_IMPORTED_MODULE_2__.commentsCount)(event.target.id);\r\n    document.querySelector(\"#name\").value = \"\";\r\n    document.querySelector(\"#movie_comments\").value = \"\";\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayLikes: () => (/* binding */ displayLikes)\n/* harmony export */ });\n/* harmony import */ var _fetchLikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLikes */ \"./src/modules/fetchLikes.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n\r\n\r\n\r\nconst homepage = document.querySelector(\"#homepage\");\r\n\r\nconst displayLikes = async (movieID) => {\r\n  (0,_fetchLikes__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)().then((result) => {\r\n    const likesResult = result.find((item) => item.item_id === movieID);\r\n\r\n    let likesCount = 0;\r\n    if (likesResult) {\r\n      likesCount = likesResult.likes;\r\n    }\r\n    const likesHolder = document.getElementById(`likes-count-${movieID}`);\r\n    likesHolder.textContent = `${likesCount} Likes`;\r\n  });\r\n};\r\n\r\nconst handleLikeBtn = () => {\r\n  homepage.addEventListener(\"click\", async (event) => {\r\n    if (event.target.classList.contains(\"like-icon\")) {\r\n      const parentID = parseInt(event.target.parentElement.id, 10);\r\n      await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(parentID);\r\n      await displayLikes(parentID);\r\n    }\r\n  });\r\n};\r\n\r\nhandleLikeBtn();\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/displayLikes.js?");

/***/ }),

/***/ "./src/modules/fetchComment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\r\n\r\nconst commentURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/comments`;\r\n\r\nconst fetchComments = async (id) => {\r\n  const response = await fetch(`${commentURL}?item_id=${id}`);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/fetchComment.js?");

/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\r\n\r\nconst fetchData = async () => {\r\n  const response = await fetch(_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.moviesURL);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/fetchData.js?");

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\r\n\r\nconst likeURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/likes`;\r\n\r\nconst fetchLikes = async () => {\r\n  const response = await fetch(likeURL);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/fetchLikes.js?");

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   itemCount: () => (/* binding */ itemCount)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n\r\n\r\nconst itemCount = () => {\r\n  const items = document.getElementById(\"items\");\r\n  (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)().then((result) => {\r\n    items.textContent = result.length;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/itemCount.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showPopup: () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/displayComments.js\");\n/* harmony import */ var _commentsCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCount.js */ \"./src/modules/commentsCount.js\");\n\r\n\r\n\r\nconst popupContainer = document.querySelector(\"#popup-container\");\r\nconst overlay = document.getElementById(\"overlay\");\r\n\r\nconst closebuttonHandler = () => {\r\n  popupContainer.style.display = \"none\";\r\n};\r\n\r\nconst showPopup = (movie) => {\r\n  // Populate the popup with movie information\r\n  popupContainer.innerHTML = `<section class=\"popup_container\">\r\n    <button class=\"close_button\" id=\"close_popup\">&times;</button>\r\n      <div class=\"popup_img\">\r\n      <img src=\"${movie.image.medium}\" alt=\"movieImg\">\r\n      </div>\r\n      <div class=\"popup-inner\">\r\n        <h2 class=\"movieTitle\">${movie.name}</h2>\r\n        <article class=\"movieDescription\">${movie.summary}</article>\r\n        <h4>Comments:  (<span class=\"comments-count\" id=\"commentsCount\"></span>)</h4>\r\n      <div id=\"commentsContainer\" class=\"comments_container\">\r\n      </div>\r\n      <h3>Add comments</h3>\r\n      <form id=\"form\">\r\n        <input id=\"name\" type=\"text\" name=\"name\" placeholder=\"Your name\" required> <br>\r\n        <textarea name=\"comments\" id=\"movie_comments\" cols=\"15\" rows=\"5\" required placeholder=\"Your insights\"></textarea><br>\r\n        <button class=\"add-comment\" id=\"${movie.id}\">Add Comment</button>\r\n      </form>\r\n      </div>\r\n      \r\n    </section>`;\r\n  // Display the popup\r\n  popupContainer.style.display = \"block\";\r\n  overlay.style.display = \"block\";\r\n\r\n  const closeBtn = document.getElementById(\"close_popup\");\r\n  closeBtn.addEventListener(\"click\", closebuttonHandler);\r\n\r\n  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(movie.id);\r\n  (0,_commentsCount_js__WEBPACK_IMPORTED_MODULE_1__.commentsCount)(movie.id);\r\n  return popupContainer;\r\n};\r\n\r\n// close popup\r\ndocument.addEventListener(\"click\", (event) => {\r\n  if (event.target === popupContainer) {\r\n    popupContainer.style.display = \"none\";\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postComments.js":
/*!*************************************!*\
  !*** ./src/modules/postComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postComments: () => (/* binding */ postComments)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\r\n\r\nconst commentURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/comments`;\r\n\r\nconst postComments = async (ID, name, comment) => {\r\n  await fetch(commentURL, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: ID,\r\n      username: name,\r\n      comment: comment,\r\n    }),\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/postComments.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postLikes: () => (/* binding */ postLikes)\n/* harmony export */ });\n/* harmony import */ var _apiCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCollection.js */ \"./src/modules/apiCollection.js\");\n\r\n\r\nconst likeURL = `${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}${_apiCollection_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/likes`;\r\nconst postLikes = async (movieID) => {\r\n  await fetch(likeURL, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify({ item_id: movieID }),\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/modules/renderMovies.js":
/*!*************************************!*\
  !*** ./src/modules/renderMovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMovies: () => (/* binding */ renderMovies)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/modules/displayLikes.js\");\n/* harmony import */ var _itemCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemCount.js */ \"./src/modules/itemCount.js\");\n\r\n\r\n\r\n\r\n\r\nconst homepage = document.querySelector(\"#homepage\");\r\n\r\nconst renderMovies = async () => {\r\n  homepage.innerHTML = \"\";\r\n\r\n  try {\r\n    const movies = await (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)();\r\n\r\n    movies.forEach((movie) => {\r\n      homepage.innerHTML += `\r\n      <div class=\"movie\">\r\n        <img src=${movie.image.medium} class=\"movie-image\" alt=\"Movie Poster\">\r\n        <div class=\"movie-info\">\r\n          <h4 class=\"movie-name\">${movie.name}</h4>\r\n          <div id=\"${movie.id}\" class=\"movie-likes\">\r\n            <i class=\"fa fa-heart-o like-icon\" aria-hidden=\"true\"></i>\r\n            <p id=\"likes-count-${movie.id}\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"button-container\">\r\n          <a id=\"${movie.id}\" target=\"_blank\" href=${movie.url} class=\"watch-button\">Watch</a>\r\n          <button id=\"${movie.id}\" class=\"comment-button\">Comment</button>\r\n        </div>\r\n      </div>`;\r\n      (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_2__.displayLikes)(movie.id);\r\n      (0,_itemCount_js__WEBPACK_IMPORTED_MODULE_3__.itemCount)();\r\n    });\r\n\r\n    const commentButtons = document.querySelectorAll(\".comment-button\");\r\n    commentButtons.forEach((button) => {\r\n      button.addEventListener(\"click\", (event) => {\r\n        const movieId = event.target.id;\r\n        const movie = movies.find((m) => m.id == movieId);\r\n        (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.showPopup)(movie);\r\n      });\r\n    });\r\n  } catch (error) {\r\n    const message = document.getElementById(\"error_message\");\r\n    message.innerHTML = error;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/renderMovies.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);