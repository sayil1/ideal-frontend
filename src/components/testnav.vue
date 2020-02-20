<template>
  <div style="z-index:5; width:100%" class="sticky">
    <div
      class="navbar-brand p-0 pl-6"
      style="background-color:black; width:100%; color:white; font-size:15px"
    >
      <div class="row">
        <div class="col-md-2 col-sm-12">
          <v-icon size="20" color="orange darken-2" right>mdi-phone</v-icon>(+234) 9030031914
        </div>
        <div class="col-md-1 col-sm-12">
          <v-icon size="20" color="orange darken-2" right>mdi-mail</v-icon>info@ideal-nig.org
        </div>
        <div class="col-md-6"></div>

        <div class="row" style="float:right;">
          <v-icon size="20" color="white darken-2" right>mdi-facebook</v-icon>
          <v-icon size="20" color="white darken-2" right>mdi-twitter</v-icon>
          <v-icon size="20" color="white darken-2" right>mdi-google-plus</v-icon>
          <v-icon size="20" color="white darken-2" right>mdi-linkedin</v-icon>
            <v-icon size="20" color="white darken-2" right>mdi-instagram</v-icon>
               <v-icon size="20" color="white darken-2" right>mdi-pinterest</v-icon>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-md bg-white" style="color:yellow; z-index:5;">
      <!-- One of the primary actions on mobile is to call a business - This displays a phone button on mobile only -->
      <div class="navbar-toggler-right style">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <v-icon color="orange">mdi-menu</v-icon>
          </span>
        </button>
      </div>
      <div>
        <img src="../assets/idealng.png" alt style="height:30px; " />
      </div>

      <div class="collapse navbar-collapse flex-column" id="navbar">
        <ul class="navbar-nav w-100 justify-content-center px-3">
          <li class="nav-item active">
            <a class="nav-link" href="/" style="font-size:15px;font-weight: 900;">
              HOME
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; font-size:15px; font-weight: 900;"
            >ABOUT US</a>
            <div class="dropdown-menu" aria-labelledby style="background-color:orange">
              <a class="dropdown-item" href="/about" style="color:white; background-color:orange">WHO WE ARE</a>
              <a class="dropdown-item" href="/gal"  style="color:white; background-color:orange">GALLERY</a>
              <!-- <a class="dropdown-item" href="#">Something else here</a> -->
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; font-size:15px; font-weight: 900;"
            >WHAT WE DO</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="background-color:orange">
              <a class="dropdown-item" href="prof"  style="color:white; background-color:orange">PROFESSIONAL EDUCATION</a>
              <a class="dropdown-item" href="icm"  style="color:white; background-color:orange">ICM UK QUALIFICATION</a>
              <a class="dropdown-item" href="train"  style="color:white; background-color:orange">TRAIN THE TRAINER WORKSHOP</a>
              <a class="dropdown-item" href="test"  style="color:white; background-color:orange">TEST PREPARATION</a>
              <a class="dropdown-item" href="over" style="color:white; background-color:orange">OVER-SEAS ADMISSION CONSULTING</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; font-size:15px; font-weight: 900;"
            >TAKE AN EXAM</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="background-color:orange">
              <a class="dropdown-item" href="toefl"  style="color:white; background-color:orange">TOEFL</a>
              <a class="dropdown-item" href="pearson"  style="color:white; background-color:orange">PEARSON VUE</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; font-size:15px; font-weight: 900;"
            >PROJECTS</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="background-color:orange">
              <a class="dropdown-item" href="it-center" style=" color:white; background-color:orange">IDEAL IT CENTER</a>
              <a class="dropdown-item" href="career" style="color:white; background-color:orange">CAREER DEVELPMENT HUB</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:black; font-size:15px; font-weight: 900;"
            >RESOURCES</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"  style="background-color:orange">
              <a class="dropdown-item" href="events"  style=" color:white; background-color:orange">EVENTS</a>
              <a class="dropdown-item" href="#"  style=" color:white; background-color:orange">CONTESTS</a>
              <a class="dropdown-item" href="#"  style=" color:white; background-color:orange">WEBINARS</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="cont" style="color:black; font-size:15px; font-weight: 900;">
              CONTACT
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
export default {};
</script>
<script src="../index.js"></script>


<style>
.see {
  color: red;
}
.navbar {
  padding: 0rem;
}

.dropdown .dropdown-menu {
  border-radius: 0;
}

.sticky {
  position: fixed;
}
.nav-link:hover {
  color: orange !important;
  font-size: 21px;
}
.nav-link {
  color: black !important;
}
.dropdown-menu {
  font-size: 0px;
}
.style {
  color: brown;
}
/* Medium devices (tablets, 768px and up) 
The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
    border-radius: 0;
  }
}
</style>

<style lang="css">
/* @import "../index.css"; */
</style>