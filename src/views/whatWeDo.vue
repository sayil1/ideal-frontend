<template>
  <div>
    <nav2 />
    <div style="padding-top:80px">
     <div style="margin-top:0px; padding:30px; background-color:; text-align:center">
         <div class="big-text">
               IDeal IT Services
         </div>
     </div>
      <div class="row" style="margin-left:30px; margin-right:30px">
        <div style="padding:3px" class="col-md-7">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardB" max-width="" height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Capacity Development</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn"
                    style="color:white; text-align:left; padding-left:5%; padding-right:5%;
                    font-size: 25px;"
                  >We focus on increasing organizations' strength by measuring internal successes, constraints and external impacts.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
        <div style="padding:3px" class="col-md-5">
           <v-hover v-slot:default="{ hover }">
            <v-card class="cardB" max-width="" height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Sport Development</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn"
                    style="color:white; text-align:left; padding-left:5%; padding-right:5%;
                    font-size: 25px;"
                  >Our sport development projects aim at devising better and more effective ways of promoting interest, participation and performance of sport in communities.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
         <div style="padding:3px" class="col-md-12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardB" max-width="" height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Digital Inclusion</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn"
                    style="color:white; text-align:left; padding-left:5%; padding-right:5%;
                    font-size: 25px;"
                  >We provide a practical approach to addressing the needs of individuals and communities to embrace the digital age fully.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
          <div style="padding:3px" class="col-md-5">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardB" max-width="" height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Train The Trainer</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn"
                    style="color:white; text-align:left; padding-left:5%; padding-right:5%;
                    font-size: 25px;"
                  >Our Train-the-trainer designed workshops meet trainers' needs, improve and professionalize in their career path.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
          <div style="padding:3px" class="col-md-7">
          <v-hover v-slot:default="{ hover }">
            <v-card class="cardB" max-width="" height="300">
              <div>
                <div style="padding:5%; color:white; font-weight: bold;">Internship</div>

                <div
                  transition="slide-x-transition"
                  v-if="hover"
                  class="d-flex darken-2 v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <div
                    class="animate__animated animate__fadeIn"
                    style="color:white; text-align:left; padding-left:5%; padding-right:5%;
                    font-size: 25px;"
                  >We have an unequaled track record of enlisting students with diverse qualifications and career drives into many foreign universities and colleges. We help to secure study admissions and have had students who are constantly happy with our results.</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
  <div class="big-text">
               IDeal IT Services
         </div>
      </div>
    </div>
        <foota/>

  </div>
</template>

<script>
import nav2 from "../components/newNav";
import foota from "../components/footer"
export default {
  components: {
    // nava,
    nav2,
    foota
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
.cardB {
  background-image: url("../assets/girlLib.jpg");
  background-size: cover;
}
.cardB:hover {
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

h1 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}

h2 {
  font-family: "Julius Sans One", sans-serif;
  font-size: 2.5rem;
}

.row {
  margin-top: 12px;
}

.column {
  display: inline-block;
  text-align: center;
}

figure {
  overflow: hidden;
}

a p {
  color: black;
  margin-top: 8px;
  font-family: "Open Sans", sans-serif;
}

a:hover {
  text-decoration: none;
}

.column img {
  display: block;
  width: 100%;
  height: 300px;
}

/* CSS Image Hover. Created refering to Naoya's Pen: https://codepen.io/nxworld/pen/ZYNOBZ */
/*Sepia*/
.column#sepia img {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#sepia:hover img {
  -webkit-filter: sepia(0);
  filter: sepia(0);
}

/*GrayScale*/
.column#grayscale img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#grayscale:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

/*Zoom In*/
.column#zoomIn img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#zoomIn:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

/*Zoom Out*/
.column#zoomOut img {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#zoomOut:hover img {
  -webkit-transform: scale(1);
  transform: scale(1);
}

/* 3D Transform. Craeted refering to Dudley Storey's Pen: https://codepen.io/dudleystorey/pen/KFLJp */
.tdimension {
  width: 300px;
  height: 300px;
  margin: 20px auto 40px auto;
  perspective: 1000px;
}
.tdimension a {
  display: block;
  width: 100%;
  height: 100%;
  background: url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/e8346826957515.56361c2106f3f.png");
  background-size: cover;
  transform-style: preserve-3d;
  transform: rotateX(70deg);
  transition: all 0.8s;
}
.tdimension:hover a {
  transform: rotateX(20deg);
}
.tdimension a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
  transform: rotateX(90deg);
  transform-origin: bottom;
}

/*With Simple Caption*/
.column#caption {
  position: relative;
}
.column#caption .text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0;
  transition: all 0.8s ease;
}
.column#caption .text h1 {
  margin: 0;
  color: red;
}
.column#caption:hover .text {
  opacity: 1;
  color: brown;
}
.column#caption:hover img {
  -webkit-filter: sepia(80%);
}

/* Craeted refering to LittleSnippets.net Pen: https://codepen.io/littlesnippets/pen/adLELd */
.frame {
  text-align: center;
  position: relative;
  cursor: pointer;
  perspective: 500px;
}
.frame img {
  width: 300px;
  height: 300px;
}
.frame .details {
  width: 70%;
  height: 80%;
  padding: 5% 8%;
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(90deg);
  transform-origin: 50%;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: all 0.4s ease-in;
}
.frame:hover .details {
  transform: translate(-50%, -50%) rotateY(0deg);
  opacity: 1;
}
</style>