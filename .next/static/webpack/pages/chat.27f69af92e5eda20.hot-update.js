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

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { Box, Text, TextField, Image, Button } from '@skynexui/components';\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPA_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTQ4NiwiZXhwIjoxOTU4ODY3NDg2fQ.syv0toAzewa8x6wVZjWnYEUYLChZy_HNonqBcyS-jAk';\nvar SUPA_BASE_URL = 'https://aapvkigidfqjkcipibdj.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(SUPA_BASE_URL, SUPA_BASE_KEY);\nfunction ChatPage() {\n    var selectSupaBase = function selectSupaBase() {\n        supabaseClient.from('mensagem').select('*').order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            setListaDeMensagens(data);\n            console.log(\"dados\", data);\n        });\n    };\n    var handleNovaMensagem = /*\n    // Usuário\n    - Usuário digita no campo textarea\n    - Aperta enter para enviar\n    - Tem que adicionar o texto na listagem\n    \n    // Dev\n    - [X] Campo criado\n    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)\n    - [X] Lista de mensagens \n    */ function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            //id: listaDeMensagens.length + 1,\n            de: 'clovisbalreira',\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagem').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log(data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var voltar = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        selectSupaBase();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"divChat\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divBoxBackground\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divBoxChat\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                cols: \"30\",\n                                rows: \"10\",\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"x6Llln7RIZXFDRzG3GHTD8CM1VU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Chat\"\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                lineNumber: 175,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                label: \"L\",\n                onClick: function onClick(infosdoevento) {\n                    infosdoevento.preventDefault();\n                    voltar.push('/');\n                }\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                lineNumber: 176,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n        lineNumber: 174,\n        columnNumber: 9\n    }, this));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    //console.log(props.mensagens);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: props.mensagens.map(function(mensagem) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                console.log(props.mensagens),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"https://github.com/clovisbalreira.png\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                            lineNumber: 209,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: mensagem.de\n                                        }, void 0, false, {\n                                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                            lineNumber: 210,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: new Date().toLocaleDateString()\n                                        }, void 0, false, {\n                                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                            lineNumber: 211,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, mensagem.id, true, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 208,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: mensagem.texto\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 213,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true));\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 203,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                lineNumber: 202,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Mensagens\"\n            }, void 0, false, {\n                fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                lineNumber: 222,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FLbkJSLENBQUU7OENBQ0VsQyxRQUFRLENBQUNFLEtBQUs7Ozs7Ozs7O29CQUkvQixDQUFDOzs7Ozs7Ozs7Ozt3RkFJUndCLENBQUM7MEJBQUMsQ0FBUzs7Ozs7Ozs7QUE4RHhCLENBQUM7TUF0RlFoQixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgU1VQQV9CQVNFX0tFWSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKeWIyeGxJam9pWVc1dmJpSXNJbWxoZENJNk1UWTBNekk1TVRRNE5pd2laWGh3SWpveE9UVTRPRFkzTkRnMmZRLnN5djB0b0F6ZXdhOHg2d1ZaalduWUVVWUxDaFp5X0hOb25xQmN5Uy1qQWsnXG5cbmNvbnN0IFNVUEFfQkFTRV9VUkwgPSAnaHR0cHM6Ly9hYXB2a2lnaWRmcWprY2lwaWJkai5zdXBhYmFzZS5jbydcblxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoU1VQQV9CQVNFX1VSTCxTVVBBX0JBU0VfS0VZKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcbiAgICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgdm9sdGFyID0gdXNlUm91dGVyKCk7XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RTdXBhQmFzZSgpe1xuICAgICAgICBzdXBhYmFzZUNsaWVudC5mcm9tKCdtZW5zYWdlbScpLnNlbGVjdCgnKicpLm9yZGVyKCdpZCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KS50aGVuKCh7ZGF0YX0pID0+IHsgXG4gICAgICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKGRhdGEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhZG9zXCIsZGF0YSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2VsZWN0U3VwYUJhc2UoKVxuICAgIH0sW10pXG5cbiAgICAvKlxuICAgIC8vIFVzdcOhcmlvXG4gICAgLSBVc3XDoXJpbyBkaWdpdGEgbm8gY2FtcG8gdGV4dGFyZWFcbiAgICAtIEFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxuICAgIC0gVGVtIHF1ZSBhZGljaW9uYXIgbyB0ZXh0byBuYSBsaXN0YWdlbVxuICAgIFxuICAgIC8vIERldlxuICAgIC0gW1hdIENhbXBvIGNyaWFkb1xuICAgIC0gW1hdIFZhbW9zIHVzYXIgbyBvbkNoYW5nZSB1c2EgbyB1c2VTdGF0ZSAodGVyIGlmIHByYSBjYXNvIHNlamEgZW50ZXIgcHJhIGxpbXBhciBhIHZhcmlhdmVsKVxuICAgIC0gW1hdIExpc3RhIGRlIG1lbnNhZ2VucyBcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xuICAgICAgICBjb25zdCBtZW5zYWdlbSA9IHtcbiAgICAgICAgICAgIC8vaWQ6IGxpc3RhRGVNZW5zYWdlbnMubGVuZ3RoICsgMSxcbiAgICAgICAgICAgIGRlOiAnY2xvdmlzYmFscmVpcmEnLFxuICAgICAgICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICAgICAgfTtcblxuICAgICAgICBzdXBhYmFzZUNsaWVudFxuICAgICAgICAgICAgLmZyb20oJ21lbnNhZ2VtJylcbiAgICAgICAgICAgIC5pbnNlcnQoW1xuICAgICAgICAgICAgICAgIG1lbnNhZ2VtXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhbXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbMF0sXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TWVuc2FnZW0oJycpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZDaGF0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZCb3hCYWNrZ3JvdW5kJz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2Qm94Q2hhdCc+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbnN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWxvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIC8qPEJveFxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ11cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc5NXZoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzMycHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YURlTWVuc2FnZW5zfSAvPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge2xpc3RhRGVNZW5zYWdlbnMubWFwKChtZW5zYWdlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21lbnNhZ2VtQXR1YWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbUF0dWFsLmRlfToge21lbnNhZ2VtQXR1YWwudGV4dG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0gKi8vKn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWxvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD4qL1xuICAgICAgICApXG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPHA+Q2hhdDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gbGFiZWw9J0wnIG9uQ2xpY2s9e2Z1bmN0aW9uIChpbmZvc2RvZXZlbnRvKXtcbiAgICAgICAgICAgICAgICBpbmZvc2RvZXZlbnRvLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICB2b2x0YXIucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIC8qPD5cbiAgICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSA+XG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD0naGVhZGluZzUnPlxuICAgICAgICAgICAgICAgICAgICBDaGF0XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0ndGVydGlhcnknXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0xvZ291dCdcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+Ki9cbiAgICApXG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHByb3BzKSB7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9wcy5tZW5zYWdlbnMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMubWVuc2FnZW5zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWVuc2FnZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vY2xvdmlzYmFscmVpcmEucG5nYH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57bWVuc2FnZW0uZGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxwPk1lbnNhZ2VuczwvcD5cbiAgICAgICAgPC8+XG4gICAgICAgIC8qPEJveFxuICAgICAgICAgICAgdGFnPVwidWxcIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS5kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0JveD4qL1xuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNsaWVudCIsIlJvdXRlciIsInVzZVJvdXRlciIsIlNVUEFfQkFTRV9LRVkiLCJTVVBBX0JBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJDaGF0UGFnZSIsInNlbGVjdFN1cGFCYXNlIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwidGhlbiIsImRhdGEiLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiZGUiLCJ0ZXh0byIsImluc2VydCIsImxpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInZvbHRhciIsImRpdiIsImNsYXNzTmFtZSIsIkhlYWRlciIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiZm9ybSIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInZhbG9yIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVyIiwicCIsImJ1dHRvbiIsImxhYmVsIiwib25DbGljayIsImluZm9zZG9ldmVudG8iLCJwdXNoIiwicHJvcHMiLCJ1bCIsImxpIiwibWFwIiwiaW1nIiwic3JjIiwic3Ryb25nIiwic3BhbiIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});