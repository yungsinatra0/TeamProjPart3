<script setup lang="ts">
import { Line } from "vue-chartjs" // importing chart type from vue-chartjs. ctrl+click on <Bar> in <template> to see other components are avaialbe or check the vue-chartjs docs
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js" // Necessary imports for some reason
import { Project, Task, User } from ".prisma/client" // importing the User type from types/user.ts

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const props = defineProps<{
	data: {
		[key: string]: number 
	},
	label: string
}>()

// const chartData = computed(() => {
// 	return {
// 		labels: Object.keys(props.data), // get labels from data prop (the keys of the object)
// 		datasets: [
// 			{
// 				label: props.label,
// 				data: [...Object.values(props.data)], // get data from data prop (the values of the object)
// 				//Other options for the chart go in here, such as: maxBarThickness, backgroundColor, etc.
// 				backgroundColor: "#00FFB2"
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
        backgroundColor: data.map(value => value <= 7  ? 'red' : '#00FFB2')
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
		width: "20ch", // width of the chart
		height: "30px", // height of the chart
	}
})
</script>

<template>
	<Line id="lineChart" :options="chartOptions" :data="chartData" :style="chartStyles">
    </Line>
</template>
