<template>
  <div style="background-color:">
    <nava />
    <div class="jumbotron jumbotron-fluid" style="background-color:rgb(35, 159, 216); margin-bottom:0px">
      <div class="container" style="margin-top:80px; margin-bottom:-80px">
        <h1 class="display-2">PROFESSIONAL EDUCATION</h1>
      </div>
    </div>
    <div class style="">
      <!-- card -->
      <div class="row" style="background-color:rgb(35, 159, 216);">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px" >
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
                Our training solutions offer job and career relevant courses for individuals, teams and organizations<strong> across the Information and Communication Technology (ICT) and Business Development spectrum.</strong> <br> <br>
                In partnership with reputable service providers across the globe, these programs are tailored to equip learners with the technical and practical skills for a rewarding long-term career.
                <br /><br>
                <strong>Information and Communication Technology (ICT)</strong> <br>

                The ICT industry is a stirring innovator that helps solve problems in the environment, business, defense, research, health, and education sectors. Trainings in this area cover the entirety of these:
                <v-list dense>
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item" color="rgb(35, 159, 216)" >
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon" v-bind:color="item.color"></v-icon>
                      
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
          <v-img src="../assets/app.svg" style=" width:700px"></v-img>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class=" card-size" style=" margin-left:20px; margin-right:20px;">
            <div class="card-body" style>
              <p class="card-text blue--text font-weight-regular">
               
                <strong>Business Development</strong>
                <br />Setting your business onto the path of success through constant business training can lead to exciting business opportunities and personal development. Our quality programs are your best starting point.
                <v-list dense >
                  <!-- <v-subheader>REPORTS</v-subheader> -->
                  <v-list-item-group v-model="item2" color="primary" >
                    <v-list-item v-for="(item2, i) in items2" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item2.icon" v-bind:color="item2.color"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item2.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    <foota/>
  </div>
</template>


<script>
import nava from "../components/testnav";
import foota from "../components/footer"
export default {
  components: {
    nava,
    foota
  },
  data: () => ({
    item: 1,
    item2: 1,
    items: [
      { text: "System Administration", icon: "mdi-account-settings" , color:'red'},
      { text: "IT Security", icon: "mdi-security", color:"purple" },
      { text: "Database Security", icon: "mdi-database-lock", color:'green'},
      { text: "Application Development", icon: "mdi-application", color:'orange' }
    ],
    items2: [
      { text: "System Administration", icon: "mdi-handshake", color:'yellow' },
      { text: "Project Management", icon: "mdi-wan", color:'green' },
      { text: "Customer Service Training", icon: "mdi-face-agent", color:'red' },
      { text: "Soft skills Training for Employees", icon: "mdi-laptop", color:'brown' }
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