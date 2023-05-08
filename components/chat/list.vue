<template>
	<li class="chat-list-item">
		<div class="chat-list-item-header">Chat with: {{ members }}</div>
		<div class="chat-list-item-body">
			<div class="chat-list-item-message">Last message: {{ lastMessage }}</div>
			<!-- <div class="chat-list-item-time"></div> -->
		</div>
	</li>
</template>

<script setup lang="ts">
const props = defineProps<{
	members: string
	lastMessage: string
}>()
</script>

<style>
.chat-list-item {
	display: flex;
	flex-direction: column;
	padding: 10px;
	background-color: #1e1e1e;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	transition: background-color 0.2s ease;
	cursor: pointer;
}

.chat-list-item:hover {
	background-color: #282828;
}

.chat-list-item:active {
	background-color: #3c3c3c;
}

.chat-list-item-header {
	font-weight: bold;
	font-size: 18px;
	color: #ffffff;
}

.chat-list-item-message {
	margin-top: 5px;
	font-size: 14px;
	color: #cccccc;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
</style>
