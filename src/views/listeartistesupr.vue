<template>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-xl ml-5 mr-5">
    Liste d'artistes présent au festival
  </h1>
  <div v-for="artiste in listeArtistes" :key="artiste.id">
    <p class="text-white font-space-age ml-5 mb-5">{{ artiste.nom }}</p>
  </div>
  <hr />
</template>