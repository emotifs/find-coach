import {createApp} from "vue";
import router from "./router";
import App from "./App";
import store from "./store/index";
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import BaseBadge from "@/components/UI/BaseBadge";
import baseBadge from "@/components/UI/BaseBadge";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("baseCard", BaseCard);
app.component("baseButton", BaseButton);
app.component('baseBadge', baseBadge);

app.mount("#app");
