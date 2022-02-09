import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from '@/routes'
import { createVuexStore } from '@/store'
import quasarUserOptions from './quasar-user-options'
import App from './App.vue'
import useComponent from '@/plugins/useComponent'

const app = createApp(App)

app.use(router)
app.use(createVuexStore())
app.use(Quasar, quasarUserOptions)
useComponent(app)
app.mount('#app')
