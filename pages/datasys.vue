<template>
    <div>
      <div>
        <button @click="showGraph1">Click here to see individual performance metrics</button>
        <button @click="showGraph2">Click here to see team performanse metrics</button>
      </div>
      <div>
        <canvas v-if="showingGraph1" ref="graph1"></canvas>
        <canvas v-else-if="showingGraph2" ref="graph2"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  
  export default {
    data() {
      return {
        showingGraph1: true,
        graph1Data: [10, 20, 30, 40, 50],
        graph2Data: [100, 200, 300, 400, 500],
        graph3Data: [10, 15, 20, 25, 30],
        graph4Data: [50, 100, 150, 200, 250],
      };
    },
    mounted() {
      this.createGraphs();
    },
    methods: {
      createGraphs() {
        const graph1 = new Chart(this.$refs.graph1.getContext('2d'), {
          type: 'Individual performance feeback in a month',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
              {
                label: 'Graph 1',
                data: this.graph1Data,
              },
            ],
          },
          data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
              {
                label: 'Tasks completed in a week',
                data: this.graph2Data,
              },
            ],
          },
        });
  
        const graph2 = new Chart(this.$refs.graph2.getContext('2d'), {
          type: 'bar',
          data: {
            labels: ['Employee satisfaction', 'Project scope', 'Project cycle time', 'Tasks completed', 'In progress '],
            datasets: [
              {
                label: 'Information regarding project',
                data: this.graph3Data,
              },
            ],
          },
          data: {
            labels: ['In progress', 'Completed', 'Pending', 'Total tasks', 'Number of tasks'],
            datasets: [
              {
                label: 'Information regarding tasks',
                data: this.graph4Data,
              },
            ],
          },
        });
  
       
        this.graph1 = graph1;
        this.graph2 = graph2;
      },
      showGraph1() {
        this.showingGraph1 = true;
      },
      showGraph2() {
        this.showingGraph1 = false;
      },
    },
  };



  </script>

  