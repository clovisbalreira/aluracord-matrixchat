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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.js\");\n/* harmony import */ var _src_components_MensageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/MensageList */ \"./src/components/MensageList.js\");\n/* harmony import */ var _src_components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/ButtonSendSticker */ \"./src/components/ButtonSendSticker.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import { Box, Text, TextField, Image, Button } from '@skynexui/components';\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPA_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTQ4NiwiZXhwIjoxOTU4ODY3NDg2fQ.syv0toAzewa8x6wVZjWnYEUYLChZy_HNonqBcyS-jAk';\nvar SUPA_BASE_URL = 'https://aapvkigidfqjkcipibdj.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(SUPA_BASE_URL, SUPA_BASE_KEY);\nfunction escutaMensagensEmTempoReal(adicionaMensagem) {\n    return supabaseClient.from('mensagem').on('INSERT', function() {\n        console.log('Houve uma nova mensagem');\n    //adicionaMensagem(respostaLive.new);\n    }).subscribe();\n}\nfunction ChatPage() {\n    var selectSupaBase = function selectSupaBase() {\n        supabaseClient.from('mensagem').select('*').order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            setListaDeMensagens(data);\n        });\n    };\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            //id: listaDeMensagens.length + 1,\n            de: usuarioLogado,\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagem').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log(data);\n            setListaDeMensagens([\n                data[0], \n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var usuarioLogado = roteamento.query.username;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        selectSupaBase();\n        escutaMensagensEmTempoReal();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"divChat\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divBoxBackground\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    roteamento: roteamento\n                }, void 0, false, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divBoxChat\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MensageList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    cols: \"30\",\n                                    rows: \"10\",\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    value: mensagem1,\n                                    onChange: function(event) {\n                                        var valor = event.target.value;\n                                        setMensagem(valor);\n                                    },\n                                    onKeyPress: function(event) {\n                                        if (event.key === 'Enter') {\n                                            event.preventDefault();\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_5__.ButtonSendSticker, {\n                                    onStickerClick: function(sticker) {\n                                        console.log('Usando o component salvar esse dado no banco', sticker);\n                                        handleNovaMensagem(\"sticker:\".concat(sticker));\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"CVV8hKKF3YBkaaFOv0p7TfG+vm0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEdBQ0FDLENBQVE7b0NBQUNDLElBQUksRUFBQyxDQUFJO29DQUFDQyxJQUFJLEVBQUMsQ0FBSTtvQ0FDN0JDLFdBQVcsRUFBQyxDQUE2QjtvQ0FDekNDLEtBQUssRUFBRWxCLFNBQVE7b0NBQ2ZtQixRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzt3Q0FDbEIsR0FBSyxDQUFDQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDSixLQUFLO3dDQUNoQ1osV0FBVyxDQUFDZSxLQUFLO29DQUNyQixDQUFDO29DQUNERSxVQUFVLEVBQUUsUUFBUSxDQUFQSCxLQUFLLEVBQUssQ0FBQzt3Q0FDcEIsRUFBRSxFQUFFQSxLQUFLLENBQUNJLEdBQUcsS0FBSyxDQUFPLFFBQUUsQ0FBQzs0Q0FDeEJKLEtBQUssQ0FBQ0ssY0FBYzs0Q0FDcEIzQixrQkFBa0IsQ0FBQ0UsU0FBUTt3Q0FDL0IsQ0FBQztvQ0FDTCxDQUFDOzs7Ozs7NEdBRUFyQixnRkFBaUI7b0NBQUMrQyxjQUFjLEVBQUUsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQzt3Q0FDN0N4QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4QywrQ0FBQ3VDLE9BQU87d0NBQ2xFN0Isa0JBQWtCLENBQUUsQ0FBUSxVQUFVLE9BQVI2QixPQUFPO29DQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixDQUFDO0dBdEV1QnJDLFFBQVE7O1FBR1RkLGtEQUFTOzs7S0FIUmMsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZW5zYWdlTGlzdCc7XG5pbXBvcnQgeyBCdXR0b25TZW5kU3RpY2tlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbmRTdGlja2VyJ1xuXG5jb25zdCBTVVBBX0JBU0VfS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16STVNVFE0Tml3aVpYaHdJam94T1RVNE9EWTNORGcyZlEuc3l2MHRvQXpld2E4eDZ3VlpqV25ZRVVZTENoWnlfSE5vbnFCY3lTLWpBaydcblxuY29uc3QgU1VQQV9CQVNFX1VSTCA9ICdodHRwczovL2FhcHZraWdpZGZxamtjaXBpYmRqLnN1cGFiYXNlLmNvJ1xuXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBX0JBU0VfVVJMLFNVUEFfQkFTRV9LRVkpXG5cbmZ1bmN0aW9uIGVzY3V0YU1lbnNhZ2Vuc0VtVGVtcG9SZWFsKGFkaWNpb25hTWVuc2FnZW0pIHtcbiAgICByZXR1cm4gc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKCdtZW5zYWdlbScpXG4gICAgICAub24oJ0lOU0VSVCcsICgvKnJlc3Bvc3RhTGl2ZSovKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIb3V2ZSB1bWEgbm92YSBtZW5zYWdlbScpXG4gICAgICAgIC8vYWRpY2lvbmFNZW5zYWdlbShyZXNwb3N0YUxpdmUubmV3KTtcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHVzdWFyaW9Mb2dhZG8gPSByb3RlYW1lbnRvLnF1ZXJ5LnVzZXJuYW1lXG4gICAgXG4gICAgZnVuY3Rpb24gc2VsZWN0U3VwYUJhc2UoKXtcbiAgICAgICAgc3VwYWJhc2VDbGllbnQuZnJvbSgnbWVuc2FnZW0nKS5zZWxlY3QoJyonKS5vcmRlcignaWQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSkudGhlbigoe2RhdGF9KSA9PiB7IFxuICAgICAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhkYXRhKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZWxlY3RTdXBhQmFzZSgpXG4gICAgICAgIGVzY3V0YU1lbnNhZ2Vuc0VtVGVtcG9SZWFsKClcbiAgICB9LFtdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xuICAgICAgICBjb25zdCBtZW5zYWdlbSA9IHtcbiAgICAgICAgICAgIC8vaWQ6IGxpc3RhRGVNZW5zYWdlbnMubGVuZ3RoICsgMSxcbiAgICAgICAgICAgIGRlOiB1c3VhcmlvTG9nYWRvLFxuICAgICAgICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICAgICAgfTtcblxuICAgICAgICBzdXBhYmFzZUNsaWVudFxuICAgICAgICAgICAgLmZyb20oJ21lbnNhZ2VtJylcbiAgICAgICAgICAgIC5pbnNlcnQoW1xuICAgICAgICAgICAgICAgIG1lbnNhZ2VtXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhbXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbMF0sXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TWVuc2FnZW0oJycpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZDaGF0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZCb3hCYWNrZ3JvdW5kJz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHJvdGVhbWVudG89e3JvdGVhbWVudG99Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2Qm94Q2hhdCc+ICAgXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbnN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWxvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25TZW5kU3RpY2tlciBvblN0aWNrZXJDbGljaz17KHN0aWNrZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIG8gY29tcG9uZW50IHNhbHZhciBlc3NlIGRhZG8gbm8gYmFuY28nLHN0aWNrZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKGBzdGlja2VyOiR7c3RpY2tlcn1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNsaWVudCIsInVzZVJvdXRlciIsIkhlYWRlciIsIk1lc3NhZ2VMaXN0IiwiQnV0dG9uU2VuZFN0aWNrZXIiLCJTVVBBX0JBU0VfS0VZIiwiU1VQQV9CQVNFX1VSTCIsInN1cGFiYXNlQ2xpZW50IiwiZXNjdXRhTWVuc2FnZW5zRW1UZW1wb1JlYWwiLCJhZGljaW9uYU1lbnNhZ2VtIiwiZnJvbSIsIm9uIiwiY29uc29sZSIsImxvZyIsInN1YnNjcmliZSIsIkNoYXRQYWdlIiwic2VsZWN0U3VwYUJhc2UiLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInRoZW4iLCJkYXRhIiwic2V0TGlzdGFEZU1lbnNhZ2VucyIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiZGUiLCJ1c3VhcmlvTG9nYWRvIiwidGV4dG8iLCJpbnNlcnQiLCJsaXN0YURlTWVuc2FnZW5zIiwic2V0TWVuc2FnZW0iLCJyb3RlYW1lbnRvIiwicXVlcnkiLCJ1c2VybmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIm1lbnNhZ2VucyIsImZvcm0iLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3RpY2tlckNsaWNrIiwic3RpY2tlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});