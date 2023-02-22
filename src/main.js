import { createApp } from "vue";
import router from "./routes/router";
import "./style.css";
import App from "./App.vue";

//NOTE: instantiate pinia

const app = createApp(App);
app.use(router);
app.mount("#app");
