<template>
  <div>
    <nav2 />
    <div style="padding-top:80px">
      <div>
        <div class="big-text">IDeal IT Services</div>
      </div>
      <div class="row" style="margin-left:30px; margin-right:30px">
        <div style="padding:3px" class="col-md-7">
          <v-hover v-slot:default="{ hover }">
            <router-link  to="capacity" style>
              <v-card class="cardA" max-width height="300">
                <div>
                  <div style="padding:5%; color:white; font-weight: bold;">Capacity Development</div>

                  <div
                    transition="slide-x-transition"
                    v-if="hover"
                    class="d-flex darken-2 v-card--reveal white--text"
                    style="height: 100%;"
                  >
                    <div
                      class="animate__animated animate__fadeIn card-text"
                    >We focus on increasing organizations' strength by measuring internal successes, constraints and external impacts.</div>
                  </div>
                </div>
              </v-card>
            </router-link>
          </v-hover>
        </div>

        <div style="padding:3px" class="col-md-5">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardB" max-width height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Sport Development</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn card-text"
                  >Our sport development projects aim at devising better and more effective ways of promoting interest, participation and performance of sport in communities.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
        <div style="padding:3px" class="col-md-12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardC" max-width height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Digital Inclusion</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn card-text"
                  >We provide a practical approach to addressing the needs of individuals and communities to embrace the digital age fully.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
        <div style="padding:3px" class="col-md-5">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardD" max-width height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Train The Trainer</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn card-text"
                  >Our Train-the-trainer designed workshops meet trainers' needs, improve and professionalize in their career path.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
        <div style="padding:3px" class="col-md-7">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardE" max-width height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Internship</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn card-text"
                  >We have an unequaled track record of enlisting students with diverse qualifications and career drives into many foreign universities and colleges. We help to secure study admissions and have had students who are constantly happy with our results.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
        <div class="big-text">IDeal IT Services</div>
      </div>
    </div>
    <foota />
  </div>
</template>

<script>
import nav2 from "../components/newNav";
import foota from "../components/footer";
export default {
  components: {
    // nava,
    nav2,
    foota,
  },
  data: () => {},
};
</script>


<style lang="css" scoped>
.big-text {
  padding-top: 35px;
  padding-bottom: 50px;
  padding-left: 150px;
  padding-right: 150px;
  color: #1b6761;
  text-align: center;
  /* margin-bottom: 57px; */
  font-size: 50px;
  font-family: "Open Sans", sans-serif;
}
.animate__animated.animate__backInDown {
  --animate-duration: 0.5s;
}
.cardA {
  background-image: url("../assets/slide3.jpg");
  background-size: cover;
}
.cardB {
  background-image: url("../assets/sport-what-we-do.jpg.jpg");
  background-size: cover;
}
.cardC {
  background-image: url("../assets/digital-what-we-do.jpg");
  background-size: cover;
  background-position: center;
}
.cardD {
  background-image: url("../assets/trainb.jpg");
  background-size: cover;
}
.cardE {
  background-image: url("../assets/intern-what-we-do.jpg");
  background-size: cover;
  background-position: center;
}
.card-text {
  color: white;
  text-align: left;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 20px;
}
.cardA:hover {
  background: rgba(9, 46, 43, 1);
}
.cardB:hover {
  background: rgba(9, 46, 43, 1);
}
.cardC:hover {
  background: rgba(9, 46, 43, 1);
}
.cardD:hover {
  background: rgba(9, 46, 43, 1);
}
.cardE:hover {
  background: rgba(9, 46, 43, 1);
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

.footer {
  width: 50%;
  margin-left: 25%;
  text-align: center;
  font-family: "Julius Sans One", sans-serif;
  margin-top: 24px;
}

.container {
  max-width: 720px;
  margin: 24px auto 48px auto;
}

@media only screen and (max-width: 400px) {
  .big-text {
    padding-top: 25px;
    padding-bottom: 30px;
    padding-left: 0px;
    padding-right: 00px;
    color: #1b6761;
    text-align: center;
    /* margin-bottom: 57px; */
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
  }
  .card-text {
    color: white;
    text-align: left;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 15px;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
}

/* Craeted refering to LittleSnippets.net Pen: https://codepen.io/littlesnippets/pen/adLELd */
</style>