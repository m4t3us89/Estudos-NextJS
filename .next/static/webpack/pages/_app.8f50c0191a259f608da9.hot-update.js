webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "E:\\Estudos-NextJS\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeStart", function (url) {
  console.log("Loading: ".concat(url));
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeComplete", function () {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeError", function () {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
});

function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/nprogress.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    integrity: "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("nav", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "PROJETOS"), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Powered by", " ", __jsx("img", {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }))));
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJuYXYiLCJtYWluIiwiZm9vdGVyIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsVUFBVUMsR0FBVixFQUFlO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVIsb0JBQXdCRixHQUF4QjtBQUNBRyxrREFBUyxDQUFDQyxLQUFWO0FBQ0QsQ0FIRDtBQUtBUCxrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLFlBQVk7QUFDbERJLGtEQUFTLENBQUNFLElBQVY7QUFDRCxDQUZEO0FBR0FSLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsWUFBWTtBQUMvQ0ksa0RBQVMsQ0FBQ0UsSUFBVjtBQUNELENBRkQ7O0FBSUEsU0FBU0MsR0FBVCxPQUF1QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDckMsU0FDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxVQUE1QjtBQUF1QyxRQUFJLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsMEVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGLEVBZUU7QUFBTSxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWVKLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBZkYsRUFtQkU7QUFBUSxhQUFTLEVBQUVDLDhEQUFNLENBQUNJLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx3R0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBS2EsR0FMYixFQU1FO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsT0FBRyxFQUFDLGFBQTNCO0FBQXlDLGFBQVMsRUFBRUosOERBQU0sQ0FBQ0ssSUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FuQkYsQ0FERjtBQWdDRDs7S0FqQ1FSLEc7QUFtQ01BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGY1MGMwMTkxYTI1OWY2MDhkYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBmdW5jdGlvbiAodXJsKSB7XHJcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApO1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59KTtcclxuXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59KTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgZnVuY3Rpb24gKCkge1xyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1KY0tiOHEzaXFKNjFnTlY5S0diOHRoU3NOanBTTDBuOFBBUm45SHVaT25JeE4waG9QK1ZtbURHTU41dDlVSjBaXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+UFJPSkVUT1M8L25hdj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9