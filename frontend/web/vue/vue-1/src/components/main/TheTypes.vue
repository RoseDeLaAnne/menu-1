<template>
  <nav class="types" :class="{ types_modal: isModal }">
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
.types
  padding-left: rem(48)

  ul
    display: flex

    align-items: center

    column-gap: rem(32)

  &.types_modal
    padding-left: 0

    position: absolute

    bottom: rem(32)
    left: rem(32)

    @include mediaW($md)
      @include adaptiveValue('bottom', 24, 32, 768, 425)
      @include adaptiveValue('left', 24, 32, 768, 425)

    @include mediaW($mobile-l)
      @include adaptiveValue('left', 16, 24, 425, 320)

    @include mediaW($mobile-s)
      bottom: rem(24)
      left: rem(16)

    ul
      @include adaptiveValue('column-gap', 16, 24, 768, 320)

      @include mediaW($mobile-s)
        column-gap: rem(16)
</style>
