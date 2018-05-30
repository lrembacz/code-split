
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
import VueTable from './components/vuetable/Vuetable.vue';
import BarChart from './components/chart/BarChart.vue';
import Tab from './components/tab/Tab.vue';

const app = new Vue({
    el: '#app',
    components: {
        'vuetable': VueTable,
        'vuetable-placeholder': VueTablePlaceholder,
        'bar-chart': BarChart,
        'tab': Tab

    }
});

