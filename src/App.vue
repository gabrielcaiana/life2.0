<template id="app">
  <transition name="slide" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
