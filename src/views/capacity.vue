<template >
  <div style="color:  #1b6761;" class="first-tex">
    <nava />
    <div class="hold-header">
      <div class="conts">
        <div class="header">
          <span class="header-text" style=" ">
            Capacity
            <br />Development
          </span>
        </div>
      </div>
    </div>
    <div class="first first-text">
      <div class style>
        <p class style>
          We focus on increasing organizations' strength by measuring internal successes, constraints and external impacts. We help teams to build and maintain strong foundations for projects, as well as promote strategic relationships. We put effort into capacity development techniques that enable individuals and establishments to acquire, develop capacities, and retain their abilitiesKnowledgege, tools, and other resources needed to carry out their jobs competently.
          <br />Our methodology focuses on expertly blending best training practices with tailor-made strategies suited for clients' readiness and commitment to achieving sustainability and long-term success.
        </p>
      </div>
      <div class="row" style>
        <div class="col-md-12">
          <div class="big-text">Needs Assessments</div>

          <div>We help corporate bodies, government parastatals and communities effectively implement strategies to identify existing strengths and determine the gaps. We are skilled in carrying out researches, data collection services, executing programmes, monitoring, evaluation and reporting services that assist in building capacities.</div>
        </div>
      </div>
      <br />
      <div class="row" style>
        <div class="col-md-12">
          <div class="big-text">
            Good governance
            and leadership training
          </div>

          <div>
            We offer training and consultancy services in good governance and leadership. They are both inextricably intertwined in building our society. On completion of courses in this category, participants should be able to:
            <br />
            <br />• analyze and learn how to use new tools for best practices
            <br />• Understand emerging trends and practices.
            <br />• Share, simulate and learn with experts viewpoint about the challenges
            <br />• Become an agent of change
          </div>
        </div>
      </div>
      <br />

      <div class="row" style>
        <div class="col-md-12">
          <div class="big-text">Staff capacity building</div>

          <div>
            Our educational and professional development programmes for all staff play a crucial role in an organization's success. Sustaining a dutiful and well-qualified workforce is an essential function of management. We can assist organizations’ in achieving this for their employees through a variety of activities:
            <br />

            <br />• Implement bespoke training by exploring challenges inhibiting employees' work performance and team dynamics.
            <br />• We evaluate the specific and or collective strengths and capabilities of members of staff.
            <br />•We create platforms that to boost management's capacity in recognizing and dealing with challenges faced their workforce.
            <br />•We develop applications and programmes for welfare schemes that will advance staff performance.
            <br />
          </div>
            <div>Our experts are savvy in organizational growth, training and team dynamics and participants have gotten value from our ability to ascertain short- and long-term performance interventions that are concrete and applicable to any work environment.</div>
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
    foota,
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
.first-text {
  font-family: SF UI Display;
  color: #1b6761;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  text-align: justify;
  letter-spacing: 0.02em;
  padding-top: 100px;
}
.big-text {
  font-family: SF UI Display;
  color: #092e2b;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 108.34%;
}

@media only screen and (max-width: 400px) {

  .big-text {
  font-family: SF UI Display;
  color: #092e2b;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 108.34%;
}
  .first {
    padding-top: px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .first-text {
    font-family: SF UI Display;
    color: #1b6761;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  
    text-align: justify;
   
    padding-top: 0px;
  }

  .conts {
    padding-top: 45px;
    background-image: url("../assets/capacityIDE1.png");
    background-size: contain;
    background-position: center center;
  }
  .header {
    height: 250px;
    position: relative;
  }
  .header-text {
    margin: 0;
    position: absolute;
    top: 35%;
    font-family: SF UI Display;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    padding-left: 30px;
    color: white;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {

  .first {
    padding-top: 0px;
    padding-left: 5px;
    padding-right: 5px;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .first {
    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 100px;
    padding-right: 100px;
  }

  .cont {
    padding-top: 100px;
  }
  .conts {
    background-image: url("../assets/capacityIDE1.png");
  }

  .header {
    height: 500px;
    position: relative;
  }
  .header-text {
    margin: 0;
    position: absolute;
    top: 25%;
    font-family: SF UI Display;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    padding-left: 150px;
    color: white;
  }
  .hold-header {
    padding-top: 60px;
  }
}
</style>