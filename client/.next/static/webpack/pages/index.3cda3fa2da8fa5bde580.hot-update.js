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

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/seanflowy/WebstormProjects/fake-api/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar UserIds = [\"sean\", \"moon\"];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n}; // const originalMsgs = Array(50)\n//   .fill(0)\n//   .map((_, i) => {\n//     return {\n//       id: i + 1,\n//       userId: getRandomUserId(),\n//       timestamp: 1234567890123 + i * 1000 * 60, // 밀리세컨드 -> 분 단위로 변경\n//       text: `mock-${i + 1}`,\n//     };\n//   });\n// console.log(JSON.stringify(originalMsgs));\n// const msgs = [{\n//     id: 1,\n//     userId: getRandomUserId(),\n//     timestamp: 1234567890123, // 13자리 필요\n//     text: 'mock-1'\n// }]\n\n\nvar MsgList = function MsgList(_ref) {\n  _s();\n\n  var smsgs = _ref.smsgs,\n      users = _ref.users;\n  var client = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQueryClient)();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),\n      _useRouter$query$user = _useRouter.query.userId,\n      userId = _useRouter$query$user === void 0 ? \"\" : _useRouter$query$user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(smsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__.default)(fetchMoreEl);\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      hasNext = _useState3[0],\n      setHasNext = _useState3[1];\n\n  var _useMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)(function (_ref2) {\n    var text = _ref2.text;\n    return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_9__.CREATE_MESSAGE, {\n      text: text,\n      userId: userId\n    });\n  }, {\n    onSuccess: function onSuccess(_ref3) {\n      var createMessage = _ref3.createMessage;\n      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function (old) {\n        // 클라이언트 캐시에 업데이트\n        return {\n          messages: [createMessage].concat((0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(old.messages))\n        };\n      });\n    }\n  }),\n      onCreate = _useMutation.mutate; // const onCreate = async (text) => {\n  //   const newMsg = await queryClient(\"post\", \"/messages\", { text, userId });\n  //   if (!newMsg) throw Error(\"something wrong!\");\n  //   // const newMsg = {\n  //   //   id: msgs.length + 1,\n  //   //   userId: getRandomUserId(),\n  //   //   timestamp: Date.now(),\n  //   //   text,\n  //   // };\n  //   setMsgs((msgs) => [newMsg, ...msgs]);\n  // };\n\n\n  var _useMutation2 = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)(function (_ref4) {\n    var text = _ref4.text,\n        id = _ref4.id;\n    return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_9__.UPDATE_MESSAGE, {\n      text: text,\n      id: id,\n      userId: userId\n    });\n  }, {\n    onSuccess: function onSuccess(_ref5) {\n      var updateMessage = _ref5.updateMessage;\n      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function (old) {\n        var targetIdx = old.messages.findIndex(function (msg) {\n          return msg.id === updateMessage.id;\n        });\n        if (targetIdx < 0) return old;\n\n        var newMsgs = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(old.messages);\n\n        newMsgs.splice(targetIdx, 1, updateMessage);\n        return {\n          messages: newMsgs\n        };\n      });\n      doneEdit();\n    }\n  }),\n      onUpdate = _useMutation2.mutate; // const onUpdate = async (text, id) => {\n  //   const newMsg = await queryClient(\"put\", `/messages/${id}`, {\n  //     text,\n  //     userId,\n  //   });\n  //   if (!newMsg) throw Error(\"something wrong!\");\n  //   setMsgs((msgs) => {\n  //     const targetIdx = msgs.findIndex((msg) => msg.id === id);\n  //     if (targetIdx < 0) return msgs;\n  //     const newMsgs = [...msgs];\n  //     // newMsgs.splice(targetIdx, 1, {\n  //     //   ...msgs[targetIdx],\n  //     //   text,\n  //     // });\n  //     newMsgs.splice(targetIdx, 1, newMsg);\n  //     return newMsgs;\n  //   });\n  //   doneEdit();\n  // };\n\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var _useMutation3 = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)(function (_ref6) {\n    var id = _ref6.id;\n    return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_9__.DELETE_MESSAGE, {\n      id: id,\n      userId: userId\n    });\n  }, {\n    onSuccess: function onSuccess(_ref7) {\n      var deleteMessage = _ref7.deleteMessage;\n      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function (old) {\n        var targetIdx = old.messages.findIndex(function (msg) {\n          return msg.id === deleteMessage.id;\n        });\n        if (targetIdx < 0) return old;\n\n        var newMsgs = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(old.messages);\n\n        newMsgs.splice(targetIdx, 1);\n        return {\n          messages: newMsgs\n        };\n      });\n    }\n  }),\n      _onDelete = _useMutation3.mutate; // const onDelete = async (id) => {\n  //   const receivedId = await queryClient(\"delete\", `/messages/${id}`, {\n  //     params: { userId }, // 서버에서는 query로 받아야 함\n  //   });\n  //   setMsgs((msgs) => {\n  //     const targetIdx = msgs.findIndex((msg) => msg.id === receivedId + \"\");\n  //     if (targetIdx < 0) return msgs;\n  //     const newMsgs = [...msgs];\n  //     newMsgs.splice(targetIdx, 1);\n  //     return newMsgs;\n  //   });\n  // };\n  // const getMsgs = async () => {\n  //   const newMsgs = await queryClient(\"get\", \"/messages\", {\n  //     params: { cursor: msgs[msgs.length - 1]?.id || \"\" },\n  //   });\n  //   if (newMsgs.length === 0) {\n  //     setHasNext(false);\n  //     return;\n  //   }\n  //   setMsgs((msgs) => [...msgs, ...newMsgs]);\n  // };\n\n\n  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function () {\n    return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_9__.GET_MESSAGES);\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      isError = _useQuery.isError; // 즉시 호출을 막기 위해 함수를 한 번 더 감싸준다. 기본적으로 윈도우 포커스 시 리패치한다.\n\n\n  console.log(\"render\"); // console.log(data);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!(data !== null && data !== void 0 && data.messages)) return;\n    console.log(\"messages changed!\");\n    setMsgs((data === null || data === void 0 ? void 0 : data.messages) || []);\n  }, [data === null || data === void 0 ? void 0 : data.messages]);\n\n  if (isError) {\n    console.error(error);\n    return null;\n  } // useEffect(() => {\n  //   if (intersecting && hasNext) getMsgs();\n  // }, [intersecting]);\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (msg) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, msg), {}, {\n          onUpdate: onUpdate,\n          isEditing: editingId === msg.id,\n          startEdit: function startEdit() {\n            return setEditingId(msg.id);\n          },\n          onDelete: function onDelete() {\n            return _onDelete(msg.id);\n          },\n          me: userId // user={users[msg.userId]}\n          ,\n          user: users.find(function (user) {\n            return user.id === msg.userId;\n          })\n        }), msg.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 187,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      ref: fetchMoreEl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"ezvH+OI9n61S+FKCKLWYzi2xkgM=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_8__.useQueryClient, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__.default, react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation, react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation, react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation, react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery];\n});\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBbUJFO0FBQUssU0FBRyxFQUFFYjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQSxrQkFERjtBQXVCRCxDQXJLRDs7R0FBTVY7VUFDV1YseURBR1hKLG9EQUlpQkMsK0RBR1FDLHNEQTBCQUEsc0RBMENBQSxzREEwQ0lDOzs7S0F6SDdCVztBQXVLTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MDRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcbmltcG9ydCBxdWVyeUNsaWVudCwgeyBmZXRjaGVyLCBRdWVyeUtleXMgfSBmcm9tIFwiLi4vcXVlcnlDbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gXCIuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHtcbiAgQ1JFQVRFX01FU1NBR0UsXG4gIERFTEVURV9NRVNTQUdFLFxuICBHRVRfTUVTU0FHRVMsXG4gIFVQREFURV9NRVNTQUdFLFxufSBmcm9tIFwiLi4vZ3JhcGhxbC9tZXNzYWdlXCI7XG5cbmNvbnN0IFVzZXJJZHMgPSBbXCJzZWFuXCIsIFwibW9vblwiXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IHtcbiAgcmV0dXJuIFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG59O1xuXG4vLyBjb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcbi8vICAgLmZpbGwoMClcbi8vICAgLm1hcCgoXywgaSkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBpZDogaSArIDEsXG4vLyAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuLy8gICAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCwgLy8g67CA66as7IS47Luo65OcIC0+IOu2hCDri6jsnITroZwg67OA6rK9XG4vLyAgICAgICB0ZXh0OiBgbW9jay0ke2kgKyAxfWAsXG4vLyAgICAgfTtcbi8vICAgfSk7XG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTtcblxuLy8gY29uc3QgbXNncyA9IFt7XG4vLyAgICAgaWQ6IDEsXG4vLyAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsIC8vIDEz7J6Q66asIO2VhOyalFxuLy8gICAgIHRleHQ6ICdtb2NrLTEnXG4vLyB9XVxuXG5jb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MsIHVzZXJzIH0pID0+IHtcbiAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9IFwiXCIgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncyk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKTtcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgeyBtdXRhdGU6IG9uQ3JlYXRlIH0gPSB1c2VNdXRhdGlvbihcbiAgICAoeyB0ZXh0IH0pID0+IGZldGNoZXIoQ1JFQVRFX01FU1NBR0UsIHsgdGV4dCwgdXNlcklkIH0pLFxuICAgIHtcbiAgICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XG4gICAgICAgICAgLy8g7YG065287J207Ja47Yq4IOy6kOyLnOyXkCDsl4XrjbDsnbTtirhcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtjcmVhdGVNZXNzYWdlLCAuLi5vbGQubWVzc2FnZXNdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLy8gY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xuICAvLyAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IHF1ZXJ5Q2xpZW50KFwicG9zdFwiLCBcIi9tZXNzYWdlc1wiLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgLy8gICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmchXCIpO1xuICAvLyAgIC8vIGNvbnN0IG5ld01zZyA9IHtcbiAgLy8gICAvLyAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gIC8vICAgLy8gICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAvLyAgIC8vICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAvLyAgIC8vICAgdGV4dCxcbiAgLy8gICAvLyB9O1xuICAvLyAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgLy8gfTtcblxuICBjb25zdCB7IG11dGF0ZTogb25VcGRhdGUgfSA9IHVzZU11dGF0aW9uKFxuICAgICh7IHRleHQsIGlkIH0pID0+IGZldGNoZXIoVVBEQVRFX01FU1NBR0UsIHsgdGV4dCwgaWQsIHVzZXJJZCB9KSxcbiAgICB7XG4gICAgICBvblN1Y2Nlc3M6ICh7IHVwZGF0ZU1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhcmdldElkeCA9IG9sZC5tZXNzYWdlcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAobXNnKSA9PiBtc2cuaWQgPT09IHVwZGF0ZU1lc3NhZ2UuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICh0YXJnZXRJZHggPCAwKSByZXR1cm4gb2xkO1xuICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ub2xkLm1lc3NhZ2VzXTtcbiAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJZHgsIDEsIHVwZGF0ZU1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlczogbmV3TXNncyxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZG9uZUVkaXQoKTtcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIC8vIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gIC8vICAgY29uc3QgbmV3TXNnID0gYXdhaXQgcXVlcnlDbGllbnQoXCJwdXRcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgLy8gICAgIHRleHQsXG4gIC8vICAgICB1c2VySWQsXG4gIC8vICAgfSk7XG4gIC8vICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nIVwiKTtcbiAgLy8gICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gIC8vICAgICBjb25zdCB0YXJnZXRJZHggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgLy8gICAgIGlmICh0YXJnZXRJZHggPCAwKSByZXR1cm4gbXNncztcbiAgLy8gICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gIC8vICAgICAvLyBuZXdNc2dzLnNwbGljZSh0YXJnZXRJZHgsIDEsIHtcbiAgLy8gICAgIC8vICAgLi4ubXNnc1t0YXJnZXRJZHhdLFxuICAvLyAgICAgLy8gICB0ZXh0LFxuICAvLyAgICAgLy8gfSk7XG4gIC8vICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJZHgsIDEsIG5ld01zZyk7XG4gIC8vICAgICByZXR1cm4gbmV3TXNncztcbiAgLy8gICB9KTtcbiAgLy8gICBkb25lRWRpdCgpO1xuICAvLyB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuXG4gIGNvbnN0IHsgbXV0YXRlOiBvbkRlbGV0ZSB9ID0gdXNlTXV0YXRpb24oXG4gICAgKHsgaWQgfSkgPT4gZmV0Y2hlcihERUxFVEVfTUVTU0FHRSwgeyBpZCwgdXNlcklkIH0pLFxuICAgIHtcbiAgICAgIG9uU3VjY2VzczogKHsgZGVsZXRlTWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SWR4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChcbiAgICAgICAgICAgIChtc2cpID0+IG1zZy5pZCA9PT0gZGVsZXRlTWVzc2FnZS5pZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHRhcmdldElkeCA8IDApIHJldHVybiBvbGQ7XG4gICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdO1xuICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldElkeCwgMSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBuZXdNc2dzLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLy8gY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgLy8gICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgcXVlcnlDbGllbnQoXCJkZWxldGVcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgLy8gICAgIHBhcmFtczogeyB1c2VySWQgfSwgLy8g7ISc67KE7JeQ7ISc64qUIHF1ZXJ566GcIOuwm+yVhOyVvCDtlahcbiAgLy8gICB9KTtcbiAgLy8gICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gIC8vICAgICBjb25zdCB0YXJnZXRJZHggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyBcIlwiKTtcbiAgLy8gICAgIGlmICh0YXJnZXRJZHggPCAwKSByZXR1cm4gbXNncztcbiAgLy8gICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gIC8vICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJZHgsIDEpO1xuICAvLyAgICAgcmV0dXJuIG5ld01zZ3M7XG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgZ2V0TXNncyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBjb25zdCBuZXdNc2dzID0gYXdhaXQgcXVlcnlDbGllbnQoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIiwge1xuICAvLyAgICAgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCBcIlwiIH0sXG4gIC8vICAgfSk7XG4gIC8vICAgaWYgKG5ld01zZ3MubGVuZ3RoID09PSAwKSB7XG4gIC8vICAgICBzZXRIYXNOZXh0KGZhbHNlKTtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vICAgc2V0TXNncygobXNncykgPT4gWy4uLm1zZ3MsIC4uLm5ld01zZ3NdKTtcbiAgLy8gfTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciB9ID0gdXNlUXVlcnkoUXVlcnlLZXlzLk1FU1NBR0VTLCAoKSA9PlxuICAgIGZldGNoZXIoR0VUX01FU1NBR0VTKVxuICApOyAvLyDsponsi5wg7Zi47Lac7J2EIOunieq4sCDsnITtlbQg7ZWo7IiY66W8IO2VnCDrsogg642UIOqwkOyLuOykgOuLpC4g6riw67O47KCB7Jy866GcIOyciOuPhOyasCDtj6zsu6TsiqQg7IucIOumrO2MqOy5mO2VnOuLpC5cbiAgY29uc29sZS5sb2coXCJyZW5kZXJcIik7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhPy5tZXNzYWdlcykgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZXMgY2hhbmdlZCFcIik7XG4gICAgc2V0TXNncyhkYXRhPy5tZXNzYWdlcyB8fCBbXSk7XG4gIH0sIFtkYXRhPy5tZXNzYWdlc10pO1xuXG4gIGlmIChpc0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TXNncygpO1xuICAvLyB9LCBbaW50ZXJzZWN0aW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKChtc2cpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgICAga2V5PXttc2cuaWR9XG4gICAgICAgICAgICAgIHsuLi5tc2d9XG4gICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IG1zZy5pZH1cbiAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQobXNnLmlkKX1cbiAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKG1zZy5pZCl9XG4gICAgICAgICAgICAgIG1lPXt1c2VySWR9XG4gICAgICAgICAgICAgIC8vIHVzZXI9e3VzZXJzW21zZy51c2VySWRdfVxuICAgICAgICAgICAgICB1c2VyPXt1c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSBtc2cudXNlcklkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwicXVlcnlDbGllbnQiLCJmZXRjaGVyIiwiUXVlcnlLZXlzIiwidXNlUm91dGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJDUkVBVEVfTUVTU0FHRSIsIkRFTEVURV9NRVNTQUdFIiwiR0VUX01FU1NBR0VTIiwiVVBEQVRFX01FU1NBR0UiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInNtc2dzIiwidXNlcnMiLCJjbGllbnQiLCJxdWVyeSIsInVzZXJJZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsInRleHQiLCJvblN1Y2Nlc3MiLCJjcmVhdGVNZXNzYWdlIiwic2V0UXVlcnlEYXRhIiwiTUVTU0FHRVMiLCJvbGQiLCJtZXNzYWdlcyIsIm9uQ3JlYXRlIiwibXV0YXRlIiwiaWQiLCJ1cGRhdGVNZXNzYWdlIiwidGFyZ2V0SWR4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25VcGRhdGUiLCJkZWxldGVNZXNzYWdlIiwib25EZWxldGUiLCJkYXRhIiwiZXJyb3IiLCJpc0Vycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZpbmQiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});