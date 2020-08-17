<template>
  <div>
    <div class="row" style>
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4" >
        <div class="card border-left-primary shadow h-100 py-2" style="background-color:rgb(204, 230, 255)">
          <div class="card-body" >
            <div class="row no-gutters align-items-center">
              <div class="col mr-2" >
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >Events (Monthly)</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{events}}</div>
              </div>
              <!-- <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>-->
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2" style="background-color:rgb(179, 255, 179)">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-success text-uppercase mb-1"
                >Webnars (Annual)</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{web}}</div>
              </div>
              <!-- <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>-->
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-secondary shadow h-100 py-2" style="background-color:rgb(230, 230, 230)">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">Books</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{books}}</div>
              </div>
              <!-- <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>-->
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-danger shadow h-100 py-2" style="background-color:rgb(255, 214, 204)">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">DIY Kits</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{kits}}</div>
              </div>
              <!-- <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>-->
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2" style="background-color:rgb(204, 255, 255)">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Mail Subscribers</div>
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{subscribers}}</div>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2" style="background-color:rgb(255, 255, 179)">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Contests</div>
                <span class="h5 mb-0 font-weight-bold text-gray-800">{{contests}}</span>
              </div>
              <!-- <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Services } from "../service";
var serv = new Services();
// import {mapState} from "../store/index"
export default {
  data: () => ({
    // users: 0,
    // contests: 0
  }),

  created() {
    this.$store.dispatch("getEvents");
    this.$store.dispatch("getBooks");
    this.$store.dispatch("getWeb");
    this.$store.dispatch("getKits");
    this.$store.dispatch("getSubscribers");
      this.$store.dispatch("getContest");

  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    books() {
      return this.$store.state.books;
    },
    web() {
      return this.$store.state.web;
    },
    kits() {
      return this.$store.state.kits;
    },
    subscribers(){
       return this.$store.state.subscribers;
    },
      contests(){
       return this.$store.state.contests;
    }


  },
  methods: {
    getUsers() {
      serv.getRequest("web/allWeb").then(response => {
        // JSON responses are automatically parsed.
        this.webinars = response.data.result.length;
        // eslint-disable-next-line no-console
        console.log(response.data.result, "are the webinars");
      });
    }
  }
};
</script>