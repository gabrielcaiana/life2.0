<template>
  <div class="login">
    <div class="login__logo">
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>

    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="efetuarLogin">
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="user.email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required"
        >
          <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="email"
            label="Senha"
            @click:append="show1 = !show1"
            :error-messages="errors"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn
          class="mr-4 primary mt-4 rounded-pill"
          type="submit"
          :disabled="invalid"
          depressed
          width="100%"
        >
          Entrar
        </v-btn>
      </form>
    </validation-observer>
    <div>
      <p class="pt-4 login__register">
        Ainda não tem uma conta?
        <router-link to="/register"><b> Faça agora mesmo! </b></router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} não pode estar vazio",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    user: {
      password: "",
      email: "",
    },
    menu: "",
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      emailMatch: () => `O e-mail e a senha que você digitou não correspondem`,
    },
  }),

  methods: {
    efetuarLogin() {
      this.$refs.observer.validate();
      this.$store.dispatch("authentication/login", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 90%;
  max-width: 400px;
  background: $color-white;
  padding: 32px;
  border-radius: 12px;

  &__logo {
    display: flex;
    justify-content: center;
  }

  &__register {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
