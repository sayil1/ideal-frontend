<template>
  <v-footer dark padless style="width:100%">
    <v-card flat tile class="blue lighten-1 white--text">
      <v-card-text class="text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <div
          class="text-center"
        >We find the solution together for your career path! In our one stop center and professional hub answers are found...</div>
      </v-card-text>

      <v-divider></v-divider>
      <div class="row" style="padding:20px">
        <div class="col-md-3">
          <div style=" font-size:20px">ABOUT OUR COMPANY</div>

          <br />We find the solution together for your career path! In our one stop center and professional hub answers are found...
          <br />
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </div>
        <div class="col-md-3">
          <div>
            <div>QUICK LINKS</div>

           
            <br />
            <ul>
              <li>
                <a style="color:white" href="#">Oversees Admission Consulting</a>
              </li>
              <li>
                <a style="color:white" href="#">Professional Education</a>
              </li>
              <li>
                <a style="color:white" href="#">Trainer's Workshop</a>
              </li>
              <li>
                <a style="color:white" href="#">ICM UK Qualification</a>
              </li>
              <li>
                <a style="color:white" href="#">TOEFL</a>
              </li>
              <li>
                <a style="color:white" href="#">TOEFL</a>
              </li>
              <li>
                <a style="color:white" href="#">Career Development Hub</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div>OUR EVENTS</div>

       
          <br />@Admin: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          <br />
          <br />@Admin: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </div>
        <div class="col-md-3">
          <div>CONTACT US</div>

         
          <br />Have questions, comments or just want to say hello:
          <br />
          <br />
          <v-icon ml-3 color="white darken-2">mdi-email</v-icon>info@ideal-nig.org
          <br />
          <br />
          <v-icon color="white darken-2">mdi-phone</v-icon>+2348030493091
          <br />
          <br />
          <v-icon color="white darken-2">mdi-map-marker</v-icon>37, Jesus Saves Road, Asaba, Delta State.
        </div>
      </div>
    <v-divider></v-divider>
      <v-card-text class="white--text" style="text-align:center">
        {{ new Date().getFullYear() }} —
        <strong>IDEal IT</strong>
      </v-card-text>r
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", " mdi-twitter", " mdi-google-plus", " mdi-linkedin"]
  })
};
</script>
<style lang="css" scoped>
ul li {
  color: white;
  list-style-type: disc;
}
a {
  all: unset;
  color: white;
  cursor: pointer;
}
</style>