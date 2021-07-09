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
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnFCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgQ29tcHV0ZWRTZXR0aW5ncyB9IGZyb20gJy4uL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3RhYmJ1dHRvbidcclxuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2V0dGluZ3NwYWdlJ1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluY29udGVudC9wb3N0J1xyXG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9tb2R1bGVzL3BvcHVwbWFuYWdlcidcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0XHJcblx0Y29uc3Qge1JlbmRlcjogUmVuZGVyUG9wdXBzLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZSwgc2hvdWxkU2hvd092ZXJsYXl9ID0gUG9wdXBNYW5hZ2VyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+e1xyXG5cdFx0QWRkUG9wdXAoXCJTZXR0aW5nc01lbnVcIiwgZmFsc2UsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xyXG5cdFx0XHRyZXR1cm4gPFNldHRpbmdzUGFnZVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuXHRcdFx0XHRpc09wZW49e2lzT3Blbn1cclxuXHRcdFx0Lz5cclxuXHRcdH0pXHJcblx0fSwgW10pXHJcblx0XHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cdFx0XHRcdGNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3J9O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0QGltcG9ydFxyXG5cdFx0XHR1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdE9oIGJhYnkgYSB0cmlwbGUhXHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8bm9zY3JpcHQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIHpJbmRleDogMTAwfX0+XHJcblx0XHRcdDxoMT5FbmFibGUgamF2YXNjcmlwdCByZXRhcmQuPC9oMT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5oZW50YWkubmV0L2cvMzY0NjI0XCI+Q2xpY2sgbWUgZm9yIGEgc3VycHJpc2U8L2E+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5KdXN0IGtpZGRpbmcgZG9udCBjbGljayBpdCBsbWFvPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbm9zY3JpcHQ+XHJcblx0XHQ8ZGl2IGtleT1cIm1haW5Db250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG5cdFx0XHQ8ZGl2IGtleT1cImNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiAxMjAwLCBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSlcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhckxlZnRcIiBzdHlsZT17e3dpZHRoOiAyMDAsIG1pbldpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFBob3RvcGNvcHlcclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PntcclxuXHRcdFx0XHRcdFx0U2V0UG9wdXBTdGF0ZShcIlNldHRpbmdzTWVudVwiLCB0cnVlKVxyXG5cdFx0XHRcdFx0fX0+T3BlbiBTZXR0aW5nczwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwicG9zdENvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVqXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhclJpZ2h0XCIgc3R5bGU9e3ttaW5XaWR0aDogMjAwLCB3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRSb2Jsb3ggQWQgR29lcyBoZXJlXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBwb2ludGVyRXZlbnRzOiBzaG91bGRTaG93T3ZlcmxheT9cInVuc2V0XCI6XCJub25lXCIsIGJhY2tkcm9wRmlsdGVyOiBzaG91bGRTaG93T3ZlcmxheT9cImJsdXIoNXB4KVwiOlwiXCIsIHRyYW5zaXRpb246IFwiYmFja2Ryb3AtZmlsdGVyIC41c1wifX0vPlxyXG5cdFx0e1JlbmRlclBvcHVwcygpfVxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
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
        backdropFilter: shouldShowOverlay ? "blur(5px)" : "",
        transition: "backdrop-filter .5s"
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 3
    }, this), RenderPopups()]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsIm5vbmNlIiwidXBkYXRlIiwiU2V0dGluZ3MiLCJQb3B1cE1hbmFnZXIiLCJSZW5kZXJQb3B1cHMiLCJSZW5kZXIiLCJBZGRQb3B1cCIsIlNldFBvcHVwU3RhdGUiLCJzaG91bGRTaG93T3ZlcmxheSIsInVzZUVmZmVjdCIsIm9uUmVxdWVzdENsb3NlIiwiaXNPcGVuIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXaWR0aCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtaW5XaWR0aCIsInBvaW50ZXJFdmVudHMiLCJiYWNrZHJvcEZpbHRlciIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsK0NBQVEsQ0FBQyxDQUFELENBRGxCO0FBQUEsTUFDUEMsS0FETztBQUFBLE1BQ0FDLE1BREE7O0FBRWRDLGlFQUFBLEdBQW1CLFlBQUk7QUFDdEJELFVBQU0sQ0FBQ0QsS0FBSyxHQUFDLENBQVAsQ0FBTjtBQUNBLEdBRkQsQ0FGYyxDQU1kO0FBQ0E7OztBQVBjLHNCQVM2REcsbUVBQVksRUFUekU7QUFBQSxNQVNDQyxZQVRELGlCQVNQQyxNQVRPO0FBQUEsTUFTZUMsUUFUZixpQkFTZUEsUUFUZjtBQUFBLE1BU3lCQyxhQVR6QixpQkFTeUJBLGFBVHpCO0FBQUEsTUFTd0NDLGlCQVR4QyxpQkFTd0NBLGlCQVR4Qzs7QUFXZEMsa0RBQVMsQ0FBQyxZQUFJO0FBQ2JILFlBQVEsQ0FBQyxjQUFELEVBQWlCLEtBQWpCLEVBQXdCLFVBQUNJLGNBQUQsRUFBaUJDLE1BQWpCLEVBQTBCO0FBQ3pE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QWdCUixpQkFBSyxFQUFFO0FBQXZCLFdBQS9CO0FBQUEsc0dBaENvQlgsb0ZBZ0NwQixFQS9CU0EsOEVBK0JUO0FBQUE7QUFBQSxXQUFTLGNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRDtBQUFBLFNBQVMsU0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsT0FBUyxlQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qk0sZUF3Q047QUFBSyxXQUFLLEVBQUU7QUFBQ1csYUFBSyxFQUFFLE1BQVI7QUFBZ0JDLGNBQU0sRUFBRSxNQUF4QjtBQUFnQ0YsZ0JBQVEsRUFBRSxPQUExQztBQUFtRFUscUJBQWEsRUFBRWQsaUJBQWlCLEdBQUMsT0FBRCxHQUFTLE1BQTVGO0FBQW9HZSxzQkFBYyxFQUFFZixpQkFBaUIsR0FBQyxXQUFELEdBQWEsRUFBbEo7QUFBc0pnQixrQkFBVSxFQUFFO0FBQWxLLE9BQVo7QUFBQSxrR0FyQ3NCdEIsb0ZBcUN0QixFQXBDV0EsOEVBb0NYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDTSxFQXlDTEUsWUFBWSxFQXpDUDtBQUFBLGtCQUFQO0FBMkNBOztHQS9EUU4sRzs7S0FBQUEsRztBQWlFVCwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTk0OTk3MzBlY2NhMzYxNDA4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgQ29tcHV0ZWRTZXR0aW5ncyB9IGZyb20gJy4uL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3RhYmJ1dHRvbidcclxuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2V0dGluZ3NwYWdlJ1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluY29udGVudC9wb3N0J1xyXG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9tb2R1bGVzL3BvcHVwbWFuYWdlcidcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0XHJcblx0Y29uc3Qge1JlbmRlcjogUmVuZGVyUG9wdXBzLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZSwgc2hvdWxkU2hvd092ZXJsYXl9ID0gUG9wdXBNYW5hZ2VyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+e1xyXG5cdFx0QWRkUG9wdXAoXCJTZXR0aW5nc01lbnVcIiwgZmFsc2UsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xyXG5cdFx0XHRyZXR1cm4gPFNldHRpbmdzUGFnZVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuXHRcdFx0XHRpc09wZW49e2lzT3Blbn1cclxuXHRcdFx0Lz5cclxuXHRcdH0pXHJcblx0fSwgW10pXHJcblx0XHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cdFx0XHRcdGNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3J9O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0QGltcG9ydFxyXG5cdFx0XHR1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdE9oIGJhYnkgYSB0cmlwbGUhXHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8bm9zY3JpcHQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIHpJbmRleDogMTAwfX0+XHJcblx0XHRcdDxoMT5FbmFibGUgamF2YXNjcmlwdCByZXRhcmQuPC9oMT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5oZW50YWkubmV0L2cvMzY0NjI0XCI+Q2xpY2sgbWUgZm9yIGEgc3VycHJpc2U8L2E+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5KdXN0IGtpZGRpbmcgZG9udCBjbGljayBpdCBsbWFvPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbm9zY3JpcHQ+XHJcblx0XHQ8ZGl2IGtleT1cIm1haW5Db250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG5cdFx0XHQ8ZGl2IGtleT1cImNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiAxMjAwLCBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSlcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhckxlZnRcIiBzdHlsZT17e3dpZHRoOiAyMDAsIG1pbldpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFBob3RvcGNvcHlcclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PntcclxuXHRcdFx0XHRcdFx0U2V0UG9wdXBTdGF0ZShcIlNldHRpbmdzTWVudVwiLCB0cnVlKVxyXG5cdFx0XHRcdFx0fX0+T3BlbiBTZXR0aW5nczwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwicG9zdENvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVqXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhclJpZ2h0XCIgc3R5bGU9e3ttaW5XaWR0aDogMjAwLCB3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRSb2Jsb3ggQWQgR29lcyBoZXJlXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBwb2ludGVyRXZlbnRzOiBzaG91bGRTaG93T3ZlcmxheT9cInVuc2V0XCI6XCJub25lXCIsIGJhY2tkcm9wRmlsdGVyOiBzaG91bGRTaG93T3ZlcmxheT9cImJsdXIoNXB4KVwiOlwiXCIsIHRyYW5zaXRpb246IFwiYmFja2Ryb3AtZmlsdGVyIC41c1wifX0vPlxyXG5cdFx0e1JlbmRlclBvcHVwcygpfVxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==