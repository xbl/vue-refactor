<script>
export default {
};
</script>

<template>
  <div class="register">
    <ul>
      <li>
        <label>
          <span>用户名：</span><input type="text" name="" class="username">
        </label>
      </li>
      <li>
        <label>
          <span>密码：</span><input type="password" name="" class="password">
        </label>
      </li>
      <li>
        <label>
          <span>邮箱：</span><input type="text" name="" class="email">
        </label>
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
