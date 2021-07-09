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
/* harmony import */ var _components_maincontent_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/maincontent/post */ "./src/components/maincontent/post.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\index.tsx",
    _s = $RefreshSig$();








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
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnFCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdCdcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0Y29uc3QgW3BvcHVwc1Nob3duLCBzZXRQb3B1cHNTaG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0bGV0IF9TZXRTZXR0aW5nc09wZW46ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQ7XHJcblx0ZnVuY3Rpb24gQ2hhbmdlUG9wdXBTdGF0ZSh2YWx1ZTogYm9vbGVhbiwgU2V0T3BlbkZ1bmM6ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQpe1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duKzEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24tMSlcclxuXHRcdH1cclxuXHRcdFNldE9wZW5GdW5jKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0PGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogMTIwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUpXCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwLCBtaW5XaWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRQaG90b3Bjb3B5XHJcblx0XHRcdFx0XHQ8YnV0dG9uPk9wZW4gU2V0dGluZ3M8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInBvc3RDb250YWluZXJcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0PFBvc3QgcG9zdElkPVwiYnJ1alwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJSaWdodFwiIHN0eWxlPXt7bWluV2lkdGg6IDIwMCwgd2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFx0Um9ibG94IEFkIEdvZXMgaGVyZVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcdDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHBvaW50ZXJFdmVudHM6IHBvcHVwc1Nob3duP1widW5zZXRcIjpcIm5vbmVcIiwgYmFja2Ryb3BGaWx0ZXI6IHBvcHVwc1Nob3duP1wiYmx1cig1cHgpXCI6XCJcIn19PlxyXG5cdFx0XHQ8U2V0dGluZ3NQYWdlXHJcblxyXG5cdFx0XHRcdG9uQ2xvc2VkPXtcclxuXHRcdFx0XHRcdCgpPT57XHJcblx0XHRcdFx0XHRcdENoYW5nZVBvcHVwU3RhdGUoZmFsc2UsIF9TZXRTZXR0aW5nc09wZW4pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdldENsb3NlZFNldHRlcj17KGNhbGxiYWNrKT0+e1xyXG5cdFx0XHRcdFx0X1NldFNldHRpbmdzT3BlbiA9IGNhbGxiYWNrO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: "Oh baby a triple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
          lineNumber: 48,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.nhentai.net/g/364624",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Click me for a surprise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            display: 'none'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Just kidding dont click it lmao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        position: "fixed",
        width: "100%",
        height: "100%"
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: "100%",
          maxWidth: 1200,
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          display: "flex"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: 200,
            minWidth: 200
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: ["Photopcopy", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
            children: "Open Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 6
          }, this)]
        }, "sidebarLeft", true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%"
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_maincontent_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
            postId: "bruj"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 6
          }, this)
        }, "postContainer", false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            minWidth: 200,
            width: 200
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Roblox Ad Goes here"
        }, "sidebarRight", false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5
        }, this)]
      }, "content", true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 4
      }, this)
    }, "contentContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
        lineNumber: 68,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(App, "Pvva9qmko0a8vhjDJ+lkipgLFWw=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsIm5vbmNlIiwidXBkYXRlIiwiU2V0dGluZ3MiLCJwb3B1cHNTaG93biIsInNldFBvcHVwc1Nob3duIiwiX1NldFNldHRpbmdzT3BlbiIsIkNoYW5nZVBvcHVwU3RhdGUiLCJ2YWx1ZSIsIlNldE9wZW5GdW5jIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXaWR0aCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtaW5XaWR0aCIsInBvaW50ZXJFdmVudHMiLCJiYWNrZHJvcEZpbHRlciIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUMsQ0FBRCxDQURsQjtBQUFBLE1BQ1BDLEtBRE87QUFBQSxNQUNBQyxNQURBOztBQUVkQyxpRUFBQSxHQUFtQixZQUFJO0FBQ3RCRCxVQUFNLENBQUNELEtBQUssR0FBQyxDQUFQLENBQU47QUFDQSxHQUZELENBRmMsQ0FNZDtBQUNBOzs7QUFQYyxtQkFRd0JELCtDQUFRLENBQUMsQ0FBRCxDQVJoQztBQUFBLE1BUVBJLFdBUk87QUFBQSxNQVFNQyxjQVJOOztBQVVkLE1BQUlDLGdCQUFKOztBQUNBLFdBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUEwQ0MsV0FBMUMsRUFBOEU7QUFDN0UsUUFBSUQsS0FBSixFQUFXO0FBQ1ZILG9CQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQWQ7QUFDQSxLQUZELE1BRU87QUFDTkMsb0JBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBZDtBQUNBOztBQUNESyxlQUFXLENBQUNELEtBQUQsQ0FBWDtBQUNBOztBQUVE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RUFBRTtBQUFDUSxhQUFLLEVBQUUsTUFBUjtBQUFnQkMsY0FBTSxFQUFFLE1BQXhCO0FBQWdDRixnQkFBUSxFQUFFLE9BQTFDO0FBQW1EVSxxQkFBYSxFQUFFaEIsV0FBVyxHQUFDLE9BQUQsR0FBUyxNQUF0RjtBQUE4RmlCLHNCQUFjLEVBQUVqQixXQUFXLEdBQUMsV0FBRCxHQUFhO0FBQXRJLE9BQVo7QUFBQSxrR0FuQ3NCRCxvRkFtQ3RCLEVBbENXQSw4RUFrQ1g7QUFBQSw2QkFDQyw4REFBQywrRUFBRDtBQUVDLGdCQUFRLEVBQ1Asb0JBQUk7QUFDSEksMEJBQWdCLENBQUMsS0FBRCxFQUFRRCxnQkFBUixDQUFoQjtBQUNBLFNBTEg7QUFPQyx1QkFBZSxFQUFFLHlCQUFDZ0IsUUFBRCxFQUFZO0FBQzVCaEIsMEJBQWdCLEdBQUdnQixRQUFuQjtBQUNBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Q007QUFBQSxrQkFBUDtBQW9EQTs7R0F4RVF2QixHOztLQUFBQSxHO0FBMEVULCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyNDg1YjRkNjcxNzVjNDY4MjcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgQ29tcHV0ZWRTZXR0aW5ncyB9IGZyb20gJy4uL3NjcmlwdHMvc2V0dGluZ3MnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3RhYmJ1dHRvbidcclxuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2V0dGluZ3NwYWdlJ1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluY29udGVudC9wb3N0J1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IFtub25jZSwgdXBkYXRlXSA9IHVzZVN0YXRlKDApO1xyXG5cdFNldHRpbmdzLl91cGRhdGUgPSAoKT0+e1xyXG5cdFx0dXBkYXRlKG5vbmNlKzEpXHJcblx0fTtcclxuXHJcblx0Ly9pdCBjb3VudHMgdXAgZm9yIGV2ZXJ5IHBvcHVwLCBhbmQgY291bnRzIGRvd24gZXZlcnl0aW1lIG9uZSBpcyBjbG9zZWQsIHRoYXQgd2F5IHlvdSBjYW4gaGF2ZSAwIHRvIGluZGljYXRlIHRoYXQgYWxsIHBvcHVwcyBhcmUgY2xvc2VkXHJcblx0Ly9pbSBub3Qgc3VyZSBpZiB0aGlzIGNvdWxkIGxlYWQgdG8gYSBidWcgaWYgdGhlIG51bWJlciBpcyB1bmV4cGVjdGVkbHksIGJ1dCBpdCB3b3JrcyBpbiB0aGVvcnlcclxuXHRjb25zdCBbcG9wdXBzU2hvd24sIHNldFBvcHVwc1Nob3duXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRsZXQgX1NldFNldHRpbmdzT3BlbjogKHZhbHVlOiBib29sZWFuKT0+dm9pZDtcclxuXHRmdW5jdGlvbiBDaGFuZ2VQb3B1cFN0YXRlKHZhbHVlOiBib29sZWFuLCBTZXRPcGVuRnVuYzogKHZhbHVlOiBib29sZWFuKT0+dm9pZCl7XHJcblx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24rMSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRQb3B1cHNTaG93bihwb3B1cHNTaG93bi0xKVxyXG5cdFx0fVxyXG5cdFx0U2V0T3BlbkZ1bmModmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cdFx0XHRcdGNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3J9O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0QGltcG9ydFxyXG5cdFx0XHR1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdE9oIGJhYnkgYSB0cmlwbGUhXHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8bm9zY3JpcHQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIHpJbmRleDogMTAwfX0+XHJcblx0XHRcdDxoMT5FbmFibGUgamF2YXNjcmlwdCByZXRhcmQuPC9oMT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5oZW50YWkubmV0L2cvMzY0NjI0XCI+Q2xpY2sgbWUgZm9yIGEgc3VycHJpc2U8L2E+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5KdXN0IGtpZGRpbmcgZG9udCBjbGljayBpdCBsbWFvPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbm9zY3JpcHQ+XHJcblx0XHQ8ZGl2IGtleT1cImNvbnRlbnRDb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG5cdFx0XHQ8ZGl2IGtleT1cImNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiAxMjAwLCBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSlcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhckxlZnRcIiBzdHlsZT17e3dpZHRoOiAyMDAsIG1pbldpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFBob3RvcGNvcHlcclxuXHRcdFx0XHRcdDxidXR0b24+T3BlbiBTZXR0aW5nczwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwicG9zdENvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVqXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhclJpZ2h0XCIgc3R5bGU9e3ttaW5XaWR0aDogMjAwLCB3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRSb2Jsb3ggQWQgR29lcyBoZXJlXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==