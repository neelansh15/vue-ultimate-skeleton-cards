<template>
  <div class="skeleton-box-normal" :style="{
      background,
      width,
      height,
      marginBottom: '0.5em'
  }">
  </div>
</template>

<script>
import tinycolor from 'tinycolor2'

export default {
    name: 'Box',
    props:{
        boxType:{
            type: Number,
            default: 1
        },
        primary:{
            type: String,
            required: true
        },
    },
    computed:{
        height(){
            if(this.boxType == 1) return "1.5em"
            else if(this.boxType == 2) return "1.3em"
            else return "1.1em"
        },
        width(){
            if(this.boxType == 1) return "90%"
            else if(this.boxType == 2) return "70%"
            else if (this.boxType == 3) return (50 + (Math.floor(Math.random() * 40))).toString() + "%"
            else return "100%"
        },
        background(){
            if(this.boxType == 1)
                if(tinycolor(this.primary).isDark())
                    return tinycolor(this.primary).darken(10).toString()
                else
                    return tinycolor(this.primary).darken(20).toString()
            else if(this.boxType == 2)
                if(tinycolor(this.primary).isDark())
                    return tinycolor(this.primary).darken(3).toString()
                else
                    return tinycolor(this.primary).darken(10).toString()
            else
                if(tinycolor(this.primary).isDark())
                    return tinycolor(this.primary).lighten().toString()
                else
                    return tinycolor(this.primary).darken().toString()
        }
    }
}
</script>

<style>

</style>