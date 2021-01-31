import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import params from './modules/params';

export const store = new Vuex.Store({
    modules: {
        params,
    },
    strict: process.env.NODE_ENV !== 'production'
});
