<template>
    <div class="store">
        <Header title="店铺"></Header>
        <div class="comtent">
            <div class="img">
                <img :src="require(`../../assets/sp${store.state.store.pic}.jpeg`)">
            </div>
            <div class="stort">
                <div class="login">
                    <span class="title">{{ store.state.store.title }}</span>
                    <div class="imgs">
                        <img :src="require(`../../assets/sp${store.state.store.pic}.jpeg`)">
                    </div>
                </div>
                <div class="tab">
                    <van-tabs color="#ffc400">
                        <van-tab v-for="(item, index) in store.state.store.storeData" :title="item.name" :key="index">
                            <FoodList :index="index" :foodData="item.data"></FoodList>
                        </van-tab>
                    </van-tabs>
                </div>
                <div class="floor">
                    <van-action-bar>
                        <van-action-bar-icon icon="chat-o" text="客服" dot></van-action-bar-icon>
                        <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length"
                            @click="goCart"></van-action-bar-icon>
                        <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart"></van-action-bar-button>
                        <van-action-bar-button type="danger" text="立即购买" @click="goBuy"></van-action-bar-button>
                    </van-action-bar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue';
import FoodList from './components/FoodList.vue'
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { showToast } from 'vant';
export default {
    name: 'Store',
    props: ['stores'],
    components: {
        Header,
        FoodList
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const data = reactive({
            /*
            storeData: [
                {
                    name: "点菜",
                    data: {
                        content: "点菜",
                        items: [
                            {
                                text: "热销套餐",
                                children: [
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                                        title: "隆江猪脚饭",
                                        num: 0,
                                        price: 25.0,
                                        id: 0,
                                        add: true,
                                    },
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                                        title: "隆江猪脚饭",
                                        num: 0,
                                        price: 25.0,
                                        id: 1,
                                        add: true,
                                    },
                                ],
                            },
                            {
                                text: "超级折扣",
                                children: [
                                    {
                                        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                        title: "无骨酸菜鱼+肥牛双拼",
                                        num: 0,
                                        price: 25.0,
                                        id: 5,
                                        add: true,
                                    },
                                    {
                                        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                        title: "香辣水煮鱼+肥牛双拼",
                                        num: 0,
                                        price: 25.0,
                                        id: 6,
                                        add: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    name: "评价",
                    data: {
                        content: "评价",
                    },
                },
                {
                    name: "商家",
                    data: {
                        content: "商家",
                    },
                },
            ],
            */
        });
        const handleAddCart = (type) => {
            const newList = [];
            store.state.store.storeData.forEach((item) => {
                item.data.items?.forEach((item) => {
                    item.children.forEach((item) => {
                        if (item.num > 0) {
                            newList.push(item);
                        }
                    });
                });
            });
            if (newList.length === 0) {
                //debugger;
                showToast('请选择商品');
                return
            }
            store.commit('ADDLIST', newList);
            type === 'buy' ? goCart() : '';
        }
        const goCart = () => {
            router.push('./cart');
        }
        const goBuy = () => {
            handleAddCart('buy');
        }
        return {
            ...toRefs(data),
            handleAddCart,
            store,
            goCart,
            router,
            goBuy,
        }
    }
}
</script>

<style lang="less" scoped>
.store {
    .comtent {

        .img {
            height: 240px;
            z-index: -1;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .stort {
            height: 100%;
            border-radius: 30px 30px 0px 0px;
            background-color: #fff;
            margin-top: -80px;
            z-index: 9999;

            .login {
                height: 80px;
                position: relative;

                .title {
                    display: inline-block;
                    position: absolute;
                    left: 20px;
                    top: 25px;
                    font-size: 20px;
                }

                .imgs {
                    width: 90px;
                    height: 90px;
                    border-radius: 20px;
                    position: absolute;
                    right: 20px;
                    top: -15px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }
            }
        }
    }

    .floor {
        position: relative;
        z-index: 9999;
    }
}
</style>