<template>
  <div style="background-color:">
    <nava />
    <div style="background-color: " class="cont">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.9)">
          <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
            <div class="car-head">
              <span class="white--text" style>Institute of Commercial Management (ICM UK)<br> Approved Center</span>
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

    <div class="body" style>
      <!-- div -->

      <!-- card -->
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div
            class
            style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em; "
          >
            <div class style>
              <p class>
                <a target="_blank" href="http://icm.education"> The Institute of Commercial Management (ICM)</a>
                is the leading professional body providing qualifications that are recognized globally in business, management and related vocational areas. The programmes are designed to address and respond to the training needs as well as the personal development of learners, whether entering or continuing to work within the wide and varied commercial sector. <br>
                <br />IDEaL, as an ICM Approved Teaching and Examination Center ensures that the best possible education and support is given to learners in this region.
                <br />
                <br />
                <strong>Subjects</strong>
                <br />ICM provide qualifications at Certificate, Diploma, Advanced Diploma, Graduate Diploma and Post Graduate Diploma levels on a quarterly basis, covering key industry sector areas such as:
                <span
                  class="row"
                  style
                >
                  <span class="col-md-8">
                   
                        <v-list-item-title
                          class="font-weight-bold"
                          style=" color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
                        >Engineering and Manufacturing Technologies</v-list-item-title>
                       - Health and Safety
                   
                   
                  
                        <v-list-item-title
                          class="font-weight-bold"
                          style=" color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
                        >Information and Communication Technology (ICT)</v-list-item-title>
                        <v-list-item-title>-Computing</v-list-item-title>
                             <v-list-item-title>-Hospitality</v-list-item-title>
                        <v-list-item-title>-Sales Management</v-list-item-title>
                  
                   
                        <v-list-item-title
                          class="font-weight-bold"
                          style=" color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
                        >Leisure, Travel and Tourism</v-list-item-title>
                        <v-list-item-title>-Tourism</v-list-item-title>
                     
                   
                        <span
                          class="font-weight-bold"  style=" color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
                        >Business, Administration, Finance and Law</span>
                        <v-list-item-title>-Accounting & Finance</v-list-item-title>
                        <v-list-item-title>-Sales Management</v-list-item-title>
                        <v-list-item-title>-Commercial Management</v-list-item-title>
                        <v-list-item-title>-Human Resource Development</v-list-item-title>
                        <v-list-item-title>-International Trade</v-list-item-title>
                        <v-list-item-title>-Maritime Management</v-list-item-title>
                        <v-list-item-title>-Marketing</v-list-item-title>
                        <v-list-item-title>-Project Management</v-list-item-title>
                     
                    
                 <br> 
                      <span
                        class="font-weight-bold"  style=" color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
                      >IDEaL’s approved ICM UK Center offers the unlisted ICM UK qualifications:</span>
                      <v-list-item-title>-Maritime Management</v-list-item-title>
                      <v-list-item-title>-Commercial Management</v-list-item-title>
                      <v-list-item-title>-International Business Studies</v-list-item-title>
                      <v-list-item-title>-Tourism and business studies</v-list-item-title>
                      <v-list-item-title>-Human Resource Development</v-list-item-title>
                      <v-list-item-title>-Managing Health and Safety</v-list-item-title>
                      <v-list-item-title>-Office management</v-list-item-title>
                      <v-list-item-title>-Professional Computing & Information Processing</v-list-item-title>
                   
            
                  </span>
                </span>
              </p>
              <!-- <ul>
                <li v-for="(items, i) in items" :key="i">{{items.text}}</li>
              </ul>-->
            </div>
            <div
              style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
            ></div>
          </div>
        </div>
      
      </div>

      <!-- div -->
      <!-- card -->
      <div class="row" style="background-color:;">
        <div class="col-sm-12 col-md-12">
          <div class style>
            <div class style></div>
          </div>
        </div>
      </div>
    </div>

    <cards/>

    <foota />
   
  </div>
</template>


<script>
import nava from "../components/newNav";
import foota from "../components/footer";
import cards from "../components/cards"
export default {
  components: {
    nava,
    foota,
    cards
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
  .cont {
    padding-top: 80px;
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
  .cont {
    padding-top: 60px;
  }
}
</style>