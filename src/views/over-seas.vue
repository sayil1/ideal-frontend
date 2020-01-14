<template>
  <div style="background-color:">
    <nava />
    <div
      class="jumbotron jumbotron-fluid"
      style="background-color:rgb(35, 159, 216); margin-bottom:0px"
    >
      <div class="container" style="margin-top:50px">
        <h1 class="display-2" >OVERSEAS ADMISSION CONSULTING</h1>
      </div>
    </div>
    <div class style>
      <!-- card -->
      <div class="row" style="background-color:rgb(35, 159, 216);">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
                If you want to make your overseas study dreams come true, IDEaL’s admission consulting is your best bet.
                We have an unequaled track record of enlisting students with diverse qualifications and career drives into many foreign universities and colleges. We help to secure study admissions and have had students who are constantly happy with our results.
                What you get from IDEaL’s admissions consulting
                Our full range of services includes:
                <br />

                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="rgb(35, 159, 216)">
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
    <div class style="margin-top:50px; margin-bottom:50px">
      <!-- card -->
      <div class="row">
        <div class="col-sm col-md-4">
      <v-list flat dense>
      <v-subheader>COUNTRIES</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items2"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
              
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                 
                  <div class="card-text blue--text font-weight-regular">
                 <span class=" display-1 text-center" style="color:rgb(255, 153, 0)">  For working professionals  </span> 
                    <br>
                   <div> We assist working professionals across various industries/sectors to get offers that’ll enable them undergo short programs/courses in renown universities and in line with their career agenda.</div> <br>
                 <div class=" display-1" style="color:rgb(255, 153, 0)">  For corporate bodies  </div> 
                    We facilitate manpower training in UK, Gambia, Ghana, Malaysia, Vietnam and India for corporate bodies. This is done by recommending institutions abroad with customized and flexible programs that suit their business needs. Our crop of advisors will provide immigration services and other travel logistics.
                    For Overseas Admissions, UPCOMING overseas trainings, conferences and short courses. Contact us
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
        { text: 'United Kingdom', icon: 'mdi-arrow-right' },
        { text: 'United States of Americal', icon:  'mdi-arrow-right' },
        { text: 'United Arab Emirates', icon:  'mdi-arrow-right'},
          { text: 'Canada', icon:  'mdi-arrow-right' },
        { text: 'Germany', icon: 'mdi-arrow-right' },
        { text: 'Poland', icon:  'mdi-arrow-right' },
          { text: 'South Africa', icon:  'mdi-arrow-right' },
        { text: 'France', icon:  'mdi-arrow-right' },
        { text: 'Grenada', icon: 'mdi-arrow-right' },
      ],
  })
};
</script>

<style lang="css">
template {
  margin-left: 10px;
  margin-right: 10px;
}
</style>