<template>
  <div style="width:100%">
    <nava />

    <!-- who we are -->
    <div class="row">
      <div class="col-md-12">
        <h1
          class="black--text font-weight-bold"
          style="text-align:center; margin-top:150px"
        >OUR MAJOR GOAL!!</h1>
        <hr style="color:blue; width:90px; margin-left:auto; margin-right:auto; border: 2px solid orange;">
      </div>
      <div style="; padding-top:10px" class="col-md-12">
        <div class="row">
          <div class="col-sm col-md-8 car">
            <div class="card card-size">
              <div class="card-body">
                <p
                  class="card-text black--text car-text"
                >Our major goal is to improve the living standards of people by providing information, support and services that meets today's education and human capacity challenges as well as make ICT a strategic lever for building a knowledge-based society.</p>
                <!-- <h2
                  class="card-subtitle mb-2 mt-4 black--text font-weight-bold"
                  style="text-align:center"
                >Vision</h2>
                <hr class="my-4" style=" border-top: 1px solid white;" />
                <p
                  class="card-text black--text  car-text"
                >Develop individuals and communities towards a knowledge-based society.</p>-->
              </div>
            </div>
          </div>
          <div>
            <img style="width:400px; height:auto; " src="../assets/laptop.jpg" />
          </div>
        </div>

        <!-- card -->
      </div>
      <div></div>
    </div>

    <div class="img" style>
      <div class="row">
        <div class="row car col-md-6">
          <div class="col-md-12">
            <h4
              class="white--text font-weight-bold car-head"
              style=" text-align:center; c  "
            >MISSION</h4>
          </div>

          <div class="col-sm col-md-12">
            <div
              class="card card-size"
              style=" background: rgba(0, 0, 0, 0.1); border-radius: 25px;
  border: 2px solid white;"
            >
              <div class="card-body">
                <p class="card-text white--text car-text">
                  Provide
                  <span class="warning--text">quality</span> assured learning services, programs and support through a constant upgrade of knowledge, skills and strategic partnerships that will build self-reliant individuals and developed
                  <span
                    class="warning--text"
                  >communities</span>.
                </p>

                <hr class="my-4" style=" border-top: 1px solid white;" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 car">
          <h4 class="white--text font-weight-bold car-head" style=" text-align:center; margin-top:15px">VISION</h4>

          <div class="col-sm col-md-12">
            <div
              class="card card-size"
              style=" background: rgba(0, 0, 0, 0.1); border-radius: 25px;
  border: 2px solid white; margin-top:17px"
            >
              <div class="card-body" >
                <p
                  class="card-text white--text car-text"
                >Develop individuals and communities towards a knowledge-based society.</p>

                <hr class="my-4" style=" border-top: 1px solid white;" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- card -->
    </div>

    <div >
      <h1
          class="blue--text font-weight-bold"
          style="text-align:center; margin:50px"
        >OUR APPROACH</h1>
    <hr style="color:blue; width:90px; margin-left:auto; margin-right:auto; border: 2px solid black;">
      <!-- card -->
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div
            
            style
          >
            <div class=" car-text" style>
              <p
                class="card-text blue--text font-weight-regular"
              >In our ever globalizing world where there are constant introductions of new technologies, ground breaking inventions and disruptions, there is a need for a critical look on how individuals can be a part of all these successes. This is why ICT is an integral part of all our programmes, serving as a platform where opportunities are boundless.,</p>
            </div>
          </div>
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
 filter: grayscale(100%);
}

[class*="col-"] {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  .car {
    font-size: 2px;

    margin: 0px;
  }
  .car-head {
    font-size: 40px;
    color: orange;
    text-align: center;
    padding-top: 50px;
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 20px;

    text-align: center;
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
    padding: 30px;
  }
  .car-head {
    font-size: 80px;
    color: orange;
    text-align: center;
  }
  .car-text {
    font-size: 25px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
  }
}
</style>