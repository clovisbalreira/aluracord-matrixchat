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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _component_titulo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/titulo */ \"./component/titulo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//import { Box, Button, Text, TextField, Image } from '@skynexui/components';\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Titulo(props) {\n    var Tag = props.tag || h1;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"755a400356173749\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.texto\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"755a400356173749\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100]\n                        ]\n                    ]\n                ]),\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"755a400356173749\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100], \";\\nfont-size:24px;\\nfont-weight:600;\\nmargin-bottom:10px}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\nfunction HomePage() {\n    _s();\n    //const username = 'clovisbalreira';\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('clovisbalreira'), username = ref[0], setUserName = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divLogin\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function onSubmit(infosdoevento) {\n                        infosdoevento.preventDefault();\n                        roteamento.push('/chat');\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_titulo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            tag: \"h1\",\n                            texto: true\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                            tag: \"h1\",\n                            children: \"Bem Vindo de Volta\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Discord - Alura Matrix\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: username,\n                            onChange: function onChange(event) {\n                                var valor = event.target.value;\n                                setUserName(valor);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divImg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://github.com/\".concat(username, \".png\")\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: username\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n            lineNumber: 32,\n            columnNumber: 11\n        }, this)\n    }, void 0, false));\n}\n_s(HomePage, \"QFUlpLc4LCxiCDBOW9VzRxOkMhA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEVBQTZFO0FBQzdDO0FBQ087QUFDRDtBQUNEOztTQUU1QkksTUFBTSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUNuQixHQUFLLENBQUNDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxHQUFHLElBQUlDLEVBQUU7SUFDM0IsTUFBTSw2RUFBQzs7d0ZBRUVGLEdBQUc7Ozs7OzRCQUdFQSxHQUFHOzRCQUNPSixvRUFBb0M7Ozs7d0NBSjlDRyxLQUFLLENBQUNPLEtBQUs7Ozs7Ozt3RkFDaEJOLEdBQUc7Ozs7OzRCQUVFQSxHQUFHOzRCQUNPSixvRUFBb0M7Ozs7MEJBSDlDRyxLQUFLLENBQUNRLFFBQVE7Ozs7Ozs7OztvQkFFZFAsR0FBRztvQkFDT0osb0VBQW9DOzs2QkFBcENBLE1BQW9DLENBRDlDSSxHQUFHLGlEQUNPSixvRUFBb0M7Ozs7QUFTaEUsQ0FBQztLQWpCUUUsTUFBTTtTQW1CTlUsUUFBUSxHQUFFLENBQUM7O0lBQ2hCLEVBQW9DO0lBQ3BDLEdBQUssQ0FBMkJkLEdBQTBCLEdBQTFCQSwrQ0FBUSxDQUFDLENBQWdCLGtCQUFsRGUsUUFBUSxHQUFpQmYsR0FBMEIsS0FBekNnQixXQUFXLEdBQUloQixHQUEwQjtJQUMxRCxHQUFLLENBQUNpQixVQUFVLEdBQUdoQixzREFBUztJQUM1QixNQUFNOzhGQUVDaUIsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVTs7NEZBQ3RCQyxDQUFJO29CQUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFsQkEsUUFBUSxDQUFZQyxhQUFhLEVBQUMsQ0FBQzt3QkFDdkNBLGFBQWEsQ0FBQ0MsY0FBYzt3QkFDNUJOLFVBQVUsQ0FBQ08sSUFBSSxDQUFDLENBQU87b0JBQ3pCLENBQUM7O29HQUNFckIseURBQUc7NEJBQUNJLEdBQUcsRUFBQyxDQUFJOzRCQUFDSyxLQUFLOzs7Ozs7b0dBQ2xCUixNQUFNOzRCQUFDRyxHQUFHLEVBQUMsQ0FBSTtzQ0FBQyxDQUFrQjs7Ozs7O29HQUNsQ2tCLENBQUU7c0NBQUMsQ0FBc0I7Ozs7OztvR0FDekJDLENBQUs7NEJBQ0pDLElBQUksRUFBQyxDQUFNOzRCQUNYQyxLQUFLLEVBQUViLFFBQVE7NEJBQ2ZjLFFBQVEsRUFBRSxRQUFRLENBQWxCQSxRQUFRLENBQVlDLEtBQUssRUFBRSxDQUFDO2dDQUMxQixHQUFLLENBQUNDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNKLEtBQUs7Z0NBQ2hDWixXQUFXLENBQUNlLEtBQUs7NEJBQ25CLENBQUM7Ozs7OztvR0FFRkUsQ0FBTTtzQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7NEZBRWZmLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFROztvR0FDcEJlLENBQUc7NEJBQUNDLEdBQUcsRUFBRyxDQUFtQixxQkFBVyxNQUFJLENBQWJwQixRQUFRLEVBQUMsQ0FBSTs7Ozs7O29HQUU1Q3FCLENBQUk7c0NBQUVyQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7R0FoQ1FELFFBQVE7O1FBR01iLGtEQUFTOzs7TUFIdkJhLFFBQVE7QUFpQ2pCLCtEQUFlQSxRQUFRLEVBOEdwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcbmltcG9ydCBUaXQgZnJvbSAnLi4vY29tcG9uZW50L3RpdHVsbydcblxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKXtcbiAgICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgaDE7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRhZz57cHJvcHMudGV4dG99PC9UYWc+XG4gICAgICAgICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAke1RhZ30ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjoke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMTAwXX07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XG4gICAgLy9jb25zdCB1c2VybmFtZSA9ICdjbG92aXNiYWxyZWlyYSc7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnY2xvdmlzYmFscmVpcmEnKVxuICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZMb2dpbic+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZnVuY3Rpb24gKGluZm9zZG9ldmVudG8pe1xuICAgICAgICAgICAgICBpbmZvc2RvZXZlbnRvLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKCcvY2hhdCcpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPFRpdCB0YWc9XCJoMVwiIHRleHRvLz5cbiAgICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMVwiPkJlbSBWaW5kbyBkZSBWb2x0YTwvVGl0dWxvPlxuICAgICAgICAgICAgICA8aDI+RGlzY29yZCAtIEFsdXJhIE1hdHJpeDwvaDI+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJOYW1lKHZhbG9yKVxuICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uPkVudmlhcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZJbWdcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH0+XG4gICAgICAgICAgICAgIDwvaW1nPlxuICAgICAgICAgICAgICA8c3Bhbj57dXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcblxuLypleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xuICBjb25zdCB1c2VybmFtZSA9ICdwZWFzJztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZyknLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcbiAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBzbTogJ3JvdycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqLy8qfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvZHkzXCIgc3R5bGVTaGVldD17eyBtYXJnaW5Cb3R0b206ICczMnB4JywgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSB9fT5cbiAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcbiAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcbiAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqLy8qfVxuXG5cbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqLy8qfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwMHB4J1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlcm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi8vKn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn0qLyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImFwcENvbmZpZyIsIlRpdCIsIlRpdHVsbyIsInByb3BzIiwiVGFnIiwidGFnIiwiaDEiLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwidGV4dG8iLCJjaGlsZHJlbiIsIkhvbWVQYWdlIiwidXNlcm5hbWUiLCJzZXRVc2VyTmFtZSIsInJvdGVhbWVudG8iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbmZvc2RvZXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsImJ1dHRvbiIsImltZyIsInNyYyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});