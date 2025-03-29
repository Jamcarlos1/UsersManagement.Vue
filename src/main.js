import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faUserPlus,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faUserPlus, faChartPie);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

createApp(App).mount("#app");
