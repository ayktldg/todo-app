import Vue from "vue";

Vue.directive("cardClass", {
  bind(el, binding) {
    const colorArray = ["bg-info", "bg-danger", "bg-primary", "bg-success"];
    const cardColor = colorArray[binding.value];
    el.className = `col mt-3 ${cardColor}`;
  },
});
