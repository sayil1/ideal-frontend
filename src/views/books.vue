<template>
  <div style="background-color: black">
    <nava />
    <div style="padding: 5px" class="arch">
      <div
        style="margin-top: 160px; margin-bottom: 100px"
        class="carouselHolde"
      >
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          cycle
          style="max-height: 400px; margin: auto; max-width: 1000px"
          :show-arrows="false"
          interval="3000"
          height="100"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet style="background: rgba(0, 0, 0, 0.5)" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div style="text-align: center" class="text-wrap display-2">
                  {{ slide }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class>
      <vue-position-sticky :offsetTop="84" style="z-index: -2000">
        <div class="row" style="background-color: black; padding: 2px">
          <div style class="col-sm-8 col-8">
            <div class="search-bar" style="">
              <div class="input-group">
                <input
                  v-model="search"
                  type="text"
                  width="100%"
                  class="form-control"
                  placeholder="Search by title, category.."
                  style="
                    background-color: rgb(64, 64, 64);
                    color: white;
                    outline: none;
                    border-top-style: hidden;
                    border-right-style: hidden;
                    border-left-style: hidden;
                    border-bottom-style: hidden;
                    width: 50px;
                  "
                />
                <div class="input-group-append">
                  <button
                    class="btn"
                    style="
                      background-color: rgb(64, 64, 64);
                      outline: none;
                      border-top-style: hidden;
                      border-right-style: hidden;
                      border-left-style: hidden;
                      border-bottom-style: hidden;
                    "
                    type="button"
                    @click="getBooks()"
                  >
                    <v-icon color="white" small>mdi-magnify</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style="z-index: 200" class="col-sm-2 col-2">
            <div class="row">
              <div style="0px 15px 0px; color:white ; padding-left:100%">
                <v-badge
                  class=""
                  bordered
                  :content="quantity"
                  :value="quantity"
                  style="color: blue"
                  color="red"
                  overlap
                >
                  <v-icon @click="showCart = !showCart" color="white" large
                    >mdi-cart</v-icon
                  >
                </v-badge>
                <!-- <span style="color:white">Cart</span> -->
              </div>
            </div>
          </div>
        </div>
      </vue-position-sticky>
    </div>
    <div
      style="
        padding: 55px;
        color: rgb(0, 255, 0);
        background-color: rgb(64, 64, 64);
        text-align: center;
        letter-spacing: 0.4em;
      "
    >
      WHERE ALL STORIES BEGIN
    </div>

    <div id="app" style>
      <vue-position-sticky :offsetTop="150" style="z-index: -200">
        <div class="cart" v-show="showCart">
          <div
            v-show="items.length > 0"
            style="position: ; background-color: #1b6761"
          >
            <ul>
              <li v-for="(item, i) in items" :key="i" transition="fade">
                <div
                  style="
                    font-family: Alegraya;
                    color: white;
                    margin: 0px;
                    padding: 0px;
                  "
                  class="row"
                >
                  <div class="col-10" style="text-align: left">
                    <strong>{{ item.quantity }}X</strong>
                    - {{ item.title }}
                  </div>

                  <v-icon
                    style="margin: 0px"
                    class="col-2"
                    size="20"
                    color="white"
                    right
                    @click="removeFromCart(item)"
                    >mdi-delete</v-icon
                  >
                  <!-- <i class="mdi-trash" @click="removeFromCart(item)"></i> -->
                </div>
              </li>
              <br />
            </ul>
            <div class="row">
              <v-btn
                class="ma-2"
                tile
                color="white"
                depressed
                small
                outlined
                data-toggle="modal"
                data-target="#exampleModalCenter"
                @click="(verified = true), (showCart = false), (hopper = false)"
                >Check out</v-btn
              >
              <v-btn
                class="ma-2"
                tile
                color="white"
                depressed
                small
                outlined
                @click="clearCart()"
                >Clear Cart</v-btn
              >

              <!-- <button @click="verified = true, showCart = false">Check out</button> -->
            </div>
          </div>
          <div style="z-index: 1" v-show="items.length === 0">
            <p>Your cart is empty!</p>
          </div>
        </div>
      </vue-position-sticky>

      <div class="containe">
        <div class="header-text" style="padding-top: 70px">New Arrival</div>

        <v-sheet
          class="mx-auto"
          max-width="1100"
          style="background: rgba(76, 175, 80, 0)"
        >
          <v-slide-group
            multiple
            show-arrows
            show-delimiters
            prev-icon="mdi-chevron-left"
            next-icon="mdi-chevron-right"
          >
            <v-slide-item v-for="(item, i) in shopsToDisplay" :key="i">
              <div class="m-3 bookSize">
                <div style="background-color: rgb(230, 230, 230)">
                  <v-img
                    style=""
                    class="white--text align-end vImage"
                    v-bind:src="item.imagesPath"
                  ></v-img>

                  <div style="padding-top: 10px">
                    <div
                      style="
                        padding-left: 7%;
                        padding-right: 7%;
                        margin-top: -10px;
                      "
                    >
                      <div
                        class="card-title"
                        style="font-size: 15px; color: #092e2b"
                      >
                        <strong
                        class="text-wrap"
                          style="
                            overflow-wrap: break-word;
                            word-wrap: break-word;
                            -ms-word-break: break-all;                            
                            word-break: break-all;                        
                            word-break: break-word;                         
                            -ms-hyphens: auto;
                            -moz-hyphens: auto;
                            -webkit-hyphens: auto;
                            hyphens: auto;
                          "
                          >{{ item.title }}</strong
                        >
                        <br />
                        <v-tooltip style="background-color: red" bottom>
                          <template  v-slot:activator="{ on, attrs }">
                            <i  v-bind="attrs" v-on="on">{{
                              item.description | truncate(15, "...")
                            }}</i>
                            <br />
                          </template>
                          <span>{{ item.description }}</span>
                        </v-tooltip>
                        <br />
                        <!-- <div style="font-size:12px;">By Austin MAikano</div> -->
                        <strong style="font-size: 13px; color: red"
                          >N{{ item.price }}</strong
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  @click="addToCart(item)"
                  data-dismiss="modal"
                  style="background-color: rgb(0, 204, 0)"
                  class="btn btn-block"
                >
                  Add to cart
                </button>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
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
            ></div>
          </div>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                class="checkout"
                v-show="verified"
                style="font-family: Alegreya"
              >
                <h5 v-for="(item, i) in items" :key="i">
                  <strong>{{ item.quantity }}</strong>
                  - {{ item.title }}
                  <span>NGN {{ item.price * item.quantity }}</span>
                </h5>
                <hr />
                <div class="row">
                  <div>
                    <h5>
                      Total:
                      <span style="color: red">NGN {{ total }}</span>
                    </h5>

                    <div class="row">
                      <v-btn
                        @click="verified = false"
                        class="ma-2"
                        outlined
                        tile
                        small
                        color="#1b6761"
                        dark
                        >Back to books</v-btn
                      >
                      <paystack
                        :amount="amount"
                        :email="email"
                        :paystackkey="paystackkey"
                        :reference="reference"
                        :callback="callback"
                        :close="close"
                        :embed="false"
                      >
                        <v-btn small tile color="red" dark>Make Payment</v-btn>
                      </paystack>
                      <br />
                    </div>
                  </div>
                </div>
                <hr />
                <p style="color: green; text-align: center">OR</p>
                <hr />
                <p style="text-align: center">
                  pay <strong>NGN{{ total }}</strong> to this account<br />
                  Account Number: 9202157715; <br />
                  Account Name: Initiative for development, Education and Learning; <br />
                  Bank: Stanbic IBTC.
                </p>
                <hr />
                <p>Send details to info@ideal-nig.org OR whatsapp 08030493091</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- this holds the category cards -->
    <div class="greenBack">
      <div class="header-text" style="padding-top: 60px">Collections</div>
      <v-sheet
        class="mx-auto"
        max-width="1100"
        style="background: rgba(76, 175, 80, 0)"
      >
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="(cat, n) in category" :key="n">
            <div style="padding: 10px">
              <v-card
                class="mx-auto"
                max-width="250"
                style="
                  background-color: rgb(121, 210, 166);
                  color: rgb(0, 51, 0);
                "
              >
                <v-img
                  class="white--text align-end"
                  height="150px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-title>{{ cat.name }}</v-card-title>

                <v-card-text class style="color: rgb(0, 51, 0)">
                  <div>{{ cat.description }}</div>
                </v-card-text>

                <v-card-actions
                  style="padding-left: 80%; cursor: pointer"
                  @click="getBooksByFilter(cat)"
                >
                  <v-icon style color="black darken-2"
                    >mdi-arrow-right-circle-outline</v-icon
                  >
                </v-card-actions>
              </v-card>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>

    <div class="row header-text" style="padding-top: 70px">
      <div class="col-6">Books Store</div>
      <!-- <div class="col-6" style="padding-right:150px;text-align:right; color:rgb(0, 255, 0)">view all</div> -->
      <div
        class="col-6"
        style="cursor: pointer; color: rgb(0, 255, 0); text-align: right"
        @click="
          showLessBooks = !showLessBooks;
          getBooksByFilter();
        "
      >
        {{ showLessBooks === true ? "Show All Books" : "Show Less" }}
      </div>
    </div>
    <v-sheet
      v-show="showLessBooks"
      class="mx-auto"
      max-width="1100"
      color:red
      style="background-color: black"
    >
      <v-slide-group
        multiple
        show-arrows
        show-delimiters
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
      >
        <v-icon slot="prependIcon" large color="primary">mdi-home</v-icon>
        <v-slide-item v-for="(item, i) in shopsToDisplay" :key="i">
          <div class="m-3 bookSize">
            <v-img
              style=""
              class="white--text align-end vImage"
              v-bind:src="item.imagesPath"
            ></v-img>
            <div style="background-color: white; padding-top: 10px">
              <div>
                <div
                  style="padding-left: 7%; padding-right: 7%; margin-top: -10px"
                >
                  <div
                    class="card-title"
                    style="font-size: 15px; color: #092e2b"
                  >
                    <strong class="text-wrap">{{ item.title }}</strong> <br>
                     <v-tooltip style="background-color: red" bottom>
                          <template  v-slot:activator="{ on, attrs }">
                            <i  v-bind="attrs" v-on="on">{{
                              item.description | truncate(15, "...")
                            }}</i>
                            <br />
                          </template>
                          <span>{{ item.description }}</span>
                        </v-tooltip>
                  <br>
                    <strong style="font-size: 13px; color: red"
                      >N{{ item.price }}</strong
                    >
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              @click="addToCart(item)"
              data-dismiss="modal"
              style="background-color: rgb(0, 204, 0)"
              class="btn btn-block"
            >
              Add to cart
            </button>
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <!-- this will show all the books -->

    <div
      class="row"
      v-show="showLessBooks == false"
      style="margin-left: 5px; margin-right: 5px"
    >
      <div v-for="(item, i) in shopsToDisplay" :key="i">
        <div class="m-3 bookSize">
          <v-img
            style=""
            class="white--text align-end vImage"
            v-bind:src="item.imagesPath"
          ></v-img>
          <div style="background-color: white; padding-top: 10px">
            <div>
              <div
                style="padding-left: 7%; padding-right: 7%; margin-top: -10px"
              >
                <div class="card-title" style="font-size: 15px; color: #092e2b">
                  <strong>{{ item.title }}</strong>
               
                  <strong style="font-size: 13px; color: red"
                    >N{{ item.price }}</strong
                  >
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            @click="addToCart(item)"
            data-dismiss="modal"
            style="background-color: rgb(0, 204, 0)"
            class="btn btn-block"
          >
            Add to cart
          </button>
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
    slides: [
      "African Literature",
      "Kids Novels",
      "Science and Tech",
      "GRE | GMAT | SAT",
      "Free Books",
    ],
    category: [
      {
        name: "African Literature",
        filter: "african",
        img: "",
        description: "continue",
      },
      { name: "Kids Novels", img: "", filter: "kids", description: "continue" },
      {
        name: "IELTS | TOEFL | IELTS,",
        filter: "ielts",
        img: "",
        description: "continue",
      },
      {
        name: "Science and Tech",
        filter: "science",
        img: "",
        description: "continue",
      },
      {
        name: "GRE | GMAT | SAT",
        filter: "gre",
        img: "",
        description: "continue",
      },
      { name: "Free Books", filter: "free", img: "", description: "continue" },
    ],
    hooperSettings: {
      itemsToShow: null,
      centerMode: true,
      infiniteScroll: true,
      progress: true,
      autoreplay: true,
      playspeed: 1000,
    },
    e: [],
    search: "",
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
      // this.getBooks();

      // if (this.showLessBooks) {
      //   return this.shop.filter((post) => {
      //     return post.title
      //       .toLowerCase()
      //       .includes(this.search.toLowerCase().slice(0, 8)) ;
      //   });
      // } else {
      //   return this.shop.filter((post) => {
      //     return post.title.toLowerCase().includes(this.search.toLowerCase());
      //     // eslint-disable-next-line no-console
      //     console.log(this.search);
      //   });
      // }
      return this.shop;
    },
    // filteredList(filter) {
    //   return this.shop.filter((post) => {
    //     return post.title.toLowerCase().includes(filter.toLowerCase());
    //   });
    // },
  },
  created() {
    this.getBooks();
  },

  methods: {
    getBooks() {
      serv
        .getRequest(`books/allBooks/${this.search}`)
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

    getBooksByFilter(item) {
      serv
        .getRequest(`books/allBookscat/${item.filter}`)
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
          console.log(e);
        });
      console.log(this.shop);
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
        // alert("not found , add pls");
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
      // alert(dis);

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
.header-text {
  color: white;
  text-align: left;
  font-size: 25px;
  padding-left: 12%;
  padding-right: 12%;
}
.search-bar {
  width: 40%;
  margin-left: 60px;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.greenBack {
  background-image: url("./../assets/greenbgg.jpg");
}

.bookSize {
  width: 13.5rem;
}
.arch {
  background-image: url("../assets/book-background.jpg");
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
.cart {
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
  color: #1b6761;

  padding: 50px 60px;
}
.checkout h3 {
  margin: 0%;
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
  .bookSize {
    width: 8.5rem;
  }
  .header-text {
    color: white;
    text-align: center;
    font-size: 15px;
    padding: 0px;
  }
  .search-bar {
    width: 100%;
    margin-left: 10px;
  }
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
    height: 35vw;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .hooper {
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
    height: 15vw;
    object-fit: contain;
  }
}
</style>