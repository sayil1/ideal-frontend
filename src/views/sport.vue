<template>
  <div>
    <nava />

    <!-- card -->
    <div class>
      <div class="conts">
        <div
          class="card-body"
          style="background: linear-gradient(69.97deg, #092E2B 8.35%, rgba(9, 46, 43, 0.08) 88.57%); height:400px;   position: relative;"
        >
          <div style="margin-top:50px ; ">
            <span
              class
              style="  margin: 0;
  position: absolute;
  top: 40%;
  font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 40px;
padding-left:150px;
color:white"
            >
              SPORT
              <br />DEVELOPMENT
            </span>
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
                Our sport development projects aim at devising better and more effective ways of promoting interest, participation and performance of sport in communities.
                <br />So far, we depend mainly on collaboration, partnerships and networking with a wide range of international organisations, community groups, local authorities and voluntary groups for sports programmes that go a long way in the attainment of personal and community goals while promoting peace and development.
                <br />
                <br />
                <strong>Building true sportsmanship-</strong>
                we encourage children and youth through sporting activities to learn to act with fairness and empathy, acquire life skills such as teamwork, leadership, problem solving and interpersonal skill. Building self-esteem, improving academic performance, and a sense of hope for the youth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row car-text first" style="padding:50px; padding-left:90px">
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
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 108.34%;"
        >Why sports Development?</div>
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
          We offer training and consultancy services in good governance and leadership. They are both inextricably intertwined in building our society. On completion of courses in this category, participants should be able to:
          <br />
          <br />• To advance and promote sports opportunities for youth in local communities
          <br />
          <br />• Removing barriers to participation
          <br />
          <br />• Developing personal, social and community development.
          <br />
          <br />• Teaching real-life skills
          <br />• Create sporting new sporting facilities, rehabilitation and Upgrade of old sporting facilities.
        </div>
      </div>
    </div>
    <hr style="border: 0.5px solid #639B97;" />
    <div class="body" style="padding-top:20px">
      <div style>
        <img src="../assets/black.jpg" alt style="width: 100%;
height: 400px;" />
      </div>

      <div
        style="font-family: SF UI Display;
        color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 108.34%; padding-top:40px; padding-bottom:40px"
      >Barriers to sports Development:</div>
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
        There is a considerable gap comparing local communities in our region to other developed areas of the world in sports participation. Through our interactions and activities so far, we have identified two categories of barriers:
        <br />
        <br />
        <strong>Social pressures</strong>
        <br />Societal, families and peers can deter individuals from actively participating in sports.
        <br />
        <br />• societal beliefs and traditions within a community
        <br />• the parental expectation of their children and also Little or no family support in sporting activities
        <br />• The conflicting interest in recreational activities.
        <br />• Few opportunities for females seeking opportunities to participate in sports
        <br />
        <br />
        <strong>Economic</strong>
        <br />Young people from various socially-disadvantaged communities are less active in sports due to the limited access to sporting facilities, cost for professional coaching, purchasing kits or sporting equipment. They have less contact with sports activities, reduce participation in particular sports and ultimately fewer representations in global competitive sports.
        <br />
        <br />• Limited opportunities for participation in training and competition
        <br />• access to sports equipment and facilities
      </div>

      <div
        style="font-family: SF UI Display;
       color: #092E2B;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 108.34%; padding-top:40px; padding-bottom:40px"
      >
        How IDEaL is overcoming barriers
        <br />to Sports Development:
      </div>
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
        • Recognize what motivates youths to engage in sports
        <br />
        <br />• Set up the critical partnership with sports equipment and service providers
        <br />
        <br />• Team up with schools and communities to build a more inclusive and positive sports culture among individuals.
        <br />
        <br />• Boosting confidence building in individuals and encouraging them to engage in suitable and enjoyable sports.
        <br />
        <br />• Supply of sports equipment and building sporting infrastructure around the country
        <br />
        <br />• We are distributing sports gear at free or discount prices.
        <br />
        <br />• Ensure that women and girls, irrespective of abilities or experience, get the opportunity to be an active part of activities.
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
  .body {
    margin-left: 20px;
    margin-right: 20px;
  }
  .first {
  }
  .car {
    font-size: 2px;
    margin: 0px;
  }
  .car-head {
    font-size: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-family: "lora";
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 20px;
    text-align: left;
  }
  .cont {
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
  .body {
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 30px;
  }

  .first {
    padding-top: 20px;
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
    text-align: center;
    border-radius: 45px;
    text-align: left;
    font-family: "Alegreya";
  }
  .conts {
    background-image: url("../assets/black.jpg");
  }
}
</style>