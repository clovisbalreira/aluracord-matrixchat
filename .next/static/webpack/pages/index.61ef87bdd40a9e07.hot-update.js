"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//import { Box, Button, Text, TextField, Image } from '@skynexui/components';\n\n\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"e0b1720335304bc0\",\n        dynamic: [\n            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[999],\n            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[900]\n        ],\n        /*#__PURE__*/ children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif;\\nbackground-image:url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n.divLogin{background-color:\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700], \";\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:row;\\n-ms-flex-direction:row;\\nflex-direction:row;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-box-pack:justify;\\n-webkit-justify-content:space-between;\\njustify-content:space-between;\\nwidth:100%;\\nmax-width:700px;\\nborder-radius:5px;\\nheight:300px;\\npadding:auto;\\nmargin:auto;\\nbox-shadow:0 2px 10px 0 white}\\nform{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center;\\nwidth:300px;\\ntext-align:center;\\nmargin:auto}\\n.divImg{-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\nmax-width:200px;\\nmargin:auto;\\npadding:16px;\\nbackground-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800], \";\\nborder:1px solid;\\nborder-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[999], \";\\nborder-radius:10px;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1;\\nmin-height:240px}\\nh2{margin-bottom:10px}\\nimg{width:150px;\\nmargin-left:5%;\\nmargin-bottom:10px;\\nborder-radius:50%}\\nspan{font-size:18px;\\ncolor: \").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200], \",\\n              background-color: \").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900], \",\\n              padding: 3px 10px,\\n              border-radius: 1000px\\n            margin:auto}\\ninput{width:100%;\\nfont-size:20px;\\nmargin-bottom:10px}\\nbutton{width:100%;\\npadding:5px;\\nfont-size:20px;\\nborder:none;\\nbackground:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[900], \"}\")\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction Titulo(props) {\n    var Tag = props.tag || h1;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"755a400356173749\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[100]\n                        ]\n                    ]\n                ]),\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"755a400356173749\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[100]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[100], \";\\nfont-size:24px;\\nfont-weight:600;\\nmargin-bottom:10px}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Titulo;\nfunction HomePage() {\n    _s();\n    //const username = 'clovisbalreira';\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('clovisbalreira'), username = ref[0], setUserName = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                lineNumber: 125,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divLogin\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        on: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h1\",\n                                children: \"Bem Vindo de Volta\"\n                            }, void 0, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                                lineNumber: 128,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Discord - Alura Matrix\"\n                            }, void 0, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: username,\n                                onChange: function onChange(event) {\n                                    console.log(event);\n                                    var valor = event.target.value;\n                                    setUserName(valor);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                                lineNumber: 130,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Enviar\"\n                            }, void 0, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                                lineNumber: 139,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"divImg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://github.com/\".concat(username, \".png\")\n                            }, void 0, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                                lineNumber: 142,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                lineNumber: 126,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(HomePage, \"SqK1RxL5kP3bnI6vzWnl4CCrNIg=\");\n_c2 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Titulo\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQTZFO0FBQzdDO0FBQ007O1NBRTdCRSxXQUFXLEdBQUUsQ0FBQztJQUNuQixNQUFNLCtEQUFDOzs7WUEwQnVCRCxvRUFBb0M7WUE2QnBDQSxvRUFBb0M7WUFFeENBLG9FQUFvQztZQWdCM0NBLG9FQUFvQztZQUN6QkEsb0VBQW9DO1lBZTFDQSxtRUFBb0M7OzJoQkFsQzlCQSxNQUFvQyxDQTdCcENBLG9FQUFvQyxvaENBK0J4Q0EsTUFBb0MsQ0FGaENBLG9FQUFvQyx5Q0FrQi9DQSxNQUFvQyxDQWhCN0JBLG9FQUFvQyx5TkFpQmhDQSxNQUFvQyxDQUQvQ0Esb0VBQW9DLHlDQWdCL0JBLE1BQXFDLENBZi9CQSxvRUFBb0Msc1BBZTFDQSxtRUFBb0M7O0FBS2hFLENBQUM7S0EvRlFDLFdBQVc7U0FpR1hLLE1BQU0sQ0FBQ0MsS0FBSyxFQUFDLENBQUM7SUFDbkIsR0FBSyxDQUFDQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsR0FBRyxJQUFJQyxFQUFFO0lBQzNCLE1BQU0sNkVBQUM7O3dGQUVFRixHQUFHOzs7Ozs0QkFFRUEsR0FBRzs0QkFDT1Isb0VBQW9DOzs7OzBCQUg5Q08sS0FBSyxDQUFDSSxRQUFROzs7Ozs7Ozs7b0JBRWRILEdBQUc7b0JBQ09SLG9FQUFvQzs7NkJBQXBDQSxNQUFvQyxDQUQ5Q1EsR0FBRyxpREFDT1Isb0VBQW9DOzs7O0FBU2hFLENBQUM7TUFoQlFNLE1BQU07U0FrQk5NLFFBQVEsR0FBRSxDQUFDOztJQUNoQixFQUFvQztJQUNwQyxHQUFLLENBQTJCYixHQUEwQixHQUExQkEsK0NBQVEsQ0FBQyxDQUFnQixrQkFBbERjLFFBQVEsR0FBaUJkLEdBQTBCLEtBQXpDZSxXQUFXLEdBQUlmLEdBQTBCO0lBQzFELE1BQU07O3dGQUVDRSxXQUFXOzs7Ozt3RkFDWGMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVU7O2dHQUN0QkMsQ0FBSTt3QkFBQ0MsRUFBRTs7d0dBQ0xaLE1BQU07Z0NBQUNHLEdBQUcsRUFBQyxDQUFJOzBDQUFDLENBQWtCOzs7Ozs7d0dBQ2xDVSxDQUFFOzBDQUFDLENBQXNCOzs7Ozs7d0dBQ3pCQyxDQUFLO2dDQUNKQyxJQUFJLEVBQUMsQ0FBTTtnQ0FDWEMsS0FBSyxFQUFFVCxRQUFRO2dDQUNmVSxRQUFRLEVBQUUsUUFBUSxDQUFsQkEsUUFBUSxDQUFZQyxLQUFLLEVBQUUsQ0FBQztvQ0FDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO29DQUNqQixHQUFLLENBQUNHLEtBQUssR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUNOLEtBQUs7b0NBQ2hDUixXQUFXLENBQUNhLEtBQUs7Z0NBQ25CLENBQUM7Ozs7Ozt3R0FFRkUsQ0FBTTswQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7Z0dBRWZkLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFROzt3R0FDcEJjLENBQUc7Z0NBQUNDLEdBQUcsRUFBRyxDQUFtQixxQkFBVyxNQUFJLENBQWJsQixRQUFRLEVBQUMsQ0FBSTs7Ozs7O3dHQUU1Q21CLENBQUk7MENBQUVuQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QixDQUFDO0dBN0JRRCxRQUFRO01BQVJBLFFBQVE7QUE4QmpCLCtEQUFlQSxRQUFRLEVBOEdwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nXG5cbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2UgOiB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi8gXG4gICAgICAgICAgICBodG1sLCBib2R5LCAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dCA+ICoge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiAuL0FwcCBmaXQgSGVpZ2h0ICovXG4gICAgICAgICAgICAuZGl2TG9naW57XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdfTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjMwMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiBhdXRvOyBcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgd2hpdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm17XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2SW1ne1xuICAgICAgICAgICAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIC8vZmxleERpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdfTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV19O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6MTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjUlO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXX0sXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdfSxcbiAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHgsXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweFxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHthcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbJzkwMCddfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKXtcbiAgICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgaDE7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRhZz57cHJvcHMuY2hpbGRyZW59PC9UYWc+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgJHtUYWd9IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzEwMF19O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpe1xuICAgIC8vY29uc3QgdXNlcm5hbWUgPSAnY2xvdmlzYmFscmVpcmEnO1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJ2Nsb3Zpc2JhbHJlaXJhJylcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxHbG9iYWxTdHlsZS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdkxvZ2luJz5cbiAgICAgICAgICAgIDxmb3JtIG9uPlxuICAgICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgxXCI+QmVtIFZpbmRvIGRlIFZvbHRhPC9UaXR1bG8+XG4gICAgICAgICAgICAgIDxoMj5EaXNjb3JkIC0gQWx1cmEgTWF0cml4PC9oMj5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICBzZXRVc2VyTmFtZSh2YWxvcilcbiAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SW1nXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9PlxuICAgICAgICAgICAgICA8L2ltZz5cbiAgICAgICAgICAgICAgPHNwYW4+e3VzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbi8qZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcbiAgY29uc3QgdXNlcm5hbWUgPSAncGVhcyc7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XG4gICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi8vKn1cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogJzUwJScgfSwgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMzJweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XG4gICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi8vKn1cblxuXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi8vKn1cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogJzI0MHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDEwcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovLyp9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59Ki8iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhcHBDb25maWciLCJHbG9iYWxTdHlsZSIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJwcmltYXJ5IiwiVGl0dWxvIiwicHJvcHMiLCJUYWciLCJ0YWciLCJoMSIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidmFsb3IiLCJ0YXJnZXQiLCJidXR0b24iLCJpbWciLCJzcmMiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});