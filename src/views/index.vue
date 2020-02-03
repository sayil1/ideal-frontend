<template>
  <div class>
    <nava />
    <header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div
            class="carousel-item active"
            style="background-image: url('https://source.unsplash.com/RCAhiGJsUUE/1920x1080')"
          >
            <div class="carousel-caption">
              <h3 class="display-3 primary" style="font-size:8vw;">First Slide</h3>
              <p class="lead" style="font-size:2vw;">
                BUILDING A COMMUNITY FOR SOCIALLY RESPONSIBLE CITIZENS AND LETTING ACTIONS SPEAK IN THE ACHIEVEMENT OF SDG GOAL 4, GOAL 7 AND GOAL 17.
                WE CREATE THE PLATFORM FOR COLLABORATION, REFLEXIVITY, AND IDEA NURTURING AND COMMUNITY PROJECT IMPLEMENTATION!!!BE A PART OF IT TODAY……
              </p>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')"
          >
            <div class="carousel-caption">
              <h3 class="display-3 primary" style="font-size:8vw;">Second Slide</h3>
              <p
                class="lead"
                style="font-size:2vw;"
              >OUR PROFESSIONAL EDUCATION PROGRAMS ENABLE LEARNERS ACQUIRE CONTENT KNOWLEDGE AND LEARN TO APPLY TECHNIQUES RELEVANT TO JOBS AND CAREERS ACROSS THE INFORMATION TECHNOLOGY AND BUSINESS DEVELOPMENT SPECTRUM.</p>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('https://source.unsplash.com/O7fzqFEfLlo/1920x1080')"
          >
            <div class="carousel-caption">
              <h3 class="display-3 primary" style="font-size:8vw;">OVERSEAS ADMISSION CONSULTING</h3>
              <p
                class="lead"
                style="font-size:2vw;"
              >WE HAVE A UNIQUE TRACK RECORD OF ENLISTING STUDENTS WITH DIVERSE QUALIFICATIONS AND CAREER DRIVES INTO OUR PARTNER FOREIGN UNIVERSITIES AND COLLEGES.</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>

    <div>
      <v-container>
        <div class="row" style="margin-top:20px">
          <div class="col-md-4 sm-12">
            <v-img src="../assets/first.jpeg">
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </div>
          <div class="col-md-8">
            <h2 class="dislay-1 font-weight-light" style="color:#f4c542">Who we are</h2>
            <hr style="width:100px" />
            <div
              class="headline font-weight-light"
            >INITIATIVE FOR DEVELOPMENT EDUCATION AND LEARNING (IDEaL) was founded by young professionals who believe that youth can contribute significantly to building a better society. Having identified the challenges faced in gaining quality education, access to information, value orientation as well as their existing gaps,</div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-8">
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
          </div>
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
                      <span class="headline">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="12">
                            <v-text-field label="first name*" v-model="project.fname" required></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="12">
                            <v-text-field
                              label="last name*"
                              v-model="project.lname"
                              persistent-hint
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field label="Email*" v-model="project.email" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field label="Phone*" v-model="project.phone" required></v-text-field>
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
                  <button type="button" class="btn btn-primary" v-on:click="submit">Save changes</button>
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
      <v-parallax src="../assets/black.jpg" height="700px">
        <div class="row" style="background-color:black; opacity: 0.8;">
          <div class="col-md-12">
            <div class="heading">
              <h3>
                <br />
                <hr style="width: 100%; color: black; height: 1px; background-color:black;" />
                <small></small>
                <br />“COLLECTIVELY WE COULD ENSURE THAT CHILDREN GO TO SCHOOL AND ALSO REMAIN IN SCHOOL” - IDEAL
                <small>
                  <br />“Knowledge is power.Information is liberating.education is the premise of progress,in every society,in every family” .Kofi Anan
                </small>
                <br />

                <div class="row" style="text-align:center">
                  <div class="col-md-2 subtitle-2 font-weight-black">
                    <v-icon large color="primary darken-2">mdi-book-open-variant</v-icon>
                    <div class="demo-content">SCHOOL BOOKS</div>
                  </div>

                  <div class="col-md-2 subtitle-2 font-weight-black">
                    <v-icon large color="primary darken-2">mdi-tshirt-v</v-icon>
                    <div class="demo-content">UNIFORMS</div>
                  </div>
                  <div class="col-md-2 subtitle-2 font-weight-black">
                    <v-icon large color="primary darken-2">mdi-cash</v-icon>
                    <div class="demo-content">FEES</div>
                  </div>
                  <div class="col-md-2 subtitle-2 font-weight-black">
                    <v-icon large color="primary darken-2">mdi-home</v-icon>
                    <div class="demo-content">SCHOOL RENOVATION</div>
                  </div>
                  <div class="col-md-2 subtitle-2 font-weight-black">
                    <v-icon large color="primary darken-2">mdi-teach</v-icon>
                    <div class="demo-content">TRAINING</div>
                  </div>
                  <div class="col-md-2 subtitle-2 font-weight-black">
                    <v-icon large color="primary darken-2">mdi-server-network</v-icon>
                    <div class="demo-content">COMPUTER SERVER</div>
                  </div>
                </div>
                <hr style="width: 100%; color: black; height: 1px; background-color:black;" />
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >Support a project</button>
              </h3>
            </div>
          </div>
        </div>
      </v-parallax>

      <template>
        <h2 style="margin-top:60px; text-align:center; color:navy">
          OUR PARTNERS
          <hr style="width:150px; margin-left:570px" />
        </h2>

        <hooper
          :settings="hooperSettings"
          :progress="true"
          :autoPlay="true"
          :playSpeed="4000"
          style="margin-bottom:40px"
        >
          <slide>
            <v-col>
              <!-- <v-img src="../assets/1.jpeg" aspect-ratio="2">1
                <div class="fill-height bottom-gradient"></div>
              </v-img>-->
              <img class="col-sm-12" src="../assets/1.jpeg" style="width:7em; height:10em;" />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img class="col-sm-12" src="../assets/2.png" style="width:7em; height:10em;" />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img class="col-sm-12" src="../assets/3.jpeg" style="width:7em; height:10em;" />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img class="col-sm-12" src="../assets/5.png" style="width:7em; height:10em;" />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img class="col-sm-12" src="../assets/5.png" style="width:7em; height:10em;" />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img class="col-sm-12" src="../assets/5.png" style="width:7em; height:10em;" />
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
import nava from "../components/testnav";
export default {
  components: {
    Hooper,
    Slide,
    foota,
    nava
  },

  data: () => ({
    hooperSettings: {
      itemsToShow: 5,
      centerMode: true,
      infiniteScroll: true,
      progress: true,
      autoreplay: true,
      playspeed: 1000
    },
    msg: "heyyy",
    dialog: false,
    items: ["fees", " school renovations", 'uniforms', 'trainings', 'computer server', 'school books'],
    project: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      interests: ""
    }
  }),
  methods: {
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
    }
  }
};
</script>



<style lang="css" scoped>
.carousel-item {
  height: 85vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.vl {
  border-left: 2px solid green;
  height: 50px;
}
</style>

