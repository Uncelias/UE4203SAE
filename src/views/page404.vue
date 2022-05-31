<template>
  <h1 class="text-white font-space-age text-center text-5xl">404</h1>
  <p class="text-white font-space-age font-light text-center">
    Erreur 404 page non-trouvé
  </p>
  <h2 class="text-white font-inter italic text-center mt-7 ml-3 mr-3">
    "T'es comme le C cédille de Surf, tu n'existes pas !"
  </h2>
  <p class="text-white flex font-inter text-sm flex-row-reverse mr-3 ml-3 mb-7">
    Jean Dujardin, Brice de Nice (2005)
  </p>

  <img class="mr-auto ml-auto mb-10" src="../assets/page404.gif" />
</template>
<script >
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