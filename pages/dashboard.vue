<script setup lang="ts">
definePageMeta({
	layout: "default",
})

const { data: currentUser } = getCurrentUser()

// Update the time every second
const currentDateTime = ref(new Date().toLocaleString())
setInterval(() => {
	currentDateTime.value = new Date().toLocaleString()
}, 1000)
</script>

<template>
	<div class="dashboard">
		<h1 class="dashboard-title">Employee Dashboard</h1>
		<h2 class="dashboard-welcome">Welcome {{ currentUser!.body.name }}</h2>
		<p class="dashboard-datetime">{{ currentDateTime }}</p>

		<div class="dashboard-widgets">
			<div class="dashboard-widget">
				<h3 class="dashboard-widget-title">Task List</h3>
				<ul class="dashboard-task-list">
					<li class="dashboard-task">Task 1</li>
					<li class="dashboard-task">Task 2</li>
					<li class="dashboard-task">Task 3</li>
				</ul>
			</div>

			<div class="dashboard-widget">
				<h3 class="dashboard-widget-title">Notifications</h3>
				<ul class="dashboard-notification-list">
					<li class="dashboard-notification">Notification 1</li>
					<li class="dashboard-notification">Notification 2</li>
					<li class="dashboard-notification">Notification 3</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
/* General styles */
body {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	background-color: #f0ffff;
	margin: 0;
	padding: 0;
}

.dashboard {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
}

.dashboard-title {
	color: black;
	margin-bottom: 20px;
}

.dashboard-welcome {
	margin-bottom: 40px;
}

.dashboard-datetime {
	font-size: 24px;
	font-weight: bold;
	margin-top: 20px;
	text-align: center;
	color: #333;
}

/* Widget styles */
.dashboard-widgets {
	display: flex;
	justify-content: space-between;
}

.dashboard-widget {
	flex-basis: calc(50% - 10px);
	background-color: #000;
	color: #fff;
	padding: 20px;
	border-radius: 8px;
	margin-bottom: 20px;
}

.dashboard-widget-title {
	color: #fff;
	margin-top: 0;
}

/* Task list styles */
.dashboard-task-list {
	list-style-type: none;
	padding: 0;
}

.dashboard-task {
	margin-bottom: 10px;
}

/* Notification list styles */
.dashboard-notification-list {
	list-style-type: none;
	padding: 0;
}

.dashboard-notification {
	margin-bottom: 10px;
}
</style>
