<template>
  <div class="page">
    <form @submit.prevent="formSubmit">
      <input v-model="username" type="text" placeholder="username" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: localStorage.username ? localStorage.username : "",
    };
  },
  methods: {
    async formSubmit() {
      try {
        const url = `http://192.168.0.104:8000/api/user-exist/${this.username}/`;

        const response = await axios.get(url);

        if (response.status === 200 && response.data.user_exist === true) {
          localStorage.setItem(`username`, this.username);

          this.$router.push('/auth/sign-in')
        } else if (response.status === 200 && response.data.user_exist === false) {
          localStorage.setItem(`username`, this.username);

          this.$router.push('/auth/sign-up')
        }
      } catch (error) {
        console.log(error);
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
