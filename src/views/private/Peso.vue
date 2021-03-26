<template>
  <div>
    <h1>Peso</h1>
    <Table :headers="headers" />
  </div>
</template>

<script>
import Table from "../../components/commons/Tables/Table.vue";
export default {
  components: { Table },

  data: () => ({
    headers: [
      { text: "Dessert (100g serving)", value: "name"},
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "actions"},
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
