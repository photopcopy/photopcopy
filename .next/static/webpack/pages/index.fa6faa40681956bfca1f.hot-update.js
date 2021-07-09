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
          backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorTertiary
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdC50c3giXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiU2V0dGluZ3MiLCJib3JkZXJSYWRpdXMiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwibWluV2lkdGgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvclRlcnRpYXJ5IiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiUG9zdFN0eWxlIiwicG9zdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFzQztBQUNsQyxzQkFBTztBQUF3QixTQUFLLEVBQUU7QUFBQ0MscUJBQWUsRUFBRUMsNEZBQWxCO0FBQWlFQyxrQkFBWSxFQUFFLENBQS9FO0FBQWtGQyxlQUFTLEVBQUUsR0FBN0Y7QUFBa0dDLGFBQU8sRUFBQztBQUExRyxLQUEvQjtBQUFBLDRCQUNIO0FBQTRCLFdBQUssRUFBRTtBQUFDQyxnQkFBUSxFQUFFLEdBQVg7QUFBZ0JDLGFBQUssRUFBRSxLQUF2QjtBQUE4QkMsZ0JBQVEsRUFBRTtBQUF4QyxPQUFuQztBQUFBLDZCQUNJO0FBQTZCLGFBQUssRUFBRTtBQUFDQyxnQkFBTSxFQUFFLENBQVQ7QUFBWUYsZUFBSyxFQUFFLE1BQW5CO0FBQTJCRyxnQkFBTSxFQUFFLEVBQW5DO0FBQXVDTCxpQkFBTyxFQUFDLE1BQS9DO0FBQXVETSxvQkFBVSxFQUFFLFFBQW5FO0FBQTZFVix5QkFBZSxFQUFFQyw0RkFBNkNVO0FBQTNJLFNBQXBDO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUMsZ0NBQVQ7QUFBMEMsZUFBSyxFQUFFO0FBQUNGLGtCQUFNLEVBQUU7QUFBVDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTSxlQUFLLEVBQUU7QUFBQ0csb0JBQVEsRUFBQyxFQUFWO0FBQWNDLHNCQUFVLEVBQUU7QUFBMUIsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBLFNBQVMsbUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLE9BQVMsa0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBT0g7QUFBeUIsZUFBUyxFQUFFQyxxRUFBcEM7QUFBb0QsV0FBSyxFQUFFO0FBQUNSLGFBQUssRUFBRSxLQUFSO0FBQWVFLGNBQU0sRUFBRSxDQUF2QjtBQUEwQlIsdUJBQWUsRUFBRUMsNkZBQTNDO0FBQTJGQyxvQkFBWSxFQUFFO0FBQXpHLE9BQTNEO0FBQUE7QUFBQSxPQUFTLGVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBHO0FBQUEsS0FBVUgsS0FBSyxDQUFDZ0IsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBU0g7O0tBVlFqQixJO0FBWVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmE2ZmFhNDA2ODE5NTZiZmNhMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2V0dGluZ3NcIlxuaW1wb3J0IFBvc3RTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzc1wiXG5cbmZ1bmN0aW9uIFBvc3QocHJvcHM6IHtwb3N0SWQ6IHN0cmluZ30pe1xuICAgIHJldHVybiA8ZGl2IGtleT17cHJvcHMucG9zdElkfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBib3JkZXJSYWRpdXM6IDgsIG1pbkhlaWdodDogMTAwLCBkaXNwbGF5OlwiZmxleFwifX0+XG4gICAgICAgIDxkaXYga2V5PVwiY29udGVudENvbnRhaW5lclwiIHN0eWxlPXt7bWluV2lkdGg6IDMwMCwgd2lkdGg6IFwiNzAlXCIsIG1heFdpZHRoOiA1MDB9fT5cbiAgICAgICAgICAgIDxkaXYga2V5PVwicG9zdERhdGFDb250YWluZXJcIiBzdHlsZT17e21hcmdpbjogNiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IDQwLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeX19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvRGVmYXVsdFByb2ZpbGVQaWMuc3ZnXCIgc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwifX0vPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MjUsIG1hcmdpbkxlZnQ6IDV9fT5EZXZlbG9wZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYga2V5PVwiY2hhdENvbnRhaW5lclwiIGNsYXNzTmFtZT17UG9zdFN0eWxlLnBvc3R9IHN0eWxlPXt7d2lkdGg6IFwiNzAlXCIsIG1hcmdpbjogNiwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5LCBib3JkZXJSYWRpdXM6IDh9fT5USElTPC9kaXY+XG4gICAgPC9kaXY+XG59XG5cbmV4cG9ydCB7UG9zdH0iXSwic291cmNlUm9vdCI6IiJ9