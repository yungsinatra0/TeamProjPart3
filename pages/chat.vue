<script setup lang="ts">
import { User, Message, Chat } from ".prisma/client"
import { Icon } from "@iconify/vue"

const { data: currentUser } = getCurrentUser()

const { data: rooms, refresh } = await useFetch("/api/chats", {
	method: "GET",
	query: {
		// If current user is null, this will be undefined, which is fine
		uid: currentUser.value!.body!.uid,
	},
})

console.log(rooms.value)

const addMemberIcon = "mdi-account-plus"
const removeMemberIcon = "mdi-logout"
const message = ref("")
const currentChat = ref(0)
const currentChatObject = computed(() => {
	return rooms.value?.find(chat => chat.uid === currentChat.value)
})
const messages = ref<MessageUser[]>([])
const showModal = ref(false)
const showMessages = ref(false)
const showChatModal = ref(false)

async function fetchChat(chatId: number) {
	currentChat.value = chatId

	const { data: chat, refresh } = await useFetch(`/api/chat/${chatId}`, {
		method: "GET",
	})

	if (chat && chat.value && chat.value.messages) {
		messages.value = chat.value.messages
	}
}

function toString(members: UserNP[]) {
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
	// If there is no current chat, return
	if (currentChat.value === 0) {
		alert("Please select a chat first!")
		return
	}

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

	refresh()
}

function isCurrentUserMessage(sender: string) {
	return sender === currentUser.value!.body!.uid
}

async function removeMessage(messageId: number) {
	const { data: response } = await useFetch(`/api/message/${messageId}`, {
		method: "DELETE",
	})

	refresh()
}

async function editMessage(messageId: number) {
	// Make an alert box with a text input
	const message = prompt("Edit your message")

	const { data: response } = await useFetch(`/api/message/${messageId}`, {
		method: "PUT",
		body: {
			message: message,
		},
	})

	refresh()
}

function openModal() {
	if (currentChat.value === 0) {
		alert("Please select a chat first!")
		return
	}

	showModal.value = true
}

async function addUser(senderIds: string[]) {
	// If current user's id is in the list of sender ids, return
	if (senderIds.includes(currentUser.value!.body!.uid)) {
		alert("You are already in this chat!")
		return
	}

	const { data: response } = await useFetch(
		`/api/chat/add-member/${currentChat.value}`,
		{
			method: "PUT",
			body: {
				sender: senderIds,
			},
		},
	)

	refresh()
}

async function leaveChat() {
	if (currentChat.value === 0) {
		alert("Please select a chat first!")
		return
	}

	// Show a popup asking if you really want to leave the chat
	const confirm = window.confirm("Are you sure you want to leave this chat?")

	if (confirm) {
		const { data: response } = await useFetch(
			`/api/chat/remove-member/${currentChat.value}`,
			{
				method: "PUT",
				body: {
					sender: currentUser.value!.body!.uid,
				},
			},
		)

		if (response.value!.status === 200) {
			refresh()
		} else {
			alert(response.value!.body.message)
		}

		currentChat.value = 0
		showMessages.value = false
	}
}

async function createChat(senderIds: string[]) {
	const { data: response } = await useFetch("/api/chat", {
		method: "POST",
		body: {
			sender: [...senderIds, currentUser.value!.body!.uid],
		},
	})

	if (response.value!.status === 201) {
		refresh()
	} else {
		alert("Something went wrong!")
	}

	showChatModal.value = false
}

// Every 500ms, fetch the chat again

setInterval(() => {
	if (showMessages.value) {
		fetchChat(currentChat.value)
	}
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
				@click="
					() => {
						if (currentChat === room.uid) {
							showMessages = !showMessages
							if (!showMessages) {
								currentChat = 0
							}
						} else {
							currentChat = room.uid
							showMessages = true
						}
					}
				"
			/>
			<div class="createChat" @click="showChatModal = true">
				<!-- <Icon :icon="addIcon" /> -->
			</div>
		</div>
		<div class="textChat">
			<div>
				<h3 v-if="currentChat != 0" class="current-chat-user">
					Chat with: {{ toString(currentChatObject!.users) }}
				</h3>
			</div>
			<div class="textDisplay">
				<ChatMessage
					v-if="showMessages"
					v-for="message in messages"
					:sender="message.sender.name"
					:message="message.content"
					:is-current-user="isCurrentUserMessage(message.senderId)"
					:timestamp="message.created"
					:class="[
						isCurrentUserMessage(message.senderId) ? 'is-current-user' : '',
						'message',
					]"
					@edit="editMessage(message.uid)"
					@remove="removeMessage(message.uid)"
				/>
				<p v-if="!showMessages" class="no-chat">
					Choose a chat to start messaging!
				</p>
			</div>
			<div class="textEntry">
				<input class="textInput" v-model="message" />
				<button class="EnterButton" @click="sendMessage">Enter</button>
				<div class="chat-actions">
					<Icon :icon="addMemberIcon" @click="openModal" />
					<Icon :icon="removeMemberIcon" @click="leaveChat" />
				</div>
			</div>

			<Modal
				v-if="showModal"
				@choose="addUser"
				@close="showModal = !showModal"
				:current-chat="currentChatObject"
				:title="'Add a user to the chat'"
			/>

			<Modal
				v-if="showChatModal"
				@choose="createChat"
				@close="showChatModal = !showChatModal"
				:title="'Create a new chat'"
				:current-chat="undefined"
			/>
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
	color: #ffffff;
	font-style: italic;
	font-weight: bold;
	font-size: 1.5rem;
}

.chat-container {
	display: flex;
	height: 90vh;
}

.current-chat-user {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2rem;
	background-color: #6a737d;
	color: #fff;
	font-size: 1.25rem;
	font-weight: bold;
	text-align: center;
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
	scroll-behavior: smooth;
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

.chat-actions {
	display: flex;
	align-items: center;
	/* background-color: var(--sectionColor); */
}

.chat-actions > * {
	margin: 0 0.5rem;
	cursor: pointer;
}
.createChat {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	background-color: #f0f0f0;
	border-radius: 10px;
	margin-top: 1rem;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
}

.createChat:hover {
	background-color: #d9d9d9;
}

.createChat:before,
.createChat:after {
	content: "";
	display: block;
	position: absolute;
	width: 30px;
	height: 3px;
	background-color: #666;
	border-radius: 10px;
}

.createChat:before {
	transform: rotate(90deg);
}

.createChat:after {
	transform: rotate(180deg);
}
</style>
