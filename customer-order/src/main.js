import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/store';
import VueResource from 'vue-resource';
import engLishLang from "./i18n/en";
import dutchLang from "./i18n/du";
import VueI18n from 'vue-i18n'

Vue.filter('uppercase', (value) => {
  return value.toUpperCase()
})

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {
    en: engLishLang,
    du: dutchLang
  },
});

Vue.use(VueResource)
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App)
})
