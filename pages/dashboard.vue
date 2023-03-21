<script setup lang="ts">
</script>

<template>
	<div>
		<h1 style="color:black">Employee name's Dashboard </h1>
	</div>

	<div class="box1">Text</div>

	<div class="box2">insert text</div>

	<div class="box3">insert text</div>
</template>

<style type="text/css">
body {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	background-color: #f0ffff;
}
.center {
	text-align:center;
}
body,td,th {
	color: black; 
}
.larger {
	font-size:larger;
	text-align:left;
}
table {
	margin-left:auto;
	margin-right:auto;
}
.fixed {
	font-family: Courier, monospace;
	white-space: pre;
	background-color:cornsilk;
}

/* navigation bar */
 
.navbar {
  height: 15%;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: #111;
  overflow-x: hidden;
}

/* Page content */
.main {
  margin-left: 200px; /* Same as the width of the sidenav */
}
	
.navbar a:hover {
	color: blue;

}
/* button style */
.button {
	border: black;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

.button1 {
	background-color: white;
	color: black;
	border: 2px solid #000000;
}

.button1:hover {
	background-color: #4CAF50;
	color: white;
}

.button2 {
	background-color: white;
	color: black;
	border: 2px solid #000000;
}

.button2:hover {
	background-color: #4CAF50;
	color: white;
}

.button3 {
    line-height: 3px;
    width: 4px;
    font-size: 8pt;
    margin-top: 1px;
    margin-right: 1px;
    position:absolute;
    top:0;
	right:0;
	background-color: white;
	color: black;
}

.button3:hover {
	background-color: blue;
	color: white;
}

/* task list */

body{
	height:100vh;
	background-color: white;
}

.box1 {
	display: inline-block;
	height: 300px;
	width: 400px;
	background-color: black;
	color: #fff;
	padding: 10px;
	border-radius: 8px 10px 12 px 14px;
	margin: 20px;
	margin-top: 100px;
	
	

}

.box2 {
	display: inline-block;
	height: 300px;
	width: 400px;
	background-color: black;
	color: #fff;
	padding:10px;
	border-radius: 8px 10px 12 px 14px;
	margin: 20px;
	top: 100px;
	

}

.box3 {
	display: inline-block;
	height: 300px;
	width: 400px;
	background-color: black;
	color: #fff;
	padding:10px;
	border-radius: 8px 10px 12 px 14px;
	margin: 20px;
	top: 50px;
	

}
</style>