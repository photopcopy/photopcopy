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

function PopupTest() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]),
      _React$useState2 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState, 2),
      popups = _React$useState2[0],
      setPopups = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
    popups: popups,
    setPopups: setPopups
  }),
      _React$useState4 = (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState3, 1),
      state = _React$useState4[0];

  state.setPopups = setPopups;
  state.popups = popups;

  function AddPopup(isOpen, callback) {
    var obj = {
      open: isOpen
    };
    var element = callback(function () {
      obj.open = false;
      state.setPopups((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(state.popups));
    }, obj.open);
    obj.element = element;
    state.setPopups([].concat((0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(state.popups), [obj]));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    AddPopup(true, function (onRequestClose, isOpen) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup1, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 20
      }, _this);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        popups[0].open = true;
        setPopups(_objectSpread({}, popups));
      },
      children: "Show Settings"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        backdropFilter: "blur(5px)"
      }
    }, "blur", false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), popups.map(function (_ref) {
      var element = _ref.element;
      return element;
    })]
  }, void 0, true);
}

_s(PopupTest, "pSndQ5pKEZU69wBwp0PIyxefnLc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giXSwibmFtZXMiOlsiUG9wdXAxIiwicHJvcHMiLCJpc09wZW4iLCJjb250ZW50IiwicG9zaXRpb24iLCJpbnNldCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwiUG9wdXBUZXN0IiwiUmVhY3QiLCJwb3B1cHMiLCJzZXRQb3B1cHMiLCJzdGF0ZSIsIkFkZFBvcHVwIiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwiZWxlbWVudCIsInVzZUVmZmVjdCIsImJhY2tkcm9wRmlsdGVyIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQW1FO0FBQy9ELHNCQUFPLDhEQUFDLG9EQUFEO0FBQVksVUFBTSxFQUFJQSxLQUFLLENBQUNDLE1BQTVCO0FBQW9DLGdCQUFZLEVBQUUsd0JBQUksQ0FBRSxDQUF4RDtBQUEwRCxlQUFXLEVBQUUsS0FBdkU7QUFBOEUsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFDQyxnQkFBUSxFQUFFLFVBQVg7QUFBdUJDLGFBQUssRUFBRSxlQUE5QjtBQUErQ0MsYUFBSyxFQUFFLEdBQXREO0FBQTJEQyxjQUFNLEVBQUUsR0FBbkU7QUFBeUVDLGlCQUFTLEVBQUU7QUFBcEYsT0FBVjtBQUF3SEMsYUFBTyxFQUFFO0FBQUNMLGdCQUFRLEVBQUUsT0FBWDtBQUFvQkMsYUFBSyxFQUFFLENBQTNCO0FBQThCQyxhQUFLLEVBQUUsTUFBckM7QUFBNkNDLGNBQU0sRUFBRTtBQUFyRDtBQUFqSSxLQUFyRjtBQUFBLDJCQUNDO0FBQVEsYUFBTyxFQUFFLG1CQUFJO0FBQ2pCTixhQUFLLENBQUNTLGNBQU47QUFDSCxPQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0g7O0tBTlFWLE07O0FBVVQsU0FBU1csU0FBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLHdCQUNZQyxxREFBQSxDQUEyQixFQUEzQixDQURaO0FBQUE7QUFBQSxNQUNUQyxNQURTO0FBQUEsTUFDREMsU0FEQzs7QUFBQSx5QkFFQUYscURBQUEsQ0FBZTtBQUFDQyxVQUFNLEVBQU5BLE1BQUQ7QUFBU0MsYUFBUyxFQUFUQTtBQUFULEdBQWYsQ0FGQTtBQUFBO0FBQUEsTUFFVEMsS0FGUzs7QUFNaEJBLE9BQUssQ0FBQ0QsU0FBTixHQUFnQkEsU0FBaEI7QUFDQUMsT0FBSyxDQUFDRixNQUFOLEdBQWFBLE1BQWI7O0FBRUEsV0FBU0csUUFBVCxDQUFrQmQsTUFBbEIsRUFBbUNlLFFBQW5DLEVBQTZHO0FBQ3pHLFFBQU1DLEdBQWEsR0FBRztBQUFDQyxVQUFJLEVBQUVqQjtBQUFQLEtBQXRCO0FBQ0EsUUFBTWtCLE9BQU8sR0FBR0gsUUFBUSxDQUFDLFlBQUk7QUFDekJDLFNBQUcsQ0FBQ0MsSUFBSixHQUFXLEtBQVg7QUFDQUosV0FBSyxDQUFDRCxTQUFOLCtJQUFvQkMsS0FBSyxDQUFDRixNQUExQjtBQUNILEtBSHVCLEVBR3JCSyxHQUFHLENBQUNDLElBSGlCLENBQXhCO0FBSUFELE9BQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0FMLFNBQUssQ0FBQ0QsU0FBTix5SkFBb0JDLEtBQUssQ0FBQ0YsTUFBMUIsSUFBa0NLLEdBQWxDO0FBQ0g7O0FBRURHLGtEQUFTLENBQUMsWUFBSTtBQUNWTCxZQUFRLENBQUMsSUFBRCxFQUFPLFVBQUNOLGNBQUQsRUFBaUJSLE1BQWpCLEVBQTBCO0FBQ3JDLDBCQUFPLDhEQUFDLE1BQUQ7QUFBUSxzQkFBYyxFQUFFUSxjQUF4QjtBQUF3QyxjQUFNLEVBQUVSO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRk8sQ0FBUjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFPQSxzQkFBTztBQUFBLDRCQUNIO0FBQVEsYUFBTyxFQUFFLG1CQUFJO0FBQ2pCVyxjQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVNLElBQVYsR0FBaUIsSUFBakI7QUFDQUwsaUJBQVMsbUJBQUtELE1BQUwsRUFBVDtBQUNILE9BSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUtIO0FBQWdCLFdBQUssRUFBRTtBQUFDUyxzQkFBYyxFQUFFO0FBQWpCO0FBQXZCLE9BQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEcsRUFNRlQsTUFBTSxDQUFDVSxHQUFQLENBQVc7QUFBQSxVQUFFSCxPQUFGLFFBQUVBLE9BQUY7QUFBQSxhQUFhQSxPQUFiO0FBQUEsS0FBWCxDQU5FO0FBQUEsa0JBQVA7QUFRSDs7R0FsQ1FULFM7O01BQUFBLFM7QUFvQ1QsK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9wdXB0ZXN0LjA1ZDBiZjVhOTU5MDY1ODg2N2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuXG5cbmZ1bmN0aW9uIFBvcHVwMShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XG4gICAgcmV0dXJuIDxSZWFjdE1vZGFsIGlzT3BlbiA9IHtwcm9wcy5pc09wZW59IG9uQWZ0ZXJDbG9zZT17KCk9Pnt9fSBhcmlhSGlkZUFwcD17ZmFsc2V9IHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDAsICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgICAgfX0+Q2xvc2U8L2J1dHRvbj5cbiAgICA8L1JlYWN0TW9kYWw+XG59XG5cblxuXG5mdW5jdGlvbiBQb3B1cFRlc3QoKXtcbiAgICBjb25zdCBbcG9wdXBzLCBzZXRQb3B1cHNdID0gUmVhY3QudXNlU3RhdGU8UG9wdXBPYmpbXT4oW10pXG4gICAgY29uc3QgW3N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtwb3B1cHMsIHNldFBvcHVwc30pXG5cbiAgICB0eXBlIFBvcHVwT2JqID0ge29wZW46IGJvb2xlYW4sIGVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH1cblxuICAgIHN0YXRlLnNldFBvcHVwcz1zZXRQb3B1cHM7XG4gICAgc3RhdGUucG9wdXBzPXBvcHVwcztcblxuICAgIGZ1bmN0aW9uIEFkZFBvcHVwKGlzT3BlbjogYm9vbGVhbiwgY2FsbGJhY2s6IChvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudCl7XG4gICAgICAgIGNvbnN0IG9iajogUG9wdXBPYmogPSB7b3BlbjogaXNPcGVufSBhcyBQb3B1cE9iajtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhbGxiYWNrKCgpPT57XG4gICAgICAgICAgICBvYmoub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgICAgICB9LCBvYmoub3BlbilcbiAgICAgICAgb2JqLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwcywgb2JqXSlcbiAgICB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIEFkZFBvcHVwKHRydWUsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxQb3B1cDEgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfSBpc09wZW49e2lzT3Blbn0vPlxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIFxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgIHBvcHVwc1swXS5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFBvcHVwcyh7Li4ucG9wdXBzfSlcbiAgICAgICAgfX0+U2hvdyBTZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGtleT1cImJsdXJcIiBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwifX0+PC9kaXY+XG4gICAgICAgIHtwb3B1cHMubWFwKCh7ZWxlbWVudH0pPT5lbGVtZW50KX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=