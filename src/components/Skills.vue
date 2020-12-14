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
        { text: 'lorem cos cos dupa bajo jajo cos jldkjfs;dlfkj df;lksdjf;lskdjfsd;l ds;lfkjd;flkj', iconS: 'vuejs', color: 'green', state: null, center: false },
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit itaque minus distinctio asperiores fugit recusandae vitae quo! Numquam atque reiciendis magnam assumenda similique cumque tenetur hic, dolorum ab expedita?', iconS: 'git', color: '#f34f29', center: true },
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit itaque minus distinctio asperiores fugit recusandae vitae quo! Numquam atque reiciendis magnam assumenda similique cumque tenetur hic, dolorum ab expedita?', iconS: 'php', color: '#777bb3', center: false}
      ],
      medium: [
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit itaque minus distinctio asperiores fugit recusandae vitae quo! Numquam atque reiciendis magnam assumenda similique cumque tenetur hic, dolorum ab expedita?', iconS: 'sass', color: '#cd6799' },
        { text: 'lorem', iconS: 'js-square', color: '#f7df1e' }
      ],
      high: [
        { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit itaque minus distinctio asperiores fugit recusandae vitae quo! Numquam atque reiciendis magnam assumenda similique cumque tenetur hic, dolorum ab expedita?', iconS: 'html5', color: '#e44d26' },
        { text: 'lorem', iconS: 'css3-alt', color: '#1572b7' }
      ]
    }
  }
}
</script>
