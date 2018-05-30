
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
Vue.use(VueRouter)

import VueTablePlaceholder from './components/placeholder/VuetablePlaceholder.vue'

/** Vue 2.3.0+ */
const VueTable = (resolve) => ({
        component: import(/* webpackChunkName: "my-vuetable" */ './components/vuetable/Vuetable.vue'),
        loading: VueTablePlaceholder,
        delay: 200,
        timeout: 3000
});

const Home = () => import(/* webpackChunkName: "home" */ './components/Home.vue');

const Bar = () => import(/* webpackChunkName: "bar-chart" */ './components/chart/BarChart.vue');

const Tab = () => import(/* webpackChunkName: "tab" */ './components/tab/Tab.vue')

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

