<template>
  <div class="page">
    <h1>SignIn</h1>

    <router-link to="/auth">To Auth</router-link>

    <form @submit.prevent="formSubmit">
      <!-- <input v-model="username" type="text" placeholder="username" /> -->
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
      const url = `http://192.168.0.104:8000/api/token/`;
      const json = {
        username: this.username,
        password: this.password,
      };

      const response = await axios.post(url, json);

      if (response.status === 200) {
        const accessToken = response.data.access;
        const refreshToken = response.data.refresh;

        setCookie(
          `accessToken`,
          accessToken,
          new Date(jwt_decode(accessToken).exp * 1000)
        );
        setCookie(
          `refreshToken`,
          refreshToken,
          new Date(jwt_decode(refreshToken).exp * 1000)
        );
        this.$store.commit("setAccessToken", accessToken);
        this.$store.commit("setRefreshToken", refreshToken);

        localStorage.removeItem("username");

        this.$router.push("/menu");

        console.log("SignIn, formSubmit / 200");
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
