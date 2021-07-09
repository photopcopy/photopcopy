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
    ariaHideApp: false,
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
      open: isOpen
    };
    var element = callback(function () {
      obj.open = false;
      setPopups((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(popups));
    }, obj.open);
    obj.element = element;
    setPopups([].concat((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(popups), [obj]));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    AddPopup(true, function (onRequestClose, isOpen) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup1, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 20
      }, _this);
    });
  }, []);
  console.log(popups);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["yes", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this), popups.map(function (_ref) {
      var element = _ref.element;
      return element;
    })]
  }, void 0, true);
}

_s(PopupTest, "7/FpcefKglIWCgdc/Uy6W1Y2GIY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBUZXN0IiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJBZGRQb3B1cCIsImNhbGxiYWNrIiwib2JqIiwib3BlbiIsImVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiYmFja2Ryb3BGaWx0ZXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBbUU7QUFDL0Qsc0JBQU8sOERBQUMsb0RBQUQ7QUFBWSxVQUFNLEVBQUlBLEtBQUssQ0FBQ0MsTUFBNUI7QUFBb0MsZ0JBQVksRUFBRSx3QkFBSSxDQUFFLENBQXhEO0FBQTBELGVBQVcsRUFBRSxLQUF2RTtBQUE4RSxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQUNDLGdCQUFRLEVBQUUsVUFBWDtBQUF1QkMsYUFBSyxFQUFFLGVBQTlCO0FBQStDQyxhQUFLLEVBQUUsR0FBdEQ7QUFBMkRDLGNBQU0sRUFBRSxHQUFuRTtBQUF5RUMsaUJBQVMsRUFBRTtBQUFwRixPQUFWO0FBQXdIQyxhQUFPLEVBQUU7QUFBQ0wsZ0JBQVEsRUFBRSxPQUFYO0FBQW9CQyxhQUFLLEVBQUUsQ0FBM0I7QUFBOEJDLGFBQUssRUFBRSxNQUFyQztBQUE2Q0MsY0FBTSxFQUFFO0FBQXJEO0FBQWpJLEtBQXJGO0FBQUEsMkJBQ0M7QUFBUSxhQUFPLEVBQUUsbUJBQUk7QUFDakJOLGFBQUssQ0FBQ1MsY0FBTjtBQUNILE9BRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLSDs7S0FOUVYsTTs7QUFVVCxTQUFTVyxTQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ1lDLHFEQUFBLENBQTJCLEVBQTNCLENBRFo7QUFBQTtBQUFBLE1BQ1RDLE1BRFM7QUFBQSxNQUNEQyxTQURDOztBQUloQixXQUFTQyxRQUFULENBQWtCYixNQUFsQixFQUFtQ2MsUUFBbkMsRUFBNkc7QUFDekcsUUFBTUMsR0FBYSxHQUFHO0FBQUNDLFVBQUksRUFBRWhCO0FBQVAsS0FBdEI7QUFDQSxRQUFNaUIsT0FBTyxHQUFHSCxRQUFRLENBQUMsWUFBSTtBQUN6QkMsU0FBRyxDQUFDQyxJQUFKLEdBQVcsS0FBWDtBQUNBSixlQUFTLENBQUMsOElBQUlELE1BQUwsRUFBVDtBQUNILEtBSHVCLEVBR3JCSSxHQUFHLENBQUNDLElBSGlCLENBQXhCO0FBSUFELE9BQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0FMLGFBQVMseUpBQUtELE1BQUwsSUFBYUksR0FBYixHQUFUO0FBQ0g7O0FBRURHLGtEQUFTLENBQUMsWUFBSTtBQUNWTCxZQUFRLENBQUMsSUFBRCxFQUFPLFVBQUNMLGNBQUQsRUFBaUJSLE1BQWpCLEVBQTBCO0FBQ3JDLDBCQUFPLDhEQUFDLE1BQUQ7QUFBUSxzQkFBYyxFQUFFUSxjQUF4QjtBQUF3QyxjQUFNLEVBQUVSO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRk8sQ0FBUjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFaO0FBRUEsc0JBQU87QUFBQSxtQ0FFSDtBQUFnQixXQUFLLEVBQUU7QUFBQ1Usc0JBQWMsRUFBRTtBQUFqQjtBQUF2QixPQUFTLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZHLEVBR0ZWLE1BQU0sQ0FBQ1csR0FBUCxDQUFXO0FBQUEsVUFBRUwsT0FBRixRQUFFQSxPQUFGO0FBQUEsYUFBYUEsT0FBYjtBQUFBLEtBQVgsQ0FIRTtBQUFBLGtCQUFQO0FBS0g7O0dBM0JRUixTOztNQUFBQSxTO0FBNkJULCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcHVwdGVzdC5lZmY2OGQwMTc0ZDU1ZTJjYzhhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcblxuZnVuY3Rpb24gUG9wdXAxKHByb3BzOiB7b25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW59KXtcbiAgICByZXR1cm4gPFJlYWN0TW9kYWwgaXNPcGVuID0ge3Byb3BzLmlzT3Blbn0gb25BZnRlckNsb3NlPXsoKT0+e319IGFyaWFIaWRlQXBwPXtmYWxzZX0gc3R5bGU9e3tjb250ZW50OiB7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgaW5zZXQ6IFwiNTAlIDAlIDAlIDUwJVwiLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMCwgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIn0sIG92ZXJsYXk6IHtwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMCwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX19PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgIHByb3BzLm9uUmVxdWVzdENsb3NlKCk7XG4gICAgICAgICAgICB9fT5DbG9zZTwvYnV0dG9uPlxuICAgIDwvUmVhY3RNb2RhbD5cbn1cblxuXG5cbmZ1bmN0aW9uIFBvcHVwVGVzdCgpe1xuICAgIGNvbnN0IFtwb3B1cHMsIHNldFBvcHVwc10gPSBSZWFjdC51c2VTdGF0ZTxQb3B1cE9ialtdPihbXSlcblxuICAgIHR5cGUgUG9wdXBPYmogPSB7b3BlbjogYm9vbGVhbiwgZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50fVxuICAgIGZ1bmN0aW9uIEFkZFBvcHVwKGlzT3BlbjogYm9vbGVhbiwgY2FsbGJhY2s6IChvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudCl7XG4gICAgICAgIGNvbnN0IG9iajogUG9wdXBPYmogPSB7b3BlbjogaXNPcGVufSBhcyBQb3B1cE9iajtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhbGxiYWNrKCgpPT57XG4gICAgICAgICAgICBvYmoub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0UG9wdXBzKFsuLi5wb3B1cHNdKVxuICAgICAgICB9LCBvYmoub3BlbilcbiAgICAgICAgb2JqLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBzZXRQb3B1cHMoWy4uLnBvcHVwcywgb2JqXSlcbiAgICB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIEFkZFBvcHVwKHRydWUsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxQb3B1cDEgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfSBpc09wZW49e2lzT3Blbn0vPlxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHBvcHVwcylcblxuICAgIHJldHVybiA8PlxuICAgICAgICB5ZXNcbiAgICAgICAgPGRpdiBrZXk9XCJibHVyXCIgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIn19PjwvZGl2PlxuICAgICAgICB7cG9wdXBzLm1hcCgoe2VsZW1lbnR9KT0+ZWxlbWVudCl9XG4gICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9