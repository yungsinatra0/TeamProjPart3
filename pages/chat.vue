<script setup lang="ts">
const currentUser = await getCurrentUser()
const { data: rooms } = await useFetch("/api/chats", {
	method: "GET",
	query: {
		uid: currentUser.data.value!.uid,
	},
})

async function fetchChat(chatId: number) {
	const { data: chat } = await useFetch(`/api/chat/${chatId}`, {
		method: "GET",
	})
}
</script>

<template>
	<div>
		<div class="searchBar"></div>
		<div class="textChat">
			<div class="textDisplay"></div>
			<div class="textEntry">
				<input class="textInput" />
				<button class="EnterButton">Enter</button>
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

.searchBar {
	position: absolute;
	left: 0;
	top: 2.5%;
	width: 30%;
	height: 95%;
	background-color: var(--background);
}
.textChat {
	position: absolute;
	left: 30%;
	top: 2.5%;
	width: 70%;
	height: 95%;
	background-color: var(--sectionColor);
}
.textDisplay {
	position: absolute;
	left: 5%;
	top: 5%;
	width: 90%;
	height: 70%;
	background-color: var(--element);
}
.textEntry {
	position: absolute;
	left: 5%;
	top: 80%;
	width: 90%;
	height: 15%;
	background-color: var(--element);
}
.textInput {
	position: absolute;
	left: 2.5%;
	top: 5%;
	width: 80%;
	height: 80%;
}
.EnterButton {
	position: absolute;
	left: 85%;
	top: 5%;
	width: 12.5%;
	height: 85%;
	background-color: var(--button);
}
</style>
