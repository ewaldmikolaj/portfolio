<template>
  <div class="contact-page">
    <Navbar />
    <h2 class="contact-page__header">
      Kontakt
    </h2>
    <form
      class="contact-page__form"
      action=""
    >
      <input
        v-model="form.email"
        class="contact-page__input"
        type="text"
        name="email"
      >
      <input
        v-model="form.title"
        class="contact-page__input"
        type="text"
        name="title"
      >
      <textarea
        v-model="form.content"
        name="content"
        class="contact-page__textarea"
      />
      <input
        class="contact-page__submit"
        type="submit"
        value="Wyślij"
      >
    </form>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Contact',
  components: {
    Navbar
  },
  data () {
    return {
      form: {
        email: 'Podaj email',
        title: 'podaj tytuł',
        content: 'Dupa'
      }
    }
  }
}
</script>