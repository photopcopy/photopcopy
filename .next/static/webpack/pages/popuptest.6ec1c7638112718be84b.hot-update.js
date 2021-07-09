self["webpackHotUpdate_N_E"]("pages/popuptest",{

/***/ "./src/modules/popupmanager.tsx":
/*!**************************************!*\
  !*** ./src/modules/popupmanager.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupManager": function() { return /* binding */ PopupManager; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\modules\\popupmanager.tsx",
    _s = $RefreshSig$();

//i have no idea how it works but it just works


function PopupManager() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState2 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      popups = _React$useState2[0],
      setPopups = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
    popups: popups,
    setPopups: setPopups,
    record: {}
  }),
      _React$useState4 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 1),
      state = _React$useState4[0];

  state.setPopups = setPopups;
  state.popups = popups;

  function AddPopup(key, isOpen, callback) {
    var obj = {
      open: isOpen,
      key: key,
      renderFunction: function renderFunction(open) {
        return callback(function () {
          obj.open = false;
          state.setPopups((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.popups));
        }, open);
      }
    };
    state.record[key] = obj;
    state.setPopups([].concat((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.popups), [obj]));
  }

  function Render() {
    var _this = this;

    return popups.map(function (obj) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: obj.renderFunction(obj.open)
      }, obj.key, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 20
      }, _this);
    });
  }

  function SetPopupState(key, open) {
    state.record[key].open = open;
    state.setPopups((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state.popups));
  }

  return {
    Render: Render,
    AddPopup: AddPopup,
    SetPopupState: SetPopupState,
    shouldShowOverlay: !popups.every(function (popup) {
      return !popup.open;
    })
  };
}

_s(PopupManager, "hUbgK/be9dXcOd+ORAi8j3FAT8k=");

_c = PopupManager;


var _c;

$RefreshReg$(_c, "PopupManager");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvcG9wdXBtYW5hZ2VyLnRzeCJdLCJuYW1lcyI6WyJQb3B1cE1hbmFnZXIiLCJSZWFjdCIsInBvcHVwcyIsInNldFBvcHVwcyIsInJlY29yZCIsInN0YXRlIiwiQWRkUG9wdXAiLCJrZXkiLCJpc09wZW4iLCJjYWxsYmFjayIsIm9iaiIsIm9wZW4iLCJyZW5kZXJGdW5jdGlvbiIsIlJlbmRlciIsIm1hcCIsIlNldFBvcHVwU3RhdGUiLCJzaG91bGRTaG93T3ZlcmxheSIsImV2ZXJ5IiwicG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsWUFBVCxHQUF1QjtBQUFBOztBQUFBLHdCQUNTQyxxREFBQSxDQUEyQixFQUEzQixDQURUO0FBQUE7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFBQSx5QkFFSEYscURBQUEsQ0FBZTtBQUFDQyxVQUFNLEVBQU5BLE1BQUQ7QUFBU0MsYUFBUyxFQUFUQSxTQUFUO0FBQW9CQyxVQUFNLEVBQUM7QUFBM0IsR0FBZixDQUZHO0FBQUE7QUFBQSxNQUVaQyxLQUZZOztBQU1uQkEsT0FBSyxDQUFDRixTQUFOLEdBQWdCQSxTQUFoQjtBQUNBRSxPQUFLLENBQUNILE1BQU4sR0FBYUEsTUFBYjs7QUFFQSxXQUFTSSxRQUFULENBQWtCQyxHQUFsQixFQUErQkMsTUFBL0IsRUFBZ0RDLFFBQWhELEVBQTBIO0FBQ3RILFFBQU1DLEdBQWEsR0FBRztBQUFDQyxVQUFJLEVBQUVILE1BQVA7QUFBZUQsU0FBRyxFQUFFQSxHQUFwQjtBQUF5Qkssb0JBQWMsRUFBRSx3QkFBQ0QsSUFBRCxFQUFRO0FBQ25FLGVBQU9GLFFBQVEsQ0FBQyxZQUFJO0FBQ2hCQyxhQUFHLENBQUNDLElBQUosR0FBVyxLQUFYO0FBQ0FOLGVBQUssQ0FBQ0YsU0FBTiwrSUFBb0JFLEtBQUssQ0FBQ0gsTUFBMUI7QUFDSCxTQUhjLEVBR1pTLElBSFksQ0FBZjtBQUlIO0FBTHFCLEtBQXRCO0FBTUFOLFNBQUssQ0FBQ0QsTUFBTixDQUFhRyxHQUFiLElBQW9CRyxHQUFwQjtBQUNBTCxTQUFLLENBQUNGLFNBQU4seUpBQW9CRSxLQUFLLENBQUNILE1BQTFCLElBQWtDUSxHQUFsQztBQUNIOztBQUVELFdBQVNHLE1BQVQsR0FBaUI7QUFBQTs7QUFDYixXQUFPWCxNQUFNLENBQUNZLEdBQVAsQ0FBVyxVQUFDSixHQUFELEVBQU87QUFDckIsMEJBQU8sOERBQUMsdURBQUQ7QUFBQSxrQkFBK0JBLEdBQUcsQ0FBQ0UsY0FBSixDQUFtQkYsR0FBRyxDQUFDQyxJQUF2QjtBQUEvQixTQUFxQkQsR0FBRyxDQUFDSCxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZNLENBQVA7QUFHSDs7QUFFRCxXQUFTUSxhQUFULENBQXVCUixHQUF2QixFQUFvQ0ksSUFBcEMsRUFBa0Q7QUFDOUNOLFNBQUssQ0FBQ0QsTUFBTixDQUFhRyxHQUFiLEVBQWtCSSxJQUFsQixHQUF5QkEsSUFBekI7QUFDQU4sU0FBSyxDQUFDRixTQUFOLCtJQUFvQkUsS0FBSyxDQUFDSCxNQUExQjtBQUNIOztBQUdELFNBQU87QUFBQ1csVUFBTSxFQUFOQSxNQUFEO0FBQVNQLFlBQVEsRUFBUkEsUUFBVDtBQUFtQlMsaUJBQWEsRUFBYkEsYUFBbkI7QUFBa0NDLHFCQUFpQixFQUFFLENBQUNkLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhLFVBQUFDLEtBQUs7QUFBQSxhQUFFLENBQUNBLEtBQUssQ0FBQ1AsSUFBVDtBQUFBLEtBQWxCO0FBQXRELEdBQVA7QUFDSDs7R0FqQ1FYLFk7O0tBQUFBLFk7QUFtQ1QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9wdXB0ZXN0LjZlYzFjNzYzODExMjcxOGJlODRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2kgaGF2ZSBubyBpZGVhIGhvdyBpdCB3b3JrcyBidXQgaXQganVzdCB3b3Jrc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFBvcHVwTWFuYWdlcigpe1xuICAgIGNvbnN0IFtwb3B1cHMsIHNldFBvcHVwc10gPSBSZWFjdC51c2VTdGF0ZTxQb3B1cE9ialtdPihbXSlcbiAgICBjb25zdCBbc3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe3BvcHVwcywgc2V0UG9wdXBzLCByZWNvcmQ6e30gYXMgUmVjb3JkPHN0cmluZywgUG9wdXBPYmo+fSlcblxuICAgIHR5cGUgUG9wdXBPYmogPSB7b3BlbjogYm9vbGVhbiwga2V5OiBzdHJpbmcsIHJlbmRlckZ1bmN0aW9uOiAob3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudH1cblxuICAgIHN0YXRlLnNldFBvcHVwcz1zZXRQb3B1cHM7XG4gICAgc3RhdGUucG9wdXBzPXBvcHVwcztcblxuICAgIGZ1bmN0aW9uIEFkZFBvcHVwKGtleTogc3RyaW5nLCBpc09wZW46IGJvb2xlYW4sIGNhbGxiYWNrOiAob25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBvYmo6IFBvcHVwT2JqID0ge29wZW46IGlzT3Blbiwga2V5OiBrZXksIHJlbmRlckZ1bmN0aW9uOiAob3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgICAgIG9iai5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgICAgICAgICAgfSwgb3BlbilcbiAgICAgICAgfX07XG4gICAgICAgIHN0YXRlLnJlY29yZFtrZXldID0gb2JqO1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwcywgb2JqXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBSZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIHBvcHVwcy5tYXAoKG9iaik9PntcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXtvYmoua2V5fT57b2JqLnJlbmRlckZ1bmN0aW9uKG9iai5vcGVuKX08L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNldFBvcHVwU3RhdGUoa2V5OiBzdHJpbmcsIG9wZW46IGJvb2xlYW4pe1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XS5vcGVuID0gb3BlbjtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtSZW5kZXIsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlLCBzaG91bGRTaG93T3ZlcmxheTogIXBvcHVwcy5ldmVyeShwb3B1cD0+IXBvcHVwLm9wZW4pfVxufVxuXG5leHBvcnQge1BvcHVwTWFuYWdlcn0iXSwic291cmNlUm9vdCI6IiJ9