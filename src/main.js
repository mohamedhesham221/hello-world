import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./scss/main.scss";
import "./filters/filter";
import "./directives/directives"

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
