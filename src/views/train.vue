<template>
  <div style="background-color:">
    <nava />
    <div class="card-size">
          <div class="card-body" style>
            <div style="margin-top:120px ; ">
              <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
                <div class="car-text">
                  <span class="car-head orange--text" style>TRAIN-THE-TRAINER WORKSHOPS</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
    <div class style>
      <!-- card -->
      <div class="row" style=";">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                Our Train the Trainer program empowers teachers/trainers to improve and professionalize their current methods of instruction and understand how people learn.
                <br />
                <br />Participants will have a comprehensive understanding of the Training and Development industry as well as training packaging. Some areas of focus include:
                <br />

                <br />
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content color="orange">
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>They will also develop on the main areas of Training and Assessment including design, delivery, and assessment.
              </p>
              <div style="text-align:center; color:orange" class="display-1">Our Targets</div>

              <v-list dense>
                <!-- <v-subheader>REPORTS</v-subheader> -->
                <v-list-item-group v-model="item" color="
                ">
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
        <div class="col-sm col-md-4" style="padding-top:150px" v-if="image==true">
          <v-img src="../assets/train1.svg" style=" width:700px"></v-img>
        </div>
      </div>
    </div>
    <div class style="margin-top:50px; margin-bottom:50px">
      <!-- card -->
      <div class="row">
        <div class="col-sm col-md-4" style="padding-top:120px" v-if="image == true">
          <v-img src="../assets/train2.svg" style=" width:700px"></v-img>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                <strong class="display-1 orange--text">Workshops Structure</strong>
                <br />
                <br />The scope of training and support each learner requires will vary according to their existing involvement, knowledge and skills in this area.
                IDEaL Train-the-trainer workshops have three student cohorts:
                <v-list-item>
                  <v-list-item-content class="--text">
                    <v-list-item-title>Beginner Cohort</v-list-item-title>
                    <v-list-item-subtitle>require little or no knowledge/skill in the competence contained in this qualification.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="--text">Intermediate Cohort</v-list-item-title>
                    <v-list-item-subtitle>should possess limited prior knowledge and skill in the competence contained in this qualification.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="--text">Advanced Cohort</v-list-item-title>
                    <v-list-item-subtitle>Consists of individuals with a broad knowledge and skill in the competence contained in this qualification. Related industry work experience of one year or more.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>Please send a message on available options, dates and needs.
                <br />
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
    image:true,
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
  }),
  created() {
    this.isMobile();
  },
  methods: {
    isMobile() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // var element = document.getElementById("text");
      if (isMobile) {
        // alert(this.image);
        this.image = false;
      } else {
        // alert(this.image);
        this.image = true;
      }
    }
  }
};
</script>

<style lang="css">
template {
  margin-left: 10px;
  margin-right: 10px;
}

@media only screen and (max-width: 400px) {
  .car {
    font-size: 2px;

    margin: 0px;
  }
  .car-head {
    font-size: 40px;
    color: black;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
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
    font-size: 40px;
    color: black;
    text-align: center;
    padding-bottom: 50px;
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