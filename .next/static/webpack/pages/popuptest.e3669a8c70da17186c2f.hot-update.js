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
} //i have no idea how it works but it just works


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
        lineNumber: 57,
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
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBNYW5hZ2VyIiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJyZWNvcmQiLCJzdGF0ZSIsIkFkZFBvcHVwIiwia2V5IiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwicmVuZGVyRnVuY3Rpb24iLCJSZW5kZXIiLCJtYXAiLCJTZXRQb3B1cFN0YXRlIiwiUG9wdXBUZXN0IiwiUmVuZGVyUG9wdXBzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImJhY2tkcm9wRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFtRTtBQUMvRCxzQkFBTyw4REFBQyxvREFBRDtBQUFZLFVBQU0sRUFBSUEsS0FBSyxDQUFDQyxNQUE1QjtBQUFvQyxnQkFBWSxFQUFFLHdCQUFJLENBQUUsQ0FBeEQ7QUFBMEQsZUFBVyxFQUFFLEtBQXZFO0FBQThFLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCQyxhQUFLLEVBQUUsZUFBOUI7QUFBK0NDLGFBQUssRUFBRSxHQUF0RDtBQUEyREMsY0FBTSxFQUFFLEdBQW5FO0FBQXlFQyxpQkFBUyxFQUFFO0FBQXBGLE9BQVY7QUFBd0hDLGFBQU8sRUFBRTtBQUFDTCxnQkFBUSxFQUFFLE9BQVg7QUFBb0JDLGFBQUssRUFBRSxDQUEzQjtBQUE4QkMsYUFBSyxFQUFFLE1BQXJDO0FBQTZDQyxjQUFNLEVBQUU7QUFBckQ7QUFBakksS0FBckY7QUFBQSwyQkFDQztBQUFRLGFB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QUFDTSxzQkFBYyxFQUFFO0FBQWpCO0FBQXZCLE9BQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEcsRUFNRkosWUFBWSxFQU5WO0FBQUEsa0JBQVA7QUFRSDs7SUFwQlFELFM7O01BQUFBLFM7QUFzQlQsK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9wdXB0ZXN0LmUzNjY5YThjNzBkYTE3MTg2YzJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuXG5cbmZ1bmN0aW9uIFBvcHVwMShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XG4gICAgcmV0dXJuIDxSZWFjdE1vZGFsIGlzT3BlbiA9IHtwcm9wcy5pc09wZW59IG9uQWZ0ZXJDbG9zZT17KCk9Pnt9fSBhcmlhSGlkZUFwcD17ZmFsc2V9IHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDAsICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgICAgfX0+Q2xvc2U8L2J1dHRvbj5cbiAgICA8L1JlYWN0TW9kYWw+XG59XG5cbi8vaSBoYXZlIG5vIGlkZWEgaG93IGl0IHdvcmtzIGJ1dCBpdCBqdXN0IHdvcmtzXG5cbmZ1bmN0aW9uIFBvcHVwTWFuYWdlcigpe1xuICAgIGNvbnN0IFtwb3B1cHMsIHNldFBvcHVwc10gPSBSZWFjdC51c2VTdGF0ZTxQb3B1cE9ialtdPihbXSlcbiAgICBjb25zdCBbc3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe3BvcHVwcywgc2V0UG9wdXBzLCByZWNvcmQ6e30gYXMgUmVjb3JkPHN0cmluZywgUG9wdXBPYmo+fSlcblxuICAgIHR5cGUgUG9wdXBPYmogPSB7b3BlbjogYm9vbGVhbiwgcmVuZGVyRnVuY3Rpb246IChvcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50fVxuXG4gICAgc3RhdGUuc2V0UG9wdXBzPXNldFBvcHVwcztcbiAgICBzdGF0ZS5wb3B1cHM9cG9wdXBzO1xuXG4gICAgZnVuY3Rpb24gQWRkUG9wdXAoa2V5OiBzdHJpbmcsIGlzT3BlbjogYm9vbGVhbiwgY2FsbGJhY2s6IChvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudCl7XG4gICAgICAgIGNvbnN0IG9iajogUG9wdXBPYmogPSB7b3BlbjogaXNPcGVuLCByZW5kZXJGdW5jdGlvbjogKG9wZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKCk9PntcbiAgICAgICAgICAgICAgICBvYmoub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICAgICAgICAgIH0sIG9wZW4pXG4gICAgICAgIH19O1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XSA9IG9iajtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHMsIG9ial0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUmVuZGVyKCl7XG4gICAgICAgIHJldHVybiBwb3B1cHMubWFwKChvYmopPT57XG4gICAgICAgICAgICByZXR1cm4gb2JqLnJlbmRlckZ1bmN0aW9uKG9iai5vcGVuKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNldFBvcHVwU3RhdGUoa2V5OiBzdHJpbmcsIG9wZW46IGJvb2xlYW4pe1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XS5vcGVuID0gb3BlbjtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgIH1cblxuICAgIHJldHVybiB7UmVuZGVyLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZX1cbn1cblxuXG5cbmZ1bmN0aW9uIFBvcHVwVGVzdCgpe1xuICAgIFxuICAgIGNvbnN0IHtSZW5kZXI6IFJlbmRlclBvcHVwcywgQWRkUG9wdXAsIFNldFBvcHVwU3RhdGV9ID0gUG9wdXBNYW5hZ2VyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgQWRkUG9wdXAoXCJwb3B1cDFcIiwgdHJ1ZSwgKG9uUmVxdWVzdENsb3NlLCBpc09wZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gPFBvcHVwMSBvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9IGlzT3Blbj17aXNPcGVufS8+XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc29sZS5sb2coXCJyZW5kZXJcIilcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICBTZXRQb3B1cFN0YXRlKFwicG9wdXAxXCIsIHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgfX0+U2hvdyBTZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGtleT1cImJsdXJcIiBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwifX0+PC9kaXY+XG4gICAgICAgIHtSZW5kZXJQb3B1cHMoKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=