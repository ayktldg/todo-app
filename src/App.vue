<template>
  <div id="app">
    <TheNavigation />
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import TheNavigation from "./components/TheNavigation";
export default {
  name: "App",
  components: {
    TheNavigation,
  },
};
</script>
<style scoped>
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(50px);
}
.page-enter-active,
.page-leave {
  transition: all 0.5s;
}
</style>