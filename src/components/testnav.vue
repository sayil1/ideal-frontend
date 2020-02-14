<template>
  <div style="z-index:5; width:100%" class="sticky">
    <div
      class="navbar-brand p-3 pl-6"
      style="background-color:black; width:100%; color:white; font-size:15px"
    >
      <div class="row">
        <div class="col-md-2 col-sm-12">
          <v-icon size="20" color="orange darken-2" right>mdi-phone</v-icon>(+234) 9030031914
        </div>
        <div  class="col-md-10 col-sm-12">
          <v-icon size="20" color="orange darken-2" right>mdi-mail</v-icon>info@ideal-nig.org
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-md bg-white" style="color:black; z-index:5;">
      <!-- One of the primary actions on mobile is to call a business - This displays a phone button on mobile only -->
      <div class="navbar-toggler-right" style="color:green">
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
        <img src="../assets/idealng.png" alt style="height:40px; " />
      </div>

      <div class="collapse navbar-collapse flex-column" id="navbar">
        <ul class="navbar-nav w-100 justify-content-center px-3">
          <li class="nav-item active">
            <a class="nav-link" href="/" style="color:black">
              Home
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
              style="color:black"
            >About Us</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/about">who we are</a>
              <a class="dropdown-item" href="/gal">gallery</a>
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
            >What we do</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="prof">Professional Education</a>
              <a class="dropdown-item" href="icm">ICM UK Qualification</a>
              <a class="dropdown-item" href="train">Train the Trainer Workshop</a>
              <a class="dropdown-item" href="test">Test Preparation</a>
              <a class="dropdown-item" href="over">Over Seas Admission Consulting</a>
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
            >Take an exam</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
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
            >Dropdown link</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
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
  font-size: 25px;
}
.nav-link {
  color: black !important;
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