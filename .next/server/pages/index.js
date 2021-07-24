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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/post.module.css */ "./src/styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\maincontent\\post.tsx";




function Post(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log("render");
    return () => {
      console.log("dont render");
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorQuaternary,
      borderRadius: 8,
      minHeight: 100,
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        minWidth: 300,
        width: "100%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          margin: "6px",
          width: "calc(100% - 12px)",
          borderRadius: 4,
          padding: 4,
          boxSizing: "border-box",
          height: 40,
          display: "flex",
          alignItems: "center",
          backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorTertiary
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./assets/DefaultProfilePic.svg",
          style: {
            height: "100%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            fontSize: 25,
            marginLeft: 5
          },
          children: "Developer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this)]
      }, "postDataContainer", true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)
    }, "contentContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),
      style: {
        width: "70%",
        margin: "6px 6px 6px 0px",
        backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorTertiary,
        borderRadius: 8,
        overflow: "hidden"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          textAlign: "center",
          background: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorSecondary,
          padding: "2px 0px"
        },
        children: "Chat"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this)
    }, "chatContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this)]
  }, props.postId, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, this);
}



/***/ }),

/***/ "./src/components/maincontent/sidebarbutton.tsx":
/*!******************************************************!*\
  !*** ./src/components/maincontent/sidebarbutton.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarButton": function() { return /* binding */ SidebarButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/settings */ "./src/modules/settings.ts");

var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\components\\maincontent\\sidebarbutton.tsx";



function SidebarButton(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: props.onClick,
    style: {
      cursor: "pointer",
      padding: 0,
      border: "none",
      backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.backgroundColorSecondary,
      marginBottom: 4,
      color: _modules_settings__WEBPACK_IMPORTED_MODULE_2__.Settings.currentState.textColor,
      width: "100%",
      height: 40,
      fontSize: 30,
      textAlign: "center"
    },
    children: props.children
  }, void 0, false, {
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
        lineNumber: 30,
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
          lineNumber: 31,
          columnNumber: 63
        }, this)
      }, "topbarRight", false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)]
    }, "topbar", true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
            lineNumber: 38,
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
            lineNumber: 41,
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
            lineNumber: 44,
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
            lineNumber: 47,
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
            lineNumber: 50,
            columnNumber: 21
          }, this)]
        }, void 0, true)
      }, "sidebar", false, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
                lineNumber: 58,
                columnNumber: 63
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
                lineNumber: 58,
                columnNumber: 112
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
                lineNumber: 59,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
              lineNumber: 65,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.accentColor.title,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "red"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "orange"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "yellow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "#00FF00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "#5ab7fa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accentoption__WEBPACK_IMPORTED_MODULE_5__.AccentOption, {
              color: "purple"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
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
              lineNumber: 83,
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
              lineNumber: 84,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page__WEBPACK_IMPORTED_MODULE_7__.Page, {
          self: PageTypes.Privacy,
          current: page,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_9__.Section, {
            title: strings.sections.blockedUsers.title,
            children: "tba"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
              lineNumber: 95,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
              lineNumber: 102,
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
              lineNumber: 103,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this)]
      }, "contentContainer", true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, this)]
    }, "body", true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
/* harmony import */ var _components_maincontent_sidebarbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/maincontent/sidebarbutton */ "./src/components/maincontent/sidebarbutton.tsx");


var _jsxFileName = "C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\index.tsx";









function PopupContainer(props) {
  const popupMethods = (0,_modules_popupmanager__WEBPACK_IMPORTED_MODULE_7__.PopupManager)();
  const {
    Render: RenderPopups,
    AddPopup,
    SetPopupState,
    shouldShowOverlay
  } = popupMethods;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    props.init(popupMethods);
  }, []);
  props.callback(popupMethods);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%",
        height: "100%",
        position: "fixed",
        pointerEvents: shouldShowOverlay ? "unset" : "none",
        backdropFilter: shouldShowOverlay ? "blur(5px)" : "unset",
        transition: "backdrop-filter .5s"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }, this), RenderPopups()]
  }, void 0, true);
}

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
    0: state
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const strings = _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.strings.mainpage;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2805815117",
      dynamic: [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor],
      children: `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');body{background-color:${_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor};color:${_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor};font-family:'SF Mono','Roboto',sans-serif;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5maW5cXERlc2t0b3BcXHBob3RvcGNvcHlcXHBob3RvcGNvcHlcXHNyY1xccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3FCLEFBR21ELEFBUWpELDhDQVBzQyxtQ0FDUywwQ0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxpbmZpblxcRGVza3RvcFxccGhvdG9wY29weVxccGhvdG9wY29weVxcc3JjXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgQ29tcHV0ZWRTZXR0aW5ncyB9IGZyb20gJy4uL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3RhYmJ1dHRvbidcclxuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2V0dGluZ3NwYWdlJ1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluY29udGVudC9wb3N0J1xyXG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9tb2R1bGVzL3BvcHVwbWFuYWdlcidcclxuaW1wb3J0IHsgU2lkZWJhckJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvc2lkZWJhcmJ1dHRvbidcclxuXHJcbmZ1bmN0aW9uIFBvcHVwQ29udGFpbmVyKHByb3BzOiB7Y2FsbGJhY2s6IChwb3B1cE1ldGhvZHM6IFJldHVyblR5cGU8dHlwZW9mIFBvcHVwTWFuYWdlcj4pPT52b2lkLCBpbml0OiAocG9wdXBNZXRob2RzOiBSZXR1cm5UeXBlPHR5cGVvZiBQb3B1cE1hbmFnZXI+KT0+dm9pZH0pe1xyXG5cdGNvbnN0IHBvcHVwTWV0aG9kcyA9IFBvcHVwTWFuYWdlcigpO1xyXG5cdGNvbnN0IHtSZW5kZXI6IFJlbmRlclBvcHVwcywgQWRkUG9wdXAsIFNldFBvcHVwU3RhdGUsIHNob3VsZFNob3dPdmVybGF5fSA9IHBvcHVwTWV0aG9kcztcclxuXHJcblx0dXNlRWZmZWN0KCgpPT57XHJcblx0XHRwcm9wcy5pbml0KHBvcHVwTWV0aG9kcyk7XHJcblx0fSwgW10pXHJcblxyXG5cdHByb3BzLmNhbGxiYWNrKHBvcHVwTWV0aG9kcyk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgcG9pbnRlckV2ZW50czogc2hvdWxkU2hvd092ZXJsYXk/XCJ1bnNldFwiOlwibm9uZVwiLCBiYWNrZHJvcEZpbHRlcjogc2hvdWxkU2hvd092ZXJsYXk/XCJibHVyKDVweClcIjpcInVuc2V0XCIsIHRyYW5zaXRpb246IFwiYmFja2Ryb3AtZmlsdGVyIC41c1wifX0vPlxyXG5cdFx0e1JlbmRlclBvcHVwcygpfVxyXG5cdDwvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0Y29uc3QgW25vbmNlLCB1cGRhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0U2V0dGluZ3MuX3VwZGF0ZSA9ICgpPT57XHJcblx0XHR1cGRhdGUobm9uY2UrMSlcclxuXHR9O1xyXG5cclxuXHQvL2l0IGNvdW50cyB1cCBmb3IgZXZlcnkgcG9wdXAsIGFuZCBjb3VudHMgZG93biBldmVyeXRpbWUgb25lIGlzIGNsb3NlZCwgdGhhdCB3YXkgeW91IGNhbiBoYXZlIDAgdG8gaW5kaWNhdGUgdGhhdCBhbGwgcG9wdXBzIGFyZSBjbG9zZWRcclxuXHQvL2ltIG5vdCBzdXJlIGlmIHRoaXMgY291bGQgbGVhZCB0byBhIGJ1ZyBpZiB0aGUgbnVtYmVyIGlzIHVuZXhwZWN0ZWRseSwgYnV0IGl0IHdvcmtzIGluIHRoZW9yeVxyXG5cdFxyXG5cdGNvbnN0IFtzdGF0ZV0gPSB1c2VTdGF0ZTx7cG9wdXBNZXRob2RzPzogUmV0dXJuVHlwZTx0eXBlb2YgUG9wdXBNYW5hZ2VyPn0+KHt9KTtcclxuXHRcclxuXHRjb25zdCBzdHJpbmdzID0gU2V0dGluZ3MuY3VycmVudFN0YXRlLnN0cmluZ3MubWFpbnBhZ2U7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfTtcclxuXHRcdFx0XHRjb2xvcjogJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdEBpbXBvcnRcclxuXHRcdFx0dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHRPaCBiYWJ5IGEgdHJpcGxlIVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PG5vc2NyaXB0PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCB6SW5kZXg6IDEwMH19PlxyXG5cdFx0XHQ8aDE+RW5hYmxlIGphdmFzY3JpcHQgcmV0YXJkLjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGVudGFpLm5ldC9nLzM2NDYyNFwiPkNsaWNrIG1lIGZvciBhIHN1cnByaXNlPC9hPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+SnVzdCBraWRkaW5nIGRvbnQgY2xpY2sgaXQgbG1hbzwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdFx0PGRpdiBrZXk9XCJtYWluQ29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0PGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogMTIwMCwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUpXCIsIGRpc3BsYXk6XCJmbGV4XCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0XHQ8ZGl2IGtleT1cInNpZGViYXJMZWZ0XCIgc3R5bGU9e3t3aWR0aDogMjAwLCBtaW5XaWR0aDogMjAwLCBwYWRkaW5nOiBcIjBweCA0cHhcIn19PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSwgYm9yZGVyV2lkdGg6IDYsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgYm9yZGVyU3R5bGU6IFwic29saWRcIiwgYm9yZGVyQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSwgYm9yZGVyUmFkaXVzOiA0fX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAxMDAwfX0+PHNwYW4gc3R5bGU9e3tmb250U2l6ZTogNDB9fT5QaG90b3A8L3NwYW4+Y29weTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yVGVydGlhcnksIG1hcmdpblRvcDogNCwgYm9yZGVyUmFkaXVzOiA0LCBwYWRkaW5nOiBcIjRweCA0cHggMHB4IDRweFwifX0+XHJcblx0XHRcdFx0XHRcdDxTaWRlYmFyQnV0dG9uIG9uQ2xpY2s9eygpPT57fX0+e3N0cmluZ3Muc2lkZWJhci5yZWZyZXNofTwvU2lkZWJhckJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PFNpZGViYXJCdXR0b24gb25DbGljaz17KCk9Pnt9fT57c3RyaW5ncy5zaWRlYmFyLnBvc3R9PC9TaWRlYmFyQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8U2lkZWJhckJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlLnBvcHVwTWV0aG9kcz8uU2V0UG9wdXBTdGF0ZShcIlNldHRpbmdzTWVudVwiLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHR9fT57c3RyaW5ncy5zaWRlYmFyLnNldHRpbmdzfTwvU2lkZWJhckJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PFNpZGViYXJCdXR0b24gb25DbGljaz17KCk9Pnt9fT57c3RyaW5ncy5zaWRlYmFyLmxvZ291dH08L1NpZGViYXJCdXR0b24+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJwb3N0Q29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdDxQb3N0IHBvc3RJZD1cImJydWpcIi8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyUmlnaHRcIiBzdHlsZT17e21pbldpZHRoOiAyMDAsIHdpZHRoOiAyMDB9fT5cclxuXHRcdFx0XHRcdFJvYmxveCBBZCBHb2VzIGhlcmVcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxQb3B1cENvbnRhaW5lciBjYWxsYmFjaz17KHBvcHVwTWV0aG9kcyk9PntcclxuXHRcdFx0c3RhdGUucG9wdXBNZXRob2RzID0gcG9wdXBNZXRob2RzO1xyXG5cdFx0fX0gaW5pdD17KHBvcHVwTWV0aG9kcyk9PntcclxuXHRcdFx0cG9wdXBNZXRob2RzLkFkZFBvcHVwKFwiU2V0dGluZ3NNZW51XCIsIGZhbHNlLCAob25SZXF1ZXN0Q2xvc2UsIGlzT3Blbik9PntcclxuXHRcdFx0XHRyZXR1cm4gPFNldHRpbmdzUGFnZVxyXG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxyXG5cdFx0XHRcdFx0aXNPcGVuPXtpc09wZW59XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0fSlcclxuXHRcdH19Lz5cclxuXHQ8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */
/*@ sourceURL=C:\\Users\\infin\\Desktop\\photopcopy\\photopcopy\\src\\pages\\index.tsx */`
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: "Oh baby a triple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
          lineNumber: 59,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.nhentai.net/g/364624",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Click me for a surprise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            display: 'none'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: "Just kidding dont click it lmao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
          display: "flex",
          height: "100%"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: 200,
            minWidth: 200,
            padding: "0px 4px"
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColorSecondary,
              borderWidth: 6,
              textAlign: "center",
              borderStyle: "solid",
              borderColor: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColorTertiary,
              borderRadius: 4
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontWeight: 1000
              },
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  fontSize: 40
                },
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
                children: "Photop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 39
              }, this), "copy"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              backgroundColor: _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColorTertiary,
              marginTop: 4,
              borderRadius: 4,
              padding: "4px 4px 0px 4px"
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2805815117", [_modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.backgroundColor, _modules_settings__WEBPACK_IMPORTED_MODULE_4__.Settings.currentState.textColor]]]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_maincontent_sidebarbutton__WEBPACK_IMPORTED_MODULE_8__.SidebarButton, {
              onClick: () => {},
              children: strings.sidebar.refresh
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_maincontent_sidebarbutton__WEBPACK_IMPORTED_MODULE_8__.SidebarButton, {
              onClick: () => {},
              children: strings.sidebar.post
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_maincontent_sidebarbutton__WEBPACK_IMPORTED_MODULE_8__.SidebarButton, {
              onClick: () => {
                var _state$popupMethods;

                (_state$popupMethods = state.popupMethods) === null || _state$popupMethods === void 0 ? void 0 : _state$popupMethods.SetPopupState("SettingsMenu", true);
              },
              children: strings.sidebar.settings
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_maincontent_sidebarbutton__WEBPACK_IMPORTED_MODULE_8__.SidebarButton, {
              onClick: () => {},
              children: strings.sidebar.logout
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 6
          }, this)]
        }, "sidebarLeft", true, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
            lineNumber: 80,
            columnNumber: 6
          }, this)
        }, "postContainer", false, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
          lineNumber: 82,
          columnNumber: 5
        }, this)]
      }, "content", true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 4
      }, this)
    }, "mainContainer", false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PopupContainer, {
      callback: popupMethods => {
        state.popupMethods = popupMethods;
      },
      init: popupMethods => {
        popupMethods.AddPopup("SettingsMenu", false, (onRequestClose, isOpen) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settingspage_settingspage__WEBPACK_IMPORTED_MODULE_5__.SettingsPage, {
            onRequestClose: onRequestClose,
            isOpen: isOpen
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 12
          }, this);
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }, this)]
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
module.exports = JSON.parse('{"misc":{"edit":"Edit","tba":"To be added"},"mainpage":{"sidebar":{"refresh":"Refresh","post":"Post","logout":"Logout","settings":"Settings"}},"settingspage":{"title":"Settings","tabs":{"account":"Account","appearance":"Appearance","privacy":"Privacy","sessions":"Sessions","language":"Language"},"sections":{"account":{"title":"Account","username":"Username","password":"Username"},"theme":{"title":"Theme","lightMode":"Light Mode","darkMode":"Dark Mode"},"accentColor":{"title":"Accent Color"},"embeds":{"title":"Embeds","description":"Embeds are from 3rd party sites - which could track you or slow down your browser.","embedYouTube":"Embed YouTube Videos","embedTwitchStreams":"Embed Twitch Streams","embedTwitchLiveChat":"Embed Twitch Live Chat","embedScratch":"Embed Scratch Games","embedCodeDotOrg":"Embed code.org Projects"},"blockedUsers":{"title":"Blocked Users"},"activeSessions":{"title":"Active Sessions","signOutAll":"Sign Out of All Sessions"},"language":{"title":"Language","description":"I don\'t plan to add support for other languages. This is just for forward compatibility.","english":"English","retarded":"Retarded"}}}}');

/***/ }),

/***/ "./src/resources/localization/retarded.json":
/*!**************************************************!*\
  !*** ./src/resources/localization/retarded.json ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"misc":{"edit":"Edit","tba":"To be added"},"mainpage":{"sidebar":{"refresh":"Refresh","post":"Post","logout":"Logout","settings":"Settings"}},"settingspage":{"title":"Change Things","tabs":{"account":"Myself","appearance":"Look","privacy":"Secure","sessions":"Existences","language":"Language"},"sections":{"account":{"title":"Me","username":"Stupid","password":"Password"},"theme":{"title":"Look","lightMode":"White","darkMode":"Black"},"accentColor":{"title":"Skittles"},"embeds":{"title":"Squares","description":"Lots of squares below","embedYouTube":"The square at the top","embedTwitchStreams":"The square below the square at the top","embedTwitchLiveChat":"The square in the middle","embedScratch":"The square below the square in the middle","embedCodeDotOrg":"The Final Square"},"blockedUsers":{"title":"Go away"},"activeSessions":{"title":"History","signOutAll":"Clear search history"},"language":{"title":"Language","description":"I don\'t plan to add support for other languages. This is just for forward compatibility.","english":"English","retarded":"Retarded"}}}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9jb21wb25lbnRzL21haW5jb250ZW50L3Bvc3QudHN4Iiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvY29tcG9uZW50cy9tYWluY29udGVudC9zaWRlYmFyYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL2FjY2VudG9wdGlvbi50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzcGFnZS9jaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzcGFnZS9wYWdlLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3JhZGlvc2VsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NlY3Rpb24udHN4Iiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5nc3BhZ2Uvc2V0dGluZ3NwYWdlLnRzeCIsIndlYnBhY2s6Ly9waG90b3Bjb3B5Ly4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3RhYmJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9tb2R1bGVzL3BvcHVwbWFuYWdlci50c3giLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS8uL3NyYy9tb2R1bGVzL3NldHRpbmdzLnRzIiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3Bob3RvcGNvcHkvLi9zcmMvc3R5bGVzL3Bvc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9waG90b3Bjb3B5L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vcGhvdG9wY29weS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Bob3RvcGNvcHkvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwiaW5uZXIiLCJ0eXBlIiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiU2V0dGluZ3MiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsInRleHRDb2xvciIsIlBvc3QiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYmFja2dyb3VuZENvbG9yVGVydGlhcnkiLCJtYXJnaW5MZWZ0IiwiUG9zdFN0eWxlIiwib3ZlcmZsb3ciLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwicG9zdElkIiwiU2lkZWJhckJ1dHRvbiIsIm1hcmdpbkJvdHRvbSIsImNoaWxkcmVuIiwiQWNjZW50T3B0aW9uIiwiQ2hlY2tib3giLCJtYXAiLCJpdGVtcyIsImZvckVhY2giLCJfIiwiaW5kZXgiLCJkZWZhdWx0IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsIm5vbmNlIiwidXBkYXRlIiwidmFsdWUiLCJtYXJnaW5Ub3AiLCJ1cGRhdGVkIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnkiLCJvcGFjaXR5IiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJhY2NlbnRDb2xvciIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJQYWdlIiwicG9pbnRlckV2ZW50cyIsInNlbGYiLCJmbGV4RGlyZWN0aW9uIiwiUmFkaW9TZWxlY3Rpb24iLCJTZWN0aW9uIiwidGl0bGUiLCJQYWdlVHlwZXMiLCJTZXR0aW5nc1BhZ2UiLCJzdHJpbmdzIiwicGFnZSIsInNldFBhZ2UiLCJBY2NvdW50IiwiaXNPcGVuIiwiY29udGVudCIsImluc2V0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVybGF5IiwidXNlclNlbGVjdCIsImJvcmRlckJvdHRvbSIsImZsb2F0Iiwib25SZXF1ZXN0Q2xvc2UiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclJpZ2h0IiwidGFicyIsImFjY291bnQiLCJBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsIlByaXZhY3kiLCJwcml2YWN5IiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZWN0aW9ucyIsInVzZXJuYW1lIiwidGhlbWUiLCJsaWdodE1vZGUiLCJkYXJrTW9kZSIsImVtYmVkcyIsInRleHRDb2xvclNlY29uZGFyeSIsImRlc2NyaXB0aW9uIiwiZW1iZWRZb3VUdWJlIiwiZW1iZWRUd2l0Y2hTdHJlYW1zIiwiZW1iZWRUd2l0Y2hMaXZlQ2hhdCIsImVtYmVkU2NyYXRjaCIsImVtYmVkQ29kZURvdE9yZyIsImJsb2NrZWRVc2VycyIsImFjdGl2ZVNlc3Npb25zIiwidGV4dENvbG9ySW52ZXJ0ZWQiLCJzaWduT3V0QWxsIiwiZW5nbGlzaCIsInJldGFyZGVkIiwiVGFiQnV0dG9uIiwiaXNPdmVyIiwidXBkYXRlSXNPdmVyIiwiekluZGV4IiwiYm94U2hhZG93IiwiUG9wdXBNYW5hZ2VyIiwicG9wdXBzIiwic2V0UG9wdXBzIiwiUmVhY3QiLCJzdGF0ZSIsInJlY29yZCIsIkFkZFBvcHVwIiwia2V5IiwiY2FsbGJhY2siLCJvYmoiLCJvcGVuIiwicmVuZGVyRnVuY3Rpb24iLCJSZW5kZXIiLCJTZXRQb3B1cFN0YXRlIiwic2hvdWxkU2hvd092ZXJsYXkiLCJldmVyeSIsInBvcHVwIiwibGFuZ3VhZ2VzIiwiU2V0dGluZ3NDbGFzcyIsInNldCIsInByb3AiLCJzaG91bGRVcGRhdGUiLCJzZXR0ZXJzIiwiY3VycmVudFN0YXRlIiwiX3VwZGF0ZSIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFNldHRpbmdzIiwiYWNjZW50IiwiU3RyaW5nIiwiYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSIsImluc3RhbmNlIiwiUG9wdXBDb250YWluZXIiLCJwb3B1cE1ldGhvZHMiLCJSZW5kZXJQb3B1cHMiLCJpbml0IiwiYmFja2Ryb3BGaWx0ZXIiLCJBcHAiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJmb250V2VpZ2h0Iiwic2lkZWJhciIsInJlZnJlc2giLCJwb3N0Iiwic2V0dGluZ3MiLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBeUQ7QUFDeEQsTUFBSUMsS0FBSjs7QUFDQSxVQUFRRCxLQUFLLENBQUNFLElBQWQ7QUFDQyxTQUFLLE9BQUw7QUFDQ0QsV0FBSyxHQUFHLEdBQVI7QUFDQTtBQUhGOztBQU1BLHNCQUFPO0FBQVEsV0FBTyxFQUFFRCxLQUFLLENBQUNHLE9BQXZCO0FBQWdDLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUUsRUFBUjtBQUFZQyxZQUFNLEVBQUUsRUFBcEI7QUFBd0JDLGFBQU8sRUFBRSxNQUFqQztBQUF5Q0MsZ0JBQVUsRUFBRSxRQUFyRDtBQUErREMsb0JBQWMsRUFBQyxRQUE5RTtBQUF3RkMsWUFBTSxFQUFFLFNBQWhHO0FBQTJHQyxjQUFRLEVBQUUsRUFBckg7QUFBeUhDLHFCQUFlLEVBQUVDLG9GQUExSTtBQUFpTEMsWUFBTSxFQUFDLE1BQXhMO0FBQWdNQyxrQkFBWSxFQUFDLENBQTdNO0FBQWdOQyxXQUFLLEVBQUVILDhFQUErQkk7QUFBdFAsS0FBdkM7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LGtCQUFQO0FBSUEsU0FMRDtBQU1BO0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DTTtBQUFBLGtCQUFQO0FBMERBOztBQUVELCtEQUFla0YsR0FBZixFOzs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi9tb2R1bGVzL3NldHRpbmdzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gSWNvbihwcm9wczoge3R5cGU6IFwiY2xvc2VcIiwgb25DbGljazogKCk9PnZvaWR9KSB7XHJcblx0bGV0IGlubmVyOiBzdHJpbmcgfCBSZWFjdEVsZW1lbnQ7XHJcblx0c3dpdGNoIChwcm9wcy50eXBlKSB7XHJcblx0XHRjYXNlIFwiY2xvc2VcIjpcclxuXHRcdFx0aW5uZXIgPSBcInhcIlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IHN0eWxlPXt7d2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgZm9udFNpemU6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3IsIGJvcmRlcjpcIm5vbmVcIiwgYm9yZGVyUmFkaXVzOjgsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yfX0+e2lubmVyfTwvYnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQge0ljb259IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIlxuaW1wb3J0IFBvc3RTdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzc1wiXG5cbmZ1bmN0aW9uIFBvc3QocHJvcHM6IHtwb3N0SWQ6IHN0cmluZ30pe1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpXG4gICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb250IHJlbmRlclwiKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiA8ZGl2IGtleT17cHJvcHMucG9zdElkfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclF1YXRlcm5hcnksIGJvcmRlclJhZGl1czogOCwgbWluSGVpZ2h0OiAxMDAsIGRpc3BsYXk6XCJmbGV4XCJ9fT5cbiAgICAgICAgPGRpdiBrZXk9XCJjb250ZW50Q29udGFpbmVyXCIgc3R5bGU9e3ttaW5XaWR0aDogMzAwLCB3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgIDxkaXYga2V5PVwicG9zdERhdGFDb250YWluZXJcIiBzdHlsZT17e21hcmdpbjogXCI2cHhcIiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gMTJweClcIiwgYm9yZGVyUmFkaXVzOiA0LCBwYWRkaW5nOiA0LCBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLCBoZWlnaHQ6IDQwLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeX19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvRGVmYXVsdFByb2ZpbGVQaWMuc3ZnXCIgc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwifX0vPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6MjUsIG1hcmdpbkxlZnQ6IDV9fT5EZXZlbG9wZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYga2V5PVwiY2hhdENvbnRhaW5lclwiIGNsYXNzTmFtZT17UG9zdFN0eWxlLnBvc3R9IHN0eWxlPXt7d2lkdGg6IFwiNzAlXCIsIG1hcmdpbjogXCI2cHggNnB4IDZweCAwcHhcIiwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yVGVydGlhcnksIGJvcmRlclJhZGl1czogOCwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgYmFja2dyb3VuZDogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSwgcGFkZGluZzogXCIycHggMHB4XCJ9fT5DaGF0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQge1Bvc3R9IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiO1xuXG5mdW5jdGlvbiBTaWRlYmFyQnV0dG9uKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7b25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+fT4pe1xuICAgIHJldHVybiA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIiwgcGFkZGluZzogMCwgYm9yZGVyOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5LCBtYXJnaW5Cb3R0b206IDQsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9yLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogNDAsIGZvbnRTaXplOiAzMCwgdGV4dEFsaWduOiBcImNlbnRlclwifX1cbiAgICAgICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9idXR0b24+XG59XG5cbmV4cG9ydCB7U2lkZWJhckJ1dHRvbn0iLCJpbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3NldHRpbmdzXCJcblxuZnVuY3Rpb24gQWNjZW50T3B0aW9uKHByb3BzOiB7Y29sb3I6IHN0cmluZ30pe1xuICAgIHJldHVybiA8YnV0dG9uIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5jb2xvciwgd2lkdGg6IDMwLCBoZWlnaHQ6IDMwLCBtYXJnaW46IDIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+e1xuICAgICAgICBTZXR0aW5ncy5zZXQoXCJhY2NlbnRcIiwgcHJvcHMuY29sb3IpXG4gICAgfX0+PC9idXR0b24+XG59XG5cbmV4cG9ydCB7QWNjZW50T3B0aW9ufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3NldHRpbmdzXCI7XG5cbmZ1bmN0aW9uIENoZWNrYm94PGl0ZW1zIGV4dGVuZHMgc3RyaW5nW10+KHByb3BzOiB7aXRlbXM6IGl0ZW1zLCBkZWZhdWx0OiB7W2s6IG51bWJlcl06IHRydWV9LCB1cGRhdGVkOiAoY3VycmVudDoge1trOiBudW1iZXJdOiBib29sZWFufSk9PnZvaWR9KXtcbiAgICBjb25zdCBtYXA6IHtbczogbnVtYmVyXTogYm9vbGVhbn0gPSB7fTtcbiAgICBwcm9wcy5pdGVtcy5mb3JFYWNoKChfLCBpbmRleCk9PntcbiAgICAgICAgbWFwW2luZGV4XSA9IHByb3BzLmRlZmF1bHRbaW5kZXhdIHx8IGZhbHNlO1xuICAgIH0pXG5cbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShtYXApO1xuICAgIGNvbnN0IFtub25jZSwgdXBkYXRlXSA9IHVzZVN0YXRlKDApO1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy5pdGVtcy5tYXAoKHZhbHVlLCBpbmRleCk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IDR9fSB0aXRsZT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W2luZGV4XSA9ICFjdXJyZW50W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnVwZGF0ZWQoY3VycmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZShub25jZSsxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH19IHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCBjdXJzb3I6XCJwb2ludGVyXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgYmFja2dyb3VuZENvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IGN1cnJlbnRbaW5kZXhdP1wiY2FsYygxMDAlIC0gMTBweClcIjpcIjAlXCIsIGhlaWdodDogY3VycmVudFtpbmRleF0/XCJjYWxjKDEwMCUgLSAxMHB4KVwiOlwiMCVcIiwgb3BhY2l0eTogY3VycmVudFtpbmRleF0/MTowICxsZWZ0OiBcIjUwJVwiLCB0b3A6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdHJhbnNpdGlvbjogXCJvcGFjaXR5IC4ycywgd2lkdGggLjJzLCBoZWlnaHQgLjJzXCIsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yfX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwifX0+PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IDEwLCB0b3A6IFwiNTAlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aWR0aDogXCJjYWxjKDEwMCUgLSA1cHgpXCIsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e3ZhbHVlfTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQge0NoZWNrYm94fSIsImltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvc2V0dGluZ3NcIlxuaW1wb3J0IHsgUGFnZVR5cGVzIH0gZnJvbSBcIi4vc2V0dGluZ3NwYWdlXCJcblxuZnVuY3Rpb24gUGFnZShwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e3NlbGY6IFBhZ2VUeXBlcywgY3VycmVudDogUGFnZVR5cGVzfT4pe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiIHN0eWxlPXt7cG9pbnRlckV2ZW50czpwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD9cInVuc2V0XCI6XCJub25lXCIsIG9wYWNpdHk6IHByb3BzLnNlbGY9PT1wcm9wcy5jdXJyZW50PzE6MCwgdHJhbnNpdGlvbjpcIm9wYWNpdHkgLjNzXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBwYWRkaW5nOiA4LCBvdmVyZmxvdzogXCJhdXRvXCJ9fT5cbiAgICAgICAgPGRpdiBrZXk9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCAgYm9yZGVyUmFkaXVzOiA4LCBwYWRkaW5nOiBcIjBweCA4cHggOHB4IDhweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSwgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIn19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IHtQYWdlfSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBQYWdlVHlwZXMgfSBmcm9tIFwiLi9zZXR0aW5nc3BhZ2VcIjtcblxuZnVuY3Rpb24gUmFkaW9TZWxlY3Rpb24ocHJvcHM6IHtpdGVtczogc3RyaW5nW10sIGRlZmF1bHQ6IG51bWJlciwgdXBkYXRlZDogKGN1cnJlbnQ6IG51bWJlcik9PnZvaWR9KXtcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShwcm9wcy5kZWZhdWx0KTtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMuaXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiA0fX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy51cGRhdGVkKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9fSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgY3Vyc29yOlwicG9pbnRlclwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB3aWR0aDogMjAsIGhlaWdodDogMjAsIHBhZGRpbmc6IDUsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSwgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMDAlXCIsIHdpZHRoOiBjdXJyZW50PT09aW5kZXg/XCJjYWxjKDEwMCUgLSAxMHB4KVwiOlwiMCVcIiwgaGVpZ2h0OiBjdXJyZW50PT09aW5kZXg/XCJjYWxjKDEwMCUgLSAxMHB4KVwiOlwiMCVcIiwgb3BhY2l0eTogY3VycmVudD09PWluZGV4PzE6MCAsbGVmdDogXCI1MCVcIiwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRyYW5zaXRpb246IFwib3BhY2l0eSAuMnMsIHdpZHRoIC4ycywgaGVpZ2h0IC4yc1wiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5hY2NlbnRDb2xvcn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PjxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAxMCwgdG9wOiBcIjUwJVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwifX0+e3ZhbHVlfTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIDwvZGl2PlxufVxuXG5cbmV4cG9ydCB7UmFkaW9TZWxlY3Rpb259IiwiaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiXG5cbmZ1bmN0aW9uIFNlY3Rpb24ocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt0aXRsZTogc3RyaW5nfT4pe1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IDEwLCBwYWRkaW5nOiA0LCBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JRdWF0ZXJuYXJ5LCBib3JkZXJSYWRpdXM6IDh9fT5cbiAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luOiBcIjBweCAwcHggNHB4IDBweFwifX0+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IHtTZWN0aW9ufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCJcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiXHJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vaWNvblwiXHJcbmltcG9ydCB7IEFjY2VudE9wdGlvbiB9IGZyb20gXCIuL2FjY2VudG9wdGlvblwiXHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIi4vY2hlY2tib3hcIlxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vcGFnZVwiXHJcbmltcG9ydCB7IFJhZGlvU2VsZWN0aW9uIH0gZnJvbSBcIi4vcmFkaW9zZWxlY3Rpb25cIlxyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcIi4vc2VjdGlvblwiXHJcbmltcG9ydCB7IFRhYkJ1dHRvbiB9IGZyb20gXCIuL3RhYmJ1dHRvblwiXHJcblxyXG5cclxuZW51bSBQYWdlVHlwZXMge1xyXG4gICAgQWNjb3VudCxcclxuICAgIEFwcGVhcmFuY2UsXHJcbiAgICBQcml2YWN5LFxyXG4gICAgU2Vzc2lvbnMsXHJcbiAgICBMYW5ndWFnZSxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFNldHRpbmdzUGFnZShwcm9wczoge29uUmVxdWVzdENsb3NlOiAoKT0+dm9pZCwgaXNPcGVuOiBib29sZWFufSl7XHJcbiAgICBjb25zdCBzdHJpbmdzID0gU2V0dGluZ3MuY3VycmVudFN0YXRlLnN0cmluZ3Muc2V0dGluZ3NwYWdlXHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxQYWdlVHlwZXM+KFBhZ2VUeXBlcy5BY2NvdW50KVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIDxSZWFjdE1vZGFsIGlzT3BlbiA9IHtwcm9wcy5pc09wZW59IGNsb3NlVGltZW91dE1TPXs1MDB9IG9uQWZ0ZXJDbG9zZT17KCk9Pnt9fSBhcmlhSGlkZUFwcD17ZmFsc2V9IHN0eWxlPXt7Y29udGVudDoge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGluc2V0OiBcIjUwJSAwJSAwJSA1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLCBoZWlnaHQ6IFwiNTAlXCIsIHdpZHRoOiBcIjUwJVwiLCBtYXhXaWR0aDogJzYwMHB4JywgbWF4SGVpZ2h0OiAnNDAwcHgnLCBtaW5XaWR0aDogJzM1MHB4JywgbWluSGVpZ2h0OiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnksIGJvcmRlclJhZGl1czogOCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBib3JkZXI6XCJub25lXCIsIHBhZGRpbmc6IDB9LCBvdmVybGF5OiB7cG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMCwgMCwgMCwgMClcIn19fT5cclxuICAgICAgICA8ZGl2IGtleT1cInRvcGJhclwiIHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmc6IDEwLCBiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSwgYm9yZGVyQm90dG9tOiBgc29saWQgJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeX1gIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBmb250U2l6ZTogNDAgfX0+e3N0cmluZ3MudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwidG9wYmFyUmlnaHRcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT48SWNvbiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICAgICAgfX0gdHlwZT1cImNsb3NlXCI+PC9JY29uPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYga2V5PVwiYm9keVwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTpcImZsZXhcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGtleT1cInNpZGViYXJcIiBzdHlsZT17eyBtaW5XaWR0aDogMTUwLCB3aWR0aDogMTUwLCBwYWRkaW5nOiA1LCBib3JkZXJUb3BSaWdodFJhZGl1czogOCwgaGVpZ2h0OiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclF1YXRlcm5hcnksIGJvcmRlclJpZ2h0OiBgc29saWQgJHtTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgIHs8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkFjY291bnR9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkFjY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5hY2NvdW50fTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkFwcGVhcmFuY2V9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLkFwcGVhcmFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5hcHBlYXJhbmNlfTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoUGFnZVR5cGVzLlByaXZhY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3N0cmluZ3MudGFicy5wcml2YWN5fTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLlNlc3Npb25zfSBjdXJyZW50PXtwYWdlfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKFBhZ2VUeXBlcy5TZXNzaW9ucylcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLnNlc3Npb25zfTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCdXR0b24gc2VsZj17UGFnZVR5cGVzLkxhbmd1YWdlfSBjdXJyZW50PXtwYWdlfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlKFBhZ2VUeXBlcy5MYW5ndWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57c3RyaW5ncy50YWJzLmxhbmd1YWdlfTwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBrZXkgPSBcImNvbnRlbnRDb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLkFjY291bnR9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5hY2NvdW50LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19PjxzcGFuPntzdHJpbmdzLnNlY3Rpb25zLmFjY291bnQudXNlcm5hbWV9Ojwvc3Bhbj48c3BhbiBzdHlsZT17e21hcmdpbjogXCIwcHggNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIG1heFdpZHRoOiAxMjAsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wifX0+UGhvdG9wY29weTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luOiAwLCBib3JkZXI6IFwibm9uZVwiLCBjdXJzb3I6XCJwb2ludGVyXCIsIGNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWQsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yfX0+RWRpdDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5BcHBlYXJhbmNlfSBjdXJyZW50PXtwYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9e3N0cmluZ3Muc2VjdGlvbnMudGhlbWUudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvU2VsZWN0aW9uIGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy50aGVtZS5saWdodE1vZGUsIHN0cmluZ3Muc2VjdGlvbnMudGhlbWUuZGFya01vZGVdfSBkZWZhdWx0PXsxfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcInRoZW1lXCIsIFwibGlnaHRNb2RlXCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwidGhlbWVcIiwgXCJkYXJrTW9kZVwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjY2VudENvbG9yLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCJyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwib3JhbmdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cInllbGxvd1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NlbnRPcHRpb24gY29sb3I9XCIjMDBGRjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2VudE9wdGlvbiBjb2xvcj1cIiM1YWI3ZmFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjZW50T3B0aW9uIGNvbG9yPVwicHVycGxlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGl0ZW1zPXtbc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRZb3VUdWJlLCBzdHJpbmdzLnNlY3Rpb25zLmVtYmVkcy5lbWJlZFR3aXRjaFN0cmVhbXMsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkVHdpdGNoTGl2ZUNoYXQsIHN0cmluZ3Muc2VjdGlvbnMuZW1iZWRzLmVtYmVkU2NyYXRjaCwgc3RyaW5ncy5zZWN0aW9ucy5lbWJlZHMuZW1iZWRDb2RlRG90T3JnXX0gZGVmYXVsdD17ezA6dHJ1ZSwxOnRydWUsMjp0cnVlfX0gdXBkYXRlZD17KCk9Pnt9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2Ugc2VsZj17UGFnZVR5cGVzLlByaXZhY3l9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5ibG9ja2VkVXNlcnMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlIHNlbGY9e1BhZ2VUeXBlcy5TZXNzaW9uc30gY3VycmVudD17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPXtzdHJpbmdzLnNlY3Rpb25zLmFjdGl2ZVNlc3Npb25zLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tib3JkZXJSYWRpdXM6IDQsIGJhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmFjY2VudENvbG9yLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IDQsIGJveFNpemluZzogXCJib3JkZXItYm94XCIsIGJvcmRlcjpcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvckludmVydGVkfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3Muc2VjdGlvbnMuYWN0aXZlU2Vzc2lvbnMuc2lnbk91dEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZSBzZWxmPXtQYWdlVHlwZXMuTGFuZ3VhZ2V9IGN1cnJlbnQ9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnl9fT57c3RyaW5ncy5zZWN0aW9ucy5sYW5ndWFnZS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9TZWxlY3Rpb24gaXRlbXM9e1tzdHJpbmdzLnNlY3Rpb25zLmxhbmd1YWdlLmVuZ2xpc2gsIHN0cmluZ3Muc2VjdGlvbnMubGFuZ3VhZ2UucmV0YXJkZWRdfSBkZWZhdWx0PXswfSB1cGRhdGVkPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLnNldChcImxhbmd1YWdlXCIsIFwiZW5nbGlzaFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2V0KFwibGFuZ3VhZ2VcIiwgXCJyZXRhcmRlZFwiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3RNb2RhbD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7U2V0dGluZ3NQYWdlLCBQYWdlVHlwZXN9IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBQYWdlVHlwZXMgfSBmcm9tIFwiLi9zZXR0aW5nc3BhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIFRhYkJ1dHRvbihwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e29uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Piwgc2VsZjogUGFnZVR5cGVzLCBjdXJyZW50OiBQYWdlVHlwZXN9Pikge1xyXG5cdGNvbnN0IFtpc092ZXIsIHVwZGF0ZUlzT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0cmV0dXJuIDxidXR0b25cclxuXHRcdFx0b25DbGljaz17cHJvcHMub25DbGlja31cclxuXHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiB7IHVwZGF0ZUlzT3Zlcih0cnVlKSB9fVxyXG5cdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IHsgdXBkYXRlSXNPdmVyKGZhbHNlKSB9fVxyXG5cdFx0XHRzdHlsZT17e2N1cnNvcjpwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD9cInVuc2V0XCI6XCJwb2ludGVyXCIsXHJcblx0XHRcdHpJbmRleDogaXNPdmVyJiZwcm9wcy5zZWxmIT1wcm9wcy5jdXJyZW50PzE6MCwgcG9zaXRpb246XCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHRib3hTaGFkb3c6IGlzT3ZlciYmcHJvcHMuc2VsZiE9cHJvcHMuY3VycmVudCA/IFwiMCA4cHggMTZweCByZ2JhKDAsMCwwLDAuNDQpXCIgOiBcIlwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdGZvbnRTaXplOjIwLFxyXG5cdFx0XHRib3JkZXJSYWRpdXM6IDQsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yU2Vjb25kYXJ5LFxyXG5cdFx0XHRib3JkZXI6XCJub25lXCIsXHJcblx0XHRcdGNvbG9yOiBwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD9TZXR0aW5ncy5jdXJyZW50U3RhdGUuYWNjZW50Q29sb3I6U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcixcclxuXHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIixcclxuXHRcdFx0dHJhbnNpdGlvbjogXCJib3gtc2hhZG93IC41cywgY29sb3IgLjNzXCIsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogMyxcclxuLy9cdFx0XHRmb250V2VpZ2h0OiBwcm9wcy5zZWxmPT09cHJvcHMuY3VycmVudD84MDA6MTAwLFxyXG5cdFx0fX0+XHJcblx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0PC9idXR0b24+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgVGFiQnV0dG9uIH0iLCIvL2kgaGF2ZSBubyBpZGVhIGhvdyBpdCB3b3JrcyBidXQgaXQganVzdCB3b3Jrc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFBvcHVwTWFuYWdlcigpe1xuICAgIGNvbnN0IFtwb3B1cHMsIHNldFBvcHVwc10gPSBSZWFjdC51c2VTdGF0ZTxQb3B1cE9ialtdPihbXSlcbiAgICBjb25zdCBbc3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe3BvcHVwcywgc2V0UG9wdXBzLCByZWNvcmQ6e30gYXMgUmVjb3JkPHN0cmluZywgUG9wdXBPYmo+fSlcblxuICAgIHR5cGUgUG9wdXBPYmogPSB7b3BlbjogYm9vbGVhbiwga2V5OiBzdHJpbmcsIHJlbmRlckZ1bmN0aW9uOiAob3BlbjogYm9vbGVhbik9PlJlYWN0LlJlYWN0RWxlbWVudH1cblxuICAgIHN0YXRlLnNldFBvcHVwcz1zZXRQb3B1cHM7XG4gICAgc3RhdGUucG9wdXBzPXBvcHVwcztcblxuICAgIGZ1bmN0aW9uIEFkZFBvcHVwKGtleTogc3RyaW5nLCBpc09wZW46IGJvb2xlYW4sIGNhbGxiYWNrOiAob25SZXF1ZXN0Q2xvc2U6ICgpPT52b2lkLCBpc09wZW46IGJvb2xlYW4pPT5SZWFjdC5SZWFjdEVsZW1lbnQpe1xuICAgICAgICBjb25zdCBvYmo6IFBvcHVwT2JqID0ge29wZW46IGlzT3Blbiwga2V5OiBrZXksIHJlbmRlckZ1bmN0aW9uOiAob3Blbik9PntcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgICAgIG9iai5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgICAgICAgICAgfSwgb3BlbilcbiAgICAgICAgfX07XG4gICAgICAgIHN0YXRlLnJlY29yZFtrZXldID0gb2JqO1xuICAgICAgICBzdGF0ZS5zZXRQb3B1cHMoWy4uLnN0YXRlLnBvcHVwcywgb2JqXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBSZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIHBvcHVwcy5tYXAoKG9iaik9PntcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXtvYmoua2V5fT57b2JqLnJlbmRlckZ1bmN0aW9uKG9iai5vcGVuKX08L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNldFBvcHVwU3RhdGUoa2V5OiBzdHJpbmcsIG9wZW46IGJvb2xlYW4pe1xuICAgICAgICBzdGF0ZS5yZWNvcmRba2V5XS5vcGVuID0gb3BlbjtcbiAgICAgICAgc3RhdGUuc2V0UG9wdXBzKFsuLi5zdGF0ZS5wb3B1cHNdKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtSZW5kZXIsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlLCBzaG91bGRTaG93T3ZlcmxheTogIXBvcHVwcy5ldmVyeShwb3B1cD0+IXBvcHVwLm9wZW4pfVxufVxuXG5leHBvcnQge1BvcHVwTWFuYWdlcn0iLCIvKipcclxuICogbWlkZGxlbWFuIGJldHdlZW4gc3R1ZmYgdGhhdCBjaGFuZ2VzIHNldHRpbmdzIGFuZCBzdHVmZiB0aGF0IHVzZXMgc2V0dGluZ3NcclxuICogaXQgdHJhbnNmb3JtIHNldHRpbmdzIHN1Y2ggYXMgdGhlIHRoZW1lIGludG8gYSBzZXJpZXMgb2YgXCJjb21wdXRlZFwiIHNldHRpbmdzIChtYWlubHkgc3R5bGVzKSwgdGhpcyB3YXkgc3R1ZmYgaXMgZWFzaWVyIHRvIHR3ZWFrXHJcbiAqL1xyXG5cclxuLy8gaSBkb24ndCBhY3R1YWxseSBwbGFuIHRvIGFkZCBhbnkgbGFuZ3VhZ2VzLCB0aGlzIGlzIGp1c3QgZm9yIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgcmV0YXJkZWQgaXMganVzdCBhIHRlc3QgXCJsYW5ndWFnZVwiIHRvIHNlZSBpZiBpdCB3b3Jrc1xyXG5pbXBvcnQgKiBhcyBlbmdsaXNoIGZyb20gXCIuLi9yZXNvdXJjZXMvbG9jYWxpemF0aW9uL2VuZ2xpc2guanNvblwiXHJcbmltcG9ydCAqIGFzIHJldGFyZGVkIGZyb20gXCIuLi9yZXNvdXJjZXMvbG9jYWxpemF0aW9uL3JldGFyZGVkLmpzb25cIlxyXG5cclxuY29uc3QgbGFuZ3VhZ2VzID0ge2VuZ2xpc2gsIHJldGFyZGVkfVxyXG5cclxuaW50ZXJmYWNlIENvbXB1dGVkU2V0dGluZ3Mge1xyXG5cdGJhY2tncm91bmRDb2xvclRlcnRpYXJ5OiBzdHJpbmc7XHJcblx0YmFja2dyb3VuZENvbG9yUXVhdGVybmFyeTogc3RyaW5nO1xyXG5cdGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdHRleHRDb2xvcjogc3RyaW5nO1xyXG5cdGJhY2tncm91bmRDb2xvclNlY29uZGFyeTogc3RyaW5nO1xyXG5cdGFjY2VudENvbG9yOiBzdHJpbmc7XHJcblx0dGV4dENvbG9yU2Vjb25kYXJ5OiBzdHJpbmc7XHJcblx0dGV4dENvbG9ySW52ZXJ0ZWQ6IHN0cmluZztcclxuXHRzdHJpbmdzOiB0eXBlb2YgbGFuZ3VhZ2VzW1wiZW5nbGlzaFwiXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXJTZXR0aW5ncyB7XHJcblx0bGFuZ3VhZ2U6IGtleW9mIHR5cGVvZiBsYW5ndWFnZXM7XHJcblx0dGhlbWU6IFwiZGFya01vZGVcIiB8IFwibGlnaHRNb2RlXCJcclxuXHRhY2NlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG5jbGFzcyBTZXR0aW5nc0NsYXNzIHtcclxuXHRzdGF0aWMgaW5zdGFuY2UgPSBuZXcgU2V0dGluZ3NDbGFzcyh7fSk7XHJcblx0X3VwZGF0ZT86ICgpPT52b2lkXHJcblx0Y3VycmVudFN0YXRlOiBDb21wdXRlZFNldHRpbmdzXHJcblx0XHJcblx0Y3VycmVudDogVXNlclNldHRpbmdzID0ge3RoZW1lOiBcImRhcmtNb2RlXCIsIGFjY2VudDogXCIjNWFiN2ZhXCIsIGxhbmd1YWdlOiBcImVuZ2xpc2hcIn07XHJcblxyXG5cdHByaXZhdGUgc2V0dGVycyA9IHtcclxuXHRcdGFjY2VudChjdXJyZW50U3RhdGU6IENvbXB1dGVkU2V0dGluZ3MsIGFjY2VudDogVXNlclNldHRpbmdzW1wiYWNjZW50XCJdKXtcclxuXHRcdFx0Y3VycmVudFN0YXRlLmFjY2VudENvbG9yID0gU3RyaW5nKGFjY2VudClcclxuXHRcdH0sXHJcblx0XHR0aGVtZShjdXJyZW50U3RhdGU6IENvbXB1dGVkU2V0dGluZ3MsIHRoZW1lOiBVc2VyU2V0dGluZ3NbXCJ0aGVtZVwiXSl7XHJcblx0XHRcdHN3aXRjaCAodGhlbWUpIHtcclxuXHRcdFx0XHRjYXNlIFwiZGFya01vZGVcIjpcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxNTE2MTdcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50ZXh0Q29sb3IgPSBcIiNGRkZGRkZcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS50ZXh0Q29sb3JTZWNvbmRhcnkgPSBcIiNDQ0NcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnkgPSBcIiMyQTJBMzdcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JUZXJ0aWFyeSA9IFwiIzI0MjQyRVwiXHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSA9IFwiIzFGMUYyOFwiXHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWQgPSBcIiMwMDAwMDBcIlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImxpZ2h0TW9kZVwiOlxyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvciA9IFwiI0ZGRkZGRlwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRleHRDb2xvciA9IFwiIzAwMFwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLnRleHRDb2xvclNlY29uZGFyeSA9IFwiIzMzM1wiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclNlY29uZGFyeSA9IFwiI0Q5RDlEOVwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5ID0gXCIjRTNFM0UzXCI7XHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yUXVhdGVybmFyeSA9IFwiI0VCRUJFQlwiXHJcblx0XHRcdFx0XHRjdXJyZW50U3RhdGUudGV4dENvbG9ySW52ZXJ0ZWQgPSBcIiNGRkZGRkZcIlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRsYW5ndWFnZShjdXJyZW50U3RhdGU6IENvbXB1dGVkU2V0dGluZ3MsIGxhbmd1YWdlOiBVc2VyU2V0dGluZ3NbXCJsYW5ndWFnZVwiXSl7XHJcblx0XHRcdGN1cnJlbnRTdGF0ZS5zdHJpbmdzID0gbGFuZ3VhZ2VzW2xhbmd1YWdlXVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0PHByb3BOYW1lIGV4dGVuZHMga2V5b2YgVXNlclNldHRpbmdzPihwcm9wOiBwcm9wTmFtZSwgdmFsdWU6IFVzZXJTZXR0aW5nc1twcm9wTmFtZV0sIHNob3VsZFVwZGF0ZT86IGZhbHNlKSB7XHJcblx0XHQodGhpcy5zZXR0ZXJzW3Byb3BdIGFzIChzdGF0ZTogQ29tcHV0ZWRTZXR0aW5ncywgdmFsdWU6IHVua25vd24pPT52b2lkKSh0aGlzLmN1cnJlbnRTdGF0ZSwgdmFsdWUpXHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCl7XHJcblx0XHRpZiAodGhpcy5fdXBkYXRlKSB7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsU2V0dGluZ3M6IFBhcnRpYWw8VXNlclNldHRpbmdzPil7XHJcblx0XHR0aGlzLmN1cnJlbnRTdGF0ZSA9IHt9IGFzIENvbXB1dGVkU2V0dGluZ3NcclxuXHRcdGZvciAoY29uc3QgcHJvcCBpbiB0aGlzLmN1cnJlbnQpIHtcclxuXHRcdFx0aWYgKHByb3AgaW4gaW5pdGlhbFNldHRpbmdzKSB7XHJcblx0XHRcdFx0dGhpcy5zZXQocHJvcCBhcyBrZXlvZiBVc2VyU2V0dGluZ3MsIGluaXRpYWxTZXR0aW5nc1twcm9wIGFzIGtleW9mIFVzZXJTZXR0aW5nc10gYXMgVXNlclNldHRpbmdzW2tleW9mIFVzZXJTZXR0aW5nc10sIGZhbHNlKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2V0KHByb3AgYXMga2V5b2YgVXNlclNldHRpbmdzLCB0aGlzLmN1cnJlbnRbcHJvcCBhcyBrZXlvZiBVc2VyU2V0dGluZ3NdIGFzIFVzZXJTZXR0aW5nc1trZXlvZiBVc2VyU2V0dGluZ3NdLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBTZXR0aW5ncyA9IFNldHRpbmdzQ2xhc3MuaW5zdGFuY2VcclxuXHJcbmV4cG9ydCB7U2V0dGluZ3N9XHJcbmV4cG9ydCB0eXBlIHtDb21wdXRlZFNldHRpbmdzfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2V0dGluZ3MsIENvbXB1dGVkU2V0dGluZ3MgfSBmcm9tICcuLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgeyBUYWJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3NldHRpbmdzcGFnZS90YWJidXR0b24nXHJcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0dGluZ3NwYWdlL3NldHRpbmdzcGFnZSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvcG9zdCdcclxuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vbW9kdWxlcy9wb3B1cG1hbmFnZXInXHJcbmltcG9ydCB7IFNpZGViYXJCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL21haW5jb250ZW50L3NpZGViYXJidXR0b24nXHJcblxyXG5mdW5jdGlvbiBQb3B1cENvbnRhaW5lcihwcm9wczoge2NhbGxiYWNrOiAocG9wdXBNZXRob2RzOiBSZXR1cm5UeXBlPHR5cGVvZiBQb3B1cE1hbmFnZXI+KT0+dm9pZCwgaW5pdDogKHBvcHVwTWV0aG9kczogUmV0dXJuVHlwZTx0eXBlb2YgUG9wdXBNYW5hZ2VyPik9PnZvaWR9KXtcclxuXHRjb25zdCBwb3B1cE1ldGhvZHMgPSBQb3B1cE1hbmFnZXIoKTtcclxuXHRjb25zdCB7UmVuZGVyOiBSZW5kZXJQb3B1cHMsIEFkZFBvcHVwLCBTZXRQb3B1cFN0YXRlLCBzaG91bGRTaG93T3ZlcmxheX0gPSBwb3B1cE1ldGhvZHM7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+e1xyXG5cdFx0cHJvcHMuaW5pdChwb3B1cE1ldGhvZHMpO1xyXG5cdH0sIFtdKVxyXG5cclxuXHRwcm9wcy5jYWxsYmFjayhwb3B1cE1ldGhvZHMpO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHBvaW50ZXJFdmVudHM6IHNob3VsZFNob3dPdmVybGF5P1widW5zZXRcIjpcIm5vbmVcIiwgYmFja2Ryb3BGaWx0ZXI6IHNob3VsZFNob3dPdmVybGF5P1wiYmx1cig1cHgpXCI6XCJ1bnNldFwiLCB0cmFuc2l0aW9uOiBcImJhY2tkcm9wLWZpbHRlciAuNXNcIn19Lz5cclxuXHRcdHtSZW5kZXJQb3B1cHMoKX1cclxuXHQ8Lz5cclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IFtub25jZSwgdXBkYXRlXSA9IHVzZVN0YXRlKDApO1xyXG5cdFNldHRpbmdzLl91cGRhdGUgPSAoKT0+e1xyXG5cdFx0dXBkYXRlKG5vbmNlKzEpXHJcblx0fTtcclxuXHJcblx0Ly9pdCBjb3VudHMgdXAgZm9yIGV2ZXJ5IHBvcHVwLCBhbmQgY291bnRzIGRvd24gZXZlcnl0aW1lIG9uZSBpcyBjbG9zZWQsIHRoYXQgd2F5IHlvdSBjYW4gaGF2ZSAwIHRvIGluZGljYXRlIHRoYXQgYWxsIHBvcHVwcyBhcmUgY2xvc2VkXHJcblx0Ly9pbSBub3Qgc3VyZSBpZiB0aGlzIGNvdWxkIGxlYWQgdG8gYSBidWcgaWYgdGhlIG51bWJlciBpcyB1bmV4cGVjdGVkbHksIGJ1dCBpdCB3b3JrcyBpbiB0aGVvcnlcclxuXHRcclxuXHRjb25zdCBbc3RhdGVdID0gdXNlU3RhdGU8e3BvcHVwTWV0aG9kcz86IFJldHVyblR5cGU8dHlwZW9mIFBvcHVwTWFuYWdlcj59Pih7fSk7XHJcblx0XHJcblx0Y29uc3Qgc3RyaW5ncyA9IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5zdHJpbmdzLm1haW5wYWdlO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvcn07XHJcblx0XHRcdFx0Y29sb3I6ICR7U2V0dGluZ3MuY3VycmVudFN0YXRlLnRleHRDb2xvcn07XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdTRiBNb25vJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRAaW1wb3J0XHJcblx0XHRcdHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJylcclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0T2ggYmFieSBhIHRyaXBsZSFcclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxub3NjcmlwdD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgekluZGV4OiAxMDB9fT5cclxuXHRcdFx0PGgxPkVuYWJsZSBqYXZhc2NyaXB0IHJldGFyZC48L2gxPlxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubmhlbnRhaS5uZXQvZy8zNjQ2MjRcIj5DbGljayBtZSBmb3IgYSBzdXJwcmlzZTwvYT5cclxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19Pkp1c3Qga2lkZGluZyBkb250IGNsaWNrIGl0IGxtYW88L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9ub3NjcmlwdD5cclxuXHRcdDxkaXYga2V5PVwibWFpbkNvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcblx0XHRcdDxkaXYga2V5PVwiY29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IDEyMDAsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDogXCI1MCVcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlKVwiLCBkaXNwbGF5OlwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcblx0XHRcdFx0PGRpdiBrZXk9XCJzaWRlYmFyTGVmdFwiIHN0eWxlPXt7d2lkdGg6IDIwMCwgbWluV2lkdGg6IDIwMCwgcGFkZGluZzogXCIwcHggNHB4XCJ9fT5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFNldHRpbmdzLmN1cnJlbnRTdGF0ZS5iYWNrZ3JvdW5kQ29sb3JTZWNvbmRhcnksIGJvcmRlcldpZHRoOiA2LCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsIGJvcmRlckNvbG9yOiBTZXR0aW5ncy5jdXJyZW50U3RhdGUuYmFja2dyb3VuZENvbG9yVGVydGlhcnksIGJvcmRlclJhZGl1czogNH19PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogMTAwMH19PjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6IDQwfX0+UGhvdG9wPC9zcGFuPmNvcHk8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogU2V0dGluZ3MuY3VycmVudFN0YXRlLmJhY2tncm91bmRDb2xvclRlcnRpYXJ5LCBtYXJnaW5Ub3A6IDQsIGJvcmRlclJhZGl1czogNCwgcGFkZGluZzogXCI0cHggNHB4IDBweCA0cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8U2lkZWJhckJ1dHRvbiBvbkNsaWNrPXsoKT0+e319PntzdHJpbmdzLnNpZGViYXIucmVmcmVzaH08L1NpZGViYXJCdXR0b24+XHJcblx0XHRcdFx0XHRcdDxTaWRlYmFyQnV0dG9uIG9uQ2xpY2s9eygpPT57fX0+e3N0cmluZ3Muc2lkZWJhci5wb3N0fTwvU2lkZWJhckJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PFNpZGViYXJCdXR0b24gb25DbGljaz17KCk9PntcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZS5wb3B1cE1ldGhvZHM/LlNldFBvcHVwU3RhdGUoXCJTZXR0aW5nc01lbnVcIiwgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0fX0+e3N0cmluZ3Muc2lkZWJhci5zZXR0aW5nc308L1NpZGViYXJCdXR0b24+XHJcblx0XHRcdFx0XHRcdDxTaWRlYmFyQnV0dG9uIG9uQ2xpY2s9eygpPT57fX0+e3N0cmluZ3Muc2lkZWJhci5sb2dvdXR9PC9TaWRlYmFyQnV0dG9uPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwicG9zdENvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XHJcblx0XHRcdFx0XHQ8UG9zdCBwb3N0SWQ9XCJicnVqXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYga2V5PVwic2lkZWJhclJpZ2h0XCIgc3R5bGU9e3ttaW5XaWR0aDogMjAwLCB3aWR0aDogMjAwfX0+XHJcblx0XHRcdFx0XHRSb2Jsb3ggQWQgR29lcyBoZXJlXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8UG9wdXBDb250YWluZXIgY2FsbGJhY2s9eyhwb3B1cE1ldGhvZHMpPT57XHJcblx0XHRcdHN0YXRlLnBvcHVwTWV0aG9kcyA9IHBvcHVwTWV0aG9kcztcclxuXHRcdH19IGluaXQ9eyhwb3B1cE1ldGhvZHMpPT57XHJcblx0XHRcdHBvcHVwTWV0aG9kcy5BZGRQb3B1cChcIlNldHRpbmdzTWVudVwiLCBmYWxzZSwgKG9uUmVxdWVzdENsb3NlLCBpc09wZW4pPT57XHJcblx0XHRcdFx0cmV0dXJuIDxTZXR0aW5nc1BhZ2VcclxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuXHRcdFx0XHRcdGlzT3Blbj17aXNPcGVufVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdH0pXHJcblx0XHR9fS8+XHJcblx0PC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0XCI6IFwicG9zdF9wb3N0X19pQmlmdlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9kYWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==