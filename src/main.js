import Vue from 'vue'
import App from './App.vue'
import Login from './pages/login.vue'
import Home from './pages/Home.vue'
import Profile from './pages/Profile.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

import {store} from "./store/store"

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false



const routes = [

  { 'path': '/', component: Home },
  { 'path': '/login', component: Login},
  { 'path': "/profile", component: Profile, }
]

const router = new VueRouter({
  routes 
})
new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
