/*
* @Author: 李志超
* @Date:   2018-05-02 13:34:32
* @Last Modified by:   李志超
* @Last Modified time: 2018-05-02 13:53:18
*/
import axios from 'axios'
import Vue from 'vue'
import  { LoadingPlugin,ToastPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
axios.defaults.timeout = 60000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = 'https://promotion.feihe.com'; //配置接口地址
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 显示
  Vue.$vux.loading.show({
    text: '正在加载'
  })
  return config;
}, (error) => {
  console.log("错误的传参", 'fail');
  return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    Vue.$vux.loading.hide()
  if(res.data.code == 'update'){
        Vue.$vux.toast.show({
            text:res.data.msg,
            type:"warn",
            width:'4rem'
         })
  } 
  //对响应数据做些事
  // if (res.data.code ==='success') {
  //   return Promise.reject(res.data.data);
  // }
  return res;
}, (error) => {
  Vue.$vux.loading.hide();
  console.log("网络异常", 'fail')
  return Promise.reject(error);
});
//返回一个Promise(发送post请求)
export default {
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: params
        })
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      axios.delete(url, {
          params: params
        })
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}