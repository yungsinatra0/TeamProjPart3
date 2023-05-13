<script setup lang="ts"></script>

<template>
	<nav id="nav">
		<div class="nav-left">
			<NuxtLink :to="`/chat`">
				<button class="button button1">Text Chat</button>
			</NuxtLink>
			<NuxtLink :to="`/data`">
				<button class="button button1">Data Analytics</button>
			</NuxtLink>
		</div>
		<div class="nav-right">
			<button class="nav-button" @click="deleteCookie">LOGOUT</button>
		</div>
	</nav>
	<slot></slot>
</template>
<style>
#nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f8f9fa;
}

.nav-left {
	display: flex;
}

.nav-right {
	display: flex;
}

.nav-button {
	background-color: #6c757d;
	border: none;
	color: white;
	padding: 0.5rem;
	margin: 0 0.5rem;
	cursor: pointer;
	border-radius: 5px;
}

.nav-button:hover {
	background-color: #495057;
}
</style>
