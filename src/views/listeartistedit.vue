<template>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-xl ml-5 mr-5">
    Liste d'artistes présent au festival
  </h1>
  <div v-for="artiste in listeArtistes" :key="artiste.id">
    <p class="text-white font-space-age ml-5 mb-5">{{ artiste.nom }}</p>
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
      listeArtistes: [],
      Artistes: {
        Nom: null,
        imgPresentation: null,
      },
      refArtistes: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artistes", this.$route.params.id);
    this.getArtistes(this.$route.params.id);
    this.getArtistes();
  },

  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "Artistes");
      const q = query(dbArtistes, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getArtistes(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artistes", id);
      this.refArtistes = await getDoc(docRef);
      if (this.refArtistes.exists()) {
        this.Artistes = this.refArtistes.data();
        this.photoActuelle = this.Artistes.imgPresentation;
      } else {
        this.console.log("Artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(
        storage,
        "Artistes/" + this.Artistes.imgPresentation
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
      this.Artistes.imgPresentation = this.file.name;
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
    async updateArtistes() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "Artistes/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "Artistes/" + this.Artistes.imgPresentation);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            console.log(
              "Uploaded a base64 string",
              this.Artistes.imgPresentation
            );
          }
        );
      }
      const firestore = getFirestore();
      await updateDoc(
        doc(firestore, "Artistes", this.$route.params.id),
        this.Artistes
      );
      this.$router.push("/artistes");
    },
  },
};
</script>