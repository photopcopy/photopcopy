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
/* harmony import */ var C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./src/components/icon.tsx");
/* harmony import */ var _accentoption__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accentoption */ "./src/components/settingspage/accentoption.tsx");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox */ "./src/components/settingspage/checkbox.tsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page */ "./src/components/settingspage/page.tsx");
/* harmony import */ var _radioselection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radioselection */ "./src/components/settingspage/radioselection.tsx");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section */ "./src/components/settingspage/section.tsx");
/* harmony import */ var _tabbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabbutton */ "./src/components/settingspage/tabbutton.tsx");
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

  var _content;

  var strings = _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.strings.settingspage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(PageTypes.Account),
      page = _useState[0],
      setPage = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
    isOpen: props.isOpen,
    closeTimeoutMS: 500,
    onAfterClose: function onAfterClose() {},
    ariaHideApp: false,
    style: {
      content: (_content = {
        position: "absolute",
        inset: "50% 0% 0% 50%",
        width: 300,
        height: 200,
        transform: "translate(-50%, -50%)"
      }, (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "height", "50%"), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "width", "50%"), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "maxWidth", '600px'), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "maxHeight", '400px'), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "minWidth", '350px'), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "minHeight", '200px'), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "backgroundColor", _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColorSecondary), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "borderRadius", 8), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "overflow", 'hidden'), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "display", 'flex'), (0,C_Users_infin_Desktop_photopcopy_photopcopy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_content, "flexDirection", 'column'), _content),
      overlay: {
        position: "fixed",
        inset: 0
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
        backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColorTertiary,
        borderBottom: "solid ".concat(_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColorQuaternary)
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_5__.Icon, {
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
          backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColorQuaternary,
          borderRight: "solid ".concat(_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor)
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_11__.TabButton, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_11__.TabButton, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_11__.TabButton, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_11__.TabButton, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_11__.TabButton, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_8__.Page, {
          self: PageTypes.Account,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_10__.Section, {
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
                  color: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColorInverted,
                  backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.accentColor
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_8__.Page, {
          self: PageTypes.Appearance,
          current: page,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_10__.Section, {
            title: strings.sections.theme.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radioselection__WEBPACK_IMPORTED_MODULE_9__.RadioSelection, {
              items: [strings.sections.theme.lightMode, strings.sections.theme.darkMode],
              "default": 1,
              updated: function updated(value) {
                switch (value) {
                  case 0:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.set("theme", "lightMode");
                    break;

                  case 1:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.set("theme", "darkMode");
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_10__.Section, {
            title: strings.sections.accentColor.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_6__.AccentOption, {
              color: "red"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_6__.AccentOption, {
              color: "orange"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_6__.AccentOption, {
              color: "yellow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_6__.AccentOption, {
              color: "#00FF00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_6__.AccentOption, {
              color: "#5ab7fa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_6__.AccentOption, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_10__.Section, {
            title: strings.sections.embeds.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: 12,
                color: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColorSecondary
              },
              children: strings.sections.embeds.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_8__.Page, {
          self: PageTypes.Privacy,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_10__.Section, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_8__.Page, {
          self: PageTypes.Sessions,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_10__.Section, {
            title: strings.sections.activeSessions.title,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              style: {
                borderRadius: 4,
                backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.accentColor,
                width: "100%",
                padding: 4,
                boxSizing: "border-box",
                border: "none",
                cursor: "pointer",
                color: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColorInverted
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_8__.Page, {
          self: PageTypes.Language,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_10__.Section, {
            title: strings.sections.language.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: 12,
                color: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColorSecondary
              },
              children: strings.sections.language.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radioselection__WEBPACK_IMPORTED_MODULE_9__.RadioSelection, {
              items: [strings.sections.language.english, strings.sections.language.retarded],
              "default": 0,
              updated: function updated(value) {
                switch (value) {
                  case 0:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.set("language", "english");
                    break;

                  case 1:
                    _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.set("language", "retarded");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZS50c3giXSwibmFtZXMiOlsiUGFnZVR5cGVzIiwiU2V0dGluZ3NQYWdlIiwicHJvcHMiLCJzdHJpbmdzIiwiU2V0dGluZ3MiLCJ1c2VTdGF0ZSIsIkFjY291bnQiLCJwYWdlIiwic2V0UGFnZSIsImlzT3BlbiIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImluc2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJvdmVybGF5IiwidXNlclNlbGVjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwidGl0bGUiLCJvblJlcXVlc3RDbG9zZSIsIm92ZXJmbG93IiwibWluV2lkdGgiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclJpZ2h0IiwidGFicyIsImFjY291bnQiLCJBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsIlByaXZhY3kiLCJwcml2YWN5IiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZWN0aW9ucyIsInVzZXJuYW1lIiwibWFyZ2luIiwibWF4V2lkdGgiLCJ0ZXh0T3ZlcmZsb3ciLCJib3JkZXIiLCJjdXJzb3IiLCJjb2xvciIsImFjY2VudENvbG9yIiwidGhlbWUiLCJsaWdodE1vZGUiLCJkYXJrTW9kZSIsInZhbHVlIiwiZW1iZWRzIiwidGV4dENvbG9yU2Vjb25kYXJ5IiwiZGVzY3JpcHRpb24iLCJlbWJlZFlvdVR1YmUiLCJlbWJlZFR3aXRjaFN0cmVhbXMiLCJlbWJlZFR3aXRjaExpdmVDaGF0IiwiZW1iZWRTY3JhdGNoIiwiZW1iZWRDb2RlRG90T3JnIiwiYmxvY2tlZFVzZXJzIiwiYWN0aXZlU2Vzc2lvbnMiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0Q29sb3JJbnZlcnRlZCIs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QTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdDUjtBQUFBLFNBQVcsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCSjtBQUFBLE9BQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUF3Rkg7O0dBNUZRSCxZOztLQUFBQSxZO0FBK0ZUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjZGUyNmM3MTU4MzdjZmQxMDc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiXHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIlxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uL2ljb25cIlxyXG5pbXBvcnQgeyBBY2NlbnRPcHRpb24gfSBmcm9tIFwiLi9hY2NlbnRvcHRpb25cIlxyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuL2NoZWNrYm94XCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL3BhZ2VcIlxyXG5pbXBvcnQgeyBSYWRpb1NlbGVjdGlvbiB9IGZyb20gXCIuL3JhZGlvc2VsZWN0aW9uXCJcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gXCIuL3NlY3Rpb25cIlxyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tIFwiLi90YWJidXR0b25cIlxyXG5cclxuXHJcbmVudW0gUGFnZVR5cGVzIHtcclxuICAgIEFjY291bnQsXHJcbiAgICBBcHBlYXJhbmNlLFxyXG4gICAgUHJpdmFjeSxcclxuICAgIFNlc3Npb25zLFxyXG4gICAgTGFuZ3VhZ2UsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTZXR0aW5nc1BhZ2UocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xyXG4gICAgY29uc3Qgc3RyaW5ncyA9IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5zdHJpbmdzLnNldHRpbmdzcGFnZVxyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8UGFnZVR5cGVzPihQYWdlVHlwZXMuQWNjb3VudClcclxuXHJcbiAgICByZXR1cm4gPFJlYWN0TW9kYWwgaXNPcGVuID0ge3Byb3BzLmlzT3Blbn0gY2xvc2VUaW1lb3V0TVM9ezUwMH0gb25BZnRlckNsb3NlPXsoKT0+e319IGFyaWFIaWRlQXBwPXtmYWxzZX0gc3R5bGU9e3tjb250ZW50OiB7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgaW5zZXQ6IFwiNTAlIDAlIDAlIDUwJVwiLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMCwgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiwgaGVpZ2h0OiBcIjUwJVwiLCB3aWR0aDogXCI1MCVcIiwgbWF4V2lkdGg6ICc2MDBweCcsIG1heEhlaWdodDogJzQwMHB4JywgbWluV2lkdGg6ICczNTBweCcsIG1pbkhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5LCBib3JkZXJSYWRpdXM6IDgsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ30sIG92ZXJsYXk6IHtwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMH19fT5cclxuICAgICAgICA8ZGl2IGtleT1cInRvcGJhclwiIHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmc6IDEwLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSwgYm9yZGVyQm90dG9tOiBgc29saWQgJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeX1gIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBmb250U2l6ZTogNDAgfX0+e3N0cmluZ3MudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwidG9wYmFyUmlnaHRcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT48SWNvbiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICAgICAgfX0gdHlwZT1cImNsb3NlXCI+PC9JY29uPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYga2V5PVwiYm9keVwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTpcImZsZXhcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGtleT1cInNpZGViYXJcIiBzdHlsZT17eyBtaW5XaWR0aDogMTUwLCB3aWR0aDogMTUwLCBwYWRkaW5nOiA1LCBib3JkZXJUb3BSaWdodFJhZGl1czogOCwgaGVpZ2h0OiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclF1YXRlcm5hcnksIGJvcmRlclJpZ2h0OiBgc29saWQgJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgIHs8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkFjY291bnR9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkFjY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5hY2NvdW50fTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkFwcGVhcmFuY2V9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkFwcGVhcmFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5hcHBlYXJhbmNlfTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLlByaXZhY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5wcml2YWN5fTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLlNlc3Npb25zfSBjdXJyZW50PXtwYWdlfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKFBhZ2VUeXBlcy5TZXNzaW9ucylcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLnNlc3Npb25zfTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkxhbmd1YWdlfSBjdXJyZW50PXtwYWdlfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKFBhZ2VUeXBlcy5MYW5ndWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmxhbmd1YWdlfTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBrZXkgPSBcImNvbnRlbnRDb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLkFjY291bnR9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjY291bnQudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT48c3Bhbj57c3RyaW5ncy5zZWN0aW9ucy5hY2NvdW50LnVzZXJuYW1lfTo8L3NwYW4+PHNwYW4gc3R5bGU9e3ttYXJnaW46IFwiMHB4IDVweFwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBvdmVyZmxvdzpcImhpZGRlblwiLCBtYXhXaWR0aDogMTIwLCB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIn19PlBob3RvcGNvcHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luOiAwLCBib3JkZXI6IFwibm9uZVwiLCBjdXJzb3I6XCJwb2ludGVyXCIsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWQsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yfX0+RWRpdDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuQXBwZWFyYW5jZX0gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLnRoZW1lLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1NlbGVjdGlvbiBpdGVtcz17W3N0cmluZ3Muc2VjdGlvbnMudGhlbWUubGlnaHRNb2RlLCBzdHJpbmdzLnNlY3Rpb25zLnRoZW1lLmRhcmtNb2RlXX0gZGVmYXVsdD17MX0gdXBkYXRlZD17KHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5zZXQoXCJ0aGVtZVwiLCBcImxpZ2h0TW9kZVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcInRoZW1lXCIsIFwiZGFya01vZGVcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5hY2NlbnRDb2xvci50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwicmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cIm9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJ5ZWxsb3dcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwiIzAwRkYwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCIjNWFiN2ZhXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cInB1cnBsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yU2Vjb25kYXJ5fX0+e3N0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBpdGVtcz17W3N0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkWW91VHViZSwgc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRUd2l0Y2hTdHJlYW1zLCBzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy5lbWJlZFR3aXRjaExpdmVDaGF0LCBzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy5lbWJlZFNjcmF0Y2gsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkQ29kZURvdE9yZ119IGRlZmF1bHQ9e3swOnRydWUsMTp0cnVlLDI6dHJ1ZX19IHVwZGF0ZWQ9eygpPT57fX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5Qcml2YWN5fSBjdXJyZW50PXtwYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMuYmxvY2tlZFVzZXJzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRiYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuU2Vzc2lvbnN9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5hY3RpdmVTZXNzaW9ucy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA0LCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5hY2NlbnRDb2xvciwgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiA0LCBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLCBib3JkZXI6XCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGNvbG9yOlNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JJbnZlcnRlZH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLnNlY3Rpb25zLmFjdGl2ZVNlc3Npb25zLnNpZ25PdXRBbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLkxhbmd1YWdlfSBjdXJyZW50PXtwYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yU2Vjb25kYXJ5fX0+e3N0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvU2VsZWN0aW9uIGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS5lbmdsaXNoLCBzdHJpbmdzLnNlY3Rpb25zLmxhbmd1YWdlLnJldGFyZGVkXX0gZGVmYXVsdD17MH0gdXBkYXRlZD17KHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5zZXQoXCJsYW5ndWFnZVwiLCBcImVuZ2xpc2hcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcImxhbmd1YWdlXCIsIFwicmV0YXJkZWRcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0TW9kYWw+XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1NldHRpbmdzUGFnZSwgUGFnZVR5cGVzfSJdLCJzb3VyY2VSb290IjoiIn0=