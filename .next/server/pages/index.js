(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/icon.tsx":
/*!*********************************!*\
  !*** ./src/components/icon.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\icon.tsx";


function Icon(props) {
  let inner;

  switch (props.type) {
    case "close":
      inner = "x";
      break;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: props.onClick,
    style: {
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: 30,
      backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColor,
      border: "none",
      borderRadius: 8,
      color: _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.textColor
    },
    children: inner
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}



/***/ }),

/***/ "./src/components/maincontent/post.tsx":
/*!*********************************************!*\
  !*** ./src/components/maincontent/post.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/post.module.css */ "./src/styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\maincontent\\post.tsx";



function Post(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorTertiary,
      borderRadius: 8,
      minHeight: 100,
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        minWidth: 300,
        width: "70%",
        maxWidth: 500
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          margin: 6,
          width: "calc(100% - 12px)",
          borderRadius: 4,
          padding: 4,
          boxSizing: "border-box",
          height: 40,
          display: "flex",
          alignItems: "center",
          backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorSecondary
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./assets/DefaultProfilePic.svg",
          style: {
            height: "100%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            fontSize: 25,
            marginLeft: 5
          },
          children: "Developer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, this)]
      }, "postDataContainer", true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, this)
    }, "contentContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_2___default().post),
      style: {
        width: "70%",
        margin: 6,
        backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorSecondary,
        borderRadius: 8
      },
      children: "THIS"
    }, "chatContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this)]
  }, props.postId, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}



/***/ }),

/***/ "./src/components/settingspage/accentoption.tsx":
/*!******************************************************!*\
  !*** ./src/components/settingspage/accentoption.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccentOption": function() { return /* binding */ AccentOption; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\accentoption.tsx";


function AccentOption(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    style: {
      backgroundColor: props.color,
      width: 30,
      height: 30,
      margin: 2,
      cursor: "pointer"
    },
    onClick: () => {
      _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.set("accent", props.color);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}



/***/ }),

/***/ "./src/components/settingspage/checkbox.tsx":
/*!**************************************************!*\
  !*** ./src/components/settingspage/checkbox.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": function() { return /* binding */ Checkbox; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\checkbox.tsx";



function Checkbox(props) {
  const map = {};
  props.items.forEach((_, index) => {
    map[index] = props.default[index] || false;
  });
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(map);
  const {
    0: nonce,
    1: update
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: props.items.map((value, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          marginTop: 4
        },
        title: value,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => {
            current[index] = !current[index];
            props.updated(current);
            update(nonce + 1);
          },
          style: {
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
            width: 30,
            height: 30,
            backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorSecondary
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              width: current[index] ? "calc(100% - 10px)" : "0%",
              height: current[index] ? "calc(100% - 10px)" : "0%",
              opacity: current[index] ? 1 : 0,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              transition: "opacity .2s, width .2s, height .2s",
              backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.accentColor
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%",
            position: "relative"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              overflow: "hidden",
              width: "calc(100% - 5px)",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 71
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 24
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, this);
}



/***/ }),

/***/ "./src/components/settingspage/page.tsx":
/*!**********************************************!*\
  !*** ./src/components/settingspage/page.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\page.tsx";


function Page(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "scroll",
    style: {
      pointerEvents: props.self === props.current ? "unset" : "none",
      opacity: props.self === props.current ? 1 : 0,
      transition: "opacity .3s",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      position: "absolute",
      padding: 8,
      overflow: "auto"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%",
        borderRadius: 8,
        padding: "0px 8px 8px 8px",
        backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorTertiary,
        boxSizing: "border-box"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%"
        },
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, this)
    }, "content", false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}



/***/ }),

/***/ "./src/components/settingspage/radioselection.tsx":
/*!********************************************************!*\
  !*** ./src/components/settingspage/radioselection.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioSelection": function() { return /* binding */ RadioSelection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\radioselection.tsx";



function RadioSelection(props) {
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: props.items.map((value, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          marginTop: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => {
            setCurrent(index);
            props.updated(index);
          },
          style: {
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
            width: 20,
            height: 20,
            padding: 5,
            backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorSecondary,
            borderRadius: "100%"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              borderRadius: "100%",
              width: current === index ? "calc(100% - 10px)" : "0%",
              height: current === index ? "calc(100% - 10px)" : "0%",
              opacity: current === index ? 1 : 0,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              transition: "opacity .2s, width .2s, height .2s",
              backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.accentColor
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%",
            position: "relative"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)"
            },
            children: value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 71
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 24
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}



/***/ }),

/***/ "./src/components/settingspage/section.tsx":
/*!*************************************************!*\
  !*** ./src/components/settingspage/section.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\section.tsx";


function Section(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      width: "100%",
      marginTop: 10,
      padding: 4,
      boxSizing: "border-box",
      backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.currentState.backgroundColorQuaternary,
      borderRadius: 8
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      style: {
        margin: "0px 0px 4px 0px"
      },
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}



/***/ }),

/***/ "./src/components/settingspage/settingspage.tsx":
/*!******************************************************!*\
  !*** ./src/components/settingspage/settingspage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; },
/* harmony export */   "PageTypes": function() { return /* binding */ PageTypes; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./src/components/icon.tsx");
/* harmony import */ var _accentoption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accentoption */ "./src/components/settingspage/accentoption.tsx");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox */ "./src/components/settingspage/checkbox.tsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/components/settingspage/page.tsx");
/* harmony import */ var _radioselection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radioselection */ "./src/components/settingspage/radioselection.tsx");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section */ "./src/components/settingspage/section.tsx");
/* harmony import */ var _tabbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabbutton */ "./src/components/settingspage/tabbutton.tsx");


var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\settingspage.tsx";










var PageTypes;

(function (PageTypes) {
  PageTypes[PageTypes["Account"] = 0] = "Account";
  PageTypes[PageTypes["Appearance"] = 1] = "Appearance";
  PageTypes[PageTypes["Privacy"] = 2] = "Privacy";
  PageTypes[PageTypes["Sessions"] = 3] = "Sessions";
  PageTypes[PageTypes["Language"] = 4] = "Language";
})(PageTypes || (PageTypes = {}));

function SettingsPage(props) {
  const strings = _modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.strings.settingspage;
  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(PageTypes.Account);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: props.isOpen,
    closeTimeoutMS: 500,
    onAfterClose: () => {},
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
        border: "none",
        padding: 0
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
        borderBottom: `solid ${_modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.backgroundColorQuaternary}`
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
          float: 'right'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {
          onClick: () => {
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
          borderRight: `solid ${_modules_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.currentState.backgroundColor}`
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabbutton__WEBPACK_IMPORTED_MODULE_10__.TabButton, {
            self: PageTypes.Account,
            current: page,
            onClick: () => {
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
            onClick: () => {
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
            onClick: () => {
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
            onClick: () => {
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
            onClick: () => {
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
                  float: "right",
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
              default: 1,
              updated: value => {
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
              default: {
                0: true,
                1: true,
                2: true
              },
              updated: () => {}
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
              default: 0,
              updated: value => {
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



/***/ }),

/***/ "./src/components/settingspage/tabbutton.tsx":
/*!***************************************************!*\
  !*** ./src/components/settingspage/tabbutton.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabButton": function() { return /* binding */ TabButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\settingspage\\tabbutton.tsx";



function TabButton(props) {
  const {
    0: isOver,
    1: updateIsOver
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: props.onClick,
    onMouseEnter: () => {
      updateIsOver(true);
    },
    onMouseLeave: () => {
      updateIsOver(false);
    },
    style: {
      cursor: props.self === props.current ? "unset" : "pointer",
      zIndex: isOver && props.self != props.current ? 1 : 0,
      position: "relative",
      boxShadow: isOver && props.self != props.current ? "0 8px 16px rgba(0,0,0,0.44)" : "",
      width: "100%",
      height: 30,
      fontSize: 20,
      borderRadius: 4,
      backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorSecondary,
      border: "none",
      color: props.self === props.current ? _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.accentColor : _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.textColor,
      textAlign: "left",
      transition: "box-shadow .5s, color .3s",
      marginBottom: 3 //			fontWeight: props.self===props.current?800:100,

    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}



/***/ }),

/***/ "./src/modules/popupmanager.tsx":
/*!**************************************!*\
  !*** ./src/modules/popupmanager.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupManager": function() { return /* binding */ PopupManager; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\modules\\popupmanager.tsx";
//i have no idea how it works but it just works


function PopupManager() {
  const [popups, setPopups] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [state] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
    popups,
    setPopups,
    record: {}
  });
  state.setPopups = setPopups;
  state.popups = popups;

  function AddPopup(key, isOpen, callback) {
    const obj = {
      open: isOpen,
      key: key,
      renderFunction: open => {
        return callback(() => {
          obj.open = false;
          state.setPopups([...state.popups]);
        }, open);
      }
    };
    state.record[key] = obj;
    state.setPopups([...state.popups, obj]);
  }

  function Render() {
    return popups.map(obj => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: obj.renderFunction(obj.open)
      }, obj.key, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 20
      }, this);
    });
  }

  function SetPopupState(key, open) {
    state.record[key].open = open;
    state.setPopups([...state.popups]);
  }

  return {
    Render,
    AddPopup,
    SetPopupState,
    shouldShowOverlay: !popups.every(popup => !popup.open)
  };
}



/***/ }),

/***/ "./src/modules/settings.ts":
/*!*********************************!*\
  !*** ./src/modules/settings.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
var _resources_localization_english_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _resources_localization_retarded_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": function() { return /* binding */ Settings; }
/* harmony export */ });
/* harmony import */ var _resources_localization_english_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/localization/english.json */ "./src/resources/localization/english.json");
/* harmony import */ var _resources_localization_retarded_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/localization/retarded.json */ "./src/resources/localization/retarded.json");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * middleman between stuff that changes settings and stuff that uses settings
 * it transform settings such as the theme into a series of "computed" settings (mainly styles), this way stuff is easier to tweak
 */
// i don't actually plan to add any languages, this is just for forward compatibility, retarded is just a test "language" to see if it works


const languages = {
  english: /*#__PURE__*/ (_resources_localization_english_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_resources_localization_english_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_resources_localization_english_json__WEBPACK_IMPORTED_MODULE_0__, 2))),
  retarded: /*#__PURE__*/ (_resources_localization_retarded_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_resources_localization_retarded_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_resources_localization_retarded_json__WEBPACK_IMPORTED_MODULE_1__, 2)))
};

class SettingsClass {
  set(prop, value, shouldUpdate) {
    this.setters[prop](this.currentState, value);
    this.update();
  }

  update() {
    if (this._update) {
      this._update();
    }
  }

  constructor(initialSettings) {
    _defineProperty(this, "_update", void 0);

    _defineProperty(this, "currentState", void 0);

    _defineProperty(this, "current", {
      theme: "darkMode",
      accent: "#5ab7fa",
      language: "english"
    });

    _defineProperty(this, "setters", {
      accent(currentState, accent) {
        currentState.accentColor = String(accent);
      },

      theme(currentState, theme) {
        switch (theme) {
          case "darkMode":
            currentState.backgroundColor = "#151617";
            currentState.textColor = "#FFFFFF";
            currentState.textColorSecondary = "#CCC";
            currentState.backgroundColorSecondary = "#2A2A37";
            currentState.backgroundColorTertiary = "#24242E";
            currentState.backgroundColorQuaternary = "#1F1F28";
            currentState.textColorInverted = "#000000";
            break;

          case "lightMode":
            currentState.backgroundColor = "#FFFFFF";
            currentState.textColor = "#000";
            currentState.textColorSecondary = "#333";
            currentState.backgroundColorSecondary = "#D9D9D9";
            currentState.backgroundColorTertiary = "#E3E3E3";
            currentState.backgroundColorQuaternary = "#EBEBEB";
            currentState.textColorInverted = "#FFFFFF";
            break;
        }
      },

      language(currentState, language) {
        currentState.strings = languages[language];
      }

    });

    this.currentState = {};

    for (const prop in this.current) {
      if (prop in initialSettings) {
        this.set(prop, initialSettings[prop], false);
      } else {
        this.set(prop, this.current[prop], false);
      }
    }

    this.update();
  }

}

_defineProperty(SettingsClass, "instance", new SettingsClass({}));

const Settings = SettingsClass.instance;


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/settings */ "./src/modules/settings.ts");
/* harmony import */ var _components_settingspage_settingspage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/settingspage/settingspage */ "./src/components/settingspage/settingspage.tsx");
/* harmony import */ var _components_maincontent_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/maincontent/post */ "./src/components/maincontent/post.tsx");
/* harmony import */ var _modules_popupmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/popupmanager */ "./src/modules/popupmanager.tsx");


var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\index.tsx";








function App() {
  const {
    0: nonce,
    1: update
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);

  _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings._update = () => {
    update(nonce + 1);
  }; //it counts up for every popup, and counts down everytime one is closed, that way you can have 0 to indicate that all popups are closed
  //im not sure if this could lead to a bug if the number is unexpectedly, but it works in theory


  const {
    Render: RenderPopups,
    AddPopup,
    SetPopupState,
    shouldShowOverlay
  } = (0,_modules_popupmanager__WEBPACK_IMPORTED_MODULE_7__.PopupManager)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    AddPopup("SettingsMenu", false, (onRequestClose, isOpen) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settingspage_settingspage__WEBPACK_IMPORTED_MODULE_5__.SettingsPage, {
        onRequestClose: onRequestClose,
        isOpen: isOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2805815117",
      dynamic: [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor],
      children: `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:${_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor};color:${_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor};font-family:'SF Mono','Roboto',sans-serif;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnFCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgQ29tcHV0ZWRTZXR0aW5ncyB9IGZyb20gJy4uL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3RhYmJ1dHRvbidcclxuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2V0dGluZ3NwYWdlJ1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluY29udGVudC9wb3N0J1xyXG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9tb2R1bGVzL3BvcHVwbWFuYWdlcidcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHRjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRTZXR0aW5ncy5fdXBkYXRlID0gKCk9PntcclxuXHRcdHVwZGF0ZShub25jZSsxKVxyXG5cdH07XHJcblxyXG5cdC8vaXQgY291bnRzIHVwIGZvciBldmVyeSBwb3B1cCwgYW5kIGNvdW50cyBkb3duIGV2ZXJ5dGltZSBvbmUgaXMgY2xvc2VkLCB0aGF0IHdheSB5b3UgY2FuIGhhdmUgMCB0byBpbmRpY2F0ZSB0aGF0IGFsbCBwb3B1cHMgYXJlIGNsb3NlZFxyXG5cdC8vaW0gbm90IHN1cmUgaWYgdGhpcyBjb3VsZCBsZWFkIHRvIGEgYnVnIGlmIHRoZSBudW1iZXIgaXMgdW5leHBlY3RlZGx5LCBidXQgaXQgd29ya3MgaW4gdGhlb3J5XHJcblx0XHJcblx0Y29uc3Qge1JlbmRlcjogUmVuZGVyUG9wdXBzLCBBZGRQb3B1cCwgU2V0UG9wdXBTdGF0ZSwgc2hvdWxkU2hvd092ZXJsYXl9ID0gUG9wdXBNYW5hZ2VyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+e1xyXG5cdFx0QWRkUG9wdXAoXCJTZXR0aW5nc01lbnVcIiwgZmFsc2UsIChvblJlcXVlc3RDbG9zZSwgaXNPcGVuKT0+e1xyXG5cdFx0XHRyZXR1cm4gPFNldHRpbmdzUGFnZVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuXHRcdFx0XHRpc09wZW49e2lzT3Blbn1cclxuXHRcdFx0Lz5cclxuXHRcdH0pXHJcblx0fSwgW10pXHJcblx0XHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cdFx0XHRcdGNvbG9yOiAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3J9O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0QGltcG9ydFxyXG5cdFx0XHR1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdE9oIGJhYnkgYSB0cmlwbGUhXHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8bm9zY3JpcHQ+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIHpJbmRleDogMTAwfX0+XHJcblx0XHRcdDxoMT5FbmFibGUgamF2YXNjcmlwdCByZXRhcmQuPC9oMT5cclxuXHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5oZW50YWkubmV0L2cvMzY0NjI0XCI+Q2xpY2sgbWUgZm9yIGEgc3VycHJpc2U8L2E+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5KdXN0IGtpZGRpbmcgZG9udCBjbGljayBpdCBsbWFvPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbm9zY3JpcHQ+XHJcblx0XHQ8ZGl2IGtleT1cIm1haW5Db250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG5cdFx0XHQ8ZGl2IGtleT1cImNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiAxMjAwLCBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSlcIiwgZGlzcGxheTpcImZsZXhcIn19PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhckxlZnRcIiBzdHlsZT17e3dpZHRoOiAyMDAsIG1pbldpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFBob3RvcGNvcHlcclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PntcclxuXHRcdFx0XHRcdFx0U2V0UG9wdXBTdGF0ZShcIlNldHRpbmdzTWVudVwiLCB0cnVlKVxyXG5cdFx0XHRcdFx0fX0+T3BlbiBTZXR0aW5nczwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwicG9zdENvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVqXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhclJpZ2h0XCIgc3R5bGU9e3ttaW5XaWR0aDogMjAwLCB3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRSb2Jsb3ggQWQgR29lcyBoZXJlXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJmaXhlZFwiLCBwb2ludGVyRXZlbnRzOiBzaG91bGRTaG93T3ZlcmxheT9cInVuc2V0XCI6XCJub25lXCIsIGJhY2tkcm9wRmlsdGVyOiBzaG91bGRTaG93T3ZlcmxheT9cImJsdXIoNXB4KVwiOlwidW5zZXRcIiwgdHJhbnNpdGlvbjogXCJiYWNrZHJvcC1maWx0ZXIgLjVzXCJ9fS8+XHJcblx0XHR7UmVuZGVyUG9wdXBzKCl9XHJcblx0PC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0= */
/*@ sourceURL=C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\index.tsx */`
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
            onClick: () => {
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
        backdropFilter: shouldShowOverlay ? "blur(5px)" : "unset",
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

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/styles/post.module.css":
/*!************************************!*\
  !*** ./src/styles/post.module.css ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"post": "post_post__iBifv"
};


/***/ }),

/***/ "./src/resources/localization/english.json":
/*!*************************************************!*\
  !*** ./src/resources/localization/english.json ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"misc":{"edit":"Edit","tba":"To be added"},"settingspage":{"title":"Settings","tabs":{"account":"Account","appearance":"Appearance","privacy":"Privacy","sessions":"Sessions","language":"Language"},"sections":{"account":{"title":"Account","username":"Username","password":"Username"},"theme":{"title":"Theme","lightMode":"Light Mode","darkMode":"Dark Mode"},"accentColor":{"title":"Accent Color"},"embeds":{"title":"Embeds","description":"Embeds are from 3rd party sites - which could track you or slow down your browser.","embedYouTube":"Embed YouTube Videos","embedTwitchStreams":"Embed Twitch Streams","embedTwitchLiveChat":"Embed Twitch Live Chat","embedScratch":"Embed Scratch Games","embedCodeDotOrg":"Embed code.org Projects"},"blockedUsers":{"title":"Blocked Users"},"activeSessions":{"title":"Active Sessions","signOutAll":"Sign Out of All Sessions"},"language":{"title":"Language","description":"I don\'t plan to add support for other languages. This is just for forward compatibility.","english":"English","retarded":"Retarded"}}}}');

/***/ }),

/***/ "./src/resources/localization/retarded.json":
/*!**************************************************!*\
  !*** ./src/resources/localization/retarded.json ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"misc":{"edit":"Edit","tba":"To be added"},"settingspage":{"title":"Change Things","tabs":{"account":"Myself","appearance":"Look","privacy":"Secure","sessions":"Existences","language":"Language"},"sections":{"account":{"title":"Me","username":"Stupid","password":"Password"},"theme":{"title":"Look","lightMode":"White","darkMode":"Black"},"accentColor":{"title":"Skittles"},"embeds":{"title":"Squares","description":"Lots of squares below","embedYouTube":"The square at the top","embedTwitchStreams":"The square below the square at the top","embedTwitchLiveChat":"The square in the middle","embedScratch":"The square below the square in the middle","embedCodeDotOrg":"The Final Square"},"blockedUsers":{"title":"Go away"},"activeSessions":{"title":"History","signOutAll":"Clear search history"},"language":{"title":"Language","description":"I don\'t plan to add support for other languages. This is just for forward compatibility.","english":"English","retarded":"Retarded"}}}}');

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9jb21wb25lbnRzL21haW5jb250ZW50L3Bvc3QudHN4Iiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5nc3BhZ2UvYWNjZW50b3B0aW9uLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL2NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3BhZ2UudHN4Iiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5nc3BhZ2UvcmFkaW9zZWxlY3Rpb24udHN4Iiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzcGFnZS9zZXR0aW5nc3BhZ2UudHN4Iiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5nc3BhZ2UvdGFiYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL21vZHVsZXMvcG9wdXBtYW5hZ2VyLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL21vZHVsZXMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3Bob3RvcGNvcHkvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9waG90b3Bjb3B5L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9waG90b3Bjb3B5L2V4dGVybmFsIFwicmVhY3QtbW9kYWxcIiIsIndlYnBhY2s6Ly9waG90b3Bjb3B5L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJJY29uIiwicHJvcHMiLCJpbm5lciIsInR5cGUiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY3Vyc29yIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJTZXR0aW5ncyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwidGV4dENvbG9yIiwiUG9zdCIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5IiwibWFyZ2luTGVmdCIsIlBvc3RTdHlsZSIsInBvc3RJZCIsIkFjY2VudE9wdGlvbiIsIkNoZWNrYm94IiwibWFwIiwiaXRlbXMiLCJmb3JFYWNoIiwiXyIsImluZGV4IiwiZGVmYXVsdCIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJub25jZSIsInVwZGF0ZSIsInZhbHVlIiwibWFyZ2luVG9wIiwidXBkYXRlZCIsInBvc2l0aW9uIiwib3BhY2l0eSIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiYWNjZW50Q29sb3IiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJQYWdlIiwicG9pbnRlckV2ZW50cyIsInNlbGYiLCJmbGV4RGlyZWN0aW9uIiwiY2hpbGRyZW4iLCJSYWRpb1NlbGVjdGlvbiIsIlNlY3Rpb24iLCJ0aXRsZSIsIlBhZ2VUeXBlcyIsIlNldHRpbmdzUGFnZSIsInN0cmluZ3MiLCJwYWdlIiwic2V0UGFnZSIsIkFjY291bnQiLCJpc09wZW4iLCJjb250ZW50IiwiaW5zZXQiLCJtYXhIZWlnaHQiLCJvdmVybGF5IiwidXNlclNlbGVjdCIsImJvcmRlckJvdHRvbSIsImZsb2F0Iiwib25SZXF1ZXN0Q2xvc2UiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclJpZ2h0IiwidGFicyIsImFjY291bnQiLCJBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsIlByaXZhY3kiLCJwcml2YWN5IiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZWN0aW9ucyIsInVzZXJuYW1lIiwidGhlbWUiLCJsaWdodE1vZGUiLCJkYXJrTW9kZSIsImVtYmVkcyIsInRleHRDb2xvclNlY29uZGFyeSIsImRlc2NyaXB0aW9uIiwiZW1iZWRZb3VUdWJlIiwiZW1iZWRUd2l0Y2hTdHJlYW1zIiwiZW1iZWRUd2l0Y2hMaXZlQ2hhdCIsImVtYmVkU2NyYXRjaCIsImVtYmVkQ29kZURvdE9yZyIsImJsb2NrZWRVc2VycyIsImFjdGl2ZVNlc3Npb25zIiwidGV4dENvbG9ySW52ZXJ0ZWQiLCJzaWduT3V0QWxsIiwiZW5nbGlzaCIsInJldGFyZGVkIiwiVGFiQnV0dG9uIiwiaXNPdmVyIiwidXBkYXRlSXNPdmVyIiwiekluZGV4IiwiYm94U2hhZG93IiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiUG9wdXBNYW5hZ2VyIiwicG9wdXBzIiwic2V0UG9wdXBzIiwiUmVhY3QiLCJzdGF0ZSIsInJlY29yZCIsIkFkZFBvcHVwIiwia2V5IiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwicmVuZGVyRnVuY3Rpb24iLCJSZW5kZXIiLCJTZXRQb3B1cFN0YXRlIiwic2hvdWxkU2hvd092ZXJsYXkiLCJldmVyeSIsInBvcHVwIiwibGFuZ3VhZ2VzIiwiU2V0dGluZ3NDbGFzcyIsInNldCIsInByb3AiLCJzaG91bGRVcGRhdGUiLCJzZXR0ZXJzIiwiY3VycmVudFN0YXRlIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFNldHRpbmdzIiwiYWNjZW50IiwiU3RyaW5nIiwiYmFja2dyb3VuZENvbG9yVGVydGlhcnkiLCJiYWNrZ3JvdW5kQ29sb3JRdWF0ZXJuYXJ5IiwiaW5zdGFuY2UiLCJBcHAiLCJSZW5kZXJQb3B1cHMiLCJ1c2VFZmZlY3QiLCJiYWNrZHJvcEZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUF5RDtBQUN4RCxNQUFJQyxLQUFKOztBQUNBLFVBQVFELEtBQUssQ0FBQ0UsSUFBZDtBQUNDLFNBQUssT0FBTDtBQUNDRCxXQUFLLEdBQUcsR0FBUjtBQUNBO0FBSEY7O0FBTUEsc0JBQU87QUFBUSxXQUFPLEVBQUVELEtBQUssQ0FBQ0csT0FBdkI7QUFBZ0MsU0FBSyxFQUFFO0FBQUNDLFdBQUssRUFBRSxFQUFSO0FBQVlDLFlBQU0sRUFBRSxFQUFwQjtBQUF3QkMsYUFBTyxFQUFFLE1BQWpDO0FBQXlDQyxnQkFBVSxFQUFFLFFBQXJEO0FBQStEQyxvQkFBYyxFQUFDLFFBQTlFO0FBQXdGQyxZQUFNLEVBQUUsU0FBaEc7QUFBMkdDLGNBQVEsRUFBRSxFQUFySDtBQUF5SEMscUJBQWUsRUFBRUMsb0ZBQTFJO0FBQWlMQyxZQUFNLEVBQUMsTUFBeEw7QUFBZ01DLGtCQUFZLEVBQUMsQ0FBN007QUFBZ05DLFdBQUssRUFBRUgsOEVBQStCSTtBQUF0UCxLQUF2QztBQUFBLGNBQWlTZjtBQUFqUztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFDQTs7QUFFQSxTQUFTZ0IsSUFBVCxDQUFjakIsS0FBZCxFQUFzQztBQUNsQyxzQkFBTztBQUF3QixTQUFLLEVBQUU7QUFBQ1cscUJBQWUsRUFBRUMsNEZBQWxCO0FBQWlFRSxrQkFBWSxFQUFFLENBQS9FO0FBQWtGSSxlQUFTLEVBQUUsR0FBN0Y7QUFBa0daLGFBQU8sRUFBQztBQUExRyxLQUEvQjtBQUFBLDRCQUNI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QU0sRUFBRSxNQUF4QjtBQUFnQ3VDLGdCQUFRLEVBQUUsT0FBMUM7QUFBbURXLHFCQUFhLEVBQUUwRSxpQkFBaUIsR0FBQyxPQUFELEdBQVMsTUFBNUY7QUFBb0dxQixzQkFBYyxFQUFFckIsaUJBQWlCLEdBQUMsV0FBRCxHQUFhLE9BQWxKO0FBQTJKaEYsa0JBQVUsRUFBRTtBQUF2SyxPQUFaO0FBQUEsa0dBckNzQnJDLG9GQXFDdEIsRUFwQ1dBLDhFQW9DWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q00sRUF5Q0x3SSxZQUFZLEVBekNQO0FBQUEsa0JBQVA7QUEyQ0E7O0FBRUQsK0RBQWVELEdBQWYsRTs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vbW9kdWxlcy9zZXR0aW5nc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEljb24ocHJvcHM6IHt0eXBlOiBcImNsb3NlXCIsIG9uQ2xpY2s6ICgpPT52b2lkfSkge1xyXG5cdGxldCBpbm5lcjogc3RyaW5nIHwgUmVhY3RFbGVtZW50O1xyXG5cdHN3aXRjaCAocHJvcHMudHlwZSkge1xyXG5cdFx0Y2FzZSBcImNsb3NlXCI6XHJcblx0XHRcdGlubmVyID0gXCJ4XCJcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBzdHlsZT17e3dpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGZvbnRTaXplOiAzMCwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yLCBib3JkZXI6XCJub25lXCIsIGJvcmRlclJhZGl1czo4LCBjb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcn19Pntpbm5lcn08L2J1dHRvbj5cclxufVxyXG5cclxuZXhwb3J0IHtJY29ufSIsImltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIlxuaW1wb3J0IFBvc3RTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzc1wiXG5cbmZ1bmN0aW9uIFBvc3QocHJvcHM6IHtwb3N0SWQ6IHN0cmluZ30pe1xuICAgIHJldHVybiA8ZGl2IGtleT17cHJvcHMucG9zdElkfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBib3JkZXJSYWRpdXM6IDgsIG1pbkhlaWdodDogMTAwLCBkaXNwbGF5OlwiZmxleFwifX0+XG4gICAgICAgIDxkaXYga2V5PVwiY29udGVudENvbnRhaW5lclwiIHN0eWxlPXt7bWluV2lkdGg6IDMwMCwgd2lkdGg6IFwiNzAlXCIsIG1heFdpZHRoOiA1MDB9fT5cbiAgICAgICAgICAgIDxkaXYga2V5PVwicG9zdERhdGFDb250YWluZXJcIiBzdHlsZT17e21hcmdpbjogNiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gMTJweClcIiwgYm9yZGVyUmFkaXVzOiA0LCBwYWRkaW5nOiA0LCBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLCBoZWlnaHQ6IDQwLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnl9fT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL0RlZmF1bHRQcm9maWxlUGljLnN2Z1wiIHN0eWxlPXt7aGVpZ2h0OiBcIjEwMCVcIn19Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOjI1LCBtYXJnaW5MZWZ0OiA1fX0+RGV2ZWxvcGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGtleT1cImNoYXRDb250YWluZXJcIiBjbGFzc05hbWU9e1Bvc3RTdHlsZS5wb3N0fSBzdHlsZT17e3dpZHRoOiBcIjcwJVwiLCBtYXJnaW46IDYsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSwgYm9yZGVyUmFkaXVzOiA4fX0+VEhJUzwvZGl2PlxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQge1Bvc3R9IiwiaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiXG5cbmZ1bmN0aW9uIEFjY2VudE9wdGlvbihwcm9wczoge2NvbG9yOiBzdHJpbmd9KXtcbiAgICByZXR1cm4gPGJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMuY29sb3IsIHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgbWFyZ2luOiAyLCBjdXJzb3I6IFwicG9pbnRlclwifX0gb25DbGljaz17KCk9PntcbiAgICAgICAgU2V0dGluZ3Muc2V0KFwiYWNjZW50XCIsIHByb3BzLmNvbG9yKVxuICAgIH19PjwvYnV0dG9uPlxufVxuXG5leHBvcnQge0FjY2VudE9wdGlvbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiO1xuXG5mdW5jdGlvbiBDaGVja2JveDxpdGVtcyBleHRlbmRzIHN0cmluZ1tdPihwcm9wczoge2l0ZW1zOiBpdGVtcywgZGVmYXVsdDoge1trOiBudW1iZXJdOiB0cnVlfSwgdXBkYXRlZDogKGN1cnJlbnQ6IHtbazogbnVtYmVyXTogYm9vbGVhbn0pPT52b2lkfSl7XG4gICAgY29uc3QgbWFwOiB7W3M6IG51bWJlcl06IGJvb2xlYW59ID0ge307XG4gICAgcHJvcHMuaXRlbXMuZm9yRWFjaCgoXywgaW5kZXgpPT57XG4gICAgICAgIG1hcFtpbmRleF0gPSBwcm9wcy5kZWZhdWx0W2luZGV4XSB8fCBmYWxzZTtcbiAgICB9KVxuXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUobWFwKTtcbiAgICBjb25zdCBbbm9uY2UsIHVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMuaXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiA0fX0gdGl0bGU9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtpbmRleF0gPSAhY3VycmVudFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy51cGRhdGVkKGN1cnJlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUobm9uY2UrMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9fSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgY3Vyc29yOlwicG9pbnRlclwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB3aWR0aDogMzAsIGhlaWdodDogMzAsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBjdXJyZW50W2luZGV4XT9cImNhbGMoMTAwJSAtIDEwcHgpXCI6XCIwJVwiLCBoZWlnaHQ6IGN1cnJlbnRbaW5kZXhdP1wiY2FsYygxMDAlIC0gMTBweClcIjpcIjAlXCIsIG9wYWNpdHk6IGN1cnJlbnRbaW5kZXhdPzE6MCAsbGVmdDogXCI1MCVcIiwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRyYW5zaXRpb246IFwib3BhY2l0eSAuMnMsIHdpZHRoIC4ycywgaGVpZ2h0IC4yc1wiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5hY2NlbnRDb2xvcn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PjxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAxMCwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gNXB4KVwiLCB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIn19Pnt2YWx1ZX08L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IHtDaGVja2JveH0iLCJpbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3NldHRpbmdzXCJcbmltcG9ydCB7IFBhZ2VUeXBlcyB9IGZyb20gXCIuL3NldHRpbmdzcGFnZVwiXG5cbmZ1bmN0aW9uIFBhZ2UocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHtzZWxmOiBQYWdlVHlwZXMsIGN1cnJlbnQ6IFBhZ2VUeXBlc30+KXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxcIiBzdHlsZT17e3BvaW50ZXJFdmVudHM6cHJvcHMuc2VsZj09PXByb3BzLmN1cnJlbnQ/XCJ1bnNldFwiOlwibm9uZVwiLCBvcGFjaXR5OiBwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD8xOjAsIHRyYW5zaXRpb246XCJvcGFjaXR5IC4zc1wiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGJveFNpemluZzogXCJib3JkZXItYm94XCIsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgcGFkZGluZzogOCwgb3ZlcmZsb3c6IFwiYXV0b1wifX0+XG4gICAgICAgIDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgIGJvcmRlclJhZGl1czogOCwgcGFkZGluZzogXCIwcHggOHB4IDhweCA4cHhcIiwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yVGVydGlhcnksIGJveFNpemluZzogXCJib3JkZXItYm94XCJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59XG5cbmV4cG9ydCB7UGFnZX0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUGFnZVR5cGVzIH0gZnJvbSBcIi4vc2V0dGluZ3NwYWdlXCI7XG5cbmZ1bmN0aW9uIFJhZGlvU2VsZWN0aW9uKHByb3BzOiB7aXRlbXM6IHN0cmluZ1tdLCBkZWZhdWx0OiBudW1iZXIsIHVwZGF0ZWQ6IChjdXJyZW50OiBudW1iZXIpPT52b2lkfSl7XG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUocHJvcHMuZGVmYXVsdCk7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLml0ZW1zLm1hcCgodmFsdWUsIGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogNH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMudXBkYXRlZChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfX0gc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCIsIGN1cnNvcjpcInBvaW50ZXJcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCBwYWRkaW5nOiA1LCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnksIGJvcmRlclJhZGl1czogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTAwJVwiLCB3aWR0aDogY3VycmVudD09PWluZGV4P1wiY2FsYygxMDAlIC0gMTBweClcIjpcIjAlXCIsIGhlaWdodDogY3VycmVudD09PWluZGV4P1wiY2FsYygxMDAlIC0gMTBweClcIjpcIjAlXCIsIG9wYWNpdHk6IGN1cnJlbnQ9PT1pbmRleD8xOjAgLGxlZnQ6IFwiNTAlXCIsIHRvcDogXCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgLjJzLCB3aWR0aCAuMnMsIGhlaWdodCAuMnNcIiwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYWNjZW50Q29sb3J9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCJ9fT48ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogMTAsIHRvcDogXCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIn19Pnt2YWx1ZX08L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbn1cblxuXG5leHBvcnQge1JhZGlvU2VsZWN0aW9ufSIsImltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIlxuXG5mdW5jdGlvbiBTZWN0aW9uKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7dGl0bGU6IHN0cmluZ30+KXtcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiAxMCwgcGFkZGluZzogNCwgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSwgYm9yZGVyUmFkaXVzOiA4fX0+XG4gICAgICAgIDxoMSBzdHlsZT17e21hcmdpbjogXCIwcHggMHB4IDRweCAwcHhcIn19Pntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG59XG5cbmV4cG9ydCB7U2VjdGlvbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiXHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIlxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uL2ljb25cIlxyXG5pbXBvcnQgeyBBY2NlbnRPcHRpb24gfSBmcm9tIFwiLi9hY2NlbnRvcHRpb25cIlxyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuL2NoZWNrYm94XCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL3BhZ2VcIlxyXG5pbXBvcnQgeyBSYWRpb1NlbGVjdGlvbiB9IGZyb20gXCIuL3JhZGlvc2VsZWN0aW9uXCJcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gXCIuL3NlY3Rpb25cIlxyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tIFwiLi90YWJidXR0b25cIlxyXG5cclxuXHJcbmVudW0gUGFnZVR5cGVzIHtcclxuICAgIEFjY291bnQsXHJcbiAgICBBcHBlYXJhbmNlLFxyXG4gICAgUHJpdmFjeSxcclxuICAgIFNlc3Npb25zLFxyXG4gICAgTGFuZ3VhZ2UsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTZXR0aW5nc1BhZ2UocHJvcHM6IHtvblJlcXVlc3RDbG9zZTogKCk9PnZvaWQsIGlzT3BlbjogYm9vbGVhbn0pe1xyXG4gICAgY29uc3Qgc3RyaW5ncyA9IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5zdHJpbmdzLnNldHRpbmdzcGFnZVxyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8UGFnZVR5cGVzPihQYWdlVHlwZXMuQWNjb3VudClcclxuXHJcbiAgICByZXR1cm4gPFJlYWN0TW9kYWwgaXNPcGVuID0ge3Byb3BzLmlzT3Blbn0gY2xvc2VUaW1lb3V0TVM9ezUwMH0gb25BZnRlckNsb3NlPXsoKT0+e319IGFyaWFIaWRlQXBwPXtmYWxzZX0gc3R5bGU9e3tjb250ZW50OiB7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgaW5zZXQ6IFwiNTAlIDAlIDAlIDUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsIGhlaWdodDogXCI1MCVcIiwgd2lkdGg6IFwiNTAlXCIsIG1heFdpZHRoOiAnNjAwcHgnLCBtYXhIZWlnaHQ6ICc0MDBweCcsIG1pbldpZHRoOiAnMzUwcHgnLCBtaW5IZWlnaHQ6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSwgYm9yZGVyUmFkaXVzOiA4LCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGJvcmRlcjpcIm5vbmVcIiwgcGFkZGluZzogMH0sIG92ZXJsYXk6IHtwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMCwgYmFja2dyb3VuZENvbG9yOiBcInJnYigwLCAwLCAwLCAwKVwifX19PlxyXG4gICAgICAgIDxkaXYga2V5PVwidG9wYmFyXCIgc3R5bGU9e3sgdXNlclNlbGVjdDogJ25vbmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZzogMTAsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBib3JkZXJCb3R0b206IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JRdWF0ZXJuYXJ5fWAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGZvbnRTaXplOiA0MCB9fT57c3RyaW5ncy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0b3BiYXJSaWdodFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PjxJY29uIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xyXG4gICAgICAgICAgICB9fSB0eXBlPVwiY2xvc2VcIj48L0ljb24+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBrZXk9XCJib2R5XCIgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OlwiZmxleFwiLCBvdmVyZmxvdzpcImhpZGRlblwifX0+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwic2lkZWJhclwiIHN0eWxlPXt7IG1pbldpZHRoOiAxNTAsIHdpZHRoOiAxNTAsIHBhZGRpbmc6IDUsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA4LCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSwgYm9yZGVyUmlnaHQ6IGBzb2xpZCAke1NldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgezw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuQWNjb3VudH0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQWNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmFjY291bnR9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuQXBwZWFyYW5jZX0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuQXBwZWFyYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmFwcGVhcmFuY2V9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuUHJpdmFjeX0gY3VycmVudD17cGFnZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShQYWdlVHlwZXMuUHJpdmFjeSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLnByaXZhY3l9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuU2Vzc2lvbnN9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLlNlc3Npb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMuc2Vzc2lvbnN9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkJ1dHRvbiBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PntzdHJpbmdzLnRhYnMubGFuZ3VhZ2V9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGtleSA9IFwiY29udGVudENvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuQWNjb3VudH0gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMuYWNjb3VudC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PjxzcGFuPntzdHJpbmdzLnNlY3Rpb25zLmFjY291bnQudXNlcm5hbWV9Ojwvc3Bhbj48c3BhbiBzdHlsZT17e21hcmdpbjogXCIwcHggNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIG1heFdpZHRoOiAxMjAsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wifX0+UGhvdG9wY29weTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBtYXJnaW46IDAsIGJvcmRlcjogXCJub25lXCIsIGN1cnNvcjpcInBvaW50ZXJcIiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JJbnZlcnRlZCwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYWNjZW50Q29sb3J9fT5FZGl0PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5BcHBlYXJhbmNlfSBjdXJyZW50PXtwYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMudGhlbWUudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvU2VsZWN0aW9uIGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy50aGVtZS5saWdodE1vZGUsIHN0cmluZ3Muc2VjdGlvbnMudGhlbWUuZGFya01vZGVdfSBkZWZhdWx0PXsxfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcInRoZW1lXCIsIFwibGlnaHRNb2RlXCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwidGhlbWVcIiwgXCJkYXJrTW9kZVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjY2VudENvbG9yLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwib3JhbmdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cInllbGxvd1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCIjMDBGRjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cIiM1YWI3ZmFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwicHVycGxlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRZb3VUdWJlLCBzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy5lbWJlZFR3aXRjaFN0cmVhbXMsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkVHdpdGNoTGl2ZUNoYXQsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkU2NyYXRjaCwgc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRDb2RlRG90T3JnXX0gZGVmYXVsdD17ezA6dHJ1ZSwxOnRydWUsMjp0cnVlfX0gdXBkYXRlZD17KCk9Pnt9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5ibG9ja2VkVXNlcnMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5TZXNzaW9uc30gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjdGl2ZVNlc3Npb25zLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tib3JkZXJSYWRpdXM6IDQsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IDQsIGJveFNpemluZzogXCJib3JkZXItYm94XCIsIGJvcmRlcjpcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvckludmVydGVkfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3Muc2VjdGlvbnMuYWN0aXZlU2Vzc2lvbnMuc2lnbk91dEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9TZWxlY3Rpb24gaXRlbXM9e1tzdHJpbmdzLnNlY3Rpb25zLmxhbmd1YWdlLmVuZ2xpc2gsIHN0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UucmV0YXJkZWRdfSBkZWZhdWx0PXswfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcImxhbmd1YWdlXCIsIFwiZW5nbGlzaFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwibGFuZ3VhZ2VcIiwgXCJyZXRhcmRlZFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3RNb2RhbD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7U2V0dGluZ3NQYWdlLCBQYWdlVHlwZXN9IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBQYWdlVHlwZXMgfSBmcm9tIFwiLi9zZXR0aW5nc3BhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIFRhYkJ1dHRvbihwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e29uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Piwgc2VsZjogUGFnZVR5cGVzLCBjdXJyZW50OiBQYWdlVHlwZXN9Pikge1xyXG5cdGNvbnN0IFtpc092ZXIsIHVwZGF0ZUlzT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0cmV0dXJuIDxidXR0b25cclxuXHRcdFx0b25DbGljaz17cHJvcHMub25DbGlja31cclxuXHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiB7IHVwZGF0ZUlzT3Zlcih0cnVlKSB9fVxyXG5cdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IHsgdXBkYXRlSXNPdmVyKGZhbHNlKSB9fVxyXG5cdFx0XHRzdHlsZT17e2N1cnNvcjpwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD9cInVuc2V0XCI6XCJwb2ludGVyXCIsXHJcblx0XHRcdHpJbmRleDogaXNPdmVyJiZwcm9wcy5zZWxmIT1wcm9wcy5jdXJyZW50PzE6MCwgcG9zaXRpb246XCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHRib3hTaGFkb3c6IGlzT3ZlciYmcHJvcHMuc2VsZiE9cHJvcHMuY3VycmVudCA/IFwiMCA4cHggMTZweCByZ2JhKDAsMCwwLDAuNDQpXCIgOiBcIlwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdGZvbnRTaXplOjIwLFxyXG5cdFx0XHRib3JkZXJSYWRpdXM6IDQsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5LFxyXG5cdFx0XHRib3JkZXI6XCJub25lXCIsXHJcblx0XHRcdGNvbG9yOiBwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD9TZXR0aW5ncy5jdXJyZW50U3RhdGUuYWNjZW50Q29sb3I6U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcixcclxuXHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIixcclxuXHRcdFx0dHJhbnNpdGlvbjogXCJib3gtc2hhZG93IC41cywgY29sb3IgLjNzXCIsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMyxcclxuLy9cdFx0XHRmb250V2VpZ2h0OiBwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD84MDA6MTAwLFxyXG5cdFx0fX0+XHJcblx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0PC9idXR0b24+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgVGFiQnV0dG9uIH0iLCIvL2kgaGF2ZSBubyBpZGVhIGhvdyBpdCB3b3JrcyBidXQgaXQganVzdCB3b3Jrc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFBvcHVwTWFuYWdlcigpe1xuICAgIGNvbnN0IFtwb3B1cHMsIHNldFBvcHVwc10gPSBSZWFjdC51c2VTdGF0ZTxQb3B1cE9ialtdPihbXSlcbiAgICBjb25zdCBbc3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe3BvcHVwcywgc2V0UG9wdXBzLCByZWNvcmQ6e30gYXMgUmVjb3JkPHN0cmluZywgUG9wdXBPYmo+fSlcblxuICAgIHR5cGUgUG9wdXBPYmogPSB7b3BlbjogYm9vbGVhbiwga2V5OiBzdHJpbmcsIHJlbmRlckZ1bmN0aW9uOiAob3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudH1cblxuICAgIHN0YXRlLnNldFBvcHVwcz1zZXRQb3B1cHM7XG4gICAgc3RhdGUucG9wdXBzPXBvcHVwcztcblxuICAgIGZ1bmN0aW9uIEFkZFBvcHVwKGtleTogc3RyaW5nLCBpc09wZW46IGJvb2xlYW4sIGNhbGxiYWNrOiAob25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBvYmo6IFBvcHVwT2JqID0ge29wZW46IGlzT3Blbiwga2V5OiBrZXksIHJlbmRlckZ1bmN0aW9uOiAob3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgICAgIG9iai5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgICAgICAgICAgfSwgb3BlbilcbiAgICAgICAgfX07XG4gICAgICAgIHN0YXRlLnJlY29yZFtrZXldID0gb2JqO1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwcywgb2JqXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBSZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIHBvcHVwcy5tYXAoKG9iaik9PntcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXtvYmoua2V5fT57b2JqLnJlbmRlckZ1bmN0aW9uKG9iai5vcGVuKX08L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNldFBvcHVwU3RhdGUoa2V5OiBzdHJpbmcsIG9wZW46IGJvb2xlYW4pe1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XS5vcGVuID0gb3BlbjtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtSZW5kZXIsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlLCBzaG91bGRTaG93T3ZlcmxheTogIXBvcHVwcy5ldmVyeShwb3B1cD0+IXBvcHVwLm9wZW4pfVxufVxuXG5leHBvcnQge1BvcHVwTWFuYWdlcn0iLCIvKipcclxuICogbWlkZGxlbWFuIGJldHdlZW4gc3R1ZmYgdGhhdCBjaGFuZ2VzIHNldHRpbmdzIGFuZCBzdHVmZiB0aGF0IHVzZXMgc2V0dGluZ3NcclxuICogaXQgdHJhbnNmb3JtIHNldHRpbmdzIHN1Y2ggYXMgdGhlIHRoZW1lIGludG8gYSBzZXJpZXMgb2YgXCJjb21wdXRlZFwiIHNldHRpbmdzIChtYWlubHkgc3R5bGVzKSwgdGhpcyB3YXkgc3R1ZmYgaXMgZWFzaWVyIHRvIHR3ZWFrXHJcbiAqL1xyXG5cclxuLy8gaSBkb24ndCBhY3R1YWxseSBwbGFuIHRvIGFkZCBhbnkgbGFuZ3VhZ2VzLCB0aGlzIGlzIGp1c3QgZm9yIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgcmV0YXJkZWQgaXMganVzdCBhIHRlc3QgXCJsYW5ndWFnZVwiIHRvIHNlZSBpZiBpdCB3b3Jrc1xyXG5pbXBvcnQgKiBhcyBlbmdsaXNoIGZyb20gXCIuLi9yZXNvdXJjZXMvbG9jYWxpemF0aW9uL2VuZ2xpc2guanNvblwiXHJcbmltcG9ydCAqIGFzIHJldGFyZGVkIGZyb20gXCIuLi9yZXNvdXJjZXMvbG9jYWxpemF0aW9uL3JldGFyZGVkLmpzb25cIlxyXG5cclxuY29uc3QgbGFuZ3VhZ2VzID0ge2VuZ2xpc2gsIHJldGFyZGVkfVxyXG5cclxuaW50ZXJmYWNlIENvbXB1dGVkU2V0dGluZ3Mge1xyXG5cdGJhY2tncm91bmRDb2xvclRlcnRpYXJ5OiBzdHJpbmc7XHJcblx0YmFja2dyb3VuZENvbG9yUXVhdGVybmFyeTogc3RyaW5nO1xyXG5cdGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdHRleHRDb2xvcjogc3RyaW5nO1xyXG5cdGJhY2tncm91bmRDb2xvclNlY29uZGFyeTogc3RyaW5nO1xyXG5cdGFjY2VudENvbG9yOiBzdHJpbmc7XHJcblx0dGV4dENvbG9yU2Vjb25kYXJ5OiBzdHJpbmc7XHJcblx0dGV4dENvbG9ySW52ZXJ0ZWQ6IHN0cmluZztcclxuXHRzdHJpbmdzOiB0eXBlb2YgbGFuZ3VhZ2VzW1wiZW5nbGlzaFwiXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXJTZXR0aW5ncyB7XHJcblx0bGFuZ3VhZ2U6IGtleW9mIHR5cGVvZiBsYW5ndWFnZXM7XHJcblx0dGhlbWU6IFwiZGFya01vZGVcIiB8IFwibGlnaHRNb2RlXCJcclxuXHRhY2NlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG5jbGFzcyBTZXR0aW5nc0NsYXNzIHtcclxuXHRzdGF0aWMgaW5zdGFuY2UgPSBuZXcgU2V0dGluZ3NDbGFzcyh7fSk7XHJcblx0X3VwZGF0ZT86ICgpPT52b2lkXHJcblx0Y3VycmVudFN0YXRlOiBDb21wdXRlZFNldHRpbmdzXHJcblx0XHJcblx0Y3VycmVudDogVXNlclNldHRpbmdzID0ge3RoZW1lOiBcImRhcmtNb2RlXCIsIGFjY2VudDogXCIjNWFiN2ZhXCIsIGxhbmd1YWdlOiBcImVuZ2xpc2hcIn07XHJcblxyXG5cdHByaXZhdGUgc2V0dGVycyA9IHtcclxuXHRcdGFjY2VudChjdXJyZW50U3RhdGU6IENvbXB1dGVkU2V0dGluZ3MsIGFjY2VudDogVXNlclNldHRpbmdzW1wiYWNjZW50XCJdKXtcclxuXHRcdFx0Y3VycmVudFN0YXRlLmFjY2VudENvbG9yID0gU3RyaW5nKGFjY2VudClcclxuXHRcdH0sXHJcblx0XHR0aGVtZShjdXJyZW50U3RhdGU6IENvbXB1dGVkU2V0dGluZ3MsIHRoZW1lOiBVc2VyU2V0dGluZ3NbXCJ0aGVtZVwiXSl7XHJcblx0XHRcdHN3aXRjaCAodGhlbWUpIHtcclxuXHRcdFx0XHRjYXNlIFwiZGFya01vZGVcIjpcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxNTE2MTdcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50ZXh0Q29sb3IgPSBcIiNGRkZGRkZcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnkgPSBcIiNDQ0NcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnkgPSBcIiMyQTJBMzdcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSA9IFwiIzI0MjQyRVwiXHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSA9IFwiIzFGMUYyOFwiXHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWQgPSBcIiMwMDAwMDBcIlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImxpZ2h0TW9kZVwiOlxyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvciA9IFwiI0ZGRkZGRlwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRleHRDb2xvciA9IFwiIzAwMFwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRleHRDb2xvclNlY29uZGFyeSA9IFwiIzMzM1wiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSA9IFwiI0Q5RDlEOVwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5ID0gXCIjRTNFM0UzXCI7XHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSA9IFwiI0VCRUJFQlwiXHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWQgPSBcIiNGRkZGRkZcIlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRsYW5ndWFnZShjdXJyZW50U3RhdGU6IENvbXB1dGVkU2V0dGluZ3MsIGxhbmd1YWdlOiBVc2VyU2V0dGluZ3NbXCJsYW5ndWFnZVwiXSl7XHJcblx0XHRcdGN1cnJlbnRTdGF0ZS5zdHJpbmdzID0gbGFuZ3VhZ2VzW2xhbmd1YWdlXVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0PHByb3BOYW1lIGV4dGVuZHMga2V5b2YgVXNlclNldHRpbmdzPihwcm9wOiBwcm9wTmFtZSwgdmFsdWU6IFVzZXJTZXR0aW5nc1twcm9wTmFtZV0sIHNob3VsZFVwZGF0ZT86IGZhbHNlKSB7XHJcblx0XHQodGhpcy5zZXR0ZXJzW3Byb3BdIGFzIChzdGF0ZTogQ29tcHV0ZWRTZXR0aW5ncywgdmFsdWU6IHVua25vd24pPT52b2lkKSh0aGlzLmN1cnJlbnRTdGF0ZSwgdmFsdWUpXHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCl7XHJcblx0XHRpZiAodGhpcy5fdXBkYXRlKSB7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsU2V0dGluZ3M6IFBhcnRpYWw8VXNlclNldHRpbmdzPil7XHJcblx0XHR0aGlzLmN1cnJlbnRTdGF0ZSA9IHt9IGFzIENvbXB1dGVkU2V0dGluZ3NcclxuXHRcdGZvciAoY29uc3QgcHJvcCBpbiB0aGlzLmN1cnJlbnQpIHtcclxuXHRcdFx0aWYgKHByb3AgaW4gaW5pdGlhbFNldHRpbmdzKSB7XHJcblx0XHRcdFx0dGhpcy5zZXQocHJvcCBhcyBrZXlvZiBVc2VyU2V0dGluZ3MsIGluaXRpYWxTZXR0aW5nc1twcm9wIGFzIGtleW9mIFVzZXJTZXR0aW5nc10gYXMgVXNlclNldHRpbmdzW2tleW9mIFVzZXJTZXR0aW5nc10sIGZhbHNlKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2V0KHByb3AgYXMga2V5b2YgVXNlclNldHRpbmdzLCB0aGlzLmN1cnJlbnRbcHJvcCBhcyBrZXlvZiBVc2VyU2V0dGluZ3NdIGFzIFVzZXJTZXR0aW5nc1trZXlvZiBVc2VyU2V0dGluZ3NdLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBTZXR0aW5ncyA9IFNldHRpbmdzQ2xhc3MuaW5zdGFuY2VcclxuXHJcbmV4cG9ydCB7U2V0dGluZ3N9XHJcbmV4cG9ydCB0eXBlIHtDb21wdXRlZFNldHRpbmdzfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdCdcclxuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vbW9kdWxlcy9wb3B1cG1hbmFnZXInXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0Y29uc3QgW25vbmNlLCB1cGRhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0U2V0dGluZ3MuX3VwZGF0ZSA9ICgpPT57XHJcblx0XHR1cGRhdGUobm9uY2UrMSlcclxuXHR9O1xyXG5cclxuXHQvL2l0IGNvdW50cyB1cCBmb3IgZXZlcnkgcG9wdXAsIGFuZCBjb3VudHMgZG93biBldmVyeXRpbWUgb25lIGlzIGNsb3NlZCwgdGhhdCB3YXkgeW91IGNhbiBoYXZlIDAgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcG9wdXBzIGFyZSBjbG9zZWRcclxuXHQvL2ltIG5vdCBzdXJlIGlmIHRoaXMgY291bGQgbGVhZCB0byBhIGJ1ZyBpZiB0aGUgbnVtYmVyIGlzIHVuZXhwZWN0ZWRseSwgYnV0IGl0IHdvcmtzIGluIHRoZW9yeVxyXG5cdFxyXG5cdGNvbnN0IHtSZW5kZXI6IFJlbmRlclBvcHVwcywgQWRkUG9wdXAsIFNldFBvcHVwU3RhdGUsIHNob3VsZFNob3dPdmVybGF5fSA9IFBvcHVwTWFuYWdlcigpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCk9PntcclxuXHRcdEFkZFBvcHVwKFwiU2V0dGluZ3NNZW51XCIsIGZhbHNlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcclxuXHRcdFx0cmV0dXJuIDxTZXR0aW5nc1BhZ2VcclxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9XHJcblx0XHRcdFx0aXNPcGVuPXtpc09wZW59XHJcblx0XHRcdC8+XHJcblx0XHR9KVxyXG5cdH0sIFtdKVxyXG5cdFxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PGRpdiBrZXk9XCJtYWluQ29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0PGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogMTIwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUpXCIsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwLCBtaW5XaWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRQaG90b3Bjb3B5XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT57XHJcblx0XHRcdFx0XHRcdFNldFBvcHVwU3RhdGUoXCJTZXR0aW5nc01lbnVcIiwgdHJ1ZSlcclxuXHRcdFx0XHRcdH19Pk9wZW4gU2V0dGluZ3M8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInBvc3RDb250YWluZXJcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxyXG5cdFx0XHRcdFx0PFBvc3QgcG9zdElkPVwiYnJ1alwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJSaWdodFwiIHN0eWxlPXt7bWluV2lkdGg6IDIwMCwgd2lkdGg6IDIwMH19PlxyXG5cdFx0XHRcdFx0Um9ibG94IEFkIEdvZXMgaGVyZVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogc2hvdWxkU2hvd092ZXJsYXk/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogc2hvdWxkU2hvd092ZXJsYXk/XCJibHVyKDVweClcIjpcInVuc2V0XCIsIHRyYW5zaXRpb246IFwiYmFja2Ryb3AtZmlsdGVyIC41c1wifX0vPlxyXG5cdFx0e1JlbmRlclBvcHVwcygpfVxyXG5cdDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9zdFwiOiBcInBvc3RfcG9zdF9faUJpZnZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=