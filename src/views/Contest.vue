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
              <h3>Title: {{contest[0].title}}</h3>
              <h3>
                Location: {{contest[0].location}}
              </h3>
              <h3>
                Starting:{{contest[0].startDate}}
              </h3>
              <h3>Ending:{{contest[0].endDate}}</h3>
                <v-btn class="ma-2" outlined color="orange">Share contest</v-btn>
              <br />
            </div>
          </div>
      </span>-->
      <div style="padding-left:0px; " class="row">
        <v-card
          class="col-md-4"
          max-width="450"
          style="margin-left:100px; margin-bottom:100px; background-color:#CAD9D8"
        >
          <v-img class="white--text align-end" height="250px" v-bind:src="contest.imagesPath"></v-img>
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

            <a
              style="text-decoration:none"
              class="resp-sharing-button__link"
              href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fhttps://ideal-it.herokuapp.com"
              target="_blank"
              rel="noopener"
              aria-label
            >
              <v-icon size="20" color="orange darken-2" right>mdi-twitter</v-icon>
            </a>
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
              >{{contest.title}}</h4>
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
                {{contest.location}}
                <br />
                <span style="color: #1B6761;">Starting -</span>
                {{contest.startDate |moment("dddd, MMMM Do YYYY")}}
                <br />
                <span style="color: #1B6761;">Ending -</span>
                {{contest.endDate |moment("dddd, MMMM Do YYYY")}}
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
                    >Register For Contest</v-btn>
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
                      >{{contest.title}}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="participants.fname" label="First name" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              label="Last name"
                              v-model="participants.lname"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="participants.email" label="Email*" required></v-text-field>
                          </v-col>
                            <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="participants.phone" label="Phone" required></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small style="color:black">*Ticket ID will be sent to your mail</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="saveContest(), dialog = false">Register</v-btn>
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
                  >Link to contest copied</div>

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

export default {
  // metaInfo: {
    
  //   title: "",
  //   titleTemplate: '%s | vue-meta Example App'
  // },
  components: {
    nava,
    foota
  },
 

  data: () => ({
    contest: {},
    errors: [],
    contestId: "",
    dialog: false,
    message: " ",
    snackbar: false,
    color: "",
    mode: "",
    timeout: 6000,
    x: null,
    y: "top",
     participants:{
      fname:"",
      lname:"",
      phone:"",
      email:""
    }
  }),
    metaInfo () {
    return {
      title: `IDeal-IT | ${this.contest.title}`,
      image:this.contest.imagesPath,
       meta: [
      { charset: 'utf-8' },
      {
        property: "twitter:title",
        content: `IDeal-IT | ${this.contest.title}`,
        // following template options are identical
        // template: '%s - My page',
       
        vmid: 'twitter:title'
      },
       {
        property: "twitter:title",
        content: `IDeal-IT | ${this.contest.title}`,
        // following template options are identical
        // template: '%s - My page',
       
        vmid: 'twitter:title'
      },]
    }
  },
  created() {
    this.initialize();
  },
  
  methods: {
    show() {
      // eslint-disable-next-line no-console
      console.log(this.events, "show");
    },
    onCopy: function() {
      // alert('You just copied: ' + e.text)

      // eslint-disable-next-line no-console
      console.log(serv.getUrl());
      let url = serv.getUrl();
      this.message = `${url}/contest?cid=${this.$route.query.cid}`;
    },
    onError: function() {
      // alert('Failed to copy texts' + e)
    },
    initialize() {
      this.contestId = this.$route.query.cid;
      // eslint-disable-next-line no-console
      console.log(this.eventId, "is the id");

      serv
        .getRequest(`contest/get-contest/${this.contestId}`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.contest = response.data.result[0];
          
          // eslint-disable-next-line no-console
          console.log(response.data.result[0], " the events");
        })
        .catch(e => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    },
        saveContest(){
       let newData = {
        fname: this.participants.fname,
        lname: this.participants.lname,
        email: this.participants.email,
        phone: this.participants.phone,
      
      };
       // eslint-disable-next-line no-console
      console.log("working ooo",  this.contestId, newData)

       serv.putRequest(`contest/update-contest/${this.contestId}`, newData ).then(response=>{
             this.$alertify.success(response.data);
       })
    }
  }
};
</script>

<style lang="css" scoped>
.links {
  color: black;
}
</style>