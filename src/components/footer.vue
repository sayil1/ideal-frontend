<template>
    <div>
          <v-alert color="primary" dark dense prominent>
      <div>
        <p class="font-weight-black display-1" style="margin-top:50px">
          Need to get in touch with our counsellor's? We're all ears..
          <v-btn class="ma-2" outlined large color="white">
            <v-icon>mdi-phone</v-icon>Contact Us
          </v-btn>
        </p>
      </div>
      <v-divider></v-divider>
      <div
        class="headline"
        style="margin-bottom:50px"
      >Become a part of young professionals without borders, internationally certified and with various career option paths.</div>
    </v-alert>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-footer>
    </div>
</template>
<script>
export default {
    
}
</script>