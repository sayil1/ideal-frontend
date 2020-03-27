<template>
  <div style="background-color:">
    <nava />
    <div style="background-color: ">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.9)">
          <div style="margin-top: ; ">
            <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
              <div class="car-text">
                <span class="car-head white--text" style>TOEFL</span>
                <hr
                  style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                />
                
                 
                   <router-link to="cont" class="success--text" style="text-decoration:none;"><v-btn class="ma-2" outlined color="success">Contact Us</v-btn></router-link>
                 
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body" style>
      <!-- card -->
      <div class="row">
        <div class="col-sm-12 col-md-12" style="margin-bottom:0px">
          <div class="sub-body" style>
            <div class style>
              <p class="--text">
                The
                <strong>Test of English as a Foreign Language® TOEFL</strong>is a standardized test that measures the ability of non- native speakers to use and understand English at the university level, evaluating how well they combine reading, listening, speaking and writing skills to perform academic tasks.
                <br />
                <br />As an
                <strong>Authorized TOEFL iBT® Test center</strong> , we administer the test all year round, particularly on weekends. Due to the high demand for the test, seats fill up quickly, so students are encouraged to register ahead of time in order to get their preferred test dates.
                <br />
                <br />
                <strong v-subheader>Why Take the TOEFL Test?</strong>
                <br />
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="rgb(35)">
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
        <!-- <div class="col-sm col-md-2" style="margin-top:50px" v-if="image==true">
            <v-img src="../assets/toefl.png" style=" width:300px"></v-img>
        </div>-->
      </div>
      <div class style>
        <!-- card -->
        <div class="row sub-body">
          <div class="col-sm col-md-2" style="margin-top:50px" v-if="image==true">
            <v-img src="../assets/toefl.png" style=" width:300px"></v-img>
          </div>
          <div class="col-sm-12 col-md-10">
            <div class="card-size" style=" ;">
              <div class="card-body" style>
                <p class="card-text --text font-weight-regular">
                  <strong>Who Takes the TOEFL Test?</strong>
                  <br />
                  <br />More than 35 million people from all over the world have taken the TOEFL test to demonstrate their English-language proficiency.
                  <v-list dense>
                    <!-- <v-subheader>REPORTS</v-subheader> -->
                    <v-list-item-group v-model="item2" color>
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
                      class="card-text --text font-weight-regular mt-3"
                    >IMPORTANT UPDATE: Every test taker is expected to present a valid international passport to be allowed to take the TOEFL iBT® test. <router-link to="cont">Contact us</router-link> for more information </div> 
                  </v-list>
                </p>
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
import nava from "../components/nav";
import foota from "../components/footer";
export default {
  components: {
    nava,
    foota
  },
  data: () => ({
    item: 1,
    image: true,
    item2: 1,
    items: [
      { text: "More Popular with students", icon: "mdi-numeric-1" },
      { text: "More Prefered by Universities", icon: "mdi-numeric-2" },
      { text: "Makes Dreams come True", icon: "mdi-numeric-3" },
      { text: "Better for Success in The Classroom", icon: "mdi-numeric-4" },
      { text: "100% Fair and Unbiased Scoring", icon: "mdi-numeric-5" }
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

<style scoped lang="css">
template {
  margin-left: 40px;
  margin-right: 40px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.div1 {
  background-image: url("../assets/toeflb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
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
  .body {
    margin-top: 40px;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 20px;
    color: black;
  }
  .sub-body {
    font-size: 15px;
  }
  .car {
    padding: 30px;
  }
  .car-head {
    font-size: 40px;
    color: black;
    text-align: center;

    padding-top: 90px;
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