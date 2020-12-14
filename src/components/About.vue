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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptas fugiat delectus, quasi perferendis ipsum molestias asperiores praesentium nam, dicta voluptatibus tempora, minima eveniet consectetur itaque deserunt alias omnis earum quis, recusandae in ea perferendis commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem architecto in magnam animi. Assumenda, architecto, praesentium
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
