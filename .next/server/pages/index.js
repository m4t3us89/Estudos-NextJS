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
var _jsxFileName = "C:\\Users\\allis\\Desktop\\Projetos\\Estudos-NextJS\\pages\\index.js";

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
}; //const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcher = url => _services_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(res => res.data);
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
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`${baseUrlGitHub}users?since=${since}`, fetcher, {
    errorRetryInterval: 60000
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (usuarios) console.log("swr SUCESSO", usuarios ? usuarios : error);

    if (error) {
      var _error$response, _error$response$data;

      console.log("swr ERROR", error === null || error === void 0 ? void 0 : error.response);
      showToast("Falha na comunicação com o GITHUB", error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message, "error");
    }
  }, [usuarios, error]);
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
        var _Err$response;

        console.log("err", Err === null || Err === void 0 ? void 0 : (_Err$response = Err.response) === null || _Err$response === void 0 ? void 0 : _Err$response.status);
      }
    }

    async function listarRepositorios() {
      try {
        const {
          data: repGitHub
        } = await _services_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${baseUrlGitHub}/users/m4t3us89/repos`);
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
        var _Err$response2;

        console.log("errRepositorios", Err === null || Err === void 0 ? void 0 : (_Err$response2 = Err.response) === null || _Err$response2 === void 0 ? void 0 : _Err$response2.status);
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
        lineNumber: 147,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: title === null || title === void 0 ? void 0 : title.html_url,
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
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
        lineNumber: 149,
        columnNumber: 11
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://gitlab.com/m4t3us",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, __jsx("svg", {
      height: "32",
      className: "tanuki-logo",
      viewBox: "0 0 36 36",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }, __jsx("path", {
      className: "tanuki-shape tanuki-left-ear",
      fill: "#e24329",
      d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-ear",
      fill: "#e24329",
      d: "M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-nose",
      fill: "#e24329",
      d: "M18,34.38 3,14 33,14 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-eye",
      fill: "#fc6d26",
      d: "M18,34.38 11.38,14 2,14 6,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-eye",
      fill: "#fc6d26",
      d: "M18,34.38 24.62,14 34,14 30,25Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-left-cheek",
      fill: "#fca326",
      d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }), __jsx("path", {
      className: "tanuki-shape tanuki-right-cheek",
      fill: "#fca326",
      d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }))), __jsx("a", {
      href: "https://www.linkedin.com/in/allisson-mateus-06a957137",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/color/38/000000/linkedin.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }
    })), __jsx("a", {
      href: "",
      target: "blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://img.icons8.com/fluent/38/000000/twitter.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
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
      lineNumber: 219,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    d: "flex",
    flexDirection: "column",
    gridGap: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variantColor: "teal",
    size: "sm",
    onClick: () => setSince(since + 45),
    isDisabled: !usuarios && !error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, !usuarios && !error ? "Carregando" : "Usuarios"), !error && usuarios && usuarios.map((item, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    key: index,
    rounded: "full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: item.avatar_url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
      lineNumber: 244,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "xl",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, (_perfis$ = perfis[0]) === null || _perfis$ === void 0 ? void 0 : _perfis$.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.blog), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.location)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.bio), ((_perfis$5 = perfis[0]) === null || _perfis$5 === void 0 ? void 0 : _perfis$5.name) ? CreatePerfis(perfis[0]) : ""), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: ["10px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
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
      lineNumber: 268,
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
      lineNumber: 279,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "md",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 19
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
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
      lineNumber: 296,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbImJhc2VVcmxHaXRMYWIiLCJwcm9jZXNzIiwiYmFzZVVybEdpdEh1YiIsInRhbWFuaG9JY29uZSIsImljb25lc0xpbmd1YWdlbSIsIlB5dGhvbiIsIkphdmFTY3JpcHQiLCJUeXBlU2NyaXB0IiwiVnVlIiwiSFRNTCIsIkNTUyIsImZldGNoZXIiLCJ1cmwiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIkhvbWUiLCJzaW5jZSIsInNldFNpbmNlIiwidXNlU3RhdGUiLCJ1c3VhcmlvcyIsImVycm9yIiwidXNlU1dSIiwiZXJyb3JSZXRyeUludGVydmFsIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwic2hvd1RvYXN0IiwibWVzc2FnZSIsInByb2pldG9zIiwic2V0UHJvamV0byIsInBlcmZpcyIsInNldFBlcmZpbCIsImxvYWRlZCIsInNldExvYWRlZCIsInRvYXN0IiwidXNlVG9hc3QiLCJsaXN0YXJVc3VhcmlvcyIsInVzdWFyaW9HaXRIdWIiLCJ1c3VhcmlvR2l0TGFiIiwidG9kb3NQZXJmaXMiLCJFcnIiLCJzdGF0dXMiLCJsaXN0YXJSZXBvc2l0b3Jpb3MiLCJyZXBHaXRIdWIiLCJyZXBHaXRMYWIiLCJ0b2Rvc1Byb2pldG9zIiwiY29uY2F0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwicmVtb3ZlclByb2pldG8iLCJpbmRleCIsImFyciIsInNwbGljZSIsIkNyZWF0ZVBlcmZpcyIsImh0bWxfdXJsIiwibWFwIiwiaXRlbSIsImF2YXRhcl91cmwiLCJsZW5ndGgiLCJuYW1lIiwiYmxvZyIsImxvY2F0aW9uIiwiYmlvIiwicHJvamV0byIsIndpbmRvdyIsIm9wZW4iLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIlByb21pc2UiLCJyZWplY3QiLCJkb25lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBR0E7QUFXQSxNQUFNQSxhQUFhLEdBQUdDLDRCQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0QseUJB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TzBELE9BQU8sQ0FBQ0MsTUFBUixDQUFlM0QsS0FBZixDQUFQO0FBQ0QsQ0FUSDtBQVlBVixHQUFHLENBQUM4RCxZQUFKLENBQWlCOUMsUUFBakIsQ0FBMEJnRCxHQUExQixDQUNFLFVBQVVoRCxRQUFWLEVBQW9CO0FBQ2xCa0Qsa0RBQVMsQ0FBQ0ksSUFBVjtBQUNBLFNBQU90RCxRQUFQO0FBQ0QsQ0FKSCxFQUtFLFVBQVVOLEtBQVYsRUFBaUI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0F3RCxrREFBUyxDQUFDSSxJQUFWO0FBQ0EsU0FBT0YsT0FBTyxDQUFDQyxNQUFSLENBQWUzRCxLQUFmLENBQVA7QUFDRCxDQWJIO0FBZWVWLGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgVGV4dCxcclxuICBCb3gsXHJcbiAgSGVhZGluZyxcclxuICBHcmlkLFxyXG4gIHVzZVRvYXN0LFxyXG4gIEljb24sXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IGJhc2VVcmxHaXRMYWIgPSBwcm9jZXNzLmVudi5CQVNFX1VSTF9HSVRMQUI7XHJcbmNvbnN0IGJhc2VVcmxHaXRIdWIgPSBwcm9jZXNzLmVudi5CQVNFX1VSTF9HSVRIVUI7XHJcbmNvbnN0IHRhbWFuaG9JY29uZSA9IDIyO1xyXG5jb25zdCBpY29uZXNMaW5ndWFnZW0gPSB7XHJcbiAgUHl0aG9uOiBgPGltZyAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9kdXNrLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvcHl0aG9uLnBuZ1wiLz5gLFxyXG4gIEphdmFTY3JpcHQ6IGA8aW1nICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9qYXZhc2NyaXB0LnBuZ1wiLz5gLFxyXG4gIFR5cGVTY3JpcHQ6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC90eXBlc2NyaXB0LnBuZ1wiLz5gLFxyXG4gIFZ1ZTogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL3Z1ZS1qcy5wbmdcIi8+YCxcclxuICBIVE1MOiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvaHRtbC5wbmdcIi8+YCxcclxuICBDU1M6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvY3NzLnBuZ1wiLz5gLFxyXG59O1xyXG5cclxuLy9jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGFwaS5nZXQodXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoZXIoYCR7YmFzZVVybEdpdEh1Yn11c2Vyc2ApO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBwb3N0cyB9IH07XHJcbn0qL1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAvL2NvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKFwiL2FwaS9wb3N0c1wiLCBmZXRjaGVyLCB7IGluaXRpYWxEYXRhOiBwcm9wcy5wb3N0cyB9KTtcclxuICBjb25zdCBbc2luY2UsIHNldFNpbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgZGF0YTogdXN1YXJpb3MsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgJHtiYXNlVXJsR2l0SHVifXVzZXJzP3NpbmNlPSR7c2luY2V9YCxcclxuICAgIGZldGNoZXIsXHJcbiAgICB7ZXJyb3JSZXRyeUludGVydmFsIDogNjAwMDB9XHJcbiAgKTtcclxuXHJcbiBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c3VhcmlvcykgY29uc29sZS5sb2coXCJzd3IgU1VDRVNTT1wiLCB1c3VhcmlvcyA/IHVzdWFyaW9zIDogZXJyb3IpO1xyXG4gICAgXHJcbiAgICBpZihlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3dyIEVSUk9SXCIsIGVycm9yPy5yZXNwb25zZSlcclxuICAgICAgc2hvd1RvYXN0KFxyXG4gICAgICAgIFwiRmFsaGEgbmEgY29tdW5pY2HDp8OjbyBjb20gbyBHSVRIVUJcIixcclxuICAgICAgICBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UsXHJcbiAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW3VzdWFyaW9zLCBlcnJvcl0pO1xyXG5cclxuXHJcbiAgY29uc3QgW3Byb2pldG9zLCBzZXRQcm9qZXRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGVyZmlzLCBzZXRQZXJmaWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyVXN1YXJpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRIdWJcIiwgdXN1YXJpb0dpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXN1YXJpb0dpdExhYiB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAke2Jhc2VVcmxHaXRMYWJ9dXNlcnMvMjkxOTI5MWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRMYWJcIiwgdXN1YXJpb0dpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUGVyZmlzID0gW3VzdWFyaW9HaXRIdWIsIHVzdWFyaW9HaXRMYWJdO1xyXG5cclxuICAgICAgICBzZXRQZXJmaWwodG9kb3NQZXJmaXMpO1xyXG4gICAgICB9IGNhdGNoIChFcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBFcnI/LnJlc3BvbnNlPy5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyUmVwb3NpdG9yaW9zKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn0vdXNlcnMvbTR0M3VzODkvcmVwb3NgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXBHaXRIdWJcIiwgcmVwR2l0SHViKTtcclxuXHJcbiAgICAgICAgc2V0UHJvamV0byhyZXBHaXRIdWIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGE6IHJlcEdpdExhYiB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAke2Jhc2VVcmxHaXRMYWJ9dXNlcnMvMjkxOTI5MS9wcm9qZWN0c2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcEdpdExhYlwiLCByZXBHaXRMYWIpO1xyXG5cclxuICAgICAgICBjb25zdCB0b2Rvc1Byb2pldG9zID0gcmVwR2l0SHViLmNvbmNhdChyZXBHaXRMYWIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRvZG9zIG9zIFByb2pldG9zXCIsIHRvZG9zUHJvamV0b3MpO1xyXG5cclxuICAgICAgICBzZXRQcm9qZXRvKHRvZG9zUHJvamV0b3MpO1xyXG4gICAgICB9IGNhdGNoIChFcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVyclJlcG9zaXRvcmlvc1wiLCBFcnI/LnJlc3BvbnNlPy5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgbGlzdGFyUmVwb3NpdG9yaW9zKClcclxuICAgIGxpc3RhclVzdWFyaW9zKClcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dUb2FzdCh0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXR1cywgcG9zaXRpb24gPSBcInRvcC1yaWdodFwiKSB7XHJcbiAgICB0b2FzdCh7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgZHVyYXRpb246IDkwMDAsXHJcbiAgICAgIGlzQ2xvc2FibGU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZXJQcm9qZXRvKGluZGV4KSB7XHJcbiAgICBjb25zdCBhcnIgPSBbLi4ucHJvamV0b3NdO1xyXG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRQcm9qZXRvKGFycik7XHJcbiAgICBzaG93VG9hc3QoXHJcbiAgICAgIFwiUHJvamV0byByZW1vdmlkb1wiLFxyXG4gICAgICBcIlNldSBwcm9qZXRvIGZvaSByZW1vdmlkbyBjb20gc3VjZXNzby5cIixcclxuICAgICAgXCJzdWNjZXNzXCJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBDcmVhdGVQZXJmaXModGl0bGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGdyaWRHYXA9XCIzMHB4XCIgbXQ9ezEwfT5cclxuICAgICAgICA8YSBocmVmPXt0aXRsZT8uaHRtbF91cmx9IHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1tYXJrLWdpdGh1YiB2LWFsaWduLW1pZGRsZVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMyXCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwMDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0bGFiLmNvbS9tNHQzdXNcIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIzMlwiIGNsYXNzTmFtZT1cInRhbnVraS1sb2dvXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbGVmdC1lYXJcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTIgMTRsOS4zOCA5di05bC00LTEyLjI4Yy0uMjA1LS42MzItMS4xNzYtLjYzMi0xLjM4IDB6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLXJpZ2h0LWVhclwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNlMjQzMjlcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMzQgMTRsLTkuMzggOXYtOWw0LTEyLjI4Yy4yMDUtLjYzMiAxLjE3Ni0uNjMyIDEuMzggMHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbm9zZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNlMjQzMjlcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMywxNCAzMywxNCBaXCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtZXllXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2ZjNmQyNlwiXHJcbiAgICAgICAgICAgICAgZD1cIk0xOCwzNC4zOCAxMS4zOCwxNCAyLDE0IDYsMjVaXCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLXJpZ2h0LWV5ZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmYzZkMjZcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMjQuNjIsMTQgMzQsMTQgMzAsMjVaXCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtY2hlZWtcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmNhMzI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTIgMTRMLjEgMjAuMTZjLS4xOC41NjUgMCAxLjIuNSAxLjU2bDE3LjQyIDEyLjY2elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1jaGVla1wiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmY2EzMjZcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMzQgMTRsMS45IDYuMTZjLjE4LjU2NSAwIDEuMi0uNSAxLjU2TDE4IDM0LjM4elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsbGlzc29uLW1hdGV1cy0wNmE5NTcxMzdcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8zOC8wMDAwMDAvbGlua2VkaW4ucG5nXCIgLz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVudC8zOC8wMDAwMDAvdHdpdHRlci5wbmdcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGdyaWRHYXA9e1tcIjEwcHhcIiwgXCI1MHB4XCJdfVxyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgIGZsZXhEaXJlY3Rpb249e1tcImNvbHVtblwiLCBcInJvd1wiXX1cclxuICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgID5cclxuICAgICAgPEJveCBkPVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBncmlkR2FwPXs0fSA+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW5jZShzaW5jZSArIDQ1KX1cclxuICAgICAgICAgIGlzRGlzYWJsZWQ9eyF1c3VhcmlvcyAmJiAhZXJyb3J9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyF1c3VhcmlvcyAmJiAhZXJyb3IgPyBcIkNhcnJlZ2FuZG9cIiA6IFwiVXN1YXJpb3NcIiB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgeyAhZXJyb3IgJiYgdXN1YXJpb3MgJiZcclxuICAgICAgICAgIHVzdWFyaW9zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fSByb3VuZGVkPVwiZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmF2YXRhcl91cmx9ICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIHtwcm9qZXRvcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICAgIHNoYWRvdz1cIm1kXCJcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD17W1wiMTAwJVwiLCBcIjQzMHB4XCJdfVxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgICAgICAgIGJnPVwiZ3JheS42MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8ubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8uYmxvZ308L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3BlcmZpc1swXT8ubG9jYXRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cGVyZmlzWzBdPy5iaW99PC9UZXh0PlxyXG5cclxuICAgICAgICAgICAge3BlcmZpc1swXT8ubmFtZSA/IENyZWF0ZVBlcmZpcyhwZXJmaXNbMF0pIDogXCJcIn1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSlcIlxyXG4gICAgICAgICAgICBnYXA9e1tcIjEwcHhcIiwgXCI1MHB4XCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvamV0b3MubWFwKChwcm9qZXRvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICAgICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGJnPVwiZ3JheS43MDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZC41MDBcIlxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlclByb2pldG8oaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwibWRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+e3Byb2pldG8/Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvamV0bz8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICA/IHByb2pldG8/LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIk7Do28gaMOhIGRlc2NyacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiZmxleC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidmlld1wiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZS41MDBcIlxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocHJvamV0bz8uaHRtbF91cmwsIFwiX2JsYW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zXHJcbiAgLmNyZWF0ZVxyXG4gIC8vYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBJLFxyXG4gICgpO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIC8vY29uc3QgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNyZWRlbnRpYWxzXCIpO1xyXG4gICAgLy9jb25maWcuaGVhZGVycy50b2tlbiA9IGNyZWRlbnRpYWxzID8gSlNPTi5wYXJzZShjcmVkZW50aWFscykudG9rZW4gOiBudWxsO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9LFxyXG4gIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcbik7XHJcblxyXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vaWYgKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzID09PSA0MDMpIHtcclxuICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAvL3JldHVybjtcclxuICAgIC8vfVxyXG4gICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=