<template>
    <div class="register">
        <div class="login-box">
            <div class="owl" id="owl">
                <div class="hand"></div>
                <div class="hand hand-r"></div>
                <div class="arms">
                    <div class="arm"></div>
                    <div class="arm arm-r"></div>
                </div>
            </div>
            <div class="input-box">
                <input type="text" placeholder="请输入账号" v-model="username">
                <input type="password" placeholder="请输入密码" id="password" v-model="password">
                <input type="password" placeholder="确认密码" id="passwords" v-model="passwords">
                <van-button :loading="loging" type="success" loading-text="请稍等..." @click="submit">注册</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import { reactive, toRefs } from 'vue';
import { showSuccessToast, showFailToast, showToast } from 'vant';
import { useRouter } from 'vue-router';
export default {
    name: 'Register',
    setup() {
        const router = useRouter();
        $(function () {
            $('#password,#passwords').focus(function () {
                // 密码框获得焦点，追加样式.password
                $('#owl').addClass('password');
                //$('.hand').css('diplay', 'none');
                //$('#owl').addClass('password');
            }).blur(function () {
                // 密码框失去焦点，移除样式.password
                $('#owl').removeClass('password');
                //$('#owl').removeClass('password');
            })
        });
        const submit = () => {
            if (data.username == '' || data.password == '' || data.passwords == '') {
                showFailToast('账号或密码不能为空');
            } else {
                if (data.password !== data.passwords) {
                    showToast('请输入正确的密码');
                } else {
                    data.loging=true;
                    localStorage.setItem('user', JSON.stringify(data.username));
                    localStorage.setItem('pass', JSON.stringify(data.password));
                    setTimeout(() => {
                        showSuccessToast('账号注册成功');
                        router.replace({ name: 'login' });
                    }, 2000)
                }
            }
            setTimeout(() => {
                data.password = '';
                data.passwords = '';
                data.username = '';
            }, 2000)
        }
        const data = reactive({
            username: '',
            password: '',
            passwords: '',
            loging:false,
        });
        return {
            ...toRefs(data),
            submit
        }
    }
}
</script>

<style scoped>
.register {
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg, #72d3bc, #ffc400);
    z-index: 999;
}

.login-box {
    /* 相对定位 */
    position: relative;
    width: 320px;
}

.input-box {
    /* 弹性布局 垂直排列 */
    display: flex;
    flex-direction: column;
}

.input-box input {
    height: 40px;
    border-radius: 3px;
    /* 缩进15像素 */
    text-indent: 15px;
    outline: none;
    border: none;
    margin-bottom: 15px;
    border: 1px solid #472d20;
    background-color: transparent;
    font-size: 14px;
}

.input-box input:focus {
    outline: 1px solid lightseagreen;
    border: none;
}

.input-box button {
    border: none;
    height: 45px;
    background-color: #f5cb419d;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    font-size: 15px;
    margin-bottom: 10px;
}

/* 接下来是猫头鹰的样式 */
.owl {
    width: 211px;
    height: 108px;
    /* 背景图片 */
    background: url("../../assets/owl-login.png") no-repeat;
    /* 绝对定位 */
    position: absolute;
    top: -100px;
    /* 水平居中 */
    left: 50%;
    transform: translateX(-50%);
}

.owl .hand {
    width: 34px;
    height: 34px;
    border-radius: 40px;
    background-color: #472d20;
    /* 绝对定位 */
    position: absolute;
    left: 12px;
    bottom: -8px;
    /* 沿Y轴缩放0.6倍（压扁） */
    transform: scaleY(0.6);
    /* 动画过渡 */
    transition: 0.3s ease-out;
}

.owl .hand.hand-r {
    left: 170px;
}

.owl.password .hand {
    transform: translateX(42px) translateY(-15px) scale(0.7);
}

.owl.password .hand.hand-r {
    transform: translateX(-42px) translateY(-15px) scale(0.7);
}

.owl .arms {
    position: absolute;
    top: 58px;
    width: 100%;
    height: 41px;
    overflow: hidden;
}

.owl .arms .arm {
    width: 40px;
    height: 65px;
    position: absolute;
    left: 20px;
    top: 40px;
    background: url("../../assets/owl-login-arm.png") no-repeat;
    transform: rotate(-20deg);
    transition: 0.3s ease-out;
}

.owl .arms .arm.arm-r {
    transform: rotate(20deg) scaleX(-1);
    left: 158px;
}

.owl.password .arms .arm {
    transform: translateY(-40px) translateX(40px);
}

.owl.password .arms .arm.arm-r {
    transform: translateY(-40px) translateX(-40px) scaleX(-1);
}
</style>