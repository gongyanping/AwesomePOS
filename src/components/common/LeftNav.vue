<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-goumai"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-jinrudianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-31shouyexuanzhong"></i>
        <div>统计</div>
      </li>
      <li>
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <div>功能</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.left-nav {
  width: 5%;
  height: 100%;
  background-color: #1d8ce0;
  font-size: 10px;
  float: left;
  color: #fff;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      text-align: center;
      border-bottom: 1px solid #20a0ff;
      padding: 10px;
      .iconfont {
        font-size: 24px;
      }
    }
  }
}
</style>