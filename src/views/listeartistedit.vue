<template>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-xl ml-5 mr-5">
    Liste d'artistes présent au festival
  </h1>
  <div v-for="artistesynchro in listeArtistesynchro" :key="artistesynchro.id">
    <p class="text-white font-space-age ml-5 mb-5">{{ artistesynchro.nom }}</p>
  </div>
  <hr />
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateArtistesView",
  data() {
    return {
      imageData: null,
      listeArtistesynchro: [],
      artistesynchro: {
        nom: null,
        image: null,
      },
      refArtistesynchro: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artistesynchro", this.$route.params.id);
    this.getArtistesynchro(this.$route.params.id);
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
      });
    },

    async getArtistesynchro(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artistesynchro", id);
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artistesynchro.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async updateArtistesynchro() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "artistesynchro/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artistesynchro/" + this.artistesynchro.image);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            console.log("Uploaded a base64 string", this.artistesynchro.image);
          }
        );
      }
      const firestore = getFirestore();
      await updateDoc(
        doc(firestore, "artistesynchro", this.$route.params.id),
        this.artistesynchro
      );
      this.$router.push("/artistesynchro");
    },
  },
};
</script>