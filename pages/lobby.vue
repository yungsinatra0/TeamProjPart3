<script setup lang="ts">
import { Chat, Message, User } from ".prisma/client"

const currentUser = await getCurrentUser()
const { data: rooms } = await useFetch("/api/chats", {
	method: "GET",
	query: {
		uid: currentUser.data.value!.uid,
	},
})

console.log(rooms.value)
</script>

<template>
	<div class="chatPage">
		<div class="lobby">
			<div>
				<h1>This is the chat lobby</h1>
			</div>

			<div if="rooms">
				<ChatLink v-for="room in rooms" :key="room.uid" :room="room" />
			</div>
		</div>

		<div class="chat"></div>
	</div>
</template>

<style>
* {
	box-sizing: border-box;
    margin: 0,
    padding: 0,
}

.chatPage {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.lobby {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.chat {
	display: grid;
}
</style>
