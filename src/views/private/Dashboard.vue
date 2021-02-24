<template>
  <div class="dashboard">
    <h1 class="dashboard__title">Dashboard</h1>
    <p class="dashboard__welcome">Bem vindo <b>Gabriel Caiana</b> </p>

    <p class="dashboard__tips">
      Aproveitei o dia para se alimentar bem e práticar algum tipo de esporte.
    </p>

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
    <h2 class="dashboard__subtitle">O que deseja ver?</h2>
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
    margin: 32px 0 8px 0;

    @media (max-width: 900px) {
      font-size: 1.6em;
      margin: 24px 0;
    }

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  &__welcome {
    font-size: 1.1em;
    color: rgb(65, 65, 65);
		margin: 4px 0;

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  &__tips {
    font-size: 0.9em;
    color: rgb(150, 150, 150);

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  &__subtitle {
    color: $color-text-secundary;
    font-size: 1.4em;
    margin: 42px 0;
    text-align: center;
  }
}
</style>
