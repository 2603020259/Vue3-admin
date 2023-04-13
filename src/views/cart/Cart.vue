<template>
  <div class="cart">
    <Header title="购物车" edit="true"></Header>
    <CartDetail v-if="isShow" :changeShow="changeShow"></CartDetail>
    <Empty v-else></Empty>
  </div>
</template>

<script>
import Empty from '@/components/Empty.vue';
import Header from '@/components/Header.vue';
import CartDetail from './components/CartDetail.vue';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
export default {
  name: 'Cart',
  components: {
    Empty,
    Header,
    CartDetail
  },
  setup() {
    const store = useStore();
    const isShow = ref(true);
    const init = () => {
      //console.log('这是购物车界面',store.state.cartList);
      if (store.state.cartList.length === 0) {
        isShow.value = false;
      }
    };
    onMounted(() => {
      init();
    });
    const changeShow = () => {
      isShow.value = false;
    }
    return {
      isShow,
      changeShow
    }
  }
}
</script>

<style lang="less" scoped></style>
