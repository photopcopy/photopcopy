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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vh",
          maxWidth: 1200
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
            lineNumber: 16,
            columnNumber: 6
          }, this)
        }, "sidebarLeft", false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%",
            maxWidth: 800
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
            postId: "bruh"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 5
          }, this)
        }, "mainContainer", false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: 200
          },
          children: "Play Game"
        }, "sidebarRight", false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 5
        }, this)]
      }, "contentOverflowLimit", true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 4
      }, this)
    }, "content", false, {
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
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHFCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgbWluV2lkdGg6IDEyMDAsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwiY29udGVudE92ZXJmbG93TGltaXRcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6XCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIiwgd2lkdGg6IFwiMTAwdmhcIiwgbWF4V2lkdGg6IDEyMDB9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHQ8aDEgc3R5bGU9e3ttYXJnaW46IDB9fT5QaG90b3Bjb3B5PC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cIm1haW5Db250YWluZXJcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IDgwMH19PlxyXG5cdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWhcIi8+XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJSaWdodFwiIHN0eWxlPXt7d2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFx0UGxheSBHYW1lXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0Y29uc3QgW3BvcHVwc1Nob3duLCBzZXRQb3B1cHNTaG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0bGV0IF9TZXRTZXR0aW5nc09wZW46ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQ7XHJcblx0ZnVuY3Rpb24gQ2hhbmdlUG9wdXBTdGF0ZSh2YWx1ZTogYm9vbGVhbiwgU2V0T3BlbkZ1bmM6ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQpe1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duKzEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24tMSlcclxuXHRcdH1cclxuXHRcdFNldE9wZW5GdW5jKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PE1haW4vPlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: "Oh baby a triple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
          lineNumber: 68,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.nhentai.net/g/364624",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Click me for a surprise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            display: 'none'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Just kidding dont click it lmao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
        lineNumber: 75,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsIm1pbldpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJsZWZ0IiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJBcHAiLCJ1c2VTdGF0ZSIsIm5vbmNlIiwidXBkYXRlIiwiU2V0dGluZ3MiLCJwb3B1cHNTaG93biIsInNldFBvcHVwc1Nob3duIiwiX1NldFNldHRpbmdzT3BlbiIsIkNoYW5nZVBvcHVwU3RhdGUiLCJ2YWx1ZSIsIlNldE9wZW5GdW5jIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImJhY2tkcm9wRmlsdGVyIiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7Q0FHQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBa0Q7QUFDakQsc0JBQU87QUFBNEIsU0FBSyxFQUFFO0FBQUNDLGNBQVEsRUFBRSxPQUFYO0FBQW9CQyxXQUFLLEVBQUUsTUFBM0I7QUFBbUNDLFlBQU0sRUFBRTtBQUEzQyxLQUFuQztBQUFBLDJCQUNOO0FBQW1CLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUMsTUFBVDtBQUFpQkMsZ0JBQVEsRUFBRSxJQUEzQjtBQUFpQ0Msc0JBQWMsRUFBRTtBQUFqRCxPQUExQjtBQUFBLDZCQUNDO0FBQWdDLGFBQUssRUFBRTtBQUFDTCxrQkFBUSxFQUFFLFVBQVg7QUFBdUJNLGNBQUksRUFBQyxLQUE1QjtBQUFtQ0MsbUJBQVMsRUFBRSxrQkFBOUM7QUFBa0VOLGVBQUssRUFBRSxPQUF6RTtBQUFrRk8sa0JBQVEsRUFBRTtBQUE1RixTQUF2QztBQUFBLGdDQUNDO0FBQXVCLGVBQUssRUFBRTtBQUFDUCxpQkFBSyxFQUFFO0FB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QyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qk0sZUF5Qk47QUFBSyxXQUFLLEVBQUU7QUFBQ2IsYUFBSyxFQUFFLE1BQVI7QUFBZ0JDLGNBQU0sRUFBRSxNQUF4QjtBQUFnQ0YsZ0JBQVEsRUFBRSxPQUExQztBQUFtRHVCLHFCQUFhLEVBQUVSLFdBQVcsR0FBQyxPQUFELEdBQVMsTUFBdEY7QUFBOEZTLHNCQUFjLEVBQUVULFdBQVcsR0FBQyxXQUFELEdBQWE7QUFBdEksT0FBWjtBQUFBLGtHQXRCc0JELG9GQXNCdEIsRUFyQldBLDhFQXFCWDtBQUFBLDZCQUNDLDhEQUFDLCtFQUFEO0FBRUMsZ0JBQVEsRUFDUCxvQkFBSTtBQUNISSwwQkFBZ0IsQ0FBQyxLQUFELEVBQVFELGdCQUFSLENBQWhCO0FBQ0EsU0FMSDtBQU9DLHVCQUFlLEVBQUUseUJBQUNRLFFBQUQsRUFBWTtBQUM1QlIsMEJBQWdCLEdBQUdRLFFBQW5CO0FBQ0E7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCTTtBQUFBLGtCQUFQO0FBdUNBOztHQTNEUWYsRzs7TUFBQUEsRztBQTZEVCwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YTI4MmNjNDMxZTBlZmE5ZjkzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgbWluV2lkdGg6IDEyMDAsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwiY29udGVudE92ZXJmbG93TGltaXRcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6XCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIiwgd2lkdGg6IFwiMTAwdmhcIiwgbWF4V2lkdGg6IDEyMDB9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHQ8aDEgc3R5bGU9e3ttYXJnaW46IDB9fT5QaG90b3Bjb3B5PC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cIm1haW5Db250YWluZXJcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IDgwMH19PlxyXG5cdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWhcIi8+XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJSaWdodFwiIHN0eWxlPXt7d2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFx0UGxheSBHYW1lXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0Y29uc3QgW3BvcHVwc1Nob3duLCBzZXRQb3B1cHNTaG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0bGV0IF9TZXRTZXR0aW5nc09wZW46ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQ7XHJcblx0ZnVuY3Rpb24gQ2hhbmdlUG9wdXBTdGF0ZSh2YWx1ZTogYm9vbGVhbiwgU2V0T3BlbkZ1bmM6ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQpe1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duKzEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24tMSlcclxuXHRcdH1cclxuXHRcdFNldE9wZW5GdW5jKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PE1haW4vPlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==