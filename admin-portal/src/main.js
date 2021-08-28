import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from '@/routes'
import quasarUserOptions from './quasar-user-options'
import App from './App.vue'

const app = createApp(App)

app.use(router).use(Quasar, quasarUserOptions)
app.mount('#app')
