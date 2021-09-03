import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from '@/routes'
import { createVuexStore } from '@/store'
import quasarUserOptions from './quasar-user-options'
import App from './App.vue'

const store = createVuexStore()
const app = createApp(App)

app.use(router)
app.use(store)
app.use(Quasar, quasarUserOptions)
app.mount('#app')
