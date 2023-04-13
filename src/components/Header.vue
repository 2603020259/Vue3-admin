<template>
    <div class="header">
        <div @click="goRouter" style="width: 20px; height: 20px;">
            <van-icon name="arrow-left" class="icon" />
        </div>
        <div>{{ title }}</div>
        <div class="edit" v-if="edit" @click="changeEdit">{{store.state.isDelete ? '编辑' : '完成'}}</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { showToast } from 'vant';
export default {
    props: ['title', 'edit'],
    setup() {
        const store=useStore();
        const router = useRouter();
        const goRouter = function () {
            router.go(-1);
        };
        const changeEdit = () => {
           if(store.state.cartList.length){
             store.commit('CHANGEEDITS');
           }else{
            showToast('购物车空空如也！');
           }
        }
        return {
            goRouter,
            changeEdit,
            store
        }
    }

}
</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;
}

.edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
}

.icon {
    position: absolute;
    left: 10px;
}
</style>