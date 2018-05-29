import http from '../../api/base.js'
export default {
    state: {
        adsList:[]
    },
    mutations: {
        setSwiperDate(state,payloade) {
            state.adsList = payloade;
        },
    },
    actions: {
        reqHomeDate(context) {
            http.post('http://139.199.115.100:8082/indexPageApi/sysNotice',{
                "andMoreMode": "1,2,3",
                "andMoreNum": 7,
                "systemType": "1",
                "userLoginName": "101",
                "userid": 101
            })
            .then((response) => {
                console.log(response)
                if(response.data.code == "success") {
                 context.commit("setSwiperDate",response.data.data.adsList)
                //   this.saleCountMap = res.data.data.saleData.saleCountMap
                //   this.saoRateMap = res.data.data.saleData.saoRateMap
                //   this.newDate = res.data.data.sysNoticeList
                //   this.powerDate = res.data.data.accessPermitList
                }else if (res.data.code == 'error') {
        
                }
              },(error) => {
        
              })
        }
    },
    getters: {

    }
}