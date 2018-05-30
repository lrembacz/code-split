
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueContentPlaceholders from 'vue-content-placeholders'

import VueEvents from 'vue-events'
Vue.use(VueEvents);
Vue.use(VueContentPlaceholders);

import VueTablePlaceholder from './components/placeholder/VuetablePlaceholder.vue'

/** Vue 2.3.0+ */
const VueTable = (resolve) => ({
        component: import(/* webpackChunkName: "my-vuetable" */ './components/vuetable/Vuetable.vue'),
        loading: VueTablePlaceholder,
        delay: 0,
        timeout: 3000
});

if (document.getElementById('app')) {
    const app = new Vue({
        el: '#app',
        components: {
            'vuetable': VueTable,
            'vuetable-placeholder': VueTablePlaceholder,
            'bar-chart': () => import(/* webpackChunkName: "bar-chart" */ './components/chart/BarChart.vue'),
            'tab': () => import(/* webpackChunkName: "tab" */ './components/tab/Tab.vue')

        }
    });
}

