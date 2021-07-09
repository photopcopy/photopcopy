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
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\popuptest.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Popup1(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_5___default()), {
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
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, this);
}

_c = Popup1;

function PopupTest() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]),
      _React$useState2 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState, 2),
      popups = _React$useState2[0],
      setPopups = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
    popups: popups,
    setPopups: setPopups
  }),
      _React$useState4 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState3, 1),
      state = _React$useState4[0];

  state.setPopups = setPopups;
  state.popups = popups;

  function AddPopup(isOpen, callback) {
    var obj = {
      open: isOpen
    };
    var element = callback(function () {
      obj.open = false;
      console.log("callback");
      state.setPopups((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(state.popups));
    }, obj.open);
    obj.element = element;
    state.setPopups([].concat((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(state.popups), [obj]));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    AddPopup(true, function (onRequestClose, isOpen) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup1, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 20
      }, _this);
    });
  }, []);
  console.log(popups);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        popups[0].open = true;
        setPopups(_objectSpread({}, popups));
      },
      children: "Show Settings"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this), popups.map(function (_ref) {
      var element = _ref.element;
      return element;
    })]
  }, void 0, true);
}

_s(PopupTest, "pSndQ5pKEZU69wBwp0PIyxefnLc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBUZXN0IiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJzdGF0ZSIsIkFkZFBvcHVwIiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJiYWNrZHJvcEZpbHRlciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFtRTtBQUMvRCxzQkFBTyw4REFBQyxvREFBRDtBQUFZLFVBQU0sRUFBSUEsS0FBSyxDQUFDQyxNQUE1QjtBQUFvQyxnQkFBWSxFQUFFLHdCQUFJLENBQUUsQ0FBeEQ7QUFBMEQsZUFBVyxFQUFFLEtBQXZFO0FBQThFLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCQyxhQUFLLEVBQUUsZUFBOUI7QUFBK0NDLGFBQUssRUFBRSxHQUF0RDtBQUEyREMsY0FBTSxFQUFFLEdBQW5FO0FBQXlFQyxpQkFBUyxFQUFFO0FBQXBGLE9BQVY7QUFBd0hDLGFBQU8sRUFBRTtBQUFDTCxnQkFBUSxFQUFFLE9BQVg7QUFBb0JDLGFBQUssRUFBRSxDQUEzQjtBQUE4QkMsYUFBSyxFQUFFLE1BQXJDO0FBQTZDQyxjQUFNLEVBQUU7QUFBckQ7QUFBakksS0FBckY7QUFBQSwyQkFDQztBQUFRLGFBQU8sRUFBRSxtQkFBSTtBQUNqQk4sYUFBSyxDQUFDUyxjQUFOO0FBQ0gsT0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztLQU5RVixNOztBQVVULFNBQVNXLFNBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSx3QkFDWUMscURBQUEsQ0FBMkIsRUFBM0IsQ0FEWjtBQUFBO0FBQUEsTUFDVEMsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBQUEseUJBRUFGLHFEQUFBLENBQWU7QUFBQ0MsVUFBTSxFQUFOQSxNQUFEO0FBQVNDLGFBQVMsRUFBVEE7QUFBVCxHQUFmLENBRkE7QUFBQTtBQUFBLE1BRVRDLEtBRlM7O0FBTWhCQSxPQUFLLENBQUNELFNBQU4sR0FBZ0JBLFNBQWhCO0FBQ0FDLE9BQUssQ0FBQ0YsTUFBTixHQUFhQSxNQUFiOztBQUVBLFdBQVNHLFFBQVQsQ0FBa0JkLE1BQWxCLEVBQW1DZSxRQUFuQyxFQUE2RztBQUN6RyxRQUFNQyxHQUFhLEdBQUc7QUFBQ0MsVUFBSSxFQUFFakI7QUFBUCxLQUF0QjtBQUNBLFFBQU1rQixPQUFPLEdBQUdILFFBQVEsQ0FBQyxZQUFJO0FBQ3pCQyxTQUFHLENBQUNDLElBQUosR0FBVyxLQUFYO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQVAsV0FBSyxDQUFDRCxTQUFOLCtJQUFvQkMsS0FBSyxDQUFDRixNQUExQjtBQUNILEtBSnVCLEVBSXJCSyxHQUFHLENBQUNDLElBSmlCLENBQXhCO0FBS0FELE9BQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0FMLFNBQUssQ0FBQ0QsU0FBTix5SkFBb0JDLEtBQUssQ0FBQ0YsTUFBMUIsSUFBa0NLLEdBQWxDO0FBQ0g7O0FBRURLLGtEQUFTLENBQUMsWUFBSTtBQUNWUCxZQUFRLENBQUMsSUFBRCxFQUFPLFVBQUNOLGNBQUQsRUFBaUJSLE1BQWpCLEVBQTBCO0FBQ3JDLDBCQUFPLDhEQUFDLE1BQUQ7QUFBUSxzQkFBYyxFQUFFUSxjQUF4QjtBQUF3QyxjQUFNLEVBQUVSO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRk8sQ0FBUjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFaO0FBRUEsc0JBQU87QUFBQSw0QkFDSDtBQUFRLGFBQU8sRUFBRSxtQkFBSTtBQUNqQkEsY0FBTSxDQUFDLENBQUQsQ0FBTixDQUFVTSxJQUFWLEdBQWlCLElBQWpCO0FBQ0FMLGlCQUFTLG1CQUFLRCxNQUFMLEVBQVQ7QUFDSCxPQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsZUFLSDtBQUFnQixXQUFLLEVBQUU7QUFBQ1csc0JBQWMsRUFBRTtBQUFqQjtBQUF2QixPQUFTLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxHLEVBTUZYLE1BQU0sQ0FBQ1ksR0FBUCxDQUFXO0FBQUEsVUFBRUwsT0FBRixRQUFFQSxPQUFGO0FBQUEsYUFBYUEsT0FBYjtBQUFBLEtBQVgsQ0FORTtBQUFBLGtCQUFQO0FBUUg7O0dBcENRVCxTOztNQUFBQSxTO0FBc0NULCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcHVwdGVzdC44MGUzYzk0YjFjMGI2MWY3NjdiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcblxuXG5mdW5jdGlvbiBQb3B1cDEocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xuICAgIHJldHVybiA8UmVhY3RNb2RhbCBpc09wZW4gPSB7cHJvcHMuaXNPcGVufSBvbkFmdGVyQ2xvc2U9eygpPT57fX0gYXJpYUhpZGVBcHA9e2ZhbHNlfSBzdHlsZT17e2NvbnRlbnQ6IHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBpbnNldDogXCI1MCUgMCUgMCUgNTAlXCIsIHdpZHRoOiAzMDAsIGhlaWdodDogMjAwLCAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwifSwgb3ZlcmxheToge3Bvc2l0aW9uOiBcImZpeGVkXCIsIGluc2V0OiAwLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UoKTtcbiAgICAgICAgICAgIH19PkNsb3NlPC9idXR0b24+XG4gICAgPC9SZWFjdE1vZGFsPlxufVxuXG5cblxuZnVuY3Rpb24gUG9wdXBUZXN0KCl7XG4gICAgY29uc3QgW3BvcHVwcywgc2V0UG9wdXBzXSA9IFJlYWN0LnVzZVN0YXRlPFBvcHVwT2JqW10+KFtdKVxuICAgIGNvbnN0IFtzdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7cG9wdXBzLCBzZXRQb3B1cHN9KVxuXG4gICAgdHlwZSBQb3B1cE9iaiA9IHtvcGVuOiBib29sZWFuLCBlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnR9XG5cbiAgICBzdGF0ZS5zZXRQb3B1cHM9c2V0UG9wdXBzO1xuICAgIHN0YXRlLnBvcHVwcz1wb3B1cHM7XG5cbiAgICBmdW5jdGlvbiBBZGRQb3B1cChpc09wZW46IGJvb2xlYW4sIGNhbGxiYWNrOiAob25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBvYmo6IFBvcHVwT2JqID0ge29wZW46IGlzT3Blbn0gYXMgUG9wdXBPYmo7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgb2JqLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGJhY2tcIilcbiAgICAgICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICAgICAgfSwgb2JqLm9wZW4pXG4gICAgICAgIG9iai5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHMsIG9ial0pXG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBBZGRQb3B1cCh0cnVlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiA8UG9wdXAxIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX0gaXNPcGVuPXtpc09wZW59Lz5cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zb2xlLmxvZyhwb3B1cHMpXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgcG9wdXBzWzBdLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgc2V0UG9wdXBzKHsuLi5wb3B1cHN9KVxuICAgICAgICB9fT5TaG93IFNldHRpbmdzPC9idXR0b24+XG4gICAgICAgIDxkaXYga2V5PVwiYmx1clwiIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCJ9fT48L2Rpdj5cbiAgICAgICAge3BvcHVwcy5tYXAoKHtlbGVtZW50fSk9PmVsZW1lbnQpfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFRlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==