<script>
export default {
  data() {
    return {
      user: {},
    };
  },
};
</script>

<template>
  <div class="register">
    <ul>
      <li class="field username">
        <label>
          <span>用户名：</span><input type="text" v-model="user.username">
        </label>
        <div class="invalid-tip">请输入正确的用户名</div>
      </li>
      <li class="field password">
        <label>
          <span>密码：</span><input type="password" v-model="user.password">
        </label>
        <div class="invalid-tip">请输入正确的密码</div>
      </li>
      <li class="field email">
        <label>
          <span>邮箱：</span><input type="text" v-model="user.email">
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
    label
      span
        display inline-block;
        width 80px;
        text-align right;

</style>
