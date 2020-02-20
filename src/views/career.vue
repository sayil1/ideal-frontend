<template>
  <div style="background-color:">
    <nava />
     <div style="background-color: ">
      <div class="card-size div1">
        <div class="card-body "  style="background-color: rgba(21, 22, 21, 0.6)">
          <div style="margin-top:120px ; ">
            <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
              <div class="car-text">
                <span class="car-head white--text" style>CAREER DEVELOPMENT</span>
                 <hr
                    style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class style>
      <!-- card -->
      <div class="row" style="background-color:rgb();">
        <div class="col-sm-12 col-md-8" style="margin-bottom:0px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                Career development is the lifelong process of managing your training, learning, work, leisure, and work progress in order to move toward a personally determined and evolving preferred future.
                The IDEAL's Career Development Center supports individuals to make informed decisions regarding their education, training, jobs and future careers by:
                <br />

                <br />
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item>
                    <v-alert
                      color="white"
                      icon="mdi-firework"
                      dense
                    >Listening to their initial ideas, education & skills, experiences, conditions and life goals.</v-alert>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-alert
                      color="white"
                      icon="mdi-firework"
                      dense
                    >Helping them recognize and think through the choices available to them.</v-alert>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-alert
                      color="white"
                      icon="mdi-firework"
                      dense
                    >Outlining possible courses of action</v-alert>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-alert
                      color="white"
                      icon="mdi-firework"
                      dense
                    >Assisting them with strategies that will enable them achieve their goals; these may involve employment, exercises, training, or a mixture of these</v-alert>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-alert
                      color="white"
                      icon="mdi-firework"
                      dense
                    >Supporting them to overcome possible barriers that inhibits them from progressing, and if the need arises, referring them to relevant agencies that could offer further guidance.</v-alert>
                  </v-list-item>
                </v-list>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-4" style="padding-top:150px" v-if="image==true">
          <v-img src="../assets/career1.svg" style=" width:700px"></v-img>
        </div>
      </div>
    </div>
    <hr>
    <div class style="margin-top:0px; margin-bottom:0px">
      <!-- card -->
      <div class="row">
        <div class="col-sm col-md-4" style="padding-top:150px" v-if="image==true">
          <v-img src="../assets/career2.svg" style=" width:700px; "></v-img>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                <span class="car-head car-text orange--text" style>CAREER DEVELOPMENT CENTER</span>
                <br />

                <br />With our career development practitioners who specialize in this area, our work cuts across various settings: private, voluntary, community and educational institutions.
                It work involves:
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list dense>
                    <!-- <v-subheader>REPORTS</v-subheader> -->
                    <v-list-item>
                      <v-alert
                        color="white"
                        icon="mdi-firework"
                        dense
                      >Direct interviews that involves using career guidance skills to have a focused dialogue to help establish the individual's capabilities, inclinations and priorities.</v-alert>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-alert
                          color="white"
                          icon="mdi-firework"
                          dense
                        >Organizing a wide range of careers events and activities, that presents individuals with opportunities to meet representatives from education, training and industry.</v-alert>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-alert
                          color="white"
                          icon="mdi-firework"
                          dense
                        >Working with groups to help participants make decisions about future learning routes, or with job search.</v-alert>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-alert
                          color="white"
                          icon="mdi-firework"
                          dense
                        >Being up-to-date with local and international market trends and developments across various sectors and industries as well as in education, employment and training.</v-alert>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-alert
                          color="white"
                          icon="mdi-firework"
                          dense
                        >Analyzing interests and aptitudes via computer-based tests and guides..</v-alert>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
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
    image: true,
    item2: 1,
    items: [
      {
        text:
          "Listening to their initial ideas, education & skills, experiences, conditions and life goals",
        icon: "mdi-numeric-1"
      },
      {
        text:
          "Helping them recognize and think through the choices available to them",
        icon: "mdi-numeric-2"
      },
      { text: "Outlining possible courses of action", icon: "mdi-numeric-3" },
      {
        text:
          "Assisting them with strategies that will enable them achieve their goals; these may involve employment, exercises, training, or a mixture of these",
        icon: "mdi-numeric-4"
      },
      {
        text:
          "Supporting them to overcome possible barriers that inhibits them from progressing, and if the need arises, referring them to relevant agencies that could offer further guidance.",
        icon: "mdi-numeric-5"
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
  margin-left: 10px;
  margin-right: 10px;
}

.div1 {
  background-image: url("../assets/icmb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center ;
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

    padding-top: 90px;
  }
  .car-text {
    font-size: 25px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
  }}
</style>