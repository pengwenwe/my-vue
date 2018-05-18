import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import TrainingManagement from '../pages/trainingManagement/TrainingManagement'
import MarketingAssistant from '../pages/marketingAssistant/MarketingAssistant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TrainingManagement',
      name: 'TrainingManagement',
      component: TrainingManagement
    },
    {
      path: '/MarketingAssistant',
      name: 'MarketingAssistant',
      component: MarketingAssistant
    }
  ]
})
