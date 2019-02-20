import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapVue from "bootstrap-vue"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(BootstrapVue) //code for use bootstrapvue in vuecli
Vue.use(VueRouter) //to use vue router in application

new Vue({
  render: h => h(App),
}).$mount('#app')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [   
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('./components/ListUpdate.vue')      
    },
    
  ]
})