
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import VueContentPlaceholders from 'vue-content-placeholders'
import VueEvents from 'vue-events'
Vue.use(VueEvents);
Vue.use(VueContentPlaceholders);
Vue.use(VueRouter);

import VueTablePlaceholder from './components/placeholder/VuetablePlaceholder.vue'
import VueTable from './components/vuetable/Vuetable.vue';
import Bar from './components/chart/BarChart.vue';
import Tab from './components/tab/Tab.vue';
import Home from './components/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/vuetable', component: VueTable },
    { path: '/bar-chart', component: Bar },
    { path: '/tab', component: Tab}
];

const router = new VueRouter({
    routes,
    mode : 'history'
})


if (document.getElementById('app')) {
    const app = new Vue({
        el: '#app',
        router,
        components: {
            'vuetable-placeholder': VueTablePlaceholder,
        }
    });
}

