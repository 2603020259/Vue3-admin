
import { createStore } from 'vuex';
export default createStore({
  actions: {

  },
  mutations: {
    ADDLIST(state, value) {
      state.cartList = value;
      //console.log(5,value);
      localStorage.setItem('cart', JSON.stringify(value));
    },
    LOGIN(state, value) {
      //console.log(111,value);
      state.store = value;
      sessionStorage.setItem('store', JSON.stringify(value));
    },
    CHANGEEDITS(state) {
      state.isDelete = !state.isDelete;
      //console.log(1111,state.isDelete);
    },
    DELETEDATA(state, value) {
      //console.log(22222,value);
      state.cartList = value;
      localStorage.setItem('cart', JSON.stringify(value));
    },
    PAY(state, value) {
      state.orderList = value;
    },
    ORDERLISTEND(state) {
      state.orderListEnd = state.orderListEnd.concat(state.orderList);
    },
    PAYALL(state, value) {
      state.orderListEnd = value;
    },
    ADDADDRESS(state, value) {
      //console.log(2222,value)
      state.userAddress.forEach((item) => {
        if (value.isDefault) {
          item.isDefault = false;
        }
      });
      state.userAddress.push(value);
    },
    EDITADDRESS(state, value) {
      state.userAddress = state.userAddress.map((item) => {
        if (value.isDefault) {
          item.isDefault = false;
        }
        if (item.id === value.id) {
          return value
        } else {
          return item
        }
      });
    },
    DELETEADDRESS(state,value){
    state.userAddress=state.userAddress.filter((item)=>{
      return (item.id===value.id);
     });
     if(value.isDefault){
      state.userAddress[0].isDefault=true;
     }
    }
  },
  state: {
    cartList: JSON.parse(localStorage.getItem('cart')) || [],  //购物数据
    store: JSON.parse(sessionStorage.getItem('store')) || {},  //商店书库
    isDelete: true, //是否显示结算和删除购物车数据，默认结算显示
    orderList: [], //订单数据
    userAddress: [
      {
        id: 1001,
        name: 'admin',
        tel: '15874859686',
        province: '广东省',
        city: '深圳市',
        county: '南山区',
        addressDetail: '深圳湾',
        isDefault: true,
        areaCode: '110101',
      },
      {
        id: 1002,
        name: 'allen',
        tel: '15874859685',
        province: '湖北省',
        city: '武汉市',
        county: '武昌区',
        addressDetail: '黄鹤楼',
        isDefault: false,
        areaCode: '110101',
      },
    ], //用户地址数据
    orderListEnd: [] //付款订单数据
  }
});
