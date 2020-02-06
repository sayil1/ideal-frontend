<template>
  <div style="background-color:">
    <nava />
    <div
      class="jumbotron jumbotron-fluid"
      style="background-color:rgb(35, 159, 216); margin-bottom:0px"
    >
      <div class="container" style="margin-top:80px; margin-bottom:-80px">
        <h1 class="display-2">TRAINING WORKSHOPS</h1>
      </div>
    </div>
    <div class style>
      <!-- card -->
      <div class="row" style="background-color:rgb(35, 159, 216);">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
                Our Train the Trainer program empowers teachers/trainers to improve and professionalize their current methods of instruction and understand how people learn.
                <br />
                <br />Participants will have a comprehensive understanding of the Training and Development industry as well as training packaging. Some areas of focus include:
                <br />

                <br />
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="rgb(35, 159, 216)">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content color="rgb(35, 159, 216)">
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
They will also develop on the main areas of Training and Assessment including design, delivery, and assessment.
              </p>
              <div style="text-align:center; color:rgb(35, 159, 216)" class="display-1">Our Targets</div>

              <v-list dense>
                <!-- <v-subheader>REPORTS</v-subheader> -->
                <v-list-item-group v-model="item" color="rgb(35, 159, 216)">
                  <v-list-item v-for="(item, i) in items2" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
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
                <strong class='display-1'	>Workshops Structure</strong> <br>
                <br />The scope of training and support each learner requires will vary according to their existing involvement, knowledge and skills in this area.
                IDEaL Train-the-trainer workshops have three student cohorts:
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Beginner Cohort</v-list-item-title>
                    <v-list-item-subtitle>require little or no knowledge/skill in the competence contained in this qualification.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Intermediate Cohort</v-list-item-title>
                    <v-list-item-subtitle>should possess limited prior knowledge and skill in the competence contained in this qualification.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>Advanced Cohort</v-list-item-title>
                    <v-list-item-subtitle>Consists of individuals with a broad knowledge and skill in the competence contained in this qualification. Related industry work experience of one year or more.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>Please send a message on available options, dates and needs.
                <br />
              </p>
              <v-btn class="ma-2" outlined color="blue">Send Message</v-btn>
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
      { text: "Design Learning programs", icon: "mdi-chair-school" },
      { text: "Creating Learning Objectives", icon: "mdi-check-all" },
      { text: "Class Arrangements", icon: "mdi-google-classroom" },
      { text: "Training software and tools", icon: "mdi-tools" },
      { text: "Integration of education technology", icon: "mdi-set-center" },
      { text: "Presentations skills", icon: "mdi-presentation-play" }
    ],
    items2: [
      {
        text: "Training Advisor",
        icon: "mdi-teach"
      },
      {
        text: "Workplace Trainer",
        icon: "mdi-account-clock"
      },
      {
        text: "Vocational Education Teacher",
        icon: "mdi-presentation-play"
      },
      {
        text: "Setting up your own Training Organization",
        icon: "mdi-account-settings"
      },
      { text: "Training and Development", icon: "mdi-passport" },
      {
        text: "Any career that requires a Professional Trainer skill-set",
        icon: "mdi-passport"
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