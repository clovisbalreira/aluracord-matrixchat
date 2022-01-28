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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.js\");\n/* harmony import */ var _src_components_MensageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/MensageList */ \"./src/components/MensageList.js\");\n/* harmony import */ var _src_components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/ButtonSendSticker */ \"./src/components/ButtonSendSticker.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { Box, Text, TextField, Image, Button } from '@skynexui/components';\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPA_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTQ4NiwiZXhwIjoxOTU4ODY3NDg2fQ.syv0toAzewa8x6wVZjWnYEUYLChZy_HNonqBcyS-jAk';\nvar SUPA_BASE_URL = 'https://aapvkigidfqjkcipibdj.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(SUPA_BASE_URL, SUPA_BASE_KEY);\nfunction escutaMensagensEmTempoReal(adicionaMensagem) {\n    return supabaseClient.from('mensagem').on('INSERT', function(respostaLive) {\n        //console.log('Houve uma nova mensagem')\n        adicionaMensagem(respostaLive.new);\n    }).subscribe();\n}\nfunction ChatPage() {\n    var selectSupaBase = function selectSupaBase() {\n        supabaseClient.from('mensagem').select('*').order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            setListaDeMensagens(data);\n        });\n    };\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            //id: listaDeMensagens.length + 1,\n            de: usuarioLogado,\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagem').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log(data);\n        /*setListaDeMensagens([\n                    data[0],\n                    ...listaDeMensagens,\n                ]\n            );*/ });\n        setMensagem('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var usuarioLogado = roteamento.query.username;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        selectSupaBase();\n        escutaMensagensEmTempoReal(function(novaMensagem) {\n            console.log('Criando nova mensagem');\n            setListaDeMensagens(function() {\n                return [\n                    novaMensagem, \n                ].concat(_toConsumableArray(listaDeMensagens));\n            });\n        //handleNovaMensagem(novaMensagem)\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"divChat\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divBoxBackground\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    roteamento: roteamento\n                }, void 0, false, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divBoxChat\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MensageList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    cols: \"30\",\n                                    rows: \"10\",\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    value: mensagem1,\n                                    onChange: function(event) {\n                                        var valor = event.target.value;\n                                        setMensagem(valor);\n                                    },\n                                    onKeyPress: function(event) {\n                                        if (event.key === 'Enter') {\n                                            event.preventDefault();\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_5__.ButtonSendSticker, {\n                                    onStickerClick: function(sticker) {\n                                        console.log('Usando o component salvar esse dado no banco', sticker);\n                                        handleNovaMensagem(\"sticker:\".concat(sticker));\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"CVV8hKKF3YBkaaFOv0p7TfG+vm0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxDQUFrQjs7NEZBQzVCcEMsOERBQU07b0JBQUNnQyxVQUFVLEVBQUVBLFVBQVU7Ozs7Ozs0RkFDN0JHLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFZOztvR0FDdEJuQyxtRUFBVzs0QkFBQ29DLFNBQVMsRUFBRU4sZ0JBQWdCOzs7Ozs7b0dBQ3ZDTyxDQUFJOzs0R0FDQUMsQ0FBUTtvQ0FBQ0MsSUFBSSxFQUFDLENBQUk7b0NBQUNDLElBQUksRUFBQyxDQUFJO29DQUM3QkMsV0FBVyxFQUFDLENBQTZCO29DQUN6Q0MsS0FBSyxFQUFFcEIsU0FBUTtvQ0FDZnFCLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO3dDQUNsQixHQUFLLENBQUNDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNKLEtBQUs7d0NBQ2hDYixXQUFXLENBQUNnQixLQUFLO29DQUNyQixDQUFDO29DQUNERSxVQUFVLEVBQUUsUUFBUSxDQUFQSCxLQUFLLEVBQUssQ0FBQzt3Q0FDcEIsRUFBRSxFQUFFQSxLQUFLLENBQUNJLEdBQUcsS0FBSyxDQUFPLFFBQUUsQ0FBQzs0Q0FDeEJKLEtBQUssQ0FBQ0ssY0FBYzs0Q0FDcEI3QixrQkFBa0IsQ0FBQ0UsU0FBUTt3Q0FDL0IsQ0FBQztvQ0FDTCxDQUFDOzs7Ozs7NEdBRUFyQixnRkFBaUI7b0NBQUNpRCxjQUFjLEVBQUUsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQzt3Q0FDN0N4QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4QywrQ0FBQ3VCLE9BQU87d0NBQ2xFL0Isa0JBQWtCLENBQUUsQ0FBUSxVQUFVLE9BQVIrQixPQUFPO29DQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixDQUFDO0dBL0V1QnZDLFFBQVE7O1FBR1RkLGtEQUFTOzs7S0FIUmMsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZW5zYWdlTGlzdCc7XG5pbXBvcnQgeyBCdXR0b25TZW5kU3RpY2tlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbmRTdGlja2VyJ1xuXG5jb25zdCBTVVBBX0JBU0VfS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16STVNVFE0Tml3aVpYaHdJam94T1RVNE9EWTNORGcyZlEuc3l2MHRvQXpld2E4eDZ3VlpqV25ZRVVZTENoWnlfSE5vbnFCY3lTLWpBaydcblxuY29uc3QgU1VQQV9CQVNFX1VSTCA9ICdodHRwczovL2FhcHZraWdpZGZxamtjaXBpYmRqLnN1cGFiYXNlLmNvJ1xuXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBX0JBU0VfVVJMLFNVUEFfQkFTRV9LRVkpXG5cbmZ1bmN0aW9uIGVzY3V0YU1lbnNhZ2Vuc0VtVGVtcG9SZWFsKGFkaWNpb25hTWVuc2FnZW0pIHtcbiAgICByZXR1cm4gc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKCdtZW5zYWdlbScpXG4gICAgICAub24oJ0lOU0VSVCcsIChyZXNwb3N0YUxpdmUpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnSG91dmUgdW1hIG5vdmEgbWVuc2FnZW0nKVxuICAgICAgICBhZGljaW9uYU1lbnNhZ2VtKHJlc3Bvc3RhTGl2ZS5uZXcpO1xuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcbiAgICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgdXN1YXJpb0xvZ2FkbyA9IHJvdGVhbWVudG8ucXVlcnkudXNlcm5hbWVcbiAgICBcbiAgICBmdW5jdGlvbiBzZWxlY3RTdXBhQmFzZSgpe1xuICAgICAgICBzdXBhYmFzZUNsaWVudC5mcm9tKCdtZW5zYWdlbScpLnNlbGVjdCgnKicpLm9yZGVyKCdpZCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KS50aGVuKCh7ZGF0YX0pID0+IHsgXG4gICAgICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKGRhdGEpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNlbGVjdFN1cGFCYXNlKClcbiAgICAgICAgZXNjdXRhTWVuc2FnZW5zRW1UZW1wb1JlYWwoKG5vdmFNZW5zYWdlbSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyaWFuZG8gbm92YSBtZW5zYWdlbScpXG4gICAgICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBub3ZhTWVuc2FnZW0sXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2hhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pXG4gICAgICAgIH0pXG4gICAgfSxbXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pIHtcbiAgICAgICAgY29uc3QgbWVuc2FnZW0gPSB7XG4gICAgICAgICAgICAvL2lkOiBsaXN0YURlTWVuc2FnZW5zLmxlbmd0aCArIDEsXG4gICAgICAgICAgICBkZTogdXN1YXJpb0xvZ2FkbyxcbiAgICAgICAgICAgIHRleHRvOiBub3ZhTWVuc2FnZW0sXG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwYWJhc2VDbGllbnRcbiAgICAgICAgICAgIC5mcm9tKCdtZW5zYWdlbScpXG4gICAgICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgICAgICBtZW5zYWdlbVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIC8qc2V0TGlzdGFEZU1lbnNhZ2VucyhbXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbMF0sXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTsqL1xuICAgICAgICB9KVxuICAgICAgICBzZXRNZW5zYWdlbSgnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdkNoYXQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdkJveEJhY2tncm91bmQnPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgcm90ZWFtZW50bz17cm90ZWFtZW50b30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZCb3hDaGF0Jz4gICBcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFEZU1lbnNhZ2Vuc30vPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vdmFNZW5zYWdlbShtZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblNlbmRTdGlja2VyIG9uU3RpY2tlckNsaWNrPXsoc3RpY2tlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gbyBjb21wb25lbnQgc2FsdmFyIGVzc2UgZGFkbyBubyBiYW5jbycsc3RpY2tlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0oYHN0aWNrZXI6JHtzdGlja2VyfWApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ2xpZW50IiwidXNlUm91dGVyIiwiSGVhZGVyIiwiTWVzc2FnZUxpc3QiLCJCdXR0b25TZW5kU3RpY2tlciIsIlNVUEFfQkFTRV9LRVkiLCJTVVBBX0JBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJlc2N1dGFNZW5zYWdlbnNFbVRlbXBvUmVhbCIsImFkaWNpb25hTWVuc2FnZW0iLCJmcm9tIiwib24iLCJyZXNwb3N0YUxpdmUiLCJuZXciLCJzdWJzY3JpYmUiLCJDaGF0UGFnZSIsInNlbGVjdFN1cGFCYXNlIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJ0aGVuIiwiZGF0YSIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImRlIiwidXN1YXJpb0xvZ2FkbyIsInRleHRvIiwiaW5zZXJ0IiwiY29uc29sZSIsImxvZyIsInNldE1lbnNhZ2VtIiwibGlzdGFEZU1lbnNhZ2VucyIsInJvdGVhbWVudG8iLCJxdWVyeSIsInVzZXJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVuc2FnZW5zIiwiZm9ybSIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInZhbG9yIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0Iiwib25TdGlja2VyQ2xpY2siLCJzdGlja2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});