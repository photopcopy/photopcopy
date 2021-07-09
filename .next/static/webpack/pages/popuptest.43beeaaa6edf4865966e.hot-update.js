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
    }, "clickBtn", false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBNYW5hZ2VyIiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJyZWNvcmQiLCJzdGF0ZSIsIkFkZFBvcHVwIiwia2V5IiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwicmVuZGVyRnVuY3Rpb24iLCJSZW5kZXIiLCJtYXAiLCJTZXRQb3B1cFN0YXRlIiwiUG9wdXBUZXN0IiwiUmVuZGVyUG9wdXBzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImJhY2tkcm9wRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFtRTtBQUMvRCxzQkFBTyw4REFBQyxvREFBRDtBQUFZLFVBQU0sRUFBSUEsS0FBSyxDQUFDQyxNQUE1QjtBQUFvQyxnQkFBWSxFQUFFLHdCQUFJLENBQUUsQ0FBeEQ7QUFBMEQsZUFBVyxFQUFFLEtBQXZFO0FBQThFLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCQyxhQUFLLEVBQUUsZUFBOUI7QUFBK0NDLGFBQUssRUFBRSxHQUF0RDtBQUEyREMsY0FBTSxFQUFFLEdBQW5FO0FBQXlFQyxpQkFBUyxFQUFFO0FBQXBGLE9BQVY7QUFBd0hDLGFBQU8sRUFBRTtBQUFDTCxnQkFBUSxFQUFFLE9BQVg7QUFBb0JDLGFBQUssRUFBRSxDQUEzQjtBQUE4QkMsYUFBSyxFQUFFLE1BQXJDO0FBQTZDQyxjQUFNLEVBQUU7QUFBckQ7QUFBakksS0FBckY7QUFBQSwyQkFDQztBQUFRLGFB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V0FBSyxFQUFFO0FBQUNNLHNCQUFjLEVBQUU7QUFBakI7QUFBdkIsT0FBUyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRyxFQU1GSixZQUFZLEVBTlY7QUFBQSxrQkFBUDtBQVFIOztJQXBCUUQsUzs7TUFBQUEsUztBQXNCVCwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3B1cHRlc3QuNDNiZWVhYWE2ZWRmNDg2NTk2NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5cblxuZnVuY3Rpb24gUG9wdXAxKHByb3BzOiB7b25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW59KXtcbiAgICByZXR1cm4gPFJlYWN0TW9kYWwgaXNPcGVuID0ge3Byb3BzLmlzT3Blbn0gb25BZnRlckNsb3NlPXsoKT0+e319IGFyaWFIaWRlQXBwPXtmYWxzZX0gc3R5bGU9e3tjb250ZW50OiB7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgaW5zZXQ6IFwiNTAlIDAlIDAlIDUwJVwiLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMCwgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIn0sIG92ZXJsYXk6IHtwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMCwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX19PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgIHByb3BzLm9uUmVxdWVzdENsb3NlKCk7XG4gICAgICAgICAgICB9fT5DbG9zZTwvYnV0dG9uPlxuICAgIDwvUmVhY3RNb2RhbD5cbn1cblxuLy9pIGhhdmUgbm8gaWRlYSBob3cgaXQgd29ya3MgYnV0IGl0IGp1c3Qgd29ya3NcblxuZnVuY3Rpb24gUG9wdXBNYW5hZ2VyKCl7XG4gICAgY29uc3QgW3BvcHVwcywgc2V0UG9wdXBzXSA9IFJlYWN0LnVzZVN0YXRlPFBvcHVwT2JqW10+KFtdKVxuICAgIGNvbnN0IFtzdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7cG9wdXBzLCBzZXRQb3B1cHMsIHJlY29yZDp7fSBhcyBSZWNvcmQ8c3RyaW5nLCBQb3B1cE9iaj59KVxuXG4gICAgdHlwZSBQb3B1cE9iaiA9IHtvcGVuOiBib29sZWFuLCByZW5kZXJGdW5jdGlvbjogKG9wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnR9XG5cbiAgICBzdGF0ZS5zZXRQb3B1cHM9c2V0UG9wdXBzO1xuICAgIHN0YXRlLnBvcHVwcz1wb3B1cHM7XG5cbiAgICBmdW5jdGlvbiBBZGRQb3B1cChrZXk6IHN0cmluZywgaXNPcGVuOiBib29sZWFuLCBjYWxsYmFjazogKG9uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50KXtcbiAgICAgICAgY29uc3Qgb2JqOiBQb3B1cE9iaiA9IHtvcGVuOiBpc09wZW4sIHJlbmRlckZ1bmN0aW9uOiAob3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgICAgIG9iai5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgICAgICAgICAgfSwgb3BlbilcbiAgICAgICAgfX07XG4gICAgICAgIHN0YXRlLnJlY29yZFtrZXldID0gb2JqO1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwcywgb2JqXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBSZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIHBvcHVwcy5tYXAoKG9iaik9PntcbiAgICAgICAgICAgIHJldHVybiBvYmoucmVuZGVyRnVuY3Rpb24ob2JqLm9wZW4pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2V0UG9wdXBTdGF0ZShrZXk6IHN0cmluZywgb3BlbjogYm9vbGVhbil7XG4gICAgICAgIHN0YXRlLnJlY29yZFtrZXldLm9wZW4gPSBvcGVuO1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwc10pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtSZW5kZXIsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlfVxufVxuXG5cblxuZnVuY3Rpb24gUG9wdXBUZXN0KCl7XG4gICAgXG4gICAgY29uc3Qge1JlbmRlcjogUmVuZGVyUG9wdXBzLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZX0gPSBQb3B1cE1hbmFnZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBBZGRQb3B1cChcInBvcHVwMVwiLCB0cnVlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiA8UG9wdXAxIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX0gaXNPcGVuPXtpc09wZW59Lz5cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInJlbmRlclwiKVxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxidXR0b24ga2V5PVwiY2xpY2tCdG5cIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgU2V0UG9wdXBTdGF0ZShcInBvcHVwMVwiLCB0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgIH19PlNob3cgU2V0dGluZ3M8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBrZXk9XCJibHVyXCIgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweClcIn19PjwvZGl2PlxuICAgICAgICB7UmVuZGVyUG9wdXBzKCl9XG4gICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9