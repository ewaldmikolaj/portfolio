<template>
  <div class="skill">
    <font-awesome-icon
      :icon="[ 'fab', iconS ]"
      size="3x"
      :color="colorA"
      @click="(e) => {
        show(e)
        colorA ? 'white' : color
      }"
      @mouseenter="colorA=color"
      @mouseleave="colorA='white'"
    />
    <div
      class="skill__popup"
      :class="{ 'skill__popup-active': isActive }"
      :style="`top:${objectY + 10}px`"
    >
      <div class="skill__arrow" />
      <font-awesome-icon
        class="skill_cross"
        :icon="[ 'fas', 'times' ]"
        size="2x"
        @click="hide"
      />
      <p class="skill__text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    text: {
      type: String,
      default: ''
    },
    iconS: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false,
      colorA: null,
      objectX: null,
      objectY: null
    }
  },
  methods: {
    show (e) {
      let object = e.target.getBoundingClientRect()
      this.objectX = (object.x + object.width) / 2
      this.objectY = object.height
      this.isActive = true
    },
    hide () {
      this.isActive = false
    }
  }
}
</script>
