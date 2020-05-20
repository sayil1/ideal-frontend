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
                  <span class="white--text">SPORT DEVELOPMENT</span>
                  <hr
                    style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="body">
        <div class="row" style="background-color:rgb(255, 255, 255)">
          <div class="col-sm-12 col-md-9">
            <div class="first" style>
              <div class style>
                <p class="car-text first">
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
          <div class="col-sm col-md-3" v-if="image==true" style="margin-top:60px">
            <v-img src="../assets/sports.svg" style=" width:300px"></v-img>
          </div>
        </div>
        <div class="first car-text" style=" margin-bottom:50px">
          We are recording lesser cases of drop-outs and higher aspiration to further studies.
          <br />
          <strong>Why sports Development?</strong>
          <ul>
            <li>To advance and promote sports opportunities for youth in local communities</li>
            <li>Removing barriers to participation</li>
            <li>Developing personal, social and community development.</li>
            <li>Teaching youth real life skills</li>
            <li>Create sporting new sporting facilities, rehabilitation and Upgrade of old sporting facilities.</li>
          </ul>
          <strong>Barriers to sport Development:</strong>
          <br />Barriers to sports Development:
          There is a considerable gap comparing local communities in our region to other developed areas of the world in sports participation. Through our interactions and activities so far, we have identified two categories of barriers:
          <div>
            <strong>1. Social pressures</strong> <br>
            Societal, families and peers can deter individuals from actively participating in sports.
            <br />
            <ul>
              <li>Societal beliefs and traditions within a community</li>
              <li>The parental expectation of their children and also Little or no family support in sporting activities</li>
              <li>The conflicting interest in recreational activities.</li>
              <li>Few opportunities for females seeking opportunities to participate in sports</li>
            </ul>
            <strong>2. Economic</strong> <br>
            Young people from various socially-disadvantaged communities are less active in sports due to the limited access to sporting facilities, cost for professional coaching, purchasing kits or sporting equipment. They have less contact with sports activities, reduce participation in particular sports and ultimately fewer representations in global competitive sports.
            <br />
            <ul>
              <li>Limited opportunities for participation in training and competition</li>
              <li>access to sports equipment and facilities</li>
            </ul>
            <strong>How IDEaL is overcoming barriers to Sport Development:</strong> <br>
            <ul>
              <li>Recognize what motivates youths to engage in sports</li>
              <li>Set up the critical partnership  with sports equipment and service providers </li>
              <li>Team up with schools and communities to build a more inclusive and positive sports culture among individuals.</li>
              <li>Boosting confidence building in individuals and encouraging them to engage in suitable and enjoyable sports.</li>
              <li>We are distributing sports gear at free or discount prices.</li>
              <li>Ensure that women and girls, irrespective of abilities or experience, get the opportunity to be an active part of activities..</li>
            </ul>
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
    margin-top: 10px;
  }
  .first {
    padding-top: 10px;
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
  .body {
    margin-left: 80px;
    margin-right: 80px;
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
  .cont {
    padding-top: 100px;
  }
}
</style>