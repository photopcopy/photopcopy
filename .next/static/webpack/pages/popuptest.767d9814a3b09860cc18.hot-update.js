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
    SetPopupState: SetPopupState
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_popupmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/popupmanager */ "./src/modules/popupmanager.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\popuptest.tsx",
    _s = $RefreshSig$();





function Popup1(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: props.isOpen,
    closeTimeoutMS: 500,
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
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

_c = Popup1;

function PopupTest() {
  _s();

  var _this = this;

  var _PopupManager = (0,_modules_popupmanager__WEBPACK_IMPORTED_MODULE_3__.PopupManager)(),
      RenderPopups = _PopupManager.Render,
      AddPopup = _PopupManager.AddPopup,
      SetPopupState = _PopupManager.SetPopupState;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    AddPopup("popup1", true, function (onRequestClose, isOpen) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup1, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 20
      }, _this);
    });
  }, []);
  console.log("render");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        SetPopupState("popup1", true);
      },
      children: "Show Settings"
    }, "clickBtn", false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), RenderPopups()]
  }, void 0, true);
}

_s(PopupTest, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvcG9wdXBtYW5hZ2VyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXBNYW5hZ2VyIiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJyZWNvcmQiLCJzdGF0ZSIsIkFkZFBvcHVwIiwia2V5IiwiaXNPcGVuIiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwicmVuZGVyRnVuY3Rpb24iLCJSZW5kZXIiLCJtYXAiLCJTZXRQb3B1cFN0YXRlIiwiUG9wdXAxIiwicHJvcHMiLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBUZXN0IiwiUmVuZGVyUG9wdXBzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImJhY2tkcm9wRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsR0FBdUI7QUFBQTs7QUFBQSx3QkFDU0MscURBQUEsQ0FBMkIsRUFBM0IsQ0FEVDtBQUFBO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBQUEseUJBRUhGLHFEQUFBLENBQWU7QUFBQ0MsVUFBTSxFQUFOQSxNQUFEO0FBQVNDLGFBQVMsRUFBVEEsU0FBVDtBQUFvQkMsVUFBTSxFQUFDO0FBQTNCLEdBQWYsQ0FGRztBQUFBO0FBQUEsTUFFWkMsS0FGWTs7QUFNbkJBLE9BQUssQ0FBQ0YsU0FBTixHQUFnQkEsU0FBaEI7QUFDQUUsT0FBSyxDQUFDSCxNQUFOLEdBQWFBLE1BQWI7O0FBRUEsV0FBU0ksUUFBVCxDQUFrQkMsR0FBbEIsRUFBK0JDLE1BQS9CLEVBQWdEQyxRQUFoRCxFQUEwSDtBQUN0SCxRQUFNQyxHQUFhLEdBQUc7QUFBQ0MsVUFBSSxFQUFF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LGNBQXhCO0FBQXdDLGNBQU0sRUFBRWpCO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRk8sQ0FBUjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQXFCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFFQSxzQkFBTztBQUFBLDRCQUNIO0FBQXVCLGFBQU8sRUFBRSxtQkFBSTtBQUNoQ2YscUJBQWEsQ0FBQyxRQUFELEVBQVcsSUFBWCxDQUFiO0FBRUgsT0FIRDtBQUFBO0FBQUEsT0FBWSxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUtIO0FBQWdCLFdBQUssRUFBRTtBQUFDZ0Isc0JBQWMsRUFBRTtBQUFqQjtBQUF2QixPQUFTLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxHLEVBTUZKLFlBQVksRUFOVjtBQUFBLGtCQUFQO0FBUUg7O0dBcEJRRCxTOztNQUFBQSxTO0FBc0JULCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcHVwdGVzdC43NjdkOTgxNGEzYjA5ODYwY2MxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pIGhhdmUgbm8gaWRlYSBob3cgaXQgd29ya3MgYnV0IGl0IGp1c3Qgd29ya3NcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQb3B1cE1hbmFnZXIoKXtcbiAgICBjb25zdCBbcG9wdXBzLCBzZXRQb3B1cHNdID0gUmVhY3QudXNlU3RhdGU8UG9wdXBPYmpbXT4oW10pXG4gICAgY29uc3QgW3N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtwb3B1cHMsIHNldFBvcHVwcywgcmVjb3JkOnt9IGFzIFJlY29yZDxzdHJpbmcsIFBvcHVwT2JqPn0pXG5cbiAgICB0eXBlIFBvcHVwT2JqID0ge29wZW46IGJvb2xlYW4sIGtleTogc3RyaW5nLCByZW5kZXJGdW5jdGlvbjogKG9wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnR9XG5cbiAgICBzdGF0ZS5zZXRQb3B1cHM9c2V0UG9wdXBzO1xuICAgIHN0YXRlLnBvcHVwcz1wb3B1cHM7XG5cbiAgICBmdW5jdGlvbiBBZGRQb3B1cChrZXk6IHN0cmluZywgaXNPcGVuOiBib29sZWFuLCBjYWxsYmFjazogKG9uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50KXtcbiAgICAgICAgY29uc3Qgb2JqOiBQb3B1cE9iaiA9IHtvcGVuOiBpc09wZW4sIGtleToga2V5LCByZW5kZXJGdW5jdGlvbjogKG9wZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKCk9PntcbiAgICAgICAgICAgICAgICBvYmoub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICAgICAgICAgIH0sIG9wZW4pXG4gICAgICAgIH19O1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XSA9IG9iajtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHMsIG9ial0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUmVuZGVyKCl7XG4gICAgICAgIHJldHVybiBwb3B1cHMubWFwKChvYmopPT57XG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17b2JqLmtleX0+e29iai5yZW5kZXJGdW5jdGlvbihvYmoub3Blbil9PC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZXRQb3B1cFN0YXRlKGtleTogc3RyaW5nLCBvcGVuOiBib29sZWFuKXtcbiAgICAgICAgc3RhdGUucmVjb3JkW2tleV0ub3BlbiA9IG9wZW47XG4gICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1JlbmRlciwgQWRkUG9wdXAsIFNldFBvcHVwU3RhdGV9XG59XG5cbmV4cG9ydCB7UG9wdXBNYW5hZ2VyfSIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9wb3B1cG1hbmFnZXJcIjtcblxuXG5mdW5jdGlvbiBQb3B1cDEocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xuICAgIHJldHVybiA8UmVhY3RNb2RhbCBpc09wZW4gPSB7cHJvcHMuaXNPcGVufSBjbG9zZVRpbWVvdXRNUz17NTAwfSBvbkFmdGVyQ2xvc2U9eygpPT57fX0gYXJpYUhpZGVBcHA9e2ZhbHNlfSBzdHlsZT17e2NvbnRlbnQ6IHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBpbnNldDogXCI1MCUgMCUgMCUgNTAlXCIsIHdpZHRoOiAzMDAsIGhlaWdodDogMjAwLCAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwifSwgb3ZlcmxheToge3Bvc2l0aW9uOiBcImZpeGVkXCIsIGluc2V0OiAwLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UoKTtcbiAgICAgICAgICAgIH19PkNsb3NlPC9idXR0b24+XG4gICAgPC9SZWFjdE1vZGFsPlxufVxuXG5cblxuZnVuY3Rpb24gUG9wdXBUZXN0KCl7XG4gICAgXG4gICAgY29uc3Qge1JlbmRlcjogUmVuZGVyUG9wdXBzLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZX0gPSBQb3B1cE1hbmFnZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBBZGRQb3B1cChcInBvcHVwMVwiLCB0cnVlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiA8UG9wdXAxIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX0gaXNPcGVuPXtpc09wZW59Lz5cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInJlbmRlclwiKVxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxidXR0b24ga2V5PVwiY2xpY2tCdG5cIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgU2V0UG9wdXBTdGF0ZShcInBvcHVwMVwiLCB0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgIH19PlNob3cgU2V0dGluZ3M8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBrZXk9XCJibHVyXCIgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIn19PjwvZGl2PlxuICAgICAgICB7UmVuZGVyUG9wdXBzKCl9XG4gICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9