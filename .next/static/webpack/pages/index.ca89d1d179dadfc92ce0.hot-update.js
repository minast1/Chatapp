"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Signin.tsx":
/*!*******************************!*\
  !*** ./components/Signin.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"./node_modules/@material-ui/core/esm/FormControlLabel/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ \"./node_modules/@material-ui/core/esm/Link/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"./node_modules/@material-ui/icons/LockOutlined.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _lib_authStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/authStore */ \"./lib/authStore.ts\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/chatapp/components/Signin.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\",\n    children: ['Copyright © ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n      color: \"inherit\",\n      href: \"https://material-ui.com/\",\n      children: \"Edmond Marfo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), ' ', new Date().getFullYear(), '.']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Copyright;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return {\n    paper: {\n      marginTop: theme.spacing(8),\n      padding: theme.spacing(3),\n      //border : '1px solid darkgray', \n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center' //backgroundColor : theme.palette.grey[100]\n\n    },\n    avatar: {\n      margin: theme.spacing(1),\n      backgroundColor: theme.palette.secondary.main\n    },\n    form: {\n      width: '100%',\n      // Fix IE 11 issue.\n      marginTop: theme.spacing(1)\n    },\n    submit: {\n      margin: theme.spacing(3, 0, 2),\n      color: 'white',\n      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',\n      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',\n      height: 45\n    },\n    Buttonroot: {}\n  };\n});\nfunction SignIn() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useStore = (0,_lib_authStore__WEBPACK_IMPORTED_MODULE_1__.useStore)(),\n      setAuthView = _useStore.setAuthView,\n      error = _useStore.error,\n      loading = _useStore.loading,\n      handleSignIn = _useStore.handleSignIn,\n      setEmail = _useStore.setEmail,\n      setPassword = _useStore.setPassword,\n      email = _useStore.email,\n      password = _useStore.password;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__.default, {\n    component: \"main\",\n    maxWidth: \"xs\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Paper, {\n      className: classes.paper,\n      elevation: 5,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {\n        className: classes.avatar,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n        component: \"h1\",\n        variant: \"h5\",\n        children: \"Sign in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        className: classes.form,\n        onSubmit: function onSubmit(e) {\n          return handleSignIn(e);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"outlined\",\n          margin: \"normal\",\n          required: true,\n          error: error.includes(\"credentials\") || error.includes(\"email\") ? true : false,\n          helperText: error.includes(\"credentials\") || error.includes(\"email\") ? \"Invalid Login Credentials\" : '',\n          defaultValue: email,\n          onChange: function onChange(e) {\n            return setEmail(e.target.value);\n          },\n          fullWidth: true,\n          id: \"email\",\n          label: \"Email Address\",\n          name: \"email\",\n          autoComplete: \"email\",\n          autoFocus: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"outlined\",\n          margin: \"normal\",\n          required: true,\n          error: error.includes(\"credentials\") || error.includes(\"password\") ? true : false,\n          defaultValue: password,\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          },\n          fullWidth: true,\n          name: \"password\",\n          label: \"Password\",\n          type: \"password\",\n          id: \"password\",\n          autoComplete: \"current-password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__.default, {\n          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__.default, {\n            value: \"remember\",\n            color: \"primary\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 22\n          }, this),\n          label: \"Remember me\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {\n          type: \"submit\",\n          fullWidth: true,\n          variant: \"contained\",\n          color: \"primary\",\n          className: classes.submit,\n          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__.default, {\n            color: \"inherit\",\n            size: 20\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 25\n          }, this) : \"SignIn\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n          container: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n            item: true,\n            xs: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n              href: \"#\",\n              variant: \"body2\",\n              color: \"inherit\",\n              underline: \"none\",\n              children: \"Forgot password?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n            item: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n              variant: \"body2\",\n              style: {\n                fontSize: 20\n              },\n              underline: \"none\",\n              color: \"inherit\",\n              component: \"button\",\n              onClick: function onClick(e) {\n                e.preventDefault();\n                setAuthView('sign_up');\n              },\n              children: \"Don't have an account? Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 14\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__.default, {\n      mt: 8,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Copyright, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SignIn, \"0f5/JO4T/aqSwjbBvcLsjemCNR8=\", false, function () {\n  return [useStyles, _lib_authStore__WEBPACK_IMPORTED_MODULE_1__.useStore];\n});\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Copyright\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lnbmluLnRzeD8xZTQ5Il0sInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgeyAgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL2xpYi9hdXRoU3RvcmUnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cblxuXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XG4gICAgICAgIEVkbW9uZCBNYXJmb1xuICAgICAgPC9MaW5rPnsnICd9XG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgeycuJ31cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBwYXBlcjoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIFxuICAgICAgICAgLy9ib3JkZXIgOiAnMXB4IHNvbGlkIGRhcmtncmF5JywgXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAvL2JhY2tncm91bmRDb2xvciA6IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcbiAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKScsXG4gICAgICBib3hTaGFkb3c6ICcwIDNweCA1cHggMnB4IHJnYmEoMzMsIDIwMywgMjQzLCAuMyknLFxuICAgICAgICBoZWlnaHQ6IDQ1XG4gICAgfSxcbiAgICBCdXR0b25yb290OiB7XG4gICAgICAgXG4gICAgICAgICBcbiAgICB9LFxuICAgXG4gICAgICAgIFxuICAgXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHNldEF1dGhWaWV3LCBlcnJvciwgbG9hZGluZywgaGFuZGxlU2lnbkluICwgc2V0RW1haWwsIHNldFBhc3N3b3JkLGVtYWlsLHBhc3N3b3JkfSA9IHVzZVN0b3JlKCk7XG4gIFxuIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs1fT5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICBTaWduIGluXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU2lnbkluKGUpfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgICAgICAgICAgXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvci5pbmNsdWRlcyhcImNyZWRlbnRpYWxzXCIpIHx8IGVycm9yLmluY2x1ZGVzKFwiZW1haWxcIikgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvci5pbmNsdWRlcyhcImNyZWRlbnRpYWxzXCIpfHwgZXJyb3IuaW5jbHVkZXMoXCJlbWFpbFwiKSAgPyBcIkludmFsaWQgTG9naW4gQ3JlZGVudGlhbHNcIiA6ICcnfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yLmluY2x1ZGVzKFwiY3JlZGVudGlhbHNcIikgfHwgZXJyb3IuaW5jbHVkZXMoXCJwYXNzd29yZFwiKT8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cInJlbWVtYmVyXCIgY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICB7XG4gICAgICAgICAgICAgIGxvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiBzaXplPXsyMH0gLz4gOlxuICAgICAgICAgICAgICAgIFwiU2lnbkluXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiaW5oZXJpdFwiIHVuZGVybGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IDIwfX1cbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBzZXRBdXRoVmlldygnc2lnbl91cCcpXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBVcFwifVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPEJveCBtdD17OH0+XG4gICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiTGluayIsIkdyaWQiLCJCb3giLCJMb2NrT3V0bGluZWRJY29uIiwiVHlwb2dyYXBoeSIsIm1ha2VTdHlsZXMiLCJDb250YWluZXIiLCJQYXBlciIsInVzZVN0b3JlIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInVzZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiZm9ybSIsIndpZHRoIiwic3VibWl0IiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwiaGVpZ2h0IiwiQnV0dG9ucm9vdCIsIlNpZ25JbiIsImNsYXNzZXMiLCJzZXRBdXRoVmlldyIsImVycm9yIiwibG9hZGluZyIsImhhbmRsZVNpZ25JbiIsInNldEVtYWlsIiwic2V0UGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZSIsImluY2x1ZGVzIiwidGFyZ2V0IiwidmFsdWUiLCJmb250U2l6ZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signin.tsx\n");

/***/ })

});