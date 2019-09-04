<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="order-list" id="order_list">
        <el-tabs v-model="activeName">
          <el-tab-pane label="点餐" name="order">
            <el-table :data="tableData">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="单价"></el-table-column>
              <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addGoods(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="stastic">
              <span class="totalnum">数量：{{totalNum}}</span>
              <span class="totalprice">总价：{{totalPrice}}元</span>
            </div>
            <div class="tool-btn">
              <el-button type="warning" size="medium">挂单</el-button>
              <el-button type="danger" size="medium" @click="deleteAll">删除</el-button>
              <el-button type="success" size="medium" @click="payBill">结账</el-button>
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
              <li :key="item.goodsId" v-for="item in oftenGoods" @click="addGoods(item)">
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
                  <li :key="item.goodsId" v-for="item in type0Goods" @click="addGoods(item)">
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
                  <li :key="item.goodsId" v-for="item in type1Goods" @click="addGoods(item)">
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
                  <li :key="item.goodsId" v-for="item in type2Goods" @click="addGoods(item)">
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
                  <li :key="item.goodsId" v-for="item in type3Goods" @click="addGoods(item)">
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
      type3Goods: [],
      totalNum: 0,
      totalPrice: 0
    };
  },
  created() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods"
      )
      .then(res => {
        console.log(res);
        this.oftenGoods = res.data;
      })
      .catch(err => {
        alert("网络错误，不能访问");
      });
    axios
      .get(
        "https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods"
      )
      .then(res => {
        console.log(res.data[0]);
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
  },
  methods: {
    addGoods(goods) {
      let isExist = false;
      //判断商品是否已经加入点餐列表中
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isExist = true;
          break;
        }
      }
      if (isExist) {
        let currentGoods = this.tableData.filter(item => {
          return item.goodsId == goods.goodsId;
        });
        currentGoods[0].count++;
      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          count: 1,
          price: goods.price
        };
        this.tableData.push(newGoods);
      }
      this.computeTotal(this.tableData);
    },
    delGoods(goods) {
      this.tableData = this.tableData.filter(
        item => item.goodsId != goods.goodsId
      );
      this.computeTotal(this.tableData);
    },
    //计算商品数量和价格
    computeTotal(tableData) {
      let totalNum = 0,
        totalPrice = 0;
      this.tableData.forEach(item => {
        totalNum += item.count;
        totalPrice += item.count * item.price;
      });
      this.totalNum = totalNum;
      this.totalPrice = totalPrice;
    },
    deleteAll() {
      this.tableData = [];
      this.totalNum = 0;
      this.totalPrice = 0;
    },
    payBill(){
      if (this.tableData.length){
        this.deleteAll();
        this.$message({
          message: '结账成功',
          type: 'success'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #f9fafc;
  border-right: solid 1px #c0ccda;
  height: 100%;
  .stastic {
    padding: 10px;
    .totalprice {
      margin-left: 40px;
    }
  }
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
      cursor: pointer;
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
    cursor: pointer;
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