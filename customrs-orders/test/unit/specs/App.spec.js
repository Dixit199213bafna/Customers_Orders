import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from '../../../src/App';
import VueRouter from 'vue-router';
import Header from '../../../src/component/Header';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

const wrapper = shallowMount(App, {
  localVue,
});

describe('App', () => {
  it('App Created', () => {
    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });
});
