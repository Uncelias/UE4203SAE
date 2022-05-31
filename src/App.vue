<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-black">
    <imghead class="w-full" />
    <div class="flex flex-grow-0 flex-shrink-0 bg-black">
      <div class="font-inter flex-grow space-x-3">
        <nav class="hidden lg:flex lg:gap-8">
          <ul class="flex-grow flex space-x-7 text-base font-medium mt-3 ml-11">
            <li>
              <routerlink to="/">Homepage</routerlink>
            </li>
            <li>
              <routerlink to="/">Buy</routerlink>
            </li>
            <li>
              <routerlink to="/">Sell </routerlink>
            </li>
            <li>
              <routerlink to="/">Manage Property</routerlink>
            </li>
            <li>
              <routerlink to="/">Resources</routerlink>
            </li>
          </ul>
        </nav>

        <div class="mt-4 ml-10 absolute top-0 right-0 mr-4">
          <menuicon class="lg:hidden" />
        </div>
        <titrepage class="flex justify-center" />
      </div>
      <div class="hidden">
        <p
          class="
            flex
            rounded-lg
            text-indigo-700
            font-semibold
            p-2
            border-indigo-300 border-4
          "
        >
          Login
        </p>
        <p class="flex rounded-lg bg-indigo-600 text-white font-semibold p-3">
          Sign up
        </p>
      </div>
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