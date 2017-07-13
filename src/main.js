import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)


import firstc from './component/firstcomp.vue'
import secondc from './component/secondcomp.vue'
import thirdc from './component/thirdcomp.vue'


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstc
    },
    {
      path: '/second',
      component: secondc
    },
    {
      path: '/third',
      component: thirdc
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')


Date.prototype.format =function(format){
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(), //day
    "h+" : this.getHours(), //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds() //second
  };
  if(/(y+)/.test(format)){
    format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
  };
  for(var k in o){
    if(new RegExp("("+ k +")").test(format)){
      format = format.replace(RegExp.$1, RegExp.$1.length==1? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    };
  };
  return format;
}