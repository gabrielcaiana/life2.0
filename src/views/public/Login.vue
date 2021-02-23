<template>
	<v-app>
		<v-main>
			<v-container fluid class="container">
				<FormLogin />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import FormLogin from '../../components/FormLogin'
	export default {
		components: {
			FormLogin
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #eee;
	}
</style>