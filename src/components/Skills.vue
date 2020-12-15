<template>
  <div class="skills-page ">
    <Navbar />
    <h2 class="skills-page__header">
      Umiejętności
    </h2>
    <div class="skills-page__wrapper">
      <h4 class="skills-page__level">
        Poziom podstawowy
      </h4>
      <Skill
        v-for="(icon, index) of low"
        :key="index"
        :color="icon.color"
        :text="icon.text"
        :icon-s="icon.iconS"
        :is-center="icon.center"
      />
    </div>
    <div class="skills-page__wrapper">
      <h4 class="skills-page__level">
        Poziom średnio-zaawansowany
      </h4>
      <Skill
        v-for="(icon, index) of medium"
        :key="index"
        :color="icon.color"
        :text="icon.text"
        :icon-s="icon.iconS"
      />
    </div>
    <div class="skills-page__wrapper">
      <h4 class="skills-page__level">
        Poziom zaawansowany
      </h4>
      <Skill
        v-for="(icon, index) of high"
        :key="index"
        :color="icon.color"
        :text="icon.text"
        :icon-s="icon.iconS"
      />
    </div>
  </div>
</template>

<script>
import Skill from './Skill.vue'
import Navbar from './Navbar.vue'

export default {
  name: 'SKills',
  components: {
    Skill,
    Navbar
  },
  data () {
    return {
      low: [
        { text: 'Vue.js to front-endowy framework JavaScript typu open source do tworzenia interfejsów użytkownika i aplikacji.', iconS: 'vuejs', color: 'green', state: null, center: false },
        { text: 'Git to oprogramowanie służące do śledzenia zmian głównie w kodzie źródłowym.', iconS: 'git', color: '#f34f29', center: true },
        { text: 'PHP to interpretowany, skryptowy język programowania zaprojektowany do generowania stron internetowych.', iconS: 'php', color: '#777bb3', center: false}
      ],
      medium: [
        { text: 'Sass to preprocesorowy język skryptowy, który jest interpretowany lub kompilowany do kaskadowych arkuszy stylów (CSS).', iconS: 'sass', color: '#cd6799' },
        { text: 'JavaScript to język programowania wysokiego poziomu. ', iconS: 'js-square', color: '#f7df1e' }
      ],
      high: [
        { text: 'HTML to język znaczników do tworzenia dokumentów hipertekstowych.', iconS: 'html5', color: '#e44d26' },
        { text: 'CSS to język służący do opisu formy prezentacji stron WWW.', iconS: 'css3-alt', color: '#1572b7' }
      ]
    }
  }
}
</script>
