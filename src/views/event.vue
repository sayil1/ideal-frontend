<template>
  <div>
    <nava />
    <div style="padding-top:200px;">
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
              <h3>Title: {{event[0].title}}</h3>
              <h3>
                Location: {{event[0].location}}
              </h3>
              <h3>
                Starting:{{event[0].startDate}}
              </h3>
              <h3>Ending:{{event[0].endDate}}</h3>
                <v-btn class="ma-2" outlined color="orange">Share event</v-btn>
              <br />
            </div>
          </div>
      </span>-->
      <div style="padding-left:0px" class="row">
        <v-card class="col-md-4" max-width="400" style="margin-left:150px; margin-bottom:100px">
          <v-img class="white--text align-end" height="200px" v-bind:src="event[0].imagesPath">
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>
          <hr />
          <v-card-subtitle class="pb-0">Share This Event</v-card-subtitle>

          <v-card-actions>
           <p> <v-icon size="20" color="orange darken-2" right>mdi-instagram</v-icon> <v-icon size="20" color="orange darken-2" right>mdi-facebook</v-icon> <v-icon size="20" color="orange darken-2" right>mdi-twitter</v-icon></p>
          </v-card-actions>
        </v-card>
        <div style="margin-left:20px" class="col-md-6">
         <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title" style="color:orange"> {{event[0].title}}</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p>  {{event[0].location}}
          <br> Starting - {{event[0].startDate}}
          <br> Ending - {{event[0].endDate}}
        </p>
        <a class="card-text"><small class="red--text">Register for event here</small></a>
      
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
  components: {
    nava,
    foota
  },
  data: () => ({
    event: {},
    errors: [],
    eventId: ""
  }),
  created() {
    this.initialize();
  },
  methods: {
    show() {
      // eslint-disable-next-line no-console
      console.log(this.events, "are the events");
    },
    initialize() {
      this.eventId = this.$route.query.eid;
      // eslint-disable-next-line no-console
      console.log(this.eventId, "is the id");

      serv
        .getRequest(`eve/get-event/${this.eventId}`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.event = response.data.result;
          // eslint-disable-next-line no-console
          console.log(response.data.result, "are the events");
        })
        .catch(e => {
          // this.errors.push(e);

          // eslint-disable-next-line no-console
          console.log(e);
        });
    }
  }
};
</script>

<style lang="css" scoped>
.links {
  color: black;
}
</style>