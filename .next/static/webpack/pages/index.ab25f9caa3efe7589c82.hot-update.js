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
      position: "fixed"
    },
    children: props.children
  }, "mainContent", false, {
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
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3FCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJtYWluQ29udGVudFwiIHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIn19PlxyXG5cdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0Y29uc3QgW25vbmNlLCB1cGRhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0U2V0dGluZ3MuX3VwZGF0ZSA9ICgpPT57XHJcblx0XHR1cGRhdGUobm9uY2UrMSlcclxuXHR9O1xyXG5cclxuXHQvL2l0IGNvdW50cyB1cCBmb3IgZXZlcnkgcG9wdXAsIGFuZCBjb3VudHMgZG93biBldmVyeXRpbWUgb25lIGlzIGNsb3NlZCwgdGhhdCB3YXkgeW91IGNhbiBoYXZlIDAgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcG9wdXBzIGFyZSBjbG9zZWRcclxuXHQvL2ltIG5vdCBzdXJlIGlmIHRoaXMgY291bGQgbGVhZCB0byBhIGJ1ZyBpZiB0aGUgbnVtYmVyIGlzIHVuZXhwZWN0ZWRseSwgYnV0IGl0IHdvcmtzIGluIHRoZW9yeVxyXG5cdGNvbnN0IFtwb3B1cHNTaG93biwgc2V0UG9wdXBzU2hvd25dID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGxldCBfU2V0U2V0dGluZ3NPcGVuOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkO1xyXG5cdGZ1bmN0aW9uIENoYW5nZVBvcHVwU3RhdGUodmFsdWU6IGJvb2xlYW4sIFNldE9wZW5GdW5jOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkKXtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRzZXRQb3B1cHNTaG93bihwb3B1cHNTaG93bisxKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duLTEpXHJcblx0XHR9XHJcblx0XHRTZXRPcGVuRnVuYyh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvcn07XHJcblx0XHRcdFx0Y29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcn07XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdTRiBNb25vJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRAaW1wb3J0XHJcblx0XHRcdHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJylcclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0T2ggYmFieSBhIHRyaXBsZSFcclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxub3NjcmlwdD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgekluZGV4OiAxMDB9fT5cclxuXHRcdFx0PGgxPkVuYWJsZSBqYXZhc2NyaXB0IHJldGFyZC48L2gxPlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubmhlbnRhaS5uZXQvZy8zNjQ2MjRcIj5DbGljayBtZSBmb3IgYSBzdXJwcmlzZTwvYT5cclxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19Pkp1c3Qga2lkZGluZyBkb250IGNsaWNrIGl0IGxtYW88L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9ub3NjcmlwdD5cclxuXHRcdDxNYWluPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6IDUwMCwgbGVmdDogMTAwLCBwb3NpdGlvbjpcImFic29sdXRlXCJ9fT5cclxuXHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVoXCIvPlxyXG5cdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWhcIi8+XHJcblx0XHRcdFx0PFBvc3QgcG9zdElkPVwiYnJ1aFwiLz5cclxuXHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVoXCIvPlxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L01haW4+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBwb2ludGVyRXZlbnRzOiBwb3B1cHNTaG93bj9cInVuc2V0XCI6XCJub25lXCIsIGJhY2tkcm9wRmlsdGVyOiBwb3B1cHNTaG93bj9cImJsdXIoNXB4KVwiOlwiXCJ9fT5cclxuXHRcdFx0PFNldHRpbmdzUGFnZVxyXG5cclxuXHRcdFx0XHRvbkNsb3NlZD17XHJcblx0XHRcdFx0XHQoKT0+e1xyXG5cdFx0XHRcdFx0XHRDaGFuZ2VQb3B1cFN0YXRlKGZhbHNlLCBfU2V0U2V0dGluZ3NPcGVuKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnZXRDbG9zZWRTZXR0ZXI9eyhjYWxsYmFjayk9PntcclxuXHRcdFx0XHRcdF9TZXRTZXR0aW5nc09wZW4gPSBjYWxsYmFjaztcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: "Oh baby a triple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
          lineNumber: 56,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.nhentai.net/g/364624",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Click me for a surprise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            display: 'none'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Just kidding dont click it lmao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: 500,
          left: 100,
          position: "absolute"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
          postId: "bruh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
          postId: "bruh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
          postId: "bruh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
          postId: "bruh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        lineNumber: 71,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJwb3NpdGlvbiIsImNoaWxkcmVuIiwiQXBwIiwidXNlU3RhdGUiLCJub25jZSIsInVwZGF0ZSIsIlNldHRpbmdzIiwicG9wdXBzU2hvd24iLCJzZXRQb3B1cHNTaG93biIsIl9TZXRTZXR0aW5nc09wZW4iLCJDaGFuZ2VQb3B1cFN0YXRlIiwidmFsdWUiLCJTZXRPcGVuRnVuYyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiZGlzcGxheSIsImxlZnQiLCJwb2ludGVyRXZlbnRzIiwiYmFja2Ryb3BGaWx0ZXIiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtDQUdBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFrRDtBQUNqRCxzQkFBTztBQUF1QixTQUFLLEVBQUU7QUFBQ0MsY0FBUSxFQUFFO0FBQVgsS0FBOUI7QUFBQSxjQUNMRCxLQUFLLENBQUNFO0FBREQsS0FBUyxhQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdBOztLQUpRSCxJOztBQU1ULFNBQVNJLEdBQVQsR0FBZTtBQUFBOztBQUFBLGtCQUNVQywrQ0FBUSxDQUFDLENBQUQsQ0FEbEI7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsTUFEQTs7QUFFZEMsaUVBQUEsR0FBbUIsWUFBSTtBQUN0QkQsVUFBTSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUFOO0FBQ0EsR0FGRCxDQUZjLENBTWQ7QUFDQTs7O0FBUGMsbUJBUXdCRCwrQ0FBUSxDQUFDLENBQUQsQ0FSaEM7QUFBQSxNQVFQSSxXQVJPO0FBQUEsTUFRTUMsY0FSTjs7QUFVZCxNQUFJQyxnQkFBSjs7QUFDQSxXQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBMENDLFdBQTFDLEVBQThF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QUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDTTtBQUFBLGtCQUFQO0FBK0NBOztHQW5FUW5CLEc7O01BQUFBLEc7QUFxRVQsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWIyNWY5Y2FhM2VmZTc1ODljODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFNldHRpbmdzLCBDb21wdXRlZFNldHRpbmdzIH0gZnJvbSAnLi4vc2NyaXB0cy9zZXR0aW5ncydcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcclxuaW1wb3J0IHsgVGFiQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2UvdGFiYnV0dG9uJ1xyXG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS9zZXR0aW5nc3BhZ2UnXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QnXHJcblxyXG4vLyBhcHBhcmVudGx5IHBob3RvcCBpcyBhbGwgdGhlIHNhbWUgcGFnZSB3aGljaCBpcyByZWFsbHkgd2VpcmQgYnV0IC9zaHJ1Z1xyXG5cclxuZnVuY3Rpb24gTWFpbihwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XHJcblx0cmV0dXJuIDxkaXYga2V5PVwibWFpbkNvbnRlbnRcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCJ9fT5cclxuXHRcdHtwcm9wcy5jaGlsZHJlbn1cclxuXHQ8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IFtub25jZSwgdXBkYXRlXSA9IHVzZVN0YXRlKDApO1xyXG5cdFNldHRpbmdzLl91cGRhdGUgPSAoKT0+e1xyXG5cdFx0dXBkYXRlKG5vbmNlKzEpXHJcblx0fTtcclxuXHJcblx0Ly9pdCBjb3VudHMgdXAgZm9yIGV2ZXJ5IHBvcHVwLCBhbmQgY291bnRzIGRvd24gZXZlcnl0aW1lIG9uZSBpcyBjbG9zZWQsIHRoYXQgd2F5IHlvdSBjYW4gaGF2ZSAwIHRvIGluZGljYXRlIHRoYXQgYWxsIHBvcHVwcyBhcmUgY2xvc2VkXHJcblx0Ly9pbSBub3Qgc3VyZSBpZiB0aGlzIGNvdWxkIGxlYWQgdG8gYSBidWcgaWYgdGhlIG51bWJlciBpcyB1bmV4cGVjdGVkbHksIGJ1dCBpdCB3b3JrcyBpbiB0aGVvcnlcclxuXHRjb25zdCBbcG9wdXBzU2hvd24sIHNldFBvcHVwc1Nob3duXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRsZXQgX1NldFNldHRpbmdzT3BlbjogKHZhbHVlOiBib29sZWFuKT0+dm9pZDtcclxuXHRmdW5jdGlvbiBDaGFuZ2VQb3B1cFN0YXRlKHZhbHVlOiBib29sZWFuLCBTZXRPcGVuRnVuYzogKHZhbHVlOiBib29sZWFuKT0+dm9pZCl7XHJcblx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24rMSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRQb3B1cHNTaG93bihwb3B1cHNTaG93bi0xKVxyXG5cdFx0fVxyXG5cdFx0U2V0T3BlbkZ1bmModmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cdFx0XHRcdGNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3J9O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0QGltcG9ydFxyXG5cdFx0XHR1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdE9oIGJhYnkgYSB0cmlwbGUhXHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8bm9zY3JpcHQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIHpJbmRleDogMTAwfX0+XHJcblx0XHRcdDxoMT5FbmFibGUgamF2YXNjcmlwdCByZXRhcmQuPC9oMT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5oZW50YWkubmV0L2cvMzY0NjI0XCI+Q2xpY2sgbWUgZm9yIGEgc3VycHJpc2U8L2E+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5KdXN0IGtpZGRpbmcgZG9udCBjbGljayBpdCBsbWFvPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbm9zY3JpcHQ+XHJcblx0XHQ8TWFpbj5cclxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOiA1MDAsIGxlZnQ6IDEwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwifX0+XHJcblx0XHRcdFx0PFBvc3QgcG9zdElkPVwiYnJ1aFwiLz5cclxuXHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVoXCIvPlxyXG5cdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWhcIi8+XHJcblx0XHRcdFx0PFBvc3QgcG9zdElkPVwiYnJ1aFwiLz5cclxuXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9NYWluPlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==