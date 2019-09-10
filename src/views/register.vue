<script>
export default {
  data() {
    return {
      user: {},
      usernameInvalid: false,
      passwordInvalid: false,
      emailInvalid: false,
    };
  },
  methods: {
    checkUsername() {
      this.usernameInvalid = !/^\w{1,}$/.test(this.user.username);
    },
    checkPassword() {
      this.passwordInvalid = !/^\w{3,}$/.test(this.user.password);
    },
    checkEmail() {
      this.emailInvalid = !/^[\w]+@[\w]+\.[\w]+$/.test(this.user.email);
    },
  },
};
</script>

<template>
  <div class="register">
    <ul>
      <li class="field username" :class="{invalid: usernameInvalid }">
        <label>
          <span>用户名：</span><input type="text" v-model="user.username" @blur="checkUsername">
        </label>
        <div class="invalid-tip">请输入正确的用户名</div>
      </li>
      <li class="field password" :class="{invalid: passwordInvalid }">
        <label>
          <span>密码：</span><input type="password" v-model="user.password" @blur="checkPassword">
        </label>
        <div class="invalid-tip">请输入正确的密码</div>
      </li>
      <li class="field email" :class="{invalid: emailInvalid }">
        <label>
          <span>邮箱：</span><input type="text" v-model="user.email" @blur="checkEmail">
        </label>
        <div class="invalid-tip">请输入正确的邮箱</div>
      </li>
      <li>
        <button class="submit">保存</button>
      </li>
    </ul>
  </div>
</template>


<style lang="stylus" scoped>
.register
  font-size 14px;
  ul
    list-style none;
    border 1px solid #ccc;
    width 300px;
    margin 0 auto;
    padding 10px;
    li
      margin-bottom 10px;
      input
        border 1px solid #f0f0f0;
      .submit
        background #32b97c;
        color #fff;
        border none;
        border-radius 3px;
    .field
      .invalid-tip
        display none;
        font-size 12px;
        color: red;
      &.invalid
        .invalid-tip
          display block;
        input
          border-color red;
    label
      span
        display inline-block;
        width 80px;
        text-align right;

</style>
