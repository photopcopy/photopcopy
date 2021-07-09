self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/maincontent/post.tsx":
/*!*********************************************!*\
  !*** ./src/components/maincontent/post.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/settings */ "./src/scripts/settings.ts");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/post.module.css */ "./src/styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\maincontent\\post.tsx";



function Post(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorTertiary,
      borderRadius: 8,
      minHeight: 100,
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        minWidth: 300,
        width: "70%",
        maxWidth: 500
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          margin: 6,
          width: "100%",
          height: 40,
          display: "flex",
          alignItems: "center",
          backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorSecondary
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./assets/DefaultProfilePic.svg",
          style: {
            height: "100%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            fontSize: 25,
            marginLeft: 5
          },
          children: "Developer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, this)]
      }, "postDataContainer", true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, this)
    }, "contentContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_2___default().post),
      style: {
        width: "70%",
        margin: 6,
        backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorSecondary,
        borderRadius: 8
      },
      children: "THIS"
    }, "chatContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this)]
  }, props.postId, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

_c = Post;


var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdC50c3giXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiU2V0dGluZ3MiLCJib3JkZXJSYWRpdXMiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwibWluV2lkdGgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvclNlY29uZGFyeSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIlBvc3RTdHlsZSIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBc0M7QUFDbEMsc0JBQU87QUFBd0IsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUVDLDRGQUFsQjtBQUFpRUMsa0JBQVksRUFBRSxDQUEvRTtBQUFrRkMsZUFBUyxFQUFFLEdBQTdGO0FBQWtHQyxhQUFPLEVBQUM7QUFBMUcsS0FBL0I7QUFBQSw0QkFDSDtBQUE0QixXQUFLLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxHQUFYO0FBQWdCQyxhQUFLLEVBQUUsS0FBdkI7QUFBOEJDLGdCQUFRLEVBQUU7QUFBeEMsT0FBbkM7QUFBQSw2QkFDSTtBQUE2QixhQUFLLEVBQUU7QUFBQ0MsZ0JBQU0sRUFBRSxDQUFUO0FBQVlGLGVBQUssRUFBRSxNQUFuQjtBQUEyQkcsZ0JBQU0sRUFBRSxFQUFuQztBQUF1Q0wsaUJBQU8sRUFBQyxNQUEvQztBQUF1RE0sb0JBQVUsRUFBRSxRQUFuRTtBQUE2RVYseUJBQWUsRUFBRUMsNkZBQThDVTtBQUE1SSxTQUFwQztBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFDLGdDQUFUO0FBQTBDLGVBQUssRUFBRTtBQUFDRixrQkFBTSxFQUFFO0FBQVQ7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU0sZUFBSyxFQUFFO0FBQUNHLG9CQUFRLEVBQUMsRUFBVjtBQUFjQyxzQkFBVSxFQUFFO0FBQTFCLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQSxTQUFTLG1CQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFTLGtCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQU9IO0FBQXlCLGVBQVMsRUFBRUMscUVBQXBDO0FBQW9ELFdBQUssRUFBRTtBQUFDUixhQUFLLEVBQUUsS0FBUjtBQUFlRSxjQUFNLEVBQUUsQ0FBdkI7QUFBMEJSLHVCQUFlLEVBQUVDLDZGQUEzQztBQUEyRkMsb0JBQVksRUFBRTtBQUF6RyxPQUEzRDtBQUFBO0FBQUEsT0FBUyxlQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRztBQUFBLEtBQVVILEtBQUssQ0FBQ2dCLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVNIOztLQVZRakIsSTtBQVlUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2ZDgzNTI0ZTk3N2E3ODYxZTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3NldHRpbmdzXCJcbmltcG9ydCBQb3N0U3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3NcIlxuXG5mdW5jdGlvbiBQb3N0KHByb3BzOiB7cG9zdElkOiBzdHJpbmd9KXtcbiAgICByZXR1cm4gPGRpdiBrZXk9e3Byb3BzLnBvc3RJZH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSwgYm9yZGVyUmFkaXVzOiA4LCBtaW5IZWlnaHQ6IDEwMCwgZGlzcGxheTpcImZsZXhcIn19PlxuICAgICAgICA8ZGl2IGtleT1cImNvbnRlbnRDb250YWluZXJcIiBzdHlsZT17e21pbldpZHRoOiAzMDAsIHdpZHRoOiBcIjcwJVwiLCBtYXhXaWR0aDogNTAwfX0+XG4gICAgICAgICAgICA8ZGl2IGtleT1cInBvc3REYXRhQ29udGFpbmVyXCIgc3R5bGU9e3ttYXJnaW46IDYsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiA0MCwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5fX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9EZWZhdWx0UHJvZmlsZVBpYy5zdmdcIiBzdHlsZT17e2hlaWdodDogXCIxMDAlXCJ9fS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZToyNSwgbWFyZ2luTGVmdDogNX19PkRldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBrZXk9XCJjaGF0Q29udGFpbmVyXCIgY2xhc3NOYW1lPXtQb3N0U3R5bGUucG9zdH0gc3R5bGU9e3t3aWR0aDogXCI3MCVcIiwgbWFyZ2luOiA2LCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnksIGJvcmRlclJhZGl1czogOH19PlRISVM8L2Rpdj5cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IHtQb3N0fSJdLCJzb3VyY2VSb290IjoiIn0=