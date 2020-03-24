<template>
  <div>
    <div>
      <!-- Page Wrapper -->
      <div id="wrapper">
        <!-- Sidebar -->

        <side />

        <div id="content-wrapper" class="d-flex flex-column">
          <!-- Main Content -->
          <div id="content">
            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 mt-2 text-gray-800">Dashboard</h1>
              </div>

              <menus />
              <div>
                <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" class="m-2" dark v-on="on">
                        <div>add news</div>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">News</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field label="Caption" v-model="caption" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                              <v-text-field label="message" v-model="messages"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="startDate"
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
                                  <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
                                  <v-btn
                                    flat
                                    color="primary"
                                    @click="$refs.menu1.save(startDate)"
                                  >OK</v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-col>

                            <v-col cols="12">
                              <v-menu
                                ref="menu2"
                                v-model="menu2"
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
                                  <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                                  <v-btn flat color="primary" @click="$refs.menu2.save(endDate)">OK</v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12">
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
                                    label=" End Time"
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
                                  <v-btn flat color="primary" @click="$refs.menu.save(time)">OK</v-btn>
                                </v-time-picker>
                              </v-menu>
                            </v-col>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                              <v-btn color="blue darken-1" text @click="saveNews()">Save</v-btn>
                            </v-card-actions>
                          </v-row>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>
              <v-row justify="center">
                <v-expansion-panels popout>
                  <v-expansion-panel v-for="(item,i) in news" :key="i">
                    <v-expansion-panel-header>{{item.caption}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      {{item.message}}
                      <v-spacer></v-spacer>
                      <v-btn small color="red" @click="delNews(item)">Delete</v-btn>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>

              <div class="text-center">
                <!-- <v-btn
      :disabled="alerts"
      :loading="alerts"
      class="white--text"
      color="purple darken-2"
      @click="alerts = true"
    >
      Start loading
                </v-btn>-->
                <v-dialog v-model="alerts" hide-overlay persistent width="300">
                  <v-card color="primary" dark>
                    <v-card-text>
                      saving.. please wait
                      <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
              <!--  snack bar below -->
              <div class="text-center">
                <v-snackbar v-model="snackbar" :multi-line="multiLine">
                  {{ text }}
                  <v-btn color="red" text @click="snackbar = false">Close</v-btn>
                </v-snackbar>
              </div>
            </div>
          </div>

          <!-- End of Footer -->
        </div>
        <!-- End of Content Wrapper -->
      </div>
    </div>
  </div>
</template>


<script>
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
    // message: "kai",
    caption: "",
    snackbar: false,
    text: "",
    news: {},
    dialog: false,
    alerts: false,
    startDate: "",
    menu1: "",
    endDate: "",
    menu2: "",
    menu: "",
    time: "",
    messages: ""
  }),

  created() {
    this.initialize();
    // alert('')
  },
  methods: {
    initialize() {
      serv
        .getRequest("news/getNews")
        .then(response => {
          // JSON responses are automatically parsed.
          this.news = response.data.result;
          // eslint-disable-next-line no-console
          this.news, "are the events";
        })
        .catch(e => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    },
    async saveNews() {
      let newNews = {
        caption: this.caption,
        message: this.messages,
        startDate: this.startDate,
        endDate: this.endDate,
        endTime: this.time
      };
      (this.dialog = false),
        (this.alerts = true),
        serv.postRequest("news/addNews", newNews).then(response => {
          (this.text = response.data), (this.alerts = false);
          this.snackbar = true;
          // eslint-disable-next-line no-console
          console.log(response);
          this.initialize();
        });

      // eslint-disable-next-line no-console
      console.log(newNews);
    },
    delNews(item) {
      serv.getRequest(`news/delNews/${item._id}`).then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data.result, "is the events");
        // this.initialize();
      });
    }
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.message = false), 4000);
    }
  }
};
</script>

<style lang="">
</style>