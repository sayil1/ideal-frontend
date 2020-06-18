<template>
  <div style="z-index:5; width:100%" class="sticky">
    <!-- <div
      class="navbar-brand p-0 pl-6"
      style="background-color:black; width:100%; color:white; font-size:15px"
    >
      <div class="row">
        <div class="col-md-1 col-sm-12" style="margin-right:90px">
          <v-icon size="20" color="green darken-2" right>mdi-phone</v-icon>(+234) 9030031914
        </div>
        <div class="col-md-1 col-sm-12">
          <v-icon size="20" color="green darken-2" right style="padding-right:5px">mdi-mail</v-icon>info@ideal-nig.org
        </div>
        <div class="col-md-6"></div>

        <div class="row" style="float:right;">
          <v-icon size="20" color="orange darken-2" right style="padding-right:10px">mdi-facebook</v-icon>
          <v-icon size="20" color="orange darken-2" right style="padding-right:10px">mdi-twitter</v-icon>
          <v-icon size="20" color="orange darken-2" right>mdi-instagram</v-icon>
            <v-icon size="20" color="orange darken-2" right>mdi-linkedin</v-icon>
        </div>
      </div>
    </div> -->

    <nav class="navbar navbar-expand-md bg-white" style="color:yellow; z-index:5;">
      <!-- One of the primary actions on mobile is to call a business - This displays a phone button on mobile only -->
      <div class="navbar-toggler-right style">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <v-icon color="orange">mdi-menu</v-icon>
          </span>
        </button>
      </div>
      <div>
        <router-link to="/">
          <img src="../assets/idealng.png" alt style="height:30px; " />
        </router-link>
      </div>

      <div class="collapse navbar-collapse flex-column" id="navbar">
        <ul class="navbar-nav w-100 justify-content-center" style="margin-left:40px">
          <li class="nav-item active">
            <router-link class="nav-link" to="/" style>
              HOME
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link"
              to=""
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; "
            >ABOUT US</router-link>
            <div class="dropdown-menu" aria-labelledby style="background-color:orange">
              <router-link
                style="color:black; background-color:orange"
                class="dropdown-item font-weight-bold"
                to="/about"
              >WHO WE ARE</router-link>
              <div class="dropdown-menu"  aria-labelledby >
                 <ul class="navbar-nav w-100 justify-content-center">
                   <li>fedf</li>
                   <li>incsd</li>
                 </ul>
              </div>

              <router-link
                class="dropdown-item font-weight-bold"
                to="/gal"
                style="color:black; background-color:orange"
              >GALLERY</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link"
              to
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; "
            >WHAT WE DO</router-link>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style="background-color:orange"
            >
              <!--  -->
              <router-link
                class="dropdown-item font-weight-bold"
                to="capacity"
                style="color:black; background-color:orange"
              >CAPACITY DEVELOPMENT</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="sport"
                style="color:black; background-color:orange"
              >SPORT DEVELOPMENT</router-link>
              <!-- <router-link
                class="dropdown-item font-weight-bold"
                to="prof"
                style="color:black; background-color:orange"
              >EDUCATIONAL ADVOCACY</router-link>-->
              <router-link
                class="dropdown-item font-weight-bold"
                to="digital"
                style="color:black; background-color:orange"
              >DIGITAL INCLUSION</router-link>
              <!--  -->
              <router-link
                class="dropdown-item font-weight-bold"
                to="train"
                style="color:black; background-color:orange"
              >TRAIN-THE-TRAINERS</router-link>
              <!-- <router-link
                class="dropdown-item"
                to="test"
                style="color:black; background-color:orange"
              >TEST PREPARATION</router-link>-->
              <!-- <router-link
                class="dropdown-item"
                to="over"
                style="color:black; background-color:orange"
              >OVER-SEAS ADMISSION CONSULTING</router-link>-->
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link"
              to
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black;"
            >EXAM TEST CENTER</router-link>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style="background-color:orange"
            >
              <router-link
                class="dropdown-item font-weight-bold"
                to="toefl"
                style="color:black; background-color:orange"
              >TOEFL</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="pearson"
                style="color:black; background-color:orange"
              >PEARSON VUE</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="icm"
                style="color:black; background-color:orange"
              >ICM UK QUALIFICATION</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link"
              to="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; "
            >IDEAL IT CENTER</router-link>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style="background-color:orange"
            >
              <router-link
                class="dropdown-item font-weight-bold"
                to="prof"
                style="color:black; background-color:orange"
              >PROFESSIONAL IT COURSES
            
              </router-link>
              
              <router-link
                class="dropdown-item font-weight-bold"
                to="test"
                style="color:black; background-color:orange"
              >TEST PREPARATION</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="career"
                style="color:black; background-color:orange"
              >CAREER DEVELOPMENT</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="over"
                style="color:black; background-color:orange"
              >OVER-SEAS ADMISSION CONSULTING</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="test"
                style="color:black; background-color:orange"
              >INTERNSHIP</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="test"
                style="color:black; background-color:orange"
              >TRAINING AND WORKSHOP</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link"
              to="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black;  ;"
            >SHOP</router-link>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style="background-color:orange"
            >
              <router-link
                class="dropdown-item font-weight-bold"
                id="t"
                to="#"
                style=" color:black; background-color:orange"
              >BOOKS</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="#"
                style=" color:black; background-color:orange"
              >DIY KITS</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link"
              to="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black;  ;"
            >MEDIA</router-link>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style="background-color:orange"
            >
              <router-link
                class="dropdown-item font-weight-bold"
                id="t"
                to="events"
                style=" color:black; background-color:orange"
              >EVENTS</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="#"
                style=" color:black; background-color:orange"
              >CONTESTS</router-link>
              <router-link
                class="dropdown-item font-weight-bold"
                to="#"
                style=" color:black; background-color:orange"
              >WEBINARS</router-link>
            </div>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="cont" style="color:black; ">
              CONTACT
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div v-if="news.length>0" style="background-color:orange">
      <marquee behavior="scroll" direction="left" scrollamount="15">
        <span style="color:white">News flash:</span>
        <span style="padding:10px" v-for="(n , index) in news" v-bind:key="index">
          <span style="padding:3px">{{n.message}}</span>
          <!-- {{n.message}}; -->
        </span>
      </marquee>
    </div>
  </div>
</template>

 <script src="../index.js"></script>

 <script>
import { Services } from "../service";
var serv = new Services();
export default {
  data() {
    return {
      news: []
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      serv
        .getRequest("news/getNews")
        .then(response => {
          // JSON responses are automatically parsed.
          // this.news = response.data.result;

          // eslint-disable-next-line no-console
          console.log(response.data.result.length);

          for (let i = 0; i <= response.data.result.length - 1; i++) {
            // eslint-disable-next-line no-console
            console.log(i);
            if (
              response.data.result[i].endDate >
              new Date().toISOString().substr(0, 10)
            ) {
              this.news.push(response.data.result[i]);
            }
          }
          // eslint-disable-next-line no-console
          console.log(this.news, "are the events");
        })
        .catch(e => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    }
  }
};
</script>


<style  scoped lang="css">
.see {
  color: red;
}
.navbar {
  padding: 0rem;
}

.dropdown .dropdown-menu {
  border-radius: 0;
}

.sticky {
  position: fixed;
}
.nav-link:hover {
  color: orange !important;
}
.dropdown-item:hover {
  background-color: white !important;
  color: orange !important;
}
.nav-link {
  color: black !important;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 900;
}
.dropdown-menu .dropdown-menu {
  font-size: 0px;
}
.style {
  color: brown;
}

/* Medium devices (tablets, 768px and up) 
The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
    border-radius: 0;
  }
}
</style>

<style lang="css">
/* @import "../index.css"; */
</style>