<script setup lang="ts">
import { Chat, Message, User } from ".prisma/client"

const props = defineProps<{
    // room also contains the messages and users
    room: Chat & {
        users: User[]
    }
}>()

// String of all the users in the room
const users = computed(() => props.room.users.map((user) => user.name).join(", "))
</script>

<template>

<div class="chatBubble">
    <h1>Chat with: {{ users }}</h1>

    <NuxtLink :to="`/chat/${room.uid}`">
        <h1> Access chat room</h1>
    </NuxtLink>
</div>
    
</template>

<style>

.chatBubble {
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

</style>