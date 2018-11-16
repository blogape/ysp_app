//回调用户信息
function getUserDataFromNative(userData) {
  localStorage.removeItem("userData");
    //   把数据存储下来
  localStorage.setItem("userData", userData);
}
// WebView执行
function webViewDidFinishLoad() {
  EG_Recipes.hidenNativeNaviBar(JSON.stringify({ isHidenNaviBar: "1" }));
}

function pageRootType(rootType) {
  //to do
  // alert(rootType);
  var myrootType = JSON.parse(rootType);
  // alert(myrootType.rootType);
  localStorage.setItem("rootType", myrootType.rootType);

}
