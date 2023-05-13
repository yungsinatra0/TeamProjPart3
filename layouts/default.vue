<script setup lang="ts"></script>

<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
		<NuxtLink :to="`/chat`"> <button class="button button1">Text Chat</button> </NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink :to="`/data`"> <button class="button button1">Data Analytics</button> </NuxtLink>
      </li>
    </ul>
  </div>
</nav>

			<button
				class="button button3"
				style="width: 24px; text-align: center; vertical-align: middle"
				@click="deleteCookie"
			>
				LOGOUT
			</button>
		</div>
	</div>

	<slot></slot>
</template>

<style>
#nav{
	background-color: azure;
}
</style>
