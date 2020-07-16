<template>
  <div style="background-color:">
    <nava />
    <div style="background-color: " class="cont">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.9)">
          <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
            <div class="car-head">
              <span class="white--text" style>PEARSON VUE CENTER</span>
              <hr
                style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
              />
              <router-link to="cont" class="success--text" style="text-decoration:none;">
                <v-btn class="ma-2" outlined color="success">Contact Us</v-btn>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-alert style="margin:10px" type="success" border="right">
      <p class="car-text --text font-weight-regular">
        Kindly note that due to the high number of exams offered, we cannot provide details on individual exams via call or live chat.
        For information on a specific exam duration, fee, language, etc., please refer to the
        <strong>
          <a style="color:orange;" href="http://home.pearsonvue.com">website</a>
        </strong> of the particular provider.
        <!-- <br />Please note: You can register for exams directly with Pearson VUE at no added cost. Our test center is open on Tuesdays and Thursdays from 10:00 to 16:00.
        <br />-->
      </p>
      <p class="card-text font-weight-regular"></p>
    </v-alert>
    <div class="body" style>




<!-- div -->

  <!-- card -->
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <div
            class=""
            style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em; "
          >
            <div class style>
              <p class>
             
              <strong>PEARSON VUE CENTER</strong> Our Authorized Pearson VUE Test center runs IT certification examinations for leading vendors like Microsoft, Cisco, Nursing and Midwifery Council (NMC), PMI, Linux, Juniper, Oracle, CompTIA, CIW, HP, PeopleCert etc.
                <br />
                <br />
                <strong>IT CERTIFICATIONS</strong>  are recognized worldwide and serve as benchmarks to specific skills set based on standardized testing. They help demonstrate your dedication and technical knowledge on a specific platform.
                <br />Once earned, IT Certifications can you help achieve the following:

              </p>
              <ul>
                <li v-for="(items, i) in items" :key="i">{{items.text}}</li>
              </ul>
            </div>
              <div
              style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
            >
              <div>
                <p>
               
                  <!-- <strong>Social pressures</strong>
        <br />Societal, families and peers can deter individuals from actively participating in sports.
        <br />
        <br />• societal beliefs and traditions within a community
        <br />• the parental expectation of their children and also Little or no family support in sporting activities
        <br />• The conflicting interest in recreational activities.
        <br />• Few opportunities for females seeking opportunities to participate in sports
        <br />
                  <br />-->
                </p>
               

                <div
                  class
                  style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
                >
                 
                  <router-link to="cont">Contact us</router-link> for more information
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-sm col-md-4"
          style="margin-top:0px; padding:20px; background-color:rgb(240, 245, 245)"
          
        >
          <div
            style="text-align:center; font-family: SF UI Display;
       color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 108.34%;
padding:20px"
          >Register for this exam.</div>
          <div class="col">
            <input
              type="text"
              v-model="pearson.sname"
              class="form-control"
              placeholder="Sunamer name"
            />
          </div>
          <div class="col">
            <input type="text" v-model="pearson.fname" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" v-model="pearson.mname" class="form-control" placeholder="Middle name" />
          </div>
          <!-- <div class="col">
            <input type="text" v-model="pearson.date" class="form-control" placeholder="Date" />
          </div>-->
          <div class="col">
            <input
              type="text"
              v-model="pearson.email"
              class="form-control"
              placeholder="Email Address"
            />
          </div>
          <div class="col">
            <input
              type="text"
              v-model="pearson.contAdress"
              class="form-control"
              placeholder="Contact Address"
            />
          </div>
          <div class="col">
            <input
              type="text"
              v-model="pearson.country"
              class="form-control"
              placeholder="Country Of Birth/Citizenship"
            />
          </div>
          <div class="col">
            <input
              type="text"
              v-model="pearson.examCenter"
              class="form-control"
              placeholder=" Exam Center"
            />
          </div>
          <div class="col">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="pearson.examDate"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="pearson.examDate"
                  label="Examination Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <!-- <input
              type="text"
              v-model="pearson.examDate"
              class="form-control"
              placeholder="Exam Date"
            />-->
          </div>
          <div class="col upload-btn-wrapper">
            <button class="btnn">Upload international Passport (Data)</button>
            <input type="file" name="myfile" class="custom-file-input" @change="onFileChanged" />
          </div>
          <div>
            <button
              type="button"
              @click="save"
              class="btn btn btn-primary btn-lg btn-block"
            >{{this.processing ? "Register": "Registered"}}</button>
          </div>
        </div>
      </div>

    </div>
<div>
  <cards/>
</div>
    <foota />
  </div>
</template>


<script>
import nava from "../components/newNav";
import foota from "../components/footer";
import cards from "../components/cards";
import { Services } from "../service";
var serv = new Services();
export default {
  components: {
    nava,
    foota,
    cards
  },
  data: () => ({
    item: 1,
    image: true,
    item2: 1,
      menu: false,
    modal: false,
    date: new Date().toISOString().substr(0, 10),
    items: [
      { text: "Getting Hired", icon: "mdi-charity" },
      { text: "Job Retention", icon: "mdi-briefcase" },
      { text: "Promotion", icon: "mdi-arrow-up-bold" },
      { text: "Networking Opportunities", icon: "mdi-lan-connect" },
      { text: "Professional Credibility", icon: "mdi-briefcase-check" },
      { text: "New and Current Technologies", icon: "mdi-arrow-up-bold" },
      { text: "Personal Goal", icon: "mdi-check-decagram" },
      {
        text: "Professional or Corporate Requirement",
        icon: "mdi-bullseye-arrow"
      }
    ],
     pearson: {
      sname: "",
      fname: "",
      mname: "",
      email: "",
      date: "",
      contAdress: "",
      country: "",
      examDate: "",
      examCenter: "",
      image: ""
    },
    items2: [
      {
        text: "Students planning to study at a higher education institution",
        icon: "mdi-school"
      },
      {
        text: "English-language learning program admissions and exit",
        icon: "mdi-school-outline"
      },
      {
        text: "Scholarship and certification candidates",
        icon: "mdi-page-next"
      },
      {
        text: "English-language learners who want to track their progress",
        icon: "mdi-radar"
      },
      { text: "Students and workers applying for visas", icon: "mdi-passport" }
    ]
  }),
  created() {
    this.isMobile();
  },
  methods: {
    isMobile() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // var element = document.getElementById("text");
      if (isMobile) {
        // alert(this.image);
        this.image = false;
      } else {
        // alert(this.image);
        this.image = true;
      }
    },
     onFileChanged(event) {
      this.pearson.image = event.target.files[0];
    },

    save() {
      // this.alerts = true;

      this.pearson.date = new Date();
      const formData = new FormData();
      formData.append("image", this.pearson.image);
      formData.append("sname", this.pearson.sname);
      formData.append("fname", this.pearson.fname);
      formData.append("mname", this.pearson.mname);
      formData.append("email", this.pearson.email);
      formData.append("date", this.pearson.date);
      formData.append("contAdress", this.pearson.contAdress);
      formData.append("country", this.pearson.country);
      formData.append("examDate", this.pearson.examDate);
      formData.append("examCenter", this.pearson.examCenter);

      // eslint-disable-next-line no-console
      console.log(this.pearson);
      serv.postRequest("pearson/newpearson", formData).then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
        this.processing = false;
      });
    }
  }
};
</script>

<style lang="css">
.div1 {
  background-image: url("../assets/infob.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btnn {
  border: 2px solid rgb(35, 194, 189);
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bold;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
@media only screen and (max-width: 400px) {
  .body {
    margin-top: 30px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 20px;
    color: black;
    font-size: 15px;
  }
  .car {
    font-size: 2px;

    margin: 0px;
  }
  .car-head {
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 50px;
    font-family: "lora";
    text-align: center;
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 10px;
    text-align: left;
  }
  .cont {
    padding-top: 80px;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  body {
    background-color: #f5cf8e; /* Yellow */
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  body {
    background-color: #b2d6ff; /* Blue */
  }
  .body {
    margin-top: 40px;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 20px;
    color: black;
    font-size: 15px;
  }
  .car {
    padding: 30px;
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
    text-align: left;
    border-radius: 45px;
    font-family: "Alegreya";
  }
  .cont {
    padding-top: 60px;
  }
}
</style>