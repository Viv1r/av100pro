import Vue from 'vue';
import Vuex from 'vuex';
import axios, {AxiosHeaders} from 'axios';
import { Settings } from "@/types/Settings";
import userCfg from '@/config/user';

// @ts-ignore
Vue.use(Vuex);

const api = axios.create({
    baseURL: 'api/',
    headers: {
        'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
        'X-Device-OS': 'web'
    }
});


export default new Vuex.Store({
    state: {
        settings: new Settings(),
        userID: '',
        userToken: ''
    },
    mutations: {
        auth(state, {id, token}: any): void {
            state.userID = id;
            state.userToken = token;
            console.log(state);
        }
    },
    actions: {
        async login({commit}: any): Promise<void> {
            const action = `login`;
            const response: any = await api.post(action, userCfg);
            const data = response?.data;
            if (data) {
                commit('auth', { token: data.token, id: data.user.id })
            } else {
                alert('Авторизация не удалась!');
            }
        },

        async loadSettings({state}: any): Promise<void> {
            const action = `user/${state.userID}`;
            const headers = { 'X-User-Token': state.userToken } as unknown as AxiosHeaders;
            const response = await api.get(action, { headers: headers });
            if (response?.data) {
                state.settings.setup(response.data);
            }
        },

        async uploadSettings({state}: any): Promise<void> {
            const action = `user/${state.userID}`;
            const headers = { 'X-User-Token': state.userToken } as unknown as AxiosHeaders;
            const response = await api.put(action, state.settings, { headers: headers });
            if (response) {
                alert(`Статус: ${response.statusText}`);
            }
        }
    }
});