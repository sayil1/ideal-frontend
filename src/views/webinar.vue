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
        <v-alert v-if="web.lenght<1" outlined type="warning" prominent border>
          <span style="text-align:center;
    ">NO EVENTS AT THE MOMENT! CHECK BACK LATTER</span>
        </v-alert>
        
        <div style="font-family: SF UI Display;
font-style: normal;
font-weight: 800;
font-size: 34px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;
color: #092E2B;">
  Webinars
        </div>
        <loader v-if="loading"/>
      
      </div>

      <div class="row" dense>
        <div class="col-md-3 links" v-for="(web, i) in web" :key="i">
          <router-link :to="'web?wid='+ web._id" class="links">
            <v-card max-width="300" style="margin:5px'; text-decoration: none; background-color:#CAD9D8;" >
              <v-img class="white--text align-end" height="200px" v-bind:src="web.imagesPath"></v-img>
              <v-card-title style="font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 17px;
letter-spacing: 0.02em;
margin-bottom:10px;

color: #1B6761;" >{{web.title}}</v-card-title>
              <v-card-subtitle class="pb-0" style="font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.02em;
color: #1B6761;"> <v-icon  color="#1B6761" small style="margin:3px">mdi-map-marker</v-icon>{{web.location}}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div  style="font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.02em;
color: #1B6761;">  <v-icon small color="#1B6761" style="margin:3px" >mdi-calendar-range</v-icon>{{web.startDate |moment("dddd, MMMM Do YYYY")}}</div>
                <!-- <div >Time: {{web.time}}</div>
                <div>End: {{web.endDate}}</div> -->
              </v-card-text>
              <div style="background-color:#CAD9D8;">
 <v-card-actions>
                 <router-link :to="'web?wid='+ web._id" class="links">   <v-btn class="ma-2" outlined color="#1B6761">get ticket</v-btn></router-link>
              </v-card-actions>
              </div>
             
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
import loader from "../components/loader"

export default {
  components: {
    nava,
    foota,
    loader
  },
  data: () => ({
    web: {},
    errors: [],
    loading:false
  }),
  created() {
    this.loading = true
    serv
      .getRequest("web/allWeb")
      .then(response => {
        // JSON responses are automatically parsed.
        this.web = response.data.result;
        // eslint-disable-next-line no-console
        console.log(this.desserts, "are the events");
        this.loading = false
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