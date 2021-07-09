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
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/settings */ "./src/modules/settings.ts");
/* harmony import */ var _components_settingspage_settingspage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/settingspage/settingspage */ "./src/components/settingspage/settingspage.tsx");
/* harmony import */ var _components_maincontent_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/maincontent/post */ "./src/components/maincontent/post.tsx");
/* harmony import */ var _modules_popupmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/popupmanager */ "./src/modules/popupmanager.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\index.tsx",
    _s = $RefreshSig$();









function App() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      nonce = _useState[0],
      update = _useState[1];

  _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings._update = function () {
    update(nonce + 1);
  }; //it counts up for every popup, and counts down everytime one is closed, that way you can have 0 to indicate that all popups are closed
  //im not sure if this could lead to a bug if the number is unexpectedly, but it works in theory


  var _PopupManager = (0,_modules_popupmanager__WEBPACK_IMPORTED_MODULE_7__.PopupManager)(),
      RenderPopups = _PopupManager.Render,
      AddPopup = _PopupManager.AddPopup,
      SetPopupState = _PopupManager.SetPopupState,
      shouldShowOverlay = _PopupManager.shouldShowOverlay;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    AddPopup("SettingsMenu", false, function (onRequestClose, isOpen) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settingspage_settingspage__WEBPACK_IMPORTED_MODULE_5__.SettingsPage, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2805815117",
      dynamic: [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor],
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnFCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgQ29tcHV0ZWRTZXR0aW5ncyB9IGZyb20gJy4uL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3RhYmJ1dHRvbidcclxuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2V0dGluZ3NwYWdlJ1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluY29udGVudC9wb3N0J1xyXG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9tb2R1bGVzL3BvcHVwbWFuYWdlcidcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0XHJcblx0Y29uc3Qge1JlbmRlcjogUmVuZGVyUG9wdXBzLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZSwgc2hvdWxkU2hvd092ZXJsYXl9ID0gUG9wdXBNYW5hZ2VyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+e1xyXG5cdFx0QWRkUG9wdXAoXCJTZXR0aW5nc01lbnVcIiwgZmFsc2UsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xyXG5cdFx0XHRyZXR1cm4gPFNldHRpbmdzUGFnZVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuXHRcdFx0XHRpc09wZW49e2lzT3Blbn1cclxuXHRcdFx0Lz5cclxuXHRcdH0pXHJcblx0fSwgW10pXHJcblx0XHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cdFx0XHRcdGNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3J9O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0QGltcG9ydFxyXG5cdFx0XHR1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdE9oIGJhYnkgYSB0cmlwbGUhXHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8bm9zY3JpcHQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIHpJbmRleDogMTAwfX0+XHJcblx0XHRcdDxoMT5FbmFibGUgamF2YXNjcmlwdCByZXRhcmQuPC9oMT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5oZW50YWkubmV0L2cvMzY0NjI0XCI+Q2xpY2sgbWUgZm9yIGEgc3VycHJpc2U8L2E+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5KdXN0IGtpZGRpbmcgZG9udCBjbGljayBpdCBsbWFvPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbm9zY3JpcHQ+XHJcblx0XHQ8ZGl2IGtleT1cIm1haW5Db250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG5cdFx0XHQ8ZGl2IGtleT1cImNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiAxMjAwLCBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSlcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhckxlZnRcIiBzdHlsZT17e3dpZHRoOiAyMDAsIG1pbldpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFBob3RvcGNvcHlcclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PntcclxuXHRcdFx0XHRcdFx0U2V0UG9wdXBTdGF0ZShcIlNldHRpbmdzTWVudVwiLCB0cnVlKVxyXG5cdFx0XHRcdFx0fX0+T3BlbiBTZXR0aW5nczwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwicG9zdENvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVqXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhclJpZ2h0XCIgc3R5bGU9e3ttaW5XaWR0aDogMjAwLCB3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRSb2Jsb3ggQWQgR29lcyBoZXJlXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBwb2ludGVyRXZlbnRzOiBzaG91bGRTaG93T3ZlcmxheT9cInVuc2V0XCI6XCJub25lXCIsIGJhY2tkcm9wRmlsdGVyOiBzaG91bGRTaG93T3ZlcmxheT9cImJsdXIoNXB4KVwiOlwiXCJ9fT5cclxuXHRcdFx0e1JlbmRlclBvcHVwcygpfVxyXG5cdFx0PC9kaXY+XHJcblx0PC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: "Oh baby a triple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("noscript", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "grey",
          zIndex: 100
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Enable javascript retard."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.nhentai.net/g/364624",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Click me for a surprise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            display: 'none'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Just kidding dont click it lmao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        position: "fixed",
        width: "100%",
        height: "100%"
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: "100%",
          maxWidth: 1200,
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          display: "flex"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: 200,
            minWidth: 200
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: ["Photopcopy", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              SetPopupState("SettingsMenu", true);
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
            children: "Open Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 6
          }, this)]
        }, "sidebarLeft", true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%"
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_maincontent_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
            postId: "bruj"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 6
          }, this)
        }, "postContainer", false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            minWidth: 200,
            width: 200
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Roblox Ad Goes here"
        }, "sidebarRight", false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }, this)]
      }, "content", true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }, this)
    }, "mainContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%",
        height: "100%",
        position: "fixed",
        pointerEvents: shouldShowOverlay ? "unset" : "none",
        backdropFilter: shouldShowOverlay ? "blur(5px)" : ""
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
      children: RenderPopups()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(App, "3nFZjdb/c0zai97Bpxt4hOFTV7E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsIm5vbmNlIiwidXBkYXRlIiwiU2V0dGluZ3MiLCJQb3B1cE1hbmFnZXIiLCJSZW5kZXJQb3B1cHMiLCJSZW5kZXIiLCJBZGRQb3B1cCIsIlNldFBvcHVwU3RhdGUiLCJzaG91bGRTaG93T3ZlcmxheSIsInVzZUVmZmVjdCIsIm9uUmVxdWVzdENsb3NlIiwiaXNPcGVuIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXaWR0aCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtaW5XaWR0aCIsInBvaW50ZXJFdmVudHMiLCJiYWNrZHJvcEZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLGtCQUNVQywrQ0FBUSxDQUFDLENBQUQsQ0FEbEI7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsTUFEQTs7QUFFZEMsaUVBQUEsR0FBbUIsWUFBSTtBQUN0QkQsVUFBTSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUFOO0FBQ0EsR0FGRCxDQUZjLENBTWQ7QUFDQTs7O0FBUGMsc0JBUzZERyxtRUFBWSxFQVR6RTtBQUFBLE1BU0NDLFlBVEQsaUJBU1BDLE1BVE87QUFBQSxNQVNlQyxRQVRmLGlCQVNlQSxRQVRmO0FBQUEsTUFTeUJDLGFBVHpCLGlCQVN5QkEsYUFUekI7QUFBQSxNQVN3Q0MsaUJBVHhDLGlCQVN3Q0EsaUJBVHhDOztBQVdkQyxrREFBUyxDQUFDLFlBQUk7QUFDYkgsWUFBUSxDQUFDLGNBQUQsRUFBaUIsS0FBakIsRUFBd0IsVUFBQ0ksY0FBRCxFQUFpQkMsTUFBakIsRUFBMEI7QUFDekQsMEJBQU8sOERBQUMs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QUU7QUFBdkIsV0FBL0I7QUFBQSxzR0FoQ29CWCxvRkFnQ3BCLEVBL0JTQSw4RUErQlQ7QUFBQTtBQUFBLFdBQVMsY0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZEO0FBQUEsU0FBUyxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxPQUFTLGVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCTSxlQXdDTjtBQUFLLFdBQUssRUFBRTtBQUFDVyxhQUFLLEVBQUUsTUFBUjtBQUFnQkMsY0FBTSxFQUFFLE1BQXhCO0FBQWdDRixnQkFBUSxFQUFFLE9BQTFDO0FBQW1EVSxxQkFBYSxFQUFFZCxpQkFBaUIsR0FBQyxPQUFELEdBQVMsTUFBNUY7QUFBb0dlLHNCQUFjLEVBQUVmLGlCQUFpQixHQUFDLFdBQUQsR0FBYTtBQUFsSixPQUFaO0FBQUEsa0dBckNzQk4sb0ZBcUN0QixFQXBDV0EsOEVBb0NYO0FBQUEsZ0JBQ0VFLFlBQVk7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENNO0FBQUEsa0JBQVA7QUE0Q0E7O0dBaEVRTixHOztLQUFBQSxHO0FBa0VULCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMyMzQ3Mjc4ZDM5Nzc4NGJhMmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFNldHRpbmdzLCBDb21wdXRlZFNldHRpbmdzIH0gZnJvbSAnLi4vbW9kdWxlcy9zZXR0aW5ncydcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcclxuaW1wb3J0IHsgVGFiQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2UvdGFiYnV0dG9uJ1xyXG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS9zZXR0aW5nc3BhZ2UnXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW5jb250ZW50L3Bvc3QnXHJcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL21vZHVsZXMvcG9wdXBtYW5hZ2VyJ1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IFtub25jZSwgdXBkYXRlXSA9IHVzZVN0YXRlKDApO1xyXG5cdFNldHRpbmdzLl91cGRhdGUgPSAoKT0+e1xyXG5cdFx0dXBkYXRlKG5vbmNlKzEpXHJcblx0fTtcclxuXHJcblx0Ly9pdCBjb3VudHMgdXAgZm9yIGV2ZXJ5IHBvcHVwLCBhbmQgY291bnRzIGRvd24gZXZlcnl0aW1lIG9uZSBpcyBjbG9zZWQsIHRoYXQgd2F5IHlvdSBjYW4gaGF2ZSAwIHRvIGluZGljYXRlIHRoYXQgYWxsIHBvcHVwcyBhcmUgY2xvc2VkXHJcblx0Ly9pbSBub3Qgc3VyZSBpZiB0aGlzIGNvdWxkIGxlYWQgdG8gYSBidWcgaWYgdGhlIG51bWJlciBpcyB1bmV4cGVjdGVkbHksIGJ1dCBpdCB3b3JrcyBpbiB0aGVvcnlcclxuXHRcclxuXHRjb25zdCB7UmVuZGVyOiBSZW5kZXJQb3B1cHMsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlLCBzaG91bGRTaG93T3ZlcmxheX0gPSBQb3B1cE1hbmFnZXIoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpPT57XHJcblx0XHRBZGRQb3B1cChcIlNldHRpbmdzTWVudVwiLCBmYWxzZSwgKG9uUmVxdWVzdENsb3NlLCBpc09wZW4pPT57XHJcblx0XHRcdHJldHVybiA8U2V0dGluZ3NQYWdlXHJcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxyXG5cdFx0XHRcdGlzT3Blbj17aXNPcGVufVxyXG5cdFx0XHQvPlxyXG5cdFx0fSlcclxuXHR9LCBbXSlcclxuXHRcclxuXHRyZXR1cm4gPD5cclxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvcn07XHJcblx0XHRcdFx0Y29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcn07XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdTRiBNb25vJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRAaW1wb3J0XHJcblx0XHRcdHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJylcclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0T2ggYmFieSBhIHRyaXBsZSFcclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxub3NjcmlwdD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgekluZGV4OiAxMDB9fT5cclxuXHRcdFx0PGgxPkVuYWJsZSBqYXZhc2NyaXB0IHJldGFyZC48L2gxPlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubmhlbnRhaS5uZXQvZy8zNjQ2MjRcIj5DbGljayBtZSBmb3IgYSBzdXJwcmlzZTwvYT5cclxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19Pkp1c3Qga2lkZGluZyBkb250IGNsaWNrIGl0IGxtYW88L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9ub3NjcmlwdD5cclxuXHRcdDxkaXYga2V5PVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IDEyMDAsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlKVwiLCBkaXNwbGF5OlwiZmxleFwifX0+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyTGVmdFwiIHN0eWxlPXt7d2lkdGg6IDIwMCwgbWluV2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFx0UGhvdG9wY29weVxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xyXG5cdFx0XHRcdFx0XHRTZXRQb3B1cFN0YXRlKFwiU2V0dGluZ3NNZW51XCIsIHRydWUpXHJcblx0XHRcdFx0XHR9fT5PcGVuIFNldHRpbmdzPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJwb3N0Q29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWpcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyUmlnaHRcIiBzdHlsZT17e21pbldpZHRoOiAyMDAsIHdpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFJvYmxveCBBZCBHb2VzIGhlcmVcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHBvaW50ZXJFdmVudHM6IHNob3VsZFNob3dPdmVybGF5P1widW5zZXRcIjpcIm5vbmVcIiwgYmFja2Ryb3BGaWx0ZXI6IHNob3VsZFNob3dPdmVybGF5P1wiYmx1cig1cHgpXCI6XCJcIn19PlxyXG5cdFx0XHR7UmVuZGVyUG9wdXBzKCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=