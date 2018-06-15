import http from '../../api/base.js'
export default {
    state: {
        topModelDate:[],
        andMoreModelDate:[],
        findBussinessDate:[],
        saleAchieveDate:[],
        consumerDate:[],
        userMoreModelDate:[],
        UnUserMoreModelDate:[],
        userMoreModeId:[],
    },
    mutations: {
        setDate(state,payloade) {
            state.topModelDate = payloade.topModelList;
            state.andMoreModelDate = payloade.andMoreModelList;
            state.findBussinessDate = payloade.bizSearchModelList;
            state.saleAchieveDate = payloade.saleSearchModelList;
            state.consumerDate = payloade.customerModelList;
        },
        addMoreModelDate(state,payloade) {
            state.userMoreModelDate = payloade.userMoreModelDate;
            state.UnUserMoreModelDate = payloade.UnUserMoreModelDate;
        }
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
                context.commit("setDate",res.data.data.indexPage);
                let splitDate = res.data.data.indexPage.andMoreModelList;
                let seven = res.data.data.indexPage.andMoreNum;
                let userMoreModelDate = [];
                let UnUserMoreModelDate = [];
                let userMoreModeId = [];
                splitDate.forEach((value,index) => {
                   if(index < seven) {
                    userMoreModelDate.push(value) 
                   }else{
                    UnUserMoreModelDate.push(value)
                   }
                })
              
                context.commit("addMoreModelDate",{
                    userMoreModelDate:userMoreModelDate,
                    UnUserMoreModelDate:UnUserMoreModelDate,
                })
              }else if (res.data.code == 'error') {
      
              }
            },(error) => {
      
            })
        },
    }
}