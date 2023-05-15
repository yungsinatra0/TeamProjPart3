<script setup>
//call generator file to fill database with dummy data
async function fillDatabase() {
	await useFetch("/api/generator")
}
</script>

<template>
	<div class="generatorFile">
		<button @click="fillDatabase()">Fill Database</button>
		<!-- click button to fill database with dummy data -->
	</div>
</template>

<style scoped></style>
