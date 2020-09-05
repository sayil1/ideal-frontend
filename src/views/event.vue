<template>
  <div style="background-color:black">
    <nava />
    <div style="padding-top:150px;">
      <div style="padding-left:0px; " class="row">
        <v-card
          class="col-md-4"
          max-width="450"
          style="margin-left:100px; margin-bottom:100px; background-color:#CAD9D8"
        >
          <v-img class="white--text align-end" height="250px" v-bind:src="event.imagesPath"></v-img>
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
              size="20"
              color="orange darken-2"
              right
              v-clipboard:copy="message"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              @click="snackbar = true; onCopy()"
            >mdi-content-copy</v-icon>

            <v-icon
              style="padding-left:5%"
              size="20"
              color="orange darken-2"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >mdi-share-variant</v-icon>
          </v-card-actions>
        </v-card>

        <!-- modal for social shares -->

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
                 data-toggle="tooltip" data-placement="top" title="Twitter"
                  button_design="gradient"
                  :page_url=eventUrl
                  has_icon
                  has_square_edges
                ></vue-goodshare-twitter>
                <vue-goodshare-telegram
                 data-toggle="tooltip" data-placement="top" title="Telegram"
                  button_design="gradient"
                  page_url="https://vuejsfeed.com/"
                  has_icon
                  has_square_edges
                ></vue-goodshare-telegram>
                <vue-goodshare-facebook
                 data-toggle="tooltip" data-placement="top" title="Facebook"
                   :page_url=eventUrl
                  title_social
                  has_icon
                ></vue-goodshare-facebook>
                <vue-goodshare-whatsapp
                 data-toggle="tooltip" data-placement="top" title="Whatsapp"
                  page_url="https://github.com/koddr/vue-goodshare"
                  title_social
                  has_icon
                ></vue-goodshare-whatsapp>
                  <VueGoodshareLinkedIn
                   data-toggle="tooltip" data-placement="top" title="LinkedIn"
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

        <!-- social share ends here -->

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
              >{{event.title}}</h4>
              <p
                class="card-text"
                style="font-family: SF UI Display;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 129.84%;
letter-spacing: 0.02em;
color: orange;"
              >{{event.description}}</p>

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
                {{event.location}}
                <br />
                <v-icon color="#1B6761" small style="margin:3px"></v-icon>
                {{event.venue}}
                <br />
                <span style="color: #1B6761;">Starting -</span>
                {{event.startDate |moment("dddd, MMMM Do YYYY")}}
                <br />
                <span style="color: #1B6761;">Ending -</span>
                {{event.endDate |moment("dddd, MMMM Do YYYY")}}
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
                      >{{event.title}}</span>
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
                      <small style="color:blueviolet">*Ticket ID will be sent to your mail</small>
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
                  >Link to event copied</div>

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
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareTelegram from "vue-goodshare/src/providers/Telegram.vue";
import VueGoodshareWhatsapp from "vue-goodshare/src/providers/WhatsApp.vue";
import VueGoodshareLinkedIn from "vue-goodshare/src/providers/LinkedIn.vue";
import { Services } from "../service";
var serv = new Services();
import nava from "../components/newNav";
import foota from "../components/footer";
import loader from "../components/loader";

export default {

// metaInfo: {
//       title: 'My Example App',
//       titleTemplate: '%s - Yay!',
//       htmlAttrs: {
//         lang: 'en',
//         amp: true
//       }
//     },
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
    event: {},
    eventUrl :"",
    errors: [],
    eventId: "",
    dialog: false,
    message: " ",
    snackbar: false,
    color: "",
    mode: "",
    timeout: 6000,
    x: null,
    y: "top",
    participants: {
      fname: "",
      lname: "",
      phone: "",
      email: "",
    },
    shareLink: "",
  }),
  metaInfo() {
    return {
      title: `IDeal-IT | ${this.event.title}`,

      meta: [
        {
          name: "description",
          content:
            "Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.",
        },
         {
          property: "og:description",
          content: `${this.event.description}`,
        },
         {
          property: "og:title",
          content: `${this.event.title}`,
        },
        
        {
          property: "twitter:title",
          content: "Ideal It center, Asaba TT",
        },
        { property: "og:site_name", content: "Ideal IT Center" },
           { property: "og:image", content: `${this.event.imagesPath}`},
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },

  created() {
    this.initialize();
     this.getUrl()
  },

  methods: {
     getUrl(){
       let url = serv.getUrl();
      this.eventUrl = `${url}/event?eid=${this.$route.query.eid}`;
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
      this.message = `${url}/event?eid=${this.$route.query.eid}`;
    },
    onError: function () {
      // alert('Failed to copy texts' + e)
    },
    initialize() {
      this.eventId = this.$route.query.eid;
      // eslint-disable-next-line no-console
      console.log(this.eventId, "is the id");

      serv
        .getRequest(`eve/get-event/${this.eventId}`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.event = response.data.result[0];
          this.shareLink = `https://twitter.com/intent/tweet/?text=${response.data.result[0].title}.&amp;url=http%3A%2F%2Fhttps://ideal-it.herokuapp.com`;

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
      console.log("working ooo", this.eventId);
      this.loading = true;
      serv
        .putRequest(`eve/update-event/${this.eventId}`, newData)
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
.loader {
  margin-right: auto;
  margin-left: 50px;
}
</style>