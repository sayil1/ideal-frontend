<template>
  <div style="background-color:black">
    <nava />
    <div style="padding-top:150px;">
      <!-- <span  style="text-align:center;">
          <div class="row">
            <div>
              <v-img
                style="margin-left:30px"
                class="white--text align-end"
                height="300px"
               
              
              ></v-img>
            </div>
            <div style="padding:30px; text-align:left">
              <h3>Title: {{web[0].title}}</h3>
              <h3>
                Location: {{web[0].location}}
              </h3>
              <h3>
                Starting:{{web[0].startDate}}
              </h3>
              <h3>Ending:{{web[0].endDate}}</h3>
                <v-btn class="ma-2" outlined color="orange">Share web</v-btn>
              <br />
            </div>
          </div>
      </span>-->
      <div style="padding-left:0px; " class="row">
        <v-card
          class="col-md-4 cards"
        
          style="background-color:#CAD9D8"
        >
          <v-img class="white--text align-end" height="250px" v-bind:src="web.imagesPath"></v-img>
          <hr />
          <v-card-subtitle class="pb-0" style="color: #1B676; ">
            <strong
              style="font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 108.34%;
letter-spacing: 0.02em;
color: #1B6761;"
            >Share This Event</strong>
          </v-card-subtitle>

          <v-card-actions>
            <v-icon
              data-placement="top"
              title="Copy"
              size="20"
              color="orange darken-2"
              right
              v-clipboard:copy="message"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              @click="snackbar = true; onCopy()"
            >mdi-content-copy</v-icon>
            <v-icon
              data-placement="top"
              title="Share"
              style="padding-left:5%"
              size="20"
              color="orange darken-2"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >mdi-share-variant</v-icon>
            <div
              class="modal fade"
              id="staticBackdrop"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Share this event with...</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <vue-goodshare-twitter
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Twitter"
                      button_design="gradient"
                      :page_url="WebinarUrl"
                      has_icon
                      has_square_edges
                    ></vue-goodshare-twitter>
                    <vue-goodshare-telegram
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Telegram"
                      button_design="gradient"
                      page_url="https://vuejsfeed.com/"
                      has_icon
                      has_square_edges
                    ></vue-goodshare-telegram>
                    <vue-goodshare-facebook
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                      :page_url="WebinarUrl"
                      title_social
                      has_icon
                    ></vue-goodshare-facebook>
                    <vue-goodshare-whatsapp
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Whatsapp"
                      :page_url="WebinarUrl"
                      title_social
                      has_icon
                    ></vue-goodshare-whatsapp>
                    <VueGoodshareLinkedIn
                      data-toggle="tooltip"
                      data-placement="top"
                      title="LinkedIn"
                      page_url="https://github.com/koddr/vue-goodshare"
                      title_social
                      has_icon
                    ></VueGoodshareLinkedIn>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </v-card-actions>
        </v-card>
        <div style="margin-left:20px" class="col-md-6">
          <div class="col-md-8">
            <div class="card-body">
              <h4
                class="card-title"
                style="font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 108.34%;
letter-spacing: 0.02em;
color: orange;
"
              >{{web.title}}</h4>
              <p
                class="card-text"
                style="font-family: SF UI Display;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 129.84%;
letter-spacing: 0.02em;
color: orange;"
              >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

              <p
                style="font-family: SF UI Display;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 129.84%;
letter-spacing: 0.02em;
color:orange
;"
              >
                <v-icon color="#1B6761" small style="margin:3px">mdi-map-marker</v-icon>
                {{web.location}}
                <br />
                <span style="color: #1B6761;">Starting -</span>
                {{web.startDate |moment("dddd, MMMM Do YYYY")}}
                <br />
                <span style="color: #1B6761;">Ending -</span>
                {{web.endDate |moment("dddd, MMMM Do YYYY")}}
              </p>
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ma-2"
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      color="white"
                    >Register For Event</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span
                        class="headline"
                        style="font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 108.34%;
letter-spacing: 0.02em;
color: #1B6761;
"
                      >{{web.title}}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="participants.fname" label="First Name" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="participants.lname" label="Last Name"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="participants.phone" label="Phone Number"></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="participants.email" label="Email*" required></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small style="color:black">*Ticket ID will be sent to your mail</small>
                    </v-card-text>
                       <loader v-if="loading" class="loader" />
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      
                      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                     <v-btn color="blue darken-1" text @click="saveEvent()">Register</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-snackbar
                  v-model="snackbar"
                  :bottom="y === 'bottom'"
                  :color="color"
                  :left="x === 'left'"
                  :multi-line="mode === 'multi-line'"
                  :right="x === 'right'"
                  :timeout="timeout"
                  :top="y === 'top'"
                  :vertical="mode === 'vertical'"
                >
                  <div
                    style="background-color:black; padding:5px; font-style:bold "
                  >Link to web copied</div>

                  <template v-slot:action="{ attrs }">
                    <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                  </template>
                </v-snackbar>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>

    <foota />
  </div>
</template>

<script>
import { Services } from "../service";
var serv = new Services();
import nava from "../components/newNav";
import foota from "../components/footer";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareTelegram from "vue-goodshare/src/providers/Telegram.vue";
import VueGoodshareWhatsapp from "vue-goodshare/src/providers/WhatsApp.vue";
import VueGoodshareLinkedIn from "vue-goodshare/src/providers/LinkedIn.vue";
import loader from "../components/loader";
export default {
  // metaInfo: {

  //   title: "",
  //   titleTemplate: '%s | vue-meta Example App'
  // },
  components: {
    nava,
    foota,
    loader,
    VueGoodshareFacebook,
    VueGoodshareTwitter,
    VueGoodshareTelegram,
    VueGoodshareWhatsapp,
    VueGoodshareLinkedIn,
  },

  data: () => ({
     loading: false,
    web: {},
    errors: [],
    webId: "",
    dialog: false,
    message: " ",
    snackbar: false,
    color: "",
    mode: "",
    timeout: 6000,
    WebinarUrl:"",
    x: null,
    y: "top",
    n: "]lp",
     participants: {
      fname: "",
      lname: "",
      phone: "",
      email: "",
    },
  }),
  metaInfo() {
    return {
      title: `IDeal-IT | ${this.web.title}`,
      image: this.web.imagesPath,
      meta: [
        { charset: "utf-8" },
        {
          property: "twitter:title",
          content: `IDeal-IT | ${this.web.title}`,
          // following template options are identical
          // template: '%s - My page',

          vmid: "twitter:title",
        },
        {
          property: "twitter:title",
          content: `IDeal-IT | ${this.web.title}`,
          // following template options are identical
          // template: '%s - My page',

          vmid: "twitter:title",
        },
      ],
    };
  },
  created() {
    this.initialize();
    this.getUrl();
  },

  methods: {
      getUrl() {
      let url = serv.getUrl();
      this.WebinarUrl = `${url}/web?wid=${this.$route.query.wid}`;
    },
    show() {
      // eslint-disable-next-line no-console
      console.log(this.events, "show");
    },
    onCopy: function () {
      // alert('You just copied: ' + e.text)

      // eslint-disable-next-line no-console
      console.log(serv.getUrl());
      let url = serv.getUrl();
      this.message = `${url}/web?wid=${this.$route.query.wid}`;
    },
    onError: function () {
      // alert('Failed to copy texts' + e)
    },
    initialize() {
      this.webId = this.$route.query.wid;
      // eslint-disable-next-line no-console
      console.log(this.webId, "is the id");

      serv
        .getRequest(`web/get-webinar/${this.webId}`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.web = response.data.result[0];

          // eslint-disable-next-line no-console
          console.log(response.data.result[0], " the events");
        })
        .catch((e) => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    },
       saveEvent() {
      let newData = {
        fname: this.participants.fname,
        lname: this.participants.lname,
        email: this.participants.email,
        phone: this.participants.phone,
      };
      // eslint-disable-next-line no-console
      console.log("working ooo", this.webId);
      this.loading = true;
      serv
        .putRequest(`web/update-webinar/${this.webId}`, newData)
        .then((response) => {
          this.loading = false;
          this.$alertify.success(response.data);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.links {
  color: black;
}

@media only screen and (max-width: 400px) {
  .cards {
    margin: 20px;
    background-color: #cad9d8;
    max-width: 350px;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .cards {
    margin-left: 100px;
    margin-bottom: 100px;
    background-color: #cad9d8;
    max-width: 450;
  }
}
</style>