import http from '../../api/base.js'
export default {
    state: {
        adsList:[],
        saleCountMap:{},
        saoRateMap:{},
        newDate:[],
        powerDate:[],
    },
    mutations: {
        setSwiperDate(state,payloade) {
            state.adsList = payloade;
        },
        setNumberDate(state,payloade) {
            state.saleCountMap = payloade;
        },
        setsaoRateDate(state,payloade) {
            state.saoRateMap = payloade;
        },
        setNewDate(state,payloade) {
            state.newDate = payloade;
        },
        setpowerDate(state,payloade) {
            state.powerDate = payloade;
        }
    },
    actions: {
        reqHomeDate(context) {
            http.post('/indexPageApi/sysNotice',{
                "andMoreMode": "1,2,3",
                "andMoreNum": 7,
                "systemType": "1",
                "userLoginName": "101",
                "userid": 101
            })
            .then((response) => {
                if(response.data.code == "success") {
                 context.commit("setSwiperDate",response.data.data.adsList)
                 context.commit("setNumberDate",response.data.data.saleData.saleCountMap)
                 context.commit("setsaoRateDate",response.data.data.saleData.saoRateMap)
                 context.commit("setNewDate",response.data.data.sysNoticeList)
                 context.commit("setpowerDate",response.data.data.accessPermitList)
                }else if (response.data.code == 'error') {
        
                }
              },(error) => {
        
              })
        }
    },
    getters: {

    }
}