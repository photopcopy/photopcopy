self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/post.tsx":
/*!*********************************!*\
  !*** ./src/components/post.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/settings */ "./src/scripts/settings.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\post.tsx";


function Post(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorTertiary,
      borderRadius: 8,
      minHeight: 100,
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        minWidth: 300
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          margin: 6,
          width: "100%",
          height: 50,
          display: "flex"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./assets/DefaultProfilePic.svg",
          style: {
            paddingRight: "100%",
            height: "100%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 17
        }, this)
      }, "postDataContainer", false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }, this)
    }, "contentContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%",
        margin: 6,
        backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorSecondary,
        borderRadius: 8
      },
      children: "THIS"
    }, "chatContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)]
  }, props.postId, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

_c = Post;


var _c;

$RefreshReg$(_c, "Post");

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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/settings */ "./src/scripts/settings.ts");
/* harmony import */ var _components_settingspage_settingspage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/settingspage/settingspage */ "./src/components/settingspage/settingspage.tsx");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/post */ "./src/components/post.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\index.tsx",
    _s = $RefreshSig$();






 // apparently photop is all the same page which is really weird but /shrug

function Main(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      position: "fixed",
      width: "100%",
      height: "100%"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%",
        maxWidth: 1200,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
        postId: "bruj"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, "content", false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, "contentContainer", false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_c = Main;

function App() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      nonce = _useState[0],
      update = _useState[1];

  _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings._update = function () {
    update(nonce + 1);
  }; //it counts up for every popup, and counts down everytime one is closed, that way you can have 0 to indicate that all popups are closed
  //im not sure if this could lead to a bug if the number is unexpectedly, but it works in theory


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      popupsShown = _useState2[0],
      setPopupsShown = _useState2[1];

  var _SetSettingsOpen;

  function ChangePopupState(value, SetOpenFunc) {
    if (value) {
      setPopupsShown(popupsShown + 1);
    } else {
      setPopupsShown(popupsShown - 1);
    }

    SetOpenFunc(value);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2805815117",
      dynamic: [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor],
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3FCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0PGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogMTIwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUpXCJ9fT5cclxuXHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVqXCIvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IFtub25jZSwgdXBkYXRlXSA9IHVzZVN0YXRlKDApO1xyXG5cdFNldHRpbmdzLl91cGRhdGUgPSAoKT0+e1xyXG5cdFx0dXBkYXRlKG5vbmNlKzEpXHJcblx0fTtcclxuXHJcblx0Ly9pdCBjb3VudHMgdXAgZm9yIGV2ZXJ5IHBvcHVwLCBhbmQgY291bnRzIGRvd24gZXZlcnl0aW1lIG9uZSBpcyBjbG9zZWQsIHRoYXQgd2F5IHlvdSBjYW4gaGF2ZSAwIHRvIGluZGljYXRlIHRoYXQgYWxsIHBvcHVwcyBhcmUgY2xvc2VkXHJcblx0Ly9pbSBub3Qgc3VyZSBpZiB0aGlzIGNvdWxkIGxlYWQgdG8gYSBidWcgaWYgdGhlIG51bWJlciBpcyB1bmV4cGVjdGVkbHksIGJ1dCBpdCB3b3JrcyBpbiB0aGVvcnlcclxuXHRjb25zdCBbcG9wdXBzU2hvd24sIHNldFBvcHVwc1Nob3duXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRsZXQgX1NldFNldHRpbmdzT3BlbjogKHZhbHVlOiBib29sZWFuKT0+dm9pZDtcclxuXHRmdW5jdGlvbiBDaGFuZ2VQb3B1cFN0YXRlKHZhbHVlOiBib29sZWFuLCBTZXRPcGVuRnVuYzogKHZhbHVlOiBib29sZWFuKT0+dm9pZCl7XHJcblx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24rMSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRQb3B1cHNTaG93bihwb3B1cHNTaG93bi0xKVxyXG5cdFx0fVxyXG5cdFx0U2V0T3BlbkZ1bmModmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cdFx0XHRcdGNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3J9O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0QGltcG9ydFxyXG5cdFx0XHR1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdE9oIGJhYnkgYSB0cmlwbGUhXHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8bm9zY3JpcHQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIHpJbmRleDogMTAwfX0+XHJcblx0XHRcdDxoMT5FbmFibGUgamF2YXNjcmlwdCByZXRhcmQuPC9oMT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5oZW50YWkubmV0L2cvMzY0NjI0XCI+Q2xpY2sgbWUgZm9yIGEgc3VycHJpc2U8L2E+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5KdXN0IGtpZGRpbmcgZG9udCBjbGljayBpdCBsbWFvPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbm9zY3JpcHQ+XHJcblx0XHQ8TWFpbi8+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBwb2ludGVyRXZlbnRzOiBwb3B1cHNTaG93bj9cInVuc2V0XCI6XCJub25lXCIsIGJhY2tkcm9wRmlsdGVyOiBwb3B1cHNTaG93bj9cImJsdXIoNXB4KVwiOlwiXCJ9fT5cclxuXHRcdFx0PFNldHRpbmdzUGFnZVxyXG5cclxuXHRcdFx0XHRvbkNsb3NlZD17XHJcblx0XHRcdFx0XHQoKT0+e1xyXG5cdFx0XHRcdFx0XHRDaGFuZ2VQb3B1cFN0YXRlKGZhbHNlLCBfU2V0U2V0dGluZ3NPcGVuKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnZXRDbG9zZWRTZXR0ZXI9eyhjYWxsYmFjayk9PntcclxuXHRcdFx0XHRcdF9TZXRTZXR0aW5nc09wZW4gPSBjYWxsYmFjaztcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: "Oh baby a triple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("noscript", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "grey",
          zIndex: 100
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Enable javascript retard."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.nhentai.net/g/364624",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Click me for a surprise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            display: 'none'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Just kidding dont click it lmao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%",
        height: "100%",
        position: "fixed",
        pointerEvents: popupsShown ? "unset" : "none",
        backdropFilter: popupsShown ? "blur(5px)" : ""
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settingspage_settingspage__WEBPACK_IMPORTED_MODULE_5__.SettingsPage, {
        onClosed: function onClosed() {
          ChangePopupState(false, _SetSettingsOpen);
        },
        getClosedSetter: function getClosedSetter(callback) {
          _SetSettingsOpen = callback;
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(App, "Pvva9qmko0a8vhjDJ+lkipgLFWw=");

_c2 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

$RefreshReg$(_c, "Main");
$RefreshReg$(_c2, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9zdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiU2V0dGluZ3MiLCJib3JkZXJSYWRpdXMiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdSaWdodCIsInBvc3RJZCIsIk1haW4iLCJwb3NpdGlvbiIsIm1heFdpZHRoIiwibGVmdCIsInRyYW5zZm9ybSIsIkFwcCIsInVzZVN0YXRlIiwibm9uY2UiLCJ1cGRhdGUiLCJwb3B1cHNTaG93biIsInNldFBvcHVwc1Nob3duIiwiX1NldFNldHRpbmdzT3BlbiIsIkNoYW5nZVBvcHVwU3RhdGUiLCJ2YWx1ZSIsIlNldE9wZW5GdW5jIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImJhY2tkcm9wRmlsdGVyIiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBc0M7QUFDbEMsc0JBQU87QUFBd0IsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUVDLDRGQUFsQjtBQUFpRUMsa0JBQVksRUFBRSxDQUEvRTtBQUFrRkMsZUFBUyxFQUFFLEdBQTdGO0FBQWtHQyxhQUFPLEVBQUM7QUFBMUcsS0FBL0I7QUFBQSw0QkFDSDtBQUE0QixXQUFLLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTtBQUFYLE9BQW5DO0FBQUEsNkJBQ0k7QUFBNkIsYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUUsQ0FBVDtBQUFZQyxlQUFLLEVBQUUsTUFBbkI7QUFBMkJDLGdCQUFNLEVBQUUsRUFBbkM7QUFBdUNKLGlCQUFPLEVBQUM7QUFBL0MsU0FBcEM7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBQyxnQ0FBVDtBQUEw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UDtBQXVDQTs7R0EzRFFiLEc7O01BQUFBLEc7QUE2RFQsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTlkMjI1OWYxNDYxMDhlN2FlZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uL3NjcmlwdHMvc2V0dGluZ3NcIlxuXG5mdW5jdGlvbiBQb3N0KHByb3BzOiB7cG9zdElkOiBzdHJpbmd9KXtcbiAgICByZXR1cm4gPGRpdiBrZXk9e3Byb3BzLnBvc3RJZH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSwgYm9yZGVyUmFkaXVzOiA4LCBtaW5IZWlnaHQ6IDEwMCwgZGlzcGxheTpcImZsZXhcIn19PlxuICAgICAgICA8ZGl2IGtleT1cImNvbnRlbnRDb250YWluZXJcIiBzdHlsZT17e21pbldpZHRoOiAzMDB9fT5cbiAgICAgICAgICAgIDxkaXYga2V5PVwicG9zdERhdGFDb250YWluZXJcIiBzdHlsZT17e21hcmdpbjogNiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IDUwLCBkaXNwbGF5OlwiZmxleFwifX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9EZWZhdWx0UHJvZmlsZVBpYy5zdmdcIiBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19Lz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGtleT1cImNoYXRDb250YWluZXJcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWFyZ2luOiA2LCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnksIGJvcmRlclJhZGl1czogOH19PlRISVM8L2Rpdj5cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IHtQb3N0fSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFNldHRpbmdzLCBDb21wdXRlZFNldHRpbmdzIH0gZnJvbSAnLi4vc2NyaXB0cy9zZXR0aW5ncydcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcclxuaW1wb3J0IHsgVGFiQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2UvdGFiYnV0dG9uJ1xyXG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS9zZXR0aW5nc3BhZ2UnXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QnXHJcblxyXG4vLyBhcHBhcmVudGx5IHBob3RvcCBpcyBhbGwgdGhlIHNhbWUgcGFnZSB3aGljaCBpcyByZWFsbHkgd2VpcmQgYnV0IC9zaHJ1Z1xyXG5cclxuZnVuY3Rpb24gTWFpbihwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XHJcblx0cmV0dXJuIDxkaXYga2V5PVwiY29udGVudENvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IDEyMDAsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlKVwifX0+XHJcblx0XHRcdFx0PFBvc3QgcG9zdElkPVwiYnJ1alwiLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0Y29uc3QgW3BvcHVwc1Nob3duLCBzZXRQb3B1cHNTaG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0bGV0IF9TZXRTZXR0aW5nc09wZW46ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQ7XHJcblx0ZnVuY3Rpb24gQ2hhbmdlUG9wdXBTdGF0ZSh2YWx1ZTogYm9vbGVhbiwgU2V0T3BlbkZ1bmM6ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQpe1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duKzEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24tMSlcclxuXHRcdH1cclxuXHRcdFNldE9wZW5GdW5jKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PE1haW4vPlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==