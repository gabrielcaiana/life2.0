<template>
  <div>
    <v-menu
      v-for="([text, rounded], index) in btns"
      :key="`${text}-${index}`"
      :rounded="rounded"
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="black--text ma-5"
          v-bind="attrs"
          v-on="on"
          depressed
        >
          {{ text }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          @click="items.length - 1 == index ? logout() : null"
          v-for="(item, index) in items"
          :key="`${item}-${index}`"
          :to="item.to"
          link
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    btns: [["Menu"]],
    items: [
      {
        text: "Perfil",
        to: "/perfil",
      },
      {
        text: "Sair",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
