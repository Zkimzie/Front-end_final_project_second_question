import Vue from "vue"
import App from "./app.vue"

Vue.config.productionTip =false;
App.mpType ="app"
const app =new Vue(app)
app.$mount()
