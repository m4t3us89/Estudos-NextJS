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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
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

const fetcher = url => fetch(url).then(res => res.json());
/*
export async function getStaticProps() {
  const posts = await fetcher(`${baseUrlGitHub}users`);

  return { props: { posts } };
}*/


function Home() {
  var _perfis$, _perfis$2, _perfis$3, _perfis$4, _perfis$5;

  //const { data } = useSWR("/api/posts", fetcher, { initialData: props.posts });
  const {
    0: since,
    1: setSince
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    data: usuarios,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`${baseUrlGitHub}users?since=${since}`, fetcher //{ refreshInterval: 3000 }
  );
  /*const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (usuarios || error) console.log("swr", usuarios ? usuarios : error);
  }, [usuarios]);
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
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useToast"])();
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
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      alignItems: "center",
      justifyContent: "center",
      gridGap: "30px",
      mt: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: title === null || title === void 0 ? void 0 : title.html_url,
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
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
        lineNumber: 138,
        columnNumber: 11
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://gitlab.com/m4t3us",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }
    }, __jsx("svg", {
      height: "32",
      className: "tanuki-logo",
      viewBox: "0 0 36 36",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }
    }, __jsx("path", {
      className: "tanuki-shape tanuki-left-ear",
      fill: "#e24329",
      d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-ear",
      fill: "#e24329",
      d: "M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-nose",
      fill: "#e24329",
      d: "M18,34.38 3,14 33,14 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-eye",
      fill: "#fc6d26",
      d: "M18,34.38 11.38,14 2,14 6,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-eye",
      fill: "#fc6d26",
      d: "M18,34.38 24.62,14 34,14 30,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-cheek",
      fill: "#fca326",
      d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-cheek",
      fill: "#fca326",
      d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://www.linkedin.com/in/allisson-mateus-06a957137",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/color/38/000000/linkedin.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    })), __jsx("a", {
      href: "",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/fluent/38/000000/twitter.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 11
      }
    })));
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    gridGap: ["10px", "50px"],
    display: "flex",
    flexDirection: ["column", "row"],
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    d: "flex",
    flexDirection: "column",
    gridGap: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variantColor: "teal",
    size: "md",
    onClick: () => setSince(since + 45),
    isDisabled: !usuarios && !error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, !usuarios && !error ? "Carregando..." : "Usuarios"), usuarios && usuarios.map(item => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    size: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: item.avatar_url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  })))), projetos.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
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
      lineNumber: 232,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "xl",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, (_perfis$ = perfis[0]) === null || _perfis$ === void 0 ? void 0 : _perfis$.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.blog), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.location)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.bio), ((_perfis$5 = perfis[0]) === null || _perfis$5 === void 0 ? void 0 : _perfis$5.name) ? CreatePerfis(perfis[0]) : ""), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: ["10px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }, projetos.map((projeto, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
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
      lineNumber: 256,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "close",
    alignSelf: "flex-end",
    size: "10px",
    color: "red.500",
    cursor: "pointer",
    onClick: () => removerProjeto(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "md",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 19
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  }, (projeto === null || projeto === void 0 ? void 0 : projeto.description) ? projeto === null || projeto === void 0 ? void 0 : projeto.description : "Não há descrição"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    alignSelf: "flex-end",
    name: "view",
    size: "18px",
    color: "white.500",
    cursor: "pointer",
    onClick: () => window.open(projeto === null || projeto === void 0 ? void 0 : projeto.html_url, "_blank"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
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

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbImJhc2VVcmxHaXRMYWIiLCJwcm9jZXNzIiwiYmFzZVVybEdpdEh1YiIsInRhbWFuaG9JY29uZSIsImljb25lc0xpbmd1YWdlbSIsIlB5dGhvbiIsIkphdmFTY3JpcHQiLCJUeXBlU2NyaXB0IiwiVnVlIiwiSFRNTCIsIkNTUyIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSG9tZSIsInNpbmNlIiwic2V0U2luY2UiLCJ1c2VTdGF0ZSIsImRhdGEiLCJ1c3VhcmlvcyIsImVycm9yIiwidXNlU1dSIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInByb2pldG9zIiwic2V0UHJvamV0byIsInBlcmZpcyIsInNldFBlcmZpbCIsImxvYWRlZCIsInNldExvYWRlZCIsInRvYXN0IiwidXNlVG9hc3QiLCJsaXN0YXJVc3VhcmlvcyIsInVzdWFyaW9HaXRIdWIiLCJhcGkiLCJnZXQiLCJ1c3VhcmlvR2l0TGFiIiwidG9kb3NQZXJmaXMiLCJFcnIiLCJsaXN0YXJSZXBvc2l0b3Jpb3MiLCJyZXBHaXRIdWIiLCJyZXBHaXRMYWIiLCJ0b2Rvc1Byb2pldG9zIiwiY29uY2F0Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwicmVtb3ZlclByb2pldG8iLCJpbmRleCIsImFyciIsInNwbGljZSIsIkNyZWF0ZVBlcmZpcyIsImh0bWxfdXJsIiwibWFwIiwiaXRlbSIsImF2YXRhcl91cmwiLCJsZW5ndGgiLCJuYW1lIiwiYmxvZyIsImxvY2F0aW9uIiwiYmlvIiwicHJvamV0byIsIndpbmRvdyIsIm9wZW4iLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRvbmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFQTtBQVdBLE1BQU1BLGFBQWEsR0FBR0MsNEJBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCx5QkFBdEI7QUFDQSxNQUFNRSxZ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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgRmxleCxcclxuICBUZXh0LFxyXG4gIEJveCxcclxuICBIZWFkaW5nLFxyXG4gIEdyaWQsXHJcbiAgdXNlVG9hc3QsXHJcbiAgSWNvbixcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgYmFzZVVybEdpdExhYiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVExBQjtcclxuY29uc3QgYmFzZVVybEdpdEh1YiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVEhVQjtcclxuY29uc3QgdGFtYW5ob0ljb25lID0gMjI7XHJcbmNvbnN0IGljb25lc0xpbmd1YWdlbSA9IHtcclxuICBQeXRob246IGA8aW1nICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2R1c2svJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9weXRob24ucG5nXCIvPmAsXHJcbiAgSmF2YVNjcmlwdDogYDxpbWcgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2phdmFzY3JpcHQucG5nXCIvPmAsXHJcbiAgVHlwZVNjcmlwdDogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL3R5cGVzY3JpcHQucG5nXCIvPmAsXHJcbiAgVnVlOiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvdnVlLWpzLnBuZ1wiLz5gLFxyXG4gIEhUTUw6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9odG1sLnBuZ1wiLz5gLFxyXG4gIENTUzogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9jc3MucG5nXCIvPmAsXHJcbn07XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaGVyKGAke2Jhc2VVcmxHaXRIdWJ9dXNlcnNgKTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdHMgfSB9O1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgLy9jb25zdCB7IGRhdGEgfSA9IHVzZVNXUihcIi9hcGkvcG9zdHNcIiwgZmV0Y2hlciwgeyBpbml0aWFsRGF0YTogcHJvcHMucG9zdHMgfSk7XHJcbiAgY29uc3QgW3NpbmNlLCBzZXRTaW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGRhdGE6IHVzdWFyaW9zLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycz9zaW5jZT0ke3NpbmNlfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgICAvL3sgcmVmcmVzaEludGVydmFsOiAzMDAwIH1cclxuICApO1xyXG5cclxuICAvKmNvbnN0IGlzTG9hZGluZ0luaXRpYWxEYXRhID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnN0IGlzTG9hZGluZ01vcmUgPVxyXG4gICAgaXNMb2FkaW5nSW5pdGlhbERhdGEgfHxcclxuICAgIChzaXplID4gMCAmJiBkYXRhICYmIHR5cGVvZiBkYXRhW3NpemUgLSAxXSA9PT0gXCJ1bmRlZmluZWRcIik7Ki9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c3VhcmlvcyB8fCBlcnJvcikgY29uc29sZS5sb2coXCJzd3JcIiwgdXN1YXJpb3MgPyB1c3VhcmlvcyA6IGVycm9yKTtcclxuICB9LCBbdXN1YXJpb3NdKTtcclxuXHJcbiAgY29uc3QgW3Byb2pldG9zLCBzZXRQcm9qZXRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGVyZmlzLCBzZXRQZXJmaWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyVXN1YXJpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRIdWJcIiwgdXN1YXJpb0dpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXN1YXJpb0dpdExhYiB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAke2Jhc2VVcmxHaXRMYWJ9dXNlcnMvMjkxOTI5MWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRMYWJcIiwgdXN1YXJpb0dpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUGVyZmlzID0gW3VzdWFyaW9HaXRIdWIsIHVzdWFyaW9HaXRMYWJdO1xyXG5cclxuICAgICAgICBzZXRQZXJmaWwodG9kb3NQZXJmaXMpO1xyXG4gICAgICB9IGNhdGNoIChFcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBFcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyUmVwb3NpdG9yaW9zKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OS9yZXBvc2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcEdpdEh1YlwiLCByZXBHaXRIdWIpO1xyXG5cclxuICAgICAgICBzZXRQcm9qZXRvKHJlcEdpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0TGFiIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdExhYn11c2Vycy8yOTE5MjkxL3Byb2plY3RzYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwR2l0TGFiXCIsIHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUHJvamV0b3MgPSByZXBHaXRIdWIuY29uY2F0KHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb3Mgb3MgUHJvamV0b3NcIiwgdG9kb3NQcm9qZXRvcyk7XHJcblxyXG4gICAgICAgIHNldFByb2pldG8odG9kb3NQcm9qZXRvcyk7XHJcbiAgICAgIH0gY2F0Y2ggKEVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0YXJSZXBvc2l0b3Jpb3MoKTtcclxuICAgIGxpc3RhclVzdWFyaW9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93VG9hc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHBvc2l0aW9uID0gXCJ0b3AtcmlnaHRcIikge1xyXG4gICAgdG9hc3Qoe1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIGR1cmF0aW9uOiA5MDAwLFxyXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVyUHJvamV0byhpbmRleCkge1xyXG4gICAgY29uc3QgYXJyID0gWy4uLnByb2pldG9zXTtcclxuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0UHJvamV0byhhcnIpO1xyXG4gICAgc2hvd1RvYXN0KFxyXG4gICAgICBcIlByb2pldG8gcmVtb3ZpZG9cIixcclxuICAgICAgXCJTZXUgcHJvamV0byBmb2kgcmVtb3ZpZG8gY29tIHN1Y2Vzc28uXCIsXHJcbiAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ3JlYXRlUGVyZmlzKHRpdGxlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBncmlkR2FwPVwiMzBweFwiIG10PXsxMH0+XHJcbiAgICAgICAgPGEgaHJlZj17dGl0bGU/Lmh0bWxfdXJsfSB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWIgdi1hbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMDAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGxhYi5jb20vbTR0M3VzXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMzJcIiBjbGFzc05hbWU9XCJ0YW51a2ktbG9nb1wiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtZWFyXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2UyNDMyOVwiXHJcbiAgICAgICAgICAgICAgZD1cIk0yIDE0bDkuMzggOXYtOWwtNC0xMi4yOGMtLjIwNS0uNjMyLTEuMTc2LS42MzItMS4zOCAwelwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1lYXJcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTM0IDE0bC05LjM4IDl2LTlsNC0xMi4yOGMuMjA1LS42MzIgMS4xNzYtLjYzMiAxLjM4IDB6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLW5vc2VcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDMsMTQgMzMsMTQgWlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWV5ZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmYzZkMjZcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMTEuMzgsMTQgMiwxNCA2LDI1WlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1leWVcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmM2ZDI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDI0LjYyLDE0IDM0LDE0IDMwLDI1WlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWNoZWVrXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2ZjYTMyNlwiXHJcbiAgICAgICAgICAgICAgZD1cIk0yIDE0TC4xIDIwLjE2Yy0uMTguNTY1IDAgMS4yLjUgMS41NmwxNy40MiAxMi42NnpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktcmlnaHQtY2hlZWtcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmNhMzI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTM0IDE0bDEuOSA2LjE2Yy4xOC41NjUgMCAxLjItLjUgMS41NkwxOCAzNC4zOHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGxpc3Nvbi1tYXRldXMtMDZhOTU3MTM3XCJcclxuICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzgvMDAwMDAwL2xpbmtlZGluLnBuZ1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbnQvMzgvMDAwMDAwL3R3aXR0ZXIucG5nXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBncmlkR2FwPXtbXCIxMHB4XCIsIFwiNTBweFwiXX1cclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgXCJyb3dcIl19XHJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICA+XHJcbiAgICAgIDxCb3ggZD1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ3JpZEdhcD17NH0+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2luY2Uoc2luY2UgKyA0NSl9XHJcbiAgICAgICAgICBpc0Rpc2FibGVkPXshdXN1YXJpb3MgJiYgIWVycm9yfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHshdXN1YXJpb3MgJiYgIWVycm9yID8gXCJDYXJyZWdhbmRvLi4uXCIgOiBcIlVzdWFyaW9zXCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAge3VzdWFyaW9zICYmXHJcbiAgICAgICAgICB1c3Vhcmlvcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzaXplPXsyMH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uYXZhdGFyX3VybH0gLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIHtwcm9qZXRvcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICAgIHNoYWRvdz1cIm1kXCJcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD17W1wiMTAwJVwiLCBcIjQzMHB4XCJdfVxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgICAgICAgIGJnPVwiZ3JheS42MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8ubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8uYmxvZ308L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8ubG9jYXRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cGVyZmlzWzBdPy5iaW99PC9UZXh0PlxyXG5cclxuICAgICAgICAgICAge3BlcmZpc1swXT8ubmFtZSA/IENyZWF0ZVBlcmZpcyhwZXJmaXNbMF0pIDogXCJcIn1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSlcIlxyXG4gICAgICAgICAgICBnYXA9e1tcIjEwcHhcIiwgXCI1MHB4XCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvamV0b3MubWFwKChwcm9qZXRvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICAgICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGJnPVwiZ3JheS43MDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZC41MDBcIlxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlclByb2pldG8oaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwibWRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+e3Byb2pldG8/Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvamV0bz8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICA/IHByb2pldG8/LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIk7Do28gaMOhIGRlc2NyacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiZmxleC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidmlld1wiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZS41MDBcIlxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocHJvamV0bz8uaHRtbF91cmwsIFwiX2JsYW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zXHJcbiAgLmNyZWF0ZVxyXG4gIC8vYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBJLFxyXG4gICgpO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIC8vY29uc3QgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNyZWRlbnRpYWxzXCIpO1xyXG4gICAgLy9jb25maWcuaGVhZGVycy50b2tlbiA9IGNyZWRlbnRpYWxzID8gSlNPTi5wYXJzZShjcmVkZW50aWFscykudG9rZW4gOiBudWxsO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9LFxyXG4gIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcbik7XHJcblxyXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vaWYgKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzID09PSA0MDMpIHtcclxuICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAvL3JldHVybjtcclxuICAgIC8vfVxyXG4gICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=