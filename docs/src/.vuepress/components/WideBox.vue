<template>
  <div>
    <div class="widebox" :style="{
        background
    }"></div>
    <br v-for="n in 6" :key="n" />
  </div>
</template>

<script>
import tinycolor from "tinycolor2";

export default {
  name: "WideBox",
  props: {
    primary: {
      type: String,
      required: true,
    },
  },
  computed: {
    background() {
      return tinycolor(this.primary).darken().toString();
    },
  },
};
</script>

<style>
</style>