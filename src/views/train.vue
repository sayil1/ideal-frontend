<template>
  <div style="background-color:">
    <nava />

    <div class="hold-header">
      <div class="conts">
        <div class="header">
          <span class="header-text" style=" ">
            Train The
            <br />Trainers
          </span>
        </div>
      </div>
    </div>

    <div class="first first-text">
      <div class="row" >
        <div class="col-sm-12 col-md-12">
          <div >
            <div class>
              <p
              
              
              >
                Our Train-the-trainer designed workshops meet trainers' needs, improve and professionalize in their career path.
                The Institute of Commercial Management (ICM) UK- is a leading professional first It is providing qualifications at Certificate, Diploma, Advanced Diploma, Graduate Diploma and Post Graduate Diploma levels that is recognized globally in business, management and related vocations..
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src="../assets/train2IDE.png" alt style="width: 100%;
 " />
    </div>

    <div class="first" style>
      <div >
        <div >
          <div >
            <div class="first-text">
              <p >
                <strong>Train-the-trainers</strong>
                <br />We are empowering Trainers with the knowledge, abilities, and attitudes, in an integrated way needed for the development of their vocation.
                <br />
                <br />
                <strong>How IDEaL is improving the training of trainers</strong>
                <br />At IDEaL, we understand that trainers transform lives. Hence, we have taken actions in prioritizing trainers' training, offering bespoke and tailor-made support and development Programmes for organizations.
                <br />We consider that a learner’s education can only ever be as good as their instructor(s); hence it’s vital that trainers not only need to know what to teach but how to teach.
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