<template>
	<div class="modal">
		<div class="modal-content">
			<div class="modal-header">
				<h2 class="modal-title">Add a user to the chat</h2>
				<Icon :icon="closeIcon" @click="closeModal" id="icon" />
			</div>
			<div class="modal-body">
				<label for="user-select">Select a user:</label>
				<select id="user-select" v-model="selectedUser" class="user-select">
					<option v-for="user in users" :key="user.uid" :value="user.uid">
						{{ user.name }}
					</option>
				</select>
			</div>
			<div class="modal-footer">
				<button class="modal-button" @click="chooseUser">Add member</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

const props = defineProps<{}>()

const emit = defineEmits<{
	(name: "close", close: boolean): void
	(name: "choose", userId: string): void
}>()

const { data: users } = await useFetch("/api/users", {
	method: "GET",
})

const closeIcon = "mdi:close-thick"
const selectedUser = ref("")

function closeModal() {
	emit("close", true)
}

function chooseUser() {
	emit("choose", selectedUser.value)
	closeModal()
}
</script>

<style scoped>
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
	justify-content: center;
	align-items: center;
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

.user-select {
	width: 20ch;
	height: 3ch;
	font-size: 1.5rem;
	/* margin-top: 1rem;
	margin-bottom: 2rem; */
}

.modal-body label {
	font-size: 1.5rem;
	font-weight: bold;
	margin-right: 1rem;
}

#icon {
	cursor: pointer;
}
</style>
