<script setup>
// import HomeComponent from './views/HomeComponent.vue'
</script>

<template>
  <!-- <HomeComponent /> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li> -->
        <li class="nav-item">
         <router-link to="/signup" class="nav-link">signup</router-link>
        </li>
        <router-link :to="{name: 'about'}" class="nav-link">about</router-link>
         <router-link to="/home" class="nav-link">home</router-link>
      </ul>
    </div>
  </div>
</nav>

  <router-view/>
</template>

<style scoped>

</style>
