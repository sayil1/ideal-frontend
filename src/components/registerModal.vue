<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px" style="z-index:20000">
      <template v-slot:activator="{ on }">
        <v-btn color="orange" dark v-on="on" style="margin-top:50px">Register</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Course Registration Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="First name*" required v-model="lname"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Last name*"  required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Phone*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Morning', 'Evening',]"
                  label="Select Prefered Session*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['TOEFL', 'Graphics', 'Java', 'Web Development', 'C#', 'Desktop Publishing', 'CCNA', 'Autcad']"
                  label="Select Prefered Course"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="reg()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data: () => ( {
          dialog: false,
          lname:""

    }),
    methods:{
        reg(){
          alert(this.lname)
        }
    }
};
</script>