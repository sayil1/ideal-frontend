<template>
  <div style="background-color:">
    <nava />

    <div class>
      <!-- card -->
      <div style class="div1">
        <div class="card-size">
          <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
            <div style="margin-top:px ; ">
              <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
                <div class="car-head">
                  <span class=" white--text">CAPACITY BUILDING</span>
                  <hr
                    style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile">
        <div class="first car-text">
          As a development NGO in education, we focus on capacity development techniques that enable individuals and establishments acquire, develop capacities, and retain the abilities, knowledge, tools, and other resources needed to carry out their jobs competently.
          In the corporate world, refining management practices is a well-accepted principle for success. Hence, our capacity building programs aims at the following key elements
          <br />
          <br />
        </div>

        <div class="row" style="background-color:rgb(255, 255, 255)">
          <div class="col-sm-12 col-md-8" style>
            <div class="first car-text">
              <div class style>
                <p class="card-text --text font-weight-regular" style="margin-top:-40px">
                  <strong>Needs Assessments</strong> in the areas of knowledge, attitudes, and practices related to area of focus at community levels and among various stakeholders; recording of obtainable responses, skills, procedures and infrastructure related to crucial sectors and specific areas of capability needed for an appropriate response; data available on the subject, as well as monitoring and reporting systems; and other inputs necessary to effectively implement strategies to determine existing strengths and identify gaps
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm col-md-4" style="margin-top:-40px" v-if="image==true">
            <v-img src="../assets/app.svg" style=" width:300px"></v-img>
          </div>
        </div>
        <div class style="margin-top:-35px; ">
          <!-- card -->
          <div class="row">
            <div class="col-sm col-md-3" v-if="image==true">
              <v-img src="../assets/bus.svg" style=" width:300px"></v-img>
            </div>
            <div class="col-sm-12 col-md-9">
              <div class style=" margin-left:20px; margin-right:20px;">
                <div class="card-body car-text" style>
                  <p class="card-text --text font-weight-regular">
                    <strong>Governance and leadership:</strong> The idea of
                    <strong>Governance and leadership</strong> are intertwined. Good
                    <strong>governance and leadership</strong> is critical for the attainment of results. On completion of courses in this category, participants should be able to:
                    <span
                      class="lists"
                    >
                      <ul>
                        <li>- comprehend and analyze the emerging patterns of leadership and practice</li>
                        <li>- discuss the role that key external forces, sectors and institutions play in shaping the development of leaders and leadership in the twenty-first century</li>
                        <li>- study how leadership influences and informs relationships, communications, and interactions.</li>
                      </ul>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="first car-text" style="margin-top:-35px; margin-bottom:50px">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <strong>Resource Development:</strong> We believe that the strength of relationships between those who are effectively engaged with an organization’s mission and its leaders ultimately determine the organization’s long-term success.
            IDEaL has been aiding organizations build capacity and developing resource development plans essential for them to fulfill their missions. Our methodology focuses on effectively blending best practices with tailor-made strategies suited to our client’s readiness for, and commitment to achieving sustainable, long-term relationships with its community of supporters and stakeholders
          </div>
        </div>
      </div>
    </div>

    <foota />
  </div>
</template>


<script>
import nava from "../components/nav";
import foota from "../components/footer";
export default {
  components: {
    nava,
    foota
  },
  data: () => ({
    image: true,
    item: 1,
    item2: 1,

    items2: [
      { text: "System Administration", icon: "mdi-handshake", color: "yellow" },
      { text: "Project Management", icon: "mdi-wan", color: "green" },
      {
        text: "Customer Service Training",
        icon: "mdi-face-agent",
        color: "red"
      },
      {
        text: "Soft skills Training for Employees",
        icon: "mdi-laptop",
        color: "brown"
      }
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
    }
  }
};
</script>

<style scoped lang="css">
template {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
  .first {
    padding-left: 30px;
    padding-right: 30px;
  }
  .car {
    font-size: 2px;
    margin: 0px;
  }
  .car-head {
    font-size: 40px;
    color: black;
    text-align: center;
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
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
  .mobile {
    margin-left: 40px;
    margin-right: 40px;
  }

  body {
    background-color: #b2d6ff; /* Blue */
  }
  .first {
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .car {
    padding: 30px;
  }
  .car-head {
    font-family: "Lora";
    font-size: 34px;
    color: black;
    text-align: center;
    padding-top: 90px;
  }
  .car-text {
    font-size: 21px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    font-family: "Alegreya";
    text-align: left;
  }
}
</style>