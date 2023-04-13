<template>
    <div class="order">
        <Header title="订单"></Header>
        <van-tabs color="#ffc400">
            <van-tab :title="item" v-for="(item, index) in navData" style="margin-top: 10px;">
                <div v-for="(i, dex) in store.state.orderListEnd" v-if="item === '全部' && store.state.orderListEnd.length">
                    <van-card :num="i.num" :price="i.price" :title="i.title" :desc="desc"
                        :thumb="require(`../../assets/${i.pic}.jpeg`)">
                        <template #tags>
                            <van-tag plain type="primary" style="margin-right: 10px; margin-top: 7px;">最新商品</van-tag>
                            <van-tag plain type="primary" style=" margin-top: 7px;">星乐外卖</van-tag>
                        </template>
                    </van-card>
                </div>
                <div v-else>
                    <Empty></Empty>
                </div>
            </van-tab>
        </van-tabs>
        <div class="floor">
            <div class="price">
                <span>商品金额</span>
                <span>¥{{ totalPrice }}</span>
            </div>
            <van-button type="primary" class="pay-btn" block color="#ffc400" @click="payAll">{{ fieldValue }}支付</van-button>
            <van-field v-model="fieldValue" is-link readonly label="支付方式" placeholder="选择支付方式" @click="showPicker = true" />
            <van-popup v-model:show="showPicker" round position="bottom">
                <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
            </van-popup>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { useStore } from 'vuex';
import { showToast, showLoadingToast, showSuccessToast } from 'vant';
import Empty from '@/components/Empty.vue';
import { reactive, toRefs, onMounted } from 'vue';
export default {
    name: 'Order',
    components: {
        Header,
        Empty
    },
    setup() {
        const store = useStore();
        const data = reactive({
            navData: ['全部', '交易完成', '待付款', '待发货', '已发货'],
            desc: '欢迎来的星乐外卖ap,这里商品无限,请尽情购物吧!',
            totalPrice: 0,
            columns: [
                { text: '微信', value: '微信' },
                { text: '支付宝', value: '支付宝' },
                { text: '微信零钱', value: '微信零钱' },
                { text: '网银', value: '网银' },
            ],
            fieldValue: '',
            showPicker: false,
        });
        //初始化金额
        const initPrice = () => {
            let price = 0;
            if (store.state.orderListEnd.length) {
                store.state.orderListEnd.forEach((item) => {
                    price += item.num * item.price;
                })
            }
            data.totalPrice = price;
        };
        const payAll = () => {
            if (!store.state.orderListEnd.length) return showToast('请先择要购买的商品!');
            if (data.fieldValue === '') {
                showToast('请先择支付方式!');
            } else {
                showLoadingToast({
                    message: '加载中...',
                    forbidClick: true,
                });
                setTimeout(() => {
                    showSuccessToast('支付成功!');
                    store.commit('PAYALL', []);
                    data.totalPrice=0;
                    data.fieldValue='';
                }, 2000)

            }
        }
        onMounted(() => {
            initPrice();
        });
        const onConfirm = ({ selectedOptions }) => {
            data.showPicker = false;
            data.fieldValue = selectedOptions[0].text;
        };
        return {
            ...toRefs(data),
            store,
            payAll,
            onConfirm,
        }
    }
}
</script>

<style lang="less" scoped>
.order {
    .floor {
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