export default {
    namespaced: true,
    state: {
        params: {},
        kit: {}
    },
    getters: {
        params(state) {
            return state.params;
        },
        kit(state) {
            return state.kit;
        },
    },
    mutations: {
        addParam(state, param) {
            if (param.type === `param`) {
                state.params[param.name] = param.value;
            } else if (param.type === `kit`) {
                state.kit[param.name] = param.value;
            }
        },
    },
    actions: {
        addParam({commit}, param) {
            commit(`addParam`, param);
        },
    }
}
