<template>
    <div class="address">
        <Header title="地址管理"></Header>
        <van-address-list background-color="#ffc400" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { toRefs, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    name: 'Address',
    components: {
        Header
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const data = reactive({
            list: [],
        });
        const onAdd = (item) => {
            router.push({
                path: '/addressEdit',
                query: {
                    //id: item.id,
                    type: 'add',
                },
            });
        };
        const onEdit = (item) => {
            router.push({
                path: '/addressEdit',
                query: {
                    id: item.id,
                    type: 'edit'
                },
            });
        };
        const init = () => {
            data.list = store.state.userAddress.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    tel: item.tel,
                    address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
                    isDefault: item.isDefault,
                }
            });
        }
        onMounted(() => {
            init();
        })
        return {
            ...toRefs(data),
            onAdd,
            onEdit
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .van-button {
    background-color: #ffc400;
    border-color: #ffc400;
    position: fixed;
    bottom: 57px;
    margin: 0px auto;
    width: 90%;
}

/deep/ .van-switch {
    background-color: #ffc400;
}

/deep/ .van-radio__icon {
    display: none;
}

/deep/.van-tag--primary {
    background: red;
}
</style>