import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        config: {
            baseUrl: '',
            viewFileUrl: ''
        }
    },
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('mage-cache-storage')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('mage-cache-storage')))
                );
            }
        },

        setConfig(state, config) {
            state.config = Object.assign(state.config, config);
        }
    }
});

export default store
