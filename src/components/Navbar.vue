<template>
  <div class="navbar">
    <router-link
      v-for="(view, index) of views"
      :key="index"
      :to="view.path"
      :name="view.id"
      :style="view.isActive ? 'background-color: red;' : 'background-color: grey;'"
      class="navbar__dot"
      @click.native="setScrollDirection"
    />
  </div>
</template>

<script>
import { EventBus} from './../EventBus.js'

export default {
  name: 'Navbar',
  data () {
    return {
      views: [],
      scrollerS: null,
      activeSite: null
    }
  },
  mounted () {
    let i = 0
    this.$router.options.routes.forEach(route => {
      this.views.push({
        id: i,
        name: route.name,
        path: route.path,
        isActive: route.name === this.$route.name ? true : false,
      })
      i++
    })
    this.views.forEach(view => {
      if (view.isActive) {
        this.activeSite = view.id
      }
    })
    this.views.pop()
  },
  methods: {
    setScrollDirection (e) {
      if (this.activeSite > e.target.name) {
        EventBus.$emit('scroller-state', 'scrollerU')
      } else if (this.activeSite < e.target.name) {
        EventBus.$emit('scroller-state', 'scrollerD')
      }
    }
  }
}
</script>