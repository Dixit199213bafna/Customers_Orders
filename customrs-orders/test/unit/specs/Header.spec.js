import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex'
import VueI18n from 'vue-i18n';
import Header from '../../../src/component/Header';
import engLishLang from '../../../src/i18n/en';
import dutchLang from '../../../src/i18n/du';
import store from '../../../src/store/store';
import VueRouter from 'vue-router';

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

const setTkn = jest.fn();
let wrapper = shallowMount(Header, {
  localVue,
  store,
  i18n,
});

describe('Header', () => {
  it('default value isDropDownOpen is false', () => {
    expect(wrapper.find('#title').text()).toBe('Customer and Order Details');
    expect(wrapper.vm.$data.isDropDownOpen).toBe(false);
  });

  it('click on language to set language', () => {
    expect(wrapper.vm.$data.isDropDownOpen).toBe(false);
    const language = wrapper.find('#enLang');
    language.trigger('click');
    expect(wrapper.vm.$data.isDropDownOpen).toBe(true);
  });

  it('should move to login page if token is not valid', () => {
    const push = jest.fn();
    const $router = {
      push: jest.fn(),
    }
    wrapper = shallowMount(Header, {
      localVue,
      store,
      i18n,
      $router,
      data() {
        return {
          token: '123'
        }
      }
    });
    wrapper.setData({ token: null});
    wrapper.vm.$nextTick(() => {
      expect(push).toHaveBeenCalledWith('/');
    })
  });

  it('click on logout to logout', () => {
    const store = new Vuex.Store({
        getters: {
          getToken() {
            return 'access-token'
          }
        }
    })
    const setTknStub = jest.fn();
    wrapper = shallowMount(Header, {
      localVue,
      store,
      i18n,
    });
    wrapper.setMethods({ setTkn: setTknStub });
    const logoutBtn = wrapper.find('#logoutBtn');
    logoutBtn.trigger('click');
    expect(setTknStub).toBeCalledWith(null);
  });
});
