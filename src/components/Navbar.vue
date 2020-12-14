<template>
  <div class="navbar">
    <router-link
      v-for="(view, index) of views"
      :key="index"
      :to="view.path"
      :style="view.isActive ? 'background-color: red;' : 'background-color: grey;'"
      class="navbar__dot"
    />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      views: []
    }
  },
  mounted () {
    this.$router.options.routes.forEach(route => {
      this.views.push({
        name: route.name,
        path: route.path,
        isActive: route.name === this.$route.name ? true : false
      })
    })
    this.views.pop()
  },
}
</script>