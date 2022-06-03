<template>
  <main>
    <h1
      class="text-white font-space-age text-center mt-8 mb-8 text-xl ml-5 mr-5"
    >
      Liste d'artistes présent au festival et images
    </h1>
    <div v-for="artistesynchro in listeArtistesynchro" :key="artistesynchro.id">
      <p class="text-white font-space-age ml-5 mb-5">
        {{ artistesynchro.nom }}
      </p>
      <img
        class="w-50 h-50 mb-5 block ml-auto mr-auto"
        :src="artistesynchro.image"
      />
      <RouterLink
        :to="{
          name: 'listeartistesupr',
          params: { id: artistesynchro.id },
        }"
        ><p class="block text-center font-space-age text-white">supprimer</p>
      </RouterLink>
      <RouterLink
        :to="{
          name: 'listeartistedit',
          params: { id: artistesynchro.id },
        }"
        ><p class="block text-center font-space-age mb-10 text-white">
          modifier
        </p></RouterLink
      >
    </div>
    <hr />
  </main>
</template>


<script>
import {
  getFirestore,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  data() {
    return {
      listeArtistesynchro: [],
    };
  },
  mounted() {
    this.getArtistesynchro();
  },
  methods: {
    async getArtistesynchro() {
      const firestore = getFirestore();
      const dbArtistesynchro = collection(firestore, "artistesynchro");
      const query = await onSnapshot(dbArtistesynchro, (snapshot) => {
        console.log("query", query);
        this.listeArtistesynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistesynchro.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistesynchro/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
              console.log("personne", personne);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeArtistesynchro", this.listeArtistesynchro);
      });
    },
  },
};
</script>