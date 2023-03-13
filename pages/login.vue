<script setup lang="ts">

const form = ref<HTMLFormElement>()

async function onSubmit(){
	const data = {
		name: form.value!.user.value,
		password: form.value!.password.value
	}
	
	const result = await $fetch("/api/login", {
		method: "POST",
		body: data,
	})
	if (!result) {
		alert("Invalid username or password")
	} else {
		// Create cookie here
		navigateTo("/dashboard")
	}
}

</script>

<template>

    <form class="form" ref="form" @submit.prevent="onSubmit">
        <label id="title">Member Login</label>
		<label for="Email">User:</label>
		<div class="flex-row jc-centre">
			<input
				type="text"
				id="user"
				name="user"
				placeholder="Type in your username"
				required
				autocomplete="username"
			/>
		</div>
		<label for="Password">Password:</label>
		<input
			type="password"
			id="Password"
			name="password"
			required
			autocomplete="current-password"
		/>
		<Button type="submit" icon="material-symbols:login-rounded">Login</Button>
    </form>

</template>

<style>

</style>