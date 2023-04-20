<template>
    <div style="height: 70%; width: 80%">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script lang="ts">
  import Chart from 'chart.js/auto'
  
  export default {
    name: 'BarChart',
    props: {
      chartData: {
        type: Object,
        required: true,
      },
      options: {
        type: Object,
        default: null,
      },
    },
  
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        const ctx = this.$refs.canvas.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: this.chartData,
          options: this.options,
        });
        
     
    },
  },
}

  </script>
