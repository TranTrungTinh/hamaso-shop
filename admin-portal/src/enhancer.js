import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
 
export const useEnhancer = () => {
  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  return {
    store,
    route,
    router
  }
}
 