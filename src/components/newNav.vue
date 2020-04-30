<template  >
  <div>
    <div>
      <div style="position:fixed; z-index:10; ">
        <div
          class="navbar-brand pl-6 navas"
          style="background-color:black; color:white; font-size:15px; z-index:10; "
        >
          <div class="row" style>
            <div class="col-md-1 col-sm-4">
              <v-icon size="20" color="green darken-2" right>mdi-phone</v-icon>(+234) 9030031914
            </div>
            <div class="col-md-1 col-sm-4 infos">
              <v-icon size="20" color="green darken-2" right style="padding-right:5px">mdi-mail</v-icon>info@ideal-nig.org
            </div>
            <div class="col-md-6"></div>

            <div class="row icons">
              <v-icon
                size="20"
                color="orange darken-2"
                right
                style="padding-right:10px"
              >mdi-facebook</v-icon>
              <v-icon size="20" color="orange darken-2" right style="padding-right:10px">mdi-twitter</v-icon>
              <v-icon size="20" color="orange darken-2" right>mdi-instagram</v-icon>
              <v-icon size="20" color="orange darken-2" right>mdi-linkedin</v-icon>
            </div>
          </div>
        </div>
        <div style="; " class="navbar navbar-expand-md navbar- bg-white navas" role="navigation">
          <div>
            <router-link to="/">
              <img src="../assets/idealng.png" alt style="height:30px; " />
            </router-link>
          </div>

          <button
            style="margin-right:20px"
            class="navbar-toggler btn-primary bg-success"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div style class="nava collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active"></li>
              <router-link class="nav-link" to="/" style>
                <li class="nav-item active">
                  HOME
                  <span class="sr-only">(current)</span>
                </li>
              </router-link>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >ABOUT US</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown1">
                  <router-link to="about" class="route">
                    <li class="dropdown-item">
                      <a>WHO WE ARE</a>
                    </li>
                  </router-link>
                  <router-link to="GAL" class="route">
                    <li class="dropdown-item">GALLERY</li>
                  </router-link>
                  <ul></ul>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >WHAT WE DO</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown1">
                  <router-link class="route" to="capacity">
                    <li class="dropdown-item">CAPACITY DEVELOPMENT</li>
                  </router-link>
                  <router-link class="route" to="sport">
                    <li class="dropdown-item">SPORT DEVELOPMENT</li>
                  </router-link>
                  <router-link class="route" to="digital">
                    <li class="dropdown-item">DIGITAL INCLUSION</li>
                  </router-link>
                  <router-link class="route" to="train">
                    <li class="dropdown-item">TRAIN-THE-TRAINERS</li>
                  </router-link>
                  <li class="dropdown-item dropdown">
                    <a
                      class="dropdown-toggle"
                      id="dropdown1-1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >EXAM TEST CENTER</a>
                    <ul class="dropdown-menu sub" aria-labelledby="dropdown1-1">
                      <router-link class="route" to="toefl">
                        <li>TOEFL</li>
                      </router-link>
                      <router-link class="route" to="pearson">
                        <li>PEARSON VUE</li>
                      </router-link>
                      <router-link class="route" to="icm">
                        <li>ICM UK QUALIFICATION</li>
                      </router-link>
                    </ul>
                  </li>
                  <ul></ul>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >IDEAL IT CENTER</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown1">
                  <router-link class="route" to="prof">
                    <li class="dropdown-item">PROFESSIONAL IT COURSES</li>
                  </router-link>
                  <router-link class="route" to="test">
                    <li class="dropdown-item">TEST PREPARATION</li>
                  </router-link>
                  <!-- <li class="dropdown-item">
                <router-link class="route" to="career">CAREER DEVELOPMENT</router-link>
                  </li>-->
                  <router-link class="route" to="over">
                    <li class="dropdown-item">INTERNSHIP</li>
                  </router-link>

                  <ul></ul>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >SHOPS</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown1">
                  <router-link class="route" to="books">
                    <li class="dropdown-item">BOOKS</li>
                  </router-link>
                  <router-link class="route" to="test">
                    <li class="dropdown-item">DIY KITS</li>
                  </router-link>

                  <ul></ul>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >MEDIA</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown1">
                  <router-link class="route" to="events">
                    <li class="dropdown-item">EVENTS</li>
                  </router-link>
                  <router-link class="route" to="test">
                    <li class="dropdown-item">CONTESTS</li>
                  </router-link>
                  <router-link class="route" to="test">
                    <li class="dropdown-item">WEBINARS</li>
                  </router-link>

                  <ul></ul>
                </ul>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" to="cont" style>
                  CONTACT
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div v-if="news.length>0" style="background-color:orange; width:100%; padding-top:7px">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <span style="padding:10px" v-for="(n , index) in news" v-bind:key="index">
            <span style="padding:3px; color:black">{{n.caption | capitalize}}:</span>
            <span style="padding:3px ; color:white">{{n.message}}</span>
          </span>
        </marquee>
        </div>-->
      </div>
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
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    }
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

<style lang="css" scoped>
header {
  margin-top: 100px;
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

@media only screen and (max-width: 400px) {
  template{
    width:100%
  }
  .nava {
    margin-left: 1%;
  }
  .icons {
    margin-left: 20px;
    margin-top: -20px;
    margin-bottom: 10px;
  }
  .navas {
    width: 100%;
  }
  .cont {
    width: 100%;
  }
}

@media (min-width: 767px) {
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
    margin-left: 30%;
  }
  .navas {
    width: 150%;
  }
  .infos {
    margin-left: 80px;
  }
  .nav2 {
    /* padding-top: 80px */
  }
}
</style>