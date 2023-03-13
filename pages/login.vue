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
		<label for="User">User:</label>
		<div class="">
			<input
				type="text"
				id="User"
				name="user"
				placeholder="Type in your username"
				required
			/>
		</div>
		<label for="Password">Password:</label>
		<input
			type="password"
			id="Password"
			name="password"
			required
		/>
		<Button type="submit" icon="material-symbols:login-rounded">Login</Button>
    </form>

</template>

<style>

</style>