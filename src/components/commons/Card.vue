<template>
  <div class="item d-flex" :class="shadow">
    <div class="item__icon">
      <img :src="icon" :alt="title" />
    </div>
    <div class="item__content">
      <p class="item__content__title">{{ title }}</p>
      <span class="item__content__subtitle" :class="color">{{ subtitle }}</span>
      <span class="item__content__status"><b></b> {{ status }}</span>
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
  background: $color-white;
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
      color: $color-text;
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

.imc {
  box-shadow: 0px 5px 20px rgba(244, 67, 54, 0.2);
}

.imc-text {
  color: $color-red;
}

.height {
  box-shadow: 0px 5px 20px rgba(117, 221, 221, 0.3);
}

.height-text {
  color: $color-green-light;
}

.heart {
  box-shadow: 0px 5px 20px rgba(9, 188, 138, 0.2);
}

.heart-text {
  color: $color-text-secundary;
}
</style>
