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
      <label
        class="contact-page__form-header"
        for="email"
      >Email: </label>
      <input
        v-model="form.email"
        class="contact-page__input"
        type="text"
        name="email"
      >
      <label
        class="contact-page__form-header"
        for="title"
      >Tytuł: </label>
      <input
        v-model="form.title"
        class="contact-page__input"
        type="text"
        name="title"
      >
      <label
        class="contact-page__form-header"
        for="content"
      >Treść: </label>
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
    <div class="contact-page__social">
      <a
        href=""
        class="contact-page__social-icon"
      >
        <font-awesome-icon :icon="['fab', 'linkedin' ]" />
      </a>
      <a
        href=""
        class="contact-page__social-icon"
      >
        <font-awesome-icon :icon="['fab', 'github-square' ]" />
      </a>
    </div>
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
        email: '',
        title: '',
        content: ''
      }
    }
  }
}
</script>