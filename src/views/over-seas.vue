<template>
  <div style="background-color:">
    <nava />
    <div style class="div1">
      <div class="card-size">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.8)">
          <div style="margin-top:120px ; ">
            <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
              <div class="car-text">
                <span class="car-head white--text" style>OVERSEAS ADMISSION CONSULTING</span>
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
      <div class="row" style="background-color:;">
        <div class="col-sm-12 col-md-8" style="margin-bottom:0px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                If you want to make your overseas study dreams come true, IDEaL’s admission consulting is your best bet.
                <br />
                <br />We have an unequaled track record of enlisting students with diverse qualifications and career drives into many foreign universities and colleges. We help to secure study admissions and have had students who are constantly happy with our results.
                <br />
                <br />
                <strong>What you get from IDEaL’s admissions consulting</strong>
                <br />Our full range of services includes:
                <br />

                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="rgb()">
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
        <div class="col-sm col-md-4 mt-3" v-if="image==true">
          <v-img src="../assets/test.svg" style=" width:700px; margin-top:20px"></v-img>
        </div>
      </div>
    </div>
    <div class style="margin-top:0px; margin-bottom:50px">
      <!-- card -->
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->

                  <div class="card-text --text font-weight-regular">
                    <h2>
                      <strong class="black--text">For working professionals</strong>
                      <hr
                        style="color:orange; width:200px;  margin-right:auto; border: 2px solid orange;"
                      />
                    </h2>
                
                    <div>We assist working professionals across various industries/sectors to get offers that’ll enable them undergo short programs/courses in renown universities and in line with their career agenda.</div>
                    <br />
                  <h2>
                      <strong class="black--text">For Corporate bodies</strong>
                      <hr
                        style="color:orange; width:200px;  margin-right:auto; border: 2px solid orange;"
                      />
                    </h2>
                    
                    
                    We facilitate manpower training in UK, Gambia, Ghana, Malaysia, Vietnam and India for corporate bodies. This is done by recommending institutions abroad with customized and flexible programs that suit their business needs. Our crop of advisors will provide immigration services and other travel logistics.
                    <br />For Overseas Admissions, UPCOMING overseas trainings, conferences and short courses.
                    <a
                      href="/cont"
                    >Contact Us</a>
                  </div>
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
template {
  margin-left: 10px;
  margin-right: 10px;
}
.div1 {
  background-image: url("../assets/overb.jpg");
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
    padding-bottom: 50px;
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