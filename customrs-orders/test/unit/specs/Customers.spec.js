import { shallowMount, createLocalVue } from '@vue/test-utils';
import Customers from "../../../src/component/Customers/Customers";
import VueRouter from 'vue-router';
import Vue from "vue";
import VueI18n from "vue-i18n";
import engLishLang from "../../../src/i18n/en";
import dutchLang from "../../../src/i18n/du";
import store from "../../../src/store/store";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();


Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {
    en: engLishLang,
    du: dutchLang,
  },
});
const fetchCustomersStub = jest.fn();
const wrapper = shallowMount(Customers, {
  localVue,
  store,
  i18n,
  methods: {
    fetchCustomers: fetchCustomersStub,
  }
});

describe('Customers', () => {
  it('should get customers data', () => {
    expect(fetchCustomersStub).toHaveBeenCalled();
    expect(wrapper.vm.$data.title).toBe('Customers');
  });
});
