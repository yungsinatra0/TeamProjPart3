<script setup lang="ts">
import { Chat, Message, User } from ".prisma/client"

const currentUser = await getCurrentUser()
const { data : rooms } = await useFetch("/api/chats", {
    method: "GET",
    query: {
        uid: currentUser.data.value!.uid
    }
})

console.log(rooms.value)
</script>

<template> 
    <div>
        <h1>This is the chat lobby</h1>
    </div>

    <section v-if="rooms">
        <ChatLink v-for="room in rooms" :key="room.uid" :room="room" />
    </section>
</template>

<style>

</style>