import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";

import Harf from "@/components/Harf";

Vue.component("harf", Harf);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
