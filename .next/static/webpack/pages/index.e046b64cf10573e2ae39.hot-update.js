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
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnFCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdCdcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0Y29uc3QgW3BvcHVwc1Nob3duLCBzZXRQb3B1cHNTaG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0bGV0IF9TZXRTZXR0aW5nc09wZW46ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQ7XHJcblx0ZnVuY3Rpb24gQ2hhbmdlUG9wdXBTdGF0ZSh2YWx1ZTogYm9vbGVhbiwgU2V0T3BlbkZ1bmM6ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQpe1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duKzEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24tMSlcclxuXHRcdH1cclxuXHRcdFNldE9wZW5GdW5jKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PGRpdiBrZXk9XCJtYWluQ29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0PGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogMTIwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUpXCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwLCBtaW5XaWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRQaG90b3Bjb3B5XHJcblx0XHRcdFx0XHQ8YnV0dG9uPk9wZW4gU2V0dGluZ3M8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInBvc3RDb250YWluZXJcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0PFBvc3QgcG9zdElkPVwiYnJ1alwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJSaWdodFwiIHN0eWxlPXt7bWluV2lkdGg6IDIwMCwgd2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFx0Um9ibG94IEFkIEdvZXMgaGVyZVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
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
    }, "mainContainer", false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsIm5vbmNlIiwidXBkYXRlIiwiU2V0dGluZ3MiLCJwb3B1cHNTaG93biIsInNldFBvcHVwc1Nob3duIiwiX1NldFNldHRpbmdzT3BlbiIsIkNoYW5nZVBvcHVwU3RhdGUiLCJ2YWx1ZSIsIlNldE9wZW5GdW5jIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXaWR0aCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtaW5XaWR0aCIsInBvaW50ZXJFdmVudHMiLCJiYWNrZHJvcEZpbHRlciIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUMsQ0FBRCxDQURsQjtBQUFBLE1BQ1BDLEtBRE87QUFBQSxNQUNBQyxNQURBOztBQUVkQyxpRUFBQSxHQUFtQixZQUFJO0FBQ3RCRCxVQUFNLENBQUNELEtBQUssR0FBQyxDQUFQLENBQU47QUFDQSxHQUZELENBRmMsQ0FNZDtBQUNBOzs7QUFQYyxtQkFRd0JELCtDQUFRLENBQUMsQ0FBRCxDQVJoQztBQUFBLE1BUVBJLFdBUk87QUFBQSxNQVFNQyxjQVJOOztBQVVkLE1BQUlDLGdCQUFKOztBQUNBLFdBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUEwQ0MsV0FBMUMsRUFBOEU7QUFDN0UsUUFBSUQsS0FBSixFQUFXO0FBQ1ZILG9CQUFjLENBQUNELFdBQVcsR0FBQyxDQUFiLENBQWQ7QUFDQSxLQUZELE1BRU87QUFDTkMsb0JBQWMsQ0FBQ0QsV0FBVyxHQUFDLENBQWIsQ0FBZDtBQUNBOztBQUNESyxlQUFXLENBQUNELEtBQUQsQ0FBWDtBQUNBOztBQUVE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QUFFO0FBQUNRLGFBQUssRUFBRSxNQUFSO0FBQWdCQyxjQUFNLEVBQUUsTUFBeEI7QUFBZ0NGLGdCQUFRLEVBQUUsT0FBMUM7QUFBbURVLHFCQUFhLEVBQUVoQixXQUFXLEdBQUMsT0FBRCxHQUFTLE1BQXRGO0FBQThGaUIsc0JBQWMsRUFBRWpCLFdBQVcsR0FBQyxXQUFELEdBQWE7QUFBdEksT0FBWjtBQUFBLGtHQW5Dc0JELG9GQW1DdEIsRUFsQ1dBLDhFQWtDWDtBQUFBLDZCQUNDLDhEQUFDLCtFQUFEO0FBRUMsZ0JBQVEsRUFDUCxvQkFBSTtBQUNISSwwQkFBZ0IsQ0FBQyxLQUFELEVBQVFELGdCQUFSLENBQWhCO0FBQ0EsU0FMSDtBQU9DLHVCQUFlLEVBQUUseUJBQUNnQixRQUFELEVBQVk7QUFDNUJoQiwwQkFBZ0IsR0FBR2dCLFFBQW5CO0FBQ0E7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRDTTtBQUFBLGtCQUFQO0FBb0RBOztHQXhFUXZCLEc7O0tBQUFBLEc7QUEwRVQsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTA0NmI2NGNmMTA1NzNlMmFlMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFNldHRpbmdzLCBDb21wdXRlZFNldHRpbmdzIH0gZnJvbSAnLi4vc2NyaXB0cy9zZXR0aW5ncydcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcclxuaW1wb3J0IHsgVGFiQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2UvdGFiYnV0dG9uJ1xyXG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS9zZXR0aW5nc3BhZ2UnXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW5jb250ZW50L3Bvc3QnXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0Y29uc3QgW25vbmNlLCB1cGRhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0U2V0dGluZ3MuX3VwZGF0ZSA9ICgpPT57XHJcblx0XHR1cGRhdGUobm9uY2UrMSlcclxuXHR9O1xyXG5cclxuXHQvL2l0IGNvdW50cyB1cCBmb3IgZXZlcnkgcG9wdXAsIGFuZCBjb3VudHMgZG93biBldmVyeXRpbWUgb25lIGlzIGNsb3NlZCwgdGhhdCB3YXkgeW91IGNhbiBoYXZlIDAgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcG9wdXBzIGFyZSBjbG9zZWRcclxuXHQvL2ltIG5vdCBzdXJlIGlmIHRoaXMgY291bGQgbGVhZCB0byBhIGJ1ZyBpZiB0aGUgbnVtYmVyIGlzIHVuZXhwZWN0ZWRseSwgYnV0IGl0IHdvcmtzIGluIHRoZW9yeVxyXG5cdGNvbnN0IFtwb3B1cHNTaG93biwgc2V0UG9wdXBzU2hvd25dID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGxldCBfU2V0U2V0dGluZ3NPcGVuOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkO1xyXG5cdGZ1bmN0aW9uIENoYW5nZVBvcHVwU3RhdGUodmFsdWU6IGJvb2xlYW4sIFNldE9wZW5GdW5jOiAodmFsdWU6IGJvb2xlYW4pPT52b2lkKXtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRzZXRQb3B1cHNTaG93bihwb3B1cHNTaG93bisxKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duLTEpXHJcblx0XHR9XHJcblx0XHRTZXRPcGVuRnVuYyh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvcn07XHJcblx0XHRcdFx0Y29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcn07XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdTRiBNb25vJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRAaW1wb3J0XHJcblx0XHRcdHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJylcclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0T2ggYmFieSBhIHRyaXBsZSFcclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxub3NjcmlwdD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgekluZGV4OiAxMDB9fT5cclxuXHRcdFx0PGgxPkVuYWJsZSBqYXZhc2NyaXB0IHJldGFyZC48L2gxPlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubmhlbnRhaS5uZXQvZy8zNjQ2MjRcIj5DbGljayBtZSBmb3IgYSBzdXJwcmlzZTwvYT5cclxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19Pkp1c3Qga2lkZGluZyBkb250IGNsaWNrIGl0IGxtYW88L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9ub3NjcmlwdD5cclxuXHRcdDxkaXYga2V5PVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IDEyMDAsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlKVwiLCBkaXNwbGF5OlwiZmxleFwifX0+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyTGVmdFwiIHN0eWxlPXt7d2lkdGg6IDIwMCwgbWluV2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFx0UGhvdG9wY29weVxyXG5cdFx0XHRcdFx0PGJ1dHRvbj5PcGVuIFNldHRpbmdzPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJwb3N0Q29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWpcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyUmlnaHRcIiBzdHlsZT17e21pbldpZHRoOiAyMDAsIHdpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFJvYmxveCBBZCBHb2VzIGhlcmVcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHBvaW50ZXJFdmVudHM6IHBvcHVwc1Nob3duP1widW5zZXRcIjpcIm5vbmVcIiwgYmFja2Ryb3BGaWx0ZXI6IHBvcHVwc1Nob3duP1wiYmx1cig1cHgpXCI6XCJcIn19PlxyXG5cdFx0XHQ8U2V0dGluZ3NQYWdlXHJcblxyXG5cdFx0XHRcdG9uQ2xvc2VkPXtcclxuXHRcdFx0XHRcdCgpPT57XHJcblx0XHRcdFx0XHRcdENoYW5nZVBvcHVwU3RhdGUoZmFsc2UsIF9TZXRTZXR0aW5nc09wZW4pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdldENsb3NlZFNldHRlcj17KGNhbGxiYWNrKT0+e1xyXG5cdFx0XHRcdFx0X1NldFNldHRpbmdzT3BlbiA9IGNhbGxiYWNrO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=