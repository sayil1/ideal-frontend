<template>
  <div style="background-color:">
    <nava />

    <div class="cont">
      <!-- card -->
      <div style class="div1">
        <div class="card-size">
          <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
            <div style="margin-top:px ; ">
              <div class="car" style="margin-left:40px; margin-right:40px">
                <div class="car-head">
                  <span class="white--text">CAPACITY DEVELOPMENT</span>
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
          Capacity development focuses on increasing an organization's strength to measure internal successes and external impact, build and maintain strong foundations for projects, as well as promote strategic relationships.
          <br />As a development NGO in education, Initiative for Development, Education and Learning (IDEaL) puts effort into capacity development techniques that enable individuals and establishments acquire, develop capacities, and retain the abilities, knowledge, tools, and other resources needed to carry out their jobs competently.
          <br />Our methodology focuses on effectively blending best practices with tailor-made strategies suited to our client’s readiness for, and commitment to achieving sustainable, long-term relationships with its community of supporters and stakeholders.
          <br />
          <br />
        </div>

        <div class="row" style="background-color:rgb(255, 255, 255)">
          <div class="col-sm-12 col-md-8" style>
            <div class="first car-text">
              <div class style>
                <p class="card-text --text font-weight-regular" style="margin-top:-40px">
                  <strong>Needs Assessments</strong> in the areas of knowledge, attitudes, and practices related to area of focus at community levels and among various stakeholders; recording of obtainable responses, skills, procedures and infrastructure related to crucial sectors and specific areas of capability needed for an appropriate response; data available on the subject, as well as monitoring and reporting systems; and other inputs necessary to effectively implement strategies to determine existing strengths and identify gaps.
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
            <strong>Staff capacity.</strong> This includes education and professional development of staff who play a key role in an organization's success. Sustaining a dutiful and well-qualified workforce is a crucial function of management and Initiative for Development, Education and Learning - IDEaL can assist managers to achieve this for their employees through a variety of activities:
            <span
              class="lists"
            >
              <ul>
                <li>- Exploring challenges inhibiting employees work performance and team dynamics.</li>
                <li>- Evaluating the specific and collective strengths and capabilities of members of staff.</li>
                <li>- Discussions to boost management’s capacity in recognizing and dealing with challenges faced by the workforce;
                  .
                </li>
                <li>- Improvement and application of intervention schemes that will advance staff performance.</li>
              </ul>
            </span>

            Our experts are savvy in organizational growth, training and team dynamics and participants have gotten value from our ability to ascertain short- and long-term performance interventions that are concrete and applicable to any work environment.
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
    font-size: 20px;
    color: black;
    text-align: center;
  }
  .car-text {
    font-size: 14px;
    text-align: left;
    /* background-color: rgba(21, 22, 21, 0.4); */
  }
  .cont{
    padding-top:200px
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
    margin-left: 60px;
    margin-right: 60px;
    margin-top:60px
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
   font-size: 34px;
    text-align: center;
    font-family: "Lora";
  }
  .car-text {
    font-size: 21px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    font-family: "Alegreya";
    text-align: left;
  }
  .cont{
    padding-top:100px
  }
}
</style>