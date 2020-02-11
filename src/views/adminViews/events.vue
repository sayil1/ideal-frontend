<template>
  <div style="background-color:">
    <nava />
    <div
      class="jumbotron jumbotron-fluid"
      style="background-color:rgb(35, 159, 216); margin-bottom:0px"
    >
      <div class="container" style="margin-top:80px; margin-bottom:-80px">
        <h1 class="display-2">ICM UK APPROVED CENTER</h1>

        <div class="cards">
          <v-container fluid>
            <v-row dense>
              <v-card class max-width="300" style="margin:20px" v-for="(event) in events" v-bind:key="event">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  v-bind:src="event.imagesPath"
                >
             
                 
                </v-img>
                 <v-card-title>{{event.title}}</v-card-title>

                <v-card-subtitle class="pb-0"> {{event.location}}</v-card-subtitle>

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
      </div>
    </div>

    <foota />
  </div>
</template>


<script>
import { Services } from "../../service";
var serv = new Services();
import nava from "../../components/testnav";
import foota from "../../components/footer";

export default {
  components: {
    nava,
    foota
  },
  data: () => ({
    events: {},
    errors:[]
  }),
  created() {
    serv.getRequest('eve/allEve')
    .then(response => {
        // JSON responses are automatically parsed.
        this.events = response.data.result;
        // eslint-disable-next-line no-console
        console.log(this.events, 'are the events')
       
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods:{
    show(){
      // eslint-disable-next-line no-console
        console.log(this.events, 'are the events')
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