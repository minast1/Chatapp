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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"./node_modules/@material-ui/core/esm/FormControlLabel/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ \"./node_modules/@material-ui/core/esm/Link/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"./node_modules/@material-ui/icons/LockOutlined.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _lib_authStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/authStore */ \"./lib/authStore.ts\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/chatapp/components/Signin.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\",\n    children: ['Copyright © ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n      color: \"inherit\",\n      href: \"https://material-ui.com/\",\n      children: \"Edmond Marfo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), ' ', new Date().getFullYear(), '.']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Copyright;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return {\n    paper: {\n      marginTop: theme.spacing(8),\n      padding: theme.spacing(3),\n      //border : '1px solid darkgray', \n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center' //backgroundColor : theme.palette.grey[100]\n\n    },\n    avatar: {\n      margin: theme.spacing(1),\n      backgroundColor: theme.palette.secondary.main\n    },\n    form: {\n      width: '100%',\n      // Fix IE 11 issue.\n      marginTop: theme.spacing(1)\n    },\n    submit: {\n      margin: theme.spacing(3, 0, 2)\n    },\n    textFieldRoot: {\n      \"&$notchedOutline\": {\n        borderColor: \"green\"\n      }\n    },\n    notchedOutline: {}\n  };\n});\nfunction SignIn() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useStore = (0,_lib_authStore__WEBPACK_IMPORTED_MODULE_1__.useStore)(),\n      setAuthView = _useStore.setAuthView,\n      error = _useStore.error,\n      loading = _useStore.loading,\n      handleSignIn = _useStore.handleSignIn,\n      setEmail = _useStore.setEmail,\n      setPassword = _useStore.setPassword,\n      email = _useStore.email,\n      password = _useStore.password;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__.default, {\n    component: \"main\",\n    maxWidth: \"xs\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Paper, {\n      className: classes.paper,\n      elevation: 5,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {\n        className: classes.avatar,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {\n        component: \"h1\",\n        variant: \"h5\",\n        children: \"Sign in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        className: classes.form,\n        onSubmit: function onSubmit(e) {\n          return handleSignIn(e);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"outlined\",\n          InputProps: {\n            classes: {\n              notchedOutline: classes.textFieldRoot\n            }\n          },\n          margin: \"normal\",\n          required: true,\n          error: error.includes(\"credentials\") || error.includes(\"email\") ? true : false,\n          helperText: error.includes(\"credentials\") || error.includes(\"email\") ? \"Invalid Login Credentials\" : '',\n          defaultValue: email,\n          onChange: function onChange(e) {\n            return setEmail(e.target.value);\n          },\n          fullWidth: true,\n          id: \"email\",\n          label: \"Email Address\",\n          name: \"email\",\n          autoComplete: \"email\",\n          autoFocus: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"outlined\",\n          margin: \"normal\",\n          required: true,\n          error: error.includes(\"credentials\") || error.includes(\"password\") ? true : false,\n          defaultValue: password,\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          },\n          fullWidth: true,\n          name: \"password\",\n          label: \"Password\",\n          type: \"password\",\n          id: \"password\",\n          autoComplete: \"current-password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__.default, {\n          control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__.default, {\n            value: \"remember\",\n            color: \"primary\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 22\n          }, this),\n          label: \"Remember me\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__.default, {\n          type: \"submit\",\n          fullWidth: true,\n          variant: \"contained\",\n          color: \"primary\",\n          className: classes.submit,\n          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__.default, {\n            color: \"inherit\",\n            size: 20\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 25\n          }, this) : \"SignIn\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n          container: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n            item: true,\n            xs: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n              href: \"#\",\n              variant: \"body2\",\n              children: \"Forgot password?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {\n            item: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n              variant: \"body2\",\n              component: \"button\",\n              onClick: function onClick(e) {\n                e.preventDefault();\n                setAuthView('sign_up');\n              },\n              children: \"Don't have an account? Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 141,\n              columnNumber: 27\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__.default, {\n      mt: 8,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Copyright, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SignIn, \"0f5/JO4T/aqSwjbBvcLsjemCNR8=\", false, function () {\n  return [useStyles, _lib_authStore__WEBPACK_IMPORTED_MODULE_1__.useStore];\n});\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Copyright\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxHQUNMO0FBVE47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q0YsZUFzREUsOERBQUMsNERBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQUEsa0NBQ0UsOERBQUMsNERBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxNQUFiO0FBQUEsbUNBQ0UsOERBQUMsMkRBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBZSxxQkFBTyxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FLDhEQUFDLDREQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFBLG1DQUNjLDhEQUFDLDJEQUFEO0FBQU0scUJBQU8sRUFBQyxPQUFkO0FBQXNCLHVCQUFTLEVBQUMsUUFBaEM7QUFBeUMscUJBQU8sRUFBRSxpQkFBQ00sQ0FBRCxFQUFPO0FBQ3JEQSxnQkFBQUEsQ0FBQyxDQUFDSSxjQUFGO0FBQ0FaLGdCQUFBQSxXQUFXLENBQUMsU0FBRCxDQUFYO0FBQ2YsZUFIVztBQUFBLHdCQUlUO0FBSlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWdGRSw4REFBQywyREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUEsNkJBQ0UsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNGRDs7R0EzRnVCRjtVQUNOckIsV0FDNEVMOzs7TUFGdEUwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ25pbi50c3g/MWU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IHsgIFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9saWIvYXV0aFN0b3JlJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG5cblxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxuICAgICAgICBFZG1vbmQgTWFyZm9cbiAgICAgIDwvTGluaz57JyAnfVxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgIHsnLid9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcGFwZXI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICBcbiAgICAgICAgIC8vYm9yZGVyIDogJzFweCBzb2xpZCBkYXJrZ3JheScsIFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgLy9iYWNrZ3JvdW5kQ29sb3IgOiB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICB9LFxuICBmb3JtOiB7XG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICAgIH0sXG4gICAgdGV4dEZpZWxkUm9vdDoge1xuICAgICAgICBcIiYkbm90Y2hlZE91dGxpbmVcIjoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBcImdyZWVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgfSxcbiAgICBub3RjaGVkT3V0bGluZToge31cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgc2V0QXV0aFZpZXcsIGVycm9yLCBsb2FkaW5nLCBoYW5kbGVTaWduSW4gLCBzZXRFbWFpbCwgc2V0UGFzc3dvcmQsZW1haWwscGFzc3dvcmR9ID0gdXNlU3RvcmUoKTtcbiAgXG4gXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezV9PlxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XG4gICAgICAgIDwvQXZhdGFyPlxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTaWduSW4oZSl9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiAgICAgICAgICBcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vdGNoZWRPdXRsaW5lOiBjbGFzc2VzLnRleHRGaWVsZFJvb3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGVycm9yPXtlcnJvci5pbmNsdWRlcyhcImNyZWRlbnRpYWxzXCIpIHx8IGVycm9yLmluY2x1ZGVzKFwiZW1haWxcIikgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvci5pbmNsdWRlcyhcImNyZWRlbnRpYWxzXCIpfHwgZXJyb3IuaW5jbHVkZXMoXCJlbWFpbFwiKSAgPyBcIkludmFsaWQgTG9naW4gQ3JlZGVudGlhbHNcIiA6ICcnfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yLmluY2x1ZGVzKFwiY3JlZGVudGlhbHNcIikgfHwgZXJyb3IuaW5jbHVkZXMoXCJwYXNzd29yZFwiKT8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cInJlbWVtYmVyXCIgY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICB7XG4gICAgICAgICAgICAgIGxvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiBzaXplPXsyMH0gLz4gOlxuICAgICAgICAgICAgICAgIFwiU2lnbkluXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cImJvZHkyXCIgY29tcG9uZW50PVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXV0aFZpZXcoJ3NpZ25fdXAnKVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxCb3ggbXQ9ezh9PlxuICAgICAgICA8Q29weXJpZ2h0IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJCdXR0b24iLCJDc3NCYXNlbGluZSIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sTGFiZWwiLCJDaGVja2JveCIsIkxpbmsiLCJHcmlkIiwiQm94IiwiTG9ja091dGxpbmVkSWNvbiIsIlR5cG9ncmFwaHkiLCJtYWtlU3R5bGVzIiwiQ29udGFpbmVyIiwiUGFwZXIiLCJ1c2VTdG9yZSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJhdmF0YXIiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsInN1Ym1pdCIsInRleHRGaWVsZFJvb3QiLCJib3JkZXJDb2xvciIsIm5vdGNoZWRPdXRsaW5lIiwiU2lnbkluIiwiY2xhc3NlcyIsInNldEF1dGhWaWV3IiwiZXJyb3IiLCJsb2FkaW5nIiwiaGFuZGxlU2lnbkluIiwic2V0RW1haWwiLCJzZXRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signin.tsx\n");

/***/ })

});