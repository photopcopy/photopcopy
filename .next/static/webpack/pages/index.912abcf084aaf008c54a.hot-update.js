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
        title: value,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL2NoZWNrYm94LnRzeCJdLCJuYW1lcyI6WyJDaGVja2JveCIsInByb3BzIiwibWFwIiwiaXRlbXMiLCJmb3JFYWNoIiwiXyIsImluZGV4IiwidXNlU3RhdGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm5vbmNlIiwidXBkYXRlIiwidmFsdWUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwidXBkYXRlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJTZXR0aW5ncyIsImJhY2tncm91bmRDb2xvclNlY29uZGFyeSIsIm9wYWNpdHkiLCJsZWZ0IiwidG9wIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImFjY2VudENvbG9yIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBMENDLEtBQTFDLEVBQWdKO0FBQUE7O0FBQUE7O0FBQzVJLE1BQU1DLEdBQTJCLEdBQUcsRUFBcEM7QUFDQUQsT0FBSyxDQUFDRSxLQUFOLENBQVlDLE9BQVosQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQVk7QUFDNUJKLE9BQUcsQ0FBQ0ksS0FBRCxDQUFILEdBQWFMLEtBQUssV0FBTCxDQUFjSyxLQUFkLEtBQXdCLEtBQXJDO0FBQ0gsR0FGRDs7QUFGNEksa0JBTTlHQywrQ0FBUSxDQUFDTCxHQUFELENBTnNHO0FBQUEsTUFNcklNLE9BTnFJO0FBQUEsTUFNNUhDLFVBTjRIOztBQUFBLG1CQU9wSEYsK0NBQVEsQ0FBQyxDQUFELENBUDRHO0FBQUEsTUFPcklHLEtBUHFJO0FBQUEsTUFPOUhDLE1BUDhIOztBQVE1SSxzQkFBTztBQUFBLGNBRUNWLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxHQUFaLENBQWdCLFVBQUNVLEtBQUQsRUFBUU4sS0FBUixFQUFnQjtBQUM1QiwwQkFBTztBQUFpQixhQUFLLEVBQUU7QUFBQ08saUJBQU8sRUFBRSxNQUFWO0FBQWtCQyxtQkFBUyxFQUFFO0FBQTdCLFNBQXhCO0FBQXlELGFBQUssRUFBRUYsS0FBaEU7QUFBQSxnQ0FDSDtBQUFLLGlCQUFPLEVBQUUsbUJBQUk7QUFDZEosbUJBQU8sQ0FBQ0YsS0FBRCxDQUFQLEdBQWlCLENBQUNFLE9BQU8sQ0FBQ0YsS0FBRCxDQUF6QjtBQUNBTCxpQkFBSyxDQUFDYyxPQUFOLENBQWNQLE9BQWQ7QUFDQUcsa0JBQU0sQ0FBQ0QsS0FBSyxHQUFDLENBQVAsQ0FBTjtBQUVILFdBTEQ7QUFLRyxlQUFLLEVBQUU7QUFBQ00sb0JBQVEsRUFBQyxVQUFWO0FBQXNCQyxrQkFBTSxFQUFDLFNBQTdCO0FBQXdDSixtQkFBTyxFQUFFLGNBQWpEO0FBQWlFSyxpQkFBSyxFQUFFLEVBQXhFO0FBQTRFQyxrQkFBTSxFQUFFLEVBQXBGO0FBQXdGQywyQkFBZSxFQUFFQyw2RkFBOENDO0FBQXZKLFdBTFY7QUFBQSxpQ0FNSTtBQUFLLGlCQUFLLEVBQUU7QUFBQ0osbUJBQUssRUFBRVYsT0FBTyxDQUFDRixLQUFELENBQVAsR0FBZSxtQkFBZixHQUFtQyxJQUEzQztBQUFpRGEsb0JBQU0sRUFBRVgsT0FBTyxDQUFDRixLQUFELENBQVAsR0FBZSxtQkFBZixHQUFtQyxJQUE1RjtBQUFrR2lCLHFCQUFPLEVBQUVmLE9BQU8sQ0FBQ0YsS0FBRCxDQUFQLEdBQWUsQ0FBZixHQUFpQixDQUE1SDtBQUErSGtCLGtCQUFJLEVBQUUsS0FBckk7QUFBNElDLGlCQUFHLEVBQUUsS0FBako7QUFBd0pDLHVCQUFTLEVBQUUsdUJBQW5LO0FBQTRMVixzQkFBUSxFQUFFLFVBQXRNO0FBQWtOVyx3QkFBVSxFQUFFLG9DQUE5TjtBQUFvUVAsNkJBQWUsRUFBRUMsZ0ZBQWlDTztBQUF0VDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLGVBU0g7QUFBSyxlQUFLLEVBQUU7QUFBQ1YsaUJBQUssRUFBRSxNQUFSO0FBQWdCRixvQkFBUSxFQUFDO0FBQXpCLFdBQVo7QUFBQSxpQ0FBa0Q7QUFBSyxpQkFBSyxFQUFFO0FBQUNBLHNCQUFRLEVBQUUsVUFBWDtBQUF1QlEsa0JBQUksRUFBRSxFQUE3QjtBQUFpQ0MsaUJBQUcsRUFBRSxLQUF0QztBQUE2Q0MsdUJBQVMsRUFBRSxrQkFBeEQ7QUFBNEVHLHNCQUFRLEVBQUUsUUFBdEY7QUFBZ0dYLG1CQUFLLEVBQUUsa0JBQXZHO0FBQTJIWSwwQkFBWSxFQUFFLFVBQXpJO0FBQXFKQyx3QkFBVSxFQUFFO0FBQWpLLGFBQVo7QUFBQSxzQkFBeUxuQjtBQUF6TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEc7QUFBQSxTQUFVTixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQVdILEtBWkQ7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFpQkg7O0dBekJRTixROztLQUFBQSxRO0FBMkJUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxMmFiY2YwODRhYWYwMDhjNTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiO1xuXG5mdW5jdGlvbiBDaGVja2JveDxpdGVtcyBleHRlbmRzIHN0cmluZ1tdPihwcm9wczoge2l0ZW1zOiBpdGVtcywgZGVmYXVsdDoge1trOiBudW1iZXJdOiB0cnVlfSwgdXBkYXRlZDogKGN1cnJlbnQ6IHtbazogbnVtYmVyXTogYm9vbGVhbn0pPT52b2lkfSl7XG4gICAgY29uc3QgbWFwOiB7W3M6IG51bWJlcl06IGJvb2xlYW59ID0ge307XG4gICAgcHJvcHMuaXRlbXMuZm9yRWFjaCgoXywgaW5kZXgpPT57XG4gICAgICAgIG1hcFtpbmRleF0gPSBwcm9wcy5kZWZhdWx0W2luZGV4XSB8fCBmYWxzZTtcbiAgICB9KVxuXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUobWFwKTtcbiAgICBjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMuaXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiA0fX0gdGl0bGU9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtpbmRleF0gPSAhY3VycmVudFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy51cGRhdGVkKGN1cnJlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUobm9uY2UrMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9fSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgY3Vyc29yOlwicG9pbnRlclwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB3aWR0aDogMzAsIGhlaWdodDogMzAsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBjdXJyZW50W2luZGV4XT9cImNhbGMoMTAwJSAtIDEwcHgpXCI6XCIwJVwiLCBoZWlnaHQ6IGN1cnJlbnRbaW5kZXhdP1wiY2FsYygxMDAlIC0gMTBweClcIjpcIjAlXCIsIG9wYWNpdHk6IGN1cnJlbnRbaW5kZXhdPzE6MCAsbGVmdDogXCI1MCVcIiwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRyYW5zaXRpb246IFwib3BhY2l0eSAuMnMsIHdpZHRoIC4ycywgaGVpZ2h0IC4yc1wiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5hY2NlbnRDb2xvcn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PjxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAxMCwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gNXB4KVwiLCB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIn19Pnt2YWx1ZX08L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IHtDaGVja2JveH0iXSwic291cmNlUm9vdCI6IiJ9