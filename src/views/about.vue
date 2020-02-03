<template>
  <div style="width:100%">
    <nava />

    <!-- who we are -->

    <div  style="padding:50px; padding-top:80px; background-color:rgb(24, 160, 214) ">
      <h1
        class="white--text font-weight-bold"
        style="text-align:center; margin-top:50px"
      >OUR MAJOR GOAL!!</h1>
      <hr class="my-4" />

      <div class="row">
        <div class="col-sm col-md-8">
          <div
            class="card card-size"
            style="  background: rgba(76, 175, 80, 0.1); border-radius: 25px;
  border: 2px solid white; "
          >
            <div class="card-body">
              <p
                class=" card-text white--text font-weight-regular"
              >Our major goal is to improve the living standards of people by providing information, support and services that meets today's education and human capacity challenges as well as make ICT a strategic lever for building a knowledge-based society.</p>
              <h2 class="card-subtitle mb-2 mt-4 white--text font-weight-bold">Vision</h2>
              <hr class="my-4" style=" border-top: 1px solid white;" />
              <p
                class="card-text white--text font-weight-regular"
              >Develop individuals and communities towards a knowledge-based society.</p>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-4">
          <v-img src="../assets/info.svg" style="margin-top:70px; width:700px"></v-img>
        </div>
      </div>

      <!-- card -->
    </div>

    <div class="img" style="padding:50px">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1 class="display-4 white--text font-weight-regular" style=" margin-top:70px">MISSION</h1>
          </div>

          <div class="col-sm col-md-8">
            <div
              class="card card-size"
              style=" background: rgba(0, 0, 0, 0.1); border-radius: 25px;
  border: 2px solid white;"
            >
              <div class="card-body" s>
                <p class=" card-text white--text font-weight-regular">
                  Provide
                  <span class="primary--text">quality</span> assured learning services, programs and support through a constant upgrade of knowledge, skills and strategic partnerships that will build self-reliant individuals and developed  <span class="primary--text">communities</span>.
                </p>

                <hr class="my-4" style=" border-top: 1px solid white;" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- card -->
    </div>

    <div class style="padding:50px">
      <h1 class="display-3 blue--text font-weight-regular" style="text-align:center">OUR APPROACH</h1>
      <hr class="my-4" />

      <!-- card -->
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <div
            class="card card-size"
            style="  background: rgba(76, 175, 80, 0.2); border-radius: 25px;
  border: 2px solid white"
          >
            <div class="card-body" style>
              <p
                class=" card-text blue--text font-weight-regular"
              >In our ever globalizing world where there are constant introductions of new technologies, ground breaking inventions and disruptions, there is a need for a critical look on how individuals can be a part of all these successes. This is why ICT is an integral part of all our programmes, serving as a platform where opportunities are boundless.,</p>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-4">
          <v-img src="../assets/app.svg" style="margin-top:70px; width:700px"></v-img>
        </div>
      </div>
    </div>
    <foota />
  </div>
</template>

<script>
import nava from "../components/testnav";
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
.img {
  background-image: url("../assets/new.jpg");
}

[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {
    width: 8.33%;
  }
  .col-s-2 {
    width: 16.66%;
  }
  .col-s-3 {
    width: 25%;
  }
  .col-s-4 {
    width: 33.33%;
  }
  .col-s-5 {
    width: 41.66%;
  }
  .col-s-6 {
    width: 50%;
  }
  .col-s-7 {
    width: 58.33%;
  }
  .col-s-8 {
    width: 66.66%;
  }
  .col-s-9 {
    width: 75%;
  }
  .col-s-10 {
    width: 83.33%;
  }
  .col-s-11 {
    width: 91.66%;
  }
  .col-s-12 {
    width: 100%;
  }
  .card-size {
    margin: 10px;
    width: 40rem;
    font-size: 10px;
  }
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
  .card-size {
    margin-left: 100px;
    width: 40rem;
    font-size: 25px;
  }
}
</style>