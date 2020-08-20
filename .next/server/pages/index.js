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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
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
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 85,
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
      lineNumber: 94,
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
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.name)), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://img.icons8.com/color/20/000000/whatsapp.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }), "(63)98145-2573"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.blog), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.location), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: (_perfis$6 = perfis[0]) === null || _perfis$6 === void 0 ? void 0 : _perfis$6.html_url,
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 19
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }))), __jsx("a", {
    href: "https://gitlab.com/m4t3us",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("svg", {
    height: "32",
    className: "tanuki-logo",
    viewBox: "0 0 36 36",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx("path", {
    className: "tanuki-shape tanuki-left-ear",
    fill: "#e24329",
    d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-ear",
    fill: "#e24329",
    d: "M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-nose",
    fill: "#e24329",
    d: "M18,34.38 3,14 33,14 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-left-eye",
    fill: "#fc6d26",
    d: "M18,34.38 11.38,14 2,14 6,25Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-eye",
    fill: "#fc6d26",
    d: "M18,34.38 24.62,14 34,14 30,25Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-left-cheek",
    fill: "#fca326",
    d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-cheek",
    fill: "#fca326",
    d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }))), __jsx("a", {
    href: "https://www.linkedin.com/in/allisson-mateus-06a957137",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://img.icons8.com/color/38/000000/linkedin.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 19
    }
  })), __jsx("a", {
    href: "",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://img.icons8.com/fluent/38/000000/twitter.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }))))), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, projetos.map((projeto, index) => __jsx("div", {
    key: index,
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 195,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 199,
      columnNumber: 19
    }
  }, projeto.description ? projeto.description : "Não há descrição"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
      lineNumber: 205,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-folder-open-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
      lineNumber: 219,
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
      lineNumber: 233,
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
      lineNumber: 247,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"nav": "Home_nav__1c1C3",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"logo": "Home_logo__1YbrH",
	"cards": "Home_cards__-RuYP",
	"homeContainer": "Home_homeContainer__3CSVg",
	"menu": "Home_menu__3wuDZ"
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiYmFzZVVybEdpdExhYiIsInByb2Nlc3MiLCJiYXNlVXJsR2l0SHViIiwidGFtYW5ob0ljb25lIiwiaWNvbmVzTGluZ3VhZ2VtIiwiUHl0aG9uIiwiSmF2YVNjcmlwdCIsIlR5cGVTY3JpcHQiLCJWdWUiLCJIVE1MIiwiQ1NTIiwiSG9tZSIsInByb2pldG9zIiwic2V0UHJvamV0byIsInVzZVN0YXRlIiwicGVyZmlzIiwic2V0UGVyZmlsIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlRWZmZWN0IiwibGlzdGFyVXN1YXJpb3MiLCJkYXRhIiwidXN1YXJpb0dpdEh1YiIsImFwaSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ1c3VhcmlvR2l0TGFiIiwidG9kb3NQZXJmaXMiLCJFcnIiLCJsaXN0YXJSZXBvc2l0b3Jpb3MiLCJyZXBHaXRIdWIiLCJyZXBHaXRMYWIiLCJ0b2Rvc1Byb2pldG9zIiwiY29uY2F0IiwicmVtb3ZlclByb2pldG8iLCJpbmRleCIsImFyciIsInNwbGljZSIsInN0eWxlcyIsImhvbWVDb250YWluZXIiLCJsZW5ndGgiLCJtYXhXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwiZGlzcGxheSIsImF2YXRhcl91cmwiLCJ0ZXh0QWxpZ24iLCJuYW1lIiwiYmxvZyIsImxvY2F0aW9uIiwiYmlvIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwiaHRtbF91cmwiLCJjYXJkcyIsIm1hcCIsInByb2pldG8iLCJtYXJnaW5Ub3AiLCJkZXNjcmlwdGlvbiIsImh0dHBfdXJsX3RvX3JlcG8iLCJwb3NpdGlvbiIsImJvdHRvbSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwicGFkZGluZyIsImN1cnNvciIsImNvbG9yIiwibGVmdCIsInBhZGRpbmdMZWZ0IiwiX19odG1sIiwibGFuZ3VhZ2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLDRCQUF0QjtBQUNBLE1BQU1DLGFB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VUgsS0FBVixFQUFpQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUYsa0RBQVMsQ0FBQ00sSUFBVjtBQUNBLFNBQU9ILE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxDQWJIO0FBZWU1RCxrRUFBZixFOzs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBiYXNlVXJsR2l0TGFiID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxfR0lUTEFCO1xyXG5jb25zdCBiYXNlVXJsR2l0SHViID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxfR0lUSFVCO1xyXG5jb25zdCB0YW1hbmhvSWNvbmUgPSAyMjtcclxuY29uc3QgaWNvbmVzTGluZ3VhZ2VtID0ge1xyXG4gIFB5dGhvbjogYDxpbWcgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZHVzay8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL3B5dGhvbi5wbmdcIi8+YCxcclxuICBKYXZhU2NyaXB0OiBgPGltZyAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvamF2YXNjcmlwdC5wbmdcIi8+YCxcclxuICBUeXBlU2NyaXB0OiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLyR7dGFtYW5ob0ljb25lfS8wMDAwMDAvdHlwZXNjcmlwdC5wbmdcIi8+YCxcclxuICBWdWU6IGA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvJHt0YW1hbmhvSWNvbmV9LzAwMDAwMC92dWUtanMucG5nXCIvPmAsXHJcbiAgSFRNTDogYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2h0bWwucG5nXCIvPmAsXHJcbiAgQ1NTOiBgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8ke3RhbWFuaG9JY29uZX0vMDAwMDAwL2Nzcy5wbmdcIi8+YCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Byb2pldG9zLCBzZXRQcm9qZXRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGVyZmlzLCBzZXRQZXJmaWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaXN0YXJVc3VhcmlvcygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVzdWFyaW9HaXRIdWIgfSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsR2l0SHVifXVzZXJzL200dDN1czg5YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXN1YXJpb0dpdEh1YlwiLCB1c3VhcmlvR2l0SHViKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0TGFiIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdExhYn11c2Vycy8yOTE5MjkxYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXN1YXJpb0dpdExhYlwiLCB1c3VhcmlvR2l0TGFiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb3NQZXJmaXMgPSBbdXN1YXJpb0dpdEh1YiwgdXN1YXJpb0dpdExhYl07XHJcblxyXG4gICAgICAgIHNldFBlcmZpbCh0b2Rvc1BlcmZpcyk7XHJcbiAgICAgIH0gY2F0Y2ggKEVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaXN0YXJSZXBvc2l0b3Jpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiByZXBHaXRIdWIgfSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsR2l0SHVifXVzZXJzL200dDN1czg5L3JlcG9zYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwR2l0SHViXCIsIHJlcEdpdEh1Yik7XHJcblxyXG4gICAgICAgIHNldFByb2pldG8ocmVwR2l0SHViKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiByZXBHaXRMYWIgfSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsR2l0TGFifXVzZXJzLzI5MTkyOTEvcHJvamVjdHNgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXBHaXRMYWJcIiwgcmVwR2l0TGFiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb3NQcm9qZXRvcyA9IHJlcEdpdEh1Yi5jb25jYXQocmVwR2l0TGFiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUb2RvcyBvcyBQcm9qZXRvc1wiLCB0b2Rvc1Byb2pldG9zKTtcclxuXHJcbiAgICAgICAgc2V0UHJvamV0byh0b2Rvc1Byb2pldG9zKTtcclxuICAgICAgfSBjYXRjaCAoRXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgRXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3RhclJlcG9zaXRvcmlvcygpO1xyXG4gICAgbGlzdGFyVXN1YXJpb3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZXJQcm9qZXRvKGluZGV4KSB7XHJcbiAgICBjb25zdCBhcnIgPSBbLi4ucHJvamV0b3NdO1xyXG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRQcm9qZXRvKGFycik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGFpbmVyfT5cclxuICAgICAge3BlcmZpcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjMxMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjYwMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17bG9hZGVkID8ge30gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICAgICAgICBzcmM9e3BlcmZpc1sxXT8uYXZhdGFyX3VybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMzAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBzZXRMb2FkZWQodHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8Yj57cGVyZmlzWzBdPy5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8yMC8wMDAwMDAvd2hhdHNhcHAucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICg2Myk5ODE0NS0yNTczXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8aDY+e3BlcmZpc1swXT8uYmxvZ308L2g2PlxyXG4gICAgICAgICAgICAgIDxoNj57cGVyZmlzWzBdPy5sb2NhdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwZXJmaXNbMF0/LmJpb308L3A+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgZ2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cGVyZmlzWzBdPy5odG1sX3VybH0gdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1tYXJrLWdpdGh1YiB2LWFsaWduLW1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwMDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRsYWIuY29tL200dDN1c1wiIHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMzJcIiBjbGFzc05hbWU9XCJ0YW51a2ktbG9nb1wiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2UyNDMyOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIgMTRsOS4zOCA5di05bC00LTEyLjI4Yy0uMjA1LS42MzItMS4xNzYtLjYzMi0xLjM4IDB6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLXJpZ2h0LWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2UyNDMyOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM0IDE0bC05LjM4IDl2LTlsNC0xMi4yOGMuMjA1LS42MzIgMS4xNzYtLjYzMiAxLjM4IDB6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLW5vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlMjQzMjlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOCwzNC4zOCAzLDE0IDMzLDE0IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbGVmdC1leWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmYzZkMjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOCwzNC4zOCAxMS4zOCwxNCAyLDE0IDYsMjVaXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLXJpZ2h0LWV5ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZjNmQyNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDI0LjYyLDE0IDM0LDE0IDMwLDI1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWNoZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmNhMzI2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMiAxNEwuMSAyMC4xNmMtLjE4LjU2NSAwIDEuMi41IDEuNTZsMTcuNDIgMTIuNjZ6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLXJpZ2h0LWNoZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmNhMzI2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzQgMTRsMS45IDYuMTZjLjE4LjU2NSAwIDEuMi0uNSAxLjU2TDE4IDM0LjM4elwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGxpc3Nvbi1tYXRldXMtMDZhOTU3MTM3XCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMzgvMDAwMDAwL2xpbmtlZGluLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbnQvMzgvMDAwMDAwL3R3aXR0ZXIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cclxuICAgICAgICAgICAge3Byb2pldG9zLm1hcCgocHJvamV0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPntwcm9qZXRvPy5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2pldG8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgID8gcHJvamV0by5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIk7Do28gaMOhIGRlc2NyacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamV0bz8uaHRtbF91cmwgfHwgcHJvamV0bz8uaHR0cF91cmxfdG9fcmVwb31cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm8gYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggMHB4IDEwcHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZvbGRlci1vcGVuLW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZXJQcm9qZXRvKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRENEQ0RDXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBpY29uZXNMaW5ndWFnZW1bcHJvamV0bz8ubGFuZ3VhZ2VdLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+UFJPSkVUT1M6IHtwcm9qZXRvcy5sZW5ndGh9PC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvc1xyXG4gIC5jcmVhdGVcclxuICAvL2Jhc2VVUkw6IHByb2Nlc3MuZW52LkFQSSxcclxuICAoKTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvL2NvbnN0IGNyZWRlbnRpYWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjcmVkZW50aWFsc1wiKTtcclxuICAgIC8vY29uZmlnLmhlYWRlcnMudG9rZW4gPSBjcmVkZW50aWFscyA/IEpTT04ucGFyc2UoY3JlZGVudGlhbHMpLnRva2VuIDogbnVsbDtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvL2lmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgLy9yZXR1cm47XHJcbiAgICAvL31cclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJuYXZcIjogXCJIb21lX25hdl9fMWMxQzNcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCIsXG5cdFwiY2FyZHNcIjogXCJIb21lX2NhcmRzX18tUnVZUFwiLFxuXHRcImhvbWVDb250YWluZXJcIjogXCJIb21lX2hvbWVDb250YWluZXJfXzNDU1ZnXCIsXG5cdFwibWVudVwiOiBcIkhvbWVfbWVudV9fM3d1RFpcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9