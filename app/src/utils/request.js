import axios from "axios";

axios.defaults.baseURL = "https://recipe.eg-live.com";

// response interceptor
axios.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 0) {
      message.error(res.msg);
      return Promise.reject(res.msg);
    } else {
      return response.data;
    }
  },
  error => {
    if (error.response && error.response.status === 401) {
      removeToken();
      if (error.config.url.indexOf("layout") === -1) {
        message.error("登录信息已过期，请重新登录！");
      }
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    } else if (error.response && error.response.status === 500) {
      message.error("系统错误！");
    } else if (error.message && error.message.indexOf("timeout") > -1) {
      message.error("网络超时!");
    } else if (error === "403") {
      message.error("没有请求权限!");
    } else {
      message.error("网络错误!");
    }
    return Promise.reject(error);
  }
);

export default axios;
