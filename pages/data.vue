<template>
	<div id="app">
		<button @click="toggleChart">{{ buttontext }}</button>
		<DataBar :label="'Number of tasks per project'" :data="projectTasks" v-if="displayIndividual"></DataBar>
		<DataBar :label="'Number of users per project'" :data="projectUsers" v-else></DataBar>
	</div>
</template>

<script setup lang="ts">

const { data: currentUser } = await getCurrentUser() // get the current user from the server using the cookie
const { data: projects } = await useFetch("/api/projects") // get all the projects from the server
// const { data: tasks } = await useFetch("/api/tasks") // get all the tasks from the server
// const { data: users } = await useFetch("/api/users") // get all the users from the server

const displayIndividual = ref(true)
const buttontext = ref("Click here to view individual performance")

function toggleChart() {
	displayIndividual.value = !displayIndividual.value
	buttontext.value = displayIndividual.value ? "Click here to view individual performance" : "Click here to view team performance"
}

// get number of tasks per project
const projectTasks = computed(() => {
	const projectAndTasks: { [key: string]: number } = {} // create an object with keys of type string and values of type number

	// get number of tasks per project
	for (const project of projects.value!) {
		projectAndTasks[project.name] = project.tasks.length
	}
	return projectAndTasks
})

const projectUsers = computed(() => {
	const projectAndUsers: { [key: string]: number } = {} // create an object with keys of type string and values of type number

	// get number of users per project
	for (const project of projects.value!) {
		projectAndUsers[project.name] = project.users.length
	}
	return projectAndUsers
})

console.log(projectTasks.value)
</script>
