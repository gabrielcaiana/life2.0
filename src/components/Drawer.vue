<template>
  <v-navigation-drawer :value="drawer" app>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
	data: () => ({}),

		computed: {
		...mapGetters('drawer', ['drawer'])
	}
};
</script>

<style lang="scss" scoped></style>
