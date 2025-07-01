// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// Vuetify 3
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg' // if you want Material Design Icons

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
app.mount('#app')
