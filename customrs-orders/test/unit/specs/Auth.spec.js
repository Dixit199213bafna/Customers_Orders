import { shallowMount, createLocalVue } from '@vue/test-utils';
import Auth from '../../../src/component/Auth/Auth';
import VueRouter from 'vue-router';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import engLishLang from '../../../src/i18n/en';
import dutchLang from '../../../src/i18n/du';
import store from '../../../src/store/store';
import Header from '../../../src/component/Header';

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

describe('Auth', () => {
  it('Set token on Mounted if user logged in', () => {
    localStorage.setItem('token', 'new-token');
    const setTknStub = jest.fn();
    const wrapper = shallowMount(Auth, {
      localVue,
      store,
      i18n,
      methods: {
        setTkn: setTknStub,
      },
    });
    expect(setTknStub).toBeCalledWith('new-token');
    localStorage.removeItem('token');
  });

  it('sign Up Method', () => {
    const signUpStub = jest.fn();
    const wrapper = shallowMount(Auth, {
      localVue,
      store,
      i18n,
      methods: {
        signUp: signUpStub,
      },
      data() {
        return {
          password: '11111',
          email: 'd@gmail.com',
          singUp: true,
        };
      },
    });
    const signUpBtn = wrapper.find('#signUpBtn');
    signUpBtn.trigger('click');
    expect(signUpStub).toBeCalledWith({ email: 'd@gmail.com', password: '11111' });
  });

  it('sign In Method', () => {
    const signInStub = jest.fn();
    const wrapper = shallowMount(Auth, {
      localVue,
      store,
      i18n,
      methods: {
        signIn: signInStub,
      },
      data() {
        return {
          password: '11111',
          email: 'd@gmail.com',
          singUp: false,
        };
      },
    });
    const signInBtn = wrapper.find('#signInBtn');
    signInBtn.trigger('click');
    expect(signInStub).toBeCalledWith({ email: 'd@gmail.com', password: '11111' });
  });

  it('should move to current page if refreshed and logged in', () => {
    const push = jest.fn();
    const $router = {
      push: jest.fn(),
      history: {
        _startLocation: '/orders',
      },
    };
    const wrapper = shallowMount(Auth, {
      localVue,
      store,
      i18n,
      $router,
      data() {
        return {
          token: null,
        };
      },
    });
    wrapper.setData({ token: 'X' });
    wrapper.vm.$nextTick(() => {
      expect(push).toHaveBeenCalledWith('/orders');
    });
  });

  it('should move to current page if refreshed and current page is blank', () => {
    const push = jest.fn();
    const $router = {
      push: jest.fn(),
      history: {
        _startLocation: null,
      },
    };
    const wrapper = shallowMount(Auth, {
      localVue,
      store,
      i18n,
      $router,
      data() {
        return {
          token: null,
        };
      },
    });
    wrapper.setData({ token: 'X' });
    wrapper.vm.$nextTick(() => {
      expect(push).toHaveBeenCalledWith('/customers');
    });
  });
});
