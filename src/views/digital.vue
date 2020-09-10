<template>
  <div style="background-color:">
    <nava />

    <div class>
      <div class="hold-header">
        <div class="conts" style="padding-top:40px">
          <div class="header">
            <span class="header-text">
              Digital
              <br />Inclusion
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="body small-text" >
      <div class style="background: #F6F6F6">
        <div class style>
          <div class>
            <p>We provide a practical approach to addressing the needs of individuals and communities to embrace the digital age fully. As the digital revolution intensifies, the internet has become more embedded in the lives of individuals, societies and commerce. Hence digital literacy has become more critical than ever before to create a more enabling and competitive society.</p>
          </div>
        </div>
      </div>

      <div class style="background: #F6F6F6">
       
          <div class style>
            <div class>
              <p>
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
.body {
  margin: 50px;
}
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
    font-size: 20px;
    line-height: 108.34%;
    padding-top: 10px;
    text-align: center;
  }

@media only screen and (max-width: 400px) {
.body {
  margin: 20px;
}
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
  .conts {
    background-image: url("../assets/digitIDE1.png");
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
  body {
    background-color: #f5cf8e; /* Yellow */
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {

  .cont {
    padding-top: 100px;
  }
  .conts {
    background-image: url("../assets/digitIDE1.png");
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
    padding-top: 70px;
  }
}
</style>