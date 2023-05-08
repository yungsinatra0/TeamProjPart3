<template>
	<li class="chat-list-item">
		<div class="chat-list-item-header">{{ chatName }}</div>
		<div class="chat-list-item-body">
			<div class="chat-list-item-message">{{ lastMessage }}</div>
			<div class="chat-list-item-time">{{ lastMessageTime }}</div>
		</div>
	</li>
</template>

<script setup lang="ts">
const props = defineProps<{
	chatName: String
	lastMessage: String
	lastMessageTime: String
}>()
</script>

<style>
.chat-list-item {
	padding: 10px;
	border-bottom: 1px solid #ccc;
}

.chat-list-item-header {
	font-weight: bold;
	font-size: 18px;
}

.chat-list-item-message {
	font-size: 14px;
}

.chat-list-item-time {
	font-size: 12px;
	color: #aaa;
}
</style>
