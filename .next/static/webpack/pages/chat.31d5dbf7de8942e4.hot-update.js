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

/***/ "./component/formChat.js":
/*!*******************************!*\
  !*** ./component/formChat.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction FormChat(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n            cols: \"30\",\n            rows: \"10\",\n            placeholder: \"Insira sua mensagem aqui...\",\n            value: props.mensagem,\n            onChange: function(event) {\n                var valor = event.target.value;\n                setMensagem(valor);\n            },\n            onKeyPress: function(event) {\n                if (event.key === 'Enter') {\n                    event.preventDefault();\n                    handleNovaMensagem(promensagem);\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/component/formChat.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/component/formChat.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this));\n};\n_c = FormChat;\nvar _c;\n$RefreshReg$(_c, \"FormChat\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvZm9ybUNoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZSxRQUFRLENBQUNBLFFBQVEsQ0FBQ0MsS0FBSyxFQUFDLENBQUM7SUFDcEMsTUFBTSw2RUFDREMsQ0FBSTs4RkFDQUMsQ0FBUTtZQUFDQyxJQUFJLEVBQUMsQ0FBSTtZQUFDQyxJQUFJLEVBQUMsQ0FBSTtZQUM3QkMsV0FBVyxFQUFDLENBQTZCO1lBQ3pDQyxLQUFLLEVBQUVOLEtBQUssQ0FBQ08sUUFBUTtZQUNyQkMsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSztnQkFDaENNLFdBQVcsQ0FBQ0YsS0FBSztZQUNyQixDQUFDO1lBQ0RHLFVBQVUsRUFBRSxRQUFRLENBQVBKLEtBQUssRUFBSyxDQUFDO2dCQUNwQixFQUFFLEVBQUVBLEtBQUssQ0FBQ0ssR0FBRyxLQUFLLENBQU8sUUFBRSxDQUFDO29CQUN4QkwsS0FBSyxDQUFDTSxjQUFjO29CQUNwQkMsa0JBQWtCLENBQUNDLFdBQVc7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDOzs7Ozs7Ozs7OztBQUliLENBQUM7S0FuQnVCbEIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvZm9ybUNoYXQuanM/ZGQzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtQ2hhdChwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLm1lbnNhZ2VtfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbG9yKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vdmFNZW5zYWdlbShwcm9tZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJGb3JtQ2hhdCIsInByb3BzIiwiZm9ybSIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwibWVuc2FnZW0iLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJzZXRNZW5zYWdlbSIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZU5vdmFNZW5zYWdlbSIsInByb21lbnNhZ2VtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/formChat.js\n");

/***/ })

});