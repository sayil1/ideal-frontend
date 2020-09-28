<template >
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      style="z-index: 50000"
    >
      <template v-slot:activator="{ on }">
        <v-btn color="" outlined dark v-on="on">Register</v-btn>
      </template>
      <v-card style="padding-top: 50px">
        <v-card-title>
          <span class="headline">Course Registration</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="First name*"
                  required
                  v-model="fname"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Last name*"
                  v-model="lname"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Phone*"
                  v-model="phone"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="session"
                  :items="['Morning', 'Evening']"
                  label="Select Prefered Session*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="course"
                  :items="[
                    'TOEFL',
                    'GRE',
                    'GMAT',
                    'SAT',
                    'ACT',
                    'PTE',
                    'Cambridge English',
                    'Graphics',
                    'Java',
                    'Web Development',
                    'C#',
                    'Desktop Publishing',
                    'CCNA',
                    'Autcard',
                  ]"
                  label="Select Prefered Course"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small> <br />
          <h4 v-if="saving" style="color:green">saving...</h4>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="reg()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Services } from "../service";
var serv = new Services();
export default {
  data: () => ({
    dialog: false,
    saving: false,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    session: "",
    course: "",
  }),
  methods: {
    reg() {
         this.alertify = true;
      this.saving = true;
      let data = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        phone: this.phone,
        course: this.course,
        session: this.session,
      };
      // eslint-disable-next-line no-console
      console.log(data);
      serv.postRequest("registerCourse/addcourse", data).then((response) => {
        this.$alertify.success(response.data);

        this.saving = false;
        // eslint-disable-next-line no-console
        console.log(response);
      });
    },
  },
};
</script>