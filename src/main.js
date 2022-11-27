import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/700.css";

import "./assets/css/tailwind.css";
// import './assets/css/font.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
