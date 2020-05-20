<template >
  <div style="background-color:">
    <nava />
    <div style class="div1 cont">
      <div class="card-size">
        <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
          <div style="margin-top:px ; ">
            <div style="margin-left:40px; margin-right:40px">
              <div class="car-head">
                <span class="white--text">TRAIN-THE-TRAINER WORKSHOP</span>
                <hr
                  style="color:orange; width:150px; margin-left:auto; margin-right:auto; border: 2px solid orange;"
                />
              </div>
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
              <p class="car-text --text font-weight-regular">
                <strong>Train the trainers</strong>
                we are empowering
                <strong>Trainers</strong> with the knowledge, abilities, and attitudes, in an integrated way needed for the development of their vocation.
                <br />
                <strong>Intended for:</strong>
                <br />These train-the-trainer courses are suitable for anyone involved in the development of others. Including trainers, managers, leaders, consultants, teachers, technical trainers, lecturers and more
                <br />
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
            <div class style=" ">
              <div class style>
                <div class="car-text --text font-weight-regular">
                  <strong>How IDEaL is improving the training of trainers</strong>

                  <br />At IDEaL, we understand that trainers transform lives. Hence, we have taken actions in prioritizing trainers' training, offering bespoke and tailor-made support and development Programmes for organizations.
                  <br />
                  <br />We consider that a learner’s education can only ever be as good as their instructor(s); hence it’s vital that trainers not only need to know what to teach but how to teach.
                  <br />

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="car-text" style>
        <strong>Teachers training programme;</strong>
        <br />Qualified teachers on the decline, the need for this programme is to provide necessary teaching and class management techniques. We are contributing to the success of
        achieving the Sustainable Development Goal 4 of inclusive and equitable education and promoting lifelong learning opportunities for people in communities. <br> <br>
        <ul>
          <li>Organize training sessions that will be more meaningful and result-orientated.</li>
          <li>Stimulate the participants’ attention and interest.</li>
          <li>Study a variety of compelling factors needed to develop training and focus on outstanding delivery.</li>
          <li>Ascertain resourceful training techniques and integrate new technologies into training strategies..</li>
          <li>Trainers will gain skills in presentation, training design and classroom management.</li>
          <li>Understand the diverse ways individuals learn and ensure that training content supports this diversity..</li>
        </ul> <br> <br>
        
       The benefits of this hands-on training are incalculable as all topics have gone through systematic procedures to enable participants to achieve success. An additional benefit engaging in our train-the-trainers program is the network of professionals that a trainer will meet during the period. It offers them the chance to gather ideas and recommendations from other professionals.
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
  .body {
    margin: 50px;
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
  .body {
    margin-top: 40px;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 20px;
  }
  .sub-body {
    font-size: 15px;
  }
  .car {
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
  .cont {
    padding-top: 80px;
  }
}
</style>