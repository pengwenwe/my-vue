import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import TrainingManagement from '../pages/trainingManagement/TrainingManagement'
import MarketingAssistant from '../pages/marketingAssistant/MarketingAssistant'
import MoreList from '../pages/moreList/MoreList'
import MoreMethods from '../pages/moreMethods/MoreMethods'

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
    },
    {
      path: '/MoreList',
      name: 'MoreList',
      component: MoreList
    },
    {
      path: '/MoreMethods',
      name: 'MoreMethods',
      component: MoreMethods
    }
  ]
})
