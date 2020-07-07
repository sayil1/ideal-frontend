<template  >
  <div>
    <div>
      <div style="position:fixed; width:100%; z-index:10; background-color: " >
       
        <div style="width:100%; " class="navbar navbar-expand-md navbar- bg-white navas" role="navigation">
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
              </li> -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >WHAT WE DO</a>
                <ul class="dropdown-menu" aria-labelledby="">
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
                  </li> -->
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
                  <router-link class="route" to="contest">
                    <li class="dropdown-item">CONTESTS</li>
                  </router-link>
                  <router-link class="route" to="web">
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
  margin-top: 0px;
}
.navbar-nav li:hover > ul.dropdown-menu {
  display: block;
}
.dropdown-submenu {
  position: relative;
  padding:10px
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  /* left: 100%; */
  margin-top: -6px;
  padding:5px
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
 margin:0px;
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

ul.dropdown-menu.show{
  padding:1px
}
ul.dropdown-menu{
  padding:4px
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
    margin-left: 31%;
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
</style>