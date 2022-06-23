window.Vue = require('vue');
// Axios = require('axios');

// import Axios from "axios";
import Vue from "vue";
import App from "./components/App.vue";

const root = new Vue({
    el:"#root",
    render: h => h(App)
});