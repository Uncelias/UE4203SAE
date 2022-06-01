<template>
  <div class="text-white">
    <h5 class="text-white">Liste des artistes - Simple liste</h5>
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
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      message: null,
      listeArtistes: [],
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "Artistes");
      const query = await getDocs(dbArtistes);
      query.forEach((doc) => {
        let Artistes = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listeArtistes.push(artistes);
      });
    },
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
