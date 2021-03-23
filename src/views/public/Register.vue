<template>
  <v-app>
    <v-main>
      <v-container fluid class="container bgContent">
        <Register @register="submit($event)" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Register from "../../components/FormRegister";
export default {
  components: {
    Register,
  },

  methods: {
    submit($event) {
      this.$store.dispatch("register/register", $event)
      this.$router.push({name: 'login'})
    }
  }
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
