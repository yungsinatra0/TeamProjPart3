<script setup lang="ts"></script>

<template>
	<div>
		<div class="navbar">
			<NuxtLink :to="`/chat`">
				<button class="button button1">TEXT CHAT</button>
			</NuxtLink>

			<NuxtLink :to="`/data`">
				<button class="button button2">DATA ANALYTICS</button>
			</NuxtLink>

			<button
				class="button button3"
				style="width: 24px; text-align: center; vertical-align: middle"
				@click="deleteCookie"
			>
				LOGOUT
			</button>
		</div>
	</div>

	<slot></slot>
</template>

<style>
/* navigation bar */
.navbar {
	height: 15%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: #111;
	overflow-x: hidden;
}

/* button style */
.button {
	border: black;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

.button1 {
	background-color: white;
	color: black;
	border: 2px solid #000000;
}

.button1:hover {
	background-color: #4caf50;
	color: white;
}

.button2 {
	background-color: white;
	color: black;
	border: 2px solid #000000;
}

.button2:hover {
	background-color: #4caf50;
	color: white;
}

.button3 {
	line-height: 3px;
	width: 4px;
	font-size: 8pt;
	margin-top: 1px;
	margin-right: 1px;
	padding-right: 64px;
	background-color: white;
	color: black;
}

.button3:hover {
	background-color: blue;
	color: white;
}
</style>
