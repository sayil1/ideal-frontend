<template>
  <div style="background-color:black">
    <nava />
    <div style=" padding:5px;" class="arch">
      <div style="margin-top:160px; margin-bottom:100px" class="carouselHolde">
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          cycle
          style="max-height:400px; margin:auto; max-width:1000px"
          show-arrows-on-hover
          interval="3000"
          height="400"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class>
      <!-- <div class="conts">
        <div style class="cont-text">
          <span style>
            Shop a set of 10 books &
            <br />Get 50% off on your next
            <br />book purchase. Hurry up!
          </span>
        </div>
      </div>-->

      <!-- <vue-position-sticky :offsetTop="10" sticky-class="myClass" />
 
<vue-position-sticky :offsetBottom="0" @change="handleStickyChange" />
      -->
      <vue-position-sticky :offsetTop="84" style="z-index:-2000">
        <div class="row" style="background-color:black">
          <div style class="col-md-10">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style="background-color:rgb(64, 64, 64); color:white;   outline: none;  border-top-style: hidden; border-right-style: hidden;border-left-style: hidden;border-bottom-style: hidden; margin:15px; margin-left:40px; width:500px; height:30px"
              />
            </div>
          </div>

          <div style="  z-index:200" class>
            <div class="row">
              <div class="wrapper" style="padding:23px 0px 23px 0px; color:white">
                <v-icon @click="showCart = !showCart" color="white" large>mdi-cart</v-icon>
                <span class="badge badge-light">{{quantity}}</span>
              </div>
              <span style="color:white; padding:23px 0px 23px 10px">cart</span>
            </div>
          </div>
        </div>
      </vue-position-sticky>
    </div>
    <div
      style="padding:45px; color:rgb(0, 255, 0); background-color:rgb(64, 64, 64); text-align:center; letter-spacing: 0.4em;"
    >
      WHERE ALL STORIES BEGIN
      <!-- <v-btn
            
                  @click="showCart = !showCart"
          
                  class="ma-2"
                  color="success"
                >
                  <v-icon dark>mdi-home</v-icon>
                  <span style="color:white">Checkout</span>
      </v-btn>-->
    </div>

    <div id="app" style>
      <vue-position-sticky :offsetTop="150" style="z-index:-2000">
        <div class="cart" v-show="showCart">
          <div v-show="items.length > 0" style="position:">
            <ul>
              <li v-for="(item, i) in items" :key="i" transition="fade">
                <p style="font-family:Alegraya">
                  <strong>{{ item.quantity }}</strong>
                  - {{ item.title }}
                  <v-icon
                    size="20"
                    color="red "
                    right
                    style="padding-right:auto;"
                    @click="removeFromCart(item)"
                  >mdi-delete</v-icon>
                  <!-- <i class="mdi-trash" @click="removeFromCart(item)"></i> -->
                </p>
              </li>
              <br />
            </ul>
            <div>
              <v-btn
                class="ma-2"
                tile
                color="green"
                depressed
                small
                outlined
                @click="verified = true, showCart = false, hopper=false"
              >Check out</v-btn>
              <v-btn
                class="ma-2"
                tile
                color="red"
                depressed
                small
                outlined
                @click="clearCart()"
              >Clear Cart</v-btn>

              <!-- <button @click="verified = true, showCart = false">Check out</button> -->
            </div>
          </div>
          <div style="z-index:1" v-show="items.length === 0">
            <p>Your cart is empty!</p>
          </div>
        </div>
      </vue-position-sticky>

      <div class="container">
        <div class="row">
          <div class="col-6" style="color:white; padding-left:150px; text-align:left">New Arrival</div>
          <!-- <div
            class="col-6"
            style="padding-right:150px;text-align:right; color:rgb(0, 255, 0)"
          >view all</div> -->
        </div>

        <v-sheet class="mx-auto" max-width="970" color:red style="background-color:black">
          <v-slide-group
            multiple
            show-arrows
            show-delimiters
            prev-icon="mdi-chevron-left"
            next-icon="mdi-chevron-right"
          >
            <v-icon slot="prependIcon" large color="primary">mdi-home</v-icon>
            <v-slide-item v-for="(item,i) in  shopsToDisplay" :key="i">
              <div class="m-3" style="width: 11.5rem; background-color:rgb(230, 230, 230)">
                <v-img style="  " class="white--text align-end vImage" v-bind:src="item.imagesPath"></v-img>
                <div class="row" style="font-size:15px; width:100%;  margin:0px">
                  <div class="col-1">
                    <v-icon
                      size="20"
                      color="orange"
                      style="padding-right:10px"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      @click="openModal(item)"
                    >mdi-star</v-icon>
                  </div>
                  <div class="col-4">
                    <!-- <v-icon size="20" color="#1B6761" left style="padding-right:10px">mdi-star</v-icon> -->
                    4.5/5
                  </div>
                  <div class="col-6" style="text-align:right; color: #1B6761;">
                    <!-- <strong>NGN{{ item.price }}</strong> -->
                    <v-icon size="25" left style="padding-right:">mdi-bookmark-outline</v-icon>
                  </div>
                </div>
                <div>
                  <div style="padding-left:7%;padding-right:7%; margin-top:-10px">
                    <div class="card-title" style="left: 9.96%;font-size:15px;color: #092E2B;">
                      <strong>{{ item.title }}</strong>
                      <br />

                      <div style="margin-top:-10px" class="row">
                        <div class="col-8" style="font-size:10px;">By Austin MAikano</div>
                        <strong
                          class="col-4"
                          style="font-size:13px; color:red; text-align:right"
                        >N{{ item.price }}</strong>
                      </div>
                    </div>
                  </div>

                  <!-- Modal -->
                  <div
                    class="modal"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel" style="color: #639B97">
                            <strong>{{ e.title }}</strong>
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            style="color:red"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <strong class="card-title">
                            <div class="row">
                              <div class="col-md-6" style="width: 18rem;">
                                <v-img
                                  class="white--text align-end"
                                  height="300px"
                                  v-bind:src="e.imagesPath"
                                ></v-img>
                              </div>
                              <div class="card-body col-md-6">
                                <p
                                  class="card-text"
                                  style="font-size:15px;right: 31.22%;color: #639B97;"
                                >{{e.description}}</p>
                                <p style="color: #1B6761;">NGN{{e.price}}</p>
                                <v-btn
                                  class="ma-2"
                                  @click="addToCart(e)"
                                  data-dismiss="modal"
                                  outlined
                                  color="orange"
                                >Add to cart</v-btn>
                              </div>
                            </div>
                          </strong>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style="width:100%"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  @click="openModal(item)"
                >modal</div>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>lkjbhkl
        <br />
        <div v-show="!verified">
          <div class="row">
            <div
              style="width: 361px;
height: 29px;
left: 98px;
color: white;
font-family: sans;
font-style: normal;

font-size: 30px;
line-height: 29px;
display: flex;
padding-bottom:40px;
align-items: center;
text-align: center
margin-top:20px"
            >
              <!-- <button
                style="font-family: SF UI Display;
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 17px;
margin-left:20px;
color: green;
text-align:right"
                @click="showLessBooks = !showLessBooks"
              >{{showLessBooks===true? "Show All Books" : "Show Less"}}</button>-->
            </div>
          </div>
        </div>

        <div class="checkout" v-show="verified" style="font-family:Alegreya">
          <h5 v-for="(item,i) in items" :key="i">
            <strong>{{ item.quantity }}</strong>
            - {{ item.title }}
            <span>NGN {{ item.price * item.quantity }}</span>
          </h5>
          <hr />
          <div class="row">
            <div>
              <h5>
                Total:
                <span style="color:green">NGN {{ total }}</span>
              </h5>

              <div class="row">
                <v-btn
                  @click="verified=false"
                  class="ma-2"
                  outlined
                  tile
                  small
                  color="orange"
                  dark
                >Back to books</v-btn>
                <paystack
                  :amount="amount"
                  :email="email"
                  :paystackkey="paystackkey"
                  :reference="reference"
                  :callback="callback"
                  :close="close"
                  :embed="false"
                >
                  <v-btn outlined small tile color="green" dark>Make Payment</v-btn>
                </paystack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- this holds the category cards -->
    <div style="background-color:rgb(25, 77, 51); padding:40px; width:100%; margin:0px">
      <h2
        style="padding:5px 0px 0px 11%; color:white; text-align:left; letter-spacing: 0.4em;"
      >Collection</h2>

      <v-sheet class="mx-auto" max-width="1100" style="background-color:rgb(25, 77, 51)">
        <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
          <v-slide-item v-for="n in 15" :key="n">
            <div style="padding:10px">
              <v-card
                class="mx-auto"
                max-width="300"
                style="background-color:rgb(121, 210, 166); color:rgb(0, 51, 0)"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-title>Stories for the little ones</v-card-title>

                <v-card-text class style="color:rgb(0, 51, 0)">
                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions style="padding-left:80%">
                  <v-icon style color="black darken-2">mdi-arrow-right-circle-outline</v-icon>
                </v-card-actions>
              </v-card>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>

    <div class="row">
      <div class="col-6" style="color:white; padding-left:235px; text-align:left">New Arrival</div>
      <!-- <div class="col-6" style="padding-right:150px;text-align:right; color:rgb(0, 255, 0)">view all</div> -->
      <div
          class="col-6" style="padding-right:235px;text-align:right; color:rgb(0, 255, 0)"
                @click="showLessBooks = !showLessBooks"
              >{{showLessBooks===true? "Show All Books" : "Show Less"}}</div>
    </div>
    <v-sheet v-show="showLessBooks" class="mx-auto" max-width="970" color:red style="background-color:black">
      <v-slide-group
        multiple
        show-arrows
        show-delimiters
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
      >
        <v-icon slot="prependIcon" large color="primary">mdi-home</v-icon>
        <v-slide-item v-for="(item,i) in  shopsToDisplay" :key="i">
          <div class="m-3" style="width: 11.5rem; ">
            <v-img style="  " class="white--text align-end vImage" v-bind:src="item.imagesPath"></v-img>
            <div style="background-color:white">
              <div class="row" style="font-size:15px; width:100%;  margin:0px">
                <div class="col-1">
                  <v-icon
                    size="20"
                    color="orange"
                    style="padding-right:10px"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >mdi-star</v-icon>
                </div>
                <div class="col-4">
                  <!-- <v-icon size="20" color="#1B6761" left style="padding-right:10px">mdi-star</v-icon> -->
                  4.5/5
                </div>
                <div class="col-6" style="text-align:right; color: #1B6761;">
                  <!-- <strong>NGN{{ item.price }}</strong> -->
                  <v-icon size="25" left style="padding-right:">mdi-bookmark-outline</v-icon>
                </div>
              </div>
              <div>
                <div style="padding-left:7%;padding-right:7%; margin-top:-10px">
                  <div class="card-title" style="left: 9.96%;font-size:15px;color: #092E2B;">
                    <strong>{{ item.title }}</strong>
                    <br />

                    <div style="margin-top:-10px" class="row">
                      <div class="col-8" style="font-size:10px;">By Austin MAikano</div>
                      <strong
                        class="col-4"
                        style="font-size:13px; color:red; text-align:right"
                      >N{{ item.price }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <v-btn
              block
              class
              @click="addToCart(item)"
              data-dismiss="modal"
              color="success"
            >Add to cart</v-btn>
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <!-- this will show all the books -->

    <div class="row" v-show="showLessBooks==false" style="margin-left:8%">
      <div v-for="(item,i) in  shopsToDisplay" :key="i" >
        <div class="m-3 " style="width: 11.5rem; ">
          <v-img style="  " class="white--text align-end vImage" v-bind:src="item.imagesPath"></v-img>
          <div style="background-color:white">
            <div class="row" style="font-size:15px; width:100%;  margin:0px">
              <div class="col-1">
                <v-icon
                  size="20"
                  color="orange"
                  style="padding-right:10px"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >mdi-star</v-icon>
              </div>
              <div class="col-4">
                <!-- <v-icon size="20" color="#1B6761" left style="padding-right:10px">mdi-star</v-icon> -->
                4.5/5
              </div>
              <div class="col-6" style="text-align:right; color: #1B6761;">
                <!-- <strong>NGN{{ item.price }}</strong> -->
                <v-icon size="25" left style="padding-right:">mdi-bookmark-outline</v-icon>
              </div>
            </div>
            <div>
              <div style="padding-left:7%;padding-right:7%; margin-top:-10px">
                <div class="card-title" style="left: 9.96%;font-size:15px;color: #092E2B;">
                  <strong>{{ item.title }}</strong>
                  <br />

                  <div style="margin-top:-10px" class="row">
                    <div class="col-8" style="font-size:10px;">By Austin MAikano</div>
                    <strong
                      class="col-4"
                      style="font-size:13px; color:red; text-align:right"
                    >N{{ item.price }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <v-btn
            block
            class
            @click="addToCart(item)"
            data-dismiss="modal"
            color="success"
          >Add to cart</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='https://js.paystack.co/v1/inline.js'></script> 
<script>
import { Services } from "../service";
var serv = new Services();

import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

import nava from "../components/newNav";
import paystack from "vue-paystack";
export default {
  components: {
    nava,
    paystack,
    Hooper,
    Slide,
  },
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    model: null,
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    hooperSettings: {
      itemsToShow: null,
      centerMode: true,
      infiniteScroll: true,
      progress: true,
      autoreplay: true,
      playspeed: 1000,
    },
    e: [],
    showLessBooks: true,
    hopper: true,
    shop: [],
    weeksTop: [],
    items: [],
    showCart: false,
    verified: false,
    quantity: 0,
    paystackkey: "pk_test_bb8f1b8270ac690cfac54817ebb179829ee9a694", //paystack public key
    email: "foobar@example.com", // Customer email
    amount: 600, // in kobo
  }),
  computed: {
    total() {
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i].price * this.items[i].quantity;
      }
      this.amount = Math.ceil(total) * 100;
      return total;
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },

    shopsToDisplay: function () {
      if (this.showLessBooks) {
        return this.shop.slice(0, 8);
      } else {
        return this.shop;
      }
    },
  },
  watch: {},
  created() {
    this.isMobile();
    serv
      .getRequest("books/allBooks")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.shop = response.data.result;

        for (let i = 0; i <= response.data.result.length - 1; i++) {
          // eslint-disable-next-line no-console
          // console.log(this.shop[i], 'shops');
          let today = new Date().toISOString().substr(0, 10);
          if (response.data.result[i].topTrend > today) {
            this.weeksTop.push(response.data.result[i]);
          } // eslint-disable-next-line no-console
          console.log(this.weeksTop, "weeks trop");
        }
      })
      .catch((e) => {
        // this.errors.push(e);

        // eslint-disable-next-line no-console
        console.log(e);
      });
    // alert("see ya");
  },
  methods: {
    openModal(item) {
      // eslint-disable-next-line no-console
      console.log(item);
      this.e = item;
    },
    callback: function (response) {
      console.log(response);
    },
    close: function () {
      console.log("Payment closed");
    },
    isMobile() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // var element = document.getElementById("text");
      if (isMobile) {
        // alert("u are using mobile");
        this.hooperSettings.itemsToShow = 1.5;
      } else {
        // alert("you are on desktop");
        this.hooperSettings.itemsToShow = 5;
      }
    },

    addToCart(itemToAdd) {
      // let found = false;

      // Add the item or increase qty
      let itemInCart = this.items.filter((item) => item._id === itemToAdd._id);
      let isItemInCart = itemInCart.length > 0;
      if (isItemInCart === false) {
        this.items.push(itemToAdd);
        itemToAdd.quantity = 1;
        this.quantity += 1;
        //  itemInCart[0].quantity += 1;
        alert("not found , add pls");
      } else {
        itemToAdd.quantity += 1;
        this.quantity += 1;
        // eslint-disable-next-line no-console
        console.log(itemToAdd);
      }
      // itemToAdd.quantity = 1;
    },

    removeFromCart(item) {
      // item.quantity -= 1;
      //  let itemInCart = this.items.filter(item => item.id === itemToAdd.id);
      let dis = this.items.findIndex((x) => x.id === item.id);
      alert(dis);

      this.items.splice(dis, 1);
      this.quantity -= item.quantity;
    },
    clearCart() {
      this.items = [];
      this.quantity = 0;
    },
  },
};
</script>

<style scoped lang="css">
.arch {
  background-image: url("../assets/carousel.jpg");
  position: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* padding-top: 60px; */
}
.carousel-item {
  /* margin-top: 50px;
  height: 100%; */
  height: 85vh;
  min-height: 0px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  padding-top: 200px;
  -o-background-size: cover;
  background-size: cover;
}
.wrapper {
  position: relative;
}
.wrapper span {
  position: absolute;
  top: 22px;
  right: 0px;
  outline-style: solid;
  outline-color: black;
}
.v-input__control {
  min-height: 10px !important;
}
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: yellow;
  padding: 50px;
  font-size: 20px;
}
.header {
  height: 80px;
}
.header h2 {
  color: #fff;
  font-family: "Rock Salt";
  float: left;
  font-weight: bolder;
  margin: 10px 20px;
}
/* .header button {
  border: 0;
  background: #ffdbe0;
  transition: all 0.1s ease-out;
}
.header button:hover {
  background: #ffd1d7;
} */
.header div {
  float: right;
  display: inline;
  margin: 10px;
}

li {
  list-style: none;
}

.fa {
  cursor: pointer;
  margin-left: 5px;
}

.fade-transition {
  transition: all 0.2s ease-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}

.cart > div {
  z-index: 200;
  background: #fff;
  padding: 20px 30px;
  position: absolute;
  right: 30px;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
}
.cart > div div {
  text-align: center;
}
.cart ul,
.cart li,
.cart p {
  margin-bottom: 0;
}
.cart button {
  margin: 20px 0 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 2px;
}
.cart input {
  width: 30px;
}

.shop h3 {
  position: absolute;
  top: -85px;
  left: -30px;
  color: rgba(255, 255, 255, 0.3);
  font-family: sans-serif;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -2px;
}
.shop ul {
  margin-top: 90px;
}
.shop li div {
  padding: 30px;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3);
}
.shop button {
  color: white;
  border: 0;
  background: #00adb5;
  margin: 0;
  transition: all 0.1s ease-out;
}
.shop button:hover {
  background: #00959c;
}

.checkout {
  background: #fff;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3);
  margin-top: 90px;
  padding: 50px 60px;
}
.checkout h3 {
  position: absolute;
  top: -85px;
  left: -30px;
  color: rgba(255, 255, 255, 0.3);
  font-family: sans-serif;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -2px;
}
.checkout span {
  float: right;
}

@media only screen and (max-width: 400px) {
  .book-card {
    padding-left: 60px;
    padding-top: 800px;
    /* padding-right: auto */
  }
  .but {
    padding-top: 120px;
  }
  .title {
    padding-top: 10px;
    padding-bottom: -150px;
  }
  .container {
    padding-top: 120px;
  }
  .conts {
    background-image: url("../assets/bookIDE.jpg");
    /* background-size: contain; */
    background-position: center;
    height: 100%;
    padding-top: 70px;
  }

  .cont-text {
    font-family: SF UI Display;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;

    letter-spacing: 0.02em;
    color: #ffffff;
    padding: 30px;
    text-align: left;
  }
  .vImage {
    height: 65vw;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  hooper {
    margin-top: 00px;
    padding-left: 60px;
    margin-top: 100px;
    /* padding-right: auto */
  }
  .but {
    padding-top: 30px;
    padding-left: 500px;
  }
  .heads {
    padding-bottom: 00px;
    color: green;
    font-family: "Alegreya";
    font-size: 35px;
  }
  .container {
    padding-top: 100px;
  }
  .conts {
    background-image: url("../assets/bookIDE.jpg");
  }
  .cont-text {
    font-family: SF UI Display;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.02em;
    height: 337.23px;
    color: #ffffff;
    padding: 120px;
    text-align: left;
  }
  .vImage {
    max-width: 100%;
    height: 18vw;
    object-fit: contain;
  }
}
</style>