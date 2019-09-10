import { shallowMount } from '@vue/test-utils';
import Register from '@/views/register.vue';

describe('register.vue', () => {
  it('When 用户访问注册页面，Then 看到用户名、邮箱和提交按钮', () => {
    const wrapper = shallowMount(Register);
    expect(wrapper.find('.username input').exists()).toBeTruthy();
    expect(wrapper.find('.password input').exists()).toBeTruthy();
    expect(wrapper.find('.email input').exists()).toBeTruthy();
    expect(wrapper.find('button.submit').exists()).toBeTruthy();
  });

  it('Given 用户访问注册页面， When 输入期望的用户数据，Then vm.user 与输入的数据相同', () => {
    const wrapper = shallowMount(Register);
    const expectResult = {
      username: '谢小呆',
      password: '123',
      email: '123@abc.com',
    };
    wrapper.find('.username input').setValue(expectResult.username);
    wrapper.find('.password input').setValue(expectResult.password);
    wrapper.find('.email input').setValue(expectResult.email);

    expect(wrapper.vm.user).toEqual(expectResult);
  });

  it('Given 用户访问注册页面， When 未输入数据 And 触发验证，Then 显示验证提示', () => {
    const wrapper = shallowMount(Register);

    wrapper.find('.username input').trigger('blur');
    wrapper.find('.password input').trigger('blur');
    wrapper.find('.email input').trigger('blur');

    expect(wrapper.find('.username > .invalid-tip').isVisible()).toBe(true);
    expect(wrapper.find('.password > .invalid-tip').isVisible()).toBe(true);
    expect(wrapper.find('.email > .invalid-tip').isVisible()).toBe(true);
  });

  it('Given 用户访问注册页面， When 入合法数据 And 触发验证，Then 不显示验证提示', () => {
    const wrapper = shallowMount(Register);

    const usernameInput = wrapper.find('.username input');
    usernameInput.setValue('谢小呆');
    usernameInput.trigger('blur');

    const passwordInput = wrapper.find('.password input');
    passwordInput.setValue('123');
    passwordInput.trigger('blur');

    const emailInput = wrapper.find('.email input');
    emailInput.setValue('123@sina.com');
    emailInput.trigger('blur');

    expect(wrapper.find('.username > .invalid-tip').isVisible()).toBe(false);
    expect(wrapper.find('.password > .invalid-tip').isVisible()).toBe(false);
    expect(wrapper.find('.email > .invalid-tip').isVisible()).toBe(false);
  });
});
