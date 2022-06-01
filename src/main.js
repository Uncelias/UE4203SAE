import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCchoSKFCAZzMy-usgnn2qwALdy_xfbEQU",
    authDomain: "sae203-a216f.firebaseapp.com",
    projectId: "sae203-a216f",
    storageBucket: "sae203-a216f.appspot.com",
    messagingSenderId: "4079422250",
    appId: "1:4079422250:web:8f0e17ec9108390721ec53"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
