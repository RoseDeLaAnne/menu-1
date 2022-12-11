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

  cursor: pointer

  @include adaptiveValue('top', 32, 56, 1920, 425)
  @include adaptiveValue('right', 24, 32, 1920, 425)

  @include mediaW($mobile-l)
    @include adaptiveValue('top', 36, 32, 425, 320)
    @include adaptiveValue('right', 16, 24, 425, 320)

  @include mediaW($mobile-s)
    top: rem(36)
    right: rem(16)

.close__icon
  @include adaptiveValue('width', 24, 32, 1920, 320)
  @include adaptiveValue('height', 24, 32, 1920, 320)

  fill: #fff

  @include mediaW($mobile-s)
    width: rem(24)
    height: rem(24)

.modal__inner
  width: 100%
  height: 100%
</style>
