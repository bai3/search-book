// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'
import VueJsonp from 'vue-jsonp'


Vue.config.productionTip = false

Vue.use(ElementUI, axios, VueAxios)
Vue.use(VueJsonp)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
