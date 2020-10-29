<template>
  <div style="background-color: ">
    <nava />

    <div class="hold-header">
      <div class="conts">
        <div class="header">
          <span class="header-text" style="">
            Train The
            <br />Trainers
          </span>
        </div>
      </div>
    </div>


    <div class="first" style>
      <div>
        <div>
          <div>
            <div class="first-text">
               <p>
                Our Train-the-trainers designed workshops 
                empower Trainers with the knowledge, abilities, and
                attitudes, in an integrated way, needed for the development of
                their vocation.
              </p>
              <p>
              <br />
                <strong>How IDEaL is improving the training of trainers</strong> <br>
                At
                IDEaL, we understand that trainers transform lives. Hence, have
                taken actions in prioritizing trainers training, support and
                development. We consider that a learner’s education can only
                ever be as good as their teacher(s) hence it’s important that trainers not only need to
                know what to teach but how to teach.
                Effective training for trainers isn’t as prevalent in our region
                as it should be due to the fact that trained teachers are in
                decline. In addition, we have observed that many teachers
                struggle to teach without necessary teaching and class
                management techniques; a consequence of this is that many
                learners struggle to learn. Failure to achieve this will lead to
                failure to achieving the Goal 4 of the Sustainable Development
                Goals aimed at having every youth receiving high-quality
                education by 2030. <br>
                <br />
                  <strong>Intended for:</strong> <br />These train-the-trainer
                courses are suitable for anyone involved in the development of
                others. Including: trainers, managers, leaders, consultants,
                teachers, technical trainers, lecturers and more… <br /> <br>
                 <img src="../assets/train2IDE.png" alt style="width: 100%" /> <br> <br>
                 Our train-the-trainer workshops have helped trainers to be able to: <br>
                 - Organize training sessions that are more meaningful and result-orientated. <br>
                 - Hold participants’ attention and interest. <br>
                 - Study a variety of impelling factors needed to develop training and focus on outstanding delivery. <br>
                 - Ascertain resourceful training techniques and integrate new technologies into training strategies. <br>
                 - Gain skills in presentation, training design and classroom management. <br>
                 - Understand the diverse ways individuals learn and ensure that training content supports this diversity. <br> <br>

                 The benefits of this hands-on training are incalculable as all topics have gone through systematic procedures to enable participants achieve success. An additional benefit engaging in our train-the-trainers program is the network of professionals that trainers meet during the period. It offers them the chance to gather ideas and recommendations from other professionals.
              </p>
            </div>
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
  padding-top: 10px;
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
    background-image: url("../assets/trainIDE2.png");
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
  first {
    background-color: #f5cf8e; /* Yellow */
  }
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
    background-image: url("../assets/trainIDE2.png");
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