<template>
    <div>
      <button @click="showGraph1 = true">Click here to view individual performance metrics</button>
      <button @click="showGraph2 = true">Click here to view team performance metrics</button>
  
      <div v-if="showGraph1">
        <h2>Individual performance metrics</h2>
        <canvas id="graph1"></canvas>
      </div>
  
      <div v-if="showGraph2">
        <h2>Team performance metrics</h2>
        <canvas id="graph2"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showGraph1: false,
        showGraph2: false,
      };
    },
    mounted() {
      // initialize and drawing the graphs
      this.drawGraph1();
      this.drawGraph2();
    },
    methods: {
      drawGraph1() {
        
        const ctx = document.getElementById('graph1').getContext('2d');
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
              {
                label: 'Tasks completed in a week',
                data: [10, 20, 15, 25, 30],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {},
        });
      },
      drawGraph2() {
        
        const ctx = document.getElementById('graph2').getContext('2d');
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Employee satisfaction', 'Project scope', 'Project cycle time', 'Project feedback', 'Tasks completed', 'Pending tasks'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {},
        });
      },
    },
  };
  </script>
  