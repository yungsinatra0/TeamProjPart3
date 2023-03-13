<script setup lang="ts">
import { getCurrentUser } from '~~/composables/currentUser';

const { data: user } = await getCurrentUser()

</script>

<template>
    <div>
        <h1>I'm the default layout that is used on every page (unless explicitly specified)!</h1>
        <h2> Welcome, {{ user!.name }} </h2>

        <slot></slot>
    </div>
</template>

<style>
</style>