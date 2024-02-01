import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
    apiKey: "AIzaSyAt0Sds1Y_mwXj8nSUMpCk1BLlM6D_lWnk",
    authDomain: "vuejs-adrarclassrooms.firebaseapp.com",
    projectId: "vuejs-adrarclassrooms",
    storageBucket: "vuejs-adrarclassrooms.appspot.com",
    messagingSenderId: "552799486461",
    appId: "1:552799486461:web:b890b47f87f12f415dd994"
};
firebase.initializeApp(firebaseConfig);
firebase.database();

createApp(App).use(router).mount('#app')
