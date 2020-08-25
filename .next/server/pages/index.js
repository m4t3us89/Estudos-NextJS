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
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
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

  function showToast(title, description, status, position = "top-right") {
    toast({
      title,
      description,
      status,
      position,
      duration: 9000,
      isClosable: true
    });
  }

  function removerProjeto(index) {
    const arr = [...projetos];
    arr.splice(index, 1);
    setProjeto(arr);
    showToast("Projeto removido", "Seu projeto foi removido com sucesso.", "success");
  }

  function CreatePerfis(title) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      alignItems: "center",
      justifyContent: "center",
      gridGap: "30px",
      mt: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: title === null || title === void 0 ? void 0 : title.html_url,
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
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
        lineNumber: 110,
        columnNumber: 11
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://gitlab.com/m4t3us",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }
    }, __jsx("svg", {
      height: "32",
      className: "tanuki-logo",
      viewBox: "0 0 36 36",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, __jsx("path", {
      className: "tanuki-shape tanuki-left-ear",
      fill: "#e24329",
      d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-ear",
      fill: "#e24329",
      d: "M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-nose",
      fill: "#e24329",
      d: "M18,34.38 3,14 33,14 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-eye",
      fill: "#fc6d26",
      d: "M18,34.38 11.38,14 2,14 6,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-eye",
      fill: "#fc6d26",
      d: "M18,34.38 24.62,14 34,14 30,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-cheek",
      fill: "#fca326",
      d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-cheek",
      fill: "#fca326",
      d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://www.linkedin.com/in/allisson-mateus-06a957137",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/color/38/000000/linkedin.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    })), __jsx("a", {
      href: "",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/fluent/38/000000/twitter.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
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
      lineNumber: 180,
      columnNumber: 5
    }
  }, projetos.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 4,
    shadow: "md",
    borderWidth: "1px",
    width: ["100%", "430px"],
    height: "300px",
    rounded: "md",
    bg: "gray.600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "xl",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, (_perfis$ = perfis[0]) === null || _perfis$ === void 0 ? void 0 : _perfis$.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.blog), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.location)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.bio), ((_perfis$5 = perfis[0]) === null || _perfis$5 === void 0 ? void 0 : _perfis$5.name) ? CreatePerfis(perfis[0]) : ""), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: ["10px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, projetos.map((projeto, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 4,
    shadow: "md",
    borderWidth: "1px",
    rounded: "lg",
    key: index,
    bg: "gray.700",
    d: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "close",
    alignSelf: "flex-end",
    size: "10px",
    color: "red.500",
    cursor: "pointer",
    onClick: () => removerProjeto(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "md",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }, (projeto === null || projeto === void 0 ? void 0 : projeto.description) ? projeto === null || projeto === void 0 ? void 0 : projeto.description : "Não há descrição"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    alignSelf: "flex-end",
    name: "view",
    size: "18px",
    color: "white.500",
    cursor: "pointer",
    onClick: () => window.open(projeto === null || projeto === void 0 ? void 0 : projeto.html_url, "_blank"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }))))) : "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImJhc2VVcmxHaXRMYWIiLCJwcm9jZXNzIiwiYmFzZVVybEdpdEh1YiIsInRhbWFuaG9JY29uZSIsImljb25lc0xpbmd1YWdlbSIsIlB5dGhvbiIsIkphdmFTY3JpcHQiLCJUeXBlU2NyaXB0IiwiVnVlIiwiSFRNTCIsIkNTUyIsIkhvbWUiLCJwcm9qZXRvcyIsInNldFByb2pldG8iLCJ1c2VTdGF0ZSIsInBlcmZpcyIsInNldFBlcmZpbCIsImxvYWRlZCIsInNldExvYWRlZCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VFZmZlY3QiLCJsaXN0YXJVc3VhcmlvcyIsImRhdGEiLCJ1c3VhcmlvR2l0SHViIiwiYXBpIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInVzdWFyaW9HaXRMYWIiLCJ0b2Rvc1BlcmZpcyIsIkVyciIsImxpc3RhclJlcG9zaXRvcmlvcyIsInJlcEdpdEh1YiIsInJlcEdpdExhYiIsInRvZG9zUHJvamV0b3MiLCJjb25jYXQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJyZW1vdmVyUHJvamV0byIsImluZGV4IiwiYXJyIiwic3BsaWNlIiwiQ3JlYXRlUGVyZmlzIiwiaHRtbF91cmwiLCJsZW5ndGgiLCJuYW1lIiwiYmxvZyIsImxvY2F0aW9uIiwiYmlvIiwibWFwIiwicHJvamV0byIsIndpbmRvdyIsIm9wZW4iLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFVQSxNQUFNQSxhQUFhLEdBQUdDLDRCQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0QseUJBQXRCO0FBQ0EsTUFBTUUsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxRQUFNLEVBQUcsMENBQXlDRixZQUFhLHVCQUR6QztBQUV0QkcsWUFBVSxFQUFHLDZDQUE0Q0gsWUFBYSwyQkFGaEQ7QUFHdEJJLFlBQVUsRUFBRywwQ0FBeUNKLFlBQWEs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ekIsQ0FDRSxVQUFVQyxNQUFWLEVBQWtCO0FBQ2hCQyxrREFBUyxDQUFDQyxLQUFWLEdBRGdCLENBRWhCO0FBQ0E7O0FBQ0EsU0FBT0YsTUFBUDtBQUNELENBTkgsRUFPRSxVQUFVRyxLQUFWLEVBQWlCO0FBQ2YsU0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELENBVEg7QUFZQTFDLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJTLFFBQWpCLENBQTBCUCxHQUExQixDQUNFLFVBQVVPLFFBQVYsRUFBb0I7QUFDbEJMLGtEQUFTLENBQUNNLElBQVY7QUFDQSxTQUFPRCxRQUFQO0FBQ0QsQ0FKSCxFQUtFLFVBQVVILEtBQVYsRUFBaUI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FGLGtEQUFTLENBQUNNLElBQVY7QUFDQSxTQUFPSCxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsQ0FiSDtBQWVlMUMsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQ0EsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgRmxleCxcclxuICBUZXh0LFxyXG4gIEJveCxcclxuICBIZWFkaW5nLFxyXG4gIEdyaWQsXHJcbiAgdXNlVG9hc3QsXHJcbiAgSWNvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcblxyXG5jb25zdCBiYXNlVXJsR2l0TGFiID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxfR0lUTEFCO1xyXG5jb25zdCBiYXNlVXJsR2l0SHViID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxfR0lUSFVCO1xyXG5jb25zdCB0YW1hbmhvSWNvbmUgPSAyMjtcclxuY29uc3QgaWNvbmVzTGluZ3VhZ2VtID0ge1xyXG4gIFB5dGhvbjogYDxpbWcgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZHVzay8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL3B5dGhvbi5wbmdcIi8+YCxcclxuICBKYXZhU2NyaXB0OiBgPGltZyAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvamF2YXNjcmlwdC5wbmdcIi8+YCxcclxuICBUeXBlU2NyaXB0OiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvdHlwZXNjcmlwdC5wbmdcIi8+YCxcclxuICBWdWU6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC92dWUtanMucG5nXCIvPmAsXHJcbiAgSFRNTDogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2h0bWwucG5nXCIvPmAsXHJcbiAgQ1NTOiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2Nzcy5wbmdcIi8+YCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Byb2pldG9zLCBzZXRQcm9qZXRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGVyZmlzLCBzZXRQZXJmaWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyVXN1YXJpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRIdWJcIiwgdXN1YXJpb0dpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXN1YXJpb0dpdExhYiB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAke2Jhc2VVcmxHaXRMYWJ9dXNlcnMvMjkxOTI5MWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRMYWJcIiwgdXN1YXJpb0dpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUGVyZmlzID0gW3VzdWFyaW9HaXRIdWIsIHVzdWFyaW9HaXRMYWJdO1xyXG5cclxuICAgICAgICBzZXRQZXJmaWwodG9kb3NQZXJmaXMpO1xyXG4gICAgICB9IGNhdGNoIChFcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBFcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyUmVwb3NpdG9yaW9zKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OS9yZXBvc2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcEdpdEh1YlwiLCByZXBHaXRIdWIpO1xyXG5cclxuICAgICAgICBzZXRQcm9qZXRvKHJlcEdpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0TGFiIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdExhYn11c2Vycy8yOTE5MjkxL3Byb2plY3RzYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwR2l0TGFiXCIsIHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUHJvamV0b3MgPSByZXBHaXRIdWIuY29uY2F0KHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb3Mgb3MgUHJvamV0b3NcIiwgdG9kb3NQcm9qZXRvcyk7XHJcblxyXG4gICAgICAgIHNldFByb2pldG8odG9kb3NQcm9qZXRvcyk7XHJcbiAgICAgIH0gY2F0Y2ggKEVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0YXJSZXBvc2l0b3Jpb3MoKTtcclxuICAgIGxpc3RhclVzdWFyaW9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93VG9hc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHBvc2l0aW9uID0gXCJ0b3AtcmlnaHRcIikge1xyXG4gICAgdG9hc3Qoe1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIGR1cmF0aW9uOiA5MDAwLFxyXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVyUHJvamV0byhpbmRleCkge1xyXG4gICAgY29uc3QgYXJyID0gWy4uLnByb2pldG9zXTtcclxuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0UHJvamV0byhhcnIpO1xyXG4gICAgc2hvd1RvYXN0KFxyXG4gICAgICBcIlByb2pldG8gcmVtb3ZpZG9cIixcclxuICAgICAgXCJTZXUgcHJvamV0byBmb2kgcmVtb3ZpZG8gY29tIHN1Y2Vzc28uXCIsXHJcbiAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ3JlYXRlUGVyZmlzKHRpdGxlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBncmlkR2FwPVwiMzBweFwiIG10PXsxMH0+XHJcbiAgICAgICAgPGEgaHJlZj17dGl0bGU/Lmh0bWxfdXJsfSB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWIgdi1hbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMDAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGxhYi5jb20vbTR0M3VzXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMzJcIiBjbGFzc05hbWU9XCJ0YW51a2ktbG9nb1wiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtZWFyXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2UyNDMyOVwiXHJcbiAgICAgICAgICAgICAgZD1cIk0yIDE0bDkuMzggOXYtOWwtNC0xMi4yOGMtLjIwNS0uNjMyLTEuMTc2LS42MzItMS4zOCAwelwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1lYXJcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTM0IDE0bC05LjM4IDl2LTlsNC0xMi4yOGMuMjA1LS42MzIgMS4xNzYtLjYzMiAxLjM4IDB6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLW5vc2VcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDMsMTQgMzMsMTQgWlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWV5ZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmYzZkMjZcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMTEuMzgsMTQgMiwxNCA2LDI1WlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1leWVcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmM2ZDI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDI0LjYyLDE0IDM0LDE0IDMwLDI1WlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWNoZWVrXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2ZjYTMyNlwiXHJcbiAgICAgICAgICAgICAgZD1cIk0yIDE0TC4xIDIwLjE2Yy0uMTguNTY1IDAgMS4yLjUgMS41NmwxNy40MiAxMi42NnpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktcmlnaHQtY2hlZWtcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmNhMzI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTM0IDE0bDEuOSA2LjE2Yy4xOC41NjUgMCAxLjItLjUgMS41NkwxOCAzNC4zOHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGxpc3Nvbi1tYXRldXMtMDZhOTU3MTM3XCJcclxuICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzgvMDAwMDAwL2xpbmtlZGluLnBuZ1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbnQvMzgvMDAwMDAwL3R3aXR0ZXIucG5nXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBncmlkR2FwPXtbXCIxMHB4XCIsIFwiNTBweFwiXX1cclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgXCJyb3dcIl19XHJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICA+XHJcbiAgICAgIHtwcm9qZXRvcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICAgIHNoYWRvdz1cIm1kXCJcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD17W1wiMTAwJVwiLCBcIjQzMHB4XCJdfVxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgICAgICAgIGJnPVwiZ3JheS42MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8ubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8uYmxvZ308L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8ubG9jYXRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cGVyZmlzWzBdPy5iaW99PC9UZXh0PlxyXG5cclxuICAgICAgICAgICAge3BlcmZpc1swXT8ubmFtZSA/IENyZWF0ZVBlcmZpcyhwZXJmaXNbMF0pIDogXCJcIn1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSlcIlxyXG4gICAgICAgICAgICBnYXA9e1tcIjEwcHhcIiwgXCI1MHB4XCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvamV0b3MubWFwKChwcm9qZXRvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICAgICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGJnPVwiZ3JheS43MDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZC41MDBcIlxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlclByb2pldG8oaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwibWRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+e3Byb2pldG8/Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvamV0bz8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICA/IHByb2pldG8/LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIk7Do28gaMOhIGRlc2NyacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiZmxleC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidmlld1wiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZS41MDBcIlxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocHJvamV0bz8uaHRtbF91cmwsIFwiX2JsYW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zXHJcbiAgLmNyZWF0ZVxyXG4gIC8vYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBJLFxyXG4gICgpO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIC8vY29uc3QgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNyZWRlbnRpYWxzXCIpO1xyXG4gICAgLy9jb25maWcuaGVhZGVycy50b2tlbiA9IGNyZWRlbnRpYWxzID8gSlNPTi5wYXJzZShjcmVkZW50aWFscykudG9rZW4gOiBudWxsO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9LFxyXG4gIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcbik7XHJcblxyXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vaWYgKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzID09PSA0MDMpIHtcclxuICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAvL3JldHVybjtcclxuICAgIC8vfVxyXG4gICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==