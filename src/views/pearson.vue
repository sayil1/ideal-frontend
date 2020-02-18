<template>
  <div style="background-color:">
    <nava />
   <div class="card-size">
        <div class="card-body" style>
          <div style="margin-top:120px ; ">
            <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
              <div class="car-text">
                <span class="car-head orange--text" style>PEARSON VUE CENTER</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class style>
      <!-- card -->
      <div class="row" style="background-color:rgb();">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                <br />
                <strong>PEARSON VUE CENTER</strong>
                <br />Our Authorized Pearson VUE Test center runs IT certification examinations for leading vendors like Microsoft, Cisco, Nursing and Midwifery Council (NMC), PMI, Linux, Juniper, Oracle, CompTIA, CIW, HP, PeopleCert etc.
                <br />
                <br />
                <strong>IT CERTIFICATIONS</strong>
                are recognized worldwide and serve as benchmarks to specific skills set based on standardized testing. They help demonstrate your dedication and technical knowledge on a specific platform.
                <br />Once earned, IT Certifications can you help achieve the following:
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
        <div class="col-sm col-md-4">
          <v-img src="../assets/app.svg" style=" width:700px"></v-img>
        </div>
      </div>
    </div>
    <div class style="margin-top:; margin-bottom:10px">
      <!-- card -->
      <div class="row">
        <!-- <div class="col-sm col-md-4">
          <v-img src="../assets/app.svg" style=" width:700px"></v-img>
        </div>-->
        <div class="col-sm-12">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                Kindly note that due to the high number of exams offered, we cannot provide details on individual exams via call or live chat.
                For information on a specific exam duration, fee, language, etc., please refer to the website of the particular provider.
                <br />Please note: You can register for exams directly with Pearson VUE at no added cost. Our test center is open on Tuesdays and Thursdays from 10:00 to 16:00.
                <br />
                <v-list dense>
              
                  <div
                    class="card-text --text font-weight-regular"
                  >If you would like to take your exam on another day, kindly send us an inquiry. Please understand that we charge a processing fee of N10, 000 per exam for individually desired dates in addition to the examination fee, payable by bank transfer or in cash on the day of the exam.</div>
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
  })
};
</script>

<style lang="css">
template {
  margin-left: 10px;
  margin-right: 10px;
}
</style>