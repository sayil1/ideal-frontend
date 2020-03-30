<template>
  <div>
    <div
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
    </div>
    <nav id="nav">
      <div>
       
      </div>

      <div class>
        <ul id="navigation">
          <li style="margin-right:300px">
            <router-link to="/">
              <img src="../assets/idealng.png" alt style="height:25px; " />
            </router-link>
          </li>
          <li>
            <router-link to="/">HOME</router-link>
          </li>
          <li>
            <a href="#">ABOUT US &raquo;</a>
            <ul>
              <li>
                <router-link to="about">WHO WE ARE</router-link>
              </li>
              <li>
                <router-link to="GAL" class>GALLERY</router-link>
              </li>
             
            </ul>
          </li>
          <li>
            <a href>WHAT WE DO &raquo;</a>
            <ul>
              <li>
                <router-link to="capacity">CAPACITY DEVELOPMENT</router-link>
              </li>
              <li>
                <router-link to="sport">SPORT DEVELOPMENT</router-link>
              </li>
              <li>
                <router-link to="digital">DIGITAL INCLUSION</router-link>
              </li>
              <li>
                <router-link to="train">TRAIN-THE-TRAINERS</router-link>
              </li>
              <li>
                <a>EXAM TEST CENTER &raquo;</a>
                <ul>
                  <li>
                    <router-link to="toefl">TOEFL</router-link>
                  </li>
                  <li>
                    <router-link to="pearson">PEARSON VUE</router-link>
                  </li>
                  <li>
                    <router-link to="icm">ICM UK QUALIFICATION</router-link>
                  </li>
                
                </ul>
              </li>
             
            </ul>
          </li>
          <li>
            <a href="#">IDEAL IT CENTER &raquo;</a>
            <ul>
              <li>
                <router-link to="prof">PROFESSIONAL IT COURSES</router-link>
              </li>
              <li>
                <router-link to="test">TEST PREPARATION</router-link>
              </li>
              <li>
                <router-link to="career">CAREER DEVELOPMENT</router-link>
              </li>
              <li>
                <router-link to="over">OVER-SEAS ADMISSION CONSULTING</router-link>
              </li>
              <li>
                <a href>INTERNSHIP</a>
              </li>
              <li>
                <a>TRAINING AND WORKSHOP</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">SHOP &raquo;</a>
            <ul>
              <li>
               <router-link to="books">BOOKS</router-link>
              </li>
              <li>
                <a href>DIY KITS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="last">MEDIA &raquo;</a>
            <ul>
              <li>
                <router-link to="events">EVENTS</router-link>
              </li>
              <li>
                <a href>CONTEST</a>
              </li>
              <li>
                <a href>WEBINARS</a>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="cont" class="last">CONTACT</router-link>
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

<style lang="css" scoped>
</style>

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

<style lang="css" scooped>
#nav {
  position: relative;
  width: 100%;
  /* margin: 0 auto; */
}

ul#navigation {
  margin-left: 1px;
  position: relative;
  /* float: left; */
  height: 30px;
}

ul#navigation li {
  display: inline;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  float: left;
  position: relative;
}

ul#navigation li a {
  padding: 10px 20px;
  color: black;
  /* text-shadow: 1px 1px 0px #fff; */
  text-decoration: none;
  display: inline-block;
  /* border-right: 1px solid #fff;
  border-left: 1px solid #c2c2c2;
  border-top: 1px solid #fff;
  background: #f5f5f5; */

  -webkit-transition: color 0.2s linear, background 0.2s linear;
  -moz-transition: color 0.2s linear, background 0.2s linear;
  -o-transition: color 0.2s linear, background 0.2s linear;
  transition: color 0.2s linear, background 0.2s linear;
}

ul#navigation li a:hover {
  color: ORANGE;
}

ul#navigation li a.first {
  border-left: 0 none;
}

ul#navigation li a.last {
  border-right: 0 none;
}

ul#navigation li:hover > a {
  background: #fff;
}

/* Drop-Down Navigation */
ul#navigation li:hover > ul {
  /*these 2 styles are very important,
being the ones which make the drop-down to appear on hover */
  visibility: visible;
  opacity: 1;
}

ul#navigation ul,
ul#navigation ul li ul {
  list-style: none;
  margin: 0;
  padding: 0;
  /*the next 2 styles are very important,
being the ones which make the drop-down to stay hidden */
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 99999;
  width: 100;
  background: orange;
  /* box-shadow: 1px 1px 3px #ccc; */
  /* css3 transitions for smooth hover effect */
  -webkit-transition: opacity 0.2s linear, visibility 0.2s linear;
  -moz-transition: opacity 0.2s linear, visibility 0.2s linear;
  -o-transition: opacity 0.2s linear, visibility 0.2s linear;
  transition: opacity 0.2s linear, visibility 0.2s linear;
}

ul#navigation ul {
  top: 43px;
  left: 1px;
}

ul#navigation ul li ul {
  top: 0;
  left: 81px; /* strong related to width:180px; from above */
}

.route {
  padding: -20px;
  color: red;
}

ul#navigation ul li {
  clear: both;
  width: 100%;
  border: 0 none;
  border-bottom: 1px solid #c9c9c9;
}

ul#navigation ul li a {
  background: none;
  padding: px 15px;
  color: black;
  /* text-shadow: 1px 1px 0px #fff; */
  text-decoration: none;
  display: inline-block;
  border: 0 none;
  /* float: left;
  clear: both; */
  width: 200px;
}
</style>