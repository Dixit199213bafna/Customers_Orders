import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Header from '../../../src/component/Header';
import engLishLang from '../../../src/i18n/en';
import dutchLang from '../../../src/i18n/du';
import store from '../../../src/store/store';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {
    en: engLishLang,
    du: dutchLang,
  },
});

const wrapper = shallowMount(Header, {
  store,
  i18n,
});

describe('Header', () => {
  it('has name as name', () => {
    expect(wrapper.vm.$data.isDropDownOpen).toBe(false);
  });
});
