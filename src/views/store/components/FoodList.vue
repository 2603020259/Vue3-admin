<template>
    <div class="foodList" v-if="index === 0">
        <van-tree-select v-model:main-active-index="activeIndex" height="88vw" :items="items" @click-nav="navClick">
            <template #content>
                <div v-for="(item, index) in subItem" class="item-bg ">
                    <FoodListItem :item="item" :handleAdd="handleAdd" :handleChange="handleChange"></FoodListItem>
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>
        <Evaluation v-if="foodData.content==='评价'"></Evaluation>
        <Busines v-if="foodData.content==='商家'"></Busines>
    </div>
    
</template>

<script>
import { reactive, toRefs } from 'vue';
import FoodListItem from './FoodListItem.vue';
import Evaluation from './Evaluation.vue';
import Busines from './Busines.vue';
export default {
    props: ['index', 'foodData'],
    components: {
    FoodListItem,
    Evaluation,
    Busines,
},
    setup(props) {
        const data = reactive({
            activeIndex: 0,
            items: [{ text: '分组 1' }, { text: '分组 2' }],

        });
        const initData = () => {
            let newArry = [];
            props.foodData?.items?.forEach((item, index) => {
                newArry.push({
                    text: item.text
                });
                if (data.activeIndex === index) {
                    data.subItem = item.children;
                }
            })
            data.items = newArry;
        }
        const navClick = (i) => {
            data.activeIndex = i;
            initData();
        }
        const handleAdd = (id) => {
            data.subItem.forEach((item, index) => {
                if (item.id === id) {
                    item.add = false;
                    item.num += 1;
                }
            })
        }
        const handleChange = (value, detail) => {
            data.subItem.forEach((item) => {
                if (item.id === detail.name) {
                    item.num = value;
                }
            });
        }
        initData();
        return {
            ...toRefs(data),
            navClick,
            handleAdd,
            handleChange
        }
    }
}
</script>

<style lang="less" scoped>
.foodList {

    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }

    /deep/ .van-tree-select__item--active {
        color: #ffc400;
    }

    /deep/ .van-sidebar-item--select::before {
        background-color: #ffc400;
    }

    /deep/.van-sidebar-item--select:before {
        background-color: #ffc400;
    }
}</style>