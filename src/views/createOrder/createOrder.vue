<template>
    <div class="create-order">
        <Header title="生成订单"></Header>
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList" style="margin-top: 10px;" :key="index" class="cart">
                <van-card :num="item.num" :price="item.price" :desc="desc" :title="item.title"
                    :thumb="require(`../../assets/${item.pic}.jpeg`)">
                    <template #tags>
                        <van-tag plain type="primary" style="margin-right: 10px; margin-top: 7px;">最新商品</van-tag>
                        <van-tag plain type="primary" style=" margin-top: 7px;">星乐外卖</van-tag>
                    </template>
                </van-card>
            </div>
        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>¥{{ totalPrice }}</span>
            </div>
            <van-button type="primary" class="pay-btn" block color="#ffc400" @click="handleCreateOrder">生成订单</van-button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router'
import { showDialog } from 'vant';
export default {
    components: {
        Header
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const data = reactive({
            tel: '13320722750',
            name: 'admin',
            desc: '欢迎来的星乐外卖ap,这里商品无限,请尽情购物吧!',
            totalPrice: 0,
        });
        const onEdit = () => {
           router.push({path:('./address')});
        };
        //初始化金额
        const initPrice = () => {
            let price = 0;
            if (store.state.orderList.length) {
                store.state.orderList.forEach((item) => {
                    price += item.num * item.price;
                })
            }
            data.totalPrice = price;
        };
        //初始化用户信息
        const initUser = () => {
            store.state.userAddress.forEach((item) => {
                if (item.isDefault) {
                    data.name = item.name;
                    data.tel = item.tel;
                }
            })
        };
        const handleCreateOrder = () => {
            showDialog({
                title: '提示',
                message: '生成订单成功!',
            }).then(() => {
                //和购物车数据联系起来
                let newList = store.state.cartList.filter((item) => {
                    return ! route.query.list.includes(item.id+'');
                });
                store.commit('DELETEDATA',newList);
                store.commit('ORDERLISTEND')
                router.push({
                    path: '/order',
                })
            });
        }
        onMounted(() => {
            initPrice();
            initUser();
        })
        return {
            ...toRefs(data),
            onEdit,
            store,
            handleCreateOrder
        }
    }
}
</script>

<style lang="less">
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;
        position: fixed;
        bottom: 48px;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
            margin: 0 auto;
        }
    }
}
</style>