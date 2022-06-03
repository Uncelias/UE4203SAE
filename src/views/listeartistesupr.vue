<template>
  <main>
    <div class="flex justify-center my-20">
      <h2 class="text-Custom-red text-4xl">Suppression d'un artiste</h2>
    </div>
    <form @submit.prevent="deleteArtistesynchro">
      <div class="grid grid-cols-2">
        <div class="mx-16">
          <img :src="photoActuelle" />
        </div>
        <div class="flex flex-col">
          <input
            class="my-4"
            placeholder="Nom de l'artiste"
            v-model="artistesynchro.nom"
            disabled
          />
        </div>
      </div>
      <div class="flex justify-evenly my-10">
        <button
          class="
            border border-Custom-red
            p-2
            rounded-lg
            text-lg text-white
            font-space-age
          "
          type="submit"
        >
          Supprimer
        </button>
        <button
          class="
            border border-Custom-red
            p-2
            rounded-lg
            text-lg text-white
            font-space-age
          "
        >
          <RouterLink to="/listeartistesynchro">Annuler</RouterLink>
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import {
  getFirestore,
  doc,
  getDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteArtistesynchroView",
  data() {
    return {
      artistesynchro: {
        nom: null,
        image: null,
      },
      refArtistesynchro: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtistesynchro(this.$route.params.id);
  },

  methods: {
    async getArtistesynchro(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistesynchro", id);
      this.refArtistesynchro = await getDoc(docRef);
      if (this.refArtistesynchro.exists()) {
        this.artistesynchro = this.refArtistesynchro.data();
        this.photoActuelle = this.artistesynchro.image;
      } else {
        this.console.log("Artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(
        storage,
        "artistesynchro/" + this.artistesynchro.image
      );
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteArtistesynchro() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artistesynchro", this.$route.params.id));

      const storage = getStorage();
      let docRef = ref(storage, "artistesynchro/" + this.artistesynchro.image);
      deleteObject(docRef);

      this.$router.push("/listeartistesynchro");
    },
  },
};
</script>
