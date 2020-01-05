<template>
  <div style="width:100%">
    <nava />

    <!-- who we are -->

    <div class="primary" style="padding:100px; ">
      <h1 class="display-3 white--text font-weight-bold">OUR MAJOR GOAL!!</h1>
      <hr class="my-4" />
      <!-- card -->
      <div
        class="card"
        style="width: 50rem;margin:20px;  background: rgba(76, 175, 80, 0.1); border-radius: 25px;
  border: 2px solid white"
      >
        <div class="card-body" s>
          <p
            class="card-text white--text font-weight-regular"
          >Our major goal is to improve the living standards of people by providing information, support and services that meets today's education and human capacity challenges as well as make ICT a strategic lever for building a knowledge-based society.</p>
          <h4 class="card-subtitle mb-2 white--text font-weight-bold">Vision</h4>
          <hr class="my-4" style=" border-top: 1px solid white;" />
          <p
            class="card-text white--text font-weight-regular"
          >Develop individuals and communities towards a knowledge-based society.</p>
        </div>
      </div>
    </div>

    <div class="img" style="padding:50px">
      <h1 class="display-3 white--text font-weight-bold" style="text-align:center">MISSION</h1>
      <hr class="my-4" />

      <div class="container">
        <div class="row">
        
          <div class="col-sm col-md-8">
            <div
              class="card"
              style="width: 50rem;  background: rgba(0, 0, 0, 0.1); border-radius: 25px;
  border: 2px solid white;"
            >
              <div class="card-body" s>
                <p
                  class="display-1 card-text white--text font-weight-regular"
                >Provide <span class="primary--text">quality</span> assured learning services, programs and support through a constant upgrade of knowledge, skills and strategic partnerships that will build self-reliant individuals and developed communities..</p>
                
                <hr class="my-4" style=" border-top: 1px solid white;" />
               
              </div>
            </div>
          </div>
        </div>
      </div>lkijnpk
      <!-- card -->
    </div>

    <div class="" style="padding:50px">
      <h1 class="display-3 black--text font-weight-bold">OUR APPROACH
</h1>
      <hr class="my-4" />
      
      <!-- card -->
      <div
        class="card"
        style="width: 50rem;  background: rgba(76, 175, 80, 0.1); border-radius: 25px;
  border: 2px solid black"
      >
        
        <div class="card-body" style>
          <p
            class="card-text black--text font-weight-regular"
          >In our ever globalizing world where there are constant introductions of new technologies, ground breaking inventions and disruptions, there is a need for a critical look on how individuals can be a part of all these successes. This is why ICT is an integral part of all our programmes, serving as a platform where opportunities are boundless.,</p>
        </div>
      </div>
      <div class="col-sm col-md-3 display-3 mt-4 font-weight-bold" style="color:rgb(102, 179, 255)">
      IDEAL IT CENTER
          </div>
    </div>
    <foota/>
  </div>
</template>

<script>
import nava from "../components/nav";
import foota from '../components/footer'
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
  background-image: url("../assets/y.jpg");
}
</style>