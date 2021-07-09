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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        SetPopupState("popup1", true);
      },
      children: "Show Settings"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBNYW5hZ2VyIiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJyZWNvcmQiLCJzdGF0ZSIsIkFkZFBvcHVwIiwia2V5IiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwicmVuZGVyRnVuY3Rpb24iLCJSZW5kZXIiLCJtYXAiLCJTZXRQb3B1cFN0YXRlIiwiUG9wdXBUZXN0IiwiUmVuZGVyUG9wdXBzIiwidXNlRWZmZWN0IiwiYmFja2Ryb3BGaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQW1FO0FBQy9ELHNCQUFPLDhEQUFDLG9EQUFEO0FBQVksVUFBTSxFQUFJQSxLQUFLLENBQUNDLE1BQTVCO0FBQW9DLGdCQUFZLEVBQUUsd0JBQUksQ0FBRSxDQUF4RDtBQUEwRCxlQUFXLEVBQUUsS0FBdkU7QUFBOEUsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFDQyxnQkFBUSxFQUFFLFVBQVg7QUFBdUJDLGFBQUssRUFBRSxlQUE5QjtBQUErQ0MsYUFBSyxFQUFFLEdBQXREO0FBQTJEQyxjQUFNLEVBQUUsR0FBbkU7QUFBeUVDLGlCQUFTLEVBQUU7QUFBcEYsT0FBVjtBQUF3SEMsYUFBTyxFQUFFO0FBQUNMLGdCQUFRLEVBQUUsT0FBWDtBQUFvQkMsYUFBSyxFQUFFLENBQTNCO0FBQThCQyxhQUFLLEVBQUUsTUFBckM7QUFBNkNDLGNBQU0sRUFBRTtBQUFyRDtBQUFqSSxLQUFyRjtBQUFBLDJCQUNDO0FBQVEsYUFBTyxFQUFFLG1CQUFJO0FB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QUFBQTtBQUFBLFlBTEcsRUFNRkYsWUFBWSxFQU5WO0FBQUEsa0JBQVA7QUFRSDs7SUFuQlFELFM7O01BQUFBLFM7QUFxQlQsK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9wdXB0ZXN0LmU5MmQ3Y2M0YzczMTRmMWFiZDQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuXG5cbmZ1bmN0aW9uIFBvcHVwMShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XG4gICAgcmV0dXJuIDxSZWFjdE1vZGFsIGlzT3BlbiA9IHtwcm9wcy5pc09wZW59IG9uQWZ0ZXJDbG9zZT17KCk9Pnt9fSBhcmlhSGlkZUFwcD17ZmFsc2V9IHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDAsICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgICAgfX0+Q2xvc2U8L2J1dHRvbj5cbiAgICA8L1JlYWN0TW9kYWw+XG59XG5cbi8vaSBoYXZlIG5vIGlkZWEgaG93IGl0IHdvcmtzIGJ1dCBpdCBqdXN0IHdvcmtzXG5cbmZ1bmN0aW9uIFBvcHVwTWFuYWdlcigpe1xuICAgIGNvbnN0IFtwb3B1cHMsIHNldFBvcHVwc10gPSBSZWFjdC51c2VTdGF0ZTxQb3B1cE9ialtdPihbXSlcbiAgICBjb25zdCBbc3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe3BvcHVwcywgc2V0UG9wdXBzLCByZWNvcmQ6e30gYXMgUmVjb3JkPHN0cmluZywgUG9wdXBPYmo+fSlcblxuICAgIHR5cGUgUG9wdXBPYmogPSB7b3BlbjogYm9vbGVhbiwgcmVuZGVyRnVuY3Rpb246IChvcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50fVxuXG4gICAgc3RhdGUuc2V0UG9wdXBzPXNldFBvcHVwcztcbiAgICBzdGF0ZS5wb3B1cHM9cG9wdXBzO1xuXG4gICAgZnVuY3Rpb24gQWRkUG9wdXAoa2V5OiBzdHJpbmcsIGlzT3BlbjogYm9vbGVhbiwgY2FsbGJhY2s6IChvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudCl7XG4gICAgICAgIGNvbnN0IG9iajogUG9wdXBPYmogPSB7b3BlbjogaXNPcGVuLCByZW5kZXJGdW5jdGlvbjogKG9wZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKCk9PntcbiAgICAgICAgICAgICAgICBvYmoub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICAgICAgICAgIH0sIG9wZW4pXG4gICAgICAgIH19O1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XSA9IG9iajtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHMsIG9ial0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUmVuZGVyKCl7XG4gICAgICAgIHJldHVybiBwb3B1cHMubWFwKChvYmopPT57XG4gICAgICAgICAgICByZXR1cm4gb2JqLnJlbmRlckZ1bmN0aW9uKG9iai5vcGVuKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNldFBvcHVwU3RhdGUoa2V5OiBzdHJpbmcsIG9wZW46IGJvb2xlYW4pe1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XS5vcGVuID0gb3BlbjtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgIH1cblxuICAgIHJldHVybiB7UmVuZGVyLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZX1cbn1cblxuXG5cbmZ1bmN0aW9uIFBvcHVwVGVzdCgpe1xuICAgIFxuICAgIGNvbnN0IHtSZW5kZXI6IFJlbmRlclBvcHVwcywgQWRkUG9wdXAsIFNldFBvcHVwU3RhdGV9ID0gUG9wdXBNYW5hZ2VyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgQWRkUG9wdXAoXCJwb3B1cDFcIiwgdHJ1ZSwgKG9uUmVxdWVzdENsb3NlLCBpc09wZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gPFBvcHVwMSBvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9IGlzT3Blbj17aXNPcGVufS8+XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgU2V0UG9wdXBTdGF0ZShcInBvcHVwMVwiLCB0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgIH19PlNob3cgU2V0dGluZ3M8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBrZXk9XCJibHVyXCIgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIn19PjwvZGl2PlxuICAgICAgICB7UmVuZGVyUG9wdXBzKCl9XG4gICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9