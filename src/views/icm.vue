<template>
  <div style="background-color:">
    <nava />
    <div style="background-color: ">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
          <div style="margin-top:120px ; ">
            <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
              <div class="car-text">
                <span class="car-head white--text" style>ICM CENTER</span>
                <hr
                  style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body" style>
      <!-- card -->
      <div class="row" style="background-color:;">
        <div class="col-sm-12 col-md-12">
          <div class style="">
            <div class style>
              <p class="--text font-weight-regular">
                The Institute of Commercial Management (ICM) is the leading professional body providing qualifications that are recognized globally in business, management and related vocational areas. The programmes are designed to address and respond to the training needs as well as the personal development of learners, whether entering or continuing to work within the wide and varied commercial sector.
             
                <br />IDEaL, as an ICM Approved Teaching and Examination Center ensures that the best possible education and support is given to learners in this region.
                <br />
                <br>
                <strong>Subjects</strong>
                <br />ICM provide qualifications at Certificate, Diploma, Advanced Diploma, Graduate Diploma and Post Graduate Diploma levels on a quarterly basis, covering key industry sector areas such as:
                <span
                  class="row"
                >
                  <span class="col-md-8">
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
                  <div class="col-sm col-md-4" style="" v-if="image==true">
                    <v-img src="../assets/pea.png" style=" width:300px"></v-img>
                  </div>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class style="margin-left:20px; margin-right:20px;margin-top:-70px">
      <!-- card -->
      <div class="row">
        <div class="col-sm col-md-3" style v-if="image==true">
          <v-img src="../assets/icm2.svg" style=" width:300px"></v-img>
        </div>
        <div class="col-sm-12 col-md-9">
          <div class="card-size" >
            <div class="card-body" style>
              <p class="card-text blue--text ">
                <span class="row">
                  <v-list-item two-line class="col-md-6">
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
                  <v-list-item two-line class="col-md-6">
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
                </span>
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
    image: true,
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

<style  scoped lang="css">


.div1 {
  background-image: url("../assets/icmb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 400px) {
  .car {
    font-size: 2px;
   
  }
  .car-head {
  
    color: black;
    text-align: center;
   
  }
  .car-text {
    
    /* background-color: rgba(21, 22, 21, 0.4); */
   
   
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
    font-size: 15px
  }
  
  .car-head {
  
    color: black;
    text-align: center;
   
  }
  .car-text {
   
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
   
    text-align: center;
    border-radius: 45px;
  }
}
</style>