<template>
  <v-app>
    <app-bar />
    <v-main class="mt-5 bg">
      <v-container class="container pa-4" fluid>
				<router-view />
			</v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "../../components/AppBar";
export default {
  components: { AppBar }
};
</script>

<style scoped>
.container {
  height: 100%;
	max-width: 1440px;
}
</style>
