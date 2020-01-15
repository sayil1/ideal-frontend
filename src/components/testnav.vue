<template>
  <div>
    <!-- for first nav -->

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <a style="color:white" href="#">Ideal-It Center</a>
        <!-- <img src="../assets/logo.png" alt="..." class="img-thumbnail"> -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >About Us</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/about">Who we are</router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/gal">Gallery</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Career</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >What we do</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/prof">Professional Examination</router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/icm">ICM UK Qualification</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/train">Train The Trainer Workshop</a>
                 <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/test">Test Preparation</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/over">Overseas Admission Consulting</a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Take an exam</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <a class="dropdown-item" href="/toefl">TOEFL</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/pearson">PEARSON VUE</a>
                <div class="dropdown-divider"></div>
              </div>
            </li>
           <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Project</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/it-center">IT-Center</router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/gal">Career Development Hub</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Career</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
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
</style>

<style lang="css">
@import "../index.css";
</style>