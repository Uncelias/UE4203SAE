<template>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-xl ml-5 mr-5">
    Liste d'artistes présent au festival
  </h1>
  <form @submit.prevent="createArtistesynchro">
    <img :src="imageData" />
    <input
      placeholder="nom de l'artiste"
      v-model="artistesynchro.nom"
      required
    />
    <input type="file" ref="file" id="file" @change="previewImage" />
    <button class="text-white" type="submit">Créer</button>
    <button><router-link to="/listeartistesynchro">Cancel</router-link></button>
  </form>
  <hr />
</template>

<script>
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateArtistesView",
  data() {
    return {
      imageData: null,
      listeArtistesynchro: [],
      artistesynchro: {
        nom: null,
        image: null,
      },
    };
  },
  mounted() {
    this.getArtistesynchro();
  },
  methods: {
    async getArtistesynchro() {
      const firestore = getFirestore();
      const dbArtistesynchro = collection(firestore, "artistesynchro");
      const q = query(dbArtistesynchro, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistesynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des artistes", this.listeArtistesynchro);
      });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artistesynchro.image = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createArtistesynchro() {
      const storage = getStorage();
      const refStorage = ref(
        storage,
        "artistesynchro/" + this.artistesynchro.image
      );
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");
          const db = getFirestore();
          const docRef = addDoc(
            collection(db, "artistesynchro"),
            this.artistesynchro
          );
        }
      );
      this.$router.push("/artistesynchro");
    },
  },
};
</script>