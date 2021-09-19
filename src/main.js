import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from "@/network/request";

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
  created() {
    request({
      url: "",
      method: "get",
      params: {
        indexpage: 1,
        pagesize: 10
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}).$mount('#app')
