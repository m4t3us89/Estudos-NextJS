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
      width: "30%",
      maxWidth: "320px",
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
    href: "#",
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
      lineNumber: 57,
      columnNumber: 7
    }
  }, repositorios.map(function (repositorio) {
    return __jsx("div", {
      className: "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, repositorio.name), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, repositorio.description), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }), __jsx("a", {
      href: "#",
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
        lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicmVwb3NpdG9yaW9zIiwic2V0UmVwb3NpdG9yaW8iLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsInVzZUVmZmVjdCIsImNvbnN1bHRhclVzdWFyaW8iLCJhcGkiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxpc3RhclJlcG9zaXRvcmlvcyIsInN0eWxlcyIsImhvbWVDb250YWluZXIiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiYXZhdGFyX3VybCIsInRleHRBbGlnbiIsIm5hbWUiLCJiaW8iLCJjYXJkcyIsIm1hcCIsInJlcG9zaXRvcmlvIiwiZGVzY3JpcHRpb24iLCJwb3NpdGlvbiIsImJvdHRvbSIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ3RCQyxZQURzQjtBQUFBLE1BQ1JDLGNBRFE7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsSUFBRCxDQUZUO0FBQUEsTUFFdEJHLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFJN0JDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLGdCQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJNQUNkO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRTJCQyx1REFBRyxDQUFDQyxHQUFKLENBQVEsZ0JBQVIsQ0FGM0I7O0FBQUE7QUFBQTtBQUVZQyxvQkFGWixrQkFFWUEsSUFGWjtBQUdJQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsSUFBcEI7QUFDQUwsMEJBQVUsQ0FBQ0ssSUFBRCxDQUFWO0FBSko7QUFBQTs7QUFBQTtB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QUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJJLFdBQVcsQ0FBQ0MsV0FBdEMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlFO0FBQ0UsVUFBSSxFQUFDLEdBRFA7QUFFRSxlQUFTLEVBQUMsMEJBRlo7QUFHRSxXQUFLLEVBQUU7QUFDTFYsYUFBSyxFQUFFLEtBREY7QUFFTFcsZ0JBQVEsRUFBRSxVQUZMO0FBR0xDLGNBQU0sRUFBRSxDQUhIO0FBSUxDLGNBQU0sRUFBRTtBQUpILE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQURGLENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQXBCRixDQURGO0FBOENEOztHQTVFdUI3QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMwYTE5MDg0NjFhNDNlNWU2ZjllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtyZXBvc2l0b3Jpb3MsIHNldFJlcG9zaXRvcmlvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXN1YXJpbywgc2V0VXN1YXJpb10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbnN1bHRhclVzdWFyaW8oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwidXNlcnMvbTR0M3VzODlcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyXCIsIGRhdGEpO1xyXG4gICAgICAgIHNldFVzdWFyaW8oZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyXCIsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaXN0YXJSZXBvc2l0b3Jpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwidXNlcnMvbTR0M3VzODkvcmVwb3NcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXBcIiwgZGF0YSk7XHJcbiAgICAgICAgc2V0UmVwb3NpdG9yaW8oZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyXCIsIGVycik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgY29uc3VsdGFyVXN1YXJpbygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGFyUmVwb3NpdG9yaW9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiLCBtYXhXaWR0aDogXCIzMjBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgc3JjPXt1c3VhcmlvPy5hdmF0YXJfdXJsfVxyXG4gICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIsIHdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dXN1YXJpbz8ubmFtZX08L2g1PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3VzdWFyaW8/LmJpb308L3A+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgVmVyIFBlcmZpbFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxyXG4gICAgICAgIHtyZXBvc2l0b3Jpb3MubWFwKChyZXBvc2l0b3JpbykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cmVwb3NpdG9yaW8ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntyZXBvc2l0b3Jpby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAwcHggMTBweCAwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmVyIFByb2pldG9cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9