self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/settingspage/checkbox.tsx":
/*!**************************************************!*\
  !*** ./src/components/settingspage/checkbox.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": function() { return /* binding */ Checkbox; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\checkbox.tsx",
    _s = $RefreshSig$();




function Checkbox(props) {
  _s();

  var _this = this;

  var map = {};
  props.items.forEach(function (_, index) {
    map[index] = props["default"][index] || false;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(map),
      current = _useState[0],
      setCurrent = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      nonce = _useState2[0],
      update = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: props.items.map(function (value, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          marginTop: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            current[index] = !current[index];
            props.updated(current);
            update(nonce + 1);
          },
          style: {
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
            width: 30,
            height: 30,
            backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorSecondary
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              width: current[index] ? "calc(100% - 10px)" : "0%",
              height: current[index] ? "calc(100% - 10px)" : "0%",
              opacity: current[index] ? 1 : 0,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              transition: "opacity .2s, width .2s, height .2s",
              backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.accentColor
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%",
            position: "relative"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              overflow: "hidden",
              width: "calc(100% - 5px)",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 71
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 24
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

_s(Checkbox, "LmX+etXmTDzqbUJzPp57v68Xs7U=");

_c = Checkbox;


var _c;

$RefreshReg$(_c, "Checkbox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL2NoZWNrYm94LnRzeCJdLCJuYW1lcyI6WyJDaGVja2JveCIsInByb3BzIiwibWFwIiwiaXRlbXMiLCJmb3JFYWNoIiwiXyIsImluZGV4IiwidXNlU3RhdGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm5vbmNlIiwidXBkYXRlIiwidmFsdWUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwidXBkYXRlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJTZXR0aW5ncyIsImJhY2tncm91bmRDb2xvclNlY29uZGFyeSIsIm9wYWNpdHkiLCJsZWZ0IiwidG9wIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImFjY2VudENvbG9yIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBMENDLEtBQTFDLEVBQWdKO0FBQUE7O0FBQUE7O0FBQzVJLE1BQU1DLEdBQTJCLEdBQUcsRUFBcEM7QUFDQUQsT0FBSyxDQUFDRSxLQUFOLENBQVlDLE9BQVosQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQVk7QUFDNUJKLE9BQUcsQ0FBQ0ksS0FBRCxDQUFILEdBQWFMLEtBQUssV0FBTCxDQUFjSyxLQUFkLEtBQXdCLEtBQXJDO0FBQ0gsR0FGRDs7QUFGNEksa0JBTTlHQywrQ0FBUSxDQUFDTCxHQUFELENBTnNHO0FBQUEsTUFNcklNLE9BTnFJO0FBQUEsTUFNNUhDLFVBTjRIOztBQUFBLG1CQU9wSEYsK0NBQVEsQ0FBQyxDQUFELENBUDRHO0FBQUEsTUFPcklHLEtBUHFJO0FBQUEsTUFPOUhDLE1BUDhIOztBQVE1SSxzQkFBTztBQUFBLGNBRUNWLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxHQUFaLENBQWdCLFVBQUNVLEtBQUQsRUFBUU4sS0FBUixFQUFnQjtBQUM1QiwwQkFBTztBQUFpQixhQUFLLEVBQUU7QUFBQ08saUJBQU8sRUFBRSxNQUFWO0FBQWtCQyxtQkFBUyxFQUFFO0FBQTdCLFNBQXhCO0FBQUEsZ0NBQ0g7QUFBSyxpQkFBTyxFQUFFLG1CQUFJO0FBQ2ROLG1CQUFPLENBQUNGLEtBQUQsQ0FBUCxHQUFpQixDQUFDRSxPQUFPLENBQUNGLEtBQUQsQ0FBekI7QUFDQUwsaUJBQUssQ0FBQ2MsT0FBTixDQUFjUCxPQUFkO0FBQ0FHLGtCQUFNLENBQUNELEtBQUssR0FBQyxDQUFQLENBQU47QUFFSCxXQUxEO0FBS0csZUFBSyxFQUFFO0FBQUNNLG9CQUFRLEVBQUMsVUFBVjtBQUFzQkMsa0JBQU0sRUFBQyxTQUE3QjtBQUF3Q0osbUJBQU8sRUFBRSxjQUFqRDtBQUFpRUssaUJBQUssRUFBRSxFQUF4RTtBQUE0RUMsa0JBQU0sRUFBRSxFQUFwRjtBQUF3RkMsMkJBQWUsRUFBRUMsNkZBQThDQztBQUF2SixXQUxWO0FBQUEsaUNBTUk7QUFBSyxpQkFBSyxFQUFFO0FBQUNKLG1CQUFLLEVBQUVWLE9BQU8sQ0FBQ0YsS0FBRCxDQUFQLEdBQWUsbUJBQWYsR0FBbUMsSUFBM0M7QUFBaURhLG9CQUFNLEVBQUVYLE9BQU8sQ0FBQ0YsS0FBRCxDQUFQLEdBQWUsbUJBQWYsR0FBbUMsSUFBNUY7QUFBa0dpQixxQkFBTyxFQUFFZixPQUFPLENBQUNGLEtBQUQsQ0FBUCxHQUFlLENBQWYsR0FBaUIsQ0FBNUg7QUFBK0hrQixrQkFBSSxFQUFFLEtBQXJJO0FBQTRJQyxpQkFBRyxFQUFFLEtBQWpKO0FBQXdKQyx1QkFBUyxFQUFFLHVCQUFuSztBQUE0TFYsc0JBQVEsRUFBRSxVQUF0TTtBQUFrTlcsd0JBQVUsRUFBRSxvQ0FBOU47QUFBb1FQLDZCQUFlLEVBQUVDLGdGQUFpQ087QUFBdFQ7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQVNIO0FBQUssZUFBSyxFQUFFO0FBQUNWLGlCQUFLLEVBQUUsTUFBUjtBQUFnQkYsb0JBQVEsRUFBQztBQUF6QixXQUFaO0FBQUEsaUNBQWtEO0FBQUssaUJBQUssRUFBRTtBQUFDQSxzQkFBUSxFQUFFLFVBQVg7QUFBdUJRLGtCQUFJLEVBQUUsRUFBN0I7QUFBaUNDLGlCQUFHLEVBQUUsS0FBdEM7QUFBNkNDLHVCQUFTLEVBQUUsa0JBQXhEO0FBQTRFRyxzQkFBUSxFQUFFLFFBQXRGO0FBQWdHWCxtQkFBSyxFQUFFLGtCQUF2RztBQUEySFksMEJBQVksRUFBRSxVQUF6STtBQUFxSkMsd0JBQVUsRUFBRTtBQUFqSyxhQUFaO0FBQUEsc0JBQXlMbkI7QUFBekw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRHO0FBQUEsU0FBVU4sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFXSCxLQVpEO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBaUJIOztHQXpCUU4sUTs7S0FBQUEsUTtBQTJCVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMGM5YzIxYjRkNmRhMTkwMDA2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIjtcblxuZnVuY3Rpb24gQ2hlY2tib3g8aXRlbXMgZXh0ZW5kcyBzdHJpbmdbXT4ocHJvcHM6IHtpdGVtczogaXRlbXMsIGRlZmF1bHQ6IHtbazogbnVtYmVyXTogdHJ1ZX0sIHVwZGF0ZWQ6IChjdXJyZW50OiB7W2s6IG51bWJlcl06IGJvb2xlYW59KT0+dm9pZH0pe1xuICAgIGNvbnN0IG1hcDoge1tzOiBudW1iZXJdOiBib29sZWFufSA9IHt9O1xuICAgIHByb3BzLml0ZW1zLmZvckVhY2goKF8sIGluZGV4KT0+e1xuICAgICAgICBtYXBbaW5kZXhdID0gcHJvcHMuZGVmYXVsdFtpbmRleF0gfHwgZmFsc2U7XG4gICAgfSlcblxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKG1hcCk7XG4gICAgY29uc3QgW25vbmNlLCB1cGRhdGVdID0gdXNlU3RhdGUoMCk7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLml0ZW1zLm1hcCgodmFsdWUsIGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogNH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W2luZGV4XSA9ICFjdXJyZW50W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnVwZGF0ZWQoY3VycmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZShub25jZSsxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH19IHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCBjdXJzb3I6XCJwb2ludGVyXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IGN1cnJlbnRbaW5kZXhdP1wiY2FsYygxMDAlIC0gMTBweClcIjpcIjAlXCIsIGhlaWdodDogY3VycmVudFtpbmRleF0/XCJjYWxjKDEwMCUgLSAxMHB4KVwiOlwiMCVcIiwgb3BhY2l0eTogY3VycmVudFtpbmRleF0/MTowICxsZWZ0OiBcIjUwJVwiLCB0b3A6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdHJhbnNpdGlvbjogXCJvcGFjaXR5IC4ycywgd2lkdGggLjJzLCBoZWlnaHQgLjJzXCIsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yfX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwifX0+PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IDEwLCB0b3A6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aWR0aDogXCJjYWxjKDEwMCUgLSA1cHgpXCIsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e3ZhbHVlfTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQge0NoZWNrYm94fSJdLCJzb3VyY2VSb290IjoiIn0=