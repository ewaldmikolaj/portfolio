<template>
  <div class="skills-page scroller-wrap">
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
import Skill from './Skill'

export default {
  name: 'SKills',
  components: {
    Skill
  },
  data () {
    return {
      low: [
        { text: 'lorem', iconS: 'vuejs', color: 'green'},
        { text: 'lorem', iconS: 'git', color: '#f34f29'},
        { text: 'lorem', iconS: 'php', color: '#777bb3'}
      ],
      medium: [
        { text: 'lorem', iconS: 'sass', color: '#cd6799'},
        { text: 'lorem', iconS: 'js-square', color: '#f7df1e'}
      ],
      high: [
        { text: 'lorem', iconS: 'html5', color: '#e44d26'},
        { text: 'lorem', iconS: 'css3-alt', color: '#1572b7'}
      ]
    }
  }
}
</script>
