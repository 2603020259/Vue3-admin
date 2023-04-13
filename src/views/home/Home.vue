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
        <van-back-top style="bottom: 150px;"/>
    </div>
</template>

<script>
import { reactive, toRefs, ref,onMounted } from 'vue';
import NavList from './components/NavList.vue';
import { useRouter } from 'vue-router'
export default {
    name: 'Home',
    components: {
        NavList,
    },
    setup() {
        const active = ref(0);
        let data = reactive({
            big_sort: [
                {
                    name: '美食',
                    icon: 'icon-meishi'
                },
                {
                    name: '甜点饮品',
                    icon: 'icon-tiandianmianbaodangaoshuiguotiandian'
                },
                {
                    name: '超市代购',
                    icon: 'icon-chaoshigouwu'
                },
                {
                    name: '生鲜果蔬',
                    icon: 'icon-shinshopshengxianguoshu'
                },
                {
                    name: '医药',
                    icon: 'icon-yiyao'
                },
            ],
            small_sort: [
                {
                    name: '午餐',
                    icon: 'icon-wucan'
                },
                {
                    name: '买酒',
                    icon: 'icon-jiu'
                },
                {
                    name: '新鲜水果',
                    icon: 'icon-shuiguo'
                },
                {
                    name: '汉堡披萨',
                    icon: 'icon-hanbao'
                },
                {
                    name: '休闲饮品',
                    icon: 'icon-yinpin'
                },
                {
                    name: '夜宵',
                    icon: 'icon-yexiao'
                },
                {
                    name: '吐司',
                    icon: 'icon-tusi'
                },
                {
                    name: '跑腿',
                    icon: 'icon-paotuiAPP'
                },
                {
                    name: '美人佳丽',
                    icon: 'icon-kouhong'
                },
                {
                    name: '全部分类',
                    icon: 'icon-quanbufenlei'
                },
            ],
            content_nav_list: [
                {
                    tab: '天天神券',
                    data: [
                        {
                            pic: 1,
                            title: '奶油蛋糕',
                            sales: 288,
                            score: 4.9,
                            sale: '5000+',
                            takeOff: 20,
                            delivery: 25,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 60,
                            dist: 6.8,
                            label: ['门店上新', '好评很多'],
                            storeData: [
                                {
                                    name: "点菜",
                                    data: {
                                        content: "点菜",
                                        items: [
                                            {
                                                text: "热销套餐",
                                                children: [
                                                    {
                                                        pic: 'dg1',
                                                        title: "雪白南瓜桶蛋糕",
                                                        num: 0,
                                                        price: 225.0,
                                                        id: 0,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'dg2',
                                                        title: "金丝草帽蛋糕",
                                                        num: 0,
                                                        price: 465.0,
                                                        id: 1,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'dg3',
                                                        title: "巧克奥利奥蛋糕",
                                                        num: 0,
                                                        price: 265.0,
                                                        id: 2,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'dg4',
                                                        title: "棕色车厘子蛋糕",
                                                        num: 0,
                                                        price: 355.0,
                                                        id: 3,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                            {
                                                text: "超级折扣",
                                                children: [
                                                    {
                                                        pic: 'dg5',
                                                        title: "抹茶奶绿蛋糕",
                                                        num: 0,
                                                        price: 625.0,
                                                        id: 4,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'dg6',
                                                        title: "玫瑰花篮蛋糕",
                                                        num: 0,
                                                        price: 225.0,
                                                        id: 5,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'dg7',
                                                        title: "儿童乐园蛋糕",
                                                        num: 0,
                                                        price: 385.0,
                                                        id: 6,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'dg8',
                                                        title: "巧克雪花车厘子蛋糕",
                                                        num: 0,
                                                        price: 765.0,
                                                        id: 7,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    name: "评价",
                                    data: {
                                        content: "评价",
                                    },
                                },
                                {
                                    name: "商家",
                                    data: {
                                        content: "商家",
                                    },
                                },
                            ],
                        },
                        {
                            pic: 2,
                            title: '酸菜鱼',
                            sales: 98,
                            score: 4.7,
                            sale: '3000+',
                            takeOff: 20,
                            delivery: 25,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 50,
                            dist: 5.8,
                            label: ['符合口味', '包装很好'],
                            storeData: [
                                {
                                    name: "点菜",
                                    data: {
                                        content: "点菜",
                                        items: [
                                            {
                                                text: "热销套餐",
                                                children: [
                                                    {
                                                        pic: 'scy1',
                                                        title: "招牌酸菜鱼",
                                                        num: 0,
                                                        price: 125.0,
                                                        id: 0,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'scy2',
                                                        title: "金汤酸菜鱼",
                                                        num: 0,
                                                        price: 165.0,
                                                        id: 1,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                            {
                                                text: "超级折扣",
                                                children: [
                                                    {
                                                        pic: 'scy3',
                                                        title: "原味酸菜鱼",
                                                        num: 0,
                                                        price: 95.0,
                                                        id: 4,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'scy4',
                                                        title: "铁锅酸菜鱼",
                                                        num: 0,
                                                        price: 285.0,
                                                        id: 5,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    name: "评价",
                                    data: {
                                        content: "评价",
                                    },
                                },
                                {
                                    name: "商家",
                                    data: {
                                        content: "商家",
                                    },
                                },
                            ],
                        },
                        {
                            pic: 3,
                            title: '麻辣小龙虾',
                            sales: 168,
                            score: 5.0,
                            sale: '2000+',
                            takeOff: 20,
                            delivery: 25,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 60,
                            dist: 6.8,
                            label: ['火辣小龙虾', '好吃放不下'],
                            storeData: [
                                {
                                    name: "点菜",
                                    data: {
                                        content: "点菜",
                                        items: [
                                            {
                                                text: "热销套餐",
                                                children: [
                                                    {
                                                        pic: 'lx1',
                                                        title: "招牌龙虾",
                                                        num: 0,
                                                        price: 95.0,
                                                        id: 0,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'lx2',
                                                        title: "青丝龙虾",
                                                        num: 0,
                                                        price: 265.0,
                                                        id: 1,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'lx3',
                                                        title: "雪花龙虾",
                                                        num: 0,
                                                        price: 165.0,
                                                        id: 2,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                            {
                                                text: "超级折扣",
                                                children: [
                                                    {
                                                        pic: 'lx4',
                                                        title: "特色龙虾",
                                                        num: 0,
                                                        price: 125.0,
                                                        id: 4,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'lx5',
                                                        title: "麻辣龙虾",
                                                        num: 0,
                                                        price: 85.0,
                                                        id: 5,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'lx6',
                                                        title: "蒜蓉龙虾",
                                                        num: 0,
                                                        price: 285.0,
                                                        id: 6,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    name: "评价",
                                    data: {
                                        content: "评价",
                                    },
                                },
                                {
                                    name: "商家",
                                    data: {
                                        content: "商家",
                                    },
                                },
                            ],
                        },
                        {
                            pic: 4,
                            title: '黄焖鸡',
                            sales: 28,
                            score: 5.0,
                            sale: '2000+',
                            takeOff: 20,
                            delivery: 25,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 60,
                            dist: 6.8,
                            label: ['点评收录4年', '态度极好'],
                            storeData: [
                                {
                                    name: "点菜",
                                    data: {
                                        content: "点菜",
                                        items: [
                                            {
                                                text: "热销套餐",
                                                children: [
                                                    {
                                                        pic: 'hmj1',
                                                        title: "招牌黄焖鸡",
                                                        num: 0,
                                                        price: 25.0,
                                                        id: 0,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'hmj2',
                                                        title: "特色黄焖鸡",
                                                        num: 0,
                                                        price: 65.0,
                                                        id: 1,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'hmj3',
                                                        title: "微辣黄焖鸡",
                                                        num: 0,
                                                        price: 45.0,
                                                        id: 2,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'hmj4',
                                                        title: "香鸡煲",
                                                        num: 0,
                                                        price: 95.0,
                                                        id: 3,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                            {
                                                text: "超级折扣",
                                                children: [
                                                    {
                                                        pic: 'hmj5',
                                                        title: "浓汁黄焖鸡",
                                                        num: 0,
                                                        price: 70.0,
                                                        id: 4,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'hmj6',
                                                        title: "铁锅黄焖鸡",
                                                        num: 0,
                                                        price: 125.0,
                                                        id: 5,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'hmj7',
                                                        title: "手抄黄焖鸡",
                                                        num: 0,
                                                        price: 185.0,
                                                        id: 6,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'hmj8',
                                                        title: "谷色黄焖鸡",
                                                        num: 0,
                                                        price: 99.0,
                                                        id: 7,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    name: "评价",
                                    data: {
                                        content: "评价",
                                    },
                                },
                                {
                                    name: "商家",
                                    data: {
                                        content: "商家",
                                    },
                                },
                            ],
                        },
                        {
                            pic: 5,
                            title: '星巴克',
                            sales: 38,
                            score: 5.0,
                            sale: '2000+',
                            takeOff: 20,
                            delivery: 25,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 60,
                            dist: 6.8,
                            label: ['送货快', '味道极佳'],
                            storeData: [
                                {
                                    name: "点菜",
                                    data: {
                                        content: "点菜",
                                        items: [
                                            {
                                                text: "热销套餐",
                                                children: [
                                                    {
                                                        pic: 'xbk1',
                                                        title: "摩卡星冰乐",
                                                        num: 0,
                                                        price: 33.0,
                                                        id: 0,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'xbk2',
                                                        title: "巧克力风味星冰乐",
                                                        num: 0,
                                                        price: 31.0,
                                                        id: 1,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'xbk3',
                                                        title: "芒果西番莲果茶星冰乐",
                                                        num: 0,
                                                        price: 40.0,
                                                        id: 2,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'xbk4',
                                                        title: "香草星冰乐",
                                                        num: 0,
                                                        price: 35.0,
                                                        id: 3,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                            {
                                                text: "超级折扣",
                                                children: [
                                                    {
                                                        pic: 'xbk5',
                                                        title: "抹茶星冰乐",
                                                        num: 0,
                                                        price: 38.0,
                                                        id: 4,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'xbk6',
                                                        title: "冰摇柠檬茶",
                                                        num: 0,
                                                        price: 40.0,
                                                        id: 5,
                                                        add: true,
                                                    },
                                                    {
                                                        pic:'xbk7',
                                                        title: "冰摇红莓黑加仑",
                                                        num: 0,
                                                        price: 45.0,
                                                        id: 6,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'xbk8',
                                                        title: "冰摇桃桃乌龙茶",
                                                        num: 0,
                                                        price: 65.0,
                                                        id: 7,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    name: "评价",
                                    data: {
                                        content: "评价",
                                    },
                                },
                                {
                                    name: "商家",
                                    data: {
                                        content: "商家",
                                    },
                                },
                            ],
                        },
                        {
                            pic: 6,
                            title: '酸菜鱼',
                            sales: 68,
                            score: 5.0,
                            sale: '2000+',
                            takeOff: 20,
                            delivery: 25,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 60,
                            dist: 6.8,
                            label: ['近期2000+人下单', '包装精美'],
                            storeData: [
                                {
                                    name: "点菜",
                                    data: {
                                        content: "点菜",
                                        items: [
                                            {
                                                text: "热销套餐",
                                                children: [
                                                    {
                                                        pic: 'scy1',
                                                        title: "招牌酸菜鱼",
                                                        num: 0,
                                                        price: 125.0,
                                                        id: 0,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'scy2',
                                                        title: "金汤酸菜鱼",
                                                        num: 0,
                                                        price: 165.0,
                                                        id: 1,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                            {
                                                text: "超级折扣",
                                                children: [
                                                    {
                                                        pic: 'scy3',
                                                        title: "原味酸菜鱼",
                                                        num: 0,
                                                        price: 95.0,
                                                        id: 4,
                                                        add: true,
                                                    },
                                                    {
                                                        pic: 'scy4',
                                                        title: "铁锅酸菜鱼",
                                                        num: 0,
                                                        price: 285.0,
                                                        id: 5,
                                                        add: true,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    name: "评价",
                                    data: {
                                        content: "评价",
                                    },
                                },
                                {
                                    name: "商家",
                                    data: {
                                        content: "商家",
                                    },
                                },
                            ],
                        },
                    ]
                },
                {
                    tab: '减配送费',
                    data: [
                        {
                            pic: 2,
                            title: '酸菜鱼',
                            sales: 98,
                            score: 4.9,
                            sale: '5000+',
                            takeOff: 60,
                            delivery: 35,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 100,
                            dist: 9.8,
                            label: ['符合口味', '包装很好'],
                        },
                        {
                            pic: 3,
                            title: '麻辣小龙虾',
                            sales: 168,
                            score: 5.0,
                            sale: '5000+',
                            takeOff: 130,
                            delivery: 85,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 60,
                            dist: 6.8,
                            label: ['火辣小龙虾', '好吃放不下'],
                        },
                        {
                            pic: 4,
                            title: '黄焖鸡',
                            sales: 28,
                            score: 4.8,
                            sale: '2300+',
                            takeOff: 20,
                            delivery: 25,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 130,
                            dist: 9.8,
                            label: ['点评收录4年', '态度极好'],
                        },
                    ]
                },
                {
                    tab: '点评高分',
                    data: [
                        {
                            pic: 1,
                            title: '奶油蛋糕',
                            sales: 288,
                            score: 4.8,
                            sale: '2400+',
                            takeOff: 23,
                            delivery: 27,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 40,
                            dist: 5.8,
                            label: ['门店上新', '好评很多'],
                        },
                        {
                            pic: 3,
                            title: '麻辣小龙虾',
                            sales: 168,
                            score: 5.0,
                            sale: '6000+',
                            takeOff: 40,
                            delivery: 45,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 60,
                            dist: 6.8,
                            label: ['火辣小龙虾', '好吃放不下'],
                        },
                        {
                            pic: 4,
                            title: '黄焖鸡',
                            sales: 28,
                            score: 4.7,
                            sale: '2800+',
                            takeOff: 30,
                            delivery: 55,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 30,
                            dist: 2.8,
                            label: ['点评收录4年', '态度极好'],
                        },
                        {
                            pic: 5,
                            title: '星巴克',
                            sales: 38,
                            score: 5.0,
                            sale: '7000+',
                            takeOff: 30,
                            delivery: 65,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 20,
                            dist: 2.8,
                            label: ['送货快', '味道极佳'],
                        },
                    ]
                },
                {
                    tab: '会员满减',
                    data: [
                        {
                            pic: 5,
                            title: '星巴克',
                            sales: 38,
                            score: 4.9,
                            sale: '3000+',
                            takeOff: 50,
                            delivery: 35,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 50,
                            dist: 4.8,
                            label: ['送货快', '味道极佳'],
                        },
                        {
                            pic: 3,
                            title: '麻辣小龙虾',
                            sales: 168,
                            score: 4.9,
                            sale: '5000+',
                            takeOff: 50,
                            delivery: 65,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 40,
                            dist: 3.8,
                            label: ['火辣小龙虾', '好吃放不下'],
                        },
                        {
                            pic: 4,
                            title: '黄焖鸡',
                            sales: 28,
                            score: 5.0,
                            sale: '6000+',
                            takeOff: 30,
                            delivery: 15,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 120,
                            dist: 8.8,
                            label: ['点评收录4年', '态度极好'],
                        },
                        {
                            pic: 1,
                            title: '奶油蛋糕',
                            sales: 288,
                            score: 5.0,
                            sale: '2300+',
                            takeOff: 26,
                            delivery: 28,
                            perf: ['30减7 | 60减18', '新客减20'],
                            minute: 110,
                            dist: 9.8,
                            label: ['门店上新', '好评很多'],
                        },
                    ]
                }
            ],
            user:''
        })
        const router=useRouter();
        const change=()=>{
          router.push({path:'/userinfoedit'});
        };
        const init=()=>{
            data.user=JSON.parse(localStorage.getItem('user')) ||'admin';
        };
        onMounted(()=>{
            init();
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