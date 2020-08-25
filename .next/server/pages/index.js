module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/axios */ "./services/axios.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Estudos-NextJS\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const baseUrlGitLab = "https://gitlab.com/api/v4/";
const baseUrlGitHub = "https://api.github.com/";
const tamanhoIcone = 22;
const iconesLinguagem = {
  Python: `<img  src="https://img.icons8.com/dusk/${tamanhoIcone}/000000/python.png"/>`,
  JavaScript: `<img    src="https://img.icons8.com/color/${tamanhoIcone}/000000/javascript.png"/>`,
  TypeScript: `<img src="https://img.icons8.com/color/${tamanhoIcone}/000000/typescript.png"/>`,
  Vue: `<img src="https://img.icons8.com/color/${tamanhoIcone}/000000/vue-js.png"/>`,
  HTML: `<img src="https://img.icons8.com/color/${tamanhoIcone}/000000/html.png"/>`,
  CSS: `<img src="https://img.icons8.com/ios/${tamanhoIcone}/000000/css.png"/>`
};

function Home() {
  var _perfis$, _perfis$2, _perfis$3, _perfis$4, _perfis$5;

  const {
    0: projetos,
    1: setProjeto
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: perfis,
    1: setPerfil
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const toas = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function listarUsuarios() {
      try {
        const {
          data: usuarioGitHub
        } = await _services_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${baseUrlGitHub}users/m4t3us89`);
        console.log("UsuarioGitHub", usuarioGitHub);
        const {
          data: usuarioGitLab
        } = await _services_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${baseUrlGitLab}users/2919291`);
        console.log("UsuarioGitLab", usuarioGitLab);
        const todosPerfis = [usuarioGitHub, usuarioGitLab];
        setPerfil(todosPerfis);
      } catch (Err) {
        console.log("err", Err);
      }
    }

    async function listarRepositorios() {
      try {
        const {
          data: repGitHub
        } = await _services_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${baseUrlGitHub}users/m4t3us89/repos`);
        console.log("RepGitHub", repGitHub);
        setProjeto(repGitHub);
        const {
          data: repGitLab
        } = await _services_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${baseUrlGitLab}users/2919291/projects`);
        console.log("RepGitLab", repGitLab);
        const todosProjetos = repGitHub.concat(repGitLab);
        console.log("Todos os Projetos", todosProjetos);
        setProjeto(todosProjetos);
      } catch (Err) {
        console.log("err", Err);
      }
    }

    listarRepositorios();
    listarUsuarios();
  }, []);

  function removerProjeto(index) {
    const arr = [...projetos];
    arr.splice(index, 1);
    setProjeto(arr);
  }

  function CreatePerfis(title) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      alignItems: "center",
      justifyContent: "center",
      gridGap: "30px",
      marginTop: "40px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: title === null || title === void 0 ? void 0 : title.html_url,
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx("svg", {
      className: "octicon octicon-mark-github v-align-middle",
      height: "32",
      viewBox: "0 0 16 16",
      version: "1.1",
      width: "32",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://gitlab.com/m4t3us",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, __jsx("svg", {
      height: "32",
      className: "tanuki-logo",
      viewBox: "0 0 36 36",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, __jsx("path", {
      className: "tanuki-shape tanuki-left-ear",
      fill: "#e24329",
      d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-ear",
      fill: "#e24329",
      d: "M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-nose",
      fill: "#e24329",
      d: "M18,34.38 3,14 33,14 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-eye",
      fill: "#fc6d26",
      d: "M18,34.38 11.38,14 2,14 6,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-eye",
      fill: "#fc6d26",
      d: "M18,34.38 24.62,14 34,14 30,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-cheek",
      fill: "#fca326",
      d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-cheek",
      fill: "#fca326",
      d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://www.linkedin.com/in/allisson-mateus-06a957137",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/color/38/000000/linkedin.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }
    })), __jsx("a", {
      href: "",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/fluent/38/000000/twitter.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    })));
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    gridGap: ["10px", "50px"],
    display: "flex",
    flexDirection: ["column", "row"],
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, projetos.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 4,
    shadow: "md",
    borderWidth: "1px",
    width: ["100%", "430px"],
    height: "300px",
    rounded: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "xl",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, (_perfis$ = perfis[0]) === null || _perfis$ === void 0 ? void 0 : _perfis$.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.blog), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.location)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.bio), ((_perfis$5 = perfis[0]) === null || _perfis$5 === void 0 ? void 0 : _perfis$5.name) ? CreatePerfis(perfis[0]) : ""), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: ["10px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, projetos.map((projeto, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 4,
    shadow: "md",
    borderWidth: "1px",
    rounded: "md",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "md",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, (projeto === null || projeto === void 0 ? void 0 : projeto.description) ? projeto === null || projeto === void 0 ? void 0 : projeto.description : "Não há descrição"))))) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./services/axios.js":
/*!***************************!*\
  !*** ./services/axios.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);


const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create //baseURL: process.env.API,
();
api.interceptors.request.use(function (config) {
  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start(); //const credentials = localStorage.getItem("credentials");
  //config.headers.token = credentials ? JSON.parse(credentials).token : null;

  return config;
}, function (error) {
  return Promise.reject(error);
});
api.interceptors.response.use(function (response) {
  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
  return response;
}, function (error) {
  //if (error?.response?.status === 403) {
  //localStorage.clear();
  //window.location.href = "/";
  //return;
  //}
  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImJhc2VVcmxHaXRMYWIiLCJwcm9jZXNzIiwiYmFzZVVybEdpdEh1YiIsInRhbWFuaG9JY29uZSIsImljb25lc0xpbmd1YWdlbSIsIlB5dGhvbiIsIkphdmFTY3JpcHQiLCJUeXBlU2NyaXB0IiwiVnVlIiwiSFRNTCIsIkNTUyIsIkhvbWUiLCJwcm9qZXRvcyIsInNldFByb2pldG8iLCJ1c2VTdGF0ZSIsInBlcmZpcyIsInNldFBlcmZpbCIsImxvYWRlZCIsInNldExvYWRlZCIsInRvYXMiLCJ1c2VUb2FzdCIsInVzZUVmZmVjdCIsImxpc3RhclVzdWFyaW9zIiwiZGF0YSIsInVzdWFyaW9HaXRIdWIiLCJhcGkiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwidXN1YXJpb0dpdExhYiIsInRvZG9zUGVyZmlzIiwiRXJyIiwibGlzdGFyUmVwb3NpdG9yaW9zIiwicmVwR2l0SHViIiwicmVwR2l0TGFiIiwidG9kb3NQcm9qZXRvcyIsImNvbmNhdCIsInJlbW92ZXJQcm9qZXRvIiwiaW5kZXgiLCJhcnIiLCJzcGxpY2UiLCJDcmVhdGVQZXJmaXMiLCJ0aXRsZSIsImh0bWxfdXJsIiwibGVuZ3RoIiwibmFtZSIsImJsb2ciLCJsb2NhdGlvbiIsImJpbyIsIm1hcCIsInByb2pldG8iLCJkZXNjcmlwdGlvbiIsImF4aW9zIiwiY3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsIk5Qcm9ncmVzcyIs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QXpCLENBQ0UsVUFBVUMsTUFBVixFQUFrQjtBQUNoQkMsa0RBQVMsQ0FBQ0MsS0FBVixHQURnQixDQUVoQjtBQUNBOztBQUNBLFNBQU9GLE1BQVA7QUFDRCxDQU5ILEVBT0UsVUFBVUcsS0FBVixFQUFpQjtBQUNmLFNBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxDQVRIO0FBWUFuQyxHQUFHLENBQUM2QixZQUFKLENBQWlCUyxRQUFqQixDQUEwQlAsR0FBMUIsQ0FDRSxVQUFVTyxRQUFWLEVBQW9CO0FBQ2xCTCxrREFBUyxDQUFDTSxJQUFWO0FBQ0EsU0FBT0QsUUFBUDtBQUNELENBSkgsRUFLRSxVQUFVSCxLQUFWLEVBQWlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRixrREFBUyxDQUFDTSxJQUFWO0FBQ0EsU0FBT0gsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELENBYkg7QUFlZW5DLGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgVGV4dCxcclxuICBCb3gsXHJcbiAgRmVhdHVyZSxcclxuICBTdGFjayxcclxuICBIZWFkaW5nLFxyXG4gIEdyaWQsXHJcbiAgdXNlVG9hc3QsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgYmFzZVVybEdpdExhYiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVExBQjtcclxuY29uc3QgYmFzZVVybEdpdEh1YiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVEhVQjtcclxuY29uc3QgdGFtYW5ob0ljb25lID0gMjI7XHJcbmNvbnN0IGljb25lc0xpbmd1YWdlbSA9IHtcclxuICBQeXRob246IGA8aW1nICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2R1c2svJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9weXRob24ucG5nXCIvPmAsXHJcbiAgSmF2YVNjcmlwdDogYDxpbWcgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2phdmFzY3JpcHQucG5nXCIvPmAsXHJcbiAgVHlwZVNjcmlwdDogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL3R5cGVzY3JpcHQucG5nXCIvPmAsXHJcbiAgVnVlOiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvdnVlLWpzLnBuZ1wiLz5gLFxyXG4gIEhUTUw6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9odG1sLnBuZ1wiLz5gLFxyXG4gIENTUzogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9jc3MucG5nXCIvPmAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwcm9qZXRvcywgc2V0UHJvamV0b10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BlcmZpcywgc2V0UGVyZmlsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvYXMgPSB1c2VUb2FzdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyVXN1YXJpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRIdWJcIiwgdXN1YXJpb0dpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXN1YXJpb0dpdExhYiB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAke2Jhc2VVcmxHaXRMYWJ9dXNlcnMvMjkxOTI5MWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRMYWJcIiwgdXN1YXJpb0dpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUGVyZmlzID0gW3VzdWFyaW9HaXRIdWIsIHVzdWFyaW9HaXRMYWJdO1xyXG5cclxuICAgICAgICBzZXRQZXJmaWwodG9kb3NQZXJmaXMpO1xyXG4gICAgICB9IGNhdGNoIChFcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBFcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyUmVwb3NpdG9yaW9zKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OS9yZXBvc2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcEdpdEh1YlwiLCByZXBHaXRIdWIpO1xyXG5cclxuICAgICAgICBzZXRQcm9qZXRvKHJlcEdpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0TGFiIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdExhYn11c2Vycy8yOTE5MjkxL3Byb2plY3RzYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwR2l0TGFiXCIsIHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUHJvamV0b3MgPSByZXBHaXRIdWIuY29uY2F0KHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb3Mgb3MgUHJvamV0b3NcIiwgdG9kb3NQcm9qZXRvcyk7XHJcblxyXG4gICAgICAgIHNldFByb2pldG8odG9kb3NQcm9qZXRvcyk7XHJcbiAgICAgIH0gY2F0Y2ggKEVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0YXJSZXBvc2l0b3Jpb3MoKTtcclxuICAgIGxpc3RhclVzdWFyaW9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmVyUHJvamV0byhpbmRleCkge1xyXG4gICAgY29uc3QgYXJyID0gWy4uLnByb2pldG9zXTtcclxuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0UHJvamV0byhhcnIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ3JlYXRlUGVyZmlzKHRpdGxlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBncmlkR2FwPVwiMzBweFwiXHJcbiAgICAgICAgbWFyZ2luVG9wPVwiNDBweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8YSBocmVmPXt0aXRsZT8uaHRtbF91cmx9IHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1tYXJrLWdpdGh1YiB2LWFsaWduLW1pZGRsZVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMyXCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwMDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0bGFiLmNvbS9tNHQzdXNcIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIzMlwiIGNsYXNzTmFtZT1cInRhbnVraS1sb2dvXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbGVmdC1lYXJcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTIgMTRsOS4zOCA5di05bC00LTEyLjI4Yy0uMjA1LS42MzItMS4xNzYtLjYzMi0xLjM4IDB6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLXJpZ2h0LWVhclwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNlMjQzMjlcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMzQgMTRsLTkuMzggOXYtOWw0LTEyLjI4Yy4yMDUtLjYzMiAxLjE3Ni0uNjMyIDEuMzggMHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbm9zZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNlMjQzMjlcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMywxNCAzMywxNCBaXCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtZXllXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2ZjNmQyNlwiXHJcbiAgICAgICAgICAgICAgZD1cIk0xOCwzNC4zOCAxMS4zOCwxNCAyLDE0IDYsMjVaXCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLXJpZ2h0LWV5ZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmYzZkMjZcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMjQuNjIsMTQgMzQsMTQgMzAsMjVaXCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtY2hlZWtcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmNhMzI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTIgMTRMLjEgMjAuMTZjLS4xOC41NjUgMCAxLjIuNSAxLjU2bDE3LjQyIDEyLjY2elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1jaGVla1wiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmY2EzMjZcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMzQgMTRsMS45IDYuMTZjLjE4LjU2NSAwIDEuMi0uNSAxLjU2TDE4IDM0LjM4elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsbGlzc29uLW1hdGV1cy0wNmE5NTcxMzdcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zOC8wMDAwMDAvbGlua2VkaW4ucG5nXCIgLz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVudC8zOC8wMDAwMDAvdHdpdHRlci5wbmdcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGdyaWRHYXA9e1tcIjEwcHhcIiwgXCI1MHB4XCJdfVxyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgIGZsZXhEaXJlY3Rpb249e1tcImNvbHVtblwiLCBcInJvd1wiXX1cclxuICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgID5cclxuICAgICAge3Byb2pldG9zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgcD17NH1cclxuICAgICAgICAgICAgc2hhZG93PVwibWRcIlxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXtbXCIxMDAlXCIsIFwiNDMwcHhcIl19XHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgcm91bmRlZD1cIm1kXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxUZXh0PntwZXJmaXNbMF0/Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0PntwZXJmaXNbMF0/LmJsb2d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0PntwZXJmaXNbMF0/LmxvY2F0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dCBtdD17NH0+e3BlcmZpc1swXT8uYmlvfTwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtwZXJmaXNbMF0/Lm5hbWUgPyBDcmVhdGVQZXJmaXMocGVyZmlzWzBdKSA6IFwiXCJ9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpXCJcclxuICAgICAgICAgICAgZ2FwPXtbXCIxMHB4XCIsIFwiNTBweFwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb2pldG9zLm1hcCgocHJvamV0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8Qm94IHA9ezR9IHNoYWRvdz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIiByb3VuZGVkPVwibWRcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwibWRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+e3Byb2pldG8/Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvamV0bz8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICA/IHByb2pldG8/LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIk7Do28gaMOhIGRlc2NyacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvc1xyXG4gIC5jcmVhdGVcclxuICAvL2Jhc2VVUkw6IHByb2Nlc3MuZW52LkFQSSxcclxuICAoKTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvL2NvbnN0IGNyZWRlbnRpYWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjcmVkZW50aWFsc1wiKTtcclxuICAgIC8vY29uZmlnLmhlYWRlcnMudG9rZW4gPSBjcmVkZW50aWFscyA/IEpTT04ucGFyc2UoY3JlZGVudGlhbHMpLnRva2VuIDogbnVsbDtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvL2lmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgLy9yZXR1cm47XHJcbiAgICAvL31cclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=