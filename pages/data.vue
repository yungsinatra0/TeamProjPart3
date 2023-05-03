<template>
	<div id="app">
		<button @click="toggleChart">{{ buttontext }}</button>
		<DataBar
			:label="'Number of tasks per project'"
			:data="projectTasks"
			v-if="displayIndividual"
		></DataBar>
		<DataBar
			:label="'Number of users per project'"
			:data="projectUsers"
			v-else
		></DataBar>

		<div id="dropdown">
			<select id="selectBox" @change="selectProject($event)">
				<option value="project1">Project 1</option>
				<option value="project2">Project 2</option>
			</select>
		</div>

		<DataBar
			:label="'Project 1'"
			:data="projectTasks"
			v-if="displayProj1"
		></DataBar>
		<DataBar
			:label="'Project 2'"
			:data="projectUsers"
			v-if="displayProj2"
		></DataBar>

		<!-- <DataPie :label="'Test Pie Chart'" :data="projectTasks" v-if="testPieChart"></DataPie> -->

		<DataBar
			:label="'Test Pie Chart'"
			:data="userTasks"
			v-if="testPieChart"
		></DataBar>
	</div>
</template>

<script setup lang="ts">
//import tasks from '~/server/api/tasks'

const { data: currentUser } = await getCurrentUser() // get the current user from the server using the cookie
const { data: projects } = await useFetch("/api/projects") // get all the projects from the server
const { data: tasks } = await useFetch("/api/tasks") // get all the tasks from the server
// const { data: users } = await useFetch("/api/users") // get all the users from the server

const displayIndividual = ref(true)
const displayProj1 = ref(true)
const displayProj2 = ref(false)

const testPieChart = ref(true)

const buttontext = ref("Number of users per project")

let selectedProject = ref("project1")

function toggleChart() {
	displayIndividual.value = !displayIndividual.value
	buttontext.value = displayIndividual.value
		? "Number of users per project"
		: "Number of tasks per project"
}

function selectProject(event: any) {
	//alert(event.target.value)
	if (event.target.value == "project1") {
		displayProj2.value = false
		displayProj1.value = true
		selectedProject.value = "Project 1"
	} else if (event.target.value == "project2") {
		displayProj1.value = false
		displayProj2.value = true
		selectedProject.value = "Project 2"
	}
}

//get number of tasks each team member of project is assigned to
const userTasks = computed(() => {
	const usersAndTasks: { [key: string]: number } = {}

	for (const project of projects.value!) {
		if (project.name == selectedProject.value) {
			for (const user of project.users) {
				let numberTasks = 0
				// loop thru tasks
				// if user name is in assignees for that task, increase by 1

				for (const task of tasks.value!) {
					// Find if the user is in the assignees of the task using some (returns true if the callback returns true for any element in the array)
					if (task.assignees.some(assignee => assignee.uid == user.uid)) {
						numberTasks++
					}
					// This also works, but some is more efficient:
					//
					// for (const assignee of task.assignees) {
					// 	if (assignee.uid == user.uid) {
					// 		numberTasks++
					// 	}
					// }
				}
				usersAndTasks[user.name] = numberTasks // here you put variabel you increase
			}
		}
	}
	return usersAndTasks
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
