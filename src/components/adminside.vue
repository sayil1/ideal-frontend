<template>
  <div>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <!-- Sidebar - Brand -->
      <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="admin.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link class="nav-link" to="adminIndex">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>IDEAL IT</span>
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
          <v-icon small color="white">mdi-party-popper</v-icon>
          <span>Events</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/adminNews" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="white">mdi-party-popper</v-icon>
          <span>News</span>
        </router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/adminBooks" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="white">mdi-book</v-icon>
          <span>Books</span>
        </router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/Addiy" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="white">mdi-circle</v-icon>
          <span>DIY Kits</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Adweb" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="white">mdi-web</v-icon>
          <span>Webinars</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Adcontest" aria-expanded="true" aria-controls="collapseThree">
          <v-icon small color="white">mdi-trophy</v-icon>
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
      <div class="sidebar-heading">Addons</div>

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
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  </div>
</template>
