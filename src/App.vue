<template>
  <v-app>
    <div id="app">
     
      <router-view />
    </div>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Alegreya|Lora:700&display=swap');
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:black;
}
</style>

<script>
export default {
    name: 'App'
}
</script>


