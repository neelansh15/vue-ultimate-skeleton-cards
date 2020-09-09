<template>
  <div class="skeleton-button" :style="{
      background,
      borderRadius
  }">

  </div>
</template>

<script>
import tinycolor from 'tinycolor2'

export default {
    name: 'SkeletonButton',
    props:{
        primary:{
            type: String,
            required: true
        },
        buttonType:{
            type: Number,
            required: true
        }
    },
    computed:{
        background(){
            return tinycolor(this.primary).darken(6).toString();
        },
        borderRadius(){
            if(this.buttonType == 4) return "20px"
            else return "0"
        }
    }
}
</script>

<style>

</style>