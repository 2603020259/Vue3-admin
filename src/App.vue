<template>
  <div class="app">
   <div class="main"><router-view></router-view></div>
   <div class="footer"><Footer></Footer></div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    Footer,
  },
}
</script>

<style lang="less" scoped>
.app {
  div{
    color: #000000;
  }
  .main{
    height: 100%;
    display: flex;
    flex-flow: column;
  }
  .footer{
    flex: 1;
    margin-bottom: 0px;
  }

}
</style>
