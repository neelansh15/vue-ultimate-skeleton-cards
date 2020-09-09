import Vue from "vue";
import Box from "./Box.vue";
import Button from "./Button.vue";
import ProfileCircle from "./ProfileCircle.vue";
import WideBox from "./WideBox.vue";

Vue.component("Structure", {
  render: function(createElement) {
    return createElement("div", [
      this.structureArray.map((s) => {
        if (s == 1 || s == 2 || s == 3) {
          return createElement(
            Box,
            {
              attrs: {
                boxType: parseInt(s),
                primary: this.primary,
              },
            },
            ""
          );
        } else if (s == 0) {
          return createElement("br", "");
        } else if (s == 4 || s == 5) {
          return createElement(
            Button,
            {
              attrs: {
                primary: this.primary,
                buttonType: parseInt(s),
              },
            },
            ""
          );
        } else if (s == 6) {
          return createElement(
            ProfileCircle,
            {
              attrs: {
                primary: this.primary,
              },
            },
            ""
          );
        } else if (s == 7) {
          return createElement(
            WideBox,
            {
              attrs: {
                primary: this.primary,
              },
            },
            ""
          );
        }
      }),
    ]);
  },
  props: {
    structureArray: {
      type: Array,
      required: true,
    },
    primary: {
      type: String,
      required: true,
    },
  },
});
