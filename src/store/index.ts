import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { Settings } from "@/types/Settings";
import userCfg from '@/config/user';

// @ts-ignore
Vue.use(Vuex);

const api = axios.create({
    baseURL: 'https://api.av100.ru/v3/',
    headers: {
        'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
        'X-User-Token': userCfg.userToken,
        'X-Device-OS': 'web'
    }
});


export default new Vuex.Store({
    state: {
        settings: new Settings()
    },
    actions: {
        async loadSettings({state}: any): Promise<void> {
            const action = `user/${userCfg.userID}`;
            const response = await api.get(action);
            if (response?.data) {
                state.settings.setup(response.data);
            }
        },

        async uploadSettings({state}: any): Promise<void> {
            const action = `user/${userCfg.userID}`;
            const response = await api.put(action, state.settings);
            if (response) {
                alert(`Status: ${response.statusText}`);
            }
        }
    }
});