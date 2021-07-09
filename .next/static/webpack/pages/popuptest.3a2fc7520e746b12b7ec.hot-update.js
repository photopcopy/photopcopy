self["webpackHotUpdate_N_E"]("pages/popuptest",{

/***/ "./src/pages/popuptest.tsx":
/*!*********************************!*\
  !*** ./src/pages/popuptest.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\popuptest.tsx",
    _s = $RefreshSig$();




function Popup1(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
    isOpen: props.isOpen,
    onAfterClose: function onAfterClose() {},
    onRequestClose: props.onRequestClose,
    style: {
      content: {
        position: "absolute",
        inset: "50% 0% 0% 50%",
        width: 300,
        height: 200,
        transform: "translate(-50%, -50%)"
      },
      overlay: {
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%"
      }
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        props.onRequestClose();
      },
      children: "Close"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

_c = Popup1;

function PopupTest() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState2 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      popups = _React$useState2[0],
      setPopups = _React$useState2[1];

  function AddPopup(isOpen, callback) {
    var obj = {
      open: true
    };
    var element = callback(function () {
      obj.open = false;
      setPopups((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(popups));
    }, obj.open);
    obj.element = element;
    setPopups([].concat((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(popups), [obj]));
  }

  AddPopup(true, function (onRequestClose, isOpen) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup1, {
      onRequestClose: onRequestClose,
      isOpen: isOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["yes", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), popups.map(function (_ref) {
      var element = _ref.element;
      return element;
    })]
  }, void 0, true);
}

_s(PopupTest, "QJ6ysaqRNDBGkZjvbbvZg80nuE4=");

_c2 = PopupTest;
/* harmony default export */ __webpack_exports__["default"] = (PopupTest);

var _c, _c2;

$RefreshReg$(_c, "Popup1");
$RefreshReg$(_c2, "PopupTest");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJvblJlcXVlc3RDbG9zZSIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImluc2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJvdmVybGF5IiwiUG9wdXBUZXN0IiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJBZGRQb3B1cCIsImNhbGxiYWNrIiwib2JqIiwib3BlbiIsImVsZW1lbnQiLCJiYWNrZHJvcEZpbHRlciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFtRTtBQUMvRCxzQkFBTyw4REFBQyxvREFBRDtBQUFZLFVBQU0sRUFBSUEsS0FBSyxDQUFDQyxNQUE1QjtBQUFvQyxnQkFBWSxFQUFFLHdCQUFJLENBQUUsQ0FBeEQ7QUFBMEQsa0JBQWMsRUFBRUQsS0FBSyxDQUFDRSxjQUFoRjtBQUFnRyxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQUNDLGdCQUFRLEVBQUUsVUFBWDtBQUF1QkMsYUFBSyxFQUFFLGVBQTlCO0FBQStDQyxhQUFLLEVBQUUsR0FBdEQ7QUFBMkRDLGNBQU0sRUFBRSxHQUFuRTtBQUF5RUMsaUJBQVMsRUFBRTtBQUFwRixPQUFWO0FBQXdIQyxhQUFPLEVBQUU7QUFBQ0wsZ0JBQVEsRUFBRSxPQUFYO0FBQW9CQyxhQUFLLEVBQUUsQ0FBM0I7QUFBOEJDLGFBQUssRUFBRSxNQUFyQztBQUE2Q0MsY0FBTSxFQUFFO0FBQXJEO0FBQWpJLEtBQXZHO0FBQUEsMkJBQ0M7QUFBUSxhQUFPLEVBQUUsbUJBQUk7QUFDakJQLGFBQUssQ0FBQ0UsY0FBTjtBQUNILE9BRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLSDs7S0FOUUgsTTs7QUFVVCxTQUFTVyxTQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ1lDLHFEQUFBLENBQTJCLEVBQTNCLENBRFo7QUFBQTtBQUFBLE1BQ1RDLE1BRFM7QUFBQSxNQUNEQyxTQURDOztBQUloQixXQUFTQyxRQUFULENBQWtCYixNQUFsQixFQUFtQ2MsUUFBbkMsRUFBNkc7QUFDekcsUUFBTUMsR0FBYSxHQUFHO0FBQUNDLFVBQUksRUFBRTtBQUFQLEtBQXRCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUMsWUFBSTtBQUN6QkMsU0FBRyxDQUFDQyxJQUFKLEdBQVcsS0FBWDtBQUNBSixlQUFTLENBQUMsOElBQUlELE1BQUwsRUFBVDtBQUNILEtBSHVCLEVBR3JCSSxHQUFHLENBQUNDLElBSGlCLENBQXhCO0FBSUFELE9BQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0FMLGFBQVMseUpBQUtELE1BQUwsSUFBYUksR0FBYixHQUFUO0FBQ0g7O0FBRURGLFVBQVEsQ0FBQyxJQUFELEVBQU8sVUFBQ1osY0FBRCxFQUFpQkQsTUFBakIsRUFBMEI7QUFDckMsd0JBQU8sOERBQUMsTUFBRDtBQUFRLG9CQUFjLEVBQUVDLGNBQXhCO0FBQXdDLFlBQU0sRUFBRUQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGTyxDQUFSO0FBSUEsc0JBQU87QUFBQSxtQ0FFSDtBQUFnQixXQUFLLEVBQUU7QUFBQ2tCLHNCQUFjLEVBQUU7QUFBakI7QUFBdkIsT0FBUyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRyxFQUdGUCxNQUFNLENBQUNRLEdBQVAsQ0FBVztBQUFBLFVBQUVGLE9BQUYsUUFBRUEsT0FBRjtBQUFBLGFBQWFBLE9BQWI7QUFBQSxLQUFYLENBSEU7QUFBQSxrQkFBUDtBQUtIOztHQXZCUVIsUzs7TUFBQUEsUztBQXlCVCwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3B1cHRlc3QuM2EyZmM3NTIwZTc0NmIxMmI3ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuXG5mdW5jdGlvbiBQb3B1cDEocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xuICAgIHJldHVybiA8UmVhY3RNb2RhbCBpc09wZW4gPSB7cHJvcHMuaXNPcGVufSBvbkFmdGVyQ2xvc2U9eygpPT57fX0gb25SZXF1ZXN0Q2xvc2U9e3Byb3BzLm9uUmVxdWVzdENsb3NlfSBzdHlsZT17e2NvbnRlbnQ6IHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBpbnNldDogXCI1MCUgMCUgMCUgNTAlXCIsIHdpZHRoOiAzMDAsIGhlaWdodDogMjAwLCAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwifSwgb3ZlcmxheToge3Bvc2l0aW9uOiBcImZpeGVkXCIsIGluc2V0OiAwLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UoKTtcbiAgICAgICAgICAgIH19PkNsb3NlPC9idXR0b24+XG4gICAgPC9SZWFjdE1vZGFsPlxufVxuXG5cblxuZnVuY3Rpb24gUG9wdXBUZXN0KCl7XG4gICAgY29uc3QgW3BvcHVwcywgc2V0UG9wdXBzXSA9IFJlYWN0LnVzZVN0YXRlPFBvcHVwT2JqW10+KFtdKVxuXG4gICAgdHlwZSBQb3B1cE9iaiA9IHtvcGVuOiBib29sZWFuLCBlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnR9XG4gICAgZnVuY3Rpb24gQWRkUG9wdXAoaXNPcGVuOiBib29sZWFuLCBjYWxsYmFjazogKG9uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50KXtcbiAgICAgICAgY29uc3Qgb2JqOiBQb3B1cE9iaiA9IHtvcGVuOiB0cnVlfSBhcyBQb3B1cE9iajtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhbGxiYWNrKCgpPT57XG4gICAgICAgICAgICBvYmoub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0UG9wdXBzKFsuLi5wb3B1cHNdKVxuICAgICAgICB9LCBvYmoub3BlbilcbiAgICAgICAgb2JqLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBzZXRQb3B1cHMoWy4uLnBvcHVwcywgb2JqXSlcbiAgICB9XG5cbiAgICBBZGRQb3B1cCh0cnVlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcbiAgICAgICAgcmV0dXJuIDxQb3B1cDEgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfSBpc09wZW49e2lzT3Blbn0vPlxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIHllc1xuICAgICAgICA8ZGl2IGtleT1cImJsdXJcIiBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwifX0+PC9kaXY+XG4gICAgICAgIHtwb3B1cHMubWFwKCh7ZWxlbWVudH0pPT5lbGVtZW50KX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=