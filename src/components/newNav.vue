<template  >
  <div>
    <div>
      <div style="position:fixed; width:100%; z-index:1000; background-color: red">
        <div
          style="width:100%; background-color:#1b6761; color:white"
          class="navbar navbar-expand-md navbar- navas"
          role="navigation"
        >
          <div>
            <router-link to="/">
              <img src="../assets/logo.png" alt style="height:70px; " />
            </router-link>
          </div>
          <!-- filter search -->
          <div>
            <v-toolbar flat color="transparent" style="width:300px">
              <div></div>
              <input
                style="color:white; padding:1px"
                placeholder="search"
                class="mac-style"
                v-model="search"
                label="Search Page"
                single-line
                @focus="show = true"
              />
              <v-btn ref="s-btn" style="mac-style" icon v-click-outside="hide" @click="show = !show">
                <v-icon color="white">mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>
            <div
              v-show="show"
              style="position:fixed"
             
            >
              <v-card-text class="py-0">
                <v-chip v-for="(keyword, i) in keywords" :key="i" class="mr-2">{{ keyword }}</v-chip>
              </v-card-text>

              <v-list three-line style="width:60%; background-color:rgb(217, 217, 217)">
                <v-list-item v-for="(item, i) in searching" :key="i" ripple @click="() => {}">
                  <a :href="`${item.route}`">
                    <v-img :src="item.image" class="mr-4" max-width="64" min-width="64"></v-img>

                    <v-list-item-content>
                      <span
                        class="text-uppercase font-weight-regular caption"
                        v-text="item.category"
                      ></span>

                      <div v-text="item.title"></div>
                    </v-list-item-content>
                  </a>
                </v-list-item>
              </v-list>
            </div>
          </div>
          <!-- end search -->

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
            <v-icon class="navbar-toggler-icon" color="white">mdi-chevron-down</v-icon>
          </button>

          <div
            class="nava collapse navbar-collapse nav-width"
            id="navbarCollapse"
         
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active"></li>
              <router-link class="nav-link" to="/" style>
                <li class="nav-item active">
                  HOME
                  <span class="sr-only">(current)</span>
                </li>
              </router-link>
              <li class="nav-item active">
                <router-link class="nav-link" to="about" style>
                  ABOUT US
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>

              <!-- <li class="nav-item dropdown">
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
              </li>-->
              <li class="nav-item dropdown">
                <router-link class="route" to="what-we-do">
                  <a
                    class="nav-link dropdown-toggle"
                    id="dropdown1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style="color:white"
                  >WHAT WE DO</a>
                </router-link>
                <ul class="dropdown-menu" aria-labelledby>
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
                  <router-link class="route" to="over">
                    <li class="dropdown-item">INTERNSHIP</li>
                  </router-link>
                       <li class="dropdown-item dropdown">
                    <a
                      class="dropdown-toggle"
                      id="dropdown1-1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >EXAM TEST CENTER</a>
                    <ul
                      class="dropdown-menu sub"
                      style="padding:10px; color:white"
                      aria-labelledby="dropdown1-1"
                    >
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
                  <!-- <li class="dropdown-item dropdown">
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
                  </li>-->
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
                    <li class="dropdown-item">IT CERTIFICATIONS</li>
                  </router-link>
                  <router-link class="route" to="test">
                    <li class="dropdown-item">TEST PREPARATION</li>
                  </router-link>
                  <!-- <li class="dropdown-item">
                <router-link class="route" to="career">CAREER DEVELOPMENT</router-link>
                  </li>-->

             

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
                  <router-link class="route" to="diy">
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
                  <router-link class="route" to="contests">
                    <li class="dropdown-item">CONTESTS</li>
                  </router-link>
                  <router-link class="route" to="webs">
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
      </div>
    </div>
  </div>
</template>
 <script src="../index.js"></script>
<script>

import { Services } from "../service";
import ClickOutside from 'vue-click-outside'
var serv = new Services();
export default {
  data() {
    return {
      news: [],
      itemsS: [
        {
          image: "",
          title: "The Test of English as a Foreign Language® TOEFLis a standardized test that measures",
          category: "TOEFL",
          keyword: "TOEFL",
          route: "toefl",
        },
        {
          image:
            "",
          title:
            "Our Authorized Pearson VUE Test center runs IT certification examinations for leading vendors",
          category: "Pearson Vue",
          keyword: "Pearson",
            route: "pearson",
        },
        {
          
          title: "The Institute of Commercial Management (ICM) is the leading professional body providing qualifications",
          category: "ICM UK",
          keyword: "ICM UK",
           route: "icm",
        },
        {
          image:
            "",
          title:
            "IT CERTIFICATION | The need for the teaming population of young people to access information: java ",
          category: "IT CERTIFICATION",
          keyword: "IT CERTIFICATION, java, ",
           route: "prof",
        },
        {
          image:
            "",
          title: "TEST PREPARATION | We run high-quality test preparation designed to increase students' performance on international standardized tests like IELTS, PTE, Cambridge English, GRE, GMAT, SAT, ACT.",
          category: "TEST PREPARATION",
          keyword: "TEST PREPARATION",
           route: "test",
        },
      ],
      search: "",
      show: false,
    };
  },
  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.itemsS;

      const search = this.search.toLowerCase();

      return this.itemsS.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
  created() {
    this.initialize();
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
  },
  methods: {
     hide () {
      this.show = false
    },
     onClose () {
    this.show = false
  },
    initialize() {
      serv
        .getRequest("news/getNews")
        .then((response) => {
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
        .catch((e) => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    },
    
  },
   
  mounted () {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },
 
  // do not forget this section
  directives: {
    ClickOutside
  }
};
</script>

<style lang="css" scoped>
.mac-style {
  width: 50px;
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 1s ease-in-out;
  float: right;
}

.mac-style:focus {
  width: 500px;
}
header {
  margin-top: 0px;
}
.nav-width{
  margin-left: 5%;
}
.navbar-nav li:hover > ul.dropdown-menu {
  display: block;
}
.dropdown-submenu {
  position: relative;
  padding: 10px;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  /* left: 100%; */
  margin-top: -6px;
  padding: 10px;
}
.nav-link {
  color: white;
  /* font-weight: bold; */
  font-size: 15px;
  text-decoration: none;
}
.nav-link:hover {
  color: orange !important;
}
.sub {
  padding: 10px;
  color: white;
  background-color: #1b6761;
}
.dropdown-item {
  margin: 0px;
  /* border-top: 2px solid white; */
  color: rgb(245, 235, 235);
  background-color: #1b6761;
}
.dropdown-item .route {
  color: black;
}
li .dropdown-item :hover {
  /* background-color: rgb(158, 6, 6) !important;
  color: orange !important; */
  text-decoration: none;
}

li a .dropdown-item {
  font-weight: bold;
  /* color: black !important; */
  text-decoration: none;
  padding: 10px;
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

ul.dropdown-menu.show {
  padding: 0px;
}
ul.dropdown-menu {
  padding: 0px;
  text-decoration: none;
}

.navbar .dropdown-item:focus,
.navbar .dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #00959c;
  text-decoration: none;
}
.nav2 {
  margin-top: 200px;
}
.route {
  text-decoration: none;
}

@media only screen and (max-width: 400px) {
  template {
    width: 100%;
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

@media only screen and (min-width: 401px) and (max-width: 960px) {
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
    /* margin-left: ; */
  }
  .navas {
    width: 150%;
  }
  .infos {
    margin-left: 100px;
  }
  .nav2 {
    /* padding-top: 80px */
  }
}

@media (min-width: 767px) {
 
}
</style>