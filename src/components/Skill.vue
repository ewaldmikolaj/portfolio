<template>
  <div class="skill">
    <font-awesome-icon
    :icon="[ 'fab', iconS ]"
    @click="show"
    size="3x"
    />
    <div
      class="skill__popup"
      v-bind:class="{ 'skill__popup-active': isActive }"
    >
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
  data () {
    return {
      isActive: false
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    iconS: {
      type: String,
      default: ''
    }
  },
  methods: {
    show () {
      this.isActive = true
    },
    hide () {
      this.isActive = false
    }
  }
}
</script>
