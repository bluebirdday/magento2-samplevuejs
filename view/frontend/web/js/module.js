define([
    'Bluebirdday_SampleVueJs/js/dist/index',
    'mage/translate'
], function (script, tr) {
    "use strict";
    return function (config) {
        script.vue.$data.translate = tr;
        script.vue.setConfig(config);
    }
});
