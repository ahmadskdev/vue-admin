import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
require('bootstrap');

require('material-design-icons');
require('bootstrap/scss/bootstrap.scss');
require('./plugin/app.scss')

window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
