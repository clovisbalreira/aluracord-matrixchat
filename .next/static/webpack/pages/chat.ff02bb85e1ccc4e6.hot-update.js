"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/ButtonSendSticker.js":
/*!*********************************************!*\
  !*** ./src/components/ButtonSendSticker.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"divSticker\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                },\n                children: \"😋\"\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/src/components/ButtonSendSticker.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            //console.log(isOpen)\n            isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divIsOpen\",\n                onClick: function() {\n                    return setOpenState(true);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/src/components/ButtonSendSticker.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_2__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: function() {\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/src/components/ButtonSendSticker.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/src/components/ButtonSendSticker.js\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/src/components/ButtonSendSticker.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/src/components/ButtonSendSticker.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, this) : 'tttt'\n        ]\n    }, void 0, true, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/src/components/ButtonSendSticker.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNFOztBQUVsQyxTQUFTRyxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUN4QyxHQUFLLENBQTBCSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFuQ0ksTUFBTSxHQUFrQkosR0FBWSxLQUE1QkssWUFBWSxHQUFJTCxHQUFZO0lBRTNDLE1BQU0sNkVBQ0hNLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVk7O3dGQUN0QkMsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFLFFBQVE7b0JBQUZKLE1BQU0sQ0FBTkEsWUFBWSxFQUFFRCxNQUFNOzswQkFBRyxDQUFDOzs7Ozs7WUFFN0MsRUFBcUI7WUFDdkJBLE1BQU0sK0VBQ0hFLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXO2dCQUN4QkUsT0FBTyxFQUFFLFFBQVE7b0JBQUZKLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLElBQUk7OztnR0FFakNDLENBQUc7a0NBQUMsQ0FBUTs7Ozs7O2dHQUNaSSxDQUFFO2tDQUNBVCxzREFBc0IsQ0FBQyxRQUFRLENBQVBZLE9BQU87MENBQzlCLE1BQ1osQ0FBQyw4REFEWUMsQ0FBRTtnQ0FDREwsT0FBTyxFQUFFLFFBQ3pCLEdBRCtCLENBQUM7b0NBQ2QsRUFBRSxFQUFFTSxPQUFPLENBQUNaLEtBQUssQ0FBQ2EsY0FBYyxHQUFHLENBQUM7d0NBQ2xDYixLQUFLLENBQUNhLGNBQWMsQ0FBQ0gsT0FBTztvQ0FDOUIsQ0FBQztnQ0FDSCxDQUFDO3NIQUdBSSxDQUFHO29DQUFDQyxHQUFHLEVBQUVMLE9BQU87Ozs7OzsrQkFGWkEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFPakIsQ0FBTTs7Ozs7OztBQUdqQixDQUFDO0dBL0JlWCxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcz9lODRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uU2VuZFN0aWNrZXIocHJvcHMpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3BlblN0YXRlXSA9IHVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZTdGlja2VyJz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoIWlzT3Blbil9PvCfmIs8L2J1dHRvbj5cbiAgICAgICAge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coaXNPcGVuKVxuICAgICAgICBpc09wZW4gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdklzT3BlbidcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TdGF0ZSh0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgPGRpdj5TdGlja2VyczwvZGl2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHthcHBDb25maWcuc3RpY2tlcnMubWFwKChzdGlja2VyKSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKHByb3BzLm9uU3RpY2tlckNsaWNrKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblN0aWNrZXJDbGljayhzdGlja2VyKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGtleT17c3RpY2tlcn1cbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0aWNrZXJ9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTooJ3R0dHQnKX1cbiAgICA8L2Rpdj5cbiApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJCdXR0b25TZW5kU3RpY2tlciIsInByb3BzIiwiaXNPcGVuIiwic2V0T3BlblN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwic3RpY2tlcnMiLCJtYXAiLCJzdGlja2VyIiwibGkiLCJCb29sZWFuIiwib25TdGlja2VyQ2xpY2siLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});