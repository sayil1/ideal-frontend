<template>
  <div style="background-color:">
    <nava />


      <div class>
        <div class="conts" style="padding-top:40px">
 <div class="conts">
        <div
          class="card-body"
          style="; height:500px;   position: relative;"
        >
          <div style="margin-top:50px ; ">
            <span
              class
              style="  margin: 0;
  position: absolute;
  top: 25%;
  font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 70px;
padding-left:150px;
color:white"
            >
             Capacity <br> Development
            </span>
          </div>
        </div>
      </div>
        </div>
     
    </div>
     <div class="body" style="background: #F6F6F6">
      <div class="row" style="background-color:rgb(255, 255, 255)">
        <div class="col-sm-12 col-md-12">
          <div class="first" style>
            <div class>
              <p
                class="car-text first"
                style="font-family: SF UI Display;
            color: #1B6761;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
              >
              We focus on increasing organizations' strength by measuring internal successes, constraints and external impacts. We help teams to build and maintain strong foundations for projects, as well as promote strategic relationships. We put effort into capacity development techniques that enable individuals and establishments to acquire, develop capacities, and retain their abilitiesKnowledgege, tools, and other resources needed to carry out their jobs competently. Our methodology focuses on expertly blending best training practices with tailor-made strategies suited for clients' readiness and commitment to achieving sustainability and long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="row car-text first body-text" style="" >
      <div class="col-md-4">
        <img
          src="../assets/black.jpg"
          alt
          style="width: 301px;
height: 228px;
color: #092E2B;
left: 470px;transform: matrix(-1, 0, 0, 1, 0, 0);
"
        />
      </div>
      <div class="col-md-8">
        <div
          style="font-family: SF UI Display;
          color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 108.34%;"
        >Needs Assessments</div>
        <br />
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
         We help corporate bodies, government parastatals and communities effectively implement strategies to identify existing strengths and determine the gaps. We are skilled in carrying out researches, data collection services, executing programmes, monitoring, evaluation and reporting services that assist in building capacities. 
        </div>
      
      </div>
      
    </div>
  <hr style="border: 0.5px solid #639B97;" />
     <div class="row car-text first body-text" style="">
      <div class="col-md-4">
        <img
          src="../assets/black.jpg"
          alt
          style="width: 301px;
height: 228px;
color: #092E2B;
left: 470px;transform: matrix(-1, 0, 0, 1, 0, 0);
"
        />
      </div>
      <div class="col-md-8">
        <div
          style="font-family: SF UI Display;
          color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 108.34%;"
        > Good governance <br> and leadership training</div>
        <br />
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
         We offer training and consultancy services in good governance and leadership. They are both inextricably intertwined in building our society. On completion of courses in this category, participants should be able to: <br> <br> • analyze and learn how to use new tools for best practices <br> <br> • Understand emerging trends and practices. <br> <br> • Share, simulate and learn with experts viewpoint about the challenges <br> <br> • Become an agent of change 
        </div>
      </div>
    </div>
    <hr style="border: 0.5px solid #639B97;" />
     <div class="row car-text first body-text" style="">
      <div class="col-md-4">
        <img
          src="../assets/black.jpg"
          alt
          style="width: 301px;
height: 228px;
color: #092E2B;
left: 470px;transform: matrix(-1, 0, 0, 1, 0, 0);
"
        />
      </div>
      <div class="col-md-8">
        <div
          style="font-family: SF UI Display;
       color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 108.34%;"
        >Staff capacity building</div>
        <br />
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
      Our educational and professional development programmes for all staff play a crucial role in an organization's success. Sustaining a dutiful and well-qualified workforce is an essential function of management. We can assist organizations’ in achieving this for their employees through a variety of activities: <br> <br> • Implement bespoke training by exploring challenges inhibiting employees' work performance and team dynamics. <br><br> • We evaluate the specific and or collective strengths and capabilities of members of staff. <br><br> • We create platforms that to boost management's capacity in recognizing and dealing with challenges faced their workforce <br><br> • We develop applications and programmes for welfare schemes that will advance staff performance.
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
    padding-left: 5px;
    padding-right: 5px;
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
   .body-text{
    padding:40px;
     padding-left:auto
   
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
  .first {
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
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
  .conts {
    background-image: url("../assets/capacityIDE1.png");
  }
  .body-text{
    padding:50px; padding-left:90px
  }
}
</style>