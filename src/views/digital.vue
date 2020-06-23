<template>
  <div style="background-color:">
    <nava />

    <div class>
      <div class="conts" style="padding-top:40px">
        <div class="card-body" style=" height:500px;   position: relative;">
          <div style="margin-top:50px ; ">
            <span
              class
              style="  margin: 0;
  position: absolute;
  top: 25%;
  font-family: SF UI Display;
font-style: normal;
font-weight: bold;
font-size: 60px;
padding-left:150px;
color:white"
            >
              Digital
              <br />Inclusion
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
              >We provide a practical approach to addressing the needs of individuals and communities to embrace the digital age fully. As the digital revolution intensifies, the internet has become more embedded in the lives of individuals, societies and commerce. Hence digital literacy has become more critical than ever before to create a more enabling and competitive society.</p>
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
                We work to ensure Individuals and disadvantaged groups should have access to, as well as skills to use Information and Communication Technologies (ICT) to participate in and benefit from today's growing knowledge and information society. IDEaL’s Digital inclusion actions cover the gap in these areas:
                <br />We promote digital inclusion in various ways:
                <br />

                <br />•Providing free access to digital technologies including hardware and software. GCFLearnFree.
                <br />
                <br />•Improving digital literacy skills through practical training programs and workshops.
                <br />
                <br />•Creating a more digitally savvy consumer and workforce.
                <br />
                <br />•Providing Accessibility services designed to meet users’ needs, including those dependent on assistive technology to access digital services.
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
    background-image: url("../assets/digitIDE1.png");
    height: auto;
  }
  img {
    padding-top: 80px;
  }
}
</style>