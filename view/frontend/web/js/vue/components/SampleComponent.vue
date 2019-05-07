<template>
    <div class="sample-component">
        <img :src="image"/>
        <h2 v-text="translate('Bluebird Day Sample VueJS')"></h2>
        <a :href="baseUrl">{{ translate('Base Url') }}</a>
    </div>
</template>

<script>
    import {translate} from '../mixins';

    export default {
        name: 'SampleComponent',
        mixins: [translate],
        computed: {
            image: function () {
                return this.$store.state.config.viewFileUrl + '/images/vue.png'
            },
            baseUrl: function () {
                return this.$store.state.config.baseUrl
            }
        },
    }
</script>
