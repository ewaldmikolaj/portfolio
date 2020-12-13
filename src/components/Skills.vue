<template>
  <div class="skills-page scroller-wrap">
    <h2 class="skills-page__header">Umiejętności</h2>
    <div class="skills-page__wrapper">
      <h4 class="skills-page__level">Poziom podstawowy</h4>
      <!-- <font-awesome-icon :icon="[ 'fab', 'vuejs' ]" size="3x"/> -->
      <Skill text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, at consectetur, doloremque ex facilis dolor deleniti incidunt repellendus aliquid necessitatibus voluptatibus laborum magnam magni vel. Deleniti commodi eos excepturi ea? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, at consectetur, doloremque ex facilis dolor deleniti incidunt repellendus aliquid necessitatibus voluptatibus laborum magnam magni vel. Deleniti commodi eos excepturi ea?"
      iconS="vuejs"
      />
      <font-awesome-icon :icon="[ 'fab', 'git' ]" size="3x"/>
      <font-awesome-icon :icon="[ 'fab', 'php' ]" size="3x"/>
    </div>
    <div class="skills-page__wrapper">
      <h4 class="skills-page__level">Poziom średnio-zaawansowany</h4>
      <font-awesome-icon :icon="[ 'fab', 'sass' ]" size="3x"/>
      <font-awesome-icon :icon="[ 'fab', 'js-square' ]" size="3x"/>
    </div>
    <div class="skills-page__wrapper">
      <h4 class="skills-page__level">Poziom zaawansowany</h4>
      <font-awesome-icon :icon="[ 'fab', 'html5' ]" size="3x"/>
      <font-awesome-icon :icon="[ 'fab', 'css3-alt' ]" size="3x"/>
    </div>
  </div>
</template>

<script>
import Skill from './Skill'

export default {
  name: 'SKills',
  components: {
    Skill
  }
}
</script>
