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
        flexDirection: 'column'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZS50c3giXSwibmFtZXMiOlsiUGFnZVR5cGVzIiwiU2V0dGluZ3NQYWdlIiwicHJvcHMiLCJzdHJpbmdzIiwiU2V0dGluZ3MiLCJ1c2VTdGF0ZSIsIkFjY291bnQiLCJwYWdlIiwic2V0UGFnZSIsImlzT3BlbiIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImluc2V0IiwidHJhbnNmb3JtIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm92ZXJsYXkiLCJ1c2VyU2VsZWN0IiwiYWxpZ25JdGVtcyIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJmb250U2l6ZSIsInRpdGxlIiwib25SZXF1ZXN0Q2xvc2UiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclJpZ2h0IiwidGFicyIsImFjY291bnQiLCJBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsIlByaXZhY3kiLCJwcml2YWN5IiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZWN0aW9ucyIsInVzZXJuYW1lIiwibWFyZ2luIiwidGV4dE92ZXJmbG93IiwiYm9yZGVyIiwiY3Vyc29yIiwiY29sb3IiLCJhY2NlbnRDb2xvciIsInRoZW1lIiwibGlnaHRNb2RlIiwiZGFya01vZGUiLCJ2YWx1ZSIsImVtYmVkcyIsInRleHRDb2xvclNlY29uZGFyeSIsImRlc2NyaXB0aW9uIiwiZW1iZWRZb3VUdWJlIiwiZW1iZWRUd2l0Y2hTdHJlYW1zIiwiZW1iZWRUd2l0Y2hMaXZlQ2hhdCIsImVtYmVkU2NyYXRjaCIsImVtYmVkQ29kZURvdE9yZyIsImJsb2NrZWRVc2VycyIsImFjdGl2ZVNlc3Npb25zIiwidGV4dENvbG9ySW52ZXJ0ZWQiLCJzaWduT3V0QWxsIiwiZW5nbGlzaCIsInJldGFyZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBR0tBLFM7O1dBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0FBQUFBLFcsQ0FBQUEsUztBQUFBQSxXLENBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0FBQUFBLFcsQ0FBQUEsUztHQUFBQSxTLEtBQUFBLFM7O0FBU0wsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBeUU7QUFBQTs7QUFDckUsTUFBTUMsT0FBTyxHQUFHQyx5RkFBaEI7O0FBRHFFLGtCQUU3Q0MsK0NBQVEsQ0FBWUwsU0FBUyxDQUFDTSxPQUF0QixDQUZxQztBQUFBLE1BRTlEQyxJQUY4RDtBQUFBLE1BRXhEQyxPQUZ3RDs7QUFJckUsc0JBQU8sOERBQUMsb0RBQUQ7QUFBWSxVQUFNLEVBQUlOLEtBQUssQ0FBQ08sTUFBNUI7QUFBb0Msa0JBQWMsRUFBRSxHQUFwRDtBQUF5RCxnQkFBWSxFQUFFLHdCQUFJLENBQUUsQ0FBN0U7QUFBK0UsZUFBVyxFQUFFLEtBQTVGO0FBQW1HLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCQyxhQUFLLEVBQUUsZUFBOUI7QUFBK0NDLGlCQUFTLEVBQUUsdUJBQTFEO0FBQW1GQyxjQUFNLEVBQUUsS0FBM0Y7QUFBa0dDLGFBQUssRUFBRSxLQUF6RztBQUFnSEMsZ0JBQVEsRUFBRSxPQUExSDtBQUFtSUMsaUJBQVMsRUFBRSxPQUE5STtBQUF1SkMsZ0JBQVEsRUFBRSxPQUFqSztBQUEwS0MsaUJBQVMsRUFBRSxPQUFyTDtBQUE4TEMsdUJBQWUsRUFBRWhCLDZGQUEvTTtBQUErUGlCLG9CQUFZLEVBQUUsQ0FBN1E7QUFBZ1JDLGdCQUFRLEVBQUUsUUFBMVI7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QVI7QUFDSSx1QkFBSyxDQUFMO0FBQ0lyRCwrRUFBQSxDQUFhLFVBQWIsRUFBeUIsU0FBekI7QUFBcUM7O0FBQ3pDLHVCQUFLLENBQUw7QUFDSUEsK0VBQUEsQ0FBYSxVQUFiLEVBQXlCLFVBQXpCO0FBQXNDO0FBSjlDO0FBTUg7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0NSO0FBQUEsU0FBVyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKO0FBQUEsT0FBUyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXdGSDs7R0E1RlFILFk7O0tBQUFBLFk7QUErRlQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDkyNGZhYjY1YzQ1MDRjNDliYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCJcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiXHJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vaWNvblwiXHJcbmltcG9ydCB7IEFjY2VudE9wdGlvbiB9IGZyb20gXCIuL2FjY2VudG9wdGlvblwiXHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIi4vY2hlY2tib3hcIlxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vcGFnZVwiXHJcbmltcG9ydCB7IFJhZGlvU2VsZWN0aW9uIH0gZnJvbSBcIi4vcmFkaW9zZWxlY3Rpb25cIlxyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcIi4vc2VjdGlvblwiXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gXCIuL3RhYmJ1dHRvblwiXHJcblxyXG5cclxuZW51bSBQYWdlVHlwZXMge1xyXG4gICAgQWNjb3VudCxcclxuICAgIEFwcGVhcmFuY2UsXHJcbiAgICBQcml2YWN5LFxyXG4gICAgU2Vzc2lvbnMsXHJcbiAgICBMYW5ndWFnZSxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFNldHRpbmdzUGFnZShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XHJcbiAgICBjb25zdCBzdHJpbmdzID0gU2V0dGluZ3MuY3VycmVudFN0YXRlLnN0cmluZ3Muc2V0dGluZ3NwYWdlXHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxQYWdlVHlwZXM+KFBhZ2VUeXBlcy5BY2NvdW50KVxyXG5cclxuICAgIHJldHVybiA8UmVhY3RNb2RhbCBpc09wZW4gPSB7cHJvcHMuaXNPcGVufSBjbG9zZVRpbWVvdXRNUz17NTAwfSBvbkFmdGVyQ2xvc2U9eygpPT57fX0gYXJpYUhpZGVBcHA9e2ZhbHNlfSBzdHlsZT17e2NvbnRlbnQ6IHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBpbnNldDogXCI1MCUgMCUgMCUgNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiwgaGVpZ2h0OiBcIjUwJVwiLCB3aWR0aDogXCI1MCVcIiwgbWF4V2lkdGg6ICc2MDBweCcsIG1heEhlaWdodDogJzQwMHB4JywgbWluV2lkdGg6ICczNTBweCcsIG1pbkhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5LCBib3JkZXJSYWRpdXM6IDgsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ30sIG92ZXJsYXk6IHtwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMCwgYmFja2dyb3VuZENvbG9yOiBcInJnYigwLCAwLCAwLCAwKVwifX19PlxyXG4gICAgICAgIDxkaXYga2V5PVwidG9wYmFyXCIgc3R5bGU9e3sgdXNlclNlbGVjdDogJ25vbmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZzogMTAsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBib3JkZXJCb3R0b206IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JRdWF0ZXJuYXJ5fWAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGZvbnRTaXplOiA0MCB9fT57c3RyaW5ncy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0b3BiYXJSaWdodFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PjxJY29uIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xyXG4gICAgICAgICAgICB9fSB0eXBlPVwiY2xvc2VcIj48L0ljb24+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBrZXk9XCJib2R5XCIgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OlwiZmxleFwiLCBvdmVyZmxvdzpcImhpZGRlblwifX0+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwic2lkZWJhclwiIHN0eWxlPXt7IG1pbldpZHRoOiAxNTAsIHdpZHRoOiAxNTAsIHBhZGRpbmc6IDUsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA4LCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSwgYm9yZGVyUmlnaHQ6IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgezw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuQWNjb3VudH0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQWNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmFjY291bnR9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuQXBwZWFyYW5jZX0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQXBwZWFyYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmFwcGVhcmFuY2V9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuUHJpdmFjeX0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuUHJpdmFjeSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLnByaXZhY3l9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuU2Vzc2lvbnN9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLlNlc3Npb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMuc2Vzc2lvbnN9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMubGFuZ3VhZ2V9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGtleSA9IFwiY29udGVudENvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuQWNjb3VudH0gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMuYWNjb3VudC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PjxzcGFuPntzdHJpbmdzLnNlY3Rpb25zLmFjY291bnQudXNlcm5hbWV9Ojwvc3Bhbj48c3BhbiBzdHlsZT17e21hcmdpbjogXCIwcHggNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIG1heFdpZHRoOiAxMjAsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wifX0+UGhvdG9wY29weTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBtYXJnaW46IDAsIGJvcmRlcjogXCJub25lXCIsIGN1cnNvcjpcInBvaW50ZXJcIiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JJbnZlcnRlZCwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYWNjZW50Q29sb3J9fT5FZGl0PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5BcHBlYXJhbmNlfSBjdXJyZW50PXtwYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMudGhlbWUudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvU2VsZWN0aW9uIGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy50aGVtZS5saWdodE1vZGUsIHN0cmluZ3Muc2VjdGlvbnMudGhlbWUuZGFya01vZGVdfSBkZWZhdWx0PXsxfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcInRoZW1lXCIsIFwibGlnaHRNb2RlXCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwidGhlbWVcIiwgXCJkYXJrTW9kZVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjY2VudENvbG9yLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwib3JhbmdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cInllbGxvd1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCIjMDBGRjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cIiM1YWI3ZmFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwicHVycGxlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRZb3VUdWJlLCBzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy5lbWJlZFR3aXRjaFN0cmVhbXMsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkVHdpdGNoTGl2ZUNoYXQsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkU2NyYXRjaCwgc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRDb2RlRG90T3JnXX0gZGVmYXVsdD17ezA6dHJ1ZSwxOnRydWUsMjp0cnVlfX0gdXBkYXRlZD17KCk9Pnt9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5ibG9ja2VkVXNlcnMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5TZXNzaW9uc30gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjdGl2ZVNlc3Npb25zLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tib3JkZXJSYWRpdXM6IDQsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IDQsIGJveFNpemluZzogXCJib3JkZXItYm94XCIsIGJvcmRlcjpcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvckludmVydGVkfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3Muc2VjdGlvbnMuYWN0aXZlU2Vzc2lvbnMuc2lnbk91dEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9TZWxlY3Rpb24gaXRlbXM9e1tzdHJpbmdzLnNlY3Rpb25zLmxhbmd1YWdlLmVuZ2xpc2gsIHN0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UucmV0YXJkZWRdfSBkZWZhdWx0PXswfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcImxhbmd1YWdlXCIsIFwiZW5nbGlzaFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwibGFuZ3VhZ2VcIiwgXCJyZXRhcmRlZFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3RNb2RhbD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7U2V0dGluZ3NQYWdlLCBQYWdlVHlwZXN9Il0sInNvdXJjZVJvb3QiOiIifQ==