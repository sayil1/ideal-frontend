<template>
  <div>
    <nava />
    <div id="app" style="padding-top:90px">
      <div class="header">
        <!-- <div style="margin-right:px">
          <button
            @click="showCart = !showCart"
            v-show="!verified"
          >items {{quantity }} {{ (items.length > 1 || items.length === 0 ? " items" : " item") }}</button>
        </div>-->
        <div style=" position:fixed; z-index:200" class="but">
          <v-btn class="ma-2" tile color="success">
            <v-icon left style="color:orange">mdi-cart</v-icon>
            <span
              class="badge badge"
              style="padding:10px; color:white; font-size:20px"
            >{{quantity }}</span>
            <span style="color:white">{{ (quantity > 1 || quantity === 0 ? " items" : " item") }}</span>
          </v-btn>

          <v-btn
            v-if="quantity>=1"
            @click="showCart = !showCart"
            v-show="!verified"
            class="ma-2"
            color="success"
          >
            <v-icon dark>mdi-money</v-icon>
            <span style="color:white">Checkout</span>
          </v-btn>

          <!-- 
          <button
            v-if="quantity>=1"
            type="button"
            class="btn btn-white"
            @click="showCart = !showCart"
            v-show="!verified"
          >
            <v-icon dark></v-icon>
            <span>View Cart and Checkout</span>
          </button>-->
        </div>
      </div>
      <div class="cart" v-show="showCart">
        <div v-show="items.length > 0" style="position:fixed">
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

      <div class="container">
        <div v-if="weeksTop.lenght > 1" class="heads" v-show="!verified">Books for the week</div>
        <hooper
          :settings="hooperSettings"
          :progress="true"
          :autoPlay="true"
          :playSpeed="4000"
          style="margin-bottom:10px; margin-left:-40px; height:500px ; width:100% "
          class="row"
          v-show="!verified"
          v-if="weeksTop.lenght > 1"
        >
          <slide v-for="(item,i) in weeksTop" :key="i">
            <div style>
              <div class="card m-3" style="width: 12rem;margin-left: auto; margin-right: auto;">
                <v-img class="white--text align-center" height="300px" v-bind:src="item.imagesPath"></v-img>
                <div class="card-body">
                  <strong class="card-title">{{ item.title }}</strong>
                  <p class="card-text">NGN {{ item.price }}</p>
                  <!-- <a
                    style="text-align:center"
                    outlined
                    @click="addToCart(item)"
                    class="ma-2 orange--text"
                    tile
                    color="blue"
                  >Add to cart</a> -->
                </div>
              </div>
            </div>
          </slide>
        </hooper>
        <div v-show="!verified">
          <h3>Shop From The Best Collections!</h3>
          <div class="row">
            <div v-for="(item,i) in shop" :key="i">
              <div class="card m-3" style="width: 12rem;">
                <v-img class="white--text align-end" height="300px" v-bind:src="item.imagesPath"></v-img>
                <div class="card-body">
                  <strong class="card-title">
                    <small>{{ item.title }}</small>
                  </strong>
                  <br />
                  <small class="card-text">NGN {{ item.price }}</small>
                  <br />
                  <!-- <a
                    style="text-align:center"
                    outlined
                    @click="addToCart(item)"
                    class="ma-2 orange--text"
                    tile
                    color="blue"
                  >Add to cartss</a> -->
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    @click="openModal(item)"
                  >more..</button>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">{{ e.title }}</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <strong class="card-title">
                            <!-- <small>{{ e.title }}</small> -->

                            <div class="row">
                              <div class="card col-md-6" style="width: 18rem;">
                                <v-img
                                  class="white--text align-end"
                                  height="300px"
                                  v-bind:src="e.imagesPath"
                                ></v-img>
                              </div>
                              <div class="card-body col-md-6">
                                  <p
                                    class="card-text"
                                  >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                       <p>NGN{{e.price}}</p>
                                  
                                    <a
                    style="text-align:center"
                    outlined
                    @click="addToCart(e)"
                    class="ma-2 orange--text"
                    tile
                    color="blue"
                    data-dismiss="modal"
                  >Add to cart</a>
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
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="shop" v-show="!verified">
          <v-alert outlined color="purple">
            <div class="title">Top Books for the week</div>
            <div class="row book-card">
              <div class="card m-3" style="width: 12rem;" v-for="(item,i) in shop" :key="i">
                <v-img class="white--text align-end" height="150px" v-bind:src="item.imagesPath"></v-img>
                <div class="card-body">
                  <strong class="card-title">{{ item.title }}</strong>

                  <p class="card-text">NGN {{ item.price }}</p>
                

                  <v-btn @click="addToCart(item)" class="ma-2" tile color="blue">
                    <v-icon left>mdi-plus</v-icon>add to cart
                  </v-btn>
                </div>
              </div>
            </div>
          </v-alert>
          <h3>New Arrivals</h3>

         
        </div>-->
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
    Slide
  },
  data: () => ({
    hooperSettings: {
      itemsToShow: null,
      centerMode: true,
      infiniteScroll: true,
      progress: true,
      autoreplay: true,
      playspeed: 1000
    },
    e: [],

    hopper: true,
    shop: [],
    weeksTop: [],
    items: [],
    showCart: false,
    verified: false,
    quantity: 0,
    paystackkey: "pk_test_bb8f1b8270ac690cfac54817ebb179829ee9a694", //paystack public key
    email: "foobar@example.com", // Customer email
    amount: 600 // in kobo
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
    }
  },
  watch: {},
  created() {
    this.isMobile();
    serv
      .getRequest("books/allBooks")
      .then(response => {
        // JSON responses are automatically parsed.
        this.shop = response.data.result;

        for (let i = 0; i <= this.shop.length - 1; i++) {
          // eslint-disable-next-line no-console
          // console.log(this.shop[i], 'shops');
          let today = new Date().toISOString().substr(0, 10);
          if (this.shop[i].topTrend > today) {
            this.weeksTop.push(this.shop[i]);
          } // eslint-disable-next-line no-console
          console.log(this.weeksTop, "weeks trop");
        }
      })
      .catch(e => {
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
    callback: function(response) {
      console.log(response);
    },
    close: function() {
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
      let itemInCart = this.items.filter(item => item._id === itemToAdd._id);
      let isItemInCart = itemInCart.length > 0;
      if (isItemInCart === false) {
        this.items.push(itemToAdd);
        itemToAdd.quantity = 1;
        this.quantity += 1;
        //  itemInCart[0].quantity += 1;
        // alert("not found , add pls")
      } else {
        itemToAdd.quantity += 1;
        this.quantity += 1;
        // alert(itemToAdd.id)
      }
      // itemToAdd.quantity = 1;
    },

    removeFromCart(item) {
      // item.quantity -= 1;
      //  let itemInCart = this.items.filter(item => item.id === itemToAdd.id);
      let dis = this.items.findIndex(x => x.id === item.id);
      alert(dis);

      this.items.splice(dis, 1);
      this.quantity -= item.quantity;
    },
    clearCart() {
      this.items = [];
      this.quantity = 0;
    }
  }
};
</script>

<style scoped lang="css">
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
}
</style>