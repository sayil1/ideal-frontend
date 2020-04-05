<template>
  <div>
      <nava/>
    <div id="app">
    
      <div class="header">
        <h2>Comics</h2>
        <!-- <div style="margin-right:px">
          <button
            @click="showCart = !showCart"
            v-show="!verified"
          >items {{quantity }} {{ (items.length > 1 || items.length === 0 ? " items" : " item") }}</button>
        </div>-->
        <button
          style="background-color:orange; margin-top:20px; padding:20px"
          type="button"
          class="btn btn-lg btn-primary"
          @click="showCart = !showCart"
          v-show="!verified"
        >
          <v-icon dark>mdi-cart</v-icon>
          <span
            class="badge badge-light"
            style="padding:10px"
          >{{quantity }} {{ (items.length > 1 || items.length === 0 ? " items" : " item") }}</span>
        </button>
        <button
          v-if="quantity>=1"
          style="background-color:orange; margin-top:20px; padding:23px; margin-left:30px"
          type="button"
          class="btn btn-lg btn-primary"
          @click="showCart = !showCart"
          v-show="!verified"
        >
          <v-icon dark></v-icon>
          <span>View Cart and Checkout</span>
        </button>
      </div>
      <div class="cart" v-show="showCart">
        <div v-show="items.length > 0">
          <ul>
            <li v-for="(item, i) in items" :key="i" transition="fade">
              <p>
                <strong>{{ item.quantity }}</strong>
                - {{ item.name }}
                <v-icon
                  size="20"
                  color="red darken-2"
                  right
                  style="padding-right:10px"
                  @click="removeFromCart(item)"
                >mdi-delete</v-icon>
                <!-- <i class="mdi-trash" @click="removeFromCart(item)"></i> -->
              </p>
            </li>
          </ul>
          <div>
            <v-btn
              class="ma-2"
              tile
              color="indigo"
              dark
              @click="verified = true, showCart = false"
            >Check out</v-btn>

            <!-- <button @click="verified = true, showCart = false">Check out</button> -->
          </div>
        </div>
        <div v-show="items.length === 0">
          <p>Your cart is empty!</p>
        </div>
      </div>
      <div class="container">
        <div class="shop" v-show="!verified">
          <h3>New Arrivals</h3>
          <div class="row">
            <div class="card m-3" style="width: 15rem;" v-for="(item,i) in shop" :key="i">
              <img class="card-img-top" src="../assets/first.jpeg" alt="Card image cap" />
              <div class="card-body">
                <strong class="card-title">{{ item.name }}</strong>
                <p class="card-text">NGN {{ item.price }}</p>
                <!-- <a href="#" class="btn btn" @click="addToCart(item)">Add to cart</a> -->
            
                <v-btn @click="addToCart(item)" class="ma-2" tile  color="blue">
                  <v-icon left>mdi-plus</v-icon>add to cart
                </v-btn>
              </div>
            </div>
          </div>

          <!-- <ul>
            <li v-for="(item,i) in shop" :key="i">
              <div>
                <h5>{{ item.name }}</h5>
                <p>${{ item.price }}</p>
                <button @click="addToCart(item)">Add to cart</button>
              </div>
            </li>
          </ul>-->
        </div>
        <div class="checkout" v-show="verified">
          <h5 v-for="(item,i) in items" :key="i">
            <strong>{{ item.quantity }}</strong>
            - {{ item.name }}
            <span>${{ item.price * item.quantity }}</span>
          </h5>
          <hr />
          <div class="row">
            <div>
              <h5>
                Total:
                <span>{{ total }}</span>
              </h5>

              <v-btn @click="verified=false" class="ma-2" tile color="indigo" dark>Back to books</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nava from '../components/newNav'
export default {
  components:{
             nava
  }, 
  data: () => ({
    shop: [
      {
        id: "qw12122324dewe332324212",
        name: "Things Fall Apart",
        price: 10.02,
        quantity: 0
      },
      {
        id: "qw12122324dew34ds324212",
        name: "American Writers",
        price: 22.98,
        quantity: 0
      },
      {
        id: "qw12122345665fcgfe332324212",
        name: "Dragon Ball Freeza Arc,",
        price: 15.98,
        quantity: 0
      },
      {
        id: "qw12122324dewe33298hguytfgyt44",
        name: "Uzumaki: Spiral into Horror,",
        price: 4.84,
        quantity: 0
      },
      {
        id: "qw121gcjghcvjgc332324212",
        name: "Superman: Red Son (New Edition)",
        price: 10.93,
        quantity: 0
      }
    ],
    items: [],
    showCart: false,
    verified: false,
    quantity: 0
  }),
  computed: {
    total() {
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i].price * this.items[i].quantity;
      }
      return total;
    }
  },
  watch: {},
  methods: {
    addToCart(itemToAdd) {
      // let found = false;

      // Add the item or increase qty
      let itemInCart = this.items.filter(item => item.id === itemToAdd.id);

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
      this.items.splice(item, 1);
      this.quantity -= item.quantity;
    }
  }
};
</script>

<style>
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
.header button {
  border: 0;
  background: #ffdbe0;
  transition: all 0.1s ease-out;
}
.header button:hover {
  background: #ffd1d7;
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

.cart > div {
  z-index: 100;
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

@media screen and (max-width: 630px) {
  .checkout {
    padding: 30px 40px;
  }
  .checkout h5 {
    font-size: 1.2em;
  }
}
@media screen and (max-width: 550px) {
  .shop h3,
  .checkout h3 {
    font-size: 3.3em;
    top: -70px;
    left: 0px;
  }
}
</style>