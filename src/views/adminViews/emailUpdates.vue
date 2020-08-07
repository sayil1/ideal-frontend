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
            </div>

            <menus />
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
        <div>
          <form>
            <label for="exampleFormControlTextarea1">Enter message here</label>
            <textarea
              v-model="message"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <div class="my-2">
              <v-btn @click="sendMail()" color="success" dark large>Send Message</v-btn>
            </div>
            <loader v-if="send" />
          </form>
        </div>
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
import loader from "../../components/loader"
export default {
  components: {
    side,
    menus,
    loader
  },
  data: () => ({
    snackbar: false,
    text: "",
    alerts: false,
    send:false,
    dialog: false,
    message: "",
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
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.alerts = false;
      serv
        .getRequest("diy/allDiys")
        .then((response) => {
          // JSON responses are automatically parsed.
          this.desserts = response.data.result;
          // eslint-disable-next-line no-console
          console.log(this.desserts, "are the diy");
        })
        .catch((e) => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    },

    sendMail() {
      this.alertify = true;
      this.send = true;
     let  newData = {
        message: this.message
      }

      serv.postRequest("emailUpdates/sendMessage", newData).then((response) => {
        this.$alertify.success(response.data);

        this.send = false;
        // eslint-disable-next-line no-console
        console.log(response);
      });
    },

    // async save() {

    //   this.alerts = true;
    //   this.dialog = false;
    //   const formData = new FormData();
    //   formData.append("image", this.diy.image);
    //   formData.append("title", this.diy.title);
    //   formData.append("description", this.diy.description);
    //   formData.append("price", this.diy.price);
    //   // formData.append("category", this.diy.category);
    //   formData.append("quantity", this.diy.quantity);

    //   // eslint-disable-next-line no-console
    //   console.log(this.diy, this.startDate, this.endDate, this.time);
    //   await serv.postRequest("diy/newDiy", formData).then((response) => {
    //     (this.text = response.data), (this.alerts = false);
    //     this.snackbar = true;
    //     // eslint-disable-next-line no-console
    //     console.log(response);
    //     this.initialize();
    //   });
    //   this.close();
    // },
  },
};
</script>
<style lang="css" scoped>
@media (min-width: 1281px) {
  .wrap {
    margin-left: 240px;
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
  .wrap {
    margin-left: 100px;
  }
}
</style>