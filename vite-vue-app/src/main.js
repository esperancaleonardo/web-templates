import { createApp } from "vue";
import App from "./views/pages/App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.mount("#app");
