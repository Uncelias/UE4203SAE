<template>
  <p class="flex text-white font-space-age text-2xl -mt-14 ml-8">
    Join The Move
  </p>
  <img class="absolute ml-80" src="../assets/Degrad bulle.png" />
  <p class="flex text-white font-inter ml-8 mr-8">
    Take part to the first edition of UTOPIA the new electro fest coming to
    london this summer !
  </p>

  <p
    class="flex flex-row-reverse text-white font-space-age text-2xl mt-14 mr-8"
  >
    Be Ready
  </p>
  <img class="absolute -ml-5" src="../assets/Degrad bulle.png" />

  <p class="flex flex-row-reverse font-inter text-white ml-8 mr-8">
    From the 20th of august to the 22th come
  </p>
  <p class="flex flex-row-reverse font-inter text-white ml-8 mr-8">
    assist the biggest electro fest in Europe !
  </p>

  <p class="flex text-white text-2xl font-space-age mt-14 ml-8">Who's in?</p>
  <p class="flex text-white ml-8 font-inter mr-8">
    We've brought back the best DJs to make you electrize!
  </p>

  <!--CAROUSEL-->

  <section class="relative w-full flex gap-6 snap-x overflow-x-auto pb-14 mt-7">
    <div class="snap-center shrink-0">
      <div class="shrink-0 w-4 sm:w-48"></div>
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img
        class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-black"
        src="../assets/david.png"
      />
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img
        class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-black"
        src="../assets/deadmau.png"
      />
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img
        class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-black"
        src="../assets/martin.png"
      />
    </div>
    <div class="snap-center shrink-0 first:pl-8 last:pr-8">
      <img
        class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-black"
        src="../assets/djsnake.png"
      />
    </div>

    <div class="snap-center shrink-0">
      <div class="shrink-0 w-4 sm:w-48"></div>
    </div>
  </section>

  <!--CAROUSEL-->

  <div class="justify-content align-middle text-center">
    <p class="block text-white text-2xl font-space-age mt-4">
      Take your ticket
    </p>
  </div>

  <card />
  <card2 />
  <card3 />

  <!--SEARCH BAR ET SEARCH LOCATION RESPONSIVE!

  <div class="pl-8 pt-4 pr-8 lg:flex-auto lg:max-w-sm">
    <searchBar />
  </div>

  <div class="pl-8 pt-6 pr-8 pb-8 lg:hidden">
    <searchlocation />
  </div>

  <div
    class="
      grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(500px,1fr))]
    "
  ></div>-->
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