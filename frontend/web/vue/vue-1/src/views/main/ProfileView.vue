<template>
  <div class="page">
    <Header :data="headerData" />

    <button @click="sendMessage">Send Message</button>

    <!-- <button @click="connectMyProfile">Connect My Profile</button> -->
    <a :href="`https://t.me/menuApp1_bot?start=${$store.state.jti}`" target="_blank">Connect My Profile</a>
  </div>
</template>

<script>
import { mapState } from "vuex";

import axios from "axios";

import Header from '@/components/main/TheHeader.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      token: '5902143517:AAGgKXov6bsCFGCrQI5jCcxz5Oe1UBJV2Ks'
    }
  },
  computed: {
    ...mapState({
      headerData: (state) => state.profile.headerData,
    }),
  },
  methods: {
    async getUpdates() {
      const url = `https://api.telegram.org/bot${this.token}/getUpdates`;

      const response = await axios.get(url);
    },
    async sendMessage() {
      const url = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.$store.state.telegramUserId}&text=Hello&parse_mode=HTML`;
      
      const response = await axios.get(url)
    },
  },
  mounted() {
    this.getUpdates();
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
//
</style>
