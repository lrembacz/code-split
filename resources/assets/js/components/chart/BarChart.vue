<template>

    <bar :chart-data="datacollection" :options="options"></bar>
</template>

<script>

    import Bar from './Bar.js';

    export default {
        components: {
            'bar': Bar
        },
        data () {
            return {
                labels: [],
                dataSets: [],
                datacollection: null,
                options : {
                    responsive: true,
                    maintainAspectRatio: false,
                    maxBarThickness: 30,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: '#333333',
                                zeroLineColor: '#333333'
                            },
                            ticks: {
                                maxRotation: 0
                            },
                            stacked: true
                        }],
                        yAxes: [{
                            gridLines: {
                                color: '#333333',
                                zeroLineColor: '#333333'
                            },
                            stacked: true
                        }]
                    },
                }
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            fillData () {
                let labels = this.labels;
                let datasets = [];

                this.dataSets.forEach( (value, index) => {
                    const dataset = {
                        label: 'Success',
                        backgroundColor: '#00cf13',
                        data: this.dataSets[index],
                    }
                    datasets.push(dataset);
                })

                this.datacollection = {
                    labels: labels,
                    datasets: datasets
                };
            },
            getData() {
                setTimeout( () => {
                    this.labels = [10, 20, 30, 40, 50];
                    this.dataSets = [
                        [13, 14, 15, 18, 25]
                    ];
                    this.fillData();
                })
            },
        }
    }
</script>

<style>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>