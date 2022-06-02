<template>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-xl ml-5 mr-5">
    Liste d'artistes présent au festival
  </h1>
  <form @submit.prevent="deleteArtistesynchro">
    <img :src="imageData" />
    <input
      class="my-4"
      placeholder="Nom de l'artiste"
      v-model="Artistesynchro.nom"
      disabled
    />
    <input type="file" ref="file" id="file" @change="previewImage" />
    <button class="text-white" type="submit">modifier</button>
    <button><router-link to="/listeartistesynchro">Cancel</router-link></button>
  </form>
  <hr />
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
      Artistesynchro: {
        Nom: null,
        image: null,
      },
    };
  },
  mounted() {
    console.log("id artisteo", this.$route.params.id);
    this.getArtistesynchro(this.$route.params.id);
  },

  methods: {
    async getArtistesynchro(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artistesynchro", id);
      this.refArtistesynchro = await getDoc(docRef);
      if (this.refArtistesynchro.exists()) {
        this.Artistesynchro = this.refArtistesynchro.data();
        this.photoActuelle = this.Artistesynchro.image;
      } else {
        this.console.log("Artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(
        storage,
        "artistesynchro/" + this.Artistesynchro.iages
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
      await deleteDoc(doc(firestore, "Artistesynchro", this.$route.params.id));

      const storage = getStorage();
      let docRef = ref(storage, "Artistesynchro/" + this.Artistesynchro.image);
      deleteObject(docRef);

      this.$router.push("/artistesynchro");
    },
  },
};
</script>
