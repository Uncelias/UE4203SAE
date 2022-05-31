<template>
  <div
    class="
      flex flex-col
      justify-center
      content-center
      items-center
      w-auto
      gap-2.5
      px-4
      py-3
      rounded-lg
      bg-white
      border-[1.5px] border-indigo-100
    "
  >
    <div
      class="
        flex
        justify-between
        items-center
        self-stretch
        flex-grow-0 flex-shrink-0
        relative
      "
    >
      <p
        class="
          flex-grow-0 flex-shrink-0
          opacity-70
          text-base
          font-medium
          text-left text-gray-900
        "
      >
        Search location
      </p>
      <div class="bg-indigo-500 h-10 w-10 items-center rounded-md">
        <div class="mt-2 ml-2">
          <searchicon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchicon from "./icones/searchicon.vue";

export default {
  components: { searchicon },
};
</script>
