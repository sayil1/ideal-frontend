<template>
  <div>
    <nava />

    <div class="aboutTop" style="padding-top:80px;">
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
      <div
        class="big-text"
        style=" "
      >WE are young professionals with the quest to building a platform, an avenue for youth to rediscover themselves</div>

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
            color: black;
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
       
       
      <!-- <div>
        <div class="goals">
          <div class="row" style="padding-top:90px;padding-bottom:90px;  height:100%;">
            <div class="col-md-4 col-sm-12">
              <div class="card1" style="background: ; width:75%; ">
                <v-icon large style="margin:16px; color:#1B6761">mdi-bullseye-arrow</v-icon>
                <div class="-header text-left p-3">
                  <h3 class="bold" style="color:#1B6761">OUR MAJOR GOAL</h3>
                  <hr style="color:orange; width:90px; margin-left:9px; border: 2px solid #1B6761;" />
                </div>
                <div class>
                 
                  <div
                    class="text-left"
                    style="padding:10px; color:#1B6761"
                  >Primarily we are working to improve the living standards of people by providing information, support and services that meet today's educational need and solve the human capacity challenges using ICT a strategic lever for building a knowledge-based society..</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="card2" style="background: #FF8A00; ; width:75%; ">
                <v-icon large color="white " style="margin:16px">mdi-eye</v-icon>
                <div class="-header t p-3">
                  <h3 class="white--text bold">VISION</h3>
                  <hr style="color:orange; width:90px; margin-left:9px; border: 2px solid white;" />
                </div>
                <div class>
               
                  <div
                    class="text-center white--text"
                  >Develop individuals and communities towards a knowledge-based society.</div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-12">
              <div class="card3" style="background: #FF8A00; width:75%; ">
                <v-icon large style="margin:16px; color:white;">mdi-lightbulb-on</v-icon>
                <div class="-header p-3">
                  <h3 class="white--text bold">OUR APPROACH</h3>
                </div>
                <div class>
                 
                  <div
                    class="text-left white--text"
                    style="padding:20px"
                  >In our ever globalizing world where there are constant introductions of new technologies, groundbreaking inventions and disruptions, there is a need for a critical look at how individuals can be a part of all these successes. ICT is an integral part of all our programmes, serving as a platform where opportunities are boundless.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div style="">
        <h1
          class=""
          style="text-align:center; margin-top:30px; background-color: #1B6761;color:white"
        >OUR GALLERY</h1>

        <!--  -->

        <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
        <div class="images-wrapper row ">
          <div
            class="image col-md-3"
            v-for="(image, imageIndex) in items"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
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
      </div>
    </div>
    <foota />
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import nava from "../components/newNav";
import foota from "../components/footer";
export default {
  components: {
    CoolLightBox,
    nava,
    foota,
  },
  data: function () {
    return {
      items: [
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        "https://res.cloudinary.com/sayil/image/upload/v1596281094/ideal-gallery/car3.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
      ],
      index: null,
    };
  },
};
</script>


<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Alegreya:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
.img {
  /* background-image: url("../assets/ideal10.jpg"); */
  /* filter: grayscale(100%); */
  /* background-size: cover;
  background-position: center; */
}
.cov {
  /* padding-top: 10%; */
  background-image: url("../assets/aboutnew2.jpg");
  height: 400px;
  background-attachment: fixed;
  background-size: contain;
  background-position: center 30%;
}
.image {
  width: 0;
  height: 250px;
  background-size: cover;
  cursor: pointer;
  margin: 0px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}

.image:hover {
  filter: grayscale(100%);
  /* width: 210px;
  height: 210px; */
}
.imgHolder {
  margin-left: 0px;
  margin-right: 0px;
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
  font-size: 60px;
  line-height: 70px;
  color: #1b6761;
  letter-spacing: -0.5px;
  text-align: center;
  /* margin-bottom: 57px; */
  font-weight: 100;
  font-size: 50px;
  font-family: "Open Sans", sans-serif;
}
.small-text{
   padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 70px;
}
@media only screen and (max-width: 400px) {
  p {
    font-family: "Alegreya", serif;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 16px;
  }
  .card1 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .goals {
    background: white;
    margin-left: 0px;
  }
  .card1 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card2 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .card3 {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .aboutIMG {
    height: auto;
    width: 100%;
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