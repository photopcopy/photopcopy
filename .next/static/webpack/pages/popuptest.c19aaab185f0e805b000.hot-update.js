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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_popupmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/popupmanager */ "./src/scripts/popupmanager.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\popuptest.tsx",
    _s = $RefreshSig$();





function Popup1(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
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

  var _PopupManager = (0,_scripts_popupmanager__WEBPACK_IMPORTED_MODULE_3__.PopupManager)(),
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


/***/ }),

/***/ "./src/scripts/popupmanager.tsx":
/*!**************************************!*\
  !*** ./src/scripts/popupmanager.tsx ***!
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




var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\scripts\\popupmanager.tsx",
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JpcHRzL3BvcHVwbWFuYWdlci50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBUZXN0IiwiUG9wdXBNYW5hZ2VyIiwiUmVuZGVyUG9wdXBzIiwiUmVuZGVyIiwiQWRkUG9wdXAiLCJTZXRQb3B1cFN0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImJhY2tkcm9wRmlsdGVyIiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJyZWNvcmQiLCJzdGF0ZSIsImtleSIsImNhbGxiYWNrIiwib2JqIiwib3BlbiIsInJlbmRlckZ1bmN0aW9uIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBbUU7QUFDL0Qsc0JBQU8sOERBQUMsb0RBQUQ7QUFBWSxVQUFNLEVBQUlBLEtBQUssQ0FBQ0MsTUFBNUI7QUFBb0MsZ0JBQVksRUFBRSx3QkFBSSxDQUFFLENBQXhEO0FBQTBELGVBQVcsRUFBRSxLQUF2RTtBQUE4RSxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQUNDLGdCQUFRLEVBQUUsVUFBWDtBQUF1QkMsYUFBSyxFQUFFLGVBQTlCO0FBQStDQyxhQUFLLEVBQUUsR0FBdEQ7QUFBMkRDLGNBQU0sRUFBRSxHQUFuRTtBQUF5RUMsaUJBQVMsRUFBRTtBQUFwRixPQUFWO0FBQXdIQyxhQUFPLEVBQUU7QUFBQ0wsZ0JBQVEsRUFBRSxPQUFYO0FBQW9CQyxhQUFLLEVBQUUsQ0FBM0I7QUFBOEJDLGFBQUssRUFBRSxNQUFyQztBQUE2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QkEsR0FBRyxDQUFDRSxjQUFKLENBQW1CRixHQUFHLENBQUNDLElBQXZCO0FBQS9CLFNBQXFCRCxHQUFHLENBQUNGLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRk0sQ0FBUDtBQUdIOztBQUVELFdBQVNWLGFBQVQsQ0FBdUJVLEdBQXZCLEVBQW9DRyxJQUFwQyxFQUFrRDtBQUM5Q0osU0FBSyxDQUFDRCxNQUFOLENBQWFFLEdBQWIsRUFBa0JHLElBQWxCLEdBQXlCQSxJQUF6QjtBQUNBSixTQUFLLENBQUNGLFNBQU4sK0lBQW9CRSxLQUFLLENBQUNILE1BQTFCO0FBQ0g7O0FBRUQsU0FBTztBQUFDUixVQUFNLEVBQU5BLE1BQUQ7QUFBU0MsWUFBUSxFQUFSQSxRQUFUO0FBQW1CQyxpQkFBYSxFQUFiQTtBQUFuQixHQUFQO0FBQ0g7O0dBaENRSixZOztLQUFBQSxZO0FBa0NUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcHVwdGVzdC5jMTlhYWFiMTg1ZjBlODA1YjAwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gXCIuLi9zY3JpcHRzL3BvcHVwbWFuYWdlclwiO1xuXG5cbmZ1bmN0aW9uIFBvcHVwMShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XG4gICAgcmV0dXJuIDxSZWFjdE1vZGFsIGlzT3BlbiA9IHtwcm9wcy5pc09wZW59IG9uQWZ0ZXJDbG9zZT17KCk9Pnt9fSBhcmlhSGlkZUFwcD17ZmFsc2V9IHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDAsICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgICAgfX0+Q2xvc2U8L2J1dHRvbj5cbiAgICA8L1JlYWN0TW9kYWw+XG59XG5cblxuXG5mdW5jdGlvbiBQb3B1cFRlc3QoKXtcbiAgICBcbiAgICBjb25zdCB7UmVuZGVyOiBSZW5kZXJQb3B1cHMsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlfSA9IFBvcHVwTWFuYWdlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIEFkZFBvcHVwKFwicG9wdXAxXCIsIHRydWUsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxQb3B1cDEgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfSBpc09wZW49e2lzT3Blbn0vPlxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGJ1dHRvbiBrZXk9XCJjbGlja0J0blwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICBTZXRQb3B1cFN0YXRlKFwicG9wdXAxXCIsIHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgfX0+U2hvdyBTZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGtleT1cImJsdXJcIiBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwifX0+PC9kaXY+XG4gICAgICAgIHtSZW5kZXJQb3B1cHMoKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBUZXN0OyIsIi8vaSBoYXZlIG5vIGlkZWEgaG93IGl0IHdvcmtzIGJ1dCBpdCBqdXN0IHdvcmtzXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUG9wdXBNYW5hZ2VyKCl7XG4gICAgY29uc3QgW3BvcHVwcywgc2V0UG9wdXBzXSA9IFJlYWN0LnVzZVN0YXRlPFBvcHVwT2JqW10+KFtdKVxuICAgIGNvbnN0IFtzdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7cG9wdXBzLCBzZXRQb3B1cHMsIHJlY29yZDp7fSBhcyBSZWNvcmQ8c3RyaW5nLCBQb3B1cE9iaj59KVxuXG4gICAgdHlwZSBQb3B1cE9iaiA9IHtvcGVuOiBib29sZWFuLCBrZXk6IHN0cmluZywgcmVuZGVyRnVuY3Rpb246IChvcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50fVxuXG4gICAgc3RhdGUuc2V0UG9wdXBzPXNldFBvcHVwcztcbiAgICBzdGF0ZS5wb3B1cHM9cG9wdXBzO1xuXG4gICAgZnVuY3Rpb24gQWRkUG9wdXAoa2V5OiBzdHJpbmcsIGlzT3BlbjogYm9vbGVhbiwgY2FsbGJhY2s6IChvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudCl7XG4gICAgICAgIGNvbnN0IG9iajogUG9wdXBPYmogPSB7b3BlbjogaXNPcGVuLCBrZXk6IGtleSwgcmVuZGVyRnVuY3Rpb246IChvcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCgpPT57XG4gICAgICAgICAgICAgICAgb2JqLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwc10pXG4gICAgICAgICAgICB9LCBvcGVuKVxuICAgICAgICB9fTtcbiAgICAgICAgc3RhdGUucmVjb3JkW2tleV0gPSBvYmo7XG4gICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzLCBvYmpdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFJlbmRlcigpe1xuICAgICAgICByZXR1cm4gcG9wdXBzLm1hcCgob2JqKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9e29iai5rZXl9PntvYmoucmVuZGVyRnVuY3Rpb24ob2JqLm9wZW4pfTwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2V0UG9wdXBTdGF0ZShrZXk6IHN0cmluZywgb3BlbjogYm9vbGVhbil7XG4gICAgICAgIHN0YXRlLnJlY29yZFtrZXldLm9wZW4gPSBvcGVuO1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwc10pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtSZW5kZXIsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlfVxufVxuXG5leHBvcnQge1BvcHVwTWFuYWdlcn0iXSwic291cmNlUm9vdCI6IiJ9