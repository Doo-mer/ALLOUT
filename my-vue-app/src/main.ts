// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// Vuetify 3
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg' // if you want Material Design Icons
import router from './router'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
  },
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
