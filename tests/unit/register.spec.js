import { shallowMount } from '@vue/test-utils';
import Register from '@/views/register.vue';

describe('register.vue', () => {
  it('When 用户访问注册页面，Then 看到用户名、邮箱和提交按钮', () => {
    const wrapper = shallowMount(Register);
    expect(wrapper.find('input.username').exists()).toBeTruthy();
    expect(wrapper.find('input.password').exists()).toBeTruthy();
    expect(wrapper.find('input.email').exists()).toBeTruthy();
    expect(wrapper.find('button.submit').exists()).toBeTruthy();
  });
});
