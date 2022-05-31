<template>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-4xl">
    STYLE GUIDE
  </h1>
  <h2
    class="
      text-white
      font-space-age
      ml-5
      text-4xl
      mb-3
      underline-offset-1 underline
    "
  >
    Font
  </h2>
  <h2 class="text-white font-inter ml-5 text-2xl">Inter 2xl</h2>
  <h2 class="text-white font-inter ml-5 text-xl">Inter xl</h2>
  <p class="text-white font-inter ml-5 mb-5">Inter base</p>
  <h2 class="text-white font-space-age ml-5 text-2xl">Space Age 2xl</h2>
  <h2 class="text-white font-space-age ml-5 text-xl">Space Age xl</h2>
  <p class="text-white font-space-age ml-5">Space Age base</p>
  <h2
    class="
      text-white
      font-space-age
      ml-5
      underline-offset-1 underline
      text-4xl
      mt-3
    "
  >
    Color
  </h2>
  <carre class="bg-indigo-500 m-2 ml-5"></carre>
  <carre class="bg-purple-500 m-2 ml-5"></carre>
  <carre
    class="bg-gradient-to-r from-indigo-500 to-purple-500 m-2 ml-5"
  ></carre>
  <h2
    class="
      text-white
      font-space-age
      ml-5
      underline-offset-1 underline
      text-3xl
      mt-3
      mb-3
    "
  >
    FOOTER gradient
  </h2>
  <btnfoot
    class="text-white align-middle font-space-age text-2xl ml-5 mr-8 mt-4 mb-5"
    btn="CONTACT"
  ></btnfoot>
  <h2
    class="
      text-white
      font-space-age
      ml-5
      underline-offset-1 underline
      text-2xl
      mt-3
    "
  >
    social network logo
  </h2>
  <div class="flex justify-start ml-5 mb-5">
    <facebook></facebook>
    <instagram></instagram>
    <twitter></twitter>
  </div>
</template>

<script>
import carre from "../components/carre.vue";
import card from "../components/card.vue";
import card2 from "../components/card2.vue";
import card3 from "../components/card3.vue";
import card4 from "../components/card4.vue";
import footer1 from "../components/footer.vue";
import searchBar from "../components/searchbar.vue";
import header1 from "../components/header1.vue";
import menu from "../components/menu.vue";
import searchlocation from "../components/searchlocation.vue";
import pagebar from "../components/pagebar.vue";
import menuicon from "../components/icones/menuicon.vue";
import titrepage from "../components/titrepage.vue";
import imghead from "../components/imghead.vue";
import btnfoot from "../components/btn_foot.vue";
import facebook from "../components/icones/facebook.vue";
import instagram from "../components/icones/instagram.vue";
import twitter from "../components/icones/twitter.vue";

export default {
  name: "App",
  components: {
    carre,
    card,
    card2,
    card3,
    card4,
    footer1,
    searchBar,
    header1,
    titrepage,
    menu,
    imghead,
    searchlocation,
    pagebar,
    menuicon,
    btnfoot,
    facebook,
    instagram,
    twitter,
  },
};
</script>