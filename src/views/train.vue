<template>
  <div style="background-color:">
    <nava />

    <div class>
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
          Train-The-trainer <br> Workshop
          </span>
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
              >Our Train-the-trainer designed workshops meet trainers' needs, improve and professionalize in their career path. <br> The Institute of Commercial Management (ICM) UK- is a leading professional body It is providing qualifications at Certificate, Diploma, Advanced Diploma, Graduate Diploma and Post Graduate Diploma levels that is recognized globally in business, management and related vocations..</p>
            </div>
          </div>
        </div>
      </div>

      <img src="../assets/black.jpg" alt style="width: 100%;
height: 400px; padding-top:80px" />
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
              <strong>Train-the-trainers</strong>  <br> We are empowering Trainers with the knowledge, abilities, and attitudes, in an integrated way needed for the development of their vocation. <br> <br>
              <strong> How IDEaL is improving the training of trainers</strong> <br>
               At IDEaL, we understand that trainers transform lives. Hence, we have taken actions in prioritizing trainers' training, offering bespoke and tailor-made support and development Programmes for organizations. <br> We consider that a learner’s education can only ever be as good as their instructor(s); hence it’s vital that trainers not only need to know what to teach but how to teach. 
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
  margin-left: 40px;
  margin-right: 40px;
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
.body {
  margin: 50px;
}

@media only screen and (max-width: 400px) {
  .first {
    /* padding: 30px; */
  }
  .car {
    margin: 0px;
  }
  .car-head {
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 50px;
    font-family: "lora";
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 10px;
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
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 30px;
  }

  /* .first {
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
  } */
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
  img{
     padding-top:80px
  }
}
</style>