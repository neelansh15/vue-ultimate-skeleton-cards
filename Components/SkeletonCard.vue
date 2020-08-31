<template>
  <div class="skeleton-card" :style="{
      background: primary,
      borderRadius,
      padding
  }">
    <div class="skeleton-card-loader" :style="{
      background: loaderBackground,
      animationDuration: animDuration,
      animationTimingFunction: animTimingFunction
    }"
    v-if="!animDisable"
    ></div>
    <Structure :structureArray="structureArray" :primary="primary" />
  </div>
</template>

<script>
import tinycolor from "tinycolor2";
import "./Structure";

export default {
  props: {
    primary: {
      type: String,
      default: "#242424",
    },
    padding: {
      type: String,
      default: "2em 3em",
    },
    borderRadius: {
      type: String,
      default: "20px",
    },
    contrast: {
      type: Number,
      default: 10,
    },
    structure: {
      type: String,
      default: "1120333304",
    },
    animDuration: {
      type: String,
      default: "1.5s",
    },
    animDisable:{
      type: Boolean,
      default: false
    },
    animTimingFunction:{
      type: String,
      default: ""
    }
  },
  data(){
    return{
      loaderBackground: tinycolor(this.primary).lighten(6).toString()
    }
  },
  computed: {
    structureArray() {
      return this.structure.split("");
    }
  },
};
</script>

<style>
@import "../styles/style.css";
</style>