<template class="footer bg">
   <v-footer padless class="bg">
    <v-col
      class="text-center white--text"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>&#169;
 Initiative for Development, Education and Learning.</strong>
    </v-col>
  </v-footer>
</template>
<script>
import * as moment from "moment/moment";
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      " mdi-twitter",
      " mdi-google-plus",
      " mdi-linkedin",
    ],

    today: moment().format("YYYY"),
  }),
};
</script>
<style lang="css" scoped>
.bg {
  padding: 0px;
  background-image: url("../assets/footerbackground.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  /* background-size: cover; */
  height: 70px;
  position: cover;
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.navbar .dropdown-toggle:not(.nav-link)::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.5em;
  vertical-align: 0;
  border-bottom: 0.3em solid transparent;
  border-top: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.nava {
  margin-left: 80%;
}
.navas {
  width: 150%;
}
.footer {
   position:absolute;
   -top: 300px;
}
</style>