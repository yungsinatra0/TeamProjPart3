<script setup lang="ts">
import { Pie } from "vue-chartjs"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Project, Task, User } from ".prisma/client" 

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps<{
	data: {
		[key: string]: number
	},
	label: string
}>()

const chartData = computed(() => {
	return {
		labels: Object.keys(props.data), 
		datasets: [
			{
				label: props.label,
				data: [...Object.values(props.data)],
				backgroundColor: "#00FFB2"
			},
		],
	}
})

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
		width: "10ch", // width of the chart
		height: "15px", // height of the chart
	}
})
</script>

<template>
	<Pie id="pieChart" :options="chartOptions" :data="chartData" :style="chartStyles">
    </Pie>
</template>
