self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/settingspage/settingspage.tsx":
/*!******************************************************!*\
  !*** ./src/components/settingspage/settingspage.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; },
/* harmony export */   "PageTypes": function() { return /* binding */ PageTypes; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./src/components/icon.tsx");
/* harmony import */ var _accentoption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accentoption */ "./src/components/settingspage/accentoption.tsx");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox */ "./src/components/settingspage/checkbox.tsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/components/settingspage/page.tsx");
/* harmony import */ var _radioselection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radioselection */ "./src/components/settingspage/radioselection.tsx");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section */ "./src/components/settingspage/section.tsx");
/* harmony import */ var _tabbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabbutton */ "./src/components/settingspage/tabbutton.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\settingspage.tsx",
    _s = $RefreshSig$();











var PageTypes;

(function (PageTypes) {
  PageTypes[PageTypes["Account"] = 0] = "Account";
  PageTypes[PageTypes["Appearance"] = 1] = "Appearance";
  PageTypes[PageTypes["Privacy"] = 2] = "Privacy";
  PageTypes[PageTypes["Sessions"] = 3] = "Sessions";
  PageTypes[PageTypes["Language"] = 4] = "Language";
})(PageTypes || (PageTypes = {}));

function SettingsPage(props) {
  _s();

  var strings = _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.strings.settingspage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(PageTypes.Account),
      page = _useState[0],
      setPage = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: props.isOpen,
    closeTimeoutMS: 500,
    onAfterClose: function onAfterClose() {},
    ariaHideApp: false,
    style: {
      content: {
        position: "absolute",
        inset: "50% 0% 0% 50%",
        transform: "translate(-50%, -50%)",
        height: "50%",
        width: "50%",
        maxWidth: '600px',
        maxHeight: '400px',
        minWidth: '350px',
        minHeight: '200px',
        backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.backgroundColorSecondary,
        borderRadius: 8,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: "none"
      },
      overlay: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgb(0, 0, 0, 0)"
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        userSelect: 'none',
        width: '100%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: 10,
        backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.backgroundColorTertiary,
        borderBottom: "solid ".concat(_modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.backgroundColorQuaternary)
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width: '100%',
          height: '100%',
          fontSize: 40
        },
        children: strings.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          "float": 'right'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {
          onClick: function onClick() {
            props.onRequestClose();
          },
          type: "close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 63
        }, this)
      }, "topbarRight", false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)]
    }, "topbar", true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100%',
        height: '100%',
        display: "flex",
        overflow: "hidden"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          minWidth: 150,
          width: 150,
          padding: 5,
          borderTopRightRadius: 8,
          height: '100%',
          backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.backgroundColorQuaternary,
          borderRight: "solid ".concat(_modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.backgroundColor)
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_10__.TabButton, {
            self: PageTypes.Account,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Account);
            },
            children: strings.tabs.account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_10__.TabButton, {
            self: PageTypes.Appearance,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Appearance);
            },
            children: strings.tabs.appearance
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_10__.TabButton, {
            self: PageTypes.Privacy,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Privacy);
            },
            children: strings.tabs.privacy
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_10__.TabButton, {
            self: PageTypes.Sessions,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Sessions);
            },
            children: strings.tabs.sessions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_10__.TabButton, {
            self: PageTypes.Language,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Language);
            },
            children: strings.tabs.language
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, this)]
        }, void 0, true)
      }, "sidebar", false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          position: "relative",
          width: "100%",
          height: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_7__.Page, {
          self: PageTypes.Account,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.account.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                display: "flex"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [strings.sections.account.username, ":"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 59
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  margin: "0px 5px",
                  display: "inline-block",
                  overflow: "hidden",
                  maxWidth: 120,
                  textOverflow: "ellipsis"
                },
                children: "Photopcopy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 108
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                style: {
                  "float": "right",
                  margin: 0,
                  border: "none",
                  cursor: "pointer",
                  color: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.textColorInverted,
                  backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.accentColor
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_7__.Page, {
          self: PageTypes.Appearance,
          current: page,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.theme.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radioselection__WEBPACK_IMPORTED_MODULE_8__.RadioSelection, {
              items: [strings.sections.theme.lightMode, strings.sections.theme.darkMode],
              "default": 1,
              updated: function updated(value) {
                switch (value) {
                  case 0:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.set("theme", "lightMode");
                    break;

                  case 1:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.set("theme", "darkMode");
                    break;
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.accentColor.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "red"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "orange"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "yellow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "#00FF00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "#5ab7fa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "purple"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.embeds.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: 12,
                color: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.textColorSecondary
              },
              children: strings.sections.embeds.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_checkbox__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
              items: [strings.sections.embeds.embedYouTube, strings.sections.embeds.embedTwitchStreams, strings.sections.embeds.embedTwitchLiveChat, strings.sections.embeds.embedScratch, strings.sections.embeds.embedCodeDotOrg],
              "default": {
                0: true,
                1: true,
                2: true
              },
              updated: function updated() {}
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_7__.Page, {
          self: PageTypes.Privacy,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.blockedUsers.title,
            children: "tba"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_7__.Page, {
          self: PageTypes.Sessions,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.activeSessions.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              style: {
                borderRadius: 4,
                backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.accentColor,
                width: "100%",
                padding: 4,
                boxSizing: "border-box",
                border: "none",
                cursor: "pointer",
                color: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.textColorInverted
              },
              children: strings.sections.activeSessions.signOutAll
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_7__.Page, {
          self: PageTypes.Language,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.language.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: 12,
                color: _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.textColorSecondary
              },
              children: strings.sections.language.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radioselection__WEBPACK_IMPORTED_MODULE_8__.RadioSelection, {
              items: [strings.sections.language.english, strings.sections.language.retarded],
              "default": 0,
              updated: function updated(value) {
                switch (value) {
                  case 0:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.set("language", "english");
                    break;

                  case 1:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.set("language", "retarded");
                    break;
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)]
      }, "contentContainer", true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this)]
    }, "body", true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 12
  }, this);
}

_s(SettingsPage, "P2fVo4zG1MOoilbRMQrDx2tiN6Y=");

_c = SettingsPage;


var _c;

$RefreshReg$(_c, "SettingsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZS50c3giXSwibmFtZXMiOlsiUGFnZVR5cGVzIiwiU2V0dGluZ3NQYWdlIiwicHJvcHMiLCJzdHJpbmdzIiwiU2V0dGluZ3MiLCJ1c2VTdGF0ZSIsIkFjY291bnQiLCJwYWdlIiwic2V0UGFnZSIsImlzT3BlbiIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImluc2V0IiwidHJhbnNmb3JtIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlciIsIm92ZXJsYXkiLCJ1c2VyU2VsZWN0IiwiYWxpZ25JdGVtcyIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJmb250U2l6ZSIsInRpdGxlIiwib25SZXF1ZXN0Q2xvc2UiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclJpZ2h0IiwidGFicyIsImFjY291bnQiLCJBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsIlByaXZhY3kiLCJwcml2YWN5IiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZWN0aW9ucyIsInVzZXJuYW1lIiwibWFyZ2luIiwidGV4dE92ZXJmbG93IiwiY3Vyc29yIiwiY29sb3IiLCJhY2NlbnRDb2xvciIsInRoZW1lIiwibGlnaHRNb2RlIiwiZGFya01vZGUiLCJ2YWx1ZSIsImVtYmVkcyIsInRleHRDb2xvclNlY29uZGFyeSIsImRlc2NyaXB0aW9uIiwiZW1iZWRZb3VUdWJlIiwiZW1iZWRUd2l0Y2hTdHJlYW1zIiwiZW1iZWRUd2l0Y2hMaXZlQ2hhdCIsImVtYmVkU2NyYXRjaCIsImVtYmVkQ29kZURvdE9yZyIsImJsb2NrZWRVc2VycyIsImFjdGl2ZVNlc3Npb25zIiwidGV4dENvbG9ySW52ZXJ0ZWQiLCJzaWduT3V0QWxsIiwiZW5nbGlzaCIsInJldGFyZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBR0tBLFM7O1dBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0FBQUFBLFcsQ0FBQUEsUztBQUFBQSxXLENBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0FBQUFBLFcsQ0FBQUEsUztHQUFBQSxTLEtBQUFBLFM7O0FBU0wsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBeUU7QUFBQTs7QUFDckUsTUFBTUMsT0FBTyxHQUFHQyx5RkFBaEI7O0FBRHFFLGtCQUU3Q0MsK0NBQVEsQ0FBWUwsU0FBUyxDQUFDTSxPQUF0QixDQUZxQztBQUFBLE1BRTlEQyxJQUY4RDtBQUFBLE1BRXhEQyxPQUZ3RDs7QUFJckUsc0JBQU8sOERBQUMsb0RBQUQ7QUFBWSxVQUFNLEVBQUlOLEtBQUssQ0FBQ08sTUFBNUI7QUFBb0Msa0JBQWMsRUFBRSxHQUFwRDtBQUF5RCxnQkFBWSxFQUFFLHdCQUFJLENBQUUsQ0FBN0U7QUFBK0UsZUFBVyxFQUFFLEtBQTVGO0FBQW1HLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCQyxhQUFLLEVBQUUsZUFBOUI7QUFBK0NDLGlCQUFTLEVBQUUsdUJBQTFEO0FBQW1GQyxjQUFNLEVBQUUsS0FBM0Y7QUFBa0dDLGFBQUssRUFBRSxLQUF6RztBQUFnSEMsZ0JBQVEsRUFBRSxPQUExSDtBQUFtSUMsaUJBQVMsRUFBRSxPQUE5STtBQUF1SkMsZ0JBQVEsRUFBRSxPQUFqSztBQUEwS0MsaUJBQVMsRUFBRSxPQUFyTDtBQUE4TEMsdUJBQWUsRUFBRWhCLDZGQUEvTTtBQUErUGlCLG9CQUFZLEVBQUUsQ0FBN1E7QUFBZ1JDLGdCQUFRLEVBQUUsUUFBMVI7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S0FBRCxFQUFTO0FBQ3RILHdCQUFRQSxLQUFSO0FBQ0ksdUJBQUssQ0FBTDtBQUNJckQsK0VBQUEsQ0FBYSxVQUFiLEVBQXlCLFNBQXpCO0FBQXFDOztBQUN6Qyx1QkFBSyxDQUFMO0FBQ0lBLCtFQUFBLENBQWEsVUFBYixFQUF5QixVQUF6QjtBQUFzQztBQUo5QztBQU1IO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdDUjtBQUFBLFNBQVcsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCSjtBQUFBLE9BQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUF3Rkg7O0dBNUZRSCxZOztLQUFBQSxZO0FBK0ZUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzOGZiZTcxYTk4ZmYyY2E4Y2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiXHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIlxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uL2ljb25cIlxyXG5pbXBvcnQgeyBBY2NlbnRPcHRpb24gfSBmcm9tIFwiLi9hY2NlbnRvcHRpb25cIlxyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuL2NoZWNrYm94XCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL3BhZ2VcIlxyXG5pbXBvcnQgeyBSYWRpb1NlbGVjdGlvbiB9IGZyb20gXCIuL3JhZGlvc2VsZWN0aW9uXCJcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gXCIuL3NlY3Rpb25cIlxyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tIFwiLi90YWJidXR0b25cIlxyXG5cclxuXHJcbmVudW0gUGFnZVR5cGVzIHtcclxuICAgIEFjY291bnQsXHJcbiAgICBBcHBlYXJhbmNlLFxyXG4gICAgUHJpdmFjeSxcclxuICAgIFNlc3Npb25zLFxyXG4gICAgTGFuZ3VhZ2UsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTZXR0aW5nc1BhZ2UocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xyXG4gICAgY29uc3Qgc3RyaW5ncyA9IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5zdHJpbmdzLnNldHRpbmdzcGFnZVxyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8UGFnZVR5cGVzPihQYWdlVHlwZXMuQWNjb3VudClcclxuXHJcbiAgICByZXR1cm4gPFJlYWN0TW9kYWwgaXNPcGVuID0ge3Byb3BzLmlzT3Blbn0gY2xvc2VUaW1lb3V0TVM9ezUwMH0gb25BZnRlckNsb3NlPXsoKT0+e319IGFyaWFIaWRlQXBwPXtmYWxzZX0gc3R5bGU9e3tjb250ZW50OiB7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgaW5zZXQ6IFwiNTAlIDAlIDAlIDUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsIGhlaWdodDogXCI1MCVcIiwgd2lkdGg6IFwiNTAlXCIsIG1heFdpZHRoOiAnNjAwcHgnLCBtYXhIZWlnaHQ6ICc0MDBweCcsIG1pbldpZHRoOiAnMzUwcHgnLCBtaW5IZWlnaHQ6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSwgYm9yZGVyUmFkaXVzOiA4LCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGJvcmRlcjpcIm5vbmVcIn0sIG92ZXJsYXk6IHtwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMCwgYmFja2dyb3VuZENvbG9yOiBcInJnYigwLCAwLCAwLCAwKVwifX19PlxyXG4gICAgICAgIDxkaXYga2V5PVwidG9wYmFyXCIgc3R5bGU9e3sgdXNlclNlbGVjdDogJ25vbmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZzogMTAsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBib3JkZXJCb3R0b206IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JRdWF0ZXJuYXJ5fWAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGZvbnRTaXplOiA0MCB9fT57c3RyaW5ncy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0b3BiYXJSaWdodFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PjxJY29uIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xyXG4gICAgICAgICAgICB9fSB0eXBlPVwiY2xvc2VcIj48L0ljb24+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBrZXk9XCJib2R5XCIgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OlwiZmxleFwiLCBvdmVyZmxvdzpcImhpZGRlblwifX0+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwic2lkZWJhclwiIHN0eWxlPXt7IG1pbldpZHRoOiAxNTAsIHdpZHRoOiAxNTAsIHBhZGRpbmc6IDUsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA4LCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSwgYm9yZGVyUmlnaHQ6IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgezw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuQWNjb3VudH0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQWNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmFjY291bnR9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuQXBwZWFyYW5jZX0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQXBwZWFyYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmFwcGVhcmFuY2V9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuUHJpdmFjeX0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuUHJpdmFjeSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLnByaXZhY3l9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuU2Vzc2lvbnN9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLlNlc3Npb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMuc2Vzc2lvbnN9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMubGFuZ3VhZ2V9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGtleSA9IFwiY29udGVudENvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuQWNjb3VudH0gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMuYWNjb3VudC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PjxzcGFuPntzdHJpbmdzLnNlY3Rpb25zLmFjY291bnQudXNlcm5hbWV9Ojwvc3Bhbj48c3BhbiBzdHlsZT17e21hcmdpbjogXCIwcHggNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIG1heFdpZHRoOiAxMjAsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wifX0+UGhvdG9wY29weTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBtYXJnaW46IDAsIGJvcmRlcjogXCJub25lXCIsIGN1cnNvcjpcInBvaW50ZXJcIiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JJbnZlcnRlZCwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYWNjZW50Q29sb3J9fT5FZGl0PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5BcHBlYXJhbmNlfSBjdXJyZW50PXtwYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMudGhlbWUudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvU2VsZWN0aW9uIGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy50aGVtZS5saWdodE1vZGUsIHN0cmluZ3Muc2VjdGlvbnMudGhlbWUuZGFya01vZGVdfSBkZWZhdWx0PXsxfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcInRoZW1lXCIsIFwibGlnaHRNb2RlXCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwidGhlbWVcIiwgXCJkYXJrTW9kZVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjY2VudENvbG9yLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwib3JhbmdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cInllbGxvd1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCIjMDBGRjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cIiM1YWI3ZmFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwicHVycGxlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRZb3VUdWJlLCBzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy5lbWJlZFR3aXRjaFN0cmVhbXMsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkVHdpdGNoTGl2ZUNoYXQsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkU2NyYXRjaCwgc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRDb2RlRG90T3JnXX0gZGVmYXVsdD17ezA6dHJ1ZSwxOnRydWUsMjp0cnVlfX0gdXBkYXRlZD17KCk9Pnt9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5ibG9ja2VkVXNlcnMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5TZXNzaW9uc30gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjdGl2ZVNlc3Npb25zLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tib3JkZXJSYWRpdXM6IDQsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IDQsIGJveFNpemluZzogXCJib3JkZXItYm94XCIsIGJvcmRlcjpcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvckludmVydGVkfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3Muc2VjdGlvbnMuYWN0aXZlU2Vzc2lvbnMuc2lnbk91dEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9TZWxlY3Rpb24gaXRlbXM9e1tzdHJpbmdzLnNlY3Rpb25zLmxhbmd1YWdlLmVuZ2xpc2gsIHN0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UucmV0YXJkZWRdfSBkZWZhdWx0PXswfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcImxhbmd1YWdlXCIsIFwiZW5nbGlzaFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwibGFuZ3VhZ2VcIiwgXCJyZXRhcmRlZFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3RNb2RhbD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7U2V0dGluZ3NQYWdlLCBQYWdlVHlwZXN9Il0sInNvdXJjZVJvb3QiOiIifQ==