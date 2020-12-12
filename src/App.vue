<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sites: {
        welcome: 0,
        about: 1,
        skills: 2
      },
      active: null
    }
  },
  watch: {
    $route () {
      this.active = this.sites[this.$route.name]
    }
  },
  mounted () {
    this.active = this.sites[this.$route.name]
    window.addEventListener('mousewheel', (e) => {
      this.scroll(e)
    })
  },
  methods: {
    scroll (event) {
      const keys = Object.keys(this.sites)
      if (event.wheelDelta < 0 && keys[this.active + 1]) {
        this.$router.push(`/${keys[this.active + 1]}`)
      } else if (event.wheelDelta > 0 && keys[this.active - 1]) {
        this.$router.push(`/${keys[this.active - 1]}`)
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
@import './assets/media.scss';
</style>
