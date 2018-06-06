import http from '../../api/base.js'
export default {
    state: {
        topModelDate:[],
        andMoreModelDate:[],
        findBussinessDate:[],
        saleAchieveDate:[],
        consumerDate:[],
    },
    mutations: {
        setDate(state,payloade) {
            state.topModelDate = payloade.topModelList;
            state.andMoreModelDate = payloade.andMoreModelList;
            state.findBussinessDate = payloade.bizSearchModelList;
            state.saleAchieveDate = payloade.saleSearchModelList;
            state.consumerDate = payloade.customerModelList;
        },
    },
    actions: {
        reqMarketDate(context){
            http.post('/indexPageApi/indexPage',{
              "andMoreMode": "1,2,3",
              "andMoreNum": 7,
              "systemType": "1",
              "userLoginName": "104",
              "userid": 104
            })
            .then((res) => {
              if(res.data.code == "success") {
                context.commit("setDate",res.data.data.indexPage)
              }else if (res.data.code == 'error') {
      
              }
            },(error) => {
      
            })
        },
    }
}