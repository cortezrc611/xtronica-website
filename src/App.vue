<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div>
    <navbar />
    <router-view /> <!-- This will render the content of each page -->
  </div>
</template>

<script setup lang="ts">
import navbar from './components/Navbar/navbar.vue';
</script>


