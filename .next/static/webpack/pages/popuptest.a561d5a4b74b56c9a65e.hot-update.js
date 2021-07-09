self["webpackHotUpdate_N_E"]("pages/popuptest",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]),
      _React$useState2 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState, 2),
      popups = _React$useState2[0],
      setPopups = _React$useState2[1];

  function AddPopup(isOpen, callback) {
    var obj = {
      open: isOpen
    };
    var element = callback(function () {
      obj.open = false;
      setPopups((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(popups));
    }, obj.open);
    obj.element = element;
    setPopups([].concat((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(popups), [obj]));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        popups[0].open = true;
        setPopups(_objectSpread({}, popups));
      },
      children: "Show Settings"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9wdXB0ZXN0LnRzeCJdLCJuYW1lcyI6WyJQb3B1cDEiLCJwcm9wcyIsImlzT3BlbiIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImluc2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJvdmVybGF5Iiwib25SZXF1ZXN0Q2xvc2UiLCJQb3B1cFRlc3QiLCJSZWFjdCIsInBvcHVwcyIsInNldFBvcHVwcyIsIkFkZFBvcHVwIiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwiZWxlbWVudCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZHJvcEZpbHRlciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQW1FO0FBQy9ELHNCQUFPLDhEQUFDLG9EQUFEO0FBQVksVUFBTSxFQUFJQSxLQUFLLENBQUNDLE1BQTVCO0FBQW9DLGdCQUFZLEVBQUUsd0JBQUksQ0FBRSxDQUF4RDtBQUEwRCxlQUFXLEVBQUUsS0FBdkU7QUFBOEUsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFDQyxnQkFBUSxFQUFFLFVBQVg7QUFBdUJDLGFBQUssRUFBRSxlQUE5QjtBQUErQ0MsYUFBSyxFQUFFLEdBQXREO0FBQTJEQyxjQUFNLEVBQUUsR0FBbkU7QUFBeUVDLGlCQUFTLEVBQUU7QUFBcEYsT0FBVjtBQUF3SEMsYUFBTyxFQUFFO0FBQUNMLGdCQUFRLEVBQUUsT0FBWDtBQUFvQkMsYUFBSyxFQUFFLENBQTNCO0FBQThCQyxhQUFLLEVBQUUsTUFBckM7QUFBNkNDLGNBQU0sRUFBRTtBQUFyRDtBQUFqSSxLQUFyRjtBQUFBLDJCQUNDO0FBQVEsYUFBTyxFQUFFLG1CQUFJO0FBQ2pCTixhQUFLLENBQUNTLGNBQU47QUFDSCxPQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0g7O0tBTlFWLE07O0FBVVQsU0FBU1csU0FBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLHdCQUNZQyxxREFBQSxDQUEyQixFQUEzQixDQURaO0FBQUE7QUFBQSxNQUNUQyxNQURTO0FBQUEsTUFDREMsU0FEQzs7QUFJaEIsV0FBU0MsUUFBVCxDQUFrQmIsTUFBbEIsRUFBbUNjLFFBQW5DLEVBQTZHO0FBQ3pHLFFBQU1DLEdBQWEsR0FBRztBQUFDQyxVQUFJLEVBQUVoQjtBQUFQLEtBQXRCO0FBQ0EsUUFBTWlCLE9BQU8sR0FBR0gsUUFBUSxDQUFDLFlBQUk7QUFDekJDLFNBQUcsQ0FBQ0MsSUFBSixHQUFXLEtBQVg7QUFDQUosZUFBUyxDQUFDLDhJQUFJRCxNQUFMLEVBQVQ7QUFDSCxLQUh1QixFQUdyQkksR0FBRyxDQUFDQyxJQUhpQixDQUF4QjtBQUlBRCxPQUFHLENBQUNFLE9BQUosR0FBY0EsT0FBZDtBQUNBTCxhQUFTLHlKQUFLRCxNQUFMLElBQWFJLEdBQWIsR0FBVDtBQUNIOztBQUVERyxrREFBUyxDQUFDLFlBQUk7QUFDVkwsWUFBUSxDQUFDLElBQUQsRUFBTyxVQUFDTCxjQUFELEVBQWlCUixNQUFqQixFQUEwQjtBQUNyQywwQkFBTyw4REFBQyxNQUFEO0FBQVEsc0JBQWMsRUFBRVEsY0FBeEI7QUFBd0MsY0FBTSxFQUFFUjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZPLENBQVI7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFtQixTQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBWjtBQUVBLHNCQUFPO0FBQUEsNEJBQ0g7QUFBUSxhQUFPLEVBQUUsbUJBQUk7QUFDakJBLGNBQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUssSUFBVixHQUFpQixJQUFqQjtBQUNBSixpQkFBUyxtQkFBS0QsTUFBTCxFQUFUO0FBQ0gsT0FIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBS0g7QUFBZ0IsV0FBSyxFQUFFO0FBQUNVLHNCQUFjLEVBQUU7QUFBakI7QUFBdkIsT0FBUyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRyxFQU1GVixNQUFNLENBQUNXLEdBQVAsQ0FBVztBQUFBLFVBQUVMLE9BQUYsUUFBRUEsT0FBRjtBQUFBLGFBQWFBLE9BQWI7QUFBQSxLQUFYLENBTkU7QUFBQSxrQkFBUDtBQVFIOztHQTlCUVIsUzs7TUFBQUEsUztBQWdDVCwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3B1cHRlc3QuYTU2MWQ1YTRiNzRiNTZjOWE2NWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5cbmZ1bmN0aW9uIFBvcHVwMShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XG4gICAgcmV0dXJuIDxSZWFjdE1vZGFsIGlzT3BlbiA9IHtwcm9wcy5pc09wZW59IG9uQWZ0ZXJDbG9zZT17KCk9Pnt9fSBhcmlhSGlkZUFwcD17ZmFsc2V9IHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDAsICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgICAgfX0+Q2xvc2U8L2J1dHRvbj5cbiAgICA8L1JlYWN0TW9kYWw+XG59XG5cblxuXG5mdW5jdGlvbiBQb3B1cFRlc3QoKXtcbiAgICBjb25zdCBbcG9wdXBzLCBzZXRQb3B1cHNdID0gUmVhY3QudXNlU3RhdGU8UG9wdXBPYmpbXT4oW10pXG5cbiAgICB0eXBlIFBvcHVwT2JqID0ge29wZW46IGJvb2xlYW4sIGVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH1cbiAgICBmdW5jdGlvbiBBZGRQb3B1cChpc09wZW46IGJvb2xlYW4sIGNhbGxiYWNrOiAob25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBvYmo6IFBvcHVwT2JqID0ge29wZW46IGlzT3Blbn0gYXMgUG9wdXBPYmo7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgb2JqLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFBvcHVwcyhbLi4ucG9wdXBzXSlcbiAgICAgICAgfSwgb2JqLm9wZW4pXG4gICAgICAgIG9iai5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgc2V0UG9wdXBzKFsuLi5wb3B1cHMsIG9ial0pXG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBBZGRQb3B1cCh0cnVlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiA8UG9wdXAxIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX0gaXNPcGVuPXtpc09wZW59Lz5cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zb2xlLmxvZyhwb3B1cHMpXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgcG9wdXBzWzBdLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgc2V0UG9wdXBzKHsuLi5wb3B1cHN9KVxuICAgICAgICB9fT5TaG93IFNldHRpbmdzPC9idXR0b24+XG4gICAgICAgIDxkaXYga2V5PVwiYmx1clwiIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCJ9fT48L2Rpdj5cbiAgICAgICAge3BvcHVwcy5tYXAoKHtlbGVtZW50fSk9PmVsZW1lbnQpfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFRlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==