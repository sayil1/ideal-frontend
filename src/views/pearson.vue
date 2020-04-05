<template>
  <div style="background-color:">
    <nava />
    <div style="background-color: ">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.9)">
          <div style=" ; ">
            <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
              <div class="car-head">
                <span class="white--text" style>PEARSON VUE CENTER</span>
                <hr
                  style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                />

                <router-link to="cont" class="success--text" style="text-decoration:none;">
                  <v-btn class="ma-2" outlined color="success">Contact Us</v-btn>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-alert style="margin:10px" type="success" border="right">
      <p class="car-text --text font-weight-regular">
        Kindly note that due to the high number of exams offered, we cannot provide details on individual exams via call or live chat.
        For information on a specific exam duration, fee, language, etc., please refer to the
        <strong>
          <a style="color:orange;" href="http://home.pearsonvue.com">website</a>
        </strong> of the particular provider.
        <!-- <br />Please note: You can register for exams directly with Pearson VUE at no added cost. Our test center is open on Tuesdays and Thursdays from 10:00 to 16:00.
        <br />-->
      </p>
      <p class="card-text font-weight-regular"></p>
    </v-alert>
    <div class="body" style>
      <!-- card -->
      <div class="row" style="background-color:rgb();">
        <div class="col-sm-12 col-md-12" style="margin-bottom:70px">
          <div class style>
            <div class style>
              <p class="car-text --text font-weight-regular">
                <br />
                <strong>PEARSON VUE CENTER</strong>
                <br />Our Authorized Pearson VUE Test center runs IT certification examinations for leading vendors like Microsoft, Cisco, Nursing and Midwifery Council (NMC), PMI, Linux, Juniper, Oracle, CompTIA, CIW, HP, PeopleCert etc.
                <br />
                <br />
                <strong>IT CERTIFICATIONS</strong>
                are recognized worldwide and serve as benchmarks to specific skills set based on standardized testing. They help demonstrate your dedication and technical knowledge on a specific platform.
                <br />Once earned, IT Certifications can you help achieve the following:
                <v-list dense class="row">
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="rgb()" class="col-md-9">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                  <div class="col-sm col-md-3" style="padding-top:100px" v-if="image==true">
                    <v-img src="../assets/pea.png" style=" width:300px"></v-img>
                  </div>
                </v-list>
              </p>
              <div class="car-text">
                <router-link to="cont">Contact us </router-link>for more information
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
    item: 1,
    image: true,
    item2: 1,
    items: [
      { text: "Getting Hired", icon: "mdi-charity" },
      { text: "Job Retention", icon: "mdi-briefcase" },
      { text: "Promotion", icon: "mdi-arrow-up-bold" },
      { text: "Networking Opportunities", icon: "mdi-lan-connect" },
      { text: "Professional Credibility", icon: "mdi-briefcase-check" },
      { text: "New and Current Technologies", icon: "mdi-arrow-up-bold" },
      { text: "Personal Goal", icon: "mdi-check-decagram" },
      {
        text: "Professional or Corporate Requirement",
        icon: "mdi-bullseye-arrow"
      }
    ],
    items2: [
      {
        text: "Students planning to study at a higher education institution",
        icon: "mdi-school"
      },
      {
        text: "English-language learning program admissions and exit",
        icon: "mdi-school-outline"
      },
      {
        text: "Scholarship and certification candidates",
        icon: "mdi-page-next"
      },
      {
        text: "English-language learners who want to track their progress",
        icon: "mdi-radar"
      },
      { text: "Students and workers applying for visas", icon: "mdi-passport" }
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
.div1 {
  background-image: url("../assets/infob.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
}
@media only screen and (max-width: 400px) {
  .body {
    margin-top: 30px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 20px;
    color: black;
    font-size: 15px;
  }
  .car {
    font-size: 2px;

    margin: 0px;
  }
  .car-head {
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 50px;
    font-family: "lora";
    text-align: center;
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 10px;
    text-align: left;
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
    font-size: 15px;
  }
  .car {
    padding: 30px;
  }
  .car-head {
    font-size: 34px;
    text-align: center;
    font-family: "Lora";
  }
  .car-text {
    font-size: 21px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: left;
    border-radius: 45px;
    font-family: "Alegreya";
  }
}
</style>