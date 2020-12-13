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
      :style="`top:${objectY + 15}px; ${site}: 0`"
    >
      <div
        class="skill__arrow"
        :style="`${site}: 10px;`"
      />
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
      objectY: null,
      site: ''
    }
  },
  methods: {
    show (e) {
      let object = e.target.getBoundingClientRect()
      this.objectX = (object.x + object.width) / 2
      this.objectY = object.height
      this.isActive = true
      if (object.x < window.innerWidth / 2) {
        this.site = 'left' 
      } else {
        this.site = 'right'
      }
      console.log(object)
      this.$emit('changeActive', this.isActive)
    },
    hide () {
      this.isActive = false
      this.$emit('changeActive', this.isActive)
    }
  }
}
</script>
