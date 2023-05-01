<template>
	<div id="app">
		<button @click="toggleChart">{{ buttontext }}</button>
		<DataBar :label="'Number of tasks per project'" :data="projectTasks" v-if="displayIndividual"></DataBar>
		<DataBar :label="'Number of users per project'" :data="projectUsers" v-else></DataBar>

		<div id="dropdown">
			<select @change="selectProject($event)">
				<option value="project1">Project 1</option>
				<option value="project2">Project 2</option>
			</select>
		</div>

		
		<DataBar :label="'Project 1'" :data="projectTasks" v-if="displayProj1"></DataBar>
		<DataBar :label="'Project 2'" :data="projectUsers" v-if="displayProj2"></DataBar>

		<!-- <DataPie :label="'Test Pie Chart'" :data="projectTasks" v-if="testPieChart"></DataPie> -->

	</div>
</template>

<script setup lang="ts">
import tasks from '~/server/api/tasks'


const { data: currentUser } = await getCurrentUser() // get the current user from the server using the cookie
const { data: projects } = await useFetch("/api/projects") // get all the projects from the server
// const { data: tasks } = await useFetch("/api/tasks") // get all the tasks from the server
// const { data: users } = await useFetch("/api/users") // get all the users from the server

const displayIndividual = ref(true)
const displayProj1 = ref(true)
const displayProj2 = ref(false)

const testPieChart = ref(true)

const buttontext = ref("Number of users per project")

function toggleChart() {
	displayIndividual.value = !displayIndividual.value
	buttontext.value = displayIndividual.value ? "Number of users per project" : "Number of tasks per project"
}

function selectProject(event: any){
	//alert(event.target.value)
	if (event.target.value == "project1"){
		displayProj2.value = false
		displayProj1.value = true
	}
	else if (event.target.value == "project2"){
		displayProj1.value = false
		displayProj2.value = true	
	}
	
}

//get number of tasks each team member of project is assigned to
const userTasks = computed(() => {
	const usersAndTasks: { [key: string]: number } = {}

})


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

//console.log(projectTasks.value)
</script>
