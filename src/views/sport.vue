<template>
  <div>
    <nava />

    <!-- card -->
    <div class="hold-header">
      <div class="conts">
        <div class="header">
          <span class="header-text" style=" ">
            Sport
            <br />Development
          </span>
        </div>
      </div>
    </div>

    <div class="body" style="background: #F6F6F6">
      <div>
        <div>
          <p class="small-text">
            Our sport development projects aim at devising better and more effective ways of promoting interest, participation and performance of sport in communities.
            <br />So far, we depend mainly on collaboration, partnerships and networking with a wide range of international organisations, community groups, local authorities and voluntary groups for sports programmes that go a long way in the attainment of personal and community goals while promoting peace and development.
            <br />
            <br />
            <strong>Building true sportsmanship-</strong>
            we encourage children and youth through sporting activities to learn to act with fairness and empathy, acquire life skills such as teamwork, leadership, problem solving and interpersonal skill. Building self-esteem, improving academic performance, and a sense of hope for the youth.
            <br />We are recording lesser cases of drop-outs and higher aspiration to further studies.
          </p>
        </div>
      </div>

      <div class style>
        <div class="big-text">Why sports Development?</div>

        <div class="small-text">
          We offer training and consultancy services in good governance and leadership. They are both inextricably intertwined in building our society. On completion of courses in this category, participants should be able to:
          <br />
          <br />• To advance and promote sports opportunities for youth in local communities
         
          <br />• Removing barriers to participation
        
          <br />• Developing personal, social and community development.
         
          <br />• Teaching real-life skills
          <br />• Create sporting new sporting facilities, rehabilitation and Upgrade of old sporting facilities.
        </div>
      </div>
    </div>

    <!-- <hr style="border: 0.5px solid #639B97;" /> -->
    <div class="body" >
     

      <div class="big-text">Barriers to sports Development:</div>
      <div class="small-text">
        There is a considerable gap comparing local communities in our region to other developed areas of the world in sports participation. Through our interactions and activities so far, we have identified two categories of barriers:
        <br />
        <br />
        <strong>Social pressures</strong>
        <br />Societal, families and peers can deter individuals from actively participating in sports.
     
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
 <br>
      <div class="big-text">
        How IDEaL is overcoming barriers
       to Sports Development:
      </div>
      <br />
      <div class="small-text">
        • Recognize what motivates youths to engage in sports
        
        <br />• Set up the critical partnership with sports equipment and service providers
       
        <br />• Team up with schools and communities to build a more inclusive and positive sports culture among individuals.
      
        <br />• Boosting confidence building in individuals and encouraging them to engage in suitable and enjoyable sports.
      
        <br />• Supply of sports equipment and building sporting infrastructure around the country
       
        <br />• We are distributing sports gear at free or discount prices.
       
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
.responsiveIM {
  width: 100%;
  height: auto;

}
 .conts {
    background-image: url("../assets/sport3IDE.png");
  }
  .body-text {
    padding: 50px;
    padding-left: 90px;
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

@media only screen and (max-width: 400px) {
   .small-text {
    font-family: SF UI Display;
    color: #1b6761;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 29px;
    text-align: justify;
    letter-spacing: 0.02em;
  
  }
  .big-text {
    font-family: SF UI Display;
    color: #092e2b;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 108.34%;
    padding-top: 10px;
    text-align: center;
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
  .small-text {
    font-family: SF UI Display;
    color: #1b6761;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 29px;
    text-align: justify;
    letter-spacing: 0.02em;
  
  }
  .big-text {
    font-family: SF UI Display;
    color: #092e2b;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 108.34%;
    padding-top: 10px;
    text-align: center;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .small-text {
    font-family: SF UI Display;
    color: #1b6761;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    text-align: justify;
    letter-spacing: 0.02em;
  
  }
  .big-text {
    font-family: SF UI Display;
    color: #092e2b;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 108.34%;
    padding-top: 10px;
  }
 
}
</style>