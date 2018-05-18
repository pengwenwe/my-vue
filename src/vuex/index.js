/*
* @Author: 李志超
* @Date:   2018-04-11 19:04:26
* @Last Modified by:   李志超
* @Last Modified time: 2018-05-02 13:42:06
*/
import Vue from 'vue'
import Vuex from 'vuex'
import http from '../api/base.js'
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		data:'你好vue',
		DetailData: {},
	},
	mutations:{
		setDetailData(state,payload){
			state.DetailData=payload
		}
	},
	actions:{
		getDetailData(context,id){
			http.get('/indexPageApi/sysNoticeById/'+ id)
			.then((res) => {
				context.commit('setDetailData',res.data.id)
			})
			.catch((err) => {
				console.log(err)
			})
		}
	},
})