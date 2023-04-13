<template>
    <div class="footer">
        <div class="item" @click="homeChange">
            <router-link to="/home" class="nav-item">
                <van-icon :color="homeColor ? '#ffc400' : '#000'" name="wap-home-o" click="change" />
                <span :class="{ active: homeColor, classe: !homeColor }">首页</span>
            </router-link>
        </div>
        <div class="item" @click="cartChange">
            <router-link to="/cart" class="nav-item">
                <van-icon :color="cartColor ? '#ffc400' : '#000'" name="shopping-cart-o" />
                <span :class="{ active: cartColor, classe: !cartColor }">购物车</span>
            </router-link>
        </div>
        <div class="item" @click="orderChange">
            <router-link to="/order" class="nav-item">
                <van-icon :color="orderColor ? '#ffc400' : '#000'" name="goods-collect-o" />
                <span :class="{ active: orderColor, classe: !orderColor }">订单</span>
            </router-link>
        </div>
        <div class="item" @click="mineChange">
            <router-link to="/mine" class="nav-item">
                <van-icon :color="mineColor ? '#ffc400' : '#000'" name="manager-o" />
                <span :class="{ active: mineColor, classe: !mineColor }">我的</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Footer',
    setup() {
        const homeChange = function () {
            homeColor.value = true;
            cartColor.value = false;
            orderColor.value = false;
            mineColor.value = false;
        }
        const cartChange = function () {
            homeColor.value = false;
            cartColor.value = true;
            orderColor.value = false;
            mineColor.value = false;
        }
        const orderChange=function(){
            homeColor.value = false;
            cartColor.value = false;
            orderColor.value = true;
            mineColor.value = false;
        }
        const mineChange=function(){
            homeColor.value = false;
            cartColor.value = false;
            orderColor.value = false;
            mineColor.value = true;
        }
        const homeColor = ref(true);
        const cartColor = ref(false);
        const orderColor = ref(false);
        const mineColor = ref(false);
        return {
            homeChange,
            cartChange,
            orderChange,
            mineChange,
            homeColor,
            cartColor,
            orderColor,
            mineColor
        }
    }
}
</script>

<style lang="less" scoped>
.footer {
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
    position: fixed;
    border-top: 0.5px solid #eee;
    background: #fff;
    bottom: 0px;
    display: flex;
    font-size: 28px;
    color: #000;
    font-weight: 400;

    .item:active {
        color: #2f53f5;
    }

    .item {
        flex: 1;

        /deep/.active {
            color: #ffc400;
        }

        /deep/.classe {
            color: #000;
        }

        .nav-item {
            display: flex;
            flex-flow: column;
            align-items: center;

            span {
                font-size: 12px;
            }
        }
    }
}
</style>