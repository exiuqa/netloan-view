import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/font/iconfont.css";
import IconFont from "_c/IconFont.vue";



Vue.config.productionTip = false;

Vue.component("IconFont",IconFont);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
