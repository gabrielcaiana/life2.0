<template id="app">
  <div>
    <SnackBar :configSnack="snackbar" />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import SnackBar from './components/commons/SnackBar'
import { mapState } from 'vuex'
export default {
  components: {
    SnackBar
  },

   computed: {
    ...mapState(['snackbar'])
  }
};
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
