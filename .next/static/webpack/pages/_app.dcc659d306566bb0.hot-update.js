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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"e0b1720335304bc0\",\n        dynamic: [\n            appConfig.theme.colors.neutrals[700],\n            appConfig.theme.colors.neutrals[800],\n            appConfig.theme.colors.neutrals[999],\n            appConfig.theme.colors.neutrals[200],\n            appConfig.theme.colors.neutrals[900],\n            appConfig.theme.colors.primary['900']\n        ],\n        /*#__PURE__*/ children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif;\\nbackground-image:url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n.divLogin{background-color:\".concat(appConfig.theme.colors.neutrals[700], \";\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:row;\\n-ms-flex-direction:row;\\nflex-direction:row;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-box-pack:justify;\\n-webkit-justify-content:space-between;\\njustify-content:space-between;\\nwidth:100%;\\nmax-width:700px;\\nborder-radius:5px;\\nheight:300px;\\npadding:auto;\\nmargin:auto;\\nbox-shadow:0 2px 10px 0 white}\\nform{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center;\\nwidth:300px;\\ntext-align:center;\\nmargin:auto}\\n.divImg{-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\nmax-width:200px;\\nmargin:auto;\\npadding:16px;\\nbackground-color:\").concat(appConfig.theme.colors.neutrals[800], \";\\nborder:1px solid;\\nborder-color:\").concat(appConfig.theme.colors.neutrals[999], \";\\nborder-radius:10px;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1;\\nmin-height:240px}\\nh2{margin-bottom:10px}\\nimg{width:150px;\\nmargin-left:5%;\\nmargin-bottom:10px;\\nborder-radius:50%}\\nspan{font-size:18px;\\ncolor: \").concat(appConfig.theme.colors.neutrals[200], \",\\n              background-color: \").concat(appConfig.theme.colors.neutrals[900], \",\\n              padding: 3px 10px,\\n              border-radius: 1000px\\n            margin:auto}\\ninput{width:100%;\\nfont-size:20px;\\nmargin-bottom:10px}\\nbutton{width:100%;\\npadding:5px;\\nfont-size:20px;\\nborder:none;\\nbackground:\").concat(appConfig.theme.colors.primary['900'], \"}\")\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction CustomApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    console.log('Roda em todas as p\\xe1ginas!');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/_app.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/_app.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c1 = CustomApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"CustomApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUFTQSxXQUFXLEdBQUUsQ0FBQztJQUNuQixNQUFNLCtEQUFDOzs7WUEwQnVCQyxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBRztZQTZCbkNILFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHO1lBRXZDSCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBRztZQWdCMUNILFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHO1lBQ3hCSCxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBRztZQWV6Q0gsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLENBQUs7OzJoQkFsQzlCSixNQUFvQyxDQTdCcENBLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHLHFoQ0ErQnZDSCxNQUFvQyxDQUZoQ0EsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLEdBQUcsMENBa0I5Q0gsTUFBb0MsQ0FoQjdCQSxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBRywwTkFpQi9CSCxNQUFvQyxDQUQvQ0EsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLEdBQUcsMENBZ0I5QkgsTUFBcUMsQ0FmL0JBLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHLHVQQWV6Q0gsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLENBQUs7O0FBS2hFLENBQUM7S0EvRlFMLFdBQVc7QUFpR0gsUUFBUSxDQUFDTSxTQUFTLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ3REQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEyQjtJQUN2QyxNQUFNOzt3RkFFR1YsV0FBVzs7Ozs7d0ZBQ1hPLFNBQVMsb0JBQUtDLFNBQVM7Ozs7Ozs7QUFHbEMsQ0FBQztNQVJ1QkYsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gR2xvYmFsU3R5bGUoKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZykgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBBcHAgZml0IEhlaWdodCAqLyBcbiAgICAgICAgICAgIGh0bWwsIGJvZHksICNfX25leHQge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjX19uZXh0ID4gKiB7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi9cbiAgICAgICAgICAgIC5kaXZMb2dpbntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF19O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87IFxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCB3aGl0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybXtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXZJbWd7XG4gICAgICAgICAgICAgIC8vZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgLy9mbGV4RGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF19O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XX07XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NSU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdfSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF19LFxuICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweCxcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwMHB4XG4gICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVsnOTAwJ119XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgKVxufVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnNvbGUubG9nKCdSb2RhIGVtIHRvZGFzIGFzIHDDoWdpbmFzIScpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbiAgfSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImFwcENvbmZpZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJwcmltYXJ5IiwiQ3VzdG9tQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});