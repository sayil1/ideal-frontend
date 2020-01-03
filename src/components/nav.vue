<template>
  <div>
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title"> <router-link to="/">IDEAL IT</router-link></div>
        <!-- <img src="../assets/ttt.png" alt="" srcset=""> -->
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a class="dropdown">
          <button class="dropbtn">
            About Us
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/about">Who we are</a>
            <a href="/gal">Gallery</a>
            <a href="#">Career</a>
          </div>
        </a>

         <a class="dropdown">
          <button class="dropbtn">
            Take An Exam
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">TOEFL</a>
            <a href="#">PEARSON VUE</a>
            
          </div>
        </a>

        <a class="dropdown">
          <button class="dropbtn">
            What we do
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Professional Examination</a>
            <a href="#">Icm Uk Qualification</a>
            <a href="#">Train The Trainer Workshop</a>
            <a href="#">Test Preparation</a>
             <a href="#">Oversees Admission Consultiong</a>
          </div>
        </a>
       
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>

<script>
export default {};
</script>

<style lang="css" scooped>
.nav {
  height: 50px;
  width: 100%;
  float: right;
  background-color: #4d4d4d;
  position: fixed;
  z-index: 9999;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  /* display: inline-block; */
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav-links {
  float: right;
}

.nav > .nav-links {
  display: inline;
  font-size: 18px;
}

.nav > .nav-links > a {
  /* display: inline-block; */
  float: left;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #e9e4e0;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(250, 233, 233, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: #333
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>