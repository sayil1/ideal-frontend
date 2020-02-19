<template>
  <div style="background-color:">
    <nava />
    <div style="background-color: ">
      <div class="card-size">
        <div class="card-body" style>
          <div style="margin-top:120px ; ">
            <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
              <div class="car-text">
                <span class="car-head orange--text" style>ICM CENTER</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class style>
      <!-- card -->
      <div class="row" style="background-color:;">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                The Institute of Commercial Management (ICM) is the leading professional body providing qualifications that are recognized globally in business, management and related vocational areas. The programmes are designed to address and respond to the training needs as well as the personal development of learners, whether entering or continuing to work within the wide and varied commercial sector.
                <br />
                <br />IDEaL, as an ICM Approved Teaching and Examination Center ensures that the best possible education and support is given to learners in this region.
                <br />
                <br />
                <strong>Subjects</strong>
                <br />
ICM provide qualifications at Certificate, Diploma, Advanced Diploma, Graduate Diploma and Post Graduate Diploma levels on a quarterly basis, covering key industry sector areas such as:
                <span>
                  <v-list-item two-line>
                    <v-list-item-content style="color:rgb">
                      <v-list-item-title
                        class="font-weight-bold"
                      >Engineering and Manufacturing Technologies</v-list-item-title>
                      <v-list-item-title>- Health and Safety</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content style="color:">
                      <v-list-item-title
                        class="font-weight-bold"
                      >Information and Communication Technology (ICT)</v-list-item-title>
                      <v-list-item-title>-Computing</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content style="color:">
                      <v-list-item-title
                        class="font-weight-bold"
                      >Information and Communication Technology (ICT)</v-list-item-title>
                      <v-list-item-title>-Hospitality</v-list-item-title>
                      <v-list-item-title>-Sales Management</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content style>
                      <v-list-item-title class="font-weight-bold">Leisure, Travel and Tourism</v-list-item-title>
                      <v-list-item-title>-Tourism</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-4" style="padding-top:150px" v-if="image==true">
          <v-img src="../assets/icm1.svg" style=" width:700px"></v-img>
        </div>
      </div>
    </div>
    <div class style="margin-top:50px; margin-bottom:50px">
      <!-- card -->
      <div class="row">
        <div class="col-sm col-md-4" style="padding-top:120px" v-if="image==true">
          <v-img src="../assets/icm2.svg" style=" width:700px"></v-img>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
                <!-- <strong>Business Development</strong>
                <br />Kindly note that due to the high number of exams offered, we cannot provide details on individual exams via call or live chat.
                For information on a specific exam duration, fee, language, etc., please refer to the website of the particular provider.
                Please note: You can register for exams directly with Pearson VUE at no added cost. Our test center is open on Tuesdays and Thursdays from 10:00 to 16:00.
                <v-list dense>
                  <v-subheader>REPORTS</v-subheader>
                  <v-list-item-group v-model="item2" color="primary">
                    <v-list-item v-for="(item2, i) in items2" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item2.icon" v-bind:color="item2.color"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item2.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                  <div
                    class="card-text blue--text font-weight-regular"
                  >If you would like to take your exam on another day, kindly send us an inquiry. Please understand that we charge a processing fee of N10, 000 per exam for individually desired dates in addition to the examination fee, payable by bank transfer or in cash on the day of the exam.</div>
                </v-list>-->
                <v-list-item two-line>
                  <v-list-item-content style="color">
                    <v-list-item-title
                      class="font-weight-bold"
                    >Business, Administration, Finance and Law</v-list-item-title>
                    <v-list-item-title>-Accounting & Finance</v-list-item-title>
                    <v-list-item-title>-Sales Management</v-list-item-title>
                    <v-list-item-title>-Commercial Management</v-list-item-title>
                    <v-list-item-title>-Human Resource Development</v-list-item-title>
                    <v-list-item-title>-International Trade</v-list-item-title>
                    <v-list-item-title>-Maritime Management</v-list-item-title>
                    <v-list-item-title>-Marketing</v-list-item-title>
                    <v-list-item-title>-Project Management</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content style="color:">
                    <v-list-item-title
                      class="font-weight-bold"
                    >IDEaL’s approved ICM UK Center offers the unlisted ICM UK qualifications:</v-list-item-title>
                    <v-list-item-title>-Maritime Management</v-list-item-title>
                    <v-list-item-title>-Commercial Management</v-list-item-title>
                    <v-list-item-title>-International Business Studies</v-list-item-title>
                    <v-list-item-title>-Tourism and business studies</v-list-item-title>
                    <v-list-item-title>-Human Resource Development</v-list-item-title>
                    <v-list-item-title>-Managing Health and Safety</v-list-item-title>
                    <v-list-item-title>-Office management</v-list-item-title>
                    <v-list-item-title>-Professional Computing & Information Processing</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
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
    image:true,
    items: [
      { text: "Getting Hired", icon: "mdi-charity", color: "red" },
      { text: "Job Retention", icon: "mdi-briefcase", color: "purple" },
      { text: "Promotion", icon: "mdi-arrow-up-bold", color: "orange" },
      {
        text: "Networking Opportunities",
        icon: "mdi-lan-connect",
        color: ""
      },
      {
        text: "Professional Credibility",
        icon: "mdi-briefcase-check",
        color: "yellow"
      },
      {
        text: "New and Current Technologies",
        icon: "mdi-arrow-up-bold",
        color: "brown"
      },
      { text: "Personal Goal", icon: "mdi-check-decagram", color: "pink" },
      {
        text: "Professional or Corporate Requirement",
        icon: "mdi-bullseye-arrow",
        color: "indigo"
      }
    ],
    items2: [
      {
        text: "Students planning to study at a higher education institution",
        icon: "mdi-school",
        color: "pink"
      },
      {
        text: "English-language learning program admissions and exit",
        icon: "mdi-school-outline",
        color: "indigo"
      },
      {
        text: "Scholarship and certification candidates",
        icon: "mdi-page-next",
        color: ""
      },
      {
        text: "English-language learners who want to track their progress",
        icon: "mdi-radar",
        color: "red"
      },
      {
        text: "Students and workers applying for visas",
        icon: "mdi-passport",
        color: "yellow"
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