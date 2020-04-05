<template>
  <div>
    <div
      class="navbar-brand pl-6"
      style="background-color:black; width:100%; color:white; font-size:15px"
    >
      <div class="row">
        <div class="col-md-1 col-sm-4" style="margin-right:90px">
          <v-icon size="20" color="green darken-2" right>mdi-phone</v-icon>(+234) 9030031914
        </div>
        <div class="col-md-1 col-sm-4">
          <v-icon size="20" color="green darken-2" right style="padding-right:5px">mdi-mail</v-icon>info@ideal-nig.org
        </div>
        <div class="col-md-6"></div>

        <div class="row icons">
          <v-icon size="20" color="orange darken-2" right style="padding-right:10px">mdi-facebook</v-icon>
          <v-icon size="20" color="orange darken-2" right style="padding-right:10px">mdi-twitter</v-icon>
          <v-icon size="20" color="orange darken-2" right>mdi-instagram</v-icon>
          <v-icon size="20" color="orange darken-2" right>mdi-linkedin</v-icon>
        </div>
      </div>
    </div>
    <div style="margin-bottom:-2px" class="navbar navbar-expand-md navbar- bg-" role="navigation" >
      <div>
        <router-link to="/">
          <img src="../assets/idealng.png" alt style="height:30px; " />
        </router-link>
      </div>

      <button
        style=""
        class="navbar-toggler btn-primary bg-success"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div style class="nava collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active"></li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/" style>
              HOME
              <span class="sr-only">(current)</span>
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdown1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >ABOUT US</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown1">
              <li class="dropdown-item">
                <router-link to="about" class="route">
                  <a>WHO WE ARE</a>
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="GAL" class="route">GALLERY</router-link>
              </li>
              <ul></ul>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdown1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >WHAT WE DO</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown1">
              <li class="dropdown-item">
                <router-link class="route" to="capacity">CAPACITY DEVELOPMENT</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="sport">SPORT DEVELOPMENT</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="digital">DIGITAL INCLUSION</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="train">TRAIN-THE-TRAINERS</router-link>
              </li>
              <li class="dropdown-item dropdown">
                <a
                  class="dropdown-toggle"
                  id="dropdown1-1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >EXAM TEST CENTER</a>
                <ul class="dropdown-menu sub" aria-labelledby="dropdown1-1">
                  <li>
                    <router-link class="route" to="toefl">TOEFL</router-link>
                  </li>
                  <li>
                    <router-link class="route" to="pearson">PEARSON VUE</router-link>
                  </li>
                  <li>
                    <router-link class="route" to="icm">ICM UK QUALIFICATION</router-link>
                  </li>
                </ul>
              </li>
              <ul></ul>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdown1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >IDEAL IT CENTER</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown1">
              <li class="dropdown-item">
                <router-link class="route" to="prof">PROFESSIONAL IT COURSES</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="test">TEST PREPARATION</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="career">CAREER DEVELOPMENT</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="over">OVER-SEAS ADMISSION CONSULTING</router-link>
              </li>

              <ul></ul>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdown1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >SHOPS</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown1">
              <li class="dropdown-item">
                <router-link class="route" to="books">BOOKS</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="test">DIY KITS</router-link>
              </li>

              <ul></ul>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdown1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >MEDIA</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown1">
              <li class="dropdown-item">
                <router-link class="route" to="books">EVENTS</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="test">CONTESTS</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="route" to="test">WEBINARS</router-link>
              </li>

              <ul></ul>
            </ul>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/" style>
              CONTACT
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 <script src="../index.js"></script>
<script>
export default {};
</script>

<style lang="css" scoped>
.navbar-nav li:hover > ul.dropdown-menu {
  display: block;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
}
.nav-link {
  color:green;
  /* font-weight: bold; */
  font-size: 15px;
}
.nav-link:hover {
  color: orange !important;
}
.sub {
  color: green;
  background-color: orange;
}
.dropdown-item {
  margin-left: -10px;
  margin-right: auto;
  border-top: 2px solid white;
  color: green;
  background-color: orange;
}
.dropdown-item .route {
  color: black;
}
.dropdown-item :hover {
  background-color: white !important;
  color: orange !important;
  text-decoration: none;
}
.navbar .dropdown-toggle,
.navbar .dropdown-menu a {
  cursor: pointer;
}

.navbar .dropdown-item.active,
.navbar .dropdown-item:active {
  color: inherit;
  text-decoration: none;
  background-color: inherit;
  
}

.navbar .dropdown-item:focus,
.navbar .dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}
@media only screen and (max-width: 400px) {
  .nava {
    margin-left: 1%;
  }
  .icons {
    margin-left: 20px;
    margin-top: -20px;
    margin-bottom: 10px;
  }
}

@media (min-width: 767px) {
  .navbar .dropdown-toggle:not(.nav-link)::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.5em;
    vertical-align: 0;
    border-bottom: 0.3em solid transparent;
    border-top: 0.3em solid transparent;
    border-left: 0.3em solid;
  }
  .nava {
    margin-left: 30%;
  }
}
</style>