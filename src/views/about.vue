<template>
  <div style="width:100%">
    <nava />
    <div class="cont">
      <div class="row">
        <div class="col-md-12">
          <h1 class="car-head" style="text-align:center;">OUR MAJOR GOAL!!</h1>
          <hr
            style="color:black; width:90px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
            class="hr"
          />
        </div>
        <div style="; padding-top:20px" class="col-md-12">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <p
                class="car-text m-text black--text"
                style="margin-top:-50px ; padding:10px"
              >Our major goal is to improve the living standards of people by providing information, support and services that meets today's education and human capacity challenges as well as make ICT a strategic lever for building a knowledge-based society.</p>
            </div>
          </div>
        </div>
      </div>

      <div class>
        <div class="img">
          <div style=" background: rgba(0, 0, 0, 0.4);">
            <div
              class="row"
              style="padding-top:90px;padding-bottom:90px;  height:100%; margin:10px"
            >
              <div class="col-md-4 col-sm-12">
                <div class="card1" style="background: rgba(0, 0, 0, 0.6);; width:75%; ">
                  <div class="-header text-center p-3">
                    <v-icon large color="white darken-2 ">mdi-bullseye-arrow</v-icon>
                    <hr />
                    <h3 class="orange--text bold">OUR MAJOR GOAL</h3>
                  </div>
                  <div class>
                    <!-- <h1><b>$0 </b><small class="text-muted">/ mo</small></h1> -->
                    <div
                      class="text-center white--text pl-3 pr-3"
                    >Our major goal is to improve the living standards of people by providing information, support and services that meets today's education and human capacity challenges as well as make ICT a strategic lever for building a knowledge-based society.</div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="card2" style="background: rgba(0, 0, 0, 0.6);; width:75%; ">
                  <div class="-header text-center p-3">
                    <v-icon large color="white darken-2">mdi-eye</v-icon>
                    <hr />
                    <h3 class="orange--text bold">VISION</h3>
                  </div>
                  <div class>
                    <!-- <h1><b>$0 </b><small class="text-muted">/ mo</small></h1> -->
                    <div
                      class="text-center white--text"
                    >Develop individuals and communities towards a knowledge-based society.</div>
                  </div>
                </div>
              </div>
              <!-- <div class="col-md-4 col-sm-12">
              <div
                class="card"
                style="background: rgba(0, 0, 0, 0.6);height:100%; width:75%; margin-left:auto; margin-right:auto"
              >
                <div class="-header text-center">
                  <v-icon large color="white darken-2">mdi-eye</v-icon>
                  <v-divider></v-divider>
                  <h3 class="my-0 orange--text bold">VISION</h3>
                </div>
                <div class>
                
                  <div
                    class="white--text text-center"
                  >Develop individuals and communities towards a knowledge-based society..</div>
                </div>
              </div>
              </div>-->
              <div class="col-md-4 col-sm-12">
                <div class="card3" style="background: rgba(0, 0, 0, 0.6);; width:75%; ">
                  <div class="-header text-center p-3">
                    <v-icon large color="white darken-2 ">mdi-lightbulb-on</v-icon>
                    <hr />
                    <h3 class="orange--text bold">OUR APPROACH</h3>
                  </div>
                  <div class>
                    <!-- <h1><b>$0 </b><small class="text-muted">/ mo</small></h1> -->
                    <div
                      class="text-center white--text pl-3 pr-3"
                    >In our ever globalizing world where there are constant introductions of new technologies, ground breaking inventions and disruptions, there is a need for a critical look on how individuals can be a part of all these successes. This is why ICT is an integral part of all our programmes, serving as a platform where opportunities are boundless.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="black--text b-head" style="text-align:center; margin-top:30px">OUR APPROACH</h1>
        <hr
          style="color:orange; width:90px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
        />
        <!--  -->
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div style>
              <div class="-text" style>
                <p
                  class="-text b-text"
                >In our ever globalizing world where there are constant introductions of new technologies, ground breaking inventions and disruptions, there is a need for a critical look on how individuals can be a part of all these successes. This is why ICT is an integral part of all our programmes, serving as a platform where opportunities are boundless.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <foota />
  </div>
</template>

<script>
import nava from "../components/newNav";
import foota from "../components/footer";
export default {
  components: {
    nava,
    foota
  },
  data: () => ({
    msg: "heyyy",
    dialog: false
  })
};
</script>


<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Alegreya:400,700&display=swap");
.img {
  background-image: url("../assets/ideal10.jpg");
  /* filter: grayscale(100%); */
  background-size: cover;
  background-position: center;
}

template {
  margin-left: 30px;
  margin-right: 30px;
  font-family: "Alegreya", serif;
}

[class*="col-"] {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  p {
    font-family: "Alegreya", serif;
    padding-left: 30px;
  }
  .card1 {
    margin-left: auto;
    margin-right: auto;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
  }
  .card3 {
    margin-left: auto;
    margin-right: auto;
  }
  .car-head {
    margin-top: 20px;
    margin-bottom: -50px;
  }
  .hr {
    padding-top: -60px;
    font-size: 20px;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .card1 {
    margin-left: auto;
    margin-right: auto;
    height: 50px;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 50px;
  }
  .card3 {
    margin-left: auto;
    margin-right: auto;
    height: 50px;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  p {
    font-family: "Alegreya", serif;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 16px;
  }
  .card1 {
    margin-left: auto;
    margin-right: 0px;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: 0px;
    margin-right: auto;
    height: 100%;
  }
  .car-head {
    margin-top: 60px;
  }
}
</style>