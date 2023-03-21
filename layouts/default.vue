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
        <div id="myNav" class="navbar">
            <NuxtLink :to="`/chat`"> <button class="button button1">TEXT CHAT</button> </NuxtLink>
            
            <NuxtLink :to="`/data`"> <button class="button button2">DATA ANALYTICS</button> </NuxtLink>
        </div>

        <div>
            <button class="button button3" style="width: 24px; text-align:center; vertical-align:middle">LOGOUT</button>
        </div>
    </div>

    <slot></slot>
</template>

<style>
</style>