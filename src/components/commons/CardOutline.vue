<template>
  <div class="card bgContent" :class="border">
    <img class="card__icon" :src="icon" :alt="title" />
    <router-link class="card__link" :to="url">
      <p class="card__title text--text">{{ title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    border: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 32px 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 16px;

  @media (min-width: 850px) {
    margin: 12px;
    width: 340px;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  &__icon {
    margin-bottom: 32px;
  }
  &__title {
    font-weight: 600;
    font-size: 16px;
    text-align: center;
  }

  &__link {
    text-decoration: none;
  }
}
</style>
