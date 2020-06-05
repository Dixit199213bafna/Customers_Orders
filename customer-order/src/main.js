import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/store';
import VueResource from 'vue-resource'

Vue.filter('uppercase', (value) => {
  return value.toUpperCase()
})

Vue.config.productionTip = false;

Vue.use(VueResource)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
