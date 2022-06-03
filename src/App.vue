<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav role="navigation" v-if="menuOuvert">
    <div id="menuToggle">
      <ul id="menu">
        <radialGradient
          id="paint0_radial_1301_6590"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.0408 19.4289) scale(7.74293 7.6699)"
        >
          <stop stop-color="#1D1D1B" />
          <stop offset="0.09" stop-color="#1D1D1B" />
          <stop offset="1" stop-color="#F5F1F6" />
        </radialGradient>
        <clipPath id="clip0_1301_6590">
          <rect width="45" height="50" fill="white" />
        </clipPath>
        <RouterLink
          to="/"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Homepage
        </RouterLink>
        <RouterLink
          to="/artistes"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Artistes
        </RouterLink>
        <RouterLink
          to="/programmation"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Programmation
        </RouterLink>
        <RouterLink
          to="/thefestival"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Thefestival
        </RouterLink>
        <RouterLink
          to="/contact"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Contact
        </RouterLink>
        <RouterLink
          to="/mentionslegales"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Mentions légales
        </RouterLink>
        <hr class="mt-5 mb-5 bg-black" />
        <RouterLink
          to="/style-guide"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Styleguide
        </RouterLink>
        <RouterLink
          to="/listeartiste"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Liste artiste firebase
        </RouterLink>
        <RouterLink
          to="/listeartisteSYNCHRO"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Liste artiste syncrho
        </RouterLink>
        <RouterLink
          to="/listeartisteadd"
          class="
            font-space-age
            flex flex-col
            font-bree-serif
            text-2xl text-black
            hover:text-slate-700
          "
          >Ajouter un artiste
        </RouterLink>
      </ul>
    </div>
  </nav>

  <div class="bg-black">
    <button
      v-if="menuOuvert"
      class="z-50 absolute top-6 right-8"
      aria-haspopup="true"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert"
    >
      <img src="src\assets\Logonoir.png" class="z-10" />
    </button>
    <button
      v-if="!menuOuvert"
      class="z-50 absolute top-6 right-8"
      aria-haspopup="true"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert"
    >
      <img src="src\assets\Logoblanc.png" class="z-10" />
    </button>
    <imghead class="w-full" />
    <div class="flex flex-grow-0 flex-shrink-0 bg-black">
      <div class="font-inter flex-grow space-x-3">
        <div class="mt-4 ml-10 absolute top-0 right-0 mr-4"></div>
        <titrepage class="flex justify-center" />
      </div>
      <div class="hidden"></div>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-between lg:items-center"
    ></div>

    <!--header-->

    <RouterView />

    <!--FOOTER-->

    <hr class="bg-white" />
    <footer class="flex flex-col text-center bg-black pt-2">
      <p class="text-white font-space-age text-xl ml-8 mr-8">
        Subscribe to the newsletter
      </p>
      <btnfoot
        class="text-white font-space-age text-2xl ml-8 mr-8 mt-4 mb-4"
        btn="SUBSCRIBE HERE"
      ></btnfoot>
      <p class="text-white font-space-age text-2xl">FOLLOW US !</p>
      <div class="flex justify-center">
        <facebook></facebook>
        <instagram></instagram>
        <twitter></twitter>
      </div>
      <btnfoot
        class="text-white font-space-age text-2xl ml-8 mr-8 mt-4 mb-4"
        btn="CONTACT"
      ></btnfoot>
    </footer>
  </div>
</template>



<script >
import card from "../src/components/card.vue";
import card2 from "../src/components/card2.vue";
import card3 from "../src/components/card3.vue";
import card4 from "../src/components/card4.vue";
import footer1 from "../src/components/footer.vue";
import searchBar from "../src/components/searchbar.vue";
import header1 from "../src/components/header1.vue";
import menu from "../src/components/menu.vue";
import searchlocation from "../src/components/searchlocation.vue";
import pagebar from "../src/components/pagebar.vue";
import menuicon from "../src/components/icones/menuicon.vue";
import titrepage from "../src/components/titrepage.vue";
import imghead from "../src/components/imghead.vue";
import btnfoot from "../src/components/btn_foot.vue";
import facebook from "../src/components/icones/facebook.vue";
import instagram from "../src/components/icones/instagram.vue";
import twitter from "../src/components/icones/twitter.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
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