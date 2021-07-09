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
        lineNumber: 36,
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
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBUZXN0IiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJzdGF0ZSIsIkFkZFBvcHVwIiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwiZWxlbWVudCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZHJvcEZpbHRlciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFtRTtBQUMvRCxzQkFBTyw4REFBQyxvREFBRDtBQUFZLFVBQU0sRUFBSUEsS0FBSyxDQUFDQyxNQUE1QjtBQUFvQyxnQkFBWSxFQUFFLHdCQUFJLENBQUUsQ0FBeEQ7QUFBMEQsZUFBVyxFQUFFLEtBQXZFO0FBQThFLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCQyxhQUFLLEVBQUUsZUFBOUI7QUFBK0NDLGFBQUssRUFBRSxHQUF0RDtBQUEyREMsY0FBTSxFQUFFLEdBQW5FO0FBQXlFQyxpQkFBUyxFQUFFO0FBQXBGLE9BQVY7QUFBd0hDLGFBQU8sRUFBRTtBQUFDTCxnQkFBUSxFQUFFLE9BQVg7QUFBb0JDLGFBQUssRUFBRSxDQUEzQjtBQUE4QkMsYUFBSyxFQUFFLE1BQXJDO0FBQTZDQyxjQUFNLEVBQUU7QUFBckQ7QUFBakksS0FBckY7QUFBQSwyQkFDQztBQUFRLGFBQU8sRUFBRSxtQkFBSTtBQUNqQk4sYUFBSyxDQUFDUyxjQUFOO0FBQ0gsT0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztLQU5RVixNOztBQVVULFNBQVNXLFNBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSx3QkFDWUMscURBQUEsQ0FBMkIsRUFBM0IsQ0FEWjtBQUFBO0FBQUEsTUFDVEMsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBQUEseUJBRUFGLHFEQUFBLENBQWU7QUFBQ0MsVUFBTSxFQUFOQSxNQUFEO0FBQVNDLGFBQVMsRUFBVEE7QUFBVCxHQUFmLENBRkE7QUFBQTtBQUFBLE1BRVRDLEtBRlM7O0FBTWhCQSxPQUFLLENBQUNELFNBQU4sR0FBZ0JBLFNBQWhCO0FBQ0FDLE9BQUssQ0FBQ0YsTUFBTixHQUFhQSxNQUFiOztBQUVBLFdBQVNHLFFBQVQsQ0FBa0JkLE1BQWxCLEVBQW1DZSxRQUFuQyxFQUE2RztBQUN6RyxRQUFNQyxHQUFhLEdBQUc7QUFBQ0MsVUFBSSxFQUFFakI7QUFBUCxLQUF0QjtBQUNBLFFBQU1rQixPQUFPLEdBQUdILFFBQVEsQ0FBQyxZQUFJO0FBQ3pCQyxTQUFHLENBQUNDLElBQUosR0FBVyxLQUFYO0FBQ0FKLFdBQUssQ0FBQ0QsU0FBTiwrSUFBb0JDLEtBQUssQ0FBQ0YsTUFBMUI7QUFDSCxLQUh1QixFQUdyQkssR0FBRyxDQUFDQyxJQUhpQixDQUF4QjtBQUlBRCxPQUFHLENBQUNFLE9BQUosR0FBY0EsT0FBZDtBQUNBTCxTQUFLLENBQUNELFNBQU4seUpBQW9CQyxLQUFLLENBQUNGLE1BQTFCLElBQWtDSyxHQUFsQztBQUNIOztBQUVERyxrREFBUyxDQUFDLFlBQUk7QUFDVkwsWUFBUSxDQUFDLElBQUQsRUFBTyxVQUFDTixjQUFELEVBQWlCUixNQUFqQixFQUEwQjtBQUNyQywwQkFBTyw4REFBQyxNQUFEO0FBQVEsc0JBQWMsRUFBRVEsY0FBeEI7QUFBd0MsY0FBTSxFQUFFUjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZPLENBQVI7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFvQixTQUFPLENBQUNDLEdBQVIsQ0FBWVYsTUFBWjtBQUVBLHNCQUFPO0FBQUEsNEJBQ0g7QUFBUSxhQUFPLEVBQUUsbUJBQUk7QUFDakJBLGNBQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU0sSUFBVixHQUFpQixJQUFqQjtBQUNBTCxpQkFBUyxtQkFBS0QsTUFBTCxFQUFUO0FBQ0gsT0FIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBS0g7QUFBZ0IsV0FBSyxFQUFFO0FBQUNXLHNCQUFjLEVBQUU7QUFBakI7QUFBdkIsT0FBUyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRyxFQU1GWCxNQUFNLENBQUNZLEdBQVAsQ0FBVztBQUFBLFVBQUVMLE9BQUYsUUFBRUEsT0FBRjtBQUFBLGFBQWFBLE9BQWI7QUFBQSxLQUFYLENBTkU7QUFBQSxrQkFBUDtBQVFIOztHQW5DUVQsUzs7TUFBQUEsUztBQXFDVCwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3B1cHRlc3QuZTQxNWY1ZDY1Zjc5N2EyNTIwZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5cblxuZnVuY3Rpb24gUG9wdXAxKHByb3BzOiB7b25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW59KXtcbiAgICByZXR1cm4gPFJlYWN0TW9kYWwgaXNPcGVuID0ge3Byb3BzLmlzT3Blbn0gb25BZnRlckNsb3NlPXsoKT0+e319IGFyaWFIaWRlQXBwPXtmYWxzZX0gc3R5bGU9e3tjb250ZW50OiB7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgaW5zZXQ6IFwiNTAlIDAlIDAlIDUwJVwiLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMCwgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIn0sIG92ZXJsYXk6IHtwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMCwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX19PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgIHByb3BzLm9uUmVxdWVzdENsb3NlKCk7XG4gICAgICAgICAgICB9fT5DbG9zZTwvYnV0dG9uPlxuICAgIDwvUmVhY3RNb2RhbD5cbn1cblxuXG5cbmZ1bmN0aW9uIFBvcHVwVGVzdCgpe1xuICAgIGNvbnN0IFtwb3B1cHMsIHNldFBvcHVwc10gPSBSZWFjdC51c2VTdGF0ZTxQb3B1cE9ialtdPihbXSlcbiAgICBjb25zdCBbc3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe3BvcHVwcywgc2V0UG9wdXBzfSlcblxuICAgIHR5cGUgUG9wdXBPYmogPSB7b3BlbjogYm9vbGVhbiwgZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50fVxuXG4gICAgc3RhdGUuc2V0UG9wdXBzPXNldFBvcHVwcztcbiAgICBzdGF0ZS5wb3B1cHM9cG9wdXBzO1xuXG4gICAgZnVuY3Rpb24gQWRkUG9wdXAoaXNPcGVuOiBib29sZWFuLCBjYWxsYmFjazogKG9uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50KXtcbiAgICAgICAgY29uc3Qgb2JqOiBQb3B1cE9iaiA9IHtvcGVuOiBpc09wZW59IGFzIFBvcHVwT2JqO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FsbGJhY2soKCk9PntcbiAgICAgICAgICAgIG9iai5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwc10pXG4gICAgICAgIH0sIG9iai5vcGVuKVxuICAgICAgICBvYmouZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzLCBvYmpdKVxuICAgIH1cbiAgICBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgQWRkUG9wdXAodHJ1ZSwgKG9uUmVxdWVzdENsb3NlLCBpc09wZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gPFBvcHVwMSBvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9IGlzT3Blbj17aXNPcGVufS8+XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc29sZS5sb2cocG9wdXBzKVxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgIHBvcHVwc1swXS5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFBvcHVwcyh7Li4ucG9wdXBzfSlcbiAgICAgICAgfX0+U2hvdyBTZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGtleT1cImJsdXJcIiBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwifX0+PC9kaXY+XG4gICAgICAgIHtwb3B1cHMubWFwKCh7ZWxlbWVudH0pPT5lbGVtZW50KX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=