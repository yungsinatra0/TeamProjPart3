<script setup lang="ts">
import { Bar } from "vue-chartjs" // importing chart type from vue-chartjs. ctrl+click on <Bar> in <template> to see other components are avaialbe or check the vue-chartjs docs
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js" // Necessary imports for some reason
import { Project, Task, User } from ".prisma/client" // importing the User type from types/user.ts

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale) // Need to register these otherwise you get an error


const props = defineProps<{
	data: {
		[key: string]: number // data prop is an object with keys of type string and values of type User[] | Project[] | Task[]
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
// 				backgroundColor: "#AE00FF"
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
        backgroundColor: data.map(value => value <= 2  ? 'red' : '#AE00FF')
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
					//color: (c: any) => {if(c['tick']['value'] <= 3) return 'red'; else return 'black';}
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
		height: "50px", // height of the chart
	}
})
</script>

<template>
	<Bar id="barChart" :options="chartOptions" :data="chartData" :style="chartStyles">
	</Bar>
</template>
