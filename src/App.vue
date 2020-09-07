<template>
  <v-app>
    <div id="app">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Alegreya|Lora:700&display=swap");
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
}
</style>

<script>
export default {
  name: "App",

  metaInfo: {
  
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.",
      },
      {
      
        property: "og:title",
        content: "Epiloge - Build your network in your field of interest",
      },
      { property: "og:site_name", content: "Epiloge" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
 
  },
};
</script>


