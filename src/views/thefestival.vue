<template>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-4xl">
    THE FESTIVAL
  </h1>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-4xl">
    LOCATION
  </h1>
  <p class="text-white text-inter text-center -mt-8 ml-5 mr-5 mb-5">
    Queen Elizabeth Olympic Park, London, UK
  </p>
  <h1 class="text-white font-space-age text-center mt-8 mb-8 text-4xl">
    MORE INFO
  </h1>
  <p class="text-white text-inter text-center -mt-8 ml-5 mr-5 mb-5">
    Utopia will be the largest elctro festival in the UK this year, it will
    bring famous DJ from across the world just for you.
  </p>
  <card />
  <card2 />
  <card3 />
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