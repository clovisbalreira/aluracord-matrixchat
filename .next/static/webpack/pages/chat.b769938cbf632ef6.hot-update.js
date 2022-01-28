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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.js\");\n/* harmony import */ var _src_components_MensageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/MensageList */ \"./src/components/MensageList.js\");\n/* harmony import */ var _src_components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/ButtonSendSticker */ \"./src/components/ButtonSendSticker.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPA_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTQ4NiwiZXhwIjoxOTU4ODY3NDg2fQ.syv0toAzewa8x6wVZjWnYEUYLChZy_HNonqBcyS-jAk';\nvar SUPA_BASE_URL = 'https://aapvkigidfqjkcipibdj.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(SUPA_BASE_URL, SUPA_BASE_KEY);\nfunction escutaMensagensEmTempoReal(adicionaMensagem) {\n    return supabaseClient.from('mensagem').on('INSERT', function(respostaLive) {\n        adicionaMensagem(respostaLive.new);\n    }).subscribe();\n}\nfunction ChatPage() {\n    var selectSupaBase = function selectSupaBase() {\n        supabaseClient.from('mensagem').select('*').order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            setListaDeMensagens(data);\n        });\n    };\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            de: usuarioLogado,\n            texto: novaMensagem\n        };\n        supabaseClient.from('mensagem').insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log(data);\n        });\n        setMensagem('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var usuarioLogado = roteamento.query.username;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        selectSupaBase();\n        escutaMensagensEmTempoReal(function(novaMensagem) {\n            console.log('Criando nova mensagem');\n            setListaDeMensagens(function(valorAtual) {\n                return [\n                    novaMensagem, \n                ].concat(_toConsumableArray(valorAtual));\n            });\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"divChat\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"divBoxBackground\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    roteamento: roteamento\n                }, void 0, false, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divBoxChat\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MensageList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    cols: \"30\",\n                                    rows: \"10\",\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    value: mensagem1,\n                                    onChange: function(event) {\n                                        var valor = event.target.value;\n                                        setMensagem(valor);\n                                    },\n                                    onKeyPress: function(event) {\n                                        if (event.key === 'Enter') {\n                                            event.preventDefault();\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_5__.ButtonSendSticker, {\n                                    onStickerClick: function(sticker) {\n                                        console.log('Usando o component salvar esse dado no banco', sticker);\n                                        handleNovaMensagem(\"sticker:\".concat(sticker));\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n            lineNumber: 70,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/clovis/Documentos/GitHub/aluracord-matrixchat/pages/chat.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"CVV8hKKF3YBkaaFOv0p7TfG+vm0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdCSSxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBWTs7b0dBQ3RCcEMsbUVBQVc7NEJBQUNxQyxTQUFTLEVBQUVQLGdCQUFnQjs7Ozs7O29HQUN2Q1EsQ0FBSTs7NEdBQ0FDLENBQVE7b0NBQUNDLElBQUksRUFBQyxDQUFJO29DQUFDQyxJQUFJLEVBQUMsQ0FBSTtvQ0FDN0JDLFdBQVcsRUFBQyxDQUE2QjtvQ0FDekNDLEtBQUssRUFBRXJCLFNBQVE7b0NBQ2ZzQixRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzt3Q0FDbEIsR0FBSyxDQUFDQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDSixLQUFLO3dDQUNoQ2QsV0FBVyxDQUFDaUIsS0FBSztvQ0FDckIsQ0FBQztvQ0FDREUsVUFBVSxFQUFFLFFBQVEsQ0FBUEgsS0FBSyxFQUFLLENBQUM7d0NBQ3BCLEVBQUUsRUFBRUEsS0FBSyxDQUFDSSxHQUFHLEtBQUssQ0FBTyxRQUFFLENBQUM7NENBQ3hCSixLQUFLLENBQUNLLGNBQWM7NENBQ3BCOUIsa0JBQWtCLENBQUNFLFNBQVE7d0NBQy9CLENBQUM7b0NBQ0wsQ0FBQzs7Ozs7OzRHQUVBckIsZ0ZBQWlCO29DQUFDa0QsY0FBYyxFQUFFLFFBQVEsQ0FBUEMsT0FBTyxFQUFLLENBQUM7d0NBQzdDekIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBOEMsK0NBQUN3QixPQUFPO3dDQUNsRWhDLGtCQUFrQixDQUFFLENBQVEsVUFBVSxPQUFSZ0MsT0FBTztvQ0FDekMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekIsQ0FBQztHQTNFdUJ4QyxRQUFROztRQUdUZCxrREFBUzs7O0tBSFJjLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZW5zYWdlTGlzdCc7XG5pbXBvcnQgeyBCdXR0b25TZW5kU3RpY2tlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbmRTdGlja2VyJ1xuXG5jb25zdCBTVVBBX0JBU0VfS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16STVNVFE0Tml3aVpYaHdJam94T1RVNE9EWTNORGcyZlEuc3l2MHRvQXpld2E4eDZ3VlpqV25ZRVVZTENoWnlfSE5vbnFCY3lTLWpBaydcblxuY29uc3QgU1VQQV9CQVNFX1VSTCA9ICdodHRwczovL2FhcHZraWdpZGZxamtjaXBpYmRqLnN1cGFiYXNlLmNvJ1xuXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBX0JBU0VfVVJMLFNVUEFfQkFTRV9LRVkpXG5cbmZ1bmN0aW9uIGVzY3V0YU1lbnNhZ2Vuc0VtVGVtcG9SZWFsKGFkaWNpb25hTWVuc2FnZW0pIHtcbiAgICByZXR1cm4gc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKCdtZW5zYWdlbScpXG4gICAgICAub24oJ0lOU0VSVCcsIChyZXNwb3N0YUxpdmUpID0+IHtcbiAgICAgICAgYWRpY2lvbmFNZW5zYWdlbShyZXNwb3N0YUxpdmUubmV3KTtcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHVzdWFyaW9Mb2dhZG8gPSByb3RlYW1lbnRvLnF1ZXJ5LnVzZXJuYW1lXG4gICAgXG4gICAgZnVuY3Rpb24gc2VsZWN0U3VwYUJhc2UoKXtcbiAgICAgICAgc3VwYWJhc2VDbGllbnRcbiAgICAgICAgICAgIC5mcm9tKCdtZW5zYWdlbScpXG4gICAgICAgICAgICAuc2VsZWN0KCcqJylcbiAgICAgICAgICAgIC5vcmRlcignaWQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSkudGhlbigoe2RhdGF9KSA9PiB7IFxuICAgICAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhkYXRhKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZWxlY3RTdXBhQmFzZSgpXG4gICAgICAgIGVzY3V0YU1lbnNhZ2Vuc0VtVGVtcG9SZWFsKChub3ZhTWVuc2FnZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmlhbmRvIG5vdmEgbWVuc2FnZW0nKVxuICAgICAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucygodmFsb3JBdHVhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIG5vdmFNZW5zYWdlbSxcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsb3JBdHVhbCxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9LFtdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xuICAgICAgICBjb25zdCBtZW5zYWdlbSA9IHtcbiAgICAgICAgICAgIGRlOiB1c3VhcmlvTG9nYWRvLFxuICAgICAgICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICAgICAgfTtcblxuICAgICAgICBzdXBhYmFzZUNsaWVudFxuICAgICAgICAgICAgLmZyb20oJ21lbnNhZ2VtJylcbiAgICAgICAgICAgIC5pbnNlcnQoW1xuICAgICAgICAgICAgICAgIG1lbnNhZ2VtXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIHNldE1lbnNhZ2VtKCcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2Q2hhdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2Qm94QmFja2dyb3VuZCc+XG4gICAgICAgICAgICAgICAgPEhlYWRlciByb3RlYW1lbnRvPXtyb3RlYW1lbnRvfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdkJveENoYXQnPiAgIFxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YURlTWVuc2FnZW5zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVuc2FnZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uU2VuZFN0aWNrZXIgb25TdGlja2VyQ2xpY2s9eyhzdGlja2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBvIGNvbXBvbmVudCBzYWx2YXIgZXNzZSBkYWRvIG5vIGJhbmNvJyxzdGlja2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vdmFNZW5zYWdlbShgc3RpY2tlcjoke3N0aWNrZXJ9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDbGllbnQiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJNZXNzYWdlTGlzdCIsIkJ1dHRvblNlbmRTdGlja2VyIiwiU1VQQV9CQVNFX0tFWSIsIlNVUEFfQkFTRV9VUkwiLCJzdXBhYmFzZUNsaWVudCIsImVzY3V0YU1lbnNhZ2Vuc0VtVGVtcG9SZWFsIiwiYWRpY2lvbmFNZW5zYWdlbSIsImZyb20iLCJvbiIsInJlc3Bvc3RhTGl2ZSIsIm5ldyIsInN1YnNjcmliZSIsIkNoYXRQYWdlIiwic2VsZWN0U3VwYUJhc2UiLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInRoZW4iLCJkYXRhIiwic2V0TGlzdGFEZU1lbnNhZ2VucyIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiZGUiLCJ1c3VhcmlvTG9nYWRvIiwidGV4dG8iLCJpbnNlcnQiLCJjb25zb2xlIiwibG9nIiwic2V0TWVuc2FnZW0iLCJsaXN0YURlTWVuc2FnZW5zIiwicm90ZWFtZW50byIsInF1ZXJ5IiwidXNlcm5hbWUiLCJ2YWxvckF0dWFsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVuc2FnZW5zIiwiZm9ybSIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInZhbG9yIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0Iiwib25TdGlja2VyQ2xpY2siLCJzdGlja2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});