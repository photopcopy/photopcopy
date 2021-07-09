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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBUZXN0IiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJBZGRQb3B1cCIsImNhbGxiYWNrIiwib2JqIiwib3BlbiIsImVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiYmFja2Ryb3BGaWx0ZXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBbUU7QUFDL0Qsc0JBQU8sOERBQUMsb0RBQUQ7QUFBWSxVQUFNLEVBQUlBLEtBQUssQ0FBQ0MsTUFBNUI7QUFBb0MsZ0JBQVksRUFBRSx3QkFBSSxDQUFFLENBQXhEO0FBQTJELFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCQyxhQUFLLEVBQUUsZUFBOUI7QUFBK0NDLGFBQUssRUFBRSxHQUF0RDtBQUEyREMsY0FBTSxFQUFFLEdBQW5FO0FBQXlFQyxpQkFBUyxFQUFFO0FBQXBGLE9BQVY7QUFBd0hDLGFBQU8sRUFBRTtBQUFDTCxnQkFBUSxFQUFFLE9BQVg7QUFBb0JDLGFBQUssRUFBRSxDQUEzQjtBQUE4QkMsYUFBSyxFQUFFLE1BQXJDO0FBQTZDQyxjQUFNLEVBQUU7QUFBckQ7QUFBakksS0FBbEU7QUFBQSwyQkFDQztBQUFRLGFBQU8sRUFBRSxtQkFBSTtBQUNqQk4sYUFBSyxDQUFDUyxjQUFOO0FBQ0gsT0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtIOztLQU5RVixNOztBQVVULFNBQVNXLFNBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSx3QkFDWUMscURBQUEsQ0FBMkIsRUFBM0IsQ0FEWjtBQUFBO0FBQUEsTUFDVEMsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBSWhCLFdBQVNDLFFBQVQsQ0FBa0JiLE1BQWxCLEVBQW1DYyxRQUFuQyxFQUE2RztBQUN6RyxRQUFNQyxHQUFhLEdBQUc7QUFBQ0MsVUFBSSxFQUFFaEI7QUFBUCxLQUF0QjtBQUNBLFFBQU1pQixPQUFPLEdBQUdILFFBQVEsQ0FBQyxZQUFJO0FBQ3pCQyxTQUFHLENBQUNDLElBQUosR0FBVyxLQUFYO0FBQ0FKLGVBQVMsQ0FBQyw4SUFBSUQsTUFBTCxFQUFUO0FBQ0gsS0FIdUIsRUFHckJJLEdBQUcsQ0FBQ0MsSUFIaUIsQ0FBeEI7QUFJQUQsT0FBRyxDQUFDRSxPQUFKLEdBQWNBLE9BQWQ7QUFDQUwsYUFBUyx5SkFBS0QsTUFBTCxJQUFhSSxHQUFiLEdBQVQ7QUFDSDs7QUFFREcsa0RBQVMsQ0FBQyxZQUFJO0FBQ1ZMLFlBQVEsQ0FBQyxJQUFELEVBQU8sVUFBQ0wsY0FBRCxFQUFpQlIsTUFBakIsRUFBMEI7QUFDckMsMEJBQU8sOERBQUMsTUFBRDtBQUFRLHNCQUFjLEVBQUVRLGNBQXhCO0FBQXdDLGNBQU0sRUFBRVI7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGTyxDQUFSO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BbUIsU0FBTyxDQUFDQyxHQUFSLENBQVlULE1BQVo7QUFFQSxzQkFBTztBQUFBLG1DQUVIO0FBQWdCLFdBQUssRUFBRTtBQUFDVSxzQkFBYyxFQUFFO0FBQWpCO0FBQXZCLE9BQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkcsRUFHRlYsTUFBTSxDQUFDVyxHQUFQLENBQVc7QUFBQSxVQUFFTCxPQUFGLFFBQUVBLE9BQUY7QUFBQSxhQUFhQSxPQUFiO0FBQUEsS0FBWCxDQUhFO0FBQUEsa0JBQVA7QUFLSDs7R0EzQlFSLFM7O01BQUFBLFM7QUE2QlQsK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9wdXB0ZXN0LmI3NjJkN2VhZTA2OTFlNjkxMmE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuXG5mdW5jdGlvbiBQb3B1cDEocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xuICAgIHJldHVybiA8UmVhY3RNb2RhbCBpc09wZW4gPSB7cHJvcHMuaXNPcGVufSBvbkFmdGVyQ2xvc2U9eygpPT57fX0gIHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDAsICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgICAgfX0+Q2xvc2U8L2J1dHRvbj5cbiAgICA8L1JlYWN0TW9kYWw+XG59XG5cblxuXG5mdW5jdGlvbiBQb3B1cFRlc3QoKXtcbiAgICBjb25zdCBbcG9wdXBzLCBzZXRQb3B1cHNdID0gUmVhY3QudXNlU3RhdGU8UG9wdXBPYmpbXT4oW10pXG5cbiAgICB0eXBlIFBvcHVwT2JqID0ge29wZW46IGJvb2xlYW4sIGVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH1cbiAgICBmdW5jdGlvbiBBZGRQb3B1cChpc09wZW46IGJvb2xlYW4sIGNhbGxiYWNrOiAob25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBvYmo6IFBvcHVwT2JqID0ge29wZW46IGlzT3Blbn0gYXMgUG9wdXBPYmo7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgb2JqLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFBvcHVwcyhbLi4ucG9wdXBzXSlcbiAgICAgICAgfSwgb2JqLm9wZW4pXG4gICAgICAgIG9iai5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgc2V0UG9wdXBzKFsuLi5wb3B1cHMsIG9ial0pXG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBBZGRQb3B1cCh0cnVlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiA8UG9wdXAxIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX0gaXNPcGVuPXtpc09wZW59Lz5cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zb2xlLmxvZyhwb3B1cHMpXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgeWVzXG4gICAgICAgIDxkaXYga2V5PVwiYmx1clwiIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCJ9fT48L2Rpdj5cbiAgICAgICAge3BvcHVwcy5tYXAoKHtlbGVtZW50fSk9PmVsZW1lbnQpfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFRlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==