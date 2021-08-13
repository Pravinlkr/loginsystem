import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import {router} from './router/router'
import {store} from "./store/store"

Vue.use(Buefy)

Vue.config.productionTip = false


new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
