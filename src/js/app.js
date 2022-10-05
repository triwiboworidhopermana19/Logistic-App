// Import Vue
import { createApp } from "vue";

// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Dom7
import $$ from "dom7";

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from "framework7-vue/bundle";

// Import Framework7 Styles
import "framework7/css/bundle";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.css";
import "../css/main.scss";
// import "../fontawesome-free/css/all.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

// Import App Component
import App from "../components/app.vue";

// import axios from 'axios';
import axios from "axios";
import VueAxios from "vue-axios";

import VueSweetalert2 from "vue-sweetalert2";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

// import router from './router';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

window.$$ = $$;

window.axios = axios;

// Theme
var theme = "md";
if (document.location.search.indexOf("theme=") >= 0) {
  theme = document.location.search.split("theme=")[1].split("&")[0];
}
// Preloader
setTimeout(function () {
  $$(".loader-screen").hide();
}, 2000);

// Init App
const app = createApp(App);

app.use(VueAxios, axios);
app.use(VueSweetalert2);

// Vue.config.productionTip = false;
// Vue.filter('formatDate', function (value) {
//   if (value) {
//     return moment(String(value)).format('MM/DD/YYYY hh:mm');
//   }
// });
// app.use(router);

// Tambah request interceptor untuk ongoing request
axios.interceptors.request.use(
  function (config) {
    // Ambil token
    const token = localStorage.getItem("token");

    // Jika access token ada, set authorization header tiap request
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.mount("#app");
