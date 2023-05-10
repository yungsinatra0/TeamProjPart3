<script setup lang="ts">
import { Pie } from "vue-chartjs"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Project, Task, User } from ".prisma/client" 
import Data from "~/pages/data.vue"

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps<{
	data: {
		[key: string]: number
	},
	label: string
}>()

// const chartData = computed(() => {
// 	return {
// 		labels: Object.keys(props.data), 
// 		datasets: [
// 			{
// 				label: props.label,
// 				data: [...Object.values(props.data)],
// 				//backgroundColor: "#00FFB2"
// 				backgroundColor: (c:any) => {if(c[Data.length > 4]) return 'red'; else return 'black';}
// 				//backgroundColor: (c:any) => {for(let i = 0 ; i<Data.length ; i++){if(Data[i].length > 4) return 'red'; else return 'red';}}
// 				//color: (c: any) => {if(c['tick']['value'] == 6) return 'red'; else return 'black';}
// 			},
// 		],
// 	}
// })

const chartData = computed(() => {
  const data = Object.values(props.data);
  return {
    labels: Object.keys(props.data), 
    datasets: [
      {
        label: props.label,
        data,
        backgroundColor: data.map(value => value > 4 ? 'red' : '#00FFB2')
      }
    ]
  }
});

const chartOptions = computed(() => {
	return {
		responsive: true,
		scales: {
			x: {
				grid: {
					color: "black",
					// grid options for x axis. example: display, color, etc
				}, 
				
				ticks: {
					color: "black",
					// ticks options for x axis. example: display, color, etc
				}, 
			},
			y: {
				grid: {
					color: "black",
					// grid options for y axis. example: display, color, etc
				}, 
				
				ticks: {
					color: "black",
					// ticks options for y axis. example: display, color, etc
				}, 
			},
		},
		plugins: {
			legend: {
				labels: {
					color: "black",
					// Other options for the legend go in here, such as: font, etc.
				},
			},
		},
	}
})

const chartStyles = computed(() => {
	return {
		//width: "25ch", // width of the chart
		//height: "40px", // height of the chart
	}
})


</script>

<template>
	<Pie id="pieChart" :options="chartOptions" :data="chartData" :style="chartStyles">
    </Pie>
</template>
