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
    style: {
      width: "310px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card",
    style: {
      width: "100%",
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
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
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "card-body",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, usuario === null || usuario === void 0 ? void 0 : usuario.name), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
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
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Ver Perfil")))), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, repositorios.map(function (repositorio) {
    return __jsx("div", {
      className: "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, repositorio.name, " "), __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, repositorio.language), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, repositorio.description ? repositorio.description : "Não há descrição"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
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
        lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicmVwb3NpdG9yaW9zIiwic2V0UmVwb3NpdG9yaW8iLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsInVzZUVmZmVjdCIsImNvbnN1bHRhclVzdWFyaW8iLCJhcGkiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxpc3RhclJlcG9zaXRvcmlvcyIsInN0eWxlcyIsImhvbWVDb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsImF2YXRhcl91cmwiLCJ0ZXh0QWxpZ24iLCJuYW1lIiwiYmlvIiwiaHRtbF91cmwiLCJjYXJkcyIsIm1hcCIsInJlcG9zaXRvcmlvIiwibGFuZ3VhZ2UiLCJkZXNjcmlwdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDdEJDLFlBRHNCO0FBQUEsTUFDUkMsY0FEUTs7QUFBQSxtQkFFQ0Ysc0RBQVEsQ0FBQyxJQUFELENBRlQ7QUFBQSxNQUV0QkcsT0FGc0I7QUFBQSxNQUViQyxVQUZhOztBQUk3QkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsZ0JBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsMk1BQ2Q7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFMkJDLHVEQUFHLENBQUNDLEdBQUosQ0FBUSxnQkFBUixDQUYzQjs7QUFBQTtBQUFBO0FBRVlDLG9CQUZaLGtCQUVZQSxJQUZaO0FBR0lDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixJQUFwQjtBQUNBTCwwQkFBVSxDQUFDSyxJQUFELENBQVY7QUFKSjtB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QUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0QkEsV0FBVyxDQUFDTCxJQUF4QyxNQURGLEVBRUU7QUFBTyxlQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQkssV0FBVyxDQUFDQyxRQUEzQyxDQUZGLEVBR0U7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELFdBQVcsQ0FBQ0UsV0FBWixHQUNHRixXQUFXLENBQUNFLFdBRGYsR0FFRyxrQkFITixDQUhGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0U7QUFDRSxVQUFJLEVBQUVGLFdBQVcsQ0FBQ0gsUUFEcEI7QUFFRSxZQUFNLEVBQUMsT0FGVDtBQUdFLGVBQVMsRUFBQywwQkFIWjtBQUlFLFdBQUssRUFBRTtBQUNMTixhQUFLLEVBQUUsS0FERjtBQUVMWSxnQkFBUSxFQUFFLFVBRkw7QUFHTEMsY0FBTSxFQUFFLENBSEg7QUFJTEMsY0FBTSxFQUFFO0FBSkgsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGLENBREYsQ0FEZ0I7QUFBQSxHQUFqQixDQURILENBeEJGLENBREY7QUF3REQ7O0dBdEZ1QjlCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGQ5ZmY0NDYzNDg3ZjNkODQ2ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3JlcG9zaXRvcmlvcywgc2V0UmVwb3NpdG9yaW9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt1c3VhcmlvLCBzZXRVc3VhcmlvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gY29uc3VsdGFyVXN1YXJpbygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoXCJ1c2Vycy9tNHQzdXM4OVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJcIiwgZGF0YSk7XHJcbiAgICAgICAgc2V0VXN1YXJpbyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJcIiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxpc3RhclJlcG9zaXRvcmlvcygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoXCJ1c2Vycy9tNHQzdXM4OS9yZXBvc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcFwiLCBkYXRhKTtcclxuICAgICAgICBzZXRSZXBvc2l0b3JpbyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJcIiwgZXJyKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBjb25zdWx0YXJVc3VhcmlvKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0YXJSZXBvc2l0b3Jpb3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICBzcmM9e3VzdWFyaW8/LmF2YXRhcl91cmx9XHJcbiAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIsIHdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dXN1YXJpbz8ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57dXN1YXJpbz8uYmlvfTwvcD5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXt1c3VhcmlvPy5odG1sX3VybH1cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJibGFua1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFZlciBQZXJmaWxcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+XHJcbiAgICAgICAge3JlcG9zaXRvcmlvcy5tYXAoKHJlcG9zaXRvcmlvKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntyZXBvc2l0b3Jpby5uYW1lfSA8L2g1PlxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3JlcG9zaXRvcmlvLmxhbmd1YWdlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICB7cmVwb3NpdG9yaW8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgPyByZXBvc2l0b3Jpby5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICA6IFwiTsOjbyBow6EgZGVzY3Jpw6fDo29cIn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e3JlcG9zaXRvcmlvLmh0bWxfdXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjg1JVwiLFxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBweCAxMHB4IDBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWZXIgUHJvamV0b1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=