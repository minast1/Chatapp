"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/esm/colors/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// Create a theme instance.\nvar theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    type: 'dark',\n    primary: {\n      main: 'rgba(255, 255, 255, 0.08)' //'#1f232a',\n\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n    },\n    background: {\n      \"default\": '#303030'\n    }\n  },\n  typography: {\n    fontFamily: 'Segoe UI'\n  },\n  overrides: {\n    MuiListItem: {\n      root: {\n        marginRight: '8px',\n        '&$selected': {\n          backgroundColor: '#1f232a'\n        }\n      },\n      button: {\n        '&:hover': {\n          backgroundColor: '#1f232a'\n        }\n      }\n    },\n    MuiListItemText: {\n      primary: {\n        color: 'lightgray',\n        fontSize: '18px'\n      },\n      secondary: {\n        color: 'lightgray',\n        fontSize: '14px'\n      }\n    },\n    MuiToolbar: {\n      root: {\n        minHeight: 35,\n        //height: 45,\n        alignItems: 'center',\n        //paddingTop: theme.spacing(1),\n        paddingBottom: '10px'\n      }\n    },\n    MuiAppBar: {\n      root: {\n        height: 57\n      }\n    },\n    MuiButtonBase: {\n      root: {\n        padding: '10px',\n        color: 'gray'\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBLElBQU1FLEtBQUssR0FBR0YscUVBQVcsQ0FBQztBQUN0QkcsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRTtBQUNMQyxNQUFBQSxJQUFJLEVBQUUsMkJBREQsQ0FDNkI7O0FBRDdCLEtBRko7QUFLTEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1BELE1BQUFBLElBQUksRUFBRTtBQURDLEtBTE47QUFRTEUsSUFBQUEsS0FBSyxFQUFFO0FBQ0hGLE1BQUFBLElBQUksRUFBRUwsOERBQVFRO0FBRFgsS0FSRjtBQVdMQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUztBQUREO0FBWFAsR0FEYTtBQWdCdEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFESixHQWhCVTtBQW1CdEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNQQyxJQUFBQSxXQUFXLEVBQUU7QUFDVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLFdBQVcsRUFBRSxLQURYO0FBRUYsc0JBQWM7QUFDVkMsVUFBQUEsZUFBZSxFQUFFO0FBRFA7QUFGWixPQURHO0FBUVRDLE1BQUFBLE1BQU0sRUFBRTtBQUNKLG1CQUFXO0FBQ1BELFVBQUFBLGVBQWUsRUFBRTtBQURWO0FBRFA7QUFSQyxLQUROO0FBZ0JQRSxJQUFBQSxlQUFlLEVBQUU7QUFDYmQsTUFBQUEsT0FBTyxFQUFFO0FBQ0xlLFFBQUFBLEtBQUssRUFBRSxXQURGO0FBRUxDLFFBQUFBLFFBQVEsRUFBRTtBQUZMLE9BREk7QUFLYmQsTUFBQUEsU0FBUyxFQUFFO0FBQ1BhLFFBQUFBLEtBQUssRUFBRSxXQURBO0FBRVBDLFFBQUFBLFFBQVEsRUFBRTtBQUZIO0FBTEUsS0FoQlY7QUEwQlBDLElBQUFBLFVBQVUsRUFBRTtBQUNSUCxNQUFBQSxJQUFJLEVBQUU7QUFDRlEsUUFBQUEsU0FBUyxFQUFFLEVBRFQ7QUFFRjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsUUFIVjtBQUlGO0FBQ0FDLFFBQUFBLGFBQWEsRUFBRTtBQUxiO0FBREUsS0ExQkw7QUFvQ1BDLElBQUFBLFNBQVMsRUFBRTtBQUNQWCxNQUFBQSxJQUFJLEVBQUU7QUFDRlksUUFBQUEsTUFBTSxFQUFFO0FBRE47QUFEQyxLQXBDSjtBQXlDUEMsSUFBQUEsYUFBYSxFQUFFO0FBQ1hiLE1BQUFBLElBQUksRUFBRTtBQUNGYyxRQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGVCxRQUFBQSxLQUFLLEVBQUU7QUFGTDtBQURLO0FBekNSO0FBbkJXLENBQUQsQ0FBekI7QUF1RUEsK0RBQWVsQixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi90aGVtZS50cz83NDI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuXG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICB0eXBlOiAnZGFyaycsXG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpJywvLycjMWYyMzJhJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzE5ODU3YicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtYWluOiByZWQuQTQwMCxcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogJyMzMDMwMzAnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgICBmb250RmFtaWx5OiAnU2Vnb2UgVUknXG4gICAgfSxcbiAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgTXVpTGlzdEl0ZW06IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXG4gICAgICAgICAgICAgICAgJyYkc2VsZWN0ZWQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZjIzMmEnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWYyMzJhJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBNdWlMaXN0SXRlbVRleHQ6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2xpZ2h0Z3JheScsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2xpZ2h0Z3JheScsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBNdWlUb29sYmFyOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAzNSxcbiAgICAgICAgICAgICAgICAvL2hlaWdodDogNDUsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxMHB4JyxcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgTXVpQXBwQmFyOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1N1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIFxuICAgIH0sXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInJlZCIsInRoZW1lIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCIsImJhY2tncm91bmQiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsIm92ZXJyaWRlcyIsIk11aUxpc3RJdGVtIiwicm9vdCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uIiwiTXVpTGlzdEl0ZW1UZXh0IiwiY29sb3IiLCJmb250U2l6ZSIsIk11aVRvb2xiYXIiLCJtaW5IZWlnaHQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0JvdHRvbSIsIk11aUFwcEJhciIsImhlaWdodCIsIk11aUJ1dHRvbkJhc2UiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/theme.ts\n");

/***/ })

});