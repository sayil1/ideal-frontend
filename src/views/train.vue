<template >
  <div style="background-color:">
    <nava />
    <div class="card-size div1">
      <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
        <div style="margin-top:80px ; ">
          <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
            <div class="car-text">
              <span class="car-head white--text" style>TRAIN-THE-TRAINER WORKSHOPS</span>
              <hr
                style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body" style>
      <!-- card -->
      <div class="row sub-body" style>
        <div class="col-sm-12 col-md-9" style="margin-bottom:0px">
          <div class style=" ">
            <div class style>
              <p class="--text font-weight-regular">
                <strong>Train the trainers</strong>
                refers to actions and methods aimed at empowering
                <strong>Trainers</strong> with the knowledge, abilities, and attitudes, in an integrated way, needed for the development of their vocation.
                <br />
                <strong>How is IDEaL improving the training of trainers?</strong>
                <br />At IDEaL, we understand that trainers transform lives. Hence, have taken actions in prioritizing trainers training, support and development.
                <br />
                <br />We consider that a learner’s education can only ever be as good as their teacher(s) hence it’s important that trainers not only need to know what to teach but how to teach.
                <br />
                <br />Effective training for trainers isn’t as prevalent in our region as it should be due to the fact that trained teachers are in decline. In addition, we have observed that many teachers struggle to teach without necessary teaching and class management techniques; a consequence of this is that many learners struggle to learn. Failure to achieve this will lead to failure to achieving the Goal 4 of the Sustainable Development Goals aimed at having every youth receiving high-quality education by 2030.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-3" style="padding-top:80px" v-if="image==true">
          <v-img src="../assets/train1.svg" style=" width:300px"></v-img>
        </div>
      </div>
      <div class="sub-body" style=" ">
        <!-- card -->
        <div class="row">
          <div class="col-sm col-md-3" style="padding-top:80px" v-if="image == true">
            <v-img src="../assets/train2.svg" style=" width:300px"></v-img>
          </div>
          <div class="col-sm-12 col-md-9">
            <div class="" style=" ">
              <div class="" style>
                <div class=" --text font-weight-regular">
                  <!-- <h2>
                  <strong class="black--text">Workshops Structure</strong>
                  <hr
                    style="color:orange; width:200px;  margin-right:auto; border: 2px solid orange;"
                  />
                  </h2>-->

                  <br />
                  <h3>The benefits your organization will gain from this course:</h3>
                  <ul>
                    <li>- Training in your organization will become more effective.</li>
                    <li>- Your trainers will be equipped with the skills to motivate their audience.</li>
                    <li>- Training sessions will be more meaningful and results orientated.</li>
                    <li>- Trainers will learn to create lasting impressions on their trainees. Making sure that the necessary skills to succeed in their roles are delivered effectively.</li>
                    <li>- Training staff will understand how we learn, will be well-prepared and will focus on outstanding delivery.</li>
                    <li>- Trainers will gain excellent delivery skills to make a positive impact on others.</li>
                    <li>- Trainers will gain skills in presentation, training design and classroom management.</li>
                    <li>- Trainers will be educated on how to integrate technology into the training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" style="">
        <br />The benefits of this hands-on training are incalculable as all topics have gone through systematic procedures to enable participants achieve success. An additional benefit engaging in our train-the-trainers program is the network of professionals that a trainer will meet during the period. It offers them the chance to gather ideas and recommendations from other professionals.
        <br />Intended for:
        <br />These train-the-trainer courses are suitable for anyone involved in the development of others. Including: trainers, managers, leaders, consultants, teachers, technical trainers, lecturers and more…
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
    items: [
      { text: "Design Learning programs", icon: "mdi-chair-school" },
      { text: "Creating Learning Objectives", icon: "mdi-check-all" },
      { text: "Class Arrangements", icon: "mdi-google-classroom" },
      { text: "Training software and tools", icon: "mdi-tools" },
      { text: "Integration of education technology", icon: "mdi-set-center" },
      { text: "Presentations skills", icon: "mdi-presentation-play" }
    ],
    items2: [
      {
        text: "Training Advisor",
        icon: "mdi-teach"
      },
      {
        text: "Workplace Trainer",
        icon: "mdi-account-clock"
      },
      {
        text: "Vocational Education Teacher",
        icon: "mdi-presentation-play"
      },
      {
        text: "Setting up your own Training Organization",
        icon: "mdi-account-settings"
      },
      { text: "Training and Development", icon: "mdi-passport" },
      {
        text: "Any career that requires a Professional Trainer skill-set",
        icon: "mdi-passport"
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
  background-image: url("../assets/trainb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
}

@media only screen and (max-width: 400px) {
  .body{
    margin: 50px
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
  

    text-align: center;
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
    margin-top: 40px;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 20px;

  }
  .sub-body{
    font-size: 15px
  }
  .car {
   
  }
  .car-head {
    font-size: 40px;
    color: black;
    text-align: center;
    /* padding-bottom: 50px; */
  }
  .car-text {
    font-size: 25px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
   
    text-align: center;
    border-radius: 45px;
  }
}
</style>