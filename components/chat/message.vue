<template>
	<div class="message" :class="{ 'current-user': isCurrentUser }">
		<div class="sender">{{ sender }}</div>
		<div class="content">{{ message }}</div>
		<div class="timestamp">{{ timestamp }}</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	sender: String
	message: String
	timestamp: String
	isCurrentUser: Boolean
}>()
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
</style>
