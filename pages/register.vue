<script setup lang="ts">

const form = ref<HTMLFormElement>()

async function onSubmit() {
    const data = {
        name: form.value!.user.value,
        password: form.value!.password.value
    }

    const result = await $fetch("/api/register", {
        method: "POST",
        body: data,
    })

	navigateTo("/dashboard")
}

</script>

<template>
	<form @submit.prevent="onSubmit" class="form" ref="form">
		<label id="title">Member Registration</label>
		<label for="user">User:</label>
		<div class="">
			<input
				type="text"
				id="User"
				placeholder="Example"
				required
                name="user"
			/>
		</div>
		<label for="Password">Password:</label>
		<input
			type="password"
			id="Password"
			name="password"
			required
		/>
		<Button type="submit" icon="material-symbols:login-rounded">Register</Button>
	</form>
</template>

<style>
</style>