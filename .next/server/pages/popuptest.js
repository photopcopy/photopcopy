(function() {
var exports = {};
exports.id = "pages/popuptest";
exports.ids = ["pages/popuptest"];
exports.modules = {

/***/ "./src/modules/popupmanager.tsx":
/*!**************************************!*\
  !*** ./src/modules/popupmanager.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupManager": function() { return /* binding */ PopupManager; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\modules\\popupmanager.tsx";
//i have no idea how it works but it just works


function PopupManager() {
  const [popups, setPopups] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [state] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
    popups,
    setPopups,
    record: {}
  });
  state.setPopups = setPopups;
  state.popups = popups;

  function AddPopup(key, isOpen, callback) {
    const obj = {
      open: isOpen,
      key: key,
      renderFunction: open => {
        return callback(() => {
          obj.open = false;
          state.setPopups([...state.popups]);
        }, open);
      }
    };
    state.record[key] = obj;
    state.setPopups([...state.popups, obj]);
  }

  function Render() {
    return popups.map(obj => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: obj.renderFunction(obj.open)
      }, obj.key, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 20
      }, this);
    });
  }

  function SetPopupState(key, open) {
    state.record[key].open = open;
    state.setPopups([...state.popups]);
  }

  return {
    Render,
    AddPopup,
    SetPopupState,
    shouldShowOverlay: !popups.every(popup => !popup.open)
  };
}



/***/ }),

/***/ "./src/pages/popuptest.tsx":
/*!*********************************!*\
  !*** ./src/pages/popuptest.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_popupmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/popupmanager */ "./src/modules/popupmanager.tsx");


var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\popuptest.tsx";




function Popup1(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: props.isOpen,
    closeTimeoutMS: 500,
    onAfterClose: () => {},
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
      onClick: () => {
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

function PopupTest() {
  const {
    Render: RenderPopups,
    AddPopup,
    SetPopupState
  } = (0,_modules_popupmanager__WEBPACK_IMPORTED_MODULE_3__.PopupManager)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    AddPopup("popup1", true, (onRequestClose, isOpen) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup1, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 20
      }, this);
    });
  }, []);
  console.log("render");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => {
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

/* harmony default export */ __webpack_exports__["default"] = (PopupTest);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/popuptest.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL21vZHVsZXMvcG9wdXBtYW5hZ2VyLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL3BhZ2VzL3BvcHVwdGVzdC50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBvcHVwTWFuYWdlciIsInBvcHVwcyIsInNldFBvcHVwcyIsIlJlYWN0Iiwic3RhdGUiLCJyZWNvcmQiLCJBZGRQb3B1cCIsImtleSIsImlzT3BlbiIsImNhbGxiYWNrIiwib2JqIiwib3BlbiIsInJlbmRlckZ1bmN0aW9uIiwiUmVuZGVyIiwibWFwIiwiU2V0UG9wdXBTdGF0ZSIsInNob3VsZFNob3dPdmVybGF5IiwiZXZlcnkiLCJwb3B1cCIsIlBvcHVwMSIsInByb3BzIiwiY29udGVudCIsInBvc2l0aW9uIiwiaW5zZXQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsIm92ZXJsYXkiLCJvblJlcXVlc3RDbG9zZSIsIlBvcHVwVGVzdCIsIlJlbmRlclBvcHVwcyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZHJvcEZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsR0FBdUI7QUFDbkIsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JDLHFEQUFBLENBQTJCLEVBQTNCLENBQTVCO0FBQ0EsUUFBTSxDQUFDQyxLQUFELElBQVVELHFEQUFBLENBQWU7QUFBQ0YsVUFBRDtBQUFTQyxhQUFUO0FBQW9CRyxVQUFNLEVBQUM7QUFBM0IsR0FBZixDQUFoQjtBQUlBRCxPQUFLLENBQUNGLFNB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QVgsRUFBaUIsQ0FBQ3NCLGNBQUQsRUFBaUJwQixNQUFqQixLQUEwQjtBQUMvQywwQkFBTyw4REFBQyxNQUFEO0FBQVEsc0JBQWMsRUFBRW9CLGNBQXhCO0FBQXdDLGNBQU0sRUFBRXBCO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNILEtBRk8sQ0FBUjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQXdCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFFQSxzQkFBTztBQUFBLDRCQUNIO0FBQXVCLGFBQU8sRUFBRSxNQUFJO0FBQ2hDbEIscUJBQWEsQ0FBQyxRQUFELEVBQVcsSUFBWCxDQUFiO0FBRUgsT0FIRDtBQUFBO0FBQUEsT0FBWSxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUtIO0FBQWdCLFdBQUssRUFBRTtBQUFDbUIsc0JBQWMsRUFBRTtBQUFqQjtBQUF2QixPQUFTLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxHLEVBTUZKLFlBQVksRUFOVjtBQUFBLGtCQUFQO0FBUUg7O0FBRUQsK0RBQWVELFNBQWYsRTs7Ozs7Ozs7Ozs7QUNyQ0EsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcG9wdXB0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pIGhhdmUgbm8gaWRlYSBob3cgaXQgd29ya3MgYnV0IGl0IGp1c3Qgd29ya3NcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQb3B1cE1hbmFnZXIoKXtcbiAgICBjb25zdCBbcG9wdXBzLCBzZXRQb3B1cHNdID0gUmVhY3QudXNlU3RhdGU8UG9wdXBPYmpbXT4oW10pXG4gICAgY29uc3QgW3N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtwb3B1cHMsIHNldFBvcHVwcywgcmVjb3JkOnt9IGFzIFJlY29yZDxzdHJpbmcsIFBvcHVwT2JqPn0pXG5cbiAgICB0eXBlIFBvcHVwT2JqID0ge29wZW46IGJvb2xlYW4sIGtleTogc3RyaW5nLCByZW5kZXJGdW5jdGlvbjogKG9wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnR9XG5cbiAgICBzdGF0ZS5zZXRQb3B1cHM9c2V0UG9wdXBzO1xuICAgIHN0YXRlLnBvcHVwcz1wb3B1cHM7XG5cbiAgICBmdW5jdGlvbiBBZGRQb3B1cChrZXk6IHN0cmluZywgaXNPcGVuOiBib29sZWFuLCBjYWxsYmFjazogKG9uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFuKT0+UmVhY3QuUmVhY3RFbGVtZW50KXtcbiAgICAgICAgY29uc3Qgb2JqOiBQb3B1cE9iaiA9IHtvcGVuOiBpc09wZW4sIGtleToga2V5LCByZW5kZXJGdW5jdGlvbjogKG9wZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKCk9PntcbiAgICAgICAgICAgICAgICBvYmoub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICAgICAgICAgIH0sIG9wZW4pXG4gICAgICAgIH19O1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XSA9IG9iajtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHMsIG9ial0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUmVuZGVyKCl7XG4gICAgICAgIHJldHVybiBwb3B1cHMubWFwKChvYmopPT57XG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17b2JqLmtleX0+e29iai5yZW5kZXJGdW5jdGlvbihvYmoub3Blbil9PC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZXRQb3B1cFN0YXRlKGtleTogc3RyaW5nLCBvcGVuOiBib29sZWFuKXtcbiAgICAgICAgc3RhdGUucmVjb3JkW2tleV0ub3BlbiA9IG9wZW47XG4gICAgICAgIHN0YXRlLnNldFBvcHVwcyhbLi4uc3RhdGUucG9wdXBzXSlcbiAgICB9XG5cblxuICAgIHJldHVybiB7UmVuZGVyLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZSwgc2hvdWxkU2hvd092ZXJsYXk6ICFwb3B1cHMuZXZlcnkocG9wdXA9PiFwb3B1cC5vcGVuKX1cbn1cblxuZXhwb3J0IHtQb3B1cE1hbmFnZXJ9IiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gXCIuLi9tb2R1bGVzL3BvcHVwbWFuYWdlclwiO1xuXG5cbmZ1bmN0aW9uIFBvcHVwMShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XG4gICAgcmV0dXJuIDxSZWFjdE1vZGFsIGlzT3BlbiA9IHtwcm9wcy5pc09wZW59IGNsb3NlVGltZW91dE1TPXs1MDB9IG9uQWZ0ZXJDbG9zZT17KCk9Pnt9fSBhcmlhSGlkZUFwcD17ZmFsc2V9IHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDAsICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgICAgfX0+Q2xvc2U8L2J1dHRvbj5cbiAgICA8L1JlYWN0TW9kYWw+XG59XG5cblxuXG5mdW5jdGlvbiBQb3B1cFRlc3QoKXtcbiAgICBcbiAgICBjb25zdCB7UmVuZGVyOiBSZW5kZXJQb3B1cHMsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlfSA9IFBvcHVwTWFuYWdlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIEFkZFBvcHVwKFwicG9wdXAxXCIsIHRydWUsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxQb3B1cDEgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfSBpc09wZW49e2lzT3Blbn0vPlxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGJ1dHRvbiBrZXk9XCJjbGlja0J0blwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICBTZXRQb3B1cFN0YXRlKFwicG9wdXAxXCIsIHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgfX0+U2hvdyBTZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGtleT1cImJsdXJcIiBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwifX0+PC9kaXY+XG4gICAgICAgIHtSZW5kZXJQb3B1cHMoKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBUZXN0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9