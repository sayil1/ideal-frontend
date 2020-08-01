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
ul li {
  color: white;
  list-style-type: disc;
}
a {
  all: unset;
  color: white;
  cursor: pointer;
}
.bg {
 background: #1B6761;
  /* background: rgba(21, 22, 21, 0.1); */
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
  .infos {
    margin-left: 80px;
  }
  .navbar-nav li:hover > ul.dropdown-menu {
  display: block;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
}
.nav-link {
  color: green;
  /* font-weight: bold; */
  font-size: 15px;
}
.nav-link:hover {
  color: orange !important;
}
.sub {
  color: black;
  background-color: orange;
}
.dropdown-item {
  margin-left: -10px;
  margin-right: auto;
  border-top: 2px solid white;
  color: black;
  background-color: orange;
}
.dropdown-item .route {
  color: black;
}
li .dropdown-item :hover {
  background-color: white !important;
  color: orange !important;
  text-decoration: none;
}
li :hover {
  background-color: white !important;
  color: orange !important;
  text-decoration: none;
}
.navbar .dropdown-toggle,
.navbar .dropdown-menu a {
  cursor: pointer;
}

.navbar .dropdown-item.active,
.navbar .dropdown-item:active {
  color: inherit;
  text-decoration: none;
  background-color: inherit;
}

.navbar .dropdown-item:focus,
.navbar .dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}
.nav2 {
  margin-top: 200px;
}
</style>