import { createApp } from 'vue';
import { Quasar } from 'quasar'

import  App  from './App.vue';
import router from './router';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


const app = createApp(App)
app.use(Quasar, {
    config: {},
  plugins: {}, // import Quasar plugins and add here
})
app.use(router);

app.mount('#app')
