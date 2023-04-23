<template>
  <div id="app">
    
    <button @click="individualPerformance">{{ buttontext }}</button>
    <bar-chart v-if="displayChart" :chart-data="chartData" :options="chartOptions"></bar-chart>

    <button @click="teamPerformance">{{ buttontext }}</button>
    <bar-chart v-if="displayTeamChart" :chart-data="chartData" :options="chartOptions"></bar-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
export default {
  name: 'App',
  components: {
    BarChart,
  },
  data() {
    return {
      displayChart: false,
      buttontext:"Click here to view individual performance",
      chartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Number of tasks complete in a week',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  methods: {
    individualPerformance () {
      this.displayChart = !this.displayChart;
      if(this.displayChart)
      {
        this.buttontext = "Close"
      }
      else
      {
        this.buttontext = "Click here to view individual performance"
      }
    
    },
    teamPerformance(){
      this.displayTeamChart=!this.displayTeamChart;
      if(this.displayTeamChart)
      {
        this.buttontext="close"
      }
      else{
        this.buttontext="click here to view team performance"
      }
    },
  }
};


</script>
