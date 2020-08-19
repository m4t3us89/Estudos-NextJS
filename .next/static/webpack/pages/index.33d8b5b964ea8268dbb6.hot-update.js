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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicmVwb3NpdG9yaW9zIiwic2V0UmVwb3NpdG9yaW8iLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsInVzZUVmZmVjdCIsImNvbnN1bHRhclVzdWFyaW8iLCJhcGkiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxpc3RhclJlcG9zaXRvcmlvcyIsInN0eWxlcyIsImhvbWVDb250YWluZXIiLCJtYXhXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYXZhdGFyX3VybCIsInRleHRBbGlnbiIsIm5hbWUiLCJiaW8iLCJodG1sX3VybCIsImNhcmRzIiwibWFwIiwicmVwb3NpdG9yaW8iLCJkZXNjcmlwdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDdEJDLFlBRHNCO0FBQUEsTUFDUkMsY0FEUTs7QUFBQSxtQkFFQ0Ysc0RBQVEsQ0FBQyxJQUFELENBRlQ7QUFBQSxNQUV0QkcsT0FGc0I7QUFBQSxNQUViQyxVQUZhOztBQUk3QkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsZ0JBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsMk1BQ2Q7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFMkJDLHVEQUFHLENBQUNDLEdBQUosQ0FBUSxnQkFBUixDQUYzQjs7QUFBQTtBQUFBO0FBRVlDLG9CQUZaLGtCQUVZQSxJQUZaO0FBR0lDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixJQUFwQjtBQUNBTCwwQkFBVSxDQUFDSyxJQUFELENBQVY7QUFKSjtB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QSxXQUFXLENBQUNMLElBQXhDLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJLLFdBQVcsQ0FBQ0MsV0FBdEMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlFO0FBQ0UsVUFBSSxFQUFFRCxXQUFXLENBQUNILFFBRHBCO0FBRUUsWUFBTSxFQUFDLE9BRlQ7QUFHRSxlQUFTLEVBQUMsMEJBSFo7QUFJRSxXQUFLLEVBQUU7QUFDTE4sYUFBSyxFQUFFLEtBREY7QUFFTFcsZ0JBQVEsRUFBRSxVQUZMO0FBR0xDLGNBQU0sRUFBRSxDQUhIO0FBSUxDLGNBQU0sRUFBRTtBQUpILE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQURGLENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQXpCRixDQURGO0FBb0REOztHQWxGdUI5QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzZDhiNWI5NjRlYTgyNjhkYmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtyZXBvc2l0b3Jpb3MsIHNldFJlcG9zaXRvcmlvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXN1YXJpbywgc2V0VXN1YXJpb10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbnN1bHRhclVzdWFyaW8oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwidXNlcnMvbTR0M3VzODlcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyXCIsIGRhdGEpO1xyXG4gICAgICAgIHNldFVzdWFyaW8oZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyXCIsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaXN0YXJSZXBvc2l0b3Jpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFwidXNlcnMvbTR0M3VzODkvcmVwb3NcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXBcIiwgZGF0YSk7XHJcbiAgICAgICAgc2V0UmVwb3NpdG9yaW8oZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyXCIsIGVycik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgY29uc3VsdGFyVXN1YXJpbygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGFyUmVwb3NpdG9yaW9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMxMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICAgIHNyYz17dXN1YXJpbz8uYXZhdGFyX3VybH1cclxuICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzMDBweFwiLCB3aWR0aDogXCIzMDBweFwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3VzdWFyaW8/Lm5hbWV9PC9oNT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt1c3VhcmlvPy5iaW99PC9wPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17dXN1YXJpbz8uaHRtbF91cmx9XHJcbiAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFZlciBQZXJmaWxcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cclxuICAgICAgICB7cmVwb3NpdG9yaW9zLm1hcCgocmVwb3NpdG9yaW8pID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3JlcG9zaXRvcmlvLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cmVwb3NpdG9yaW8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtyZXBvc2l0b3Jpby5odG1sX3VybH1cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAwcHggMTBweCAwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmVyIFByb2pldG9cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9