<template>
  <div style="background-color: ">
    <nava />
    <div style="background-color: " class="cont">
      <div class="card-size div1">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.9)">
          <div
            class="car font-weight-regular"
            style="margin-left: 40px; margin-right: 40px"
          >
            <div class="car-head">
              <span class="white--text" style>TOEFL</span>
              <hr
                style="
                  color: orange;
                  width: 150px;
                  margin-left: auto;
                  margin-right: auto;
                  border: 2px solid orange;
                "
              />
              <router-link
                to="cont"
                class="success--text"
                style="text-decoration: none"
              >
                <v-btn class="ma-2" outlined color="success">Contact Us</v-btn>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body" style>
      <!-- card -->
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <div
            class
            style="
              font-family: SF UI Display;
              color: #1b6761;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 29px;
              text-align: justify;
              letter-spacing: 0.02em;
            "
          >
            <div class style>
              <p class>
                The
                <strong>Test of English as a Foreign Language® TOEFL </strong>is
                a standardized test that measures the ability of non- native
                speakers to use and understand English at the university level,
                evaluating how well they combine reading, listening, speaking
                and writing skills to perform academic tasks.
                <br />
                <br />As an <strong>Authorized TOEFL iBT® Test center</strong>,
                we administer the test all year round, particularly on weekends.
                Due to the high demand for the test, seats fill up quickly, so
                students are encouraged to register ahead of time in order to
                get their preferred test dates. <a href="http://ets.org/toefl">See available dates here</a>
                <br />
                <br />
                <strong v-subheader style=" ;">Why Take the TOEFL Test?</strong>
                <br />
              </p>
              <ul>
                <li v-for="(items, i) in items" :key="i">{{ items.text }}</li>
              </ul>
            </div>
            <div
              style="
                font-family: SF UI Display;
                color: #1b6761;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 29px;
                text-align: justify;
                letter-spacing: 0.02em;
              "
            >
              <div>
                <p>
                  <strong style>Who Takes the TOEFL Test?</strong>

                  <br />More than 35 million people from all over the world have
                  taken the TOEFL test to demonstrate their English-language
                  proficiency.
                  <br />
                  <br />
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
                <ul>
                  <li v-for="(item2, i) in items2" :key="i">
                    {{ item2.text }}
                  </li>
                </ul>

                <div
                  class
                  style="
                    font-family: SF UI Display;
                    color: #1b6761;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 29px;
                    text-align: justify;
                    letter-spacing: 0.02em;
                  "
                >
                  IMPORTANT UPDATE: Every test taker is expected to present a
                  <strong>valid international passport </strong>
                to be allowed to take the TOEFL
                  iBT® test.
                  <router-link to="cont">Contact us </router-link>for more
                  information
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-sm col-md-4"
          style="
            margin-top: 0px;
            padding: 20px;
            background-color: rgb(240, 245, 245);
          "
        >
          <div
            style="
              text-align: center;
              font-family: SF UI Display;
              color: #092e2b;
              font-style: normal;
              font-weight: bold;
              font-size: 30px;
              line-height: 108.34%;
              padding: 20px;
            "
          >
            Register for this exam.
          </div>
          <div class="col">
            <input
              type="text"
              v-model="toefl.sname"
              class="form-control"
              placeholder="Surname name *"
            />
          </div>
          <div class="col-sm-12">
            <input
              type="text"
              v-model="toefl.fname"
              class="form-control"
              placeholder="First name *"
            />
          </div>
          <div class="col-sm-12">
            <input
              type="text"
              v-model="toefl.mname"
              class="form-control"
              placeholder="Middle name"
            />
          </div>
          <!-- <div class="col">
            <input type="text" v-model="toefl.date" class="form-control" placeholder="Date" />
          </div>-->
          <div class="col-sm-12">
            <input
              type="text"
              v-model="toefl.email"
              class="form-control"
              placeholder="Email Address *"
            />
          </div>
           <div class="col-sm-12">
            <input
              type="text"
              v-model="toefl.phone"
              class="form-control"
              placeholder="Phone Number*"
            />
          </div>
          <div class="col-sm-12">
            <input
              type="text"
              v-model="toefl.contAdress"
              class="form-control"
              placeholder="Contact Address *"
            />
          </div>
          <div class="col-sm-12">
            <input
              type="text"
              v-model="toefl.country"
              class="form-control"
              placeholder="Country Of Birth/Citizenship *"
            />
          </div>
          <div class="col-sm-12">
            <input
              type="text"
              v-model="toefl.examCenter"
              class="form-control"
              placeholder=" Exam Center *"
            />
          </div>
          <div class="col-sm-12">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="toefl.examDate"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="toefl.examDate"
                  label="Examination Date *"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
            <!-- <input
              type="text"
              v-model="toefl.examDate"
              class="form-control"
              placeholder="Exam Date"
            />-->
          </div>
          <div class="col upload-btn-wrapper">
            <button class="btnn">
              Upload international Passport (Data) {{ toefl.image.name }}
            </button>
            <br />
            <div v-if="saving" style="text-align: center">saving...</div>
            <span v-if="!imageUploaded" style="text-align: center; color: red"
              >no image selected</span
            >
            <span v-if="imageUploaded" style="text-align: center; color: green">
              {{ toefl.image.name }} selected
            </span>
            <input
              type="file"
              name="myfile"
              class="custom-file-input"
              @change="onFileChanged"
            />
          </div>
          <div>
            <button
              type="button"
              @click="save"
              class="btn btn btn-primary btn-lg btn-block"
            >
              {{ this.processing ? "Register" : "Registered" }}
            </button>
          </div>
        </div>
      </div>
      <div class style="margin-top: 50px">
        <!-- card -->
        <div class="row">
          <!-- <div class="col-sm col-md-2" style="margin-top:50px" v-if="image==true">
            <v-img src="../assets/toefl.png" style=" width:300px"></v-img>
          </div>-->
          <div class="col-sm-12 col-md-10"></div>
        </div>
      </div>
    </div>

    <div style="margin: auto">
      <cards />
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
    cards,
  },
  data: () => ({
    imageUploaded: false,
    menu: false,
    modal: false,
    date: new Date().toISOString().substr(0, 10),
    processing: true,
    saving: false,
    item: 1,
    image: true,
    item2: 1,
    items: [
      { text: "More Popular with students", icon: "mdi-numeric-1" },
      { text: "More Prefered by Universities", icon: "mdi-numeric-2" },
      { text: "Makes Dreams come True", icon: "mdi-numeric-3" },
      { text: "Better for Success in The Classroom", icon: "mdi-numeric-4" },
      { text: "100% Fair and Unbiased Scoring", icon: "mdi-numeric-5" },
    ],
    items2: [
      {
        text: "Students planning to study at a higher education institution",
        icon: "mdi-circle-medium",
      },
      {
        text: "English-language learning program admissions and exit",
        icon: "mdi-circle-medium",
      },
      {
        text: "Scholarship and certification candidates",
        icon: "mdi-circle-medium",
      },
      {
        text: "English-language learners who want to track their progress",
        icon: "mdi-circle-medium",
      },
      {
        text: "Students and workers applying for visas",
        icon: "mdi-circle-medium",
      },
    ],
    toefl: {
      sname: "",
      fname: "",
      mname: "",
      phone: "",
      email: "",
      date: "",
      contAdress: "",
      country: "",
      examDate: "",
      examCenter: "",
      image: "",
    },
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
      this.toefl.image = event.target.files[0];
      this.imageUploaded = true;
    },

    save() {
      // this.alerts = true;
    
      this.toefl.date = new Date();
      const formData = new FormData();
      formData.append("image", this.toefl.image);
      formData.append("sname", this.toefl.sname);
      formData.append("fname", this.toefl.fname);
      formData.append("phone", this.toefl.phone);
      formData.append("mname", this.toefl.mname);
      formData.append("email", this.toefl.email);
      formData.append("date", this.toefl.date);
      formData.append("contAdress", this.toefl.contAdress);
      formData.append("country", this.toefl.country);
      formData.append("examDate", this.toefl.examDate);
      formData.append("examCenter", this.toefl.examCenter);

      // eslint-disable-next-line no-console
      console.log(this.toefl);
      if (
        !this.toefl.sname ||
        !this.toefl.fname ||
        !this.toefl.email ||
        !this.toefl.date ||
          !this.toefl.phone ||
        !this.toefl.contAdress ||
        !this.toefl.country ||
        !this.toefl.examDate ||
          !this.toefl.image ||
        !this.toefl.examCenter
      ) {
        this.$alertify.error("please fill out required data");
      } else {
          this.saving = true;
        serv.postRequest("toefl/newToefl", formData).then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.processing = false;
          this.saving = false;
        });
      }
    },
  },
};
</script>

<style scoped lang="css">
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
template {
  margin-left: 40px;
  margin-right: 40px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.div1 {
  background-image: url("../assets/toeflb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center;
}
@media only screen and (max-width: 400px) {
  .car {
    font-size: 2px;
    margin: 0px;
  }
  .car-head {
    font-size: 10px;
    padding-top: 10px;
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
  }
  .sub-body {
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