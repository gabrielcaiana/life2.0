<template>
  <v-app>
    <app-bar />
		<drawer />

    <v-main>
      <v-container class="container pa-4" fluid>
				<router-view />
			</v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "../../components/AppBar";
import Drawer from '../../components/Drawer.vue';
export default {
  components: { AppBar, Drawer }
};
</script>

<style scoped>
.container {
  height: 100%;
	max-width: 1440px;
}
</style>
