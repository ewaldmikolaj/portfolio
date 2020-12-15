<template>
  <div class="about-page ">
    <Navbar />
    <h2 class="about-page__header">
      O mnie
    </h2>
    <img
      class="about-page__image"
      src="./../assets/photo.jpg"
      alt=""
    >
    <p class="about-page__text">
      Cześć! Jestem rozwijającym się web developerem. W wolnych chwilach czytam książki oraz ćwiczę. Ukończyłem technikum informatyczne, a aktualnie jestem studentem Uniwersytetu im. Adama Mickiewicza. Bardzo lubię programować i poszerzać swój zakres wiedzy. Aktualnie skupiam się na szerszym poznaniu Vue.js, a wolnych chwilach uczę się C++. Bardzo się cieszę, że zawitałeś na moją stronę : )
    </p>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'About',
  components: {
    Navbar
  }
}
</script>
