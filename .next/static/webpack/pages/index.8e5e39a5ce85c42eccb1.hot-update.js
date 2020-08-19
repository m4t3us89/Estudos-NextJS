webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/axios */ "./services/axios.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "E:\\Estudos-NextJS\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      repositorios = _useState[0],
      setRepositorio = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      usuario = _useState2[0],
      setUsuario = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function consultarUsuario() {
      return _consultarUsuario.apply(this, arguments);
    }

    function _consultarUsuario() {
      _consultarUsuario = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$api$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("users/m4t3us89");

              case 3:
                _yield$api$get = _context.sent;
                data = _yield$api$get.data;
                console.log("User", data);
                setUsuario(data);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log("Err", _context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));
      return _consultarUsuario.apply(this, arguments);
    }

    function listarRepositorios() {
      return _listarRepositorios.apply(this, arguments);
    }

    function _listarRepositorios() {
      _listarRepositorios = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$api$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("users/m4t3us89/repos");

              case 3:
                _yield$api$get2 = _context2.sent;
                data = _yield$api$get2.data;
                console.log("Rep", data);
                setRepositorio(data);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log("Err", _context2.t0);

              case 12:
                _context2.prev = 12;
                consultarUsuario();
                return _context2.finish(12);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9, 12, 15]]);
      }));
      return _listarRepositorios.apply(this, arguments);
    }

    listarRepositorios();
  }, []);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card",
    style: {
      maxWidth: "310px",
      width: "100%",
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "card-img-top",
    src: usuario === null || usuario === void 0 ? void 0 : usuario.avatar_url,
    alt: "Card image cap",
    style: {
      height: "300px",
      width: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "card-body",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, usuario === null || usuario === void 0 ? void 0 : usuario.name), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, usuario === null || usuario === void 0 ? void 0 : usuario.bio), __jsx("a", {
    href: usuario === null || usuario === void 0 ? void 0 : usuario.html_url,
    target: "blank",
    className: "btn btn-primary",
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Ver Perfil"))), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, repositorios.map(function (repositorio) {
    return __jsx("div", {
      className: "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, repositorio.name, " "), __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, repositorio.language), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, repositorio.description), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }), __jsx("a", {
      href: repositorio.html_url,
      target: "blank",
      className: "btn btn-secondary btn-sm",
      style: {
        width: "85%",
        position: "absolute",
        bottom: 0,
        margin: "20px 0px 10px 0px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, "Ver Projeto")));
  })));
}

_s(Home, "kCPUjtg588pXI0GFDpGRmk7AOD4=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicmVwb3NpdG9yaW9zIiwic2V0UmVwb3NpdG9yaW8iLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsInVzZUVmZmVjdCIsImNvbnN1bHRhclVzdWFyaW8iLCJhcGkiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxpc3RhclJlcG9zaXRvcmlvcyIsInN0eWxlcyIsImhvbWVDb250YWluZXIiLCJtYXhXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYXZhdGFyX3VybCIsInRleHRBbGlnbiIsIm5hbWUiLCJiaW8iLCJodG1sX3VybCIsImNhcmRzIiwibWFwIiwicmVwb3NpdG9yaW8iLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwicG9zaXRpb24iLCJib3R0b20iLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUN0QkMsWUFEc0I7QUFBQSxNQUNSQyxjQURROztBQUFBLG1CQUVDRixzREFBUSxDQUFDLElBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBSTdCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDQyxnQkFERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyTUFDZDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUUyQkMsdURBQUcsQ0FBQ0MsR0FBSixDQUFRLGdCQUFSLENBRjNCOztBQUFBO0FBQUE7QUFFWUMsb0JBRlosa0JBRVlBLElBRlo7QUFHSUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0FMLDBCQUFVLENBQUNLLElBQUQsQ0FBVjtBQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUlDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaOztBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQUFBLGFBV0NDLGtCQVhEO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZNQVdkO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRTJCTCx1REFBRyxDQUFDQyxHQUFKLENBQVEsc0JBQVIsQ0FGM0I7O0FBQUE7QUFBQTtBQUVZQyxvQkFGWixtQkFFWUEsSUFGWjtBQUdJQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkYsSUFBbkI7QUFDQVAsOEJBQWMsQ0FBQ08sSUFBRCxDQUFkO0FBSko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNSUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7O0FBTko7QUFBQTtBQVFJTCxnQ0FBZ0I7QUFScEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FYYztBQUFBO0FBQUE7O0FBdUJkTSxzQkFBa0I7QUFDbkIsR0F4QlEsRUF3Qk4sRUF4Qk0sQ0FBVDtBQTBCQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsT0FBWjtBQUFxQkMsV0FBSyxFQUFFLE1BQTVCO0FBQW9DQyxZQUFNLEVBQUU7QUFBNUMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLE9BQUcsRUFBRWQsT0FBRixhQUFFQSxPQUFGLHVCQUFFQSxPQUFPLENBQUVlLFVBRmhCO0FBR0UsT0FBRyxFQUFDLGdCQUhOO0FBSUUsU0FBSyxFQUFFO0FBQUVELFlBQU0sRUFBRSxPQUFWO0FBQW1CRCxXQUFLLEVBQUU7QUFBMUIsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFFRyxlQUFTLEVBQUU7QUFBYixLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCaEIsT0FBNUIsYUFBNEJBLE9BQTVCLHVCQUE0QkEsT0FBTyxDQUFFaUIsSUFBckMsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQmpCLE9BQTFCLGFBQTBCQSxPQUExQix1QkFBMEJBLE9BQU8sQ0FBRWtCLEdBQW5DLENBRkYsRUFHRTtBQUNFLFFBQUksRUFBRWxCLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFbUIsUUFEakI7QUFFRSxVQUFNLEVBQUMsT0FGVDtBQUdFLGFBQVMsRUFBQyxpQkFIWjtBQUlFLFNBQUssRUFBRTtBQUFFTixXQUFLLEVBQUU7QUFBVCxLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsQ0FWRixDQURGLEVBeUJFO0FBQUssYUFBUyxFQUFFSCw4REFBTSxDQUFDVSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d0QixZQUFZLENBQUN1QixHQUFiLENBQWlCLFVBQUNDLFdBQUQ7QUFBQSxXQUNoQjtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEJBLFdBQVcsQ0FBQ0wsSUFBeEMsTUFERixFQUVFO0FBQU8sZUFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JLLFdBQVcsQ0FBQ0MsUUFBM0MsQ0FGRixFQUdFO0FBQUcsZUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQkQsV0FBVyxDQUFDRSxXQUF0QyxDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBS0U7QUFDRSxVQUFJLEVBQUVGLFdBQVcsQ0FBQ0gsUUFEcEI7QUFFRSxZQUFNLEVBQUMsT0FGVDtBQUdFLGVBQVMsRUFBQywwQkFIWjtBQUlFLFdBQUssRUFBRTtBQUNMTixhQUFLLEVBQUUsS0FERjtBQUVMWSxnQkFBUSxFQUFFLFVBRkw7QUFHTEMsY0FBTSxFQUFFLENBSEg7QUFJTEMsY0FBTSxFQUFFO0FBSkgsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLENBREYsQ0FEZ0I7QUFBQSxHQUFqQixDQURILENBekJGLENBREY7QUFxREQ7O0dBbkZ1Qi9CLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU1ZTM5YTVjZTg1YzQyZWNjYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3JlcG9zaXRvcmlvcywgc2V0UmVwb3NpdG9yaW9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt1c3VhcmlvLCBzZXRVc3VhcmlvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gY29uc3VsdGFyVXN1YXJpbygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoXCJ1c2Vycy9tNHQzdXM4OVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJcIiwgZGF0YSk7XHJcbiAgICAgICAgc2V0VXN1YXJpbyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJcIiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxpc3RhclJlcG9zaXRvcmlvcygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoXCJ1c2Vycy9tNHQzdXM4OS9yZXBvc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcFwiLCBkYXRhKTtcclxuICAgICAgICBzZXRSZXBvc2l0b3JpbyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJcIiwgZXJyKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBjb25zdWx0YXJVc3VhcmlvKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0YXJSZXBvc2l0b3Jpb3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzEwcHhcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgc3JjPXt1c3VhcmlvPy5hdmF0YXJfdXJsfVxyXG4gICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIsIHdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dXN1YXJpbz8ubmFtZX08L2g1PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3VzdWFyaW8/LmJpb308L3A+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXt1c3VhcmlvPy5odG1sX3VybH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVmVyIFBlcmZpbFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxyXG4gICAgICAgIHtyZXBvc2l0b3Jpb3MubWFwKChyZXBvc2l0b3JpbykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cmVwb3NpdG9yaW8ubmFtZX0gPC9oNT5cclxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntyZXBvc2l0b3Jpby5sYW5ndWFnZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntyZXBvc2l0b3Jpby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e3JlcG9zaXRvcmlvLmh0bWxfdXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjg1JVwiLFxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBweCAxMHB4IDBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWZXIgUHJvamV0b1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=