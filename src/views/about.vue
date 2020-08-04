<template>
  <div>
    <nava />

    <div class="aboutTop" style="margin:0px">
      <!-- <img class="aboutIMG" src="../assets/aboutnew2.jpg" alt style="padding-top:50px; height:400px " /> -->
      <div class="cov">
        <!-- <h1
            class
            style="font-family: SF UI Display;
font-style: normal;
font-weight: 500;
font-size: 48px;
color: white;
padding:150px"
          >
            About
            <br />iDeal-IT
        </h1>-->
      </div>
    </div>
    <div>
      <div class="big-text" style=" ">
        WE are young professionals
        <br />with the quest to building a platform,
        <br />an avenue for youth to
      rediscover   <br /> themselves
      </div>

      <div class="row" style>
        <div class="col-md-3">
          <!-- <h1
            class
            style="font-family: SF UI Display;
font-style: normal;
font-weight: 500;
font-size: 48px;
color: #1B6761;
padding:50px"
          >
            About
            <br />iDeal-IT
          </h1>-->
        </div>

        <div class="small-text">
          <p
            style="font-family: sans-serif;
            color: #639B97;
font-style: normal;
font-weight: 100;
font-size: 22px;
line-height: 29px;
text-align: justify;
letter-spacing: 0.02em;"
          >
            Young professionals founded INITIATIVE FOR DEVELOPMENT EDUCATION AND LEARNING (IDEaL). We believe that youth can contribute significantly to building a better society—having identified the challenges faced in gaining quality education, access to information, value orientation as well as their existing gaps. We are taking Practical action!!!
            <br />
            <br />"COLLECTIVELY WE COULD ENSURE THAT CHILDREN GO TO SCHOOL AND ALSO REMAIN IN SCHOOL" - IDEAL.
          </p>
        </div>
      </div>

      <div style="background-color:rgb(217, 217, 217)">
        <h1 class="big-text" style>Gallery</h1>

        <!--  -->

        <div style="text-align: center; "></div>

        <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
        <div class="images-wrapper row">
          <div   v-for="(image, imageIndex) in itemsToDisplay"
            :key="imageIndex"
            @click="index = imageIndex">
              <v-img
              
                  :src="image"
                  :lazy-src="image"
                 
                  class="grey lighten-2 image"
                ></v-img>
           <!-- <img :src="image" class="image" alt=""> -->
          </div>
          
          <!-- <div
          style="width:20px"
            class="image col-xs-12"
            v-for="(image, imageIndex) in itemsToDisplay"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
        </div> -->
        </div>
        <div v-if="expand" style="text-align:center">
          collapse
          <br />
          <button @click="showLessImages = !showLessImages, expand=false" class="m-btn" style>
            <v-icon size="20">mdi-arrow-up</v-icon>
          </button>
        </div>
        <div v-else style="text-align:center">
          expand
          <br />
          <button @click="showLessImages = !showLessImages, expand=true" class="m-btn" style>
            <v-icon size="20">mdi-arrow-down</v-icon>
          </button>
        </div>
      </div>

      <!-- <div class="row">
              <div class="col-md-4">
                <a
                  href="../assets/ideal13.jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="../assets/ideal13.jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg"
                  data-size="1600x1067"
                >
                  <img
                    alt="picture"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(133).jpg"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
       
      </div>
      -->

      <div style="padding:20px;" class="greenBg">
        <div class="big-text" style="color:white">Our Qualifications</div>
        <hooper
          :settings="hooperSettings"
          :progress="true"
          :autoPlay="true"
          :playSpeed="4000"
          style="margin-bottom:20px; margin-left:-25px "
        >
          <slide>
            <v-col style>
              <img
                src="../assets/toefl.png"
                style=" display: block; width: 100px; height: 100px; text-align:center; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/icm.png"
                style=" display: block;
   width: 100px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/pearson.png"
                style=" display: block;
    width: 100px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
          <slide>
            <v-col>
              <img
                src="../assets/cisco.png"
                style=" display: block;
    width: 100px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>

          <slide>
            <v-col>
              <img
                src="../assets/national.png"
                style=" display: block;
  width: 100px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
            </v-col>
          </slide>
        </hooper>
      </div>
      <div style="padding:100px">
        <div class="big-text">Proud Member of</div>

        <div class="row">
       
            <img
              src="../assets/national.png"
              style=" display: block;
  width: 100px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
            />
         
     
             <img
                src="../assets/cisco.png"
                style=" display: block;
    width: 100px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />

              <img
                src="../assets/icm.png"
                style=" display: block;
   width: 100px;
    height: 100px; display: block;
  margin-left: auto;
  margin-right: auto;"
              />
         
        </div>
      </div>
    </div>

    <foota />
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import CoolLightBox from "vue-cool-lightbox";
import nava from "../components/newNav";
import foota from "../components/footer";
export default {
  components: {
    CoolLightBox,
    nava,
    Hooper,
    Slide,
    foota,
  },
  data: function () {
    return {
      items: [
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1595445197/hkhphgwxf0dwgaijdvqp.png",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1595445197/hkhphgwxf0dwgaijdvqp.png",
      ],
      hooperSettings: {
        itemsToShow: null,
        centerMode: true,
        infiniteScroll: true,
        progress: true,
        autoreplay: true,
        playspeed: 1000,
      },
      index: null,
      showLessImages: true,
      expand: false,
    };
  },
  created() {
    this.isMobile();
    // this.initialize();
    // this.showNewss();
  },
  computed: {
    itemsToDisplay: function () {
      if (this.showLessImages) {
        return this.items.slice(0, 8);
      } else {
        return this.items;
      }
    },
  },
  methods: {
    isMobile() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // var element = document.getElementById("text");
      if (isMobile) {
        // alert("u are using mobile");
        this.hooperSettings.itemsToShow = 1;
      } else {
        // alert("you are on desktop");
        this.hooperSettings.itemsToShow = 5;
      }
    },
  },
};
</script>


<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Alegreya:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
.aboutTop{
  padding-top: 80px;
}
.greenBg {
  background-image: url("../assets/greenbgg.jpg");
}
.cov {
  /* padding-top: 10%; */
  background-image: url("../assets/aboutnew2.jpg");
  filter: grayscale(100%);
  height: 400px;
  /* background-attachment: fixed; */
  background-size: contain;
  background-position: center 30%;
}
.m-btn {
  background-color: rgba(64, 64, 64, 0.3);
  padding: 5px;
  height: 60px;
  border-radius: 25px;
  border: 1px solid white;
}
.m-btn:hover {
  background-color: rgb(255, 253, 253);
  padding: 5px;
  color: white;
  height: 60px;
  border-radius: 25px;
  border: 1px solid #1b6761;
}
.image {
     float: left;
    width: 300px;
  height: 300px;
   
  cursor: pointer;
  margin:5px;
  object-fit: contain;
}

.image:hover {
  filter: grayscale(100%);
   border-radius: 3px;
  border: 1px solid rgb(11, 135, 141);
  /* width: 210px;
  height: 210px; */
}
.imgHolder {
  margin-left: 50px;
  margin-right: 20px;
}
template {
  margin-left: 30px;
  margin-right: 30px;
  font-family: "Alegreya", serif;
}

[class*="col-"] {
  width: 100%;
}

.big-text {
  padding-top: 35px;
  padding-bottom: 50px;
  padding-left: 150px;
  padding-right: 150px;
  font-size: 10px;
  line-height: 70px;
  color: #1b6761;
  letter-spacing: -0.5px;
  text-align: center;
  /* margin-bottom: 57px; */
  font-weight: 100;
  font-size: 50px;
  font-family: "Open Sans", sans-serif;
}
.small-text {
  padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 70px;
}
.images-wrapper{
  padding-left:30px;
  padding-right:30px
}
@media only screen and (max-width: 400px) {
  .cov {
  padding-top:300px;
  background-image: url("../assets/aboutnew2.jpg");
  filter: grayscale(100%);
  /* height: 100px; */
  /* background-attachment: fixed; */
  background-size: contain;
  background-position: center 30%;
}
.aboutTop{
  padding-top: 0px;
}
.big-text {
  margin-top: -210px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1px;
  line-height: 30px;
  color: #1b6761;
  letter-spacing: -0.5px;
  text-align: center;
  /* margin-bottom: 57px; */
  font-weight: 100;
  font-size: 30px;
  /* font-family: "Open Sans", sans-serif; */
}
.small-text {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 300px;
   font-size: 5px;
}
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .card1 {
    margin-left: auto;
    margin-right: auto;
    height: 50px;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 50px;
  }
  .card3 {
    margin-left: auto;
    margin-right: auto;
    height: 50px;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .aboutTop {
    height: auto;
  }
  p {
    font-family: "Alegreya", serif;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 16px;
  }
  .card1 {
    margin-left: auto;
    margin-right: 0px;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: 0px;
    margin-right: auto;
    height: 100%;
  }
  .goals {
    background: white;
    margin-left: 0px;
  }
  .card1 {
    margin-left: auto;
    margin-right: -60px;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: -60px;
    margin-right: auto;
    height: 100%;
  }
  /* .aboutIMG {
    height: 120%;
    width: 100%;
    position: cover;
    margin-top: -100px;
  } */
}
</style>