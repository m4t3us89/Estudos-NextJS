import axios from "axios";
import NProgress from "nprogress";

const api = axios.create(
  //baseURL: process.env.API,
);

api.interceptors.request.use(
  function (config) {
    NProgress.start();
    //const credentials = localStorage.getItem("credentials");
    //config.headers.token = credentials ? JSON.parse(credentials).token : null;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = "/";
      return;
    }
    return Promise.reject(error);
  }
);
export default api;
