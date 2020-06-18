<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
   
      <side />
     
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column wrap">
        <!-- Main Content -->
        <div id="content">
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 mt-2 text-gray-800">Dashboard</h1>
              <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>-->
            </div>

            <!-- Content Row -->

            <menus />
            <!-- Content Row -->

            <div class="row">
              <!-- Area Chart -->
              <div class="col-xl-12 col-lg-7">
                <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                  >
                    <h6 class="m-0 font-weight-bold text-primary">contests Overview</h6>
                  </div>

                  <div class="card-body">
                    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                      <template v-slot:top>
                        <v-toolbar flat color="white">
                          <v-toolbar-title>contests</v-toolbar-title>
                          <v-divider class="mx-4" inset vertical></v-divider>
                           
                              <v-btn color="success" dark class="mb-2" v-on:click="initialize()">Refresh</v-btn>
                           
                          <v-spacer></v-spacer>

                          <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                              <v-btn color="success" dark class="mb-2" v-on="on">Add Contest</v-btn>
                            </template>
                            <!-- this holds the forms -->

                            <div class="form">
                              <v-card>
                                <v-toolbar color flat>
                                  <v-toolbar-title>Upload Event</v-toolbar-title>
                                </v-toolbar>
                                <v-container fluid grid-list-xl>
                                  <form enctype="multipart/form-data" @submit.prevent="onSubmit">
                                    <v-layout wrap align-center>
                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field
                                          label="Title"
                                          v-model="contests.title"
                                          value="sayil"
                                        >{{contests.title}}</v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field
                                          label="Short Description"
                                          v-model="contests.description"
                                        ></v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <input
                                          type="file"
                                          class="form-control"
                                          accept="image/*"
                                          name="image"
                                          @change="onFileChanged"
                                        />
                                        <v-file-input accept="image/*" label="Image"></v-file-input>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-select
                                          :items="Locations"
                                          label="Location(state)"
                                          multiple
                                          v-model="contests.location"
                                          chips
                                          hint="Select Your Location(State)"
                                          persistent-hint
                                        ></v-select>
                                      </v-flex>
                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field
                                          label="Exact venue of contests"
                                          v-model="contests.venue"
                                        ></v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-menu
                                          ref="menu2"
                                          v-model="menu2"
                                          :close-on-content-click="false"
                                          :nudge-right="40"
                                          :return-value.sync="startDate"
                                          transition="scale-transition"
                                          offset-y
                                          min-width="290px"
                                        >
                                          <template v-slot:activator="{ on }">
                                            <v-text-field
                                              v-model="startDate"
                                              label="Start Date"
                                              prepend-icon="mdi-calendar"
                                              readonly
                                              v-on="on"
                                            ></v-text-field>
                                          </template>
                                          <v-date-picker v-model="startDate" no-title scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                              flat
                                              color="primary"
                                              @click="menu2 = false"
                                            >Cancel</v-btn>
                                            <v-btn
                                              flat
                                              color="primary"
                                              @click="$refs.menu2.save(startDate)"
                                            >OK</v-btn>
                                          </v-date-picker>
                                        </v-menu>
                                      </v-flex>
                                      <v-flex xs12 sm6 d-flex>
                                        <v-menu
                                          ref="menu1"
                                          v-model="menu1"
                                          :close-on-content-click="false"
                                          :nudge-right="40"
                                          :return-value.sync="endDate"
                                          transition="scale-transition"
                                          offset-y
                                          full-width
                                          min-width="290px"
                                        >
                                          <template v-slot:activator="{ on }">
                                            <v-text-field
                                              v-model="endDate"
                                              label="End Date"
                                              prepend-icon="mdi-calendar"
                                              readonly
                                              v-on="on"
                                            ></v-text-field>
                                          </template>
                                          <v-date-picker v-model="endDate" no-title scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                              flat
                                              color="primary"
                                              @click="menu1 = false"
                                            >Cancel</v-btn>
                                            <v-btn
                                              flat
                                              color="primary"
                                              @click="$refs.menu1.save(endDate)"
                                            >OK</v-btn>
                                          </v-date-picker>
                                        </v-menu>
                                      </v-flex>
                                      <v-flex xs12 sm6 d-flex>
                                        <v-menu
                                          ref="menu"
                                          v-model="menu"
                                          :close-on-content-click="false"
                                          :nudge-right="40"
                                          :return-value.sync="time"
                                          transition="scale-transition"
                                          offset-y
                                          max-width="290px"
                                          min-width="290px"
                                        >
                                          <template v-slot:activator="{ on }">
                                            <v-text-field
                                              v-model="time"
                                              label="Time"
                                              prepend-icon="mdi-clock"
                                              readonly
                                              v-on="on"
                                            ></v-text-field>
                                          </template>
                                          <v-time-picker
                                            v-if="menu"
                                            v-model="time"
                                            @click:minute="$refs.menu.save(time)"
                                          >
                                            <v-btn
                                              flat
                                              color="primary"
                                              @click="$refs.menu.save(time)"
                                            >OK</v-btn>
                                          </v-time-picker>
                                        </v-menu>
                                      </v-flex>

                                      <v-flex xs12 sm3 d-flex v-if="update==false">
                                        <v-btn color="purple" v-on:click="save">Submit</v-btn>
                                      </v-flex>
                                      <v-flex xs12 sm3 d-flex v-if="update==true">
                                        <v-btn color="purple" v-on:click="editItem()">Update</v-btn>
                                      </v-flex>
                                      <br />
                                      <v-flex xs12 sm3 d-flex>
                                        <v-btn color="purple">Clear</v-btn>
                                      </v-flex>
                                    </v-layout>
                                  </form>
                                </v-container>
                              </v-card>
                            </div>
                            <!-- foems end here -->
                          </v-dialog>
                        </v-toolbar>
                      </template>
                      
                     <template  v-slot:item.status="{ item }">
                         <v-icon v-if="item.startDate < new Date().toISOString().substr(0, 10)" color="red" >mdi-circle-medium </v-icon>
                          <v-icon v-if="item.startDate >= new Date().toISOString().substr(0, 10)" color="blue" >mdi-circle-medium </v-icon>
                     </template>

                      <template v-slot:item.action="{ item }">
                        <!-- <v-icon color="orange" class="mr-2" @click="updates(item)">fa-edit</v-icon> -->
                        <v-icon color="red" @click="deleteItem(item)">mdi-delete</v-icon>
                 
                      </template>
                         
                      <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">mdi-reset</v-btn>
                      </template>
                    </v-data-table>
                  </div>
                </div>
              </div>

              <!-- Pie Chart -->
              <div class="col-xl-4 col-lg-5"></div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2019</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div
      class="modal fade"
      id="logoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            class="modal-body"
          >Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-console
import { Services } from "../../service";
var serv = new Services();
import side from "../../components/adminside";
import menus from "../../components/adminMenu";
export default {
  components: {
    side,
    menus
  },
  data: () => ({
    menu: false,
    startDate: new Date().toISOString().substr(0, 10),
    endDate: new Date().toISOString().substr(0, 10),
    time: null,
    menu2: false,
    menu1: false,
    modal2: false,
    Locations: ["Abuja", "Lagos", "Asaba", "Benin"],
    categories: ["Gospel", "Social", "Dance and fitness", "Comedy"],
    Access: ["Open", "Tickets"],
    model: {
      text: "",
      image: null
    },
    update: false,
    newId: "",
    init:1,

    contests: {
      image: "",
      title: "",
      description: "",
      location: "",
      venue: "",
      startDate: "",
      endDate: "",
      time: ""
    },
    dialog: false,
    data: "sayil",
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "title"
      },
      { text: "Location", value: "location" },
      { text: "Time", value: "time" },
      { text: "Date", value: "startDate" },
       { text: "Status", value: "status", align:"center"},
      { text: "Action", value: "action" }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Event" : "Edit Event";
    },
    // initializeApp(){

    // }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
    let a = new Date().toISOString().substr(0, 10)
    // let b = this.contests.startDate
    let b = new Date('2020-03-13').toISOString().substr(0, 10)

    if (b>a){
// eslint-disable-next-line no-console
          console.log("ends today");
          // alert('greater than today')
    }
    else{
      // eslint-disable-next-line no-console
          console.log("not yet");
          // alert('not yet')
    }
  
  },

  methods: {
    initialize() {
    
      serv
        .getRequest("contest/allEve")
        .then(response => {
          // JSON responses are automatically parsed.
          this.desserts = response.data.result;
          // eslint-disable-next-line no-console
          console.log(this.desserts, "are the contests");
        })
        .catch(e => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    },
    getEvent(item) {
      // eslint-disable-next-line no-console
      this.newId = item._id;
      serv.getRequest(`contest/get-event/${item._id}`).then(response => {
        // eslint-disable-next-line no-console
        // console.log(response.data.result, "is the contests");
        this.contests = response.data.result[0];
        return item._id;
      });
    },
    updates(item) {
      this.dialog = true;
      this.update = true;
      this.getEvent(item);
    },

    editItem() {
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);

      this.dialog = true;
     const formData = new FormData();
      formData.append("image", this.contests.image);
      formData.append("title", this.contests.title);
      formData.append("description", this.contests.description);
      formData.append("location", this.contests.location);
      formData.append("venue", this.contests.venue);
      formData.append("startDate", this.startDate);
      formData.append("endDate", this.endDate);
      formData.append("time", this.time);

      // eslint-disable-next-line no-console

      serv.postRequest(`update-contests/${this.newId}`, formData);

      // eslint-disable-next-line no-console
      console.log(this.newId, "items");
      this.close();
    },

    deleteItem(item) {
      serv.getRequest(`contest/del/${item._id}`).then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data.result, "is the contests");
        this.initialize();
      });
    },

    close() {
      (this.contests = {
        image: "",
        title: "",
        description: "",
        location: "",
        venue: "",
        startDate: "",
        endDate: "",
        time: ""
      }),
        (this.update = false);
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    onFileChanged(event) {
      this.contests.image = event.target.files[0];
    },

    save() {
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      const formData = new FormData();
      formData.append("image", this.contests.image);
      formData.append("title", this.contests.title);
      formData.append("description", this.contests.description);
      formData.append("location", this.contests.location);
      formData.append("venue", this.contests.venue);
      formData.append("startDate", this.startDate);
      formData.append("endDate", this.endDate);
      formData.append("time", this.time);

      // eslint-disable-next-line no-console
      console.log(this.contests, this.startDate, this.endDate, this.time);
      serv.postRequest("contest/newCont", formData).then(
        serv
        .getRequest("contest/allCont")
        .then(response => {
          // JSON responses are automatically parsed.
          this.desserts = response.data.result;
          // eslint-disable-next-line no-console
          console.log(this.desserts, "are the contests");
        })
        .catch(e => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        })
       
      )
      this.close();
     
    }
  }
};
</script>

<style lang="css" scoped>
@media (min-width: 1281px) {
  
  .wrap{
    margin-left:240px
  }
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .wrap{
    margin-left:100px
  }
  
}
</style>