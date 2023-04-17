<template>
    <div class="home">
        <div class="header">
            <div class="text">星乐外卖</div>
            <div class="location">
                <van-icon name="location-o" />
                <span @click="change">{{ user }}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <!--内容主体部分-->
        <div class="main">
            <div class="main-bg">
                <div class="search">
                    <input type="text">
                    <div class="search-text">搜索</div>
                </div>
                <div class="sort">
                    <div class="big-sort">
                        <div v-for="(item, index) in big_sort" :key="index">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="`#${item.icon}`"></use>
                            </svg>
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="small-sort">
                        <div v-for="(item, index) in small_sort" :key="index">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="`#${item.icon}`"></use>
                            </svg>
                            {{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="tab">
                    <van-tabs v-model:active="active">
                        <van-tab v-for="(item, index) in content_nav_list" :title="item.tab" :key="index">
                            <div class="tabs">
                                <NavList :navList="item.data"></NavList>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <van-back-top style="bottom: 150px;" />
    </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import NavList from './components/NavList.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
    name: 'Home',
    components: {
        NavList,
    },
    setup() {
        const active = ref(0);
        let data = reactive({
            big_sort:[],
            small_sort:[],
            content_nav_list:[],
            user: ''
            
        })
        const router = useRouter();
        const change = () => {
            router.push({ path: '/userinfoedit' });
        };
        const init = () => {
            data.user = JSON.parse(localStorage.getItem('user')) || 'admin';
        };
        const getHomeData = () => {
            axios.get('/api/home/getHomeData').then(value => {
                //console.log(1111, value);
                data.big_sort=value.data.big_sort;
                data.small_sort=value.data.small_sort;
                //data.user=value.data.user;
                setTimeout(()=>{
                   data.content_nav_list=value.data.content_nav_list;
                },1000);
            }, err => {
                console.log(222, err.message);
                router.push({path:'error'});
            });
        }
        onMounted(() => {
            init();
            getHomeData();
        })
        return {
            ...toRefs(data),
            active,
            change
        }
    },
}
</script>

<style lang="less" scoped>
.home {
    font-size: 12px;
    overflow-y: scroll;

    .home::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    .home::-webkit-scrollbar {
        display: none;
    }

    .header {
        background-image: linear-gradient(#ffc400, #fff);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 40px 20px;

        .text {
            font-size: 20px;
            font-weight: 600;
        }

        .location {
            span {
                margin: 0 5px;
            }

            font-size: 14px;
        }

    }

    .main {
        margin-top: -30px;

        .main-bg {
            background-image: linear-gradient(#fff, #f5f5f5);
            padding: 10px 20px 0px 20px;
            border-radius: 30px 30px 0 0;

            .search {
                display: flex;
                width: 98%;
                border: 1px solid #ffc400;
                border-radius: 20px;
                height: 30px;

                input {
                    width: 100%;
                    border: none;
                    font-size: 14px;
                    font-weight: 400;
                    color: #454545;
                    background-color: transparent;
                }

                .search-text {
                    background-color: #ffc400;
                    border-radius: 16px;
                    width: 70px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    text-align: center;
                }

            }

            .sort {
                padding: 20px 0px;
                overflow-y: auto;

                .big-sort {
                    display: flex;

                    div {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column;

                        .icon {
                            width: 30px;
                            height: 30px;
                            margin-bottom: 5px;
                        }
                    }
                }

                .small-sort {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 20px;
                    font-size: 10px;

                    div {
                        display: flex;
                        justify-content: center;
                        flex-flow: column;
                        align-items: center;
                        width: 20%;

                        .icon {
                            width: 20px;
                            height: 20px;
                            margin: 10px;
                        }
                    }
                }
            }

            .tabs {
                height: 100%;
                overflow-y: auto;
                margin-bottom: 42px;
            }

        }
    }
}
</style>