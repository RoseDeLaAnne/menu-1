<template>
  <div class="page">
    <h1>SignUp</h1>

    <router-link to="/auth">To Auth</router-link>

    <form @submit.prevent="formSubmit">
      <input v-model="password" type="password" placeholder="password" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";

import { setCookie } from "@/utils/cookie";

export default {
  data() {
    return {
      username: localStorage.username ? localStorage.username : "",
      password: "",
    };
  },
  methods: {
    async formSubmit() {
      const url = `http://192.168.0.104:8000/api/sign-up/`;
      const json = {
        username: this.username,
        password: this.password,
      };

      const response = await axios.post(url, json);

      if (response.status === 201) {
        this.$router.push("/auth/sign-in");

        console.log("SignUp, formSubmit / 201");
      }
    },
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
//
</style>
