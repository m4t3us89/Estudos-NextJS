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
  var _perfis$, _perfis$2, _perfis$3, _perfis$4, _perfis$5, _perfis$6;

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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, perfis.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "card",
    style: {
      maxWidth: "310px",
      width: "100%",
      height: "100%",
      maxHeight: "600px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("img", {
    style: loaded ? {} : {
      display: "none"
    },
    className: "card-img-top",
    src: (_perfis$ = perfis[1]) === null || _perfis$ === void 0 ? void 0 : _perfis$.avatar_url,
    style: {
      height: "300px",
      width: "100%"
    },
    onLoad: () => setLoaded(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "card-body",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.name)), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://img.icons8.com/color/20/000000/whatsapp.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }), "(63)98145-2573"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.blog), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.location), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, (_perfis$5 = perfis[0]) === null || _perfis$5 === void 0 ? void 0 : _perfis$5.bio), __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: (_perfis$6 = perfis[0]) === null || _perfis$6 === void 0 ? void 0 : _perfis$6.html_url,
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
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
      lineNumber: 121,
      columnNumber: 19
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }))), __jsx("a", {
    href: "https://gitlab.com/m4t3us",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("svg", {
    height: "32",
    className: "tanuki-logo",
    viewBox: "0 0 36 36",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, __jsx("path", {
    className: "tanuki-shape tanuki-left-ear",
    fill: "#e24329",
    d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-ear",
    fill: "#e24329",
    d: "M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-nose",
    fill: "#e24329",
    d: "M18,34.38 3,14 33,14 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-left-eye",
    fill: "#fc6d26",
    d: "M18,34.38 11.38,14 2,14 6,25Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-eye",
    fill: "#fc6d26",
    d: "M18,34.38 24.62,14 34,14 30,25Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-left-cheek",
    fill: "#fca326",
    d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-cheek",
    fill: "#fca326",
    d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }))), __jsx("a", {
    href: "https://www.linkedin.com/in/allisson-mateus-06a957137",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://img.icons8.com/color/38/000000/linkedin.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  })), __jsx("a", {
    href: "",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://img.icons8.com/fluent/38/000000/twitter.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, projetos.map((projeto, index) => __jsx("div", {
    key: index,
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "card-title",
    style: {
      marginTop: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.name)), __jsx("p", {
    className: "card-text",
    style: {
      marginTop: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }, projeto.description ? projeto.description : "Não há descrição"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }), __jsx("a", {
    href: (projeto === null || projeto === void 0 ? void 0 : projeto.html_url) || (projeto === null || projeto === void 0 ? void 0 : projeto.http_url_to_repo),
    target: "blank",
    className: "btn btn-outline-info btn-sm",
    style: {
      width: "20%",
      position: "absolute",
      bottom: 0,
      margin: "20px 0px 10px 0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-folder-open-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }))), __jsx("i", {
    onClick: function () {
      removerProjeto(index);
    },
    className: "fa fa-close",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      padding: 5,
      cursor: "pointer",
      color: "#DCDCDC"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      paddingLeft: 5
    },
    dangerouslySetInnerHTML: {
      __html: iconesLinguagem[projeto === null || projeto === void 0 ? void 0 : projeto.language]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  })))), __jsx("div", {
    style: {
      position: "fixed",
      right: "0",
      bottom: "0",
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, "PROJETOS: ", projetos.length))) : null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImJhc2VVcmxHaXRMYWIiLCJwcm9jZXNzIiwiYmFzZVVybEdpdEh1YiIsInRhbWFuaG9JY29uZSIsImljb25lc0xpbmd1YWdlbSIsIlB5dGhvbiIsIkphdmFTY3JpcHQiLCJUeXBlU2NyaXB0IiwiVnVlIiwiSFRNTCIsIkNTUyIsIkhvbWUiLCJwcm9qZXRvcyIsInNldFByb2pldG8iLCJ1c2VTdGF0ZSIsInBlcmZpcyIsInNldFBlcmZpbCIsImxvYWRlZCIsInNldExvYWRlZCIsInVzZUVmZmVjdCIsImxpc3RhclVzdWFyaW9zIiwiZGF0YSIsInVzdWFyaW9HaXRIdWIiLCJhcGkiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwidXN1YXJpb0dpdExhYiIsInRvZG9zUGVyZmlzIiwiRXJyIiwibGlzdGFyUmVwb3NpdG9yaW9zIiwicmVwR2l0SHViIiwicmVwR2l0TGFiIiwidG9kb3NQcm9qZXRvcyIsImNvbmNhdCIsInJlbW92ZXJQcm9qZXRvIiwiaW5kZXgiLCJhcnIiLCJzcGxpY2UiLCJsZW5ndGgiLCJtYXhXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwiZGlzcGxheSIsImF2YXRhcl91cmwiLCJ0ZXh0QWxpZ24iLCJuYW1lIiwiYmxvZyIsImxvY2F0aW9uIiwiYmlvIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwiaHRtbF91cmwiLCJtYXAiLCJwcm9qZXRvIiwibWFyZ2luVG9wIiwiZGVzY3JpcHRpb24iLCJodHRwX3VybF90b19yZXBvIiwicG9zaXRpb24iLCJib3R0b20iLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsInBhZGRpbmciLCJjdXJzb3IiLCJjb2xvciIsImxlZnQiLCJwYWRkaW5nTGVmdCIsIl9faHRtbCIsImxhbmd1YWdlIiwiYXhpb3MiLCJjcmVhdGUiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiTlByb2dyZXNzIiwic3RhcnQiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRvbmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLDRCQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0QseUJBQXRCO0FBQ0EsTUFBTUUsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxRQUFNLEVB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Ozs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5cclxuY29uc3QgYmFzZVVybEdpdExhYiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVExBQjtcclxuY29uc3QgYmFzZVVybEdpdEh1YiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVEhVQjtcclxuY29uc3QgdGFtYW5ob0ljb25lID0gMjI7XHJcbmNvbnN0IGljb25lc0xpbmd1YWdlbSA9IHtcclxuICBQeXRob246IGA8aW1nICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2R1c2svJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9weXRob24ucG5nXCIvPmAsXHJcbiAgSmF2YVNjcmlwdDogYDxpbWcgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2phdmFzY3JpcHQucG5nXCIvPmAsXHJcbiAgVHlwZVNjcmlwdDogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL3R5cGVzY3JpcHQucG5nXCIvPmAsXHJcbiAgVnVlOiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvdnVlLWpzLnBuZ1wiLz5gLFxyXG4gIEhUTUw6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9odG1sLnBuZ1wiLz5gLFxyXG4gIENTUzogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9jc3MucG5nXCIvPmAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwcm9qZXRvcywgc2V0UHJvamV0b10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BlcmZpcywgc2V0UGVyZmlsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyVXN1YXJpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRIdWJcIiwgdXN1YXJpb0dpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXN1YXJpb0dpdExhYiB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAke2Jhc2VVcmxHaXRMYWJ9dXNlcnMvMjkxOTI5MWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRMYWJcIiwgdXN1YXJpb0dpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUGVyZmlzID0gW3VzdWFyaW9HaXRIdWIsIHVzdWFyaW9HaXRMYWJdO1xyXG5cclxuICAgICAgICBzZXRQZXJmaWwodG9kb3NQZXJmaXMpO1xyXG4gICAgICB9IGNhdGNoIChFcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBFcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyUmVwb3NpdG9yaW9zKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OS9yZXBvc2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcEdpdEh1YlwiLCByZXBHaXRIdWIpO1xyXG5cclxuICAgICAgICBzZXRQcm9qZXRvKHJlcEdpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0TGFiIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdExhYn11c2Vycy8yOTE5MjkxL3Byb2plY3RzYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwR2l0TGFiXCIsIHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUHJvamV0b3MgPSByZXBHaXRIdWIuY29uY2F0KHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb3Mgb3MgUHJvamV0b3NcIiwgdG9kb3NQcm9qZXRvcyk7XHJcblxyXG4gICAgICAgIHNldFByb2pldG8odG9kb3NQcm9qZXRvcyk7XHJcbiAgICAgIH0gY2F0Y2ggKEVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0YXJSZXBvc2l0b3Jpb3MoKTtcclxuICAgIGxpc3RhclVzdWFyaW9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmVyUHJvamV0byhpbmRleCkge1xyXG4gICAgY29uc3QgYXJyID0gWy4uLnByb2pldG9zXTtcclxuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0UHJvamV0byhhcnIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwZXJmaXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCIzMTBweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIG1heEhlaWdodDogXCI2MDBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2xvYWRlZCA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICAgICAgc3JjPXtwZXJmaXNbMV0/LmF2YXRhcl91cmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0TG9hZGVkKHRydWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGI+e3BlcmZpc1swXT8ubmFtZX08L2I+XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMjAvMDAwMDAwL3doYXRzYXBwLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAoNjMpOTgxNDUtMjU3M1xyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGg2PntwZXJmaXNbMF0/LmJsb2d9PC9oNj5cclxuICAgICAgICAgICAgICA8aDY+e3BlcmZpc1swXT8ubG9jYXRpb259PC9oNj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cGVyZmlzWzBdPy5iaW99PC9wPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BlcmZpc1swXT8uaHRtbF91cmx9IHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWIgdi1hbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMDAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0bGFiLmNvbS9tNHQzdXNcIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjMyXCIgY2xhc3NOYW1lPVwidGFudWtpLWxvZ29cIiB2aWV3Qm94PVwiMCAwIDM2IDM2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbGVmdC1lYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlMjQzMjlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yIDE0bDkuMzggOXYtOWwtNC0xMi4yOGMtLjIwNS0uNjMyLTEuMTc2LS42MzItMS4zOCAwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1lYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlMjQzMjlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0zNCAxNGwtOS4zOCA5di05bDQtMTIuMjhjLjIwNS0uNjMyIDEuMTc2LS42MzIgMS4zOCAwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1ub3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMywxNCAzMywxNCBaXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtZXllXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmM2ZDI2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMTEuMzgsMTQgMiwxNCA2LDI1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1leWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmYzZkMjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOCwzNC4zOCAyNC42MiwxNCAzNCwxNCAzMCwyNVpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbGVmdC1jaGVla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZjYTMyNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIgMTRMLjEgMjAuMTZjLS4xOC41NjUgMCAxLjIuNSAxLjU2bDE3LjQyIDEyLjY2elwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1jaGVla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZjYTMyNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM0IDE0bDEuOSA2LjE2Yy4xOC41NjUgMCAxLjItLjUgMS41NkwxOCAzNC4zOHpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxsaXNzb24tbWF0ZXVzLTA2YTk1NzEzN1wiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzM4LzAwMDAwMC9saW5rZWRpbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZmx1ZW50LzM4LzAwMDAwMC90d2l0dGVyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb2pldG9zLm1hcCgocHJvamV0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPntwcm9qZXRvPy5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2pldG8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgID8gcHJvamV0by5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIk7Do28gaMOhIGRlc2NyacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamV0bz8uaHRtbF91cmwgfHwgcHJvamV0bz8uaHR0cF91cmxfdG9fcmVwb31cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm8gYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggMHB4IDEwcHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZvbGRlci1vcGVuLW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZXJQcm9qZXRvKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRENEQ0RDXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBpY29uZXNMaW5ndWFnZW1bcHJvamV0bz8ubGFuZ3VhZ2VdLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+UFJPSkVUT1M6IHtwcm9qZXRvcy5sZW5ndGh9PC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvc1xyXG4gIC5jcmVhdGVcclxuICAvL2Jhc2VVUkw6IHByb2Nlc3MuZW52LkFQSSxcclxuICAoKTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvL2NvbnN0IGNyZWRlbnRpYWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjcmVkZW50aWFsc1wiKTtcclxuICAgIC8vY29uZmlnLmhlYWRlcnMudG9rZW4gPSBjcmVkZW50aWFscyA/IEpTT04ucGFyc2UoY3JlZGVudGlhbHMpLnRva2VuIDogbnVsbDtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvL2lmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgLy9yZXR1cm47XHJcbiAgICAvL31cclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==