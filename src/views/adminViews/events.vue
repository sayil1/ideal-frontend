<template>
  <div style="background-color:">
    <nava />
    <div style="background-color: ">
      <div class="card-size">
        <div class="card-body" style>
        
        </div>
      </div>
    </div>

    

    <div  class="cards" style="margin-top:70px ; ">
      <div style="padding:50px"> 
      <v-alert
      v-if="event.lenght<1"
      outlined
      type="warning"
      prominent
      border=""
    >
    <span style="text-align:center;
    ">
  NO EVENTS AT THE MOMENT! CHECK BACK LATTER
    </span>
     
    </v-alert>
    </div>
      <v-container fluid>
        <v-row dense v-for="(event, i) in event" :key="i" >
          <v-card
            class
            max-width="300"
            style="margin:20px"
            
          >
            <v-img class="white--text align-end" height="200px" v-bind:src="event.imagesPath"></v-img>
            <v-card-title>{{event.title}}</v-card-title>

            <v-card-subtitle class="pb-0">{{event.location}}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Start: {{event.startDate}}</div>
              <div>Time: {{event.time}}</div>

              <div>End: {{event.endDate}}</div>

              <div></div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>

              <!-- <v-btn color="orange" text>Explore</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </div>

    <foota />
  </div>
</template>


<script>
import { Services } from "../../service";
var serv = new Services();
import nava from "../../components/newNav";
import foota from "../../components/footer";

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
        console.log(this.event, "are the eventttt");
      })
      .catch(e => {
        this.errors.push(e);
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
template {
  margin-left: 10px;
  margin-right: 10px;
}
.cards {
  margin: 20px;
}
</style>