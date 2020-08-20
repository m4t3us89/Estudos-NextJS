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

function Home() {
  var _perfis$, _perfis$2, _perfis$3, _perfis$4;

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
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, perfis.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "card",
    style: {
      maxWidth: "310px",
      width: "100%",
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 74,
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
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, (_perfis$2 = perfis[0]) === null || _perfis$2 === void 0 ? void 0 : _perfis$2.name), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, (_perfis$3 = perfis[0]) === null || _perfis$3 === void 0 ? void 0 : _perfis$3.bio), __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: (_perfis$4 = perfis[0]) === null || _perfis$4 === void 0 ? void 0 : _perfis$4.html_url,
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
      columnNumber: 19
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }))), __jsx("a", {
    href: "https://gitlab.com/m4t3us",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("svg", {
    height: "32",
    className: "tanuki-logo",
    viewBox: "0 0 36 36",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, __jsx("path", {
    className: "tanuki-shape tanuki-left-ear",
    fill: "#e24329",
    d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-ear",
    fill: "#e24329",
    d: "M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-nose",
    fill: "#e24329",
    d: "M18,34.38 3,14 33,14 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-left-eye",
    fill: "#fc6d26",
    d: "M18,34.38 11.38,14 2,14 6,25Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-eye",
    fill: "#fc6d26",
    d: "M18,34.38 24.62,14 34,14 30,25Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-left-cheek",
    fill: "#fca326",
    d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }), __jsx("path", {
    className: "tanuki-shape tanuki-right-cheek",
    fill: "#fca326",
    d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  })))))), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, projetos.map((projeto, index) => __jsx("div", {
    key: index,
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.name, " "), __jsx("small", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, projeto === null || projeto === void 0 ? void 0 : projeto.language), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, projeto.description ? projeto.description : "Não há descrição"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }
  }), __jsx("a", {
    href: (projeto === null || projeto === void 0 ? void 0 : projeto.html_url) || (projeto === null || projeto === void 0 ? void 0 : projeto.http_url_to_repo),
    target: "blank",
    className: "btn btn-secondary btn-sm",
    style: {
      width: "85%",
      position: "absolute",
      bottom: 0,
      margin: "20px 0px 10px 0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }, "Ver Projeto"))))), __jsx("div", {
    style: {
      position: "fixed",
      right: "0",
      bottom: "0",
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, " ", __jsx("small", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiYmFzZVVybEdpdExhYiIsInByb2Nlc3MiLCJiYXNlVXJsR2l0SHViIiwiSG9tZSIsInByb2pldG9zIiwic2V0UHJvamV0byIsInVzZVN0YXRlIiwicGVyZmlzIiwic2V0UGVyZmlsIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlRWZmZWN0IiwibGlzdGFyVXN1YXJpb3MiLCJkYXRhIiwidXN1YXJpb0dpdEh1YiIsImFwaSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ1c3VhcmlvR2l0TGFiIiwidG9kb3NQZXJmaXMiLCJFcnIiLCJsaXN0YXJSZXBvc2l0b3Jpb3MiLCJyZXBHaXRIdWIiLCJyZXBHaXRMYWIiLCJ0b2Rvc1Byb2pldG9zIiwiY29uY2F0Iiwic3R5bGVzIiwiaG9tZUNvbnRhaW5lciIsImxlbmd0aCIsIm1heFdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYXZhdGFyX3VybCIsInRleHRBbGlnbiIsIm5hbWUiLCJiaW8iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJodG1sX3VybCIsImNhcmRzIiwibWFwIiwicHJvamV0byIsImluZGV4IiwibGFuZ3VhZ2UiLCJkZXNjcmlwdGlvbiIsImh0dHBfdXJsX3RvX3JlcG8iLCJwb3NpdGlvbiIsImJvdHRvbSIsIm1hcmdpbiIsInJpZ2h0IiwicGFkZGluZyIsImF4aW9zIiwiY3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJkb25lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0MsNEJBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCx5QkFBdEI7O0FBRUEsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUNkLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUF5QkMsc0RBQVEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csTUFBRDtB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LENBYkg7QUFlZS9DLGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGJhc2VVcmxHaXRMYWIgPSBwcm9jZXNzLmVudi5CQVNFX1VSTF9HSVRMQUI7XHJcbmNvbnN0IGJhc2VVcmxHaXRIdWIgPSBwcm9jZXNzLmVudi5CQVNFX1VSTF9HSVRIVUI7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwcm9qZXRvcywgc2V0UHJvamV0b10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BlcmZpcywgc2V0UGVyZmlsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyVXN1YXJpb3MoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c3VhcmlvR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRIdWJcIiwgdXN1YXJpb0dpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXN1YXJpb0dpdExhYiB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAke2Jhc2VVcmxHaXRMYWJ9dXNlcnMvMjkxOTI5MWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzdWFyaW9HaXRMYWJcIiwgdXN1YXJpb0dpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUGVyZmlzID0gW3VzdWFyaW9HaXRIdWIsIHVzdWFyaW9HaXRMYWJdO1xyXG5cclxuICAgICAgICBzZXRQZXJmaWwodG9kb3NQZXJmaXMpO1xyXG4gICAgICB9IGNhdGNoIChFcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBFcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGFyUmVwb3NpdG9yaW9zKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0SHViIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdEh1Yn11c2Vycy9tNHQzdXM4OS9yZXBvc2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcEdpdEh1YlwiLCByZXBHaXRIdWIpO1xyXG5cclxuICAgICAgICBzZXRQcm9qZXRvKHJlcEdpdEh1Yik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogcmVwR2l0TGFiIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybEdpdExhYn11c2Vycy8yOTE5MjkxL3Byb2plY3RzYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVwR2l0TGFiXCIsIHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9zUHJvamV0b3MgPSByZXBHaXRIdWIuY29uY2F0KHJlcEdpdExhYik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9kb3Mgb3MgUHJvamV0b3NcIiwgdG9kb3NQcm9qZXRvcyk7XHJcblxyXG4gICAgICAgIHNldFByb2pldG8odG9kb3NQcm9qZXRvcyk7XHJcbiAgICAgIH0gY2F0Y2ggKEVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0YXJSZXBvc2l0b3Jpb3MoKTtcclxuICAgIGxpc3RhclVzdWFyaW9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGFpbmVyfT5cclxuICAgICAge3BlcmZpcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMTBweFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXtsb2FkZWQgPyB7fSA6IHsgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgIHNyYz17cGVyZmlzWzFdPy5hdmF0YXJfdXJsfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzMDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldExvYWRlZCh0cnVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cGVyZmlzWzBdPy5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3BlcmZpc1swXT8uYmlvfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBnYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwZXJmaXNbMF0/Lmh0bWxfdXJsfSB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLW1hcmstZ2l0aHViIHYtYWxpZ24tbWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAwMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGxhYi5jb20vbTR0M3VzXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIzMlwiIGNsYXNzTmFtZT1cInRhbnVraS1sb2dvXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMiAxNGw5LjM4IDl2LTlsLTQtMTIuMjhjLS4yMDUtLjYzMi0xLjE3Ni0uNjMyLTEuMzggMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktcmlnaHQtZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTI0MzI5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzQgMTRsLTkuMzggOXYtOWw0LTEyLjI4Yy4yMDUtLjYzMiAxLjE3Ni0uNjMyIDEuMzggMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktbm9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2UyNDMyOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDMsMTQgMzMsMTQgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFudWtpLXNoYXBlIHRhbnVraS1sZWZ0LWV5ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZjNmQyNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE4LDM0LjM4IDExLjM4LDE0IDIsMTQgNiwyNVpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktcmlnaHQtZXllXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmM2ZDI2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTgsMzQuMzggMjQuNjIsMTQgMzQsMTQgMzAsMjVaXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YW51a2ktc2hhcGUgdGFudWtpLWxlZnQtY2hlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmY2EzMjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yIDE0TC4xIDIwLjE2Yy0uMTguNTY1IDAgMS4yLjUgMS41NmwxNy40MiAxMi42NnpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhbnVraS1zaGFwZSB0YW51a2ktcmlnaHQtY2hlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmY2EzMjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0zNCAxNGwxLjkgNi4xNmMuMTguNTY1IDAgMS4yLS41IDEuNTZMMTggMzQuMzh6XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cclxuICAgICAgICAgICAge3Byb2pldG9zLm1hcCgocHJvamV0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2pldG8/Lm5hbWV9IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3Byb2pldG8/Lmxhbmd1YWdlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZXRvLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHByb2pldG8uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJOw6NvIGjDoSBkZXNjcmnDp8Ojb1wifVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2pldG8/Lmh0bWxfdXJsIHx8IHByb2pldG8/Lmh0dHBfdXJsX3RvX3JlcG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjg1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBweCAxMHB4IDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWZXIgUHJvamV0b1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+UFJPSkVUT1M6IHtwcm9qZXRvcy5sZW5ndGh9PC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvc1xyXG4gIC5jcmVhdGVcclxuICAvL2Jhc2VVUkw6IHByb2Nlc3MuZW52LkFQSSxcclxuICAoKTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvL2NvbnN0IGNyZWRlbnRpYWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjcmVkZW50aWFsc1wiKTtcclxuICAgIC8vY29uZmlnLmhlYWRlcnMudG9rZW4gPSBjcmVkZW50aWFscyA/IEpTT04ucGFyc2UoY3JlZGVudGlhbHMpLnRva2VuIDogbnVsbDtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvL2lmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgLy9yZXR1cm47XHJcbiAgICAvL31cclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJuYXZcIjogXCJIb21lX25hdl9fMWMxQzNcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCIsXG5cdFwiY2FyZHNcIjogXCJIb21lX2NhcmRzX18tUnVZUFwiLFxuXHRcImhvbWVDb250YWluZXJcIjogXCJIb21lX2hvbWVDb250YWluZXJfXzNDU1ZnXCIsXG5cdFwibWVudVwiOiBcIkhvbWVfbWVudV9fM3d1RFpcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9