<template>
  <div class="modal">
    <div @click="$emit('closeModal')" class="close">
      <svg class="close__icon">
        <use href="@/assets/icons/sprites.svg#close" />
      </svg>
    </div>
    <div class="modal__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
.modal
  position: fixed

  top: 0
  right: 0
  bottom: 0
  left: 0

  background-color: rgba(#000, .5)
  backdrop-filter: blur(rem(10))

.close
  position: fixed

  top: rem(56)
  right: rem(56)

  cursor: pointer

  @include mediaW($md)
    top: rem(36)
    @include adaptiveValue('right', 16, 32, 768, 320)

  @include mediaW($mobile-s)
    right: rem(16)

.close__icon
  width: rem(32)
  height: rem(32)

  fill: #fff

  @include mediaW($md)
    @include adaptiveValue('width', 24, 32, 768, 320)
    @include adaptiveValue('height', 24, 32, 768, 320)

  @include mediaW($mobile-s)
    width: rem(24)
    height: rem(24)

.modal__inner
  width: 100%
  height: 100%
</style>
