<template>
  <v-app>
    <div id="app">
     
      <router-view :key="$route.fullPath" ></router-view>
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
  padding:0px;
  margin:0px;
  overflow-x: hidden;
}
</style>

<script>


export default {
    name: 'App',
  
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      // title: 'Default Title',
      // all titles will be injected into this template
      // titleTemplate: '%s | My Awesome Webapp'
    }
}
</script>


