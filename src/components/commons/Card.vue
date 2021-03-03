<template>
  <div class="item d-flex bgContent">
    <div class="item__icon">
      <img :src="icon" :alt="title" />
    </div>
    <div class="item__content">
      <p class="item__content__title text--text">{{ title }}</p>
      <span class="item__content__subtitle subtitle--text" :class="color">{{ subtitle }}</span>
      <span class="item__content__status text--text"><b></b> {{ status }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shadow: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      required: true
    },
    status: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
	width: 100%;
  border-radius: 10px;
  padding: 30px;
	box-sizing: border-box;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    &__title {
      font-weight: normal;
      font-size: 1.3em;
      margin: 0;

			@media(max-width: 900px) {
				font-size: 1em;
			}
    }

    &__subtitle {
      font-size: 2.2em;

			@media(max-width: 900px) {
				font-size: 1.6em;
			}
    }
  }
}
</style>
