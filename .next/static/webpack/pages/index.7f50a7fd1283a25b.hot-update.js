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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _component_titulo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/titulo */ \"./component/titulo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//import { Box, Button, Text, TextField, Image } from '@skynexui/components';\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Titulo(props) {\n    var Tag = props.tag || h1;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"755a400356173749\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"755a400356173749\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100], \";\\nfont-size:24px;\\nfont-weight:600;\\nmargin-bottom:10px}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\nfunction HomePage() {\n    _s();\n    //const username = 'clovisbalreira';\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('clovisbalreira'), username = ref[0], setUserName = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divLogin\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function onSubmit(infosdoevento) {\n                        infosdoevento.preventDefault();\n                        roteamento.push('/chat');\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_titulo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                            tag: \"h1\",\n                            children: \"Bem Vindo de Volta\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Discord - Alura Matrix\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: username,\n                            onChange: function onChange(event) {\n                                var valor = event.target.value;\n                                setUserName(valor);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divImg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://github.com/\".concat(username, \".png\")\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: username\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 11\n        }, this)\n    }, void 0, false));\n}\n_s(HomePage, \"QFUlpLc4LCxiCDBOW9VzRxOkMhA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEVBQTZFO0FBQzdDO0FBQ087QUFDRDtBQUNEOztTQUU1QkksTUFBTSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUNuQixHQUFLLENBQUNDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxHQUFHLElBQUlDLEVBQUU7SUFDM0IsTUFBTSw2RUFBQzs7d0ZBRUVGLEdBQUc7Ozs7OzRCQUVFQSxHQUFHOzRCQUNPSixvRUFBb0M7Ozs7d0NBSDlDRyxLQUFLLENBQUNPLFFBQVE7Ozs7Ozs7OztvQkFFZE4sR0FBRztvQkFDT0osb0VBQW9DOzs2QkFBcENBLE1BQW9DLENBRDlDSSxHQUFHLGlEQUNPSixvRUFBb0M7Ozs7QUFTaEUsQ0FBQztLQWhCUUUsTUFBTTtTQWtCTlMsUUFBUSxHQUFFLENBQUM7O0lBQ2hCLEVBQW9DO0lBQ3BDLEdBQUssQ0FBMkJiLEdBQTBCLEdBQTFCQSwrQ0FBUSxDQUFDLENBQWdCLGtCQUFsRGMsUUFBUSxHQUFpQmQsR0FBMEIsS0FBekNlLFdBQVcsR0FBSWYsR0FBMEI7SUFDMUQsR0FBSyxDQUFDZ0IsVUFBVSxHQUFHZixzREFBUztJQUM1QixNQUFNOzhGQUVDZ0IsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVTs7NEZBQ3RCQyxDQUFJO29CQUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFsQkEsUUFBUSxDQUFZQyxhQUFhLEVBQUMsQ0FBQzt3QkFDdkNBLGFBQWEsQ0FBQ0MsY0FBYzt3QkFDNUJOLFVBQVUsQ0FBQ08sSUFBSSxDQUFDLENBQU87b0JBQ3pCLENBQUM7O29HQUNFcEIseURBQUc7Ozs7O29HQUNIQyxNQUFNOzRCQUFDRyxHQUFHLEVBQUMsQ0FBSTtzQ0FBQyxDQUFrQjs7Ozs7O29HQUNsQ2lCLENBQUU7c0NBQUMsQ0FBc0I7Ozs7OztvR0FDekJDLENBQUs7NEJBQ0pDLElBQUksRUFBQyxDQUFNOzRCQUNYQyxLQUFLLEVBQUViLFFBQVE7NEJBQ2ZjLFFBQVEsRUFBRSxRQUFRLENBQWxCQSxRQUFRLENBQVlDLEtBQUssRUFBRSxDQUFDO2dDQUMxQixHQUFLLENBQUNDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNKLEtBQUs7Z0NBQ2hDWixXQUFXLENBQUNlLEtBQUs7NEJBQ25CLENBQUM7Ozs7OztvR0FFRkUsQ0FBTTtzQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7NEZBRWZmLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFROztvR0FDcEJlLENBQUc7NEJBQUNDLEdBQUcsRUFBRyxDQUFtQixxQkFBVyxNQUFJLENBQWJwQixRQUFRLEVBQUMsQ0FBSTs7Ozs7O29HQUU1Q3FCLENBQUk7c0NBQUVyQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7R0FoQ1FELFFBQVE7O1FBR01aLGtEQUFTOzs7TUFIdkJZLFFBQVE7QUFpQ2pCLCtEQUFlQSxRQUFRLEVBOEdwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcbmltcG9ydCBUaXQgZnJvbSAnLi4vY29tcG9uZW50L3RpdHVsbydcblxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKXtcbiAgICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgaDE7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRhZz57cHJvcHMuY2hpbGRyZW59PC9UYWc+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgJHtUYWd9IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzEwMF19O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpe1xuICAgIC8vY29uc3QgdXNlcm5hbWUgPSAnY2xvdmlzYmFscmVpcmEnO1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJ2Nsb3Zpc2JhbHJlaXJhJylcbiAgICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2TG9naW4nPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Z1bmN0aW9uIChpbmZvc2RvZXZlbnRvKXtcbiAgICAgICAgICAgICAgaW5mb3Nkb2V2ZW50by5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJvdGVhbWVudG8ucHVzaCgnL2NoYXQnKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxUaXQvPlxuICAgICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgxXCI+QmVtIFZpbmRvIGRlIFZvbHRhPC9UaXR1bG8+XG4gICAgICAgICAgICAgIDxoMj5EaXNjb3JkIC0gQWx1cmEgTWF0cml4PC9oMj5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgc2V0VXNlck5hbWUodmFsb3IpXG4gICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24+RW52aWFyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkltZ1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfT5cbiAgICAgICAgICAgICAgPC9pbWc+XG4gICAgICAgICAgICAgIDxzcGFuPnt1c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG4vKmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XG4gIGNvbnN0IHVzZXJuYW1lID0gJ3BlYXMnO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKScsXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xuICAgICAgICAgICAgICB4czogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIHNtOiAncm93JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzcwMHB4JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovLyp9XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXR1bG8+XG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxuICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xuICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovLyp9XG5cblxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovLyp9XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAwcHgnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VybmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqLy8qfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufSovIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXBwQ29uZmlnIiwiVGl0IiwiVGl0dWxvIiwicHJvcHMiLCJUYWciLCJ0YWciLCJoMSIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIkhvbWVQYWdlIiwidXNlcm5hbWUiLCJzZXRVc2VyTmFtZSIsInJvdGVhbWVudG8iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbmZvc2RvZXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsImJ1dHRvbiIsImltZyIsInNyYyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});