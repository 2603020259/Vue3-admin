<template>
    <div class="addresss">
        <Header :title="address"></Header>
        <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result :address-info="addressInfo"
            :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { showToast } from 'vant';
export default {
    name: 'addressEdit',
    components: {
        Header
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const router = useRouter();
        const data = reactive({
            areaList: {
                province_list: {
                    110000: "广东省",
                    120000: "浙江省",
                },
                city_list: {
                    110100: "广州市",
                    110200: "深圳市",
                    120100: "杭州市",
                    120200: "宁波市",
                },
                county_list: {
                    110101: "天河区",
                    110102: "海珠区",
                    120102: "上城区",
                    130102: "下城区",
                }
            },
            addressInfo: {},
        });
        const onDelete = (content) => {
            store.commit('DELETEADDRESS', content);
            showToast('删除成功');
            setTimeout(() => {
                router.back();
            }, 1000)
        };
        const onSave = (content) => {
            if (route.query.type === 'add') {
                store.commit('ADDADDRESS', content);
                //console.log(5);
            } else {
                store.commit('EDITADDRESS', content);
                //console.log(6);
            }
            showToast('保存成功');
            setTimeout(() => {
                router.back();
            }, 1000)
        }
        const init = () => {
            store.state.userAddress.forEach((item) => {
                if (item.id === Number(route.query.id)) {
                    data.addressInfo = item;
                }
            });
        };
        const address = computed(() => {
            return route.query.type === 'add' ? '添加地址' : '编辑地址';
        })
        onMounted(() => {
            init();
        })
        return {
            ...toRefs(data),
            onDelete,
            onSave,
            address
        }
    }
}
</script>

<style lang="less" scoped></style>