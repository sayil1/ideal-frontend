<template>
  <div style="background-color:">
    <nava />

    <div style>
      <!-- card -->
       <div style class="div1">
        <div class="card-size">
          <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
            <div style="margin-top:px ; ">
              <div class="car" style="margin-left:40px; margin-right:40px">
                <div class="car-head">
                  <span class=" white--text">DIGITAL INCLUSION</span>
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
        <div class="row " style="background-color:rgb(255, 255, 255)">
          <div class="col-sm-12 col-md-9" style="margin-top:0px">
            <div class>
              <div class="car-text" style>
                <p
                  class=""
                >Digital inclusion aims at a practical approach to addressing the needs of individuals and communities to fully embrace the digital age. As the digital revolution intensifies, internet has become more embedded in the lives of individuals, societies and commerce. Hence digital literacy has become more critical than ever before to create a more enabling and competitive society.</p>
              </div>
            </div>
          </div>
          <div class="col-sm col-md-3" v-if="image==true">
            <v-img src="../assets/app.svg" style=" width:300px"></v-img>
          </div>
        </div>
        <div class="first car-text">
          Individuals and disadvantaged groups should have access to, as well as skills to use Information and Communication Technologies (ICT) in order to participate in and benefit from today's growing knowledge and information society.
          IDEaL’s Digital inclusion actions cover the gap in these areas:
          <br />We promote digital inclusion in various ways:
          <ul>
            <li>- Providing free access to digital technologies including hardware and software. GCFLearnFree</li>
            <li>- Improving digital literacy skills through practical training programs and workshops.</li>
            <li>- Creating a more digitally savvy consumer and workforce.</li>
            <li>- Providing Accessibility services which are designed to meet users’ needs, including those dependent on assistive technology to access digital services.</li>
          </ul>
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
    text-align: left
    
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
  body {
    background-color: #b2d6ff; /* Blue */
  }
  .first {
   
    padding-left: 30px;
    padding-right: 30px;
  }
  .car {
    /* padding: 30px; */
  }
 .car-head {
    font-size: 34px;
    text-align: center;
    font-family: "Lora"
   
  }
  .car-text {
    font-size: 21px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
    text-align: left;
    font-family: "Alegreya"
  }
}
</style>