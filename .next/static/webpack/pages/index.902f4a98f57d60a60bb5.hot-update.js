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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"./node_modules/@material-ui/core/esm/FormControlLabel/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ \"./node_modules/@material-ui/core/esm/Link/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"./node_modules/@material-ui/icons/LockOutlined.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _lib_authStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/authStore */ \"./lib/authStore.ts\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/chatapp/components/Signin.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\",\n    children: ['Copyright © ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n      color: \"inherit\",\n      href: \"https://material-ui.com/\",\n      children: \"Edmond Marfo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), ' ', new Date().getFullYear(), '.']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Copyright;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return {\n    paper: {\n      marginTop: theme.spacing(8),\n      padding: theme.spacing(3),\n      //border : '1px solid darkgray', \n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center' //backgroundColor : theme.palette.grey[100]\n\n    },\n    avatar: {\n      margin: theme.spacing(1),\n      backgroundColor: theme.palette.secondary.main\n    },\n    form: {\n      width: '100%',\n      // Fix IE 11 issue.\n      marginTop: theme.spacing(1)\n    },\n    submit: {\n      margin: theme.spacing(3, 0, 2)\n    },\n    root: {\n      '&$notchedOutline': {\n        borderColor: 'green'\n      }\n    },\n    notchedOutline: {}\n  };\n});\nfunction SignIn() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useStore = (0,_lib_authStore__WEBPACK_IMPORTED_MODULE_1__.useStore)(),\n      setAuthView = _useStore.setAuthView,\n      error = _useStore.error,\n      loading = _useStore.loading,\n      handleSignIn = _useStore.handleSignIn,\n      setEmail = _useStore.setEmail,\n      setPassword = _useStore.setPassword,\n      email = _useStore.email,\n      password = _useStore.password;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__.default, {\n    component: \"main\",\n    maxWidth: \"xs\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Paper, {\n      className: classes.paper,\n      elevation: 5,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {\n        className: classes.avatar,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n        component: \"h1\",\n        variant: \"h5\",\n        children: \"Sign in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        className: classes.form,\n        onSubmit: function onSubmit(e) {\n          return handleSignIn(e);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"outlined\",\n          InputProps: {\n            classes: {\n              root: classes.root,\n              notchedOutline: classes.notchedOutline\n            }\n          },\n          margin: \"normal\",\n          required: true,\n          error: error.includes(\"credentials\") || error.includes(\"email\") ? true : false,\n          helperText: error.includes(\"credentials\") || error.includes(\"email\") ? \"Invalid Login Credentials\" : '',\n          defaultValue: email,\n          onChange: function onChange(e) {\n            return setEmail(e.target.value);\n          },\n          fullWidth: true,\n          id: \"email\",\n          label: \"Email Address\",\n          name: \"email\",\n          autoComplete: \"email\",\n          autoFocus: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"outlined\",\n          margin: \"normal\",\n          required: true,\n          error: error.includes(\"credentials\") || error.includes(\"password\") ? true : false,\n          defaultValue: password,\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          },\n          fullWidth: true,\n          name: \"password\",\n          label: \"Password\",\n          type: \"password\",\n          id: \"password\",\n          autoComplete: \"current-password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__.default, {\n          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__.default, {\n            value: \"remember\",\n            color: \"primary\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 22\n          }, this),\n          label: \"Remember me\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {\n          type: \"submit\",\n          fullWidth: true,\n          variant: \"contained\",\n          color: \"primary\",\n          className: classes.submit,\n          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__.default, {\n            color: \"inherit\",\n            size: 20\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 25\n          }, this) : \"SignIn\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n          container: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n            item: true,\n            xs: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n              href: \"#\",\n              variant: \"body2\",\n              children: \"Forgot password?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n            item: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n              variant: \"body2\",\n              component: \"button\",\n              onClick: function onClick(e) {\n                e.preventDefault();\n                setAuthView('sign_up');\n              },\n              children: \"Don't have an account? Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 144,\n              columnNumber: 27\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__.default, {\n      mt: 8,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Copyright, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SignIn, \"0f5/JO4T/aqSwjbBvcLsjemCNR8=\", false, function () {\n  return [useStyles, _lib_authStore__WEBPACK_IMPORTED_MODULE_1__.useStore];\n});\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Copyright\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmVudHMvU2lnbmluLnRzeD8xZTQ5Il0sInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgeyAgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL2xpYi9hdXRoU3RvcmUnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cblxuXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XG4gICAgICAgIEVkbW9uZCBNYXJmb1xuICAgICAgPC9MaW5rPnsnICd9XG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgeycuJ31cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBwYXBlcjoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIFxuICAgICAgICAgLy9ib3JkZXIgOiAnMXB4IHNvbGlkIGRhcmtncmF5JywgXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAvL2JhY2tncm91bmRDb2xvciA6IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgICcmJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ2dyZWVuJ1xuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgIH0sXG4gICAgbm90Y2hlZE91dGxpbmU6IHt9XG4gICAgICAgIFxuICAgXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHNldEF1dGhWaWV3LCBlcnJvciwgbG9hZGluZywgaGFuZGxlU2lnbkluICwgc2V0RW1haWwsIHNldFBhc3N3b3JkLGVtYWlsLHBhc3N3b3JkfSA9IHVzZVN0b3JlKCk7XG4gIFxuIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXs1fT5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICBTaWduIGluXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU2lnbkluKGUpfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgICAgICAgICAgXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnJvb3QsXG4gICAgICAgICAgICAgICAgIG5vdGNoZWRPdXRsaW5lOiBjbGFzc2VzLm5vdGNoZWRPdXRsaW5lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3IuaW5jbHVkZXMoXCJjcmVkZW50aWFsc1wiKSB8fCBlcnJvci5pbmNsdWRlcyhcImVtYWlsXCIpID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3IuaW5jbHVkZXMoXCJjcmVkZW50aWFsc1wiKXx8IGVycm9yLmluY2x1ZGVzKFwiZW1haWxcIikgID8gXCJJbnZhbGlkIExvZ2luIENyZWRlbnRpYWxzXCIgOiAnJ31cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvci5pbmNsdWRlcyhcImNyZWRlbnRpYWxzXCIpIHx8IGVycm9yLmluY2x1ZGVzKFwicGFzc3dvcmRcIik/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJyZW1lbWJlclwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgICAgbGFiZWw9XCJSZW1lbWJlciBtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAge1xuICAgICAgICAgICAgICBsb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgc2l6ZT17MjB9IC8+IDpcbiAgICAgICAgICAgICAgICBcIlNpZ25JblwiXG4gICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF1dGhWaWV3KCdzaWduX3VwJylcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge1wiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBTaWduIFVwXCJ9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8Qm94IG10PXs4fT5cbiAgICAgICAgPENvcHlyaWdodCAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQnV0dG9uIiwiQ3NzQmFzZWxpbmUiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbExhYmVsIiwiQ2hlY2tib3giLCJMaW5rIiwiR3JpZCIsIkJveCIsIkxvY2tPdXRsaW5lZEljb24iLCJUeXBvZ3JhcGh5IiwibWFrZVN0eWxlcyIsIkNvbnRhaW5lciIsIlBhcGVyIiwidXNlU3RvcmUiLCJDaXJjdWxhclByb2dyZXNzIiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwidGhlbWUiLCJwYXBlciIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYXZhdGFyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJmb3JtIiwid2lkdGgiLCJzdWJtaXQiLCJyb290IiwiYm9yZGVyQ29sb3IiLCJub3RjaGVkT3V0bGluZSIsIlNpZ25JbiIsImNsYXNzZXMiLCJzZXRBdXRoVmlldyIsImVycm9yIiwibG9hZGluZyIsImhhbmRsZVNpZ25JbiIsInNldEVtYWlsIiwic2V0UGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZSIsImluY2x1ZGVzIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Signin.tsx\n");

/***/ })

});