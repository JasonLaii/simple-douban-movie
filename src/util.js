import Vue from 'vue'

let vm = new Vue()

const configPath = "/api";
window.configPath = configPath;

class Utils {
  //构造函数
  constructor() {}
  //获取信息
  getInfo(url, data = {}) {
    url = configPath + url;
    //Promise 接收两个参数 一个 是 resolve 一个是reject
    return new Promise((resolve, reject) => {
      vm.$axios
        .get(url, { params: data, credentials: true })
        .then(res => {
          resolve(res.data);   
          // console.log("This is util's response : " )
          // console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
  
}
export default Utils;
