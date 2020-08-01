<template>
        <div style="width:100%; " class="navbar navbar-expand-md navas bg" role="navigation">
          <div style="margin:0px">
            <router-link to="/">
              <img src="../assets/idealng.png" alt style="height:30px; " />
            </router-link>
          </div>

          <div style="text-align:right" class="nava collapse navbar-collapse white--text" >
       iDeal-IT {{today}}
          </div>
        </div>
</template>
<script>
import * as moment from "moment/moment";
export default {
  
  data: () => ({
    icons: ["mdi-facebook", " mdi-twitter", " mdi-google-plus", " mdi-linkedin"],
    
      today: moment().format("YYYY")
 
  })
};
</script>
<style lang="css" scoped>

.bg {
 background-image: url("../assets/footerbackground.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  /* background-size: cover; */
  height:70px;
    position: cover;
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
 .navbar .dropdown-toggle:not(.nav-link)::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.5em;
    vertical-align: 0;
    border-bottom: 0.3em solid transparent;
    border-top: 0.3em solid transparent;
    border-left: 0.3em solid;
  }
  .nava {
    margin-left: 80%;
  }
  .navas {
    width: 150%;
  }
  
</style>