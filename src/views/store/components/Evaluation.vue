<template>
    <div class="evaluation">
        <div class="header">
            <div class="left">
                <span>4.8</span>
                <p>商家评分</p>
            </div>
            <div class="content">
                <p>口味<van-rate v-model="value" color="#ffc400" size="16" class="pin"></van-rate></p>
                <p>包装<van-rate v-model="value" color="#ffc400" size="16" class="pin"></van-rate></p>
                <p>商家<van-rate v-model="value" color="#ffc400" size="16" class="pin"></van-rate></p>
            </div>
            <div class="right">
                <span>5</span>
                <p>配送评分</p>
            </div>
        </div>
        <div style="border-bottom:10px solid hsla(0, 0%, 88%, 0.572);">
        <div class="btn">
            <van-button plain hairline type="success" color="#ffc400" size="small">全部(299)</van-button>
            <van-button plain hairline type="success" color="#aaa" size="small">有图评价(21)</van-button>
            <van-button plain hairline type="success" color="#aaa" size="small">好评(259)</van-button>
            <van-button plain hairline type="success" color="#aaa" size="small">差评(19)</van-button>
        </div>
    </div>
        <div class="evalue" v-for="(item,index) in 5" :key="index">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yonghutouxiang"></use>
            </svg>
            <div style="position: relative;">
                <span class="name">匿名用户</span>
                <van-rate v-model="value" color="#ffc400" size="15" class="rate"/>
                <div class="title">
                   欢迎来到星乐外卖,星乐产品嘎嘎好,欢迎兄弟姐妹来购物,超级降价,小伙伴们一起冲吧!!!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Evaluation',
    setup() {
        const value = ref(5);
        return { value };
    }
}
</script>

<style lang="less" scoped>
.evaluation {
    background: #fff;

    .header {
        display: flex;
        height: 120px;
        width: 100%;
        border: 10px solid hsla(0, 0%, 88%, 0.572);
        border-left: none;
        border-right: none;

        .left {
            width: 25%;
            height: 120px;
            font-size: 16px;
            color: #6f6e6e;
            line-height: 120px;
            text-align: center;
            position: relative;

            span {
                position: absolute;
                top: -10px;
                left: 16px;
                font-size: 40px;
                color: #ffc400;
            }

            p {
                position: absolute;
                top: 5px;
                left: 18px;
            }
        }

        .content {
            width: 50%;
            height: 120px;
            font-size: 15px;

            p {
                margin-left: 20px;

                .pin {
                    margin-left: 25px;
                }
            }
        }

        .right {
            width: 25%;
            height: 100px;
            font-size: 16px;
            color: #6f6e6e;
            line-height: 110px;
            text-align: center;
            position: relative;
            border-left: 1px solid #ccc;
            margin-top: 10px;

            span {
                position: absolute;
                top: -15px;
                right: 35px;
                font-size: 40px;
                color: #c4c4c4;
            }

            p {
                position: absolute;
                top: 0px;
                left: 15px;
            }
        }
    }

    .btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        margin: 10px auto;
       // border-bottom:10px solid hsla(0, 0%, 88%, 0.572);
    }

    .evalue {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #ccc;
        //border-top:10px solid hsla(0, 0%, 88%, 0.572);

        .icon {
            width: 60px;
            height: 60px;
            color: #ccc;
            opacity: 0.5;
            margin: 0px 10px 0px 10px;
        }
        .name{
            display: inline-block;
            color: #6f6e6e;
            font-size: 20px;
            position: absolute;
            //left: 70px;
            top: 30px;
        }
       .rate{
        margin-left: 60px;
        margin-top: -20px;
        position: absolute;
        top: 56px;
        left: 70px;

       } 
       .title{
        width: 100%;
        font-size: 12px;
        color: #6f6e6e;
        margin-top: 60px;
        margin-bottom: 6px;
       }
    }
}
</style>