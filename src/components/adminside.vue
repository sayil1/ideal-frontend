<template>
  <div style="position:fixed;">
    <ul class="navbar-nav sidebar "  id="accordionSidebar" style="background-color:#1b6761; color:white; box-shadow: 5px 10px 18px #888888;">
      <!-- Sidebar - Brand -->
    

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link class="nav-link" to="/">
          <img src="../assets/logo.png" alt style="height:70px; " />
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <!-- <div class="sidebar-heading">Menu</div> -->

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item"></li>

      <li class="nav-ite" style="padding:10px">
        <router-link class="nav-link" to="/adminIndex" aria-expanded="true" aria-controls="collapseThree">
          <v-icon  color="white" medium >mdi-glass-wine</v-icon>
          <span style="color:white; padding:10px">Events</span>
        </router-link>
      </li>
      <!-- <li class="nav-ite" style="padding:10px">
        <router-link class="nav-link" to="/adminNews" aria-expanded="true" aria-controls="collapseThree">
          <v-icon color="white" mediaum >mdi-newspaper</v-icon>
          <span style="color:white; padding:10px">News</span>
        </router-link>
      </li> -->
       <li style="padding:10px">
        <router-link class="nav-link" to="/adminBooks" aria-expanded="true" aria-controls="collapseThree">
          <v-icon medium color="white">mdi-book-open</v-icon>
          <span style="">Books</span>
        </router-link>
      </li>
       <li style="padding:10px">
        <router-link class="nav-link" to="/Addiy" aria-expanded="true" aria-controls="collapseThree">
          <v-icon medium color="white">mdi-content-cut</v-icon>
          <span>DIY Kits</span>
        </router-link>
      </li>
      <li style="padding:10px">
        <router-link class="nav-link" to="/Adweb" aria-expanded="true" aria-controls="collapseThree">
          <v-icon medium color="white">mdi-account-group</v-icon>
          <span>Webinars</span>
        </router-link>
      </li>
      <li style="padding:10px">
        <router-link class="nav-link" to="/Adcontest" aria-expanded="true" aria-controls="collapseThree">
          <v-icon medium color="white">mdi-trophy</v-icon>
          <span>Contests</span>
        </router-link>
      </li>
        <li style="padding:10px">
        <router-link class="nav-link" to="/email-updates" aria-expanded="true" aria-controls="collapseThree">
          <v-icon medium color="white">mdi-mail</v-icon>
          <span>Email Updates</span>
        </router-link>
      </li>
   
 <hr style="color:white" class="sidebar-divider d-none d-md-block" />
      <li class="">
        <router-link class="nav-link" to="/">
           <v-icon medium color="white">mdi-logout</v-icon>
          <span>Logout</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
    
    </ul>
  </div>
</template>

<style lang="css">
li span{
  color:white;
  padding:10px
}
</style>
