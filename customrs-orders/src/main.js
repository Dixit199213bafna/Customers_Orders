import Vue from 'vue';
import VueI18n from 'vue-i18n';

import App from './App';
import router from './router';
import store from './store/store';
import engLishLang from './i18n/en';
import dutchLang from './i18n/du';

Vue.filter('uppercase', value => value.toUpperCase());

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {
    en: engLishLang,
    du: dutchLang,
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App),
});
