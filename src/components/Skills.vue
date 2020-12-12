<template>
  <transition name="scroller">
    <div class="skills-page scroller-wrap">
      <h2 class="skills-page__header">Umiejętności</h2>
      <div class="skills-page__wrapper">
        <h4 class="skills-page__level">Poziom podstawowy</h4>
        <font-awesome-icon :icon="[ 'fab', 'vuejs' ]" size="3x"/>
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
  </transition>
</template>

<script>
export default {
  name: 'SKills'
}
</script>
