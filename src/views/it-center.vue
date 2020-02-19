<template>
  <div style="background-color:">
    <nava />
     <div style="background-color: ">
        <div class="card-size">
          <div class="card-body" style>
            <div style="margin-top:120px ; ">
              <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
                <div class="car-text">
                  <span class="car-head orange--text" style>IDEAL INFOTECH</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class style>
      <!-- card -->
      <div class="row" style="background-color:rgb;">
        <div class="col-sm-12 col-md-8" style="margin-bottom:70px">
          <div class="card card-size" style=" margin-left:20px; margin-right:20px">
            <div class="card-body" style>
              <p class="card-text --text font-weight-regular">
                The need for the teaming population of young people to access information, training and support coupled with the glaring fact that most of them cannot afford the training or equipment needed to participate in the rewards of the information revolution necessitated the IDEaL IT Center Project. <br>
                <br />IDEaL IT Center addresses this disparity by serving as a one-stop hub for Information Technology education programs while offering methods of improving efficiency and services needed to achieve greater productivity among partakers of the ICT sector. <br>
                <br />Our wide range of programs are quality-assured and adequately tailored to enable participants acquire modern skills and qualifications, upgrade existing ones, adapt to new technologies and improve sector performances to explore new frontiers. <br>
                <br />The first IDEaL IT Center project is located in Asaba, the Delta State capital of Nigeria and it is intended that this project will be replicated in various locations across the country.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-4">
          <v-img src="../assets/info11.svg" style=" width:700px"></v-img>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="container">
        <div class="row pt-0">
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h3 class="my-0  blue--text">Creative Design</h3>
              </div>
              <div class="card-body">
                <!-- <h1><b>$0 </b><small class="text-muted">/ mo</small></h1> -->
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Web Design</li>
                  <li>Graphics design</li>
                  <li>AutoCad architecture</li>
                  <li>Animation and Modeling</li>
                  <li>Video Editing</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h3 class="my-0 font-weight-normal blue--text">
                  Computing
                  Technology
                </h3>
              </div>
              <div class="card-body">
                <!-- <h1><b>$15 </b><small class="text-muted">/ mo</small></h1> -->
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Cloud computing</li>
                  <li>Networking</li>
                  <li>Database Management</li>
                  <li>Software/Application development</li>
                  <li>Systems Administration</li>
                  <li>IT Security</li>
                  <li>Data Science</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h3 class="my-0 font-weight-normal blue--text">Training Delivery Styles</h3>
              </div>
              <div class="card-body">
                <!-- <h1><b>$29 </b><small class="text-muted">/ mo</small></h1> -->
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Lectures (face-to-face or Online)</li>
                  <li>Demonstrations</li>
                  <li>Problem solving</li>
                  <li>Audio visual aids</li>
                  <li>Hands-on practical</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h3 class="my-0 font-weight-normal blue--text">E-Business</h3>
              </div>
              <div class="card-body">
                <!-- <h1><b>$29 </b><small class="text-muted">/ mo</small></h1> -->
                <ul class="list-unstyled mt-3 mb-4">
                  <li>CompTIA Project+</li>
                  <li>Digital Marketing</li>
                  <li>Customer Relationship Management (CRM)</li>
                  <li>Project Management Professional (PMP)</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h3 class="my-0 font-weight-normal blue--text">Hands-on practical:</h3>
              </div>
              <div class="card-body">
                <!-- <h1><b>$29 </b><small class="text-muted">/ mo</small></h1> -->
                At the end of each training program, participants are issued certificates after they must have passed a series of exams that tests their proficiency.
                <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="600px" style="z-index:20000">
                    <template v-slot:activator="{ on }" >
                      <v-btn color="primary" dark v-on="on" style="margin-top:50px">Register</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Course Registration Form</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field    label="First name*" required></v-text-field>
                            </v-col>
                           
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                label="Last name*"
                                hint="example of persistent helper text"
                               
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field label="Phone*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-select
                                :items="['Morning', 'Evening',]"
                                label="Select Prefered Session*"
                                required
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-autocomplete
                                :items="['TOEFL', 'Graphics', 'Java', 'Web Development', 'C#', 'Desktop Publishing', 'CCNA', 'Autcad']"
                                label="Select Prefered Course"
                                multiple
                              ></v-autocomplete>
                            </v-col>
                          </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card -->

    <foota />
  </div>
</template>


<script>
/*jshint smarttabs:true */
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
     dialog: false,
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