import { createApp } from 'vue';
import  App  from './App.vue';
import router from './router';
// import { Button } from 'vant';
// import Vant from 'vant';
// import 'vant/lib/index.css';
import { Checkbox, CheckboxGroup } from 'vant';



const app = createApp(App)
app.use(Checkbox);
app.use(CheckboxGroup);
// app.use(Vant);
app.use(router);

app.mount('#app')
