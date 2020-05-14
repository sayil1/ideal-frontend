<template>
  <div>
    <nava />
    <div style="padding-top:200px">
      <v-alert outlined prominent style="margin-top:10px">
        <span  style="text-align:center;
    ">
          <div class="row">
            <div>
              <v-img
                class="white--text align-end"
                height="400px"
                width="400px"
                v-bind:src="event[0].imagesPath"
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
        </span>
      </v-alert>
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
  color:black;
}
</style>