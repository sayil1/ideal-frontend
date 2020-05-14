<template>
  <div>
    <nava />
    <div style="background-color: ">
      <div class="card-size">
        <div class="card-body" style></div>
      </div>
    </div>

    <div class="cards" style="margin-top:70px ; ">
      <div style="padding:50px">
        <v-alert v-if="event.lenght<1" outlined type="warning" prominent border>
          <span style="text-align:center;
    ">NO EVENTS AT THE MOMENT! CHECK BACK LATTER</span>
        </v-alert>events
      </div>

      <div class="row" dense>
        <div class="col-md-3 links" v-for="(event, i) in event" :key="i">
          <router-link :to="'event?eid='+ event._id" class="links">
            <v-card max-width="300" style="margin:5px'; text-decoration: none">
              <v-img class="white--text align-end" height="200px" v-bind:src="event.imagesPath"></v-img>
              <v-card-title>{{event.title}}</v-card-title>
              <v-card-subtitle class="pb-0">{{event.location}}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div class="links">Start: {{event.startDate}}</div>
                <div class="links">Time: {{event.time}}</div>
                <div>End: {{event.endDate}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text>see more</v-btn>
                <!-- <v-btn color="orange" text>Explore</v-btn> -->
              </v-card-actions>
            </v-card>
          </router-link>
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
    errors: []
  }),
  created() {
    serv
      .getRequest("eve/allEve")
      .then(response => {
        // JSON responses are automatically parsed.
        this.event = response.data.result;
        // eslint-disable-next-line no-console
        console.log(this.desserts, "are the events");
      })
      .catch(e => {
        // this.errors.push(e);

        // eslint-disable-next-line no-console
        console.log(e);
      });
  },
  methods: {
    show() {
      // eslint-disable-next-line no-console
      console.log(this.events, "are the events");
    }
  }
};
</script>

<style lang="css">
.links {
  text-decoration: none !important;
  color: blue;
}
.links:hover {
  text-decoration: none !important;
  color: aqua;
}
template {
  margin-left: 10px;
  margin-right: 10px;
}
.cards {
  margin: 20px;
}
</style>