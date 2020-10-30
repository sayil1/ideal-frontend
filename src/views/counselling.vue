<template>
  <div style="background-color: ">
    <nava />

    <div style="background-color: " class="cont">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.9)">
          <div
            class="car font-weight-regular"
            style="margin-left: 40px; margin-right: 40px"
          >
            <div class="car-head">
              <span class="white--text" style>Educational Counseling</span>
              <hr
                style="
                  color: orange;
                  width: 150px;
                  margin-left: auto;
                  margin-right: auto;
                  border: 2px solid orange;
                "
              />
              <router-link
                to="cont"
                class="success--text"
                style="text-decoration: none"
              >
                <v-btn class="ma-2" outlined color="success">Contact Us</v-btn>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding-left: 80px; padding-right: 80px; padding-top:40px">
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div
            class
            style="
              font-family: SF UI Display;
              color: #1b6761;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 29px;
              text-align: justify;
              letter-spacing: 0.02em;
            "
          >
            <div class style>
              Over the years, our educational counseling team has supported
              individuals and students to take informed decisions and steps
              needed to succeed in their education and careers.
              <br />We personalize solutions for individual students and advice
              based on the individual’s needs and abilities.
              <br />
              <br />
              <!-- this holdes the cards -->
              <div class="row" style="margin-bottom: 30px">
                <v-card
                  style="margin: 5px"
                  class="mx-auto"
                  color="#1B6761"
                  dark
                  max-width="350"
                  v-scroll-to="'#internship'"
                >
                  <v-card-title style="text-align:center">
                    <!-- <v-icon large left>mdi-palette</v-icon> -->
                    <span class="title font-weight-bold" >Internship</span>
                  </v-card-title>

                  <v-card-text class>
                    Computer Science SIWES students can gain work experience
                    needed to advance and sharpen their professional and
                    industry-specific skills... <strong>Learn More</strong>
                  </v-card-text>
                </v-card>

                <v-card
                  style="margin: 5px"
                  class="mx-auto"
                  color="#1B6761"
                  dark
                  max-width="350"
                  v-scroll-to="'#counselling'"
                >
                  <v-card-title>
                    <!-- <v-icon large left>mdi-palette</v-icon> -->
                    <span class="title font-weight-bold"
                      >Career Counselling</span
                    >
                  </v-card-title>

                  <v-card-text class>
                    Get guidance as you journey through several stages of your
                    career and make those informed career decisions...
                    <strong>Learn More</strong>
                  </v-card-text>
                </v-card>
                <v-card
                  style="margin: 5px"
                  class="mx-auto"
                  color="#1B6761"
                  dark
                  max-width="350"
                     v-scroll-to="'#abroad'"
                >
                  <v-card-title>
                    <!-- <v-icon large left>mdi-palette</v-icon> -->
                    <span class="title font-weight-bold">Study Abroad</span>
                  </v-card-title>

                  <v-card-text class>
                    Want to study overseas for an Undergraduate, Post-graduate
                    or Professional program?.. <strong>Learn More</strong>
                  </v-card-text>
                </v-card>
              </div>

              <!-- cards end here -->

              <div></div>

              <strong> <h1 style="text-align:center" id="internship">Internship</h1> </strong>Computer
              Science SIWES students can gain work experience needed to advance
              and sharpen their professional and industry-specific skills.<br />Many
              colleges and universities require their students to take part in
              some sort of internship experience as it gives them the experience
              needed to advance and sharpen professional skills while gaining
              industry-specific-skills in the career field they want to pursue.
              <br /><br />Many colleges and universities require their students
              to take part in some sort of internship experience as it gives
              them the experience needed to advance and sharpen professional
              skills while gaining industry-specific skills in the career field
              they want to pursue.

              <div>
                <strong>Benefits</strong> <br />
                <ol>
                  <li>
                    Students are required to participate in practical
                    experiences and be able to put theory to practice. They will
                    be able to refine the skills related to their field.
                  </li>
                  <li>
                    A major challenge faced among college graduates arises from
                    open positions that require work experience they&#39;ve not
                    yet had a chance to acquire. Internship provides the
                    competence that will empower students to put their learning
                    into practice, improve their leadership skills and give them
                    an edge as they pursue a permanent position.
                  </li>
                </ol>
              </div>
            </div>

            <div class style>
              <p class>
                <strong> <h1 style="text-align:center" id="counselling">Career Counseling</h1> </strong
                >Get guidance and information that will facilitate your journey
                through several stages of your career. We help you recognize
                work trends and provide access to standardized resources that
                evaluates your interests, aptitude, personality, strength, and
                skills needed to enable you succeed in your job search and
                career building.
              </p>
            
                  <router-link to="cont"
                    >Schedule for an appointment</router-link
                  >
          
            </div>

              <div class style>
              <p class>
                <strong> <h1 style="text-align:center" id="abroad">Study Abroad</h1> </strong
                >
             If you want to make your overseas study dreams come true, IDEaL’s admission consulting is your best bet.
                <br />We have an unequaled track record of enlisting students with diverse qualifications and career drives into many foreign universities and colleges. We help to secure study admissions and have had students who are constantly happy with our results.
                <br />
                <br />
                <strong>What you get from IDEaL’s admissions consulting</strong>
                <br />Our full range of services includes:
                <br />
                 <ul>
                <li v-for="(items, i) in items" :key="i">{{items.text}}</li>
              </ul>

              </p>

                  <div class="col-md-12">
        <div
          style="font-family: SF UI Display;
          color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 108.34%;"
        >For working professionals</div>
      
        <div
          style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
        >We assist working professionals across various industries/sectors to get offers that’ll enable them undergo short programs/courses in renown universities and in line with their career agenda.</div>
      </div>

      <div class="col-md-12">
        <div
          style="font-family: SF UI Display;
          color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 108.34%;"
        >For Corporate bodies</div>
        
        <div
          style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
        >
          We facilitate manpower training in UK, Gambia, Ghana, Malaysia, Vietnam and India for corporate bodies. This is done by recommending institutions abroad with customized and flexible programs that suit their business needs. Our crop of advisors will provide immigration services and other travel logistics.
          <br />For Overseas Admissions, UPCOMING overseas trainings, conferences and short courses.
        </div>
      </div>

            
                  <router-link to="cont"
                    >Schedule for an appointment</router-link
                  >
          
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
    foota,
  },
  data: () => ({
    image: true,
    item: 1,
    item2: 1,
    items: [
      {
        text:
          "Expanding your university options and applying on your behalf to your chosen university(ies).",
        icon: "mdi-charity",
      },
      {
        text:
          "Offering expert advice on most suitable progression and career options for you.",
        icon: "mdi-briefcase",
      },
      {
        text: "Helping to apply for scholarships and financial aid.",
        icon: "mdi-arrow-up-bold",
      },
      { text: "Expert guidance in visa application.", icon: "mdi-lan-connect" },
      {
        text:
          "Preparatory classes for English language proficiency requirements.",
        icon: "mdi-briefcase-check",
      },
    ],
    items2: [
      { text: "United Kingdom", icon: "mdi-arrow-right" },
      { text: "United States of Americal", icon: "mdi-arrow-right" },
      { text: "United Arab Emirates", icon: "mdi-arrow-right" },
      { text: "Canada", icon: "mdi-arrow-right" },
      { text: "Germany", icon: "mdi-arrow-right" },
      { text: "Poland", icon: "mdi-arrow-right" },
      { text: "South Africa", icon: "mdi-arrow-right" },
      { text: "France", icon: "mdi-arrow-right" },
      { text: "Grenada", icon: "mdi-arrow-right" },
    ],
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
    },
  },
};
</script>

<style scoped lang="css">
.div1 {
  background-image: url("../assets/overb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
}
@media only screen and (max-width: 400px) {
  .car {
    font-size: 2px;
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