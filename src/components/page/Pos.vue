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
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li :key="item.id" v-for="item in oftenGoods">
                <span>{{item.goodsName}}</span>
                <span class="o-price">￥{{item.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div class="cookList">
                <ul>
                  <li :key="item.goodsId" v-for="item in type0Goods">
                    <span class="foodImg">
                      <el-image
                        :src="item.goodsImg"
                        :fit="'cover'"
                        style="width:100%;height:100%;"
                      />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div class="cookList">
                <ul>
                  <li :key="item.goodsId" v-for="item in type1Goods">
                    <span class="foodImg">
                      <el-image
                        :src="item.goodsImg"
                        :fit="'cover'"
                        style="width:100%;height:100%;"
                      />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div class="cookList">
                <ul>
                  <li :key="item.goodsId" v-for="item in type2Goods">
                    <span class="foodImg">
                      <el-image
                        :src="item.goodsImg"
                        :fit="'cover'"
                        style="width:100%;height:100%;"
                      />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div class="cookList">
                <ul>
                  <li :key="item.goodsId" v-for="item in type3Goods">
                    <span class="foodImg">
                      <el-image
                        :src="item.goodsImg"
                        :fit="'cover'"
                        style="width:100%;height:100%;"
                      />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeName: "order",
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    };
  },
  created() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5d5b6aea61bfb2319339c364/example/oftenGoods"
      )
      .then(res => {
        console.log(res);
        if (res.data.success){
          this.oftenGoods = res.data.result;
        }
      })
      .catch(err => {
        alert("网络错误，不能访问");
      });
    axios
      .get(
        "https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods"
      )
      .then(res => {
        this.type0Goods = res.data[0];
        this.type1Goods = res.data[1];
        this.type2Goods = res.data[2];
        this.type3Goods = res.data[3];
      })
      .catch(err => {
        alert("网络错误，不能访问");
      });
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
.often-goods {
  .title {
    height: 20px;
    border: solid 1px #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
  }
  .often-goods-list {
    overflow: hidden;
    ul li {
      list-style: none;
      float: left;
      border: solid 1px #e5e9fa;
      padding: 10px;
      margin: 10px;
      background-color: #ffffff;
      .o-price {
        color: #58b7ff;
      }
    }
  }
}
.cookList {
  li {
    list-style: none;
    width: 23%;
    border: 1px solid #e5e9f2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    span {
      display: block;
      float: left;
    }
    .foodImg {
      width: 40%;
      height: 80px;
    }
    .foodName {
      font-size: 18px;
      padding-left: 10px;
      color: brown;
    }
    .foodPrice {
      font-size: 16px;
      padding-left: 10px;
      padding-top: 10px;
    }
  }
}
</style>