<script setup lang="ts"></script>

<template>
	<div class="message">
		<div class="messageOuter">
			<div class="messageAvatar"></div>
			<div class="messageInner">
				<div class="messageBubble"></div>
				<div class="messageSpacer"></div>
			</div>
		</div>
	</div>
</template>

<style>
.message {
}

.messageOuter {
	display: flex;
}

.messageInner {
	flex: 1;
	display: flex;
	flex-direction: row-reverse;
}

.messageSpacer {
	flex: 1;
}

.messageBubble {
	max-width: calc(100% - 67px);
	overflow-wrap: break-word;
}
</style>
