import Vue from 'vue';
import SampleComponent from './components/SampleComponent';
import VueResource from 'vue-resource';
import store from './storage/index';

Vue.use(VueResource);

export var vue = new Vue({
    el: '#app',
    store,
    components: {
        'sample-component': SampleComponent
    },
    methods: {
        setConfig: function(config) {
            this.$store.commit('setConfig', config);
        }
    },
    data: {
        translate
    },
    created() {
        this.$store.commit('initialiseStore');
    }
});
