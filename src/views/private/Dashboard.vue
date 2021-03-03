<template>
  <div class="dashboard">
    <h1 class="dashboard__title title--text">Dashboard</h1>
    <p class="dashboard__welcome text--text">Bem vindo <b>Gabriel Caiana</b></p>

    <p class="dashboard__tips text--text">
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
          :status="`Data: 23/02/2021`"
          :color="'height-text'"
          :icon="'/icons/height.svg'"
        />
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <Card
          :shadow="'heart'"
          :title="'Pressão Arterial'"
          :subtitle="`12/06`"
          :status="`Normal`"
          :color="'heart-text'"
          :icon="'/icons/heart.svg'"
        />
      </v-col>
    </v-row>
    <h2 class="dashboard__subtitle title--text">O que deseja ver?</h2>

    <div class="dashboard__options">
      <CardsOutline
        icon="/icons/card_peso.svg"
        title="Peso"
        border="border-height"
        url="/peso"
				color="height-text"
      />

      <CardsOutline
        icon="/icons/card_alimentos.svg"
        title="Alimentos"
        border="border-foods"
        url="/alimentos"
				color="food-text "
      />

      <CardsOutline
        icon="/icons/card_pressao.svg"
        title="Pressão Arterial"
        border="border-heart"
        url="/pressao-arterial"
				color="heart-text"
      />

      <CardsOutline
        icon="/icons/card_atividades.svg"
        title="Atividades Fisicas"
        border="border-physical-activities"
        url="/atividades-fisicas"
				color="physical-activities-text"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/commons/Card";
import CardsOutline from "../../components/commons/CardOutline";
export default {
  components: {
    Card,
    CardsOutline,
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
    font-size: 1.4em;
    margin: 42px 0;
    text-align: center;
  }

  &__options {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
  }
}
</style>
