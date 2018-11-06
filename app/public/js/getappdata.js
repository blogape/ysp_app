//回调用户信息
function getUserDataFromNative(userData) {
  localStorage.removeItem("userData");
    //   把数据存储下来
  localStorage.setItem("userData", userData);
}