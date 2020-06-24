import { shallowMount, createLocalVue } from '@vue/test-utils';
import OrderDetail from '../../../src/component/Orders/OrderDetail/OrderDetail';
import VueRouter from 'vue-router';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import engLishLang from '../../../src/i18n/en';
import dutchLang from '../../../src/i18n/du';
import store from '../../../src/store/store';

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

describe('Order Detail', () => {
  it('show fetch order detail if the id changed', () => {
    const getOrderDetailStub = jest.fn();
    const wrapper = shallowMount(OrderDetail, {
      localVue,
      store,
      i18n,
      propsData: {
        id: 123,
      },
      methods: {
        getOrderDetail: getOrderDetailStub,
      },
    });
    wrapper.setData({ id: 555 });
    wrapper.vm.$nextTick(() => {
      expect(getOrderDetailStub).toBeCalledWith(555);
    });
  });
});
