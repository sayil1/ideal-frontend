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
        <div class="first car-text" style="text-indent:px">
         We focus on increasing organizations' strength by measuring internal successes, constraints and external impacts. We help teams to build and maintain strong foundations for projects, as well as promote strategic relationships.
          <br />We put effort into capacity development techniques that enable individuals and establishments to acquire, develop capacities, and retain their abilitiesKnowledgege, tools, and other resources needed to carry out their jobs competently.
          <br />Our methodology focuses on expertly blending best training practices with tailor-made strategies suited for clients' readiness and commitment to achieving sustainability and long-term success.
          <br />
          <br /> <br>

        </div>

        <div class="row" style="background-color:rgb(255, 255, 255)">
          <div class="col-sm-12 col-md-8" style>
            <div class="first car-text">
              <div class style>
                <p class="card-text --text font-weight-regular" style="margin-top:-40px">
                  <strong>Needs Assessments</strong>  <br> <br>  We help corporate bodies, government parastatals and communities effectively implement strategies to identify existing strengths and determine the gaps. We are skilled in carrying out researches, data collection services, executing programmes, monitoring, evaluation and reporting services that assist in building capacities. 

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
                    <strong>Good governance and leadership training :</strong> <br> <br>
                On completion of courses in this category, participants should be able to:


                    <span
                      class="lists"
                    >
                      <ul>
                        <li> Analyze and learn how to use new tools for best practices</li>
                        <li> Understand emerging trends and practices.</li>
                        <li> Share, simulate  and learn with experts  viewpoint about the challenges</li>
                        <li> Become an agent of change </li>
                      </ul>
                    </span> <br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="first car-text" style="margin-top:-35px; margin-bottom:50px">
          <div class="card-size" style=" margin-left:20px; margin-right:20px;">
            <strong>Staff capacity building. </strong> <br> <br> Our educational and professional development programmes for all staff play a crucial role in an organization's success. Sustaining a dutiful and well-qualified workforce is an essential function of management. We can assist organizations’  in achieving this for their employees through a variety of activities: <br> <br>
            <span
              class="lists"
            >
              <ul>
                <li>Implement bespoke training by exploring challenges inhibiting employees' work performance and team dynamics.</li>
                <li>We evaluate the specific and or collective strengths and capabilities of members of staff.</li>
                <li>
                 We create platforms that  to boost management's capacity in recognizing and dealing with challenges faced  their workforce
                  .
                </li>
                <li>We develop applications  and programmes for welfare schemes that will advance staff performance</li>
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
  .cont {
    padding-top: 200px;
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
    margin-top: 60px;
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
  .cont {
    padding-top: 100px;
  }
}
</style>