"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"2d03b8ea3175ea40\",\n        dynamic: [\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[900],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[900],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[600],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[600],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300],\n            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800]\n        ],\n        /*#__PURE__*/ children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif;\\nbackground-image:url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n.divLogin{background-color:\".concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700], \";\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:row;\\n-ms-flex-direction:row;\\nflex-direction:row;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-box-pack:justify;\\n-webkit-justify-content:space-between;\\njustify-content:space-between;\\nwidth:100%;\\nmax-width:700px;\\nborder-radius:5px;\\nheight:300px;\\npadding:auto;\\nmargin:auto;\\nbox-shadow:0 2px 10px 0 white}\\n.divLogin h2{margin-bottom:10px}\\n.divLogin form{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center;\\nwidth:300px;\\ntext-align:center;\\nmargin:auto}\\n.divLogin input{width:100%;\\nfont-size:20px;\\nmargin-bottom:10px}\\n.divLogin button{width:100%;\\npadding:5px;\\nfont-size:20px;\\nborder:none;\\nbackground:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[900], \"}\\n.divImg{-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\nmax-width:200px;\\nmargin:auto;\\nbackground-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800], \";\\nborder:1px solid;\\nborder-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999], \";\\nborder-radius:10px;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1;\\nmin-height:240px}\\n.divImg img{width:150px;\\nmargin:16px 10%;\\nborder-radius:50%}\\n.divImg span{font-size:18px;\\ncolor:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200], \";\\nmargin:5%}\\n.divChat{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center;\\nbackground-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500], \";\\nbackground-image:url(https:virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg);\\nbackground-repeat:no-repeat;\\nbackground-size:cover;\\nbackground-blend-mode:multiply;\\ncolor:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"], \"}\\n.divBackground{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1;\\nbox-shadow:'0 2px 10px 0 rgb(0 0 0 / 20%)';\\nborder-radius:5px;\\nbackground-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700], \";\\nheight:auto;\\nmax-width:95%;\\nmax-height:95vh;\\npadding:32px}\\n.divBackground header{width:100%;\\nmargin-bottom:16px;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-box-pack:justify;\\n-webkit-justify-content:space-between;\\njustify-content:space-between}\\n.divBackground header button{width:10%;\\npadding:5px;\\nfont-size:18px;\\nborder:none;\\nbackground:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[900], \"}\\n.divBoxChat{position:relative;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1;\\nheight:auto;\\nbackground-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[600], \";\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\nborder-radius:5px;\\npadding:16px}\\n.divBoxChat ul{background-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[600], \";\\nwidth:100%\\n              overflow: scroll;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column-reverse;\\n-ms-flex-direction:column-reverse;\\nflex-direction:column-reverse;\\n-webkit-align-items:top;\\n-webkit-box-align:top;\\n-ms-flex-align:top;\\nalign-items:top;\\n-webkit-box-pack:justify;\\n-webkit-justify-content:space-between;\\njustify-content:space-between;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1;\\ncolor:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999], \";\\nmargin-bottom:16px}\\n.divBoxChat ul li{padding:10px;\\nborder-radius:5px;\\npadding:6px;\\npadding-bottom:12px}\\n.divBoxChat ul li:hover{backgroundColor:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700], \"}\\n.divBoxChat ul li img{width:20px;\\nheight:20px;\\nborder-radius:50%;\\ndisplay:inline-block;\\nmargin-right:18px}\\n.divBoxChat ul li span{font-size:10px;\\nmargin-left:10px;\\ncolor:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300], \"}\\n.divBoxChat form{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\nwidth:100%}\\n.divBoxChat form textarea{background-color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800], \";\\nwidth:100%;\\nmargin-top:10px;\\npadding:\\n            }\")\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction CustomApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    console.log('Roda em todas as p\\xe1ginas!');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/_app.js\",\n                lineNumber: 210,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/_app.js\",\n                lineNumber: 211,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c1 = CustomApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"CustomApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FDN0JDLFdBQVcsR0FBRSxDQUFDO0lBQ25CLE1BQU0sK0RBQUM7OztZQTRCdUJELG9FQUFvQztZQXVDMUNBLG1FQUFvQztZQVE5QkEsb0VBQW9DO1lBRXhDQSxvRUFBb0M7WUFjM0NBLG9FQUFvQztZQVN6QkEsbUVBQW1DO1lBSzlDQSxzRUFBcUM7WUFTMUJBLG9FQUFvQztZQW9CMUNBLG1FQUFvQztZQVE5QkEsb0VBQW9DO1lBT3JDQSxvRUFBcUM7WUFRL0NBLG9FQUFxQztZQVkzQkEsb0VBQW9DO1lBYzlDQSxvRUFBb0M7WUFVekJBLG9FQUFvQzs7MmhCQTlIMUNBLE1BQXFDLENBdkMvQkEsb0VBQW9DLDRpQ0ErQ3BDQSxNQUFvQyxDQVIxQ0EsbUVBQW9DLHVLQVVsQ0EsTUFBb0MsQ0FGaENBLG9FQUFvQyx5Q0FnQi9DQSxNQUFvQyxDQWQ3QkEsb0VBQW9DLDRMQXVCaENBLE1BQW1DLENBVDlDQSxvRUFBb0MsZ1NBY3BDQSxNQUFzQyxDQUwzQkEsbUVBQW1DLG1OQWNuQ0EsTUFBb0MsQ0FUL0NBLHNFQUFxQyx1VEE2QmhDQSxNQUFxQyxDQXBCL0JBLG9FQUFvQywyZkE0QnBDQSxNQUFvQyxDQVIxQ0EsbUVBQW9DLGlNQWUvQkEsTUFBc0MsQ0FQckNBLG9FQUFvQyxnS0FlL0NBLE1BQXNDLENBUjVCQSxvRUFBcUMsNmRBb0JyQ0EsTUFBb0MsQ0FaOUNBLG9FQUFxQywrSkEwQnJDQSxNQUFvQyxDQWQxQkEsb0VBQW9DLDBMQXdCbkNBLE1BQW9DLENBVi9DQSxvRUFBb0MsZ1JBVXpCQSxvRUFBb0M7O0FBUXRFLENBQUM7S0ExTVFDLFdBQVc7QUE0TUgsUUFBUSxDQUFDSyxTQUFTLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ3REQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEyQjtJQUN2QyxNQUFNOzt3RkFFR1QsV0FBVzs7Ozs7d0ZBQ1hNLFNBQVMsb0JBQUtDLFNBQVM7Ozs7Ozs7QUFHbEMsQ0FBQztNQVJ1QkYsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2UgOiB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi8gXG4gICAgICAgICAgICBodG1sLCBib2R5LCAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dCA+ICoge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiAuL0FwcCBmaXQgSGVpZ2h0ICovXG5cbiAgICAgICAgICAgIC8qIGFycXVpdm8gaW5kZXggKi9cbiAgICAgICAgICAgIC5kaXZMb2dpbntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF19O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87IFxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCB3aGl0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZGl2TG9naW4gaDJ7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZGl2TG9naW4gZm9ybXtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmRpdkxvZ2luIGlucHV0e1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kaXZMb2dpbiBidXR0b257XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVsnOTAwJ119XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kaXZJbWd7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgLy9wYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXX07XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldfTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjQwcHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmRpdkltZyBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDE2cHggMTAlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZGl2SW1nIHNwYW57XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF19O1xuICAgICAgICAgICAgICBtYXJnaW46IDUlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qIGFycXVpdm8gY2hhdCAqL1xuICAgICAgICAgICAgLmRpdkNoYXR7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF19O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6dmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdkJhY2tncm91bmR7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKSc7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF19O1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzMnB4XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmRpdkJhY2tncm91bmQgaGVhZGVye1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kaXZCYWNrZ3JvdW5kIGhlYWRlciBidXR0b257XG4gICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5Wyc5MDAnXX1cbiAgICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgICAuZGl2Qm94Q2hhdHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdfTtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmRpdkJveENoYXQgdWx7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWyc2MDAnXX07XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCVcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogdG9wOyBcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiOTk5XCJdfTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweFxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIC5kaXZCb3hDaGF0IHVsIGxpe1xuICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZGl2Qm94Q2hhdCB1bCBsaTpob3ZlcntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kaXZCb3hDaGF0IHVsIGxpIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kaXZCb3hDaGF0IHVsIGxpIHNwYW57XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdkJveENoYXQgZm9ybXtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdkJveENoYXQgZm9ybSB0ZXh0YXJlYXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF19O1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICApXG59XG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21BcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc29sZS5sb2coJ1JvZGEgZW0gdG9kYXMgYXMgcMOhZ2luYXMhJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xuICB9Il0sIm5hbWVzIjpbImFwcENvbmZpZyIsIkdsb2JhbFN0eWxlIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsInByaW1hcnkiLCJDdXN0b21BcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});