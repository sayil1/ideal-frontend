<template>
  <div style="background-color: ">
    <nava />

    <div class="cont">
      <!-- card -->
      <div style class="div1">
        <div class="card-size">
          <div
            class="card-body"
            style="background-color: rgba(21, 22, 21, 0.6)"
          >
            <div style="margin-top: px">
              <div class="car" style="margin-left: 40px; margin-right: 40px">
                <div class="car-head">
                  <span class="white--text">IT CERTIFICATIONS</span>
                  <hr
                    style="
                      color: orange;
                      width: 150px;
                      margin-left: auto;
                      margin-right: auto;
                      border: 2px solid orange;
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="background-color: rgb">
        <div
          class="col-sm-12 col-md-12"
          style="margin-left: 30px; margin-right: 30px; margin-top: 20px"
        >
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
                The need for the teaming population of young people to access
                information, training and support coupled with the glaring fact
                that most of them cannot afford the training or equipment needed
                to participate in the rewards of the information revolution
                necessitated the IDEaL IT Center Project.
                <br />
                <br />IDEaL IT Center addresses this disparity by serving as a
                one-stop hub for Information Technology education programs while
                offering methods of improving efficiency and services needed to
                achieve greater productivity among partakers of the ICT sector.
                <br />
                <br />Our wide range of programs are quality-assured and
                adequately tailored to enable participants acquire modern skills
                and qualifications, upgrade existing ones, adapt to new
                technologies and improve sector performances to explore new
                frontiers.
                <br />
                <br />The first IDEaL IT Center project is located in Asaba, the
                Delta State capital of Nigeria and it is intended that this
                project will be replicated in various locations across the
                country.
                <br />
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm col-md-3" style="margin-top:100px">
            <v-img src="../assets/info11.svg" style=" width:300px"></v-img>
        </div>-->
      </div>
      <strong>
        <div
          style="
            margin-top: 40px;
            text-align: center;
            color: #092e2b;
            font-family: SF UI Display;
            font-style: normal;
            font-weight: 500;
            font-size: 34px;
          "
        >
          <strong>PROFESSIONAL IT COURSES</strong>
          <hr
            style="
              color: orange;
              width: 150px;
              margin-left: auto;
              margin-right: auto;
              border: 2px solid orange;
            "
          />
        </div>
      </strong>
      <div
        class="row car-text"
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
        <div
          style="margin-left: 30px; margin-right: 30px; margin-top: 20px"
          class="col-md-8"
        >
          <p class="card-text --text">
            Our training solutions offer job and career relevant courses for
            individuals, teams and organizations
            <strong
              >across the Information and Communication Technology (ICT) and
              Business Development spectrum.</strong
            >

            <br />In partnership with reputable service providers across the
            globe, these programs are tailored to equip learners with the
            technical and practical skills for a rewarding long-term career.
            <br />
            <br />
            <strong>Information and Communication Technology (ICT)</strong>
            <br />The ICT industry is a stirring innovator that helps solve
            problems in the environment, business, defense, research, health,
            and education sectors. Trainings in this area cover the entirety of
            these:
          </p>
          <p class="card-text --text">
            <strong>Business Development</strong>
            <br />Setting your business onto the path of success through
            constant business training can lead to exciting business
            opportunities and personal development. Our quality programs are
            your best starting point.
          </p>
        </div>
        <div
          class="col-sm col-md-3"
          style="margin-top: 60px; margin-bottom: 60px"
          v-if="image == true"
        >
          <v-img src="../assets/profIT.jpg" style="width: 700px"></v-img>
        </div>
      </div>
    </div>

    <div class style="margin-top: -35px; margin-bottom: 50px">
      <div class="body">
        <div class style>
          <!-- card -->
          <div class="row" style="background-color: rgb">
            <div class="col-sm-12 col-md-12" style="margin-bottom: 10px">
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
                    The need for the teaming population of young people to
                    access information, training and support coupled with the
                    glaring fact that most of them cannot afford the training or
                    equipment needed to participate in the rewards of the
                    information revolution necessitated the IDEaL IT Center
                    Project.
                    <br />
                    <br />IDEaL IT Center addresses this disparity by serving as
                    a one-stop hub for Information Technology education programs
                    while offering methods of improving efficiency and services
                    needed to achieve greater productivity among partakers of
                    the ICT sector.
                    <br />
                    <br />Our wide range of programs are quality-assured and
                    adequately tailored to enable participants acquire modern
                    skills and qualifications, upgrade existing ones, adapt to
                    new technologies and improve sector performances to explore
                    new frontiers.
                    <br />
                    <br />The first IDEaL IT Center project is located in Asaba,
                    the Delta State capital of Nigeria and it is intended that
                    this project will be replicated in various locations across
                    the country.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="col-sm col-md-3" style="margin-top:100px">
            <v-img src="../assets/info11.svg" style=" width:300px"></v-img>
            </div>-->
          </div>
        </div>
        <!-- testing new cards -->
        <div class="row">
          <v-card
            style="margin: 5px"
            class="mx-auto"
            color="#1B6761"
            dark
            max-width="300"
          >
            <v-card-title>
              <v-icon large left>mdi-palette</v-icon>
              <span class="title font-weight-bold">creative design</span>
            </v-card-title>

            <v-card-text class>
              Web Design, Graphics Design, AutoCad Architecture, Animation and
              Modeling, Video Editing,
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <reg />
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <v-card
            style="margin: 5px"
            class="mx-auto"
            color="#1B6761"
            dark
            max-width="300"
          >
            <v-card-title>
              <v-icon large left>mdi-desktop-classic</v-icon>
              <span class="title font-weight-bold">Computer Technology</span>
            </v-card-title>

            <v-card-text class>
              Cloud computing, Networking, Database Management,
              Software/Application development, Systems Administration, It
              Security, Data Science,
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <reg />
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <v-card
            style="margin: 5px"
            class="mx-auto"
            color="#1B6761"
            dark
            max-width="300"
          >
            <v-card-title>
              <v-icon large left>mdi-cash-multiple</v-icon>
              <span class="title font-weight-bold">E-Business</span>
            </v-card-title>

            <v-card-text class>
              compTIA Project, Digital Marketing, Customer Relationship
              Management (CRM), Project Management Professional (PMP)
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <reg />
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </div>
        <div class="text-center">
          <div class="container">
            <div class="row pt-0">
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <div class="card-header">
                    <h3
                      style="
                        margin-top: 0px;
                        text-align: center;
                        color: #092e2b;
                        font-family: SF UI Display;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 25px;
                      "
                    >
                      Training Delivery Styles
                    </h3>
                  </div>
                  <div>
                    <!-- <h1><b>$29 </b><small class="text-muted">/ mo</small></h1> -->
                    <ul
                      style="
                        padding-left: 0px;
                        padding-top: 10px;
                        color: #1b6761;
                      "
                      class="list-unstyled"
                    >
                      <li>Lectures (face-to-face or Online)</li>
                      <li>Demonstrations</li>
                      <li>Problem solving</li>
                      <li>Audio visual aids</li>
                      <li>Hands-on practical</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <!-- <reg /> -->
                </div>
              </div>

              <div class="col-md-8">
                <div class="card mb-4 box-shadow">
                  <div class="card-header">
                    <h3
                      style="
                        margin-top: 0px;
                        text-align: center;
                        color: #092e2b;
                        font-family: SF UI Display;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 25px;
                      "
                    >
                      Hands-on practical:
                    </h3>
                  </div>
                  <div
                    class="p-3"
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
                    <!-- <h1><b>$29 </b><small class="text-muted">/ mo</small></h1> -->
                    At the end of each training program, participants are issued
                    certificates after they must have passed a series of exams
                    that tests their proficiency.
                  </div>
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
import nava from "../components/newNav";
import foota from "../components/footer";
import reg from "../components/registerModal";
export default {
  components: {
    nava,
    foota,
    reg,
  },
  data: () => ({
    image: true,
    item: 1,
    item2: 1,
    dialog: false,
    items: [
      {
        text: "System Administration",
        icon: "mdi-account-settings",
        color: "red",
      },
      { text: "IT Security", icon: "mdi-security", color: "purple" },
      { text: "Database Security", icon: "mdi-database-lock", color: "green" },
      {
        text: "Application Development",
        icon: "mdi-application",
        color: "orange",
      },
    ],
    items2: [
      { text: "System Administration", icon: "mdi-handshake", color: "yellow" },
      { text: "Project Management", icon: "mdi-wan", color: "green" },
      {
        text: "Customer Service Training",
        icon: "mdi-face-agent",
        color: "red",
      },
      {
        text: "Soft skills Training for Employees",
        icon: "mdi-laptop",
        color: "brown",
      },
    ],
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
  },
};
</script>

<style scoped lang="css">
template {
  margin-left: 10px;
  margin-right: 10px;
}
.div1 {
  background-image: url("../assets/profb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
}
.darken-pseudo:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 400px) {
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
    margin-bottom: -20px;
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 10px;
    text-align: left;
  }
  .cont {
    padding-top: 70px;
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