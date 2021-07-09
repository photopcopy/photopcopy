self["webpackHotUpdate_N_E"]("pages/index",{

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
        display: "flex",
        minWidth: 1200,
        justifyContent: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: 200
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          style: {
            margin: 0
          },
          children: "Photopcopy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 5
        }, this)
      }, "sidebarLeft", false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: "100%",
          maxWidth: 800
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
          postId: "bruh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 4
        }, this)
      }, "mainContainer", false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: 200
        },
        children: "Play Game"
      }, "sidebarRight", false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 4
      }, this)]
    }, "content", true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
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
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3FCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgbWluV2lkdGg6IDEyMDAsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwic2lkZWJhckxlZnRcIiBzdHlsZT17e3dpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHQ8aDEgc3R5bGU9e3ttYXJnaW46IDB9fT5QaG90b3Bjb3B5PC9oMT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYga2V5PVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogODAwfX0+XHJcblx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWhcIi8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJSaWdodFwiIHN0eWxlPXt7d2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFBsYXkgR2FtZVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0Y29uc3QgW25vbmNlLCB1cGRhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0U2V0dGluZ3MuX3VwZGF0ZSA9ICgpPT57XHJcblx0XHR1cGRhdGUobm9uY2UrMSlcclxuXHR9O1xyXG5cclxuXHQvL2l0IGNvdW50cyB1cCBmb3IgZXZlcnkgcG9wdXAsIGFuZCBjb3VudHMgZG93biBldmVyeXRpbWUgb25lIGlzIGNsb3NlZCwgdGhhdCB3YXkgeW91IGNhbiBoYXZlIDAgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcG9wdXBzIGFyZSBjbG9zZWRcclxuXHQvL2ltIG5vdCBzdXJlIGlmIHRoaXMgY291bGQgbGVhZCB0byBhIGJ1ZyBpZiB0aGUgbnVtYmVyIGlzIHVuZXhwZWN0ZWRseSwgYnV0IGl0IHdvcmtzIGluIHRoZW9yeVxyXG5cdGNvbnN0IFtwb3B1cHNTaG93biwgc2V0UG9wdXBzU2hvd25dID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGxldCBfU2V0U2V0dGluZ3NPcGVuOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkO1xyXG5cdGZ1bmN0aW9uIENoYW5nZVBvcHVwU3RhdGUodmFsdWU6IGJvb2xlYW4sIFNldE9wZW5GdW5jOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkKXtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRzZXRQb3B1cHNTaG93bihwb3B1cHNTaG93bisxKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duLTEpXHJcblx0XHR9XHJcblx0XHRTZXRPcGVuRnVuYyh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvcn07XHJcblx0XHRcdFx0Y29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcn07XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdTRiBNb25vJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRAaW1wb3J0XHJcblx0XHRcdHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJylcclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0T2ggYmFieSBhIHRyaXBsZSFcclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxub3NjcmlwdD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgekluZGV4OiAxMDB9fT5cclxuXHRcdFx0PGgxPkVuYWJsZSBqYXZhc2NyaXB0IHJldGFyZC48L2gxPlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubmhlbnRhaS5uZXQvZy8zNjQ2MjRcIj5DbGljayBtZSBmb3IgYSBzdXJwcmlzZTwvYT5cclxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19Pkp1c3Qga2lkZGluZyBkb250IGNsaWNrIGl0IGxtYW88L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9ub3NjcmlwdD5cclxuXHRcdDxNYWluLz5cclxuXHRcdDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHBvaW50ZXJFdmVudHM6IHBvcHVwc1Nob3duP1widW5zZXRcIjpcIm5vbmVcIiwgYmFja2Ryb3BGaWx0ZXI6IHBvcHVwc1Nob3duP1wiYmx1cig1cHgpXCI6XCJcIn19PlxyXG5cdFx0XHQ8U2V0dGluZ3NQYWdlXHJcblxyXG5cdFx0XHRcdG9uQ2xvc2VkPXtcclxuXHRcdFx0XHRcdCgpPT57XHJcblx0XHRcdFx0XHRcdENoYW5nZVBvcHVwU3RhdGUoZmFsc2UsIF9TZXRTZXR0aW5nc09wZW4pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdldENsb3NlZFNldHRlcj17KGNhbGxiYWNrKT0+e1xyXG5cdFx0XHRcdFx0X1NldFNldHRpbmdzT3BlbiA9IGNhbGxiYWNrO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: "Oh baby a triple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
          lineNumber: 66,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.nhentai.net/g/364624",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Click me for a surprise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            display: 'none'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Just kidding dont click it lmao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
        lineNumber: 73,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsIm1pbldpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJtYXhXaWR0aCIsIkFwcCIsInVzZVN0YXRlIiwibm9uY2UiLCJ1cGRhdGUiLCJTZXR0aW5ncyIsInBvcHVwc1Nob3duIiwic2V0UG9wdXBzU2hvd24iLCJfU2V0U2V0dGluZ3NPcGVuIiwiQ2hhbmdlUG9wdXBTdGF0ZSIsInZhbHVlIiwiU2V0T3BlbkZ1bmMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJwb2ludGVyRXZlbnRzIiwiYmFja2Ryb3BGaWx0ZXIiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtDQUdBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFrRDtBQUNqRCxzQkFBTztBQUE0QixTQUFLLEVBQUU7QUFBQ0MsY0FBUSxFQUFFLE9BQVg7QUFBb0JDLFdBQUssRUFBRSxNQUEzQjtBQUFtQ0MsWUFBTSxFQUFFO0FBQTNDLEtBQW5DO0FBQUEsMkJBQ047QUFBbUIsV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxnQkFBUSxFQUFFLElBQTNCO0FBQWlDQyxzQkFBYyxFQUFFO0FBQWpELE9BQTFCO0FBQUEsOEJBQ0M7QUFBdUIsYUFBSyxFQUFFO0FBQUNKLGVBQUssRUFBRTtBQUFSLFNBQTlCO0FBQUEsK0JBQ0M7QUFBSSxlQUFLLEVBQUU7QUFBQ0ssa0JBQU0sRUFBRTtBQUFULFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUFTLGFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBSUM7QUFBeUIsYUFBSyxFQUFFO0FBQUNMLGVBQUssRUFBRSxN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T0FBWjtBQUFBLGtHQXRCc0JELG9GQXNCdEIsRUFyQldBLDhFQXFCWDtBQUFBLDZCQUNDLDhEQUFDLCtFQUFEO0FBRUMsZ0JBQVEsRUFDUCxvQkFBSTtBQUNISSwwQkFBZ0IsQ0FBQyxLQUFELEVBQVFELGdCQUFSLENBQWhCO0FBQ0EsU0FMSDtBQU9DLHVCQUFlLEVBQUUseUJBQUNRLFFBQUQsRUFBWTtBQUM1QlIsMEJBQWdCLEdBQUdRLFFBQW5CO0FBQ0E7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCTTtBQUFBLGtCQUFQO0FBdUNBOztHQTNEUWYsRzs7TUFBQUEsRztBQTZEVCwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjQyNjI3MjMxOWJmYjlhNzNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgbWluV2lkdGg6IDEyMDAsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwic2lkZWJhckxlZnRcIiBzdHlsZT17e3dpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHQ8aDEgc3R5bGU9e3ttYXJnaW46IDB9fT5QaG90b3Bjb3B5PC9oMT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYga2V5PVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogODAwfX0+XHJcblx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWhcIi8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJSaWdodFwiIHN0eWxlPXt7d2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFBsYXkgR2FtZVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0Y29uc3QgW25vbmNlLCB1cGRhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0U2V0dGluZ3MuX3VwZGF0ZSA9ICgpPT57XHJcblx0XHR1cGRhdGUobm9uY2UrMSlcclxuXHR9O1xyXG5cclxuXHQvL2l0IGNvdW50cyB1cCBmb3IgZXZlcnkgcG9wdXAsIGFuZCBjb3VudHMgZG93biBldmVyeXRpbWUgb25lIGlzIGNsb3NlZCwgdGhhdCB3YXkgeW91IGNhbiBoYXZlIDAgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcG9wdXBzIGFyZSBjbG9zZWRcclxuXHQvL2ltIG5vdCBzdXJlIGlmIHRoaXMgY291bGQgbGVhZCB0byBhIGJ1ZyBpZiB0aGUgbnVtYmVyIGlzIHVuZXhwZWN0ZWRseSwgYnV0IGl0IHdvcmtzIGluIHRoZW9yeVxyXG5cdGNvbnN0IFtwb3B1cHNTaG93biwgc2V0UG9wdXBzU2hvd25dID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGxldCBfU2V0U2V0dGluZ3NPcGVuOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkO1xyXG5cdGZ1bmN0aW9uIENoYW5nZVBvcHVwU3RhdGUodmFsdWU6IGJvb2xlYW4sIFNldE9wZW5GdW5jOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkKXtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRzZXRQb3B1cHNTaG93bihwb3B1cHNTaG93bisxKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duLTEpXHJcblx0XHR9XHJcblx0XHRTZXRPcGVuRnVuYyh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvcn07XHJcblx0XHRcdFx0Y29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcn07XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdTRiBNb25vJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRAaW1wb3J0XHJcblx0XHRcdHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJylcclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0T2ggYmFieSBhIHRyaXBsZSFcclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxub3NjcmlwdD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgekluZGV4OiAxMDB9fT5cclxuXHRcdFx0PGgxPkVuYWJsZSBqYXZhc2NyaXB0IHJldGFyZC48L2gxPlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubmhlbnRhaS5uZXQvZy8zNjQ2MjRcIj5DbGljayBtZSBmb3IgYSBzdXJwcmlzZTwvYT5cclxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19Pkp1c3Qga2lkZGluZyBkb250IGNsaWNrIGl0IGxtYW88L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9ub3NjcmlwdD5cclxuXHRcdDxNYWluLz5cclxuXHRcdDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHBvaW50ZXJFdmVudHM6IHBvcHVwc1Nob3duP1widW5zZXRcIjpcIm5vbmVcIiwgYmFja2Ryb3BGaWx0ZXI6IHBvcHVwc1Nob3duP1wiYmx1cig1cHgpXCI6XCJcIn19PlxyXG5cdFx0XHQ8U2V0dGluZ3NQYWdlXHJcblxyXG5cdFx0XHRcdG9uQ2xvc2VkPXtcclxuXHRcdFx0XHRcdCgpPT57XHJcblx0XHRcdFx0XHRcdENoYW5nZVBvcHVwU3RhdGUoZmFsc2UsIF9TZXRTZXR0aW5nc09wZW4pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdldENsb3NlZFNldHRlcj17KGNhbGxiYWNrKT0+e1xyXG5cdFx0XHRcdFx0X1NldFNldHRpbmdzT3BlbiA9IGNhbGxiYWNrO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=