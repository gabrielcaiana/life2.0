<template>
  <v-app>
    <v-main>
      <v-container fluid class="container">
        <Register />
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
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
}
</style>
