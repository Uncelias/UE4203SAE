<template>
  <div class="carousel">
    <button @click="prev" type="button" class="btn btn-left">
      <img src="../assets\fleche gauche.png" class="icone" />
    </button>
    <div
      class="container-carousels"
      ::style="{transform: `translateX(${index}px)`}"
    >
      <img src="../assets\deadmau.png" class="img-carousel" />
      <img src="../assets\david.png" class="img-carousel" />
    </div>
    <button @click="next" type="button" class="btn btn-right">
      <img src="../assets\fleche.png" class="icone" />
    </button>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data: function () {
    return {
      index: 0,
    };
  },
  methods: {
    next() {
      console.log(this.index);
      if (this.index === -1500) {
        this.index = 0;
      } else {
        this.index -= 500;
      }
    },
  },
};
</script>
<style scoped>
.carousel {
  width: 300px;
  height: 200px;
  margin: 100px auto 0;
  margin-top: -2px;
  overflow: hidden;
  position: relative;
}

.container-carousels {
  display: flex;
}

.img-carousel {
  width: 100%;
  height: auto;
}

.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  position: absolute;
  z-index: 1000;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-left {
  top: 40%;
  left: 5px;
}

.btn-right {
  top: 40%;
  right: 5px;
}
</style>