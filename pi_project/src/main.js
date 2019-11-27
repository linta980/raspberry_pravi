import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from '@/plugins/vuetify'
import Vuex from 'vuex'
import store from './store'
// import vuetify from './plugins/vuetify';
//import socket from "socket.io"


Vue.use(vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
 
  render: h => h(App)
}).$mount('#app')
