// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueResource from "vue-resource";
import vueRouter from "vue-router";
import Routes from "./routes";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  routes: Routes,
  mode: "history"
});
export const bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
