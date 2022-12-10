<template>
  <router-view />
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
  setup() {
    //
  },
};
</script>
