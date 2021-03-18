<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="menu">
        <Menu />
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list flat>
        <v-subheader class="my-4">
          <img src="@/assets/images/logo.svg" alt="" />
        </v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="{ name: item.name }"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-switch
            @click="toggleTheme"
            v-model="switch1"
            class="ml-3"
            :label="`Dark mode`"
          ></v-switch>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    Menu,
  },

  data: () => ({
    drawer: false,
    switch1: true,
    selectedItem: 0,
    items: [
      { text: "Dashboard", icon: "mdi-view-dashboard", name: "dashboard" },
      { text: "Peso", icon: "mdi-wallet", name: "peso" },
      { text: "Alimentos", icon: "mdi-food-variant", name: "alimentos" },
      { text: "Pressão Arterial", icon: "mdi-heart", name: "pressao-arterial" },
      {
        text: "Atividades Físicas",
        icon: "mdi-bike",
        name: "atividades-fisicas",
      },
    ],
  }),

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
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
