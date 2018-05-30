import { Bar, mixins } from 'vue-chartjs'

/* Async components won't work beacuse we are using component to extend other
*  and component is needed on start in wrapper BarChart
* */
// const Bar = (resolve) => import(/* webpackChunkName: "vuechartjs" */ 'vue-chartjs').then( item => {
//     resolve(item.Bar)
// });

// const mixins = (resolve) => import(/* webpackChunkName: "vuechartjs" */ 'vue-chartjs').then( item => {
//     resolve(item.mixins)
// });

const { reactiveProp } = mixins

Chart.defaults.global.defaultFontColor = 'white';

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.renderChart(this.chartData, this.options)
    }
}