<template>
  <div style="background-color:">
    <nava />

    <div class style>
      <!-- card -->
      <div style class="div1">
        <div class="card-size">
          <div class="card-body" style="background-color: rgba(21, 22, 21, 0.6)">
            <div style="margin-top:120px ; ">
              <div class="car font-weight-regular" style="margin-left:40px; margin-right:40px">
                <div class="car-text">
                  <span class="car-head white--text" style>SPORT DEVELOPMENT</span>
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
          <div class="col-sm-12 col-md-9" >
            <div class="first" style="">
              <div class style>
                <p class="card-text first font-weight-regular">
                  Sport development programs aims at devising better and more effective ways of promoting interest, participation and performance in sport in communities.
                  <br />Our successes have largely depended on effective partnership and networking with a wide range of community groups, local authorities and voluntary groups which have gone a long way in promoting peace and development and aided the attainment of personal and community goals.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm col-md-3"  v-if="image==true">
            <v-img src="../assets/app.svg" style=" width:300px"></v-img>
          </div>
        </div>
        <div class="first" style="35px; margin-bottom:50px">
          The sporting activities have encouraged children and youth to acquire life skills such as team work, leadership, problem solving and interpersonal skills as well as sportsmanship since it makes them feel integrated with other young people. The experiences gotten have also helped them to improve on their self-esteem. In addition, we have recorded an improvement in the academic performance of participants and lesser cases of drop-out rate as most of them now aspire for higher educational qualifications.
          <br />Why sports Development?
          <ul>
            <li>- To advance and promote sport opportunities for youth in local residents</li>
            <li>- Removing barriers to participation</li>
            <li>- Promoting personal, social and community development.</li>
            <li>- Teaching youth real life skills</li>
            <li>- Better cognitive functioning</li>
          </ul>
        </div>
      </div>
    </div>

    <foota />
  </div>
</template>


<script>
import nava from "../components/testnav";
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

@media only screen and (max-width: 400px) {
  .body{
    margin-left:20px;
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
    font-size: 40px;
    color: black;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 20px;

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
  .body{
    margin-left:80px;
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
    font-size: 40px;
    color: black;
    text-align: center;

    padding-top: 90px;
  }
  .car-text {
    font-size: 25px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
  }
}
</style>