import { createRouter, createWebHashHistory } from 'vue-router';
import { showToast } from 'vant';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/home/Home.vue'),
            meta: { title: '首页' },
        },
        {
            path: '/home',
            component: () => import('../views/home/Home.vue'),
            meta: { title: '首页' },
        },
        {
            path: '/cart',
            component: () => import('../views/cart/Cart.vue'),
            meta: { isAuth: true, title: '购物车' }
        },
        {
            path: '/mine',
            component: () => import('../views/mine/Mine.vue'),
            meta: { isAuth: true, title: '我的' }
        },
        {
            path: '/order',
            component: () => import('../views/order/Order.vue'),
            meta: { isAuth: true, title: '订单' }
        },
        {
            path: '/stores',
            component: () => import('../views/store/Store.vue'),
            name: 'stores',
            meta: { title: '商店' }
        },
        {
            path: '/createorder',
            component: () => import('../views/createOrder/createOrder.vue'),
            name: 'createorder',
            meta: { isAuth: true, title: '订单' }
        },
        {
            path: '/address',
            component: () => import('../views/address/Address.vue'),
            name: 'address',
            meta: { isAuth: true, title: '地址' }
        },
        {
            path: '/addressedit',
            component: () => import('../views/addressedit/addressEdit.vue'),
            name: 'addressedit',
            meta: { isAuth: true, title: '添加地址' }
        },
        {
            path: '/userinfoedit',
            component: () => import('../views/userinfoedit/userInfoEdit.vue'),
            name: 'userinfoedit',
            meta: { isAuth: true, title: '账号管理' }
        },
        {
            path: '/login',
            component: () => import('../views/login/Login.vue'),
            name: 'login',
            meta: { title: '登陆' }
        },
        {
            path: '/register',
            component: () => import('../views/register/Register.vue'),
            name: 'register',
            meta: { title: '注册' }
        },
        {
            path: '/error',
            component: () => import('../views/404/Errer.vue'),
            name: 'error',
        },
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('Login') === 'login') {
            next();
        } else {
            showToast('请登录账号');
            next('/login');
        }
    } else {
        next();
    }
});
router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = '星乐外卖';
    }
})
export default router;