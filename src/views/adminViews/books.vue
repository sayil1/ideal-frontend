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
            </div>

            <menus />
            <div class="row">
              <!-- Area Chart -->
              <div class="col-xl-12 col-lg-7">
                <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                  >
                    <h6 class="m-0 font-weight-bold text-primary">Books Overview</h6>
                  </div>

                  <div class="card-body">
                    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                      <template v-slot:top>
                        <v-toolbar flat color="white">
                          <v-toolbar-title>Books</v-toolbar-title>
                          <v-divider class="mx-4" inset vertical></v-divider>

                          <v-btn color="success" dark class="mb-2" v-on:click="initialize()">Refresh</v-btn>

                          <v-spacer></v-spacer>

                          <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                              <v-btn color="success" dark class="mb-2" v-on="on">Add Books</v-btn>
                            </template>
                            <!-- this holds the forms -->

                            <div class="form">
                              <v-card>
                                <v-toolbar color flat>
                                  <v-toolbar-title>Upload Book</v-toolbar-title>
                                </v-toolbar>
                                <v-container fluid grid-list-xl>
                                  <form enctype="multipart/form-data" @submit.prevent="onSubmit">
                                    <v-layout wrap align-center>
                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field
                                          label="Title"
                                          v-model="books.title"
                                          value="sayil"
                                        >{{books.title}}</v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field
                                          label="Short Description"
                                          v-model="books.description"
                                        ></v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field label="price(NGN)" v-model="books.price"></v-text-field>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-select
                                          :items="category"
                                          label="Category"
                                          multiple
                                          v-model="books.category"
                                          chips
                                          persistent-hint
                                        ></v-select>
                                      </v-flex>

                                      <v-flex xs12 sm6 d-flex>
                                        <v-text-field label="Quantity" v-model="books.quantity"></v-text-field>
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

                      <template v-slot:item.status="{ item }">
                        <v-icon
                          v-if="item.startDate < new Date().toISOString().substr(0, 10)"
                          color="red"
                        >mdi-circle-medium</v-icon>
                        <v-icon
                          v-if="item.startDate >= new Date().toISOString().substr(0, 10)"
                          color="blue"
                        >mdi-circle-medium</v-icon>
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
        <v-dialog v-model="alerts" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              saving.. please wait
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>

        <div class="text-center">
          <v-snackbar v-model="snackbar">
            {{ text }}
            <v-btn color="red" text @click="snackbar = false">Close</v-btn>
          </v-snackbar>
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Ideal IT 2020</span>
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
            <a class="btn btn-primary" href="/">Logout</a>
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
    snackbar: false,
    text: "",
    alerts: false,
    menu: false,
    modal2: false,
    update: false,
    category: ["Comics", "History", "Health", "ICT"],
    books: {
      image: "",
      title: "",
      description: "",
      category: "",
      quantity: "",
      price: ""
    },
    dialog: false,

    headers: [
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "title"
      },
      { text: "Price", value: "price" },
      { text: "Quantity", value: "quantity" },
      { text: "Categories", value: "category" },
      { text: "Status", value: "status", align: "center" },
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
    }
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
    let a = new Date().toISOString().substr(0, 10);
    // let b = this.books.startDate
    let b = new Date("2020-03-13").toISOString().substr(0, 10);

    if (b > a) {
      // eslint-disable-next-line no-console
      console.log("ends today");
      // alert('greater than today')
    } else {
      // eslint-disable-next-line no-console
      console.log("not yet");
      // alert('not yet')
    }
  },

  methods: {
    initialize() {
      this.alerts = false;
      serv
        .getRequest("books/allBooks")
        .then(response => {
          // JSON responses are automatically parsed.
          this.desserts = response.data.result;
          // eslint-disable-next-line no-console
          console.log(this.desserts, "are the books");
        })
        .catch(e => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    },
    getBooks(item) {
      // eslint-disable-next-line no-console
      this.newId = item._id;
      serv.getRequest(`eve/get-event/${item._id}`).then(response => {
        // eslint-disable-next-line no-console
        // console.log(response.data.result, "is the books");
        this.books = response.data.result[0];
        return item._id;
      });
    },
    updates(item) {
      this.dialog = true;
      this.update = true;
      this.getBooks(item);
    },

    editItem() {
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);

      this.dialog = true;
      const formData = new FormData();
      // formData.append("image", this.books.image);
      formData.append("title", this.books.title);
      formData.append("description", this.books.description);
      formData.append("location", this.books.location);
      formData.append("venue", this.books.venue);
      formData.append("startDate", this.startDate);
      formData.append("endDate", this.endDate);
      formData.append("time", this.time);

      // eslint-disable-next-line no-console

      serv.postRequest(`update-event/${this.newId}`, formData);

      // eslint-disable-next-line no-console
      console.log(this.newId, "items");
      this.close();
    },

    deleteItem(item) {
      serv.getRequest(`eve/del/${item._id}`).then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data.result, "is the books");
        this.initialize();
      });
    },

    close() {
      (this.books = {
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
      this.books.image = event.target.files[0];
    },

    async save() {
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      this.alerts = true;
      this.dialog = false;
      const formData = new FormData();
      formData.append("image", this.books.image);
      formData.append("title", this.books.title);
      formData.append("description", this.books.description);
      formData.append("price", this.books.price);
      formData.append("category", this.books.category);
      formData.append("quantity", this.books.quantity);

      // eslint-disable-next-line no-console
      console.log(this.books, this.startDate, this.endDate, this.time);
      await serv.postRequest("books/newBook", formData).then(response => {
        (this.text = response.data), (this.alerts = false);
        this.snackbar = true;
        // eslint-disable-next-line no-console
        console.log(response);
        this.initialize();
      });
      this.close();
    }
  }
};
</script>