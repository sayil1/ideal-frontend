<template>
  <div style="background-color:">
    <nava />
    <div
      class="jumbotron jumbotron-fluid"
      style="background-color:rgb(35, 159, 216); margin-bottom:0px"
    >
      <div class="container" style="margin-top:50px">
        <h1 class="display-2">CAREER DEVELOPMENT CENTER</h1>
        <div></div>
      </div>
    </div>
    <div class style>
      <!-- card -->
      <div class="row" style="background-color:rgb(35, 159, 216);">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
                Career development is the lifelong process of managing your training, learning, work, leisure, and work progress in order to move toward a personally determined and evolving preferred future.
                The IDEAL's Career Development Center supports individuals to make informed decisions regarding their education, training, jobs and future careers by:
                <br />
                
                <br />
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="rgb(35, 159, 216)">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-4">
          <v-img src="../assets/app.svg" style=" width:700px"></v-img>
        </div>
      </div>
    </div>
    <div class style="margin-top:50px; margin-bottom:50px">
      <!-- card -->
      <div class="row">
        <div class="col-sm col-md-4">
          <v-img src="../assets/app.svg" style=" width:700px"></v-img>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
                <span>Who Takes the TOEFL Test?</span>
                <br />More than 35 million people from all over the world have taken the TOEFL test to demonstrate their English-language proficiency.
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item2" color="primary">
                    <v-list-item v-for="(item2, i) in items2" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item2.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item2.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                  <div
                    class="card-text blue--text font-weight-regular mt-3"
                  >Important Update Every test taker is expected to present a valid international passport to be allowed to take the TOEFL iBT® test.</div>
                </v-list>
              </p>
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
    item: 1,
    item2: 1,
    items: [
      { text: "Listening to their initial ideas, education & skills, experiences, conditions and life goals", icon: "mdi-numeric-1" },
      { text: "Helping them recognize and think through the choices available to them", icon: "mdi-numeric-2" },
      { text: "Outlining possible courses of action", icon: "mdi-numeric-3" },
      { text: "Assisting them with strategies that will enable them achieve their goals; these may involve employment, exercises, training, or a mixture of these", icon: "mdi-numeric-4" },
      { text: "Supporting them to overcome possible barriers that inhibits them from progressing, and if the need arises, referring them to relevant agencies that could offer further guidance.", icon: "mdi-numeric-5" }
    ],
    items2: [
      {
        text: "Students planning to study at a higher education institution",
        icon: "mdi-circle-medium"
      },
      {
        text: "English-language learning program admissions and exit",
        icon: "mdi-circle-medium"
      },
      {
        text: "Scholarship and certification candidates",
        icon: "mdi-circle-medium"
      },
      {
        text: "English-language learners who want to track their progress",
        icon: "mdi-circle-medium"
      },
      {
        text: "Students and workers applying for visas",
        icon: "mdi-circle-medium"
      }
    ]
  })
};
</script>

<style lang="css">
template {
  margin-left: 10px;
  margin-right: 10px;
}
</style>