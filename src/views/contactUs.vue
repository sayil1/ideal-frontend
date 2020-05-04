<template>
  <div>
    <nava />
    <div>
      <div style class="div1 cont">
        <div class="card-size">
          <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
            <div style="margin-top:px ; ">
              <div class="car" style="margin-left:40px; margin-right:40px">
                <div class="car-head">
                  <span class="white--text">Contact Us</span>
                  <hr
                    style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                  />
                </div>
              </div>
            </div>
          </div>
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
                    <v-text-field v-model="contact.fname" label="first name*" required></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="contact.lname"
                      label="last name*"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="contact.email" label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="contact.phone" label="Phone*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="6">
                    <v-textarea
                      v-model="contact.message"
                      filled
                      name="input-7-4"
                      label="Filled textarea"
                      value
                    ></v-textarea>
                  </v-col>
                  <v-btn class="ma-2" v-on:click="submit" tile outlined color="primary">
                    <v-icon left>mdi-phone</v-icon>send
                  </v-btn>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </div>
        <v-dialog v-model="contact.alert" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              saving.. please wait
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
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

        <div class="text-center">
          <v-snackbar v-model="contact.snackbar">
            {{ contact.text }}
            <v-btn color="red" text @click="snackbar = false">Close</v-btn>
          </v-snackbar>
        </div>

        <div class="col-sm">
          <div class="container">
            <span
              class="thin m-3"
            >We're here to help answer any question you might have. We look forward to hearing from you.</span>
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
          </div>
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

export default {
  components: {
    nava,
    foota
  },
  data: () => ({
    contact: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
      
    }
  }),
  methods: {
    submit() {
      let newData = {
        fname: this.contact.fname,
        lname: this.contact.lname,
        email: this.contact.email,
        phone: this.contact.phone,
        message: this.contact.message
      };
      // alert(newData);
      this.alert = true;
      serv.postRequest("cont/newCont", newData).then(response => {
        (this.contact.text = response.data), (this.contact.alerts = false);
        this.contact.snackbar = true;
      });
    }
  }
};
</script>


<style scoped >
.div1 {
  background-image: url("../assets/contb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
}
@media only screen and (min-width: 961px) {
  body {
    background-color: #b2d6ff; /* Blue */
  }
  .first {
    padding-left: 30px;
    padding-right: 30px;
  }
  .car {
    /* padding: 30px; */
  }
  .car-head {
    font-size: 34px;
    text-align: center;
    font-family: "Lora";
  }
  .car-text {
    font-size: 21px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
    text-align: left;
    font-family: "Alegreya";
  }
  .cont {
    padding-top: 100px;
    height: 300px;
  }
}
</style>