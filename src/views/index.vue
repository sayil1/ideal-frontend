<template>
  <div style="width:100%">
    <!-- <nava /> -->
    <nav2 />

    <header style="width:100%">
      <div style="background-color:orange; width:100%; padding-top:7px" class="news" v-if="showNews=true">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <span style="padding:10px" v-for="(n , index) in news" v-bind:key="index">
            <span style="padding:3px; color:black">{{n.caption | capitalize}}:</span>
            <span style="padding:3px ; color:white">{{n.message}}</span>
          </span>
        </marquee>
      </div>
      <v-carousel
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        cycle
        height="580"
        show-arrows-on-hover
        class="caro"
       
      >
        <v-carousel-item class="div1">
          <div style="; height:100%" class="cov">
            <div class="card-size">
              <div class="card-body" style>
                <div>
                  <div
                    class="car card-text white--text font-weight-regular"
                    style="margin-left:40px; margin-right:40px"
                  >
                    <div class="car-text" style="margin-top:40px">
                      <span class="car-head" style>
                        WELCOME TO
                        <br />INITIATIVE FOR DEVELOPMENT, EDUCATION AND LEARNING (IDEAL)
                      </span>
                      <br />
                      <br />Building a community for socially responsible citizens and letting actions speak in the achievement of SDG GOAL 4, GOAL 7 AND GOAL 17.
                      <br />we create the platform for colaborations, reflexity, and idea nuturing and community project implementation!!!BE A PART OF IT TODAY……
                      <br />
                      <br />
                      <div class="text-center">
                        <router-link to="/">
                          <v-btn rounded color="success" dark>See More</v-btn>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="div1">
          <div style=" height:100%" class="cov">
            <div class="card-size">
              <div class="card-body" style>
                <div style="margin-top:px ; ">
                  <div
                    class="car card-text white--text font-weight-regular"
                    style="margin-left:40px; margin-right:40px"
                  >
                    <br />
                    <br />
                    <div class="car-text">
                      <span class="car-head" style>PROFESSIONAL EDUCATION</span>
                      <br />
                      <br />Our professional education programs enable learners acquire content knowledge and learn to apply techniques relevant to jobs and careers across the
                      <strong>Information Technology</strong> and
                      <strong>Business Development</strong> spectrum.
                      <br />On completion, participants are able to develop cutting-edge skills, earn must-have certifications as well as learn best practices for a rewarding long-term career.
                      <br />
                      <br />
                      <div class="text-center">
                        <router-link to="/prof">
                          <v-btn rounded color="success" dark>See More</v-btn>
                        </router-link>
                      </div>
                    </div>

                    <br />
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="div2">
          <div style=" height:100%" class="cov">
            <div class="card-size">
              <div class="card-body" style>
                <div style="margin-top:90px ; ">
                  <div class="card-text white--text font-weight-regular">
                    <br />
                    <br />
                    <div class="car-text" style="margin-top:-60px">
                      <span class="car-head">ICM UK Approved Center</span>
                      <br />
                      <br />The Institute of Commercial Management (ICM) UK is a leading professional body
                      <br />providing qualifications at
                      <strong>Certificate, Diploma, Advanced Diploma, Graduate Diploma and Post Graduate Diploma</strong> levels
                      <br />that are recognized globally in business, management and related vocational
                      <div class="text-center">
                        <br />
                        <br />
                        <router-link to="/icm">
                          <v-btn rounded color="success" dark>See More</v-btn>
                        </router-link>
                      </div>
                    </div>

                    <br />
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="div3">
          <div style=" height:100%" class="cov">
            <div class="card-size">
              <div class="card-body" style>
                <div style="margin-top:90px ; ">
                  <div
                    class="card-text white--text font-weight-regular"
                    style="margin-left:40px; margin-right:40px"
                  >
                    <br />
                    <br />
                    <div class="car-text" style="margin-top:-60px">
                      <span class="car-head">TRAIN-THE-TRAINER WORKSHOPS</span>
                      <br />
                      <br />
                      <br />Our Train-the-trainer workshops are designed for trainers who need training to improve and professionalize
                      <br />their current methods of instruction or wish to engage in careers.
                      <br />
                      <br />
                      <div class="text-center">
                        <router-link to="/train">
                          <v-btn rounded color="success" dark>See More</v-btn>
                        </router-link>
                      </div>
                    </div>

                    <br />
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="div4">
          <div style="; height:100%" class="cov">
            <div class="card-size">
              <div class="card-body">
                <div style="margin-top:90px ; ">
                  <div
                    class="card-text white--text font-weight-regular"
                    style="margin-left:40px; margin-right:40px"
                  >
                    <br />
                    <br />
                    <div class="car-text" style="margin-top:-60px">
                      <span class="car-head">TEST PREPARATION</span>
                      <br />
                      <br />Acquire exceptional support to improve your exam techniques
                      <br />and increase your performance on standardized
                      <br />tests like IELTS, PTE, Cambridge English, SAT, ACT, GRE and GMAT.
                      <br />
                      <br />
                      <div class="text-center">
                        <router-link to="/test">
                          <v-btn rounded color="success" dark>See More</v-btn>
                        </router-link>
                      </div>
                    </div>

                    <br />
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="div5">
          <div style="height:100%" class="cov">
            <div class="card-size">
              <div class="card-body" style>
                <div style="margin-top:90px ; ">
                  <div
                    class="card-text white--text font-weight-regular"
                    style="margin-left:40px; margin-right:40px"
                  >
                    <br />
                    <br />
                    <div class="car-text" style="margin-top:-60px">
                      <span class="car-head">OVERSEAS ADMISSION CONSULTING</span>
                      <br />
                      <br />We have a unique track record of enlisting students with diverse
                      <br />qualifications and career drives into our partner foreign universities and colleges.
                      <br />
                      <br />
                      <div class="text-center">
                        <router-link to="/over">
                          <v-btn rounded color="success" dark>See More</v-btn>
                        </router-link>
                      </div>
                    </div>

                    <br />
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </header>

    <div>
      <v-container>
        <div class="row" style=" ">
          <!-- <div class="col-md-4 sm-12">
            <v-img src="../assets/first.jpeg">
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </div>-->

          <div class="col-md-12">
            <h3 class="dislay-1 font-weight-light" style="color:black;text-align:center">
              Who we are
              <hr
                style="color:orange; width:90px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
              />
            </h3>

            <div
              style="font-size:20px; background-color: rgba(21, 22, 21, 0.4); margin:20px;
                    padding:10px; text-align:center; border-radius:5px "
            >
              <div
                class="headline font-weight-light"
                style="text-align:center; padding:0px; color:white; padding-bottom; padding-top:0px"
              >INITIATIVE FOR DEVELOPMENT EDUCATION AND LEARNING (IDEaL) was founded by young professionals who believe that youth can contribute significantly to building a better society. Having identified the challenges faced in gaining quality education, access to information, value orientation as well as their existing gaps</div>
              <br />
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <!-- <div class="col-md-8">
            <h2 class="dislay-1" style="color:#f4c542">Vision</h2>
            <hr style="width:100px" />
            <div class="headline font-weight-light">
              INITIATIVE FOR DEVELOPMENT EDUCATION AND LEARNING provides information, support and services in areas that can lead to individuals achieving success and leading productive lives.
              By using ICT as a springboard, our mission and vision is geared towards improving the chances of people making more informed choices and creating new frontiers for them to improve their lives.
            </div>
          </div>
          <div class="col-md-4 sm-12">
            <v-img src="../assets/second.svg">
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </div> -->
          <!-- Button trigger modal -->

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <v-card flat>
                    <v-card-title>
                      <span class="headline">kindly fill the form</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field label="first name" v-model="project.fname" required></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              label="last name"
                              v-model="project.lname"
                              persistent-hint
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field label="Email" v-model="project.email" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field label="Phone" v-model="project.phone" required></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="12">
                            <v-select
                              :items="items"
                              label="Interests"
                              multiple
                              v-model="project.interests"
                              chips
                              hint="Interests"
                              persistent-hint
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                  </v-card>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" v-on:click="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </div>

    <!-- Page Content -->
    <!-- <section class="py-5">
      <div class="container">
        <h1 class="font-weight-light">Half Page Image Slider</h1>
        <p class="lead">
          The background images for the slider are set directly in the HTML using inline CSS. The images in this snippet are from
          <a href="https://unsplash.com">Unsplash</a>!
        </p>
      </div>
    </section>-->

    <section class="service-sec" id="benefits">
      <v-parallax src="../assets/black.jpg" height="500px">
        <div class="row" style="background-color:black; opacity: 0.8; text-align:center">
          <div class="col-md-12">
            <div class="heading">
              <div>
                <h3
                  class="dislay-1 font-weight-light"
                  style="color:white;text-align:center; margin-top:15px"
                >
                  SUPPORT A PROJECT
                  <br />
                  <hr
                    style="color:orange; width:90px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                  />
                </h3>

                <hr style="width: 100%; color: black; height: 1px;" />

                <br />“COLLECTIVELY WE COULD ENSURE THAT CHILDREN GO TO SCHOOL AND ALSO REMAIN IN SCHOOL” - IDEAL
                <small>
                  <br />“Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family”.
                  <br />~ Kofi Anan ~
                </small>
              </div>
              <br />

              <div class="row" style="text-align:center">
                <div class="col-md-2 subtitle-2 font-weight-black">
                  <v-icon large color="success darken-2">mdi-book-open-variant</v-icon>
                  <div class="demo-content">SCHOOL BOOKS</div>
                </div>

                <div class="col-md-2 subtitle-2 font-weight-black">
                  <v-icon large color="success darken-2">mdi-tshirt-v</v-icon>
                  <div class="demo-content">UNIFORMS</div>
                </div>
                <div class="col-md-2 subtitle-2 font-weight-black">
                  <v-icon large color="success darken-2">mdi-cash</v-icon>
                  <div class="demo-content">FEES</div>
                </div>
                <div class="col-md-2 subtitle-2 font-weight-black">
                  <v-icon large color="success darken-2">mdi-home</v-icon>
                  <div class="demo-content">SCHOOL RENOVATION</div>
                </div>
                <div class="col-md-2 subtitle-2 font-weight-black">
                  <v-icon large color="success darken-2">mdi-teach</v-icon>
                  <div class="demo-content">TRAINING</div>
                </div>
                <div class="col-md-2 subtitle-2 font-weight-black">
                  <v-icon large color="success darken-2">mdi-server-network</v-icon>
                  <div class="demo-content">COMPUTER SERVER</div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4" style="margin-top: 30px;  margin-bottom: 30px; ">
                  <button
                    type="button"
                    class="btn orange darken-"
                    color="red"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >Support a project</button>
                </div>
                <div class="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </v-parallax>

      <template>
        <div class="display-1" style="margin-top:40px; text-align:center; color:black ">
          OUR PARTNERS
          <hr
            style="color:orange; width:90px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
          />
        </div>
        <hooper
          :settings="hooperSettings"
          :progress="true"
          :autoPlay="true"
          :playSpeed="4000"
          style="margin-bottom:20px; margin-left:-25px "
        >
          <slide>
            <v-col style>
              <img
                src="../assets/toefl.png"
                style=" display: block;
   width: 150px;
    height: 100px; text-align:center; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/icm.jpeg"
                style=" display: block;
   width: 150px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/pea.jpeg"
                style=" display: block;
    width: 150px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/cisco.png"
                style=" display: block;
    width: 150px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/nsrp.png"
                style=" display: block;
   width: 150px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/nde.jpeg"
                style=" display: block;
  width: 150px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
        </hooper>
      </template>
    </section>
    <foota></foota>
  </div>
</template>
  
<script>
import { Services } from "../service";
var serv = new Services();
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import foota from "../components/footer";
// import nava from "../components/nav";
import nav2 from "../components/newNav";

export default {
  components: {
    Hooper,
    Slide,
    foota,
    // nava,
    nav2
  },

  data: () => ({
    hooperSettings: {
      itemsToShow: null,
      centerMode: true,
      infiniteScroll: true,
      progress: true,
      autoreplay: true,
      playspeed: 1000
    },
    image: { backgroundImage: "url('../../images/banner.jpg')" },
    news: [],
    msg: "heyyy",
    dialog: false,
    showNews:true,
    items: [
      "fees",
      " school renovations",
      "uniforms",
      "trainings",
      "computer server",
      "school books"
    ],
    project: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      interests: ""
    },
    itemss: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ]
  }),
  created() {
    this.isMobile();
    this.initialize();
    this.showNewss()
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
    },
    showNewss(){
       setInterval(function(){
         this.showNews =! this.showNews
          // eslint-disable-next-line no-console
          console.log(this.showNews, );
       },1000)
    },
    test: function() {
      serv.testers();
      alert("see me");
    },
    submit: function() {
      let newData = {
        fname: this.project.fname,
        lname: this.project.lname,
        email: this.project.email,
        phone: this.project.phone,
        Interests: this.project.interests
      };
      alert(newData);
      serv.postRequest("proj/newProj", newData);
    },
    isMobile() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // var element = document.getElementById("text");
      if (isMobile) {
        // alert("u are using mobile");
        this.hooperSettings.itemsToShow = 1;
      } else {
        // alert("you are on desktop");
        this.hooperSettings.itemsToShow = 5;
      }
    }
  }
};
</script>



<style  scoped lang="css">
@import url("https://fonts.googleapis.com/css?family=Alegreya|Lora:700&display=swap");
header {
  padding-top: 110px;
}
.carousel-item {
  height: 85vh;
  min-height: 0px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.cov {
  background-color: rgba(21, 22, 21, 0.6);
}
.vl {
  border-left: 2px solid green;
  height: 50px;
}
.div1 {
  background-image: url("../assets/imgbook.jpg");
  background-size: cover;
}
.div2 {
  background-image: url("../assets/ideal5.jpg");
  background-size: cover;
}
.div3 {
  background-image: url("../assets/ideal10.jpg");
  background-size: cover;
}
.div4 {
  background-image: url("../assets/ideal15.jpg");
  background-size: cover;
}
.div5 {
  background-image: url("../assets/ideal6.jpg");
  background-size: cover;
}
.div13 {
  background-image: url("../assets/ideal13.jpg");
  background-size: cover;
}
.card-size {
  font-size: 30px;
}
/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .car {
    font-size: 2px;

    margin: 0px;
  }
  .car-head {
    font-size: 18px;
    color: orange;
    text-align: center;
    padding-top: 50px;
    font-family: "lora";
  }
  .car-text {
    font-size: 16px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 40px;
    padding-top: 20px;
    text-align: center;
    font-family: "roboto";
  }
  .cov {
    background-color: rgba(21, 22, 21, 0.9);
    padding-top: 0px;
  }
  .caro {
    margin-top: px;
  }
  .news {
    margin-top: 100px;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  body {
    background-color: #f5cf8e; /* Yellow */
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  body {
    background-color: #b2d6ff; /* Blue */
  }
  .car {
    padding: 60px;
  }
  .car-head {
    font-size: 34px;
    color: orange;
    text-align: center;
    padding-bottom: 80px;
    font-family: "lora";
  }
  .car-text {
    font-size: 21px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
    font-family: "Alegreya";
  }
}
</style>

