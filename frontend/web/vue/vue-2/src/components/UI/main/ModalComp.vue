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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isActive: Boolean,
  },
  setup() {
    //
  },
});
</script>

<style lang="sass" scoped>
@import @/assets/styles/functions
@import @/assets/styles/mixins
@import @/assets/styles/variables

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
  right: rem(32)

  cursor: pointer

  @include mediaW($mobile-l)
    top: rem(32)
    right: rem(24)

  @include mediaW($mobile-xs)
    top: rem(36)
    right: rem(16)

.close__icon
  width: rem(32)
  height: rem(32)

  fill: #fff

  @include mediaW($mobile-xs)
    width: rem(24)
    height: rem(24)

.modal__inner
  width: 100%
  height: 100%
</style>
