<script setup></script>

<template>
	<nav id="nav">
		<div class="nav-left">
			<NuxtLink to="/" class="nav-link">Home</NuxtLink>
			<NuxtLink to="/chat" class="nav-link">Text Chat</NuxtLink>
			<NuxtLink to="/data" class="nav-link">Data Analytics</NuxtLink>
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
	background-color: #303030;
	padding: 10px 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-left {
	display: flex;
	align-items: center;
}

.nav-link {
	margin-right: 10px;
	color: #fff;
	text-decoration: none;
	padding: 8px 12px;
	border-radius: 5px;
	transition: background-color 0.3s ease;
}

.nav-link:hover {
	background-color: #454545;
}

.nav-right {
	display: flex;
}

.nav-button {
	background-color: #d9534f;
	border: none;
	color: #fff;
	padding: 8px 16px;
	margin: 0 0.5rem;
	cursor: pointer;
	border-radius: 5px;
	transition: background-color 0.3s ease;
}

.nav-button:hover {
	background-color: #c9302c;
}
</style>
