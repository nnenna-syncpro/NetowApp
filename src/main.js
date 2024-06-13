import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import BaseIcon from './components/UI/BaseIcon.vue'
import BaseIconButton from './components/UI/BaseIconButton.vue'
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App)

// app.component('base-icon', BaseIcon)
app.component('base-icon-button', BaseIconButton)
app.component('base-button', BaseButton)

app.mount('#app')
