import axios from "axios";
import store from "../store.js";

var host = window.location.host;
// axios.defaults.baseURL = "https://recipe.eg-live.com";
let urlBase;
let ishost = host.indexOf("192.168.1");
if (ishost == 0) {
  urlBase = "http://192.168.1.52:8765";
} else {
  urlBase = "https://recipe.eg-live.com";
}

// console.log(store.state.LOADING);

store.commit('hideLoading');
// socket配置
export function getApiUrl() {
  let ishost = host.indexOf("192.168.1");
  if (ishost == 0) {
    return 'http://192.168.1.52:9501/webSocketServer'
  }else{
    return 'https://recipe.eg-live.com/ws/webSocketServer'
  }
}
axios.defaults.baseURL = urlBase;
// response interceptor
axios.interceptors.response.use(
  response => {
    // const res = response.data;
    // store.commit('showLoading');
    return response.data;

    // if (res.code !== 0) {
    //   // message.error(res.msg);
    //   // return Promise.reject(res.);
    // } else {
    // }
  },
  error => {
    if (error.response && error.response.status === 401) {
      removeToken();
      if (error.config.url.indexOf("layout") === -1) {
        // message.error("登录信息已过期，请重新登录！");
      }
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    } else if (error.response && error.response.status === 500) {
      // message.error("系统错误！");
    } else if (error.message && error.message.indexOf("timeout") > -1) {
      // message.error("网络超时!");
    } else if (error === "403") {
      // message.error("没有请求权限!");
    } else {
      // message.error("网络错误!");
    }
    return Promise.reject(error);
  }
);

export default axios;
