<script>
export default {
  data() {
    return {
      user: {},
      usernameInvalid: null,
      passwordInvalid: null,
      emailInvalid: null,
    };
  },
  computed: {
    submitDisabled() {
      if (this.usernameInvalid === null || this.usernameInvalid === true) {
        return true;
      }

      if (this.passwordInvalid === null || this.passwordInvalid === true) {
        return true;
      }

      if (this.emailInvalid === null || this.emailInvalid === true) {
        return true;
      }

      return false;
    },
  },
  methods: {
    checkUsername() {
      this.usernameInvalid = !/^[\w\u4e00-\u9fa5]+$/.test(this.user.username || '');
    },
    checkPassword() {
      this.passwordInvalid = !/^\w{3,}$/.test(this.user.password || '');
    },
    checkEmail() {
      this.emailInvalid = !/^[\w]+@[\w]+\.[\w]+$/.test(this.user.email || '');
    },
    onSubmit() {
      alert('submit!');
    },
  },
};
</script>

<template>
  <div class="register">
    <ul>
      <li class="field username" :class="{invalid: usernameInvalid === true }">
        <label>
          <span>用户名：</span><input type="text" v-model="user.username" @blur="checkUsername">
        </label>
        <div class="invalid-tip">请输入正确的用户名</div>
      </li>
      <li class="field password" :class="{invalid: passwordInvalid === true }">
        <label>
          <span>密码：</span><input type="password" v-model="user.password" @blur="checkPassword">
        </label>
        <div class="invalid-tip">请输入正确的密码</div>
      </li>
      <li class="field email" :class="{invalid: emailInvalid === true }">
        <label>
          <span>邮箱：</span><input type="text" v-model="user.email" @blur="checkEmail">
        </label>
        <div class="invalid-tip">请输入正确的邮箱</div>
      </li>
      <li>
        <button class="submit" @click="onSubmit" :disabled="submitDisabled">保存</button>
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
        &:disabled
          background #ccc;
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
