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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _component_titulo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/titulo */ \"./component/titulo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { Box, Button, Text, TextField, Image } from '@skynexui/components';\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HomePage() {\n    _s();\n    //const username = 'clovisbalreira';\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('clovisbalreira'), username = ref[0], setUserName = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divLogin\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function onSubmit(infosdoevento) {\n                        infosdoevento.preventDefault();\n                        roteamento.push('/chat');\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            tag: \"h1\",\n                            texto: \"Bem Vindo de Volta\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Discord - Alura Matrix\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: username,\n                            onChange: function onChange(event) {\n                                var valor = event.target.value;\n                                setUserName(valor);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divImg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://github.com/\".concat(username, \".png\")\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: username\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/index.js\",\n            lineNumber: 13,\n            columnNumber: 11\n        }, this)\n    }, void 0, false));\n}\n_s(HomePage, \"QFUlpLc4LCxiCDBOW9VzRxOkMhA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQTZFO0FBQzdDO0FBQ087QUFDRDtBQUNEOztTQUU1QkksUUFBUSxHQUFFLENBQUM7O0lBQ2hCLEVBQW9DO0lBQ3BDLEdBQUssQ0FBMkJKLEdBQTBCLEdBQTFCQSwrQ0FBUSxDQUFDLENBQWdCLGtCQUFsREssUUFBUSxHQUFpQkwsR0FBMEIsS0FBekNNLFdBQVcsR0FBSU4sR0FBMEI7SUFDMUQsR0FBSyxDQUFDTyxVQUFVLEdBQUdOLHNEQUFTO0lBQzVCLE1BQU07OEZBRUNPLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVU7OzRGQUN0QkMsQ0FBSTtvQkFBQ0MsUUFBUSxFQUFFLFFBQVEsQ0FBbEJBLFFBQVEsQ0FBWUMsYUFBYSxFQUFDLENBQUM7d0JBQ3ZDQSxhQUFhLENBQUNDLGNBQWM7d0JBQzVCTixVQUFVLENBQUNPLElBQUksQ0FBQyxDQUFPO29CQUN6QixDQUFDOztvR0FDRVgseURBQUc7NEJBQUNZLEdBQUcsRUFBQyxDQUFJOzRCQUFDQyxLQUFLLEVBQUMsQ0FBb0I7Ozs7OztvR0FDdkNDLENBQUU7c0NBQUMsQ0FBc0I7Ozs7OztvR0FDekJDLENBQUs7NEJBQ0pDLElBQUksRUFBQyxDQUFNOzRCQUNYQyxLQUFLLEVBQUVmLFFBQVE7NEJBQ2ZnQixRQUFRLEVBQUUsUUFBUSxDQUFsQkEsUUFBUSxDQUFZQyxLQUFLLEVBQUUsQ0FBQztnQ0FDMUIsR0FBSyxDQUFDQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDSixLQUFLO2dDQUM5QmQsV0FBVyxDQUFDaUIsS0FBSzs0QkFDckIsQ0FBQzs7Ozs7O29HQUVGRSxDQUFNO3NDQUFDLENBQU07Ozs7Ozs7Ozs7Ozs0RkFFZmpCLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFROztvR0FDcEJpQixDQUFHOzRCQUFDQyxHQUFHLEVBQUcsQ0FBbUIscUJBQVcsTUFBSSxDQUFidEIsUUFBUSxFQUFDLENBQUk7Ozs7OztvR0FFNUN1QixDQUFJO3NDQUFFdkIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QixDQUFDO0dBL0JRRCxRQUFROztRQUdNSCxrREFBUzs7O0tBSHZCRyxRQUFRO0FBZ0NqQiwrREFBZUEsUUFBUSxFQThHcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nXG5pbXBvcnQgVGl0IGZyb20gJy4uL2NvbXBvbmVudC90aXR1bG8nXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XG4gICAgLy9jb25zdCB1c2VybmFtZSA9ICdjbG92aXNiYWxyZWlyYSc7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnY2xvdmlzYmFscmVpcmEnKVxuICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZMb2dpbic+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZnVuY3Rpb24gKGluZm9zZG9ldmVudG8pe1xuICAgICAgICAgICAgICBpbmZvc2RvZXZlbnRvLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKCcvY2hhdCcpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPFRpdCB0YWc9XCJoMVwiIHRleHRvPVwiQmVtIFZpbmRvIGRlIFZvbHRhXCI+PC9UaXQ+XG4gICAgICAgICAgICAgIDxoMj5EaXNjb3JkIC0gQWx1cmEgTWF0cml4PC9oMj5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyTmFtZSh2YWxvcilcbiAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SW1nXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9PlxuICAgICAgICAgICAgICA8L2ltZz5cbiAgICAgICAgICAgICAgPHNwYW4+e3VzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbi8qZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcbiAgY29uc3QgdXNlcm5hbWUgPSAncGVhcyc7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XG4gICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi8vKn1cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogJzUwJScgfSwgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMzJweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XG4gICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi8vKn1cblxuXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi8vKn1cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogJzI0MHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDEwcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovLyp9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59Ki8iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhcHBDb25maWciLCJUaXQiLCJIb21lUGFnZSIsInVzZXJuYW1lIiwic2V0VXNlck5hbWUiLCJyb3RlYW1lbnRvIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5mb3Nkb2V2ZW50byIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRhZyIsInRleHRvIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsImJ1dHRvbiIsImltZyIsInNyYyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});