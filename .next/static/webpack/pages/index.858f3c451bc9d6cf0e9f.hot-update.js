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
    href: usuario === null || usuario === void 0 ? void 0 : usuario.url,
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
    }, repositorio.name), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, repositorio.description), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }), __jsx("a", {
      href: repositorio.url,
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
        lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicmVwb3NpdG9yaW9zIiwic2V0UmVwb3NpdG9yaW8iLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsInVzZUVmZmVjdCIsImNvbnN1bHRhclVzdWFyaW8iLCJhcGkiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxpc3RhclJlcG9zaXRvcmlvcyIsInN0eWxlcyIsImhvbWVDb250YWluZXIiLCJtYXhXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYXZhdGFyX3VybCIsInRleHRBbGlnbiIsIm5hbWUiLCJiaW8iLCJ1cmwiLCJjYXJkcyIsIm1hcCIsInJlcG9zaXRvcmlvIiwiZGVzY3JpcHRpb24iLCJwb3NpdGlvbiIsImJvdHRvbSIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ3RCQyxZQURzQjtBQUFBLE1BQ1JDLGNBRFE7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsSUFBRCxDQUZUO0FBQUEsTUFFdEJHLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFJN0JDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLGdCQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJNQUNkO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRTJCQyx1REFBRyxDQUFDQyxHQUFKLENBQVEsZ0JBQVIsQ0FGM0I7O0FBQUE7QUFBQTtBQUVZQyxvQkFGWixrQkFFWUEsSUFGWjtBQUdJQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsSUFBcEI7QUFDQUwsMEJBQVUsQ0FBQ0ssSUFBRCxDQUFWO0FBSko7QUFBQTs7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VyxDQUFDTCxJQUF4QyxDQURGLEVBRUU7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCSyxXQUFXLENBQUNDLFdBQXRDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFJRTtBQUNFLFVBQUksRUFBRUQsV0FBVyxDQUFDSCxHQURwQjtBQUVFLFlBQU0sRUFBQyxPQUZUO0FBR0UsZUFBUyxFQUFDLDBCQUhaO0FBSUUsV0FBSyxFQUFFO0FBQ0xOLGFBQUssRUFBRSxLQURGO0FBRUxXLGdCQUFRLEVBQUUsVUFGTDtBQUdMQyxjQUFNLEVBQUUsQ0FISDtBQUlMQyxjQUFNLEVBQUU7QUFKSCxPQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERixDQURnQjtBQUFBLEdBQWpCLENBREgsQ0F6QkYsQ0FERjtBQW9ERDs7R0FsRnVCOUIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NThmM2M0NTFiYzlkNmNmMGU5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcmVwb3NpdG9yaW9zLCBzZXRSZXBvc2l0b3Jpb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzdWFyaW8sIHNldFVzdWFyaW9dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjb25zdWx0YXJVc3VhcmlvKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcInVzZXJzL200dDN1czg5XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlclwiLCBkYXRhKTtcclxuICAgICAgICBzZXRVc3VhcmlvKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVyclwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyUmVwb3NpdG9yaW9zKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcInVzZXJzL200dDN1czg5L3JlcG9zXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwXCIsIGRhdGEpO1xyXG4gICAgICAgIHNldFJlcG9zaXRvcmlvKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVyclwiLCBlcnIpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGNvbnN1bHRhclVzdWFyaW8oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3RhclJlcG9zaXRvcmlvcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMTBweFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICBzcmM9e3VzdWFyaW8/LmF2YXRhcl91cmx9XHJcbiAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMzAwcHhcIiwgd2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt1c3VhcmlvPy5uYW1lfTwvaDU+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57dXN1YXJpbz8uYmlvfTwvcD5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3VzdWFyaW8/LnVybH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVmVyIFBlcmZpbFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxyXG4gICAgICAgIHtyZXBvc2l0b3Jpb3MubWFwKChyZXBvc2l0b3JpbykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cmVwb3NpdG9yaW8ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntyZXBvc2l0b3Jpby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e3JlcG9zaXRvcmlvLnVybH1cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAwcHggMTBweCAwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmVyIFByb2pldG9cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9