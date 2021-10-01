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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/seanflowy/WebstormProjects/fake-api/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar UserIds = [\"sean\", \"moon\"];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: i + 1,\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + i * 1000 * 60,\n    // 밀리세컨드 -> 분 단위로 변경\n    text: \"mock-\".concat(i + 1)\n  };\n}); // const msgs = [{\n//     id: 1,\n//     userId: getRandomUserId(),\n//     timestamp: 1234567890123, // 13자리 필요\n//     text: 'mock-1'\n// }]\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length + 1,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: text\n    };\n    setMsgs(function (msgs) {\n      return [newMsg].concat((0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs));\n    });\n  };\n\n  var onUpdate = function onUpdate(text, id) {\n    setMsgs(function (msgs) {\n      var targetIdx = msgs.findIndex(function (msg) {\n        return msg.id === id;\n      });\n      if (targetIdx < 0) return msgs;\n\n      var newMsgs = (0,_Users_seanflowy_WebstormProjects_fake_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);\n\n      newMsgs.splice(targetIdx, 1, _objectSpread(_objectSpread({}, msgs[targetIdx]), {}, {\n        text: text\n      }));\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (msg) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, msg), msg.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 18\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQ04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcblxuY29uc3QgVXNlcklkcyA9IFtcInNlYW5cIiwgXCJtb29uXCJdO1xuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4ge1xuICByZXR1cm4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbn07XG5cbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKVxuICAubWFwKChfLCBpKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpICsgMSxcbiAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLCAvLyDrsIDrpqzshLjsu6jrk5wgLT4g67aEIOuLqOychOuhnCDrs4Dqsr1cbiAgICAgIHRleHQ6IGBtb2NrLSR7aSArIDF9YCxcbiAgICB9O1xuICB9KTtcblxuLy8gY29uc3QgbXNncyA9IFt7XG4vLyAgICAgaWQ6IDEsXG4vLyAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsIC8vIDEz7J6Q66asIO2VhOyalFxuLy8gICAgIHRleHQ6ICdtb2NrLTEnXG4vLyB9XVxuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQsXG4gICAgfTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRJZHggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKVxuICAgICAgICAgIGlmKHRhcmdldElkeCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SWR4LCAxLCB7XG4gICAgICAgICAgICAgIC4uLm1zZ3NbdGFyZ2V0SWR4XSxcbiAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKChtc2cpID0+IHtcbiAgICAgICAgICByZXR1cm4gPE1zZ0l0ZW0ga2V5PXttc2cuaWR9IHsuLi5tc2d9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldElkeCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});