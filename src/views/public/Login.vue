<template>
  <v-app>
    <v-main>
      <v-container fluid class="container bgContent">
        <FormLogin @login="autenticar($event)" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FormLogin from "../../components/FormLogin";
export default {
  components: {
    FormLogin,
  },

  methods: {
    autenticar($event) {
      this.$store.dispatch("authentication/login", $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
