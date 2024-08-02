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

/***/ "./game/game.js":
/*!**********************!*\
  !*** ./game/game.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/script */ \"./game/modules/script.js\");\n\nnew _modules_script__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack://on-click-sticker-experience/./game/game.js?");

/***/ }),

/***/ "./game/modules/script.js":
/*!********************************!*\
  !*** ./game/modules/script.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameFunction)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar gameFunction = /*#__PURE__*/function () {\n  function gameFunction() {\n    _classCallCheck(this, gameFunction);\n    this.score = 0;\n    this.boxSize = 50; // Size of the box\n    this.initGame();\n    this.events();\n  }\n  return _createClass(gameFunction, [{\n    key: \"initGame\",\n    value: function initGame() {\n      // Create game container\n      this.gameContainer = document.createElement('div');\n      this.gameContainer.style.position = 'fixed';\n      this.gameContainer.style.top = '0px';\n      this.gameContainer.style.width = '100vw';\n      this.gameContainer.style.height = '100vh';\n      this.gameContainer.style.left = '0';\n      this.gameContainer.style.backgroundColor = 'blue';\n      this.gameContainer.style.zIndex = '9999';\n      this.gameContainer.style.overflow = 'hidden';\n      document.body.appendChild(this.gameContainer);\n\n      // Create instruction text\n      this.instructionText = document.createElement('div');\n      this.instructionText.style.position = 'absolute';\n      this.instructionText.style.top = '50%';\n      this.instructionText.style.left = '50%';\n      this.instructionText.style.transform = 'translate(-50%, -50%)';\n      this.instructionText.style.color = 'white';\n      this.instructionText.style.fontSize = '24px';\n      this.instructionText.style.textAlign = 'center';\n      this.instructionText.innerText = 'Click on the red box to score points!';\n      this.gameContainer.appendChild(this.instructionText);\n\n      // Create score display\n      this.scoreDisplay = document.createElement('div');\n      this.scoreDisplay.style.position = 'absolute';\n      this.scoreDisplay.style.top = '10px';\n      this.scoreDisplay.style.left = '10px';\n      this.scoreDisplay.style.fontSize = '24px';\n      this.scoreDisplay.style.color = 'white';\n      this.scoreDisplay.innerText = \"Score: \".concat(this.score);\n      this.gameContainer.appendChild(this.scoreDisplay);\n\n      // Create the box\n      this.box = document.createElement('div');\n      this.box.style.position = 'absolute';\n      this.box.style.width = \"\".concat(this.boxSize, \"px\");\n      this.box.style.height = \"\".concat(this.boxSize, \"px\");\n      this.box.style.backgroundColor = 'red';\n      this.box.style.cursor = 'pointer';\n      this.gameContainer.appendChild(this.box);\n\n      // Create close icon\n      this.closeIcon = document.createElement('div');\n      this.closeIcon.innerText = '×';\n      this.closeIcon.style.position = 'absolute';\n      this.closeIcon.style.top = '10px';\n      this.closeIcon.style.right = '10px';\n      this.closeIcon.style.fontSize = '24px';\n      this.closeIcon.style.color = 'white';\n      this.closeIcon.style.cursor = 'pointer';\n      this.gameContainer.appendChild(this.closeIcon);\n      this.randomizeBoxPosition();\n    }\n  }, {\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n      // Add click event to the box\n      this.box.addEventListener('click', function () {\n        _this.score++;\n        _this.scoreDisplay.innerText = \"Score: \".concat(_this.score);\n        _this.randomizeBoxPosition();\n      });\n\n      // Add click event to the close icon\n      this.closeIcon.addEventListener('click', function () {\n        document.body.removeChild(_this.gameContainer);\n      });\n    }\n  }, {\n    key: \"randomizeBoxPosition\",\n    value: function randomizeBoxPosition() {\n      var maxX = window.innerWidth - this.boxSize;\n      var maxY = window.innerHeight - this.boxSize;\n      var randomX = Math.floor(Math.random() * maxX);\n      var randomY = Math.floor(Math.random() * maxY);\n      this.box.style.left = \"\".concat(randomX, \"px\");\n      this.box.style.top = \"\".concat(randomY, \"px\");\n    }\n  }]);\n}(); // Initialize the game\n\nwindow.onload = function () {\n  new gameFunction();\n};\n\n//# sourceURL=webpack://on-click-sticker-experience/./game/modules/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./game/game.js");
/******/ 	
/******/ })()
;