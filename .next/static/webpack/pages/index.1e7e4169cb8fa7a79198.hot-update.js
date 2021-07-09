self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/maincontent/post.tsx":
/*!*********************************************!*\
  !*** ./src/components/maincontent/post.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/settings */ "./src/scripts/settings.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\maincontent\\post.tsx";


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
/* harmony import */ var _components_maincontent_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/maincontent/post */ "./src/components/maincontent/post.tsx");
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
        transform: "translate(-50%)",
        display: "flex"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: 200,
          minWidth: 200
        },
        children: "Photopcopy"
      }, "sidebarLeft", false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: "100%"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_maincontent_post__WEBPACK_IMPORTED_MODULE_6__.Post, {
          postId: "bruj"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, this)
      }, "postContainer", false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          minWidth: 200,
          width: 200
        },
        children: "Roblox Ad Goes here"
      }, "sidebarRight", false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this)]
    }, "content", true, {
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
      children: "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, ";color:").concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor, ";font-family:'SF Mono','Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3FCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0PGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogMTIwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUpXCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwLCBtaW5XaWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRQaG90b3Bjb3B5XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJwb3N0Q29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWpcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyUmlnaHRcIiBzdHlsZT17e21pbldpZHRoOiAyMDAsIHdpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFJvYmxveCBBZCBHb2VzIGhlcmVcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0Y29uc3QgW3BvcHVwc1Nob3duLCBzZXRQb3B1cHNTaG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0bGV0IF9TZXRTZXR0aW5nc09wZW46ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQ7XHJcblx0ZnVuY3Rpb24gQ2hhbmdlUG9wdXBTdGF0ZSh2YWx1ZTogYm9vbGVhbiwgU2V0T3BlbkZ1bmM6ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQpe1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duKzEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24tMSlcclxuXHRcdH1cclxuXHRcdFNldE9wZW5GdW5jKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PE1haW4vPlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\infin\\\\Desktop\\\\photopcopy\\\\photopcopy\\\\src\\\\pages\\\\index.tsx */")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiU2V0dGluZ3MiLCJib3JkZXJSYWRpdXMiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdSaWdodCIsInBvc3RJZCIsIk1haW4iLCJwb3NpdGlvbiIsIm1heFdpZHRoIiwibGVmdCIsInRyYW5zZm9ybSIsIkFwcCIsInVzZVN0YXRlIiwibm9uY2UiLCJ1cGRhdGUiLCJwb3B1cHNTaG93biIsInNldFBvcHVwc1Nob3duIiwiX1NldFNldHRpbmdzT3BlbiIsIkNoYW5nZVBvcHVwU3RhdGUiLCJ2YWx1ZSIsIlNldE9wZW5GdW5jIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImJhY2tkcm9wRmlsdGVyIiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBc0M7QUFDbEMsc0JBQU87QUFBd0IsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUVDLDRGQUFsQjtBQUFpRUMsa0JBQVksRUFBRSxDQUEvRTtBQUFrRkMsZUFBUyxFQUFFLEdBQTdGO0FBQWtHQyxhQUFPLEVBQUM7QUFBMUcsS0FBL0I7QUFBQSw0QkFDSDtBQUE0QixXQUFLLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTtBQUFYLE9BQW5DO0FBQUEsNkJBQ0k7QUFBNkIsYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUUsQ0FBVDtBQUFZQyxlQUFLLEVBQUUsTUFBbkI7QUFBMkJDLGdCQUFNLEVBQUUsRUFBbkM7QUFBdUNKLGlCQUFPLEVBQUM7QUFBL0MsU0FBcEM7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFB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LE9BQTFDO0FBQW1EZSxxQkFBYSxFQUFFUCxXQUFXLEdBQUMsT0FBRCxHQUFTLE1BQXRGO0FBQThGUSxzQkFBYyxFQUFFUixXQUFXLEdBQUMsV0FBRCxHQUFhO0FBQXRJLE9BQVo7QUFBQSxrR0F0QnNCbkIsb0ZBc0J0QixFQXJCV0EsOEVBcUJYO0FBQUEsNkJBQ0MsOERBQUMsK0VBQUQ7QUFFQyxnQkFBUSxFQUNQLG9CQUFJO0FBQ0hzQiwwQkFBZ0IsQ0FBQyxLQUFELEVBQVFELGdCQUFSLENBQWhCO0FBQ0EsU0FMSDtBQU9DLHVCQUFlLEVBQUUseUJBQUNPLFFBQUQsRUFBWTtBQUM1QlAsMEJBQWdCLEdBQUdPLFFBQW5CO0FBQ0E7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCTTtBQUFBLGtCQUFQO0FBdUNBOztHQTNEUWIsRzs7TUFBQUEsRztBQTZEVCwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZTdlNDE2OWNiOGZhN2E3OTE5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZXR0aW5nc1wiXG5cbmZ1bmN0aW9uIFBvc3QocHJvcHM6IHtwb3N0SWQ6IHN0cmluZ30pe1xuICAgIHJldHVybiA8ZGl2IGtleT17cHJvcHMucG9zdElkfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBib3JkZXJSYWRpdXM6IDgsIG1pbkhlaWdodDogMTAwLCBkaXNwbGF5OlwiZmxleFwifX0+XG4gICAgICAgIDxkaXYga2V5PVwiY29udGVudENvbnRhaW5lclwiIHN0eWxlPXt7bWluV2lkdGg6IDMwMH19PlxuICAgICAgICAgICAgPGRpdiBrZXk9XCJwb3N0RGF0YUNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ2luOiA2LCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogNTAsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL0RlZmF1bHRQcm9maWxlUGljLnN2Z1wiIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0vPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYga2V5PVwiY2hhdENvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW46IDYsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSwgYm9yZGVyUmFkaXVzOiA4fX0+VEhJUzwvZGl2PlxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQge1Bvc3R9IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9zY3JpcHRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdCdcclxuXHJcbi8vIGFwcGFyZW50bHkgcGhvdG9wIGlzIGFsbCB0aGUgc2FtZSBwYWdlIHdoaWNoIGlzIHJlYWxseSB3ZWlyZCBidXQgL3NocnVnXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcclxuXHRyZXR1cm4gPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0PGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogMTIwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUpXCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwLCBtaW5XaWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRQaG90b3Bjb3B5XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJwb3N0Q29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWpcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyUmlnaHRcIiBzdHlsZT17e21pbldpZHRoOiAyMDAsIHdpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFJvYmxveCBBZCBHb2VzIGhlcmVcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0Y29uc3QgW3BvcHVwc1Nob3duLCBzZXRQb3B1cHNTaG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0bGV0IF9TZXRTZXR0aW5nc09wZW46ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQ7XHJcblx0ZnVuY3Rpb24gQ2hhbmdlUG9wdXBTdGF0ZSh2YWx1ZTogYm9vbGVhbiwgU2V0T3BlbkZ1bmM6ICh2YWx1ZTogYm9vbGVhbik9PnZvaWQpe1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHNldFBvcHVwc1Nob3duKHBvcHVwc1Nob3duKzEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0UG9wdXBzU2hvd24ocG9wdXBzU2hvd24tMSlcclxuXHRcdH1cclxuXHRcdFNldE9wZW5GdW5jKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PE1haW4vPlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogcG9wdXBzU2hvd24/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogcG9wdXBzU2hvd24/XCJibHVyKDVweClcIjpcIlwifX0+XHJcblx0XHRcdDxTZXR0aW5nc1BhZ2VcclxuXHJcblx0XHRcdFx0b25DbG9zZWQ9e1xyXG5cdFx0XHRcdFx0KCk9PntcclxuXHRcdFx0XHRcdFx0Q2hhbmdlUG9wdXBTdGF0ZShmYWxzZSwgX1NldFNldHRpbmdzT3BlbilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2V0Q2xvc2VkU2V0dGVyPXsoY2FsbGJhY2spPT57XHJcblx0XHRcdFx0XHRfU2V0U2V0dGluZ3NPcGVuID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==