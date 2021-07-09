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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




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
    return popups.map(function (obj) {
      return obj.renderFunction(obj.open);
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

_c2 = PopupManager;

function PopupTest() {
  _s2();

  var _this = this;

  var _PopupManager = PopupManager(),
      RenderPopups = _PopupManager.Render,
      AddPopup = _PopupManager.AddPopup,
      SetPopupState = _PopupManager.SetPopupState;

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    AddPopup("popup1", true, function (onRequestClose, isOpen) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup1, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 20
      }, _this);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        SetPopupState("popup1", true);
      },
      children: "Show Settings"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), RenderPopups()]
  }, void 0, true);
}

_s2(PopupTest, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = PopupTest;
/* harmony default export */ __webpack_exports__["default"] = (PopupTest);

var _c, _c2, _c3;

$RefreshReg$(_c, "Popup1");
$RefreshReg$(_c2, "PopupManager");
$RefreshReg$(_c3, "PopupTest");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBNYW5hZ2VyIiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJyZWNvcmQiLCJzdGF0ZSIsIkFkZFBvcHVwIiwia2V5IiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwicmVuZGVyRnVuY3Rpb24iLCJSZW5kZXIiLCJtYXAiLCJTZXRQb3B1cFN0YXRlIiwiUG9wdXBUZXN0IiwiUmVuZGVyUG9wdXBzIiwidXNlRWZmZWN0IiwiYmFja2Ryb3BGaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQW1FO0FBQy9ELHNCQUFPLDhEQUFDLG9EQUFEO0FBQVksVUFBTSxFQUFJQSxLQUFLLENBQUNDLE1BQTVCO0FBQW9DLGdCQUFZLEVBQUUsd0JBQUksQ0FBRSxDQUF4RDtBQUEwRCxlQUFXLEVBQUUsS0FBdkU7QUFBOEUsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFDQyxnQkFBUSxFQUFFLFVBQVg7QUFBdUJDLGFBQUssRUFBRSxlQUE5QjtBQUErQ0MsYUFBSyxFQUFFLEdBQXREO0FBQTJEQyxjQUFNLEVBQUUsR0FBbkU7QUFBeUVDLGlCQUFTLEVBQUU7QUFBcEYsT0FBVjtBQUF3SEMsYUFBTyxFQUFFO0FBQUNMLGdCQUFRLEVBQUUsT0FBWDtBQUFvQkMsYUFBSyxFQUFFLENBQTNCO0FBQThCQyxhQUFLLEVBQUUsTUFBckM7QUFBNkNDLGNBQU0sRUFBRTtBQUFyRDtBQUFqSSxLQUFyRjtBQUFBLDJCQUNDO0FBQVEsYUFBTyxFQUFFLG1CQUFJO0FB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QSxZQUxHLEVBTUZGLFlBQVksRUFOVjtBQUFBLGtCQUFQO0FBUUg7O0lBbkJRRCxTOztNQUFBQSxTO0FBcUJULCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcHVwdGVzdC42ODA1YTY2ZjUyNzRkZTQ0MjI4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcblxuXG5mdW5jdGlvbiBQb3B1cDEocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xuICAgIHJldHVybiA8UmVhY3RNb2RhbCBpc09wZW4gPSB7cHJvcHMuaXNPcGVufSBvbkFmdGVyQ2xvc2U9eygpPT57fX0gYXJpYUhpZGVBcHA9e2ZhbHNlfSBzdHlsZT17e2NvbnRlbnQ6IHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBpbnNldDogXCI1MCUgMCUgMCUgNTAlXCIsIHdpZHRoOiAzMDAsIGhlaWdodDogMjAwLCAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwifSwgb3ZlcmxheToge3Bvc2l0aW9uOiBcImZpeGVkXCIsIGluc2V0OiAwLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UoKTtcbiAgICAgICAgICAgIH19PkNsb3NlPC9idXR0b24+XG4gICAgPC9SZWFjdE1vZGFsPlxufVxuXG5mdW5jdGlvbiBQb3B1cE1hbmFnZXIoKXtcbiAgICBjb25zdCBbcG9wdXBzLCBzZXRQb3B1cHNdID0gUmVhY3QudXNlU3RhdGU8UG9wdXBPYmpbXT4oW10pXG4gICAgY29uc3QgW3N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtwb3B1cHMsIHNldFBvcHVwcywgcmVjb3JkOnt9IGFzIFJlY29yZDxzdHJpbmcsIFBvcHVwT2JqPn0pXG5cbiAgICB0eXBlIFBvcHVwT2JqID0ge29wZW46IGJvb2xlYW4sIHJlbmRlckZ1bmN0aW9uOiAob3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudH1cblxuICAgIHN0YXRlLnNldFBvcHVwcz1zZXRQb3B1cHM7XG4gICAgc3RhdGUucG9wdXBzPXBvcHVwcztcblxuICAgIGZ1bmN0aW9uIEFkZFBvcHVwKGtleTogc3RyaW5nLCBpc09wZW46IGJvb2xlYW4sIGNhbGxiYWNrOiAob25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBvYmo6IFBvcHVwT2JqID0ge29wZW46IGlzT3BlbiwgcmVuZGVyRnVuY3Rpb246IChvcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCgpPT57XG4gICAgICAgICAgICAgICAgb2JqLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwc10pXG4gICAgICAgICAgICB9LCBvcGVuKVxuICAgICAgICB9fTtcbiAgICAgICAgc3RhdGUucmVjb3JkW2tleV0gPSBvYmo7XG4gICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzLCBvYmpdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFJlbmRlcigpe1xuICAgICAgICByZXR1cm4gcG9wdXBzLm1hcCgob2JqKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG9iai5yZW5kZXJGdW5jdGlvbihvYmoub3BlbilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZXRQb3B1cFN0YXRlKGtleTogc3RyaW5nLCBvcGVuOiBib29sZWFuKXtcbiAgICAgICAgc3RhdGUucmVjb3JkW2tleV0ub3BlbiA9IG9wZW47XG4gICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1JlbmRlciwgQWRkUG9wdXAsIFNldFBvcHVwU3RhdGV9XG59XG5cblxuXG5mdW5jdGlvbiBQb3B1cFRlc3QoKXtcbiAgICBcbiAgICBjb25zdCB7UmVuZGVyOiBSZW5kZXJQb3B1cHMsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlfSA9IFBvcHVwTWFuYWdlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIEFkZFBvcHVwKFwicG9wdXAxXCIsIHRydWUsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxQb3B1cDEgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfSBpc09wZW49e2lzT3Blbn0vPlxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIFxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgIFNldFBvcHVwU3RhdGUoXCJwb3B1cDFcIiwgdHJ1ZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9fT5TaG93IFNldHRpbmdzPC9idXR0b24+XG4gICAgICAgIDxkaXYga2V5PVwiYmx1clwiIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpXCJ9fT48L2Rpdj5cbiAgICAgICAge1JlbmRlclBvcHVwcygpfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFRlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==