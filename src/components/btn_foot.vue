<template>
  <button
    class="bg-gradient-to-t to-indigo-500 from-purple-500 rounded-xl text-white"
  >
    {{ btn }}
  </button>
</template>

<script>
export default {
  props: {
    btn: String,
  },
};
</script>