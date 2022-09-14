<template>
  <f7-app v-bind="f7params">
    <f7-statusbar>
      <div class="statusbar"></div>
    </f7-statusbar>
    <!-- Left panel with cover effect-->
    

    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" :push-state="true" push-state-separator="" :reloadPages="true">
      <!-- Bottom Navigation -->
      <div class="toolbar tabbar-labels toolbar-bottom">
        <div class="toolbar-inner">
          <a href="#" class="tab-link">
            <i class="fas fa-route fa-2x"></i>
            <!-- <i class="icon material-icons md-only">email</i> -->
          </a>
          <a href="/invoice/" class="tab-link">
            <i class="fas fa-dolly-flatbed fa-2x"></i>
            <!-- <i class="icon material-icons md-only">today<span class="badge color-red">5</span></i> -->
          </a>
          <a href="/home/" class="tab-link">
            <i class="fas fa-home fa-2x"></i>
            <!-- <i class="icon material-icons md-only">file_upload</i> -->
          </a>
          <a href="#" class="tab-link">
            <i class="fas fa-map-marked-alt fa-2x"></i>
            <!-- <i class="icon material-icons md-only">today<span class="badge color-red">5</span></i> -->
          </a>
          <a href="#" class="tab-link">
            <i class="fas fa-file-invoice-dollar fa-2x"></i>
            <!-- <i class="icon material-icons md-only">today<span class="badge color-red">5</span></i> -->
          </a>
        </div>
      </div>
    </f7-view>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input type="text" name="username" placeholder="Your username" v-model:value="username"></f7-list-input>
            <f7-list-input type="password" name="password" placeholder="Your password" v-model:value="password"></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" @click="alertLoginData"></f7-list-button>
            <f7-block-footer> Some text about login information.<br />Click "Sign In" to close Login Screen </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";
import { getDevice } from "framework7/lite-bundle";
import cordovaApp from "../js/cordova-app.js";

import routes from "../js/routes.js";
import store from "../js/store";

export default {
  setup() {
    const device = getDevice();
    // Framework7 Parameters
    const f7params = {
      name: "My App", // App name
      theme: "auto", // Automatic theme detection

      id: "io.framework7.myapp", // App bundle ID
      // App store
      store: store,
      // App routes
      routes: routes,

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova && !device.electron,
        scrollIntoViewCentered: device.cordova && !device.electron,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
    };
    // Login screen data
    const username = ref("");
    const password = ref("");

    const alertLoginData = () => {
      f7.dialog.alert("Username: " + username.value + "<br>Password: " + password.value, () => {
        f7.loginScreen.close();
      });
    };
    onMounted(() => {
      f7ready(() => {
        // Init cordova APIs (see cordova-app.js)
        if (device.cordova) {
          cordovaApp.init(f7);
        }

        // Call F7 APIs here
      });
    });

    return {
      f7params,
      username,
      password,
      alertLoginData,
    };
  },
};
</script>
