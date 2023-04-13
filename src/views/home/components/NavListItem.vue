<template>
    <div class="item"  @click="stores(itemContent)">
        <div class="item-left">
            <img :src="require(`../../../assets/sp${itemContent.pic}.jpeg`)" style="width: 100%; height: 100%;">
        </div>
        <div class="item-right">
            <div class="title"> {{ itemContent.title }}</div>
            <div class="sales"><span>{{ itemContent.score }} 分</span> <p>月售:{{ itemContent.sale }}</p> 人均 :¥{{ itemContent.sales }}</div>
            <div class="takeOff"> 起送:¥{{ itemContent.takeOff }}&nbsp;&nbsp; 配送 约:¥{{ itemContent.delivery }}</div>
            <div class="minute">{{ itemContent.minute }}分钟&nbsp;&nbsp;{{ itemContent.dist }}km</div>
            <div class="label">
                <div v-for="(i, index) in itemContent.label" :key="index">
                    {{ i }}
                </div>
            </div>
            <div class="perf">
                <div v-for="(it,index) in itemContent.perf" :key="index" class="full">
                  {{ it }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
    name:'NavListItem',
    props: ['itemContent'],
    setup(){
        const store=useStore();
        const router=useRouter();
        const stores=function(x){
            router.push('/stores');
            store.commit('LOGIN',x);
            //console.log(x);
        }
        return{
            stores
        }
    }
}
</script>

<style lang="less" scoped>
.item{
    background-color: rgb(245, 245, 245);
    border-radius: 10px;
    display: flex;
    padding: 10px;
    margin: 10px 0px 10px 0px;
    border: 1px solid #ddd;
    .item-left{
        width: 100px;
        height: 100px;
        margin-right: 20px;
        margin-top: 12px;
        img{
            border-radius: 15px;
        }
    }
    .item-right{
            .title{
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 7px;
            }
            .sales{
                display: flex;
                align-items: center;
                height: 14px;
                margin-bottom: 4px;
                span{
                    display: inline-block;
                    color: red;
                    font-size: 14px;
                    font-weight: bold;
                    margin-right: 10px;
                }
                p{
                    margin-right: 10px;
                }
            }
            .label{
                margin-bottom: 5px;
                margin-top: 7px;
                display: flex;
                align-items: center;
                height: 14px;
                line-height: 14px;
                div{
                    background-color:#fbaf53;
                    opacity: 0.7;
                    height: 20px;
                    line-height: 20px;
                    padding: 0px 5px 0px 5px;
                    text-align: center;
                    margin-right: 10px;
                    border-radius: 5px;
                    color: #f85605;
                    font-size: 10px;
                } 
            }
            .perf{
                margin-top: 10px;
                display: flex;
                align-items: center;
                height: 14px;  
            }
            .full{
                border: 0.5px solid red;
                color: red;
                margin-right: 10px;
                border-radius: 5px;
                height: 15px;
                line-height: 15px;
                text-align: center;
                padding: 0px 5px 0px 5px;

            }
            .takeOff{
                margin-top: 5px;
                margin-bottom: 3px;
            }
        }
}
</style>