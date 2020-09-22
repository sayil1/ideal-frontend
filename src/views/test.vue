<template>
  <div style="color:black">
    <nava />
    <div style="background-color: " class="cont">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.9)">
          <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
            <div class="car-head">
              <span class="white--text" style>OVERSEAS ADMISSION CONSULTING</span>
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
    <div class="first">
      <!-- money -->
      <div class="first-text">
        <div>
          We run high-quality test preparation designed to increase students' performance on international standardized tests like IELTS, PTE, Cambridge English, GRE, GMAT, SAT, ACT.
          <br />Learners are imparted to grasp aspects that they may not be so confident with, and common exam topics with the overall aim of improving their exam techniques, and overall scores.
          <br />
        </div>
      </div>

      <!-- money -->

      <div class style>
        <!-- card -->
        <div class="row first-text">
          <div class="col-sm-12 col-md-6" style="margin-bottom:0px">
            <div class="card-size">
              <div class>
                <p class="card-text --text font-weight-regular">
                  <br />
                  <strong>English Test preparation (IELTS, PTE, Cambridge English)</strong>
                  <br />
                  <br />Classes are centered on test-taking tactics that highlights the skills needed for exam success in the English exams and covers reading, listening, speaking and writing.
                  <br />This preparatory course is ideal for students who:
                  <v-list-item>
                    <v-list-item-content >
                      <v-list-item-subtitle style="color: #1b6761;">- Want to attain a good score on the internationally recognized English exams.</v-list-item-subtitle>
                      <v-list-item-subtitle style="color: #1b6761;">IELTS (Academic & General), PTE, and Cambridge English.</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-subtitle style="color: #1b6761;">- Want to prepare for university in the USA or Canada or other countries that</v-list-item-subtitle>
                      <v-list-item-subtitle style="color: #1b6761;">require the scores.</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-5" style=" margin:2px">
            <div
              style="color:; text-align:center; margin-bottom:20px"
              class="display-1"
            >IMPORTANT FACTS</div>
            <table class="table table-bordered " style=" ">
              <thead>
                <tr>
                  <th style="border-color:black; " scope="col">COURSE LENGTH</th>
                  <th style="border-color:black; " scope="col">2 - 8 Weeks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style="border-color:black; " scope="col">ENTRY LEVEL</th>
                  <th style="border-color:black; " scope="col">Intermediate to Advanced English</th>
                </tr>
                <tr>
                  <th style="border-color:black; " scope="col">LESSON LENGTH</th>
                  <th style="border-color:black;" scope="col">2 hours per weekday</th>
                </tr>
                <tr>
                  <th style="border-color:black; " scope="row">CLASS SIZE</th>
                  <th style="border-color:black;">
                    10 persons:
                    Note that seats fill up quickly, and is on a first-come-first-serve basis. Register now.
                  </th>
                </tr>
                <th style="border-color:black; " scope="col">TIMETABLE</th>
                <td style="border-color:black; " scope="col">
                  For weekdays (Monday-Thursday, with morning and afternoon classes only)
                  For weekends (Saturdays and Sundays 4 hours per day)
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        class
       
      >
        <!-- card -->
        <div class="row first-text">
          <div class="col-sm-12 col-md-6">
            <div class style=" margin-left:20px; margin-right:20px;">
              <div style>
                <p class="card-text --text font-weight-regular">
                  <strong>Other Standardized tests (GRE®, SAT, ACT, GMAT)</strong>
                  <br />
                  <br />These Exam Preparation Courses include exclusive learning materials that will enable you acquire test-taking skills relevant to the structure of the examinations, the types of questions and to expect, ultimately improving your score on the test.
                  <v-list dense>
                    <!-- <v-subheader>REPORTS</v-subheader> -->
                    <v-list-item-group v-model="item2" color>
                      <v-list-item v-for="(item2, i) in items2" :key="i">
                        <v-list-item-icon style="color: #1b6761;">
                          <v-icon v-text="item2.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content style="color: #1b6761;">
                          <v-list-item-title v-text="item2.text"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                    <br />
                    <div
                     
                    
                    class="first-text" 
                    >If you would like to take your exam on another day, kindly send us an inquiry. Please understand that we charge a processing fee of N10, 000 per exam for individually desired dates in addition to the examination fee, payable by bank transfer or in cash on the day of the exam.</div>
                  </v-list>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm col-md-5" >
            <div
              style="color:rgb; text-align:center; margin-bottom:20px"
              class="display-1"
            >IMPORTANT FACTS</div>
            <table
             
              class="table table-bordered card-size"
            >
              <thead>
                <tr>
                  <th style="border-color:black; " scope="col">COURSE LENGTH</th>
                  <th style="border-color:black;" scope="col">6- 12 Weeks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style="border-color:black;" scope="col">ENTRY LEVEL</th>
                  <th style="border-color:black;" scope="col">TOEFL 70, IELTS 6.5</th>
                </tr>
                <tr>
                  <th style="border-color:black;" scope="col">LESSON LENGTH</th>
                  <th style="border-color:black;" scope="col">2 hours per weekday</th>
                </tr>
                <tr>
                  <th style="border-color:black;" scope="row">CLASS SIZE</th>
                  <th style="border-color:black;">
                    10 persons:
                    Note that seats fill up quickly, and is on a first-come-first-serve basis. Register now.
                  </th>
                </tr>
                <th style="border-color:black;" scope="col">TIMETABLE</th>
                <td style="border-color:black;" scope="col">
                  All courses are Monday-Thursday, with morning and afternoon classes only
                  Weekends Saturdays and Sundays 3 hours per day
                </td>
              </tbody>
            </table>
            <div>Students also have Acess to Study guides, Practice tests, Structured study sessions, Preparation lessons, Online and paper-based simulation tests</div>
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
    foota,
  },
  data: () => ({
    item: 1,
    item2: 1,
    items: [
      {
        text: "Study guides",
        icon: "mdi-charity",
      },
      {
        text: "Practice Test",
        icon: "mdi-briefcase",
      },
    ],
    items2: [
      {
        text: "Study guides",
        icon: "mdi-charity",
      },
      {
        text: "Practice Test",
        icon: "mdi-briefcase",
      },
      {
        text: "Strcutured study sessions",
        icon: "mdi-school",
      },
      {
        text: "Preparation lessons",
        icon: "mdi-school-outline",
      },
      {
        text: "Online and Papper Bassed Simulation tests",
        icon: "mdi-page-next",
      },
    ],
  }),
};
</script>

<style lang="css" scoped>
.first-text {
  font-family: SF UI Display;
  color: #1b6761;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  text-align: justify;
  letter-spacing: 0.02em;
  padding-top: 10px;
}
.big-text {
  font-family: SF UI Display;
  color: #092e2b;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 108.34%;
}
.first {
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 100px;
  padding-right: 100px;
}
table {
  font-family: SF UI Display;
  color: #1b6761;
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
 
}
table,
th,
td {
  border: 1px solid black;
}
.div1 {
  background-image: url("../assets/testb.jpg");

  background-size: cover;
  background-position: center;
}
@media only screen and (max-width: 400px) {

  .big-text {
  font-family: SF UI Display;
  color: #092e2b;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 108.34%;
}
  .first {
    padding-top: px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .first-text {
    font-family: SF UI Display;
    color: #1b6761;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  
    text-align: justify;
   
    padding-top: 0px;
  }

  .car {
    font-size: 2px;
    margin: 0px;
  }
  .car-head {
    font-size: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-family: "lora";
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 20px;
    text-align: left;
  }
  .cont {
    padding-top: 100px;
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
    font-size: 34px;
    text-align: center;
    font-family: "Lora";
  }
  .car-text {
    font-size: 21px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
    text-align: left;
    font-family: "Alegreya";
  }
  .cont {
    padding-top: 60px;
  }
}
</style>