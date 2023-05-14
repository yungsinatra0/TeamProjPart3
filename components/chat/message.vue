<template>
	<div class="message" :class="{ 'current-user': isCurrentUser }">
		<div class="sender">{{ sender }}</div>
		<div class="content">{{ message }}</div>
		<div class="timestamp">{{ timestamp }}</div>
		<div class="actions">
			<Icon :icon="removeIcon" @click="onRemove" v-if="isCurrentUser" />
			<Icon :icon="editIcon" @click="onEdit" v-if="isCurrentUser" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { defineProps, defineEmits } from "vue"

const props = defineProps<{
	sender: String
	message: String
	timestamp: Date
	isCurrentUser: Boolean
}>()

const removeIcon = "mdi:trash-can-outline"
const editIcon = "mdi:pencil-outline"
// Parse the timestamp into a readable format
const timestamp = new Date(props.timestamp).toLocaleString()

const emits = defineEmits(["edit", "remove"])

const onEdit = () => {
	emits("edit")
}

const onRemove = () => {
	emits("remove")
}
</script>
<style scoped>
.message {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 10px;
	max-width: 35ch;
	min-width: 35ch;
	border-radius: 8px;
	padding: 8px;
	background-color: #f5f5f5;
	position: relative;
}

.message.current-user {
	align-items: flex-end;
	background-color: #dcf8c6;
}

.message .sender {
	font-weight: bold;
	margin-bottom: 4px;
}

.message .content {
	word-wrap: break-word;
}

.message .timestamp {
	font-size: 12px;
	color: #aaa;
	margin-top: 4px;
}

.actions {
	display: flex;
}

.actions > * {
	margin-right: 4px;
	cursor: pointer;
}
</style>
