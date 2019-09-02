<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="order-list" id="order_list">
        <el-tabs v-model="activeName">
          <el-tab-pane label="点餐" name="order">
            <el-table :data="tableData">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="价格"></el-table-column>
              <el-table-column fixed="right" label="操作">
                <template>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="tool-btn">
              <el-button type="warning" size="medium">挂单</el-button>
              <el-button type="danger" size="medium">删除</el-button>
              <el-button type="success" size="medium">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="list">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="takeout">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">我是产品栏</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "order",
      tableData: [
        {
          goodsName: "可口可乐",
          price: 8,
          count: 1
        },
        {
          goodsName: "香辣鸡腿堡",
          price: 15,
          count: 1
        },
        {
          goodsName: "爱心薯条",
          price: 8,
          count: 1
        },
        {
          goodsName: "甜筒",
          price: 8,
          count: 1
        }
      ]
    };
  },
  mounted() {
    let orderHeight = document.body.clientHeight;
    document.getElementById("order_list").style.height = orderHeight + "px";
  }
};
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #f9fafc;
  border-right: solid 1px #c0ccda;
  height: 100%;
  .tool-btn {
    margin-top: 20px;
  }
}
</style>