<template>


  <div class="goals" style="margin-top:0px">

       <div class=" " style=" margin-left:40px">
                  <h3 class="bold" style="color:orange; margin-top:10px;">Other available classes</h3>
                  <hr style="color:orange; width:90px; margin-left:9px; border: 2px solid #092E2B;" />
                </div>

    <div class="row links" style="padding-top:40px;padding-bottom:90px;  height:100%;">
      <div class="col-md-4 col-sm-12">
         <router-link style="text-decoration:none"  class="route" to="pearson">
        <div class="card1" style="background: ; width:75%; ">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              
            </v-img>

            <v-card-title style="text-decoration:none"  class="pb-3  links bold orange--text">PEARSON VUE</v-card-title>

            <v-card-text class="text--primary links">
             

              <div style="text-decoration:none" >Get expert recommendations and prep options, strategies in numeric entry and quantitative comparison. We show you how to think.</div>
            </v-card-text>
<!-- 
            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>

              <v-btn color="orange" text>Explore</v-btn>
            </v-card-actions> -->
          </v-card>
        </div>
         </router-link>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="card2" style=" width:75%; ">
           <router-link  style="text-decoration:none" class="route" to="icm">
            <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
   
    </v-img>

    <v-card-title class="pb-3 bold orange--text">ICM UK QUALIFICATION</v-card-title>

    <v-card-text class="text--primary">
    

      <div>Improve your chances of getting a scholarship by joining our list of past SAT students who’ve scored an average of 1300.</div>
    </v-card-text>

  
  </v-card>
           </router-link>
        </div>
      </div>

      <div class="col-md-4 col-sm-12">
        <div class="card3" style="width:75%; ">
            <router-link  style="text-decoration:none" class="route" to="toefl">
            <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/profb.jpg"
    >
     
    </v-img>

    <v-card-title class="pb-3 bold orange--text">TOEFL</v-card-title>

    <v-card-text class="text--primary">
    

      <div>Get 105 & above. Achieve your highest TOEFL score. Learn from proven, and committed, TOEFL tutors.</div>
    </v-card-text>

  
  </v-card>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Alegreya:400,700&display=swap");
.img {
  /* background-image: url("../assets/ideal10.jpg"); */
  /* filter: grayscale(100%); */
  /* background-size: cover;
  background-position: center; */
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
    margin-left: 30px;
    margin-right: 30px;
    font-size: 16px;
  }
  .card1 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .goals {
    background: white;
    margin-left: 0px;
  }
  .card1 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .aboutIMG {
    height: auto;
    width: 100%;
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
  .aboutTop {
    height: auto;
  }
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
  .goals {
    background: white;
    margin-left: 0px;
  }
  .card1 {
    margin-left: auto;
    margin-right: -60px;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: -60px;
    margin-right: auto;
    height: 100%;
  }
  .aboutIMG {
    height: 120%;
    width: 100%;
    position: cover;
    margin-top: -100px;
  }
}
</style>