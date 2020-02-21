<template>
  <v-footer dark padless style="width:100%; " class="bg">
    <v-card flat tile class=" lighten-1 white--text" style=" background: rgba(0, 0, 0, 0.7);">
      <div class="row" style="padding:20px; height:100%; ">
        <div class="col-md-4">
          <div style=" font-size:20px; text-align:center">ABOUT OUR COMPANY</div>
          <v-divider></v-divider>

          <br />We find the solution together for your career path! In our one stop center and professional hub answers are found...
          <br />
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon color="orange" size="24px">{{ icon }}</v-icon>
          </v-btn>
        </div>
        <div class="col-md-4">
          <div>
            <div style=" font-size:20px; text-align:center">QUICK LINKS</div>
            <v-divider></v-divider>

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
                <a style="color:white" href="#">PEARSON VUE</a>
              </li>
              <li>
                <a style="color:white" href="#">Career Development Hub</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-4">
          <div style=" font-size:20px ; text-align:center">CONTACT US</div>
          <v-divider></v-divider>

          <br />Have questions, comments or just want to say hello:
          <br />
          <br />
          <v-icon ml-3 color="orange darken-2">mdi-email</v-icon>
          <span>info@ideal-nig.org</span>

          <br />
          <br />
          <v-icon color="orange darken-2">mdi-phone</v-icon>
          <span>+2348030493091</span>
          <br />
          <br />
          <v-icon color="orange darken-2">mdi-map-marker</v-icon>
          <span>37, Jesus Saves Road, Asaba, Delta State.</span>
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
.bg {
  background-image: url("../assets/infob.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
}
</style>