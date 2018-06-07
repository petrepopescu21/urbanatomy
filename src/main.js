// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ContentfulPlugin from './plugins/contentful'
import ImageHelper from './plugins/imagehelper'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(ContentfulPlugin)
Vue.use(ImageHelper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
