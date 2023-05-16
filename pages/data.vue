<template>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
		integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
		crossorigin="anonymous"
	/>

	<div id="app">
		<button
			@click="toggleChart"
			class="btn btn-primary"
			style="margin-left: 5px; margin-top: 5px"
		>
			{{ buttontext }}
		</button>
		<DataBarTasks
			:label="'Number of tasks per project'"
			:data="projectTasks"
			v-if="displayIndividual"
		></DataBarTasks>
		<DataBarUsers
			:label="'Number of users per project'"
			:data="projectUsers"
			v-else
		></DataBarUsers>

		<div id="projectsDropdown">
			<select
				id="projectsSelectBox"
				@change="selectProject($event)"
				class="btn btn-primary"
			>
				<option v-for="project in projects">{{ project.name }}</option>
			</select>
		</div>

		<div id="pageLoading" v-if="pageLoading">
			<DataPie
				:label="'Project 1 - Total Tasks for Each Member'"
				:data="userTasks"
				v-if="pageLoading"
			></DataPie>
			<DataBar
				:label="'Total Assigned Hours for Each Member'"
				:data="usersHours"
				v-if="pageLoading"
			></DataBar>
		</div>

		<div id="pieCharts" v-if="displayPie">
			<DataPie
				:label="'Project 1 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj1"
			></DataPie>
			<DataPie
				:label="'Project 2 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj2"
			></DataPie>
			<DataPie
				:label="'Project 3 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj3"
			></DataPie>
			<DataPie
				:label="'Project 4 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj4"
			></DataPie>
			<DataPie
				:label="'Project 5 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj5"
			></DataPie>
			<DataPie
				:label="'Project 6 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj6"
			></DataPie>
			<DataPie
				:label="'Project 7 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj7"
			></DataPie>
			<DataPie
				:label="'Project 8 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj8"
			></DataPie>
			<DataPie
				:label="'Project 9 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj9"
			></DataPie>
			<DataPie
				:label="'Project 10 - Total Tasks for Each Member'"
				:data="usersWithTasks"
				v-if="proj10"
			></DataPie>

			<DataBar
				:label="'Total Assigned Hours for Each Member'"
				:data="usersWithHours"
				v-if="displayPie"
			></DataBar>
		</div>

		<div id="usersDropdown" style="margin-top: 30px">
			<select
				id="usersSelectBox"
				@change="selectUser($event)"
				class="btn btn-primary"
			>
				<option v-for="user in users">{{ user.name }}</option>
			</select>
		</div>

		<DataUsersBarHours
			:label="'Users With Tasks Hours'"
			:data="tasksHours"
			v-if="pageUsersLoading"
		></DataUsersBarHours>
		<DataLine
			:label="'Task and Number of Days to Deadline'"
			:data="tasksDeadlines"
			v-if="pageUsersLoading"
		></DataLine>

		<DataUsersBarHours
			:label="'Users With Tasks Hours'"
			:data="tasksWithHours"
			v-if="displayLine"
		></DataUsersBarHours>
		<DataLine
			:label="'Task and Number of Days to Deadline'"
			:data="tasksWithDeadlines"
			v-if="displayLine"
		></DataLine>
	</div>
</template>

<script setup lang="ts">
//import tasks from '~/server/api/tasks'
const { data: currentUser } = await getCurrentUser() // get the current user from the server using the cookie
const { data: projects } = await useFetch("/api/projects") // get all the projects from the server
const { data: tasks } = await useFetch("/api/tasks") // get all the tasks from the server
const { data: users } = await useFetch("/api/users")

const pageLoading = ref(true)
const pageUsersLoading = ref(true)
const displayIndividual = ref(true)

const proj1 = ref(false)
const proj2 = ref(false)
const proj3 = ref(false)
const proj4 = ref(false)
const proj5 = ref(false)
const proj6 = ref(false)
const proj7 = ref(false)
const proj8 = ref(false)
const proj9 = ref(false)
const proj10 = ref(false)

const displayPie = ref(false)
const displayLine = ref(false)

const buttontext = ref("Number of users per project")

let projectSelected = "Project 1"
let userSelected = "Katie"

function toggleChart() {
	displayIndividual.value = !displayIndividual.value
	buttontext.value = displayIndividual.value
		? "Number of users per project"
		: "Number of tasks per project"
}

function selectProject(event: any) {
	pageLoading.value = false
	displayPie.value = true

	if (event.target.value == "Project 1") {
		projectSelected = "Project 1"
		usersTasksFunction()
		usersHoursFunction()
		proj2.value =
			proj3.value =
			proj4.value =
			proj5.value =
			proj6.value =
			proj7.value =
			proj8.value =
			proj9.value =
			proj10.value =
				false
		proj1.value = true
	} else if (event.target.value == "Project 2") {
		projectSelected = "Project 2"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj3.value =
			proj4.value =
			proj5.value =
			proj6.value =
			proj7.value =
			proj8.value =
			proj9.value =
			proj10.value =
				false
		proj2.value = true
	} else if (event.target.value == "Project 3") {
		projectSelected = "Project 3"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj4.value =
			proj5.value =
			proj6.value =
			proj7.value =
			proj8.value =
			proj9.value =
			proj10.value =
				false
		proj3.value = true
	} else if (event.target.value == "Project 4") {
		projectSelected = "Project 4"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj3.value =
			proj5.value =
			proj6.value =
			proj7.value =
			proj8.value =
			proj9.value =
			proj10.value =
				false
		proj4.value = true
	} else if (event.target.value == "Project 5") {
		projectSelected = "Project 5"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj3.value =
			proj4.value =
			proj6.value =
			proj7.value =
			proj8.value =
			proj9.value =
			proj10.value =
				false
		proj5.value = true
	} else if (event.target.value == "Project 6") {
		projectSelected = "Project 6"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj3.value =
			proj4.value =
			proj5.value =
			proj7.value =
			proj8.value =
			proj9.value =
			proj10.value =
				false
		proj6.value = true
	} else if (event.target.value == "Project 7") {
		projectSelected = "Project 7"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj3.value =
			proj4.value =
			proj5.value =
			proj6.value =
			proj8.value =
			proj9.value =
			proj10.value =
				false
		proj7.value = true
	} else if (event.target.value == "Project 8") {
		projectSelected = "Project 8"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj3.value =
			proj4.value =
			proj5.value =
			proj6.value =
			proj7.value =
			proj9.value =
			proj10.value =
				false
		proj8.value = true
	} else if (event.target.value == "Project 9") {
		projectSelected = "Project 9"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj3.value =
			proj4.value =
			proj5.value =
			proj6.value =
			proj7.value =
			proj8.value =
			proj10.value =
				false
		proj9.value = true
	} else if (event.target.value == "Project 10") {
		projectSelected = "Project 10"
		usersTasksFunction()
		usersHoursFunction()
		proj1.value =
			proj2.value =
			proj3.value =
			proj4.value =
			proj5.value =
			proj6.value =
			proj7.value =
			proj8.value =
			proj9.value =
				false
		proj10.value = true
	}
}

function selectUser(event: any) {
	pageUsersLoading.value = false
	displayLine.value = false
	userSelected = event.target.value
	tasksWithHours = tasksHoursFunction()
	tasksWithDeadlines = tasksDeadlinesFunction()
	displayLine.value = true
}

let usersWithTasks: { [key: string]: number } = {}
function usersTasksFunction() {
	const usersAndTasks: { [key: string]: number } = {}
	for (const project of projects.value!) {
		if (project.name == projectSelected) {
			for (const user of project.users) {
				let numberTasks = 0

				for (const task of tasks.value!) {
					//Find if the user is in the assignees of the task using some (returns true if the callback returns true for any element in the array)
					// if (task.assignees.some(assignee => assignee.uid == user.uid)) {
					// 	numberTasks++
					// }

					for (const assignee of task.assignees) {
						if (assignee.uid == user.uid) {
							numberTasks++
						}
					}
				}
				usersAndTasks[user.name] = numberTasks // here you put variabel you increase
			}
		}
	}
	usersWithTasks = usersAndTasks
}

let userTasks = computed(() => {
	const usersAndTasks: { [key: string]: number } = {}
	for (const project of projects.value!) {
		if (project.name == projectSelected) {
			for (const user of project.users) {
				let numberTasks = 0
				for (const task of tasks.value!) {
					for (const assignee of task.assignees) {
						if (assignee.uid == user.uid) {
							numberTasks++
						}
					}
				}
				usersAndTasks[user.name] = numberTasks // here you put variabel you increase
			}
		}
	}
	return usersAndTasks
})

let usersWithHours: { [key: string]: number } = {}
function usersHoursFunction() {
	const usersAndHours: { [key: string]: number } = {}
	for (const project of projects.value!) {
		if (project.name == projectSelected) {
			for (const user of project.users) {
				let hours = 0
				for (const task of tasks.value!) {
					for (const assignee of task.assignees) {
						if (assignee.uid == user.uid) {
							hours += task.workHours
						}
					}
				}
				usersAndHours[user.name] = hours // here you put variabel you increase
			}
		}
	}
	usersWithHours = usersAndHours
}

let usersHours = computed(() => {
	const usersAndHours: { [key: string]: number } = {}
	for (const project of projects.value!) {
		if (project.name == projectSelected) {
			for (const user of project.users) {
				let hours = 0
				for (const task of tasks.value!) {
					for (const assignee of task.assignees) {
						if (assignee.uid == user.uid) {
							hours += task.workHours
						}
					}
				}
				usersAndHours[user.name] = hours // here you put variabel you increase
			}
		}
	}
	return usersAndHours
})

let tasksWithHours: { [key: string]: number } = {}
function tasksHoursFunction() {
	const tasksAndHours: { [key: string]: number } = {}
	for (const task of tasks.value!) {
		let hours = 0
		for (const user of task.assignees) {
			if (user.name == userSelected) {
				hours += task.workHours
				tasksAndHours[task.name] = hours
			}
		}
	}
	return tasksAndHours
}

let tasksHours = computed(() => {
	const tasksAndHours: { [key: string]: number } = {}
	for (const task of tasks.value!) {
		let hours = 0
		for (const user of task.assignees) {
			if (user.name == userSelected) {
				hours += task.workHours
				tasksAndHours[task.name] = hours
			}
		}
	}
	return tasksAndHours
})

let tasksWithDeadlines: { [key: string]: number } = {}
function tasksDeadlinesFunction() {
	const tasksAndDeadlines: { [key: string]: number } = {}
	let oneDay = 24 * 60 * 60 * 1000
	const today = new Date()
	for (const task of tasks.value!) {
		for (const user of task.assignees) {
			if (user.name == userSelected) {
				const deadline = new Date(task.dueDate)
				const daysToDeadline = Math.round(
					Math.abs((today.getTime() - deadline.getTime()) / oneDay),
				)
				tasksAndDeadlines[task.name] = daysToDeadline
			}
		}
	}
	return tasksAndDeadlines
}

let tasksDeadlines = computed(() => {
	const tasksAndDeadlines: { [key: string]: number } = {}
	let oneDay = 24 * 60 * 60 * 1000
	const today = new Date()
	for (const task of tasks.value!) {
		for (const user of task.assignees) {
			if (user.name == userSelected) {
				const deadline = new Date(task.dueDate)
				const daysToDeadline = Math.round(
					Math.abs((today.getTime() - deadline.getTime()) / oneDay),
				)
				tasksAndDeadlines[task.name] = daysToDeadline
			}
		}
	}
	return tasksAndDeadlines
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

<style>
#pieCharts {
	height: 400px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-right: 100px;
}

#pageLoading {
	height: 400px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-right: 100px;
}

body {
	background-color: #f8f7fa;
}

#usersDropdown {
	margin-left: 5px;
}

#projectsDropdown {
	margin-left: 5px;
	margin-top: 15px;
}
</style>
