<template>
  <div>{{ text }}</div>
</template>

<script>
export default {
  name: 'PopUp',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
