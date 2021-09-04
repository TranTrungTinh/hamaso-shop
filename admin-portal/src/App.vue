<template>
  <router-view />
</template>

<script>
import { ref, provide } from 'vue'
import filters from '@/plugins/filters'
import { GLOBAL_FILTER } from '@/config/app.config'
export default {
  name: 'LayoutDefault',

  setup () {
    // * Provide filter on global
    provide(GLOBAL_FILTER, filters)
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
