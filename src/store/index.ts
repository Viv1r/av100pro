import Vue from 'vue';
import Vuex from 'vuex';

// @ts-ignore
Vue.use(Vuex);

import { Store } from 'vuex';
import { Settings } from "@/types/Settings";

export default new Store({
    state: {
        settings: new Settings()
    }
})