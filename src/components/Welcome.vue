<template>
  <div class="welcome-page ">
    <Navbar />
    <h1 class="welcome-page__header">
      Mikołaj Ewald
    </h1>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Welcome',
  components: {
    Navbar
  }
}
</script>
