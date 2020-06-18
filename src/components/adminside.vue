<template>
  <div style="position:fixed;">
    <ul class="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" style="  box-shadow: 5px 10px 18px #888888;">
      <!-- Sidebar - Brand -->
      <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="admin.html">
        <div class="sidebar-brand-icon rotate-n-15">
       jbknj
        </div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link class="nav-link" to="/">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <h3 style="color:orange">IDEAL IT</h3>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Menu</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item"></li>

      <li class="nav-item">
        <router-link class="nav-link" to="/adminIndex" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="red">mdi-party-popper</v-icon>
          <span>Events</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/adminNews" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="green">mdi-party-popper</v-icon>
          <span>News</span>
        </router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/adminBooks" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="purple">mdi-book</v-icon>
          <span>Books</span>
        </router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/Addiy" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="yellow">mdi-circle</v-icon>
          <span>DIY Kits</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Adweb" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="magenta">mdi-web</v-icon>
          <span>Webinars</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Adcontest" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="orange">mdi-trophy</v-icon>
          <span>Contests</span>
        </router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="#" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="white">mdi-laptop</v-icon>
          <span>Projects</span>
        </router-link>
      </li> -->

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">-----</div>

      <!-- Nav Item - Pages Collapse Menu -->

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Logout</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
    
    </ul>
  </div>
</template>
