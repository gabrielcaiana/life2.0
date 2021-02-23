<template>
  <div class="dashboard">
		<h1 class="dashboard__title">Dashboard</h1>
    <v-row class="darshboard__cards">
      <v-col xs="12" sm="6" md="4">
        <Card
          :shadow="'imc'"
          :title="'IMC'"
          :subtitle="26.5"
          :status="statusIMC"
          :color="'imc-text'"
          :icon="'/icons/imc.svg'"
        />
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <Card
          :shadow="'height'"
          :title="'Peso'"
          :subtitle="'90Kg'"
          :status="`registrado em: 23/02/2021`"
          :color="'height-text'"
          :icon="'/icons/height.svg'"
        />
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <Card
          :shadow="'heart'"
          :title="'Pressão Arterial'"
          :subtitle="`Verificando...`"
          :status="`Verificando...`"
          :color="'heart-text'"
          :icon="'/icons/heart.svg'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from "../../components/commons/Card";
export default {
  components: {
    Card,
  },

  data: () => ({
    imc: "",
    statusIMC: "Você está acima do peso",
  }),
};
</script>

<style lang="scss" scoped>
	.dashboard {
		&__title {
			font-size: 2em;
			color: $color-secundary;
			margin: 32px 0;

			@media(max-width: 900px) {
				font-size: 1.6em;
				margin: 24px 0;
			}
		}
	}
</style>
