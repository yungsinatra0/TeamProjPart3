<script setup lang="ts">
import { User, Message } from ".prisma/client"

const { data: currentUser } = getCurrentUser()

const { data: rooms } = await useFetch("/api/chats", {
	method: "GET",
	query: {
		// If current user is null, this will be undefined, which is fine
		uid: currentUser.value!.body!.uid,
	},
})

let message = ref("")
let currentChat = ref(0)
let messages = ref<MessageUser[]>([])

//TODO: Add scrolling to the bottom of the chat when a new message is sent & Set scrollbar to bottom

async function fetchChat(chatId: number) {
	currentChat.value = chatId

	const { data: chat } = await useFetch(`/api/chat/${chatId}`, {
		method: "GET",
	})

	messages.value = chat.value!.messages
}

function toString(members: User[]) {
	return members.map(member => member.name).join(", ")
}

function getLastMessage(messages: Message[]): string {
	if (messages.length === 0) {
		return "No messages yet"
	}
	// May change this later to use timestamps
	return messages[messages.length - 1].content
}

async function sendMessage() {
	// Take input from textInput and send it to the server
	const { data: response } = await useFetch(`/api/chat/${currentChat.value}`, {
		method: "PUT",
		body: {
			sender: currentUser.value!.body!.uid,
			message: message.value,
		},
	})

	// Clear the input
	message.value = ""
}

function isCurrentUserMessage(sender: string) {
	return sender === currentUser.value!.body!.uid
}

// Every second, fetch the chat again
setInterval(() => {
	fetchChat(currentChat.value)
}, 500)
</script>

<template>
	<div class="chat-container">
		<div class="searchBar">
			<ChatList
				v-for="room in rooms"
				:key="room.uid"
				:members="toString(room.users)"
				:last-message="getLastMessage(room.messages)"
				@click="fetchChat(room.uid)"
			/>
		</div>
		<div class="textChat">
			<div class="textDisplay">
				<ChatMessage
					v-for="message in messages"
					:sender="message.sender.name"
					:message="message.content"
					:is-current-user="isCurrentUserMessage(message.senderId)"
					:timestamp="message.created"
					:class="[
						isCurrentUserMessage(message.senderId) ? 'is-current-user' : '',
						'message',
					]"
				/>
				<p v-if="currentChat == 0" class="no-chat">
					Choose a chat to start messaging!
				</p>
			</div>
			<div class="textEntry">
				<input class="textInput" v-model="message" />
				<button class="EnterButton" @click="sendMessage">Enter</button>
			</div>
		</div>
	</div>
</template>

<style>
:root {
	--background: #142d4c;
	--button: #ececec;
	--element: #9fd3c7;
	--sectionColor: #385170;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.no-chat {
	color: #777;
	font-style: italic;
}

.chat-container {
	display: flex;
	height: 90vh;
}

.searchBar {
	display: flex;
	flex-direction: column;
	width: 30%;
	height: 100%;
	background-color: var(--background);
	overflow-y: auto;
}

.textChat {
	width: 70%;
	max-height: 90vh;
	background-color: var(--sectionColor);
	display: flex;
	flex-direction: column;
}

.textDisplay {
	flex-grow: 1;
	background-color: var(--element);
	overflow-y: scroll;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	max-height: 90vh;
	scroll-behavior: smooth; /* added */
}

.textDisplay .message {
	margin: 5px 0;
}

.textDisplay .message.is-current-user {
	align-self: flex-end;
}

.textEntry {
	background-color: var(--element);
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.textInput {
	flex-grow: 1;
	margin-right: 1rem;
	height: 5ch;
}

.EnterButton {
	background-color: var(--button);
	width: 5rem;
	height: 100%;
}
</style>
