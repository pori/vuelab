import Vue from "vue";
import App from "./App.vue";
import router from "./router";

if (LAB_CONFIG) {
  require(LAB_CONFIG).default(Vue);
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
