import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store';
import Swal from 'sweetalert2';


const app = createApp(App)

// const savedState = localStorage.getItem('vuex-state');
// if (savedState) {
//   store.replaceState(JSON.parse(savedState));
// }

// // Save state to localStorage on every mutation
// store.subscribe((mutation, state) => {
//   if (mutation.type === 'getProductData') {
//     localStorage.setItem('vuex-state', JSON.stringify(state));
//   }
// });

app.use(router)
app.use(store);

app.mount('#app')
