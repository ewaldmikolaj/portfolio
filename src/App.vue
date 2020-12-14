<template>
  <div id="app">
    <transition
      :name="scroller"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import { EventBus } from './EventBus.js'

export default {
  name: 'App',
  data () {
    return {
      sites: {
        welcome: 0,
        about: 1,
        skills: 2
      },
      active: null,
      touchA: null,
      touchB: null,
      scroller: 'scrollerD'
    }
  },
  watch: {
    $route () {
      this.active = this.sites[this.$route.name]
    },
    scroller () {
      console.log('dupa')
    }
  },
  created () {
    EventBus.$on('scroller-state', (value) => {
      this.scroller = value
    })
  },
  beforeDestroy () {
    EventBus.$off('scoller-state')
  },
  mounted () {
    this.active = this.sites[this.$route.name]
    window.addEventListener('mousewheel', (e) => {
      this.scroll(e)
    }),
    window.addEventListener('touchstart', (e) => {
      this.touchA = e.touches[0].clientY
    }),
    window.addEventListener('touchend', (e) => {
      this.touchB = e.changedTouches[0].clientY
      this.scrollphone()
    })
  },
  methods: {
    scroll (event) {
      const keys = Object.keys(this.sites)
      if (event.wheelDelta < 0 && keys[this.active + 1]) {
        this.$router.push(`/${keys[this.active + 1]}`)
        this.scroller = 'scrollerD'
      } else if (event.wheelDelta > 0 && keys[this.active - 1]) {
        this.$router.push(`/${keys[this.active - 1]}`)
        this.scroller = 'scrollerU'
      }
    },
    scrollphone () {
      let delta = this.touchA - this.touchB
      const keys = Object.keys(this.sites)
      if (Math.abs(delta) > 10) {
        if (delta > 0 && keys[this.active + 1]) {
          this.$router.push(`/${keys[this.active + 1]}`)
          this.scroller = 'scrollerD'
        } else if (delta < 0 && keys[this.active - 1]) {
          this.$router.push(`/${keys[this.active - 1]}`)
          this.scroller = 'scrollerU'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
@import './assets/media.scss';
</style>
