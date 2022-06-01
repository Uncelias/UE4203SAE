<template>
  <div>
    <h5>Liste des artistes - Simple liste</h5>
  </div>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nom</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="artistes in listeArtistes" :key="artistes.id">
        <td>{{ artistes.id }}</td>
        <td>{{ artistes.nom }}</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
  <hr />
</template>

<script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCchoSKFCAZzMy-usgnn2qwALdy_xfbEQU",
  authDomain: "sae203-a216f.firebaseapp.com",
  projectId: "sae203-a216f",
  storageBucket: "sae203-a216f.appspot.com",
  messagingSenderId: "4079422250",
  appId: "1:4079422250:web:8f0e17ec9108390721ec53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {
  data() {
    return {
      message: null,
      listeArtistes: [],
    };
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
h4 {
  font-weight: bold;
}
</style>
