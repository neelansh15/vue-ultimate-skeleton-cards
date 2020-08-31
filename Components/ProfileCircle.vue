<template>
  <div class="circle"
    :style="{
        background
    }"
  ></div>
</template>

<script>
import tinycolor from 'tinycolor2'

export default {
    name: 'ProfileCircle',
    props:{
        primary: {
          type: String,
          required: true
        }
    },
    computed:{
      background(){
        return tinycolor(this.primary).darken().toString()
      }
    }
}
</script>

<style>

</style>