<template>
  <nav class="categories" :class="{ categories_modal: isModal }">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isModal: Boolean,
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
.categories
  ul
    display: flex
    flex-direction: column

    row-gap: rem(12)

  &.categories_modal
    position: absolute

    top: 50%
    left: 50%

    transform: translate(-50%, -50%)

    ul
      align-items: center

      row-gap: rem(16)
</style>
