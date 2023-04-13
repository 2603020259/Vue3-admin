<template>
    <div class="userinfoedit">
        <Header title="账号管理"></Header>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="名称" placeholder="请输入名称" :rules="[{ required: true, message: '请填写名称' }]" />
            <van-field v-model="sign" name="个性签名" placeholder="请输入个性签名" disabled />
            <van-field v-model="password" name="密码" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="primary" @click="logDown">
                    登出
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, onMounted } from 'vue';
import { showToast, showSuccessToast, showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router'
export default {
    name: 'userInfoEdit',
    components: {
        Header
    },
    setup() {
        const router = useRouter();
        const data = reactive({
            username: '',
            password: '',
            sign: '风停吾则会停,但是风不会停'
        });
        const onSubmit = () => {
            localStorage.setItem('user', JSON.stringify(data.username));
            localStorage.setItem('pass', JSON.stringify(data.password));
            showToast('信息修改成功');
        };
        const logDown = () => {
            showConfirmDialog({
                title: '提示',
                message:
                    '是否确认退出。',
            })
                .then(() => {
                    router.replace({ path: '/login' });
                    showSuccessToast('登出成功');
                })
                .catch(() => {
                    showToast('操作取消成功');
                });
        }
        const init = () => {
            data.username = JSON.parse(localStorage.getItem('user')) || '';
            data.password = JSON.parse(localStorage.getItem('pass')) || '';
        }
        onMounted(() => {
            init();
        })
        return {
            ...toRefs(data),
            onSubmit,
            logDown
        }
    },

}
</script>
<style scoped lang="less">
/deep/ .van-button {
    background-color: #ffc400;
    border-color: #ffc400;
}

.save-btn {
    width: 80%;
    margin: 20px auto;
}
</style>