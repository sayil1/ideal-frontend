<template>
  <div>
    <nava />
    <div
      class="jumbotron jumbotron-fluid"
      style="background-color:rgb(35, 159, 216); margin-bottom:0px"
    >
      <div class="container" style="margin-top:50px">
        <h1 class="display-2">
          <span class="Regular">
            Dont be a stanger
            <br />just say HELLO
          </span>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm col-md-6">
        <v-card flat>
          <v-card-title>
            <span class="headline"></span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="first name*" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="last name*" persistent-hint required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Phone*" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12" sm="6">
                  <v-textarea filled name="input-7-4" label="Filled textarea" value></v-textarea>
                </v-col>
                <v-btn class="ma-2" tile outlined color="primary">
                  <v-icon left>mdi-phone</v-icon>send
                </v-btn>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div class="col-sm col-md-6">
        <div style="margin-top:10px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4394419995165!2d6.7004649499047595!3d6.2056203284776705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f27cca6a19e7%3A0x50e01baa08a964cd!2sInitiative%20for%20Development%20Education%20and%20Learning%20(IDEaL)!5e0!3m2!1sen!2sng!4v1579513725132!5m2!1sen!2sng"
            width="100%"
            height="480"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="col-sm" style="background-color:rgb(224, 224, 209)">
        <div class="container" >
          <h1 class>
            <span class="thin m-3">
             We're here to help answer any question you might have. We look forward to hearing from you.
            </span>
            <div class>
              <div class="row title" style="text-align:center; margin-top:50px">
                <div class="col-sm">
                  <v-icon large color="red darken-2 center">mdi-map-marker</v-icon>
                  <br />37, Jesus Saves Road (after Presidential Lodge) off Summit road.
                  Asaba, Delta State Nigeria.
                </div>
                <div class="col-sm">
                  <v-icon large color="green darken-2 center">mdi-phone</v-icon>
                  <br />+2348030493091
                </div>
                <div class="col-sm">
                  <v-icon large color="yellow darken-2 center">mdi-email</v-icon>
                  <br />info@ideal-nig.org
                </div>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>

    <foota />
  </div>
</template>


<script>
import nava from "../components/testnav";
import foota from "../components/footer";

export default {
  components: {
    nava,
    foota
  }
};
</script>


<style scoped>
</style>