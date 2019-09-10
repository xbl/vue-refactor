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

  it('Given 用户访问注册页面， When 输入期望的用户数据，Then vm.user 与输入的数据相同', () => {
    const wrapper = shallowMount(Register);
    const expectResult = {
      username: '谢小呆',
      password: '123',
      email: '123@abc.com',
    };
    wrapper.find('input.username').setValue(expectResult.username);
    wrapper.find('input.password').setValue(expectResult.password);
    wrapper.find('input.email').setValue(expectResult.email);

    expect(wrapper.vm.user).toEqual(expectResult);
  });

  it('Given 用户访问注册页面， When 未输入数据 And 触发验证，Then 显示验证提示', () => {
    const wrapper = shallowMount(Register);

    wrapper.find('input.username').trigger('blur');
    wrapper.find('input.password').trigger('blur');
    wrapper.find('input.email').trigger('blur');

    expect(wrapper.find('.username > .invalid-tip').isVisible()).toBe(true);
    expect(wrapper.find('.password > .invalid-tip').isVisible()).toBe(true);
    expect(wrapper.find('.email > .invalid-tip').isVisible()).toBe(true);
  });
});
