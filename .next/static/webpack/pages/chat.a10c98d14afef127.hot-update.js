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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction FormChat() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n            cols: \"30\",\n            rows: \"10\",\n            placeholder: \"Insira sua mensagem aqui...\",\n            value: mensagem,\n            onChange: function(event) {\n                var valor = event.target.value;\n                setMensagem(valor);\n            },\n            onKeyPress: function(event) {\n                if (event.key === 'Enter') {\n                    event.preventDefault();\n                    handleNovaMensagem(mensagem);\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/component/formChat.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/component/formChat.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this));\n};\n_c = FormChat;\nvar _c;\n$RefreshReg$(_c, \"FormChat\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvZm9ybUNoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZSxRQUFRLENBQUNBLFFBQVEsR0FBRSxDQUFDO0lBQy9CLE1BQU0sNkVBQ0RDLENBQUk7OEZBQ0FDLENBQVE7WUFBQ0MsSUFBSSxFQUFDLENBQUk7WUFBQ0MsSUFBSSxFQUFDLENBQUk7WUFDN0JDLFdBQVcsRUFBQyxDQUE2QjtZQUN6Q0MsS0FBSyxFQUFFQyxRQUFRO1lBQ2ZDLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO2dCQUNsQixHQUFLLENBQUNDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNMLEtBQUs7Z0JBQ2hDTSxXQUFXLENBQUNGLEtBQUs7WUFDckIsQ0FBQztZQUNERyxVQUFVLEVBQUUsUUFBUSxDQUFQSixLQUFLLEVBQUssQ0FBQztnQkFDcEIsRUFBRSxFQUFFQSxLQUFLLENBQUNLLEdBQUcsS0FBSyxDQUFPLFFBQUUsQ0FBQztvQkFDeEJMLEtBQUssQ0FBQ00sY0FBYztvQkFDcEJDLGtCQUFrQixDQUFDVCxRQUFRO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7QUFJYixDQUFDO0tBbkJ1QlAsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvZm9ybUNoYXQuanM/ZGQzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtQ2hhdCgpe1xuICAgIHJldHVybihcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcbiAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWxvcik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn0iXSwibmFtZXMiOlsiRm9ybUNoYXQiLCJmb3JtIiwidGV4dGFyZWEiLCJjb2xzIiwicm93cyIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJtZW5zYWdlbSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsInNldE1lbnNhZ2VtIiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTm92YU1lbnNhZ2VtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/formChat.js\n");

/***/ }),

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/header */ \"./component/header.js\");\n/* harmony import */ var _component_MensageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/MensageList */ \"./component/MensageList.js\");\n/* harmony import */ var _component_formChat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/formChat */ \"./component/formChat.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { Box, Text, TextField, Image, Button } from '@skynexui/components';\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPA_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTQ4NiwiZXhwIjoxOTU4ODY3NDg2fQ.syv0toAzewa8x6wVZjWnYEUYLChZy_HNonqBcyS-jAk';\nvar SUPA_BASE_URL = 'https://aapvkigidfqjkcipibdj.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(SUPA_BASE_URL, SUPA_BASE_KEY);\nfunction ChatPage() {\n    var selectSupaBase = function selectSupaBase() {\n        supabaseClient.from('mensagem').select('*').order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            setListaDeMensagens(data);\n            console.log(\"dados\", data);\n        });\n    };\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            //id: listaDeMensagens.length + 1,\n            de: 'clovisbalreira',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagem').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log(data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        selectSupaBase();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"divChat\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divBoxBackground\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    roteamento: roteamento\n                }, void 0, false, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divBoxChat\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MensageList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_formChat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"CVV8hKKF3YBkaaFOv0p7TfG+vm0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2RTtBQUMzQjtBQUNFO0FBQ2I7QUFDQztBQUNVO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxHQUFLLENBQUNRLGFBQWEsR0FBRyxDQUFxSjtBQUUzSyxHQUFLLENBQUNDLGFBQWEsR0FBRyxDQUEwQztBQUVoRSxHQUFLLENBQUNDLGNBQWMsR0FBR1AsbUVBQVksQ0FBQ00sYUFBYSxFQUFDRCxhQUFhO0FBRWhELFFBQVEsQ0FBQ0csUUFBUSxHQUFHLENBQUM7UUFLdkJDLGNBQWMsR0FBdkIsUUFBUSxDQUFDQSxjQUFjLEdBQUUsQ0FBQztRQUN0QkYsY0FBYyxDQUFDRyxJQUFJLENBQUMsQ0FBVSxXQUFFQyxNQUFNLENBQUMsQ0FBRyxJQUFFQyxLQUFLLENBQUMsQ0FBSSxLQUFFLENBQUM7WUFBQ0MsU0FBUyxFQUFFLEtBQUs7UUFBQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxRQUFRLFFBQUksQ0FBQztnQkFBWEMsSUFBSSxTQUFKQSxJQUFJO1lBQ3JGQyxtQkFBbUIsQ0FBQ0QsSUFBSTtZQUN4QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTyxRQUFDSCxJQUFJO1FBQzVCLENBQUM7SUFDTCxDQUFDO1FBTVFJLGtCQUFrQixHQUEzQixRQUFRLENBQUNBLGtCQUFrQixDQUFDQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1lBQ2QsRUFBa0M7WUFDbENDLEVBQUUsRUFBRSxDQUFnQjtZQUNwQkMsS0FBSyxFQUFFSCxZQUFZO1FBQ3ZCLENBQUM7UUFFRGIsY0FBYyxDQUNURyxJQUFJLENBQUMsQ0FBVSxXQUNmYyxNQUFNLENBQUMsQ0FBQztZQUNMSCxRQUFRO1FBQ1osQ0FBQyxFQUNBUCxJQUFJLENBQUMsUUFBUSxRQUFJLENBQUM7Z0JBQVhDLElBQUksU0FBSkEsSUFBSTtZQUNSRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtZQUNoQkMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakJELElBQUksQ0FBQyxDQUFDO1lBRVYsQ0FBQyxDQUhtQixNQUduQixvQkFETVUsZ0JBQWdCO1FBRy9CLENBQUM7UUFDREMsV0FBVyxDQUFDLENBQUU7SUFDbEIsQ0FBQzs7SUFwQ0QsR0FBSyxDQUEyQjNCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDc0IsU0FBUSxHQUFpQnRCLEdBQVksS0FBM0IyQixXQUFXLEdBQUkzQixHQUFZO0lBQzVDLEdBQUssQ0FBMkNBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcEQwQixnQkFBZ0IsR0FBeUIxQixJQUFZLEtBQW5DaUIsbUJBQW1CLEdBQUlqQixJQUFZO0lBQzVELEdBQUssQ0FBQzRCLFVBQVUsR0FBRzFCLHNEQUFTO0lBUzVCSCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiVyxjQUFjO0lBQ2xCLENBQUMsRUFBQyxDQUFDLENBQUM7SUF5QkosTUFBTSw2RUFDRG1CLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVM7OEZBQ25CRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFrQjs7NEZBQzVCM0IseURBQU07b0JBQUN5QixVQUFVLEVBQUVBLFVBQVU7Ozs7Ozs0RkFDN0JDLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFZOztvR0FDdEIxQiw4REFBVzs0QkFBQzJCLFNBQVMsRUFBRUwsZ0JBQWdCOzs7Ozs7b0dBQ3ZDckIsMkRBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0IsQ0FBQztHQWxEdUJJLFFBQVE7O1FBR1RQLGtEQUFTOzs7S0FIUk8sUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50L2hlYWRlcic7XG5pbXBvcnQgTWVzc2FnZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50L01lbnNhZ2VMaXN0JztcbmltcG9ydCBGb3JtQ2hhdCBmcm9tICcuLi9jb21wb25lbnQvZm9ybUNoYXQnO1xuXG5jb25zdCBTVVBBX0JBU0VfS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16STVNVFE0Tml3aVpYaHdJam94T1RVNE9EWTNORGcyZlEuc3l2MHRvQXpld2E4eDZ3VlpqV25ZRVVZTENoWnlfSE5vbnFCY3lTLWpBaydcblxuY29uc3QgU1VQQV9CQVNFX1VSTCA9ICdodHRwczovL2FhcHZraWdpZGZxamtjaXBpYmRqLnN1cGFiYXNlLmNvJ1xuXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBX0JBU0VfVVJMLFNVUEFfQkFTRV9LRVkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICAgIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsaXN0YURlTWVuc2FnZW5zLCBzZXRMaXN0YURlTWVuc2FnZW5zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKClcbiAgICBcbiAgICBmdW5jdGlvbiBzZWxlY3RTdXBhQmFzZSgpe1xuICAgICAgICBzdXBhYmFzZUNsaWVudC5mcm9tKCdtZW5zYWdlbScpLnNlbGVjdCgnKicpLm9yZGVyKCdpZCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KS50aGVuKCh7ZGF0YX0pID0+IHsgXG4gICAgICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKGRhdGEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhZG9zXCIsZGF0YSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2VsZWN0U3VwYUJhc2UoKVxuICAgIH0sW10pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG4gICAgICAgIGNvbnN0IG1lbnNhZ2VtID0ge1xuICAgICAgICAgICAgLy9pZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxuICAgICAgICAgICAgZGU6ICdjbG92aXNiYWxyZWlyYScsXG4gICAgICAgICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtLFxuICAgICAgICB9O1xuXG4gICAgICAgIHN1cGFiYXNlQ2xpZW50XG4gICAgICAgICAgICAuZnJvbSgnbWVuc2FnZW0nKVxuICAgICAgICAgICAgLmluc2VydChbXG4gICAgICAgICAgICAgICAgbWVuc2FnZW1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKFtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVswXSxcbiAgICAgICAgICAgICAgICAgICAgLi4ubGlzdGFEZU1lbnNhZ2VucyxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICBzZXRNZW5zYWdlbSgnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdkNoYXQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdkJveEJhY2tncm91bmQnPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgcm90ZWFtZW50bz17cm90ZWFtZW50b30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZCb3hDaGF0Jz4gICBcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFEZU1lbnNhZ2Vuc30vPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNoYXQvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDbGllbnQiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJNZXNzYWdlTGlzdCIsIkZvcm1DaGF0IiwiU1VQQV9CQVNFX0tFWSIsIlNVUEFfQkFTRV9VUkwiLCJzdXBhYmFzZUNsaWVudCIsIkNoYXRQYWdlIiwic2VsZWN0U3VwYUJhc2UiLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJ0aGVuIiwiZGF0YSIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW0iLCJkZSIsInRleHRvIiwiaW5zZXJ0IiwibGlzdGFEZU1lbnNhZ2VucyIsInNldE1lbnNhZ2VtIiwicm90ZWFtZW50byIsImRpdiIsImNsYXNzTmFtZSIsIm1lbnNhZ2VucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});