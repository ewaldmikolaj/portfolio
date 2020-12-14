<template>
  <div class="navbar">
    <div 
      v-for="(view, index) of views"
      :key="index"
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
        isActive: route.name === this.$route.name ? true : false
      })
    })
    this.views.pop()
  },
}
</script>