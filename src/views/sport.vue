<template>
  <div style="background-color:">
    <nava />

    <div class style>
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
                  Several studies have revealed the benefits of sports to the general public especially the youth. Apart from the benefits to their psychological health, youths who engage in sports have also shown improvement academically and in physical health.
                  <br />Our sport development projects aim at devising better and more effective ways of promoting interest, participation and performance of sport in communities.
                  <br />So far, we have largely depended on effective partnership and networking with a wide range of community groups, local authorities and voluntary groups which have gone a long way in promoting peace and development and aided the attainment of personal and community goals.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm col-md-3" v-if="image==true" style="margin-top:60px">
            <v-img src="../assets/app.svg" style=" width:300px"></v-img>
          </div>
        </div>
        <div class="first car-text" style=" margin-bottom:50px">
          The sporting activities have encouraged children and youth to acquire life skills such as team work, leadership, problem solving and interpersonal skills as well as sportsmanship since it makes them feel integrated with other young people. The experiences gotten have also helped them to improve on their self-esteem. In addition, we have recorded an improvement in the academic performance of participants and lesser cases of drop-out rate as most of them now aspire for higher educational qualifications.
          <br />
          <strong>Why sports Development?</strong>
          <ul>
            <li>- To advance and promote sport opportunities for youth in local communities</li>
            <li>- Removing barriers to participation</li>
            <li>- Promoting personal, social and community development.</li>
            <li>- Teaching youth real life skills</li>
            <li>- Better cognitive functioning</li>
          </ul>
          <strong>Barriers to sport Development:</strong>
          <br />As compared to developed regions of the world, the gap in the sports participation in local communities in our region is huge. Through our interactions and activities so far, we have identified two categories of barriers:
          <div>
            <strong>1. Social pressures</strong>
            from the society, family and peers can deter individuals from actively participating in sports. For example, some women/girls see it as a male-dominated activity or a feeling of incompetence may arise from embarrassment gotten from peers or family.
            <br />
            <ul>
              <li>- beliefs and traditions within a community</li>
              <li>- Parental pressure</li>
              <li>- Little or no family support</li>
              <li>- Conflicting commitments</li>
              <li>- Gender imbalance with women trying to seek opportunities to participate</li>
            </ul>
            <strong>2. Economic</strong>
            In many areas in our region, young people’s from socially-disadvantaged communities are less active in sports due to the lack of funds to access quality facilities, pay for specialist coaching and memberships, and purchase kits or equipment. These have made some of them associate less with sports, discouraged others from participation in certain sports and ultimately led to fewer representations in global competitive sports.
            <br />
            <ul>
              <li>- Limited opportunities for participation, training and competition</li>
              <li>- Inadequate access to sport facilities</li>
              <li>- Equipment and facilities</li>
            </ul>
            <strong>How IDEaL is overcoming barriers to Sport Development:</strong>
            <ul>
              <li>Recognize what motivates youths to engage in sports</li>
              <li>Set up the key relationships with service providers and individuals</li>
              <li>Team up with schools and communities to build a more inclusive and positive sport culture among individuals.</li>
              <li>Boosting confidence building in individuals and encouraging them to engage in suitable and enjoyable sports.</li>
              <li>Free or reduced pricing for people experiencing financial need as well as flexible payment options for the purchase of fairly-used sporting equipment at discounted prices.</li>
              <li>Ensure that women and girls, irrespective of abilities or experience, get the opportunity to be an active part of activities.</li>
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
    padding-top: 30px;
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
}
</style>