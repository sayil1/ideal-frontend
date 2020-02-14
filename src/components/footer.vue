<template>
     <v-footer
    dark
    padless
     width="100%"
  >
    <v-card
      flat
      tile
      class="green lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <div class="display-1">
We find the solution together for your career path! In our one stop center and professional hub answers are found...
        </div>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>IDEal IT</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
      icons: [
        'mdi-facebook',
        ' mdi-twitter',
        ' mdi-google-plus',
        ' mdi-linkedin',
        ' mdi-instagram',
      ],
    }),
    
}
</script>