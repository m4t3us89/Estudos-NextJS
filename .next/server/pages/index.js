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
  }, !error && usuarios ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    width: ['100%', '100px'],
    variantColor: "teal",
    size: "sm",
    onClick: () => setSince(since + 45),
    isDisabled: !usuarios && !error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }, !usuarios && !error ? "Aguarde..." : "Usuarios") : null, !error && usuarios && usuarios.map((item, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    key: index,
    rounded: "full",
    width: ['100%', '100px'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: item.avatar_url,
    style: {
      cursor: 'pointer'
    },
    onClick: () => window.open(item.html_url, '_blank'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
      lineNumber: 245,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "xl",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, (_perfis$ = perfis[0]) === null || _perfis$ === void 0 ? void 0 : _perfis$.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.blog), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.location)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }
  }, (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.bio), ((_perfis$5 = perfis[0]) === null || _perfis$5 === void 0 ? void 0 : _perfis$5.name) ? CreatePerfis(perfis[0]) : ""), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: ["10px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
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
      lineNumber: 269,
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
      lineNumber: 280,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "md",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 19
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
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
      lineNumber: 297,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbImJhc2VVcmxHaXRMYWIiLCJwcm9jZXNzIiwiYmFzZVVybEdpdEh1YiIsInRhbWFuaG9JY29uZSIsImljb25lc0xpbmd1YWdlbSIsIlB5dGhvbiIsIkphdmFTY3JpcHQiLCJUeXBlU2NyaXB0IiwiVnVlIiwiSFRNTCIsIkNTUyIsImZldGNoZXIiLCJ1cmwiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIkhvbWUiLCJzaW5jZSIsInNldFNpbmNlIiwidXNlU3RhdGUiLCJ1c3VhcmlvcyIsImVycm9yIiwidXNlU1dSIiwiZXJyb3JSZXRyeUludGVydmFsIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwic2hvd1RvYXN0IiwibWVzc2FnZSIsInByb2pldG9zIiwic2V0UHJvamV0byIsInBlcmZpcyIsInNldFBlcmZpbCIsImxvYWRlZCIsInNldExvYWRlZCIsInRvYXN0IiwidXNlVG9hc3QiLCJsaXN0YXJVc3VhcmlvcyIsInVzdWFyaW9HaXRIdWIiLCJ1c3VhcmlvR2l0TGFiIiwidG9kb3NQZXJmaXMiLCJFcnIiLCJzdGF0dXMiLCJsaXN0YXJSZXBvc2l0b3Jpb3MiLCJyZXBHaXRIdWIiLCJyZXBHaXRMYWIiLCJ0b2Rvc1Byb2pldG9zIiwiY29uY2F0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwicmVtb3ZlclByb2pldG8iLCJpbmRleCIsImFyciIsInNwbGljZSIsIkNyZWF0ZVBlcmZpcyIsImh0bWxfdXJsIiwibWFwIiwiaXRlbSIsImF2YXRhcl91cmwiLCJjdXJzb3IiLCJ3aW5kb3ciLCJvcGVuIiwibGVuZ3RoIiwibmFtZSIsImJsb2ciLCJsb2NhdGlvbiIsImJpbyIsInByb2pldG8iLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIlByb21pc2UiLCJyZWplY3QiLCJkb25lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBR0E7QUFXQSxNQUFNQSxhQUFhLEdBQUdDLDRCQUF0QjtBQUNBLE1BQU1DLGFBQWEs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUwsR0FBRyxHQUFHNkQsNENBQUssQ0FDZEMsTUFEUyxDQUVWO0FBRlUsRUFBWjtBQUtBOUQsR0FBRyxDQUFDK0QsWUFBSixDQUFpQkMsT0FBakIsQ0FBeUJDLEdBQXpCLENBQ0UsVUFBVUMsTUFBVixFQUFrQjtBQUNoQkMsa0RBQVMsQ0FBQ0MsS0FBVixHQURnQixDQUVoQjtBQUNBOztBQUNBLFNBQU9GLE1BQVA7QUFDRCxDQU5ILEVBT0UsVUFBVXhELEtBQVYsRUFBaUI7QUFDZixTQUFPMkQsT0FBTyxDQUFDQyxNQUFSLENBQWU1RCxLQUFmLENBQVA7QUFDRCxDQVRIO0FBWUFWLEdBQUcsQ0FBQytELFlBQUosQ0FBaUIvQyxRQUFqQixDQUEwQmlELEdBQTFCLENBQ0UsVUFBVWpELFFBQVYsRUFBb0I7QUFDbEJtRCxrREFBUyxDQUFDSSxJQUFWO0FBQ0EsU0FBT3ZELFFBQVA7QUFDRCxDQUpILEVBS0UsVUFBVU4sS0FBVixFQUFpQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXlELGtEQUFTLENBQUNJLElBQVY7QUFDQSxTQUFPRixPQUFPLENBQUNDLE1BQVIsQ0FBZTVELEtBQWYsQ0FBUDtBQUNELENBYkg7QUFlZVYsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQ0EsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgRmxleCxcclxuICBUZXh0LFxyXG4gIEJveCxcclxuICBIZWFkaW5nLFxyXG4gIEdyaWQsXHJcbiAgdXNlVG9hc3QsXHJcbiAgSWNvbixcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgYmFzZVVybEdpdExhYiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVExBQjtcclxuY29uc3QgYmFzZVVybEdpdEh1YiA9IHByb2Nlc3MuZW52LkJBU0VfVVJMX0dJVEhVQjtcclxuY29uc3QgdGFtYW5ob0ljb25lID0gMjI7XHJcbmNvbnN0IGljb25lc0xpbmd1YWdlbSA9IHtcclxuICBQeXRob246IGA8aW1nICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2R1c2svJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9weXRob24ucG5nXCIvPmAsXHJcbiAgSmF2YVNjcmlwdDogYDxpbWcgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2phdmFzY3JpcHQucG5nXCIvPmAsXHJcbiAgVHlwZVNjcmlwdDogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL3R5cGVzY3JpcHQucG5nXCIvPmAsXHJcbiAgVnVlOiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvdnVlLWpzLnBuZ1wiLz5gLFxyXG4gIEhUTUw6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9odG1sLnBuZ1wiLz5gLFxyXG4gIENTUzogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC9jc3MucG5nXCIvPmAsXHJcbn07XHJcblxyXG4vL2NvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gYXBpLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG5cclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2hlcihgJHtiYXNlVXJsR2l0SHVifXVzZXJzYCk7XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IHBvc3RzIH0gfTtcclxufSovXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIC8vY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL3Bvc3RzXCIsIGZldGNoZXIsIHsgaW5pdGlhbERhdGE6IHByb3BzLnBvc3RzIH0pO1xyXG4gIGNvbnN0IFtzaW5jZSwgc2V0U2luY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBkYXRhOiB1c3VhcmlvcywgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGAke2Jhc2VVcmxHaXRIdWJ9dXNlcnM/c2luY2U9JHtzaW5jZX1gLFxyXG4gICAgZmV0Y2hlcixcclxuICAgIHtlcnJvclJldHJ5SW50ZXJ2YWwgOiA2MDAwMH1cclxuICApO1xyXG5cclxuIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzdWFyaW9zKSBjb25zb2xlLmxvZyhcInN3ciBTVUNFU1NPXCIsIHVzdWFyaW9zID8gdXN1YXJpb3MgOiBlcnJvcik7XHJcbiAgICBcclxuICAgIGlmKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coXCJzd3IgRVJST1JcIiwgZXJyb3I/LnJlc3BvbnNlKVxyXG4gICAgICBzaG93VG9hc3QoXHJcbiAgICAgICAgXCJGYWxoYSBuYSBjb211bmljYcOnw6NvIGNvbSBvIEdJVEhVQlwiLFxyXG4gICAgICAgIGVycm9yPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSxcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbdXN1YXJpb3MsIGVycm9yXSk7XHJcblxyXG5cclxuICBjb25zdCBbcHJvamV0b3MsIHNldFByb2pldG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwZXJmaXMsIHNldFBlcmZpbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaXN0YXJVc3VhcmlvcygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVzdWFyaW9HaXRIdWIgfSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsR2l0SHVifXVzZXJzL200dDN1czg5YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXN1YXJpb0dpdEh1YlwiLCB1c3VhcmlvR2l0SHViKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0TGFiIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdExhYn11c2Vycy8yOTE5MjkxYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXN1YXJpb0dpdExhYlwiLCB1c3VhcmlvR2l0TGFiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb3NQZXJmaXMgPSBbdXN1YXJpb0dpdEh1YiwgdXN1YXJpb0dpdExhYl07XHJcblxyXG4gICAgICAgIHNldFBlcmZpbCh0b2Rvc1BlcmZpcyk7XHJcbiAgICAgIH0gY2F0Y2ggKEVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEVycj8ucmVzcG9uc2U/LnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaXN0YXJSZXBvc2l0b3Jpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiByZXBHaXRIdWIgfSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsR2l0SHVifXVzZXJzL200dDN1czg5L3JlcG9zYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwR2l0SHViXCIsIHJlcEdpdEh1Yik7XHJcblxyXG4gICAgICAgIHNldFByb2pldG8ocmVwR2l0SHViKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiByZXBHaXRMYWIgfSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsR2l0TGFifXVzZXJzLzI5MTkyOTEvcHJvamVjdHNgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXBHaXRMYWJcIiwgcmVwR2l0TGFiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb3NQcm9qZXRvcyA9IHJlcEdpdEh1Yi5jb25jYXQocmVwR2l0TGFiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUb2RvcyBvcyBQcm9qZXRvc1wiLCB0b2Rvc1Byb2pldG9zKTtcclxuXHJcbiAgICAgICAgc2V0UHJvamV0byh0b2Rvc1Byb2pldG9zKTtcclxuICAgICAgfSBjYXRjaCAoRXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJSZXBvc2l0b3Jpb3NcIiwgRXJyPy5yZXNwb25zZT8uc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGxpc3RhclJlcG9zaXRvcmlvcygpXHJcbiAgICBsaXN0YXJVc3VhcmlvcygpXHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93VG9hc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHBvc2l0aW9uID0gXCJ0b3AtcmlnaHRcIikge1xyXG4gICAgdG9hc3Qoe1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIGR1cmF0aW9uOiA5MDAwLFxyXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVyUHJvamV0byhpbmRleCkge1xyXG4gICAgY29uc3QgYXJyID0gWy4uLnByb2pldG9zXTtcclxuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0UHJvamV0byhhcnIpO1xyXG4gICAgc2hvd1RvYXN0KFxyXG4gICAgICBcIlByb2pldG8gcmVtb3ZpZG9cIixcclxuICAgICAgXCJTZXUgcHJvamV0byBmb2kgcmVtb3ZpZG8gY29tIHN1Y2Vzc28uXCIsXHJcbiAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ3JlYXRlUGVyZmlzKHRpdGxlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBncmlkR2FwPVwiMzBweFwiIG10PXsxMH0+XHJcbiAgICAgICAgPGEgaHJlZj17dGl0bGU/Lmh0bWxfdXJsfSB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWIgdi1hbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMDAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGxhYi5jb20vbTR0M3VzXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMzJcIiBjbGFzc05hbWU9XCJ0YW51a2ktbG9nb1wiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtZWFyXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2UyNDMyOVwiXHJcbiAgICAgICAgICAgICAgZD1cIk0yIDE0bDkuMzggOXYtOWwtNC0xMi4yOGMtLjIwNS0uNjMyLTEuMTc2LS42MzItMS4zOCAwelwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1lYXJcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTM0IDE0bC05LjM4IDl2LTlsNC0xMi4yOGMuMjA1LS42MzIgMS4xNzYtLjYzMiAxLjM4IDB6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLW5vc2VcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDMsMTQgMzMsMTQgWlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWV5ZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmYzZkMjZcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMTEuMzgsMTQgMiwxNCA2LDI1WlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1yaWdodC1leWVcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmM2ZDI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDI0LjYyLDE0IDM0LDE0IDMwLDI1WlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWNoZWVrXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI2ZjYTMyNlwiXHJcbiAgICAgICAgICAgICAgZD1cIk0yIDE0TC4xIDIwLjE2Yy0uMTguNTY1IDAgMS4yLjUgMS41NmwxNy40MiAxMi42NnpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktcmlnaHQtY2hlZWtcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmNhMzI2XCJcclxuICAgICAgICAgICAgICBkPVwiTTM0IDE0bDEuOSA2LjE2Yy4xOC41NjUgMCAxLjItLjUgMS41NkwxOCAzNC4zOHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGxpc3Nvbi1tYXRldXMtMDZhOTU3MTM3XCJcclxuICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzgvMDAwMDAwL2xpbmtlZGluLnBuZ1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbnQvMzgvMDAwMDAwL3R3aXR0ZXIucG5nXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBncmlkR2FwPXtbXCIxMHB4XCIsIFwiNTBweFwiXX1cclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgXCJyb3dcIl19XHJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICA+XHJcbiAgICAgIDxCb3ggZD1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ3JpZEdhcD17NH0gPlxyXG4gICAgICAgIHshZXJyb3IgJiYgdXN1YXJpb3MgID8gKDxCdXR0b24gd2lkdGg9e1snMTAwJScsJzEwMHB4J119XHJcbiAgICAgICAgICB2YXJpYW50Q29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbmNlKHNpbmNlICsgNDUpfVxyXG4gICAgICAgICAgaXNEaXNhYmxlZD17IXVzdWFyaW9zICYmICFlcnJvcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IXVzdWFyaW9zICYmICFlcnJvciA/IFwiQWd1YXJkZS4uLlwiIDogXCJVc3Vhcmlvc1wiIH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgeyAhZXJyb3IgJiYgdXN1YXJpb3MgJiZcclxuICAgICAgICAgIHVzdWFyaW9zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fSByb3VuZGVkPVwiZnVsbFwiIHdpZHRoPXtbJzEwMCUnLCcxMDBweCddfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5hdmF0YXJfdXJsfSAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gb25DbGljaz17KCk9PndpbmRvdy5vcGVuKGl0ZW0uaHRtbF91cmwgLCAnX2JsYW5rJyl9IC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICB7cHJvamV0b3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBwPXs0fVxyXG4gICAgICAgICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcclxuICAgICAgICAgICAgd2lkdGg9e1tcIjEwMCVcIiwgXCI0MzBweFwiXX1cclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgICAgICBiZz1cImdyYXkuNjAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxUZXh0PntwZXJmaXNbMF0/Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0PntwZXJmaXNbMF0/LmJsb2d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0PntwZXJmaXNbMF0/LmxvY2F0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dCBtdD17NH0+e3BlcmZpc1swXT8uYmlvfTwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtwZXJmaXNbMF0/Lm5hbWUgPyBDcmVhdGVQZXJmaXMocGVyZmlzWzBdKSA6IFwiXCJ9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpXCJcclxuICAgICAgICAgICAgZ2FwPXtbXCIxMHB4XCIsIFwiNTBweFwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb2pldG9zLm1hcCgocHJvamV0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBwPXs0fVxyXG4gICAgICAgICAgICAgICAgc2hhZG93PVwibWRcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cImxnXCJcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBiZz1cImdyYXkuNzAwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICBhbGlnblNlbGY9XCJmbGV4LWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWQuNTAwXCJcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZXJQcm9qZXRvKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIm1kXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0Pntwcm9qZXRvPy5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IG10PXs0fT5cclxuICAgICAgICAgICAgICAgICAge3Byb2pldG8/LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwcm9qZXRvPy5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJOw6NvIGjDoSBkZXNjcmnDp8Ojb1wifVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwiMThweFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGUuNTAwXCJcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHByb2pldG8/Lmh0bWxfdXJsLCBcIl9ibGFua1wiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvc1xyXG4gIC5jcmVhdGVcclxuICAvL2Jhc2VVUkw6IHByb2Nlc3MuZW52LkFQSSxcclxuICAoKTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvL2NvbnN0IGNyZWRlbnRpYWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjcmVkZW50aWFsc1wiKTtcclxuICAgIC8vY29uZmlnLmhlYWRlcnMudG9rZW4gPSBjcmVkZW50aWFscyA/IEpTT04ucGFyc2UoY3JlZGVudGlhbHMpLnRva2VuIDogbnVsbDtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvL2lmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgLy9yZXR1cm47XHJcbiAgICAvL31cclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9