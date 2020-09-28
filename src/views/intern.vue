<template>
  <div style="background-color:">
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

    <div style="padding:20px">
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
                If you want to make your overseas study dreams come true, IDEaL’s admission consulting is your best bet.
                <br />We have an unequaled track record of enlisting students with diverse qualifications and career drives into many foreign universities and colleges. We help to secure study admissions and have had students who are constantly happy with our results.
                <br />
                <br />
                <strong>What you get from IDEaL’s admissions consulting</strong>
                <br />Our full range of services includes:
                <br />
              </p>

              <ul>
                <li v-for="(items, i) in items" :key="i">{{items.text}}</li>
              </ul>
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
            >
              <div>
                <p>
                  <!-- <strong>Social pressures</strong>
        <br />Societal, families and peers can deter individuals from actively participating in sports.
        <br />
        <br />• societal beliefs and traditions within a community
        <br />• the parental expectation of their children and also Little or no family support in sporting activities
        <br />• The conflicting interest in recreational activities.
        <br />• Few opportunities for females seeking opportunities to participate in sports
        <br />
                  <br />-->
                </p>

                <div
                  class
                  style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
                >
                  <router-link to="cont">Contact us</router-link> for more information
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col-md-4">
      <v-img src="../assets/ideal14.jpg" aspect-ratio="4.4"  height="325"
               contain></v-img>
      </div>-->

      <div class="col-md-12">
        <div
          style="font-family: SF UI Display;
          color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 108.34%;"
        >For working professionals</div>
        <br />
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
font-size: 30px;
line-height: 108.34%;"
        >For Corporate bodies</div>
        <br />
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

      <div class="body" style>
        <!-- card -->
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
    image: true,
    item: 1,
    item2: 1,
    items: [
      {
        text:
          "Expanding your university options and applying on your behalf to your chosen university(ies).",
        icon: "mdi-charity"
      },
      {
        text:
          "Offering expert advice on most suitable progression and career options for you.",
        icon: "mdi-briefcase"
      },
      {
        text: "Helping to apply for scholarships and financial aid.",
        icon: "mdi-arrow-up-bold"
      },
      { text: "Expert guidance in visa application.", icon: "mdi-lan-connect" },
      {
        text:
          "Preparatory classes for English language proficiency requirements.",
        icon: "mdi-briefcase-check"
      }
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
      { text: "Grenada", icon: "mdi-arrow-right" }
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