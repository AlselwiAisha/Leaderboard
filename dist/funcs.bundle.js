/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/List.js":
/*!*****************************!*\
  !*** ./src/modules/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ScoreList {\r\n    constructor() {\r\n      this.list = [];\r\n    }\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreList);\n\n//# sourceURL=webpack://leaderboard/./src/modules/List.js?");

/***/ }),

/***/ "./src/modules/funcs.js":
/*!******************************!*\
  !*** ./src/modules/funcs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addScore: () => (/* binding */ addScore),\n/* harmony export */   refreshScores: () => (/* binding */ refreshScores)\n/* harmony export */ });\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.js */ \"./src/modules/score.js\");\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.js */ \"./src/modules/List.js\");\n\n\n\nconst scoreList = new _List_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AVdkzz5NAIgs0R81WwJw/scores/';\n\n//* ----------------Scores API-Fetch Function-----------//\nconst fetchScores = async () => {\n  const data = await fetch(url);\n  const json = await data.json();\n  return json.result;\n};\n\n// *----------------renderScore Function----------------//\nfunction renderScore(obj) {\n  const scoreEl = document.createElement('li');\n  scoreEl.classList.add('score-item');\n  scoreEl.setAttribute('value', obj.id);\n  scoreEl.innerHTML = `\n                <h3>${obj.user} : ${obj.score} </h3>\n           `;\n  document.querySelector('.list').appendChild(scoreEl);\n}\n\n// *-----------------Scores Refresh Function----------------//\nconst refreshScores = async () => {\n  scoreList.list = await fetchScores();\n  const list = document.querySelector('.list');\n  list.innerHTML = '';\n  scoreList.list.forEach((obj) => renderScore(obj));\n};\n\n// *------------------Score AddFunction---------------------//\nconst addScore = async () => {\n  const user = document.querySelector('#name').value;\n  const score = document.querySelector('#score').value;\n  if (user === '' || score === '' || score < 0) {\n    throw new Error('Please fill in all fields');\n  } else {\n    document.querySelector('#name').value = '';\n    document.querySelector('#score').value = '';\n\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify(new _score_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](user, score)),\n\n    });\n    // to refresh list\n    refreshScores();\n  }\n};\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/funcs.js?");

/***/ }),

/***/ "./src/modules/score.js":
/*!******************************!*\
  !*** ./src/modules/score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Score {\n  constructor(user, score) {\n    this.user = user;\n    this.score = score;\n  }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);\n\n//# sourceURL=webpack://leaderboard/./src/modules/score.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/funcs.js");
/******/ 	
/******/ })()
;