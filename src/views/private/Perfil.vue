<template>
  <div class="profile">
		<h2>Perfil</h2>
		<p>Informações do seu usuário</p>
    <validation-observer ref="observer">
      <form @submit.prevent="submit">
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <validation-provider
              v-slot="{ errors }"
              name="name"
              rules="required|max:255"
            >
              <v-text-field
                v-model="profile.name"
                :counter="255"
                :error-messages="errors"
                label="Nome"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-divider></v-divider>

          <v-col cols="12" sm="6" md="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="profile.date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <validation-provider
                  v-slot="{ errors }"
                  name="date"
                  rules="required"
                >
                  <v-text-field
                    v-model="profile.date"
                    label="Data de nascimento"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
              </template>
              <v-date-picker v-model="profile.date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancelar
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(profile.date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6" md="6">
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="profile.email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <validation-provider
              v-slot="{ errors }"
              name="height"
              rules="required"
            >
              <v-text-field
                v-model="profile.height"
                :error-messages="errors"
                label="Altura"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12" md="12" class="px-3">
            <p>Genêro</p>

            <v-radio-group v-model="profile.gender">
              <template v-slot:label> </template>
              <v-radio value="m">
                <template v-slot:label>
                  <div>Masculino</div>
                </template>
              </v-radio>
              <v-radio value="f">
                <template v-slot:label>
                  <div>Feminino</div>
                </template>
              </v-radio>
              <v-radio value="b">
                <template v-slot:label>
                  <div>Não binário</div>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-btn class="mr-4 btn primary mt-4" type="submit" depressed>
          Salvar
        </v-btn>

        <v-btn to="/dashboard" class="btn mt-4" outlined>
          Voltar
        </v-btn>
      </form>
    </validation-observer>
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
import { mapGetters } from "vuex";
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
    profile: {
      name: "",
      date: "",
      email: "",
      height: "",
      gender: "",
      password: "",
      newPassword: "",
    },
    menu: "",
    show1: false,
    show2: false,
    rules: {
      required: (value) => !!value || "Required.",
      emailMatch: () => `O e-mail e a senha que você digitou não correspondem`,
    },
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  background: $color-white;
  padding: 32px;
  border-radius: 12px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>
