<template>
	<div class="modal">
		<div class="modal-content">
			<div class="modal-header">
				<h2 class="modal-title">{{ title }}</h2>
				<Icon :icon="closeIcon" @click="closeModal" id="icon" />
			</div>
			<div class="modal-body">
				<div v-for="user in filteredUsers" :key="user.uid" class="item">
					<label>{{ user.name }}</label>
					<input type="checkbox" :value="user.uid" v-model="selectedUsers" />
				</div>
			</div>
			<div class="modal-footer">
				<button class="modal-button" @click="chooseUser">Add members</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

const props = defineProps<{
	currentChat: ChatUM | undefined
	title: string
}>()

const emit = defineEmits<{
	(name: "close", close: boolean): void
	(name: "choose", userId: string[]): void
}>()

const { data: users } = await useFetch("/api/users", {
	method: "GET",
})

// Get the current user from the cookie and filter it out from the list of users
const currentUser = computed(() => {
	return users.value?.find(user => user.uid === useCookie("uid").value)
})

// Filter out the users in the current chat from the list of users
const filteredUsers = computed(() => {
	if (!props.currentChat) {
		return users.value
			? users.value.filter(user => user.uid !== currentUser.value?.uid)
			: users.value
	}
	return users.value?.filter(
		user => !props.currentChat!.users.some(member => member.uid === user.uid),
	)
})

const closeIcon = "mdi:close-thick"
const selectedUsers = ref<string[]>([])

function closeModal() {
	emit("close", true)
}

function chooseUser() {
	emit("choose", selectedUsers.value)
	closeModal()
}
</script>

<style scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Roboto", sans-serif;
}

.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-content {
	width: 50%;
	background: #fff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid #ccc;
}

.modal-close {
	border: none;
	background: none;
	font-size: 2rem;
	cursor: pointer;
}

.modal-body {
	padding: 1rem;
	flex-grow: 1;
	display: flex;
	overflow-y: scroll;
	flex-direction: column;
	max-height: 15rem;
}

.item {
	display: flex;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid #eee;
	height: 2.5rem; /* set a fixed height for each item */
	width: 100%; /* make each item occupy the entire width of the container */
	justify-content: center;
}

.item label {
	margin-left: 1rem;
	font-size: 1.2rem;
	padding-right: 0.5rem;
}

.item input[type="checkbox"] {
	margin-right: 1rem;
	cursor: pointer;
	transform: scale(1.5);
}

.modal-footer {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem;
	border-top: 1px solid #ccc;
}

.modal-button {
	border: none;
	background: #eee;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
}

#icon {
	cursor: pointer;
}
</style>
