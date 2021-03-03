<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawerToggle()"></v-app-bar-nav-icon>
    <div class="menu">
      <Menu />
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "./Menu";
export default {
  components: {
    Menu,
  },

  data: () => ({
  }),

  computed: {
    ...mapGetters("drawer", ["drawer"]),
  },

  methods: {
    drawerToggle() {
      this.$store.dispatch("drawer/openOrCloseDrawer", !this.drawer);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  right: 0;
}
</style>
