<template>
  <div class="detail">
    <van-checkbox-group v-model="checked" ref="checkboxGroup" @change="groupChange">
      <div class="list" v-for="(item, index) in store.state.cartList" :key="index">
        <div class="radios">
          <van-checkbox :name="item.id" checked-color="#ffc400"></van-checkbox>
        </div>
        <div class="img">
          <img :src="require(`../../../assets/${item.pic}.jpeg`)">
        </div>
        <div class="title">
          <span>{{ item.title }}</span><br>
          <div>
            <van-stepper v-model="item.num" theme="round" button-size="22" disable-input />
          </div>
        </div>
        <div class="plic">
          <span>¥{{ item.price }}</span>
        </div>
      </div>
    </van-checkbox-group>
    <div class="floors">
      <div v-if="store.state.isDelete">
        <van-submit-bar :price="allPrice" button-text="结算" @submit="onSubmit" button-color="#ffc400" class="floor">
          <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
        </van-submit-bar>
      </div>
      <div v-if="!store.state.isDelete">
        <van-submit-bar :price="allPrice" button-text="删除" @submit="handDelete" class="floor1">
          <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, toRefs, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { showToast,showFailToast } from 'vant';
import { useRouter } from 'vue-router';
export default {
  namr: 'CartDetail',
  props: ['changeShow'],
  setup(props) {
    const store = useStore();
    const router=useRouter();
    const data = reactive({
      checked: [],
      submitChecked: true,
    })
    const Change = () => {
      //console.log(1111);
      checked.value = !checked.value;
    };
    const init = () => {
      data.checked = store.state.cartList.map((item) => item.id)
    };
    const groupChange = (result) => {
      if (result.length === store.state.cartList.length) {
        data.submitChecked = true;
      } else {
        data.submitChecked = false;
      }
      data.checked = result;
    }
    onMounted(() => {
      init();
    });
    const choseAll = () => {
      if (data.checked.length !== store.state.cartList.length) {
        init();
      } else {
        data.checked = [];
      }
    };
    const allPrice = computed(() => {
      let countList = updataData();
      let sum = 0;
      countList.forEach(item => {
        sum += item.num * item.price;
      });
      return sum * 100;
    });
    const updataData = (type) => {
      return store.state.cartList.filter((item) => {
        return type === 'delete' ? !data.checked.includes(item.id) : data.checked.includes(item.id)
      });
    }
    const handDelete = () => {
      if (data.checked.length) {
        store.commit('DELETEDATA', updataData('delete'));
        //localStorage.removeItem('cart');
        //购物车没有数据的时候
        if (!store.state.cartList.length) {
          props.changeShow();
        }
      } else {
        showFailToast('请选择要删除的商品!');
      }
    }
    const onSubmit = () => {
      if(data.checked.length){
        store.commit('PAY',updataData());
        router.push({path:'/createorder',query:{list:data.checked}});
      }else{
        showFailToast('请选择要结算的商品!');
      }
    }
    return {
      Change,
      store,
      onSubmit,
      ...toRefs(data),
      choseAll,
      init,
      groupChange,
      allPrice,
      handDelete
    };
  },
}
</script>

<style lang="less" scoped>
.detail {
  margin: 20px;
  background-color: #fff;
  border-radius: 10px;

  .list {
    display: flex;
    align-items: center;
    background-color: rgb(245, 245, 245);
    border-radius: 10px;
    height: 80px;
    padding: 10px;
    margin: 10px 0px 10px 0px;
    border: 1px solid #ddd;
    line-height: 80px;
    text-align: center;
    font-size: 14px;

    .img {
      width: 70px;
      height: 70px;
      border-radius: 8px;
      margin-left: 15px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }

    .title {
      display: flex;
      height: 100px;
      line-height: 100px;
      position: relative;

      span {
        width: 100px;
        height: 20px;
        display: inline-block;
        position: absolute;
        font-size: 14px;
        top: -20px;
        margin-left: 5px;
      }

      div {
        margin-top: 10px;
        margin-left: 10px;
      }
    }

    .plic {
      position: absolute;
      right: 35px;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .floors {
    .floor1 {
      position: fixed;
      bottom: 55px;
      border-top: 0.5px solid #ccc;

      /deep/.van-submit-bar__price {
        color: #fff;

      }

      /deep/.van-submit-bar__text span {
        display: none;
      }
    }

    .floor {
      position: fixed;
      bottom: 55px;
      border-top: 0.5px solid #ccc;
    }
  }
}
</style>