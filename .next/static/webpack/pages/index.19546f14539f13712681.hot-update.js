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
/* harmony import */ var _scripts_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts/settings */ "./src/scripts/settings.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./src/components/icon.tsx");
/* harmony import */ var _accentoption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accentoption */ "./src/components/settingspage/accentoption.tsx");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox */ "./src/components/settingspage/checkbox.tsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/components/settingspage/page.tsx");
/* harmony import */ var _radioselection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radioselection */ "./src/components/settingspage/radioselection.tsx");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section */ "./src/components/settingspage/section.tsx");
/* harmony import */ var _tabbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabbutton */ "./src/components/settingspage/tabbutton.tsx");
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

  var strings = _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.strings.settingspage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(PageTypes.Account),
      page = _useState[0],
      setPage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      closed = _useState2[0],
      setClosed = _useState2[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  props.getClosedSetter(function (value) {
    setClosed(value);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      opacity: closed ? 0 : 1,
      position: "absolute",
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%",
      height: "50%",
      width: "50%",
      maxWidth: '600px',
      maxHeight: '400px',
      minWidth: '350px',
      minHeight: '200px',
      backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorSecondary,
      borderRadius: 8,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'opacity .5s'
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
        backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorTertiary,
        borderBottom: "solid ".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorQuaternary)
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
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          "float": 'right'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          onClick: function onClick() {
            if (!closed) {
              props.onClosed();
              setClosed(true);
              setTimeout(function () {
                if (ref.current) {
                  //too lazy lmfao
                  ref.current.style.display = "none";
                }
              }, 500);
            }
          },
          type: "close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 59
        }, this)
      }, "topbarRight", false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, "topbar", true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
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
          backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorQuaternary,
          borderRight: "solid ".concat(_scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColor)
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_9__.TabButton, {
            self: PageTypes.Account,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Account);
            },
            children: strings.tabs.account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_9__.TabButton, {
            self: PageTypes.Appearance,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Appearance);
            },
            children: strings.tabs.appearance
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_9__.TabButton, {
            self: PageTypes.Privacy,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Privacy);
            },
            children: strings.tabs.privacy
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_9__.TabButton, {
            self: PageTypes.Sessions,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Sessions);
            },
            children: strings.tabs.sessions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_9__.TabButton, {
            self: PageTypes.Language,
            current: page,
            onClick: function onClick() {
              setPage(PageTypes.Language);
            },
            children: strings.tabs.language
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, this)]
        }, void 0, true)
      }, "sidebar", false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          position: "relative",
          width: "100%",
          height: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_6__.Page, {
          self: PageTypes.Account,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_8__.Section, {
            title: strings.sections.account.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                display: "flex"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [strings.sections.account.username, ":"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 55
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
                lineNumber: 71,
                columnNumber: 104
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                style: {
                  "float": "right",
                  margin: 0,
                  border: "none",
                  cursor: "pointer",
                  color: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.textColorInverted,
                  backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.accentColor
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 20
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_6__.Page, {
          self: PageTypes.Appearance,
          current: page,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_8__.Section, {
            title: strings.sections.theme.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radioselection__WEBPACK_IMPORTED_MODULE_7__.RadioSelection, {
              items: [strings.sections.theme.lightMode, strings.sections.theme.darkMode],
              "default": 1,
              updated: function updated(value) {
                switch (value) {
                  case 0:
                    _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.set("theme", "lightMode");
                    break;

                  case 1:
                    _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.set("theme", "darkMode");
                    break;
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_8__.Section, {
            title: strings.sections.accentColor.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_4__.AccentOption, {
              color: "red"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_4__.AccentOption, {
              color: "orange"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_4__.AccentOption, {
              color: "yellow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_4__.AccentOption, {
              color: "#00FF00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_4__.AccentOption, {
              color: "#5ab7fa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_4__.AccentOption, {
              color: "purple"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_8__.Section, {
            title: strings.sections.embeds.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: 12,
                color: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.textColorSecondary
              },
              children: strings.sections.embeds.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
              items: [strings.sections.embeds.embedYouTube, strings.sections.embeds.embedTwitchStreams, strings.sections.embeds.embedTwitchLiveChat, strings.sections.embeds.embedScratch, strings.sections.embeds.embedCodeDotOrg],
              "default": {
                0: true,
                1: true,
                2: true
              },
              updated: function updated() {}
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_6__.Page, {
          self: PageTypes.Privacy,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_8__.Section, {
            title: strings.sections.blockedUsers.title,
            children: "tba"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_6__.Page, {
          self: PageTypes.Sessions,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_8__.Section, {
            title: strings.sections.activeSessions.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              style: {
                borderRadius: 4,
                backgroundColor: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.accentColor,
                width: "100%",
                padding: 4,
                boxSizing: "border-box",
                border: "none",
                cursor: "pointer",
                color: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.textColorInverted
              },
              children: strings.sections.activeSessions.signOutAll
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_6__.Page, {
          self: PageTypes.Language,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_8__.Section, {
            title: strings.sections.language.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: 12,
                color: _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.textColorSecondary
              },
              children: strings.sections.language.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radioselection__WEBPACK_IMPORTED_MODULE_7__.RadioSelection, {
              items: [strings.sections.language.english, strings.sections.language.retarded],
              "default": 0,
              updated: function updated(value) {
                switch (value) {
                  case 0:
                    _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.set("language", "english");
                    break;

                  case 1:
                    _scripts_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.set("language", "retarded");
                    break;
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, this)]
      }, "contentContainer", true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, "body", true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }, this)]
  }, "settingsMenu", true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 12
  }, this);
}

_s(SettingsPage, "zz2obwZrcA/c04169zf8Jqi9vss=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZS50c3giXSwibmFtZXMiOlsiUGFnZVR5cGVzIiwiU2V0dGluZ3NQYWdlIiwicHJvcHMiLCJzdHJpbmdzIiwiU2V0dGluZ3MiLCJ1c2VTdGF0ZSIsIkFjY291bnQiLCJwYWdlIiwic2V0UGFnZSIsImNsb3NlZCIsInNldENsb3NlZCIsInJlZiIsInVzZVJlZiIsImdldENsb3NlZFNldHRlciIsInZhbHVlIiwib3BhY2l0eSIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwibGVmdCIsInRvcCIsImhlaWdodCIsIndpZHRoIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0cmFuc2l0aW9uIiwidXNlclNlbGVjdCIsImFsaWduSXRlbXMiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJ0aXRsZSIsIm9uQ2xvc2VkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJzdHlsZSIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyUmlnaHQiLCJ0YWJzIiwiYWNjb3VudCIsIkFwcGVhcmFuY2UiLCJhcHBlYXJhbmNlIiwiUHJpdmFjeSIsInByaXZhY3kiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNlY3Rpb25zIiwidXNlcm5hbWUiLCJtYXJnaW4iLCJ0ZXh0T3ZlcmZsb3ciLCJib3JkZXIiLCJjdXJzb3IiLCJjb2xvciIsImFjY2VudENvbG9yIiwidGhlbWUiLCJsaWdodE1vZGUiLCJkYXJrTW9kZSIsImVtYmVkcyIsInRleHRDb2xvclNlY29uZGFyeSIsImRlc2NyaXB0aW9uIiwiZW1iZWRZb3VUdWJlIiwiZW1iZWRUd2l0Y2hTdHJlYW1zIiwiZW1iZWRUd2l0Y2hMaXZlQ2hhdCIsImVtYmVkU2NyYXRjaCIsImVtYmVkQ29kZURvdE9yZyIsImJsb2NrZWRVc2VycyIsImFjdGl2ZVNlc3Npb25zIiwidGV4dENvbG9ySW52ZXJ0ZWQiLCJzaWduT3V0QWxsIiwiZW5nbGlzaCIsInJldGFyZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFHS0EsUzs7V0FBQUEsUztBQUFBQSxXLENBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0FBQUFBLFcsQ0FBQUEsUztBQUFBQSxXLENBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0dBQUFBLFMsS0FBQUEsUzs7QUFTTCxTQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2RztBQUFBOztBQUV6RyxNQUFNQyxPQUFPLEdBQUdDLHlGQUFoQjs7QUFGeUcsa0JBR2pGQywrQ0FBUSxDQUFZTCxTQUFTLENBQUNNLE9BQXRCLENBSHlFO0FBQUEsTUFHbEdDLElBSGtHO0FBQUEsTUFHNUZDLE9BSDRGOztBQUFBLG1CQUk3RUgsK0NBQVEsQ0FBQyxJQUFELENBSnFFO0FBQUEsTUFJbEdJLE1BSmtHO0FBQUEsTUFJMUZDLFNBSjBGOztBQUt6RyxNQUFNQyxHQUFHLEdBQUdDLDZDQUFNLENBQWlCLElBQWpCLENBQWxCO0FBRUFWLE9BQUssQ0FBQ1csZUFBTixDQUFzQixVQUFDQyxLQUFELEVBQVM7QUFDM0JKLGFBQVMsQ0FBQ0ksS0FBRCxDQUFUO0FBQ0gsR0FGRDtBQUlBLHNCQUFPO0FBQXlCLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUVOLE1BQU0sR0FBQyxDQUFELEdBQUcsQ0FBcEI7QUFBdUJPLGNBQVEsRUFBRSxVQUFqQztBQUE2Q0MsZUFBUyxFQUFFLHVCQUF4RDtBQUFpRkMsVUFBSSxFQUFFLEtBQXZGO0FBQThGQyxTQUFHLEVBQUUsS0FBbkc7QUFBMEdDLFlBQU0sRUFBRSxLQUFs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LEVBQVg7QUFBZXdCLHFCQUFLLEVBQUV6RCx1RkFBd0MrRDtBQUE5RCxlQUFiO0FBQUEsd0JBQStFaEUsT0FBTyxDQUFDb0QsUUFBUixDQUFpQkQsUUFBakIsQ0FBMEJjO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSw4REFBQywyREFBRDtBQUFnQixtQkFBSyxFQUFFLENBQUNqRSxPQUFPLENBQUNvRCxRQUFSLENBQWlCRCxRQUFqQixDQUEwQndCLE9BQTNCLEVBQW9DM0UsT0FBTyxDQUFDb0QsUUFBUixDQUFpQkQsUUFBakIsQ0FBMEJ5QixRQUE5RCxDQUF2QjtBQUFnRyx5QkFBUyxDQUF6RztBQUE0RyxxQkFBTyxFQUFFLGlCQUFDakUsS0FBRCxFQUFTO0FBQ3RILHdCQUFRQSxLQUFSO0FBQ0ksdUJBQUssQ0FBTDtBQUNJViwrRUFBQSxDQUFhLFVBQWIsRUFBeUIsU0FBekI7QUFBcUM7O0FBQ3pDLHVCQUFLLENBQUw7QUFDSUEsK0VBQUEsQ0FBYSxVQUFiLEVBQXlCLFVBQXpCO0FBQXNDO0FBSjlDO0FBTUg7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0NSO0FBQUEsU0FBVyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKO0FBQUEsT0FBUyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQk87QUFBQSxLQUFTLGNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBa0dIOztHQTdHUUgsWTs7S0FBQUEsWTtBQStHVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOTU0NmYxNDUzOWYxMzcxMjY4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3NldHRpbmdzXCJcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9pY29uXCJcclxuaW1wb3J0IHsgQWNjZW50T3B0aW9uIH0gZnJvbSBcIi4vYWNjZW50b3B0aW9uXCJcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiLi9jaGVja2JveFwiXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9wYWdlXCJcclxuaW1wb3J0IHsgUmFkaW9TZWxlY3Rpb24gfSBmcm9tIFwiLi9yYWRpb3NlbGVjdGlvblwiXHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9zZWN0aW9uXCJcclxuaW1wb3J0IHsgVGFiQnV0dG9uIH0gZnJvbSBcIi4vdGFiYnV0dG9uXCJcclxuXHJcblxyXG5lbnVtIFBhZ2VUeXBlcyB7XHJcbiAgICBBY2NvdW50LFxyXG4gICAgQXBwZWFyYW5jZSxcclxuICAgIFByaXZhY3ksXHJcbiAgICBTZXNzaW9ucyxcclxuICAgIExhbmd1YWdlLFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gU2V0dGluZ3NQYWdlKHByb3BzOnsgZ2V0Q2xvc2VkU2V0dGVyOihjYWxsYmFjazogKHZhbHVlOiBib29sZWFuKT0+dm9pZCk9PnZvaWQsIG9uQ2xvc2VkOiAoKT0+dm9pZH0pIHtcclxuXHJcbiAgICBjb25zdCBzdHJpbmdzID0gU2V0dGluZ3MuY3VycmVudFN0YXRlLnN0cmluZ3Muc2V0dGluZ3NwYWdlXHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxQYWdlVHlwZXM+KFBhZ2VUeXBlcy5BY2NvdW50KVxyXG4gICAgY29uc3QgW2Nsb3NlZCwgc2V0Q2xvc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIFxyXG4gICAgcHJvcHMuZ2V0Q2xvc2VkU2V0dGVyKCh2YWx1ZSk9PntcclxuICAgICAgICBzZXRDbG9zZWQodmFsdWUpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGtleT1cInNldHRpbmdzTWVudVwiICBzdHlsZT17eyBvcGFjaXR5OiBjbG9zZWQ/MDoxLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsIGxlZnQ6IFwiNTAlXCIsIHRvcDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiLCB3aWR0aDogXCI1MCVcIiwgbWF4V2lkdGg6ICc2MDBweCcsIG1heEhlaWdodDogJzQwMHB4JywgbWluV2lkdGg6ICczNTBweCcsIG1pbkhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5LCBib3JkZXJSYWRpdXM6IDgsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgdHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyB9fT5cclxuICAgIDxkaXYga2V5PVwidG9wYmFyXCIgc3R5bGU9e3sgdXNlclNlbGVjdDogJ25vbmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZzogMTAsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBib3JkZXJCb3R0b206IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JRdWF0ZXJuYXJ5fWAgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZm9udFNpemU6IDQwIH19PntzdHJpbmdzLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYga2V5PVwidG9wYmFyUmlnaHRcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT48SWNvbiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICBpZiAoIWNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25DbG9zZWQoKTtcclxuICAgICAgICAgICAgICAgIHNldENsb3NlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RvbyBsYXp5IGxtZmFvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fSB0eXBlPVwiY2xvc2VcIj48L0ljb24+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYga2V5PVwiYm9keVwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTpcImZsZXhcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19PlxyXG4gICAgICAgIDxkaXYga2V5PVwic2lkZWJhclwiIHN0eWxlPXt7IG1pbldpZHRoOiAxNTAsIHdpZHRoOiAxNTAsIHBhZGRpbmc6IDUsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA4LCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSwgYm9yZGVyUmlnaHQ6IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9YH19PlxyXG4gICAgICAgICAgICB7PD5cclxuICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkFjY291bnR9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQWNjb3VudClcclxuICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMuYWNjb3VudH08L1RhYkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkFwcGVhcmFuY2V9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQXBwZWFyYW5jZSlcclxuICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMuYXBwZWFyYW5jZX08L1RhYkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuUHJpdmFjeSlcclxuICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMucHJpdmFjeX08L1RhYkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLlNlc3Npb25zfSBjdXJyZW50PXtwYWdlfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLlNlc3Npb25zKVxyXG4gICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5zZXNzaW9uc308L1RhYkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkxhbmd1YWdlfSBjdXJyZW50PXtwYWdlfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5sYW5ndWFnZX08L1RhYkJ1dHRvbj5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYga2V5ID0gXCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLkFjY291bnR9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMuYWNjb3VudC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+PHNwYW4+e3N0cmluZ3Muc2VjdGlvbnMuYWNjb3VudC51c2VybmFtZX06PC9zcGFuPjxzcGFuIHN0eWxlPXt7bWFyZ2luOiBcIjBweCA1cHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgbWF4V2lkdGg6IDEyMCwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCJ9fT5QaG90b3Bjb3B5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luOiAwLCBib3JkZXI6IFwibm9uZVwiLCBjdXJzb3I6XCJwb2ludGVyXCIsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWQsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yfX0+RWRpdDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5BcHBlYXJhbmNlfSBjdXJyZW50PXtwYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy50aGVtZS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1NlbGVjdGlvbiBpdGVtcz17W3N0cmluZ3Muc2VjdGlvbnMudGhlbWUubGlnaHRNb2RlLCBzdHJpbmdzLnNlY3Rpb25zLnRoZW1lLmRhcmtNb2RlXX0gZGVmYXVsdD17MX0gdXBkYXRlZD17KHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5zZXQoXCJ0aGVtZVwiLCBcImxpZ2h0TW9kZVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5zZXQoXCJ0aGVtZVwiLCBcImRhcmtNb2RlXCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5hY2NlbnRDb2xvci50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJvcmFuZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJ5ZWxsb3dcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCIjMDBGRjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwiIzVhYjdmYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cInB1cnBsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yU2Vjb25kYXJ5fX0+e3N0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRZb3VUdWJlLCBzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy5lbWJlZFR3aXRjaFN0cmVhbXMsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkVHdpdGNoTGl2ZUNoYXQsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkU2NyYXRjaCwgc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRDb2RlRG90T3JnXX0gZGVmYXVsdD17ezA6dHJ1ZSwxOnRydWUsMjp0cnVlfX0gdXBkYXRlZD17KCk9Pnt9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmJsb2NrZWRVc2Vycy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuU2Vzc2lvbnN9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjdGl2ZVNlc3Npb25zLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2JvcmRlclJhZGl1czogNCwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYWNjZW50Q29sb3IsIHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZzogNCwgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiwgYm9yZGVyOlwibm9uZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBjb2xvcjpTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLnNlY3Rpb25zLmFjdGl2ZVNlc3Npb25zLnNpZ25PdXRBbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmxhbmd1YWdlLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yU2Vjb25kYXJ5fX0+e3N0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9TZWxlY3Rpb24gaXRlbXM9e1tzdHJpbmdzLnNlY3Rpb25zLmxhbmd1YWdlLmVuZ2xpc2gsIHN0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UucmV0YXJkZWRdfSBkZWZhdWx0PXswfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcImxhbmd1YWdlXCIsIFwiZW5nbGlzaFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcImxhbmd1YWdlXCIsIFwicmV0YXJkZWRcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IHtTZXR0aW5nc1BhZ2UsIFBhZ2VUeXBlc30iXSwic291cmNlUm9vdCI6IiJ9