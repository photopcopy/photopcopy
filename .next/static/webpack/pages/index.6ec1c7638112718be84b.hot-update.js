self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvcG9wdXBtYW5hZ2VyLnRzeCJdLCJuYW1lcyI6WyJQb3B1cE1hbmFnZXIiLCJSZWFjdCIsInBvcHVwcyIsInNldFBvcHVwcyIsInJlY29yZCIsInN0YXRlIiwiQWRkUG9wdXAiLCJrZXkiLCJpc09wZW4iLCJjYWxsYmFjayIsIm9iaiIsIm9wZW4iLCJyZW5kZXJGdW5jdGlvbiIsIlJlbmRlciIsIm1hcCIsIlNldFBvcHVwU3RhdGUiLCJzaG91bGRTaG93T3ZlcmxheSIsImV2ZXJ5IiwicG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsWUFBVCxHQUF1QjtBQUFBOztBQUFBLHdCQUNTQyxxREFBQSxDQUEyQixFQUEzQixDQURUO0FBQUE7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFBQSx5QkFFSEYscURBQUEsQ0FBZTtBQUFDQyxVQUFNLEVBQU5BLE1BQUQ7QUFBU0MsYUFBUyxFQUFUQSxTQUFUO0FBQW9CQyxVQUFNLEVBQUM7QUFBM0IsR0FBZixDQUZHO0FBQUE7QUFBQSxNQUVaQyxLQUZZOztBQU1uQkEsT0FBSyxDQUFDRixTQUFOLEdBQWdCQSxTQUFoQjtBQUNBRSxPQUFLLENBQUNILE1BQU4sR0FBYUEsTUFBYjs7QUFFQSxXQUFTSSxRQUFULENBQWtCQyxHQUFsQixFQUErQkMsTUFBL0IsRUFBZ0RDLFFBQWhELEVBQTBIO0FBQ3RILFFBQU1DLEdBQWEsR0FBRztBQUFDQyxVQUFJLEVBQUVILE1BQVA7QUFBZUQsU0FBRyxFQUFFQSxHQUFwQjtBQUF5Qkssb0JBQWMsRUFBRSx3QkFBQ0QsSUFBRCxFQUFRO0FBQ25FLGVBQU9GLFFBQVEsQ0FBQyxZQUFJO0FBQ2hCQyxhQUFHLENBQUNDLElBQUosR0FBVyxLQUFYO0FBQ0FOLGVBQUssQ0FBQ0YsU0FBTiwrSUFBb0JFLEtBQUssQ0FBQ0gsTUFBMUI7QUFDSCxTQUhjLEVBR1pTLElBSFksQ0FBZjtBQUlIO0FBTHFCLEtBQXRCO0FBTUFOLFNBQUssQ0FBQ0QsTUFBTixDQUFhRyxHQUFiLElBQW9CRyxHQUFwQjtBQUNBTCxTQUFLLENBQUNGLFNBQU4seUpBQW9CRSxLQUFLLENBQUNILE1BQTFCLElBQWtDUSxHQUFsQztBQUNIOztBQUVELFdBQVNHLE1BQVQsR0FBaUI7QUFBQTs7QUFDYixXQUFPWCxNQUFNLENBQUNZLEdBQVAsQ0FBVyxVQUFDSixHQUFELEVBQU87QUFDckIsMEJBQU8sOERBQUMsdURBQUQ7QUFBQSxrQkFBK0JBLEdBQUcsQ0FBQ0UsY0FBSixDQUFtQkYsR0FBRyxDQUFDQyxJQUF2QjtBQUEvQixTQUFxQkQsR0FBRyxDQUFDSCxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZNLENBQVA7QUFHSDs7QUFFRCxXQUFTUSxhQUFULENBQXVCUixHQUF2QixFQUFvQ0ksSUFBcEMsRUFBa0Q7QUFDOUNOLFNBQUssQ0FBQ0QsTUFBTixDQUFhRyxHQUFiLEVBQWtCSSxJQUFsQixHQUF5QkEsSUFBekI7QUFDQU4sU0FBSyxDQUFDRixTQUFOLCtJQUFvQkUsS0FBSyxDQUFDSCxNQUExQjtBQUNIOztBQUdELFNBQU87QUFBQ1csVUFBTSxFQUFOQSxNQUFEO0FBQVNQLFlBQVEsRUFBUkEsUUFBVDtBQUFtQlMsaUJBQWEsRUFBYkEsYUFBbkI7QUFBa0NDLHFCQUFpQixFQUFFLENBQUNkLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhLFVBQUFDLEtBQUs7QUFBQSxhQUFFLENBQUNBLEtBQUssQ0FBQ1AsSUFBVDtBQUFBLEtBQWxCO0FBQXRELEdBQVA7QUFDSDs7R0FqQ1FYLFk7O0tBQUFBLFk7QUFtQ1QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmVjMWM3NjM4MTEyNzE4YmU4NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaSBoYXZlIG5vIGlkZWEgaG93IGl0IHdvcmtzIGJ1dCBpdCBqdXN0IHdvcmtzXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUG9wdXBNYW5hZ2VyKCl7XG4gICAgY29uc3QgW3BvcHVwcywgc2V0UG9wdXBzXSA9IFJlYWN0LnVzZVN0YXRlPFBvcHVwT2JqW10+KFtdKVxuICAgIGNvbnN0IFtzdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7cG9wdXBzLCBzZXRQb3B1cHMsIHJlY29yZDp7fSBhcyBSZWNvcmQ8c3RyaW5nLCBQb3B1cE9iaj59KVxuXG4gICAgdHlwZSBQb3B1cE9iaiA9IHtvcGVuOiBib29sZWFuLCBrZXk6IHN0cmluZywgcmVuZGVyRnVuY3Rpb246IChvcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50fVxuXG4gICAgc3RhdGUuc2V0UG9wdXBzPXNldFBvcHVwcztcbiAgICBzdGF0ZS5wb3B1cHM9cG9wdXBzO1xuXG4gICAgZnVuY3Rpb24gQWRkUG9wdXAoa2V5OiBzdHJpbmcsIGlzT3BlbjogYm9vbGVhbiwgY2FsbGJhY2s6IChvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudCl7XG4gICAgICAgIGNvbnN0IG9iajogUG9wdXBPYmogPSB7b3BlbjogaXNPcGVuLCBrZXk6IGtleSwgcmVuZGVyRnVuY3Rpb246IChvcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCgpPT57XG4gICAgICAgICAgICAgICAgb2JqLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwc10pXG4gICAgICAgICAgICB9LCBvcGVuKVxuICAgICAgICB9fTtcbiAgICAgICAgc3RhdGUucmVjb3JkW2tleV0gPSBvYmo7XG4gICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzLCBvYmpdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFJlbmRlcigpe1xuICAgICAgICByZXR1cm4gcG9wdXBzLm1hcCgob2JqKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9e29iai5rZXl9PntvYmoucmVuZGVyRnVuY3Rpb24ob2JqLm9wZW4pfTwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2V0UG9wdXBTdGF0ZShrZXk6IHN0cmluZywgb3BlbjogYm9vbGVhbil7XG4gICAgICAgIHN0YXRlLnJlY29yZFtrZXldLm9wZW4gPSBvcGVuO1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwc10pXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1JlbmRlciwgQWRkUG9wdXAsIFNldFBvcHVwU3RhdGUsIHNob3VsZFNob3dPdmVybGF5OiAhcG9wdXBzLmV2ZXJ5KHBvcHVwPT4hcG9wdXAub3Blbil9XG59XG5cbmV4cG9ydCB7UG9wdXBNYW5hZ2VyfSJdLCJzb3VyY2VSb290IjoiIn0=