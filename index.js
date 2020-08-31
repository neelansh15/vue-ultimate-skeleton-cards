import SkeletonCard from "./Components/SkeletonCard.vue";
import SkeletonScaffold from "./Components/SkeletonScaffold.vue";

//Dependencies
import tinycolor from "tinycolor2";

export default {
  install(Vue) {
    Vue.component("SkeletonCard", SkeletonCard);
    Vue.component("SkeletonScaffold", SkeletonScaffold);

    Vue.directive("mBox", {
      inserted(el) {
        el.classList.add("skeleton-box");

        let ref = el.parentElement;
        while (ref.style.background == "") ref = ref.parentElement;

        el.style.backgroundColor = tinycolor(ref.style.backgroundColor)
          .darken(3)
          .toString();
      },
    });

    Vue.directive("mDark", {
      inserted(el) {
        let ref = el.parentElement;
        while (ref.style.background == "") ref = ref.parentElement;

        el.style.backgroundColor = tinycolor(ref.style.backgroundColor)
          .darken()
          .toString();
      },
    });

    Vue.directive("mLight", {
      inserted(el) {
        let ref = el.parentElement;
        while (ref.style.background == "") ref = ref.parentElement;

        el.style.backgroundColor = tinycolor(ref.style.backgroundColor)
          .lighten()
          .toString();
      },
    });

    Vue.directive("mRandomWidth", {
      inserted(el) {
        el.style.width = (50 + Math.floor(Math.random() * 40)).toString() + "%";
      },
    });

    Vue.directive("mButton", {
      inserted(el) {
        el.classList.add("skeleton-button");

        //Cool trick to reach parent element's background
        let ref = el.parentElement;
        while (ref.style.background == "") {
          ref = ref.parentElement;
        }

        el.style.background = tinycolor(ref.style.background)
          .darken(5)
          .toString();
      },
    });

    Vue.directive("mSquare", {
      inserted(el) {
        el.classList.add("skeleton-square");

        //Cool trick to reach parent element's background
        let ref = el.parentElement;
        while (ref.style.background == "") {
          ref = ref.parentElement;
        }

        el.style.background = tinycolor(ref.style.background)
          .darken()
          .toString();
      },
    });

    Vue.directive("mCardImg", {
      inserted(el) {
        el.classList.add("widebox");

        for(let i = 0; i < 6; i++){
          el.after(document.createElement("br"))
        }

        let ref = el.parentElement;
        while (ref.style.background == "") {
          ref = ref.parentElement;
        }

        el.style.background = tinycolor(ref.style.background)
          .darken()
          .toString();
      },
    });
  },
};
