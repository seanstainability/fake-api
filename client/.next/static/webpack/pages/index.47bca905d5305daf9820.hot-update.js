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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/seanflowy/WebstormProjects/fake-api/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar UserIds = [\"sean\", \"moon\"];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n}; // const originalMsgs = Array(50)\n//   .fill(0)\n//   .map((_, i) => {\n//     return {\n//       id: i + 1,\n//       userId: getRandomUserId(),\n//       timestamp: 1234567890123 + i * 1000 * 60, // 밀리세컨드 -> 분 단위로 변경\n//       text: `mock-${i + 1}`,\n//     };\n//   });\n// console.log(JSON.stringify(originalMsgs));\n// const msgs = [{\n//     id: 1,\n//     userId: getRandomUserId(),\n//     timestamp: 1234567890123, // 13자리 필요\n//     text: 'mock-1'\n// }]\n\n\nvar MsgList = function MsgList(_ref) {\n  _s();\n\n  var smsgs = _ref.smsgs,\n      users = _ref.users;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)(),\n      _useRouter$query$user = _useRouter.query.userId,\n      userId = _useRouter$query$user === void 0 ? \"\" : _useRouter$query$user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(smsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__.default)(fetchMoreEl);\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      hasNext = _useState3[0],\n      setHasNext = _useState3[1];\n\n  var onCreate = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(text) {\n      var newMsg;\n      return _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"post\", \"/messages\", {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context.sent;\n\n              if (newMsg) {\n                _context.next = 5;\n                break;\n              }\n\n              throw Error(\"something wrong!\");\n\n            case 5:\n              // const newMsg = {\n              //   id: msgs.length + 1,\n              //   userId: getRandomUserId(),\n              //   timestamp: Date.now(),\n              //   text,\n              // };\n              setMsgs(function (msgs) {\n                return [newMsg].concat((0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs));\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onCreate(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var onUpdate = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(text, id) {\n      var newMsg;\n      return _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"put\", \"/messages/\".concat(id), {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context2.sent;\n\n              if (newMsg) {\n                _context2.next = 5;\n                break;\n              }\n\n              throw Error(\"something wrong!\");\n\n            case 5:\n              setMsgs(function (msgs) {\n                var targetIdx = msgs.findIndex(function (msg) {\n                  return msg.id === id;\n                });\n                if (targetIdx < 0) return msgs;\n\n                var newMsgs = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs); // newMsgs.splice(targetIdx, 1, {\n                //   ...msgs[targetIdx],\n                //   text,\n                // });\n\n\n                newMsgs.splice(targetIdx, 1, newMsg);\n                return newMsgs;\n              });\n              doneEdit();\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onUpdate(_x2, _x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var _onDelete = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(id) {\n      var receivedId;\n      return _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"delete\", \"/messages/\".concat(id), {\n                params: {\n                  userId: userId\n                } // 서버에서는 query로 받아야 함\n\n              });\n\n            case 2:\n              receivedId = _context3.sent;\n              setMsgs(function (msgs) {\n                var targetIdx = msgs.findIndex(function (msg) {\n                  return msg.id === receivedId + \"\";\n                });\n                if (targetIdx < 0) return msgs;\n\n                var newMsgs = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n                newMsgs.splice(targetIdx, 1);\n                return newMsgs;\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function onDelete(_x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  var getMsgs = /*#__PURE__*/function () {\n    var _ref5 = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {\n      var _msgs;\n\n      var newMsgs;\n      return _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"get\", \"/messages\", {\n                params: {\n                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || \"\"\n                }\n              });\n\n            case 2:\n              newMsgs = _context4.sent;\n\n              if (!(newMsgs.length === 0)) {\n                _context4.next = 6;\n                break;\n              }\n\n              setHasNext(false);\n              return _context4.abrupt(\"return\");\n\n            case 6:\n              setMsgs(function (msgs) {\n                return [].concat((0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs), (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMsgs));\n              });\n\n            case 7:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function getMsgs() {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n\n  console.log(\"render\");\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (intersecting && hasNext) getMsgs();\n  }, [intersecting]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_6__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (msg) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, msg), {}, {\n          onUpdate: onUpdate,\n          isEditing: editingId === msg.id,\n          startEdit: function startEdit() {\n            return setEditingId(msg.id);\n          },\n          onDelete: function onDelete() {\n            return _onDelete(msg.id);\n          },\n          me: userId\n        }), msg.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n      ref: fetchMoreEl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"c9K28QHSOzlTp8Jq5VxzkEVtASA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__.default];\n});\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsVUFBZDtBQUFBLGdCQUNHUixJQUFJLENBQUM0QixHQUFMLENBQVMsVUFBQ1osR0FBRCxFQUFTO0FBQ2pCLDRCQUNFLCtEQUFDLDZDQUFELGtDQUVNQSxHQUZOO0FBR0Usa0JBQVEsRUFBRUosUUFIWjtBQUlFLG1CQUFTLEVBQUVWLFNBQVMsS0FBS2MsR0FBRyxDQUFDSCxFQUovQjtBQUtFLG1CQUFTLEVBQUU7QUFBQSxtQkFBTVYsWUFBWSxDQUFDYSxHQUFHLENBQUNILEVBQUwsQ0FBbEI7QUFBQSxXQUxiO0FBTUUsa0JBQVEsRUFBRTtBQUFBLG1CQUFNTyxTQUFRLENBQUNKLEdBQUcsQ0FBQ0gsRUFBTCxDQUFkO0FBQUEsV0FOWjtBQU9FLFlBQUUsRUFBRWQ7QUFQTixZQUNPaUIsR0FBRyxDQUFDSCxFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFXRCxPQVpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBaUJFO0FBQUssU0FBRyxFQUFFVDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQSxrQkFERjtBQXFCRCxDQTNGRDs7R0FBTVQ7VUFHQVAsb0RBSWlCQzs7O0tBUGpCTTtBQTZGTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MDRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi9mZXRjaGVyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGxcIjtcblxuY29uc3QgVXNlcklkcyA9IFtcInNlYW5cIiwgXCJtb29uXCJdO1xuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4ge1xuICByZXR1cm4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbn07XG5cbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuLy8gICAuZmlsbCgwKVxuLy8gICAubWFwKChfLCBpKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIGlkOiBpICsgMSxcbi8vICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4vLyAgICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLCAvLyDrsIDrpqzshLjsu6jrk5wgLT4g67aEIOuLqOychOuhnCDrs4Dqsr1cbi8vICAgICAgIHRleHQ6IGBtb2NrLSR7aSArIDF9YCxcbi8vICAgICB9O1xuLy8gICB9KTtcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpO1xuXG4vLyBjb25zdCBtc2dzID0gW3tcbi8vICAgICBpZDogMSxcbi8vICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuLy8gICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMywgLy8gMTPsnpDrpqwg7ZWE7JqUXG4vLyAgICAgdGV4dDogJ21vY2stMSdcbi8vIH1dXG5cbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgdXNlcklkID0gXCJcIiB9LFxuICB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpO1xuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInBvc3RcIiwgXCIvbWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nIVwiKTtcbiAgICAvLyBjb25zdCBuZXdNc2cgPSB7XG4gICAgLy8gICBpZDogbXNncy5sZW5ndGggKyAxLFxuICAgIC8vICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAvLyAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAvLyAgIHRleHQsXG4gICAgLy8gfTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicHV0XCIsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmchXCIpO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldElkeCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldElkeCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIC8vIG5ld01zZ3Muc3BsaWNlKHRhcmdldElkeCwgMSwge1xuICAgICAgLy8gICAuLi5tc2dzW3RhcmdldElkeF0sXG4gICAgICAvLyAgIHRleHQsXG4gICAgICAvLyB9KTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldElkeCwgMSwgbmV3TXNnKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICAgIGRvbmVFZGl0KCk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcihcImRlbGV0ZVwiLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LCAvLyDshJzrsoTsl5DshJzripQgcXVlcnnroZwg67Cb7JWE7JW8IO2VqFxuICAgIH0pO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldElkeCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArIFwiXCIpO1xuICAgICAgaWYgKHRhcmdldElkeCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldElkeCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRNc2dzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKFwiZ2V0XCIsIFwiL21lc3NhZ2VzXCIsIHtcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgXCJcIiB9LFxuICAgIH0pO1xuICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0SGFzTmV4dChmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNc2dzKCk7XG4gIH0sIFtpbnRlcnNlY3RpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKG1zZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAgICBrZXk9e21zZy5pZH1cbiAgICAgICAgICAgICAgey4uLm1zZ31cbiAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0gbXNnLmlkfVxuICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZChtc2cuaWQpfVxuICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUobXNnLmlkKX1cbiAgICAgICAgICAgICAgbWU9e3VzZXJJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsInVzZVJvdXRlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJZHgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInBhcmFtcyIsInJlY2VpdmVkSWQiLCJnZXRNc2dzIiwiY3Vyc29yIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});