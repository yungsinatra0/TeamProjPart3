<script setup lang="ts">
import { getCurrentUser } from '~~/composables/currentUser';

const { data: user } = await getCurrentUser()

// Get all users in the database
async function getUsers() {
    const res = await $fetch('/api/users')
    console.log(res)
}

</script>

<template>
    <div>
        <h1>I'm the default layout that is used on every page (unless explicitly specified)!</h1>
       <!-- <h2> Welcome, {{ user!.name }} </h2> -->

        <button @click="getUsers">Get Users</button>
        <slot></slot>
    </div>
</template>

<style>
</style>