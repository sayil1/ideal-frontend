<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <side />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
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
              <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                  >
                    <h6 class="m-0 font-weight-bold text-primary">Events Overview</h6>
                  </div>

                  <div class="card-body">
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      sort-by="calories"
                      class="elevation-1"
                    >
                      <template v-slot:top>
                        <v-toolbar flat color="white">
                          <v-toolbar-title>Events</v-toolbar-title>
                          <v-divider class="mx-4" inset vertical></v-divider>
                          <v-spacer></v-spacer>
                          <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                              <v-btn color="success" dark class="mb-2" v-on="on">Add Event</v-btn>
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
                                        <v-text-field label="Title" v-model="events.title" required></v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field
                                          label="Short Description"
                                          required
                                          v-model="events.description"
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
                                          v-model="events.location"
                                          chips
                                          hint="Select Your Location(State)"
                                          persistent-hint
                                        ></v-select>
                                      </v-flex>
                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field
                                          label="Exact venue of events"
                                          required
                                          v-model="events.venue"
                                        ></v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-menu
                                          ref="menu2"
                                          v-model="menu2"
                                          :close-on-content-click="false"
                                          :nudge-right="40"
                                          :return-value.sync="startDate"
                                          lazy
                                          transition="scale-transition"
                                          offset-y
                                          full-width
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
                                          lazy
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
                                          lazy
                                          transition="scale-transition"
                                          offset-y
                                          full-width
                                          max-width="290px"
                                          min-width="290px"
                                        >
                                          <template v-slot:activator="{ on }">
                                            <v-text-field
                                              v-model="time"
                                              label="Time"
                                              prepend-icon="mdi-clock-outline"
                                              readonly
                                              v-on="on"
                                            ></v-text-field>
                                          </template>
                                          <v-time-picker
                                            v-if="menu"
                                            v-model="time"
                                            full-width
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

                                      <v-flex xs12 sm3 d-flex>
                                        <v-btn outline color="purple" v-on:click="save">Submit</v-btn>
                                      </v-flex>
                                      <br />
                                      <v-flex xs12 sm3 d-flex>
                                        <v-btn outline color="purple">Clear</v-btn>
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
                      <template v-slot:item.action="{ item }">
                        <v-icon color="orange" class="mr-2" @click="editItem(item)">fa-edit</v-icon>
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

    events: {
      image: null,
      title: null,
      description: "",
      location: "",
      venue: "",
      startDate: "",
      endDate: "",
      time: ""
    },
    dialog: false,
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Date", value: "calories" },
      { text: "Time ", value: "fat" },
      { text: "Location", value: "carbs" },

      { text: "Actions", value: "action", sortable: false }
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
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "USPF",
          calories: "26-06-19",
          fat: "2:30 pm",
          carbs: "Abuja, Maitama",
          protein: "4.0"
        },
        {
          name: "Web developers hangout",
          calories: "26-06-19",
          fat: "2:30 pm",
          carbs: "Delta State, Asaba",
          protein: "4.0"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
   
   onFileChanged (event) {
    this.events.image = event.target.files[0]
  },
  
    save() {
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      const formData = new FormData();
      formData.append("image", this.events.image);
      formData.append("title", this.events.title);
      formData.append("description", this.events.description);
      formData.append("location", this.events.location);
      formData.append("venue", this.events.venue);
      formData.append("startDate", this.startDate);
      formData.append("endDate", this.endDate);
      formData.append("time", this.time);

      // eslint-disable-next-line no-console
      console.log(this.events, this.startDate, this.endDate, this.time);
      serv.postRequest("eve/newEve", formData);
      this.close();
    }
  }
};
</script>