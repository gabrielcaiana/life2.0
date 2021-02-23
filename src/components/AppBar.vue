<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawerToggle()"></v-app-bar-nav-icon>

    <v-toolbar-title>Life Healthy</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
	data:() => ({
	}),

		computed: {
		...mapGetters('drawer', ['drawer'])
	},

	methods: {
		drawerToggle() {
			this.$store.dispatch('drawer/openOrCloseDrawer', !this.drawer)
		}
	}
};
</script>

<style lang="scss" scoped></style>
