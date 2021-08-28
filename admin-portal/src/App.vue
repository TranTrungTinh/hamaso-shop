<template>
  <router-view />
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
