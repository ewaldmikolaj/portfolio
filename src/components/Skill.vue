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
      :style="isMobile ? isCenter ? `top: ${objectY + 15}px; ${site}: 50%; transform: translateX(-50%); ` : `top: ${objectY + 15}px; ${site}: 0; ` : ''"
      @mouseenter="!isMobile ? colorA=color : ''"
      @mouseleave="!isMobile ? colorA='white' : ''"
    >
      <div
        class="skill__arrow"
        :style="isMobile ? isCenter ? `${site}: 50%; transform: translateX(-50%);` : `${site}: 10px;`: ''"
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
import { EventBus } from './../EventBus'

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
    },
    isCenter: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false,
      colorA: null,
      objectX: null,
      objectY: null,
      site: '',
      isMobile: null
    }
  },
  mounted () {
    this.checkView()
    window.addEventListener('resize', this.checkView)
  },
  created () {
    EventBus.$on('turn-on', this.turnOff)
  },
  beforeDestroy () {
    EventBus.$off('turn-on')
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
      console.log(e.target.getBBox())
      console.log(object)
      EventBus.$emit('turn-on', this.iconS)
    },
    hide () {
      this.isActive = false
    },
    turnOff (icon) {
      if (this.iconS != icon) {
        this.hide()
      }
    },
    checkView () {
      if (window.innerWidth < 768 || window.innerHeight < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  }
}
</script>
